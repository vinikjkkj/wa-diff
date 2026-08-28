__d(
  "AndromedaValidatorConfig",
  [
    "AdsInteropConfig.experimental",
    "AdsMgmtQPLLogger",
    "AndromedaValidator",
    "AndromedaValidatorTreeMatcherOptions",
    "QPLEvent",
    "mergeAnnotations",
    "performanceAbsoluteNow",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        Math.random() >
        r("AdsInteropConfig.experimental").VALIDATION_SAMPLE_RATE,
      c = (function () {
        function t(e, t) {
          ((this.$1 = e),
            (this.$2 = (s || (s = o("QPLEvent"))).getMarkerId(this.$1)),
            o("AdsMgmtQPLLogger").markerStart(this.$1, t));
        }
        var n = t.prototype;
        return (
          (n.annotate = function (t) {
            o("AdsMgmtQPLLogger").markerAnnotate(this.$1, t);
          }),
          (n.stop = function () {
            o("AdsMgmtQPLLogger").markerEnd(
              this.$1,
              2,
              (e || (e = r("performanceAbsoluteNow")))(),
            );
          }),
          t
        );
      })(),
      d = (function () {
        function t(e) {
          ((this.validationType = "interop"),
            (this.qplEvent = r("qpl")._(41489369, "689")),
            (this.skipShadowValidation = u),
            (this.logDataOnMismatch = !1),
            (this.logActionsOnMismatch = !1),
            (this.treeMatcherOptions = {
              __global: babelHelpers.extends(
                {},
                o("AndromedaValidatorTreeMatcherOptions").baseGlobalOptions,
              ),
            }),
            e != null &&
              (e.logActionsOnMismatch != null &&
                (this.logActionsOnMismatch = e.logActionsOnMismatch),
              e.logDataOnMismatch != null &&
                (this.logDataOnMismatch = e.logDataOnMismatch),
              e.qplEvent != null && (this.qplEvent = e.qplEvent),
              e.skipShadowValidation != null &&
                (this.skipShadowValidation = e.skipShadowValidation),
              e.treeMatcherOptions != null &&
                (this.treeMatcherOptions = e.treeMatcherOptions),
              e.validationType != null &&
                (this.validationType = e.validationType)));
        }
        var n = t.prototype;
        return (
          (n.shouldSkipEventShadowValidation = function () {
            return this.skipShadowValidation;
          }),
          (n.genAdsInteropShadowValidationQplEvent = function () {
            return new c(
              this.qplEvent,
              (e || (e = r("performanceAbsoluteNow")))(),
            );
          }),
          (n.log = function (t, n, r, o) {
            this.logWithoutTypeGuards(t, n, r, o);
          }),
          (n.logWithoutTypeGuards = function (t, n, a, i) {
            var e = r("mergeAnnotations")(
              { string: { validationType: this.validationType } },
              i == null ? void 0 : i.extraAnnotations,
            );
            o("AndromedaValidator").logUsingConfig(
              this,
              t,
              n,
              a,
              e,
              i == null ? void 0 : i.matchers,
              i == null ? void 0 : i.fieldsToMatch,
              i == null ? void 0 : i.onMismatch,
            );
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
