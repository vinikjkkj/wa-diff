__d(
  "WAWebBizAIAppointmentTimeZoneDropdownItems",
  [
    "fbt",
    "WAWebBizAIAppointmentTimeZoneIds",
    "WAWebBizAiAppointmentAvailabilityFormat",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var r = f.map(function (e) {
        return p(e, t, n);
      });
      return e.trim() === ""
        ? r
        : [p(e, t, n)].concat(
            r.filter(function (t) {
              return t.itemKey !== e;
            }),
          );
    }
    function u(e, t, n) {
      return c(e, m(e, t, n));
    }
    function c(e, t) {
      var n = d(e);
      return t === ""
        ? n
        : s._(/*BTDS*/ "{time zone name} ({time zone abbreviation})", [
            s._param("time zone name", n),
            s._param("time zone abbreviation", t),
          ]);
    }
    function d(e) {
      return e.replace(/_/g, " ");
    }
    function m(e, t, n) {
      var r = o(
        "WAWebBizAiAppointmentAvailabilityFormat",
      ).getTimeZoneAbbreviation(e, t, n);
      return r === e || d(e).includes(r) ? "" : r;
    }
    function p(e, t, n) {
      var r = e.replace(/[/_]/g, " "),
        o = m(e, t, n),
        a = {
          optionId: e,
          primary: c(e, o),
          searchCriteria: (r + " " + e + " " + o).trim(),
          testid: "biz-ai-appointment-timezone-option-" + _(e),
        };
      return { height: 40, itemKey: e, menuItem: a };
    }
    function _(e) {
      return encodeURIComponent(e).replace(/%/g, "-").toLowerCase();
    }
    var f = Array.from(new Set(r("WAWebBizAIAppointmentTimeZoneIds"))).sort(
      function (e, t) {
        return e.localeCompare(t);
      },
    );
    ((l.getTimeZoneDropdownItems = e), (l.getTimeZoneLabel = u));
  },
  226,
);
