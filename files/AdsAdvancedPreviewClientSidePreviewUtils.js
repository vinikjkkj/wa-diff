__d(
  "AdsAdvancedPreviewClientSidePreviewUtils",
  ["AdsAdvancedPreviewV2VariationClientSidePreviewPlugins", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (
        ((t = d(e)) == null ? void 0 : t.isClientSidePreviewSupported(e)) === !0
      );
    }
    function s(e) {
      var t, n;
      return (t =
        (n = d(e)) == null || n.isCagPreviewSpecRequired == null
          ? void 0
          : n.isCagPreviewSpecRequired(e)) != null
        ? t
        : !1;
    }
    function u(e, t) {
      return e == null || !r("justknobx")._("539") || !s(e) ? null : t;
    }
    function c(e, t, n) {
      var r,
        o = (r = d(t)) == null ? void 0 : r.applyToRenderSpec;
      return o != null ? o(e, t, n) : e;
    }
    function d(e) {
      var t = r("AdsAdvancedPreviewV2VariationClientSidePreviewPlugins")
          .withShape({ forVariationPlugin: e.pluginKey })
          .getArray(),
        n = t[0];
      return n;
    }
    ((l.isVariationClientSidePreviewSupported = e),
      (l.isVariationCagPreviewSpecRequired = s),
      (l.getVariationCagPreviewSpec = u),
      (l.applyVariationToClientSideRenderSpec = c));
  },
  98,
);
