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
      var e,
        t = r("useWAWebToggle")(
          !!((e = document.body) != null && e.classList.contains("e2e")),
          r("WAWebDebug").toggleE2EDebugMode,
        ),
        n = t[0],
        a = t[1];
      return c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
        optionId: "e2e-debug",
        primary: "E2E Debug Mode",
        detailLeft: c.jsx(
          o("WAWebDeveloperMenuDeveloperMenuIcons.react").E2EDebugModeIcon,
          {},
        ),
        initialState: n,
        onSelect: a,
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      var e = r("useWAWebToggle")(
          o("WAWebClientFeatureFlags").isFeatureEnabled("debug_commands"),
          r("WAWebDebug").toggleDebugCommands,
        ),
        t = e[0],
        n = e[1];
      return c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
        optionId: "debug-commands",
        primary: "Debug Commands",
        detailLeft: c.jsx(
          o("WAWebDeveloperMenuDeveloperMenuIcons.react").DebugCommandsIcon,
          {},
        ),
        initialState: t,
        onSelect: n,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      var e = m(function (e) {
        r("WAWebDebug").toggleRTL(e);
      }, []);
      return c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
        optionId: "rtl",
        primary: "RTL",
        detailLeft: c.jsx(
          o("WAWebBusinessWebsiteIcon.react").BusinessWebsiteIcon,
          {},
        ),
        initialState: r("WAWebL10N").isRTL(),
        onSelect: e,
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      var e = r("useWAWebToggle")(function () {
          return o("WAWebThemeContext").isDarkTheme();
        }, r("WAWebDebug").toggleDarkMode),
        t = e[0],
        n = e[1];
      return c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
        optionId: "dark-mode",
        primary: "Dark Mode",
        detailLeft: c.jsx(
          o("WAWebSettingsThemeIcon.react").SettingsThemeIcon,
          {},
        ),
        initialState: t,
        onSelect: n,
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      var t = m(function () {
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
      }, []);
      return c.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
        optionId: "simulateWebAnr",
        testid: void 0,
        detailLeft: c.jsx(
          o("WAWebCallNewRefreshedIcon.react").CallNewRefreshedIcon,
          {},
        ),
        onSelect: t,
        primary: "Simulate Web ANR (5s)",
        searchCriteria: "Simulate Web ANR",
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      var e = m(function (e) {
        o("WAWebDebugErrorToast").setErrorToast(e);
      }, []);
      return c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
        optionId: "error-toast",
        primary: "Display Error Toast",
        detailLeft: c.jsx(r("WDSIconIcNotifications.react"), {}),
        initialState: o("WAWebDebugErrorToast").isErrorToastEnabled(),
        onSelect: e,
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      var e = m(function (e) {
        o("WAWebDebugHiddenBotChats").setShowHiddenBotChats(e);
      }, []);
      return c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
        optionId: "show-hidden-bot-chats",
        primary: "Show Hidden Bot Chats",
        detailLeft: c.jsx(r("WDSIconIcNotifications.react"), {}),
        initialState: o(
          "WAWebDebugHiddenBotChats",
        ).isShowHiddenBotChatsEnabled(),
        onSelect: e,
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      var e = m(function (e) {
        o("WAWebDebugBizVPVOverlay").enableVPVOverlay(e);
      }, []);
      return c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
        optionId: "vpv-overlay",
        primary: "VPV Debug Overlay",
        detailLeft: c.jsx(
          o("WAWebBusinessWebsiteIcon.react").BusinessWebsiteIcon,
          {},
        ),
        initialState: o("WAWebDebugBizVPVOverlay").isVPVOverlayEnabled(),
        onSelect: e,
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      var e = m(function (e) {
        o("WAWebDebugVoipInfo").setVoipDebugInfo(e);
      }, []);
      return c.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
        optionId: "voip-debug-info",
        primary: "VoIP Debug Info",
        detailLeft: c.jsx(
          o("WAWebCallNewRefreshedIcon.react").CallNewRefreshedIcon,
          {},
        ),
        initialState: o("WAWebDebugVoipInfo").isVoipDebugInfoEnabled(),
        onSelect: e,
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    var E = {
        0: "Off",
        1: "Light (1 worker)",
        2: "Moderate (2 workers)",
        3: "Heavy (4 workers)",
        4: "Extreme (8 workers)",
      },
      k = { 0: 0, 1: 1, 2: 2, 3: 4, 4: 8 };
    function I() {
      var e = f(0),
        t = e[0],
        a = e[1],
        i = f("unknown"),
        l = i[0],
        s = i[1],
        u = f(0),
        d = u[0],
        g = u[1],
        h = _([]),
        y = _(null);
      (p(
        function () {
          for (var e, n = (e = k[t]) != null ? e : 0; h.current.length > n; ) {
            var a = h.current.pop();
            a != null && (a.postMessage({ type: "stop" }), a.terminate());
          }
          for (; h.current.length < n; )
            try {
              var i = o("WorkerBundleResource").createDedicatedWebWorker(
                r("WAWebCpuPressureStressWorkerResource"),
              );
              ((i.onmessage = function (e) {
                var t = e.data;
                if ((t == null ? void 0 : t.type) === "started") {
                  var n;
                  "" + ((n = t.level) != null ? n : 0);
                } else if ((t == null ? void 0 : t.type) === "heartbeat") {
                  var r;
                  "" + ((r = t.iterations) != null ? r : 0);
                }
              }),
                (i.onerror = function (e) {
                  e.message;
                }),
                i.postMessage({ type: "start", level: t }),
                h.current.push(i));
            } catch (e) {
              break;
            }
          return (
            g(h.current.length),
            "" + t + h.current.length,
            function () {
              for (var e of h.current)
                (e.postMessage({ type: "stop" }), e.terminate());
              h.current = [];
            }
          );
        },
        [t],
      ),
        p(
          function () {
            var e = null,
              r = "nominal",
              o = (function () {
                var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (!(self == null || !("PressureObserver" in self)))
                      try {
                        var n = new self.PressureObserver(function (e) {
                          for (var t of e) ((r = t.state), s(t.state));
                        });
                        (yield n.observe("cpu", { sampleInterval: 1e3 }),
                          (y.current = n),
                          (e = window.setInterval(function () {
                            "" + r + t + h.current.length;
                          }, 3e3)));
                      } catch (e) {}
                  },
                );
                return function () {
                  return o.apply(this, arguments);
                };
              })();
            return (
              o(),
              function () {
                (e != null && window.clearInterval(e),
                  y.current != null &&
                    (y.current.disconnect(), (y.current = null)));
              }
            );
          },
          [t],
        ));
      var C = m(function (e) {
          var t = e[0];
          a(t);
        }, []),
        b = m(function (e) {
          var t;
          return (t = E[e]) != null ? t : "Unknown";
        }, []);
      return c.jsxs("div", {
        className: "xdx6fka xvtqlqk x16ovd2e x12xbjc7",
        children: [
          c.jsxs("div", {
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
          }),
          c.jsx("div", {
            className: "xav9cv8",
            children: c.jsx(r("WDSSlider.react"), {
              "aria-label": "CPU pressure level",
              min: 0,
              max: 4,
              step: 1,
              values: [t],
              onChange: C,
              displayValueText: b,
              startEndLabels: "currentValues",
            }),
          }),
          c.jsxs("div", {
            className: "x2b8uid xav9cv8",
            children: [
              c.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children:
                  t === 0
                    ? "Stress test off"
                    : "Level " + t + ": " + d + " parallel workers",
              }),
              c.jsxs(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDefault",
                children: ["Current pressure: ", l],
              }),
            ],
          }),
        ],
      });
    }
    ((I.displayName = I.name + " [from " + i.id + "]"),
      (l.E2EDebugMode = g),
      (l.DebugCommands = h),
      (l.RTL = y),
      (l.DarkMode = C),
      (l.SimulateWebAnr = b),
      (l.ErrorToast = v),
      (l.ShowHiddenBotChats = S),
      (l.VPVOverlay = R),
      (l.VoipDebugInfo = L),
      (l.CpuPressureSlider = I));
  },
  98,
);
