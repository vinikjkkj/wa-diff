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
      var a, i, l, s, m, _, f, g, h, y, C;
      n === void 0 && (n = !1);
      var b =
          t == null || (a = t.botMetadata) == null
            ? void 0
            : a.botGroupMetadata,
        v = (i = b == null ? void 0 : b.participantsMetadata) != null ? i : [],
        S =
          ((l = e.id) == null || (l = l.remote) == null
            ? void 0
            : l.isGroup()) === !0 &&
          u(v, o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled);
      if (b != null && S) {
        var R,
          L = (R = e.id) == null ? void 0 : R.participant,
          E = [];
        if (L != null && L.isFbidBot()) E.push(L);
        else {
          var k, I;
          E.push.apply(
            E,
            (k =
              (I = e.mentionedJidList) == null
                ? void 0
                : I.filter(function (e) {
                    return e instanceof r("WAWebWid") && e.isFbidBot();
                  })) != null
              ? k
              : [],
          );
        }
        var T = c(e, v),
          D = d(T, E);
        D != null && (e.botGroupParticipant = D);
      }
      var x =
        t == null || (s = t.botMetadata) == null ? void 0 : s.botResponseId;
      if ((x != null && (e.botResponseId = x), !n)) {
        ((t == null ||
        (m = t.botMetadata) == null ||
        (m = m.pluginMetadata) == null
          ? void 0
          : m.pluginType) != null
          ? (e.botPluginType = t.botMetadata.pluginMetadata.pluginType)
          : (t == null || (_ = t.botMetadata) == null
              ? void 0
              : _.pluginMetadata) != null && (e.botPluginMaybeParent = !0),
          (t == null ||
          (f = t.botMetadata) == null ||
          (f = f.pluginMetadata) == null
            ? void 0
            : f.referenceIndex) != null &&
            (e.botPluginReferenceIndex =
              t.botMetadata.pluginMetadata.referenceIndex),
          (t == null ||
          (g = t.botMetadata) == null ||
          (g = g.pluginMetadata) == null
            ? void 0
            : g.provider) != null &&
            (e.botPluginSearchProvider = t.botMetadata.pluginMetadata.provider),
          (t == null ||
          (h = t.botMetadata) == null ||
          (h = h.pluginMetadata) == null
            ? void 0
            : h.searchProviderUrl) != null &&
            (e.botPluginSearchUrl =
              t.botMetadata.pluginMetadata.searchProviderUrl),
          (t == null ||
          (y = t.botMetadata) == null ||
          (y = y.pluginMetadata) == null
            ? void 0
            : y.thumbnailCdnUrl) != null &&
            (e.botReelPluginThumbnailCdnUrl =
              t.botMetadata.pluginMetadata.thumbnailCdnUrl),
          (t == null ||
          (C = t.botMetadata) == null ||
          (C = C.pluginMetadata) == null
            ? void 0
            : C.searchQuery) != null &&
            (e.botPluginSearchQuery =
              t.botMetadata.pluginMetadata.searchQuery));
        var $ = o(
          "WAWebParseAiMediaCollectionMetadata",
        ).parseAiMediaCollectionMetadata(t);
        ($ != null && (e.aiMediaCollectionInfo = $), p(e, t));
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
    function c(e, t) {
      var n = [];
      for (var r of t) {
        var o = r.botFbid;
        if (!(o == null || o === "")) {
          var a = m(o);
          a != null && n.push(a);
        }
      }
      return (n.length > 0 && (e.botGroupParticipants = n), n);
    }
    function d(e, t) {
      var n = null,
        r = function (r) {
          var e = o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(r),
            a = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(r);
          if (!o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(r))
            return 0;
          if (
            (n == null && (e || a) && (n = r),
            t.some(function (e) {
              return e.equals(r);
            }))
          )
            return { v: r };
        },
        a;
      for (var i of e) if (((a = r(i)), a !== 0 && a)) return a.v;
      return n;
    }
    function m(t) {
      try {
        return o("WAWebWidFactory").createWid(t + "@bot");
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot group] botGroupMetadata failed with error: ",
                  "",
                ])),
              t,
            )
            .sendLogs("failed-to-process-bot-group-meta"),
          null
        );
      }
    }
    function p(e, t) {
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
