__d(
  "WAWebMmSignalSharingConversationCounters",
  [
    "WALogger",
    "WAWebConversationCountersUtils",
    "WAWebDBUpdateChatTable",
    "WAWebMmSignalSharingModelUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return (
        o(
          "WAWebMmSignalSharingModelUtils",
        ).MM_SIGNAL_SHARING_COUNTED_MSG_TYPES.has(e.type) &&
        o(
          "WAWebMmSignalSharingModelUtils",
        ).isMmSignalSharingNewMessageParamsEligible(e)
      );
    }
    function u(e) {
      var t,
        n,
        r = o(
          "WAWebMmSignalSharingModelUtils",
        ).getMmSignalSharingExpirationWindowItem({ chat: e });
      return {
        depth: (t = r == null ? void 0 : r.conversationDepth) != null ? t : 0,
        repeat: (n = r == null ? void 0 : r.conversationRepeat) != null ? n : 0,
        lastMessageFromMe: r == null ? void 0 : r.lastMessageFromMe,
      };
    }
    function c(t, n) {
      var a,
        i,
        l = o(
          "WAWebMmSignalSharingModelUtils",
        ).getMmSignalSharingExpirationWindowItem({ chat: t }),
        s = t.mmSignalSharingExpirationWindow;
      if (!(l == null || s == null)) {
        var u = o("WAWebConversationCountersUtils").nextConversationCounters(
          {
            depth: (a = l.conversationDepth) != null ? a : 0,
            repeat: (i = l.conversationRepeat) != null ? i : 0,
            lastMessageFromMe: l.lastMessageFromMe,
          },
          n,
          !1,
        );
        ((l.conversationDepth = u.depth),
          (l.conversationRepeat = u.repeat),
          (l.lastMessageFromMe = u.lastMessageFromMe),
          o("WAWebDBUpdateChatTable")
            .updateChatTable(t.id, { mmSignalSharingExpirationWindow: s })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[mmSignalSharing] persist conversation counters failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("wa-mm-signal-sharing-counters-persist-failed");
            }));
      }
    }
    ((l.isMmSignalSharingCountedMsg = s),
      (l.getMmSignalSharingConversationCounters = u),
      (l.advanceMmSignalSharingConversationCounters = c));
  },
  98,
);
