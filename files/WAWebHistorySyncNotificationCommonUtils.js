__d(
  "WAWebHistorySyncNotificationCommonUtils",
  [
    "WALogger",
    "WAWebCurrentUser",
    "WAWebHistorySyncLidChatGating",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncMsgKeyOverrideUtils",
    "WAWebParseWebMessageInfoApi",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b;
    function v(t) {
      var n = null;
      if (o("WAWebCurrentUser").isEmployee())
        try {
          n = new Set(
            t.map(function (e) {
              var t = e.lid;
              return t.toString();
            }),
          );
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[history] could not create allLidMapping",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        }
      return n;
    }
    function S(e) {
      if (e == null) return "N/A";
      var t = 0,
        n = [];
      for (var r of e) if ((n.push(r), t++ === 50)) break;
      return n.join(",");
    }
    function R(e, t, n, r) {}
    function L(e) {
      var t = e.allLidMapping,
        n = e.chunkInfo,
        a = e.dbChatId,
        i = e.historyLidPnMappings,
        l = e.message,
        s = e.protobufChatId,
        u = e.totalMissingMapping,
        c = null;
      try {
        l != null &&
          (c = o("WAWebParseWebMessageInfoApi").parseWebMessageInfo(l, i));
      } catch (e) {
        var d = r("getErrorSafe")(e);
        (o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] parseWebMessageInfo failed",
              ])),
          )
          .catching(d),
          r("gkx")("26258") ||
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] parseWebMessageInfo failed on msg key ",
                    ", msg type: ",
                    " in chunk ",
                    "",
                  ])),
                l == null ? void 0 : l.key.id,
                l == null ? void 0 : l.messageStubType,
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(n),
              )
              .sendLogs("parseWebMessageInfo failed during history sync"));
      }
      return (
        o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() &&
        s.isRegularUserPn() &&
        c != null &&
        c.id != null
          ? a.isLid()
            ? (c = o(
                "WAWebHistorySyncMsgKeyOverrideUtils",
              ).maybeOverrideMsgKeyRemoteWithChatId(c, a))
            : o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] parseWebMsgInfoAndReturnNullOnFailure: expected dbChatId to be LID but got ",
                      "",
                    ])),
                  a.toLogString(),
                )
                .sendLogs("history-sync-forced-lid-chat-dbChatId-not-lid")
          : c != null &&
            c.id != null &&
            s.isRegularUserPn() &&
            (c = o(
              "WAWebHistorySyncMsgKeyOverrideUtils",
            ).maybeOverrideMsgKeyRemoteWithChatId(c, s, !0)),
        c
      );
    }
    function E(e) {
      o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "[history] start to report missing mapping. is sw enabled: ",
            "",
          ])),
        o("WAWebUserPrefsNotifications")
          .getGlobalOfflineNotifications()
          .toString(),
      );
      try {
        var t = [];
        (e.forEach(function (e, n) {
          e > 0 && t.length < 3 && t.push({ type: n, count: e });
        }),
          t.length > 0 &&
            (o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "total missing mapping: ",
                  "",
                ])),
              t
                .map(function (e) {
                  return e.type + ": " + e.count;
                })
                .join(", "),
            ),
            o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "missing Lid mapping in history Sync",
                  ])),
              )
              .sendLogs("missing Lid mapping in history Sync")));
      } catch (e) {
        o("WALogger")
          .ERROR(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[history] could not calculate missing mapping",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
      o("WALogger").LOG(
        b ||
          (b = babelHelpers.taggedTemplateLiteralLoose([
            "[history] end to report missing mapping",
          ])),
      );
    }
    ((l.getLidMappingAsStringSet = v),
      (l.getLidsForLogging = S),
      (l.parseWebMsgInfoAndReturnNullOnFailure = L),
      (l.reportMissingMapping = E));
  },
  98,
);
