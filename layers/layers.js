var wms_layers = [];

var lyr_5700_1910_modified_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "5700_1910_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/5700_1910_modified_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7154177.008651, 2192932.257532, 10512107.140565, 15064330.161499]
                            })
                        });

lyr_5700_1910_modified_0.setVisible(true);
var layersList = [lyr_5700_1910_modified_0];
