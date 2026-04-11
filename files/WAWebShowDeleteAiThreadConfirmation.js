__d(
  "WAWebShowDeleteAiThreadConfirmation",
  [
    "fbt",
    "WAWebBotFrontendUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebConfirmPopup.react",
    "WAWebDeleteAiThreadsAction",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          title: s._(/*BTDS*/ "Delete this chat with Meta AI?"),
          okText: s._(/*BTDS*/ "Delete"),
          okButtonType: "solid-warning",
          onOK: function () {
            o("WAWebDeleteAiThreadsAction")
              .deleteAiThreadsAction(e, [t])
              .then(function () {
                if (
                  (o("WAWebModalManager").ModalManager.close(),
                  o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(/*BTDS*/ "Chat deleted"),
                    }),
                  ),
                  n)
                ) {
                  var t = o("WAWebChatCollection").ChatCollection.get(e);
                  t != null &&
                    o("WAWebBotFrontendUtils").createAndOpenNewMetaAiThread(
                      t,
                      o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIThreadList,
                    );
                }
              });
          },
          onCancel: o("WAWebModalManager").closeModalManager,
          children: s._(/*BTDS*/ "Messages will be removed from all devices."),
        }),
      );
    }
    l.showDeleteAiThreadConfirmation = c;
  },
  226,
);
