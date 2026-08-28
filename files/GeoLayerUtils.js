__d(
  "GeoLayerUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case "left":
          return "start";
        case "center":
          return "middle";
        case "right":
          return "end";
      }
      var t = new Error("Unknown align");
      throw (t.stack, t);
    }
    function l(e) {
      switch (e) {
        case "below":
          return "below";
        case "above":
          return "above";
        case "left":
          return "start";
        case "right":
          return "end";
      }
      var t = new Error("Unknown position");
      throw (t.stack, t);
    }
    function s(e) {
      switch (e) {
        case "below":
          return "below";
        case "above":
          return "above";
        case "start":
          return "left";
        case "end":
          return "right";
      }
      var t = new Error("Unknown position");
      throw (t.stack, t);
    }
    ((i.mapAlign = e), (i.mapPosition = l), (i.mapGeoPosition = s));
  },
  66,
);
