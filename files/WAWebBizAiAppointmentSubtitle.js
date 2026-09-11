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
    function u(e) {
      return e != null ? e : s._(/*BTDS*/ "Appointment");
    }
    function c(e) {
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
    var d = new Map();
    function m(e, t, n) {
      var r = e + "\0" + t + "\0" + n,
        o = d.get(r);
      if (o !== void 0) return o;
      var a = null;
      try {
        a = new Intl.ListFormat(e, { style: t, type: n });
      } catch (e) {
        a = null;
      }
      return (d.set(r, a), a);
    }
    function p(e, t, n, r) {
      var o = m(e, t, n);
      return o == null ? r.join(", ") : o.format(r);
    }
    function _(e, t, n) {
      var r = [];
      if (
        (e.durationText != null &&
          e.durationText !== "" &&
          r.push(e.durationText),
        e.locationTexts.length > 0 &&
          r.push(p(n, "short", "unit", e.locationTexts)),
        e.fieldLabels.length > 0)
      ) {
        var o = p(n, "long", "conjunction", e.fieldLabels);
        r.push(t(o, r.length === 0));
      }
      return r.length === 0 ? "" : p(n, "short", "unit", r);
    }
    function f(t, n) {
      var r = c(t.durationMinutes);
      return _(
        {
          durationText: r == null ? void 0 : r.toString(),
          fieldLabels: t.fields
            .filter(function (e) {
              return e.enabled && e.label !== "";
            })
            .map(function (e) {
              return e.label;
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
      (l.getBookingTitle = u),
      (l.formatAppointmentDuration = c),
      (l.formatAppointmentSubtitle = _),
      (l.getAppointmentSubtitle = f));
  },
  226,
);
