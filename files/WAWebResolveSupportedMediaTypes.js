__d(
  "WAWebResolveSupportedMediaTypes",
  [
    "WAWebBot3pMediaGating",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebMediaGatingUtils",
    "WAWebResolveBotProfile",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return (t = u(e)) != null
        ? t
        : o("WAWebMediaGatingUtils").getSupportedMediaTypesForChat(e);
    }
    function s(e) {
      var t;
      return (t = c(e.chatId)) != null
        ? t
        : o("WAWebMediaGatingUtils").getSupportedMediaTypesForChatFor(e);
    }
    function u(e) {
      return c(e.id);
    }
    function c(e) {
      var t = p(e);
      return t == null
        ? null
        : o("WAWebBot3pMediaGating").getBot3pSupportedMediaTypes(t);
    }
    function d(e) {
      var t = u(e);
      return t != null && t.size > 0;
    }
    function m(e) {
      return p(e.id);
    }
    function p(e) {
      return o("WAWebBot3pMediaGating").getBot3pMediaSupportMode(
        o("WAWebResolveBotProfile").resolveBotSupportInput(e),
        o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures(),
      );
    }
    function _(e, t, n) {
      return o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(e, t, n);
    }
    function f(e, t) {
      return o("WAWebMediaGatingUtils").supportsMultipleUploads(e, t);
    }
    ((l.resolveSupportedMediaTypesForChat = e),
      (l.resolveSupportedMediaTypesForChatFor = s),
      (l.resolveBot3pSupportedMediaTypes = u),
      (l.isBot3pMediaInputEnabled = d),
      (l.resolveBot3pMediaMode = m),
      (l.resolveMaxNumberSelectableMedia = _),
      (l.resolveSupportsMultipleUploads = f));
  },
  98,
);
