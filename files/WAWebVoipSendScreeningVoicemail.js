__d(
  "WAWebVoipSendScreeningVoicemail",
  [
    "fbt",
    "WALogger",
    "WAPttComposerScaleWaveform",
    "WAWebFindChatAction",
    "WAWebFrontendChatGetters",
    "WAWebMediaOpaqueData",
    "WAWebPrepRawMedia",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipActionRequestOpenChat",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = "audio/ogg; codecs=opus",
      m = 64;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield f(e);
          t != null && y(t);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.audio,
            a = t.durationMs,
            i = t.peerJid,
            l = t.waveformLevels;
          try {
            var s = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                i,
                "voipCallLog",
              ),
              u = s.chat,
              c = r("WAWebMediaOpaqueData").createFromData(n, d),
              m = o("WAWebPrepRawMedia").prepRawMedia(c, {
                isPtt: !0,
                precomputedFields: {
                  duration: Math.ceil(a / 1e3),
                  waveform: h(l),
                },
              });
            return (yield m.sendToChat({ chat: u, options: {} }), u);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: could not send the screening voicemail",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("voip-screening-voicemail-send-failed"),
              C(),
              null
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return new Uint8Array(
        r("WAPttComposerScaleWaveform")(
          Array.from(e, function (e) {
            return e / 100;
          }),
          m,
        ).map(function (e) {
          return Math.floor(e * 100);
        }),
      );
    }
    function y(e) {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Voicemail sent"),
          action: o("WAWebFrontendChatGetters").getActive(e)
            ? null
            : {
                actionText: s._(/*BTDS*/ "View in chat"),
                onAction: function () {
                  return o("WAWebVoipActionRequestOpenChat").requestOpenChat(
                    e.id,
                  );
                },
                testid: "voip-screening-voicemail-view-in-chat",
              },
        }),
      );
    }
    function C() {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Couldn't send voicemail"),
        }),
      );
    }
    l.sendScreeningVoicemail = p;
  },
  226,
);
