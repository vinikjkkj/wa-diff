__d(
  "LWICometAdgroupID",
  ["isStringNullOrEmpty", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("isStringNullOrEmpty")(e) ? r("uuidv4")() : e;
    }
    l.makeAdgroupID = e;
  },
  98,
);
