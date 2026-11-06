__d(
  "WAWebQbmThreadLevelActionLogEventLazy",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebQbmThreadMsgs",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumPsaMessageRemoveEntryPoint",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      try {
        var t;
        if (!r("justknobx")._("7286")) return;
        var a = e.chat;
        if (
          a == null ||
          a.id.isBot() ||
          (a.contact.isBusiness !== !0 && a.contact.isEnterprise !== !0)
        )
          return;
        var i = o("WAWebQbmThreadMsgs").getLoadedThreadMsgs(a);
        (s || (s = n("Promise")))
          .all([
            r("JSResourceForInteraction")("WAWebQbmThreadLevelActionLogEvent")
              .__setRef("WAWebQbmThreadLevelActionLogEventLazy")
              .load(),
            (t = i.businessMsg) != null
              ? t
              : o("WAWebQbmThreadMsgs").findLastIncomingMsgInStorage(a),
            o("WAWebQbmThreadMsgs")
              .getStoredThreadAge(a)
              .catch(function (e) {
                return (p(e), null);
              }),
          ])
          .then(function (t) {
            var n = t[0],
              r = t[1],
              o = t[2];
            return n.logQbmThreadLevelAction(
              e,
              babelHelpers.extends({}, i, { businessMsg: r, threadAge: o }),
            );
          })
          .catch(p);
      } catch (e) {
        p(e);
      }
    }
    function c(e, t) {
      u({
        chat: e,
        isBulkAction: !0,
        threadActionEntryPoint: "CHATLIST",
        threadLevelAction: t,
      });
    }
    function d(e) {
      return e ===
        o("WAWebWamEnumPsaMessageRemoveEntryPoint")
          .PSA_MESSAGE_REMOVE_ENTRY_POINT.ARCHIVE_FROM_CHAT_LIST ||
        e ===
          o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.UNARCHIVE_FROM_ARCHIVED_CHAT_LIST ||
        e ===
          o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CHAT_LIST
        ? "CHATLIST"
        : e ===
            o("WAWebWamEnumPsaMessageRemoveEntryPoint")
              .PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CONTACT_INFO
          ? "PROFILE_VIEW"
          : "OTHER";
    }
    function m(e) {
      return e ===
        o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CHAT_LIST_SCREEN
        ? "CHATLIST"
        : e === o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONTACT_INFO
          ? "PROFILE_VIEW"
          : "OTHER";
    }
    function p(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[qbm] failed to log qbm_thread_level_action",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("qbm-thread-level-action-log-failed");
    }
    ((l.logQbmThreadLevelAction = u),
      (l.logBulkThreadAction = c),
      (l.threadActionEntryPointFromPsaRemoveEntryPoint = d),
      (l.threadActionEntryPointFromMuteEntryPoint = m));
  },
  98,
);
