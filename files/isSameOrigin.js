__d(
  "isSameOrigin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return !e.getProtocol() ||
        !e.getDomain() ||
        !t.getProtocol() ||
        !t.getDomain()
        ? !1
        : e.getOrigin() === t.getOrigin();
    }
    i.default = e;
  },
  66,
);
