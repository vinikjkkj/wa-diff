__d(
  "WAWebVoipScreeningVoicemail",
  ["WALogger", "WAWebBackendApi", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = ".waveform";
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            o("WAWebBackendApi").frontendFireAndForget(
              "sendScreeningVoicemail",
              {
                audio: d,
                durationMs: l.durationMs,
                peerJid: n.peerJid,
                waveformLevels: f(a, _(l)),
              },
            );
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
            (g(a, l.pttPath),
              g(a, _(l)),
              yield i().catch(function (e) {
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return "" + e.pttPath + d;
    }
    function f(e, t) {
      try {
        return new Uint8Array(e.readFile(t));
      } catch (e) {
        return new Uint8Array(0);
      }
    }
    function g(e, t) {
      try {
        e.unlink(t);
      } catch (e) {}
    }
    l.handOffScreeningVoicemail = m;
  },
  98,
);
