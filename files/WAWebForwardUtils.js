__d(
  "WAWebForwardUtils",
  ["fbt", "WAWebActionToast.react", "WDSToastImperativeHost"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function u(e) {
      var t = s._(/*BTDS*/ "", [s._plural(e, "number_of_messages")]);
      o("WDSToastImperativeHost").showWDSToast({
        testid: "toast-body",
        align: "start",
        type: "default",
        message: t,
        dedupId: o("WAWebActionToast.react").genId(),
      });
    }
    ((l.getForwardedIndicatorText = e), (l.showForwardedToast = u));
  },
  226,
);
