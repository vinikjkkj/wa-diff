__d(
  "WAWebVoipTransferCall",
  [
    "WALogger",
    "WAWebVoipCallIdProvider",
    "WAWebVoipGatingUtils",
    "WAWebVoipJoinWithoutCamera",
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
            a = t.isCameraOff,
            i = a === void 0 ? !1 : a,
            l = t.peerActiveDevice,
            m = t.rootCallCreator,
            p = t.rootCallId,
            _,
            f;
          try {
            var g = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (g == null)
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
              (f = o("WAWebVoipCallIdProvider").generateNewCallId()),
              o("WAWebVoipJoinWithoutCamera").setStartWithoutCamera(f, n && i),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferCall: rootCallId=",
                    " callId=",
                    " hasVideo=",
                    " cameraOff=",
                    "",
                  ])),
                p,
                f,
                String(n),
                String(i),
              ),
              o("WAWebVoipTransferredCallRegistry").registerTransferredCall(f, {
                rootCallId: p,
                rootCallCreatorWid: o("WAWebWidFactory").createWid(m),
              }),
              (_ = yield g.transferCallStart({
                rootCallId: p,
                rootCallCreator: m,
                peerActiveDevice: l,
                callId: f,
                hasVideo: n,
              })));
          } catch (e) {
            return (
              o("WAWebVoipTransferredCallRegistry").unregisterTransferredCall(
                f,
              ),
              o("WAWebVoipJoinWithoutCamera").clearJoinWithoutCamera(f),
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
          return _ !== d
            ? (o("WAWebVoipTransferredCallRegistry").unregisterTransferredCall(
                f,
              ),
              o("WAWebVoipJoinWithoutCamera").clearJoinWithoutCamera(f),
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferCall: failed with status ",
                      "",
                    ])),
                  _,
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
