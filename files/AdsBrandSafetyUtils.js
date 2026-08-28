__d(
  "AdsBrandSafetyUtils",
  [
    "AdsAppUtils",
    "AdsBrandSafetyContentFilterLevel",
    "AdsBrandSafetyContentFilterLevelConstants",
    "AdsBrandSafetyContentTypeExclusionFBInstreamReelsNonPartnerPlugin",
    "AdsBrandSafetyContentTypeExclusionFBReelsNonPartnerPlugin",
    "AdsBrandSafetyContentTypeExclusionInstreamLivePlugin",
    "AdsBrandSafetyContentTypeExclusionInstreamNonPartnerPlugin",
    "AdsBulkValueUtils",
    "AdsEmptyValue",
    "AdsMixedValue",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAdvancedOptionsUtils",
    "AdsPlacementConstants",
    "AdsPlacementMobileFeedOptions",
    "AdsPlacementTokenizerUtils",
    "AdsPlacementUIUtils",
    "AdsPlacementsFacebookReelsOverlayPositionPlugin",
    "AdsUniformValue",
    "AdsUserDeviceTypes",
    "BizSiteIdentifier.brands",
    "XBrandSafetyRootControllerRouteBuilder",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "adsPlacementAPISpecReaderIsActiveInstagramPosition",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
    "filterNulls",
    "immutable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        getMobileAdvancedOptionsUISpec: function (t) {
          var e = t.infoMap,
            n = t.rfVideoFlag,
            a = t.directInstallEligible,
            i = t.campaignNameMap,
            l = i === void 0 ? r("immutable").Map() : i,
            s = t.isIOS14CampaignGroup,
            u = Array.from(e.values());
          if (
            u.some(function (e) {
              return !o("AdsPlacementUIUtils").shouldSurfaceMobileOptions(e);
            })
          )
            return null;
          var c = u.every(function (e) {
              var t = e.objective,
                n = e.promotedObjectType;
              return r("AdsAppUtils").isAppObjective(t, n);
            })
              ? "standalone"
              : "advancedOptions",
            d = o("AdsPlacementAdvancedOptionsUtils").getMobileDeviceTypes(
              u,
              n,
              a,
            ),
            m =
              u[0] != null
                ? o("AdsPlacementUIUtils").getMobileOptionsDisplayMode(u[0])
                : r("AdsPlacementMobileFeedOptions").ADVANCED,
            p = d.value !== r("AdsUserDeviceTypes").ALL;
          return {
            deviceTypes: d,
            disabled: u.some(function (e) {
              return o("AdsPlacementUIUtils").isMobileOptionsDisabled(e);
            }),
            hasSelectedValue: p,
            granularDevices: o(
              "AdsPlacementAdvancedOptionsUtils",
            ).getMobileGranularDevices(e, l),
            excludedGranularDevices: o(
              "AdsPlacementAdvancedOptionsUtils",
            ).getMobileExcludedGranularDevices(e, l),
            mode: m,
            osVersion: o(
              "AdsPlacementAdvancedOptionsUtils",
            ).getMobileDeviceTypeVersionConfig(u, s),
            position: c,
            wifiOnly: o("AdsPlacementAdvancedOptionsUtils").getMobileWifiOnly(
              u,
            ),
          };
        },
        composeMobileAdvancedOptionsSpec: function (t) {
          var e = t.bulkEditDeviceTypesLink,
            n = t.bulkEditOsVersionLink,
            r = t.mobileDevicesDataSpec,
            o = t.onChangeDeviceType,
            a = t.onChangeExcludedGranularDevices,
            i = t.onChangeGranularDevices,
            l = t.onChangeMaxVersion,
            s = t.onChangeMinVersion,
            u = t.onChangeWiFiOnly,
            c = t.onExpandAdvancedOptionDevice;
          if (r == null) return null;
          var d = r.deviceTypes,
            m = r.excludedGranularDevices,
            p = r.granularDevices,
            _ = r.osVersion,
            f = r.wifiOnly;
          return babelHelpers.extends({}, r, {
            deviceTypes: babelHelpers.extends({}, d, {
              bulkEditLink: e,
              onChange: o,
            }),
            granularDevices: babelHelpers.extends({}, p, { onChange: i }),
            excludedGranularDevices: babelHelpers.extends({}, m, {
              onChange: a,
            }),
            osVersion:
              _ != null
                ? babelHelpers.extends({}, _, {
                    onChangeMaxVersion: l,
                    onChangeMinVersion: s,
                    bulkEditLink: n,
                  })
                : null,
            wifiOnly: babelHelpers.extends({}, f, { onChange: u }),
            onExpand: c,
          });
        },
        getHasChangedContentSeverityLevels: function (t, n) {
          return (
            n === void 0 && (n = !1),
            n
              ? o(
                  "AdsPlacementConstants",
                ).PLACEMENT_DEFAULT_BRAND_SAFETY_CONTENT_FILTER_LEVELS_WITH_FEED.some(
                  function (e) {
                    return (
                      t.brand_safety_content_filter_levels &&
                      !t.brand_safety_content_filter_levels.includes(e)
                    );
                  },
                )
              : o(
                  "AdsPlacementConstants",
                ).PLACEMENT_DEFAULT_BRAND_SAFETY_CONTENT_FILTER_LEVELS.some(
                  function (e) {
                    return (
                      t.brand_safety_content_filter_levels &&
                      !t.brand_safety_content_filter_levels.includes(e)
                    );
                  },
                )
          );
        },
        getHasSelectedNonDefaultValue: function (t, n, a, i) {
          var e = o(
              "AdsBrandSafetyContentFilterLevel",
            ).getFBDefaultContextualContentFilterLevel(),
            l = o(
              "AdsBrandSafetyContentFilterLevel",
            ).getANDefaultContextualContentFilterLevel(),
            s = o(
              "AdsBrandSafetyContentFilterLevel",
            ).DEFAULT_ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL;
          i &&
            ((e = null),
            (l = null),
            (s = o("AdsBrandSafetyContentFilterLevelConstants")
              .ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL.FEED_STRICT));
          var u =
              t != null &&
              (t instanceof r("AdsMixedValue") ||
                (t instanceof r("AdsUniformValue") && t.getValue() !== e)),
            c =
              n != null &&
              (n instanceof r("AdsMixedValue") ||
                (n instanceof r("AdsUniformValue") && n.getValue() !== l)),
            d =
              a != null &&
              (a instanceof r("AdsMixedValue") ||
                (a instanceof r("AdsUniformValue") && a.getValue() !== s));
          return u || c || d;
        },
        getBrandSafetyContentFilterLevelsUISpec: function (t, n, a, i, l) {
          (i === void 0 && (i = !1), l === void 0 && (l = !1));
          var e = t.toArray(),
            s = u.parseBrandSafetyContentFilterInheritedLevels(n, a, i || l),
            c = e.some(function (e) {
              return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
                e.spec,
                "instream_video",
              );
            }),
            d = e.some(function (e) {
              return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
                e.spec,
                "audience_network",
              );
            }),
            m = e.some(function (e) {
              return r(
                "AdsPlacementsFacebookReelsOverlayPositionPlugin",
              ).isActive(e.spec);
            }),
            p = e.some(function (e) {
              return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
                e.spec,
                "feed",
              );
            }),
            _ = e.some(function (e) {
              return r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
                e.spec,
                "stream",
              );
            }),
            f = e.some(function (e) {
              return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
                e.spec,
                "facebook_reels",
              );
            }),
            g = e.some(function (e) {
              return r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
                e.spec,
                "reels",
              );
            }),
            h = e.some(function (e) {
              return o(
                "AdsPlacementAPISpecReaderUtils",
              ).isActiveThreadsPosition(e.spec, "threads_stream");
            }),
            y = e.some(function (e) {
              return r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
                e.spec,
                "reels_overlay",
              );
            }),
            C = p || _,
            b = f || g,
            v;
          (c || m || y) &&
            ((v = o("AdsBulkValueUtils").aggregate(
              e.map(function (e) {
                var t = u.getBrandSafetyContentFilterFBLevelOrDefault(
                  e.spec.brand_safety_content_filter_levels,
                );
                return s.fb.allowedValues.includes(t)
                  ? t
                  : s.fb.allowedValues[0];
              }),
            )),
            v instanceof r("AdsEmptyValue") && (v = null));
          var S;
          d &&
            ((S = o("AdsBulkValueUtils").aggregate(
              e.map(function (e) {
                var t = u.getBrandSafetyContentFilterANLevelOrDefault(
                  e.spec.brand_safety_content_filter_levels,
                );
                return s.an.allowedValues.includes(t)
                  ? t
                  : s.an.allowedValues[0];
              }),
            )),
            S instanceof r("AdsEmptyValue") && (S = null));
          var R,
            L = (C && i) || (b && i) || (h && l);
          L &&
            ((R = o("AdsBulkValueUtils").aggregate(
              e.map(function (e) {
                var t = u.getBrandSafetyInventoryFilterFeedLevelOrDefault(
                  e.spec.brand_safety_content_filter_levels,
                );
                return s.feed && !s.feed.allowedValues.includes(t)
                  ? s.feed.allowedValues[0]
                  : t;
              }),
            )),
            R instanceof r("AdsEmptyValue") && (R = null));
          var E =
              S != null &&
              (v == null ||
                v instanceof r("AdsMixedValue") ||
                S instanceof r("AdsMixedValue") ||
                (v instanceof r("AdsUniformValue") &&
                  !(v instanceof r("AdsEmptyValue")) &&
                  S instanceof r("AdsUniformValue") &&
                  o(
                    "AdsBrandSafetyContentFilterLevel",
                  ).getANEquivalentOfFBContentFilterLevel(v.getValue()) !==
                    S.getValue())),
            k = e.some(function (e) {
              return e.isReelsTrendingAds === !0;
            }),
            I = u.getHasSelectedNonDefaultValue(v, S, R, k);
          return i || l
            ? {
                disabled: o("AdsBulkValueUtils").aggregate(
                  e.map(function (e) {
                    return o("AdsPlacementUIUtils").isContentFilteringDisabled(
                      e,
                    );
                  }),
                ),
                feedDisabled: o("AdsBulkValueUtils").aggregate(
                  e.map(function (e) {
                    return o(
                      "AdsPlacementUIUtils",
                    ).isFeedInventoryFilterDisabled(e);
                  }),
                ),
                campaignIDs: new (r("AdsMixedValue"))(t.keySeq().toArray()),
                levelFacebook:
                  v != null && !(v instanceof r("AdsEmptyValue"))
                    ? babelHelpers.extends(
                        { shouldExpandByDefault: !0, isDisabled: !1, value: v },
                        s.fb,
                      )
                    : babelHelpers.extends(
                        {
                          shouldExpandByDefault: !0,
                          isDisabled: !0,
                          value: null,
                        },
                        s.fb,
                      ),
                levelAN:
                  S != null && !(S instanceof r("AdsEmptyValue"))
                    ? babelHelpers.extends(
                        { shouldExpandByDefault: E, isDisabled: !1, value: S },
                        s.an,
                      )
                    : babelHelpers.extends(
                        {
                          shouldExpandByDefault: E,
                          isDisabled: !0,
                          value: null,
                        },
                        s.an,
                      ),
                levelFeed:
                  s.feed != null
                    ? R != null && !(R instanceof r("AdsEmptyValue"))
                      ? babelHelpers.extends(
                          {
                            shouldExpandByDefault: !0,
                            isDisabled: !1,
                            value: R,
                          },
                          s.feed,
                        )
                      : babelHelpers.extends(
                          {
                            shouldExpandByDefault: !0,
                            isDisabled: !0,
                            value: null,
                          },
                          s.feed,
                        )
                    : null,
                hasSelectedNonDefaultValue: I,
              }
            : {
                disabled: o("AdsBulkValueUtils").aggregate(
                  e.map(function (e) {
                    return o("AdsPlacementUIUtils").isContentFilteringDisabled(
                      e,
                    );
                  }),
                ),
                campaignIDs: new (r("AdsMixedValue"))(t.keySeq().toArray()),
                levelFacebook:
                  v != null && !(v instanceof r("AdsEmptyValue"))
                    ? babelHelpers.extends(
                        { shouldExpandByDefault: !0, isDisabled: !1, value: v },
                        s.fb,
                      )
                    : babelHelpers.extends(
                        {
                          shouldExpandByDefault: !0,
                          isDisabled: !0,
                          value: null,
                        },
                        s.fb,
                      ),
                levelAN:
                  S != null && !(S instanceof r("AdsEmptyValue"))
                    ? babelHelpers.extends(
                        { shouldExpandByDefault: E, isDisabled: !1, value: S },
                        s.an,
                      )
                    : babelHelpers.extends(
                        {
                          shouldExpandByDefault: E,
                          isDisabled: !0,
                          value: null,
                        },
                        s.an,
                      ),
                hasSelectedNonDefaultValue: I,
              };
        },
        parseBrandSafetyContentFilterInheritedLevels: function (t, n, r) {
          var e = u.getBrandSafetyContentFilterFBLevel(t),
            a = u.getBrandSafetyContentFilterANLevel(t),
            i = n == null ? void 0 : n.facebook_level,
            l = n == null ? void 0 : n.an_level,
            s = u.getBrandSafetyInventoryFilterFeedLevel(t),
            c = u.filterBrandSafetyContentFilterByMaxLevel(
              o(
                "AdsBrandSafetyContentFilterLevel",
              ).ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVELS.slice(),
              [i, e],
            ),
            d = u.filterBrandSafetyContentFilterByMaxLevel(
              o(
                "AdsBrandSafetyContentFilterLevel",
              ).ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVELS.slice(),
              [l, a],
            ),
            m = u.filterBrandSafetyContentFilterByMaxLevel(
              o(
                "AdsBrandSafetyContentFilterLevel",
              ).ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVELS.slice(),
              [s],
            );
          return r
            ? {
                fb: { adAccountValue: e, businessValue: i, allowedValues: c },
                an: { adAccountValue: a, businessValue: l, allowedValues: d },
                feed: {
                  adAccountValue: s,
                  businessValue: null,
                  allowedValues: m,
                },
              }
            : {
                fb: { adAccountValue: e, businessValue: i, allowedValues: c },
                an: { adAccountValue: a, businessValue: l, allowedValues: d },
              };
        },
        filterBrandSafetyContentFilterByMaxLevel: function (t, n) {
          var e = n.reduce(function (e, n) {
            return Math.max(e, n != null ? t.indexOf(n) : -1);
          }, -1);
          return e > -1 ? t.slice(e) : t;
        },
        getMostRestrictiveBrandSafetyContentFilterLevel: function (t, n) {
          var e = n.reduce(function (e, n) {
            return Math.max(e, n != null ? t.indexOf(n) : -1);
          }, -1);
          if (e > -1) return t.at(e);
        },
        getEffectiveBrandSafetyInventoryFilterLevels: function (t, n) {
          var e = u.getBrandSafetyContentFilterFBLevel(
              t == null ? void 0 : t.brand_safety_content_filter_levels,
            ),
            a = u.getBrandSafetyContentFilterFBLevel(
              n == null ? void 0 : n.brand_safety_content_filter_levels,
            );
          e != null &&
            a != null &&
            (a = u.getMostRestrictiveBrandSafetyContentFilterLevel(
              o(
                "AdsBrandSafetyContentFilterLevel",
              ).ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVELS.slice(),
              [e, a],
            ));
          var i = u.getBrandSafetyContentFilterANLevel(
              t == null ? void 0 : t.brand_safety_content_filter_levels,
            ),
            l = u.getBrandSafetyContentFilterANLevel(
              n == null ? void 0 : n.brand_safety_content_filter_levels,
            );
          i != null &&
            l != null &&
            (l = u.getMostRestrictiveBrandSafetyContentFilterLevel(
              o(
                "AdsBrandSafetyContentFilterLevel",
              ).ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVELS.slice(),
              [i, l],
            ));
          var s = u.getBrandSafetyInventoryFilterFeedLevel(
              t == null ? void 0 : t.brand_safety_content_filter_levels,
            ),
            c = u.getBrandSafetyInventoryFilterFeedLevel(
              n == null ? void 0 : n.brand_safety_content_filter_levels,
            );
          return (
            s != null &&
              c != null &&
              (c = u.getMostRestrictiveBrandSafetyContentFilterLevel(
                o(
                  "AdsBrandSafetyContentFilterLevel",
                ).ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVELS.slice(),
                [s, c],
              )),
            r("filterNulls")([a, l, c])
          );
        },
        getBrandSafetyContentFilterANLevel: function (t) {
          return t != null
            ? o(
                "AdsBrandSafetyContentFilterLevel",
              ).ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVELS.find(function (e) {
                return t.includes(e);
              })
            : null;
        },
        getBrandSafetyContentFilterANLevelOrDefault: function (t) {
          var e = u.getBrandSafetyContentFilterANLevel(t);
          return e != null
            ? e
            : o(
                "AdsBrandSafetyContentFilterLevel",
              ).getANDefaultContextualContentFilterLevel();
        },
        getBrandSafetyContentFilterFBLevel: function (t) {
          return t != null
            ? o(
                "AdsBrandSafetyContentFilterLevel",
              ).ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVELS.find(
                function (e) {
                  return t.includes(e);
                },
              )
            : null;
        },
        getBrandSafetyContentFilterFBLevelOrDefault: function (t) {
          var e = u.getBrandSafetyContentFilterFBLevel(t);
          return e != null
            ? e
            : o(
                "AdsBrandSafetyContentFilterLevel",
              ).getFBDefaultContextualContentFilterLevel();
        },
        getBrandSafetyInventoryFilterFeedLevelOrDefault: function (t) {
          var e = u.getBrandSafetyInventoryFilterFeedLevel(t);
          return e != null
            ? e
            : o("AdsBrandSafetyContentFilterLevel")
                .DEFAULT_ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL;
        },
        getBrandSafetyInventoryFilterFeedLevel: function (t) {
          return t != null
            ? o(
                "AdsBrandSafetyContentFilterLevel",
              ).ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVELS.find(
                function (e) {
                  return t.includes(e);
                },
              )
            : null;
        },
        getInstreamVideoSkippableExcludedUISpec: function (t) {
          return {
            disabled: o("AdsBulkValueUtils").aggregate(
              t.map(function (e) {
                return o(
                  "AdsPlacementUIUtils",
                ).isInstreamVideoSkippableExclusionDisabled(e);
              }),
            ),
            value: o("AdsBulkValueUtils").aggregate(
              t.map(function (e) {
                return !!(e.spec && e.spec.instream_video_skippable_excluded);
              }),
            ),
          };
        },
        getBaSkipDelayedEligibledUISpec: function (t, n) {
          return {
            disabled: o("AdsBulkValueUtils").aggregate([!n]),
            value: o("AdsBulkValueUtils").aggregate(
              t.map(function (e) {
                return n && !!(e && e.isBaSkipDelayedEligible);
              }),
            ),
          };
        },
        getInstreamContextualTargetingCategoriesUISpec: function (t, n, a) {
          var e = t.map(function (e) {
            return e.spec && e.spec.contextual_targeting_categories
              ? e.spec.contextual_targeting_categories
              : [];
          });
          return {
            disabled: o("AdsBulkValueUtils").aggregate(
              t.map(function (e) {
                return o(
                  "AdsPlacementUIUtils",
                ).isInstreamContextualTargetingCategoriesDisabled(e);
              }),
            ),
            value: new (r("AdsMixedValue"))(e),
            potentialReach: n,
            potentialReachLoading: a,
          };
        },
        getBrandSafetyContentTypeExclusionUISpec: function (t, n, a) {
          var e = [
              r("AdsBrandSafetyContentTypeExclusionInstreamLivePlugin"),
              r("AdsBrandSafetyContentTypeExclusionInstreamNonPartnerPlugin"),
              r("AdsBrandSafetyContentTypeExclusionFBReelsNonPartnerPlugin"),
              r(
                "AdsBrandSafetyContentTypeExclusionFBInstreamReelsNonPartnerPlugin",
              ),
            ],
            i = r("immutable").OrderedSet(e),
            l = i.map(function (e) {
              return {
                label: e.label,
                isEnabled: e.isEnabled(a, n),
                isSetAtAccountLevel: e.isSetAtAccountLevel(a),
                id: e.id,
                selectionStatus: e.isSelected(t, n, a),
                isCampaignLevelEditSupported: e.isCampaignLevelEditSupported,
              };
            }),
            s = i.some(function (e) {
              return e.hasUserSelectedValue(t, n, a);
            });
          return {
            disabled: o("AdsBulkValueUtils").aggregate(
              t.map(function (e) {
                return o("AdsPlacementUIUtils").isContentTypeExclusionDisabled(
                  e,
                );
              }),
            ),
            contentTypes: l,
            hasUserSelectedValue: s,
            shouldExpandByDefault: !0,
            isContentFilteringSetToFBStrict: t.some(function (e) {
              return o(
                "AdsPlacementUIUtils",
              ).isContentFilteringSetToFacebookStrict(e);
            }),
          };
        },
        getNextCampaignContentFilterRecord: function (
          t,
          n,
          a,
          i,
          l,
          s,
          c,
          d,
          m,
        ) {
          m === void 0 && (m = !1);
          var e = [];
          if (n || a || i || l || s) {
            var p = t.targeting.brand_safety_content_filter_levels,
              _ = u.getBrandSafetyContentFilterANLevel(p),
              f = u.getBrandSafetyContentFilterFBLevel(p),
              g = u.getBrandSafetyInventoryFilterFeedLevel(p);
            (n &&
              (f != null
                ? e.push(f)
                : _ != null
                  ? e.push(
                      o(
                        "AdsBrandSafetyContentFilterLevel",
                      ).getFBEquivalentOfANContentFilterLevel(_),
                    )
                  : e.push(
                      o(
                        "AdsBrandSafetyContentFilterLevel",
                      ).getFBDefaultContextualContentFilterLevel(),
                    )),
              a &&
                (_ != null
                  ? e.push(_)
                  : f != null
                    ? e.push(
                        o(
                          "AdsBrandSafetyContentFilterLevel",
                        ).getANEquivalentOfFBContentFilterLevel(f),
                      )
                    : e.push(
                        o(
                          "AdsBrandSafetyContentFilterLevel",
                        ).getANDefaultContextualContentFilterLevel(),
                      )));
            var h = (i && c) || (l && (c || m)) || (s && d);
            h &&
              (g != null
                ? e.push(g)
                : e.push(
                    o("AdsBrandSafetyContentFilterLevel")
                      .DEFAULT_ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL,
                  ));
          }
          return r("immutable").List(e);
        },
        getBlockListsUISpec: function (t, n, a) {
          if (
            t.every(function (e) {
              return !o("AdsPlacementUIUtils").shouldSurfaceBlockList(e, n);
            })
          )
            return null;
          var e = o("BizSiteIdentifier.brands").getBusinessID(),
            i = r("XBrandSafetyRootControllerRouteBuilder").buildUri({
              act: e == null ? n : void 0,
              business_id: e != null ? e : void 0,
              nav_source: "campaign",
              page: "block_lists",
            }),
            l =
              e != null
                ? { id: e, type: "BUSINESS" }
                : { id: n, type: "AD_ACCOUNT" },
            s = t.map(function (e) {
              return r("immutable").Set(e.spec.excluded_publisher_list_ids);
            }),
            u = o("AdsPlacementTokenizerUtils").composeCampaignMap(
              s,
              a || r("immutable").Map(),
            ),
            c = Array.from(u.keys()),
            d = c.length > 0,
            m = o("AdsBulkValueUtils").aggregate(
              Array.from(t.values()).map(function (e) {
                return o("AdsPlacementUIUtils").isBlockListDisabled(e);
              }),
            ),
            p =
              o("AdsBulkValueUtils").aggregate(
                Array.from(t.values()).map(function (e) {
                  return e.spec.excluded_publisher_list_ids;
                }),
              ) instanceof r("AdsMixedValue");
          return {
            accountBlockLists: t.first().accountBlockLists || [],
            areBlocklistsLoading: t.some(function (e) {
              return e.areBlocklistsLoading === !0;
            }),
            blockListIDs: c,
            blockListToCampaignMap: u,
            createBlockListLink: i.toString(),
            rootID: l,
            disabled: m,
            hasSelectedValue: d,
            isMixed: p,
            numCampaigns: t.size,
          };
        },
        getDefaultContentFilterLevels: function (t, n, a, i) {
          (a === void 0 && (a = !1), i === void 0 && (i = !1));
          var e = o(
              "AdsBrandSafetyContentFilterLevel",
            ).getFBDefaultContextualContentFilterLevel(),
            l = o(
              "AdsBrandSafetyContentFilterLevel",
            ).getANDefaultContextualContentFilterLevel(),
            s = o(
              "AdsBrandSafetyContentFilterLevel",
            ).DEFAULT_ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL;
          if (n != null) {
            var c,
              d,
              m,
              p = u.parseBrandSafetyContentFilterInheritedLevels(
                n.brand_safety_content_filter_levels,
                n.brand_safety_inherited_content_filter_levels,
                a || i,
              );
            ((p.fb.adAccountValue != null || p.fb.businessValue != null) &&
              p.fb.allowedValues.length &&
              (e = p.fb.allowedValues[0]),
              (p.an.adAccountValue != null || p.an.businessValue != null) &&
                p.an.allowedValues.length &&
                (l = p.an.allowedValues[0]),
              (((c = p.feed) == null ? void 0 : c.adAccountValue) != null ||
                ((d = p.feed) == null ? void 0 : d.businessValue) != null) &&
                (m = p.feed) != null &&
                m.allowedValues.length &&
                (s = p.feed.allowedValues[0]));
          }
          if (t != null) {
            var _,
              f = (_ = r("adsPlacementAPISpecReaderIsActiveFacebookPosition"))(
                t,
                "instream_video",
              ),
              g = r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
                t,
                "audience_network",
              ),
              h = _(t, "feed"),
              y = r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
                t,
                "stream",
              ),
              C = _(t, "facebook_reels"),
              b = r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
                t,
                "reels",
              ),
              v = _(t, "facebook_reels_overlay"),
              S = o("AdsPlacementAPISpecReaderUtils").isActiveThreadsPosition(
                t,
                "threads_stream",
              ),
              R = r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
                t,
                "reels_overlay",
              ),
              L = h || y,
              E = C || b;
            (g || (l = null),
              !f && !v && !R && (e = null),
              (L && a) || (E && a) || (S && i) || (s = null));
          }
          return (!a && !i && (s = null), r("filterNulls")([e, l, s]));
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
