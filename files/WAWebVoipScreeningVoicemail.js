__d(
  "WAWebVoipScreeningVoicemail",
  ["WALogger", "WAWebBackendApi", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = ".waveform";
    async function m(t) {
      var n = t.call,
        a = t.fs,
        i = t.persistFS,
        l = t.voicemail;
      try {
        if (!n.fromMe || !l.hasSpeech || l.durationMs <= 0) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: screening voicemail discarded, fromMe=",
                " hasSpeech=",
                " durationMs=",
                "",
              ])),
            String(n.fromMe),
            String(l.hasSpeech),
            l.durationMs,
          );
          return;
        }
        var d = new Uint8Array(a.readFile(l.pttPath));
        if (d.length === 0) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: screening voicemail is empty",
                ])),
            )
            .sendLogs("voip-screening-voicemail-empty");
          return;
        }
        o("WAWebBackendApi").frontendFireAndForget("sendScreeningVoicemail", {
          audio: d,
          durationMs: l.durationMs,
          peerJid: n.peerJid,
          waveformLevels: _(a, p(l)),
        });
      } catch (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: could not read the screening voicemail",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("voip-screening-voicemail-read-failed");
      } finally {
        (f(a, l.pttPath),
          f(a, p(l)),
          await i().catch(function (e) {
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: could not persist screening voicemail deletion",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }));
      }
    }
    function p(e) {
      return "" + e.pttPath + d;
    }
    function _(e, t) {
      try {
        return new Uint8Array(e.readFile(t));
      } catch (e) {
        return new Uint8Array(0);
      }
    }
    function f(e, t) {
      try {
        e.unlink(t);
      } catch (e) {}
    }
    l.handOffScreeningVoicemail = m;
  },
  98,
);
