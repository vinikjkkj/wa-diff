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
      var t = e.chat,
        n = e.threadId,
        a = o("useWAWebResolvedBotMode").useWAWebResolvedBotMode(t, n),
        i = a.icon,
        l = a.subtitle,
        s = a.title,
        c = u.jsx(r("WDSChip.react"), {
          Icon: i,
          label: s,
          isNeutral: !0,
          testid: void 0,
          isDisabled: !0,
        });
      return u.jsx("div", {
        children:
          l != null
            ? u.jsx(r("WDSTooltip.react"), { label: l, children: c })
            : c,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.chat,
        n = e.threadId,
        a = o("useWAWebBotModeSelection").useWAWebBotModeSelection(t, n),
        i = a[0],
        l = p(null),
        s = l[0],
        c = l[1],
        _ = p(i),
        f = _[0],
        g = _[1];
      i !== f && (g(i), c(null));
      var h = s != null ? s : i;
      d(function () {
        return function () {
          o("WAWebMaybeGetBotModeSelection").clearInMemoryBotMode();
        };
      }, []);
      var y = o("WAWebAiModeSelectorUtils").getBotUserSelectModeIcon(h),
        C = o("WAWebAiModeSelectorUtils").getBotUserSelectModeTitle(h),
        b = m(null);
      function v(e) {
        (c(e),
          o("WAWebUpdateBotModeSelectionAction").persistBotModeSelection({
            chat: t,
            threadId: n,
            botModeSelection: [e],
          }),
          R());
      }
      var S = r("useWDSMenu")({
          targetRef: b,
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
                    toggled: e === h,
                    onPress: function () {
                      return v(e);
                    },
                  },
                  "ai-mode-" + String(e),
                );
              }),
          }),
          position: "above",
          align: "end",
        }),
        R = S.closeMenu,
        L = S.isMenuOpen,
        E = S.menuPortal,
        k = S.openMenu;
      return u.jsxs("div", {
        children: [
          u.jsx(r("WDSChip.react"), {
            ref: b,
            Icon: y,
            label: C,
            isNeutral: !0,
            onPress: k,
            "aria-expanded": L,
            isSelected: L,
            testid: void 0,
          }),
          E,
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t,
        n = e.chat,
        a = e.threadId,
        i = o("useWAWebDynamicBotModeOverride").useWAWebDynamicBotModeOverride(
          n,
          a,
        ),
        l = p(null),
        c = l[0],
        _ = l[1],
        f = p(i),
        g = f[0],
        h = f[1];
      i !== g && (h(i), _(null));
      var y =
          (t = o("WAWebDynamicAIModesCache").getStaleCachedDynamicAIModes()) !=
          null
            ? t
            : [],
        C = o("WAWebDynamicAIModesCache").getDefaultDynamicAIMode(),
        b = c != null ? c : i,
        v =
          b != null &&
          y.length > 0 &&
          !y.some(function (e) {
            return e.modeId === b.modeId;
          }),
        S = v ? C : b != null ? b : C;
      (d(
        function () {
          v &&
            o(
              "WAWebUpdateBotModeSelectionAction",
            ).persistDynamicBotModeOverride({
              chat: n,
              threadId: a,
              botModeOverride: [C.modeId],
            });
        },
        [v, n, a, C.modeId],
      ),
        d(function () {
          return function () {
            o("WAWebMaybeGetBotModeSelection").clearInMemoryBotModeOverride();
          };
        }, []));
      var R = o("WAWebAiModeSelectorUtils").getDynamicModeIcon(S.type),
        L = m(null);
      function E(e) {
        (_(e),
          o("WAWebUpdateBotModeSelectionAction").persistDynamicBotModeOverride({
            chat: n,
            threadId: a,
            botModeOverride: [e.modeId],
          }),
          T());
      }
      var k = y.length <= 1,
        I = r("useWDSMenu")({
          targetRef: L,
          menu: u.jsx(r("WDSMenu.react"), {
            children: y.map(function (e) {
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
                  toggled: S.modeId === e.modeId,
                  onPress: function () {
                    return E(e);
                  },
                },
                "ai-mode-" + e.modeId,
              );
            }),
          }),
          position: "above",
          align: "end",
        }),
        T = I.closeMenu,
        D = I.isMenuOpen,
        x = I.menuPortal,
        $ = I.openMenu;
      if (y.length === 0) return null;
      if (k) {
        var P = S.subtitle,
          N = u.jsx(r("WDSChip.react"), {
            Icon: R,
            label: S.title,
            isNeutral: !0,
            testid: void 0,
            isDisabled: !0,
          });
        return u.jsx("div", {
          children:
            P != null && P !== ""
              ? u.jsx(r("WDSTooltip.react"), { label: P, children: N })
              : N,
        });
      }
      return u.jsxs("div", {
        children: [
          u.jsx(r("WDSChip.react"), {
            ref: L,
            Icon: R,
            label: S.title,
            isNeutral: !0,
            onPress: $,
            "aria-expanded": D,
            isSelected: D,
            testid: void 0,
          }),
          x,
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.chat,
        n = e.isInteractive,
        r = n === void 0 ? !1 : n,
        a = e.threadId;
      return r
        ? o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
          ? u.jsx(g, { chat: t, threadId: a })
          : u.jsx(f, { chat: t, threadId: a })
        : u.jsx(_, { chat: t, threadId: a });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
