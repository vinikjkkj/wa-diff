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
      u = 10,
      c = 60,
      d = new Set(["address", "email", "name", "phone_number"]),
      m = n("$InternalEnum")({
        Title: "title",
        DurationLocation: "duration-location",
        CalendarAvailability: "calendar-availability",
        CustomerInfo: "customer-info",
      });
    function p(e) {
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
    function _(e) {
      return e === m.Title
        ? 1
        : e === m.DurationLocation
          ? 2
          : e === m.CalendarAvailability
            ? 3
            : e === m.CustomerInfo
              ? 4
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function f(e) {
      return e === m.Title
        ? "title"
        : e === m.DurationLocation
          ? "duration-location"
          : e === m.CalendarAvailability
            ? "calendar-availability"
            : e === m.CustomerInfo
              ? "customer-info"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function g(e) {
      return e === m.Title
        ? null
        : e === m.DurationLocation
          ? m.Title
          : e === m.CalendarAvailability
            ? m.DurationLocation
            : e === m.CustomerInfo
              ? m.CalendarAvailability
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function h(e) {
      return e === m.Title
        ? m.DurationLocation
        : e === m.DurationLocation
          ? m.CalendarAvailability
          : e === m.CalendarAvailability
            ? m.CustomerInfo
            : e === m.CustomerInfo
              ? null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function y(e, t, n, r) {
      var o,
        a,
        i = n ? null : w(t);
      return {
        availability: e,
        calendarId: i,
        calendarName:
          (o =
            (a = t.find(function (e) {
              return e.id === i;
            })) == null
              ? void 0
              : a.name) != null
            ? o
            : null,
        canEditAvailability: !1,
        customDurationHours: "",
        customDurationMinutes: "",
        customerFields: A(),
        customerFieldsWereRepaired: !1,
        customLocation: "",
        durationNeedsRepair: !1,
        durationOption: "30",
        inPersonLocation: "",
        locationTypes: ["PHONE_CALL"],
        locationTypesWereRepaired: !1,
        timeZoneId: r,
        timeZoneWasMissing: !1,
        title: "",
      };
    }
    function C(e) {
      var t,
        n,
        r = V(e.availability),
        o = b(e.durationMinutes),
        a = O(e.fields),
        i = a.customerFields,
        l = a.repaired,
        s = v(e.locationTypes, e.locationTypesHadUnknownValues === !0),
        u = S(e.timezoneId);
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
    function b(e) {
      if (e == null || e < u)
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
        n = N(t);
      return {
        customDurationHours: n === "custom" ? String(Math.floor(t / c)) : "",
        customDurationMinutes: n === "custom" ? String(t % c) : "",
        durationNeedsRepair: !1,
        durationOption: n,
      };
    }
    function v(e, t) {
      var n = Array.from(new Set(e));
      return {
        locationTypes: n.length === 0 ? ["PHONE_CALL"] : n,
        locationTypesWereRepaired:
          !t && (n.length === 0 || n.length !== e.length),
      };
    }
    function S(e) {
      return e == null || e.trim() === ""
        ? { timeZoneId: $(), timeZoneWasMissing: !0 }
        : { timeZoneId: e, timeZoneWasMissing: !1 };
    }
    function R(e, t) {
      var n = E(
        e.durationOption,
        e.customDurationHours,
        e.customDurationMinutes,
      );
      return {
        customerFields:
          e.customerFieldsWereRepaired ||
          !W(e.customerFields, t.customerFields),
        duration: e.durationNeedsRepair || n !== t.durationMinutes,
        location:
          e.locationTypesWereRepaired ||
          !q(e.locationTypes, t.locationTypes) ||
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
            !U(e.availability, t.availability)),
        title: e.title.trim() !== t.title.trim(),
      };
    }
    function L(e) {
      var t = e.filter(function (e) {
          return e.enabled;
        }),
        n = t
          .filter(function (e) {
            return d.has(e.id);
          })
          .map(function (e) {
            return e.id;
          });
      return { builtInFieldIds: n, customFieldCount: t.length - n.length };
    }
    function E(e, t, n) {
      return e === "15"
        ? 15
        : e === "30"
          ? 30
          : e === "60"
            ? 60
            : e === "custom"
              ? M(t) * c + M(n)
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function k(e) {
      return e > o("WAWebBizAiAppointmentAvailabilityNormalize").MINUTES_IN_DAY
        ? s._(/*BTDS*/ "Duration cannot exceed 24 hours")
        : e > 0 && e < u
          ? s._(/*BTDS*/ "Duration must be at least 10 minutes")
          : null;
    }
    function I(e, t, n, r) {
      return e < u ||
        e > o("WAWebBizAiAppointmentAvailabilityNormalize").MINUTES_IN_DAY ||
        t.length === 0 ||
        (t.includes("IN_PERSON") && n.trim() === "")
        ? !1
        : !(t.includes("CUSTOM_LOCATION") && r.trim() === "");
    }
    function T(e) {
      var t = V(e),
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
    function D(e, t) {
      return !e.canEditAvailability || U(e.availability, t) || T(t);
    }
    function x(e) {
      return typeof e.label == "string" ? e.label : e.label.toString();
    }
    function $() {
      try {
        var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return e == null || e === "" ? "UTC" : e;
      } catch (e) {
        return "UTC";
      }
    }
    function P(e, t) {
      return e.includes(t)
        ? e.filter(function (e) {
            return e !== t;
          })
        : [].concat(e, [t]);
    }
    function N(e) {
      return e === 15 ? "15" : e === 30 ? "30" : e === 60 ? "60" : "custom";
    }
    function M(e) {
      return /^\d+$/.test(e) ? Number.parseInt(e, 10) : 0;
    }
    function w(e) {
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
    function A() {
      return [
        F(),
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
    function F() {
      return {
        enabled: !0,
        id: "phone_number",
        label: s._(/*BTDS*/ "Phone number"),
        locked: !0,
        omitIdOnSubmit: !1,
      };
    }
    function O(e) {
      if (e.length === 0) return { customerFields: A(), repaired: !0 };
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
          var c = s ? B(i, r) : e.id;
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
          : { customerFields: [F()].concat(a), repaired: !0 }
      );
    }
    function B(e, t) {
      for (var n = e; t.has("persisted-custom-" + n); ) n++;
      return "persisted-custom-" + n;
    }
    function W(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          var r = t[n];
          return (
            r != null &&
            e.enabled === r.enabled &&
            e.id === r.id &&
            x(e) === x(r) &&
            e.omitIdOnSubmit === r.omitIdOnSubmit
          );
        })
      );
    }
    function q(e, t) {
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
    function U(e, t) {
      if (e.length !== t.length) return !1;
      var n = V(e).sort(H),
        r = V(t).sort(H);
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
    function V(e) {
      return e.map(function (e) {
        return e.endTimeMinutes === 0
          ? babelHelpers.extends({}, e, {
              endTimeMinutes: o("WAWebBizAiAppointmentAvailabilityNormalize")
                .MINUTES_IN_DAY,
            })
          : e;
      });
    }
    function H(e, t) {
      return (
        e.dayOfWeek - t.dayOfWeek ||
        e.startTimeMinutes - t.startTimeMinutes ||
        e.endTimeMinutes - t.endTimeMinutes
      );
    }
    ((l.CUSTOMER_FIELD_MAX_LENGTH = e),
      (l.AppointmentCreateStep = m),
      (l.getNextCustomFieldId = p),
      (l.getStepNumber = _),
      (l.getStepName = f),
      (l.getPreviousStep = g),
      (l.getNextStep = h),
      (l.getCreateAppointmentEditorInitialState = y),
      (l.getEditAppointmentEditorInitialState = C),
      (l.getAppointmentUpdateMask = R),
      (l.getAppointmentCustomerFieldLogData = L),
      (l.getDurationMinutes = E),
      (l.getDurationError = k),
      (l.isDurationAndLocationValid = I),
      (l.isAppointmentAvailabilityValid = T),
      (l.isAppointmentAvailabilityValidForEdit = D),
      (l.getCustomerFieldLabelText = x),
      (l.getLocalTimeZoneId = $),
      (l.toggleArrayValue = P),
      (l.getDefaultCalendarId = w));
  },
  226,
);
