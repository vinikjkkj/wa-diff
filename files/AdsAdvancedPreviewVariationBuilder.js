__d(
  "AdsAdvancedPreviewVariationBuilder",
  [
    "AdsAdvancedPreviewCombinedVariationUtils",
    "memoizeByIdentity",
    "memoizeWithArgs",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e, t) {
          ((this.$2 = {}), (this.$1 = e), (this.$2 = t));
        }
        var t = e.prototype;
        return (
          (t.gen = function () {
            return this.$1 == null
              ? this.$1
              : babelHelpers.extends({}, this.$1, this.$2);
          }),
          (t.apply = function (t) {
            return new s(
              r("nullthrows")(
                o("AdsAdvancedPreviewCombinedVariationUtils").combineVariations(
                  this.$1,
                  t,
                ),
              ),
              this.$2,
            );
          }),
          (t.$3 = function (t) {
            return new s(this.$1, babelHelpers.extends({}, this.$2, t));
          }),
          (t.withPreviewMedia = function (t) {
            return this.$3({ previewMedia: t });
          }),
          (t.withCustomPills = function (t) {
            return this.$3({ customPills: t });
          }),
          (t.highestVisibilityLevel = function (t) {
            return this.$3({ highestVisibilityLevel: t });
          }),
          (t.asOriginal = function () {
            return this.$3({ shouldTreatAsOriginalPreview: !0 });
          }),
          e
        );
      })(),
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.aco = function (t) {
            return this.apply({
              pluginKey: "single-optimization",
              config: babelHelpers.extends({ type: "single-optimization" }, t),
            });
          }),
          (n.media = function (t) {
            return this.apply({
              pluginKey: "media-sourcing",
              config: babelHelpers.extends({ type: "media-sourcing" }, t),
            });
          }),
          (n.dof = function (t) {
            return this.apply({
              pluginKey: "degrees-of-freedom",
              config: babelHelpers.extends({ type: "degrees-of-freedom" }, t),
            });
          }),
          (n.cag = function (t) {
            return this.apply({
              pluginKey: "creative-asset-group",
              config: babelHelpers.extends({ type: "creative-asset-group" }, t),
            });
          }),
          (n.dcoMedia = function (t) {
            return this.apply({
              pluginKey: "dco-media",
              config: babelHelpers.extends({ type: "dco-media" }, t),
            });
          }),
          (n.product = function (t) {
            return this.apply({
              pluginKey: "product-catalog",
              config: babelHelpers.extends({ type: "product-catalog" }, t),
            });
          }),
          (n.productSet = function (t) {
            return this.apply({
              pluginKey: "product-set",
              config: babelHelpers.extends({ type: "product-set" }, t),
            });
          }),
          t
        );
      })(e);
    function u(e) {
      return new s(null, e != null ? { generatedBy: e } : {});
    }
    var c = function (t) {
      return u(t);
    };
    ((c.forCreativeOptimizationKey = r("memoizeByIdentity")(function (e) {
      return u({ type: "creative-optimization", optimizationPluginKey: e });
    })),
      (c.forCreativeOptimizationPreviewKey = r("memoizeWithArgs")(
        function (e, t) {
          return u({
            type: "creative-optimization",
            optimizationPluginKey: t,
            optimizationPreviewPluginKey: e,
          });
        },
        function (e, t) {
          return e + ":" + t;
        },
      )),
      (c.ORIGINAL_VARIATION = Object.freeze({ pluginKey: "original" })));
    var d = c;
    l.createVariationBuilder = d;
  },
  98,
);
