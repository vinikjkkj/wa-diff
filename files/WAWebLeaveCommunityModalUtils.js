__d(
  "WAWebLeaveCommunityModalUtils",
  [
    "WAWebABProps",
    "WAWebChatCommunityUtils",
    "WAWebLeaveCommunityModal.react",
    "WAWebLeaveCommunityModalV2.react",
    "WAWebModalManager",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chat;
      o("WAWebABProps").getABPropConfigValue("wds_web_dialog") &&
      !o("WAWebChatCommunityUtils").isCommunitySuperAdmin(t)
        ? o("WDSDialogBridge").openWDSDialog(
            s.jsx(r("WAWebLeaveCommunityModalV2.react"), {
              chat: t,
              onExitAndDeleteSuccess: e.onExitAndDeleteSuccess,
              onSuccess: e.onSuccess,
              spamFlow: e.spamFlow,
            }),
          )
        : o("WAWebModalManager").ModalManager.open(
            s.jsx(
              r("WAWebLeaveCommunityModal.react"),
              babelHelpers.extends({}, e),
            ),
            { transition: "modal-flow" },
          );
    }
    l.openLeaveCommunityModal = u;
  },
  98,
);
