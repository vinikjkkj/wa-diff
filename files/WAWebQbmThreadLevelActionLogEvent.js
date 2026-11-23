__d(
  "WAWebQbmThreadLevelActionLogEvent",
  [
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebFrontendContactGetters",
    "WAWebInAppSignupInfoStore",
    "WAWebMuteGetters",
    "WAWebP2PPillsThreadOriginStore",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmThreadContext",
    "WAWebQbmThreadLevelActionWamEvent",
    "WAWebWamEnumThreadActionEntryPoint",
    "WAWebWamEnumThreadLevelAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "bodyUrlCountInt",
      "bodyUrlUniqueCountInt",
      "buttonValueJsonArray",
      "ctaUrlUniqueCountInt",
      "isBroadcastMessage",
      "messageFieldJsonArray",
      "messageIdHmac",
      "submessageFieldJsonArray",
      "urlUniqueCountInt",
    ];
    async function s(t, n) {
      var r = t.blockEntryPoint,
        a = t.chat,
        i = t.isBulkAction,
        l = t.threadActionEntryPoint,
        s = t.threadLevelAction;
      if (
        !(
          a == null ||
          (a.contact.isBusiness !== !0 && a.contact.isEnterprise !== !0)
        )
      ) {
        var u = n.businessMsg,
          c = n.didUserReply,
          d = n.lastMsg,
          m = n.threadAge,
          p = o("WAWebQbmThreadContext").getThreadCreationTimeFromAge(m),
          _ = u != null ? u : d;
        if (_ != null) {
          o("WAWebABProps").getABPropConfigValue(
            "inapp_signup_m1_logging_enabled",
          ) &&
            (await o(
              "WAWebInAppSignupInfoStore",
            ).ensureInAppSignupInfoHydrated());
          var f = new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(_, a);
          (u != null ? f.addCommonFields() : f.addChatFields(),
            f.addIasFields().log(async function (t) {
              var n = await Promise.all([
                  o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                    a.id.toString(),
                  ),
                  o("WAWebP2PPillsThreadOriginStore").getPillQbmFields(
                    a.accountLid,
                  ),
                ]),
                u = n[0],
                d = n[1],
                m = t.bodyUrlCountInt,
                _ = t.bodyUrlUniqueCountInt,
                f = t.buttonValueJsonArray,
                g = t.ctaUrlUniqueCountInt,
                h = t.isBroadcastMessage,
                y = t.messageFieldJsonArray,
                C = t.messageIdHmac,
                b = t.submessageFieldJsonArray,
                v = t.urlUniqueCountInt,
                S = babelHelpers.objectWithoutPropertiesLoose(t, e),
                R = babelHelpers.extends({}, S, d, {
                  didUserReply: c,
                  isBulkAction: i != null ? i : !1,
                  isInsubContact: o(
                    "WAWebFrontendContactGetters",
                  ).getIsMyContact(a.contact),
                  isMuted: o("WAWebMuteGetters").getIsMuted(a.mute),
                  threadActionEntryPoint: o(
                    "WAWebWamEnumThreadActionEntryPoint",
                  ).THREAD_ACTION_ENTRY_POINT[l],
                  threadCreationTime: p != null ? p : void 0,
                  threadIdHmac: u != null ? u : void 0,
                  threadLevelAction: o("WAWebWamEnumThreadLevelAction")
                    .THREAD_LEVEL_ACTION[s],
                }),
                L = new (o(
                  "WAWebQbmThreadLevelActionWamEvent",
                ).QbmThreadLevelActionWamEvent)();
              (L.set(R), r != null && (L.blockEntryPoint = r), L.commit());
            }));
        }
      }
    }
    l.logQbmThreadLevelAction = s;
  },
  98,
);
