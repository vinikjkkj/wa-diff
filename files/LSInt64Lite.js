__d(
  "LSInt64Lite",
  ["FBLogger", "I64", "XPlatReactCrypto"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        add: (e || (e = o("I64"))).add,
        and_: e.and_,
        asr_: e.asr_,
        cast: function (n) {
          return (e || (e = o("I64"))).mk(n[1], n[0]);
        },
        div: e.div,
        eq: function (n, r) {
          return (
            (n == null && r == null) ||
            (n != null && r != null && (e || (e = o("I64"))).equal(n, r))
          );
        },
        from_string: function (n) {
          try {
            return (e || (e = o("I64"))).of_string(n);
          } catch (e) {
            throw r("FBLogger")("messenger_web").mustfixThrow(
              'Unable to cast "%s" to int64',
              n,
            );
          }
        },
        ge: e.ge,
        gt: e.gt,
        le: e.le,
        lsl_: e.lsl_,
        lsr_: e.lsr_,
        lt: e.lt,
        max: e.max,
        min: e.min,
        mod_: e.mod_,
        mul: e.mul,
        neq: function (n, r) {
          return (
            (n == null && r != null) ||
            (n != null && r == null) ||
            (n != null && r != null && !(e || (e = o("I64"))).equal(n, r))
          );
        },
        of_float: e.of_float,
        of_int32: e.of_int32,
        or_: e.or_,
        random: function () {
          var t = Array.from(
            o("XPlatReactCrypto").getRandomValues(new Uint32Array(2)),
          );
          return (
            (t[0] >>>= 1),
            (e || (e = o("I64"))).add(
              e.lsl_(e.of_float(t[0]), 32),
              e.of_float(t[1]),
            )
          );
        },
        sub: e.sub,
        to_float: e.to_float,
        to_int32: e.to_int32,
        to_string: function (n) {
          return n == null ? n : (e || (e = o("I64"))).to_string(n);
        },
        xor: e.xor,
      };
    l.default = s;
  },
  98,
);
