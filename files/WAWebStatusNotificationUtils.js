__d(
  "WAWebStatusNotificationUtils",
  [
    "fbt",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebStatusCollection",
    "WAWebStatusQuotedFlowLoadable",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      if (t == null) {
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Sender not found"),
          }),
        );
        return;
      }
      o("WAWebStatusCollection")
        .StatusCollection.find(t)
        .then(function (t) {
          var n = function () {
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Status update not found"),
              }),
            );
          };
          o("WAWebModalManager").ModalManager.openMedia(
            u.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
              status: t,
              msgKey: e.id,
              onMsgNotFound: n,
              onClose: function () {
                return o("WAWebModalManager").ModalManager.closeMedia();
              },
            }),
            { transition: "quoted-status-modal" },
          );
        });
    }
    l.openStatusViewer = c;
  },
  226,
);
