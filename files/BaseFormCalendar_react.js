__d(
  "BaseFormCalendar.react",
  [
    "fbt",
    "BaseFormCalendarDayAdornmentContext",
    "BaseFormCalendarPageNavigation.react",
    "BaseFormCalendarWeeks.react",
    "CometLocalDate",
    "FocusWithinHandler.react",
    "emptyArray",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = {
        calendar: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          outline: "x1a2a7pz",
          $$css: !0,
        },
      };
    function h(e) {
      var t = e.constraints,
        n = e.disableAfterDate,
        r = e.disableBeforeDate,
        o = [].concat(t);
      return (
        r != null &&
          o.push(function (e) {
            return e.compareTo(r) >= 0;
          }),
        n != null &&
          o.push(function (e) {
            return e.compareTo(n) <= 0;
          }),
        o
      );
    }
    function y(t) {
      var n,
        a = o("react-compiler-runtime").c(58),
        i = t.constraints,
        l = t.count,
        u = t.dayAdornment,
        d = t.disableAfterDate,
        m = t.disableBeforeDate,
        y = t.highlightedDates,
        C = t.initialDate,
        b = t.monthNavigationAlignment,
        v = t.onSelected,
        S = t.onVisibleMonthChange,
        R = t.ref,
        L = t.selectedDates,
        E = t.testID,
        k = t.typeVariant,
        I = i === void 0 ? r("emptyArray") : i,
        T = l === void 0 ? 1 : l,
        D = y === void 0 ? r("emptyArray") : y,
        x;
      a[0] !== C
        ? ((x = C === void 0 ? r("CometLocalDate").fromDate() : C),
          (a[0] = C),
          (a[1] = x))
        : (x = a[1]);
      var $ = x,
        P = b === void 0 ? "around" : b,
        N = L === void 0 ? r("emptyArray") : L,
        M = f((n = N[0]) != null ? n : $),
        w = M[0],
        A = M[1],
        F = f(null),
        O = F[0],
        B = F[1],
        W;
      a[2] !== I || a[3] !== d || a[4] !== m
        ? ((W = h({
            constraints: I,
            disableAfterDate: d,
            disableBeforeDate: m,
          })),
          (a[2] = I),
          (a[3] = d),
          (a[4] = m),
          (a[5] = W))
        : (W = a[5]);
      var q = W,
        U;
      a[6] !== q || a[7] !== O
        ? ((U = function (t) {
            if (O) {
              var e = O.getWithDaysAdded(t);
              (q == null ||
                q.every(function (t) {
                  return t(e);
                })) &&
                (B(e), A(e));
            }
          }),
          (a[6] = q),
          (a[7] = O),
          (a[8] = U))
        : (U = a[8]);
      var V = U,
        H = _(!1),
        G = _(null),
        z,
        j;
      (a[9] !== S || a[10] !== w
        ? ((z = function () {
            var e = w.getYear() + "_" + w.getMonth(),
              t = G.current;
            ((G.current = e), t !== null && e !== t && S != null && S(w));
          }),
          (j = [w, S]),
          (a[9] = S),
          (a[10] = w),
          (a[11] = z),
          (a[12] = j))
        : ((z = a[11]), (j = a[12])),
        p(z, j));
      var K;
      a[13] !== w
        ? ((K = function () {
            A(new (r("CometLocalDate"))(w.getYear(), w.getMonth() - 1, 1));
          }),
          (a[13] = w),
          (a[14] = K))
        : (K = a[14]);
      var Q = K,
        X;
      a[15] !== w
        ? ((X = function () {
            A(new (r("CometLocalDate"))(w.getYear(), w.getMonth() + 1, 1));
          }),
          (a[15] = w),
          (a[16] = X))
        : (X = a[16]);
      var Y = X,
        J;
      a[17] !== w
        ? ((J = function () {
            H.current || ((H.current = !0), B(w));
          }),
          (a[17] = w),
          (a[18] = J))
        : (J = a[18]);
      var Z = J,
        ee;
      a[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = function () {
            (B(null), (H.current = !1));
          }),
          (a[19] = ee))
        : (ee = a[19]);
      var te = ee,
        ne;
      a[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = function (t) {
            t != null && ((H.current = !0), B(t));
          }),
          (a[20] = ne))
        : (ne = a[20]);
      var re = ne,
        oe,
        ae;
      if (a[21] !== d || a[22] !== m || a[23] !== w) {
        var ie = new (r("CometLocalDate"))(w.getYear(), w.getMonth(), 1);
        if (d != null) {
          var le = new (r("CometLocalDate"))(d.getYear(), d.getMonth(), 1);
          oe = le.compareTo(ie) <= 0;
        }
        if (m != null) {
          var se = new (r("CometLocalDate"))(m.getYear(), m.getMonth(), 1);
          ae = se.compareTo(ie) >= 0;
        }
        ((a[21] = d), (a[22] = m), (a[23] = w), (a[24] = oe), (a[25] = ae));
      } else ((oe = a[24]), (ae = a[25]));
      var ue, ce, de, me, pe;
      if (
        a[26] !== q ||
        a[27] !== T ||
        a[28] !== u ||
        a[29] !== O ||
        a[30] !== Y ||
        a[31] !== Q ||
        a[32] !== Z ||
        a[33] !== D ||
        a[34] !== P ||
        a[35] !== V ||
        a[36] !== oe ||
        a[37] !== v ||
        a[38] !== ae ||
        a[39] !== R ||
        a[40] !== N ||
        a[41] !== E ||
        a[42] !== k ||
        a[43] !== w
      ) {
        var _e = function () {
          for (var t = [], n = 0; n < T; n++) {
            var o = new (r("CometLocalDate"))(w.getYear(), w.getMonth() + n, 1),
              a = n === 0,
              i = n === T - 1,
              l = i ? Y : null,
              u = a ? Q : null,
              d = i ? oe : void 0,
              m = a ? ae : void 0;
            t.push(
              c.jsxs(
                "div",
                {
                  className: "x78zum5 xdt5ytf xh8yej3",
                  children: [
                    c.jsx(r("BaseFormCalendarPageNavigation.react"), {
                      handleClickNext: l,
                      handleClickPrevious: u,
                      monthNavigationAlignment: P,
                      nextDisabled: d,
                      previousDisabled: m,
                      typeVariant: k,
                      visibleDate: o,
                    }),
                    c.jsx(r("FocusWithinHandler.react"), {
                      onBlurWithin: te,
                      onFocusWithin: Z,
                      children: c.jsx(
                        "div",
                        babelHelpers.extends(
                          { "aria-label": s._(/*BTDS*/ "Choose Date") },
                          (e || (e = r("stylex"))).props(
                            g.calendar,
                            k.xstyleConfig.calendarWeeksContainer,
                          ),
                          {
                            ref: n === 0 ? R : void 0,
                            role: "grid",
                            tabIndex: O == null ? 0 : -1,
                            children: c.jsx(r("BaseFormCalendarWeeks.react"), {
                              constraints: q,
                              date: o,
                              focusDate: O,
                              highlightedDates: D,
                              moveDayCursorBy: V,
                              onFocus: re,
                              onSelected: v,
                              selectedDates: N,
                              typeVariant: k,
                            }),
                          },
                        ),
                      ),
                    }),
                  ],
                },
                o.getMonth() + "-" + o.getYear(),
              ),
            );
          }
          return t;
        };
        ((ue = r("BaseFormCalendarDayAdornmentContext").Provider),
          (pe = u),
          a[49] === Symbol.for("react.memo_cache_sentinel")
            ? ((ce = { className: "x40hh3e x78zum5 x1q0g3np xh8yej3" }),
              (a[49] = ce))
            : (ce = a[49]),
          (de = E),
          (me = _e()),
          (a[26] = q),
          (a[27] = T),
          (a[28] = u),
          (a[29] = O),
          (a[30] = Y),
          (a[31] = Q),
          (a[32] = Z),
          (a[33] = D),
          (a[34] = P),
          (a[35] = V),
          (a[36] = oe),
          (a[37] = v),
          (a[38] = ae),
          (a[39] = R),
          (a[40] = N),
          (a[41] = E),
          (a[42] = k),
          (a[43] = w),
          (a[44] = ue),
          (a[45] = ce),
          (a[46] = de),
          (a[47] = me),
          (a[48] = pe));
      } else
        ((ue = a[44]), (ce = a[45]), (de = a[46]), (me = a[47]), (pe = a[48]));
      var fe;
      a[50] !== ce || a[51] !== de || a[52] !== me
        ? ((fe = c.jsx(
            "div",
            babelHelpers.extends({}, ce, {
              "data-testid": void 0,
              children: me,
            }),
          )),
          (a[50] = ce),
          (a[51] = de),
          (a[52] = me),
          (a[53] = fe))
        : (fe = a[53]);
      var ge;
      return (
        a[54] !== ue || a[55] !== pe || a[56] !== fe
          ? ((ge = c.jsx(ue, { value: pe, children: fe })),
            (a[54] = ue),
            (a[55] = pe),
            (a[56] = fe),
            (a[57] = ge))
          : (ge = a[57]),
        ge
      );
    }
    var C = c.memo(y);
    l.default = C;
  },
  226,
);
