__d(
  "WAWebDebugConvertToLidChatModal.react",
  [
    "WAWebApiContact",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebDeleteChatAction",
    "WAWebFindChatAction",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "WDSMenuItem.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chat;
      return s.jsx(
        r("WDSMenuItem.react"),
        {
          testid: void 0,
          onPress: function () {
            c(t);
          },
          title: "Convert to LID chat",
        },
        "convertToLid",
      );
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "debug-convert-to-lid",
          },
          okText: "Yes",
          cancelText: "No",
          onCancel: o("WAWebModalManager").closeModalManager,
          onOK: function () {
            (o("WAWebModalManager").ModalManager.close(), d(e));
          },
          children:
            "'Warning! This will DELETE your existing chat along with all message history and convert it to a new LID-based chat. Do you want to proceed?'",
        }),
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebApiContact").getCurrentLid(
            o("WAWebWidFactory").asUserWidOrThrow(e.id),
          );
          if (t == null) {
            o("WAWebToastManager").ToastManager.open(
              s.jsx(o("WAWebToast.react").Toast, {
                msg:
                  "Unable to convert to lid chat: no lid found for " +
                  e.id.toString(),
              }),
            );
            return;
          }
          yield o("WAWebDeleteChatAction").sendDelete(e);
          var n = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              t,
              "debugConvertToLidChat",
            ),
            r = n.chat;
          (yield o("WAWebCmd").Cmd.openChatBottom({ chat: r }),
            o("WAWebComposeBoxActions").ComposeBoxActions.focus(r));
        })),
        m.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
