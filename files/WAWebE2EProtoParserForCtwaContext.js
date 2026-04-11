__d(
  "WAWebE2EProtoParserForCtwaContext",
  [
    "WAWebBizGatingUtils",
    "WAWebCtwaAGMUtils",
    "WAWebE2EProtoParserApi",
    "WAWebLinkify",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = {},
        a = t.alwaysShowAdAttribution,
        i = t.conversionData,
        l = t.conversionSource,
        s = t.ctwaPayload,
        u = t.ctwaSignals;
      (a != null && (n.alwaysShowAdAttribution = a),
        l != null && (n.conversionSource = l),
        u != null && s != null
          ? (n.conversionData = s)
          : i != null && (n.conversionData = i),
        u != null && (n.ctwaSignals = u));
      var c = t.externalAdReply;
      if (c != null) {
        ((n.sourceUrl = c.sourceUrl),
          (n.description = c.body),
          (n.title = c.title),
          c.thumbnail != null &&
            (n.thumbnail = o("WAWebE2EProtoParserApi").decodeBytes(
              c.thumbnail,
            )),
          (n.thumbnailUrl = c.thumbnailUrl),
          (n.mediaType = c.mediaType),
          (n.mediaUrl = c.mediaUrl));
        var d = o("WAWebLinkify").findLink(c.sourceUrl || "", !1, e.from);
        (d != null &&
          d.suspiciousCharacters != null &&
          d.suspiciousCharacters.size != null &&
          (n.isSuspiciousLink = d.suspiciousCharacters.size > 0),
          c.adContextPreviewDismissed != null &&
            o("WAWebBizGatingUtils").isHideAdContextIfSoftDismissed() &&
            (n.adContextPreviewDismissed = c.adContextPreviewDismissed),
          c.sourceApp != null && (n.sourceApp = c.sourceApp));
        var m = o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(c.sourceApp);
        m &&
          (c.greetingMessageBody != null &&
            (n.greetingMessageBody = c.greetingMessageBody),
          c.automatedGreetingMessageShown != null &&
            (n.automatedGreetingMessageShown = c.automatedGreetingMessageShown),
          c.ctaPayload != null && (n.ctaPayload = c.ctaPayload),
          c.sourceId != null && (n.sourceId = c.sourceId),
          c.originalImageUrl != null &&
            (n.originalImageUrl = c.originalImageUrl));
      }
      r("isEmptyObject")(n) || (e.ctwaContext = n);
    }
    l.parseCtwaContextProto = e;
  },
  98,
);
