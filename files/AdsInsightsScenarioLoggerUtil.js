__d(
  "AdsInsightsScenarioLoggerUtil",
  ["AdsActionCategories", "AdsEditorSelectedIDsSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (!(t && t.ready === n.ready))
        if (n.error === !0) {
          e.errorEvent.dispatch({
            category: r("AdsActionCategories").STATE_CHANGE,
          });
          return;
        } else
          n.ready &&
            e.successEvent.dispatch({
              category: r("AdsActionCategories").STATE_CHANGE,
            });
    }
    function s(e) {
      var t = 0,
        n = o("AdsEditorSelectedIDsSelector").AdsEditorSelectedIDsSelector(e);
      for (var r of n) t++;
      return t;
    }
    l.maybeDispatchSuccessOrErrorAction = e;
  },
  98,
);
