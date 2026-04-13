__d(
  "WAWebAiModeSelector.react",
  [
    "fbt",
    "WAWebAiModeSelectorUtils",
    "WAWebBotBaseGating",
    "WAWebDynamicAIModesCache",
    "WAWebGetAvailableBotSelectionModes",
    "WAWebMaybeGetBotModeSelection",
    "WAWebUpdateBotModeSelectionAction",
    "WDSChip.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBotModeSelection",
    "useWAWebDynamicBotModeOverride",
    "useWAWebResolvedBotMode",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState;
    function _(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.chat,
        a = e.threadId,
        i = o("useWAWebResolvedBotMode").useWAWebResolvedBotMode(n, a),
        l = i.icon,
        s = i.subtitle,
        c = i.title,
        d;
      t[0] !== l || t[1] !== c
        ? ((d = u.jsx(r("WDSChip.react"), {
            Icon: l,
            label: c,
            isNeutral: !0,
            testid: void 0,
            isDisabled: !0,
          })),
          (t[0] = l),
          (t[1] = c),
          (t[2] = d))
        : (d = t[2]);
      var m = d,
        p;
      return (
        t[3] !== m || t[4] !== s
          ? ((p = u.jsx("div", {
              children:
                s != null
                  ? u.jsx(r("WDSTooltip.react"), { label: s, children: m })
                  : m,
            })),
            (t[3] = m),
            (t[4] = s),
            (t[5] = p))
          : (p = t[5]),
        p
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.chat,
        a = e.threadId,
        i = o("useWAWebBotModeSelection").useWAWebBotModeSelection(n, a),
        l = i[0],
        s = p(null),
        c = s[0],
        _ = s[1],
        f = p(l),
        h = f[0],
        y = f[1];
      l !== h && (y(l), _(null));
      var C = c != null ? c : l,
        b;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = []), (t[0] = b))
        : (b = t[0]),
        d(g, b));
      var v;
      t[1] !== C
        ? ((v = o("WAWebAiModeSelectorUtils").getBotUserSelectModeIcon(C)),
          (t[1] = C),
          (t[2] = v))
        : (v = t[2]);
      var S = v,
        R;
      t[3] !== C
        ? ((R = o("WAWebAiModeSelectorUtils").getBotUserSelectModeTitle(C)),
          (t[3] = C),
          (t[4] = R))
        : (R = t[4]);
      var L = R,
        E = m(null),
        k = function (t) {
          (_(t),
            o("WAWebUpdateBotModeSelectionAction").persistBotModeSelection({
              chat: n,
              threadId: a,
              botModeSelection: [t],
            }),
            P());
        },
        I = r("useWDSMenu")({
          targetRef: E,
          menu: u.jsx(r("WDSMenu.react"), {
            children: o("WAWebGetAvailableBotSelectionModes")
              .getAvailableBotSelectionModes()
              .map(function (e) {
                return u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    testid: void 0,
                    Icon: o(
                      "WAWebAiModeSelectorUtils",
                    ).getBotUserSelectModeIcon(e),
                    title: o(
                      "WAWebAiModeSelectorUtils",
                    ).getBotUserSelectModeTitle(e),
                    subtitle: o(
                      "WAWebAiModeSelectorUtils",
                    ).getBotUserSelectModeSubtitle(e),
                    isToggleable: !0,
                    toggled: e === C,
                    onPress: function () {
                      return k(e);
                    },
                  },
                  "ai-mode-" + String(e),
                );
              }),
          }),
          position: "above",
          align: "end",
        }),
        T = I.closeMenu,
        D = I.isMenuOpen,
        x = I.menuPortal,
        $ = I.openMenu,
        P = T,
        N;
      t[5] !== S || t[6] !== D || t[7] !== L || t[8] !== $
        ? ((N = u.jsx(r("WDSChip.react"), {
            ref: E,
            Icon: S,
            label: L,
            isNeutral: !0,
            onPress: $,
            "aria-expanded": D,
            isSelected: D,
            testid: void 0,
          })),
          (t[5] = S),
          (t[6] = D),
          (t[7] = L),
          (t[8] = $),
          (t[9] = N))
        : (N = t[9]);
      var M;
      return (
        t[10] !== x || t[11] !== N
          ? ((M = u.jsxs("div", { children: [N, x] })),
            (t[10] = x),
            (t[11] = N),
            (t[12] = M))
          : (M = t[12]),
        M
      );
    }
    function g() {
      return h;
    }
    function h() {
      o("WAWebMaybeGetBotModeSelection").clearInMemoryBotMode();
    }
    function y(e) {
      var t,
        n = o("react-compiler-runtime").c(23),
        a = e.chat,
        i = e.threadId,
        l = o("useWAWebDynamicBotModeOverride").useWAWebDynamicBotModeOverride(
          a,
          i,
        ),
        c = p(null),
        _ = c[0],
        f = c[1],
        g = p(l),
        h = g[0],
        y = g[1];
      l !== h && (y(l), f(null));
      var b =
          (t = o("WAWebDynamicAIModesCache").getStaleCachedDynamicAIModes()) !=
          null
            ? t
            : [],
        v;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = o("WAWebDynamicAIModesCache").getDefaultDynamicAIMode()),
          (n[0] = v))
        : (v = n[0]);
      var S = v,
        R = _ != null ? _ : l,
        L =
          R != null &&
          b.length > 0 &&
          !b.some(function (e) {
            return e.modeId === R.modeId;
          }),
        E = L ? S : R != null ? R : S,
        k,
        I;
      (n[1] !== a || n[2] !== L || n[3] !== i
        ? ((k = function () {
            L &&
              o(
                "WAWebUpdateBotModeSelectionAction",
              ).persistDynamicBotModeOverride({
                chat: a,
                threadId: i,
                botModeOverride: [S.modeId],
              });
          }),
          (I = [L, a, i, S.modeId]),
          (n[1] = a),
          (n[2] = L),
          (n[3] = i),
          (n[4] = k),
          (n[5] = I))
        : ((k = n[4]), (I = n[5])),
        d(k, I));
      var T;
      (n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = []), (n[6] = T))
        : (T = n[6]),
        d(C, T));
      var D;
      n[7] !== E.type
        ? ((D = o("WAWebAiModeSelectorUtils").getDynamicModeIcon(E.type)),
          (n[7] = E.type),
          (n[8] = D))
        : (D = n[8]);
      var x = D,
        $ = m(null),
        P = function (t) {
          (f(t),
            o(
              "WAWebUpdateBotModeSelectionAction",
            ).persistDynamicBotModeOverride({
              chat: a,
              threadId: i,
              botModeOverride: [t.modeId],
            }),
            B());
        },
        N = b.length <= 1,
        M = r("useWDSMenu")({
          targetRef: $,
          menu: u.jsx(r("WDSMenu.react"), {
            children: b.map(function (e) {
              var t = e.isExperimental
                ? s._(/*BTDS*/ "{subtitle} \u00b7 {internalTag}", [
                    s._param("subtitle", e.subtitle),
                    s._param("internalTag", s._(/*BTDS*/ "Internal only")),
                  ])
                : e.subtitle;
              return u.jsx(
                r("WDSMenuItem.react"),
                {
                  testid: void 0,
                  Icon: o("WAWebAiModeSelectorUtils").getDynamicModeIcon(
                    e.type,
                  ),
                  title: e.title,
                  subtitle: t,
                  isToggleable: !0,
                  toggled: E.modeId === e.modeId,
                  onPress: function () {
                    return P(e);
                  },
                },
                "ai-mode-" + e.modeId,
              );
            }),
          }),
          position: "above",
          align: "end",
        }),
        w = M.closeMenu,
        A = M.isMenuOpen,
        F = M.menuPortal,
        O = M.openMenu,
        B = w;
      if (b.length === 0) return null;
      if (N) {
        var W = E.subtitle,
          q;
        n[9] !== x || n[10] !== E.title
          ? ((q = u.jsx(r("WDSChip.react"), {
              Icon: x,
              label: E.title,
              isNeutral: !0,
              testid: void 0,
              isDisabled: !0,
            })),
            (n[9] = x),
            (n[10] = E.title),
            (n[11] = q))
          : (q = n[11]);
        var U = q,
          V;
        return (
          n[12] !== U || n[13] !== W
            ? ((V = u.jsx("div", {
                children:
                  W != null && W !== ""
                    ? u.jsx(r("WDSTooltip.react"), { label: W, children: U })
                    : U,
              })),
              (n[12] = U),
              (n[13] = W),
              (n[14] = V))
            : (V = n[14]),
          V
        );
      }
      var H;
      n[15] !== x || n[16] !== E.title || n[17] !== A || n[18] !== O
        ? ((H = u.jsx(r("WDSChip.react"), {
            ref: $,
            Icon: x,
            label: E.title,
            isNeutral: !0,
            onPress: O,
            "aria-expanded": A,
            isSelected: A,
            testid: void 0,
          })),
          (n[15] = x),
          (n[16] = E.title),
          (n[17] = A),
          (n[18] = O),
          (n[19] = H))
        : (H = n[19]);
      var G;
      return (
        n[20] !== F || n[21] !== H
          ? ((G = u.jsxs("div", { children: [H, F] })),
            (n[20] = F),
            (n[21] = H),
            (n[22] = G))
          : (G = n[22]),
        G
      );
    }
    function C() {
      return b;
    }
    function b() {
      o("WAWebMaybeGetBotModeSelection").clearInMemoryBotModeOverride();
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.chat,
        r = e.isInteractive,
        a = e.threadId,
        i = r === void 0 ? !1 : r;
      if (i) {
        if (o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()) {
          var l;
          return (
            t[0] !== n || t[1] !== a
              ? ((l = u.jsx(y, { chat: n, threadId: a })),
                (t[0] = n),
                (t[1] = a),
                (t[2] = l))
              : (l = t[2]),
            l
          );
        }
        var s;
        return (
          t[3] !== n || t[4] !== a
            ? ((s = u.jsx(f, { chat: n, threadId: a })),
              (t[3] = n),
              (t[4] = a),
              (t[5] = s))
            : (s = t[5]),
          s
        );
      }
      var c;
      return (
        t[6] !== n || t[7] !== a
          ? ((c = u.jsx(_, { chat: n, threadId: a })),
            (t[6] = n),
            (t[7] = a),
            (t[8] = c))
          : (c = t[8]),
        c
      );
    }
    l.default = v;
  },
  226,
);
