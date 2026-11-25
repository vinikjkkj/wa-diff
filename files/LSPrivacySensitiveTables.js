__d(
  "LSPrivacySensitiveTables",
  ["LSPrivacySensitiveTableNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t) {
      return (
        e == null && (e = new Set(r("LSPrivacySensitiveTableNames"))),
        e.has(t)
      );
    }
    l.isPrivacySensitiveTable = s;
  },
  98,
);
