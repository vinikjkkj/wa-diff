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
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = "audio/ogg; codecs=opus",
      m = 64;
    async function p(e) {
      var t = await _(e);
      t != null && g(t);
    }
    async function _(t) {
      var n = t.audio,
        a = t.durationMs,
        i = t.peerJid,
        l = t.waveformLevels;
      try {
        var s = await o("WAWebFindChatAction").findOrCreateLatestChat(
            i,
            "voipCallLog",
          ),
          u = s.chat,
          c = r("WAWebMediaOpaqueData").createFromData(n, d),
          m = o("WAWebPrepRawMedia").prepRawMedia(c, {
            isPtt: !0,
            precomputedFields: { duration: Math.ceil(a / 1e3), waveform: f(l) },
          });
        return (await m.sendToChat({ chat: u, options: {} }), u);
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
          h(),
          null
        );
      }
    }
    function f(e) {
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
    function g(e) {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ ""),
          action: o("WAWebFrontendChatGetters").getActive(e)
            ? null
            : {
                actionText: s._(/*BTDS*/ ""),
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
    function h() {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    l.sendScreeningVoicemail = p;
  },
  226,
);
