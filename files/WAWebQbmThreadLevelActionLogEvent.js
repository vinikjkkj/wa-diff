__d(
  "WAWebQbmThreadLevelActionLogEvent",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      ],
      s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = t.blockEntryPoint,
            i = t.chat,
            l = t.isBulkAction,
            u = t.threadActionEntryPoint,
            c = t.threadLevelAction;
          if (
            !(
              i == null ||
              (i.contact.isBusiness !== !0 && i.contact.isEnterprise !== !0)
            )
          ) {
            var d = r.businessMsg,
              m = r.didUserReply,
              p = r.lastMsg,
              _ = r.threadAge,
              f = o("WAWebQbmThreadContext").getThreadCreationTimeFromAge(_),
              g = d != null ? d : p;
            if (g != null) {
              o("WAWebABProps").getABPropConfigValue(
                "inapp_signup_m1_logging_enabled",
              ) &&
                (yield o(
                  "WAWebInAppSignupInfoStore",
                ).ensureInAppSignupInfoHydrated());
              var h = new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(g, i);
              (d != null ? h.addCommonFields() : h.addChatFields(),
                h.addIasFields().log(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var r = yield (s || (s = n("Promise"))).all([
                            o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                              i.id.toString(),
                            ),
                            o(
                              "WAWebP2PPillsThreadOriginStore",
                            ).getPillQbmFields(i.accountLid),
                          ]),
                          d = r[0],
                          p = r[1],
                          _ = t.bodyUrlCountInt,
                          g = t.bodyUrlUniqueCountInt,
                          h = t.buttonValueJsonArray,
                          y = t.ctaUrlUniqueCountInt,
                          C = t.isBroadcastMessage,
                          b = t.messageFieldJsonArray,
                          v = t.messageIdHmac,
                          S = t.submessageFieldJsonArray,
                          R = t.urlUniqueCountInt,
                          L = babelHelpers.objectWithoutPropertiesLoose(t, e),
                          E = babelHelpers.extends({}, L, p, {
                            didUserReply: m,
                            isBulkAction: l != null ? l : !1,
                            isInsubContact: o(
                              "WAWebFrontendContactGetters",
                            ).getIsMyContact(i.contact),
                            isMuted: o("WAWebMuteGetters").getIsMuted(i.mute),
                            threadActionEntryPoint: o(
                              "WAWebWamEnumThreadActionEntryPoint",
                            ).THREAD_ACTION_ENTRY_POINT[u],
                            threadCreationTime: f != null ? f : void 0,
                            threadIdHmac: d != null ? d : void 0,
                            threadLevelAction: o(
                              "WAWebWamEnumThreadLevelAction",
                            ).THREAD_LEVEL_ACTION[c],
                          }),
                          k = new (o(
                            "WAWebQbmThreadLevelActionWamEvent",
                          ).QbmThreadLevelActionWamEvent)();
                        (k.set(E),
                          a != null && (k.blockEntryPoint = a),
                          k.commit());
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                ));
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.logQbmThreadLevelAction = u;
  },
  98,
);
