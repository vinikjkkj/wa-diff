__d(
  "WAWebDeveloperMenuPromotedDebugCommands.react",
  [
    "WALogger",
    "WAWebBusinessWebsiteIcon.react",
    "WAWebCallNewRefreshedIcon.react",
    "WAWebClientFeatureFlags",
    "WAWebCpuPressureStressWorkerResource",
    "WAWebDebug",
    "WAWebDebugBizVPVOverlay",
    "WAWebDebugErrorToast",
    "WAWebDebugHiddenBotChats",
    "WAWebDebugVoipInfo",
    "WAWebDeveloperMenuDeveloperMenuIcons.react",
    "WAWebL10N",
    "WAWebMenuItems.react",
    "WAWebSettingsThemeIcon.react",
    "WAWebThemeContext",
    "WDSIconIcNotifications.react",
    "WDSSlider.react",
    "WDSText.react",
    "WorkerBundleResource",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState;
    function g() {
      var e = o("react-compiler-runtime").c(5),
        t;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var n;
        ((t =
          (n = document.body) == null ? void 0 : n.classList.contains("e2e")),
          (e[0] = t));
      } else t = e[0];
      var a = r("useWAWebToggle")(!!t, r("WAWebDebug").toggleE2EDebugMode),
        i = a[0],
        l = a[1],
        s;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = c.jsx(
            o("WAWebDeveloperMenuDeveloperMenuIcons.react").E2EDebugModeIcon,
            {},
          )),
          (e[1] = s))
        : (s = e[1]);
      var u;
      return (
        e[2] !== i || e[3] !== l
          ? ((u = c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
              optionId: "e2e-debug",
              primary: "E2E Debug Mode",
              detailLeft: s,
              initialState: i,
              onSelect: l,
            })),
            (e[2] = i),
            (e[3] = l),
            (e[4] = u))
          : (u = e[4]),
        u
      );
    }
    function h() {
      var e = o("react-compiler-runtime").c(5),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o("WAWebClientFeatureFlags").isFeatureEnabled(
            "debug_commands",
          )),
          (e[0] = t))
        : (t = e[0]);
      var n = r("useWAWebToggle")(t, r("WAWebDebug").toggleDebugCommands),
        a = n[0],
        i = n[1],
        l;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = c.jsx(
            o("WAWebDeveloperMenuDeveloperMenuIcons.react").DebugCommandsIcon,
            {},
          )),
          (e[1] = l))
        : (l = e[1]);
      var s;
      return (
        e[2] !== a || e[3] !== i
          ? ((s = c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
              optionId: "debug-commands",
              primary: "Debug Commands",
              detailLeft: l,
              initialState: a,
              onSelect: i,
            })),
            (e[2] = a),
            (e[3] = i),
            (e[4] = s))
          : (s = e[4]),
        s
      );
    }
    function y() {
      var e = o("react-compiler-runtime").c(1),
        t = C,
        n;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
              optionId: "rtl",
              primary: "RTL",
              detailLeft: c.jsx(
                o("WAWebBusinessWebsiteIcon.react").BusinessWebsiteIcon,
                {},
              ),
              initialState: r("WAWebL10N").isRTL(),
              onSelect: t,
            })),
            (e[0] = n))
          : (n = e[0]),
        n
      );
    }
    function C(e) {
      r("WAWebDebug").toggleRTL(e);
    }
    function b() {
      var e = o("react-compiler-runtime").c(4),
        t = r("useWAWebToggle")(v, r("WAWebDebug").toggleDarkMode),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = c.jsx(o("WAWebSettingsThemeIcon.react").SettingsThemeIcon, {})),
          (e[0] = i))
        : (i = e[0]);
      var l;
      return (
        e[1] !== n || e[2] !== a
          ? ((l = c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
              optionId: "dark-mode",
              primary: "Dark Mode",
              detailLeft: i,
              initialState: n,
              onSelect: a,
            })),
            (e[1] = n),
            (e[2] = a),
            (e[3] = l))
          : (l = e[3]),
        l
      );
    }
    function v() {
      return o("WAWebThemeContext").isDarkTheme();
    }
    function S() {
      var e = o("react-compiler-runtime").c(1),
        t = R,
        n;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
              optionId: "simulateWebAnr",
              testid: void 0,
              detailLeft: c.jsx(
                o("WAWebCallNewRefreshedIcon.react").CallNewRefreshedIcon,
                {},
              ),
              onSelect: t,
              primary: "Simulate Web ANR (5s)",
              searchCriteria: "Simulate Web ANR",
            })),
            (e[0] = n))
          : (n = e[0]),
        n
      );
    }
    function R() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[voip:devMenu] Simulating web ANR (5s main thread block)",
          ])),
      );
      for (var t = Date.now(); Date.now() - t < 5e3; );
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[voip:devMenu] Web ANR simulation complete",
          ])),
      );
    }
    function L() {
      var e = o("react-compiler-runtime").c(1),
        t = E,
        n;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
              optionId: "error-toast",
              primary: "Display Error Toast",
              detailLeft: c.jsx(r("WDSIconIcNotifications.react"), {}),
              initialState: o("WAWebDebugErrorToast").isErrorToastEnabled(),
              onSelect: t,
            })),
            (e[0] = n))
          : (n = e[0]),
        n
      );
    }
    function E(e) {
      o("WAWebDebugErrorToast").setErrorToast(e);
    }
    function k() {
      var e = o("react-compiler-runtime").c(1),
        t = I,
        n;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
              optionId: "show-hidden-bot-chats",
              primary: "Show Hidden Bot Chats",
              detailLeft: c.jsx(r("WDSIconIcNotifications.react"), {}),
              initialState: o(
                "WAWebDebugHiddenBotChats",
              ).isShowHiddenBotChatsEnabled(),
              onSelect: t,
            })),
            (e[0] = n))
          : (n = e[0]),
        n
      );
    }
    function I(e) {
      o("WAWebDebugHiddenBotChats").setShowHiddenBotChats(e);
    }
    function T() {
      var e = o("react-compiler-runtime").c(1),
        t = D,
        n;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
              optionId: "vpv-overlay",
              primary: "VPV Debug Overlay",
              detailLeft: c.jsx(
                o("WAWebBusinessWebsiteIcon.react").BusinessWebsiteIcon,
                {},
              ),
              initialState: o("WAWebDebugBizVPVOverlay").isVPVOverlayEnabled(),
              onSelect: t,
            })),
            (e[0] = n))
          : (n = e[0]),
        n
      );
    }
    function D(e) {
      o("WAWebDebugBizVPVOverlay").enableVPVOverlay(e);
    }
    function x() {
      var e = o("react-compiler-runtime").c(1),
        t = $,
        n;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
              optionId: "voip-debug-info",
              primary: "VoIP Debug Info",
              detailLeft: c.jsx(
                o("WAWebCallNewRefreshedIcon.react").CallNewRefreshedIcon,
                {},
              ),
              initialState: o("WAWebDebugVoipInfo").isVoipDebugInfoEnabled(),
              onSelect: t,
            })),
            (e[0] = n))
          : (n = e[0]),
        n
      );
    }
    function $(e) {
      o("WAWebDebugVoipInfo").setVoipDebugInfo(e);
    }
    var P = {
        0: "Off",
        1: "Light (1 worker)",
        2: "Moderate (2 workers)",
        3: "Heavy (4 workers)",
        4: "Extreme (8 workers)",
      },
      N = { 0: 0, 1: 1, 2: 2, 3: 4, 4: 8 };
    function M() {
      var e = o("react-compiler-runtime").c(24),
        t = f(0),
        a = t[0],
        i = t[1],
        l = f("unknown"),
        s = l[0],
        u = l[1],
        d = f(0),
        m = d[0],
        g = d[1],
        h;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = []), (e[0] = h))
        : (h = e[0]);
      var y = _(h),
        C = _(null),
        b,
        v;
      (e[1] !== a
        ? ((b = function () {
            for (
              var e, t = (e = N[a]) != null ? e : 0;
              y.current.length > t;
            ) {
              var n = y.current.pop();
              n != null && (n.postMessage({ type: "stop" }), n.terminate());
            }
            for (; y.current.length < t; )
              try {
                var i = o("WorkerBundleResource").createDedicatedWebWorker(
                  r("WAWebCpuPressureStressWorkerResource"),
                );
                ((i.onmessage = F),
                  (i.onerror = A),
                  i.postMessage({ type: "start", level: a }),
                  y.current.push(i));
              } catch (e) {
                var l = e;
                break;
              }
            return (
              g(y.current.length),
              "" + a + y.current.length,
              function () {
                for (var e of y.current)
                  (e.postMessage({ type: "stop" }), e.terminate());
                y.current = [];
              }
            );
          }),
          (v = [a]),
          (e[1] = a),
          (e[2] = b),
          (e[3] = v))
        : ((b = e[2]), (v = e[3])),
        p(b, v));
      var S, R;
      (e[4] !== a
        ? ((S = function () {
            var e = null,
              t = "nominal",
              r = (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (!(self == null || !("PressureObserver" in self)))
                      try {
                        var n = new self.PressureObserver(function (e) {
                          for (var n of e) ((t = n.state), u(n.state));
                        });
                        (yield n.observe("cpu", { sampleInterval: 1e3 }),
                          (C.current = n),
                          (e = window.setInterval(function () {
                            "" + t + a + y.current.length;
                          }, 3e3)));
                      } catch (e) {
                        var r = e;
                      }
                  },
                );
                return function () {
                  return r.apply(this, arguments);
                };
              })();
            return (
              r(),
              function () {
                (e != null && window.clearInterval(e),
                  C.current != null &&
                    (C.current.disconnect(), (C.current = null)));
              }
            );
          }),
          (R = [a]),
          (e[4] = a),
          (e[5] = S),
          (e[6] = R))
        : ((S = e[5]), (R = e[6])),
        p(S, R));
      var L;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function (t) {
            var e = t[0];
            i(e);
          }),
          (e[7] = L))
        : (L = e[7]);
      var E = L,
        k = w,
        I,
        T,
        D;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = { className: "xdx6fka xvtqlqk x16ovd2e x12xbjc7" }),
          (T = c.jsxs("div", {
            className: "x78zum5 x6s0dn4 x1qvou4u x1s70e7g xefnzgg",
            children: [
              c.jsx(
                o("WAWebCallNewRefreshedIcon.react").CallNewRefreshedIcon,
                {},
              ),
              c.jsx(r("WDSText.react"), {
                type: "Body1Emphasized",
                colorName: "contentDefault",
                children: "Change CPU pressure",
              }),
            ],
          })),
          (D = { className: "xav9cv8" }),
          (e[8] = I),
          (e[9] = T),
          (e[10] = D))
        : ((I = e[8]), (T = e[9]), (D = e[10]));
      var x;
      e[11] !== a
        ? ((x = c.jsx(
            "div",
            babelHelpers.extends({}, D, {
              children: c.jsx(r("WDSSlider.react"), {
                "aria-label": "CPU pressure level",
                min: 0,
                max: 4,
                step: 1,
                values: [a],
                onChange: E,
                displayValueText: k,
                startEndLabels: "currentValues",
              }),
            }),
          )),
          (e[11] = a),
          (e[12] = x))
        : (x = e[12]);
      var $;
      e[13] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = { className: "x2b8uid xav9cv8" }), (e[13] = $))
        : ($ = e[13]);
      var P =
          a === 0
            ? "Stress test off"
            : "Level " + a + ": " + m + " parallel workers",
        M;
      e[14] !== P
        ? ((M = c.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            children: P,
          })),
          (e[14] = P),
          (e[15] = M))
        : (M = e[15]);
      var O;
      e[16] !== s
        ? ((O = c.jsxs(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDefault",
            children: ["Current pressure: ", s],
          })),
          (e[16] = s),
          (e[17] = O))
        : (O = e[17]);
      var B;
      e[18] !== M || e[19] !== O
        ? ((B = c.jsxs(
            "div",
            babelHelpers.extends({}, $, { children: [M, O] }),
          )),
          (e[18] = M),
          (e[19] = O),
          (e[20] = B))
        : (B = e[20]);
      var W;
      return (
        e[21] !== B || e[22] !== x
          ? ((W = c.jsxs(
              "div",
              babelHelpers.extends({}, I, { children: [T, x, B] }),
            )),
            (e[21] = B),
            (e[22] = x),
            (e[23] = W))
          : (W = e[23]),
        W
      );
    }
    function w(e) {
      var t;
      return (t = P[e]) != null ? t : "Unknown";
    }
    function A(e) {
      e.message;
    }
    function F(e) {
      var t = e.data;
      if ((t == null ? void 0 : t.type) === "started") {
        var n;
        "" + ((n = t.level) != null ? n : 0);
      } else if ((t == null ? void 0 : t.type) === "heartbeat") {
        var r;
        "" + ((r = t.iterations) != null ? r : 0);
      }
    }
    ((l.E2EDebugMode = g),
      (l.DebugCommands = h),
      (l.RTL = y),
      (l.DarkMode = b),
      (l.SimulateWebAnr = S),
      (l.ErrorToast = L),
      (l.ShowHiddenBotChats = k),
      (l.VPVOverlay = T),
      (l.VoipDebugInfo = x),
      (l.CpuPressureSlider = M));
  },
  98,
);
