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
    "WAWebUISpacing",
    "WAWebUtilsLogQplEvents",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        editMain: {
          borderBottomColor: "x120ee7l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          height: "x1jxig9j",
          overflowY: "x1odjw0f",
          width: "xvue9z",
          $$css: !0,
        },
      },
      p = { surface: "smb-business-profile-edit-business-hours-detail" };
    function _(e) {
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
      var u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = [
            i,
            l,
            {
              id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
                .APPOINTMENT_ONLY,
              title: s._(/*BTDS*/ "By appointment"),
            },
          ]),
          (t[2] = u))
        : (u = t[2]);
      var d;
      return (
        t[3] !== n || t[4] !== a
          ? ((d = c.jsx(r("WAWebTabs.react"), {
              onSelect: n,
              selectedId: a,
              tabConfigs: u,
            })),
            (t[3] = n),
            (t[4] = a),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function f(t) {
      var n = o("react-compiler-runtime").c(21),
        a = t.days,
        i = t.daysOrder,
        l = t.onDayValuesChange,
        s = t.onModeChange,
        u = t.selectedMode,
        d;
      n[0] !== a || n[1] !== l
        ? ((d = function (t, n) {
            var e,
              r = a[t],
              o = babelHelpers.extends(
                {},
                a,
                ((e = {}), (e[t] = babelHelpers.extends({}, r, n)), e),
              );
            l(o);
          }),
          (n[0] = a),
          (n[1] = l),
          (n[2] = d))
        : (d = n[2]);
      var p = d,
        f;
      n[3] !== s || n[4] !== u
        ? ((f = c.jsx(_, { selectedMode: u, onSelect: s })),
          (n[3] = s),
          (n[4] = u),
          (n[5] = f))
        : (f = n[5]);
      var g;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (e || (e = r("stylex"))).props(
            m.editMain,
            o("WAWebUISpacing").uiPadding.all6,
          )),
          (n[6] = g))
        : (g = n[6]);
      var h;
      if (n[7] !== a || n[8] !== i || n[9] !== u || n[10] !== p) {
        var y;
        (n[12] !== a || n[13] !== u || n[14] !== p
          ? ((y = function (t) {
              var e = a[t];
              return c.jsx(
                r("WAWebBusinessHoursDayEdit.react"),
                {
                  day: e,
                  mode: u,
                  updateDayValue: function (n) {
                    return p(t, n);
                  },
                },
                t,
              );
            }),
            (n[12] = a),
            (n[13] = u),
            (n[14] = p),
            (n[15] = y))
          : (y = n[15]),
          (h = i.map(y)),
          (n[7] = a),
          (n[8] = i),
          (n[9] = u),
          (n[10] = p),
          (n[11] = h));
      } else h = n[11];
      var C;
      n[16] !== h
        ? ((C = c.jsx("div", babelHelpers.extends({}, g, { children: h }))),
          (n[16] = h),
          (n[17] = C))
        : (C = n[17]);
      var b;
      return (
        n[18] !== f || n[19] !== C
          ? ((b = c.jsxs("div", { children: [f, C] })),
            (n[18] = f),
            (n[19] = C),
            (n[20] = b))
          : (b = n[20]),
        b
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(25),
        a = e.businessHours,
        i = a.days,
        l = a.note,
        u = a.timezone,
        m = d(
          e.businessHours.mode ||
            o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS,
        ),
        _ = m[0],
        g = m[1],
        y;
      t[0] !== i
        ? ((y = function () {
            var e = {};
            for (var t of i) {
              var n = t.closed,
                r = t.dayKey,
                a = t.dayName,
                l = t.hours;
              e[r] = {
                closed: n,
                dayKey: r,
                dayName: a,
                hours: l || [
                  o("WAWebBusinessHoursUtils").getDefaultHoursPair(),
                ],
              };
            }
            return e;
          }),
          (t[0] = i),
          (t[1] = y))
        : (y = t[1]);
      var C = d(y),
        b = C[0],
        v = C[1],
        S;
      t[2] !== i ? ((S = i.map(h)), (t[2] = i), (t[3] = S)) : (S = t[3]);
      var R = S,
        L,
        E;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Edit business hours")),
          (E = { type: o("WAWebModal.react").ModalTheme.BusinessHours }),
          (t[4] = L),
          (t[5] = E))
        : ((L = t[4]), (E = t[5]));
      var k;
      t[6] !== b || t[7] !== _
        ? ((k = o("WAWebBusinessHoursUtils").isValidBusinessHours(_, b)),
          (t[6] = b),
          (t[7] = _),
          (t[8] = k))
        : (k = t[8]);
      var I;
      t[9] !== l || t[10] !== e || t[11] !== b || t[12] !== _ || t[13] !== u
        ? ((I = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WAWebUtilsLogQplEvents").qplStartProfileSave("bizHours"),
                yield e.saveBusinessProfile(
                  o("WAWebBusinessHoursUtils").convertToRawBusinessProfile({
                    dayValues: b,
                    mode: _,
                    note: l,
                    timezone: u,
                  }),
                ));
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (t[9] = l),
          (t[10] = e),
          (t[11] = b),
          (t[12] = _),
          (t[13] = u),
          (t[14] = I))
        : (I = t[14]);
      var T;
      t[15] !== R || t[16] !== b || t[17] !== _
        ? ((T = c.jsx(f, {
            selectedMode: _,
            onModeChange: g,
            days: b,
            onDayValuesChange: v,
            daysOrder: R,
          })),
          (t[15] = R),
          (t[16] = b),
          (t[17] = _),
          (t[18] = T))
        : (T = t[18]);
      var D;
      return (
        t[19] !== e.afterSave ||
        t[20] !== e.onCancel ||
        t[21] !== k ||
        t[22] !== I ||
        t[23] !== T
          ? ((D = c.jsx(r("WAWebSavePopup.react"), {
              title: L,
              modalConfig: E,
              isValid: k,
              doSave: I,
              afterSave: e.afterSave,
              onCancel: e.onCancel,
              tsNavigationData: p,
              children: T,
            })),
            (t[19] = e.afterSave),
            (t[20] = e.onCancel),
            (t[21] = k),
            (t[22] = I),
            (t[23] = T),
            (t[24] = D))
          : (D = t[24]),
        D
      );
    }
    function h(e) {
      return e.dayKey;
    }
    l.default = g;
  },
  226,
);
