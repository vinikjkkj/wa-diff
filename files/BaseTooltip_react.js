__d(
  "BaseTooltip.react",
  [
    "BaseAnchorPositioningUtils",
    "BaseTooltipGroup.react",
    "BaseTooltipTargetWrapper.react",
    "cr:20266",
    "react",
    "useDelayedState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "delayTooltipMs",
        "hideDelayMs",
        "disabled",
        "tooltipImpl",
        "children",
        "forceInlineDisplay",
        "onVisibilityChange",
        "persistAfterClick",
        "shouldShowCarat",
      ],
      s = ["tooltipImpl", "delayTooltipMs", "hideDelayMs"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useId,
      g = d.useRef,
      h = 50,
      y = 300;
    function C(t) {
      "use no forget";
      var a,
        i = t.delayTooltipMs,
        l = i === void 0 ? y : i,
        s = t.hideDelayMs,
        u = s === void 0 ? h : s,
        d = t.disabled,
        p = d === void 0 ? !1 : d,
        C = t.tooltipImpl,
        b = t.children,
        v = t.forceInlineDisplay,
        S = t.onVisibilityChange,
        R = t.persistAfterClick,
        L = t.shouldShowCarat,
        E = babelHelpers.objectWithoutPropertiesLoose(t, e),
        k = r("useDelayedState")(!1),
        I = k[0],
        T = k[1],
        D = g(null),
        x = n("cr:20266")(),
        $,
        P,
        N;
      x != null && (($ = x[0]), (P = x[1]), (N = x[2]));
      var M = o("BaseAnchorPositioningUtils").passesAnchorPositionExperiment(),
        w = M ? { anchorPosName: $, anchorPosRef: N } : {},
        A = f(),
        F = (a = E.id) != null ? a : A,
        O = m(
          function () {
            p || T(!0, l, S);
          },
          [l, p, S, T],
        ),
        B = m(
          function () {
            T(!1, u, S);
          },
          [u, S, T],
        ),
        W = M ? { ref: N, xstyle: P } : { ref: D };
      _(
        function () {
          $ == null && M && T(!1);
        },
        [$, T, M],
      );
      var q = c.jsx(
        C,
        babelHelpers.extends({}, w, E, {
          contentKey: null,
          contextRef: D,
          id: F,
          isVisible: I,
          shouldShowCarat: L,
        }),
      );
      return c.jsxs(
        r("BaseTooltipTargetWrapper.react"),
        babelHelpers.extends({}, W, {
          forceInlineDisplay: v,
          onHide: B,
          onShow: O,
          persistAfterClick: R,
          tooltipIdentifier: I ? F : void 0,
          children: [typeof b == "function" ? b(F) : b, q],
        }),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      "use no forget";
      var t = p(o("BaseTooltipGroup.react").Context);
      if (t != null) {
        var n = e.tooltipImpl,
          r = e.delayTooltipMs,
          a = r === void 0 ? y : r,
          i = e.hideDelayMs,
          l = i === void 0 ? h : i,
          u = babelHelpers.objectWithoutPropertiesLoose(e, s);
        return c.jsx(
          o("BaseTooltipGroup.react").Child,
          babelHelpers.extends({}, u, { hideDelayMs: l, showDelayMs: a }),
        );
      }
      return c.jsx(C, babelHelpers.extends({}, e));
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  98,
);
