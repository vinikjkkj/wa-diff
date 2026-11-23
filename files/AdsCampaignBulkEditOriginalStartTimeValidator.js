__d(
  "AdsCampaignBulkEditOriginalStartTimeValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPIAccountPaths",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsBulkEditGKQEUtil",
    "AdsBulkEditScheduleUtils",
    "AdsError",
    "DateTime",
    "expandPaths",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getName = function () {
            return i.id;
          }),
          (n.getDependencies = function () {
            return {
              account: r("expandPaths")([r("AdsAPIAccountPaths").TIMEZONE_ID]),
              campaign: r("expandPaths")([r("AdsAPICampaignPaths").START_TIME]),
              isCampaignNew: null,
            };
          }),
          (n.shouldValidate = function (t) {
            var e = t.isCampaignNew;
            return (
              e === !0 &&
              o("AdsBulkEditGKQEUtil").isPassingBulkEditModalUsabilityFixGK(!0)
            );
          }),
          (n.validate = function (t) {
            var e = t.account,
              n = t.campaign,
              a = n == null ? void 0 : n.start_time;
            if (a == null || a === "") return [];
            var i = e == null ? void 0 : e.timezone_id;
            if (i == null) return [];
            var l = r("DateTime")
                .createFromISOString(a, i)
                .getUnixTimestampSeconds(),
              s = r("DateTime").now(i).getUnixTimestampSeconds();
            return o("AdsBulkEditScheduleUtils").isScheduleTimeInPast(l, s)
              ? [this.$AdsCampaignBulkEditOriginalStartTimeValidator$p_1()]
              : [];
          }),
          (n.$AdsCampaignBulkEditOriginalStartTimeValidator$p_1 = function () {
            return new (r("AdsError"))(
              3858130,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPICampaignPaths").START_TIME,
              },
            );
          }),
          t
        );
      })(r("AdsAbstractValidator")),
      c = new e();
    l.default = c;
  },
  226,
);
