__d(
  "checkForSphericalTag",
  ["VideoSphericalMetadataUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("VideoSphericalMetadataUtil").parseXMLToDocument(e);
      if (!t) return !1;
      var n = t.getElementsByTagNameNS("*", "Spherical");
      if (n.length === 0) return !1;
      var r = n[0],
        a = r.childNodes[0].nodeValue;
      return a.toLowerCase() === "true";
    }
    l.default = e;
  },
  98,
);
