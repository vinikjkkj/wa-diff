__d(
  "WAWebBizAIAppointmentEditorState",
  [
    "fbt",
    "$InternalEnum",
    "WAWebBizAiAppointmentAvailabilityFormat",
    "WAWebBizAiAppointmentAvailabilityNormalize",
    "WAWebBizAiAppointmentLocationUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 100,
      u = 25,
      c = 4,
      d = 10,
      m = 60,
      p = new Set(["address", "email", "name", "phone_number"]),
      _ = n("$InternalEnum")({
        Title: "title",
        DurationLocation: "duration-location",
        CalendarAvailability: "calendar-availability",
        CustomerInfo: "customer-info",
      });
    function f(e) {
      for (
        var t = new Set(
            e.map(function (e) {
              return e.id;
            }),
          ),
          n = e.length;
        t.has("custom-" + n);
      )
        n += 1;
      return "custom-" + n;
    }
    function g(e) {
      return e === _.Title
        ? 1
        : e === _.DurationLocation
          ? 2
          : e === _.CalendarAvailability
            ? 3
            : e === _.CustomerInfo
              ? 4
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function h(e) {
      return e === _.Title
        ? "title"
        : e === _.DurationLocation
          ? "duration-location"
          : e === _.CalendarAvailability
            ? "calendar-availability"
            : e === _.CustomerInfo
              ? "customer-info"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function y(e) {
      return e === _.Title
        ? null
        : e === _.DurationLocation
          ? _.Title
          : e === _.CalendarAvailability
            ? _.DurationLocation
            : e === _.CustomerInfo
              ? _.CalendarAvailability
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function C(e) {
      return e === _.Title
        ? _.DurationLocation
        : e === _.DurationLocation
          ? _.CalendarAvailability
          : e === _.CalendarAvailability
            ? _.CustomerInfo
            : e === _.CustomerInfo
              ? null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function b(e) {
      var t,
        n,
        r = e.availability,
        o = e.calendars,
        a = e.isNativeCalendar,
        i = e.timeZoneId,
        l = a ? null : F(o);
      return {
        availability: r,
        calendarId: l,
        calendarName:
          (t =
            (n = o.find(function (e) {
              return e.id === l;
            })) == null
              ? void 0
              : n.name) != null
            ? t
            : null,
        canEditAvailability: !1,
        customDurationHours: "",
        customDurationMinutes: "",
        customerFields: O(),
        customerFieldsWereRepaired: !1,
        customLocation: "",
        durationNeedsRepair: !1,
        durationOption: "30",
        inPersonLocation: "",
        locationTypes: ["PHONE_CALL"],
        locationTypesWereRepaired: !1,
        timeZoneId: i,
        timeZoneWasMissing: !1,
        title: "",
      };
    }
    function v(e) {
      var t,
        n,
        r = G(e.availability),
        o = S(e.durationMinutes),
        a = W(e.fields),
        i = a.customerFields,
        l = a.repaired,
        s = R(e.locationTypes, e.locationTypesHadUnknownValues === !0),
        u = L(e.timezoneId);
      return {
        availability: r,
        calendarId: e.calendarId,
        calendarName: e.calendarName,
        canEditAvailability: e.canEditAvailability,
        customDurationHours: o.customDurationHours,
        customDurationMinutes: o.customDurationMinutes,
        customerFields: i,
        customerFieldsWereRepaired: l,
        customLocation: (t = e.customLocation) != null ? t : "",
        durationNeedsRepair: o.durationNeedsRepair,
        durationOption: o.durationOption,
        inPersonLocation: (n = e.inPersonLocation) != null ? n : "",
        locationTypes: s.locationTypes,
        locationTypesWereRepaired: s.locationTypesWereRepaired,
        timeZoneId: u.timeZoneId,
        timeZoneWasMissing: u.timeZoneWasMissing,
        title: e.title,
      };
    }
    function S(e) {
      if (e == null || e < d)
        return {
          customDurationHours: "",
          customDurationMinutes: "",
          durationNeedsRepair: !0,
          durationOption: "30",
        };
      var t = Math.min(
          e,
          o("WAWebBizAiAppointmentAvailabilityNormalize").MINUTES_IN_DAY,
        ),
        n = w(t);
      return {
        customDurationHours: n === "custom" ? String(Math.floor(t / m)) : "",
        customDurationMinutes: n === "custom" ? String(t % m) : "",
        durationNeedsRepair: !1,
        durationOption: n,
      };
    }
    function R(e, t) {
      var n = Array.from(new Set(e));
      return {
        locationTypes: n.length === 0 ? ["PHONE_CALL"] : n,
        locationTypesWereRepaired:
          !t && (n.length === 0 || n.length !== e.length),
      };
    }
    function L(e) {
      return e == null || e.trim() === ""
        ? { timeZoneId: N(), timeZoneWasMissing: !0 }
        : { timeZoneId: e, timeZoneWasMissing: !1 };
    }
    function E(e, t) {
      var n = I(
        e.durationOption,
        e.customDurationHours,
        e.customDurationMinutes,
      );
      return {
        customerFields:
          e.customerFieldsWereRepaired ||
          !U(e.customerFields, t.customerFields),
        duration: e.durationNeedsRepair || n !== t.durationMinutes,
        location:
          e.locationTypesWereRepaired ||
          !V(e.locationTypes, t.locationTypes) ||
          o("WAWebBizAiAppointmentLocationUtils").getSelectedLocationText(
            e.locationTypes,
            "CUSTOM_LOCATION",
            e.customLocation,
          ) !== t.customLocation ||
          o("WAWebBizAiAppointmentLocationUtils").getSelectedLocationText(
            e.locationTypes,
            "IN_PERSON",
            e.inPersonLocation,
          ) !== t.inPersonLocation,
        schedule:
          e.canEditAvailability &&
          (e.timeZoneWasMissing ||
            e.timeZoneId !== t.timeZoneId ||
            !H(e.availability, t.availability)),
        title: e.title.trim() !== t.title.trim(),
      };
    }
    function k(e) {
      var t = e.filter(function (e) {
          return e.enabled;
        }),
        n = t
          .filter(function (e) {
            return p.has(e.id);
          })
          .map(function (e) {
            return e.id;
          });
      return { builtInFieldIds: n, customFieldCount: t.length - n.length };
    }
    function I(e, t, n) {
      return e === "15"
        ? 15
        : e === "30"
          ? 30
          : e === "60"
            ? 60
            : e === "custom"
              ? A(t) * m + A(n)
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function T(e) {
      return e > o("WAWebBizAiAppointmentAvailabilityNormalize").MINUTES_IN_DAY
        ? s._(/*BTDS*/ "Duration cannot exceed 24 hours")
        : e > 0 && e < d
          ? s._(/*BTDS*/ "Duration must be at least 10 minutes")
          : null;
    }
    function D(e, t, n, r) {
      return e < d ||
        e > o("WAWebBizAiAppointmentAvailabilityNormalize").MINUTES_IN_DAY ||
        t.length === 0 ||
        (t.includes("IN_PERSON") && n.trim() === "")
        ? !1
        : !(t.includes("CUSTOM_LOCATION") && r.trim() === "");
    }
    function x(e) {
      var t = G(e),
        n = function (n) {
          for (
            var e = t
                .filter(function (e) {
                  return e.dayOfWeek === n;
                })
                .sort(function (e, t) {
                  return e.startTimeMinutes - t.startTimeMinutes;
                }),
              r = 0;
            r < e.length;
            r++
          ) {
            var a = e[r],
              i = e[r - 1];
            if (
              a.startTimeMinutes < 0 ||
              a.endTimeMinutes >
                o("WAWebBizAiAppointmentAvailabilityNormalize")
                  .MINUTES_IN_DAY ||
              a.startTimeMinutes >= a.endTimeMinutes ||
              (i != null && i.endTimeMinutes > a.startTimeMinutes)
            )
              return { v: !1 };
          }
        },
        r;
      for (var a of o("WAWebBizAiAppointmentAvailabilityFormat").DAYS_IN_WEEK)
        if (((r = n(a)), r)) return r.v;
      return !0;
    }
    function $(e, t) {
      return !e.canEditAvailability || H(e.availability, t) || x(t);
    }
    function P(e) {
      return typeof e.label == "string" ? e.label : e.label.toString();
    }
    function N() {
      try {
        var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return e == null || e === "" ? "UTC" : e;
      } catch (e) {
        return "UTC";
      }
    }
    function M(e, t) {
      return e.includes(t)
        ? e.filter(function (e) {
            return e !== t;
          })
        : [].concat(e, [t]);
    }
    function w(e) {
      return e === 15 ? "15" : e === 30 ? "30" : e === 60 ? "60" : "custom";
    }
    function A(e) {
      return /^\d+$/.test(e) ? Number.parseInt(e, 10) : 0;
    }
    function F(e) {
      var t,
        n,
        r,
        o = e.filter(function (e) {
          return e.id.trim() !== "";
        });
      return (t =
        (n = o.find(function (e) {
          return e.isPrimary;
        })) == null
          ? void 0
          : n.id) != null
        ? t
        : (r = o[0]) == null
          ? void 0
          : r.id;
    }
    function O() {
      return [
        B(),
        {
          enabled: !0,
          id: "name",
          label: s._(/*BTDS*/ "Name"),
          locked: !1,
          omitIdOnSubmit: !1,
        },
        {
          enabled: !0,
          id: "email",
          label: s._(/*BTDS*/ "Email"),
          locked: !1,
          omitIdOnSubmit: !1,
        },
        {
          enabled: !1,
          id: "address",
          label: s._(/*BTDS*/ "Address"),
          locked: !1,
          omitIdOnSubmit: !1,
        },
      ];
    }
    function B() {
      return {
        enabled: !0,
        id: "phone_number",
        label: s._(/*BTDS*/ "Phone number"),
        locked: !0,
        omitIdOnSubmit: !1,
      };
    }
    function W(e) {
      if (e.length === 0) return { customerFields: O(), repaired: !0 };
      var t = !1,
        n = !1,
        r = new Set(
          e.map(function (e) {
            return e.id;
          }),
        ),
        o = new Set(),
        a = [];
      return (
        e.forEach(function (e, i) {
          var l = e.id !== "" && o.has(e.id);
          if (l) {
            n = !0;
            return;
          }
          var s = e.id === "",
            u = e.id === "phone_number";
          ((t = t || u), (n = n || (u && !e.enabled)));
          var c = s ? q(i, r) : e.id;
          (r.add(c),
            e.id !== "" && o.add(e.id),
            a.push({
              enabled: u ? !0 : e.enabled,
              id: c,
              label: e.label,
              locked: u,
              omitIdOnSubmit: s,
            }));
        }),
        t
          ? { customerFields: a, repaired: n }
          : { customerFields: [B()].concat(a), repaired: !0 }
      );
    }
    function q(e, t) {
      for (var n = e; t.has("persisted-custom-" + n); ) n++;
      return "persisted-custom-" + n;
    }
    function U(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          var r = t[n];
          return (
            r != null &&
            e.enabled === r.enabled &&
            e.id === r.id &&
            P(e) === P(r) &&
            e.omitIdOnSubmit === r.omitIdOnSubmit
          );
        })
      );
    }
    function V(e, t) {
      var n = new Set(e),
        r = new Set(t);
      return (
        e.length === n.size &&
        t.length === r.size &&
        n.size === r.size &&
        e.every(function (e) {
          return r.has(e);
        })
      );
    }
    function H(e, t) {
      if (e.length !== t.length) return !1;
      var n = G(e).sort(z),
        r = G(t).sort(z);
      return n.every(function (e, t) {
        var n = r[t];
        return (
          n != null &&
          e.dayOfWeek === n.dayOfWeek &&
          e.startTimeMinutes === n.startTimeMinutes &&
          e.endTimeMinutes === n.endTimeMinutes
        );
      });
    }
    function G(e) {
      return e.map(function (e) {
        return e.endTimeMinutes === 0
          ? babelHelpers.extends({}, e, {
              endTimeMinutes: o("WAWebBizAiAppointmentAvailabilityNormalize")
                .MINUTES_IN_DAY,
            })
          : e;
      });
    }
    function z(e, t) {
      return (
        e.dayOfWeek - t.dayOfWeek ||
        e.startTimeMinutes - t.startTimeMinutes ||
        e.endTimeMinutes - t.endTimeMinutes
      );
    }
    ((l.APPOINTMENT_TITLE_MAX_LENGTH = e),
      (l.CUSTOMER_FIELD_MAX_LENGTH = u),
      (l.TOTAL_APPOINTMENT_DETAILS_STEPS = c),
      (l.AppointmentCreateStep = _),
      (l.getNextCustomFieldId = f),
      (l.getStepNumber = g),
      (l.getStepName = h),
      (l.getPreviousStep = y),
      (l.getNextStep = C),
      (l.getCreateAppointmentEditorInitialState = b),
      (l.getEditAppointmentEditorInitialState = v),
      (l.getAppointmentUpdateMask = E),
      (l.getAppointmentCustomerFieldLogData = k),
      (l.getDurationMinutes = I),
      (l.getDurationError = T),
      (l.isDurationAndLocationValid = D),
      (l.isAppointmentAvailabilityValid = x),
      (l.isAppointmentAvailabilityValidForEdit = $),
      (l.getCustomerFieldLabelText = P),
      (l.getLocalTimeZoneId = N),
      (l.toggleArrayValue = M),
      (l.getDefaultCalendarId = F));
  },
  226,
);
