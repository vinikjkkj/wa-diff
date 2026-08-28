__d(
  "KFManifest",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
      { name: "2D Transforms (translation, scale, rotate)" },
      { name: "Path" },
      { name: "Solid Fill" },
      { name: "Solid Stroke" },
      { name: "Linear Gradient Fill", moduleLoader: function (t) {} },
      { name: "Radial Gradient Fill", moduleLoader: function (t) {} },
      { name: "Bitmap" },
      { name: "Sublayers" },
      { name: "Subdocuments" },
      { name: "Time Offset" },
      { name: "Masking (clipping path)", moduleLoader: function (t) {} },
      { name: "Alpha Mattes", moduleLoader: function (t) {} },
      { name: "Plugins", isDeprecated: !0 },
      { name: "Sound", moduleLoader: function (t) {} },
      { name: "Random Precomp", moduleLoader: function (t) {} },
      { name: "TrimPath", moduleLoader: function (t) {} },
      { name: "LayerName" },
      { name: "LayerTags" },
      { name: "SubdocumentSwap", moduleLoader: function (t) {} },
      { name: "DynamicProperties", moduleLoader: function (t) {} },
      { name: "Vector Composite Order" },
      { name: "Progress Markers", moduleLoader: function (t) {} },
    ];
    function l(t, n) {
      for (var r = 0; r < e.length; r++)
        t & Math.pow(2, r) && e[r].moduleLoader && e[r].moduleLoader(n);
    }
    i.default = l;
  },
  66,
);
