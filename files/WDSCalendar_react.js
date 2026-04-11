__d(
  "WDSCalendar.react",
  [
    "BaseFormCalendar.react",
    "CometLocalDate",
    "TopLevelKeyCommandListener.react",
    "WDSCalendarConfig.stylex",
    "emptyArray",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = e.count,
        n = t === void 0 ? 1 : t,
        a = e.dayAdornment,
        i = e.disableAfterDate,
        l = e.disableBeforeDate,
        c = e.highlightedDates,
        d = c === void 0 ? r("emptyArray") : c,
        m = e.initialDate,
        p = e.onSelected,
        _ = e.onVisibleMonthChange,
        f = e.ref,
        g = e.selectedDates,
        h = g === void 0 ? r("emptyArray") : g,
        y = e.testID,
        C = i != null ? r("CometLocalDate").fromDate(i) : void 0,
        b = l != null ? r("CometLocalDate").fromDate(l) : void 0,
        v =
          m != null
            ? r("CometLocalDate").fromDate(m)
            : r("CometLocalDate").fromDate(),
        S = d.map(function (e) {
          return r("CometLocalDate").fromDate(e);
        }),
        R = h.map(function (e) {
          return r("CometLocalDate").fromDate(e);
        }),
        L = function (t) {
          p(t.getJSDate());
        },
        E =
          _ != null
            ? function (e) {
                _(e.getJSDate());
              }
            : void 0,
        k = u(
          function (e) {
            return a == null ? null : a(e.getJSDate());
          },
          [a],
        );
      return s.jsx(r("TopLevelKeyCommandListener.react"), {
        children: s.jsx(r("BaseFormCalendar.react"), {
          count: n,
          dayAdornment: a != null ? k : void 0,
          disableAfterDate: C,
          disableBeforeDate: b,
          highlightedDates: S,
          initialDate: v,
          monthNavigationAlignment: "right",
          onSelected: L,
          onVisibleMonthChange: E,
          ref: f,
          selectedDates: R,
          testID: y,
          typeVariant: o("WDSCalendarConfig.stylex").WDSCalendarTypeVariant,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
