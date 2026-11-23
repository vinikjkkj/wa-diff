__d(
  "WAFlowsSnackbarUtils",
  ["WAFlowsBridgeEvents", "WAFlowsGlobalContext"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [];
    o("WAFlowsGlobalContext").observe("snackbar", e);
    var s = 45,
      u = { short: 4500, long: 7e3 };
    function c(e, t) {
      var n;
      window.wae.snackbar = e;
      var r =
        ((n = String(e == null ? void 0 : e.text).length) != null ? n : 0) > s
          ? u.long
          : u.short;
      if (String(e == null ? void 0 : e.text).length > 0) {
        var a;
        t({
          eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
            .WAFlowsShowToast,
          payload: {
            text: e == null ? void 0 : e.text,
            duration: r,
            actionText:
              e == null || (a = e.action) == null || (a = a.text) == null
                ? void 0
                : a.toString(),
          },
          fallBackDataForWeb: {},
          hasCallback: !1,
        });
      }
      (window.clearTimeout(window.wae.snackbarTimerRef),
        (window.wae.snackbarTimerRef = window.setTimeout(function () {
          return d();
        }, r)));
    }
    function d() {
      window.wae.snackbar = void 0;
    }
    function m() {
      var e;
      return (
        ((e = window.wae) == null || (e = e.snackbar) == null
          ? void 0
          : e.text) !== void 0
      );
    }
    function p(t) {
      return (
        e.push(t),
        function () {
          var n = e.indexOf(t);
          n !== -1 && e.splice(n, 1);
        }
      );
    }
    ((l.showSnackbar = c),
      (l.hideSnackbar = d),
      (l.isSnackbarVisible = m),
      (l.subscribeToSnackbarChanges = p));
  },
  98,
);
