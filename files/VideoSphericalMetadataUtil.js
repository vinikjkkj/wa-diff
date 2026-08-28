__d(
  "VideoSphericalMetadataUtil",
  ["SphericalVideoMetadataTags", "VideoProjection", "VideoStereoFormat"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!e) return null;
      var t = e.replace(/\0/g, ""),
        n;
      if (window.DOMParser) {
        var r = new DOMParser();
        n = r.parseFromString(t, "text/xml");
      } else
        ((n = new window.ActiveXObject("Microsoft.XMLDOM")),
          (n.async = "false"),
          n.loadXML(t));
      return n;
    }
    function s(e) {
      return Object.values(r("VideoProjection")).includes(e) ? e : null;
    }
    function u(e) {
      return Object.values(r("VideoStereoFormat")).includes(e) ? e : null;
    }
    function c(e) {
      for (
        var t = e.getElementsByTagNameNS("*", "*"), n = null, o = 0;
        o < t.length;
        o++
      ) {
        var a = t[o],
          i = a.nodeName,
          l = a.parentElement;
        if (
          i !== "parsererror" &&
          l &&
          l.nodeName !== "parsererror" &&
          Object.values(r("SphericalVideoMetadataTags").GSPHERICAL).indexOf(i) <
            0 &&
          Object.values(r("SphericalVideoMetadataTags").GSPHERICAL).indexOf(
            l.nodeName,
          ) < 0
        ) {
          n == null && (n = "");
          var s = a.outerHTML;
          n += "<" + i + s.slice(i.length + 1, -(i.length + 1)) + i + ">";
        }
      }
      return n;
    }
    function d(e, t, n, r, o) {
      if (
        t !== null &&
        n !== null &&
        r !== null &&
        o !== null &&
        e.projectionType === "equirectangular" &&
        (e.stereoMode === "left-right" || e.stereoMode === "top-bottom")
      ) {
        var a = parseInt(t, 10),
          i = parseInt(n, 10),
          l = parseInt(r, 10),
          s = parseInt(o, 10);
        if (Math.abs(a - l / 2) <= 1 && Math.abs(i - s) <= 1) return !0;
      }
      return !1;
    }
    function m(e, t, n) {
      return new File([e], t, { type: n });
    }
    function p(e) {
      for (
        var t = new ArrayBuffer(e.length), n = new DataView(t), r = 0;
        r < e.length;
        r++
      )
        n.setUint8(r, e.charCodeAt(r));
      return t;
    }
    function _(e, t, n) {
      var r = e.buffer;
      return m(r, t, n);
    }
    function f(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    ((l.parseXMLToDocument = e),
      (l.stringToProjectionType = s),
      (l.stringToStereoMode = u),
      (l.getUnsupportedGSphericalTagsXML = c),
      (l.isGoogleVR180 = d),
      (l.arrayBufferToFile = m),
      (l.stringToArrayBuffer = p),
      (l.bufferToFile = _),
      (l.uuidArrayEquals = f));
  },
  98,
);
