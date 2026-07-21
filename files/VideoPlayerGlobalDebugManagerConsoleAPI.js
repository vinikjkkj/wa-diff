__d(
  "VideoPlayerGlobalDebugManagerConsoleAPI",
  [
    "ExecutionEnvironment",
    "GlobalVideoPortsContexts",
    "VideoPlayerHooks",
    "clearTimeout",
    "cr:32375",
    "gkx",
    "mergeRefs",
    "performanceNow",
    "react",
    "react-compiler-runtime",
    "removeFromArray",
    "setTimeout",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = u || (u = o("react")),
      m = u,
      p = m.useContext,
      _ = m.useEffect,
      f = m.useMemo,
      g = m.useRef,
      h = d.createContext(null);
    function y() {
      var t = o("react-compiler-runtime").c(5),
        n = (c || (c = o("VideoPlayerHooks"))).useController(),
        a = c.useInstanceKey(),
        i = p(h),
        l,
        s;
      (t[0] !== i || t[1] !== n || t[2] !== a
        ? ((l = function () {
            var t = {
              perfMs: (e || (e = r("performanceNow")))(),
              unixMs: Date.now(),
            };
            return i == null
              ? void 0
              : i.registerPlayerInstance({
                  controller: n,
                  playerInstanceKey: a,
                  registeredAt: t,
                });
          }),
          (s = [i, n, a]),
          (t[0] = i),
          (t[1] = n),
          (t[2] = a),
          (t[3] = l),
          (t[4] = s))
        : ((l = t[3]), (s = t[4])),
        _(l, s));
    }
    var C = "__FB_VIDEO_DEBUG",
      b = "__FB_VIDEO_DEBUG_EXTERNAL";
    function v(e, t) {
      var a = o("react-compiler-runtime").c(9),
        i = g(e),
        l = o("GlobalVideoPortsContexts").useGlobalVideoPortsState(),
        s = g(l),
        u = g(t),
        c = g(null),
        m = r("useStable")(T),
        p;
      (a[0] !== t || a[1] !== l || a[2] !== e
        ? ((p = function () {
            ((i.current = e), (s.current = l), (u.current = t));
          }),
          (a[0] = t),
          (a[1] = l),
          (a[2] = e),
          (a[3] = p))
        : (p = a[3]),
        _(p, void 0));
      var f, y;
      (a[4] !== m.players
        ? ((f = function () {
            var e,
              t = { current: null },
              o = function (n) {
                for (
                  var e = arguments.length,
                    r = new Array(e > 1 ? e - 1 : 0),
                    o = 1;
                  o < e;
                  o++
                )
                  r[o - 1] = arguments[o];
                var a = r,
                  l = i.current,
                  u = s.current,
                  c = { globalVideoPortsState: u, players: m.players };
                e: switch (n) {
                  case !0: {
                    l(k);
                    break e;
                  }
                  case !1: {
                    l(E);
                    break e;
                  }
                  case void 0:
                    break e;
                  case "console_ui_on": {
                    var d;
                    (d = t.current) == null || d.setIsClosed(!1);
                    break e;
                  }
                  case "console_ui_off": {
                    var p;
                    (p = t.current) == null || p.setIsClosed(!0);
                    break e;
                  }
                  case "floating_on":
                  case "floating_off": {
                    var _ =
                      typeof a[0] == "string" || typeof a[0] == "number"
                        ? String(a[0])
                        : "all";
                    l(function (e) {
                      return babelHelpers.extends({}, e, {
                        floatingOverlayIdentifier: (function () {
                          switch (n) {
                            case "floating_on":
                              return _;
                            case "floating_off":
                              return _ === "all" ||
                                e.floatingOverlayIdentifier === _
                                ? null
                                : e.floatingOverlayIdentifier;
                            default:
                              return e.floatingOverlayIdentifier;
                          }
                        })(),
                        isVisible: n === "floating_on" ? !0 : e.isVisible,
                      });
                    });
                    break e;
                  }
                  default:
                }
                return c;
              },
              a = function (t) {
                var e = i.current,
                  n = s.current,
                  r = { globalVideoPortsState: n, players: m.players };
                e: switch (t) {
                  case !0: {
                    e(L);
                    break e;
                  }
                  case !1: {
                    e(R);
                    break e;
                  }
                  case void 0: {
                    e(S);
                    break e;
                  }
                  default:
                }
                return r;
              };
            return (
              (window[C] = o),
              (window[b] = a),
              n("cr:32375") &&
                !c.current &&
                (c.current = n("cr:32375").init(
                  m.players,
                  r("mergeRefs")(t, u.current),
                )),
              function () {
                (r("clearTimeout")(e),
                  window[C] === o && delete window[C],
                  window[b] === a && delete window[b],
                  c.current && (c.current(), (c.current = null)));
              }
            );
          }),
          (y = [m.players]),
          (a[4] = m.players),
          (a[5] = f),
          (a[6] = y))
        : ((f = a[5]), (y = a[6])),
        _(f, y));
      var v;
      if (a[7] !== m) {
        var I = function (t) {
          var e = t.children;
          return d.jsx(h.Provider, { value: m, children: e });
        };
        ((v = { ConsoleApiForPlayersProvider: I }), (a[7] = m), (a[8] = v));
      } else v = a[8];
      return v;
    }
    function S(e) {
      return babelHelpers.extends({}, e, {
        defaultOverlayName: "External",
        isVisible: !e.isVisible,
      });
    }
    function R(e) {
      return babelHelpers.extends({}, e, { isVisible: !1 });
    }
    function L(e) {
      return babelHelpers.extends({}, e, {
        defaultOverlayName: "External",
        isVisible: !0,
      });
    }
    function E(e) {
      return babelHelpers.extends({}, e, { isVisible: !1 });
    }
    function k(e) {
      return babelHelpers.extends({}, e, { isVisible: !0 });
    }
    function I() {
      x(
        "\n" +
          (" - " + C + "() to toggle visibility of all overlays,\n") +
          (" - " + C + "(true) to show all overlays,\n") +
          (" - " + C + "(false) to hide all overlays.\n") +
          (" - " +
            C +
            "('floating_on') to turn on floating of all overlays.\n") +
          (" - " +
            C +
            "('floating_off') to turn off floating of all overlays.\n") +
          (" - " + b + "() to toggle the external debug overlay.\n") +
          (" - " + b + "(true) to show the external debug overlay.\n") +
          (" - " + b + "(false) to hide the external debug overlay.\n") +
          "\n",
      );
    }
    function T() {
      var e = [];
      return {
        players: e,
        registerPlayerInstance: function (n) {
          return (
            e.push(n),
            function () {
              r("removeFromArray")(e, n);
            }
          );
        },
      };
    }
    function D(e, t) {
      var n = o("react-compiler-runtime").c(1),
        r;
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = { ConsoleApiForPlayersProvider: d.Fragment }), (n[0] = r))
          : (r = n[0]),
        r
      );
    }
    function x(e) {
      for (
        var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
        o < n;
        o++
      )
        r[o - 1] = arguments[o];
      (t = window.console).log.apply(
        t,
        ["Video Debug Console API: " + e + "."].concat(r),
      );
    }
    var $ =
      r("gkx")("24337") && (s || (s = r("ExecutionEnvironment"))).canUseDOM
        ? v
        : D;
    ((l.useExposeToVideoPlayerGlobalDebugManager = y),
      (l.useExposeConsoleApi = $));
  },
  98,
);
