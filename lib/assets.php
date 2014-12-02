<?php

function add_assets() {
    wp_enqueue_style('main', get_template_directory_uri() . '/assets/css/main.css', false, null);

    wp_enqueue_script('vendor', get_template_directory_uri() . '/assets/js/vendor.js', array(), null, true);
}

add_action('wp_enqueue_scripts', 'add_assets', 100);
