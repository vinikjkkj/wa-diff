__d(
  "BaseFormCalendarWeeks.react",
  [
    "BaseFormCalendarDay.react",
    "BaseTextV2.react",
    "BaseTextV2FontMetrics",
    "CometLocalDate",
    "DateConsts",
    "DateFormatConfig",
    "FocusManager",
    "emptyArray",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = 7,
      g = {
        row: { cursor: "x1ypdohk", display: "x78zum5", $$css: !0 },
        weekLabel: { textAlign: "x2b8uid", width: "xt4wkqq", $$css: !0 },
      };
    function h(e) {
      for (
        var t = e.getNumDaysInThisMonth(),
          n = new Date(e.getYear(), e.getMonth(), 1).getDay(),
          o = new Date(e.getYear(), e.getMonth(), t).getDay(),
          a = (n + 6 - r("DateFormatConfig").weekStart) % f,
          i = (f - o + r("DateFormatConfig").weekStart) % f,
          l = [],
          s = 1 - a;
        s <= t + i;
        s++
      ) {
        var u = (s - 1 + a) % f;
        (u === 0 && l.push([]),
          r("nullthrows")(l.at(-1)).push(
            new (r("CometLocalDate"))(e.getYear(), e.getMonth(), s),
          ));
      }
      return l;
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.stylesProps,
        a = e.textColorVariant,
        i = e.textTypeVariant,
        l;
      if (t[0] !== n || t[1] !== a || t[2] !== i) {
        l = [];
        for (var s = 0; s < o("DateConsts").DAYS_PER_WEEK; s++)
          l.push(
            u.createElement(
              "div",
              babelHelpers.extends({}, n, {
                key: "label" + s,
                role: "gridcell",
              }),
              u.jsx(r("BaseTextV2.react"), {
                colorVariant: a,
                fontMetrics: o("BaseTextV2FontMetrics")
                  .OptimisticDisplayFontMetrics,
                maxLines: 1,
                typeVariant: i,
                children:
                  r("DateFormatConfig").shortDayNames[
                    (r("DateFormatConfig").weekStart + s) %
                      o("DateConsts").DAYS_PER_WEEK
                  ],
              }),
            ),
          );
        ((t[0] = n), (t[1] = a), (t[2] = i), (t[3] = l));
      } else l = t[3];
      return l;
    }
    function C(t) {
      var n = o("react-compiler-runtime").c(46),
        a = t.constraints,
        i = t.date,
        l = t.focusDate,
        s = t.highlightedDates,
        c = t.moveDayCursorBy,
        d = t.onFocus,
        p = t.onSelected,
        f = t.selectedDates,
        C = t.typeVariant,
        S = a === void 0 ? r("emptyArray") : a,
        R = s === void 0 ? r("emptyArray") : s,
        L;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = new Map()), (n[0] = L))
        : (L = n[0]);
      var E = _(L),
        k;
      n[1] !== R
        ? ((k = new Set(R == null ? void 0 : R.map(v))), (n[1] = R), (n[2] = k))
        : (k = n[2]);
      var I = k,
        T;
      n[3] !== f
        ? ((T = new Set(f == null ? void 0 : f.map(b))), (n[3] = f), (n[4] = T))
        : (T = n[4]);
      var D = T,
        x;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function (t) {
            return function (e) {
              E.current.set(t.getHash(), e);
            };
          }),
          (n[5] = x))
        : (x = n[5]);
      var $ = x,
        P;
      n[6] !== l
        ? ((P = l != null ? l.getHash() : null), (n[6] = l), (n[7] = P))
        : (P = n[7]);
      var N = P,
        M = _(N),
        w = _(null),
        A,
        F;
      (n[8] !== N
        ? ((A = function () {
            if (M.current !== N && N != null)
              return (
                (w.current = window.requestAnimationFrame(function () {
                  var e = E.current.get(N);
                  e != null && o("FocusManager").focusElement(e);
                })),
                function () {
                  w.current != null && window.cancelAnimationFrame(w.current);
                }
              );
            M.current = N;
          }),
          (F = [N]),
          (n[8] = N),
          (n[9] = A),
          (n[10] = F))
        : ((A = n[9]), (F = n[10])),
        m(A, F));
      var O;
      n[11] !== i ? ((O = h(i)), (n[11] = i), (n[12] = O)) : (O = n[12]);
      var B = O,
        W;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = { className: "x1ypdohk x78zum5" }), (n[13] = W))
        : (W = n[13]);
      var q;
      n[14] !== C.calendarWeekdayLabelsVariant.xstyleConfig.container
        ? ((q = (e || (e = r("stylex"))).props(
            C.calendarWeekdayLabelsVariant.xstyleConfig.container,
            g.weekLabel,
          )),
          (n[14] = C.calendarWeekdayLabelsVariant.xstyleConfig.container),
          (n[15] = q))
        : (q = n[15]);
      var U;
      n[16] !== q ||
      n[17] !== C.calendarWeekdayLabelsVariant.textColorVariant ||
      n[18] !== C.calendarWeekdayLabelsVariant.textTypeVariant
        ? ((U = u.jsx(
            "div",
            babelHelpers.extends({}, W, {
              role: "row",
              children: u.jsx(y, {
                stylesProps: q,
                textColorVariant:
                  C.calendarWeekdayLabelsVariant.textColorVariant,
                textTypeVariant: C.calendarWeekdayLabelsVariant.textTypeVariant,
              }),
            }),
          )),
          (n[16] = q),
          (n[17] = C.calendarWeekdayLabelsVariant.textColorVariant),
          (n[18] = C.calendarWeekdayLabelsVariant.textTypeVariant),
          (n[19] = U))
        : (U = n[19]);
      var V;
      if (
        n[20] !== B ||
        n[21] !== S ||
        n[22] !== i ||
        n[23] !== N ||
        n[24] !== I ||
        n[25] !== c ||
        n[26] !== d ||
        n[27] !== p ||
        n[28] !== D ||
        n[29] !== C.calendarDayVariant ||
        n[30] !== C.xstyleConfig
      ) {
        var H;
        (n[32] !== S ||
        n[33] !== i ||
        n[34] !== N ||
        n[35] !== I ||
        n[36] !== c ||
        n[37] !== d ||
        n[38] !== p ||
        n[39] !== D ||
        n[40] !== C.calendarDayVariant ||
        n[41] !== C.xstyleConfig
          ? ((H = function (n) {
              return u.createElement(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    g.row,
                    C.xstyleConfig.calendarWeekSize,
                  ),
                  { key: n[0].getHash(), role: "row" },
                ),
                n.map(function (e) {
                  var t = !S.every(function (t) {
                      return t(e);
                    }),
                    n = D.has(e.getHash()),
                    o = e.getMonth() === i.getMonth(),
                    a = I.has(e.getHash()),
                    l = C.calendarDayVariant.textColorVariant,
                    s = C.calendarDayVariant.textTypeVariant;
                  return (
                    n
                      ? (l = C.calendarDayVariant.selectedTextColorVariant)
                      : a
                        ? (l = C.calendarDayVariant.highlightedTextColorVariant)
                        : t
                          ? (l = C.calendarDayVariant.disabledTextColorVariant)
                          : o ||
                            (l = C.calendarDayVariant.offMonthTextColorVariant),
                    u.jsx(
                      r("BaseFormCalendarDay.react"),
                      {
                        calendarDayVariant: C.calendarDayVariant,
                        date: e,
                        disabled: t,
                        focusable: e.getHash() === N,
                        highlighted: a,
                        moveDayCursorBy: c,
                        onClick: function () {
                          return p == null ? void 0 : p(e);
                        },
                        onFocus: function () {
                          return d && d(e);
                        },
                        ref: $(e),
                        selected: n,
                        textColorVariant: l,
                        textTypeVariant: s,
                      },
                      e.getHash(),
                    )
                  );
                }),
              );
            }),
            (n[32] = S),
            (n[33] = i),
            (n[34] = N),
            (n[35] = I),
            (n[36] = c),
            (n[37] = d),
            (n[38] = p),
            (n[39] = D),
            (n[40] = C.calendarDayVariant),
            (n[41] = C.xstyleConfig),
            (n[42] = H))
          : (H = n[42]),
          (V = B.map(H)),
          (n[20] = B),
          (n[21] = S),
          (n[22] = i),
          (n[23] = N),
          (n[24] = I),
          (n[25] = c),
          (n[26] = d),
          (n[27] = p),
          (n[28] = D),
          (n[29] = C.calendarDayVariant),
          (n[30] = C.xstyleConfig),
          (n[31] = V));
      } else V = n[31];
      var G;
      return (
        n[43] !== U || n[44] !== V
          ? ((G = u.jsxs(u.Fragment, { children: [U, V] })),
            (n[43] = U),
            (n[44] = V),
            (n[45] = G))
          : (G = n[45]),
        G
      );
    }
    function b(e) {
      return e.getHash();
    }
    function v(e) {
      return e.getHash();
    }
    var S = u.memo(C);
    l.default = S;
  },
  98,
);
