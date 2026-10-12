__d(
  "WAWebBotModeSelectionProtoUtils",
  [
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotModeSelectionTypes",
    "WAWebBotUtils",
    "WAWebProtobufsAICommon.pb",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(e) {
      return e ===
        o("WAWebProtobufsAICommon.pb")
          .BotModeSelectionMetadata$BotUserSelectionMode.DEFAULT_MODE
        ? o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
        : e ===
            o("WAWebProtobufsAICommon.pb")
              .BotModeSelectionMetadata$BotUserSelectionMode.THINK_HARD_MODE
          ? o("WAWebBotModeSelectionTypes").BotUserSelectionMode.ThinkHard
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function p(e) {
      return e === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
        ? o("WAWebProtobufsAICommon.pb")
            .BotModeSelectionMetadata$BotUserSelectionMode.DEFAULT_MODE
        : e === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.ThinkHard
          ? o("WAWebProtobufsAICommon.pb")
              .BotModeSelectionMetadata$BotUserSelectionMode.THINK_HARD_MODE
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function _(t, n) {
      var r,
        a,
        i = (r = t.id) == null ? void 0 : r.remote;
      if (!(i == null || !o("WAWebBotUtils").isMetaAiBot(i))) {
        var l =
          n == null || (a = n.botMetadata) == null
            ? void 0
            : a.botModeSelectionMetadata;
        if (l == null) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[parseBotModeSelectionMetadataProto] no metadata",
              ])),
          );
          return;
        }
        if (o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()) {
          var p = l.overrideMode;
          p != null && p.length > 0
            ? ((t.botModeOverride = p),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseBotModeSelectionMetadataProto] override=",
                    "",
                  ])),
                p.join(", "),
              ))
            : o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseBotModeSelectionMetadataProto] no override mode",
                  ])),
              );
        }
        var _ = l.mode;
        if (_ == null || _.length === 0) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[parseBotModeSelectionMetadataProto] empty mode array",
              ])),
          );
          return;
        }
        var f = _.map(m);
        ((t.botModeSelection = f),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[parseBotModeSelectionMetadataProto] modes=",
                "",
              ])),
            f.join(", "),
          ));
      }
    }
    ((l.getBotSelectionModeFromProto = m),
      (l.getProtoModeFromBotSelectionMode = p),
      (l.parseBotModeSelectionMetadataProto = _));
  },
  98,
);
