__d(
  "WAWebVoipScreeningPrompt",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebCallScreeningJourneyLogger",
    "WAWebL10N",
    "WAWebMediaHostsUtil",
    "WAWebURLUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "/wa/static/network_resource",
      d = "nw_media",
      m = "screening_audio_hint_",
      p = "call_screening_voicemail_beep_",
      _ = "en",
      f = 15e3,
      g = 25e3,
      h = null,
      y = 0;
    async function C() {
      b();
      var t = ++y,
        n = S();
      o(
        "WAWebCallScreeningJourneyLogger",
      ).CallScreeningJourneyLogger.onPromptStarted(
        n.locale === _ && n.waLocale !== _,
      );
      var r = !1,
        a,
        i = new Promise(function (n) {
          a = window.setTimeout(function () {
            (t === y &&
              (o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: screening prompt timed out",
                    ])),
                )
                .sendLogs("voip-screening-prompt-timed-out"),
              (r = !0),
              b()),
              n(!1));
          }, g);
        });
      try {
        var l = await Promise.race([v(t, n.locale), i]);
        return (
          l
            ? o(
                "WAWebCallScreeningJourneyLogger",
              ).CallScreeningJourneyLogger.onPromptCompleted()
            : (r || t === y) &&
              o(
                "WAWebCallScreeningJourneyLogger",
              ).CallScreeningJourneyLogger.onPromptFailed(),
          l
        );
      } finally {
        window.clearTimeout(a);
      }
    }
    function b() {
      var e;
      (y++, (e = h) == null || e.finish(!1));
    }
    async function v(e, t) {
      var n = await o("WAWebMediaHostsUtil").getStaticMediaHostName(),
        r = function (r) {
          return e === y ? E(L(n, r)) : Promise.resolve(!1);
        },
        a = R();
      return (await r("" + m + t)) && (a == null || (await r(a)));
    }
    function S() {
      var e,
        t = r("WAWebL10N")
          .getNormalizedLocale()
          .replaceAll("-", "_")
          .toLowerCase(),
        n =
          (e = o("WAWebABProps")
            .getABPropConfigValue("screening_audio_hint_supported_locales")
            .split(",")
            .map(function (e) {
              return e.trim().toLowerCase();
            })
            .find(function (e) {
              return e === t;
            })) != null
            ? e
            : _;
      return { locale: n, waLocale: t };
    }
    function R() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "call_screening_voicemail_beep_tone",
      );
      return e > 0 ? "" + p + e : null;
    }
    function L(e, t) {
      return r("WAWebURLUtils").build("" + e + c, { cat: d, id: t });
    }
    function E(e) {
      return new Promise(function (t) {
        var n = new Audio(e),
          a = window.setTimeout(function () {
            return l(!1);
          }, f),
          i = { audio: n, finish: l };
        function l(e) {
          h === i &&
            ((h = null),
            window.clearTimeout(a),
            (n.onended = null),
            (n.onerror = null),
            n.pause(),
            t(e));
        }
        ((h = i),
          (n.onended = function () {
            return l(!0);
          }),
          (n.onerror = function () {
            return l(!1);
          }),
          k(n)
            .then(function () {
              return h === i ? n.play() : void 0;
            })
            .catch(function (e) {
              h === i &&
                (o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: screening prompt clip failed to play",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-screening-prompt-play-failed"),
                l(!1));
            }));
      });
    }
    async function k(e) {
      (await o("WAWebAudioDeviceManager").applyPreferredAudioOutputSink(
        e,
        "voip:ScreeningPrompt",
      )) ||
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: screening prompt plays on the default output",
            ])),
        );
    }
    ((l.playScreeningPrompt = C), (l.stopScreeningPrompt = b));
  },
  98,
);
