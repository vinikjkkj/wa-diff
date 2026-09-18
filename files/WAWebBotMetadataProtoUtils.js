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
      var a, i, l, s, c, d, m, p, _;
      if (
        (r === void 0 && (r = !1),
        (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() ||
          o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) &&
          (n == null || (a = n.botMetadata) == null
            ? void 0
            : a.botGroupMetadata) != null)
      )
        try {
          var f,
            g =
              n == null ||
              (f = n.botMetadata) == null ||
              (f = f.botGroupMetadata) == null ||
              (f = f.participantsMetadata) == null ||
              (f = f[0]) == null
                ? void 0
                : f.botFbid;
          if (
            (g != null &&
              (t.botGroupParticipant = o("WAWebWidFactory").createWid(
                g + "@bot",
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
      var h =
        n == null || (i = n.botMetadata) == null ? void 0 : i.botResponseId;
      (h != null && (t.botResponseId = h),
        (n == null ||
        (l = n.botMetadata) == null ||
        (l = l.pluginMetadata) == null
          ? void 0
          : l.pluginType) != null
          ? (t.botPluginType = n.botMetadata.pluginMetadata.pluginType)
          : (n == null || (s = n.botMetadata) == null
              ? void 0
              : s.pluginMetadata) != null && (t.botPluginMaybeParent = !0),
        (n == null ||
        (c = n.botMetadata) == null ||
        (c = c.pluginMetadata) == null
          ? void 0
          : c.referenceIndex) != null &&
          (t.botPluginReferenceIndex =
            n.botMetadata.pluginMetadata.referenceIndex),
        (n == null ||
        (d = n.botMetadata) == null ||
        (d = d.pluginMetadata) == null
          ? void 0
          : d.provider) != null &&
          (t.botPluginSearchProvider = n.botMetadata.pluginMetadata.provider),
        (n == null ||
        (m = n.botMetadata) == null ||
        (m = m.pluginMetadata) == null
          ? void 0
          : m.searchProviderUrl) != null &&
          (t.botPluginSearchUrl =
            n.botMetadata.pluginMetadata.searchProviderUrl),
        (n == null ||
        (p = n.botMetadata) == null ||
        (p = p.pluginMetadata) == null
          ? void 0
          : p.thumbnailCdnUrl) != null &&
          (t.botReelPluginThumbnailCdnUrl =
            n.botMetadata.pluginMetadata.thumbnailCdnUrl),
        (n == null ||
        (_ = n.botMetadata) == null ||
        (_ = _.pluginMetadata) == null
          ? void 0
          : _.searchQuery) != null &&
          (t.botPluginSearchQuery = n.botMetadata.pluginMetadata.searchQuery));
      var y = o(
        "WAWebParseAiMediaCollectionMetadata",
      ).parseAiMediaCollectionMetadata(n);
      (y != null && (t.aiMediaCollectionInfo = y), u(t, n));
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
