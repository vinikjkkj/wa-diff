__d(
  "MAIBACampaignPlanSummaryRows",
  ["fbt", "Locale", "stripMAIBAEntityTags"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "\u2066",
      u = "\u2067",
      c = "\u2069",
      d = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
      m = new RegExp(d.source, "g"),
      p =
        /[\u0591-\u05C7\u0600-\u061F\u064B-\u066D\u0670\u06D4\u06D6-\u06ED\u06F0-\u06F9]/g,
      _ = /[A-Za-z\u00C0-\u024F\u0370-\u03FF\u0400-\u04FF\u1E00-\u1EFF]/g;
    function f(t, n) {
      var r = n ? u : e;
      return "" + r + t + c;
    }
    function g(e) {
      var t, n, r, o, a, i;
      return {
        leftToRight:
          (t = (n = e.match(_)) == null ? void 0 : n.length) != null ? t : 0,
        rightToLeft:
          ((r = (o = e.match(m)) == null ? void 0 : o.length) != null ? r : 0) -
          ((a = (i = e.match(p)) == null ? void 0 : i.length) != null ? a : 0),
      };
    }
    function h(e) {
      return !o("Locale").isRTL() || e === "" ? e : f(e, d.test(e));
    }
    function y(e) {
      var t = e.goalContext,
        n = e.summary,
        r = e.whyBullets,
        o = [t, n].concat(
          (r != null ? r : []).map(function (e) {
            return e.text;
          }),
        ),
        a = g(o.filter(Boolean).join(" ")),
        i = a.leftToRight,
        l = a.rightToLeft;
      return l >= i;
    }
    function C(e, t) {
      var n = g(e),
        r = n.leftToRight,
        a = n.rightToLeft;
      return !o("Locale").isRTL() || a === 0 || r === 0 ? h(e) : f(e, t);
    }
    var b = s._(/*BTDS*/ ""),
      v = s._(/*BTDS*/ "");
    function S(e, t, n) {
      var r = [];
      if ((e != null && e !== "" && r.push(n(e)), t != null && t.length > 0)) {
        var o = t
          .filter(function (e) {
            return (
              e.budget_pct != null &&
              e.budget_pct !== "" &&
              e.objective != null &&
              e.objective !== ""
            );
          })
          .map(function (e) {
            return e.budget_pct + "% " + e.objective.toLowerCase();
          })
          .join(" \u2192 ");
        o !== "" && r.push(n(o));
        var a = t[0].start_date,
          i = t[t.length - 1].end_date;
        a !== "" &&
          r.push(n(a) + " \u2013 " + (i !== "" ? n(i) : h(String(b))));
      }
      return r.join(" \xB7 ");
    }
    function R(e, t, n) {
      if (e == null) return "";
      var r = new Set(),
        o = [];
      for (var a of e) {
        var i = t(a);
        i !== "" && !r.has(i) && (r.add(i), o.push(n(i)));
      }
      return o.join(" \xB7 ");
    }
    function L(e, t) {
      return e == null
        ? ""
        : e.length === 1
          ? t(r("stripMAIBAEntityTags")(e[0].creative))
          : e
              .map(function (e) {
                var n = r("stripMAIBAEntityTags")(e.name),
                  o = r("stripMAIBAEntityTags")(e.creative),
                  a = o !== "" ? t(o) : h(String(v));
                return n !== "" ? t(n) + ": " + a : a;
              })
              .join(" \xB7 ");
    }
    function E(e) {
      var t = e.campaigns,
        n = e.goalContext,
        r = e.goalDetail,
        o = e.summary,
        a = e.totalBudget,
        i = y(e),
        l = function (t) {
          return C(t, i);
        },
        u = n != null && n !== "" ? n : o != null ? o : "",
        c = r != null && r !== "" && u !== "" ? l(u) + " \xB7 " + l(r) : l(u);
      return [
        { key: "goal", label: s._(/*BTDS*/ ""), value: c != null ? c : "" },
        { key: "spend", label: s._(/*BTDS*/ ""), value: S(a, t, l) },
        {
          key: "audience",
          label: s._(/*BTDS*/ ""),
          value: R(
            t,
            function (e) {
              return e.audience;
            },
            l,
          ),
        },
        { key: "ad-setup", label: s._(/*BTDS*/ ""), value: L(t, l) },
      ];
    }
    ((l.RIGHT_TO_LEFT_SCRIPT = d),
      (l.wrapInIsolate = f),
      (l.isolateDirection = h),
      (l.isRTLPlan = y),
      (l.isolatePlanText = C),
      (l.deriveSummaryRows = E));
  },
  226,
);
