__d(
  "AdsPlacementAssetTargetingRuleUtils",
  [
    "AdsAdAssetSelectorTypes",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsPlacementAssetEligibilityUtils",
    "AdsPlacementAssetUtils",
    "AdsTargetingRuleUtils",
    "FBLogger",
    "adsContainsAssetCustomizationPlacement",
    "adsIsPACSupportedForAdWithExistingPost",
    "immutable",
    "maxBy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").List([
      "post_label",
      "image_label",
      "video_label",
      "carousel_label",
    ]);
    function s(e) {
      var t = r("immutable").Map().asMutable(),
        n = function (n) {
          (o("AdsTargetingRuleUtils").assertValidPositionForPlatform(
            n.position,
            n.platform,
          ),
            t.update("publisher_platforms", function (e) {
              return (e || r("immutable").Set().asMutable()).add(n.platform);
            }),
            t.update(
              o("AdsTargetingRuleUtils").PLATFORMS_TO_TARGETING_POSITION_FIELDS[
                n.platform
              ],
              function (e) {
                return (e || r("immutable").Set().asMutable()).add(n.position);
              },
            ));
        };
      for (var a of e) n(a);
      return t
        .map(function (e) {
          return e.toList();
        })
        .asImmutable();
    }
    function u(e) {
      var t = [],
        n = function () {
          var n = e[a];
          if (n == null) return 1;
          var i = o("AdsTargetingRuleUtils")
            .TARGETING_POSITION_FIELDS_TO_PLATFORMS[a];
          r("immutable")
            .Set(n)
            .forEach(function (e) {
              if (typeof e != "string")
                throw r("FBLogger")("am_feature_pac").mustfixThrow(
                  "position must be a string",
                );
              t.push({ platform: i, position: e });
            });
        };
      for (var a of Object.keys(
        o("AdsTargetingRuleUtils").TARGETING_POSITION_FIELDS_TO_PLATFORMS,
      ))
        n();
      return t;
    }
    function c(e) {
      if (e == null) return [];
      var t = [],
        n = function () {
          var n = e instanceof r("immutable").Map ? e.get(a) : e[a];
          if (n == null || !(n instanceof r("immutable").List)) return 1;
          var i = o("AdsTargetingRuleUtils")
            .TARGETING_POSITION_FIELDS_TO_PLATFORMS[a];
          t = t.concat(
            n.toArray().map(function (e) {
              if (typeof e != "string")
                throw r("FBLogger")("am_feature_pac").mustfixThrow(
                  "position must be a string",
                );
              return { platform: i, position: e };
            }),
          );
        };
      for (var a of Object.keys(
        o("AdsTargetingRuleUtils").TARGETING_POSITION_FIELDS_TO_PLATFORMS,
      ))
        n();
      return t;
    }
    function d(e) {
      var t;
      return r("immutable").Map(((t = {}), (t.name = e), t));
    }
    function m(e, t, n, o, a) {
      var i = function (t) {
          return !r("adsContainsAssetCustomizationPlacement")(o, t);
        },
        l = ["url_change", "existing_post_url_change"],
        u = I(e),
        m = null;
      u != null && (m = h(u));
      var _ = !1,
        f = [],
        g = e
          .toArray()
          .map(function (e) {
            var t = h(e);
            if (t === m) return u;
            var r = c(p(e)).filter(i);
            if (
              (t === n && ((_ = !0), (r = r.concat(o.toArray()))),
              r.length === 0 && (a == null || !l.includes(a)))
            )
              return (f.push(t), null);
            if (a == null || !l.includes(a))
              return e.set("customization_spec", s(r));
            var d = c(p(e));
            return e.set("customization_spec", s(d));
          })
          .filter(Boolean);
      if (n !== m && !_ && (a == null || !l.includes(a))) {
        var y;
        g.push(
          r("immutable")
            .Map(((y = {}), (y[t] = d(n)), y))
            .set("customization_spec", s(o.toArray())),
        );
      }
      if (a != null && l.includes(a) && g.length < 2) {
        var C;
        g.push(
          r("immutable")
            .Map(((C = {}), (C[t] = d(n)), C))
            .set("customization_spec", s(o.toArray())),
        );
      }
      return {
        labelsRemoved: f,
        updatedTargetingRules: r("immutable").List(g),
      };
    }
    function p(e) {
      var t = e.get("customization_spec");
      if (t == null || (t instanceof r("immutable").Collection && t.isEmpty()))
        return r("immutable").Map();
      if (!(t instanceof r("immutable").Map))
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "targeting must be an Immutable.Map",
        );
      return t;
    }
    function _(e, t) {
      return !!e && e.get(t) != null;
    }
    function f(e, t) {
      return e.getIn([t, "name"]);
    }
    function g(e, t) {
      var n = f(e, t);
      if (typeof n != "string")
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "label name must be a string field",
        );
      return n;
    }
    function h(t) {
      var n = e.find(function (e) {
        return _(t, e);
      });
      return g(t, n);
    }
    function y(e) {
      var t, n;
      return (t =
        (n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.asset_customization_rules) != null
        ? t
        : null;
    }
    function C(e, t) {
      if (e == null) return null;
      var n = Array.from(v(e, t ? "body_label" : "title_label").keys());
      return r("immutable").List(
        n.map(function (e) {
          var t;
          return r("immutable").Map(((t = {}), (t.name = e), t));
        }),
      );
    }
    function b(e, t) {
      var n = y(e);
      return C(n, t);
    }
    function v(e, t, n) {
      return (
        n === void 0 && (n = !1),
        e == null
          ? r("immutable").Map()
          : e.reduce(function (e, r) {
              var o = N(r),
                a = f(r, t);
              if (a != null && !(n && o.isEmpty())) {
                var i = e.get(a),
                  l = i ? i.concat(o) : o;
                return e.set(a, l);
              }
              return e;
            }, r("immutable").Map())
      );
    }
    function S(t, n) {
      return (
        n === void 0 && (n = !1),
        t == null
          ? r("immutable").Map()
          : r("immutable")
              .Map()
              .withMutations(function (o) {
                r("nullthrows")(t).forEach(function (t) {
                  var r = N(t),
                    a = e.find(function (e) {
                      return _(t, e);
                    });
                  if (a != null) {
                    var i = g(t, a);
                    (n && r.isEmpty()) || o.set(i, r);
                  }
                });
              })
      );
    }
    function R(e, t) {
      var n = e.find(function (e) {
        return t === h(e);
      });
      if (n == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "Label wasn't found in targeting rules",
        );
      return _(n, "carousel_label")
        ? o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.carousel
        : _(n, "image_label")
          ? o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.image
          : _(n, "post_label")
            ? o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.post
            : o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.video;
    }
    function L(e, t) {
      return e == null
        ? r("immutable").List()
        : r("nullthrows")(e).map(function (e) {
            return g(e, t);
          });
    }
    function E(e) {
      return s(u(e));
    }
    function k(e) {
      return e.some(function (e) {
        return N(e).isEmpty();
      });
    }
    function I(e) {
      var t = e.find(function (e) {
        return e.get("is_default");
      });
      return t != null
        ? t
        : e.find(function (e) {
            return N(e).isEmpty();
          });
    }
    function T(e) {
      var t = e.find(function (e) {
        return e.is_default;
      });
      return t != null
        ? t
        : e.find(function (e) {
            return N(e).isEmpty();
          });
    }
    function D(e, t) {
      var n = x(e),
        r = o("AdsPlacementAssetUtils").getPlacementsFromAssetGroups(t),
        a = M(e, r);
      return a != null && a.rule !== n;
    }
    function x(e) {
      if (e == null) return null;
      var t = I(e);
      return (
        t ||
        r("maxBy")(e, function (e) {
          return N(e).size;
        })
      );
    }
    function $(e) {
      if (e == null) return null;
      var t = T(e);
      return (
        t ||
        r("maxBy")(e, function (e) {
          return N(e).size;
        })
      );
    }
    function P(e, t, n) {
      return (
        n === void 0 && (n = !1),
        k(e) && !n
          ? t != null
            ? t
            : r("immutable").List()
          : r("immutable").List(
              e.reduce(function (e, t) {
                var n = p(t);
                return e.concat(c(n));
              }, []),
            )
      );
    }
    function N(e) {
      var t = e instanceof r("immutable").Map ? p(e) : e.customization_spec,
        n = r("immutable").List(c(t));
      return n != null ? n : r("immutable").List();
    }
    function M(e, t) {
      var n = e.findIndex(function (e) {
          var n,
            o = N(e);
          return (n = r("immutable")).is(
            n.Set(n.fromJS(t.toJS())),
            n.Set(n.fromJS(o.toJS())),
          );
        }),
        o = n >= 0 ? e.get(n) : null;
      return o != null ? { rule: o, index: n } : null;
    }
    function w(e, t) {
      var n = e.findIndex(function (e) {
        var n = N(e).toJS(),
          o = r("immutable").Set(r("immutable").fromJS(t.toJS())),
          a = r("immutable").fromJS(n);
        return o.isSubset(a);
      });
      return n >= 0 ? { rule: e.get(n), index: n } : null;
    }
    function A(e, t) {
      return e == null
        ? r("immutable").List()
        : r("nullthrows")(e).filter(function (e) {
            return _(e, t);
          });
    }
    function F(e, t) {
      var n,
        a =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules;
      if (a == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "[PAC] TargetingRules should exist",
        );
      var i = a.first(),
        l = i.get("customization_spec"),
        u = c(l),
        d = u.filter(function (e) {
          return o(
            "AdsPlacementAssetEligibilityUtils",
          ).isEligiblePlacementForPlacementAssetCustomizationPhase2(e, t);
        }),
        m = s(d),
        p = i.set("customization_spec", m);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(a.set(0, p), e);
    }
    function O(e) {
      if (e.isEmpty() || k(e)) return e;
      var t = e.maxBy(function (e) {
          return N(e).size;
        }),
        n = e.delete(e.indexOf(t)),
        o = t.get("customization_spec");
      if (!(o instanceof r("immutable").Map))
        return (
          r("FBLogger")("am_feature_pac").mustfix(
            "Customization spec should be a Map when adding default rule",
          ),
          e
        );
      var a = [
          "facebook_positions",
          "instagram_positions",
          "messenger_positions",
          "audience_network_positions",
          "whatsapp_positions",
          "publisher_platforms",
          "device_platforms",
        ],
        i = a.reduce(function (e, t) {
          return e.delete(t);
        }, o);
      return n.push(t.set("customization_spec", i));
    }
    function B(e, t, n) {
      var o,
        a =
          (o = e.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.asset_customization_rules;
      if (a == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "[PAC] TargetingRules should exist",
        );
      var i = M(a, t);
      return i != null ? f(i.rule, n) : V(e, n);
    }
    function W(e) {
      var t = o("AdsPlacementAssetUtils").getAssetGroupsFromFormats(
          r("immutable").List([e]),
        ),
        n = o("AdsPlacementAssetUtils").getPlacementsFromAssetGroups(t);
      return n;
    }
    function q(e, t, n) {
      var r = W(t);
      return U(e, r, n);
    }
    function U(e, t, n) {
      var o,
        a =
          (o = e.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.asset_customization_rules;
      if (a == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "[PAC] TargetingRules should exist",
        );
      var i = w(a, t);
      return i != null ? f(i.rule, n) : V(e, n);
    }
    function V(e, t) {
      var n,
        o =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules;
      if (o == null)
        return (
          r("FBLogger")("am_feature_pac").mustfix(
            "[PAC] TargetingRules should exist",
          ),
          ""
        );
      var a = x(o);
      return a != null ? f(a, t) : "";
    }
    function H(e, t) {
      var n = x(e);
      return n != null ? f(n, t) : null;
    }
    function G(e, t) {
      var n,
        a = e.adgroup,
        i = e.campaign,
        l = e.campaignGroup,
        s = r("adsIsPACSupportedForAdWithExistingPost")(a)
          ? t && t.getValue()
          : a;
      if (
        s == null ||
        !o("AdsAssetFeedUtils").hasLanguageOrPlacementCustomizationFromRecord(s)
      )
        return null;
      var u =
        (n = s.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.asset_customization_rules;
      if (u == null) return null;
      var c = u.reduce(function (e, t) {
          return e.concat(N(t));
        }, r("immutable").List()),
        d = o("AdsPlacementAssetUtils").getAssetGroupsFromPlacements(c),
        m = o(
          "AdsPlacementAssetUtils",
        ).getCustomizationGroupInfoFromAdObjectList([
          { campaignGroup: l, campaign: i, adgroup: s },
        ]);
      if (m == null) return null;
      var p = m.assetGroups,
        _ = r("immutable").Set(p).subtract(d);
      return _.flatMap(function (e) {
        return o("AdsPlacementAssetUtils").getPlacementsFromAssetGroup(e);
      });
    }
    function z(e) {
      return e === "carousel"
        ? "carousel_label"
        : e === "image"
          ? "image_label"
          : e === "post"
            ? "post_label"
            : "video_label";
    }
    ((l.convertPlacementListToTargeting = s),
      (l.convertCampaignTargetingObjectToPlacementList = u),
      (l.movePlacementsInTargetingRules = m),
      (l.hasLabelFieldInRule = _),
      (l.getLabelNameFromTargetingRuleNullable = f),
      (l.getLabelNameFromTargetingRule = g),
      (l.getLabelNameFromAnyTargetingRuleMediaLabelField = h),
      (l.getAllLabelNamesFromAdgroup = b),
      (l.targetingRulesToLabelsPlacementListsMap = v),
      (l.targetingRulesToAnyMediaLabelsPlacementListsMap = S),
      (l.getMediaAssetTypeFromTargetRuleLabel = R),
      (l.targetingRulesToLabelsList = L),
      (l.campaignTargetingToTargetingRulesTargeting = E),
      (l.hasDefaultCoverage = k),
      (l.getDefaultTargetRule = I),
      (l.getDefaultTargetRule_RELAY = T),
      (l.hasCustomizationForAssetGroups = D),
      (l.getDefaultRuleOrRuleWithMostPlacements = x),
      (l.getDefaultRuleOrRuleWithMostPlacements_RELAY = $),
      (l.convertTargetingRulesListToPlacementList = P),
      (l.convertTargetingRuleToPlacementList = N),
      (l.getTargetingRuleHavingPlacementList = M),
      (l.getTargetingRuleContainingPlacementList = w),
      (l.targetingRuleByFieldsTypeFromTargetingRules = A),
      (l.filterOutPlacementsNotSupportedByPAC = F),
      (l.addDefaultPlacementToRules = O),
      (l.getLabelNameFromAssetCustomizationPlacement = B),
      (l.getPlacementsFromFormat = W),
      (l.getLabelNameFromLabelFieldAndPlacement = q),
      (l.getTargetRuleLabelFromLabelFieldAndPlacement = U),
      (l.getDefaultTargetRuleLabel = V),
      (l.getDefaultTargetRuleLabelFromTargetingRules = H),
      (l.computeDefaultRulePlacementsSet = G),
      (l.getTargetRuleFieldTypeFromFormat = z));
  },
  98,
);
