__d(
  "MAIBAPreviewPublishAttributionSpecFormatter",
  [
    "MAIBAPreviewPublishAttributionWindowFormatter",
    "MAIBAPreviewPublishNestedValueFormatter",
    "MAIBAPreviewPublishReviewStrings",
    "MAIBAPreviewPublishStructuredDiff",
    "maibaParseJSONWithBigInts",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "attribution_spec",
      s = ["CLICK_THROUGH", "VIEW_THROUGH", "ENGAGED_VIDEO_VIEW"];
    function u(e) {
      if (typeof e != "string") return e;
      try {
        return r("maibaParseJSONWithBigInts")(e);
      } catch (t) {
        return e;
      }
    }
    var c = {
      CLICK_THROUGH: new Set([0, 1, 7, 28]),
      ENGAGED_VIDEO_VIEW: new Set([0, 1]),
      VIEW_THROUGH: new Set([0, 1, 7, 28]),
    };
    function d(e, t) {
      var n;
      return typeof t == "number" &&
        Number.isInteger(t) &&
        ((n = c[e]) == null ? void 0 : n.has(t)) === !0
        ? t
        : null;
    }
    function m(e) {
      var t = u(e);
      if (t == null || t === "") return [];
      if (!Array.isArray(t)) return null;
      var n = [],
        r = new Set();
      for (var a of t) {
        var i = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(a),
          l = i == null ? void 0 : i.event_type;
        if (typeof l != "string" || !s.includes(l)) return null;
        var c = d(l, i == null ? void 0 : i.window_days);
        if (c == null || r.has(l)) return null;
        (r.add(l), n.push({ eventType: l, windowDays: c }));
      }
      return (
        n.sort(function (e, t) {
          return s.indexOf(e.eventType) - s.indexOf(t.eventType);
        }),
        n
      );
    }
    function p(e) {
      return e.filter(function (e) {
        return e.windowDays > 0;
      });
    }
    function _(e, t) {
      var n = p(e),
        r = p(t);
      if (
        r.length === 0 ||
        n.some(function (e) {
          return (
            e.eventType !== "VIEW_THROUGH" &&
            !t.some(function (t) {
              return t.eventType === e.eventType;
            })
          );
        })
      )
        return !1;
      var o = t.some(function (e) {
        return e.windowDays === 0 && e.eventType !== "VIEW_THROUGH";
      });
      return !o || JSON.stringify(n) !== JSON.stringify(r);
    }
    function f(e, t) {
      if (u(t) == null) return !0;
      var n = m(e),
        r = m(t);
      return n != null && r != null && _(n, r);
    }
    function g(t) {
      var n,
        r =
          (n = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
            t.spec_diff,
          )) == null
            ? void 0
            : n.fragments;
      if (!Array.isArray(r)) return !1;
      for (var a of r) {
        var i,
          l =
            (i = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
              a,
            )) == null
              ? void 0
              : i.changes;
        if (Array.isArray(l))
          for (var s of l) {
            var u = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
              s,
            );
            if (u != null && u.field === e && !f(u.old, u.new)) return !0;
          }
      }
      return !1;
    }
    function h(e) {
      return o(
        "MAIBAPreviewPublishAttributionWindowFormatter",
      ).formatAttributionWindow(e.eventType, e.windowDays);
    }
    function y(e) {
      var t = u(e);
      return t == null || t === "";
    }
    function C(e) {
      var t = p(e);
      return t.length === 0
        ? o(
            "MAIBAPreviewPublishReviewStrings",
          ).getEmptyAttributionSettingLabel()
        : o("MAIBAPreviewPublishNestedValueFormatter").formatNestedList(t, h);
    }
    function b(e, t) {
      if (u(t) == null) return [];
      var n = m(e),
        r = m(t);
      if (n == null || r == null || !_(n, r)) return null;
      var o = y(e) ? "-" : C(n),
        a = C(r);
      return o === a ? [] : [{ after: a, before: o, path: [] }];
    }
    ((l.ATTRIBUTION_SPEC_FIELD = e),
      (l.canRenderAttributionSpecChange = f),
      (l.hasUnrepresentableAttributionSpecChanges = g),
      (l.formatAttributionSpecChanges = b));
  },
  98,
);
