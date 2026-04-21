__d(
  "WAWebSignupGreetingAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebChatDeleteBridge",
    "WAWebCmd",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCommonMsgUtils",
    "WAWebContactSystemMsg",
    "WAWebDBMessageDelete",
    "WAWebFindChatAction",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNullFunc",
    "WAWebSendMsgChatAction",
    "WAWebSendSignupResponseAction",
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
    function y(t) {
      (o("WAWebChatDeleteBridge")
        .deleteFromStorage(t.id)
        .catch(function (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteSignupChat] failed to delete from storage ",
                "",
              ])),
            t,
          );
        }),
        t.delete());
    }
    function C(e, t) {
      var n = e.msgs.getModelsArray();
      return n.length > h
        ? !1
        : !n.some(function (e) {
            return (
              (t == null || !t.includes(e)) &&
              e.subtype !==
                o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard &&
              !o("WAWebCommonMsgUtils").isNotificationType(e.type, e.subtype)
            );
          });
    }
    function b() {
      g.clear();
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a;
          try {
            var i = o("WAWebWidFactory").createWid(e);
            o("WAWebSignupFlowLoggerLazy").logSignupOp({
              operation: o("WAWebSignupFlowLoggerLazy")
                .SIGNUP_USER_JOURNEY_OPERATION.DEEP_LINK_PARSED,
              signupId: t,
              businessWid: i,
            });
            var l = yield (f || (f = n("Promise"))).all([
                o("WAWebFindChatAction").findOrCreateLatestChat(i, "signupAGM"),
                o("WAWebSignupMetadataFetcher")
                  .fetchSignupMetadata(t, i.user)
                  .catch(o("WAWebNullFunc").returnNull),
              ]),
              s = l[0].chat,
              u = l[1];
            a = s.id.toString();
            var c = C(s);
            if (u == null) {
              (o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:greeting] metadata null signupId=",
                      " phone=",
                      "",
                    ])),
                  t,
                  e,
                )
                .sendLogs("signup-greeting-metadata-null"),
                c &&
                  (s.draftMessage == null || s.draftMessage.text === "") &&
                  (o("WAWebCmd").Cmd.closeChat(s), y(s)),
                o("WAWebSendSignupResponseAction").showInvalidSignupLinkToast(),
                o("WAWebSignupLoadingState").setSignupLoading(a, !1));
              return;
            }
            if (
              (o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy")
                  .SIGNUP_USER_JOURNEY_OPERATION.LAND_ON_CHAT_THREAD,
                signupId: t,
                businessWid: s.id,
                chatTimestamp: s.t,
              }),
              !g.has(a))
            ) {
              g.add(a);
              try {
                var h = s.msgs.getModelsArray().some(function (e) {
                  return (
                    e.subtype ===
                    o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard
                  );
                });
                if (c && !h) {
                  var b = yield o(
                    "WAWebContactSystemMsg",
                  ).genContactInfoCardMsg(s.id, {
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
                      chatId: s.id,
                      newMsg: b,
                      handleSingleMsgOrigin: "signupAGM",
                    }),
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[injectSignupGreetingMessage] contact info card injected",
                        ])),
                    ));
                }
              } catch (e) {
                throw (g.delete(a), e);
              }
            }
            var v = o("WAWebUserPrefsMeUser").getMeUser(),
              S = {
                type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
                kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
                subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                ack: o("WAWebAck").ACK.READ,
                from: s.id,
                author: s.id,
                id: new (r("WAWebMsgKey"))({
                  fromMe: !1,
                  remote: s.id,
                  id: yield r("WAWebMsgKey").newId(),
                  participant: void 0,
                }),
                local: !1,
                isNewMsg: !0,
                t: o("WATimeUtils").unixTime(),
                to: v,
                body: u.signupMessage,
                signupContext: {
                  signupId: u.signupId,
                  privacyPolicyUrl: u.privacyPolicyUrl,
                },
              };
            (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(s, S)[1],
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
                businessWid: s.id,
                chatTimestamp: s.t,
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup &&
        e.signupCtaTapped !== !0
      );
    }
    function L(e, t) {
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
    function E(e) {
      var t = e.msgs.last();
      if (
        !(t == null || !R(t)) &&
        !(
          !o("WAWebSignupGating").isSignupAGMEnabled() ||
          !o("WAWebSignupGating").isSignupAGMCleanupEnabled()
        ) &&
        !(e.draftMessage != null && e.draftMessage.text !== "")
      ) {
        var n = e.msgs.getModelsArray(),
          r = n.filter(R);
        if ((L(r, e), C(e, r)))
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[maybeCleanupSignupAGM] deleting signup chat",
              ])),
          ),
            y(e));
        else {
          var a = [];
          for (var i of r) (e.msgs.remove(i), a.push(i.id.toString()));
          a.length > 0 &&
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[maybeCleanupSignupAGM] removing ",
                  " AGMs from existing chat",
                ])),
              String(a.length),
            ),
            o("WAWebDBMessageDelete")
              .removeMessagesFromHistory(a, { deleteAssociatedMsgs: !1 })
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
        g.delete(e.id.toString());
      }
    }
    ((l.resetSignupCardInjectedChats = b),
      (l.injectSignupGreetingMessage = v),
      (l.maybeCleanupSignupAGM = E));
  },
  98,
);
