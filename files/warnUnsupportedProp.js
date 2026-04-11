__d(
  "warnUnsupportedProp",
  ["warning"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      r("warning")(
        !1,
        "%s component does not support prop `%s`.%s",
        e,
        t,
        n ? " " + n : "",
      );
    }
    l.default = e;
  },
  98,
);
