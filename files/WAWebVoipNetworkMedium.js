__d(
  "WAWebVoipNetworkMedium",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebNetworkStatus",
    "WAWebVoipEventConstants",
    "WAWebVoipStackInterface",
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
    async function b(t) {
      try {
        var n = await o("WAWebVoipStackInterface").getVoipStackInterface();
        n != null &&
          n.updateNetworkMedium &&
          (await n.updateNetworkMedium(t, f),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: network medium updated: ",
                ", MTU: ",
                "",
              ])),
            C(t),
            f,
          ));
      } catch (e) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: failed to update network medium: ",
              "",
            ])),
          String(e),
        );
      }
    }
    async function v() {
      var e = y();
      e !== g && ((g = e), await b(e));
    }
    function S() {
      v().catch(function (e) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleNetworkChange error: ",
              "",
            ])),
          e,
        );
      });
    }
    async function R() {
      r("WAWebNetworkStatus").online
        ? (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: network came back online, detecting actual medium type",
              ])),
          ),
          await v())
        : (o("WAWebCoreActionsODS").logCallNetworkOffline(),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: offline, updating stack medium=NONE",
              ])),
          ),
          (g = _.NONE),
          await b(_.NONE));
    }
    function L() {
      var e;
      if (!h) {
        v().catch(function (e) {
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: initial network medium detection error: ",
                "",
              ])),
            e,
          );
        });
        var n = (e = t.navigator) == null ? void 0 : e.connection;
        (n &&
          typeof n.addEventListener == "function" &&
          n.addEventListener("change", S),
          r("WAWebNetworkStatus").on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipNetworkEvents.ONLINE,
            ),
            R,
          ),
          r("WAWebNetworkStatus").on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipNetworkEvents.OFFLINE,
            ),
            R,
          ),
          (h = !0),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: network medium monitoring started",
              ])),
          ));
      }
    }
    l.startNetworkMediumMonitoring = L;
  },
  98,
);
