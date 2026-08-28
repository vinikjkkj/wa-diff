__d(
  "AdsAdvancedPreviewCombinedVariationUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r, o;
      if ((n === void 0 && (n = "append"), e == null || t == null)) {
        var a;
        return (a = e != null ? e : t) != null ? a : null;
      }
      var i = (r = t.previewMedia) != null ? r : e.previewMedia;
      if (
        e.pluginKey === "combined-variation" &&
        ((o = e.config) == null ? void 0 : o.type) === "combined-variation"
      ) {
        var l = e.config;
        return babelHelpers.extends(
          {},
          e,
          {
            config: babelHelpers.extends({}, l, {
              type: "combined-variation",
              variations:
                n === "append"
                  ? [].concat(l.variations, [t])
                  : [t].concat(e.config.variations),
            }),
          },
          i != null ? { previewMedia: i } : {},
        );
      }
      return babelHelpers.extends(
        {
          pluginKey: "combined-variation",
          config: {
            type: "combined-variation",
            variations: n === "append" ? [e, t] : [t, e],
          },
        },
        i != null ? { previewMedia: i } : {},
      );
    }
    i.combineVariations = e;
  },
  66,
);
