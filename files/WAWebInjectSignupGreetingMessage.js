__d(
  "WAWebInjectSignupGreetingMessage",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebCmd",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebFindChatAction",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebInAppSignupInfoStore",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNullFunc",
    "WAWebSendMsgChatAction",
    "WAWebSendSignupResponseAction",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSignupGreetingActionShared",
    "WAWebSignupLoadingState",
    "WAWebSignupMetadataFetcher",
    "WAWebSignupQPLLogger",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumSignupEntryPoint",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i;
          o("WAWebSignupQPLLogger").deepLinkStart(a);
          var l;
          try {
            l = o("WAWebWidFactory").createWid(t);
          } catch (n) {
            (o("WAWebSignupQPLLogger").deepLinkFail(a, "invalid_phone"),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:greeting] invalid phone signupId=",
                      " phone=",
                      "",
                    ])),
                  a,
                  t,
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("signup-greeting-invalid-phone"));
            return;
          }
          var p = l.toString();
          o("WAWebSignupGreetingActionShared").inFlightDeepLinks.set(p, a);
          try {
            o("WAWebSignupFlowLoggerLazy").logSignupOp({
              operation: o("WAWebSignupFlowLoggerLazy")
                .SIGNUP_USER_JOURNEY_OPERATION.DEEP_LINK_PARSED,
              signupId: a,
              businessWid: l,
            });
            var _ = yield (m || (m = n("Promise"))).all([
                o("WAWebFindChatAction").findOrCreateLatestChat(l, "signupAGM"),
                n("asyncToGeneratorRuntime")
                  .asyncToGenerator(function* () {
                    o("WAWebSignupQPLLogger").deepLinkMetadataFetchStart(a);
                    try {
                      return yield o(
                        "WAWebSignupMetadataFetcher",
                      ).fetchSignupMetadata(a, l.user);
                    } finally {
                      o("WAWebSignupQPLLogger").deepLinkMetadataFetchEnd(a);
                    }
                  })()
                  .catch(o("WAWebNullFunc").returnNull),
              ]),
              f = _[0].chat,
              g = _[1];
            ((i = f.id.toString()),
              i !== p &&
                (o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(
                  p,
                ),
                o("WAWebSignupGreetingActionShared").inFlightDeepLinks.set(
                  i,
                  a,
                )));
            var h = o("WAWebSignupGreetingActionShared").isChatSafeToDelete(f);
            if (g == null) {
              (o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(i),
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[signup:greeting] metadata null signupId=",
                        " phone=",
                        "",
                      ])),
                    a,
                    t,
                  )
                  .sendLogs("signup-greeting-metadata-null"),
                h &&
                  (f.draftMessage == null || f.draftMessage.text === "") &&
                  (o("WAWebCmd").Cmd.closeChat(f),
                  o("WAWebSignupGreetingActionShared").deleteSignupChat(f)),
                o("WAWebSendSignupResponseAction").showInvalidSignupLinkToast(),
                o("WAWebSignupLoadingState").setSignupLoading(i, !1),
                o("WAWebSignupGreetingActionShared").cancelledSignups.delete(
                  a,
                ) ||
                  o("WAWebSignupQPLLogger").deepLinkFail(
                    a,
                    "invalid_response",
                  ));
              return;
            }
            if (
              (o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy")
                  .SIGNUP_USER_JOURNEY_OPERATION.LAND_ON_CHAT_THREAD,
                signupId: a,
                businessWid: f.id,
                chatTimestamp: f.t,
              }),
              !o("WAWebSignupGreetingActionShared").signupCardInjectedChats.has(
                i,
              ))
            ) {
              o("WAWebSignupGreetingActionShared").signupCardInjectedChats.add(
                i,
              );
              try {
                var y = f.msgs.getModelsArray().some(function (e) {
                  return (
                    e.subtype ===
                    o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard
                  );
                });
                if (h && !y) {
                  var C = yield o(
                    "WAWebContactSystemMsg",
                  ).genContactInfoCardMsg(f.id, {
                    isSmb: !1,
                    isEnterprise: !1,
                    iAmStartingChat: !0,
                    isWASupportStartingChat: !1,
                    isFromCTWA: !1,
                    isFMXCtWA: !1,
                    isSignupDeeplink: !0,
                  });
                  C != null &&
                    (yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: f.id,
                      newMsg: C,
                      handleSingleMsgOrigin: "signupAGM",
                    }),
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[injectSignupGreetingMessage] contact info card injected",
                        ])),
                    ));
                }
              } catch (e) {
                throw (
                  o(
                    "WAWebSignupGreetingActionShared",
                  ).signupCardInjectedChats.delete(i),
                  e
                );
              }
            }
            var b = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              v = {
                type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
                kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
                subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                ack: o("WAWebAck").ACK.READ,
                from: f.id,
                author: f.id,
                id: new (r("WAWebMsgKey"))({
                  fromMe: !1,
                  remote: f.id,
                  id: yield r("WAWebMsgKey").newId(),
                  participant: void 0,
                }),
                local: !1,
                isNewMsg: !0,
                t: o("WATimeUtils").unixTime(),
                to: b,
                body: g.signupMessage,
                signupContext: {
                  signupId: g.signupId,
                  privacyPolicyUrl: g.privacyPolicyUrl,
                },
              };
            if (
              (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(f, v)[1],
              o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(i),
              o("WAWebSignupGreetingActionShared").cancelledSignups.delete(a))
            ) {
              o("WAWebSignupLoadingState").setSignupLoading(i, !1);
              return;
            }
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[injectSignupGreetingMessage] AGM injected id=",
                  "",
                ])),
              a,
            ),
              o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy")
                  .SIGNUP_USER_JOURNEY_OPERATION.AGM_INJECTED,
                signupId: a,
                businessWid: f.id,
                chatTimestamp: f.t,
              }),
              o("WAWebInAppSignupInfoStore").saveEntryPoint(
                f.id.toString(),
                o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT
                  .CHAT_THREAD_BUSINESS,
              ),
              o("WAWebSignupLoadingState").setSignupLoading(i, !1),
              o("WAWebSignupQPLLogger").deepLinkSuccess(a));
          } catch (e) {
            (i != null
              ? o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(i)
              : o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(
                  p,
                ),
              o("WAWebSignupGreetingActionShared").cancelledSignups.delete(a) ||
                o("WAWebSignupQPLLogger").deepLinkFail(a, "network_error"),
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:greeting] injection failed signupId=",
                      " phone=",
                      "",
                    ])),
                  a,
                  t,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("signup-greeting-injection-failed"),
              i != null
                ? o("WAWebSignupLoadingState").setSignupLoading(i, !1)
                : o("WAWebSignupLoadingState").setSignupLoading(p, !1));
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.injectSignupGreetingMessage = p;
  },
  98,
);
