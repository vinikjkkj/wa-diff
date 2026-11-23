__d(
  "MAIBAPreviewPublishTrackingSpecFormatter",
  [
    "fbt",
    "MAIBAPreviewPublishFieldLabel",
    "MAIBAPreviewPublishNestedValueFormatter",
    "MAIBAPreviewPublishStructuredDiff",
    "formatMAIBAStandardEventLabel",
    "getMAIBAInsightsUnitLabel",
    "maibaParseJSONWithBigInts",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 120,
      u = ["fb_pixel", "offsite_pixel"];
    function c(e) {
      if (e == null || e === "") return [];
      if (typeof e != "string") return Array.isArray(e) ? e : null;
      try {
        var t = r("maibaParseJSONWithBigInts")(e);
        return Array.isArray(t) ? t : null;
      } catch (e) {
        return null;
      }
    }
    function d(e) {
      if (typeof e != "string") return e;
      try {
        return r("maibaParseJSONWithBigInts")(e);
      } catch (t) {
        return e;
      }
    }
    function m(e, t) {
      if (typeof e != "string" && typeof e != "number") return e;
      var n = String(e);
      return t[t.length - 1] === "[]" ? n : [n];
    }
    function p(e, t) {
      var n = c(e),
        r = c(t);
      return n == null || r == null
        ? null
        : o("MAIBAPreviewPublishStructuredDiff").diffStructuredValues(n, r, {
            getArrayMode: function (t) {
              return t.length === 0
                ? "unordered_leaf_multiset"
                : "unordered_multiset";
            },
            normalizeValue: m,
          });
    }
    function _(e) {
      var t = e.toLowerCase();
      if (t === "offsite_conversion") return String(s._(/*BTDS*/ ""));
      var n = r("getMAIBAInsightsUnitLabel")(t);
      return n == null
        ? o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(e)
        : n;
    }
    function f(e) {
      var t = e.toUpperCase(),
        n = r("formatMAIBAStandardEventLabel")(t);
      return n == null || n === t
        ? o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(e)
        : n;
    }
    function g(e, t) {
      return e + ":" + t;
    }
    function h(e, t, n) {
      if (t == null) return "-";
      if (typeof t != "string" && typeof t != "number") {
        var r;
        return (r = JSON.stringify(t)) != null ? r : String(t);
      }
      var o = String(t);
      if (e === "action.type") return _(o);
      if (e === "event_type") return f(o);
      if (e === "fb_pixel" || e === "offsite_pixel") {
        var a = n == null ? void 0 : n.get(g(e, o));
        return a == null || a === "" ? o : a;
      }
      return o === "" ? '""' : o;
    }
    function y(e) {
      return Array.isArray(e) ? e : [e];
    }
    function C(e, t, n) {
      return Array.isArray(t)
        ? t.length === 0
          ? "[]"
          : o("MAIBAPreviewPublishNestedValueFormatter").formatNestedList(
              t,
              function (t) {
                return C(e, t, n);
              },
            )
        : h(e, t, n);
    }
    function b(e, t, n) {
      var r = y(t);
      return o("MAIBAPreviewPublishNestedValueFormatter").formatNestedList(
        r,
        function (t) {
          return C(e, t, n);
        },
      );
    }
    function v(e) {
      var t;
      return e == null
        ? "-"
        : typeof e == "string"
          ? e === ""
            ? '""'
            : e
          : (t = JSON.stringify(e)) != null
            ? t
            : String(e);
    }
    function S(e, t, n) {
      var r = e === "action.type" ? "action_type" : e.replace(/\./g, "_");
      return o(
        "MAIBAPreviewPublishNestedValueFormatter",
      ).formatLabeledNestedValue(
        o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(r),
        C(e, t, n),
      );
    }
    function R(e, t, n) {
      var r = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(e);
      if (r == null) return String(t + 1) + ". " + v(e);
      var a = Object.keys(r).sort(function (e, t) {
        return e === "action.type"
          ? -1
          : t === "action.type"
            ? 1
            : e.localeCompare(t);
      });
      return a.length === 0
        ? String(t + 1) + ". {}"
        : o(
            "MAIBAPreviewPublishNestedValueFormatter",
          ).formatNumberedNestedValue(
            t,
            a
              .map(function (e) {
                return S(e, r[e], n);
              })
              .join("\n"),
          );
    }
    function L(e, t) {
      var n = c(e);
      return n == null
        ? null
        : n.length === 0
          ? "-"
          : n
              .map(function (e, n) {
                return R(e, n, t);
              })
              .join("\n");
    }
    function E(e, t, n) {
      var r = p(e, t);
      if (r == null) return [{ after: v(t), before: v(e), path: [] }];
      if (r.length === 1 && r[0].path.length === 0) {
        var o = L(e, n),
          a = L(t, n);
        if (o != null && a != null) return [{ after: a, before: o, path: [] }];
      }
      return r.map(function (e) {
        var t,
          r = (t = e.path[e.path.length - 1]) != null ? t : "";
        return {
          after: b(r, e.after, n),
          before: b(r, e.before, n),
          path: e.path.map(function (e) {
            return e === "action.type" ? "action_type" : e;
          }),
        };
      });
    }
    function k(t, n, r) {
      var o = y(t);
      for (var a of o)
        if (
          !(
            (typeof a != "string" && typeof a != "number") ||
            !/^[1-9]\d*$/.test(String(a))
          )
        ) {
          var i = String(a);
          if ((r.set(g(n, i), { field: n, id: i }), r.size >= e)) return !0;
        }
      return !1;
    }
    function I(e, t) {
      var n = c(e);
      if (n == null) return !1;
      for (var r of n) {
        var a = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(r);
        if (a != null) {
          for (var i of u) if (k(a[i], i, t)) return !0;
        }
      }
      return !1;
    }
    function T(e) {
      var t,
        n =
          (t = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
            e == null ? void 0 : e.spec_diff,
          )) == null
            ? void 0
            : t.fragments;
      if (!Array.isArray(n)) return [];
      var r = new Map();
      for (var a of n) {
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
            if ((u == null ? void 0 : u.field) === "promoted_object") {
              var c, m;
              if (
                k(
                  (c = o(
                    "MAIBAPreviewPublishStructuredDiff",
                  ).asStructuredObject(d(u.old))) == null
                    ? void 0
                    : c.pixel_id,
                  "fb_pixel",
                  r,
                ) ||
                k(
                  (m = o(
                    "MAIBAPreviewPublishStructuredDiff",
                  ).asStructuredObject(d(u.new))) == null
                    ? void 0
                    : m.pixel_id,
                  "fb_pixel",
                  r,
                )
              )
                return Array.from(r.values());
            }
            if ((u == null ? void 0 : u.field) === "tracking_specs") {
              var _ = p(u.old, u.new);
              if (_ != null) {
                if (_.length === 1 && _[0].path.length === 0) {
                  if (I(u.old, r) || I(u.new, r)) return Array.from(r.values());
                  continue;
                }
                for (var f of _) {
                  var g = f.path[f.path.length - 1];
                  if (
                    !(g !== "fb_pixel" && g !== "offsite_pixel") &&
                    (k(f.before, g, r) || k(f.after, g, r))
                  )
                    return Array.from(r.values());
                }
              }
            }
          }
      }
      return Array.from(r.values());
    }
    ((l.MAX_TRACKING_SPEC_PIXEL_REFERENCES = e),
      (l.trackingSpecPixelNameKey = g),
      (l.formatTrackingSpecChanges = E),
      (l.collectTrackingSpecPixelReferences = T));
  },
  226,
);
