__d(
  "WAWebVoipTransferCall",
  [
    "WALogger",
    "WAWebVoipCallIdProvider",
    "WAWebVoipGatingUtils",
    "WAWebVoipLobbyEntryPointStore",
    "WAWebVoipStackInterface",
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
            m;
          try {
            var p = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (p == null)
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
              o("WAWebVoipCallIdProvider").resetPendingCallId());
            var _ = o("WAWebVoipCallIdProvider").generateNewCallId();
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: transferCall: rootCallId=",
                  " callId=",
                  " hasVideo=",
                  "",
                ])),
              l,
              _,
              String(n),
            ),
              (m = yield p.transferCallStart({
                rootCallId: l,
                rootCallCreator: i,
                peerActiveDevice: a,
                callId: _,
                hasVideo: n,
              })));
          } catch (e) {
            return (
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
            ? (o("WALogger")
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
