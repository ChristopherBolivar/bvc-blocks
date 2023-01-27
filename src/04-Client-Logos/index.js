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

registerBlockType("buenavista-blocks/clientlogos", {
	title: __("Client Logos", "buenavista-blocks"),
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

		//state for client logos
		const [client, setClient] = useState([]);

		//function using useEffect to get a query to the wordpress rest api for custom post type client
		useEffect(() => {
			apiFetch({
				path: `/wp/v2/clients/?per_page=100`,
			})
				.then((posts) => {
					return posts;
				})
				.then((res) => {
					console.log(res);
					setClient(res);
				})
				.catch((error) => {
					if (error.name === "AbortError") {
						console.log("Request has been aborted");
					}
				});
		}, []);

		//function looping all the clients and returning the client logo
		const clientLogos = () => {
			if (client.length === 0) {
				return <p>Loading...</p>;
			}
			return client.map((client) => {
				return (
					<div className="client-logo">
						<img src={client.fimg_url} />
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
			<div className="buenavista-blocks-block buenavista-blocks-client-marquee buenavista-blocks-editable">
				<div className="client-logo-track">{clientLogos()}</div>
			</div>,
		];
	},
	save(props) {
		return null;
	},
});
