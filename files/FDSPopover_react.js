__d(
  "FDSPopover.react",
  [
    "BasePopover.react",
    "BasePopoverSVGArrowContainer.react",
    "FDSPopoverContainer.react",
    "FDSPopoverContainerPaddingContext",
    "react",
    "react-compiler-runtime",
    "useCometDisplayTimingTrackerForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ref",
        "animatedPopover",
        "aria-describedby",
        "aria-label",
        "aria-labelledby",
        "children",
        "popoverName",
        "withArrow",
      ],
      s,
      u = s || (s = o("react")),
      c = { popoverWithArrow: { filter: "xe5xk9h", $$css: !0 } };
    function d(t) {
      var n = o("react-compiler-runtime").c(22),
        a,
        i,
        l,
        s,
        d,
        m,
        p,
        _;
      if (n[0] !== t) {
        var f = t.ref,
          g = t.animatedPopover,
          h = t["aria-describedby"],
          y = t["aria-label"],
          C = t["aria-labelledby"],
          b = t.children,
          v = t.popoverName,
          S = t.withArrow,
          R = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((p = f),
          (a = h),
          (i = y),
          (l = C),
          (s = b),
          (m = v),
          (_ = S),
          (d = R),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = d),
          (n[6] = m),
          (n[7] = p),
          (n[8] = _));
      } else
        ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (s = n[4]),
          (d = n[5]),
          (m = n[6]),
          (p = n[7]),
          (_ = n[8]));
      var L = _ === void 0 ? !1 : _,
        E = r("useCometDisplayTimingTrackerForInteraction")(m),
        k = i != null ? i : void 0,
        I = L ? r("BasePopoverSVGArrowContainer.react") : void 0,
        T = L && c.popoverWithArrow,
        D;
      n[9] !== s || n[10] !== E || n[11] !== L
        ? ((D = u.jsx(r("FDSPopoverContainerPaddingContext").Provider, {
            value: !1,
            children: u.jsx(r("FDSPopoverContainer.react"), {
              ref: E,
              withArrow: L,
              children: s,
            }),
          })),
          (n[9] = s),
          (n[10] = E),
          (n[11] = L),
          (n[12] = D))
        : (D = n[12]);
      var x;
      return (
        n[13] !== a ||
        n[14] !== l ||
        n[15] !== d ||
        n[16] !== p ||
        n[17] !== k ||
        n[18] !== I ||
        n[19] !== T ||
        n[20] !== D
          ? ((x = u.jsx(
              r("BasePopover.react"),
              babelHelpers.extends({}, d, {
                "aria-describedby": a,
                "aria-label": k,
                "aria-labelledby": l,
                arrowImpl: I,
                ref: p,
                xstyle: T,
                children: D,
              }),
            )),
            (n[13] = a),
            (n[14] = l),
            (n[15] = d),
            (n[16] = p),
            (n[17] = k),
            (n[18] = I),
            (n[19] = T),
            (n[20] = D),
            (n[21] = x))
          : (x = n[21]),
        x
      );
    }
    l.default = d;
  },
  98,
);
