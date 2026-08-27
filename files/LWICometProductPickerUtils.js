__d(
  "LWICometProductPickerUtils",
  [
    "ix",
    "FBLogger",
    "LWICometConsolidatedProductGoalsUtils",
    "LWICometEntryPointUtils",
    "LWICometProductPickerUtilsPageInfoFragment.graphql",
    "LWICometProductPickerUtilsPageInfoQuery.graphql",
    "RelayHooks",
    "SMBAdOutcomesExperimentUtils",
    "XCometLWIAppInstallCreationControllerRouteBuilder",
    "XCometLWIAutomatedAdsCreationControllerRouteBuilder",
    "XCometLWIAutomotiveInventoryControllerRouteBuilder",
    "XCometLWIBoostABTestCreationControllerRouteBuilder",
    "XCometLWIBoostABTestItemPickerControllerRouteBuilder",
    "XCometLWIBoostedGroupPickerControllerRouteBuilder",
    "XCometLWIBoostedItemPickerControllerRouteBuilder",
    "XCometLWICTACreationControllerRouteBuilder",
    "XCometLWICallNowCreationControllerRouteBuilder",
    "XCometLWICatalogSalesCreationControllerRouteBuilder",
    "XCometLWIConsolidatedProductCreationControllerRouteBuilder",
    "XCometLWIEventCreationControllerRouteBuilder",
    "XCometLWIFBInstagramMediaCreationControllerRouteBuilder",
    "XCometLWIInstagramMediaCreationControllerRouteBuilder",
    "XCometLWIIntegratedBusinessCreationControllerRouteBuilder",
    "XCometLWILeadGenObjectiveSelectorControllerRouteBuilder",
    "XCometLWILocalAwarenessCreationControllerRouteBuilder",
    "XCometLWIMessageCreationControllerRouteBuilder",
    "XCometLWIPagelikeCreationControllerRouteBuilder",
    "XCometLWIPostCreationControllerRouteBuilder",
    "XCometLWIPurchaseCreationControllerRouteBuilder",
    "XCometLWIUserPostCreationControllerRouteBuilder",
    "XCometLWIWebsiteCreationControllerRouteBuilder",
    "fbicon",
    "qex",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = 193;
    function d(e, t) {
      return e != null
        ? e
        : function (e, n, o, a, i) {
            if (o == null) throw r("FBLogger")("pages_lwi").mustfixThrow(t);
            return r("XCometLWICTACreationControllerRouteBuilder").buildURL({
              ad_account_id: i != null ? i : void 0,
              entry_point: n,
              page_id: e,
              so: a != null ? a : void 0,
              target_id: o,
            });
          };
    }
    function m(e, t, n) {
      return n === "www_profile_plus_product_picker" ? e : t;
    }
    function p(e, t) {
      return e != null ? e : t;
    }
    function _(e, t, n, a) {
      var i = o("LWICometConsolidatedProductGoalsUtils").getBCPGoalByProduct(
          t,
          null,
          a != null ? a : !1,
        ),
        l =
          i == null
            ? null
            : function (e, t, n, a, l) {
                var s = o(
                  "LWICometConsolidatedProductGoalsUtils",
                ).getClientSpecOverrideWithGoal(i, a);
                return r(
                  "XCometLWIConsolidatedProductCreationControllerRouteBuilder",
                ).buildURL({
                  ad_account_id: l != null ? l : void 0,
                  entry_point: t,
                  page_id: e,
                  so: s,
                });
              };
      switch (t) {
        case "BOOSTED_APP_INSTALL":
          return {
            getURI: function (t, n, o, a) {
              return r(
                "XCometLWIAppInstallCreationControllerRouteBuilder",
              ).buildURL({
                entry_point: n,
                page_id: t,
                so: a != null ? a : void 0,
              });
            },
            icon: m(
              o("fbicon")._(s("489713"), 20),
              o("fbicon")._(s("489715"), 24),
              n,
            ),
          };
        case "BOOSTED_AUTOMATED_ADS":
          return {
            getURI: function (t, n, o, a) {
              return r(
                "XCometLWIAutomatedAdsCreationControllerRouteBuilder",
              ).buildURL({
                entry_point: n,
                page_id: t,
                so: a != null ? a : void 0,
              });
            },
            icon: m(
              o("fbicon")._(s("688905"), 20),
              o("fbicon")._(s("688906"), 24),
              n,
            ),
          };
        case "BOOSTED_AUTOMOTIVE_INVENTORY":
          return {
            getURI: function (t, n, a, i) {
              return r(
                "XCometLWIAutomotiveInventoryControllerRouteBuilder",
              ).buildURL({
                entry_point: o(
                  "LWICometEntryPointUtils",
                ).convertEntryPointParamToJSEnumWithFallback(n, "unknown"),
                page_id: t,
              });
            },
            icon: m(
              o("fbicon")._(s("485027"), 20),
              o("fbicon")._(s("485029"), 24),
              n,
            ),
          };
        case "BOOSTED_CTA":
          return e === "MESSAGES"
            ? {
                getURI: d(
                  l,
                  "targetID should not be null for CTA with Messages objective",
                ),
                icon: m(
                  o("fbicon")._(s("542883"), 20),
                  o("fbicon")._(s("542884"), 24),
                  n,
                ),
              }
            : {
                getURI: d(l, "targetID should not be null for CTA"),
                icon: m(
                  o("fbicon")._(s("481753"), 20),
                  o("fbicon")._(s("481754"), 24),
                  n,
                ),
              };
        case "BOOSTED_CONSOLIDATED_PRODUCT":
          return {
            getURI: function (t, n, o, a, i) {
              return r(
                "XCometLWIConsolidatedProductCreationControllerRouteBuilder",
              ).buildURL({
                ad_account_id: a != null ? a : void 0,
                entry_point: n,
                page_id: t,
                show_boost_existing_content: !0,
                so: i != null ? i : void 0,
              });
            },
            icon: m(
              o("fbicon")._(s("507172"), 20),
              o("fbicon")._(s("507173"), 24),
              n,
            ),
          };
        case "BOOSTED_EVENT":
          return {
            getURI: function (t, n, o, a) {
              return r(
                "XCometLWIBoostedItemPickerControllerRouteBuilder",
              ).buildURL({
                entry_point: n,
                item_picker: "boosted_event_picker",
                page_id: t,
                so: a != null ? a : void 0,
              });
            },
            icon: m(
              o("fbicon")._(s("481118"), 20),
              o("fbicon")._(s("481121"), 24),
              n,
            ),
          };
        case "BOOSTED_GROUP":
          return {
            getURI: function (t, n, o, a) {
              return r(
                "XCometLWIBoostedGroupPickerControllerRouteBuilder",
              ).buildURL({ entry_point: n, page_id: t });
            },
            icon: m(
              o("fbicon")._(s("191873"), 20),
              o("fbicon")._(s("1062462"), 24),
              n,
            ),
          };
        case "BOOSTED_FB_INSTAGRAM_MEDIA":
          return {
            getURI: function (t, n, o, a) {
              return r(
                "XCometLWIBoostedItemPickerControllerRouteBuilder",
              ).buildURL({
                entry_point: n,
                item_picker: "boosted_fb_instagram_media_picker",
                page_id: t,
                so: a != null ? a : void 0,
              });
            },
            icon: m(
              o("fbicon")._(s("687373"), 20),
              o("fbicon")._(s("671882"), 24),
              n,
            ),
          };
        case "BOOSTED_INSTAGRAM_MEDIA":
          return {
            getURI: function (t, n, o, a) {
              return r(
                "XCometLWIBoostedItemPickerControllerRouteBuilder",
              ).buildURL({
                entry_point: n,
                item_picker: "boosted_instagram_media_picker",
                page_id: t,
                so: a != null ? a : void 0,
              });
            },
            icon: m(
              o("fbicon")._(s("687373"), 20),
              o("fbicon")._(s("671882"), 24),
              n,
            ),
          };
        case "BOOSTED_LEAD_GEN":
          return {
            getURI: p(l, function (e, t, n, o) {
              return r(
                "XCometLWILeadGenObjectiveSelectorControllerRouteBuilder",
              ).buildURL({
                entry_point: t,
                page_id: e,
                so: o != null ? o : void 0,
              });
            }),
            icon: m(
              o("fbicon")._(s("709451"), 20),
              o("fbicon")._(s("616700"), 24),
              n,
            ),
          };
        case "BOOSTED_LOCAL_AWARENESS":
          return {
            getURI: p(l, function (e, t, n, o) {
              return r(
                "XCometLWILocalAwarenessCreationControllerRouteBuilder",
              ).buildURL({
                entry_point: t,
                page_id: e,
                so: o != null ? o : void 0,
              });
            }),
            icon: m(
              o("fbicon")._(s("481942"), 20),
              o("fbicon")._(s("481943"), 24),
              n,
            ),
          };
        case "BOOSTED_PAGELIKE":
          return {
            getURI: p(l, function (e, t, n, o) {
              return r(
                "XCometLWIPagelikeCreationControllerRouteBuilder",
              ).buildURL({
                entry_point: t,
                page_id: e,
                so: o != null ? o : void 0,
              });
            }),
            icon: m(
              o("fbicon")._(s("490492"), 20),
              o("fbicon")._(s("490495"), 24),
              n,
            ),
          };
        case "BOOSTED_POST":
          return {
            getURI: function (t, n, o, a) {
              return r(
                "XCometLWIBoostedItemPickerControllerRouteBuilder",
              ).buildURL({
                entry_point: n,
                item_picker: "boosted_post_picker",
                page_id: t,
                so: a != null ? a : void 0,
              });
            },
            icon: m(
              o("fbicon")._(s("869051"), 20),
              o("fbicon")._(s("869052"), 24),
              n,
            ),
          };
        case "BOOSTED_WEBSITE":
          return o(
            "SMBAdOutcomesExperimentUtils",
          ).isObjectiveWebsiteConversionOrOutcomeSales(e)
            ? {
                getURI: p(l, function (e, t, n, o) {
                  return r(
                    "XCometLWIPurchaseCreationControllerRouteBuilder",
                  ).buildURL({
                    entry_point: t,
                    page_id: e,
                    so: o != null ? o : void 0,
                  });
                }),
                icon: m(
                  o("fbicon")._(s("763120"), 20),
                  o("fbicon")._(s("549496"), 24),
                  n,
                ),
              }
            : {
                getURI: p(l, function (e, t, n, o) {
                  return r(
                    "XCometLWIWebsiteCreationControllerRouteBuilder",
                  ).buildURL({
                    entry_point: t,
                    page_id: e,
                    so: o != null ? o : void 0,
                  });
                }),
                icon: m(
                  o("fbicon")._(s("586897"), 20),
                  o("fbicon")._(s("598094"), 24),
                  n,
                ),
              };
        case "BOOSTED_PURCHASE":
          return {
            getURI: p(l, function (e, t, n, o) {
              return r(
                "XCometLWIPurchaseCreationControllerRouteBuilder",
              ).buildURL({
                entry_point: t,
                page_id: e,
                so: o != null ? o : void 0,
              });
            }),
            icon: m(
              o("fbicon")._(s("763120"), 20),
              o("fbicon")._(s("549496"), 24),
              n,
            ),
          };
        case "BOOSTED_INTEGRATED_BUSINESS":
          return {
            getURI: function (t, n, o, a) {
              return r(
                "XCometLWIIntegratedBusinessCreationControllerRouteBuilder",
              ).buildURL({
                entry_point: n,
                page_id: t,
                so: a != null ? a : void 0,
              });
            },
            icon: m(
              o("fbicon")._(s("481118"), 20),
              o("fbicon")._(s("481121"), 24),
              n,
            ),
          };
        case "BOOSTED_CATALOG_SALES":
          return {
            getURI: p(l, function (e, t, n, o, a) {
              return r(
                "XCometLWICatalogSalesCreationControllerRouteBuilder",
              ).buildURL({
                ad_account_id: a != null ? a : void 0,
                entry_point: t,
                page_id: e,
                so: o != null ? o : void 0,
              });
            }),
            icon: o("fbicon")._(s("509117"), 20),
            landingViewItem: "BOOST_CATALOG_SALES",
          };
        case "BOOSTED_CALL_NOW":
          return {
            getURI: p(l, function (e, t, n, o, a, i) {
              return r(
                "XCometLWICallNowCreationControllerRouteBuilder",
              ).buildURL({
                ad_account_id: o != null ? o : void 0,
                entry_point: t,
                page_id: e,
                so: a != null ? a : void 0,
              });
            }),
            icon: m(
              o("fbicon")._(s("558161"), 20),
              o("fbicon")._(s("558162"), 24),
              n,
            ),
          };
        case "BOOSTED_POST_AB_TEST":
          return {
            getURI: function (t, n, o, a, i, l) {
              return l == null || l.length < 2
                ? r(
                    "XCometLWIBoostABTestItemPickerControllerRouteBuilder",
                  ).buildURL({ entry_point: n, page_id: t })
                : r(
                    "XCometLWIBoostABTestCreationControllerRouteBuilder",
                  ).buildURL({
                    ad_account_id: i != null ? i : void 0,
                    entry_point: n,
                    page_id: t,
                    so: a != null ? a : void 0,
                    target_ids: l,
                  });
            },
            icon: m(
              o("fbicon")._(s("562422"), 20),
              o("fbicon")._(s("583758"), 24),
              n,
            ),
          };
      }
      return (
        r("FBLogger")("pages_lwi").mustfix(
          "Unsupported Product: %s or Objective: %s for getProductConfig",
          t,
          e != null ? e : "empty",
        ),
        null
      );
    }
    function f(e) {
      var t = e.boostID,
        n = e.campaignID,
        o = e.entryPoint,
        a = e.flowID,
        i = e.legacyAdAccountID,
        l = e.pageID,
        s = e.product,
        u = e.shouldDuplicateAsBCP,
        c = e.so,
        d = e.targetID;
      switch (s) {
        case "BOOSTED_EVENT":
          return r("XCometLWIEventCreationControllerRouteBuilder").buildURL({
            boost_id: t,
            entry_point: o,
            flow_id: a,
            page_id: l,
            target_id: d,
          });
        case "BOOSTED_CTA":
          return r("XCometLWICTACreationControllerRouteBuilder").buildURL({
            boost_id: t,
            entry_point: o,
            flow_id: a,
            page_id: l,
            target_id: d,
          });
        case "BOOSTED_FB_INSTAGRAM_MEDIA":
          return r(
            "XCometLWIFBInstagramMediaCreationControllerRouteBuilder",
          ).buildURL({
            boost_id: t,
            entry_point: o,
            flow_id: a,
            page_id: l,
            target_id: d,
          });
        case "BOOSTED_INSTAGRAM_MEDIA":
          return r(
            "XCometLWIInstagramMediaCreationControllerRouteBuilder",
          ).buildURL({
            boost_id: t,
            entry_point: o,
            flow_id: a,
            page_id: l,
            target_id: d,
          });
        case "BOOSTED_POST":
          return u === !0
            ? r(
                "XCometLWIConsolidatedProductCreationControllerRouteBuilder",
              ).buildURL({
                entry_point: o,
                flow_id: a,
                page_id: l,
                post_boost_id: t,
                so: c,
              })
            : r("XCometLWIPostCreationControllerRouteBuilder").buildURL({
                ad_account_id: i,
                boost_id: t,
                campaign_id: n,
                entry_point: o,
                flow_id: a,
                page_id: l,
                so: c,
                target_id: d,
              });
        case "BOOSTED_USER_POST":
          return r("XCometLWIUserPostCreationControllerRouteBuilder").buildURL({
            boost_id: t,
            entry_point: o,
            flow_id: a,
            page_id: l,
            target_id: d,
          });
      }
      return null;
    }
    function g(e, t, n, a, i, l, s, u, c, d, m) {
      var p = o("LWICometConsolidatedProductGoalsUtils").getBCPGoalByProduct(
        l,
        null,
        !1,
      );
      if (p != null) {
        var _ = o(
          "LWICometConsolidatedProductGoalsUtils",
        ).getClientSpecOverrideWithGoal(p, c);
        return r(
          "XCometLWIConsolidatedProductCreationControllerRouteBuilder",
        ).buildURL({
          boost_id: e,
          entry_point: t,
          flow_id: n,
          page_id: i,
          so: _,
        });
      }
      switch (l) {
        case "BOOSTED_APP_INSTALL":
          return r(
            "XCometLWIAppInstallCreationControllerRouteBuilder",
          ).buildURL({ boost_id: e, entry_point: t, flow_id: n, page_id: i });
        case "BOOSTED_POST_AB_TEST":
        case "BOOSTED_AUTOMATED_ADS":
        case "BOOSTED_DEPRECATED_PRODUCT":
        case "BOOSTED_FB_STORY":
        case "BOOSTED_GROUP":
        case "BOOSTED_IG_STORY":
          return null;
        case "BOOSTED_AUTOMOTIVE_INVENTORY":
          return r(
            "XCometLWIAutomotiveInventoryControllerRouteBuilder",
          ).buildURL({ boost_id: e, entry_point: t, flow_id: n, page_id: i });
        case "BOOSTED_CALL_NOW":
          return r("XCometLWICallNowCreationControllerRouteBuilder").buildURL({
            boost_id: e,
            entry_point: t,
            flow_id: n,
            page_id: i,
          });
        case "BOOSTED_CATALOG_SALES":
          return r(
            "XCometLWICatalogSalesCreationControllerRouteBuilder",
          ).buildURL({ boost_id: e, entry_point: t, flow_id: n, page_id: i });
        case "BOOSTED_CONSOLIDATED_PRODUCT":
          return r(
            "XCometLWIConsolidatedProductCreationControllerRouteBuilder",
          ).buildURL({
            boost_id: e,
            entry_point: t,
            flow_id: n,
            page_id: i,
            so: c,
          });
        case "BOOSTED_INTEGRATED_BUSINESS":
          return r(
            "XCometLWIIntegratedBusinessCreationControllerRouteBuilder",
          ).buildURL({ boost_id: e, entry_point: t, flow_id: n, page_id: i });
        case "BOOSTED_LEAD_GEN":
          return r(
            "XCometLWILeadGenObjectiveSelectorControllerRouteBuilder",
          ).buildURL({ boost_id: e, entry_point: t, flow_id: n, page_id: i });
        case "BOOSTED_LOCAL_AWARENESS":
          return r(
            "XCometLWILocalAwarenessCreationControllerRouteBuilder",
          ).buildURL({ boost_id: e, entry_point: t, flow_id: n, page_id: i });
        case "BOOSTED_MESSAGE":
          return r("XCometLWIMessageCreationControllerRouteBuilder").buildURL({
            boost_id: e,
            entry_point: t,
            flow_id: n,
            page_id: i,
          });
        case "BOOSTED_PAGELIKE":
          return r("XCometLWIPagelikeCreationControllerRouteBuilder").buildURL({
            boost_id: e,
            entry_point: t,
            flow_id: n,
            page_id: i,
          });
        case "BOOSTED_PURCHASE":
          return r("XCometLWIPurchaseCreationControllerRouteBuilder").buildURL({
            boost_id: e,
            entry_point: t,
            flow_id: n,
            page_id: i,
          });
        case "BOOSTED_WEBSITE":
          return o(
            "SMBAdOutcomesExperimentUtils",
          ).isObjectiveWebsiteConversionOrOutcomeSales(a)
            ? r("XCometLWIPurchaseCreationControllerRouteBuilder").buildURL({
                boost_id: e,
                entry_point: t,
                flow_id: n,
                page_id: i,
              })
            : r("XCometLWIWebsiteCreationControllerRouteBuilder").buildURL({
                boost_id: e,
                entry_point: t,
                flow_id: n,
                page_id: i,
              });
        case "BOOSTED_MARKETPLACE_LISTING":
          return null;
        case "BOOSTED_EVENT":
        case "BOOSTED_CTA":
        case "BOOSTED_FB_INSTAGRAM_MEDIA":
        case "BOOSTED_INSTAGRAM_MEDIA":
        case "BOOSTED_POST":
        case "BOOSTED_USER_POST":
          return s != null
            ? f({
                boostID: e,
                campaignID: m,
                entryPoint: t,
                flowID: n,
                legacyAdAccountID: d,
                pageID: i,
                product: l,
                shouldDuplicateAsBCP: u,
                so: c,
                targetID: s,
              })
            : null;
      }
      return (
        r("FBLogger")("pages_lwi").mustfix(
          "Unsupported Product: %s or Objective: %s for getDuplicateAdRoute",
          l,
          a != null ? a : "empty",
        ),
        null
      );
    }
    function h(e) {
      return e.some(function (e) {
        var t = e.product;
        return t === "BOOSTED_CONSOLIDATED_PRODUCT";
      });
    }
    function y(e, t) {
      var n,
        r = o("react-compiler-runtime").c(3),
        a = e === void 0 ? !1 : e,
        i = o("RelayHooks").useLazyLoadQuery(v, { pageId: t }),
        l = (n = i.page) == null ? void 0 : n.has_only_bcp_ads,
        s;
      return (
        r[0] !== a || r[1] !== l
          ? ((s = C(l, a)), (r[0] = a), (r[1] = l), (r[2] = s))
          : (s = r[2]),
        s
      );
    }
    function C(e, t) {
      t === void 0 && (t = !1);
      var n = !1,
        o = e === !0;
      return o
        ? (t
            ? (n = r("qex")._("1806") === !0)
            : (n = r("qex")._("1913") === !0),
          { isEligible: o, shouldOpenBCP: n })
        : { isEligible: o, shouldOpenBCP: n };
    }
    var b =
        e !== void 0
          ? e
          : (e = n("LWICometProductPickerUtilsPageInfoFragment.graphql")),
      v =
        u !== void 0
          ? u
          : (u = n("LWICometProductPickerUtilsPageInfoQuery.graphql"));
    ((l.PRODUCT_PICKER_CARD_WIDTH = c),
      (l.getProductPickerConfig = _),
      (l.getDuplicateAdRoute = g),
      (l.hasConsolidatedProduct = h),
      (l.useShouldSkipProductPicker = y),
      (l.shouldSkipProductPicker = C),
      (l.LWICometProductPickerUtilsPageInfoFragment = b));
  },
  98,
);
