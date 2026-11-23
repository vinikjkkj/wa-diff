__d(
  "MAIBAIGCanvasLayoutUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "account_summary",
      l = "ad_detail_summary",
      s = new Set(["estimated_daily_results", "estimated_daily_results_v2"]),
      u = ["goal", "audience", "creative", "budget_schedule"],
      c = ["ad_account", "special_ad_category", "payment_summary"],
      d = new Set(["payment_summary"]);
    function m(e) {
      var t;
      return e.tag === "ws-card" && (t = e.attrs.kind) != null ? t : "";
    }
    function p(e) {
      return e.flatMap(function (e) {
        return e.children.filter(function (e) {
          return e.tag === "ws-section";
        });
      });
    }
    function _(e, t, n) {
      return (
        n === void 0 && (n = new Set()),
        t.flatMap(function (t) {
          var r = e.filter(function (e) {
            return e.attrs.kind === t;
          });
          return r.length > 0 || !n.has(t)
            ? r
            : [
                {
                  attrs: { kind: t },
                  children: [],
                  tag: "ws-section",
                  text: null,
                },
              ];
        })
      );
    }
    function f(e, t, n) {
      var r;
      return n.length === 0
        ? null
        : {
            attrs: (r = e == null ? void 0 : e.attrs) != null ? r : { kind: t },
            children: n,
            tag: "ws-card",
            text: null,
          };
    }
    function g(t) {
      var n = t.filter(function (t) {
          return m(t) === e;
        }),
        r = t.filter(function (e) {
          return m(e) === l;
        }),
        o = t.filter(function (t) {
          var n = m(t);
          return n !== e && n !== l && n !== "ad_preview";
        }),
        a = p(n),
        i = a.filter(function (e) {
          var t;
          return s.has((t = e.attrs.kind) != null ? t : "");
        }),
        g = _(a, c, d),
        h = _(p(r), u);
      return [f(n[0], e, i), f(r[0], l, h), f(n[0], e, g)]
        .concat(o)
        .filter(Boolean);
    }
    i.selectMAIBAIGCanvasBlockNodesInDisplayOrder = g;
  },
  66,
);
