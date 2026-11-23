__d(
  "MAIBAChatSettingsContext",
  ["MetaConfig", "emptyFunction", "react", "useToggle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = !0,
      p = {
        agentBadgeEnabled: !1,
        darkModeEnabled: !1,
        debugMode: m,
        displayToolCallsEnabled: !1,
        latencyTimerEnabled: !1,
        loadingStatesSourcesEnabled: !1,
        suggestedPromptsEnabled: !1,
        toggleAgentBadge: r("emptyFunction"),
        toggleDarkMode: r("emptyFunction"),
        toggleDebugMode: r("emptyFunction"),
        toggleDisplayToolCallsEnabled: r("emptyFunction"),
        toggleLatencyTimer: r("emptyFunction"),
        toggleLoadingStatesSources: r("emptyFunction"),
        toggleSuggestedPrompts: r("emptyFunction"),
      },
      _ = s.createContext(p);
    function f(e) {
      var t,
        n,
        o,
        a = e.children,
        i = e.darkModeEnabled,
        l = i === void 0 ? !1 : i,
        u = e.debugSettings,
        c = e.toggleDarkMode,
        p = r("MetaConfig")._("163"),
        f = r("useToggle")(!1),
        g = f[0],
        h = f[1],
        y = r("useToggle")(m),
        C = y[0],
        b = y[1],
        v = r("useToggle")(!1),
        S = v[0],
        R = v[1],
        L = r("useToggle")(p),
        E = L[0],
        k = L[1],
        I = r("useToggle")(!1),
        T = I[0],
        D = I[1],
        x = r("useToggle")(!1),
        $ = x[0],
        P = x[1],
        N = r("useToggle")(!1),
        M = N[0],
        w = N[1],
        A = c != null ? l : g,
        F = c != null ? c : h,
        O = (t = u == null ? void 0 : u.agentBadgeEnabled) != null ? t : S,
        B = (n = u == null ? void 0 : u.debugMode) != null ? n : C,
        W = (o = u == null ? void 0 : u.latencyTimerEnabled) != null ? o : E,
        q = u == null ? R : r("emptyFunction"),
        U = u == null ? b : r("emptyFunction"),
        V = u == null ? k : r("emptyFunction"),
        H = d(
          function () {
            return {
              agentBadgeEnabled: O,
              darkModeEnabled: A,
              debugMode: B,
              displayToolCallsEnabled: M,
              latencyTimerEnabled: W,
              loadingStatesSourcesEnabled: T,
              suggestedPromptsEnabled: $,
              toggleAgentBadge: q,
              toggleDarkMode: F,
              toggleDebugMode: U,
              toggleDisplayToolCallsEnabled: w,
              toggleLatencyTimer: V,
              toggleLoadingStatesSources: D,
              toggleSuggestedPrompts: P,
            };
          },
          [O, A, B, W, T, $, q, F, U, V, D, P, M, w],
        );
      return s.jsx(_.Provider, { value: H, children: a });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return c(_);
    }
    ((l.MAIBAChatSettingContextProvider = f),
      (l.useMAIBAChatSettingsContext = g));
  },
  98,
);
