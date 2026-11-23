__d(
  "AdsPLRRecoCTAs",
  [
    "fbt",
    "AdsPLRLoggingUtil",
    "AdsPLRPEDuplicationUtils",
    "AdsPLRRecoCTAsPERecosForAdQuery.graphql",
    "AsyncRequest",
    "RelayHooks",
    "XAdsPLRExtendAdsetScheduleControllerRouteBuilder",
    "goURIOnWindow",
    "react",
    "requireDeferred",
    "useGeoDeferredModal",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = (u || (u = o("react"))).useCallback,
      d = r("requireDeferred")(
        "AdsPLRAccountPEVirtualPSProductsModal.react",
      ).__setRef("AdsPLRRecoCTAs"),
      m = s._(/*BTDS*/ ""),
      p = s._(/*BTDS*/ ""),
      _ = s._(/*BTDS*/ ""),
      f = s._(/*BTDS*/ ""),
      g = s._(/*BTDS*/ "");
    function h(e, t, n) {
      return (
        "/adsmanager/manage/campaigns?act=" +
        e +
        "&selected_campaign_ids=" +
        t +
        "&duplicate_campaign=1&plr_duplicate_expired=1&plr_campaign_name=" +
        encodeURIComponent(n != null ? n : "")
      );
    }
    function y(e, t, n) {
      o("AdsPLRLoggingUtil").logPLREvent(function () {
        return {
          ad_account_id: e != null ? e : "",
          event_severity: "info",
          event: "product_set_insights_duplicate_click",
          action_data: { product_set_id: t != null ? t : "", source: n },
        };
      });
    }
    function C(e, t) {
      var n = t.adAccountID,
        r = t.catalogID,
        a = t.productSetID,
        i = t.recommendedAdgroupID,
        l = t.source;
      (o("AdsPLRLoggingUtil").logPLREvent(function () {
        return {
          ad_account_id: n != null ? n : "",
          event_severity: "info",
          event: "product_set_insights_duplicate_click",
          action_data: {
            product_set_id: a,
            source: l,
            insight_type: "pe_existing_ps",
          },
        };
      }),
        o("AdsPLRPEDuplicationUtils").genDuplicateAsProductShowcaseAd(e, {
          accountID: n,
          catalogID: r,
          productSetID: a,
          recommendedAdgroupID: i,
        }));
    }
    function b(e, t) {
      if (e != null) {
        if (t === "show_loading") {
          e.document.write(
            '<html><body style="font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0"><h2>Preparing draft changes...</h2></body></html>',
          );
          return;
        }
        e.close();
      }
    }
    function v(e, t) {
      var n = e.adAccountID,
        a = e.adsetID,
        i = e.campaignID,
        l = e.productSetID,
        s = e.source;
      o("AdsPLRLoggingUtil").logPLREvent(function () {
        return {
          ad_account_id: n != null ? n : "",
          event_severity: "info",
          event: "product_set_insights_extend_click",
          action_data: {
            product_set_id: l != null ? l : "",
            source: s != null ? s : "",
          },
        };
      });
      var u = window.open("about:blank", "_blank");
      b(u, "show_loading");
      var c = r("XAdsPLRExtendAdsetScheduleControllerRouteBuilder").buildURL({
        ad_account_id: n,
        adset_id: a,
        campaign_id: i,
        extend_days: 7,
      });
      new (r("AsyncRequest"))()
        .setURI(c)
        .setMethod("POST")
        .setHandler(function (e) {
          e.payload.success
            ? (t("success"),
              r("goURIOnWindow")(u, e.payload.url),
              o("AdsPLRLoggingUtil").logPLREvent(function () {
                return {
                  ad_account_id: n != null ? n : "",
                  event_severity: "info",
                  event: "product_set_insights_extend_schedule_success",
                  action_data: {
                    product_set_id: l != null ? l : "",
                    source: s != null ? s : "",
                  },
                };
              }))
            : (t("error"),
              b(u, "close"),
              o("AdsPLRLoggingUtil").logPLREvent(function () {
                return {
                  ad_account_id: n != null ? n : "",
                  event_severity: "error",
                  event: "product_set_insights_extend_schedule_failure",
                  action_data: {
                    error_message: e.payload.error,
                    source: s != null ? s : "",
                  },
                };
              }));
        })
        .setErrorHandler(function (e) {
          (t("error"),
            b(u, "close"),
            o("AdsPLRLoggingUtil").logPLREvent(function () {
              return {
                ad_account_id: n != null ? n : "",
                event_severity: "error",
                event: "product_set_insights_extend_schedule_failure",
                action_data: {
                  error_message: String(e),
                  source: s != null ? s : "",
                },
              };
            }));
        })
        .send();
    }
    function S(e, t) {
      var n = t != null ? t : [];
      return n.length === 0
        ? e != null
          ? e
          : []
        : n.map(function (e) {
            var t, n, r;
            return {
              converted_value: e.converted_value,
              image_url: (t = e.product_info) == null ? void 0 : t.image_url,
              price: (n = e.product_info) == null ? void 0 : n.price,
              product_id: e.product_id,
              product_name:
                (r = e.product_info) == null ? void 0 : r.product_name,
            };
          });
    }
    function R(e) {
      var t = [];
      return (
        e == null ||
          e.forEach(function (e) {
            e != null && e !== "" && t.push(e);
          }),
        t
      );
    }
    function L(e, t, n, r) {
      o("AdsPLRLoggingUtil").logPLREvent(function () {
        return {
          ad_account_id: e != null ? e : "",
          event_severity: "info",
          event: "product_set_insights_duplicate_click",
          action_data: {
            product_set_id: t != null ? t : "",
            virtual_product_set_id: n != null ? n : "",
            source: r,
            insight_type: "pe_virtual_ps",
          },
        };
      });
    }
    function E() {
      var e = r("useGeoDeferredModal")(d);
      return c(
        function (t) {
          var n = t.adAccountID,
            r = t.catalogID,
            a = t.environment,
            i = t.recommendedAdgroupID,
            l = t.source;
          e({
            adAccountID: n,
            adName: t.adName,
            catalogID: r,
            currency: t.currency,
            onCreate: function (s) {
              var e;
              L(n, r, s.virtualProductSetID, l);
              var u = (e = s.catalogID) != null ? e : r;
              u != null &&
                (t.onDuplicate == null || t.onDuplicate(),
                o("AdsPLRPEDuplicationUtils").genDuplicateAsProductShowcaseAd(
                  a,
                  {
                    accountID: n,
                    catalogID: u,
                    productSetID: s.productSetID,
                    recommendedAdgroupID: i,
                    virtualProductSetID: s.virtualProductSetID,
                  },
                ));
            },
            productIDs: R(t.virtualPSProducts),
            products: t.products,
            recommendedAdgroupID: i,
          });
        },
        [e],
      );
    }
    var k =
      e !== void 0 ? e : (e = n("AdsPLRRecoCTAsPERecosForAdQuery.graphql"));
    async function I(e, t, n) {
      var r,
        a,
        i,
        l,
        s = await o("RelayHooks")
          .fetchQuery(e, k, { ad_account_id: t, ad_id: n })
          .toPromise(),
        u = s == null ? void 0 : s.plr_recos_by_level,
        c = (
          (r = u == null ? void 0 : u.duplicate_pe_existing) != null ? r : []
        ).find(function (e) {
          var t;
          return (
            (e == null ? void 0 : e.product_set_id) != null &&
            e.product_set_id !== "" &&
            ((t = e.recommendation) == null
              ? void 0
              : t.pe_source_catalog_id) != null &&
            e.recommendation.pe_source_catalog_id !== ""
          );
        }),
        d = (
          (a = u == null ? void 0 : u.duplicate_pe_virtual) != null ? a : []
        ).find(function (e) {
          var t, n;
          return (
            (e == null ? void 0 : e.catalog_id) != null &&
            e.catalog_id !== "" &&
            ((t = (n = e.virtual_ps_products) == null ? void 0 : n.length) !=
            null
              ? t
              : 0) > 0
          );
        });
      return {
        existing:
          (c == null ? void 0 : c.product_set_id) != null &&
          ((i = c.recommendation) == null ? void 0 : i.pe_source_catalog_id) !=
            null
            ? {
                catalogID: c.recommendation.pe_source_catalog_id,
                productSetID: c.product_set_id,
              }
            : null,
        virtual:
          (d == null ? void 0 : d.catalog_id) != null
            ? {
                adName: d.adgroup_name,
                catalogID: d.catalog_id,
                products: S(
                  d.virtual_ps_product_infos,
                  d.virtual_ps_products_with_value,
                ),
                virtualPSProducts: (l = d.virtual_ps_products) != null ? l : [],
              }
            : null,
      };
    }
    ((l.PLR_DUPLICATE_EXPIRED_CAMPAIGN_CTA_LABEL = m),
      (l.PLR_EXTEND_CTA_LABEL = p),
      (l.PLR_EXTENDING_CTA_LABEL = _),
      (l.PLR_DUPLICATE_PE_EXISTING_CTA_LABEL = f),
      (l.PLR_DUPLICATE_PE_VIRTUAL_CTA_LABEL = g),
      (l.buildPLRDuplicateExpiredCampaignURL = h),
      (l.logPLRDuplicateExpiredCampaignClick = y),
      (l.duplicatePLRPEExistingReco = C),
      (l.startPLRExtendAdsetSchedule = v),
      (l.toPLRModalProducts = S),
      (l.getValidPLRProductIDs = R),
      (l.useAdsPLRPEVirtualPSDuplicate = E),
      (l.genPLRPERecosForAd = I));
  },
  226,
);
