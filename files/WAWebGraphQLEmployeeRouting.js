__d(
  "WAWebGraphQLEmployeeRouting",
  ["WAWebABProps", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!u()) return e;
      var t = new URL(e);
      return (t.searchParams.set("_emp", "1"), t.toString());
    }
    function s() {
      return u() ? { "X-FB-Routing-Control": "force_c1" } : {};
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "is_meta_employee_or_internal_tester",
        ) === !0 &&
        !r("gkx")("26256") &&
        !r("justknobx")._("7296")
      );
    }
    ((l.addEmployeeRoutingParam = e), (l.getEmployeeRoutingHeaders = s));
  },
  98,
);
