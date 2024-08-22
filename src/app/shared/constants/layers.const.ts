declare var L:any;

export const LayersOpenMap = {
    TypeMap:{
        "Streets": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            //retina: '@2x',
            detectRetina: true
        }),
        "OpenTopoMap": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
            //retina: '@2x',
            detectRetina: true
        }),
        "EsriWorldPhysical": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: US National Park Service',
            maxZoom: 19,
            detectRetina: true
        }),
        "EsriWorldImagery": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
            maxZoom: 19,
            detectRetina: true
        })
    },
    FilterRegion:{
      "Departamento": L.tileLayer.wms('http://idesep.senamhi.gob.pe:80/geoserver/g_00_02/wms',{
          layers: 'g_00_02:00_02_002_03_000_000_0000_00_00',
          format: 'image/png',
          transparent: true,
          //retina: '@2x',
          detectRetina: true,
      }),
      "Provincia": L.tileLayer.wms('http://idesep.senamhi.gob.pe:80/geoserver/g_00_02/wms', {
        layers: 'g_00_02:00_02_003_03_000_000_0000_00_00',
        format: 'image/png',
        transparent: true,
        //retina: '@2x',
        detectRetina: true,
      }),
      "Distrito": L.tileLayer.wms('https://idesep.senamhi.gob.pe:443/geoserver/g_carto_fundamento/wms', {
        layers: 'g_carto_fundamento:distritos',
        format: 'image/png',
        transparent: true,
        //retina: '@2x',
        detectRetina: true,
      })
    }
  };
