__d(
  "AdsCampaignLiveListDataManager",
  [
    "AdsBaseListDataManager",
    "AdsCampaignListBatchLoadErrorAction",
    "AdsCampaignListBatchLoadedAction",
    "AdsGenericFilter",
    "AdsGenericFilterField",
    "AdsGenericFilterFieldType",
    "AdsGenericFilterSet",
    "AdsGraphAPI",
    "GraphAPIPaging",
    "GraphAPIRetry",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["id", "name"],
      s = 1e3,
      u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadForCampaignGroups = function (t, n) {
            var e = "campaign.id",
              r = this.$AdsCampaignLiveListDataManager$p_1(e, n);
            this.$AdsCampaignLiveListDataManager$p_2(
              t,
              { filtering: r.toAPI() },
              "campaign_id",
              n,
            );
          }),
          (a.loadForAccount = function (t) {
            this.$AdsCampaignLiveListDataManager$p_2(t, {}, "account_id", [t]);
          }),
          (a.$AdsCampaignLiveListDataManager$p_1 = function (t, n) {
            return new (r("AdsGenericFilterSet"))([
              new (r("AdsGenericFilter"))(
                new (r("AdsGenericFilterField"))(
                  t,
                  r("AdsGenericFilterFieldType").STRING_SET,
                ),
                "IN",
                n,
              ),
            ]);
          }),
          (a.$AdsCampaignLiveListDataManager$p_2 = function (n, a, l, u) {
            var t = this,
              c = e.concat([l]),
              d = o("AdsGraphAPI")
                .get(i.id)
                .adaccount(n)
                .edge("adsets")
                .batched(),
              m = babelHelpers.extends(
                { date_format: "U", fields: c, limit: s },
                a,
              ),
              p = r("gkx")("22099")
                ? o("GraphAPIRetry").getWithRetries(d, m, 3)
                : d.get(m);
            r("promiseDone")(
              p.then(o("GraphAPIPaging").allPages()),
              function (e) {
                var n = new Map();
                (e.data.forEach(function (e) {
                  var t = e[l];
                  n.has(t) || n.set(t, []);
                  var r = n.get(t);
                  r && r.push(e);
                }),
                  u.forEach(function (e) {
                    t.__handleSuccess(["load"], e, null, n.get(e) || []);
                  }));
              },
              function (e) {
                u.forEach(function (n) {
                  t.__handleError(["load"], n, null, e);
                });
              },
            );
          }),
          (a.__onBatchLoaded = function (t) {
            r("AdsCampaignListBatchLoadedAction").dispatch(
              { responses: t },
              {
                line: "136",
                module: "AdsCampaignLiveListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsCampaignListBatchLoadErrorAction").dispatch(
              { responses: t },
              {
                line: "141",
                module: "AdsCampaignLiveListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          n
        );
      })(r("AdsBaseListDataManager")),
      c = new u();
    l.default = c;
  },
  98,
);
