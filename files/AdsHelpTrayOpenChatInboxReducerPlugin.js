__d(
  "AdsHelpTrayOpenChatInboxReducerPlugin",
  ["AdsHelpTrayNavigationHelper", "CSS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.navigationStack,
            r = !0,
            a = t.source,
            i = o("AdsHelpTrayNavigationHelper").getCurrentNavigationState(t);
          return (
            i.contentType !== "CHAT_INBOX"
              ? ((e = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(
                  e,
                  {
                    contentType: "CHAT_INBOX",
                    osmipExtraData: {
                      chatInitiationArgs: n.chatInitiationArgs,
                      originatingAdsAIEntrypoint: n.originatingAdsAIEntrypoint,
                    },
                  },
                )),
                n.source != null && (a = n.source))
              : n.shouldKeepOpen === !0
                ? (e = o(
                    "AdsHelpTrayNavigationHelper",
                  ).replaceLastInNavigationStack(e, {
                    contentType: "CHAT_INBOX",
                    osmipExtraData: {
                      chatInitiationArgs: n.chatInitiationArgs,
                      originatingAdsAIEntrypoint: n.originatingAdsAIEntrypoint,
                    },
                  }))
                : ((r = !1), (e = [])),
            document.body &&
              o("CSS").conditionClass(document.body, "has-helptray", r),
            n.setIsHelpTrayOpen != null && n.setIsHelpTrayOpen(r),
            babelHelpers.extends({}, t, {
              isTrayOpen: r,
              navigationStack: e,
              source: a,
            })
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
