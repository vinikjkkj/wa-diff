__d(
  "WAWebDatePickerContainer.react",
  [
    "WAWebKeyboardRotateFocusModal.react",
    "WAWebMessageDensityDot.react",
    "WAWebSearchByTypeAndDateGatingUtils",
    "WAWebUserPrefsHistorySync",
    "WDSCalendar.react",
    "react",
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
      var t = e.chatId,
        n = e.defaultActiveStartDate,
        a = e.onDateSelected,
        i = o("WAWebUserPrefsHistorySync").getHistorySyncEarliestDate() * 1e3,
        l = new Date(),
        u = new Date(i),
        p = r("useWAWebFocusOnMount")(),
        _ = o(
          "WAWebSearchByTypeAndDateGatingUtils",
        ).calendarMessageDensityEnabled(),
        f = d(n != null ? n : new Date()),
        g = f[0],
        h = f[1],
        y = r("useWAWebMessageDensity")(_ ? t : null, g),
        C = c(function (e) {
          h(e);
        }, []),
        b = c(
          function (e) {
            var t;
            if (
              y == null ||
              e.getMonth() !== g.getMonth() ||
              e.getFullYear() !== g.getFullYear()
            )
              return null;
            var n = (t = y.get(e.getDate())) != null ? t : 0;
            return s.jsx(r("WAWebMessageDensityDot.react"), { count: n });
          },
          [y, g],
        );
      return s.jsx(r("WAWebKeyboardRotateFocusModal.react"), {
        xstyle: m.overrideRotateFocusStyles,
        children: s.jsx("div", {
          ref: p,
          tabIndex: -1,
          className:
            "x16w0wmm xtlo18s xg7h5cd x1sr759z x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
          children: s.jsx(r("WDSCalendar.react"), {
            disableAfterDate: l,
            disableBeforeDate: u,
            selectedDates: n ? [n] : [],
            initialDate: n,
            onSelected: a,
            onVisibleMonthChange: _ ? C : void 0,
            dayAdornment: _ ? b : void 0,
          }),
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
