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
        n = e.businessHours,
        a = n.days,
        i = n.note,
        l = n.timezone,
        u = d(
          e.businessHours.mode ||
            o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS,
        ),
        m = u[0],
        _ = u[1],
        g;
      t[0] !== a
        ? ((g = function () {
            var e = {};
            for (var t of a) {
              var n = t.closed,
                r = t.dayKey,
                i = t.dayName,
                l = t.hours;
              e[r] = {
                closed: n,
                dayKey: r,
                dayName: i,
                hours: l || [
                  o("WAWebBusinessHoursUtils").getDefaultHoursPair(),
                ],
              };
            }
            return e;
          }),
          (t[0] = a),
          (t[1] = g))
        : (g = t[1]);
      var y = d(g),
        C = y[0],
        b = y[1],
        v;
      t[2] !== a ? ((v = a.map(h)), (t[2] = a), (t[3] = v)) : (v = t[3]);
      var S = v,
        R,
        L;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Edit business hours")),
          (L = { type: o("WAWebModal.react").ModalTheme.BusinessHours }),
          (t[4] = R),
          (t[5] = L))
        : ((R = t[4]), (L = t[5]));
      var E;
      t[6] !== C || t[7] !== m
        ? ((E = o("WAWebBusinessHoursUtils").isValidBusinessHours(m, C)),
          (t[6] = C),
          (t[7] = m),
          (t[8] = E))
        : (E = t[8]);
      var k;
      t[9] !== i || t[10] !== e || t[11] !== C || t[12] !== m || t[13] !== l
        ? ((k = async function () {
            (o("WAWebUtilsLogQplEvents").qplStartProfileSave("bizHours"),
              await e.saveBusinessProfile(
                o("WAWebBusinessHoursUtils").convertToRawBusinessProfile({
                  dayValues: C,
                  mode: m,
                  note: i,
                  timezone: l,
                }),
              ));
          }),
          (t[9] = i),
          (t[10] = e),
          (t[11] = C),
          (t[12] = m),
          (t[13] = l),
          (t[14] = k))
        : (k = t[14]);
      var I;
      t[15] !== S || t[16] !== C || t[17] !== m
        ? ((I = c.jsx(f, {
            selectedMode: m,
            onModeChange: _,
            days: C,
            onDayValuesChange: b,
            daysOrder: S,
          })),
          (t[15] = S),
          (t[16] = C),
          (t[17] = m),
          (t[18] = I))
        : (I = t[18]);
      var T;
      return (
        t[19] !== e.afterSave ||
        t[20] !== e.onCancel ||
        t[21] !== E ||
        t[22] !== k ||
        t[23] !== I
          ? ((T = c.jsx(r("WAWebSavePopup.react"), {
              title: R,
              modalConfig: L,
              isValid: E,
              doSave: k,
              afterSave: e.afterSave,
              onCancel: e.onCancel,
              tsNavigationData: p,
              children: I,
            })),
            (t[19] = e.afterSave),
            (t[20] = e.onCancel),
            (t[21] = E),
            (t[22] = k),
            (t[23] = I),
            (t[24] = T))
          : (T = t[24]),
        T
      );
    }
    function h(e) {
      return e.dayKey;
    }
    l.default = g;
  },
  226,
);
