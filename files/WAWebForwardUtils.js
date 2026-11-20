__d(
  "WAWebForwardUtils",
  ["fbt", "WAWebActionToast.react", "WDSToastImperativeHost"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e
        ? s._(/*BTDS*/ "Forwarded many times")
        : s._(/*BTDS*/ "Forwarded");
    }
    function u(e) {
      var t = s._(
        /*BTDS*/ '_j{"*":"Forwarded {number_of_messages} items","_1":"Forwarded 1 item"}',
        [s._plural(e, "number_of_messages")],
      );
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
