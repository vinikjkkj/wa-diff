__d(
  "MAIBAPreviewPublishAdSetAllocationRows",
  [
    "MAIBAPreviewPublishFieldLabel",
    "MAIBAPreviewPublishReviewStrings",
    "MAIBAPreviewPublishStructuredDiff",
    "MAIBAPreviewPublishStructuredFieldRegistry",
    "MAIBAPreviewPublishValueDisplay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "adset_budgets",
      s = "adset_bid_amounts",
      u = ["daily_budget", "lifetime_budget"];
    function c(t) {
      return t === e || t === s;
    }
    function d(e) {
      var t = typeof e == "number" && Number.isSafeInteger(e) ? String(e) : e;
      return typeof t == "string" && /^[1-9]\d*$/.test(t) ? t : null;
    }
    function m(e) {
      var t = o(
        "MAIBAPreviewPublishStructuredFieldRegistry",
      ).decodePreviewPublishStructuredFieldSide(e);
      if (t == null || t === "") return new Map();
      if (!Array.isArray(t)) return null;
      var n = new Map(),
        r = function () {
          var e = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(i),
            t = d(e == null ? void 0 : e.adset_id),
            r = u.find(function (t) {
              return (e == null ? void 0 : e[t]) != null;
            });
          if (
            e == null ||
            t == null ||
            r == null ||
            Object.keys(e).length !== 2 ||
            n.has(t)
          )
            return { v: null };
          n.set(t, { amount: e[r], amountField: r });
        },
        a;
      for (var i of t) if (((a = r()), a)) return a.v;
      return n;
    }
    function p(e) {
      var t = o(
        "MAIBAPreviewPublishStructuredFieldRegistry",
      ).decodePreviewPublishStructuredFieldSide(e);
      if (t == null || t === "") return new Map();
      var n = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(t);
      if (n == null) return null;
      var r = new Map();
      for (var a of Object.entries(n)) {
        var i = a[0],
          l = a[1],
          s = d(i);
        if (s == null) return null;
        r.set(s, { amount: l, amountField: "bid_amount" });
      }
      return r;
    }
    function _(e, t) {
      return e == null
        ? "-"
        : o("MAIBAPreviewPublishValueDisplay").displayDecodedValue(
            e.amount,
            e.amountField,
            t,
          );
    }
    function f(e, t, n, r) {
      return {
        after: r,
        before: n,
        field:
          e + " -> " + o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(t),
      };
    }
    function g(t, n, r, a) {
      var i = n === e ? m : p,
        l = i(t.old),
        s = i(t.new),
        u = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(r);
      if (l == null || s == null || u == null) return null;
      var c = Array.from(
          new Set(Array.from(s.keys()).concat(Array.from(l.keys()))),
        ),
        d = new Map();
      for (var g of c) {
        var h = u[g];
        if (typeof h == "string") {
          var y;
          d.set(h, ((y = d.get(h)) != null ? y : 0) + 1);
        }
      }
      var C = [];
      for (var b of c) {
        var v,
          S,
          R,
          L = u[b];
        if (typeof L != "string" || L === "") return null;
        var E =
            ((v = d.get(L)) != null ? v : 0) > 1
              ? o("MAIBAPreviewPublishReviewStrings").formatAdObjectIdentity(
                  L,
                  b,
                )
              : L,
          k = l.get(b),
          I = s.get(b),
          T = _(k, a),
          D = _(I, a);
        if (k != null && I != null && k.amountField !== I.amountField) {
          C.push(f(E, k.amountField, T, "-"), f(E, I.amountField, "-", D));
          continue;
        }
        if (T !== D) {
          var x =
            (S =
              (R = I == null ? void 0 : I.amountField) != null
                ? R
                : k == null
                  ? void 0
                  : k.amountField) != null
              ? S
              : n;
          C.push(f(E, x, T, D));
        }
      }
      return C.length > 0 ? C : null;
    }
    ((l.isAdSetAllocationField = c), (l.adSetAllocationRows = g));
  },
  98,
);
