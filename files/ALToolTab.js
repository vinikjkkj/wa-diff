__d(
  "ALToolTab",
  ["FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        {
          tab: "WA Messaging Audience",
          matcher: function (t) {
            return /^\/latest\/messaging_campaigns\/whatsapp\/audiences\/?$/.test(
              t.pathname,
            );
          },
        },
        {
          tab: "WA Messaging Campaigns",
          matcher: function (t) {
            return /^\/latest\/messaging_campaigns\/whatsapp\/campaigns\/?$/.test(
              t.pathname,
            );
          },
        },
        {
          tab: "WA Messaging Campaign Creation",
          matcher: function (t) {
            return /^\/latest\/messaging_campaigns\/whatsapp\/(?:campaign_creation|marketing_campaign)\/?$/.test(
              t.pathname,
            );
          },
        },
        {
          tab: "WA Messaging Event-Based Send",
          requires_querystring: !0,
          matcher: function (t) {
            return /^\/latest\/messaging_campaigns\/whatsapp\/event_based_campaign\/?$/.test(
              t.pathname,
            );
          },
        },
        {
          tab: "MSGR Messaging Audience",
          matcher: function (t) {
            return /^\/latest\/messaging_campaigns\/messenger\/audiences\/?$/.test(
              t.pathname,
            );
          },
        },
        {
          tab: "MSGR Messaging Campaigns",
          matcher: function (t) {
            return /^\/latest\/messaging_campaigns\/messenger\/campaigns\/?$/.test(
              t.pathname,
            );
          },
        },
        {
          tab: "MSGR Messaging Campaign Creation",
          matcher: function (t) {
            return /^\/latest\/messaging_campaigns\/messenger\/campaign_creation\/?$/.test(
              t.pathname,
            );
          },
        },
        {
          tab: "Messaging Campaigns Unknown",
          matcher: function (t) {
            return /^\/latest\/messaging_campaigns(?:\/|$)/.test(t.pathname);
          },
        },
      ],
      u = [
        {
          tab: "WA Messaging Campaign Creation",
          matcher: function (t) {
            return /^\/latest\/whatsapp_manager\/marketing_campaign\/?$/.test(
              t.pathname,
            );
          },
        },
        {
          tab: "WA Messaging Event-Based Send",
          requires_querystring: !0,
          matcher: function (t) {
            return /^\/latest\/whatsapp_manager\/event_based_campaign\/?$/.test(
              t.pathname,
            );
          },
        },
      ],
      c = [
        {
          tab: "Ad Center",
          matcher: function (t) {
            return t.pathname.includes("/latest/ad_center");
          },
        },
        {
          tab: "Ad Limits",
          matcher: function (t) {
            return t.pathname.includes("/latest/ad_limits");
          },
        },
        {
          tab: "Ads Drafts",
          matcher: function (t) {
            return t.pathname.includes("/latest/ads_drafts");
          },
        },
        {
          tab: "Appointments",
          matcher: function (t) {
            return t.pathname.includes("/latest/appointments");
          },
        },
        {
          tab: "Automated Ads",
          matcher: function (t) {
            return t.pathname.includes("/latest/automated_ads_creation");
          },
        },
        {
          tab: "Brand Rights",
          matcher: function (t) {
            return t.pathname.includes("/latest/brand_rights_protection");
          },
        },
        {
          tab: "Business Ai",
          matcher: function (t) {
            return t.pathname.includes("/latest/business_ai");
          },
        },
        {
          tab: "Business Apps",
          matcher: function (t) {
            return t.pathname.includes("/latest/business_app_store");
          },
        },
        {
          tab: "Business Feed",
          matcher: function (t) {
            return t.pathname.includes("/latest/business_feed");
          },
        },
        {
          tab: "Business Manager",
          matcher: function (t) {
            return t.pathname.includes("/latest/business_home");
          },
        },
        {
          tab: "Campaign Planner",
          matcher: function (t) {
            return (
              t.pathname.includes("/latest/reach_planner") ||
              t.pathname.includes("/latest/campaign_planner")
            );
          },
        },
        {
          tab: "Collaboration Center",
          matcher: function (t) {
            return t.pathname.includes("/latest/collaboration_center");
          },
        },
        {
          tab: "Collabsmanager",
          matcher: function (t) {
            return t.pathname.includes("/latest/collabsmanager");
          },
        },
        {
          tab: "Consumer Trends",
          matcher: function (t) {
            return t.pathname.includes("/latest/consumer_trends");
          },
        },
        {
          tab: "Contacts",
          matcher: function (t) {
            return t.pathname.includes("/latest/customer/crm_destination");
          },
        },
        {
          tab: "Content",
          matcher: function (t) {
            return t.pathname.includes("/latest/posts");
          },
        },
        {
          tab: "Create Ad",
          matcher: function (t) {
            return (
              t.pathname.includes("/latest/boost") ||
              t.pathname.includes("/latest/ads_creation") ||
              t.pathname.includes("/latest/consolidatedad")
            );
          },
        },
        {
          tab: "Create Bulk Upload",
          matcher: function (t) {
            return t.pathname.includes("/latest/bulk_upload_composer");
          },
        },
        {
          tab: "Create Marketing Message",
          matcher: function (t) {
            return t.pathname.includes("/latest/marketing_message_composer");
          },
        },
        {
          tab: "Create Post",
          matcher: function (t) {
            return t.pathname.includes("/latest/composer");
          },
        },
        {
          tab: "Create Reel",
          matcher: function (t) {
            return t.pathname.includes("/latest/reels_composer");
          },
        },
        {
          tab: "Create Story",
          matcher: function (t) {
            return t.pathname.includes("/latest/story_composer");
          },
        },
        {
          tab: "Creative Assets",
          matcher: function (t) {
            return t.pathname.includes("/latest/creative_assets");
          },
        },
        {
          tab: "Creator Marketplace",
          matcher: function (t) {
            return t.pathname.includes("/latest/creator_marketplace");
          },
        },
        {
          tab: "Experiments (Lift)",
          matcher: function (t) {
            return t.pathname.includes("/latest/ads-experiments");
          },
        },
        {
          tab: "Get Started",
          matcher: function (t) {
            return t.pathname.includes("/latest/get_started");
          },
        },
        {
          tab: "Inbox",
          matcher: function (t) {
            return t.pathname.includes("/latest/inbox");
          },
        },
        {
          tab: "Insights",
          matcher: function (t) {
            return t.pathname.includes("/latest/insights");
          },
        },
        {
          tab: "Inspiration Hub",
          matcher: function (t) {
            return t.pathname.includes("/latest/inspiration_hub");
          },
        },
        {
          tab: "Instant Forms",
          matcher: function (t) {
            return t.pathname.includes("/latest/instant_forms");
          },
        },
        {
          tab: "Inventory",
          matcher: function (t) {
            return t.pathname.includes("/latest/inventory");
          },
        },
        {
          tab: "Leads Center",
          matcher: function (t) {
            return t.pathname.includes("/latest/leads_center");
          },
        },
        {
          tab: "Licensed Music",
          matcher: function (t) {
            return t.pathname.includes("/latest/licensed_music");
          },
        },
        {
          tab: "Live Dashboard",
          matcher: function (t) {
            return t.pathname.includes("/latest/streamer_home");
          },
        },
        {
          tab: "Marketing Messages",
          matcher: function (t) {
            return t.pathname.includes("/latest/marketing_messages");
          },
        },
        {
          tab: "Meta Verified Landing",
          matcher: function (t) {
            return t.pathname.includes("/latest/meta_verified_landing");
          },
        },
        {
          tab: "Monetization",
          matcher: function (t) {
            return t.pathname.includes("/latest/monetization");
          },
        },
        {
          tab: "Omni Ai",
          matcher: function (t) {
            return t.pathname.includes("/latest/omni_ai");
          },
        },
        {
          tab: "Orders",
          matcher: function (t) {
            return t.pathname.includes("/latest/orders");
          },
        },
        {
          tab: "Payments",
          matcher: function (t) {
            return t.pathname.includes("/latest/payments");
          },
        },
        {
          tab: "Planner",
          matcher: function (t) {
            return t.pathname.includes("/latest/content_calendar");
          },
        },
        {
          tab: "Rights Manager",
          matcher: function (t) {
            return t.pathname.includes("/latest/rights_manager");
          },
        },
        {
          tab: "Self View",
          matcher: function (t) {
            return t.pathname.includes("/latest/self_view");
          },
        },
        {
          tab: "Settings",
          matcher: function (t) {
            return t.pathname.includes("/latest/settings");
          },
        },
        {
          tab: "Store Locations",
          matcher: function (t) {
            return t.pathname.includes("/latest/business_locations");
          },
        },
        {
          tab: "Traffic Analysis",
          matcher: function (t) {
            return t.pathname.includes("/latest/traffic_analysis");
          },
        },
        {
          tab: "Whatsapp Manager",
          matcher: function (t) {
            return t.pathname.includes("/latest/whatsapp_manager");
          },
        },
        {
          tab: "Home",
          matcher: function (t) {
            return t.pathname.includes("/latest");
          },
        },
      ],
      d = [
        {
          tab: "BHC Article",
          matcher: function (t) {
            var e = "/business/help/",
              n = t.pathname.indexOf(e);
            if (n === -1) return !1;
            var r = t.pathname.substring(n + e.length);
            return r.length > 0 && r !== "/";
          },
        },
        {
          tab: "BHC Home",
          matcher: function (t) {
            return t.pathname.includes("/business/help");
          },
        },
      ],
      m = [
        {
          tab: "Facebook Ad Center All Ads",
          requires_querystring: !0,
          matcher: function (t) {
            return t.searchParams.get("section") === "all_promotions";
          },
        },
        {
          tab: "Facebook Ad Center Boost",
          matcher: function (t) {
            return (
              t.pathname.includes("/ad_center/boost/") ||
              t.pathname.includes("/ad_center/create/boostpost/")
            );
          },
        },
        {
          tab: "Facebook Ad Center Create",
          matcher: function (t) {
            return t.pathname.includes("/ad_center/create/");
          },
        },
      ],
      p = [
        {
          tab: "Instagram Boost Page",
          matcher: function (t) {
            return t.pathname.includes("/b/");
          },
        },
        {
          tab: "Instagram Ad Tools",
          matcher: function (t) {
            return t.pathname.includes("/ad_tools");
          },
        },
      ],
      _ = [
        {
          tab: "Orgman Admin",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager/admin") ||
              t.pathname.includes("/meta_business_admin_center/admin")
            );
          },
        },
        {
          tab: "Orgman Claim",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager/claim") ||
              t.pathname.includes("/meta_business_admin_center/claim")
            );
          },
        },
        {
          tab: "Orgman Diagnostics",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager/diagnostics") ||
              t.pathname.includes("/meta_business_admin_center/diagnostics")
            );
          },
        },
        {
          tab: "Orgman Direct Business Assets",
          matcher: function (t) {
            return (
              t.pathname.includes(
                "/organization_manager/direct_business_assets",
              ) ||
              t.pathname.includes(
                "/meta_business_admin_center/direct_business_assets",
              )
            );
          },
        },
        {
          tab: "Orgman Get Started",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager/get_started") ||
              t.pathname.includes("/meta_business_admin_center/get_started")
            );
          },
        },
        {
          tab: "Orgman Hybrid Mode Users",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager/hybrid_mode_users") ||
              t.pathname.includes(
                "/meta_business_admin_center/hybrid_mode_users",
              )
            );
          },
        },
        {
          tab: "Orgman Migration",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager/migration") ||
              t.pathname.includes("/meta_business_admin_center/migration")
            );
          },
        },
        {
          tab: "Orgman Overview",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager/overview") ||
              t.pathname.includes("/meta_business_admin_center/overview")
            );
          },
        },
        {
          tab: "Orgman People",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager/people") ||
              t.pathname.includes("/meta_business_admin_center/people")
            );
          },
        },
        {
          tab: "Orgman Reporting",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager/reporting") ||
              t.pathname.includes("/meta_business_admin_center/reporting")
            );
          },
        },
        {
          tab: "Orgman Security Controls",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager/security_controls") ||
              t.pathname.includes(
                "/meta_business_admin_center/security_controls",
              )
            );
          },
        },
        {
          tab: "Orgman Security",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager/security") ||
              t.pathname.includes("/meta_business_admin_center/security")
            );
          },
        },
        {
          tab: "Orgman Tasks",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager/tasks") ||
              t.pathname.includes("/meta_business_admin_center/tasks")
            );
          },
        },
        {
          tab: "Orgman Home",
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager") ||
              t.pathname.includes("/meta_business_admin_center")
            );
          },
        },
      ],
      f = [
        {
          tab: "MBS Billing Accounts",
          matcher: function (t) {
            return t.pathname.includes("/latest/billing_hub/accounts");
          },
        },
        {
          tab: "MBS Billing Payment Settings",
          matcher: function (t) {
            return t.pathname.includes("/latest/billing_hub/payment_settings");
          },
        },
        {
          tab: "MBS Billing Payment Activity",
          matcher: function (t) {
            return t.pathname.includes("/latest/billing_hub/payment_activity");
          },
        },
        {
          tab: "MBS Billing Payment Methods",
          matcher: function (t) {
            return t.pathname.includes("/latest/billing_hub/payment_methods");
          },
        },
        {
          tab: "MBS Billing Credit Lines",
          matcher: function (t) {
            return t.pathname.includes("/latest/billing_hub/credit_lines");
          },
        },
        {
          tab: "MBS Billing Invoices",
          matcher: function (t) {
            return t.pathname.includes("/latest/billing_hub/invoices");
          },
        },
        {
          tab: "MBS Billing Legal Entities",
          matcher: function (t) {
            return t.pathname.includes("/latest/billing_hub/legal_entities");
          },
        },
        {
          tab: "MBS Billing Prepaid Funds",
          matcher: function (t) {
            return (
              t.pathname.includes(
                "/latest/billing_hub/prepaid_business_funds",
              ) ||
              t.pathname.includes("/latest/billing_hub/shared_prepaid_funds")
            );
          },
        },
        {
          tab: "MBS Billing",
          matcher: function (t) {
            return !0;
          },
        },
      ],
      g = [
        {
          tab: "Billing Accounts",
          matcher: function (t) {
            return t.pathname.includes("/billing_hub/accounts");
          },
        },
        {
          tab: "Billing Payment Settings",
          matcher: function (t) {
            return t.pathname.includes("/billing_hub/payment_settings");
          },
        },
        {
          tab: "Billing Payment Activity",
          matcher: function (t) {
            return t.pathname.includes("/billing_hub/payment_activity");
          },
        },
        {
          tab: "Billing Payment Methods",
          matcher: function (t) {
            return t.pathname.includes("/billing_hub/payment_methods");
          },
        },
        {
          tab: "Billing Credit Lines",
          matcher: function (t) {
            return t.pathname.includes("/billing_hub/credit_lines");
          },
        },
        {
          tab: "Billing Invoices",
          matcher: function (t) {
            return t.pathname.includes("/billing_hub/invoices");
          },
        },
        {
          tab: "Billing Legal Entities",
          matcher: function (t) {
            return t.pathname.includes("/billing_hub/legal_entities");
          },
        },
        {
          tab: "Billing Prepaid Funds",
          matcher: function (t) {
            return (
              t.pathname.includes("/billing_hub/prepaid_business_funds") ||
              t.pathname.includes("/billing_hub/shared_prepaid_funds")
            );
          },
        },
        {
          tab: "Billing",
          matcher: function (t) {
            return !0;
          },
        },
      ],
      h = [
        {
          tab: "MMA Admin",
          matcher: function (t) {
            return t.pathname.includes("/admin/");
          },
        },
        {
          tab: "MMA Account Centre",
          matcher: function (t) {
            return (
              t.pathname.includes("/accounts_center/") ||
              t.pathname.includes("/account/") ||
              t.pathname.includes("/profile/") ||
              t.pathname.includes("/settings/")
            );
          },
        },
        {
          tab: "MMA Help Center",
          matcher: function (t) {
            return t.pathname.includes("/help/");
          },
        },
        {
          tab: "MMA Device Login",
          matcher: function (t) {
            return (
              t.pathname.includes("/device/") || t.pathname.includes("/cli/")
            );
          },
        },
        {
          tab: "MMA Recovery",
          matcher: function (t) {
            return (
              t.pathname.includes("/recover/") ||
              t.pathname.includes("/hacked/")
            );
          },
        },
        {
          tab: "MMA SSO",
          matcher: function (t) {
            return (
              t.pathname.includes("/saml/") ||
              t.pathname.includes("/native_sso/") ||
              t.pathname.includes("/sso_provider_confirmation/")
            );
          },
        },
        {
          tab: "MMA Login",
          matcher: function (t) {
            return (
              t.pathname.includes("/login/") ||
              t.pathname.includes("/provisioned/accounts/claim/")
            );
          },
        },
        {
          tab: "MMA Signup",
          matcher: function (t) {
            return t.pathname.includes("/signup");
          },
        },
      ],
      y = [
        {
          tab: "Creator Marketing Hub Briefs",
          matcher: function (t) {
            return t.pathname.includes("/briefs");
          },
        },
        {
          tab: "Creator Marketing Hub Submissions",
          matcher: function (t) {
            return t.pathname.includes("/submissions");
          },
        },
        {
          tab: "Creator Marketing Hub Creator Discovery",
          matcher: function (t) {
            return t.pathname.includes("/creator_discovery");
          },
        },
        {
          tab: "Creator Marketing Hub Saved Creators",
          matcher: function (t) {
            return t.pathname.includes("/saved_creators");
          },
        },
        {
          tab: "Creator Marketing Hub Campaigns",
          matcher: function (t) {
            return t.pathname.includes("/campaigns");
          },
        },
        {
          tab: "Creator Marketing Hub Ad Lists",
          matcher: function (t) {
            return t.pathname.includes("/ad_lists");
          },
        },
        {
          tab: "Creator Marketing Hub Partners",
          matcher: function (t) {
            return t.pathname.includes("/ad_partners");
          },
        },
        {
          tab: "Creator Marketing Hub Content",
          matcher: function (t) {
            return t.pathname.includes("/ad_content");
          },
        },
        {
          tab: "Creator Marketing Hub Overview",
          matcher: function (t) {
            return !0;
          },
        },
      ],
      C = [
        {
          tool: "Developer App Platform",
          matcher: function (t) {
            return t.host.startsWith("developers.")
              ? t.href.includes("facebook.com/apps/")
              : !1;
          },
        },
        {
          tool: "AL Embedded Analytics",
          matcher: function (t) {
            return t.pathname.includes("autologging/embedded_analytics");
          },
        },
        {
          tool: "Creative Compass",
          matcher: function (t) {
            return (
              t.pathname.includes("/automation/") ||
              t.pathname.endsWith("/automation") ||
              t.pathname.includes("/adscreativestudio")
            );
          },
        },
        {
          tool: "Billing & Payments",
          tab_config: f,
          matcher: function (t) {
            return t.pathname.includes("/latest/billing_hub");
          },
        },
        {
          tool: "MMA Platform",
          tab_config: h,
          matcher: function (t) {
            return (
              t.hostname === "work.meta.com" ||
              t.hostname.endsWith(".work.meta.com")
            );
          },
        },
        {
          tool: "Organization Manager",
          tab_config: _,
          matcher: function (t) {
            return (
              t.pathname.includes("/organization_manager") ||
              t.pathname.includes("/meta_business_admin_center")
            );
          },
        },
        {
          tool: "Business Help Center",
          tab_config: d,
          matcher: function (t) {
            return t.pathname.includes("/business/help");
          },
        },
        {
          tool: "MBS",
          tab_config: s,
          matcher: function (t) {
            return /^\/latest\/messaging_campaigns(?:\/|$)/.test(t.pathname);
          },
        },
        {
          tool: "WhatsApp Manager",
          tab_config: u,
          matcher: function (t) {
            return t.pathname.includes("/latest/whatsapp_manager");
          },
        },
        {
          tool: "Creator Marketing Hub",
          tab_config: y,
          matcher: function (t) {
            return (
              t.pathname.includes("/partnership_ads_hub") ||
              t.pathname.includes("/creator_marketing_hub")
            );
          },
        },
        {
          tool: "MBS",
          tab_config: c,
          matcher: function (t) {
            return t.pathname.includes("/latest");
          },
        },
        {
          tool: "Account Overview",
          matcher: function (t) {
            return t.pathname.includes("adsmanager/manage/accounts");
          },
        },
        {
          tool: "Ad Account Settings",
          matcher: function (t) {
            return t.pathname.includes("/ad_account_settings");
          },
        },
        {
          tool: "Advertising Settings",
          matcher: function (t) {
            var e = "advertis",
              n = t.pathname.indexOf(e);
            return n === -1 ? !1 : t.pathname.includes("setting", n + e.length);
          },
        },
        {
          tool: "Ad Limits",
          matcher: function (t) {
            return t.pathname.includes("/ads/ad_limits");
          },
        },
        {
          tool: "Audiences",
          matcher: function (t) {
            return t.pathname.includes("/adsmanager/audiences");
          },
        },
        {
          tool: "Audiences",
          requires_querystring: !0,
          matcher: function (t) {
            return t.search.includes("tool=audience");
          },
        },
        {
          tool: "Automated Rules",
          matcher: function (t) {
            var e = "/ads",
              n = t.pathname.indexOf(e);
            if (n === -1) return !1;
            var r = "manager",
              o = t.pathname.indexOf(r, n + e.length);
            return o === -1 ? !1 : t.pathname.includes("rules", o + r.length);
          },
        },
        {
          tool: "Apps",
          matcher: function (t) {
            return t.href.includes("facebook.com/apps");
          },
        },
        {
          tool: "Ads Reporting",
          matcher: function (t) {
            var e = "adsmanager/manage/";
            if (t.pathname.includes(e)) return !1;
            var n = "/ads",
              r = t.pathname.indexOf(n);
            return r === -1
              ? !1
              : t.pathname.includes("reporting", r + n.length);
          },
        },
        {
          tool: "Billing & Payments",
          tab_config: g,
          matcher: function (t) {
            return t.pathname.includes("/billing");
          },
        },
        {
          tool: "Brand Collabs",
          matcher: function (t) {
            return t.pathname.includes("/collabsmanager/brand");
          },
        },
        {
          tool: "Brand Rights",
          matcher: function (t) {
            return t.pathname.includes("/brand-rights-protection");
          },
        },
        {
          tool: "Brand Safety",
          matcher: function (t) {
            return t.pathname.includes("/brand_safety");
          },
        },
        {
          tool: "Brand Diagnostics",
          matcher: function (t) {
            return t.href.includes("internalfb.com/brandi");
          },
        },
        {
          tool: "Business Settings",
          matcher: function (t) {
            return (
              t.href.includes(".com/select") ||
              t.href.includes(".com/security") ||
              t.href.includes(".com/settings")
            );
          },
        },
        {
          tool: "Business Help Center",
          matcher: function (t) {
            return t.pathname.includes("/business/help");
          },
        },
        {
          tool: "Business Support",
          matcher: function (t) {
            return (
              t.pathname.includes("/accountquality") ||
              t.pathname.includes("/business-support-home")
            );
          },
        },
        {
          tool: "DIRECT_SUPPORT",
          matcher: function (t) {
            return t.pathname.includes("/direct-support/");
          },
        },
        {
          tool: "Instagram",
          matcher: function (t) {
            return (
              t.hostname.includes("instagram.com") &&
              (t.pathname.includes("/ad_tools") || t.pathname.includes("/b/"))
            );
          },
          tab_config: p,
        },
        {
          tool: "Creative Journey",
          matcher: function (t) {
            return t.href.includes("internalfb.com/creative");
          },
        },
        {
          tool: "CRM (Meta)",
          matcher: function (t) {
            return t.href.includes("internalfb.com/crm");
          },
        },
        {
          tool: "QMS (Meta)",
          matcher: function (t) {
            return t.href.includes("internalfb.com/qms");
          },
        },
        {
          tool: "CRM (Legacy)",
          matcher: function (t) {
            return t.href.includes("internalfb.com/intern/crm");
          },
        },
        {
          tool: "Instant Delivery Diagnostics",
          matcher: function (t) {
            return t.href.includes("internalfb.com/idd");
          },
        },
        {
          tool: "Workbench",
          matcher: function (t) {
            return t.href.includes("internalfb.com/intern/discovery/workbench");
          },
        },
        {
          tool: "Unified Business Debugger",
          matcher: function (t) {
            return t.href.includes("internalfb.com/ubd");
          },
        },
        {
          tool: "Unified Commerce Debugger",
          matcher: function (t) {
            return t.href.includes("internalfb.com/ucd");
          },
        },
        {
          tool: "Signals Explorer",
          matcher: function (t) {
            return t.href.includes("internalfb.com/signals_explorer");
          },
        },
        {
          tool: "Experiments (Lift)",
          matcher: function (t) {
            return (
              t.pathname.includes("/test-and-learn") ||
              t.pathname.includes("/ads/managed-lift-setup") ||
              t.pathname.includes("/ads/lift")
            );
          },
        },
        {
          tool: "Internal Tool",
          matcher: function (t) {
            return t.href.includes("internalfb.com");
          },
        },
        {
          tool: "Campaign Planner",
          matcher: function (t) {
            return t.pathname.includes("/ads/planner");
          },
        },
        {
          tool: "Collaboration Center",
          matcher: function (t) {
            return t.pathname.includes("/collaboration_center");
          },
        },
        {
          tool: "Commerce Manager",
          matcher: function (t) {
            return (
              t.pathname.includes("/commerce") ||
              t.pathname.includes("/products/catalogs")
            );
          },
        },
        {
          tool: "Creative Hub",
          matcher: function (t) {
            return t.pathname.includes("/ads/adbuilder");
          },
        },
        {
          tool: "Creation Package",
          matcher: function (t) {
            return t.pathname.includes("/creation_package");
          },
        },
        {
          tool: "Creative Reporting",
          matcher: function (t) {
            return t.pathname.includes("/adsmanager/reporting/view");
          },
        },
        {
          tool: "Events Manager",
          matcher: function (t) {
            return t.pathname.includes("/events_manager");
          },
        },
        {
          tool: "Audience Insights",
          matcher: function (t) {
            return t.pathname.includes("/audience-insights");
          },
        },
        {
          tool: "Facebook Ad Center",
          matcher: function (t) {
            return t.href.includes("/latest")
              ? !1
              : t.href.includes("/ad_center");
          },
          tab_config: m,
        },
        {
          tool: "Insights",
          matcher: function (t) {
            return t.pathname.includes("adsmanager/manage/")
              ? !1
              : t.pathname.includes("/insights");
          },
        },
        {
          tool: "Media Library",
          matcher: function (t) {
            if (t.pathname.includes("/asset_library")) return !0;
            var e = "media",
              n = t.pathname.indexOf(e);
            return n === -1 ? !1 : t.pathname.includes("library", n + e.length);
          },
        },
        {
          tool: "Monetization Manager",
          matcher: function (t) {
            return t.pathname.startsWith("/pub/");
          },
        },
        {
          tool: "Page Posts",
          matcher: function (t) {
            return t.pathname.includes("/content_management");
          },
        },
        {
          tool: "Store Locations",
          matcher: function (t) {
            return t.pathname.includes("/business_locations");
          },
        },
        {
          tool: "Traffic Analysis",
          matcher: function (t) {
            return t.pathname.includes("/traffic-analysis");
          },
        },
        {
          tool: "Ads Manager (Campaigns)",
          matcher: function (t) {
            var e = "/ads",
              n = t.href.indexOf(e);
            return n === -1 ? !1 : t.href.includes("manager", n + e.length);
          },
          tab_config: [
            {
              tab: "Campaign Overview",
              matcher: function (t) {
                return (
                  !t.pathname.includes(
                    "adsmanager/manage/campaigns/insights",
                  ) && t.pathname.includes("adsmanager/manage/campaigns")
                );
              },
            },
            {
              tab: "Ad Set Overview",
              matcher: function (t) {
                return (
                  !t.pathname.includes("adsmanager/manage/adsets/insights") &&
                  t.pathname.includes("adsmanager/manage/adsets")
                );
              },
            },
            {
              tab: "Ad Overview",
              matcher: function (t) {
                return (
                  !t.pathname.includes("adsmanager/manage/ads/insights") &&
                  t.pathname.includes("adsmanager/manage/ads")
                );
              },
            },
          ],
        },
        {
          tool: "Consumer Trends",
          matcher: function (t) {
            return t.pathname.includes("/consumer_trends");
          },
        },
        {
          tool: "Business Manager",
          matcher: function (t) {
            var e = "business.",
              n = t.href.indexOf(e);
            return n === -1
              ? !1
              : t.href.includes("facebook.com/home/", n + e.length);
          },
        },
      ],
      b = "Unknown",
      v = { tab: null },
      S = new Map();
    for (var R of C) R.tab_config && S.set(R.tool, R.tab_config);
    function L(e) {
      try {
        return new URL(e);
      } catch (t) {
        r("FBLogger")("auto_logging")
          .catching(r("getErrorSafe")(t))
          .warn("Error parsing URL for tool/tab deriving: %s", e);
        return;
      }
    }
    function E(t) {
      var n,
        r,
        o,
        a,
        i = t != null ? t : L(window.location.href),
        l = i == null ? void 0 : i.pathname,
        s = ((n = e) == null ? void 0 : n.tool) != null ? e.tool : null;
      if (i == null) return { page_uri: "", tool: b, tab: null };
      if (
        s != null &&
        (((r = e) == null ? void 0 : r.page_path) === l ||
          ((o = e) == null ? void 0 : o.page_uri) === i)
      )
        return e;
      var u = null;
      for (var c of C)
        if (c.matcher(i)) {
          u = c;
          break;
        }
      if (u == null) return ((e = { page_uri: i.href, tool: b, tab: null }), e);
      var d = (a = u.tab_config) != null ? a : S.get(u.tool);
      if (d != null) {
        var m = k(i, d);
        return (
          (e = {
            page_uri: i.href,
            page_path:
              u.requires_querystring === !0 ||
              (m == null ? void 0 : m.requires_querystring) === !0
                ? void 0
                : l,
            tool: u.tool,
            tab: m == null ? void 0 : m.tab,
          }),
          e
        );
      } else
        return (
          (e = {
            page_uri: i.href,
            page_path: u.requires_querystring === !0 ? void 0 : l,
            tool: u.tool,
            tab: null,
          }),
          e
        );
    }
    function k(e, t) {
      for (var n of t)
        if (n.matcher(e))
          return { tab: n.tab, requires_querystring: n.requires_querystring };
      return v;
    }
    l.getCurrentToolTab = E;
  },
  98,
);
