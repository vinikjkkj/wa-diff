__d(
  "WAWebBizAdCreationDurationSection.react",
  [
    "fbt",
    "WAWebBizAdCard.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSliderWithValue.react",
    "WAWebBizAdLogger",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(20),
        n = e.adAccountID,
        a = e.initialDuration,
        i = e.selectedDuration,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [r("waWebBizAdCreationDurationReducer")]), (t[0] = l))
        : (l = t[0]);
      var c = r("useWAWebBizAdCreationSpecDispatcherContext")(l),
        d = m(r("WAWebBizAdCreationLoggerContext")),
        h = _(!1),
        y = _(null),
        b,
        v;
      (t[1] !== n || t[2] !== a || t[3] !== d || t[4] !== i
        ? ((b = function () {
            d != null &&
              !h.current &&
              ((h.current = !0),
              r("WAWebBizAdLogger").log({
                event: "duration_card_impression",
                loggerContext: d,
                adAccountID: n,
                duration: i,
                defaultDuration: a,
                extra: { recommended_value: i },
              }));
          }),
          (v = [n, a, d, i]),
          (t[1] = n),
          (t[2] = a),
          (t[3] = d),
          (t[4] = i),
          (t[5] = b),
          (t[6] = v))
        : ((b = t[5]), (v = t[6])),
        p(b, v));
      var S;
      t[7] !== n || t[8] !== c || t[9] !== d || t[10] !== i
        ? ((S = function (t) {
            if (t !== i) {
              var e,
                o = (e = y.current) != null ? e : i;
              (c({
                durationData: { durationInDays: t },
                type: "duration_reducer.update_duration",
              }),
                d != null &&
                  r("WAWebBizAdLogger").log({
                    event: "change_duration",
                    loggerContext: d,
                    adAccountID: n,
                    startingValue: String(o),
                    endingValue: String(t),
                  }),
                (y.current = t));
            }
          }),
          (t[7] = n),
          (t[8] = c),
          (t[9] = d),
          (t[10] = i),
          (t[11] = S))
        : (S = t[11]);
      var R = S,
        L;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Duration")), (t[12] = L))
        : (L = t[12]);
      var E;
      t[13] !== i ? ((E = [i]), (t[13] = i), (t[14] = E)) : (E = t[14]);
      var k;
      t[15] !== R
        ? ((k = function (t) {
            return R(t[0]);
          }),
          (t[15] = R),
          (t[16] = k))
        : (k = t[16]);
      var I;
      return (
        t[17] !== E || t[18] !== k
          ? ((I = u.jsx(r("WAWebBizAdCard.react"), {
              header: L,
              children: u.jsx(r("WAWebBizAdCreationSliderWithValue.react"), {
                values: E,
                min: f,
                max: g,
                displayValueText: C,
                onChange: k,
                showMinMaxLabels: !1,
              }),
            })),
            (t[17] = E),
            (t[18] = k),
            (t[19] = I))
          : (I = t[19]),
        I
      );
    }
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
