__d(
  "WAWebBotMetadataProtoUtils",
  [
    "WALogger",
    "WAWebAddBotTransparencyNotice",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebParseAiMediaCollectionMetadata",
    "WAWebParseBotSessionTransparencyNotice",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      var a, i, l, s, m, p, _, f, g, h, y;
      n === void 0 && (n = !1);
      var C =
          t == null || (a = t.botMetadata) == null
            ? void 0
            : a.botGroupMetadata,
        b = (i = C == null ? void 0 : C.participantsMetadata) != null ? i : [],
        v =
          ((l = e.id) == null || (l = l.remote) == null
            ? void 0
            : l.isGroup()) === !0 &&
          u(b, o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled);
      if (C != null && v) {
        var S,
          R = (S = e.id) == null ? void 0 : S.participant,
          L = [];
        if (R != null && R.isFbidBot()) L.push(R);
        else {
          var E, k;
          L.push.apply(
            L,
            (E =
              (k = e.mentionedJidList) == null
                ? void 0
                : k.filter(function (e) {
                    return e instanceof r("WAWebWid") && e.isFbidBot();
                  })) != null
              ? E
              : [],
          );
        }
        var I = c(b, L);
        I != null && (e.botGroupParticipant = I);
      }
      var T =
        t == null || (s = t.botMetadata) == null ? void 0 : s.botResponseId;
      if ((T != null && (e.botResponseId = T), !n)) {
        ((t == null ||
        (m = t.botMetadata) == null ||
        (m = m.pluginMetadata) == null
          ? void 0
          : m.pluginType) != null
          ? (e.botPluginType = t.botMetadata.pluginMetadata.pluginType)
          : (t == null || (p = t.botMetadata) == null
              ? void 0
              : p.pluginMetadata) != null && (e.botPluginMaybeParent = !0),
          (t == null ||
          (_ = t.botMetadata) == null ||
          (_ = _.pluginMetadata) == null
            ? void 0
            : _.referenceIndex) != null &&
            (e.botPluginReferenceIndex =
              t.botMetadata.pluginMetadata.referenceIndex),
          (t == null ||
          (f = t.botMetadata) == null ||
          (f = f.pluginMetadata) == null
            ? void 0
            : f.provider) != null &&
            (e.botPluginSearchProvider = t.botMetadata.pluginMetadata.provider),
          (t == null ||
          (g = t.botMetadata) == null ||
          (g = g.pluginMetadata) == null
            ? void 0
            : g.searchProviderUrl) != null &&
            (e.botPluginSearchUrl =
              t.botMetadata.pluginMetadata.searchProviderUrl),
          (t == null ||
          (h = t.botMetadata) == null ||
          (h = h.pluginMetadata) == null
            ? void 0
            : h.thumbnailCdnUrl) != null &&
            (e.botReelPluginThumbnailCdnUrl =
              t.botMetadata.pluginMetadata.thumbnailCdnUrl),
          (t == null ||
          (y = t.botMetadata) == null ||
          (y = y.pluginMetadata) == null
            ? void 0
            : y.searchQuery) != null &&
            (e.botPluginSearchQuery =
              t.botMetadata.pluginMetadata.searchQuery));
        var D = o(
          "WAWebParseAiMediaCollectionMetadata",
        ).parseAiMediaCollectionMetadata(t);
        (D != null && (e.aiMediaCollectionInfo = D), d(e, t));
      }
    }
    function u(e, t) {
      return e.some(function (e) {
        var n = e.botFbid;
        if (n == null || n === "") return !1;
        try {
          return t(o("WAWebWidFactory").createWid(n + "@bot"));
        } catch (e) {
          return !1;
        }
      });
    }
    function c(t, n) {
      var r = null,
        a = function () {
          var t = l.botFbid;
          if (t == null || t === "") return 0;
          try {
            var a = o("WAWebWidFactory").createWid(t + "@bot"),
              i = o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(a),
              s = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(a);
            if (!o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(a))
              return 0;
            if (
              (r == null && (i || s) && (r = a),
              n.some(function (e) {
                return e.equals(a);
              }))
            )
              return { v: a };
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
        },
        i;
      for (var l of t) if (((i = a()), i !== 0 && i)) return i.v;
      return r;
    }
    function d(e, t) {
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
    ((l.parseBotMetadataProto = s), (l.hasGroupBotMetadata = u));
  },
  98,
);
