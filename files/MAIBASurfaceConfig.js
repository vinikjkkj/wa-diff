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
      m = n("$InternalEnum")({
        ADS_MANAGER: "ads_manager",
        MBS: "mbs",
        NONE: "none",
      }),
      p = {
        assetAutoSelectVariant: m.NONE,
        promptPlacement: "ADS_MANAGER_DESKTOP_IN_CHAT",
        shouldUseIGGraphQLQuery: !1,
      },
      _ =
        ((d = {}),
        (d["Ads Manager (Campaigns)"] = {
          assetAutoSelectVariant: m.ADS_MANAGER,
        }),
        (d["Account Overview"] = {}),
        (d["Ad Account Settings"] = {}),
        (d["Ads Reporting"] = {}),
        (d["Advertising Settings"] = {}),
        (d.Audiences = {}),
        (d["Automated Rules"] = {}),
        (d["Billing & Payments"] = {
          promptPlacement: "META_BUSINESS_SUITE_BILLING_PAYMENTS",
        }),
        (d["Creation Package"] = {}),
        (d["Creative Reporting"] = {}),
        (d["Business Support"] = { promptPlacement: "BUSINESS_SUPPORT_HOME" }),
        (d["Business Help Center"] = {
          promptPlacement: "BUSINESS_HELP_CENTER",
        }),
        (d.MBS = {
          assetAutoSelectVariant: m.MBS,
          promptPlacement: "META_BUSINESS_SUITE",
          tabs:
            ((s = {}),
            (s.Home = { promptPlacement: "META_BUSINESS_SUITE_HOME" }),
            (s.Inbox = { promptPlacement: "META_BUSINESS_SUITE_INBOX" }),
            (s["Ad Center"] = { promptPlacement: "META_BUSINESS_SUITE_ADS" }),
            (s.Content = { promptPlacement: "META_BUSINESS_SUITE_CONTENT" }),
            (s.Planner = { promptPlacement: "META_BUSINESS_SUITE_PLANNER" }),
            (s["Campaign Planner"] = {
              promptPlacement: "META_BUSINESS_SUITE_REACH_PLANNER",
            }),
            (s.Insights = { promptPlacement: "META_BUSINESS_SUITE_INSIGHTS" }),
            (s.Settings = { promptPlacement: "META_BUSINESS_SUITE_SETTINGS" }),
            (s.Payments = {
              promptPlacement: "META_BUSINESS_SUITE_BILLING_PAYMENTS",
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
        (d["Facebook Ad Center"] = {
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
        (d.Instagram = {
          promptPlacement: "IG_AD_TOOLS",
          shouldUseIGGraphQLQuery: !0,
          tabs:
            ((c = {}),
            (c["Instagram Boost Page"] = { promptPlacement: "IG_BOOST" }),
            c),
        }),
        (d["Organization Manager"] = {
          promptPlacement: "ORGANIZATION_MANAGER",
        }),
        (d["Events Manager"] = {}),
        (d["Commerce Manager"] = { promptPlacement: "COMMERCE_MANAGER" }),
        (d["Monetization Manager"] = {}),
        (d["WhatsApp Manager"] = { promptPlacement: "WHATSAPP_MANAGER" }),
        (d["Brand Safety"] = { promptPlacement: "BRAND_SAFETY_HUB" }),
        d);
    function f(t, n) {
      if (t == null) return p;
      var r = _[t];
      if (r == null) return p;
      var o = r.tabs,
        a = babelHelpers.objectWithoutPropertiesLoose(r, e),
        i = n != null && o != null ? o[n] : null;
      return i == null
        ? babelHelpers.extends({}, p, a)
        : babelHelpers.extends({}, p, a, i);
    }
    function g(e) {
      return e === "MBS" || e === "MBS (iOS)" || e === "MBS (Android)";
    }
    ((l.AssetAutoSelectVariants = m),
      (l.getMAIBASurfaceConfig = f),
      (l.isMBSSurfaceTool = g));
  },
  98,
);
