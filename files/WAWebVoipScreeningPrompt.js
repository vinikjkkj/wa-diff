__d(
  "WAWebVoipScreeningPrompt",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebCallScreeningJourneyLogger",
    "WAWebL10N",
    "WAWebMediaHostsUtil",
    "WAWebURLUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "/wa/static/network_resource",
      m = "nw_media",
      p = "screening_audio_hint_",
      _ = "call_screening_voicemail_beep_",
      f = "en",
      g = 15e3,
      h = 25e3,
      y = null,
      C = 0;
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          S();
          var e = ++C,
            t = E();
          o(
            "WAWebCallScreeningJourneyLogger",
          ).CallScreeningJourneyLogger.onPromptStarted(
            t.locale === f && t.waLocale !== f,
          );
          var r = !1,
            a,
            i = new (c || (c = n("Promise")))(function (t) {
              a = window.setTimeout(function () {
                (e === C &&
                  (o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: screening prompt timed out",
                        ])),
                    )
                    .sendLogs("voip-screening-prompt-timed-out"),
                  (r = !0),
                  S()),
                  t(!1));
              }, h);
            });
          try {
            var l = yield (c || (c = n("Promise"))).race([R(e, t.locale), i]);
            return (
              l
                ? o(
                    "WAWebCallScreeningJourneyLogger",
                  ).CallScreeningJourneyLogger.onPromptCompleted()
                : (r || e === C) &&
                  o(
                    "WAWebCallScreeningJourneyLogger",
                  ).CallScreeningJourneyLogger.onPromptFailed(),
              l
            );
          } finally {
            window.clearTimeout(a);
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      var e;
      (C++, (e = y) == null || e.finish(!1));
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield o("WAWebMediaHostsUtil").getStaticMediaHostName(),
            a = function (o) {
              return e === C
                ? T(I(r, o))
                : (c || (c = n("Promise"))).resolve(!1);
            },
            i = k();
          return (yield a("" + p + t)) && (i == null || (yield a(i)));
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
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
            : f;
      return { locale: n, waLocale: t };
    }
    function k() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "call_screening_voicemail_beep_tone",
      );
      return e > 0 ? "" + _ + e : null;
    }
    function I(e, t) {
      return r("WAWebURLUtils").build("" + e + d, { cat: m, id: t });
    }
    function T(t) {
      return new (c || (c = n("Promise")))(function (n) {
        var a = new Audio(t),
          i = window.setTimeout(function () {
            return s(!1);
          }, g),
          l = { audio: a, finish: s };
        function s(e) {
          y === l &&
            ((y = null),
            window.clearTimeout(i),
            (a.onended = null),
            (a.onerror = null),
            a.pause(),
            n(e));
        }
        ((y = l),
          (a.onended = function () {
            return s(!0);
          }),
          (a.onerror = function () {
            return s(!1);
          }),
          D(a)
            .then(function () {
              return y === l ? a.play() : void 0;
            })
            .catch(function (t) {
              y === l &&
                (o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: screening prompt clip failed to play",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("voip-screening-prompt-play-failed"),
                s(!1));
            }));
      });
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebAudioDeviceManager").applyPreferredAudioOutputSink(
            e,
            "voip:ScreeningPrompt",
          )) ||
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: screening prompt plays on the default output",
                ])),
            );
        })),
        x.apply(this, arguments)
      );
    }
    ((l.playScreeningPrompt = b), (l.stopScreeningPrompt = S));
  },
  98,
);
