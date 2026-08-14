__d(
  "MAWErrorObject",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e instanceof Error ? e : typeof e == "string" ? r("err")(e) : null;
    }
    l.getErrorObject = e;
  },
  98,
);
