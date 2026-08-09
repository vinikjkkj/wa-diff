__d(
  "WAWebBizAiAgentChatDisabledUtils",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebName.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "biz-ai-hub-chat-disabled",
          },
          title: s._(/*BTDS*/ "This chat isn't available on this device."),
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(/*BTDS*/ "Use your phone to open {chat_name}", [
            s._param(
              "chat_name",
              u.jsx(o("WAWebName.react").Name, { chat: e }),
            ),
          ]),
        }),
      );
    }
    l.openBizAiAgentChatDisabledAlert = c;
  },
  226,
);
