__d(
  "WAWebHatchSharePairingInviteAction",
  ["fbt", "WAWebModalManager", "WAWebSendTextFlow.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebSendTextFlow.react"), {
          text: e,
          title: s._(/*BTDS*/ "Send invitation to"),
        }),
        { transition: "modal-flow" },
      );
    }
    l.shareHatchPairingInvite = c;
  },
  226,
);
