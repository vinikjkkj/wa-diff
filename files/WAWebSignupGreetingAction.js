__d(
  "WAWebSignupGreetingAction",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCommonMsgUtils",
    "WAWebContactSystemMsg",
    "WAWebFindChatAction",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNullFunc",
    "WAWebSendMsgChatAction",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSignupGating",
    "WAWebSignupLoadingState",
    "WAWebSignupMetadataFetcher",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = new Set(),
      h = 5;
    function y() {
      g.clear();
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a;
          try {
            var i,
              l = o("WAWebWidFactory").createWid(e);
            (i = o("WAWebSignupFlowLoggerLazy")).logSignupOp({
              operation: i.SIGNUP_USER_JOURNEY_OPERATION.DEEP_LINK_PARSED,
              signupId: t,
              businessWid: l,
            });
            var s = yield (f || (f = n("Promise"))).all([
                o("WAWebFindChatAction").findOrCreateLatestChat(l, "signupAGM"),
                o("WAWebSignupMetadataFetcher")
                  .fetchSignupMetadata(t, l.user)
                  .catch(o("WAWebNullFunc").returnNull),
              ]),
              u = s[0],
              c = u.chat,
              h = u.created,
              y = s[1];
            if (
              ((a = c.id.toString()),
              o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy")
                  .SIGNUP_USER_JOURNEY_OPERATION.LAND_ON_CHAT_THREAD,
                signupId: t,
                businessWid: c.id,
                chatTimestamp: c.t,
              }),
              !h && !g.has(a))
            ) {
              g.add(a);
              try {
                var C = c.msgs.getModelsArray().some(function (e) {
                  return (
                    e.subtype ===
                      o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                        .ContactInfoCard ||
                    !o("WAWebCommonMsgUtils").isNotificationType(
                      e.type,
                      e.subtype,
                    )
                  );
                });
                if (!C) {
                  var b = yield o(
                    "WAWebContactSystemMsg",
                  ).genContactInfoCardMsg(c.id, {
                    isSmb: !1,
                    isEnterprise: !1,
                    iAmStartingChat: !0,
                    isWASupportStartingChat: !1,
                    isFromCTWA: !1,
                    isFMXCtWA: !1,
                    isSignupDeeplink: !0,
                  });
                  b != null &&
                    (yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: c.id,
                      newMsg: b,
                      handleSingleMsgOrigin: "signupAGM",
                    }),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[injectSignupGreetingMessage] contact info card injected",
                        ])),
                    ));
                }
              } catch (e) {
                throw (g.delete(a), e);
              }
            }
            if (y == null) {
              (o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:greeting] metadata null signupId=",
                      " phone=",
                      "",
                    ])),
                  t,
                  e,
                )
                .sendLogs("signup-greeting-metadata-null"),
                o("WAWebSignupLoadingState").setSignupLoading(a, !1));
              return;
            }
            var v = o("WAWebUserPrefsMeUser").getMeUser(),
              S = {
                type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
                kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
                subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                ack: o("WAWebAck").ACK.READ,
                from: c.id,
                author: c.id,
                id: new (r("WAWebMsgKey"))({
                  fromMe: !1,
                  remote: c.id,
                  id: yield r("WAWebMsgKey").newId(),
                  participant: void 0,
                }),
                local: !1,
                isNewMsg: !0,
                t: o("WATimeUtils").unixTime(),
                to: v,
                body: y.signupMessage,
                signupContext: {
                  signupId: y.signupId,
                  privacyPolicyUrl: y.privacyPolicyUrl,
                },
              };
            (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(c, S)[1],
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[injectSignupGreetingMessage] AGM injected id=",
                    "",
                  ])),
                t,
              ),
              o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy")
                  .SIGNUP_USER_JOURNEY_OPERATION.AGM_INJECTED,
                signupId: t,
                businessWid: c.id,
                chatTimestamp: c.t,
              }),
              o("WAWebSignupLoadingState").setSignupLoading(a, !1));
          } catch (n) {
            if (
              (o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:greeting] injection failed signupId=",
                      " phone=",
                      "",
                    ])),
                  t,
                  e,
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("signup-greeting-injection-failed"),
              a != null)
            )
              o("WAWebSignupLoadingState").setSignupLoading(a, !1);
            else
              try {
                o("WAWebSignupLoadingState").setSignupLoading(
                  o("WAWebWidFactory").createWid(e).toString(),
                  !1,
                );
              } catch (e) {}
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup &&
        e.signupCtaTapped !== !0
      );
    }
    function S(e, t) {
      for (var n of e) {
        var r,
          a = (r = n.signupContext) == null ? void 0 : r.signupId;
        a != null &&
          o("WAWebSignupFlowLoggerLazy").logSignupOp({
            operation: o("WAWebSignupFlowLoggerLazy")
              .SIGNUP_USER_JOURNEY_OPERATION.AGM_CANCELLED_USER_LEFT,
            signupId: a,
            businessWid: t.id,
            chatTimestamp: t.t,
          });
      }
    }
    function R(t) {
      if (
        !(
          !o("WAWebSignupGating").isSignupAGMEnabled() ||
          !o("WAWebSignupGating").isSignupAGMCleanupEnabled()
        )
      ) {
        var n = t.msgs.last();
        if (
          !(n == null || !v(n)) &&
          !(t.draftMessage != null && t.draftMessage.text !== "")
        ) {
          var a = t.msgs.getModelsArray(),
            i = a.filter(v);
          S(i, t);
          var l = a.some(function (e) {
            return (
              !i.includes(e) &&
              e.subtype !==
                o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard &&
              !o("WAWebCommonMsgUtils").isNotificationType(e.type, e.subtype)
            );
          });
          if (!l && a.length <= h)
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[maybeCleanupSignupAGM] deleting signup chat",
                ])),
            ),
              r("JSResourceForInteraction")("WAWebChatDeleteBridge")
                .__setRef("WAWebSignupGreetingAction")
                .load()
                .then(function (e) {
                  var n = e.deleteFromStorage;
                  return n(t.id);
                })
                .catch(function (e) {
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[maybeCleanupSignupAGM] failed to delete from storage ",
                        "",
                      ])),
                    e,
                  );
                }),
              t.delete());
          else {
            var d = [];
            for (var m of i) (t.msgs.remove(m), d.push(m.id.toString()));
            d.length > 0 &&
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[maybeCleanupSignupAGM] removing ",
                    " AGMs from existing chat",
                  ])),
                String(d.length),
              ),
              r("JSResourceForInteraction")("WAWebDBMessageDelete")
                .__setRef("WAWebSignupGreetingAction")
                .load()
                .then(function (e) {
                  var t = e.removeMessagesFromHistory;
                  return t(d, { deleteAssociatedMsgs: !1 });
                })
                .catch(function (e) {
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[maybeCleanupSignupAGM] failed to remove from history ",
                        "",
                      ])),
                    e,
                  );
                }));
          }
          g.delete(t.id.toString());
        }
      }
    }
    ((l.resetSignupCardInjectedChats = y),
      (l.injectSignupGreetingMessage = C),
      (l.maybeCleanupSignupAGM = R));
  },
  98,
);
