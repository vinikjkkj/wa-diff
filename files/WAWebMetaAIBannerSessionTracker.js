__d(
  "WAWebMetaAIBannerSessionTracker",
  ["WAWebSessionStorage"],
  function (t, n, r, o, a, i, l) {
    var e = "wa_web_meta_ai_banner_session";
    function s(t) {
      try {
        if (r("WAWebSessionStorage") != null) {
          var n = r("WAWebSessionStorage").getItem(e),
            o = { dismissedBanners: [] };
          (n != null && n !== "" && (o = JSON.parse(n)),
            o.dismissedBanners.includes(t) ||
              (o.dismissedBanners.push(t),
              r("WAWebSessionStorage").setItem(e, JSON.stringify(o))));
        }
      } catch (e) {}
    }
    var u = { META_AI_CTA_BANNER: "MetaAICTABanner" };
    ((l.markMetaAIBannerDismissed = s), (l.MetaAIBannerTypes = u));
  },
  98,
);
