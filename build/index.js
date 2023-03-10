/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/01-Plant-Section/index.js":
/*!***************************************!*\
  !*** ./src/01-Plant-Section/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  MediaUpload,
  RichText,
  InnerBlocks,
  InspectorControls
} = wp.editor;
const {
  PanelBody,
  ToggleControl
} = wp.components;

registerBlockType("buenavista-blocks/plantsection", {
  title: __("Plant Section", "buenavista-blocks"),
  icon: "cover-image",
  category: "design",
  attributes: {
    toggleTopPlant: {
      type: "boolean",
      default: true
    },
    toggleBottomPlant: {
      type: "boolean",
      default: true
    },
    borderTopEnabled: {
      type: "boolean",
      default: false
    },
    borderBottomEnabled: {
      type: "boolean",
      default: false
    }
  },
  supports: {
    align: ["wide", "full"]
  },
  edit: props => {
    // Props parameter holds all the info.
    // console.info(props);
    // Lift info from props and populate various constants.
    const {
      attributes: {
        borderTopEnabled,
        borderBottomEnabled
      },
      className,
      setAttributes
    } = props;
    const toggleTopBorderClass = borderTopEnabled ? "top-border " : "";
    const toggleBottomBorderClass = borderBottomEnabled ? "bottom-border " : "";
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Ripped Paper Cover Block", "buenavista-blocks_blocks")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Top Border",
      help: borderTopEnabled ? "Has Top Border." : "No Top Border.",
      checked: borderTopEnabled,
      onChange: value => {
        setAttributes({
          borderTopEnabled: value
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Bottom Border",
      help: borderBottomEnabled ? "Has Bottom Border." : "No Bottom Border.",
      checked: borderBottomEnabled,
      onChange: value => {
        setAttributes({
          borderBottomEnabled: value
        });
      }
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `buenavista-blocks-block buenavista-blocks-plant-section buenavista-blocks-editable buenavista-blocks__plants ${toggleTopBorderClass} ${toggleBottomBorderClass}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, null))];
  },
  save: props => {
    // Lift info from props and populate various constants.
    const {
      attributes: {
        borderTopEnabled,
        borderBottomEnabled
      }
    } = props;
    const toggleTopBorderClass = borderTopEnabled ? "top-border " : "";
    const toggleBottomBorderClass = borderBottomEnabled ? "bottom-border " : "";
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `buenavista-blocks-block buenavista-blocks-plant-section buenavista-blocks-editable buenavista-blocks__plants ${toggleTopBorderClass} ${toggleBottomBorderClass}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/02-Bouncing-Arrow/index.js":
/*!****************************************!*\
  !*** ./src/02-Bouncing-Arrow/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SVGComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SVGComponent.js */ "./src/SVGComponent.js");

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  MediaUpload,
  RichText,
  InnerBlocks,
  InspectorControls
} = wp.editor;
const {
  Button,
  IconButton,
  SelectControl,
  PanelBody,
  ToggleControl,
  ColorPalette
} = wp.components;


registerBlockType("buenavista-blocks/bouncingarrow", {
  title: __("Bouncing Arrow", "buenavista-blocks"),
  icon: "arrow-down-alt2",
  category: "design",
  attributes: {
    arrowColor: {
      type: "string",
      default: "#ffffff"
    },
    arrowWidth: {
      type: "string",
      default: "80px"
    },
    anchorLink: {
      type: "string",
      default: "#"
    }
  },
  supports: {
    align: ["center", "left", "right"]
  },
  edit: props => {
    // Props parameter holds all the info.
    // console.info(props);
    // Lift info from props and populate various constants.
    const {
      attributes: {
        arrowColor,
        arrowWidth,
        anchorLink
      },
      className,
      setAttributes
    } = props;
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Ripped Paper Cover Block", "buenavista-blocks_blocks")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Arrow Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
      value: arrowWidth,
      onChange: width => setAttributes({
        arrowWidth: width
      })
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Arrow Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: arrowColor,
      onChange: color => setAttributes({
        arrowColor: color
      })
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Achor Link"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
      value: anchorLink,
      onChange: anchor => setAttributes({
        anchorLink: anchor
      })
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "buenavista-blocks-block buenavista-blocks-bouncing-arrow buenavista-blocks-editable"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: anchorLink
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SVGComponent_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "bounce-arrow",
      props: {
        color: arrowColor,
        width: arrowWidth
      }
    })))];
  },
  save: props => {
    // Lift info from props and populate various constants.
    const {
      attributes: {
        arrowColor,
        arrowWidth,
        anchorLink
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "buenavista-blocks-block buenavista-blocks-bouncing-arrow buenavista-blocks-editable"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: anchorLink
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SVGComponent_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "bounce-arrow",
      props: {
        color: arrowColor,
        width: arrowWidth
      }
    })));
  }
});

/***/ }),

/***/ "./src/03-BVC-Modal/index.js":
/*!***********************************!*\
  !*** ./src/03-BVC-Modal/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SVGComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SVGComponent.js */ "./src/SVGComponent.js");

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  MediaUpload,
  RichText,
  InnerBlocks,
  InspectorControls
} = wp.editor;
const {
  PanelBody
} = wp.components;



registerBlockType("buenavista-blocks/bvcmodal", {
  title: __("Buena Vista Modal", "buenavista-blocks"),
  icon: "admin-page",
  category: "design",
  attributes: {
    arrowColor: {
      type: "string",
      default: "#ffffff"
    },
    arrowWidth: {
      type: "string",
      default: "80px"
    },
    anchorLink: {
      type: "string",
      default: "#"
    },
    modalId: {
      type: "string",
      default: window.location.hash.substring(1)
    }
  },
  supports: {
    align: ["center", "left", "right"]
  },
  edit: props => {
    // Props parameter holds all the info.
    // console.info(props);
    // Lift info from props and populate various constants.
    const {
      attributes: {
        modalId
      },
      className,
      setAttributes
    } = props;

    //useState if modal id equals the hash
    const [activeModal, setActivateModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      function handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash !== modalId) return;
        setActivateModal(true);
      }
      window.addEventListener("hashchange", handleHashChange, false);
      return () => {
        window.removeEventListener("hashchange", handleHashChange, false);
      };
    }, []);
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Ripped Paper Cover Block", "buenavista-blocks_blocks")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
      value: modalId,
      onChange: id => setAttributes({
        modalId: id
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: `#${modalId}`
    }, "Activate Modal"))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      "data-modal-id": modalId,
      className: `buenavista-blocks-block buenavista-blocks-modal buenavista-blocks-editable`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "exit-modal"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "innerBlockModal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, null)))];
  },
  save: props => {
    // Lift info from props and populate various constants.
    const {
      attributes: {
        modalId
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      "data-modal-id": modalId,
      className: `buenavista-blocks-block buenavista-blocks-modal modal-deactivate buenavista-blocks-editable`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "exit-modal"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "innerBlockModal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/04-Client-Logos/index.js":
/*!**************************************!*\
  !*** ./src/04-Client-Logos/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  MediaUpload,
  RichText,
  InnerBlocks,
  InspectorControls
} = wp.editor;
const {
  Button,
  IconButton,
  SelectControl,
  PanelBody,
  ToggleControl,
  ColorPalette
} = wp.components;



registerBlockType("buenavista-blocks/clientlogos", {
  title: __("Client Logos", "buenavista-blocks"),
  icon: "arrow-down-alt2",
  category: "design",
  attributes: {
    arrowColor: {
      type: "string",
      default: "#ffffff"
    },
    arrowWidth: {
      type: "string",
      default: "80px"
    },
    anchorLink: {
      type: "string",
      default: "#"
    }
  },
  supports: {
    align: ["center", "left", "right"]
  },
  edit: props => {
    // Props parameter holds all the info.
    // console.info(props);
    // Lift info from props and populate various constants.
    const {
      attributes: {
        arrowColor,
        arrowWidth,
        anchorLink
      },
      className,
      setAttributes
    } = props;

    //state for client logos
    const [client, setClient] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

    //function using useEffect to get a query to the wordpress rest api for custom post type client
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: `/wp/v2/clients/?per_page=100`
      }).then(posts => {
        return posts;
      }).then(res => {
        console.log(res);
        setClient(res);
      }).catch(error => {
        if (error.name === "AbortError") {
          console.log("Request has been aborted");
        }
      });
    }, []);

    //function looping all the clients and returning the client logo
    const clientLogos = () => {
      if (client.length === 0) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Loading...");
      }
      return client.map(client => {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "client-logo"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: client.fimg_url
        }));
      });
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Ripped Paper Cover Block", "buenavista-blocks_blocks")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Arrow Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
      value: arrowWidth,
      onChange: width => setAttributes({
        arrowWidth: width
      })
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Arrow Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: arrowColor,
      onChange: color => setAttributes({
        arrowColor: color
      })
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Achor Link"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
      value: anchorLink,
      onChange: anchor => setAttributes({
        anchorLink: anchor
      })
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "buenavista-blocks-block buenavista-blocks-client-marquee buenavista-blocks-editable"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "client-logo-track"
    }, clientLogos()))];
  },
  save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/05-Work-Archive/index.js":
/*!**************************************!*\
  !*** ./src/05-Work-Archive/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  MediaUpload,
  RichText,
  InnerBlocks,
  InspectorControls
} = wp.editor;
const {
  Button,
  IconButton,
  SelectControl,
  PanelBody,
  ToggleControl,
  ColorPalette
} = wp.components;



registerBlockType("buenavista-blocks/workarchive", {
  title: __("Work Archive", "buenavista-blocks"),
  icon: "arrow-down-alt2",
  category: "design",
  attributes: {
    arrowColor: {
      type: "string",
      default: "#ffffff"
    },
    arrowWidth: {
      type: "string",
      default: "80px"
    },
    anchorLink: {
      type: "string",
      default: "#"
    }
  },
  supports: {
    align: ["center", "left", "right"]
  },
  edit: props => {
    // Props parameter holds all the info.
    // console.info(props);
    // Lift info from props and populate various constants.
    const {
      attributes: {
        arrowColor,
        arrowWidth,
        anchorLink
      },
      className,
      setAttributes
    } = props;

    //state for work logos
    const [work, setWork] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

    //function using useEffect to get a query to the wordpress rest api for custom post type work
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: `/wp/v2/work/?per_page=100`
      }).then(posts => {
        return posts;
      }).then(res => {
        console.log(res);
        setWork(res);
      }).catch(error => {
        if (error.name === "AbortError") {
          console.log("Request has been aborted");
        }
      });
    }, []);

    //function looping all the works and returning the work logo
    const workarchive = () => {
      if (work.length === 0) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Loading...");
      }
      return work.map(work => {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "buenavista-blocks-work-info-wrapper"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "buenavista-blocks-work-overlay"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "animated animatedFadeInUp fadeInUp"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, work.title.rendered), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "View Work"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "buenavista-blocks-work-image"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: work.fimg_url
        })));
      });
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Ripped Paper Cover Block", "buenavista-blocks_blocks")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Arrow Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
      value: arrowWidth,
      onChange: width => setAttributes({
        arrowWidth: width
      })
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Arrow Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: arrowColor,
      onChange: color => setAttributes({
        arrowColor: color
      })
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Achor Link"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
      value: anchorLink,
      onChange: anchor => setAttributes({
        anchorLink: anchor
      })
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "buenavista-blocks-block buenavista-blocks-work-wrapper buenavista-blocks-editable"
    }, workarchive())];
  },
  save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/SVGComponent.js":
/*!*****************************!*\
  !*** ./src/SVGComponent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const SvgComponent = props => (console.log(props.props.color), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 330 330",
  className: "bounce",
  style: {
    enableBackground: "new 0 0 330 330",
    fill: props.props.color,
    maxWidth: props.props.width
  },
  xmlSpace: "preserve"
}, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
  d: "M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z"
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgComponent);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Buenavista Blocks ??? hello from the editor!', 'buenavista-blocks'));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _01_Plant_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./01-Plant-Section */ "./src/01-Plant-Section/index.js");
/* harmony import */ var _02_Bouncing_Arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./02-Bouncing-Arrow */ "./src/02-Bouncing-Arrow/index.js");
/* harmony import */ var _03_BVC_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./03-BVC-Modal */ "./src/03-BVC-Modal/index.js");
/* harmony import */ var _04_Client_Logos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./04-Client-Logos */ "./src/04-Client-Logos/index.js");
/* harmony import */ var _05_Work_Archive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./05-Work-Archive */ "./src/05-Work-Archive/index.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */








/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('create-block/buenavista-blocks', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Buenavista Blocks ??? hello from the saved content!', 'buenavista-blocks'));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbuenavista_blocks"] = self["webpackChunkbuenavista_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map