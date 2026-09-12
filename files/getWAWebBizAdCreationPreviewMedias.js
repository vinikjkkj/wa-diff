__d(
  "getWAWebBizAdCreationPreviewMedias",
  ["FBLogger", "WAWebBizAdCreationCreativeMediaModel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set();
    function u(e) {
      var t = [];
      for (var n of e) {
        var r = c(n);
        r != null && t.push(r);
      }
      return t;
    }
    function c(t) {
      return t.attachMedia != null
        ? t.attachMedia
        : t.kind === "video"
          ? (s.has(t.key) ||
              (s.add(t.key),
              r("FBLogger")("wa_ctwa_web").MUSTFIX(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Creative media video has no bytes to preview: ",
                    "",
                  ])),
                t.key,
              )),
            null)
          : o("WAWebBizAdCreationCreativeMediaModel").getCreativeMediaUrl(t);
    }
    l.default = u;
  },
  98,
);
