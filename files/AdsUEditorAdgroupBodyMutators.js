__d(
  "AdsUEditorAdgroupBodyMutators",
  [
    "invariant",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "immutable",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e == null
        ? r("immutable").List()
        : Array.isArray(e)
          ? r("immutable").fromJS(e)
          : e;
    }
    function u(e, t, n, a, i, l) {
      if (
        (l === void 0 && (l = !1),
        !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
      )
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "This action should be called on an asset feed, after a video / image customization",
        );
      var s = e;
      if (!i) s = m(s, t, n, a, l);
      else {
        var u = a.get(0);
        if (typeof u == "string") {
          var c;
          u = r("immutable").Map(((c = {}), (c.text = u), c));
        }
        s = d(s, t, n, u);
      }
      return s;
    }
    function c(e, t) {
      var n;
      if (!o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "This action should be called on an asset feed, after a video / image customization",
        );
      var a =
        (n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.bodies;
      if (a == null) return e;
      var i = e;
      return (
        a.forEach(function (e, n) {
          i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").message,
            n,
            "text",
            "",
          );
        }),
        (i = o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
          i,
          t,
          r("AdsUnifiedCreativeAPIFields").message,
          "adlabels",
        )),
        i
      );
    }
    function d(e, t, n, a) {
      var i = p(e);
      if (!i) return e;
      var l = e;
      if (
        ((l = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          e,
          t,
          r("AdsUnifiedCreativeAPIFields").message,
          i.index,
          "text",
          a.get("text"),
        )),
        r("justknobx")._("3917"))
      )
        l = R(l, t, a, i.index);
      else {
        var s = a.get("asset_source");
        s != null &&
          (l = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            l,
            t,
            r("AdsUnifiedCreativeAPIFields").message,
            i.index,
            "asset_source",
            s,
          ));
      }
      return o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
        l,
        t,
        r("AdsUnifiedCreativeAPIFields").message,
        "adlabels",
      );
    }
    function m(e, t, n, a, i) {
      var l,
        u,
        c,
        d = e,
        m =
          (l = d.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.bodies,
        p = m != null ? m.size : 0,
        _ =
          (u = d.creative) == null || (u = u.asset_feed_spec) == null
            ? void 0
            : u.asset_customization_rules;
      if (_ == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "targetingRules should exist",
        );
      var f = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getTargetingRuleHavingPlacementList(_, n);
      if (f == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "targeting rule with placementlist must exist, since this action will be fired only after an image / video has been customized for the same placement before",
        );
      var g = o(
        "AdsPlacementAssetUtils",
      ).makeUniqueLabelNameForPlacementAsset();
      a.forEach(function (e, n) {
        var a = typeof e == "string" ? e : e.get("text");
        if (
          (typeof a == "string" || s(0, 70895, typeof a),
          !(!i && n !== 0 && f.index !== 0))
        ) {
          var l = p + n;
          (m != null &&
            m instanceof r("immutable").List &&
            m.forEach(function (e, t) {
              e.get("text") === a && (l = t + 1);
            }),
            (d = o("AdsAssetFeedMutationUtils").insertAssetFieldAtIndex(
              d,
              t,
              r("AdsUnifiedCreativeAPIFields").message,
              l,
              "text",
              a,
            )),
            e instanceof r("immutable").Map &&
              (r("justknobx")._("3917")
                ? (d = R(d, t, e, l))
                : e.get("asset_source") != null &&
                  (d = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    d,
                    t,
                    r("AdsUnifiedCreativeAPIFields").message,
                    l,
                    "asset_source",
                    e.get("asset_source"),
                  ))),
            (d = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
              d,
              t,
              r("AdsUnifiedCreativeAPIFields").message,
              l,
              g,
            )));
        }
      });
      var h = f.index,
        y = f.rule,
        C = y.get("body_label"),
        b = _.set(
          h,
          y.set("body_label", r("immutable").Map(((c = {}), (c.name = g), c))),
        );
      if (
        ((d = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(b, d)),
        C != null)
      ) {
        var v;
        if (!(C instanceof r("immutable").Map))
          throw r("FBLogger")("am_feature_pac").mustfixThrow(
            "label field must be a map",
          );
        for (
          var S = C.get("name"),
            L = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
              (v = d.creative) == null || (v = v.asset_feed_spec) == null
                ? void 0
                : v.bodies,
              S,
              "text",
            ).index;
          typeof L == "number" && L >= 0;
        ) {
          var E,
            k = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
              d,
              t,
              r("AdsUnifiedCreativeAPIFields").message,
              L,
              "adlabels",
              S,
            ),
            I = k.adgroupWithIsolatedAsset,
            T = k.isolatedAssetIndex;
          ((d = r("AdsAdgroupRecordAccessors")
            .creative.asset_feed_spec.bodies.at(T)
            .delete(I)),
            (L = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
              (E = d.creative) == null || (E = E.asset_feed_spec) == null
                ? void 0
                : E.bodies,
              S,
              "text",
            ).index));
        }
      }
      return o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
        d,
        t,
        r("AdsUnifiedCreativeAPIFields").message,
        "adlabels",
      );
    }
    function p(t) {
      var n,
        a,
        i =
          (n = t.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules,
        l = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(e(i));
      if (l == null)
        return (
          r("FBLogger")("am_feature_pac").mustfix(
            "Default target rule must be present while adding text customization",
          ),
          null
        );
      var s = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getLabelNameFromTargetingRuleNullable(l, "body_label");
      if (typeof s != "string") return null;
      var u =
          (a = t.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.bodies,
        c = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(e(u), s, "text");
      return r("justknobx")._("5055")
        ? c == null || c.fieldValue == null || c.index == null
          ? null
          : { bodyText: c.fieldValue, index: c.index }
        : {
            bodyText: r("nullthrows")(
              c.fieldValue,
              "[PAC] Default rule should always have its body asset defined",
            ),
            index: r("nullthrows")(
              c.index,
              "[PAC] Default rule should always have its body asset defined",
            ),
          };
    }
    function _(t) {
      var n,
        a,
        i,
        l,
        s =
          (n = t.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules,
        u = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(e(s));
      if (u == null)
        return (
          r("FBLogger")("am_feature_pac").mustfix(
            "Default target rule must be present while adding text customization",
          ),
          r("immutable").List()
        );
      var c = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getLabelNameFromTargetingRuleNullable(u, "body_label");
      if (typeof c != "string") return r("immutable").List();
      var d =
        (a = t.creative) == null || (a = a.asset_feed_spec) == null
          ? void 0
          : a.bodies;
      return (i =
        (l = o("AdsAssetFeedFieldUtils").getAssetEntriesForLabel(
          e(d),
          "adlabels",
          c,
          "text",
        )) == null
          ? void 0
          : l.map(function (e) {
              var t = e.index;
              return t;
            })) != null
        ? i
        : r("immutable").List();
    }
    function f(e) {
      var t = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getDefaultRuleOrRuleWithMostPlacements(e);
      if (t == null) {
        r("FBLogger")("am_feature_pac").mustfix(
          "Default target rule must be present while adding text customization",
        );
        return;
      }
      return o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getLabelNameFromTargetingRuleNullable(t, "body_label");
    }
    function g(e, t) {
      var n,
        a =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.bodies;
      return (
        a && !r("immutable").List.isList(a) && (a = r("immutable").fromJS(a)),
        o("AdsAssetFeedFieldUtils").getDoFAssetEntriesForLabel(
          a,
          "adlabels",
          t,
          "text",
        )
      );
    }
    function h(t) {
      var n,
        r =
          (n = t.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules;
      if (r != null) {
        var o = f(e(r));
        return typeof o != "string" ? void 0 : g(t, o);
      }
    }
    function y(e) {
      var t = h(e);
      if (t != null) {
        var n = r("immutable").List();
        return (
          t.forEach(function (e) {
            if (e instanceof r("immutable").Map) {
              var t = e.get("text");
              t != null && (n = n.set(n.size, t));
            }
          }),
          n
        );
      }
    }
    function C(e, t, n) {
      var r = h(e);
      return r != null && r.count() > 0 ? u(e, t, n, r, !1, !1) : e;
    }
    function b(e, t, n) {
      var r = h(e);
      return r != null && r.count() > 0 ? u(e, t, n, r, !1, !0) : e;
    }
    function v(e, t, n, o, a) {
      var i,
        l,
        s =
          (i =
            (l = e.creative) == null || (l = l.asset_feed_spec) == null
              ? void 0
              : l.bodies) != null
            ? i
            : r("immutable").List(),
        u = s.get(o).update("adlabels", function (e) {
          var t;
          if (!(e instanceof r("immutable").List))
            throw r("FBLogger")(
              "ads_dynamic_creative_optimization",
            ).mustfixThrow("adlabels on title asset must be a list");
          return e.push(r("immutable").Map(((t = {}), (t.name = n), t)));
        });
      return (
        (s = s.splice(a + 1, 0, u)),
        (s = s.delete(o > a ? o + 1 : o)),
        r("AdsAdgroupSemanticFields").message.set(t, e, s)
      );
    }
    function S(e, t, n) {
      for (
        var a,
          i = e,
          l = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
            (a = i.creative) == null || (a = a.asset_feed_spec) == null
              ? void 0
              : a.bodies,
            n,
            "text",
          ).index;
        typeof l == "number" && l >= 0;
      ) {
        var s,
          u = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").message,
            l,
            "adlabels",
            n,
          ),
          c = u.adgroupWithIsolatedAsset,
          d = u.isolatedAssetIndex;
        ((i = r("AdsAdgroupRecordAccessors")
          .creative.asset_feed_spec.bodies.at(d)
          .delete(c)),
          (l = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
            (s = i.creative) == null || (s = s.asset_feed_spec) == null
              ? void 0
              : s.bodies,
            n,
            "text",
          ).index));
      }
      return i;
    }
    function R(e, t, n, a) {
      if (n == null) return e;
      var i = e;
      return (
        o(
          "AdsAssetFeedMutationUtils",
        ).PAC_DOF_TO_DOF_ALLOWED_BODY_ASSET_FIELDS.forEach(function (e) {
          var l = n.get(e);
          l != null &&
            (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              i,
              t,
              r("AdsUnifiedCreativeAPIFields").message,
              a,
              e,
              l,
            ));
        }),
        i
      );
    }
    function L(e, t, n) {
      (n === void 0 && (n = !1),
        e != null &&
          o(
            "AdsAssetFeedMutationUtils",
          ).PAC_DOF_TO_DOF_ALLOWED_BODY_ASSET_FIELDS.forEach(function (r) {
            if (!(r in t && !n)) {
              var o = e.get(r);
              o != null && typeof o == "string" && (t[r] = o);
            }
          }));
    }
    ((l.addPlacementCustomizationBody = u),
      (l.removePlacementCustomizationBody = c),
      (l.getDefaultPlacementBodyAssetAndIndex = p),
      (l.getDefaultPlacementBodyIndexes = _),
      (l.getDefaultBodyLabelFromTargetRules = f),
      (l.getBodyAssetsFromLabel = g),
      (l.getDefaultPlacementBodyAssets = h),
      (l.getDefaultPlacementBodyAssetsText = y),
      (l.copyDefaultPlacementBody = C),
      (l.copyDefaultPlacementBodies = b),
      (l.updateBodyAssetLabelsAtIndex = v),
      (l.removeAdlabelFromBodyAssetGivenAdlabel = S),
      (l.copyMessageFieldsToIndex = R),
      (l.copyMessageFieldsToFieldMap = L));
  },
  98,
);
