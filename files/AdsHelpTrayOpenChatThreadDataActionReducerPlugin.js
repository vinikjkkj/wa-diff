__d(
  "AdsHelpTrayOpenChatThreadDataActionReducerPlugin",
  ["AdsHelpTrayNavigationHelper", "AdsOsmipChatTypeUtils", "CSS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.navigationStack,
            r = n.data,
            a = r.chatInitiationArgs,
            i = r.chatType,
            l = r.existingThreadInfo,
            s = r.isNewThread,
            u = r.isThreadUpdate,
            c = u === void 0 ? !1 : u,
            d = r.maibaConversationId,
            m = r.originatingAdsAIEntrypoint,
            p = r.setIsHelpTrayOpen,
            _ = r.threadGenerationID,
            f = r.threadID,
            g = o("AdsHelpTrayNavigationHelper").getCurrentNavigationState(t),
            h = o("AdsOsmipChatTypeUtils").getOsmipChatType(g),
            y = h != null,
            C = {
              contentType: "CHAT",
              id: f,
              shouldReturnToHome: g.contentType === "SUPPORT_FORM",
              osmipExtraData: babelHelpers.extends(
                {
                  chatInitiationArgs: a,
                  existingThreadInfo: l,
                  isAdsAIChat: o("AdsOsmipChatTypeUtils").isAIChat(i),
                  isNewThread: s,
                  maibaConversationId: d,
                  originatingAdsAIEntrypoint: m,
                  threadGenerationID: _,
                },
                c && g.osmipExtraData,
              ),
            };
          if (o("AdsOsmipChatTypeUtils").isAIChat(i))
            e = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(e, C);
          else if (y) {
            var b,
              v =
                h === i &&
                (_ == null
                  ? g.id === f
                  : ((b = g.osmipExtraData) == null
                      ? void 0
                      : b.threadGenerationID) === _);
            if (c ? !v : v) return t;
            e = o("AdsHelpTrayNavigationHelper").replaceLastInNavigationStack(
              e,
              C,
            );
          } else {
            if (c) return t;
            e = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(e, C);
          }
          return (
            document.body &&
              o("CSS").conditionClass(document.body, "has-helptray", !0),
            p != null && p(!0),
            babelHelpers.extends({}, t, { isTrayOpen: !0, navigationStack: e })
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
