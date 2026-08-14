__d(
  "WABridge",
  ["WADynamicRouterAsync", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      e == null && (e = t);
    }
    function u() {
      return (
        e == null && (e = new (o("WADynamicRouterAsync").DynamicRouter)()),
        e
      );
    }
    function c(e) {
      throw r("err")("setBridge is only for tests");
    }
    ((l.makeWABridge = s), (l.getBridge = u), (l.setBridge__TESTS_ONLY = c));
  },
  98,
);
