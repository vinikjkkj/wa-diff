__d(
  "WAWebBotMetadataProtoUtils",
  [
    "WALogger",
    "WAWebAddBotTransparencyNotice",
    "WAWebBotGroupGatingUtils",
    "WAWebParseAiMediaCollectionMetadata",
    "WAWebParseBotSessionTransparencyNotice",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, r) {
      var a, i, l, s, c, d, m, p;
      if (
        (r === void 0 && (r = !1),
        (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() ||
          o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) &&
          (n == null || (a = n.botMetadata) == null
            ? void 0
            : a.botGroupMetadata) != null)
      )
        try {
          var _,
            f =
              n == null ||
              (_ = n.botMetadata) == null ||
              (_ = _.botGroupMetadata) == null ||
              (_ = _.participantsMetadata) == null ||
              (_ = _[0]) == null
                ? void 0
                : _.botFbid;
          if (
            (f != null &&
              (t.botGroupParticipant = o("WAWebWidFactory").createWid(
                f + "@bot",
              )),
            r === !0)
          )
            return;
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot group] botGroupMetadata failed with error: ",
                  "",
                ])),
              t,
            )
            .sendLogs("failed-to-process-bot-group-meta");
        }
      ((n == null ||
      (i = n.botMetadata) == null ||
      (i = i.pluginMetadata) == null
        ? void 0
        : i.pluginType) != null
        ? (t.botPluginType = n.botMetadata.pluginMetadata.pluginType)
        : (n == null || (l = n.botMetadata) == null
            ? void 0
            : l.pluginMetadata) != null && (t.botPluginMaybeParent = !0),
        (n == null ||
        (s = n.botMetadata) == null ||
        (s = s.pluginMetadata) == null
          ? void 0
          : s.referenceIndex) != null &&
          (t.botPluginReferenceIndex =
            n.botMetadata.pluginMetadata.referenceIndex),
        (n == null ||
        (c = n.botMetadata) == null ||
        (c = c.pluginMetadata) == null
          ? void 0
          : c.provider) != null &&
          (t.botPluginSearchProvider = n.botMetadata.pluginMetadata.provider),
        (n == null ||
        (d = n.botMetadata) == null ||
        (d = d.pluginMetadata) == null
          ? void 0
          : d.searchProviderUrl) != null &&
          (t.botPluginSearchUrl =
            n.botMetadata.pluginMetadata.searchProviderUrl),
        (n == null ||
        (m = n.botMetadata) == null ||
        (m = m.pluginMetadata) == null
          ? void 0
          : m.thumbnailCdnUrl) != null &&
          (t.botReelPluginThumbnailCdnUrl =
            n.botMetadata.pluginMetadata.thumbnailCdnUrl),
        (n == null ||
        (p = n.botMetadata) == null ||
        (p = p.pluginMetadata) == null
          ? void 0
          : p.searchQuery) != null &&
          (t.botPluginSearchQuery = n.botMetadata.pluginMetadata.searchQuery));
      var g = o(
        "WAWebParseAiMediaCollectionMetadata",
      ).parseAiMediaCollectionMetadata(n);
      (g != null && (t.aiMediaCollectionInfo = g), u(t, n));
    }
    function u(e, t) {
      var n,
        r = e.id.remote,
        a = o(
          "WAWebParseBotSessionTransparencyNotice",
        ).parseBotSessionTransparencyNotice(r, t);
      if (a != null) {
        o("WAWebAddBotTransparencyNotice").addBotSessionTransparencyNotice(
          r,
          a,
        );
        return;
      }
      if (
        (t == null || (n = t.botMetadata) == null
          ? void 0
          : n.messageDisclaimerText) != null
      ) {
        var i;
        e.botMessageDisclaimerText =
          t == null || (i = t.botMetadata) == null
            ? void 0
            : i.messageDisclaimerText;
      }
    }
    l.parseBotMetadataProto = s;
  },
  98,
);
