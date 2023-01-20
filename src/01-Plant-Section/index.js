const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, InnerBlocks, InspectorControls } = wp.editor;
const { PanelBody, ToggleControl } = wp.components;

import { __experimentalInputControl as InputControl } from "@wordpress/components";

registerBlockType("buenavista-blocks/plantsection", {
	title: __("Plant Section", "buenavista-blocks"),
	icon: "cover-image",
	category: "design",

	attributes: {
		toggleTopPlant: {
			type: "boolean",
			default: true,
		},
		toggleBottomPlant: {
			type: "boolean",
			default: true,
		},
		borderTopEnabled: {
			type: "boolean",
			default: false,
		},
		borderBottomEnabled: {
			type: "boolean",
			default: false,
		},
	},
	supports: {
		align: ["wide", "full"],
	},

	edit: (props) => {
		// Props parameter holds all the info.
		// console.info(props);
		// Lift info from props and populate various constants.
		const {
			attributes: { borderTopEnabled, borderBottomEnabled },
			className,
			setAttributes,
		} = props;

		const toggleTopBorderClass = borderTopEnabled ? "top-border " : "";
		const toggleBottomBorderClass = borderBottomEnabled ? "bottom-border " : "";

		return [
			<InspectorControls>
				<PanelBody
					title={__("Ripped Paper Cover Block", "buenavista-blocks_blocks")}
				>
					<div className="components-base-control">
						<div className="components-base-control__field">
							<label className="components-base-control__label">
								<ToggleControl
									label="Top Border"
									help={borderTopEnabled ? "Has Top Border." : "No Top Border."}
									checked={borderTopEnabled}
									onChange={(value) => {
										setAttributes({ borderTopEnabled: value });
									}}
								/>

								<ToggleControl
									label="Bottom Border"
									help={borderBottomEnabled ? "Has Bottom Border." : "No Bottom Border."}
									checked={borderBottomEnabled}
									onChange={(value) => {
										setAttributes({ borderBottomEnabled: value });
									}}
								/>
							</label>
						</div>
					</div>
				</PanelBody>
			</InspectorControls>,
			<div className={`buenavista-blocks-block buenavista-blocks-plant-section buenavista-blocks-editable buenavista-blocks__plants ${toggleTopBorderClass} ${toggleBottomBorderClass}`}>
				<InnerBlocks />
			</div>,
		];
	},
	save: (props) => {
		// Lift info from props and populate various constants.
		const {
			attributes: { borderTopEnabled, borderBottomEnabled },
		} = props;

    const toggleTopBorderClass = borderTopEnabled ? "top-border " : "";
		const toggleBottomBorderClass = borderBottomEnabled ? "bottom-border " : "";

		return (
			<div  className={`buenavista-blocks-block buenavista-blocks-plant-section buenavista-blocks-editable buenavista-blocks__plants ${toggleTopBorderClass} ${toggleBottomBorderClass}`}>
				<InnerBlocks.Content />
			</div>
		);
	},
});
