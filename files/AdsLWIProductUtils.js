__d(
  "AdsLWIProductUtils",
  ["BoostedComponentAppID", "BoostedComponentProduct", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        ((e = {}),
        (e[(u = r("BoostedComponentAppID")).BOOSTED_APP_INSTALL] =
          "boosted_app_install"),
        (e[u.BOOSTED_AUTOMATED_ADS] = "boosted_automated_ads"),
        (e[u.BOOSTED_AUTOMOTIVE_INVENTORY] = "boosted_automotive_inventory"),
        (e[u.BOOSTED_CCTA] = "boosted_cta"),
        (e[u.BOOSTED_EVENT] = "boosted_event"),
        (e[u.BOOSTED_FB_STORY] = "boosted_fb_story"),
        (e[u.BOOSTED_INSTAGRAM_MEDIA] = "boosted_instagram_media"),
        (e[u.BOOSTED_LEAD_GEN] = "boosted_lead_gen"),
        (e[u.BOOSTED_LOCAL_AWARENESS] = "boosted_local_awareness"),
        (e[u.BOOSTED_PAGE] = "boosted_cta"),
        (e[u.BOOSTED_PAGELIKE] = "boosted_pagelike"),
        (e[u.BOOSTED_POST] = "boosted_post"),
        (e[u.BOOSTED_WEBSITE] = "boosted_website"),
        (e[u.BOOSTED_PURCHASE] = "boosted_purchase"),
        (e[u.BOOSTED_FB_INSTAGRAM_MEDIA] = "boosted_fb_instagram_media"),
        (e[u.BOOSTED_MARKETPLACE_LISTING] = "boosted_marketplace_listing"),
        (e[u.BOOSTED_USER_POST] = "boosted_user_post"),
        e);
    function d(e) {
      return c[e];
    }
    var m =
      ((s = {}),
      (s.boosted_app_install = u.BOOSTED_APP_INSTALL),
      (s.boosted_automated_ads = u.BOOSTED_AUTOMATED_ADS),
      (s.boosted_automotive_inventory = u.BOOSTED_AUTOMOTIVE_INVENTORY),
      (s.boosted_cta = u.BOOSTED_PAGE),
      (s.boosted_event = u.BOOSTED_EVENT),
      (s.boosted_fb_story = u.BOOSTED_FB_STORY),
      (s.boosted_instagram_media = u.BOOSTED_INSTAGRAM_MEDIA),
      (s.boosted_lead_gen = u.BOOSTED_LEAD_GEN),
      (s.boosted_local_awareness = u.BOOSTED_LOCAL_AWARENESS),
      (s.boosted_pagelike = u.BOOSTED_PAGELIKE),
      (s.boosted_post = u.BOOSTED_POST),
      (s.boosted_website = u.BOOSTED_WEBSITE),
      (s.boosted_purchase = u.BOOSTED_PURCHASE),
      (s.boosted_fb_instagram_media = u.BOOSTED_FB_INSTAGRAM_MEDIA),
      (s.boosted_marketplace_listing = u.BOOSTED_MARKETPLACE_LISTING),
      (s.boosted_user_post = u.BOOSTED_USER_POST),
      s);
    function p(e) {
      return m[e];
    }
    function _(e) {
      return (
        r("vulture")("Gmofjcm2xZsPO1L4KdROtgReqYc="),
        Object.values(r("BoostedComponentProduct")).includes(e)
      );
    }
    var f = new Set([
      "boosted_app_install",
      "boosted_automated_ads",
      "boosted_automotive_inventory",
      "boosted_cta",
      "boosted_lead_gen",
      "boosted_local_awareness",
      "boosted_pagelike",
      "boosted_website",
      "boosted_purchase",
      "boosted_marketplace_listing",
    ]);
    function g(e) {
      return f.has(e);
    }
    ((l.convertAppIDToProduct = d),
      (l.convertProductToAppID = p),
      (l.isAdsLWIProduct = _),
      (l.isBoostedActionBasedProduct = g));
  },
  98,
);
