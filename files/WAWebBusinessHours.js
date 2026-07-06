__d(
  "WAWebBusinessHours",
  [
    "fbt",
    "WAWebBusinessHoursDayEdit.react",
    "WAWebBusinessHoursUtils",
    "WAWebBusinessProfileTypes",
    "WAWebModal.react",
    "WAWebSavePopup.react",
    "WAWebTabs.react",
    "WAWebUtilsLogQplEvents",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = { surface: "smb-business-profile-edit-business-hours-detail" };
    function m(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.onSelect,
        a = e.selectedMode,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
              .SPECIFIC_HOURS,
            title: s._(/*BTDS*/ "Selected hours"),
          }),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = {
            id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H,
            title: s._(/*BTDS*/ "Always open"),
          }),
          (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [
            i,
            l,
            {
              id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
                .APPOINTMENT_ONLY,
              title: s._(/*BTDS*/ "By appointment"),
            },
          ]),
          (t[2] = c))
        : (c = t[2]);
      var d;
      return (
        t[3] !== n || t[4] !== a
          ? ((d = u.jsx(r("WAWebTabs.react"), {
              onSelect: n,
              selectedId: a,
              tabConfigs: c,
            })),
            (t[3] = n),
            (t[4] = a),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.days,
        a = e.daysOrder,
        i = e.onDayValuesChange,
        l = e.onModeChange,
        s = e.selectedMode,
        c;
      t[0] !== n || t[1] !== i
        ? ((c = function (t, r) {
            var e,
              o = n[t],
              a = babelHelpers.extends(
                {},
                n,
                ((e = {}), (e[t] = babelHelpers.extends({}, o, r)), e),
              );
            i(a);
          }),
          (t[0] = n),
          (t[1] = i),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        p;
      t[3] !== l || t[4] !== s
        ? ((p = u.jsx(m, { selectedMode: s, onSelect: l })),
          (t[3] = l),
          (t[4] = s),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = {
            className:
              "x120ee7l x1q0q8m5 xso031l x1jxig9j x1odjw0f xvue9z x1yrsyyn x1icxu4v x10b6aqq x25sj25",
          }),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      if (t[7] !== n || t[8] !== a || t[9] !== s || t[10] !== d) {
        var g;
        (t[12] !== n || t[13] !== s || t[14] !== d
          ? ((g = function (t) {
              var e = n[t];
              return u.jsx(
                r("WAWebBusinessHoursDayEdit.react"),
                {
                  day: e,
                  mode: s,
                  updateDayValue: function (n) {
                    return d(t, n);
                  },
                },
                t,
              );
            }),
            (t[12] = n),
            (t[13] = s),
            (t[14] = d),
            (t[15] = g))
          : (g = t[15]),
          (f = a.map(g)),
          (t[7] = n),
          (t[8] = a),
          (t[9] = s),
          (t[10] = d),
          (t[11] = f));
      } else f = t[11];
      var h;
      t[16] !== f
        ? ((h = u.jsx("div", babelHelpers.extends({}, _, { children: f }))),
          (t[16] = f),
          (t[17] = h))
        : (h = t[17]);
      var y;
      return (
        t[18] !== p || t[19] !== h
          ? ((y = u.jsxs("div", { children: [p, h] })),
            (t[18] = p),
            (t[19] = h),
            (t[20] = y))
          : (y = t[20]),
        y
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(25),
        a = e.afterSave,
        i = e.businessHours,
        l = e.onCancel,
        m = e.saveBusinessProfile,
        _ = i.days,
        g = i.note,
        h = i.timezone,
        y = c(
          i.mode ||
            o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS,
        ),
        C = y[0],
        b = y[1],
        v;
      t[0] !== _
        ? ((v = function () {
            var e = {};
            for (var t of _) {
              var n = t.closed,
                r = t.dayKey,
                a = t.dayName,
                i = t.hours;
              e[r] = {
                closed: n,
                dayKey: r,
                dayName: a,
                hours: i || [
                  o("WAWebBusinessHoursUtils").getDefaultHoursPair(),
                ],
              };
            }
            return e;
          }),
          (t[0] = _),
          (t[1] = v))
        : (v = t[1]);
      var S = c(v),
        R = S[0],
        L = S[1],
        E;
      t[2] !== _ ? ((E = _.map(f)), (t[2] = _), (t[3] = E)) : (E = t[3]);
      var k = E,
        I,
        T;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Edit business hours")),
          (T = { type: o("WAWebModal.react").ModalTheme.BusinessHours }),
          (t[4] = I),
          (t[5] = T))
        : ((I = t[4]), (T = t[5]));
      var D;
      t[6] !== R || t[7] !== C
        ? ((D = o("WAWebBusinessHoursUtils").isValidBusinessHours(C, R)),
          (t[6] = R),
          (t[7] = C),
          (t[8] = D))
        : (D = t[8]);
      var x;
      t[9] !== g || t[10] !== m || t[11] !== R || t[12] !== C || t[13] !== h
        ? ((x = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WAWebUtilsLogQplEvents").qplStartProfileSave("bizHours"),
                yield m(
                  o("WAWebBusinessHoursUtils").convertToRawBusinessProfile({
                    dayValues: R,
                    mode: C,
                    note: g,
                    timezone: h,
                  }),
                ));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[9] = g),
          (t[10] = m),
          (t[11] = R),
          (t[12] = C),
          (t[13] = h),
          (t[14] = x))
        : (x = t[14]);
      var $;
      t[15] !== k || t[16] !== R || t[17] !== C
        ? (($ = u.jsx(p, {
            selectedMode: C,
            onModeChange: b,
            days: R,
            onDayValuesChange: L,
            daysOrder: k,
          })),
          (t[15] = k),
          (t[16] = R),
          (t[17] = C),
          (t[18] = $))
        : ($ = t[18]);
      var P;
      return (
        t[19] !== a || t[20] !== l || t[21] !== D || t[22] !== x || t[23] !== $
          ? ((P = u.jsx(r("WAWebSavePopup.react"), {
              title: I,
              modalConfig: T,
              isValid: D,
              doSave: x,
              afterSave: a,
              onCancel: l,
              tsNavigationData: d,
              children: $,
            })),
            (t[19] = a),
            (t[20] = l),
            (t[21] = D),
            (t[22] = x),
            (t[23] = $),
            (t[24] = P))
          : (P = t[24]),
        P
      );
    }
    function f(e) {
      return e.dayKey;
    }
    l.default = _;
  },
  226,
);
