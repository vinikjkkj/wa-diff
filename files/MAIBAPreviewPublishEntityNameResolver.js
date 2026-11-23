__d(
  "MAIBAPreviewPublishEntityNameResolver",
  [
    "MAIBAPreviewPublishEntityNameResolverQuery.graphql",
    "MAIBAPreviewPublishStructuredDiff",
    "RelayHooks",
    "json-bigint",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useMemo,
      m = u.useState,
      p = new Map(),
      _ = 120,
      f = "time_based_ad_rotation_id_blocks",
      g = new Set([
        "rf_prediction_id",
        f,
        "saved_audience_id",
        "value_rule_set_id",
      ]),
      h = new Map([
        ["rf_prediction_id", "ReachFrequencyPrediction"],
        [f, "Adgroup"],
        ["saved_audience_id", "AdAudience"],
        ["value_rule_set_id", "XFBAdsValueAdjustmentRuleCollection"],
      ]),
      y = r("json-bigint")({ storeAsString: !0 }),
      C =
        e !== void 0
          ? e
          : (e = n("MAIBAPreviewPublishEntityNameResolverQuery.graphql"));
    function b(e, t) {
      return e + ":" + t;
    }
    function v(e) {
      var t = e.indexOf(":");
      return { field: e.slice(0, t), id: e.slice(t + 1) };
    }
    function S(e) {
      if (typeof e != "string") return e;
      try {
        return y.parse(e);
      } catch (t) {
        return e;
      }
    }
    function R(e) {
      if (typeof e == "number")
        return Number.isInteger(e) && e > 0 ? String(e) : null;
      if (typeof e != "string") return null;
      var t = e.replace(/^\"|\"$/g, "").trim();
      return /^[1-9]\d*$/.test(t) ? t : null;
    }
    function L(e, t, n) {
      var r = R(t);
      return r == null
        ? !1
        : (n.set(b(e, r), { field: e, id: r }), n.size >= _);
    }
    function E(e, t, n) {
      for (var r of t)
        if (Array.isArray(r) ? E(e, r, n) : L(e, r, n)) return !0;
      return !1;
    }
    function k(e, t, n) {
      if (!g.has(e)) return !1;
      var r = S(t);
      return e === f && Array.isArray(r) ? E(e, r, n) : L(e, r, n);
    }
    function I(e) {
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
              ),
              c = u == null ? void 0 : u.field;
            if (
              typeof c == "string" &&
              (k(c, u == null ? void 0 : u.old, r) ||
                k(c, u == null ? void 0 : u.new, r))
            )
              return Array.from(r.values());
          }
      }
      return Array.from(r.values());
    }
    function T(e) {
      return e.__typename === "AdAudience" ||
        e.__typename === "Adgroup" ||
        e.__typename === "ReachFrequencyPrediction" ||
        e.__typename === "XFBAdsValueAdjustmentRuleCollection"
        ? e.name
        : null;
    }
    function D(e, t) {
      var n = d(
          function () {
            return Array.from(
              new Set(
                e.map(function (e) {
                  return b(e.field, e.id);
                }),
              ),
            )
              .sort()
              .join(",");
          },
          [e],
        ),
        r = o("RelayHooks").useRelayEnvironment(),
        a = m({ hasError: !1, key: "", names: p }),
        i = a[0],
        l = a[1];
      if (
        (c(
          function () {
            if (n !== "") {
              var e = !0,
                t = n.split(",").map(v),
                a = Array.from(
                  new Set(
                    t.map(function (e) {
                      return e.id;
                    }),
                  ),
                ).sort(),
                i = new Map();
              for (var s of t) {
                var u,
                  c = (u = i.get(s.id)) != null ? u : new Set();
                (c.add(s.field), i.set(s.id, c));
              }
              return (
                o("RelayHooks")
                  .fetchQuery(r, C, { ids: a })
                  .toPromise()
                  .then(function (t) {
                    if (e) {
                      if (t == null) {
                        l({ hasError: !0, key: n, names: p });
                        return;
                      }
                      var r = new Map(),
                        o = function (t) {
                          if (t == null) return 0;
                          var e = T(t);
                          if (e == null || e === "") return 0;
                          var n = i.get(t.id);
                          n == null ||
                            n.forEach(function (n) {
                              h.get(n) === t.__typename && r.set(b(n, t.id), e);
                            });
                        },
                        a;
                      for (var s of t.nodes) a = o(s);
                      l({ hasError: !1, key: n, names: r });
                    }
                  })
                  .catch(function () {
                    e && l({ hasError: !0, key: n, names: p });
                  }),
                function () {
                  e = !1;
                }
              );
            }
          },
          [r, n],
        ),
        n === "")
      )
        return { hasError: !1, isLoading: !1, slice: p };
      var s = i.key === n;
      return {
        hasError: s && i.hasError,
        isLoading: !s,
        slice: s ? i.names : p,
      };
    }
    var x = { blocksTable: !0, collect: I, key: "entity_names", useResolve: D },
      $ = x;
    l.default = $;
  },
  98,
);
