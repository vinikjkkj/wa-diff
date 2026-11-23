__d(
  "MAIBAPreviewPublishNamedIDFormatter",
  ["MAIBAPreviewPublishRawFieldValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("MAIBAPreviewPublishRawFieldValue").unwrapSingletonArray(e);
      if (typeof t == "number")
        return Number.isInteger(t) && t > 0 ? String(t) : null;
      if (typeof t != "string") return null;
      var n = o("MAIBAPreviewPublishRawFieldValue").unquote(t).trim();
      return /^[1-9]\d*$/.test(n) ? n : null;
    }
    function s(e, t) {
      return e + ":" + t;
    }
    function u(t, n, r) {
      var o = e(n);
      if (o == null) return null;
      var a = r == null ? void 0 : r.get(s(t, o));
      return a == null || a === "" ? o : a;
    }
    function c(e) {
      return "fb_pixel:" + e;
    }
    function d(t, n) {
      var r = e(t);
      if (r == null) return null;
      var o = n == null ? void 0 : n.get(c(r));
      return o == null || o === "" ? r : o;
    }
    ((l.formatEntityIDValue = u), (l.formatPixelIDValue = d));
  },
  98,
);
