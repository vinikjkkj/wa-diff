__d(
  "WAWebNewsletterStatusCardVoiceSupport",
  ["Promise", "WALogger", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = { codec: "mp4a.40.2", numberOfChannels: 1, sampleRate: 48e3 },
      c = { codec: "avc1.42e028", width: 1080, height: 1916 },
      d = null,
      m = null;
    function p() {
      return (_(), d === !0);
    }
    function _() {
      return (
        m == null &&
          (m = f().then(function (e) {
            return ((d = e), e);
          })),
        m
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = window,
            a = t.AudioEncoder,
            i = t.VideoEncoder;
          if (a == null || i == null) return !1;
          try {
            var l = yield (s || (s = n("Promise"))).all([
                a.isConfigSupported(u),
                i.isConfigSupported(c),
              ]),
              d = l[0],
              m = l[1];
            return d.supported === !0 && m.supported === !0;
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter-status-card] could not check whether this browser can make voice note status cards",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("newsletter-status-card-voice-support-check-failed"),
              !1
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    ((l.isVoiceNoteStatusCardSupported = p),
      (l.checkVoiceNoteStatusCardSupport = _));
  },
  98,
);
