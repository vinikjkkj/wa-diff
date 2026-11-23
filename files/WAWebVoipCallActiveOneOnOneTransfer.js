__d(
  "WAWebVoipCallActiveOneOnOneTransfer",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebCallCollection",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipJoinTransferableCall",
    "WAWebVoipOngoingTransferCalls",
    "WAWebVoipTransferredCallRegistry",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = null,
      p = 15e3;
    function _() {
      return (
        m == null &&
          (m = f().finally(function () {
            m = null;
          })),
        m
      );
    }
    async function f() {
      var t = await o(
        "WAWebVoipOngoingTransferCalls",
      ).waitForOngoingTransferEntryPoint();
      if (t == null) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: callActive: no 1:1 call on another self device",
            ])),
        );
        return;
      }
      var n = r("WAWebCallCollection").activeCall;
      if (n != null) {
        if (
          o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
            n.id,
          ) === t.rootCallId
        ) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: callActive: 1:1 call already transferred here",
              ])),
          );
          return;
        }
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: callActive: 1:1 transfer blocked, a call is active here",
            ])),
        ),
          o("WAWebVoipCallBlockedModals").showEndCurrentCallToast());
        return;
      }
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "voip: callActive: opening the 1:1 call transfer lobby",
          ])),
      ),
        await o("WAPromiseDelays").withTimeout(
          o("WAWebVoipJoinTransferableCall").joinTransferableCallHere(t),
          p,
          function () {
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: callActive: 1:1 transfer lobby did not open in time",
                ])),
            );
          },
        ));
    }
    l.transferOneOnOneCallHere = _;
  },
  98,
);
