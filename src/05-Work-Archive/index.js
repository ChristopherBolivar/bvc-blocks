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

import { useEffect, useState } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";

registerBlockType("buenavista-blocks/workarchive", {
	title: __("Work Archive", "buenavista-blocks"),
	icon: "arrow-down-alt2",
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

		//state for work logos
		const [work, setWork] = useState([]);

		//function using useEffect to get a query to the wordpress rest api for custom post type work
		useEffect(() => {
			apiFetch({
				path: `/wp/v2/work/?per_page=100`,
			})
				.then((posts) => {
					return posts;
				})
				.then((res) => {
					console.log(res);
					setWork(res);
				})
				.catch((error) => {
					if (error.name === "AbortError") {
						console.log("Request has been aborted");
					}
				});
		}, []);

		//function looping all the works and returning the work logo
		const workarchive = () => {
			if (work.length === 0) {
				return <p>Loading...</p>;
			}
			return work.map((work) => {
				return (
					<div className="buenavista-blocks-work-info-wrapper">
						<div className="buenavista-blocks-work-overlay">
							<div className="animated animatedFadeInUp fadeInUp">
							<h2>{work.title.rendered}</h2>
							<p>View Work</p>
							</div>
						</div>
						<div className="buenavista-blocks-work-image">
							<img src={work.fimg_url} />
						</div>
					</div>
				);
			});
		};

		return [
			<InspectorControls>
				<PanelBody
					title={__("Ripped Paper Cover Block", "buenavista-blocks_blocks")}
				>
					<div className="components-base-control">
						<div className="components-base-control__field">
							<label className="components-base-control__label">
								<h2>Arrow Width</h2>
								<InputControl
									value={arrowWidth}
									onChange={(width) => setAttributes({ arrowWidth: width })}
								/>
							</label>
						</div>
					</div>
					<div className="components-base-control">
						<div className="components-base-control__field">
							<label className="components-base-control__label">
								<h2>Arrow Color</h2>
								<ColorPalette
									value={arrowColor}
									onChange={(color) => setAttributes({ arrowColor: color })}
								/>
							</label>
						</div>
					</div>
					<div className="components-base-control">
						<div className="components-base-control__field">
							<label className="components-base-control__label">
								<h2>Achor Link</h2>
								<InputControl
									value={anchorLink}
									onChange={(anchor) => setAttributes({ anchorLink: anchor })}
								/>
							</label>
						</div>
					</div>
				</PanelBody>
			</InspectorControls>,
			<div className="buenavista-blocks-block buenavista-blocks-work-wrapper buenavista-blocks-editable">
				{workarchive()}
			</div>,
		];
	},
	save(props) {
		return null;
	},
});
