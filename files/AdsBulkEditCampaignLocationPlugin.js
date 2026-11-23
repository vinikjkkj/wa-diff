__d(
  "AdsBulkEditCampaignLocationPlugin",
  [
    "cx",
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBAYouthAdsUtils",
    "AdsBroadGeoLocationTargetingUtils",
    "AdsBulkEditChangeBroadGeoTargetingAutomationDataAction",
    "AdsBulkEditChangeGeoLocationDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkValueUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCommonTargetingApiTransformer",
    "AdsDaoGraph",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsEmptyValue",
    "AdsFluxHooks",
    "AdsMixedValue",
    "AdsNameBulkEditPluginUtils",
    "AdsSAFRSelectors",
    "AdsStrings",
    "AdsTargetingBroadGeoContainer.react",
    "AdsTargetingLocationEditor.react",
    "AdsUEditorHooks",
    "AdsValidationConsts",
    "AdsYouthAdsAgeLimitEligibility",
    "AdsYouthDeliveryStatusUtils",
    "GeoButton.react",
    "GeoFlexbox.react",
    "GeoTableWidth",
    "LocationConstants",
    "adsUEditorDATargetingConsolidationSelectors",
    "deepEquals",
    "emptyFunction",
    "fastDeepCopy",
    "geoMargin",
    "gkx",
    "joinClasses",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useState,
      f = u._(/*BTDS*/ "");
    function g() {
      return r("gkx")("25812");
    }
    function h(e) {
      var t;
      return (
        (e == null || (t = e.individual_setting) == null ? void 0 : t.geo) === 1
      );
    }
    function y(e) {
      var t;
      return (
        (e == null || (t = e.individual_setting) == null ? void 0 : t.geo) !=
        null
      );
    }
    function C(e, t) {
      var n = r("fastDeepCopy")(t) || {};
      return (
        (n.individual_setting = n.individual_setting || {}),
        (n.individual_setting.geo = e ? 1 : 0),
        n
      );
    }
    function b(e) {
      var t,
        n,
        r,
        o,
        a = (t = e.geo_locations) != null ? t : {},
        i = (n = e.excluded_geo_locations) != null ? n : {};
      return (
        delete a.location_types,
        delete i.location_types,
        (r = a.custom_locations) == null ||
          r.forEach(function (e) {
            delete e.name;
          }),
        (o = i.custom_locations) == null ||
          o.forEach(function (e) {
            delete e.name;
          }),
        { geo_locations: a, excluded_geo_locations: i }
      );
    }
    function v(e, t) {
      return r("deepEquals")(b(e), b(t));
    }
    var S = new Set();
    function R(e) {
      if (e == null) return !1;
      for (var t of Object.keys(e))
        if (!(t === "location_types" || t === "location_expansion")) {
          var n = e[t];
          if (Array.isArray(n) && n.length > 0) return !0;
        }
      return !1;
    }
    function L(e, t) {
      for (var n of e) t ? S.delete(n) : S.add(n);
      return S.size > 0;
    }
    function E(e) {
      var t,
        n = e.adObjectIDs,
        a = e.allowedAudienceGroups,
        i = e.apiSpec,
        l = e.onChangeApiSpec,
        s = e.onChangeBroadGeoTargetingAutomation,
        u = e.safrConfig,
        c = e.shouldDisableDATargetingOldUI,
        m = e.targetingAutomation,
        f = _(null),
        b = f[0],
        S = f[1];
      p(
        function () {
          var e = o("AdsCommonTargetingApiTransformer").fromApi(i);
          S(e);
        },
        [i],
      );
      var R = function (t, r) {
        var e = o("AdsCommonTargetingApiTransformer").targetingSpecToApi({
          geoLocations: t,
          excludedGeoLocations: r,
        });
        (S(
          babelHelpers.extends({}, b, {
            geoLocations: t,
            excludedGeoLocations: r,
          }),
        ),
          v(i, e) ||
            (l(e),
            o(
              "AdsBroadGeoLocationTargetingUtils",
            ).logBulkEditDefaultBroadgeoSkipIfEligible(
              e.geo_locations,
              i.geo_locations,
              n,
              m,
              g() && s != null,
            )));
      };
      if (!b) return null;
      var L = o("AdsBAYouthAdsUtils").isAgeinBAYouthAdsCutoff(
          i.age_min,
          i.geo_locations,
        ),
        E = o("AdsBAYouthAdsUtils").isAgeinBAYouthAdsCutoff(
          i.age_max,
          i.geo_locations,
        ),
        k = o("AdsYouthAdsAgeLimitEligibility").getYouthAgeCutoff(
          i.geo_locations,
        ),
        I = u == null ? void 0 : u.location_radius,
        T = I ? !(I != null && I.is_enabled) : !1,
        D = o("LocationConstants").RadiusInfo.getLocalizedUnit(),
        x = I
          ? function (e) {
              return D === o("LocationConstants").MILE_UNIT
                ? I == null
                  ? void 0
                  : I.min_radius
                : I == null
                  ? void 0
                  : I.min_radius_in_km;
            }
          : void 0,
        $ = I == null ? void 0 : I.max_radius,
        P = I == null ? void 0 : I.max_radius_in_km,
        N =
          $ != null && P != null
            ? function (e) {
                return D === o("LocationConstants").MILE_UNIT ? $ : P;
              }
            : void 0,
        M = I ? I.is_city_only_disabled : !1,
        w = g() && s != null && Array.isArray(n) && n.length > 0,
        A =
          w && s != null
            ? {
                is_enabled: h(m),
                isBGSettingAlreadyPresent: y(m),
                onUpdate: function (t, n) {
                  var e = C(t, n != null ? n : m);
                  s(e);
                },
              }
            : null;
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(r("AdsTargetingLocationEditor.react"), {
            adObjectIDs: n,
            allowedAudienceGroups:
              a != null
                ? a
                : o("AdsYouthDeliveryStatusUtils").getAllAudienceGroups(),
            dao: r("AdsDaoGraph"),
            disableAddBulkLocations: !0,
            disableCityOnly: M,
            disableGeoLocationTargetingEditor: c,
            disallowRadiusSelection: T,
            enableLocationBrowser: !1,
            enableMap: !1,
            excludedGeoLocations: b == null ? void 0 : b.excludedGeoLocations,
            geoLocations: b == null ? void 0 : b.geoLocations,
            hideEditorLabel: !0,
            hideLocationGroupHeader: !0,
            isBulkEdit: !0,
            isCampaignPublished: !0,
            isTargetingOnlyYouth: E,
            isTargetingYouthByAge: L,
            locationTypeSelectorSize: "medium",
            maxRadius: N,
            minRadius: x,
            onLocationTypesChange: r("emptyFunction"),
            onLocationsChange: R,
            page: null,
            radiusType: null,
            safrConfig: u,
            shouldGetSuggestedRadius: !1,
            showCompactControls: !0,
            showLocationTypeSelector: !1,
            showNotice: !1,
            youthAdsAgeCutoff: k,
          }),
          w &&
            d.jsx(r("AdsTargetingBroadGeoContainer.react"), {
              broadGeoConfig: A,
              campaignIDs: n,
              locations: (t = i.geo_locations) != null ? t : {},
              targetingAutomation: m != null ? m : void 0,
            }),
        ],
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(t) {
      var n,
        a,
        l,
        s,
        c,
        m,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v = t.adObjectIDs,
        k = t.bulkControlSpec,
        I = o("AdsUEditorHooks").useUEditorCampaignAdsSelector(
          o("AdsSAFRSelectors").adsSAFRSelector,
        );
      p(function () {
        return (
          S.clear(),
          function () {
            S.clear();
          }
        );
      }, []);
      var T = k,
        D = T == null || (n = T.targeting) == null ? void 0 : n.geo_locations,
        x =
          T == null || (a = T.targeting) == null
            ? void 0
            : a.excluded_geo_locations,
        $ =
          T == null || (l = T.targeting) == null
            ? void 0
            : l.targeting_automation,
        P = D instanceof r("AdsMixedValue") || x instanceof r("AdsMixedValue");
      if (P)
        return d.jsxs(r("GeoFlexbox.react"), {
          alignItems: "center",
          "data-testid": void 0,
          children: [
            o("AdsStrings").MixedValuePlaceholder,
            d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(r("geoMargin").start8),
                {
                  children: d.jsx(r("GeoButton.react"), {
                    "data-testid": void 0,
                    label: u._(/*BTDS*/ ""),
                    onClick: function () {
                      var e = L(v, !1);
                      r("AdsBulkEditChangeGeoLocationDataAction").dispatch(
                        {
                          columnKey: r("AdsCampaignBulkEditColumnKeys")
                            .LOCATION,
                          adObjectIDs: v,
                          geoLocations:
                            o("LocationConstants").getEmptyLocations(),
                          excludedGeoLocations:
                            o("LocationConstants").getEmptyLocations(),
                          isApplyDisabled: e,
                        },
                        {
                          line: "432",
                          module: "AdsBulkEditCampaignLocationPlugin.js",
                          moduleID: i.id,
                        },
                      );
                    },
                  }),
                },
              ),
            ),
          ],
        });
      var N = o("AdsBulkValueUtils").getUniformValueOrDefault(D, null),
        M = o("AdsBulkValueUtils").getUniformValueOrDefault(x, null),
        w =
          $ instanceof r("AdsMixedValue")
            ? null
            : o("AdsBulkValueUtils").getUniformValueOrDefault($, null),
        A = w != null && typeof w.toJS == "function" ? w.toJS() : w,
        F =
          T == null || (s = T.targeting) == null
            ? void 0
            : s.age_min
                .getValues()
                .filter(Boolean)
                .reduce(function (e, t) {
                  return Math.min(e, t);
                }, r("AdsValidationConsts").maxAge),
        O =
          T == null || (c = T.targeting) == null
            ? void 0
            : c.age_max
                .getValues()
                .filter(Boolean)
                .reduce(function (e, t) {
                  return Math.min(e, t);
                }, r("AdsValidationConsts").maxAge),
        B = {
          geo_locations: N == null ? void 0 : N.toJS(),
          excluded_geo_locations: M == null ? void 0 : M.toJS(),
          age_min: F,
          age_max: O,
        },
        W = o("AdsBulkValueUtils").parallelIterator(
          function (e) {
            return {
              targeting: {
                genders: e[0],
                locales: e[1],
                custom_audiences: e[2],
              },
              optimization_goal: e[3],
              placement: e[4],
            };
          },
          [
            (m = T == null || (_ = T.targeting) == null ? void 0 : _.genders) !=
            null
              ? m
              : r("AdsEmptyValue").instance(),
            (f = T == null || (g = T.targeting) == null ? void 0 : g.locales) !=
            null
              ? f
              : r("AdsEmptyValue").instance(),
            (h =
              T == null || (y = T.targeting) == null
                ? void 0
                : y.custom_audiences) != null
              ? h
              : r("AdsEmptyValue").instance(),
            (C = T == null ? void 0 : T.optimization_goal) != null
              ? C
              : r("AdsEmptyValue").instance(),
            (b = T == null ? void 0 : T.placement) != null
              ? b
              : r("AdsEmptyValue").instance(),
          ],
        ),
        q = W.getValues()
          .filter(Boolean)
          .reduce(function (e, t) {
            var n;
            return e.intersection(
              o(
                "AdsYouthDeliveryStatusUtils",
              ).getAllowedAudienceGroupsForAllProducts(
                t.optimization_goal,
                t.targeting.genders,
                t.targeting.locales,
                (n = t.placement) == null ? void 0 : n.toJS(),
                t.custom_audiences,
              ),
            );
          }, o("AdsYouthDeliveryStatusUtils").getAllAudienceGroups()),
        U = function (t) {
          var e = L(v, R(t.geo_locations));
          r("AdsBulkEditChangeGeoLocationDataAction").dispatch(
            {
              columnKey: r("AdsCampaignBulkEditColumnKeys").LOCATION,
              adObjectIDs: v,
              geoLocations: t.geo_locations,
              excludedGeoLocations: t.excluded_geo_locations,
              isApplyDisabled: e,
            },
            {
              line: "544",
              module: "AdsBulkEditCampaignLocationPlugin.js",
              moduleID: i.id,
            },
          );
        },
        V = function (t) {
          r("AdsBulkEditChangeBroadGeoTargetingAutomationDataAction").dispatch(
            {
              columnKey: r("AdsCampaignBulkEditColumnKeys").LOCATION,
              adObjectIDs: v,
              targetingAutomation: t,
            },
            {
              line: "556",
              module: "AdsBulkEditCampaignLocationPlugin.js",
              moduleID: i.id,
            },
          );
        };
      return d.jsx(E, {
        adObjectIDs: v,
        allowedAudienceGroups: q,
        apiSpec: B,
        onChangeApiSpec: U,
        onChangeBroadGeoTargetingAutomation: V,
        safrConfig: I,
        targetingAutomation: A,
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    var I = o("AdsFluxHooks").adsFluxContainer(k, null, {
      containerName: i.id,
    });
    function T(e, t) {
      return d.jsx(I, { adObjectIDs: e, bulkControlSpec: t });
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      var t,
        n = e.adObjectIDs,
        a = e.campaign,
        l = e.extraData,
        s = o("AdsUEditorHooks").useUEditorCampaignAdsSelector(
          o("AdsSAFRSelectors").adsSAFRSelector,
        ),
        u = o("AdsUEditorHooks").useUEditorCampaignAdsSelector(
          o("adsUEditorDATargetingConsolidationSelectors")
            .adsUEditorShouldDisableDATargetingOldUISelector,
        ),
        c = function (t) {
          var e = L(n, R(t.geo_locations));
          r("AdsBulkEditChangeGeoLocationDataAction").dispatch(
            {
              columnKey: r("AdsCampaignBulkEditColumnKeys").LOCATION,
              adObjectIDs: n,
              geoLocations: t.geo_locations,
              excludedGeoLocations: t.excluded_geo_locations,
              isApplyDisabled: e,
            },
            {
              line: "610",
              module: "AdsBulkEditCampaignLocationPlugin.js",
              moduleID: i.id,
            },
          );
        },
        m = function (t) {
          r("AdsBulkEditChangeBroadGeoTargetingAutomationDataAction").dispatch(
            {
              columnKey: r("AdsCampaignBulkEditColumnKeys").LOCATION,
              adObjectIDs: [a.id],
              targetingAutomation: t,
            },
            {
              line: "624",
              module: "AdsBulkEditCampaignLocationPlugin.js",
              moduleID: i.id,
            },
          );
        },
        p = a == null ? void 0 : a.targeting.toJS(),
        _ = babelHelpers.extends({}, p),
        f = o(
          "AdsYouthDeliveryStatusUtils",
        ).getAllowedAudienceGroupsForAllProducts(
          a.optimization_goal,
          p.genders,
          p.locales,
          a == null || (t = a.placement) == null ? void 0 : t.toJS(),
        );
      return d.jsx("div", {
        className: r("joinClasses")("_48je", l.className),
        children: d.jsx(E, {
          adObjectIDs: n,
          allowedAudienceGroups: f,
          apiSpec: _,
          onChangeApiSpec: c,
          onChangeBroadGeoTargetingAutomation: m,
          safrConfig: s,
          shouldDisableDATargetingOldUI: u,
          targetingAutomation: p == null ? void 0 : p.targeting_automation,
        }),
      });
    }
    D.displayName = D.name + " [from " + i.id + "]";
    var x = o("AdsFluxHooks").adsFluxContainer(D, null, {
      containerName: i.id,
    });
    function $(e, t, n) {
      return d.jsx(x, { adObjectIDs: e, campaign: t, extraData: n });
    }
    $.displayName = $.name + " [from " + i.id + "]";
    var P = babelHelpers.extends({}, r("AdsBulkEditDefaultPluginProps"), {
        type: "campaignBulkEditMenu",
        key: "campaignLocation",
        dialogType: r("AdsBulkEditDialogTypes").LOCATION,
        getLabel: function () {
          return o("AdsBulkEditMenuContent").CAMPAIGN_LOCATION;
        },
        getTooltip: function (t) {
          return null;
        },
        getTestID: function () {
          return "bulk_edit_location";
        },
        onClick: function (t) {
          o("AdsBulkEditMenuItemUtils").onClickHandler(
            r("AdsBulkEditDialogTypes").LOCATION,
            "ad_set",
            t.source,
          );
        },
        isDisabled: function (t) {
          return !1;
        },
        isHidden: function (t) {
          return !1;
        },
        pivots: { dialogType: r("AdsBulkEditDialogTypes").LOCATION },
        getBulkControlConfig: function () {
          return { renderer: T };
        },
        getSchema: function () {
          var e;
          return {
            targeting: {
              geo_locations: (e = r("AdsEmptyUniformMixedBulkValueTypes")),
              excluded_geo_locations: e,
              targeting_automation: e,
              age_max: e,
              age_min: e,
              genders: e,
              locales: e,
              custom_audiences: e,
            },
            placement: e,
            optimization_goal: e,
          };
        },
        columnConfigs: [
          babelHelpers.extends(
            {},
            o(
              "AdsNameBulkEditPluginUtils",
            ).getBulkEditCampaignNameColumnConfig(),
          ),
          {
            cellRenderer: $,
            columnKey: r("AdsCampaignBulkEditColumnKeys").LOCATION,
            label: f,
            width: o("GeoTableWidth").pixel(600),
            fieldsPaths: [
              r("AdsAPICampaignPaths").TARGETING.GEO_LOCATIONS.path,
              r("AdsAPICampaignPaths").TARGETING.EXCLUDED_GEO_LOCATIONS.path,
            ],
          },
        ],
      }),
      N = P;
    l.default = N;
  },
  226,
);
