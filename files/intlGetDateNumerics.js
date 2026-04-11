__d(
  "intlGetDateNumerics",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n,
        r = t.utc === !0;
      return (
        r
          ? (n = {
              dateDay: e.getUTCDate(),
              dateDayOfWeek: e.getUTCDay(),
              dateMonth: e.getUTCMonth(),
              dateYear: e.getUTCFullYear(),
              dateHours: e.getUTCHours(),
              dateMinutes: e.getUTCMinutes(),
              dateSeconds: e.getUTCSeconds(),
              dateMilliseconds: e.getUTCMilliseconds(),
            })
          : (n = {
              dateDay: e.getDate(),
              dateDayOfWeek: e.getDay(),
              dateMonth: e.getMonth(),
              dateYear: e.getFullYear(),
              dateHours: e.getHours(),
              dateMinutes: e.getMinutes(),
              dateSeconds: e.getSeconds(),
              dateMilliseconds: e.getMilliseconds(),
            }),
        n
      );
    }
    i.default = e;
  },
  66,
);
