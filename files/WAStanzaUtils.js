__d(
  "WAStanzaUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^[0-9A-Za-z-]{1,32}$/;
    function l(e) {
      return e;
    }
    function s(t) {
      return e.test(t) ? t : null;
    }
    ((i.toStanzaId = l), (i.validateCallId = s));
  },
  66,
);
