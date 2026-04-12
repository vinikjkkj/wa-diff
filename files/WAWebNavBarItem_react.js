__d(
  "WAWebNavBarItem.react",
  [
    "$InternalEnum",
    "WAWebAppRootInteractionContext.react",
    "WAWebFlex.react",
    "WAWebInteractionTracePolicy",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebUnstyledButtonStyles",
    "WDSFocusStateStyles",
    "WDSTooltip.react",
    "cr:23442",
    "react",
    "stylex",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useMemo,
      m = c.useRef,
      p = n("$InternalEnum")({ Counter: "counter", Dot: "dot" }),
      _ = {
        container: {
          width: "x100vrsf",
          height: "x1vqgdyp",
          color: "xhslqc4",
          borderStartStartRadius: "x1ekkm8c",
          borderStartEndRadius: "x1143rjc",
          borderEndEndRadius: "xum4auv",
          borderEndStartRadius: "xj21bgg",
          ":hover_cursor": "x1277o0a",
          ":hover_backgroundColor": "x13i9f1t",
          $$css: !0,
        },
        circularButton: {
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
        fullWidth: { width: "xh8yej3", $$css: !0 },
        active: { color: "x14ug900", backgroundColor: "xzs022t", $$css: !0 },
        inlineActivityIndicatorContainer: { position: "x1n2onr6", $$css: !0 },
        inlineActivityIndicator: { position: "x10l6tqk", $$css: !0 },
        counterIndicator: {
          insetInlineStart: "xxcbqqu",
          left: null,
          right: null,
          bottom: "x1oozmrk",
          $$css: !0,
        },
        dotIndicator: {
          insetInlineStart: "x138ruz1",
          left: null,
          right: null,
          bottom: "xjifam0",
          $$css: !0,
        },
      };
    function f(t) {
      var n = t.ref,
        a = t["aria-label"],
        i = t.children,
        l = t.disabled,
        s = t.isActive,
        c = t.onClick,
        d = t.testid,
        m = t.xstyle;
      return u.jsx(
        "button",
        babelHelpers.extends(
          {
            "aria-pressed": s,
            "aria-label": a,
            onClick: c,
            tabIndex: -1,
            ref: n,
            "data-testid": void 0,
            "data-navbar-item": !0,
            "data-navbar-item-selected": s,
          },
          (e || (e = r("stylex"))).props([
            r("WAWebUnstyledButtonStyles").button,
            o("WAWebUISpacing").uiPadding.all0,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            l === !0 && r("WAWebUnstyledButtonStyles").disabled,
            _.circularButton,
            m,
          ]),
          { children: i },
        ),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var a = t.ariaLabel,
        i = t.dotIndicatorPositionXstyle,
        l = t.icon,
        s = t.inlineActivityIndicator,
        c = t.inlineActivityIndicatorType,
        g = t.isActive,
        h = t.isTooltipDisabled,
        y = h === void 0 ? !1 : h,
        C = t.keyboardShortcutAction,
        b = t.onClick,
        v = t.ref,
        S = t.shouldHoldInteractionManually,
        R = S === void 0 ? !1 : S,
        L = t.spacingXstyle,
        E = L === void 0 ? o("WAWebUISpacing").uiPadding.all8 : L,
        k = t.testid,
        I = t.title,
        T = t.tracePolicy,
        D = o(
          "WAWebAppRootInteractionContext.react",
        ).useInteractionWithAppRootContext(
          T != null ? T : r("WAWebInteractionTracePolicy").DEFAULT,
          R,
          !0,
        ),
        x = D.startInteraction,
        $ = function (t) {
          (t.preventDefault(), !g && T && x(), b == null || b(t));
        },
        P = m(null),
        N = r("useMergeRefs")(P, v),
        M = n("cr:23442")(),
        w = M[0],
        A = M[1],
        F = r("useMergeRefs")(w, P),
        O = d(
          function () {
            return u.jsx("div", { children: l });
          },
          [l],
        ),
        B =
          s &&
          u.jsx(o("WAWebFlex.react").FlexItem, {
            className: (e || (e = r("stylex")))([
              _.inlineActivityIndicator,
              c === p.Counter ? _.counterIndicator : _.dotIndicator,
              i,
            ]),
            children: s,
          }),
        W = u.jsx(f, {
          testid: void 0,
          "aria-label": a != null ? a : I,
          onClick: $,
          ref: N,
          dataTab: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
          xstyle: [_.fullWidth, E],
          isActive: g,
          children: u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: _.fullWidth,
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              grow: 1,
              align: "center",
              xstyle: _.inlineActivityIndicatorContainer,
              children: [O, B],
            }),
          }),
        });
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        ref: F,
        xstyle: [
          _.container,
          o("WAWebUISpacing").uiMargin.vert2,
          g && _.active,
        ],
        children: u.jsx(r("WDSTooltip.react"), {
          label: I,
          delayTooltipMs: 0,
          position: "end",
          shortcut: C,
          disabled: y,
          children: W,
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.InlineActivityIndicatorType = p),
      (l.NavBarItem = g));
  },
  98,
);
