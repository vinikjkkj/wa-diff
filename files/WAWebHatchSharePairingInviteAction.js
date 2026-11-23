__d(
  "WAWebHatchSharePairingInviteAction",
  [
    "fbt",
    "WAWebHatchFrontendGating",
    "WAWebModalManager",
    "WAWebSendTextFlow.react",
    "WDSToastImperativeHost",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      if (!o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled()) {
        d();
        return;
      }
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebSendTextFlow.react"), {
          alwaysShowComposeModal: !0,
          canSend: o("WAWebHatchFrontendGating")
            .isHatchPeerConnectionsSendEnabled,
          onSendBlocked: d,
          openChatAfterSingleSend: !0,
          text: e,
          title: s._(/*BTDS*/ ""),
        }),
        { transition: "modal-flow" },
      );
    }
    function d() {
      o("WDSToastImperativeHost").showWDSToast({
        message: s._(/*BTDS*/ ""),
        testid: "hatch_peer_invite_share_unavailable_toast",
      });
    }
    l.shareHatchPairingInvite = c;
  },
  226,
);
