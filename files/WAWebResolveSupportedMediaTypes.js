__d(
  "WAWebResolveSupportedMediaTypes",
  [
    "WAWebBot3pMediaGating",
    "WAWebMediaGatingUtils",
    "WAWebPrimaryFeaturesModel",
    "WAWebResolveBotProfile",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return (t = s(e)) != null
        ? t
        : o("WAWebMediaGatingUtils").getSupportedMediaTypesForChat(e);
    }
    function s(e) {
      var t = c(e);
      return t == null
        ? null
        : o("WAWebBot3pMediaGating").getBot3pSupportedMediaTypes(t);
    }
    function u(e) {
      var t = s(e);
      return t != null && t.size > 0;
    }
    function c(e) {
      return o("WAWebBot3pMediaGating").getBot3pMediaSupportMode(
        o("WAWebResolveBotProfile").resolveBotSupportInput(e.id),
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.aiBotIntegrationEnabled,
      );
    }
    ((l.resolveSupportedMediaTypesForChat = e),
      (l.resolveBot3pSupportedMediaTypes = s),
      (l.isBot3pMediaInputEnabled = u),
      (l.resolveBot3pMediaMode = c));
  },
  98,
);
