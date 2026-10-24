__d(
  "WAWebVoipTransferCall",
  [
    "WALogger",
    "WAWebVoipCallIdProvider",
    "WAWebVoipGatingUtils",
    "WAWebVoipLobbyEntryPointStore",
    "WAWebVoipStackInterface",
    "WAWebVoipTransferredCallRegistry",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 0;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.hasVideo,
            a = t.peerActiveDevice,
            i = t.rootCallCreator,
            l = t.rootCallId,
            m,
            p;
          try {
            var _ = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (_ == null)
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferCall: no voip stack",
                    ])),
                ),
                !1
              );
            (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!1),
              o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
              o("WAWebVoipCallIdProvider").resetPendingCallId(),
              (p = o("WAWebVoipCallIdProvider").generateNewCallId()),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferCall: rootCallId=",
                    " callId=",
                    " hasVideo=",
                    "",
                  ])),
                l,
                p,
                String(n),
              ),
              o("WAWebVoipTransferredCallRegistry").registerTransferredCall(p, {
                rootCallId: l,
                rootCallCreatorWid: o("WAWebWidFactory").createWid(i),
              }),
              (m = yield _.transferCallStart({
                rootCallId: l,
                rootCallCreator: i,
                peerActiveDevice: a,
                callId: p,
                hasVideo: n,
              })));
          } catch (e) {
            return (
              o("WAWebVoipTransferredCallRegistry").unregisterTransferredCall(
                p,
              ),
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferCall: stack threw",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-transfer-call-start-failed"),
              !1
            );
          }
          return m !== d
            ? (o("WAWebVoipTransferredCallRegistry").unregisterTransferredCall(
                p,
              ),
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferCall: failed with status ",
                      "",
                    ])),
                  m,
                )
                .sendLogs("voip-transfer-call-start-failed"),
              !1)
            : !0;
        })),
        p.apply(this, arguments)
      );
    }
    l.transferWAWebVoipCallToThisDevice = m;
  },
  98,
);
