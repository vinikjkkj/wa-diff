__d(
  "AdsAdgroupLiveListDataManager",
  [
    "AdsAdgroupListBatchLoadErrorDataAction",
    "AdsAdgroupListBatchLoadedDataAction",
    "AdsBaseListDataManager",
    "AdsGenericFilter",
    "AdsGenericFilterField",
    "AdsGenericFilterFieldType",
    "AdsGenericFilterSet",
    "AdsGraphAPI",
    "GraphAPIPaging",
    "GraphAPIRetry",
    "gkx",
    "observeRuntimeType",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["id", "name"],
      s = 1e3,
      u = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.loadForCampaigns = function (t, n) {
              e.$AdsAdgroupLiveListDataManagerClass$p_3(
                t,
                e.buildCampaignExtraQueryParams(n),
                "adset_id",
                n,
              );
            }),
            (e.loadForCampaignGroups = function (t, n) {
              e.$AdsAdgroupLiveListDataManagerClass$p_3(
                t,
                e.buildCampaignGroupExtraQueryParams(n),
                "campaign_id",
                n,
              );
            }),
            (e.loadForAccount = function (t) {
              e.$AdsAdgroupLiveListDataManagerClass$p_3(
                t,
                e.buildAccountExtraQueryParams(),
                "account_id",
                [t],
              );
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.buildAccountExtraQueryParams = function () {
            return {};
          }),
          (a.buildCampaignExtraQueryParams = function (t) {
            var e = "adset.id",
              n = this.$AdsAdgroupLiveListDataManagerClass$p_1(e, t),
              r = n.toAPI(),
              o = this.__getExtraParams();
            if (o) {
              var a = this.$AdsAdgroupLiveListDataManagerClass$p_1(
                o.filterField,
                o.filterValues,
              );
              r = r.concat(a.toAPI());
            }
            return { filtering: r };
          }),
          (a.buildCampaignGroupExtraQueryParams = function (t) {
            var e = "campaign.id",
              n = this.$AdsAdgroupLiveListDataManagerClass$p_1(e, t);
            return { filtering: n.toAPI() };
          }),
          (a.buildRequestFor = function (t, n, r) {
            var e = this.$AdsAdgroupLiveListDataManagerClass$p_2(t, n, r),
              o = e.params,
              a = e.requestSpec;
            return a.declareOnly().get(o);
          }),
          (a.$AdsAdgroupLiveListDataManagerClass$p_2 = function (n, r, a) {
            var t = e.concat([a]);
            a === "campaign_id" && (t = t.concat(["adset_id"]));
            var l = a.substring(0, a.length - 3),
              u = o("AdsGraphAPI")
                .get(i.id + ".loadFor(" + l + ")")
                .adaccount(n)
                .edge("ads")
                .batched(),
              c = babelHelpers.extends(
                { date_format: "U", fields: t, limit: s, summary: !0 },
                r,
              );
            return { params: c, requestSpec: u };
          }),
          (a.__getExtraParams = function () {
            return null;
          }),
          (a.$AdsAdgroupLiveListDataManagerClass$p_1 = function (t, n) {
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
          (a.$AdsAdgroupLiveListDataManagerClass$p_3 = function (t, n, a, i) {
            var e = this,
              l = this.$AdsAdgroupLiveListDataManagerClass$p_2(t, n, a),
              s = l.params,
              u = l.requestSpec;
            r("promiseDone")(
              (r("gkx")("22099")
                ? o("GraphAPIRetry").getWithRetries(u, s, 3)
                : u.get(s)
              ).then(o("GraphAPIPaging").allPages()),
              function (t) {
                var n = new Map();
                (t.data.forEach(function (e) {
                  var t = e[a];
                  n.has(t) || n.set(t, []);
                  var r = n.get(t);
                  r && r.push(e);
                }),
                  i.forEach(function (t) {
                    e.__handleSuccess(["load"], t, null, n.get(t) || []);
                  }));
              },
              function (t) {
                i.forEach(function (n) {
                  e.__handleError(["load"], n, null, t);
                });
              },
            );
          }),
          (a.__onBatchLoaded = function (t) {
            r("AdsAdgroupListBatchLoadedDataAction").dispatch(
              { responses: t },
              {
                line: "264",
                module: "AdsAdgroupLiveListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t) {
            (r("observeRuntimeType")(
              t,
              "AdsAdgroupLiveListDataManager.AdsAdgroupLiveListDataManagerClass.__onBatchLoadError.responses",
            ),
              r("AdsAdgroupListBatchLoadErrorDataAction").dispatch(
                { responses: t },
                {
                  line: "275",
                  module: "AdsAdgroupLiveListDataManager.js",
                  moduleID: i.id,
                },
              ));
          }),
          n
        );
      })(r("AdsBaseListDataManager")),
      c = new u();
    ((l.AdsAdgroupLiveListDataManagerClass = u),
      (l.AdsAdgroupLiveListDataManager = c));
  },
  98,
);
