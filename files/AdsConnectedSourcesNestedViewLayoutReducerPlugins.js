__d(
  "AdsConnectedSourcesNestedViewLayoutReducerPlugins",
  ["AdsMetadataManageX2PProductsUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e, r, o, a;
          return n.navigateBackToMainView
            ? babelHelpers.extends({}, t, {
                visibleNestedViewComponentPluginKey: null,
                promoAdsModuleData: {
                  geoFormSubmit: null,
                  isViewTriggerDefaultOptIn:
                    (e = t.promoAdsModuleData) == null
                      ? void 0
                      : e.isViewTriggerDefaultOptIn,
                  manualToggledAdgroupIds:
                    (r = t.promoAdsModuleData) == null
                      ? void 0
                      : r.manualToggledAdgroupIds,
                },
              })
            : babelHelpers.extends({}, t, {
                visibleNestedViewComponentPluginKey: "promo_ads_module",
                promoAdsModuleData: {
                  promoAdsOfferManagementMode: "promo_codes_view",
                  geoFormSubmit: null,
                  isViewTriggerDefaultOptIn:
                    (o = t.promoAdsModuleData) == null
                      ? void 0
                      : o.isViewTriggerDefaultOptIn,
                  manualToggledAdgroupIds:
                    (a = t.promoAdsModuleData) == null
                      ? void 0
                      : a.manualToggledAdgroupIds,
                },
              });
        },
      },
      s = {
        reduce: function (t, n) {
          var e, r;
          return babelHelpers.extends({}, t, {
            visibleNestedViewComponentPluginKey:
              n.visibleNestedViewComponentPluginKey,
            promoAdsModuleData: {
              blockedDetectedOfferCodeName:
                n.selectedPromoOffer != null && n.newPromoCodeName != null
                  ? n.newPromoCodeName
                  : null,
              promoAdsOfferManagementMode: n.promoAdsOfferManagementMode,
              geoFormSubmit: void 0,
              isOfferSyncedButNotOptedIn: n.isOfferSyncedButNotOptedIn === !0,
              navigateBackToMainView: n.navigateBackToMainView,
              selectOfferUponCreation: n.selectOfferUponCreation,
              isSaveInFlight: !1,
              formState:
                n.promoAdsOfferManagementMode != null &&
                [
                  "promo_codes_view",
                  "email_capture_unique_offer_create",
                ].includes(n.promoAdsOfferManagementMode)
                  ? "valid"
                  : "no_change",
              isViewTriggerDefaultOptIn:
                (e = t.promoAdsModuleData) == null
                  ? void 0
                  : e.isViewTriggerDefaultOptIn,
              manualToggledAdgroupIds:
                (r = t.promoAdsModuleData) == null
                  ? void 0
                  : r.manualToggledAdgroupIds,
            },
          });
        },
      },
      u = {
        reduce: function (t, n) {
          var e, r, o, a, i, l, s, u, c, d;
          return babelHelpers.extends({}, t, {
            visibleNestedViewComponentPluginKey:
              t.visibleNestedViewComponentPluginKey,
            promoAdsModuleData: {
              blockedDetectedOfferCodeName:
                (e = t.promoAdsModuleData) == null
                  ? void 0
                  : e.blockedDetectedOfferCodeName,
              promoAdsOfferManagementMode:
                (r = t.promoAdsModuleData) == null
                  ? void 0
                  : r.promoAdsOfferManagementMode,
              geoFormSubmit: n.geoFormSubmit,
              isOfferSyncedButNotOptedIn:
                (o = t.promoAdsModuleData) == null
                  ? void 0
                  : o.isOfferSyncedButNotOptedIn,
              navigateBackToMainView:
                (a = t.promoAdsModuleData) == null
                  ? void 0
                  : a.navigateBackToMainView,
              selectOfferUponCreation:
                (i = t.promoAdsModuleData) == null
                  ? void 0
                  : i.selectOfferUponCreation,
              isSaveInFlight:
                (l = t.promoAdsModuleData) == null ? void 0 : l.isSaveInFlight,
              formErrorMessage:
                (s = t.promoAdsModuleData) == null
                  ? void 0
                  : s.formErrorMessage,
              formState:
                (u = t.promoAdsModuleData) == null ? void 0 : u.formState,
              isViewTriggerDefaultOptIn:
                (c = t.promoAdsModuleData) == null
                  ? void 0
                  : c.isViewTriggerDefaultOptIn,
              manualToggledAdgroupIds:
                (d = t.promoAdsModuleData) == null
                  ? void 0
                  : d.manualToggledAdgroupIds,
            },
          });
        },
      },
      c = {
        reduce: function (t, n) {
          var e, r, o, a, i, l, s, u, c;
          return babelHelpers.extends({}, t, {
            promoAdsModuleData: {
              blockedDetectedOfferCodeName:
                (e = t.promoAdsModuleData) == null
                  ? void 0
                  : e.blockedDetectedOfferCodeName,
              promoAdsOfferManagementMode:
                (r = t.promoAdsModuleData) == null
                  ? void 0
                  : r.promoAdsOfferManagementMode,
              geoFormSubmit:
                (o = t.promoAdsModuleData) == null ? void 0 : o.geoFormSubmit,
              isOfferSyncedButNotOptedIn:
                (a = t.promoAdsModuleData) == null
                  ? void 0
                  : a.isOfferSyncedButNotOptedIn,
              navigateBackToMainView:
                (i = t.promoAdsModuleData) == null
                  ? void 0
                  : i.navigateBackToMainView,
              selectOfferUponCreation:
                (l = t.promoAdsModuleData) == null
                  ? void 0
                  : l.selectOfferUponCreation,
              isSaveInFlight: n.isSaveInFlight,
              formErrorMessage:
                (s = t.promoAdsModuleData) == null
                  ? void 0
                  : s.formErrorMessage,
              formState:
                (u = t.promoAdsModuleData) == null ? void 0 : u.formState,
              isViewTriggerDefaultOptIn:
                (c = t.promoAdsModuleData) == null
                  ? void 0
                  : c.isViewTriggerDefaultOptIn,
            },
          });
        },
      },
      d = {
        reduce: function (t, n) {
          var e, r, o, a, i, l, s, u, c;
          return babelHelpers.extends({}, t, {
            promoAdsModuleData: {
              blockedDetectedOfferCodeName:
                (e = t.promoAdsModuleData) == null
                  ? void 0
                  : e.blockedDetectedOfferCodeName,
              promoAdsOfferManagementMode:
                (r = t.promoAdsModuleData) == null
                  ? void 0
                  : r.promoAdsOfferManagementMode,
              geoFormSubmit:
                (o = t.promoAdsModuleData) == null ? void 0 : o.geoFormSubmit,
              isOfferSyncedButNotOptedIn:
                (a = t.promoAdsModuleData) == null
                  ? void 0
                  : a.isOfferSyncedButNotOptedIn,
              navigateBackToMainView:
                (i = t.promoAdsModuleData) == null
                  ? void 0
                  : i.navigateBackToMainView,
              selectOfferUponCreation:
                (l = t.promoAdsModuleData) == null
                  ? void 0
                  : l.selectOfferUponCreation,
              isSaveInFlight:
                (s = t.promoAdsModuleData) == null ? void 0 : s.isSaveInFlight,
              formErrorMessage: (u = n.formErrorMessage) != null ? u : null,
              formState: n.formState,
              isViewTriggerDefaultOptIn:
                (c = t.promoAdsModuleData) == null
                  ? void 0
                  : c.isViewTriggerDefaultOptIn,
            },
          });
        },
      },
      m = {
        reduce: function (t, n) {
          var e, r;
          return babelHelpers.extends({}, t, {
            entry_point: (e = n.entry_point) != null ? e : null,
            session_id: (r = n.session_id) != null ? r : null,
            visibleNestedViewComponentPluginKey:
              n.visibleNestedViewComponentPluginKey,
            preNestedViewPluginState: t.pluginState,
          });
        },
      },
      p = {
        reduce: function (t) {
          var e;
          return babelHelpers.extends({}, t, {
            pluginState: babelHelpers.extends({}, t.pluginState, {
              manageX2PProducts: o(
                "AdsMetadataManageX2PProductsUtils",
              ).clearManageX2PProductsPendingState(
                (e = t.pluginState) == null ? void 0 : e.manageX2PProducts,
              ),
            }),
            preNestedViewPluginState: void 0,
            visibleNestedViewComponentPluginKey: null,
          });
        },
      };
    ((l.onPromoAdsModuleNestedViewClose = e),
      (l.onPromoAdsOfferManagementAddEditOfferInline = s),
      (l.onPromoAdsOfferManagementGeoFormUpdate = u),
      (l.onPromoAdsOfferManagementIsSaveInFlightUpdate = c),
      (l.onPromoAdsOfferManagementIsFormValidUpdate = d),
      (l.onNestedViewOpen = m),
      (l.onNestedViewClose = p));
  },
  98,
);
