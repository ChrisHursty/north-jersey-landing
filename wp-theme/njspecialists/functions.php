<?php
function njspecialists_enqueue_scripts() {
    $theme_uri = get_template_directory_uri();
    wp_enqueue_style('njspecialists-style', $theme_uri . '/assets/index-CS2maetr.css', [], '1.0');
    wp_enqueue_script('njspecialists-script', $theme_uri . '/assets/index-CGGahVPY.js', [], '1.0', true);
}
add_action('wp_enqueue_scripts', 'njspecialists_enqueue_scripts');

function njspecialists_customize_register($wp_customize) {
    $wp_customize->add_section('njspecialists_hero', [
        'title'    => __('Hero Settings', 'njspecialists'),
        'priority' => 30,
    ]);

    $wp_customize->add_setting('njspecialists_tagline', [
        'default' => 'Professional Painting & Restoration Experts',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control('njspecialists_tagline', [
        'label' => __('Hero Tagline', 'njspecialists'),
        'section' => 'njspecialists_hero',
        'type' => 'text',
    ]);

    $wp_customize->add_setting('njspecialists_phone', [
        'default' => '973-927-1616',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control('njspecialists_phone', [
        'label' => __('Contact Phone', 'njspecialists'),
        'section' => 'njspecialists_hero',
        'type' => 'text',
    ]);
}
add_action('customize_register', 'njspecialists_customize_register');
function njspecialists_localize_settings() {
    $settings = [
        'tagline' => get_theme_mod('njspecialists_tagline', 'Professional Painting & Restoration Experts'),
        'phone'   => get_theme_mod('njspecialists_phone', '973-927-1616'),
    ];
    wp_localize_script('njspecialists-script', 'njspecialistsSettings', $settings);
}
add_action('wp_enqueue_scripts', 'njspecialists_localize_settings');

