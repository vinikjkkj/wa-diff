__d(
  "AdsCampaignGroupSpendCapValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPIAccountPaths",
    "AdsAPICampaignGroupPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsSpendCapUtils",
    "ads-lib-formatters",
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
          (n.getDependencies = function () {
            return {
              account: r("expandPaths")([
                r("AdsAPIAccountPaths").MIN_CAMPAIGN_GROUP_SPEND_CAP,
                r("AdsAPIAccountPaths").CURRENCY,
              ]),
              campaignGroup: r("expandPaths")([
                r("AdsAPICampaignGroupPaths").SPEND_CAP,
                r("AdsAPICampaignGroupPaths").ID,
              ]),
              totalSpent: null,
            };
          }),
          (n.shouldValidate = function (t) {
            var e = t.campaignGroup;
            return (e == null ? void 0 : e.spend_cap) !== null;
          }),
          (n.validate = function (t) {
            var e = t.account,
              n = t.campaignGroup,
              r = t.totalSpent,
              a = [],
              i = +(e == null ? void 0 : e.min_campaign_group_spend_cap),
              l = o("AdsSpendCapUtils").getMinLimit(r, i),
              s = e == null ? void 0 : e.currency;
            return (
              +(n == null ? void 0 : n.spend_cap) < l &&
                a.push(this.$AdsCampaignGroupSpendCapValidator$p_1(l, s)),
              a
            );
          }),
          (n.$AdsCampaignGroupSpendCapValidator$p_1 = function (t, n) {
            var e = o("ads-lib-formatters").createIntlMoneyFormatter(
              void 0,
              n,
              !0,
            );
            return new (r("AdsError"))(
              1885058,
              u._(
                function (e, t) {
                  return e._(/*BTDS*/ "", [e._param("expected", t.expected)]);
                },
                { expected: e(t) },
              ),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPICampaignGroupPaths").SPEND_CAP,
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
