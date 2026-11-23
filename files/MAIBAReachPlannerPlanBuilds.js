__d(
  "MAIBAReachPlannerPlanBuilds",
  ["MAIBAReachPlannerPlanCreation", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = 20,
      c = 1e3,
      d = 300,
      m = [],
      p = {},
      _ = new Map(),
      f = new Map(),
      g = new Set(),
      h = new Set(),
      y = new Map(),
      C = 0;
    function b() {
      return ((C += 1), C);
    }
    function v(e) {
      return e == null || typeof e != "object" || Array.isArray(e) ? null : e;
    }
    function S(e) {
      return Array.isArray(e) ? e : [];
    }
    function R(e) {
      return typeof e == "string" && e.trim() !== "" ? e : null;
    }
    function L(e) {
      return typeof e == "number" && Number.isFinite(e) ? e : null;
    }
    function E(e) {
      var t = [];
      for (var n of S(e)) typeof n == "string" && n !== "" && t.push(n);
      return t;
    }
    function k(e) {
      var t = typeof e == "number" ? String(e) : e;
      return typeof t == "string" && /^[1-9][0-9]*$/.test(t) ? t : null;
    }
    function I(e) {
      if (e == null || e.trim() === "") return null;
      try {
        var t = JSON.parse(e);
        return v(t);
      } catch (e) {
        return null;
      }
    }
    var T = "RETURN value from executing ";
    function D(e) {
      var t = e.trim();
      if (!t.startsWith(T)) return t;
      var n = t.indexOf("\n)\n");
      if (n >= 0) return t.slice(n + 3).trim();
      var r = t.indexOf(")\n");
      return r >= 0 ? t.slice(r + 2).trim() : t;
    }
    function x(e) {
      var t,
        n = I(e == null ? null : D(e));
      if (n == null) return null;
      var r = n.result;
      return typeof r == "string" ? I(r) : (t = v(r)) != null ? t : n;
    }
    function $(e) {
      return (e == null ? void 0 : e.toUpperCase()) === "AUCTION"
        ? "AUCTION"
        : "RESERVED";
    }
    function P(e, t) {
      var n,
        r,
        o,
        a,
        i = (n = v(e)) != null ? n : p,
        l = (r = v(t)) != null ? r : p,
        s = function (t) {
          var e;
          return (e = i[t]) != null ? e : l[t];
        };
      return {
        ageMax: L(s("age_max")),
        ageMin: L(s("age_min")),
        budgetDollars: L(s("budget_dollars")),
        countries: E(s("countries")),
        endDate: R(s("end_date")),
        name: R((o = s("ad_set_name")) != null ? o : s("name")),
        reachGoal: L((a = s("reach")) != null ? a : s("reach_goal")),
        startDate: R(s("start_date")),
      };
    }
    function N(e, t, n) {
      var r,
        o,
        a = (r = v(e)) != null ? r : p,
        i = (o = v(t)) != null ? o : p,
        l = function (t) {
          var e;
          return (e = a[t]) != null ? e : i[t];
        };
      return {
        adSets: n,
        buyingType: R(l("buying_type")),
        currency: R(l("currency")),
        name: R(l("name")),
      };
    }
    function M(e) {
      return N(
        e.stated,
        e.using_defaults,
        S(e.ad_sets).map(function (e) {
          var t = v(e);
          return P(
            t == null ? void 0 : t.stated,
            t == null ? void 0 : t.using_defaults,
          );
        }),
      );
    }
    function w(e) {
      return N(
        e,
        null,
        S(e.ad_sets).map(function (e) {
          return P(e, null);
        }),
      );
    }
    function A(e, t) {
      var n, r, o, a, i, l, s;
      return e == null
        ? t
        : {
            ageMax: (n = t.ageMax) != null ? n : e.ageMax,
            ageMin: (r = t.ageMin) != null ? r : e.ageMin,
            budgetDollars: (o = t.budgetDollars) != null ? o : e.budgetDollars,
            countries: t.countries.length > 0 ? t.countries : e.countries,
            endDate: (a = t.endDate) != null ? a : e.endDate,
            name: (i = t.name) != null ? i : e.name,
            reachGoal: (l = t.reachGoal) != null ? l : e.reachGoal,
            startDate: (s = t.startDate) != null ? s : e.startDate,
          };
    }
    function F(e, t) {
      var n, r, o;
      return {
        adSets:
          t.adSets.length > 0
            ? t.adSets.map(function (t, n) {
                return A(e.adSets[n], t);
              })
            : e.adSets,
        buyingType: (n = t.buyingType) != null ? n : e.buyingType,
        currency: (r = t.currency) != null ? r : e.currency,
        name: (o = t.name) != null ? o : e.name,
      };
    }
    function O(e) {
      var t, n, r, o;
      if (e == null) return null;
      var a = D(e),
        i = x(a),
        l =
          (t =
            (n =
              (r = R(i == null ? void 0 : i.error)) != null
                ? r
                : R(
                    (o = v(i == null ? void 0 : i.error)) == null
                      ? void 0
                      : o.message,
                  )) != null
              ? n
              : R(i == null ? void 0 : i.message)) != null
            ? t
            : i == null
              ? R(a)
              : null;
      if (l == null) return null;
      var s = l.startsWith("ERROR during executing ") ? l.indexOf("): ") : -1,
        u = (s >= 0 ? l.slice(s + 3) : l).replace(/^ERROR:\s*/, "").trim();
      return u === "" || u.startsWith("Unexpected error")
        ? null
        : u.slice(0, d);
    }
    function B(e, t) {
      var n = e + ":" + t;
      if (g.has(n)) return !1;
      if ((g.add(n), g.size > c)) {
        var r = g.values().next().value;
        r != null && g.delete(r);
      }
      return !0;
    }
    function W() {
      y.clear();
      for (var e of h) e();
    }
    function q(e) {
      if ((_.delete(e.buildID), _.set(e.buildID, e), _.size > u)) {
        var t = _.keys().next().value;
        t != null && _.delete(t);
      }
      W();
    }
    function U(e, t) {
      var n = null;
      for (var r of _.values())
        r.businessID === e &&
          (r.status === "draft" || r.status === "failed") &&
          $(r.plan.buyingType) === $(t) &&
          (n == null || r.sequence > n.sequence) &&
          (n = r);
      return n;
    }
    function V(e) {
      var t = f.get(e);
      return t != null ? _.get(t) : null;
    }
    function H(e, t, n) {
      var r, o;
      if (B(e, "preview")) {
        var a = M(n),
          i = (r = V(e)) != null ? r : U(t, a.buyingType);
        q({
          buildID: (o = i == null ? void 0 : i.buildID) != null ? o : e,
          businessID: t,
          failureMessage: null,
          plan: a,
          planID: null,
          sequence: b(),
          status: "draft",
        });
      }
    }
    function G(e, t, n) {
      var r;
      if (B(e, "proposal")) {
        var o = w(n),
          a = U(t, o.buyingType),
          i = (r = a == null ? void 0 : a.buildID) != null ? r : e;
        (f.set(e, i),
          q({
            buildID: i,
            businessID: t,
            failureMessage: null,
            plan: o,
            planID: null,
            sequence: b(),
            status: "draft",
          }));
      }
    }
    function z(e, t) {
      var n = V(e);
      n == null ||
        n.status !== "draft" ||
        !B(e, "finish") ||
        q(
          babelHelpers.extends({}, n, {
            failureMessage: O(t),
            status: "failed",
          }),
        );
    }
    function j(e, t, n) {
      var r;
      if (!f.has(e)) {
        var o = w(n),
          a = U(t, o.buyingType),
          i = (r = a == null ? void 0 : a.buildID) != null ? r : e;
        (f.set(e, i),
          q({
            buildID: i,
            businessID: t,
            failureMessage: null,
            plan: a != null ? F(a.plan, o) : o,
            planID: null,
            sequence: b(),
            status: "building",
          }));
      }
    }
    function K(e, t, n) {
      var r = V(e);
      if (!(r == null || !B(e, "finish"))) {
        var a = t == null ? null : D(t),
          i =
            n || a == null
              ? null
              : o(
                  "MAIBAReachPlannerPlanCreation",
                ).parseMAIBAReachPlannerCreatedPlan(a),
          l = i != null ? x(a) : null;
        if (i != null && l != null) {
          q(
            babelHelpers.extends({}, r, {
              businessID: i.businessID,
              plan: F(r.plan, w(l)),
              planID: i.planID,
              status: "created",
            }),
          );
          return;
        }
        q(
          babelHelpers.extends({}, r, {
            failureMessage: O(t),
            status: "failed",
          }),
        );
      }
    }
    function Q(e) {
      var t = e.args,
        n = e.isCompleted,
        r = e.isFailed,
        o = e.result,
        a = e.toolCallID,
        i = I(t),
        l = k(i == null ? void 0 : i.business_id);
      if (!(a === "" || i == null || l == null)) {
        var s = R(i.confirmation_token) != null;
        if (!n && !r) {
          s ? j(a, l, i) : G(a, l, i);
          return;
        }
        if (r && !s) {
          z(a, o);
          return;
        }
        if (!(!r && o == null)) {
          var u = r ? null : x(o),
            c =
              (u == null ? void 0 : u.confirmation_required) === !0 ||
              (u == null ? void 0 : u.requires_confirmation) === !0
                ? v(u == null ? void 0 : u.preview)
                : null;
          if (c != null) {
            H(a, l, c);
            return;
          }
          s && (j(a, l, i), K(a, o, r));
        }
      }
    }
    function X(e) {
      _.delete(e) && W();
    }
    function Y(e) {
      return (
        h.add(e),
        function () {
          h.delete(e);
        }
      );
    }
    function J(e) {
      if (e == null) return m;
      var t = y.get(e);
      if (t != null) return t;
      var n = Array.from(_.values())
          .filter(function (t) {
            return t.businessID === e;
          })
          .sort(function (e, t) {
            return t.sequence - e.sequence;
          }),
        r = n.length > 0 ? n : m;
      return (y.set(e, r), r);
    }
    function Z(e) {
      var t = e != null ? String(e) : null,
        n = function () {
          return J(t);
        };
      return s(Y, n, n);
    }
    function ee() {
      (_.clear(), f.clear(), g.clear(), (C = 0), W());
    }
    ((l.announceMAIBAReachPlannerPlanBuildToolCall = Q),
      (l.dismissMAIBAReachPlannerPlanBuild = X),
      (l.useMAIBAReachPlannerPlanBuilds = Z),
      (l.resetMAIBAReachPlannerPlanBuildsForTesting = ee));
  },
  98,
);
