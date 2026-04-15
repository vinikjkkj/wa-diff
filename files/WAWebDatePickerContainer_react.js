__d(
  "WAWebDatePickerContainer.react",
  [
    "WAWebKeyboardRotateFocusModal.react",
    "WAWebMessageDensityDot.react",
    "WAWebSearchByTypeAndDateGatingUtils",
    "WAWebUserPrefsHistorySync",
    "WDSCalendar.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFocusOnMount",
    "useWAWebMessageDensity",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState,
      m = { overrideRotateFocusStyles: { position: "x1rv4328", $$css: !0 } };
    function p(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.chatId,
        a = e.defaultActiveStartDate,
        i = e.onDateSelected,
        l = o("WAWebUserPrefsHistorySync").getHistorySyncEarliestDate() * 1e3,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = new Date()), (t[0] = u))
        : (u = t[0]);
      var c = u,
        p;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = new Date(l)), (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f = r("useWAWebFocusOnMount")(),
        g = o(
          "WAWebSearchByTypeAndDateGatingUtils",
        ).calendarMessageDensityEnabled(),
        h;
      t[2] !== a
        ? ((h = a != null ? a : new Date()), (t[2] = a), (t[3] = h))
        : (h = t[3]);
      var y = d(h),
        C = y[0],
        b = y[1],
        v = r("useWAWebMessageDensity")(g ? n : null, C),
        S;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function (t) {
            b(t);
          }),
          (t[4] = S))
        : (S = t[4]);
      var R = S,
        L;
      t[5] !== v || t[6] !== C
        ? ((L = function (t) {
            var e;
            if (
              v == null ||
              t.getMonth() !== C.getMonth() ||
              t.getFullYear() !== C.getFullYear()
            )
              return null;
            var n = (e = v.get(t.getDate())) != null ? e : 0;
            return s.jsx(r("WAWebMessageDensityDot.react"), { count: n });
          }),
          (t[5] = v),
          (t[6] = C),
          (t[7] = L))
        : (L = t[7]);
      var E = L,
        k;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = {
            className:
              "x16w0wmm xtlo18s xg7h5cd x1sr759z x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
          }),
          (t[8] = k))
        : (k = t[8]);
      var I;
      t[9] !== a ? ((I = a ? [a] : []), (t[9] = a), (t[10] = I)) : (I = t[10]);
      var T = g ? E : void 0,
        D;
      t[11] !== a || t[12] !== i || t[13] !== I || t[14] !== T
        ? ((D = s.jsx(r("WDSCalendar.react"), {
            disableAfterDate: c,
            disableBeforeDate: _,
            selectedDates: I,
            initialDate: a,
            onSelected: i,
            onVisibleMonthChange: g ? R : void 0,
            dayAdornment: T,
          })),
          (t[11] = a),
          (t[12] = i),
          (t[13] = I),
          (t[14] = T),
          (t[15] = D))
        : (D = t[15]);
      var x;
      return (
        t[16] !== f || t[17] !== D
          ? ((x = s.jsx(r("WAWebKeyboardRotateFocusModal.react"), {
              xstyle: m.overrideRotateFocusStyles,
              children: s.jsx(
                "div",
                babelHelpers.extends({ ref: f, tabIndex: -1 }, k, {
                  children: D,
                }),
              ),
            })),
            (t[16] = f),
            (t[17] = D),
            (t[18] = x))
          : (x = t[18]),
        x
      );
    }
    l.default = p;
  },
  98,
);
