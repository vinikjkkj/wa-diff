__d(
  "MAIBAChatSettingsContext",
  [
    "MetaConfig",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
    "useToggle",
  ],
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
      var t = o("react-compiler-runtime").c(19),
        n = e.children,
        a = e.darkModeEnabled,
        i = e.toggleDarkMode,
        l = a === void 0 ? !1 : a,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = r("MetaConfig")._("163")), (t[0] = u))
        : (u = t[0]);
      var c = u,
        d = r("useToggle")(!1),
        p = d[0],
        f = d[1],
        g = r("useToggle")(m),
        h = g[0],
        y = g[1],
        C = r("useToggle")(!1),
        b = C[0],
        v = C[1],
        S = r("useToggle")(c),
        R = S[0],
        L = S[1],
        E = r("useToggle")(!1),
        k = E[0],
        I = E[1],
        T = r("useToggle")(!1),
        D = T[0],
        x = T[1],
        $ = r("useToggle")(!1),
        P = $[0],
        N = $[1],
        M = i != null ? l : p,
        w = i != null ? i : f,
        A;
      t[1] !== b ||
      t[2] !== h ||
      t[3] !== P ||
      t[4] !== M ||
      t[5] !== w ||
      t[6] !== R ||
      t[7] !== k ||
      t[8] !== D ||
      t[9] !== v ||
      t[10] !== y ||
      t[11] !== N ||
      t[12] !== L ||
      t[13] !== I ||
      t[14] !== x
        ? ((A = {
            agentBadgeEnabled: b,
            darkModeEnabled: M,
            debugMode: h,
            displayToolCallsEnabled: P,
            latencyTimerEnabled: R,
            loadingStatesSourcesEnabled: k,
            suggestedPromptsEnabled: D,
            toggleAgentBadge: v,
            toggleDarkMode: w,
            toggleDebugMode: y,
            toggleDisplayToolCallsEnabled: N,
            toggleLatencyTimer: L,
            toggleLoadingStatesSources: I,
            toggleSuggestedPrompts: x,
          }),
          (t[1] = b),
          (t[2] = h),
          (t[3] = P),
          (t[4] = M),
          (t[5] = w),
          (t[6] = R),
          (t[7] = k),
          (t[8] = D),
          (t[9] = v),
          (t[10] = y),
          (t[11] = N),
          (t[12] = L),
          (t[13] = I),
          (t[14] = x),
          (t[15] = A))
        : (A = t[15]);
      var F = A,
        O;
      return (
        t[16] !== n || t[17] !== F
          ? ((O = s.jsx(_.Provider, { value: F, children: n })),
            (t[16] = n),
            (t[17] = F),
            (t[18] = O))
          : (O = t[18]),
        O
      );
    }
    function g() {
      return c(_);
    }
    ((l.MAIBAChatSettingContextProvider = f),
      (l.useMAIBAChatSettingsContext = g));
  },
  98,
);
