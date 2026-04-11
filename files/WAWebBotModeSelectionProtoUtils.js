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
    var e, s, u, c, d, m;
    function p(e) {
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
    function _(e) {
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
    function f(e) {
      var t = [];
      for (var n of e) {
        var r = p(n);
        t.push(r);
      }
      return t;
    }
    function g(t, n) {
      var r,
        a,
        i = (r = t.id) == null ? void 0 : r.remote;
      if (!(i == null || !o("WAWebBotUtils").isMetaAiBot(i))) {
        if (!o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[parseBotModeSelectionMetadataProto] AI mode disabled",
              ])),
          );
          return;
        }
        var l =
          n == null || (a = n.botMetadata) == null
            ? void 0
            : a.botModeSelectionMetadata;
        if (l == null) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[parseBotModeSelectionMetadataProto] no metadata",
              ])),
          );
          return;
        }
        if (o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()) {
          var _ = l.overrideMode;
          _ != null && _.length > 0
            ? ((t.botModeOverride = _),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseBotModeSelectionMetadataProto] override=",
                    "",
                  ])),
                _.join(", "),
              ))
            : o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseBotModeSelectionMetadataProto] no override mode",
                  ])),
              );
        }
        var f = l.mode;
        if (f == null || f.length === 0) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[parseBotModeSelectionMetadataProto] empty mode array",
              ])),
          );
          return;
        }
        var g = f.map(p);
        ((t.botModeSelection = g),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[parseBotModeSelectionMetadataProto] modes=",
                "",
              ])),
            g.join(", "),
          ));
      }
    }
    ((l.getBotSelectionModeFromProto = p),
      (l.getProtoModeFromBotSelectionMode = _),
      (l.convertProtoModeArrayToInternal = f),
      (l.parseBotModeSelectionMetadataProto = g));
  },
  98,
);
