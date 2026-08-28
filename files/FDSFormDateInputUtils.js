__d(
  "FDSFormDateInputUtils",
  ["CometLocalDate", "DateFormatConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? ""
        : r("DateFormatConfig")
            .numericDateOrder.map(function (t) {
              switch (t) {
                case "d":
                  return e.getDate();
                case "m":
                  return e.getMonth() + 1;
                case "y":
                  return e.getYear();
              }
            })
            .join(r("DateFormatConfig").numericDateSeparator);
    }
    function s(e) {
      if (e == null) return null;
      var t = e.split(/[^0-9]+/).filter(Boolean);
      if (t.length === 3) {
        var n = Number(t[r("DateFormatConfig").numericDateOrder.indexOf("y")]),
          o = Number(t[r("DateFormatConfig").numericDateOrder.indexOf("m")]),
          a = Number(t[r("DateFormatConfig").numericDateOrder.indexOf("d")]);
        return new (r("CometLocalDate"))(n, o - 1, a);
      }
      var i = Date.parse(e);
      return isNaN(i) ? null : r("CometLocalDate").fromDate(new Date(i));
    }
    ((l.parseDateToInputValue = e), (l.parseStringToDate = s));
  },
  98,
);
