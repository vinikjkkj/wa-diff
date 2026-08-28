__d(
  "AdsPEPaneUtils_LEGACY",
  ["invariant", "DefaultSettingsValues"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = new Map([
        ["AccountPane", "ACCOUNT"],
        ["AdvertisingSettingsPane", "ADVERTISING_SETTINGS"],
        ["AdAccountSettingsPane", "AD_ACCOUNT_SETTINGS"],
        ["CampaignOverviewPane", "CAMPAIGN_OVERVIEW"],
        ["CreativesPane", "CREATIVES"],
        ["AdPane", "L1"],
        ["CampPane", "L2"],
        ["CampaignGroupPane", "L3"],
        ["ReportingPane", "VIEW_REPORT"],
        ["ManageReportsPane", "MANAGE_REPORTS"],
        ["BusinessViewReportPane", "BUSINESS_VIEW_REPORT"],
        ["OpportunitiesPane", "OPPORTUNITIES"],
        ["CreationPackagePane", "PACKAGE_AD_CREATION"],
        ["ViewSharedReportPane", "VIEW_SHARED_REPORT"],
        ["MultiComponentReportingPane", "MCR_VIEW_REPORT"],
        ["ExportHistoryPane", "EXPORT_HISTORY"],
        ["PersonalizedInsightsPane", "PERSONALIZED_INSIGHTS"],
        ["CreativeInsightsPane", "CREATIVE_INSIGHTS"],
        ["AdvertiserTrendsPane", "ADVERTISER_TRENDS"],
        ["ProductsPane", "PRODUCTS"],
        ["ProductInsightsPane", "PRODUCT_INSIGHTS"],
        ["ProductBenchmarkingPane", "PRODUCT_BENCHMARKING"],
        ["ProductReportsPane", "PRODUCT_REPORTS"],
        ["ProductSetsPane", "PRODUCT_SETS"],
        ["MessageCampaignsPane", "L3"],
        ["MessageSetsPane", "L2"],
        ["MessagesPane", "L1"],
        ["MessageCreationPackagePane", "PACKAGE_AD_CREATION"],
        ["MessageSettingsPane", "MESSAGE_SETTINGS"],
        ["MessageLandingPagePane", "MESSAGE_LANDING_PAGE"],
      ]),
      c =
        ((e = {}),
        (e.VIEW_REPORT = "ReportingPane"),
        (e.BUSINESS_VIEW_REPORT = "BusinessViewReportPane"),
        (e.VIEW_SHARED_REPORT = "ViewSharedReportPane"),
        (e.EXPORT_HISTORY = "ExportHistoryPane"),
        (e.MCR_VIEW_REPORT = "MultiComponentReportingPane"),
        (e.PERSONALIZED_INSIGHTS = "PersonalizedInsightsPane"),
        (e.CREATIVE_INSIGHTS = "CreativeInsightsPane"),
        (e.ADVERTISER_TRENDS = "AdvertiserTrendsPane"),
        (e.PRODUCTS = "ProductsPane"),
        (e.PRODUCT_INSIGHTS = "ProductInsightsPane"),
        (e.PRODUCT_BENCHMARKING = "ProductBenchmarkingPane"),
        (e.PRODUCT_REPORTS = "ProductReportsPane"),
        (e.PRODUCT_SETS = "ProductSetsPane"),
        e);
    function d() {
      return r("DefaultSettingsValues").PANE;
    }
    function m(e) {
      return e === "AdsAISandbox"
        ? { tool: "ADS_AI_SANDBOX" }
        : e === "AccountPane"
          ? { tool: "MANAGE_ADS", section: u.get("AccountPane") }
          : e === "AdvertisingSettingsPane"
            ? { tool: "MANAGE_ADS", section: u.get("AdvertisingSettingsPane") }
            : e === "AdAccountSettingsPane"
              ? { tool: "MANAGE_ADS", section: u.get("AdAccountSettingsPane") }
              : e === "CampaignOverviewPane"
                ? { tool: "MANAGE_ADS", section: u.get("CampaignOverviewPane") }
                : e === "CreativesPane"
                  ? { tool: "MANAGE_ADS", section: u.get("CreativesPane") }
                  : e === "AdPane"
                    ? { tool: "MANAGE_ADS", section: u.get("AdPane") }
                    : e === "CampPane"
                      ? { tool: "MANAGE_ADS", section: u.get("CampPane") }
                      : e === "CampaignGroupPane"
                        ? {
                            tool: "MANAGE_ADS",
                            section: u.get("CampaignGroupPane"),
                          }
                        : e === "CreationPackagePane"
                          ? {
                              tool: "MANAGE_ADS",
                              section: u.get("CreationPackagePane"),
                            }
                          : e === "PrivacyInfoCenterPane"
                            ? {
                                tool: "MANAGE_ADS",
                                section: u.get("PrivacyInfoCenterPane"),
                              }
                            : e === "OpportunitiesPane"
                              ? {
                                  tool: "MANAGE_ADS",
                                  section: u.get("OpportunitiesPane"),
                                }
                              : e === "MessageCampaignsPane"
                                ? {
                                    tool: "MANAGE_MESSAGES",
                                    section: u.get("MessageCampaignsPane"),
                                  }
                                : e === "MessageSetsPane"
                                  ? {
                                      tool: "MANAGE_MESSAGES",
                                      section: u.get("MessageSetsPane"),
                                    }
                                  : e === "MessagesPane"
                                    ? {
                                        tool: "MANAGE_MESSAGES",
                                        section: u.get("MessagesPane"),
                                      }
                                    : e === "MessageCreationPackagePane"
                                      ? {
                                          tool: "MANAGE_MESSAGES",
                                          section: u.get(
                                            "MessageCreationPackagePane",
                                          ),
                                        }
                                      : e === "MessageSettingsPane"
                                        ? {
                                            tool: "MANAGE_MESSAGES",
                                            section: u.get(
                                              "MessageSettingsPane",
                                            ),
                                          }
                                        : e === "MessageLandingPagePane"
                                          ? {
                                              tool: "MANAGE_MESSAGES",
                                              section: u.get(
                                                "MessageLandingPagePane",
                                              ),
                                            }
                                          : e === "AudiencePane"
                                            ? { tool: "AUDIENCES" }
                                            : e === "ImagePane"
                                              ? { tool: "IMAGES" }
                                              : e === "PersonalizedInsightsPane"
                                                ? {
                                                    tool: "REPORTING",
                                                    section: u.get(
                                                      "PersonalizedInsightsPane",
                                                    ),
                                                  }
                                                : e === "AdvertiserTrendsPane"
                                                  ? {
                                                      tool: "REPORTING",
                                                      section: u.get(
                                                        "AdvertiserTrendsPane",
                                                      ),
                                                    }
                                                  : e === "CreativeInsightsPane"
                                                    ? {
                                                        tool: "REPORTING",
                                                        section: u.get(
                                                          "CreativeInsightsPane",
                                                        ),
                                                      }
                                                    : e === "ProductsPane"
                                                      ? {
                                                          tool: "REPORTING",
                                                          section:
                                                            u.get(
                                                              "ProductsPane",
                                                            ),
                                                        }
                                                      : e ===
                                                          "ProductInsightsPane"
                                                        ? {
                                                            tool: "REPORTING",
                                                            section: u.get(
                                                              "ProductInsightsPane",
                                                            ),
                                                          }
                                                        : e ===
                                                            "ProductBenchmarkingPane"
                                                          ? {
                                                              tool: "REPORTING",
                                                              section: u.get(
                                                                "ProductBenchmarkingPane",
                                                              ),
                                                            }
                                                          : e ===
                                                              "ProductReportsPane"
                                                            ? {
                                                                tool: "REPORTING",
                                                                section:
                                                                  u.get(
                                                                    "ProductReportsPane",
                                                                  ),
                                                              }
                                                            : e ===
                                                                "ProductSetsPane"
                                                              ? {
                                                                  tool: "REPORTING",
                                                                  section:
                                                                    u.get(
                                                                      "ProductSetsPane",
                                                                    ),
                                                                }
                                                              : e ===
                                                                  "ManageReportsPane"
                                                                ? {
                                                                    tool: "REPORTING",
                                                                    section:
                                                                      u.get(
                                                                        "ManageReportsPane",
                                                                      ),
                                                                  }
                                                                : e ===
                                                                    "ExportHistoryPane"
                                                                  ? {
                                                                      tool: "REPORTING",
                                                                      section:
                                                                        u.get(
                                                                          "ExportHistoryPane",
                                                                        ),
                                                                    }
                                                                  : e ===
                                                                      "ReportingPane"
                                                                    ? {
                                                                        tool: "REPORTING",
                                                                        section:
                                                                          u.get(
                                                                            "ReportingPane",
                                                                          ),
                                                                      }
                                                                    : e ===
                                                                        "IABAuditsPane"
                                                                      ? {
                                                                          tool: "REPORTING",
                                                                          section:
                                                                            u.get(
                                                                              "IABAuditsPane",
                                                                            ),
                                                                        }
                                                                      : e ===
                                                                          "BusinessViewReportPane"
                                                                        ? {
                                                                            tool: "REPORTING",
                                                                            section:
                                                                              u.get(
                                                                                "BusinessViewReportPane",
                                                                              ),
                                                                          }
                                                                        : e ===
                                                                            "ViewSharedReportPane"
                                                                          ? {
                                                                              tool: "REPORTING",
                                                                              section:
                                                                                u.get(
                                                                                  "ViewSharedReportPane",
                                                                                ),
                                                                            }
                                                                          : e ===
                                                                              "MultiComponentReportingPane"
                                                                            ? {
                                                                                tool: "REPORTING",
                                                                                section:
                                                                                  u.get(
                                                                                    "MultiComponentReportingPane",
                                                                                  ),
                                                                              }
                                                                            : e ===
                                                                                "PostPane"
                                                                              ? {
                                                                                  tool: "PAGES",
                                                                                }
                                                                              : e ===
                                                                                  "RulesPane"
                                                                                ? {
                                                                                    tool: "RULES",
                                                                                  }
                                                                                : e ===
                                                                                    "ScriptsPane"
                                                                                  ? {
                                                                                      tool: "SCRIPTS",
                                                                                    }
                                                                                  : e ===
                                                                                      "VolumePane"
                                                                                    ? {
                                                                                        tool: "MANAGE_ADS_VOLUME",
                                                                                      }
                                                                                    : e ===
                                                                                        "CreationPane"
                                                                                      ? {
                                                                                          tool: "CREATION",
                                                                                        }
                                                                                      : e ===
                                                                                          "CreativeReportingPane"
                                                                                        ? {
                                                                                            tool: "CREATIVE_REPORTING",
                                                                                          }
                                                                                        : e ===
                                                                                            "GuidedOnboardingPane"
                                                                                          ? {
                                                                                              tool: "GUIDED_ONBOARDING",
                                                                                            }
                                                                                          : e ===
                                                                                              "Auto2CampaignPlanningPane"
                                                                                            ? {
                                                                                                tool: "AUTO2_CAMPAIGN_PLANNING",
                                                                                              }
                                                                                            : e ===
                                                                                                "Auto2MidflightPane"
                                                                                              ? {
                                                                                                  tool: "AUTO2_MIDFLIGHT",
                                                                                                }
                                                                                              : e ===
                                                                                                  "DynamicExperiencePane"
                                                                                                ? {
                                                                                                    tool: "DYNAMIC_EXPERIENCE",
                                                                                                  }
                                                                                                : e ===
                                                                                                    "AiViewsPane"
                                                                                                  ? {
                                                                                                      tool: "AI_VIEWS",
                                                                                                    }
                                                                                                  : e ===
                                                                                                      "CustomAnalyticsConfigurationsPane"
                                                                                                    ? {
                                                                                                        tool: "CUSTOM_ANALYTICS_CONFIGURATIONS",
                                                                                                      }
                                                                                                    : e ===
                                                                                                        "PortfoliosPane"
                                                                                                      ? {
                                                                                                          tool: "PORTFOLIOS",
                                                                                                        }
                                                                                                      : s(
                                                                                                          !1,
                                                                                                          "Unknown NavState for pane %s",
                                                                                                          e,
                                                                                                        );
    }
    function p(e) {
      var t = e.tool,
        n = e.section;
      e: {
        if (t === "MANAGE_ADS") {
          return (n || (n = "L3"), _(n));
          break e;
        }
        if (t === "MANAGE_MESSAGES")
          return n === "PACKAGE_AD_CREATION"
            ? "MessageCreationPackagePane"
            : n === "L1"
              ? "MessagesPane"
              : n === "L2"
                ? "MessageSetsPane"
                : n === "MESSAGE_SETTINGS"
                  ? "MessageSettingsPane"
                  : n === "MESSAGE_LANDING_PAGE"
                    ? "MessageLandingPagePane"
                    : "MessageCampaignsPane";
        if (t === "AUDIENCES") return "AudiencePane";
        if (t === "ADS_AI_SANDBOX") return "AdsAISandbox";
        if (t === "CREATIVE_REPORTING") return "CreativeReportingPane";
        if (t === "IMAGES") return "ImagePane";
        if (t === "PAGES") return "PostPane";
        if (t === "REPORTING") {
          var r = n && c[n];
          return r || "ManageReportsPane";
        }
        if (t === "RULES") return "RulesPane";
        if (t === "SCRIPTS") return "ScriptsPane";
        if (t === "MANAGE_ADS_VOLUME") return "VolumePane";
        if (t === "CREATION") return "CreationPane";
        if (t === "GUIDED_ONBOARDING") return "GuidedOnboardingPane";
        if (t === "AUTO2_CAMPAIGN_PLANNING") return "Auto2CampaignPlanningPane";
        if (t === "AUTO2_MIDFLIGHT") return "Auto2MidflightPane";
        if (t === "DYNAMIC_EXPERIENCE") return "DynamicExperiencePane";
        if (t === "AI_VIEWS") return "AiViewsPane";
        if (t === "CUSTOM_ANALYTICS_CONFIGURATIONS")
          return "CustomAnalyticsConfigurationsPane";
        if (t === "PORTFOLIOS") return "PortfoliosPane";
        {
          s(0, 2274);
          break e;
        }
      }
    }
    function _(e) {
      return e === "OPPORTUNITIES"
        ? "OpportunitiesPane"
        : e === "L1"
          ? "AdPane"
          : e === "L2"
            ? "CampPane"
            : e === "ACCOUNT"
              ? "AccountPane"
              : e === "CREATIVES"
                ? "CreativesPane"
                : e === "PACKAGE_AD_CREATION"
                  ? "CreationPackagePane"
                  : e === "CAMPAIGN_OVERVIEW"
                    ? "CampaignOverviewPane"
                    : e === "ADVERTISING_SETTINGS"
                      ? "AdvertisingSettingsPane"
                      : e === "AD_ACCOUNT_SETTINGS"
                        ? "AdAccountSettingsPane"
                        : e === "MESSAGE_SETTINGS"
                          ? "MessageSettingsPane"
                          : e === "MESSAGE_LANDING_PAGE"
                            ? "MessageLandingPagePane"
                            : "CampaignGroupPane";
    }
    ((l.getDefaultPane = d),
      (l.getNavStateFromPane = m),
      (l.getPaneFromNavState = p));
  },
  98,
);
