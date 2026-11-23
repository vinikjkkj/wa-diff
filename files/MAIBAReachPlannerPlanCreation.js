__d(
  "MAIBAReachPlannerPlanCreation",
  ["URI", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useSyncExternalStore,
      c = 1e3,
      d = 20,
      m = new Set(),
      p = new Map(),
      _ = new Set();
    function f(e) {
      return typeof e == "string" && /^[1-9][0-9]*$/.test(e) ? e : null;
    }
    function g(t) {
      try {
        var n,
          o = JSON.parse(t);
        if (
          (o == null ? void 0 : o.isError) === !0 ||
          (o == null ? void 0 : o.error) != null ||
          (o == null ? void 0 : o.requires_confirmation) === !0 ||
          (o == null ? void 0 : o.success) === !1
        )
          return null;
        var a =
          typeof (o == null ? void 0 : o.result) == "string"
            ? JSON.parse(o.result)
            : (n = o == null ? void 0 : o.result) != null
              ? n
              : o;
        if (
          a == null ||
          a.isError === !0 ||
          a.error != null ||
          a.requires_confirmation === !0 ||
          a.success === !1
        )
          return null;
        var i = f(a.plan_id);
        if (
          i == null ||
          typeof a.plan_url != "string" ||
          !a.plan_url.startsWith("/latest/reach_planner/?")
        )
          return null;
        var l = new (e || (e = r("URI")))(a.plan_url),
          s = l.getQueryData(),
          u = f(s.business_id);
        return l.getPath() !== "/latest/reach_planner/" ||
          u == null ||
          f(s.plan_id) !== i ||
          (a.business_id != null && f(a.business_id) !== u)
          ? null
          : { businessID: u, planID: i };
      } catch (e) {
        return null;
      }
    }
    function h(e, t) {
      if (e.size > t) {
        var n = e.keys().next().value;
        n != null && e.delete(n);
      }
    }
    function y(e, t) {
      if (!(e === "" || m.has(e))) {
        var n = g(t);
        if (n != null) {
          if ((m.add(e), m.size > c)) {
            var r = m.values().next().value;
            r != null && m.delete(r);
          }
          (p.delete(n.businessID),
            p.set(n.businessID, babelHelpers.extends({}, n, { toolCallID: e })),
            h(p, d));
          for (var o of _) o();
        }
      }
    }
    function C(e) {
      return (
        _.add(e),
        function () {
          _.delete(e);
        }
      );
    }
    function b(e) {
      var t = function () {
        var t;
        return e != null && (t = p.get(String(e))) != null ? t : null;
      };
      return u(C, t, t);
    }
    function v() {
      (m.clear(), p.clear());
      for (var e of _) e();
    }
    ((l.parseMAIBAReachPlannerCreatedPlan = g),
      (l.announceMAIBAReachPlannerPlanCreation = y),
      (l.useMAIBAReachPlannerPlanCreation = b),
      (l.resetMAIBAReachPlannerPlanCreationsForTesting = v));
  },
  98,
);
