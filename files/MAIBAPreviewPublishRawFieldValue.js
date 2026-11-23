__d(
  "MAIBAPreviewPublishRawFieldValue",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.replace(/^\"|\"$/g, "");
    }
    function l(e) {
      return Array.isArray(e) && e.length === 1 ? e[0] : e;
    }
    function s(t) {
      var n = l(t);
      if (typeof n == "number") return Number.isFinite(n) ? n : null;
      if (typeof n != "string") return null;
      var r = e(n).trim();
      if (r === "") return null;
      var o = Number(r);
      return Number.isFinite(o) ? o : null;
    }
    function u(e) {
      var t = s(e);
      return t != null && Number.isInteger(t) ? t : null;
    }
    function c(e) {
      if (Array.isArray(e)) return e;
      if (typeof e != "string") return null;
      try {
        var t = JSON.parse(e);
        if (typeof t == "string") {
          var n = JSON.parse(t);
          return Array.isArray(n) ? n : null;
        }
        return Array.isArray(t) ? t : null;
      } catch (e) {
        return null;
      }
    }
    ((i.unquote = e),
      (i.unwrapSingletonArray = l),
      (i.parseNumberValue = s),
      (i.parseIntegerValue = u),
      (i.asArray = c));
  },
  66,
);
