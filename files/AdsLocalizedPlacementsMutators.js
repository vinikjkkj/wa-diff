__d(
  "AdsLocalizedPlacementsMutators",
  [
    "invariant",
    "AdsAPITargetFields",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldToRuleLabelMapping",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsDLOConstantUtils",
    "AdsDLODefaultAssetConfig",
    "AdsDLOFieldToAdlabelsMapping",
    "AdsDLOLanguageUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsPlacementConstants",
    "AdsTargetingRuleUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "ApiDynamicCreativeOptimizationTypes",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.target_rules;
      if (n == null) return e;
      var a = n.map(function (e) {
        var t = e.get("targeting");
        return e.delete("targeting").set("customization_spec", t);
      });
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(a),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.target_rules
          .delete,
      )(e);
    }
    function u(e, t, n, a, i) {
      var l;
      if (!o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)) return e;
      var u = c(e);
      u = o("AdsAssetFeedUtils").setOptimizationType(
        u,
        r("ApiDynamicCreativeOptimizationTypes").LOCALIZED_PLACEMENTS,
      );
      var d;
      if (i != null) {
        var m = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: i,
          campaignGroup: t,
        });
        d = o("AdsODAXUtils").maybeTranslateObjective(
          t.objective,
          m,
          i.optimization_goal,
        );
      } else d = t.objective;
      var p = (l = u.creative) == null ? void 0 : l.asset_feed_spec,
        _ = null;
      return (
        o("AdsDLOConstantUtils").isSupportedOptionalLinksObjective(d) &&
          (_ = o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(u)),
        r("AdsDLODefaultAssetConfig").forEach(function (e, t) {
          if (e.isUsedForObjective(d, _, n, a)) {
            (p != null && p instanceof r("immutable").Record) || s(0, 13276);
            var o = p,
              i = o.get(t) || r("immutable").List();
            i.isEmpty() &&
              (p = o.set(
                t,
                i.push(
                  r("immutable").Map([[e.pathToUpdate, e.getDefaultValue(u)]]),
                ),
              ));
          }
        }),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(p, u)
      );
    }
    function c(e) {
      var t;
      if (!o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)) return e;
      var n = e.withMutations(function (t) {
          var n,
            o,
            a,
            i,
            l =
              (n = e.creative) == null || (n = n.asset_feed_spec) == null
                ? void 0
                : n.bodies;
          l != null &&
            l.size === 1 &&
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.set(
              l.update(0, function (e) {
                return e.delete("adlabels");
              }),
              t,
            );
          var s =
            (o = e.creative) == null || (o = o.asset_feed_spec) == null
              ? void 0
              : o.titles;
          s != null &&
            s.size === 1 &&
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles.set(
              s.update(0, function (e) {
                return e.delete("adlabels");
              }),
              t,
            );
          var u =
            (a = e.creative) == null || (a = a.asset_feed_spec) == null
              ? void 0
              : a.descriptions;
          u != null &&
            u.size === 1 &&
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.descriptions.set(
              u.update(0, function (e) {
                return e.delete("adlabels");
              }),
              t,
            );
          var c =
            (i = e.creative) == null || (i = i.asset_feed_spec) == null
              ? void 0
              : i.link_urls;
          c != null &&
            c.size === 1 &&
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.link_urls.set(
              c.update(0, function (e) {
                return e.delete("adlabels");
              }),
              t,
            );
        }),
        a =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.asset_customization_rules,
        i = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(a),
        l = o("AdsPlacementConstants").PLACEMENT_FIELD_TO_AD_SET_PATHS.keySeq(),
        s =
          a == null
            ? void 0
            : a.map(function (e) {
                if (!r("immutable").is(e, i)) return e;
                var t = e.get("customization_spec"),
                  n =
                    t instanceof r("immutable").Map ? t : r("immutable").Map();
                return (
                  l.forEach(function (e) {
                    n = n.delete(e);
                  }),
                  e
                    .delete("body_label")
                    .delete("title_label")
                    .delete("description_label")
                    .set("customization_spec", n)
                    .set("is_default", !0)
                );
              });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(s, n);
    }
    function d(e, t) {
      if (!o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e)) return e;
      var n = o("AdsAssetFeedUtils").getMediaTypeFromFormat(e);
      if (
        n == null ||
        o("AdsAssetFeedUtils").getDistinctMediaAssetCount(e, n) !== 1
      )
        return e;
      var a = o(
          "AdsPlacementAssetUtils",
        ).makeUniqueLabelNameForPlacementAsset(),
        i = o("AdsAssetFeedUtils").setOptimizationType(
          e,
          r("ApiDynamicCreativeOptimizationTypes").LOCALIZED_PLACEMENTS,
        );
      return ((i = m(i, t, n, a)), p(i, n, a));
    }
    function m(e, t, n, a) {
      return n === "images"
        ? o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
            e,
            t,
            r("AdsUnifiedCreativeAPIFields").imageHash,
            0,
            a,
          )
        : n === "videos"
          ? o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
              e,
              t,
              r("AdsUnifiedCreativeAPIFields").videoID,
              0,
              a,
            )
          : e;
    }
    function p(e, t, n) {
      var o,
        a =
          (o = e.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.asset_customization_rules;
      if (a == null) return e;
      var i = r("AdsAssetFeedFieldToRuleLabelMapping").get(t);
      if (i == null) return e;
      var l = a.map(function (e) {
        var t = e.get(i);
        if (t == null || !(t instanceof r("immutable").Map)) return e;
        var o = t.set("name", n);
        return e.set(i, o);
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(l, e);
    }
    function _(e, t, n, a) {
      var i;
      if (!o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(e))
        return e;
      var l =
        (i = e.creative) == null || (i = i.asset_feed_spec) == null
          ? void 0
          : i.asset_customization_rules;
      if (l == null) return e;
      var s = l.find(function (e) {
          return e.get("is_default") === !0;
        }),
        u = f(s, t),
        c = h(l, u, n, t, a);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(c, e);
    }
    function f(e, t) {
      var n = e.getIn([t, "name"]);
      return n == null ? null : (typeof n == "string" || s(0, 14664), n);
    }
    function g(e) {
      var t = e.reduce(function (e, t) {
        return (
          o("AdsTargetingRuleUtils").assertValidPositionForPlatform(
            t.position,
            t.platform,
          ),
          e
            .update("publisher_platforms", function (e) {
              return (e || r("immutable").Set()).add(t.platform);
            })
            .update(
              o("AdsTargetingRuleUtils").PLATFORMS_TO_TARGETING_POSITION_FIELDS[
                t.platform
              ],
              function (e) {
                return (e || r("immutable").Set()).add(t.position);
              },
            )
        );
      }, r("immutable").Map());
      return t.map(function (e) {
        return e.toList();
      });
    }
    function h(e, t, n, o, a) {
      var i = r("immutable").Map().set("name", n),
        l = e.filter(function (e) {
          return f(e, o) === t;
        }),
        s = l.map(function (e) {
          var t = e.getIn([
              "customization_spec",
              r("AdsAPITargetFields").LOCALES,
            ]),
            n = g(a).set(r("AdsAPITargetFields").LOCALES, t);
          return e.delete("is_default").set(o, i).set("customization_spec", n);
        });
      return y(e, s).concat(s);
    }
    function y(e, t) {
      var n = t.map(C).flatten().toSet();
      return e
        .map(function (e) {
          var t = C(e).flatten().toSet();
          if (t.size === 0) return e;
          var a = t.subtract(n).toArray();
          if (a.length === 0) return null;
          var i = e.getIn([
            "customization_spec",
            r("AdsAPITargetFields").LOCALES,
          ]);
          return e.set(
            "customization_spec",
            o("AdsPlacementAssetTargetingRuleUtils")
              .convertPlacementListToTargeting(
                o("AdsPlacementAssetUtils").getPlacementsFromAssetGroups(a),
              )
              .set(r("AdsAPITargetFields").LOCALES, i),
          );
        })
        .filter(Boolean);
    }
    function C(e) {
      var t = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).convertTargetingRuleToPlacementList(e);
      if (t.isEmpty()) return r("immutable").Set();
      var n = o("AdsPlacementAssetUtils").getAssetGroupsFromPlacements(t);
      return r("immutable").Set(n);
    }
    function b(e) {
      var t;
      if (!o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(e))
        return e;
      var n = (t = e.creative) == null ? void 0 : t.asset_feed_spec;
      if (n == null) return e;
      var a = n.asset_customization_rules;
      if (a == null) return e;
      var i = n;
      (i.images != null && (i = i.set("images", r("immutable").List())),
        i.videos != null && (i = i.set("videos", r("immutable").List())));
      var l = a.map(function (e) {
        return e.delete("image_label").delete("video_label");
      });
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
        i.set("asset_customization_rules", l),
        e,
      );
    }
    function v(e) {
      var t;
      if (!o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(e))
        return e;
      var n = o("AdsDLOLanguageUtils").getAddedLanguagesCountFromAdgroup(e);
      if (n > 0) return e;
      var a = (t = e.creative) == null ? void 0 : t.asset_feed_spec,
        i = a == null ? void 0 : a.asset_customization_rules;
      if (a == null || i == null) return e;
      var l = i.size,
        s = r("immutable").List(
          Array.from({ length: l }, function () {
            return o(
              "AdsPlacementAssetUtils",
            ).makeUniqueLabelNameForPlacementAsset();
          }),
        ),
        u = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e),
        c = S(i, s),
        d = R(a, u, s),
        m = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
          d.set("asset_customization_rules", c),
          e,
        );
      return o("AdsAssetFeedUtils").setOptimizationType(
        m,
        r("ApiDynamicCreativeOptimizationTypes").PLACEMENT,
      );
    }
    function S(e, t) {
      return e.map(function (e, n) {
        var o,
          a,
          i,
          l,
          u = e.delete("is_default"),
          c = e.get("customization_spec");
        (c != null && c instanceof r("immutable").Map) || s(0, 14442);
        var d = c.delete(r("AdsAPITargetFields").LOCALES);
        return (
          r("AdsAssetFeedFieldToRuleLabelMapping").forEach(function (e, t) {
            switch (e) {
              case "image_label":
              case "video_label":
                return;
              default:
                u = u.delete(e);
                return;
            }
          }),
          u.merge(
            ((l = {}),
            (l.customization_spec = d),
            (l.body_label = r("immutable").Map(
              ((o = {}), (o.name = t.get(n)), o),
            )),
            (l.title_label = r("immutable").Map(
              ((a = {}), (a.name = t.get(n)), a),
            )),
            (l.link_url_label = r("immutable").Map(
              ((i = {}), (i.name = t.get(n)), i),
            )),
            l),
          )
        );
      });
    }
    function R(e, t, n) {
      var o = n.map(function (e) {
          return r("immutable").Map().set("name", e);
        }),
        a = e;
      return (
        r("AdsDLOFieldToAdlabelsMapping").forEach(function (n, r) {
          if (!(r === "images" || r === "videos")) {
            var i = e.get(r);
            if (i != null) {
              var l = i.map(function (e, a) {
                var i;
                switch (r) {
                  case "bodies":
                  case "titles":
                  case "link_urls":
                    i = o;
                    break;
                  default:
                    i = e.get(n);
                }
                if (i == null) return e;
                var l = i.filter(function (e) {
                  return e.get("name") !== t;
                });
                return l.isEmpty() ? e.delete(n) : e.set(n, l);
              });
              a = a.set(r, l.isEmpty() ? void 0 : l);
            }
          }
        }),
        a
      );
    }
    ((l.convertTargetRulePACAdgroupToACR = e),
      (l.convertPACToLocalizedPlacementsAdgroup = u),
      (l.convertDLOToLocalizedPlacementsAdgroup = d),
      (l.addPlacementsToAssetCustomizationRules = _),
      (l.removeAllMediaInLocalizedPlacementsAdgroup = b),
      (l.convertLocalizedPlacementsToPAC = v));
  },
  98,
);
