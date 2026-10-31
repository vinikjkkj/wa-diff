__d(
  "WAWebVoipScreeningPrompt",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
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
            t,
            r = new (c || (c = n("Promise")))(function (n) {
              t = window.setTimeout(function () {
                (e === C &&
                  (o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: screening prompt timed out",
                        ])),
                    )
                    .sendLogs("voip-screening-prompt-timed-out"),
                  S()),
                  n(!1));
              }, h);
            });
          try {
            return yield (c || (c = n("Promise"))).race([R(e), r]);
          } finally {
            window.clearTimeout(t);
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      var e;
      (C++, (e = y) == null || e.finish(!1));
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebMediaHostsUtil").getStaticMediaHostName(),
            r = function (o) {
              return e === C
                ? D(T(t, o))
                : (c || (c = n("Promise"))).resolve(!1);
            },
            a = I();
          return (yield r(E())) && (a == null || (yield r(a)));
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      var e = k(
        o("WAWebABProps").getABPropConfigValue(
          "screening_audio_hint_supported_locales",
        ),
        r("WAWebL10N").getNormalizedLocale(),
      );
      return "" + p + e;
    }
    function k(e, t) {
      var n,
        r = t.replaceAll("-", "_").toLowerCase();
      return (n = e
        .split(",")
        .map(function (e) {
          return e.trim().toLowerCase();
        })
        .find(function (e) {
          return e === r;
        })) != null
        ? n
        : f;
    }
    function I() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "call_screening_voicemail_beep_tone",
      );
      return e > 0 ? "" + _ + e : null;
    }
    function T(e, t) {
      return r("WAWebURLUtils").build("" + e + d, { cat: m, id: t });
    }
    function D(t) {
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
          x(a)
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
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        $.apply(this, arguments)
      );
    }
    ((l.playScreeningPrompt = b), (l.stopScreeningPrompt = S));
  },
  98,
);
