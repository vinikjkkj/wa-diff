__d(
  "WAWebVoipNetworkMedium",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebNetworkStatus",
    "WAWebVoipEventConstants",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = n("$InternalEnum")({ CELLULAR: 1, WIFI: 2, NONE: 3 }),
      f = 0,
      g = _.NONE,
      h = !1;
    function y() {
      var e,
        n =
          (e = t.navigator) == null || (e = e.connection) == null
            ? void 0
            : e.type;
      return n == null
        ? _.WIFI
        : n === "cellular"
          ? _.CELLULAR
          : n === "wifi" || n === "ethernet"
            ? _.WIFI
            : n === "bluetooth" || n === "wimax"
              ? _.CELLULAR
              : n === "none"
                ? _.NONE
                : _.WIFI;
    }
    function C(e) {
      return e === _.NONE
        ? "NONE"
        : e === _.CELLULAR
          ? "CELLULAR"
          : e === _.WIFI
            ? "WIFI"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            t != null &&
              t.updateNetworkMedium &&
              (yield t.updateNetworkMedium(e, f),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: network medium updated: ",
                    ", MTU: ",
                    "",
                  ])),
                C(e),
                f,
              ));
          } catch (e) {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: failed to update network medium: ",
                  "",
                ])),
              String(e),
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = y();
          e !== g && ((g = e), yield b(e));
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      S().catch(function (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleNetworkChange error: ",
              "",
            ])),
          t,
        );
      });
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("WAWebNetworkStatus").online
            ? (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: network came back online, detecting actual medium type",
                  ])),
              ),
              yield S())
            : (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: offline, updating stack medium=NONE",
                  ])),
              ),
              (g = _.NONE),
              yield b(_.NONE));
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      var e;
      if (!h) {
        S().catch(function (e) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: initial network medium detection error: ",
                "",
              ])),
            e,
          );
        });
        var n = (e = t.navigator) == null ? void 0 : e.connection;
        (n &&
          typeof n.addEventListener == "function" &&
          n.addEventListener("change", L),
          r("WAWebNetworkStatus").on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipNetworkEvents.ONLINE,
            ),
            E,
          ),
          r("WAWebNetworkStatus").on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipNetworkEvents.OFFLINE,
            ),
            E,
          ),
          (h = !0),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: network medium monitoring started",
              ])),
          ));
      }
    }
    l.startNetworkMediumMonitoring = I;
  },
  98,
);
