<?php

return [
    (new Flarum\Extend\Frontend('forum'))
        ->js(__DIR__.'/js/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    
    (new Flarum\Extend\Frontend('admin'))
        ->js(__DIR__.'/js/admin.js'),
    
    (new Flarum\Extend\Settings)
        ->serializeToForum('rainEffect.enabled', 'rain-effect.enabled', 'boolval', true)
        ->serializeToForum('rainEffect.intensity', 'rain-effect.intensity', 'intval', 50)
        ->serializeToForum('rainEffect.color', 'rain-effect.color', 'strval', '#ffffff'),
    
    new Flarum\Extend\Locales(__DIR__.'/locale')
];