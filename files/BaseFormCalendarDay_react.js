__d(
  "BaseFormCalendarDay.react",
  [
    "fbt",
    "BaseFormCalendarDayAdornmentContext",
    "BaseTextV2.react",
    "BaseTextV2FontMetrics",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "CometPressable.react",
    "ScreenReaderText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useMemo;
    function p(e, t, n) {
      var o,
        a = s._(/*BTDS*/ "Select Date"),
        i = s._(/*BTDS*/ "Previous Day"),
        l = s._(/*BTDS*/ "Next Day"),
        u = s._(/*BTDS*/ "One week earlier"),
        c = s._(/*BTDS*/ "One week later"),
        d = s._(/*BTDS*/ "End of the previous month"),
        m = s._(/*BTDS*/ "End of the month"),
        p = s._(/*BTDS*/ "One month previous"),
        _ = s._(/*BTDS*/ "One month ahead");
      return [
        {
          command: { key: (o = r("CometKeys")).ENTER },
          description: a,
          handler: function () {
            return e && e();
          },
        },
        {
          command: { key: o.SPACE },
          description: a,
          handler: function () {
            return e && e();
          },
        },
        {
          command: { key: o.LEFT },
          description: i,
          handler: function () {
            return t(-1);
          },
        },
        {
          command: { key: o.RIGHT },
          description: l,
          handler: function () {
            return t(1);
          },
        },
        {
          command: { key: o.UP },
          description: u,
          handler: function () {
            return t(-7);
          },
        },
        {
          command: { key: o.DOWN },
          description: c,
          handler: function () {
            return t(7);
          },
        },
        {
          command: { key: o.HOME },
          description: d,
          handler: function () {
            return t(-((n.getDayOfWeekFromMonday() + 1) % 7));
          },
        },
        {
          command: { key: o.END },
          description: m,
          handler: function () {
            return t(6 - ((n.getDayOfWeekFromMonday() + 1) % 7));
          },
        },
        {
          command: { key: o.PAGE_UP },
          description: p,
          handler: function () {
            return t(-n.getNumDaysInPrevMonth());
          },
        },
        {
          command: { key: o.PAGE_UP, shift: !0 },
          description: p,
          handler: function () {
            return t(-n.getNumDaysInThisYear());
          },
        },
        {
          command: { alt: !0, key: o.PAGE_UP },
          description: p,
          handler: function () {
            return t(-n.getNumDaysInThisYear());
          },
        },
        {
          command: { key: o.PAGE_DOWN },
          description: _,
          handler: function () {
            return t(n.getNumDaysInThisMonth());
          },
        },
        {
          command: { key: o.PAGE_DOWN, shift: !0 },
          description: _,
          handler: function () {
            return t(n.getNumDaysInThisYear());
          },
        },
        {
          command: { alt: !0, key: o.PAGE_DOWN },
          description: _,
          handler: function () {
            return t(n.getNumDaysInThisYear());
          },
        },
      ];
    }
    var _ = {
        day: {
          alignItems: "x6s0dn4",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        dayWrapper: {
          alignItems: "x1qjc9v5",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          $$css: !0,
        },
      },
      f = "l F d, Y";
    function g(e) {
      var t = o("react-compiler-runtime").c(42),
        n = e.calendarDayVariant,
        a = e.date,
        i = e.disabled,
        l = e.focusable,
        c = e.highlighted,
        m = e.moveDayCursorBy,
        g = e.onClick,
        h = e.onFocus,
        y = e.onMouseEnter,
        C = e.ref,
        b = e.selected,
        v = e.textColorVariant,
        S = e.textTypeVariant,
        R = l === void 0 ? !1 : l,
        L = new Date(),
        E =
          L.getFullYear() === a.getYear() &&
          L.getMonth() === a.getMonth() &&
          L.getDate() === a.getDate(),
        k = d(r("BaseFormCalendarDayAdornmentContext")),
        I;
      t[0] !== a || t[1] !== k
        ? ((I = k != null ? k(a) : null), (t[0] = a), (t[1] = k), (t[2] = I))
        : (I = t[2]);
      var T = I,
        D;
      t[3] !== a ? ((D = a.format(f)), (t[3] = a), (t[4] = D)) : (D = t[4]);
      var x = D,
        $;
      t[5] !== x || t[6] !== b
        ? (($ = b
            ? s._(
                /*BTDS*/ "{Formatted date containing day, month, date, and year}, selected",
                [
                  s._param(
                    "Formatted date containing day, month, date, and year",
                    x,
                  ),
                ],
              )
            : x),
          (t[5] = x),
          (t[6] = b),
          (t[7] = $))
        : ($ = t[7]);
      var P = $,
        N;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = {
            className:
              "x1qjc9v5 x9f619 xt0e3qv x78zum5 x1r8uery x1q0g3np x1iyjqo2 xl56j7k",
          }),
          (t[8] = N))
        : (N = t[8]);
      var M;
      t[9] !== a || t[10] !== m || t[11] !== g
        ? ((M = p(g, m, a)), (t[9] = a), (t[10] = m), (t[11] = g), (t[12] = M))
        : (M = t[12]);
      var w = E ? "date" : void 0,
        A = b ? "date-selected" : void 0,
        F = (R || c) && n.xstyleConfig.highlightedDay,
        O = b && n.xstyleConfig.selected,
        B = !b && !i && n.xstyleConfig.containerSelectableDays,
        W;
      t[13] !== n.xstyleConfig.container ||
      t[14] !== O ||
      t[15] !== B ||
      t[16] !== F
        ? ((W = [_.day, n.xstyleConfig.container, F, O, B]),
          (t[13] = n.xstyleConfig.container),
          (t[14] = O),
          (t[15] = B),
          (t[16] = F),
          (t[17] = W))
        : (W = t[17]);
      var q;
      t[18] !== P
        ? ((q = u.jsx(r("ScreenReaderText.react"), { text: P })),
          (t[18] = P),
          (t[19] = q))
        : (q = t[19]);
      var U;
      t[20] !== a
        ? ((U = a.getDate().toString()), (t[20] = a), (t[21] = U))
        : (U = t[21]);
      var V;
      t[22] !== U || t[23] !== v || t[24] !== S
        ? ((V = u.jsx("div", {
            "aria-hidden": !0,
            children: u.jsx(r("BaseTextV2.react"), {
              colorVariant: v,
              fontMetrics: o("BaseTextV2FontMetrics")
                .OptimisticDisplayFontMetrics,
              typeVariant: S,
              children: U,
            }),
          })),
          (t[22] = U),
          (t[23] = v),
          (t[24] = S),
          (t[25] = V))
        : (V = t[25]);
      var H;
      t[26] !== T ||
      t[27] !== i ||
      t[28] !== R ||
      t[29] !== g ||
      t[30] !== h ||
      t[31] !== y ||
      t[32] !== C ||
      t[33] !== W ||
      t[34] !== q ||
      t[35] !== V ||
      t[36] !== w ||
      t[37] !== A
        ? ((H = u.jsxs(r("CometPressable.react"), {
            "aria-current": w,
            disabled: i,
            focusable: R,
            hideHoverOverlay: !0,
            onFocusIn: h,
            onHoverIn: y,
            onPress: g,
            overlayDisabled: !0,
            ref: C,
            role: "gridcell",
            testid: void 0,
            xstyle: W,
            children: [q, V, T],
          })),
          (t[26] = T),
          (t[27] = i),
          (t[28] = R),
          (t[29] = g),
          (t[30] = h),
          (t[31] = y),
          (t[32] = C),
          (t[33] = W),
          (t[34] = q),
          (t[35] = V),
          (t[36] = w),
          (t[37] = A),
          (t[38] = H))
        : (H = t[38]);
      var G;
      return (
        t[39] !== H || t[40] !== M
          ? ((G = u.jsx(
              "div",
              babelHelpers.extends({}, N, {
                children: u.jsx(r("CometComponentWithKeyCommands.react"), {
                  commandConfigs: M,
                  xstyle: _.dayWrapper,
                  children: H,
                }),
              }),
            )),
            (t[39] = H),
            (t[40] = M),
            (t[41] = G))
          : (G = t[41]),
        G
      );
    }
    var h = u.memo(g);
    l.default = h;
  },
  226,
);
