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

//register Client logos
function register_client_logos_block() {
	wp_register_script(
		'clientLogos-block',
		plugins_url( 'clientLogos/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' )
	);

	register_block_type( 'buenavista-blocks/clientlogos', array(
		'editor_script' => 'clientLogos-block',
	) );
}



//display client logos dynamic block
function bvc_client_logos_dynamic_render_callback($attributes) {
	$posts = get_posts(array(
		'post_type' => 'clients',
		'posts_per_page' => -1,
		'orderby' => 'title',
		'order' => 'ASC'
	));

	$postsMarkup = '';

	
	foreach($posts as $post) {
		$postsMarkup .= '<div class="client-logo"><img src="' . get_the_post_thumbnail_url($post->ID) . '" alt="' . $post->post_title . '"/></div>';
	}

	$finalMarkup = '<div class="buenavista-blocks-client-marquee"><div class="client-logo-track">' . $postsMarkup . '</div></div>';


	return $finalMarkup;
}

function bvc_client_logos_dynamic() {
    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'bvc-client-logos-dynamic',
        plugins_url( 'build/block.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    register_block_type( 'buenavista-blocks/clientlogos', array(
        'api_version' => 2,
        'editor_script' => 'bvc-client-logos-dynamic',
        'render_callback' => 'bvc_client_logos_dynamic_render_callback'
    ) );

}
add_action( 'init', 'bvc_client_logos_dynamic' );

//register and display work archive dynamic block
function bvc_work_archive_dynamic_render_callback($attributes) {
	$posts = get_posts(array(
		'post_type' => 'work',
		'posts_per_page' => -1,
		'orderby' => 'title',
		'order' => 'ASC'
	));

	$postsMarkup = '';

	
	foreach($posts as $post) {
		$postsMarkup .= '<div class="buenavista-blocks-work-info-wrapper">
		<div class="buenavista-blocks-work-overlay">
		  <div class="animated animatedFadeInUp fadeInUp">
			<h2>'. $post->post_title .'</h2>
			<p><a href="' . get_permalink($post->ID) . '">View Work</a></p>
		  </div>
		</div>
		<div class="buenavista-blocks-work-image">
		  <img src="'. get_the_post_thumbnail_url($post->ID). '" />
		</div>
	  </div>';
	}

	$finalMarkup = '<div class="buenavista-blocks-work-wrapper">' . $postsMarkup . '</div>';

	return $finalMarkup;
}

function bvc_work_archive_dynamic() {
	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'bvc-work-archive-dynamic',
		plugins_url( 'build/block.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'buenavista-blocks/workarchive', array(
		'api_version' => 2,
		'editor_script' => 'bvc-work-archive-dynamic',
		'render_callback' => 'bvc_work_archive_dynamic_render_callback'
	) );

}
add_action( 'init', 'bvc_work_archive_dynamic' );

//enqueue style-index.css in the frontend
function enqueue_style_index() {
	wp_enqueue_style( 'style-index', plugins_url( '/build/style-index.css', __FILE__ ) );
	wp_enqueue_script( 'modal', plugin_dir_url( __FILE__ )  . '/build/modal.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_style_index' );

//Add featured image to rest api
add_action('rest_api_init', 'bvc_get_featured_img_rest_api' );
function bvc_get_featured_img_rest_api(){
    register_rest_field( array('clients', 'work'),
        'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image_wp_podcasts_305786',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}

function get_rest_featured_image_wp_podcasts_305786( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'large' );
        return $img[0];
    }
    return false;
}
