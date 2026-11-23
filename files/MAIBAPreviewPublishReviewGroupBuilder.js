__d(
  "MAIBAPreviewPublishReviewGroupBuilder",
  [
    "MAIBAPreviewPublishAdRotationRows",
    "MAIBAPreviewPublishAdSetAllocationRows",
    "MAIBAPreviewPublishAttributionSpecFormatter",
    "MAIBAPreviewPublishBooleanFormatter",
    "MAIBAPreviewPublishCreativeFormatter",
    "MAIBAPreviewPublishDuplicateSource",
    "MAIBAPreviewPublishFieldFormatter",
    "MAIBAPreviewPublishFieldLabel",
    "MAIBAPreviewPublishNestedValueFormatter",
    "MAIBAPreviewPublishReviewImageUrls",
    "MAIBAPreviewPublishReviewStrings",
    "MAIBAPreviewPublishStructuredDiff",
    "MAIBAPreviewPublishStructuredFieldRegistry",
    "MAIBAPreviewPublishTargetingFormatter",
    "MAIBAPreviewPublishTrackingSpecFormatter",
    "MAIBAPreviewPublishValueDisplay",
    "XPlatReactEnvironment",
    "maibaParseJSONWithBigInts",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = new Set([
        "ad_active_time",
        "campaign_active_time",
        "campaign_group_active_time",
      ]),
      u = new WeakMap();
    function c(e, t, n) {
      return (
        n === void 0 && (n = []),
        u.set(
          e,
          [t]
            .concat(
              n.filter(function (e) {
                return typeof e == "string";
              }),
            )
            .join("."),
        ),
        e
      );
    }
    function d(e) {
      return u.get(e);
    }
    var m = new WeakMap();
    function p(e) {
      return m.get(e);
    }
    function _(e) {
      var t = {};
      for (var n of Array.isArray(e) ? e : [])
        for (var r of Object.entries(
          (a = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(n)) !=
            null
            ? a
            : {},
        )) {
          var a,
            i = r[0],
            l = r[1];
          if (Array.isArray(l)) {
            var s;
            t[i] = ((s = t[i]) != null ? s : 0) + l.length;
          }
        }
      return t;
    }
    var f = new Set([
        "asset_feed_spec",
        "creative",
        "creative_asset_groups_spec",
        "generative_asset_spec",
        "media_sourcing_spec",
        "object_story_spec",
      ]),
      g = [
        {
          decode: function (n, r) {
            var t;
            return o(
              "MAIBAPreviewPublishTargetingFormatter",
            ).decodeTargetingSpec(
              n,
              (t = r == null ? void 0 : r.names) != null ? t : e,
            );
          },
          matches: o("MAIBAPreviewPublishTargetingFormatter").isTargetingField,
        },
        {
          decode: o("MAIBAPreviewPublishStructuredFieldRegistry")
            .decodePreviewPublishStructuredFieldSide,
          matches: o("MAIBAPreviewPublishStructuredFieldRegistry")
            .isPreviewPublishStructuredField,
        },
      ];
    function h(e, t, n) {
      for (var r of g)
        if (r.matches(t)) {
          var a;
          return (a = r.decode(e, n)) != null
            ? a
            : o("MAIBAPreviewPublishValueDisplay").parseStoredValue(e);
        }
      return o("MAIBAPreviewPublishValueDisplay").parseStoredValue(e);
    }
    function y(e, t) {
      var n = o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(e);
      return t.length === 0
        ? n
        : n +
            " -> " +
            t
              .map(function (e) {
                return typeof e == "number"
                  ? o("MAIBAPreviewPublishReviewStrings").formatListItemLabel(
                      e + 1,
                    )
                  : o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(e);
              })
              .join(" -> ");
    }
    function C(e, t) {
      return (
        e === "targeting" &&
        t.join(".") === "targeting_automation.individual_setting.age"
      );
    }
    function b(e, t) {
      var n = t.filter(function (e) {
          return e.after !== "-" || e.before !== "-";
        }),
        r = new Map();
      for (var a of n) {
        var i,
          l = a.path[a.path.length - 1],
          s = typeof l == "string" ? l : e;
        r.set(s, ((i = r.get(s)) != null ? i : 0) + 1);
      }
      return n.map(function (t) {
        var n = t.path[t.path.length - 1],
          a = typeof n == "string" ? n : e,
          i = [];
        if (t.path.length > 0) {
          var l;
          i = ((l = r.get(a)) != null ? l : 0) > 1 ? t.path : [a];
        }
        var s = c(
          {
            after: t.after,
            before: t.before,
            field: C(e, t.path)
              ? o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(e) +
                " -> " +
                o("MAIBAPreviewPublishReviewStrings").getAgeSuggestionLabel()
              : y(e, i),
          },
          e,
          t.path,
        );
        return (t.entityCounts != null && m.set(s, t.entityCounts), s);
      });
    }
    var v = {
      build: function (t, n, r) {
        return n !== "tracking_specs"
          ? null
          : b(
              n,
              o(
                "MAIBAPreviewPublishTrackingSpecFormatter",
              ).formatTrackingSpecChanges(
                t.old,
                t.new,
                r == null ? void 0 : r.pixelNames,
              ),
            );
      },
      key: "tracking_specs",
    };
    function S(e, t) {
      var n;
      if (e == null || e === "") return "-";
      var r = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(e);
      if (r != null) {
        var a = Object.entries(r);
        return a.length === 0
          ? "-"
          : a
              .map(function (e) {
                var n = e[0],
                  r = e[1];
                return o(
                  "MAIBAPreviewPublishNestedValueFormatter",
                ).formatLabeledNestedValue(
                  o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(n),
                  S(r, t),
                );
              })
              .join("\n");
      }
      return (n = o("MAIBAPreviewPublishFieldFormatter").formatFieldValue(
        "bid_amount",
        e,
        {
          currency: t == null ? void 0 : t.currency,
          entityNames: t == null ? void 0 : t.entityNames,
          pixelNames: t == null ? void 0 : t.pixelNames,
          timezoneID: t == null ? void 0 : t.timezoneID,
        },
      )) != null
        ? n
        : o("MAIBAPreviewPublishValueDisplay").structuredDisplayValue(e);
    }
    function R(e) {
      var t = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
        o("MAIBAPreviewPublishValueDisplay").parseStoredValue(e),
      );
      if (t == null) return null;
      var n = t.user_groups;
      return n == null
        ? null
        : o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(n);
    }
    var L = {};
    function E(e) {
      if (e == null || e === "") return !0;
      var t = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
        o("MAIBAPreviewPublishValueDisplay").parseStoredValue(e),
      );
      return (
        t != null &&
        Object.keys(t).every(function (e) {
          return e === "user_groups";
        })
      );
    }
    var k = {
        build: function (t, n, r) {
          var e, o;
          if (n !== "bid_adjustments" || !E(t.old) || !E(t.new)) return null;
          var a = (e = R(t.old)) != null ? e : L,
            i = (o = R(t.new)) != null ? o : L,
            l = Array.from(
              new Set([].concat(Object.keys(a), Object.keys(i))),
            ).sort();
          return l.length === 0
            ? null
            : b(
                n,
                l
                  .map(function (e) {
                    return {
                      after: S(i[e], r),
                      before: S(a[e], r),
                      path: ["user_groups", e],
                    };
                  })
                  .filter(function (e) {
                    return e.after !== e.before;
                  }),
              );
        },
        key: "bid_adjustments",
      },
      I = {
        build: function (t, n) {
          if (
            n !==
            o("MAIBAPreviewPublishAttributionSpecFormatter")
              .ATTRIBUTION_SPEC_FIELD
          )
            return null;
          var e = o(
            "MAIBAPreviewPublishAttributionSpecFormatter",
          ).formatAttributionSpecChanges(t.old, t.new);
          return e == null ? null : b(n, e);
        },
        key: o("MAIBAPreviewPublishAttributionSpecFormatter")
          .ATTRIBUTION_SPEC_FIELD,
      },
      T = { id: "", name: "" };
    function D(e) {
      if (e == null || e === "") return T;
      var t = e;
      if (typeof e == "string")
        try {
          t = r("maibaParseJSONWithBigInts")(e);
        } catch (e) {
          return null;
        }
      var n = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(t),
        a = n == null ? void 0 : n.id,
        i = typeof a == "number" && Number.isSafeInteger(a) ? String(a) : a,
        l = n == null ? void 0 : n.name;
      return typeof i == "string" &&
        i !== "" &&
        typeof l == "string" &&
        l.trim() !== ""
        ? { id: i, name: l }
        : null;
    }
    function x(e, t) {
      return e.id === ""
        ? "-"
        : t
          ? o("MAIBAPreviewPublishReviewStrings").formatAdObjectIdentity(
              e.name,
              e.id,
            )
          : e.name;
    }
    var $ = {
        build: function (t, n) {
          if (n !== "saved_audience") return null;
          var e = D(t.old),
            r = D(t.new);
          if (e == null || r == null) return null;
          if (e.id === r.id) return [];
          var a = x(e, !1) === x(r, !1);
          return [
            {
              after: x(r, a),
              before: x(e, a),
              field: o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(n),
            },
          ];
        },
        key: "saved_audience",
      },
      P = {
        build: function (t, n, r) {
          var e = h(t.old, n, r),
            a = h(t.new, n, r);
          o(
            "MAIBAPreviewPublishStructuredFieldRegistry",
          ).isPreviewPublishStructuredField(n) &&
            ((e == null || e === "") &&
            (Array.isArray(a) ||
              o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(a) !=
                null)
              ? (e = Array.isArray(a) ? [] : {})
              : (a == null || a === "") &&
                (Array.isArray(e) ||
                  o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
                    e,
                  ) != null) &&
                (a = Array.isArray(e) ? [] : {}));
          var i = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(e),
            l = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(a),
            s =
              (i != null && l != null) ||
              (o(
                "MAIBAPreviewPublishStructuredFieldRegistry",
              ).isPreviewPublishStructuredField(n) &&
                Array.isArray(e) &&
                Array.isArray(a));
          if (!s) {
            var u = o("MAIBAPreviewPublishValueDisplay").displayDecodedValue(
                a,
                n,
                r,
              ),
              c = o("MAIBAPreviewPublishValueDisplay").displayDecodedValue(
                e,
                n,
                r,
              );
            return u === "-" && c === "-"
              ? []
              : [
                  {
                    after: u,
                    before: c,
                    field: o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(
                      n,
                    ),
                  },
                ];
          }
          var d = o(
              "MAIBAPreviewPublishStructuredFieldRegistry",
            ).getPreviewPublishStructuredDiffOptions(n),
            m = t.new == null || t.new === "",
            p =
              m &&
              o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(e) !=
                null
                ? babelHelpers.extends({}, d, { objectMode: "symmetric" })
                : d,
            f = o("MAIBAPreviewPublishStructuredDiff").diffStructuredValues(
              e,
              a,
              p,
            );
          return f.length === 0
            ? []
            : b(
                n,
                f.map(function (e) {
                  var t,
                    a = (t = e.path[e.path.length - 1]) != null ? t : n,
                    i =
                      n === "bid_adjustments" &&
                      e.path[0] === "user_groups" &&
                      e.path.length === 2;
                  return {
                    after: i
                      ? S(e.after, r)
                      : o("MAIBAPreviewPublishValueDisplay").displayLeafSide(
                          e.after,
                          a,
                          r,
                        ),
                    before: i
                      ? S(e.before, r)
                      : o("MAIBAPreviewPublishValueDisplay").displayLeafSide(
                          e.before,
                          a,
                          r,
                        ),
                    entityCounts:
                      o(
                        "MAIBAPreviewPublishTargetingFormatter",
                      ).isTargetingField(n) &&
                      e.path.length === 1 &&
                      e.path[0] === "flexible_spec"
                        ? { after: _(e.after), before: _(e.before) }
                        : void 0,
                    path: e.path,
                  };
                }),
              );
        },
        key: "structured",
      },
      N = [v, I, k, $, P];
    function M(e, t, n) {
      for (var r of N) {
        var o = r.build(e, t, n);
        if (o != null) return o;
      }
      return [];
    }
    function w(e, t) {
      return (
        e.length !== t.length ||
        e.some(function (e, n) {
          return e !== t[n];
        })
      );
    }
    function A(e, t) {
      var n = new Set(e),
        r = new Set(t);
      return w(
        e.filter(function (e) {
          return r.has(e);
        }),
        t.filter(function (e) {
          return n.has(e);
        }),
      );
    }
    function F(e, t) {
      return (
        e.some(function (e) {
          return !t.includes(e);
        }) ||
        t.some(function (t) {
          return !e.includes(t);
        })
      );
    }
    function O(e, t, n) {
      return !t || (typeof e == "string" && n.includes(e.trim()));
    }
    function B(e, t) {
      if (e.hasBefore === e.hasAfter) return !1;
      var n = e.hasAfter ? e.after : e.before;
      return (
        o("MAIBAPreviewPublishCreativeFormatter").isCreativeCardMetadataLeaf(
          t,
          e.path,
          n,
        ) ||
        o("MAIBAPreviewPublishCreativeFormatter").isCreativeCardEnrollmentLeaf(
          t,
          e.path,
          n,
        )
      );
    }
    function W(e, t) {
      return e.hasBefore === e.hasAfter
        ? !1
        : o(
            "MAIBAPreviewPublishCreativeFormatter",
          ).isCreativeCardTextMetadataLeaf(
            t,
            e.path,
            e.hasAfter ? e.after : e.before,
          );
    }
    function q(e, t, n, r) {
      if (!t) return "-";
      if (e === null)
        return o("MAIBAPreviewPublishReviewStrings").getExplicitNullLabel();
      if (Array.isArray(e) && e.length === 0) return "[]";
      var a = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(e);
      return a != null && Object.keys(a).length === 0
        ? "{}"
        : o("MAIBAPreviewPublishValueDisplay").displayLeafSide(e, n, r);
    }
    function U(e, t) {
      return e === "creative" ? t : [e].concat(t);
    }
    function V(e, t, n, r) {
      var a,
        i,
        l,
        s,
        u,
        d = { spec_diff: { fragments: [e] } },
        m =
          (a = o(
            "MAIBAPreviewPublishCreativeFormatter",
          ).collectCreativeImageCoverageFragments(d)[0]) != null
            ? a
            : null,
        p =
          r == null
            ? o(
                "MAIBAPreviewPublishCreativeFormatter",
              ).collectCreativeImageFragment(d)
            : null,
        _ = [];
      p != null &&
        _.push(
          c(
            {
              after: "",
              afterImageUrls: o(
                "MAIBAPreviewPublishReviewImageUrls",
              ).resolveImageUrls(p.afterHashes, n),
              before: "",
              beforeImageUrls: o(
                "MAIBAPreviewPublishReviewImageUrls",
              ).resolveImageUrls(p.beforeHashes, n),
              field: o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(
                "creative",
              ),
            },
            "creative",
          ),
        );
      var g =
          r != null &&
          (r.beforeImageHashes.length > 0 || r.afterImageHashes.length > 0)
            ? r
            : null,
        h =
          m != null &&
          m.beforeHashes.length > 0 &&
          !w(m.beforeHashes, m.afterHashes),
        C = p != null ? p : h ? m : null,
        b =
          g == null
            ? C
            : {
                afterHashes: g.afterImageHashes,
                beforeHashes: g.beforeImageHashes,
              },
        v =
          (i =
            (l = m == null ? void 0 : m.beforeHashes) != null
              ? l
              : g == null
                ? void 0
                : g.beforeImageHashes) != null
            ? i
            : [],
        S =
          (s =
            (u = m == null ? void 0 : m.afterHashes) != null
              ? u
              : g == null
                ? void 0
                : g.afterImageHashes) != null
            ? s
            : [],
        R = g == null || !A(v, S),
        L = [],
        E = [];
      for (var k of t) {
        var I = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(k),
          T = I == null ? void 0 : I.field;
        I == null ||
          typeof T != "string" ||
          (L.push.apply(
            L,
            o("MAIBAPreviewPublishCreativeFormatter").extractCreativeTexts(
              I.old,
              T,
              !0,
            ),
          ),
          E.push.apply(
            E,
            o("MAIBAPreviewPublishCreativeFormatter").extractCreativeTexts(
              I.new,
              T,
              !0,
            ),
          ));
      }
      var D =
          r != null && (r.beforeTexts.length > 0 || r.afterTexts.length > 0),
        x = g != null && F(g.beforeImageHashes, g.afterImageHashes),
        $ =
          D && !x
            ? o(
                "MAIBAPreviewPublishCreativeFormatter",
              ).appendOnlyCopyLeafFilter(t)
            : null,
        P = D && x && !A(L, E),
        N = new Map(),
        M = function () {
          var e = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(V),
            t = e == null ? void 0 : e.field;
          if (e == null || typeof t != "string" || !f.has(t)) return 1;
          var a = Object.getOwnPropertyDescriptor(e, "old") != null,
            i = Object.getOwnPropertyDescriptor(e, "new") != null,
            l = a
              ? o("MAIBAPreviewPublishValueDisplay").parseStoredValue(e.old)
              : null,
            s = i
              ? o("MAIBAPreviewPublishValueDisplay").parseStoredValue(e.new)
              : null;
          for (var u of o(
            "MAIBAPreviewPublishStructuredDiff",
          ).diffStructuredLeaves(l, s, {
            hasAfter: i,
            hasBefore: a,
            isMetadataLeaf: function (n, r) {
              return (
                o(
                  "MAIBAPreviewPublishCreativeFormatter",
                ).isCreativeCardMetadataLeaf(t, n, r) ||
                o(
                  "MAIBAPreviewPublishCreativeFormatter",
                ).isCreativeCardEnrollmentLeaf(t, n, r) ||
                (n[n.length - 1] !== "text_type" &&
                  o(
                    "MAIBAPreviewPublishCreativeFormatter",
                  ).isCreativeCardTextMetadataLeaf(t, n, r))
              );
            },
          }))
            if (
              !(
                h &&
                u.path.length === 0 &&
                ((u.hasBefore && u.before === null && !u.hasAfter) ||
                  (u.hasAfter && u.after === null && !u.hasBefore))
              ) &&
              !(
                b != null &&
                R &&
                o(
                  "MAIBAPreviewPublishCreativeFormatter",
                ).isCreativeCardImageLeaf(t, u.path) &&
                O(u.before, u.hasBefore, b.beforeHashes) &&
                O(u.after, u.hasAfter, b.afterHashes)
              ) &&
              !(b != null && (g != null || h) && B(u, t)) &&
              !($ != null && $(t, u)) &&
              !(
                r != null &&
                P &&
                o(
                  "MAIBAPreviewPublishCreativeFormatter",
                ).isCreativeCardTextLeaf(t, u.path) &&
                O(u.before, u.hasBefore, r.beforeTexts) &&
                O(u.after, u.hasAfter, r.afterTexts)
              ) &&
              !(r != null && D && W(u, t))
            ) {
              var d = U(t, u.path),
                m = d[d.length - 1],
                p = typeof m == "string" ? m : t,
                C = c(
                  {
                    after: q(u.after, u.hasAfter, p, n),
                    before: q(u.before, u.hasBefore, p, n),
                    field: y("creative", d),
                  },
                  t,
                  u.path,
                ),
                v = JSON.stringify([d, C.before, C.after]),
                S = N.get(v);
              (S == null || S === t) && (N.set(v, t), _.push(C));
            }
        };
      for (var V of t) M();
      return _;
    }
    var H = ["CAMPAIGN_GROUP", "CAMPAIGN", "ADGROUP"];
    function G(e) {
      var t = H.indexOf(e);
      return t === -1 ? H.length : t;
    }
    function z(e) {
      return typeof e == "string" ? e : "";
    }
    function j(e, t, n) {
      var r,
        a =
          (r = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
            e == null ? void 0 : e.spec_diff,
          )) == null
            ? void 0
            : r.fragments;
      if (!Array.isArray(a)) return [];
      var i = [],
        l = function () {
          var e = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(m);
          if (e == null) return 0;
          var r = z(e.fragment_id),
            a = n.get(r),
            l = [],
            u =
              o("XPlatReactEnvironment").isWeb() &&
              (a == null ? void 0 : a.coversDuplicateIdentity) !== !0
                ? o("MAIBAPreviewPublishDuplicateSource").buildDuplicateRow(e)
                : null,
            p = e.changes;
          if (
            (u != null && l.push(c(u, "copied_from")),
            Array.isArray(p) &&
              (u == null ||
                e.review_baseline === "draft" ||
                e.duplicate_review_enabled === !0))
          ) {
            var _ = o(
              "MAIBAPreviewPublishAdRotationRows",
            ).timeBasedAdRotationRows(p, t);
            if (_ != null) {
              var g,
                h =
                  (g = p
                    .map(function (e) {
                      var t;
                      return (t = o(
                        "MAIBAPreviewPublishStructuredDiff",
                      ).asStructuredObject(e)) == null
                        ? void 0
                        : t.field;
                    })
                    .find(function (e) {
                      return (
                        typeof e == "string" &&
                        o(
                          "MAIBAPreviewPublishAdRotationRows",
                        ).isTimeBasedAdRotationField(e)
                      );
                    })) != null
                    ? g
                    : "time_based_ad_rotation_intervals";
              l.push.apply(
                l,
                _.map(function (e) {
                  return c(e, String(h));
                }),
              );
            }
            l.push.apply(l, V(e, p, t, a));
            var y = function () {
                var n = o(
                  "MAIBAPreviewPublishStructuredDiff",
                ).asStructuredObject(b);
                if (n == null) return 0;
                var r = n.field;
                if (
                  typeof r != "string" ||
                  s.has(r) ||
                  (r === "value_rules_applied" &&
                    e.object_level === "CAMPAIGN" &&
                    (e.action === "UPDATE" || e.action === "MODIFY") &&
                    o("MAIBAPreviewPublishBooleanFormatter").parseBooleanValue(
                      n.new,
                    ) === !0) ||
                  f.has(r) ||
                  (_ != null &&
                    o(
                      "MAIBAPreviewPublishAdRotationRows",
                    ).isTimeBasedAdRotationField(r))
                )
                  return 0;
                var a = o(
                  "MAIBAPreviewPublishAdSetAllocationRows",
                ).isAdSetAllocationField(r)
                  ? o(
                      "MAIBAPreviewPublishAdSetAllocationRows",
                    ).adSetAllocationRows(n, r, e.ad_set_names, t)
                  : null;
                if (a != null)
                  return (
                    l.push.apply(
                      l,
                      a.map(function (e) {
                        return c(e, r);
                      }),
                    ),
                    0
                  );
                for (var i of M(n, r, t)) l.push(d(i) == null ? c(i, r) : i);
              },
              C;
            for (var b of p) C = y();
          }
          var v = o("XPlatReactEnvironment").isWeb()
            ? null
            : o("MAIBAPreviewPublishDuplicateSource").getDuplicateSource(e);
          if (l.length === 0 && v == null) return 0;
          i.push({
            fragmentId: r,
            level: z(e.object_level),
            name: z(e.name),
            objectId: z(e.object_id),
            rows: l,
            sourceName: v == null ? void 0 : v.sourceName,
            sourceObjectId: v == null ? void 0 : v.sourceObjectId,
          });
        },
        u;
      for (var m of a) u = l();
      return i.sort(function (e, t) {
        return G(e.level) - G(t.level);
      });
    }
    function K(e, t) {
      return j(e, t, new Map());
    }
    function Q(e, t, n) {
      return (
        n === void 0 && (n = []),
        j(
          e,
          t,
          new Map(
            n.map(function (e) {
              return [e.fragmentId, e];
            }),
          ),
        )
      );
    }
    function X(e, t) {
      return K(e, t).flatMap(function (e) {
        return e.rows;
      });
    }
    ((l.getReviewRowFieldPath = d),
      (l.getReviewRowEntityCounts = p),
      (l.buildPreviewPublishReviewGroups = K),
      (l.buildPreviewPublishSupplementalReviewGroups = Q),
      (l.buildPreviewPublishReviewRows = X));
  },
  98,
);
