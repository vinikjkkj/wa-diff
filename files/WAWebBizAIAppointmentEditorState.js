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
    var e = 25,
      u = 4,
      c = 10,
      d = 60,
      m = new Set(["address", "email", "name", "phone_number"]),
      p = n("$InternalEnum")({
        Title: "title",
        DurationLocation: "duration-location",
        CalendarAvailability: "calendar-availability",
        CustomerInfo: "customer-info",
      });
    function _(e) {
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
    function f(e) {
      return e === p.Title
        ? 1
        : e === p.DurationLocation
          ? 2
          : e === p.CalendarAvailability
            ? 3
            : e === p.CustomerInfo
              ? 4
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function g(e) {
      return e === p.Title
        ? "title"
        : e === p.DurationLocation
          ? "duration-location"
          : e === p.CalendarAvailability
            ? "calendar-availability"
            : e === p.CustomerInfo
              ? "customer-info"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function h(e) {
      return e === p.Title
        ? null
        : e === p.DurationLocation
          ? p.Title
          : e === p.CalendarAvailability
            ? p.DurationLocation
            : e === p.CustomerInfo
              ? p.CalendarAvailability
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function y(e) {
      return e === p.Title
        ? p.DurationLocation
        : e === p.DurationLocation
          ? p.CalendarAvailability
          : e === p.CalendarAvailability
            ? p.CustomerInfo
            : e === p.CustomerInfo
              ? null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function C(e) {
      var t,
        n,
        r = e.availability,
        o = e.calendars,
        a = e.isNativeCalendar,
        i = e.timeZoneId,
        l = a ? null : A(o);
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
        customerFields: F(),
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
    function b(e) {
      var t,
        n,
        r = H(e.availability),
        o = v(e.durationMinutes),
        a = B(e.fields),
        i = a.customerFields,
        l = a.repaired,
        s = S(e.locationTypes, e.locationTypesHadUnknownValues === !0),
        u = R(e.timezoneId);
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
    function v(e) {
      if (e == null || e < c)
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
        n = M(t);
      return {
        customDurationHours: n === "custom" ? String(Math.floor(t / d)) : "",
        customDurationMinutes: n === "custom" ? String(t % d) : "",
        durationNeedsRepair: !1,
        durationOption: n,
      };
    }
    function S(e, t) {
      var n = Array.from(new Set(e));
      return {
        locationTypes: n.length === 0 ? ["PHONE_CALL"] : n,
        locationTypesWereRepaired:
          !t && (n.length === 0 || n.length !== e.length),
      };
    }
    function R(e) {
      return e == null || e.trim() === ""
        ? { timeZoneId: P(), timeZoneWasMissing: !0 }
        : { timeZoneId: e, timeZoneWasMissing: !1 };
    }
    function L(e, t) {
      var n = k(
        e.durationOption,
        e.customDurationHours,
        e.customDurationMinutes,
      );
      return {
        customerFields:
          e.customerFieldsWereRepaired ||
          !q(e.customerFields, t.customerFields),
        duration: e.durationNeedsRepair || n !== t.durationMinutes,
        location:
          e.locationTypesWereRepaired ||
          !U(e.locationTypes, t.locationTypes) ||
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
            !V(e.availability, t.availability)),
        title: e.title.trim() !== t.title.trim(),
      };
    }
    function E(e) {
      var t = e.filter(function (e) {
          return e.enabled;
        }),
        n = t
          .filter(function (e) {
            return m.has(e.id);
          })
          .map(function (e) {
            return e.id;
          });
      return { builtInFieldIds: n, customFieldCount: t.length - n.length };
    }
    function k(e, t, n) {
      return e === "15"
        ? 15
        : e === "30"
          ? 30
          : e === "60"
            ? 60
            : e === "custom"
              ? w(t) * d + w(n)
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function I(e) {
      return e > o("WAWebBizAiAppointmentAvailabilityNormalize").MINUTES_IN_DAY
        ? s._(/*BTDS*/ "Duration cannot exceed 24 hours")
        : e > 0 && e < c
          ? s._(/*BTDS*/ "Duration must be at least 10 minutes")
          : null;
    }
    function T(e, t, n, r) {
      return e < c ||
        e > o("WAWebBizAiAppointmentAvailabilityNormalize").MINUTES_IN_DAY ||
        t.length === 0 ||
        (t.includes("IN_PERSON") && n.trim() === "")
        ? !1
        : !(t.includes("CUSTOM_LOCATION") && r.trim() === "");
    }
    function D(e) {
      var t = H(e),
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
    function x(e, t) {
      return !e.canEditAvailability || V(e.availability, t) || D(t);
    }
    function $(e) {
      return typeof e.label == "string" ? e.label : e.label.toString();
    }
    function P() {
      try {
        var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return e == null || e === "" ? "UTC" : e;
      } catch (e) {
        return "UTC";
      }
    }
    function N(e, t) {
      return e.includes(t)
        ? e.filter(function (e) {
            return e !== t;
          })
        : [].concat(e, [t]);
    }
    function M(e) {
      return e === 15 ? "15" : e === 30 ? "30" : e === 60 ? "60" : "custom";
    }
    function w(e) {
      return /^\d+$/.test(e) ? Number.parseInt(e, 10) : 0;
    }
    function A(e) {
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
    function F() {
      return [
        O(),
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
    function O() {
      return {
        enabled: !0,
        id: "phone_number",
        label: s._(/*BTDS*/ "Phone number"),
        locked: !0,
        omitIdOnSubmit: !1,
      };
    }
    function B(e) {
      if (e.length === 0) return { customerFields: F(), repaired: !0 };
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
          var c = s ? W(i, r) : e.id;
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
          : { customerFields: [O()].concat(a), repaired: !0 }
      );
    }
    function W(e, t) {
      for (var n = e; t.has("persisted-custom-" + n); ) n++;
      return "persisted-custom-" + n;
    }
    function q(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          var r = t[n];
          return (
            r != null &&
            e.enabled === r.enabled &&
            e.id === r.id &&
            $(e) === $(r) &&
            e.omitIdOnSubmit === r.omitIdOnSubmit
          );
        })
      );
    }
    function U(e, t) {
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
    function V(e, t) {
      if (e.length !== t.length) return !1;
      var n = H(e).sort(G),
        r = H(t).sort(G);
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
    function H(e) {
      return e.map(function (e) {
        return e.endTimeMinutes === 0
          ? babelHelpers.extends({}, e, {
              endTimeMinutes: o("WAWebBizAiAppointmentAvailabilityNormalize")
                .MINUTES_IN_DAY,
            })
          : e;
      });
    }
    function G(e, t) {
      return (
        e.dayOfWeek - t.dayOfWeek ||
        e.startTimeMinutes - t.startTimeMinutes ||
        e.endTimeMinutes - t.endTimeMinutes
      );
    }
    ((l.CUSTOMER_FIELD_MAX_LENGTH = e),
      (l.TOTAL_APPOINTMENT_DETAILS_STEPS = u),
      (l.AppointmentCreateStep = p),
      (l.getNextCustomFieldId = _),
      (l.getStepNumber = f),
      (l.getStepName = g),
      (l.getPreviousStep = h),
      (l.getNextStep = y),
      (l.getCreateAppointmentEditorInitialState = C),
      (l.getEditAppointmentEditorInitialState = b),
      (l.getAppointmentUpdateMask = L),
      (l.getAppointmentCustomerFieldLogData = E),
      (l.getDurationMinutes = k),
      (l.getDurationError = I),
      (l.isDurationAndLocationValid = T),
      (l.isAppointmentAvailabilityValid = D),
      (l.isAppointmentAvailabilityValidForEdit = x),
      (l.getCustomerFieldLabelText = $),
      (l.getLocalTimeZoneId = P),
      (l.toggleArrayValue = N),
      (l.getDefaultCalendarId = A));
  },
  226,
);
