__d(
  "groupColorRGB",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^#?([a-fA-F\d])([a-fA-F\d])([a-fA-F\d])$/i,
      s = /^#?([a-fA-F\d]{2})([a-fA-F\d]{2})([a-fA-F\d]{2})$/i;
    function u(e, t, n, r) {
      r === void 0 && (r = !1);
      var o = r ? "#" : "";
      return o + d(e) + d(t) + d(n);
    }
    function c(e, t, n, r, o) {
      o === void 0 && (o = !1);
      var a = o ? "#" : "";
      return a + d(e) + d(t) + d(n) + d(r);
    }
    function d(e) {
      var t = e.toString(16);
      return t.length === 1 ? "0" + t : t;
    }
    var m = function (n) {
      var t = n.replace(e, function (e, t, n, r) {
          return t + t + n + n + r + r;
        }),
        r = s.exec(t);
      return r
        ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16), 1]
        : null;
    };
    function p(e) {
      var t = m(e);
      if (t == null)
        throw r("FBLogger")("group_color").mustfixThrow(
          "formatted hexcode must not be null",
        );
      return { b: t[2], g: t[1], r: t[0] };
    }
    ((l.rgbToHex = u), (l.rgbaToHex = c), (l.hexToRGBA = m), (l.hexToRgb = p));
  },
  98,
);
