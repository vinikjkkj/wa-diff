__d(
  "WAWebHatchWriteError",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new WeakMap();
    function s(t, n) {
      var o = r("err")("hatch connectors write failed: %s", t);
      return (e.set(o, babelHelpers.extends({}, n, { reason: t })), o);
    }
    function u(t) {
      return t instanceof Error ? e.get(t) : void 0;
    }
    ((l.createHatchWriteError = s), (l.getHatchWriteErrorDetail = u));
  },
  98,
);
