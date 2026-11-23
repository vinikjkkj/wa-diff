__d(
  "MAIBAPreviewPublishAdRotationRows",
  [
    "MAIBAPreviewPublishFieldLabel",
    "MAIBAPreviewPublishNestedValueFormatter",
    "MAIBAPreviewPublishReviewStrings",
    "MAIBAPreviewPublishStructuredDiff",
    "MAIBAPreviewPublishStructuredFieldRegistry",
    "MAIBAPreviewPublishValueDisplay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "time_based_ad_rotation_id_blocks",
      s = "time_based_ad_rotation_intervals";
    function u(e) {
      var t = o(
        "MAIBAPreviewPublishStructuredFieldRegistry",
      ).decodePreviewPublishStructuredFieldSide(e);
      if (t == null || t === "") return [];
      if (!Array.isArray(t)) return null;
      var n = [];
      for (var r of t) {
        if (!Array.isArray(r)) return null;
        n.push(r);
      }
      return n;
    }
    function c(e) {
      var t = o(
        "MAIBAPreviewPublishStructuredFieldRegistry",
      ).decodePreviewPublishStructuredFieldSide(e);
      return t == null || t === "" ? [] : Array.isArray(t) ? t : null;
    }
    function d(e, t) {
      var n = u(e),
        r = c(t);
      return n == null || r == null || n.length !== r.length
        ? null
        : r.map(function (e, t) {
            return { adIDs: n[t], startTime: e };
          });
    }
    function m(e) {
      var t;
      return e != null && (typeof e == "string" || typeof e == "number")
        ? String(e)
        : (t = JSON.stringify(e)) != null
          ? t
          : String(e);
    }
    function p(e) {
      var t;
      return (t = JSON.stringify(Array.from(new Set(e.map(m))).sort())) != null
        ? t
        : "";
    }
    function _(e, t) {
      return e != null && t != null && p(e) === p(t);
    }
    function f(e, t) {
      return m(e) === m(t);
    }
    function g(e, t) {
      return (
        e != null &&
        t != null &&
        _(e.adIDs, t.adIDs) &&
        f(e.startTime, t.startTime)
      );
    }
    function h(t, n) {
      return t == null
        ? "-"
        : o("MAIBAPreviewPublishNestedValueFormatter").formatNestedList(
            t,
            function (t) {
              return o("MAIBAPreviewPublishValueDisplay").displayDecodedValue(
                t,
                e,
                n,
              );
            },
          );
    }
    function y(e, t) {
      return e == null
        ? "-"
        : o("MAIBAPreviewPublishValueDisplay").displayDecodedValue(e, s, t);
    }
    function C(e, t) {
      return e == null
        ? "-"
        : o("MAIBAPreviewPublishNestedValueFormatter").formatLabeledNestedValue(
            o("MAIBAPreviewPublishFieldLabel").formatFieldLabel("start_time"),
            y(e.startTime, t),
          ) +
            "\n" +
            o(
              "MAIBAPreviewPublishNestedValueFormatter",
            ).formatLabeledNestedValue(
              o("MAIBAPreviewPublishReviewStrings").getRotationAdsLabel(),
              h(e.adIDs, t),
            );
    }
    function b(e, t) {
      return (
        o("MAIBAPreviewPublishReviewStrings").formatRotationRangeLabel(e + 1) +
        " -> " +
        t
      );
    }
    function v(e, t, n) {
      for (var r = [], a = Math.max(e.length, t.length), i = 0; i < a; i++) {
        var l = e[i],
          s = t[i];
        g(l, s) ||
          r.push({
            after: C(s, n),
            before: C(l, n),
            field: o(
              "MAIBAPreviewPublishReviewStrings",
            ).formatRotationRangeLabel(i + 1),
          });
      }
      return r;
    }
    function S(e, t) {
      var n = u(e.old),
        r = u(e.new);
      if (n == null || r == null) return null;
      for (var a = [], i = Math.max(n.length, r.length), l = 0; l < i; l++) {
        var s = n[l],
          c = r[l];
        _(s, c) ||
          a.push({
            after: h(c, t),
            before: h(s, t),
            field: b(
              l,
              o("MAIBAPreviewPublishReviewStrings").getRotationAdsLabel(),
            ),
          });
      }
      return a;
    }
    function R(e, t) {
      var n = c(e.old),
        r = c(e.new);
      if (n == null || r == null) return null;
      for (var a = [], i = Math.max(n.length, r.length), l = 0; l < i; l++) {
        var s = n[l],
          u = r[l];
        f(s, u) ||
          a.push({
            after: y(u, t),
            before: y(s, t),
            field: b(
              l,
              o("MAIBAPreviewPublishFieldLabel").formatFieldLabel("start_time"),
            ),
          });
      }
      return a;
    }
    function L(t) {
      return t === e || t === s;
    }
    function E(t, n) {
      var r = null,
        a = null;
      for (var i of t) {
        var l = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(i);
        if ((l == null ? void 0 : l.field) === e) {
          if (r != null) return null;
          r = l;
        } else if ((l == null ? void 0 : l.field) === s) {
          if (a != null) return null;
          a = l;
        }
      }
      if (r == null && a == null) return null;
      if (r != null && a != null) {
        var u = d(r.old, a.old),
          c = d(r.new, a.new);
        if (u != null && c != null) return v(u, c, n);
      }
      var m = r == null ? [] : S(r, n),
        p = a == null ? [] : R(a, n);
      return m == null || p == null ? null : [].concat(m, p);
    }
    ((l.isTimeBasedAdRotationField = L), (l.timeBasedAdRotationRows = E));
  },
  98,
);
