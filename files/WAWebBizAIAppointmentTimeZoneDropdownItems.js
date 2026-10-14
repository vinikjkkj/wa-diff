__d(
  "WAWebBizAIAppointmentTimeZoneDropdownItems",
  ["WAWebBizAIAppointmentTimeZoneIds"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e.trim() === "") return c;
      var t = c.find(function (t) {
        return t.itemKey === e;
      });
      return t != null
        ? [t].concat(
            c.filter(function (t) {
              return t.itemKey !== e;
            }),
          )
        : [s(e)].concat(c);
    }
    function s(e) {
      var t = e.replace(/_/g, " "),
        n = e.replace(/[/_]/g, " "),
        r = {
          optionId: e,
          primary: t,
          searchCriteria: n + " " + e,
          testid: "biz-ai-appointment-timezone-option-" + u(e),
        };
      return { height: 40, itemKey: e, menuItem: r };
    }
    function u(e) {
      return encodeURIComponent(e).replace(/%/g, "-").toLowerCase();
    }
    var c = Array.from(new Set(r("WAWebBizAIAppointmentTimeZoneIds")))
      .map(s)
      .sort(function (e, t) {
        return e.itemKey.localeCompare(t.itemKey);
      });
    l.default = e;
  },
  98,
);
