<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Vynkra Technologies | Architecting Tomorrow's Solutions</title>
    <meta name="description" content="Vynkra Technologies designs elite enterprise software, from automated inventory management systems to multi-tenant sports booking platforms. Explore our flagship projects.">
    <meta name="keywords" content="Vynkra, Vynkra Technologies, Vynkra Tech, Vynkra Software, software development, custom ERP, Laravel React, TurfBook, Hardware Shop Manager, SaaS, Bangalore Tech">
    <meta name="author" content="Vynkra Technologies">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Vynkra Technologies">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="Vynkra Technologies | Architecting Tomorrow's Solutions">
    <meta property="og:description" content="Vynkra Technologies designs elite business software, from inventory systems to multi-tenant sports turf solutions. Explore our flagship portals.">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:site" content="@vynkra">
    <meta property="twitter:title" content="Vynkra Technologies | Architecting Tomorrow's Solutions">
    <meta property="twitter:description" content="Vynkra Technologies designs elite business software, from inventory systems to multi-tenant sports turf solutions.">
    
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
</head>
<body>
    <div id="app"></div>
</body>
</html>
