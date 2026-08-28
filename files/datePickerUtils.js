__d(
  "datePickerUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "M d, Y";
    function l(t, n) {
      return t == null ? "" : n != null ? n(t) : t.format(e);
    }
    i.maybeFormatDate = l;
  },
  66,
);
