__d(
  "CatalogBusinessEventsLoggerHelper",
  [
    "CacheStorage",
    "CatalogURLUtils",
    "CommerceManagerSidebarTabKey",
    "CurrentUser",
    "ErrorPubSub",
    "ProductCatalogBusinessEventsTypedLogger",
    "URI",
    "WebApiApplication",
    "WebSession",
    "gkx",
    "objectValues",
    "performance",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "product_catalogs",
      d = new (r("CacheStorage"))("sessionstorage", c),
      m = (function () {
        function t() {
          this.registerErrorListener();
        }
        var n = t.prototype;
        return (
          (n.registerErrorListener = function () {
            var t = this;
            (e || (e = r("ErrorPubSub"))).addListener(function (e) {
              var n = e.type;
              if (!(n && n !== "mustfix")) {
                var a = (s || (s = r("URI"))).getRequestURI();
                o("CatalogURLUtils").isCatalogRoute(a) &&
                  t.$1({
                    error_data: JSON.stringify(e),
                    error_message: e.message,
                    error_type: e.name,
                    stack_trace: e.stack,
                  });
              }
            });
          }),
          (n.$1 = function (t) {
            this.getUnexpectedErrorLogger()
              .setEvent("unhandled_js_exception")
              .setActionData(t)
              .log();
          }),
          (n.getProductsViewAppealsLogger = function (t) {
            return this.getLogger().setCategory("appeals").setCatalogID(t);
          }),
          (n.getProductsViewLogger = function (t, n) {
            var e = this.getLogger();
            return (
              t != null && e.setCatalogID(t),
              n != null && e.setFeedID(n),
              e.setCategory("products_view")
            );
          }),
          (n.getEmptyStateViewLogger = function (t) {
            return this.getLogger()
              .setCatalogID(t)
              .setCategory("empty_state_view");
          }),
          (n.getItemPDPLogger = function (t, n, r) {
            return this.getLogger()
              .setCategory("item_pdp")
              .setActionData(babelHelpers.extends({}, r, { item_id: n }))
              .setCatalogID(t);
          }),
          (n.getLaunchpadLogger = function () {
            return this.getLogger().setCategory("launchpad");
          }),
          (n.getBulkItemEditorLogger = function (t) {
            return this.getLogger()
              .setCatalogID(t)
              .setCategory("bulk_item_editor");
          }),
          (n.getAdCreationLogger = function () {
            return this.getLogger().setCategory("commerce_manager_ad_creation");
          }),
          (n.getProductSetsEditorLogger = function (t) {
            return this.getLogger()
              .setCatalogID(t)
              .setCategory("product_sets_editor");
          }),
          (n.getAddProductsPageLogger = function () {
            return this.getLogger().setCategory("add_products_page");
          }),
          (n.getFeedCreatePageLogger = function () {
            return this.getLogger().setCategory("feed_create_page");
          }),
          (n.getCatalogCreateFlowLogger = function () {
            return this.getLogger().setCategory("catalog_create_flow");
          }),
          (n.getCatalogLocalizationSettingsLogger = function (t) {
            return this.getLogger()
              .setCategory("catalog_localization_settings")
              .setCatalogID(t);
          }),
          (n.getCatalogUseCasesLogger = function () {
            return this.getLogger().setCategory("catalog_use_cases");
          }),
          (n.getExpectedErrorLogger = function () {
            return this.getLogger()
              .setIsErrorExpected(!0)
              .setCategory("errors");
          }),
          (n.getUnexpectedErrorLogger = function (t) {
            return this.getLogger()
              .setCatalogID(t)
              .setIsErrorExpected(!1)
              .setCategory("errors");
          }),
          (n.getProductsTabLogger = function (t) {
            return this.getLogger().setCatalogID(t).setCategory("products_tab");
          }),
          (n.getCreateAdFlowLogger = function () {
            return this.getLogger().setCategory("create_ad_flow");
          }),
          (n.getAdsCreationLogger = function () {
            return this.getLogger().setCategory("campaign_creation");
          }),
          (n.getToolboxLogger = function () {
            return this.getLogger().setCategory("catalog_toolbox");
          }),
          (n.getIGTaggingLogger = function () {
            return this.getLogger().setCategory("instagram_tagging");
          }),
          (n.getShopsBuilderLogger = function (t) {
            return this.getLogger()
              .setCategory("shops_builder")
              .setCatalogID(t);
          }),
          (n.getManualCreationLogger = function (t) {
            return this.getLogger()
              .setCategory("manual_creation")
              .setCatalogID(t);
          }),
          (n.getProductHoverCardLogger = function (t) {
            return this.getLogger()
              .setCategory("product_insights_hovercard")
              .setCatalogID(t);
          }),
          (n.getProductSetsViewLogger = function (t) {
            return this.getLogger()
              .setCategory("product_sets_view")
              .setCatalogID(t);
          }),
          (n.getAdsProductSetSelectorLogger = function (t) {
            return this.getLogger()
              .setCategory("ads_manager_product_set_selector")
              .setCatalogID(t);
          }),
          (n.getProductSetsCreationDialogLogger = function (t) {
            return this.getLogger()
              .setCategory("product_sets_creation_dialog")
              .setCatalogID(t);
          }),
          (n.getAdPauseGuidanceLogger = function (t) {
            return this.getLogger()
              .setCategory("catalog_ad_pause_guidance")
              .setCatalogID(t);
          }),
          (n.getCommerceManagerGuidanceLogger = function (t) {
            var e = this.getLogger().setCategory(
              "catalog_actions_tab_guidance",
            );
            return (t != null && e.setCatalogID(t), e);
          }),
          (n.getCMGuidanceRecommendationStatusLogger = function (t) {
            return this.getLogger()
              .setCategory("cm_recommendation_guidance")
              .setCatalogID(t);
          }),
          (n.getProductSetDiagnosticsLogger = function (t) {
            return this.getLogger()
              .setCategory("ads_manager_product_set_diagnostics")
              .setCatalogID(t);
          }),
          (n.getTagsAdoptionLogger = function (t) {
            return this.getLogger()
              .setCategory("catalog_tags_adoption")
              .setCatalogID(t);
          }),
          (n.getCatalogTemplatesLogger = function (t) {
            var e = this.getLogger().setCategory("catalog_templates");
            return (t != null && e.setCatalogID(t), e);
          }),
          (n.getSetsTabLogger = function (t) {
            return this.getLogger().setCategory("sets_tab").setCatalogID(t);
          }),
          (n.getShopsUpsellLogger = function (t) {
            return this.getLogger().setCategory("shops_upsell").setCatalogID(t);
          }),
          (n.getProductSetsDeletionDialogLogger = function (t) {
            return this.getLogger()
              .setCategory("product_sets_deletion_dialog")
              .setCatalogID(t);
          }),
          (n.getProductSetsSelectorDialogLogger = function (t) {
            return this.getLogger()
              .setCategory("product_sets_selector")
              .setCatalogID(t);
          }),
          (n.getErrorsLogger = function () {
            return this.getLogger().setCategory("errors");
          }),
          (n.getCatalogHomeLogger = function (t) {
            return this.getLogger().setCategory("catalog_home").setCatalogID(t);
          }),
          (n.getCatalogCreationLogger = function () {
            return this.getLogger().setCategory("catalog_creation_dialog");
          }),
          (n.getCatalogDeletionLogger = function (t) {
            return this.getLogger()
              .setCategory("catalog_deletion_dialog")
              .setCatalogID(t);
          }),
          (n.getCatalogMultiDeletionLogger = function (t, n) {
            var e = { catalogIDs: JSON.stringify(t) };
            return this.getLogger()
              .setCategory("catalog_multi_deletion_dialog")
              .setActionData(
                n != null ? babelHelpers.extends({}, e, { error: n }) : e,
              );
          }),
          (n.getCatalogMissingProductFieldTranslationLogger = function () {
            return this.getLogger().setCategory("translation");
          }),
          (n.getCatalogManagerLogger = function () {
            return this.getLogger().setCategory("catalog_manager");
          }),
          (n.getCatalogSegmentCreationLogger = function () {
            return this.getLogger().setCategory("catalog_segment_creation");
          }),
          (n.getCatalogSegmentEditLogger = function () {
            return this.getLogger().setCategory("catalog_segment_edit");
          }),
          (n.getCatalogSegmentSharingLogger = function () {
            return this.getLogger().setCategory("catalog_segment_sharing");
          }),
          (n.getConciergeLogger = function (t) {
            return this.getLogger()
              .setCategory("catalog_concierge")
              .setCatalogID(t);
          }),
          (n.getDeveloperAppPortalLogger = function () {
            return this.getLogger().setCategory("developer_app_portal");
          }),
          (n.getHomePageLogger = function (t) {
            return this.getLogger().setCategory("home_page").setCatalogID(t);
          }),
          (n.getMerchantReportLogger = function () {
            var e = new (s || (s = r("URI")))(
              window.location.href,
            ).getQueryData();
            return this.getLogger()
              .setCategory("merchant_report")
              .setNavSource(e.nav_source);
          }),
          (n.getCatalogSettingsLogger = function (t) {
            return this.getLogger()
              .setCategory("catalog_settings")
              .setCatalogID(t);
          }),
          (n.getDataSourcesPageLogger = function (t, n) {
            var e = this.getLogger()
              .setCategory("data_sources")
              .setCatalogID(t);
            return (n != null && e.setFeedID(n), e);
          }),
          (n.getCatalogFeedsViewLogger = function () {
            return this.getLogger().setCategory("catalog_feeds_view");
          }),
          (n.getFeedOverviewLogger = function (t) {
            return this.getLogger().setCategory("feed_overview").setFeedID(t);
          }),
          (n.getEventsTabLogger = function () {
            return this.getLogger().setCategory("events_tab");
          }),
          (n.getLowMatchRateLogger = function (t) {
            return this.getLogger()
              .setCategory("low_match_rate")
              .setCatalogID(t);
          }),
          (n.getExternalURILogger = function () {
            return this.getLogger().setCategory("external_URI");
          }),
          (n.getFeedSettingsLogger = function (t, n) {
            return this.getLogger()
              .setCategory("feed_settings")
              .setCatalogID(t)
              .setFeedID(n);
          }),
          (n.getBusinessSettingsLogger = function (t) {
            return this.getLogger()
              .setCatalogID(t)
              .setCategory("business_settings");
          }),
          (n.getDebugToolsLogger = function () {
            return this.getLogger().setCategory("debug_tools");
          }),
          (n.getPreloadingLogger = function () {
            return this.getLogger().setCategory("catalog_preloading");
          }),
          (n.getRouterLogger = function () {
            return this.getLogger().setCategory("router");
          }),
          (n.getSmartPixelOverviewLogger = function (t) {
            return this.getLogger()
              .setCategory("smart_pixel_overview")
              .setActionData({ pixelID: t });
          }),
          (n.getCatalogItemDetailOverrideLogger = function (t) {
            return this.getLogger()
              .setCategory("catalog_item_detail_overrides")
              .setActionData({ catalogItemID: t });
          }),
          (n.getLogger = function () {
            var e = window.location.pathname,
              t = o("CatalogURLUtils").getCatalogIDFromURL(e),
              n = e.replace(/^\/products/, ""),
              r = this.getActiveTabKey(n, t);
            return this.getBaseLogger().setCatalogID(t).setCatalogHomeTab(r);
          }),
          (n.getBaseLogger = function () {
            var e = r("CurrentUser").getAccountID(),
              t = d.get(e);
            t || ((t = r("uuidv4")()), d.set(e, t));
            var n = new p()
              .setWebSessionID(o("WebSession").getId())
              .setPageURI(window.location.href)
              .setSessionID(t)
              .setClientTime(Date.now());
            (u || (u = r("performance"))).now &&
              n.setClientPerformanceTime(
                Math.round((u || (u = r("performance"))).now()),
              );
            var a = o("WebApiApplication").getClientID();
            return (a != null && n.setClientAppID(a), n);
          }),
          (n.getOneClickPixelUpdatesLogger = function (t) {
            return this.getLogger()
              .setCategory("catalog_smart_pixel_updates")
              .setCatalogID(t);
          }),
          (n.getActiveTabKey = function (t, n) {
            if (n != null) {
              var e = "/commerce/catalogs/" + n + "/",
                o = r("objectValues")(r("CommerceManagerSidebarTabKey"));
              for (var a of o) {
                var i = a === "data_sources" ? "feeds" : a;
                if (t.startsWith(e + i)) return a;
              }
            }
            return t;
          }),
          (n.getPerformanceLogger = function () {
            return this.getLogger().setCategory("performance");
          }),
          (n.getEmployeeOnlyLogger = function () {
            return this.getLogger().setCategory("employee_only");
          }),
          (n.getSubverticalsLogger = function (t) {
            return this.getLogger().setCategory("subverticals").setCatalogID(t);
          }),
          (n.getThirdPartyIntegrationLogger = function (t) {
            return this.getLogger()
              .setCategory("third_party_integration")
              .setCatalogID(t);
          }),
          (n.getOverviewPageLogger = function (t) {
            return this.getLogger()
              .setCategory("overview_page")
              .setCatalogID(t);
          }),
          (n.getSizeChartsLogger = function (t) {
            return this.getLogger().setCategory("size_charts").setCatalogID(t);
          }),
          (n.getShopsVisibilityControlLogger = function (t) {
            return this.getLogger()
              .setCategory("shops_visibility_control")
              .setCatalogID(t);
          }),
          (n.getShopifyAllProductsLogger = function (t) {
            return this.getLogger()
              .setCategory("shopify_all_products")
              .setCatalogID(t);
          }),
          (n.getPartnerIntegrationLogger = function (t) {
            return this.getLogger()
              .setCategory("partner_integration")
              .setCatalogID(t);
          }),
          (n.getAdsManagerToCommerceManagerRedirectionLogger = function (
            t,
            n,
            r,
          ) {
            return this.getLogger()
              .setCategory("ads_manager_to_commerce_manager_redirection")
              .setEvent(t)
              .setAdAccountID(n)
              .setActionData({ areNoCatalogsAvailable: r.toString() });
          }),
          (n.getCatalogSetupIssuesGuidanceLogger = function (t) {
            return this.getLogger()
              .setCategory("catalog_setup_issues_guidance")
              .setCatalogID(t);
          }),
          (n.getAutocatSelectionEnhancementsLogger = function (t) {
            return this.getLogger()
              .setCategory("autocat_selection_enhancements")
              .setCatalogID(t);
          }),
          t
        );
      })(),
      p = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.$ProductCatalogBusinessEventsTypedLoggerWithConsoleLogging$p_1 =
            function () {
              var e,
                t = this.getData(),
                n = (e = t == null ? void 0 : t.event) != null ? e : "",
                r = JSON.stringify(t, null, 2),
                o = "log",
                a = console[o].bind(console);
              (console.groupCollapsed(
                "%cEVENT: %c" + n,
                "color: black",
                "color: #4267B2",
              ),
                a(r),
                console.groupEnd());
            }),
          (n.log = function () {
            (r("CurrentUser").isEmployee() &&
              r("gkx")("32974") &&
              this.$ProductCatalogBusinessEventsTypedLoggerWithConsoleLogging$p_1(),
              e.prototype.log.call(this));
          }),
          t
        );
      })(r("ProductCatalogBusinessEventsTypedLogger")),
      _ = new m();
    l.default = _;
  },
  98,
);
