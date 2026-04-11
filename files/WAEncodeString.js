__d(
  "WAEncodeString",
  ["WATextEncoding"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WATextEncoding").newTextEncoder();
    function s(t) {
      return e.encode(t);
    }
    l.toUtf8 = s;
  },
  98,
);
