__d(
  "AdsPEFilterActions",
  [
    "AdsGenericFilterSet",
    "AdsGenericFilterSetUtil",
    "AdsManagerTableQPLFlowLoggingUtils",
    "AdsPEFilterClearAction",
    "AdsPEFilterLoadErrorAction",
    "AdsPERouterHelper",
    "AdsPETypeaheadFilterInputUtils",
    "AdsPerfInteractionsController",
    "JSResource",
    "changeFilterSetAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { ad_page_id: 0, adset_page_id: 0, campaign_page_id: 0 },
      s = { adset_ids_with_warning: null, recommendation_type: null };
    function u() {
      var t = r("AdsPERouterHelper").getRouter(),
        n = babelHelpers.extends({ filter_set: null }, e, s, { sort: null }),
        o = t.getParams().recommendation_type;
      (o != null &&
        (n = babelHelpers.extends({}, n, { selected_adset_ids: null })),
        t.updateParams(n, {
          replaceState: !0,
          onComplete: function () {
            r("AdsPEFilterClearAction").dispatch(
              {},
              { line: "73", module: "AdsPEFilterActions.js", moduleID: i.id },
            );
          },
        }));
    }
    function c() {
      var t = r("AdsPERouterHelper").getRouter(),
        n = babelHelpers.extends({ filter_set: null }, e, s),
        o = t.getParams().recommendation_type;
      (o != null &&
        (n = babelHelpers.extends({}, n, { selected_adset_ids: null })),
        t.updateParams(n, {
          replaceState: !0,
          onComplete: function () {
            r("AdsPEFilterClearAction").dispatch(
              {},
              { line: "106", module: "AdsPEFilterActions.js", moduleID: i.id },
            );
          },
        }));
    }
    function d(e, t) {
      if (t) {
        var n = t.values,
          o = e.id,
          a = n.filter(function (e) {
            return !e.field.key.includes(o);
          });
        if (n.length !== a.length)
          if (a.length === 0) c();
          else {
            var i = new (r("AdsGenericFilterSet"))(a);
            r("changeFilterSetAction")(i);
          }
      }
    }
    function m(e, t) {
      (o("AdsManagerTableQPLFlowLoggingUtils").emitNonCellStatusError(
        e,
        "id_list",
      ),
        r("AdsPEFilterLoadErrorAction").dispatch(
          { error: e },
          { line: "143", module: "AdsPEFilterActions.js", moduleID: i.id },
        ),
        r("JSResource").loadAll(
          [
            r("JSResource")("AdsPETableToastUtils").__setRef(
              "AdsPEFilterActions",
            ),
          ],
          function (n) {
            return n.dispatchToastCard(e, t);
          },
        ),
        r("AdsPerfInteractionsController").annotateFailure(
          "am.table",
          "AdsPEFilterAPILoadError",
          {
            error: e,
            errorContext: { errorCode: e == null ? void 0 : e.code },
          },
        ),
        r("AdsPerfInteractionsController").annotateFailure(
          "am.syd",
          "AdsPEFilterAPILoadError",
          {
            error: e,
            errorContext: { errorCode: e == null ? void 0 : e.code },
          },
        ));
    }
    function p(e) {
      if (e) {
        var t = e.values,
          n = t.some(function (e) {
            return o("AdsPETypeaheadFilterInputUtils").getIsNameFilter(
              e.field.name,
            );
          });
        if (n) {
          var a = o(
            "AdsPETypeaheadFilterInputUtils",
          ).removeIncompatibleNameFiltersFromFilterSetHelper(t);
          o("AdsGenericFilterSetUtil").matchesExactly(e, a) ||
            r("changeFilterSetAction")(a);
        }
      }
    }
    ((l.RESET_PAGE_IDS = e),
      (l.RESET_RECOMMENDATION = s),
      (l.clearFilterSetAndSort = u),
      (l.clearFilterSet = c),
      (l.removeCustomMetricFilter = d),
      (l.loadFilteredIDsError = m),
      (l.removeIncompatibleNameFiltersFromFilterSet = p));
  },
  98,
);
