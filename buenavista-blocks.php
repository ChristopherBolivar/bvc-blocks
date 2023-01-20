<?php
/**
 * Plugin Name:       Buenavista Blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Christopher Bolivar
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       buenavista-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_buenavista_blocks_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_buenavista_blocks_block_init' );


//register all blocks


// register cover header block
function register_cover_header_block() {
	wp_register_script(
		'plantsection-block',
		plugins_url( 'plantsection/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' )
	);

	register_block_type( 'buenavista-blocks/plantsection', array(
		'editor_script' => 'plantsection-block',
	) );
}
add_action( 'init', 'register_cover_header_block' );

//register bouncing arrow block
function register_bouncing_arrow_block() {
	wp_register_script(
		'bouncing-arrow-block',
		plugins_url( 'bouncing-arrow/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' )
	);

	register_block_type( 'buenavista-blocks/bouncing-arrow', array(
		'editor_script' => 'bouncing-arrow-block',
	) );
}

//register BVC Modal
function register_bvc_modal_block() {
	wp_register_script(
		'bvc-modal-block',
		plugins_url( 'bvcmodal/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' )
	);

	register_block_type( 'buenavista-blocks/bvcmodal', array(
		'editor_script' => 'bvc-modal-block',
	) );
}



//enqueue style-index.css in the frontend
function enqueue_style_index() {
	wp_enqueue_style( 'style-index', plugins_url( '/build/style-index.css', __FILE__ ) );
}
add_action( 'wp_enqueue_scripts', 'enqueue_style_index' );