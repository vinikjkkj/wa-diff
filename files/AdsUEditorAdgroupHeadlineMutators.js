__d(
  "AdsUEditorAdgroupHeadlineMutators",
  [
    "invariant",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsInterfacesLogger",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a, i, l) {
      if (
        (l === void 0 && (l = !1),
        !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
      )
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "[PAC] This action should be called on an asset feed, after a video / image customization",
        );
      var s = e;
      if (!i) s = c(s, t, n, a, l);
      else {
        var d = a.get(0);
        if (typeof d == "string") {
          var m;
          d = r("immutable").Map(((m = {}), (m.text = d), m));
        }
        if (d == null)
          throw r("FBLogger")("am_feature_pac").mustfixThrow(
            "[PAC] First headline must exist",
          );
        s = u(s, t, n, d);
      }
      return s;
    }
    function u(e, t, n, a) {
      var i = d(e).index,
        l = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          e,
          t,
          r("AdsUnifiedCreativeAPIFields").headline,
          i,
          "text",
          a.get("text"),
        );
      return (
        (l = C(l, t, a, i)),
        o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
          l,
          t,
          r("AdsUnifiedCreativeAPIFields").headline,
          "adlabels",
        )
      );
    }
    function c(e, t, n, a, i) {
      var l,
        u,
        c,
        d = e,
        m =
          (l = e.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.titles,
        p = m != null ? m.size : 0,
        _ =
          (u = d.creative) == null || (u = u.asset_feed_spec) == null
            ? void 0
            : u.asset_customization_rules;
      if (_ == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "[PAC] TargetingRules should exist",
        );
      var f = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getTargetingRuleHavingPlacementList(_, n);
      if (f == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "[PAC] targeting rule with placementlist must exist, since this action will be fired only after an image / video has been customized for the same placement before",
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
              r("AdsUnifiedCreativeAPIFields").headline,
              l,
              "text",
              a,
            )),
            e instanceof r("immutable").Map && (d = C(d, t, e, l)),
            (d = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
              d,
              t,
              r("AdsUnifiedCreativeAPIFields").headline,
              l,
              g,
            )));
        }
      });
      var h = f.index,
        y = f.rule,
        b = y.get("title_label"),
        v = _.set(
          h,
          y.set("title_label", r("immutable").Map(((c = {}), (c.name = g), c))),
        );
      if (
        ((d = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(v, d)),
        b != null)
      ) {
        var S;
        if (!(b instanceof r("immutable").Map))
          throw r("FBLogger")("am_feature_pac").mustfixThrow(
            "[PAC] labelFieldToRemove has to be an Immutable.Map",
          );
        for (
          var R = b.get("name"),
            L = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
              (S = d.creative) == null || (S = S.asset_feed_spec) == null
                ? void 0
                : S.titles,
              R,
              "text",
            ).index;
          typeof L == "number" && L >= 0;
        ) {
          var E,
            k = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
              d,
              t,
              r("AdsUnifiedCreativeAPIFields").headline,
              L,
              "adlabels",
              R,
            ),
            I = k.adgroupWithIsolatedAsset,
            T = k.isolatedAssetIndex;
          ((d = r("AdsAdgroupRecordAccessors")
            .creative.asset_feed_spec.titles.at(T)
            .delete(I)),
            (L = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
              (E = d.creative) == null || (E = E.asset_feed_spec) == null
                ? void 0
                : E.titles,
              R,
              "text",
            ).index));
        }
      }
      return o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
        d,
        t,
        r("AdsUnifiedCreativeAPIFields").headline,
        "adlabels",
      );
    }
    function d(e) {
      var t,
        n,
        a = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(
          r("immutable").fromJS(
            (t = e.creative) == null || (t = t.asset_feed_spec) == null
              ? void 0
              : t.asset_customization_rules,
          ),
        );
      if (a == null)
        return (
          r("FBLogger")("am_feature_pac").mustfix(
            "[PAC] Default target rule must be present while adding text customization",
          ),
          { text: "", index: 0 }
        );
      var i = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getLabelNameFromTargetingRuleNullable(a, "title_label"),
        l = r("immutable").fromJS(
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.titles,
        ),
        s,
        u;
      if (i == null)
        ((s = o("AdsAssetFeedFieldUtils").getAssetAtIndex(l, "text", 0)),
          (u = 0));
      else {
        var c,
          d,
          m = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(l, i, "text");
        ((s = (c = m.fieldValue) != null ? c : ""),
          (u = (d = m.index) != null ? d : 0));
      }
      if (s == null || u == null)
        throw (
          r("AdsInterfacesLogger").log({
            eventName: "unhandled_js_exception",
            data: {
              adgroup_id: e.id,
              adgroup_spec: e,
              message: JSON.stringify(l),
              meta_message: JSON.stringify(a),
              event_source: "pac_field_value_and_index_should_exist",
            },
          }),
          r("FBLogger")("am_feature_pac").mustfixThrow(
            "[PAC] fieldValue and index should exist",
          )
        );
      return { text: s, index: u };
    }
    function m(e) {
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
      ).getLabelNameFromTargetingRuleNullable(t, "title_label");
    }
    function p(e, t) {
      var n,
        a =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.titles;
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
    function _(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.asset_customization_rules;
      if (
        (n && !r("immutable").List.isList(n) && (n = r("immutable").fromJS(n)),
        n != null)
      ) {
        var o = m(n);
        return typeof o != "string" ? void 0 : p(e, o);
      }
    }
    function f(e) {
      var t = _(e);
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
    function g(t, n, r) {
      var o = _(t);
      return o != null && o.count() > 0 ? e(t, n, r, o, !1) : t;
    }
    function h(t, n, r) {
      var o = _(t);
      return o != null && o.count() > 0 ? e(t, n, r, o, !1, !0) : t;
    }
    function y(e, t, n) {
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
    function C(e, t, n, a) {
      if (n == null) return e;
      var i = e;
      return (
        o(
          "AdsAssetFeedMutationUtils",
        ).PAC_DOF_TO_DOF_ALLOWED_TITLE_ASSET_FIELDS.forEach(function (e) {
          var l = n.get(e);
          l != null &&
            (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              i,
              t,
              r("AdsUnifiedCreativeAPIFields").headline,
              a,
              e,
              l,
            ));
        }),
        i
      );
    }
    function b(e, t) {
      e != null &&
        o(
          "AdsAssetFeedMutationUtils",
        ).PAC_DOF_TO_DOF_ALLOWED_TITLE_ASSET_FIELDS.forEach(function (n) {
          if (!(n in t)) {
            var r = e.get(n);
            r != null && typeof r == "string" && (t[n] = r);
          }
        });
    }
    ((l.addPlacementCustomizationHeadline = e),
      (l.getDefaultPlacementHeadlineAssetAndIndex = d),
      (l.getHeadlineAssetsFromLabel = p),
      (l.getDefaultPlacementHeadlineAssets = _),
      (l.getDefaultPlacementHeadlineAssetsText = f),
      (l.copyDefaultPlacementHeadline = g),
      (l.copyDefaultPlacementHeadlines = h),
      (l.removeAdlabelFromHeadlineAssetGivenAdlabel = y),
      (l.copyHeadlineFieldsToIndex = C),
      (l.copyHeadlineFieldsToFieldMap = b));
  },
  98,
);
