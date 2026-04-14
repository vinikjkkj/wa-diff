__d(
  "WAWebBizAdCreationDurationSection.react",
  [
    "fbt",
    "WAWebBizAdCard.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSliderWithValue.react",
    "WAWebBizAdLogger",
    "react",
    "useWAWebBizAdCreationSpecDispatcherContext",
    "waWebBizAdCreationDurationReducer",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useRef,
      f = 1,
      g = 60;
    function h(e) {
      var t = e.adAccountID,
        n = e.initialDuration,
        o = e.selectedDuration,
        a = r("useWAWebBizAdCreationSpecDispatcherContext")([
          r("waWebBizAdCreationDurationReducer"),
        ]),
        i = m(r("WAWebBizAdCreationLoggerContext")),
        l = _(!1),
        c = _(null);
      p(
        function () {
          i != null &&
            !l.current &&
            ((l.current = !0),
            r("WAWebBizAdLogger").log({
              event: "duration_card_impression",
              loggerContext: i,
              adAccountID: t,
              duration: o,
              defaultDuration: n,
              extra: { recommended_value: o },
            }));
        },
        [t, n, i, o],
      );
      var h = d(
        function (e) {
          if (e !== o) {
            var n,
              l = (n = c.current) != null ? n : o;
            (a({
              durationData: { durationInDays: e },
              type: "duration_reducer.update_duration",
            }),
              i != null &&
                r("WAWebBizAdLogger").log({
                  event: "change_duration",
                  loggerContext: i,
                  adAccountID: t,
                  startingValue: String(l),
                  endingValue: String(e),
                }),
              (c.current = e));
          }
        },
        [t, a, i, o],
      );
      return u.jsx(r("WAWebBizAdCard.react"), {
        header: s._(/*BTDS*/ "Duration"),
        children: u.jsx(r("WAWebBizAdCreationSliderWithValue.react"), {
          values: [o],
          min: f,
          max: g,
          displayValueText: C,
          onChange: function (t) {
            return h(t[0]);
          },
          showMinMaxLabels: !1,
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = r("withWAWebBizAdCreationSpecContext")(h, function (e) {
      return {
        adAccountID: e.adAccountData.id,
        initialDuration: e.durationData.initialDurationInDays,
        selectedDuration: e.durationData.durationInDays,
      };
    });
    function C(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} days","_1":"1 day"}', [
        s._plural(e, "number"),
      ]);
    }
    l.default = y;
  },
  226,
);
