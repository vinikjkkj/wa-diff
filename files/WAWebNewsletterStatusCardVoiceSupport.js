__d(
  "WAWebNewsletterStatusCardVoiceSupport",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { codec: "mp4a.40.2", numberOfChannels: 1, sampleRate: 48e3 },
      u = { codec: "avc1.42e028", width: 1080, height: 1916 },
      c = null,
      d = null;
    function m() {
      return (p(), c === !0);
    }
    function p() {
      return (
        d == null &&
          (d = _().then(function (e) {
            return ((c = e), e);
          })),
        d
      );
    }
    async function _() {
      var t = window,
        n = t.AudioEncoder,
        a = t.VideoEncoder;
      if (n == null || a == null) return !1;
      try {
        var i = await Promise.all([
            n.isConfigSupported(s),
            a.isConfigSupported(u),
          ]),
          l = i[0],
          c = i[1];
        return l.supported === !0 && c.supported === !0;
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
    }
    ((l.isVoiceNoteStatusCardSupported = m),
      (l.checkVoiceNoteStatusCardSupport = p));
  },
  98,
);
