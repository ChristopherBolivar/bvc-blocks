const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, InnerBlocks, InspectorControls } = wp.editor;


const {
	
	PanelBody,
} = wp.components;

import { useEffect, useState } from "@wordpress/element";

import { __experimentalInputControl as InputControl } from "@wordpress/components";
import BouncingArrow from "../SVGComponent.js";

registerBlockType("buenavista-blocks/bvcmodal", {
	title: __("Buena Vista Modal", "buenavista-blocks"),
	icon: "admin-page",
	category: "design",

	attributes: {
		arrowColor: {
			type: "string",
			default: "#ffffff",
		},
		arrowWidth: {
			type: "string",
			default: "80px",
		},
		anchorLink: {
			type: "string",
			default: "#",
		},
		modalId: {
			type: "string",
			default: window.location.hash.substring(1),
		},
	},
	supports: {
		align: ["center", "left", "right"],
	},

	edit: (props) => {
		// Props parameter holds all the info.
		// console.info(props);
		// Lift info from props and populate various constants.
		const {
			attributes: { modalId },
			className,
			setAttributes,
		} = props;

		//useState if modal id equals the hash
		const [activeModal, setActivateModal ] = useState(false);
	

		useEffect(() => {
			function handleHashChange() {
			  const hash = window.location.hash.substring(1);
			  if(hash !== modalId) return;
			  setActivateModal(true);
			}
		
			window.addEventListener("hashchange", handleHashChange, false);
		
			return () => {
			  window.removeEventListener("hashchange", handleHashChange, false);
			};
		  }, []);

		
		return [
			<InspectorControls>
				<PanelBody
					title={__("Ripped Paper Cover Block", "buenavista-blocks_blocks")}
				>
					<div className="components-base-control">
						<div className="components-base-control__field">
							<label className="components-base-control__label">
							<InputControl
								value={ modalId }
								onChange={ ( id ) => setAttributes( { modalId: id } ) }
							/><br/>
								<button><a  href={`#${modalId}`}>Activate Modal</a></button>
							</label>
						</div>
					</div>
				</PanelBody>
			</InspectorControls>,
			<div data-modal-id={modalId} className={`buenavista-blocks-block buenavista-blocks-modal buenavista-blocks-editable`}>
				<InnerBlocks />
			</div>,
		];
	},
	save: (props) => {
		// Lift info from props and populate various constants.
		const {
			attributes: { modalId },
		} = props;

		return (
			<div data-modal-id={modalId} className={`buenavista-blocks-block buenavista-blocks-modal modal-deactivate buenavista-blocks-editable`}>
				<InnerBlocks.Content />
			</div>
		);
	},
});
