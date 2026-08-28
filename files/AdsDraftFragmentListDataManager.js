__d(
  "AdsDraftFragmentListDataManager",
  [
    "AdDraftFragmentStatuses",
    "AdsApplicationIDs",
    "AdsBaseListDataManager",
    "AdsDraftDraftFragmentListBatchLoadErrorDataAction",
    "AdsDraftDraftFragmentListBatchLoadedDataAction",
    "AdsDraftDraftFragmentListPartialLoadDataAction",
    "AdsDraftFragmentDataManagerFields",
    "AdsDraftFragmentDataManagerUtils",
    "AdsDraftFragmentListDataManagerPreloader",
    "AdsGenericFilter",
    "AdsGenericFilterField",
    "AdsGenericFilterFieldType",
    "AdsGenericFilterSet",
    "AdsGraphAPI",
    "AdsMgmtPreloadingUtils",
    "GraphAPIPaging",
    "GraphAPIRetry",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 500;
    function s(e, t) {
      r("AdsDraftDraftFragmentListBatchLoadedDataAction").dispatch(
        { adsApplicationID: t, responses: e },
        {
          line: "49",
          module: "AdsDraftFragmentListDataManager.js",
          moduleID: i.id,
        },
      );
    }
    var u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getParams = function () {
            return {
              fields: r("AdsDraftFragmentDataManagerFields").fields,
              limit: e,
              filtering: new (r("AdsGenericFilterSet"))([
                new (r("AdsGenericFilter"))(
                  new (r("AdsGenericFilterField"))(
                    "status",
                    r("AdsGenericFilterFieldType").STRING,
                  ),
                  "NOT_EQUAL",
                  r("AdDraftFragmentStatuses").DELETED,
                ),
              ]).toAPI(),
            };
          }),
          (a.buildRequestFor = function (t) {
            return o("AdsGraphAPI")
              .get(i.id)
              .root("addraft_" + t)
              .edge("addraft_fragments");
          }),
          (a.loadFor = function (t, n) {
            var e = this;
            r("promiseDone")(
              o("GraphAPIRetry")
                .getPageWithRetries(
                  this.buildRequestFor(t).setPriority("HIGH"),
                  this.getParams(),
                  void 0,
                  {
                    asyncData: o("AdsDraftFragmentListDataManagerPreloader")
                      .preloader,
                    config: o("AdsMgmtPreloadingUtils").defaultConfig,
                  },
                )
                .then(
                  o("GraphAPIPaging").eachPage(function (e) {
                    return r(
                      "AdsDraftDraftFragmentListPartialLoadDataAction",
                    ).dispatch(
                      { adsApplicationID: n, draftID: t, fragments: e.data },
                      {
                        line: "94",
                        module: "AdsDraftFragmentListDataManager.js",
                        moduleID: i.id,
                      },
                    );
                  }),
                ),
              function (o) {
                return e.__handleSuccess(
                  ["load"],
                  t,
                  null,
                  babelHelpers.extends({}, o, {
                    adsApplicationID:
                      n || r("AdsApplicationIDs").ADS_POWER_EDITOR,
                  }),
                );
              },
              function (n) {
                return e.__handleError(["load"], t, null, n);
              },
            );
          }),
          (a.loadForWithCallback = function (t, n, a, l) {
            var e = this;
            r("promiseDone")(
              o("GraphAPIRetry")
                .getPageWithRetries(
                  this.buildRequestFor(t).setPriority("HIGH"),
                  this.getParams(),
                  void 0,
                  {
                    asyncData: o("AdsDraftFragmentListDataManagerPreloader")
                      .preloader,
                    config: o("AdsMgmtPreloadingUtils").defaultConfig,
                  },
                )
                .then(
                  o("GraphAPIPaging").eachPage(function (e) {
                    return r(
                      "AdsDraftDraftFragmentListPartialLoadDataAction",
                    ).dispatch(
                      { adsApplicationID: n, draftID: t, fragments: e.data },
                      {
                        line: "128",
                        module: "AdsDraftFragmentListDataManager.js",
                        moduleID: i.id,
                      },
                    );
                  }),
                ),
              function (o) {
                (e.__handleSuccess(
                  ["load"],
                  t,
                  null,
                  babelHelpers.extends({}, o, {
                    adsApplicationID:
                      n || r("AdsApplicationIDs").ADS_POWER_EDITOR,
                  }),
                ),
                  a());
              },
              function (n) {
                (e.__handleError(["load"], t, null, n), l == null || l());
              },
            );
          }),
          (a.__onBatchLoaded = function (t) {
            o(
              "AdsDraftFragmentDataManagerUtils",
            ).groupResponsesByAppAndDispatch(t, s);
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsDraftDraftFragmentListBatchLoadErrorDataAction").dispatch(
              { errors: t },
              {
                line: "160",
                module: "AdsDraftFragmentListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          n
        );
      })(r("AdsBaseListDataManager")),
      c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
