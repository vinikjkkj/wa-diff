__d(
  "WAWebE2EProtoParserForCtwaContext",
  [
    "WAWebCTWAGatingUtils",
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
        l = t.conversionDelaySeconds,
        s = t.conversionSource,
        u = t.ctwaPayload,
        c = t.ctwaSignals;
      (a != null && (n.alwaysShowAdAttribution = a),
        s != null && (n.conversionSource = s),
        l != null && (n.conversionDelaySeconds = l),
        c != null && u != null
          ? (n.conversionData = u)
          : i != null && (n.conversionData = i),
        c != null && (n.ctwaSignals = c));
      var d = t.externalAdReply;
      if (d != null) {
        ((n.sourceUrl = d.sourceUrl),
          (n.description = d.body),
          (n.title = d.title),
          d.thumbnail != null &&
            (n.thumbnail = o("WAWebE2EProtoParserApi").decodeBytes(
              d.thumbnail,
            )),
          (n.thumbnailUrl = d.thumbnailUrl),
          (n.mediaType = d.mediaType),
          (n.mediaUrl = d.mediaUrl));
        var m = o("WAWebLinkify").findLink(d.sourceUrl || "", !1, e.from);
        (m != null &&
          m.suspiciousCharacters != null &&
          m.suspiciousCharacters.size != null &&
          (n.isSuspiciousLink = m.suspiciousCharacters.size > 0),
          d.adContextPreviewDismissed != null &&
            o("WAWebCTWAGatingUtils").isHideAdContextIfSoftDismissed() &&
            (n.adContextPreviewDismissed = d.adContextPreviewDismissed),
          d.sourceApp != null && (n.sourceApp = d.sourceApp));
        var p = o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(d.sourceApp);
        p &&
          (d.greetingMessageBody != null &&
            (n.greetingMessageBody = d.greetingMessageBody),
          d.automatedGreetingMessageShown != null &&
            (n.automatedGreetingMessageShown = d.automatedGreetingMessageShown),
          d.ctaPayload != null && (n.ctaPayload = d.ctaPayload),
          d.sourceId != null && (n.sourceId = d.sourceId),
          d.originalImageUrl != null &&
            (n.originalImageUrl = d.originalImageUrl));
      }
      r("isEmptyObject")(n) || (e.ctwaContext = n);
    }
    l.parseCtwaContextProto = e;
  },
  98,
);
