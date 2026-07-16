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
          o("WAWebSignupGreetingActionShared").inFlightDeepLinks.set(
            l.toString(),
            a,
          );
          try {
            o("WAWebSignupFlowLoggerLazy").logSignupOp({
              operation: o("WAWebSignupFlowLoggerLazy")
                .SIGNUP_USER_JOURNEY_OPERATION.DEEP_LINK_PARSED,
              signupId: a,
              businessWid: l,
            });
            var p = yield (m || (m = n("Promise"))).all([
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
              _ = p[0].chat,
              f = p[1];
            i = _.id.toString();
            var g = l.toString();
            i !== g &&
              (o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(g),
              o("WAWebSignupGreetingActionShared").inFlightDeepLinks.set(i, a));
            var h = o("WAWebSignupGreetingActionShared").isChatSafeToDelete(_);
            if (f == null) {
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
                  (_.draftMessage == null || _.draftMessage.text === "") &&
                  (o("WAWebCmd").Cmd.closeChat(_),
                  o("WAWebSignupGreetingActionShared").deleteSignupChat(_)),
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
                businessWid: _.id,
                chatTimestamp: _.t,
              }),
              !o("WAWebSignupGreetingActionShared").signupCardInjectedChats.has(
                i,
              ))
            ) {
              o("WAWebSignupGreetingActionShared").signupCardInjectedChats.add(
                i,
              );
              try {
                var y = _.msgs.getModelsArray().some(function (e) {
                  return (
                    e.subtype ===
                    o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard
                  );
                });
                if (h && !y) {
                  var C = yield o(
                    "WAWebContactSystemMsg",
                  ).genContactInfoCardMsg(_.id, {
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
                      chatId: _.id,
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
                from: _.id,
                author: _.id,
                id: new (r("WAWebMsgKey"))({
                  fromMe: !1,
                  remote: _.id,
                  id: yield r("WAWebMsgKey").newId(),
                  participant: void 0,
                }),
                local: !1,
                isNewMsg: !0,
                t: o("WATimeUtils").unixTime(),
                to: b,
                body: f.signupMessage,
                signupContext: {
                  signupId: f.signupId,
                  privacyPolicyUrl: f.privacyPolicyUrl,
                },
              };
            if (
              (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(_, v)[1],
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
                businessWid: _.id,
                chatTimestamp: _.t,
              }),
              o("WAWebInAppSignupInfoStore").saveEntryPoint(
                _.id.toString(),
                o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT
                  .CHAT_THREAD_BUSINESS,
              ),
              o("WAWebSignupLoadingState").setSignupLoading(i, !1),
              o("WAWebSignupQPLLogger").deepLinkSuccess(a));
          } catch (e) {
            if (
              (i != null
                ? o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(
                    i,
                  )
                : o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(
                    l.toString(),
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
              i != null)
            )
              o("WAWebSignupLoadingState").setSignupLoading(i, !1);
            else
              try {
                o("WAWebSignupLoadingState").setSignupLoading(
                  o("WAWebWidFactory").createWid(t).toString(),
                  !1,
                );
              } catch (e) {}
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.injectSignupGreetingMessage = p;
  },
  98,
);
