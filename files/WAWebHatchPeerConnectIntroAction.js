__d(
  "WAWebHatchPeerConnectIntroAction",
  [
    "WALogger",
    "WAWebHatchFrontendGating",
    "WAWebHatchPeerConnectIntroDialog.react",
    "WAWebHatchPeerInviteLocalState",
    "WAWebHatchVmConnection",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t, n, a) {
      if (
        (a === void 0 &&
          (a = o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled),
        !!a())
      ) {
        var i = m(),
          l = i.identity;
        if (l == null) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[hatch-peer-invite] connect step skipped: linked Muse unknown",
              ])),
          );
          return;
        }
        var s = function () {
          return a() && p(i, m());
        };
        if (
          o("WAWebHatchPeerInviteLocalState").hasSeenHatchPeerConnectIntro(l)
        ) {
          n(s);
          return;
        }
        o("WDSDialogBridge").openWDSDialog(
          u.jsx(r("WAWebHatchPeerConnectIntroDialog.react"), {
            museName: t,
            onGetStarted: function () {
              s() &&
                (o(
                  "WAWebHatchPeerInviteLocalState",
                ).markHatchPeerConnectIntroSeen(l),
                n(s));
            },
          }),
        );
      }
    }
    function d(e) {
      return (
        o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled() &&
        e === o("WAWebHatchVmConnection").getHatchVmAccountGeneration()
      );
    }
    function m() {
      return {
        epoch: o(
          "WAWebHatchPeerInviteLocalState",
        ).getHatchPeerInviteLocalStateEpoch(),
        generation: o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        identity: o(
          "WAWebHatchPeerInviteLocalState",
        ).readHatchPeerConnectIntroIdentity(),
      };
    }
    function p(e, t) {
      return (
        e.epoch === t.epoch &&
        e.generation === t.generation &&
        e.identity === t.identity
      );
    }
    ((l.continueAfterHatchPeerConnectIntro = c),
      (l.isHatchPeerConnectStillCurrent = d));
  },
  98,
);
