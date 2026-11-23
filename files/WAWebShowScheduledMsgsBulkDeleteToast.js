__d(
  "WAWebShowScheduledMsgsBulkDeleteToast",
  [
    "fbt",
    "WAWebActionToast.react",
    "WAWebBulkUnscheduleScheduledMsgs",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      var r = o("WAWebBulkUnscheduleScheduledMsgs")
        .bulkUnscheduleScheduledMsgs(e, t)
        .then(function () {
          var e = s._(/*BTDS*/ "");
          return n != null
            ? new (o("WAWebActionToast.react").ActionType)(e, {
                actionText: n.text,
                actionHandler: async function () {
                  n.handler();
                },
              })
            : new (o("WAWebActionToast.react").ActionType)(e);
        });
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebActionToast.react").ActionToast, {
          id: o("WAWebToast.react").genId(),
          initialAction: new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ ""),
          ),
          pendingAction: r,
        }),
      );
    }
    l.showScheduledMsgsBulkDeleteToast = c;
  },
  226,
);
