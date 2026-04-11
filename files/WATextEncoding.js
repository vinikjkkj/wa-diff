__d(
  "WATextEncoding",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = TextEncoder,
      l = TextDecoder,
      s = e,
      u = l;
    function c() {
      return new s();
    }
    function d() {
      return new u();
    }
    ((i.newTextEncoder = c), (i.newTextDecoder = d));
  },
  66,
);
