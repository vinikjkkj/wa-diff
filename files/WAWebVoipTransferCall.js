__d(
  "WAWebVoipTransferCall",
  [
    "WALogger",
    "WAWebVoipCallIdProvider",
    "WAWebVoipJoinWithoutCamera",
    "WAWebVoipStackInterface",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipTransferredCallSetup",
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
            l = t.isMicMuted,
            m = l === void 0 ? !1 : l,
            p = t.peerActiveDevice,
            _ = t.rootCallCreator,
            f = t.rootCallId,
            g,
            h;
          try {
            var y = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (y == null)
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferCall: no voip stack",
                    ])),
                ),
                !1
              );
            h = o("WAWebVoipCallIdProvider").generateNewCallId();
            var C = n && i;
            (o("WAWebVoipJoinWithoutCamera").setStartWithoutCamera(h, C),
              o("WAWebVoipJoinWithoutCamera").consumeJoinWithoutCamera(h),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferCall: rootCallId=",
                    " callId=",
                    " hasVideo=",
                    " cameraOff=",
                    " mute=",
                    "",
                  ])),
                f,
                h,
                String(n),
                String(C),
                String(m),
              ),
              o("WAWebVoipTransferredCallSetup").prepareForTransferredCall({
                callId: h,
                rootCallCreator: _,
                rootCallId: f,
              }),
              (g = yield y.transferCallStart({
                rootCallId: f,
                rootCallCreator: _,
                peerActiveDevice: p,
                callId: h,
                hasVideo: n,
                mute: m,
                cameraOff: C,
              })));
          } catch (e) {
            return (
              o("WAWebVoipTransferredCallRegistry").unregisterTransferredCall(
                h,
              ),
              o("WAWebVoipJoinWithoutCamera").clearJoinWithoutCamera(h),
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
          return g !== d
            ? (o("WAWebVoipTransferredCallRegistry").unregisterTransferredCall(
                h,
              ),
              o("WAWebVoipJoinWithoutCamera").clearJoinWithoutCamera(h),
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferCall: failed with status ",
                      "",
                    ])),
                  g,
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
