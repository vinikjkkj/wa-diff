__d(
  "AdsCampaignCtvInstreamVideoPositionValidator",
  ["AdsAbstractValidator", "AdsPlacementAPISpecReaderUtils", "expandPaths"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getDependencies = function () {
            return { campaign: r("expandPaths")([]), eligibilityInfo: null };
          }),
          (n.shouldValidate = function (t) {
            var e = t.eligibilityInfo;
            if (!e) return !1;
            var n = e.spec;
            return r("AdsPlacementAPISpecReaderUtils").isActivePosition(
              n,
              "audience_network",
              "ctv_instream_video",
            );
          }),
          (n.validate = function (t) {
            var e = t.eligibilityInfo;
            return [];
          }),
          t
        );
      })(r("AdsAbstractValidator")),
      s = new e();
    l.default = s;
  },
  98,
);
