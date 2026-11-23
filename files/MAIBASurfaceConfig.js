__d(
  "MAIBASurfaceConfig",
  ["$InternalEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["tabs"],
      s,
      u,
      c,
      d,
      m,
      p = n("$InternalEnum")({
        ADS_MANAGER: "ads_manager",
        MBS: "mbs",
        NONE: "none",
      }),
      _ = {
        assetAutoSelectVariant: p.NONE,
        attachesDroppedFiles: !1,
        attachesPastedFiles: !1,
        promptPlacement: "ADS_MANAGER_DESKTOP_IN_CHAT",
        shouldUseIGGraphQLQuery: !1,
      },
      f =
        ((m = {}),
        (m["Ads Manager (Campaigns)"] = {
          assetAutoSelectVariant: p.ADS_MANAGER,
        }),
        (m["Account Overview"] = {}),
        (m["Ad Account Settings"] = {}),
        (m["Ads Reporting"] = {}),
        (m["Advertising Settings"] = {}),
        (m.Audiences = {}),
        (m["Automated Rules"] = {}),
        (m["Billing & Payments"] = {
          promptPlacement: "META_BUSINESS_SUITE_BILLING_PAYMENTS",
        }),
        (m["Creation Package"] = {}),
        (m["Creative Reporting"] = {}),
        (m["Business Support"] = { promptPlacement: "BUSINESS_SUPPORT_HOME" }),
        (m["Business Help Center"] = {
          promptPlacement: "BUSINESS_HELP_CENTER",
        }),
        (m.DIRECT_SUPPORT = { promptPlacement: "DIRECT_SUPPORT" }),
        (m["Embedded Signup"] = { promptPlacement: "EMBEDDED_SIGNUP" }),
        (m.MBS = {
          assetAutoSelectVariant: p.MBS,
          promptPlacement: "META_BUSINESS_SUITE",
          tabs:
            ((s = {}),
            (s.Home = { promptPlacement: "META_BUSINESS_SUITE_HOME" }),
            (s.Inbox = { promptPlacement: "META_BUSINESS_SUITE_INBOX" }),
            (s["Ad Center"] = { promptPlacement: "META_BUSINESS_SUITE_ADS" }),
            (s.Content = { promptPlacement: "META_BUSINESS_SUITE_CONTENT" }),
            (s.Planner = { promptPlacement: "META_BUSINESS_SUITE_PLANNER" }),
            (s["Campaign Planner"] = {
              attachesDroppedFiles: !0,
              attachesPastedFiles: !0,
              promptPlacement: "META_BUSINESS_SUITE_REACH_PLANNER",
            }),
            (s.Insights = { promptPlacement: "META_BUSINESS_SUITE_INSIGHTS" }),
            (s.Settings = { promptPlacement: "META_BUSINESS_SUITE_SETTINGS" }),
            (s.Payments = { promptPlacement: "META_BUSINESS_SUITE_PAYOUTS" }),
            (s["Marketing Messages Audiences"] = {
              promptPlacement: "WHATSAPP_MANAGER_MESSAGE_AUDIENCES",
            }),
            (s["WA Messaging Audience"] = {
              promptPlacement: "WHATSAPP_MANAGER_MESSAGE_AUDIENCES",
            }),
            (s["WA Messaging Campaign Creation"] = {
              promptPlacement: "WHATSAPP_MANAGER_MESSAGE_CAMPAIGNS",
            }),
            (s["WA Messaging Campaigns"] = {
              promptPlacement: "WHATSAPP_MANAGER_MESSAGE_CAMPAIGNS",
            }),
            (s["WA Messaging Event-Based Send"] = {
              promptPlacement: "WHATSAPP_MANAGER_TRIGGER_SEND_PAGE_1",
            }),
            (s["Collaboration Center"] = {
              promptPlacement: "COLLABORATION_CENTER_BRAND",
            }),
            s),
        }),
        (m["Facebook Ad Center"] = {
          promptPlacement: "FACEBOOK_AD_CENTER",
          tabs:
            ((u = {}),
            (u["Facebook Ad Center Boost"] = {
              promptPlacement: "FACEBOOK_BOOST_POST",
            }),
            (u["Facebook Ad Center Create"] = {
              promptPlacement: "FACEBOOK_CREATE_AD",
            }),
            (u["Facebook Ad Center All Ads"] = {
              promptPlacement: "FACEBOOK_ALL_ADS",
            }),
            u),
        }),
        (m.Instagram = {
          promptPlacement: "IG_AD_TOOLS",
          shouldUseIGGraphQLQuery: !0,
          tabs:
            ((c = {}),
            (c["Instagram Boost Page"] = { promptPlacement: "IG_BOOST" }),
            c),
        }),
        (m["Organization Manager"] = {
          promptPlacement: "ORGANIZATION_MANAGER",
        }),
        (m["Events Manager"] = {}),
        (m["Commerce Manager"] = { promptPlacement: "COMMERCE_MANAGER" }),
        (m["Monetization Manager"] = {
          promptPlacement: "MONETIZATION_MANAGER_AUDIENCE_NETWORK",
          tabs:
            ((d = {}),
            (d["Monetization Manager Payouts"] = {
              promptPlacement: "MONETIZATION_MANAGER",
            }),
            d),
        }),
        (m["WhatsApp Manager"] = { promptPlacement: "WHATSAPP_MANAGER" }),
        (m["Brand Safety"] = { promptPlacement: "BRAND_SAFETY_HUB" }),
        m);
    function g(t, n) {
      if (t == null) return _;
      var r = f[t];
      if (r == null) return _;
      var o = r.tabs,
        a = babelHelpers.objectWithoutPropertiesLoose(r, e),
        i = n != null && o != null ? o[n] : null;
      return i == null
        ? babelHelpers.extends({}, _, a)
        : babelHelpers.extends({}, _, a, i);
    }
    function h(e) {
      return e === "MBS" || e === "MBS (iOS)" || e === "MBS (Android)";
    }
    function y(e) {
      return e === "Ads Manager App (iOS)" || e === "Ads Manager App (Android)";
    }
    ((l.AssetAutoSelectVariants = p),
      (l.getMAIBASurfaceConfig = g),
      (l.isMBSSurfaceTool = h),
      (l.isAMASurfaceTool = y));
  },
  98,
);
