__d(
  "MAIBAPreviewPublishEnumAtomFormatter",
  ["MAIBAPreviewPublishRawFieldValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (typeof e == "number") return String(e);
      if (typeof e != "string") return null;
      var t = o("MAIBAPreviewPublishRawFieldValue").unquote(e).trim();
      if (t === "") return null;
      var n = t
        .split("_")
        .filter(Boolean)
        .map(function (e) {
          return e.toLocaleLowerCase();
        })
        .join(" ");
      return n === "" ? null : n.charAt(0).toLocaleUpperCase() + n.slice(1);
    }
    function s(t) {
      var n = o("MAIBAPreviewPublishRawFieldValue").asArray(t);
      if (n == null) return e(t);
      var r = [];
      for (var a of n) {
        var i = e(a);
        i != null && r.push(i);
      }
      return r.length === 0 ? null : r.join(", ");
    }
    ((l.enumAtomLabel = e), (l.formatEnumValue = s));
  },
  98,
);
