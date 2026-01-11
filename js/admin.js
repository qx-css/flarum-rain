app.initializers.add('qx-rain-effect-admin', function (app) {
    app.extensionData
        .for('qx-rain-effect')
        .registerSetting({
            setting: 'rain-effect.enabled',
            label: 'Enable Rain Effect',
            type: 'boolean'
        })
        .registerSetting({
            setting: 'rain-effect.intensity',
            label: 'Rain Intensity',
            type: 'range',
            min: 1,
            max: 100
        })
        .registerSetting({
            setting: 'rain-effect.color',
            label: 'Rain Color',
            type: 'color'
        });
});