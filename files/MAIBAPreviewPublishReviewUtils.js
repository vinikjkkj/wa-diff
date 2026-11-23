__d(
  "MAIBAPreviewPublishReviewUtils",
  [
    "fbt",
    "MAIBAPreviewPublishCreativeFormatter",
    "MAIBAPreviewPublishFieldFormatter",
    "MAIBAPreviewPublishMetricStrings",
    "MAIBAPreviewPublishReviewImageUrls",
    "MAIBAPreviewPublishReviewStrings",
    "MAIBAPreviewPublishStructuredDiff",
    "MAIBAPreviewPublishTargetingFormatter",
    "MAIBAPreviewPublishValueDisplay",
    "actionabilityProcessorShared",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "in_draft",
      u = "ADGROUP",
      c = "CAMPAIGN";
    function d(e) {
      var t = o("MAIBAPreviewPublishValueDisplay").parseStoredValue(e);
      return typeof t == "string" || typeof t == "number" ? String(t) : "-";
    }
    function m(e) {
      var t = o("MAIBAPreviewPublishValueDisplay").parseStoredValue(e);
      return typeof t != "number" || t <= 0
        ? "-"
        : o("MAIBAPreviewPublishReviewStrings").formatABTestDuration(t);
    }
    function p(e) {
      var t = d(e);
      return t === "-"
        ? t
        : o("MAIBAPreviewPublishMetricStrings").formatABTestObjectiveMetric(t);
    }
    function _(e, t, n) {
      if (
        typeof e != "string" ||
        t == null ||
        (o("MAIBAPreviewPublishFieldFormatter").isCurrencyField(e) &&
          ((n == null ? void 0 : n.currency) == null || n.currency === ""))
      )
        return "-";
      var r = o("MAIBAPreviewPublishValueDisplay").displayValue(t, e, n);
      return e !== "daily_budget"
        ? r
        : o("MAIBAPreviewPublishReviewStrings").formatABTestDailyBudget(r);
    }
    function f(e, t) {
      var n = e == null ? void 0 : e.ab_test_summaries;
      if (!Array.isArray(n)) return [];
      var r = [];
      for (var a of n) {
        var i = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(a);
        if (i != null) {
          var l = d(i.study_id);
          l !== "-" &&
            r.push({
              caption: o(
                "MAIBAPreviewPublishReviewStrings",
              ).getABTestDetailsCaption(),
              rows: [
                {
                  label: o(
                    "MAIBAPreviewPublishReviewStrings",
                  ).getABTestStudyNameLabel(),
                  value: d(i.study_name),
                },
                {
                  label: o(
                    "MAIBAPreviewPublishReviewStrings",
                  ).getABTestSourceNameLabel(),
                  value: d(i.source_name),
                },
                {
                  label: o(
                    "MAIBAPreviewPublishReviewStrings",
                  ).getABTestVariantNameLabel(),
                  value: d(i.variant_name),
                },
                {
                  label: o(
                    "MAIBAPreviewPublishReviewStrings",
                  ).getABTestObjectiveMetricLabel(),
                  value: p(i.objective_metric),
                },
                {
                  label: o(
                    "MAIBAPreviewPublishReviewStrings",
                  ).getABTestDurationLabel(),
                  value: m(i.duration_days),
                },
                {
                  label: o(
                    "MAIBAPreviewPublishReviewStrings",
                  ).getABTestBudgetLabel(),
                  value: _(i.budget_field, i.budget_value, t),
                },
              ],
              studyId: l,
            });
        }
      }
      return r;
    }
    function g(e) {
      return o("MAIBAPreviewPublishReviewStrings").formatCreativeAssetSummary(
        e,
      );
    }
    function h(e, t) {
      return e === 0 && t > 0
        ? o("MAIBAPreviewPublishReviewStrings").formatCreativeTextSummary(t)
        : t > 0
          ? g(e) +
            " \u2022 " +
            o("MAIBAPreviewPublishReviewStrings").formatCreativeTextSummary(t)
          : g(e);
    }
    function y(t, n, r) {
      var a,
        i = r[0];
      if (
        i == null ||
        (r.length > 1 && i.parentObjectId === "") ||
        i.sourceObjectId === "" ||
        r.some(function (e) {
          return (
            e.parentObjectId !== i.parentObjectId ||
            e.sourceObjectId !== i.sourceObjectId
          );
        })
      )
        return null;
      var l = i.sourceHashes[0],
        s = {
          image_url:
            l == null
              ? void 0
              : o("MAIBAPreviewPublishReviewImageUrls").resolveImageUrls(
                  [l],
                  n,
                )[0],
          label: i.sourceName,
        },
        d = r.map(function (e) {
          var t = new Set(e.sourceHashes),
            n = e.hashes.filter(function (e) {
              return !t.has(e);
            });
          return {
            fragment: e,
            hashes: n.length > 0 ? n : e.hashes.slice(0, 1),
          };
        }),
        m = d.map(function (e) {
          return {
            image_urls: o(
              "MAIBAPreviewPublishReviewImageUrls",
            ).resolveImageUrls(e.hashes, n),
            label: e.fragment.name,
          };
        }),
        p = i.parentName,
        _ = p === "" ? i.sourceName : p;
      return {
        addsOnlyTextOptions: !1,
        component: {
          adBeforeAfterPublishCard: {
            adgroup_id: i.objectId,
            after_items: [s].concat(m),
            after_summary: o(
              "MAIBAPreviewPublishReviewStrings",
            ).formatAdCountSummary(1 + m.length),
            attributes_json: JSON.stringify(
              babelHelpers.extends(
                {
                  account_id:
                    (a = n == null ? void 0 : n.accountID) != null ? a : "",
                  ad_draft_fragment_id: i.fragmentId,
                  ad_draft_id: R(t, "ad_draft_id"),
                  campaign_group_id: "",
                  campaign_id: "",
                },
                p === "" ? {} : { object_level: "adset" },
                { product: "ads_manager", status: e },
              ),
            ),
            before_items: [s],
            before_summary: o(
              "MAIBAPreviewPublishReviewStrings",
            ).formatAdCountSummary(1),
            images_pending: (n == null ? void 0 : n.imageUrlsPending) === !0,
            subtitle: String(
              o(
                "actionabilityProcessorShared",
              ).getAdObjectLevelLabelCapitalized(p === "" ? u : c),
            ),
            title: _,
          },
          component: "AdBeforeAfterPublishCard",
          id: "root",
          text: _,
        },
        coverage: d.map(function (e) {
          var t = l == null ? [] : [l],
            n = [].concat(t, e.hashes);
          return {
            afterImageHashes: n,
            afterTexts: [],
            beforeImageHashes: t,
            beforeTexts: [],
            coversDuplicateIdentity: !0,
            fragmentId: e.fragment.fragmentId,
          };
        }),
      };
    }
    function C(e) {
      return String(e === "headline" ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""));
    }
    function b(e, t, n) {
      return e.map(function (e) {
        var r,
          o,
          a =
            (r =
              (o = t.find(function (t) {
                return t.role === e.role;
              })) == null
                ? void 0
                : o.texts) != null
              ? r
              : [],
          i = function (t) {
            return a.includes(t) || (t === "" && a.length === 0);
          },
          l = e.texts.filter(i),
          u = e.texts.filter(function (e) {
            return !i(e);
          });
        return babelHelpers.extends(
          { label: C(e.role) },
          n ? { new_from: l.length } : {},
          {
            texts: [].concat(l, u).map(function (e) {
              return e === "" ? String(s._(/*BTDS*/ "")) : e;
            }),
          },
        );
      });
    }
    function v(t, n) {
      var r,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g = o("MAIBAPreviewPublishCreativeFormatter").collectAddedAdFragments(
          t,
        ),
        C = o(
          "MAIBAPreviewPublishCreativeFormatter",
        ).collectCreativeImageFragments(t),
        v = o(
          "MAIBAPreviewPublishCreativeFormatter",
        ).collectCreativeTextFragments(t);
      if (g.length > 0) {
        var S = new Set(
          g.map(function (e) {
            return e.fragmentId;
          }),
        );
        return C.some(function (e) {
          return !S.has(e.fragmentId);
        }) ||
          v.some(function (e) {
            return !S.has(e.fragmentId);
          })
          ? null
          : y(t, n, g);
      }
      var L = new Set(
        [].concat(C, v).map(function (e) {
          return e.fragmentId + "\0" + e.objectId;
        }),
      );
      if (L.size !== 1) return null;
      var E = (r = C[0]) != null ? r : v[0];
      if (E == null || E.objectId === "") return null;
      var k = E.fragmentId + "\0" + E.objectId,
        I =
          (a = C.find(function (e) {
            return e.fragmentId + "\0" + e.objectId === k;
          })) != null
            ? a
            : null,
        T =
          (i = v.find(function (e) {
            return e.fragmentId + "\0" + e.objectId === k;
          })) != null
            ? i
            : null,
        D =
          I != null
            ? I
            : T != null
              ? o(
                  "MAIBAPreviewPublishCreativeFormatter",
                ).collectCreativeImageContext(t, T.objectId)
              : null,
        x = (l = D == null ? void 0 : D.beforeHashes) != null ? l : [],
        $ = (s = D == null ? void 0 : D.afterHashes) != null ? s : [],
        P = (u = T == null ? void 0 : T.beforeTexts) != null ? u : [],
        N = (c = T == null ? void 0 : T.afterTexts) != null ? c : [],
        M = b(
          (d = T == null ? void 0 : T.beforeTextGroups) != null ? d : [],
          [],
          !1,
        ),
        w = b(
          (m = T == null ? void 0 : T.afterTextGroups) != null ? m : [],
          (p = T == null ? void 0 : T.beforeTextGroups) != null ? p : [],
          !0,
        ),
        A =
          I == null &&
          P.every(function (e) {
            return N.includes(e);
          }) &&
          ((_ = T == null ? void 0 : T.beforeTextGroups) != null
            ? _
            : []
          ).every(function (e) {
            var t;
            return (
              (t = T == null ? void 0 : T.afterTextGroups) != null ? t : []
            ).some(function (t) {
              return (
                t.role === e.role &&
                e.texts.every(function (e) {
                  return t.texts.includes(e);
                })
              );
            });
          }) &&
          w.some(function (e) {
            var t;
            return (
              ((t = e.new_from) != null ? t : e.texts.length) < e.texts.length
            );
          });
      return {
        addsOnlyTextOptions: A,
        component: {
          adBeforeAfterPublishCard: {
            adgroup_id: E.objectId,
            after_image_urls: o(
              "MAIBAPreviewPublishReviewImageUrls",
            ).resolveImageUrls($, n),
            after_summary: h(I == null ? 0 : $.length, N.length),
            after_text_groups: w,
            after_texts: N,
            attributes_json: JSON.stringify({
              account_id:
                (f = n == null ? void 0 : n.accountID) != null ? f : "",
              ad_draft_fragment_id: E.fragmentId,
              ad_draft_id: R(t, "ad_draft_id"),
              campaign_group_id: "",
              campaign_id: "",
              product: "ads_manager",
              status: e,
            }),
            before_image_urls: o(
              "MAIBAPreviewPublishReviewImageUrls",
            ).resolveImageUrls(x, n),
            before_summary: h(I == null ? 0 : x.length, P.length),
            before_text_groups: M,
            before_texts: P,
            images_pending:
              $.length > 0 && (n == null ? void 0 : n.imageUrlsPending) === !0,
            title: E.name,
          },
          component: "AdBeforeAfterPublishCard",
          id: "root",
          text: E.name,
        },
        coverage: [
          {
            afterImageHashes: $,
            afterTexts: N,
            beforeImageHashes: x,
            beforeTexts: P,
            coversDuplicateIdentity: !1,
            fragmentId: E.fragmentId,
          },
        ],
      };
    }
    function S(e, t) {
      var n, r;
      return (n = (r = v(e, t)) == null ? void 0 : r.component) != null
        ? n
        : null;
    }
    function R(e, t) {
      var n = e == null ? void 0 : e[t];
      return typeof n == "string" ? n : "";
    }
    function L(e) {
      var t,
        n =
          (t = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
            e == null ? void 0 : e.spec_diff,
          )) == null
            ? void 0
            : t.fragments;
      if (!Array.isArray(n)) return [];
      var r = [];
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
            if (
              !(
                u == null ||
                !o("MAIBAPreviewPublishTargetingFormatter").isTargetingField(
                  String(u.field),
                )
              )
            )
              for (var c of [u.old, u.new])
                typeof c == "string" && c !== "" && r.push(c);
          }
      }
      return r;
    }
    function E(e, t) {
      if (Array.isArray(e)) {
        for (var n of e) E(n, t);
        return;
      }
      var r = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(e);
      if (r != null)
        for (var a of Object.entries(r)) {
          var i = a[0],
            l = a[1];
          (o("MAIBAPreviewPublishFieldFormatter").isCurrencyField(i) &&
            t.add(i),
            E(l, t));
        }
    }
    function k(e) {
      var t,
        n = new Set(),
        r = e == null ? void 0 : e.ab_test_summaries;
      if (Array.isArray(r))
        for (var a of r) {
          var i,
            l =
              (i = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
                a,
              )) == null
                ? void 0
                : i.budget_field;
          typeof l == "string" &&
            o("MAIBAPreviewPublishFieldFormatter").isCurrencyField(l) &&
            n.add(l);
        }
      var s =
        (t = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
          e == null ? void 0 : e.spec_diff,
        )) == null
          ? void 0
          : t.fragments;
      if (!Array.isArray(s)) return Array.from(n);
      for (var u of s) {
        var c,
          d =
            (c = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
              u,
            )) == null
              ? void 0
              : c.changes;
        if (Array.isArray(d))
          for (var m of d) {
            var p = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
              m,
            );
            if (p != null) {
              var _ = p.field;
              (typeof _ == "string" &&
                o("MAIBAPreviewPublishFieldFormatter").isCurrencyField(_) &&
                n.add(_),
                _ === "adset_bid_amounts" && n.add("bid_amount"));
              for (var f of [p.old, p.new])
                E(o("MAIBAPreviewPublishValueDisplay").parseStoredValue(f), n);
            }
          }
      }
      return Array.from(n);
    }
    function I(e) {
      var t,
        n = new Set(),
        r =
          (t = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
            e == null ? void 0 : e.spec_diff,
          )) == null
            ? void 0
            : t.fragments;
      if (!Array.isArray(r)) return [];
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
            if (u != null) {
              var c = u.field;
              (typeof c == "string" &&
                o("MAIBAPreviewPublishFieldFormatter").isCurrencyField(c) &&
                n.add(c),
                c === "adset_bid_amounts" && n.add("bid_amount"));
              for (var d of [u.old, u.new])
                E(o("MAIBAPreviewPublishValueDisplay").parseStoredValue(d), n);
            }
          }
      }
      return Array.from(n);
    }
    ((l.formatAdObjectCaption = o(
      "MAIBAPreviewPublishReviewStrings",
    ).formatAdObjectCaption),
      (l.getReviewTableHeaders = o(
        "MAIBAPreviewPublishReviewStrings",
      ).getReviewTableHeaders),
      (l.buildPreviewPublishABTestSummaries = f),
      (l.buildCreativeCardReview = v),
      (l.buildCreativeCardComponent = S),
      (l.collectRawTargetingSpecs = L),
      (l.collectCurrencyFields = k),
      (l.collectDiffCurrencyFields = I));
  },
  226,
);
