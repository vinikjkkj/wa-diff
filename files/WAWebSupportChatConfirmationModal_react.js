__d(
  "WAWebSupportChatConfirmationModal.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebSupportChatStrings",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "support-chat-confirmation",
        },
        okText: r("WAWebFbtCommon")("OK"),
        onOK: o("WAWebModalManager").closeModalManager,
        children: s.jsx(o("WAWebFlex.react").FlexColumn, {
          children: s.jsx(o("WAWebText.react").WAWebTextSmall, {
            children: o(
              "WAWebSupportChatStrings",
            ).SupportChatConfirmationModalText(),
          }),
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
