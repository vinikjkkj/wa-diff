__d(
  "AdsPlacementAPISpecWriterUtils",
  [
    "AdsAPICampaignPaths",
    "AdsAPITargetFields",
    "AdsAutomaticPlacementMutationBehavior",
    "AdsCampaignRawSpecUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementConstants",
    "AdsPlacementDependentPlatformGatingUtils",
    "AdsPlacementEligibilityInfoUtils",
    "AdsPlacementPluginList",
    "AdsPlacementPositionGroupPluginList",
    "AdsPlacementSOOBundleGatingUtils",
    "AdsTargetingAccountControlInfoProvider",
    "AdsUEditorCampaignManualPlacementDependenciesUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsValidationConsts",
    "AdsWhatsAppPlacementUtils",
    "FBLogger",
    "WAMOStatusAdsManagerUtils",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "convertSoftOptOutPlacementsToPositionKeys",
    "immutable",
    "setUserAgeUnknownMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.filter(function (e) {
        return (
          e.isEnabled(t.capabilities, t.account) && !e.getIneligibilityReason(t)
        );
      });
    }
    function s(t, n) {
      return e(t.positions, n).map(function (e) {
        return e.apiPosition;
      });
    }
    function u(e, t, n) {
      return e.updateIn(
        ["targeting", r("AdsAPITargetFields").PUBLISHER_PLATFORMS],
        function (e) {
          var n = e ? e.toSet() : r("immutable").Set();
          return n.includes(t) ? n : n.add(t);
        },
      );
    }
    function c(e, t, n, o) {
      var a = s(t, n);
      return o
        ? r("immutable").Set(
            (e || []).filter(function (e) {
              return a.has(e);
            }),
          )
        : a;
    }
    function d(e, t, n, a, i, l) {
      var s,
        d,
        m,
        p = e,
        _ = o("AdsCampaignRawSpecUtils").handleAutomaticPlacementForCampaign(
          p,
          n,
          l,
        );
      if (_ === "JUST_RETURN") return p;
      p = _;
      var f = o("AdsPlacementPluginList")
        .getOrderedPlatforms(n)
        .find(function (e) {
          var n = e.apiPublisherPlatform;
          return n === t;
        });
      if (!f) return p;
      var g = f.apiPositionsTargetField
        ? f.apiPositionsTargetField(n.capabilities)
        : null;
      if (!g) return p;
      var h = u(p, t, n),
        C = c((s = h.targeting) == null ? void 0 : s.get(g), f, n, a);
      if (C.size === 0) return ((p = y(p, t, n, l)), p);
      p = h.updateIn(["targeting", g], function (e) {
        return C;
      });
      var b = r("AdsTargetingAccountControlInfoProvider")
          .toFluxStore()
          .getState()
          .get(p.account_id),
        v =
          (d =
            b == null ||
            (m = b.getValue()) == null ||
            (m = m.audience_controls) == null
              ? void 0
              : m.age_min) != null
            ? d
            : r("AdsValidationConsts").minWAMOStatusAge;
      return (
        t === "whatsapp" &&
          C.includes("status") &&
          o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForUnknownAge() &&
          v === r("AdsValidationConsts").minWAMOStatusAge &&
          (p = r("setUserAgeUnknownMutator")(p, !0)),
        p
      );
    }
    function m(e, t, n, o) {
      return (
        o === void 0 &&
          (o = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL),
        d(e, t, n, !1, !1, o)
      );
    }
    function p(e, t, n, o) {
      return (
        o === void 0 &&
          (o = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL),
        d(e, t, n, !0, !0, o)
      );
    }
    function _(e, t, n, a) {
      a === void 0 &&
        (a = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL);
      var i = e,
        l = o("AdsCampaignRawSpecUtils").handleAutomaticPlacementForCampaign(
          i,
          t,
          a,
        );
      return (
        l === "JUST_RETURN" ||
          ((i = l),
          o("AdsPlacementPluginList")
            .getOrderedPlatforms(t)
            .forEach(function (e) {
              var r = e.apiPositionsTargetField
                ? e.apiPositionsTargetField(t.capabilities)
                : null;
              if (r) {
                var o = e.apiPublisherPlatform;
                i = Array.from(
                  e.positions.filter(function (e) {
                    return e.isActive(t.spec);
                  }),
                ).reduce(function (e, a) {
                  return n.includes(a.key) ? e : k(e, a.key, t, r, o);
                }, i);
              }
            })),
        i
      );
    }
    function f(e, t, n) {
      n === void 0 &&
        (n = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL);
      var a = e.spec,
        i = o(
          "AdsCampaignRawSpecUtils",
        ).handleAutomaticPlacementForPlacementSpec(a, e, n);
      if (i === "JUST_RETURN") return a;
      a = i;
      var l = babelHelpers.extends({}, a);
      return (
        (l[r("AdsAPITargetFields").PUBLISHER_PLATFORMS] = [t]),
        o("AdsPlacementPluginList")
          .getOrderedPlatforms(e)
          .forEach(function (n) {
            var r = n.apiPositionsTargetField
              ? n.apiPositionsTargetField(e.capabilities)
              : null;
            n.apiPublisherPlatform !== t && r && delete l[r];
          }),
        l
      );
    }
    function g(e, t, n, a, i, l) {
      l === void 0 &&
        (l = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL);
      var s = e,
        u = o("AdsCampaignRawSpecUtils").handleAutomaticPlacementForCampaign(
          s,
          t,
          l,
        );
      if (u === "JUST_RETURN") return s;
      s = u;
      var c = o(
        "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
      ).convertCampaignRecordToPlacementSpec(s);
      return (
        c != null &&
          c[r("AdsAPITargetFields").PUBLISHER_PLATFORMS] != null &&
          c[r("AdsAPITargetFields").PUBLISHER_PLATFORMS].forEach(function (e) {
            s = y(s, e, t);
          }),
        S(s, n, t, a, i, l)
      );
    }
    function h(e, t, n, a, i, l) {
      l === void 0 &&
        (l = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL);
      var s = e,
        u = o("AdsCampaignRawSpecUtils").handleAutomaticPlacementForCampaign(
          s,
          t,
          l,
        );
      if (u === "JUST_RETURN") return s;
      s = u;
      var c = o(
        "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
      ).convertCampaignRecordToPlacementSpec(s);
      return (
        c != null &&
          c[r("AdsAPITargetFields").PUBLISHER_PLATFORMS] != null &&
          c[r("AdsAPITargetFields").PUBLISHER_PLATFORMS].forEach(function (e) {
            s = y(s, e, t);
          }),
        n.reduce(function (e, n) {
          return S(e, n, t, a, i, l);
        }, s)
      );
    }
    function y(e, t, n, a) {
      a === void 0 &&
        (a = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL);
      var i = C(e, t, n, a);
      return o(
        "AdsPlacementDependentPlatformGatingUtils",
      ).isOrphanedDependentPlatformRemovalEnabled()
        ? b(i, n, a)
        : i;
    }
    function C(e, t, n, a) {
      var i = e,
        l = o("AdsCampaignRawSpecUtils").handleAutomaticPlacementForCampaign(
          i,
          n,
          a,
        );
      if (l === "JUST_RETURN") return i;
      ((i = l),
        (i = i.updateIn(
          ["targeting", r("AdsAPITargetFields").PUBLISHER_PLATFORMS],
          function (e) {
            return !e || e.size === 0
              ? (r("FBLogger")("ads").warn(
                  "Trying to remove platform %s from empty platform list",
                  t,
                ),
                e)
              : e.toSet().delete(t);
          },
        )));
      var s = o("AdsPlacementPluginList")
        .getOrderedPlatforms(n)
        .find(function (e) {
          var n = e.apiPublisherPlatform;
          return n === t;
        });
      if (!s) return i;
      var u = s.apiPositionsTargetField
        ? s.apiPositionsTargetField(n.capabilities)
        : null;
      return u
        ? r("AdsCampaignRecordAccessors").targeting.set(
            i.targeting.delete(u),
            i,
          )
        : i;
    }
    function b(e, t, n) {
      for (
        var a = o(
            "AdsUEditorCampaignManualPlacementDependenciesUtils",
          ).getPlacementRequirementsChildtoParent(t.capabilities),
          i = o("AdsPlacementPluginList").getOrderedPlatforms(t),
          l = o(
            "AdsPlacementSOOBundleGatingUtils",
          ).isAccountEligibleForSOOExpansionBundle(t.objective)
            ? r("convertSoftOptOutPlacementsToPositionKeys")(t.softOptOutSpec)
            : new Set(),
          s = e,
          u = !0,
          c = function () {
            u = !1;
            var e = s.targeting.publisher_platforms;
            if (e == null || e.size === 0) return 1;
            var r = o(
                "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
              ).convertCampaignRecordToPlacementSpec(s),
              c = new Set();
            i.forEach(function (e) {
              e.positions.forEach(function (e) {
                e.isActive(r) && c.add(e.key);
              });
            });
            var d = function (t) {
                var e = a.get(t);
                return e == null
                  ? !1
                  : !e.some(function (e) {
                      return c.has(e) || l.has(e);
                    });
              },
              m = i.find(function (t) {
                if (!e.includes(t.apiPublisherPlatform)) return !1;
                var n = t.positions.filter(function (e) {
                  return c.has(e.key);
                });
                return (
                  n.size > 0 &&
                  n.every(function (e) {
                    return d(e.key);
                  })
                );
              });
            if (m != null) {
              var p = C(s, m.apiPublisherPlatform, t, n);
              p !== s && ((s = p), (u = !0));
            }
          };
        u && !c();
      );
      return s;
    }
    function v(e, t) {
      return o("AdsPlacementPluginList")
        .getPositions(t)
        .filter(function (n) {
          return (
            n.key === e &&
            n.isEnabled(t.capabilities, t.account) &&
            !n.getIneligibilityReason(t)
          );
        })
        .map(function (e) {
          return e.apiPosition;
        });
    }
    function S(e, t, n, a, i, l) {
      l === void 0 &&
        (l = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL);
      var s = e,
        c = o("AdsCampaignRawSpecUtils").handleAutomaticPlacementForCampaign(
          s,
          n,
          l,
        );
      if (c === "JUST_RETURN") return s;
      s = c;
      var d = v(t, n);
      return d.size === 0
        ? (r("FBLogger")("ads").warn(
            "Trying to add ineligible position: %s in %s",
            t,
            "AdsPlacementAPISpecWriterUtils::addGroup",
          ),
          s)
        : u(s, i, n).updateIn(["targeting", a], function (e) {
            var t = e ? e.toSet() : r("immutable").Set();
            return t.union(d);
          });
    }
    function R(e) {
      return o("AdsPlacementPluginList")
        .getAllPositions()
        .filter(function (t) {
          return t.key === e;
        })
        .map(function (e) {
          return e.apiPosition;
        });
    }
    function L(e, t, n, a, i, l) {
      var s;
      l === void 0 &&
        (l = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL);
      var u = e,
        c = o("AdsCampaignRawSpecUtils").handleAutomaticPlacementForCampaign(
          u,
          n,
          l,
        );
      if (c === "JUST_RETURN") return u;
      ((u = c),
        (u = u.updateIn(["targeting", a], function (e) {
          return !e || e.size === 0 ? e : e.toSet().subtract(R(t));
        })));
      var d = (s = u.targeting) == null ? void 0 : s.get(a);
      return !d || d.size === 0 ? y(u, i, n, l) : u;
    }
    function E(e, t, n) {
      return n !== r("AdsAPITargetFields").FACEBOOK_POSITIONS ||
        !o("AdsWhatsAppPlacementUtils").isWhatsAppDestinationEnabledAndSelected(
          t,
        )
        ? e
        : e.updateIn(["targeting", n], function (e) {
            return !e || e.includes("feed")
              ? e
              : e.toSet().filter(function (e) {
                  return !o(
                    "AdsWhatsAppPlacementUtils",
                  ).isCTWAFacebookPositionRequiringFeed(e);
                });
          });
    }
    function k(e, t, n, a, i, l) {
      var s;
      l === void 0 &&
        (l = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL);
      var u = e,
        c = o("AdsCampaignRawSpecUtils").handleAutomaticPlacementForCampaign(
          u,
          n,
          l,
        );
      if (c === "JUST_RETURN") return u;
      ((u = c),
        (u = u.updateIn(["targeting", a], function (e) {
          return !e || e.size === 0 ? e : e.toSet().subtract(v(t, n));
        })),
        (u = E(u, n, a)));
      var d = (s = u.targeting) == null ? void 0 : s.get(a);
      return !d || d.size === 0 ? y(u, i, n, l) : u;
    }
    function I(e, t, n) {
      return function (r, a) {
        var i = a.action.pluginKey === t && a.action.pluginType === e;
        return a.action.type ===
          o("AdsUEditorCampaignPlacementSetActionFlux").actionType || i
          ? n(r, a)
          : r;
      };
    }
    function T(e, t, n) {
      if (t(e)) {
        var r = n(e);
        if (r) return { reduce: I(e.type, e.key, r) };
      }
      return null;
    }
    function D(e, t, n, a) {
      a === void 0 &&
        (a = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL);
      var i = e,
        l = o("AdsCampaignRawSpecUtils").handleAutomaticPlacementForCampaign(
          i,
          t,
          a,
        );
      if (l === "JUST_RETURN") return i;
      i = l;
      var s = o(
          "AdsPlacementEligibilityInfoUtils",
        ).buildEligibilityInformationFromCampaignSpec(
          i,
          t.buyingType,
          t.capabilities,
          t.objective,
          t.accountBlockLists,
        ),
        u = o("AdsPlacementAPISpecReaderUtils").getDisabledDeviceTypes(s, n),
        c = r("immutable").Set(
          (s.spec[r("AdsAPITargetFields").USER_OS] || []).concat(
            s.spec[r("AdsAPITargetFields").USER_DEVICE] || [],
          ),
        );
      return c.intersect(u).size > 0
        ? o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").targeting.user_os.delete,
            r("AdsCampaignRecordAccessors").targeting.user_device.delete,
          )(i)
        : i;
    }
    function x(e, t) {
      return o("AdsPlacementConstants")
        .PLACEMENT_FIELD_TO_AD_SET_PATHS.valueSeq()
        .reduce(function (t, n) {
          if (
            n ===
            r("AdsAPICampaignPaths").TARGETING.INSTREAM_VIDEO_SKIPPABLE_EXCLUDED
          ) {
            var o = e.reduce(function (e, t) {
              var n;
              return (
                e === !0 ||
                ((n = t.targeting) == null
                  ? void 0
                  : n.instream_video_skippable_excluded)
              );
            }, !1);
            return r(
              "AdsCampaignRecordAccessors",
            ).targeting.instream_video_skippable_excluded.set(o, t);
          }
          var a = e.reduce(function (e, t) {
              return e.union(r("immutable").Set(t.getIn(n)));
            }, r("immutable").Set()),
            i = a.toList();
          return i.size > 0 && (!t.getIn(n) || !t.getIn(n).equals(i))
            ? t.setIn(n, i)
            : t;
        }, t);
    }
    function $(e, t, n) {
      n === void 0 &&
        (n = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL);
      var a = t,
        i = o(
          "AdsCampaignRawSpecUtils",
        ).handleAutomaticPlacementForPlacementSpec(a, e, n);
      if (i === "JUST_RETURN") return a;
      a = i;
      var l = babelHelpers.extends({}, a);
      return l;
    }
    function P(e, t, n) {
      n === void 0 &&
        (n = r("AdsAutomaticPlacementMutationBehavior").CONVERT_TO_MANUAL);
      var a = e,
        i = o("AdsCampaignRawSpecUtils").handleAutomaticPlacementForCampaign(
          a,
          t,
          n,
        );
      return (i === "JUST_RETURN" || (a = i), a);
    }
    function N(e, t) {
      return e.withMutations(
        o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").placement.set(
            r("immutable").fromJS(
              o(
                "AdsPlacementAPISpecReaderUtils",
              ).convertCampaignToPlacementSpec_LEGACY(e),
            ),
          ),
          r("AdsCampaignRecordAccessors").saved_audience_id.set(t),
        ),
      );
    }
    function M(t, n, r) {
      var o = e(r, n.eligibilityInformation);
      return o.reduce(function (e, t) {
        return t.adsetReducer != null
          ? t.adsetReducer(e, {
              action: babelHelpers.extends({}, n, { pluginKey: t.key }),
            })
          : e;
      }, t);
    }
    function w(t, n, a) {
      var i = o("AdsPlacementPositionGroupPluginList")
          .getOrderedPositionGroups(n.eligibilityInformation)
          .filter(function (e) {
            return !a.contains(e);
          }),
        l = i.reduce(function (e, t) {
          return e.concat(t.positions);
        }, r("immutable").OrderedSet()),
        s = e(l, n.eligibilityInformation);
      return s.reduce(function (e, t) {
        return t.adsetReducer != null
          ? t.adsetReducer(e, {
              action: babelHelpers.extends({}, n, {
                campaignIDs: n.ids || n.campaignIDs,
                pluginKey: t.key,
                type: o("AdsUEditorCampaignPlacementRemoveActionFlux")
                  .actionType,
              }),
            })
          : e;
      }, t);
    }
    ((l.addPublisherPlatform = m),
      (l.recomputePublisherPlatform = p),
      (l.keepOnlyCompatiblePlacements = _),
      (l.keepOnlyOnePublisherPlatformInPlacementSpec = f),
      (l.removeAllPlacementsExceptOneInCampaign = g),
      (l.removeAllPlacementsExceptSpecificOnesInCampaign = h),
      (l.removePublisherPlatform = y),
      (l.addGroup = S),
      (l.removeGroupAnyway = L),
      (l.removeGroup = k),
      (l.createMutator = T),
      (l.resetDevicesIfIneligible = D),
      (l.aggregateCampaignPlacementSpecs = x),
      (l.addAllElgiblePlatforms = $),
      (l.removeMessengerThreadPlacement = P),
      (l.updatePlacementSpec = N),
      (l.addOrRemovePositionGroup = M),
      (l.removeAllPositionGroupsExceptSpecifiedOnes = w));
  },
  98,
);
