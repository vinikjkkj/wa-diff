__d(
  "WAWebACSNetwork",
  [
    "WAWebHttpExtendedFetch",
    "WAWebRedeemACSCredential",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data,
            n = e.project,
            r = e.url,
            a = yield u(n, t);
          return o("WAWebHttpExtendedFetch").extendedFetch(r, {
            body: a,
            method: "POST",
          });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRedeemACSCredential").redeemACSCredential(e);
          if (n == null) throw r("err")("Failed to redeem ACS credential");
          return (t.set("acs_token", n), t.set("acs_project", e), t);
        })),
        c.apply(this, arguments)
      );
    }
    ((l.fetchWithACSCredential = e), (l.addACSCredential = u));
  },
  98,
);
