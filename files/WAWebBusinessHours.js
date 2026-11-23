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
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = { surface: "smb-business-profile-edit-business-hours-detail" };
    function m(e) {
      var t = e.onSelect,
        n = e.selectedMode;
      return u.jsx(r("WAWebTabs.react"), {
        onSelect: t,
        selectedId: n,
        tabConfigs: [
          {
            id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
              .SPECIFIC_HOURS,
            title: s._(/*BTDS*/ ""),
          },
          {
            id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H,
            title: s._(/*BTDS*/ ""),
          },
          {
            id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
              .APPOINTMENT_ONLY,
            title: s._(/*BTDS*/ ""),
          },
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.days,
        n = e.daysOrder,
        o = e.onDayValuesChange,
        a = e.onModeChange,
        i = e.selectedMode,
        l = function (n, r) {
          var e,
            a = t[n],
            i = babelHelpers.extends(
              {},
              t,
              ((e = {}), (e[n] = babelHelpers.extends({}, a, r)), e),
            );
          o(i);
        };
      return u.jsxs("div", {
        children: [
          u.jsx(m, { selectedMode: i, onSelect: a }),
          u.jsx("div", {
            className:
              "x120ee7l x1q0q8m5 xso031l x1jxig9j x1odjw0f xvue9z x1yrsyyn x1icxu4v x10b6aqq x25sj25",
            children: n.map(function (e) {
              var n = t[e];
              return u.jsx(
                r("WAWebBusinessHoursDayEdit.react"),
                {
                  day: n,
                  mode: i,
                  updateDayValue: function (n) {
                    return l(e, n);
                  },
                },
                e,
              );
            }),
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.afterSave,
        n = e.businessHours,
        a = e.onCancel,
        i = e.saveBusinessProfile,
        l = n.days,
        m = n.note,
        _ = n.timezone,
        f = c(
          n.mode ||
            o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS,
        ),
        g = f[0],
        h = f[1],
        y = c(function () {
          var e = {};
          for (var t of l) {
            var n = t.closed,
              r = t.dayKey,
              a = t.dayName,
              i = t.hours;
            e[r] = {
              closed: n,
              dayKey: r,
              dayName: a,
              hours: i || [o("WAWebBusinessHoursUtils").getDefaultHoursPair()],
            };
          }
          return e;
        }),
        C = y[0],
        b = y[1],
        v = l.map(function (e) {
          return e.dayKey;
        });
      return u.jsx(r("WAWebSavePopup.react"), {
        title: s._(/*BTDS*/ ""),
        modalConfig: { type: o("WAWebModal.react").ModalTheme.BusinessHours },
        isValid: o("WAWebBusinessHoursUtils").isValidBusinessHours(g, C),
        doSave: async function () {
          (o("WAWebUtilsLogQplEvents").qplStartProfileSave("bizHours"),
            await i(
              o("WAWebBusinessHoursUtils").convertToRawBusinessProfile({
                dayValues: C,
                mode: g,
                note: m,
                timezone: _,
              }),
            ));
        },
        afterSave: t,
        onCancel: a,
        tsNavigationData: d,
        children: u.jsx(p, {
          selectedMode: g,
          onModeChange: h,
          days: C,
          onDayValuesChange: b,
          daysOrder: v,
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
