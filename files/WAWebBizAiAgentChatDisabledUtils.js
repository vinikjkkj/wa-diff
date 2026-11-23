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
          title: s._(/*BTDS*/ ""),
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(/*BTDS*/ "", [
            s._param(
              "chat_name",
              u.jsx(o("WAWebName.react").ChatName, { chatId: e.id }),
            ),
          ]),
        }),
      );
    }
    l.openBizAiAgentChatDisabledAlert = c;
  },
  226,
);
