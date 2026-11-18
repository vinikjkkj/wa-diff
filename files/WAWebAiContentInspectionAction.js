__d(
  "WAWebAiContentInspectionAction",
  ["WAWebABProps", "WAWebExternalLink.react", "WAWebNewsletterGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "https://meta.com/actions/ai-content-check";
    function s() {
      o("WAWebExternalLink.react").openExternalLink(e);
    }
    function u(e) {
      return (
        (e == null ? void 0 : e.isNewsletter()) === !0 &&
        o("WAWebNewsletterGatingUtils").isChannelSGIUiLabelEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_content_inspection_url_enabled",
        ) === !0
      );
    }
    ((l.openAiContentInspectionTool = s), (l.isAiContentInspectionEnabled = u));
  },
  98,
);
