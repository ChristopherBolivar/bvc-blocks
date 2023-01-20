const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, InnerBlocks, InspectorControls } = wp.editor;
const {
	Button,
	IconButton,
	SelectControl,
	PanelBody,
	ToggleControl,
	ColorPalette,
} = wp.components;

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
		}
	},
	supports: {
		align: ["center", "left", "right"],
	},

	edit: (props) => {
		// Props parameter holds all the info.
		// console.info(props);
		// Lift info from props and populate various constants.
		const {
			attributes: { arrowColor, arrowWidth, anchorLink },
			className,
			setAttributes,
		} = props;

		return [
			<InspectorControls>
				<PanelBody
					title={__("Ripped Paper Cover Block", "buenavista-blocks_blocks")}
				>
					<div className="components-base-control">
						<div className="components-base-control__field">
							<label className="components-base-control__label">
								<h2>Hello</h2>
								
							</label>
						</div>
					</div>
				
				</PanelBody>
			</InspectorControls>,
			<div className="buenavista-blocks-block buenavista-blocks-modal buenavista-blocks-editable">
               hello
			</div>,
		];
	},
	save: (props) => {
		// Lift info from props and populate various constants.
		const {
			attributes: { arrowColor, arrowWidth, anchorLink },
		} = props;

		return (
			<div className="buenavista-blocks-block buenavista-blocks-modal buenavista-blocks-editable">
               hello
			</div>
		);
	},
});
