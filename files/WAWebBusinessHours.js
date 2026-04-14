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
      var t = e.onSelect,
        n = e.selectedMode;
      return c.jsx(r("WAWebTabs.react"), {
        onSelect: t,
        selectedId: n,
        tabConfigs: [
          {
            id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
              .SPECIFIC_HOURS,
            title: s._(/*BTDS*/ "Selected hours"),
          },
          {
            id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H,
            title: s._(/*BTDS*/ "Always open"),
          },
          {
            id: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
              .APPOINTMENT_ONLY,
            title: s._(/*BTDS*/ "By appointment"),
          },
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(t) {
      var n = t.days,
        a = t.daysOrder,
        i = t.onDayValuesChange,
        l = t.onModeChange,
        s = t.selectedMode,
        u = function (t, r) {
          var e,
            o = n[t],
            a = babelHelpers.extends(
              {},
              n,
              ((e = {}), (e[t] = babelHelpers.extends({}, o, r)), e),
            );
          i(a);
        };
      return c.jsxs("div", {
        children: [
          c.jsx(_, { selectedMode: s, onSelect: l }),
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                m.editMain,
                o("WAWebUISpacing").uiPadding.all6,
              ),
              {
                children: a.map(function (e) {
                  var t = n[e];
                  return c.jsx(
                    r("WAWebBusinessHoursDayEdit.react"),
                    {
                      day: t,
                      mode: s,
                      updateDayValue: function (n) {
                        return u(e, n);
                      },
                    },
                    e,
                  );
                }),
              },
            ),
          ),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.businessHours,
        a = t.days,
        i = t.note,
        l = t.timezone,
        u = d(
          e.businessHours.mode ||
            o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS,
        ),
        m = u[0],
        _ = u[1],
        g = d(function () {
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
              hours: l || [o("WAWebBusinessHoursUtils").getDefaultHoursPair()],
            };
          }
          return e;
        }),
        h = g[0],
        y = g[1],
        C = a.map(function (e) {
          return e.dayKey;
        });
      return c.jsx(r("WAWebSavePopup.react"), {
        title: s._(/*BTDS*/ "Edit business hours"),
        modalConfig: { type: o("WAWebModal.react").ModalTheme.BusinessHours },
        isValid: o("WAWebBusinessHoursUtils").isValidBusinessHours(m, h),
        doSave: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WAWebUtilsLogQplEvents").qplStartProfileSave("bizHours"),
            yield e.saveBusinessProfile(
              o("WAWebBusinessHoursUtils").convertToRawBusinessProfile({
                dayValues: h,
                mode: m,
                note: i,
                timezone: l,
              }),
            ));
        }),
        afterSave: e.afterSave,
        onCancel: e.onCancel,
        tsNavigationData: p,
        children: c.jsx(f, {
          selectedMode: m,
          onModeChange: _,
          days: h,
          onDayValuesChange: y,
          daysOrder: C,
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
