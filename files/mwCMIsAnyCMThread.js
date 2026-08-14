__d(
  "mwCMIsAnyCMThread",
  ["I64", "LSIntEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (s || (s = o("LSIntEnum"))).ofNumber(18),
      ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(19),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(23),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(24),
        ) ||
        (e || (e = o("I64"))).equal(t, (s || (s = o("LSIntEnum"))).ofNumber(21))
        ? !0
        : (e || (e = o("I64"))).equal(
            t,
            (s || (s = o("LSIntEnum"))).ofNumber(22),
          );
    }
    l.default = u;
  },
  98,
);
