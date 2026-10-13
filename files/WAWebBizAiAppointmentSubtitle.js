__d(
  "WAWebBizAiAppointmentSubtitle",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "PHONE_CALL"
        ? s._(/*BTDS*/ "Phone call")
        : e === "IN_PERSON"
          ? s._(/*BTDS*/ "In person")
          : e === "VIDEO_CALL"
            ? s._(/*BTDS*/ "Video call")
            : e === "CUSTOM_LOCATION"
              ? s._(/*BTDS*/ "Custom location")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function u(t) {
      return t == null
        ? null
        : (function (t) {
            return t === "PHONE_CALL"
              ? e("PHONE_CALL")
              : t === "IN_PERSON"
                ? e("IN_PERSON")
                : t === "VIDEO_CALL"
                  ? e("VIDEO_CALL")
                  : t === "CUSTOM_LOCATION"
                    ? e("CUSTOM_LOCATION")
                    : null;
          })(t);
    }
    function c(e, t) {
      var n = u(e),
        r = t == null ? void 0 : t.trim(),
        o = r == null || r === "" ? null : r;
      if (e != null && e === "CUSTOM_LOCATION") {
        var a = o != null ? o : n;
        return { compact: a, primary: a, secondary: null };
      }
      return {
        compact: n,
        primary: n != null ? n : o,
        secondary: n != null ? o : null,
      };
    }
    function d(e) {
      var t = e == null ? void 0 : e.trim();
      return t != null && t !== "" ? t : s._(/*BTDS*/ "Appointment");
    }
    function m(e) {
      if (e == null || e <= 0) return null;
      var t = Math.floor(e / 60),
        n = e % 60;
      if (t === 0)
        return s._(/*BTDS*/ '_j{"*":"{minutes} minutes","_1":"1 minute"}', [
          s._plural(n, "minutes"),
        ]);
      var r = s._(/*BTDS*/ '_j{"*":"{hours} hours","_1":"1 hour"}', [
        s._plural(t, "hours"),
      ]);
      if (n === 0) return r;
      var o = s._(/*BTDS*/ '_j{"*":"{minutes} minutes","_1":"1 minute"}', [
        s._plural(n, "minutes"),
      ]);
      return s._(/*BTDS*/ "{hours} {minutes}", [
        s._param("hours", r),
        s._param("minutes", o),
      ]);
    }
    var p = new Map();
    function _(e, t, n) {
      var r = e + "\0" + t + "\0" + n,
        o = p.get(r);
      if (o !== void 0) return o;
      var a = null;
      try {
        a = new Intl.ListFormat(e, { style: t, type: n });
      } catch (e) {
        a = null;
      }
      return (p.set(r, a), a);
    }
    function f(e, t, n, r) {
      var o = _(e, t, n);
      return o == null ? r.join(", ") : o.format(r);
    }
    function g(e, t, n) {
      var r = [];
      if (
        (e.durationText != null &&
          e.durationText !== "" &&
          r.push(e.durationText),
        e.locationTexts.length > 0 &&
          r.push(f(n, "short", "unit", e.locationTexts)),
        e.fieldLabels.length > 0)
      ) {
        var o = f(n, "long", "conjunction", e.fieldLabels);
        r.push(t(o, r.length === 0));
      }
      return r.length === 0 ? "" : f(n, "short", "unit", r);
    }
    function h(t, n) {
      var r = m(t.durationMinutes);
      return g(
        {
          durationText: r == null ? void 0 : r.toString(),
          fieldLabels: t.fields
            .filter(function (e) {
              return e.enabled;
            })
            .map(function (e) {
              return e.label;
            })
            .filter(function (e) {
              return e !== "";
            }),
          locationTexts: t.locationTypes.map(function (t) {
            return e(t).toString();
          }),
        },
        function (e, t) {
          return t
            ? s
                ._(/*BTDS*/ "Asking for {fields}", [s._param("fields", e)])
                .toString()
            : s
                ._(/*BTDS*/ "asking for {fields}", [s._param("fields", e)])
                .toString();
        },
        n,
      );
    }
    ((l.getAppointmentLocationLabel = e),
      (l.getBookingLocationLabel = u),
      (l.getBookingLocationPresentation = c),
      (l.getBookingTitle = d),
      (l.formatAppointmentDuration = m),
      (l.joinList = f),
      (l.formatAppointmentSubtitle = g),
      (l.getAppointmentSubtitle = h));
  },
  226,
);
