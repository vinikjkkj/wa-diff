__d(
  "WAWebShowScheduledMsgsBulkDeleteToast",
  [
    "fbt",
    "WAWebActionToast.react",
    "WAWebBulkUnscheduleScheduledMsgs",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t, r) {
      var a = o("WAWebBulkUnscheduleScheduledMsgs")
        .bulkUnscheduleScheduledMsgs(e, t)
        .then(function () {
          var e = s._(/*BTDS*/ "Scheduled messages deleted");
          return r != null
            ? new (o("WAWebActionToast.react").ActionType)(e, {
                actionText: r.text,
                actionHandler: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      r.handler();
                    },
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              })
            : new (o("WAWebActionToast.react").ActionType)(e);
        });
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebActionToast.react").ActionToast, {
          id: o("WAWebToast.react").genId(),
          initialAction: new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "Deleting scheduled messages"),
          ),
          pendingAction: a,
        }),
      );
    }
    l.showScheduledMsgsBulkDeleteToast = c;
  },
  226,
);
