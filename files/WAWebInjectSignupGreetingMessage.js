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
    "WAWebNetworkStatus",
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
    var e, s, u, c, d, m, p;
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l;
          o("WAWebSignupQPLLogger").deepLinkStart(a);
          var _;
          try {
            _ = o("WAWebWidFactory").createWid(t);
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
          var f = _.toString();
          o("WAWebSignupGreetingActionShared").inFlightDeepLinks.set(f, a);
          try {
            o("WAWebSignupFlowLoggerLazy").logSignupOp({
              operation: o("WAWebSignupFlowLoggerLazy")
                .SIGNUP_USER_JOURNEY_OPERATION.DEEP_LINK_PARSED,
              signupId: a,
              businessWid: _,
            });
            var y = yield (p || (p = n("Promise"))).all([
                o("WAWebFindChatAction").findOrCreateLatestChat(_, "signupAGM"),
                n("asyncToGeneratorRuntime")
                  .asyncToGenerator(function* () {
                    o("WAWebSignupQPLLogger").deepLinkMetadataFetchStart(a);
                    try {
                      return yield o(
                        "WAWebSignupMetadataFetcher",
                      ).fetchSignupMetadata(a, _.user);
                    } finally {
                      o("WAWebSignupQPLLogger").deepLinkMetadataFetchEnd(a);
                    }
                  })()
                  .catch(function (e) {
                    return (
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[signup:greeting] metadata step threw signupId=",
                              "",
                            ])),
                          a,
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs(
                          "signup-greeting-metadata-instrumentation-failed",
                        ),
                      { metadata: null, reason: "instrumentation_error" }
                    );
                  }),
              ]),
              C = y[0].chat,
              b = y[1],
              v = b.metadata;
            ((l = C.id.toString()),
              l !== f &&
                (o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(
                  f,
                ),
                o("WAWebSignupGreetingActionShared").inFlightDeepLinks.set(
                  l,
                  a,
                )));
            var S = o("WAWebSignupGreetingActionShared").isChatSafeToDelete(C);
            if (v == null) {
              if (
                (o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(
                  l,
                ),
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[signup:greeting] metadata null signupId=",
                        " phone=",
                        "",
                      ])),
                    a,
                    t,
                  )
                  .sendLogs("signup-greeting-metadata-null"),
                S &&
                  (C.draftMessage == null || C.draftMessage.text === "") &&
                  (o("WAWebCmd").Cmd.closeChat(C),
                  o("WAWebSignupGreetingActionShared").deleteSignupChat(C)),
                o("WAWebSendSignupResponseAction").showInvalidSignupLinkToast(),
                o("WAWebSignupLoadingState").setSignupLoading(l, !1),
                !o("WAWebSignupGreetingActionShared").cancelledSignups.delete(
                  a,
                ))
              ) {
                var R;
                o("WAWebSignupQPLLogger").deepLinkFail(
                  a,
                  (R = b.reason) != null ? R : "invalid_response",
                );
              }
              return;
            }
            if (
              (o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy")
                  .SIGNUP_USER_JOURNEY_OPERATION.LAND_ON_CHAT_THREAD,
                signupId: a,
                businessWid: C.id,
                chatTimestamp: C.t,
              }),
              !o("WAWebSignupGreetingActionShared").signupCardInjectedChats.has(
                l,
              ))
            ) {
              o("WAWebSignupGreetingActionShared").signupCardInjectedChats.add(
                l,
              );
              try {
                var L = C.msgs.getModelsArray().some(function (e) {
                  return (
                    e.subtype ===
                    o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard
                  );
                });
                if (S && !L) {
                  var E = yield o(
                    "WAWebContactSystemMsg",
                  ).genContactInfoCardMsg(C.id, {
                    isSmb: !1,
                    isEnterprise: !1,
                    iAmStartingChat: !0,
                    isWASupportStartingChat: !1,
                    isFromCTWA: !1,
                    isFMXCtWA: !1,
                    isSignupDeeplink: !0,
                  });
                  E != null &&
                    (yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: C.id,
                      newMsg: E,
                      handleSingleMsgOrigin: "signupAGM",
                    }),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[injectSignupGreetingMessage] contact info card injected",
                        ])),
                    ));
                }
              } catch (e) {
                throw (
                  o(
                    "WAWebSignupGreetingActionShared",
                  ).signupCardInjectedChats.delete(l),
                  e
                );
              }
            }
            var k = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              I = {
                type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
                kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
                subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                ack: o("WAWebAck").ACK.READ,
                from: C.id,
                author: C.id,
                id: new (r("WAWebMsgKey"))({
                  fromMe: !1,
                  remote: C.id,
                  id: yield r("WAWebMsgKey").newId(),
                  participant: void 0,
                }),
                local: !1,
                isNewMsg: !0,
                t: o("WATimeUtils").unixTime(),
                to: k,
                body: v.signupMessage,
                signupContext: {
                  signupId: v.signupId,
                  privacyPolicyUrl: v.privacyPolicyUrl,
                },
              };
            if (
              (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(C, I)[1],
              o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(l),
              o("WAWebSignupGreetingActionShared").cancelledSignups.delete(a))
            ) {
              o("WAWebSignupLoadingState").setSignupLoading(l, !1);
              return;
            }
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[injectSignupGreetingMessage] AGM injected id=",
                  "",
                ])),
              a,
            ),
              o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy")
                  .SIGNUP_USER_JOURNEY_OPERATION.AGM_INJECTED,
                signupId: a,
                businessWid: C.id,
                chatTimestamp: C.t,
              }),
              o("WAWebInAppSignupInfoStore").saveEntryPoint(
                C.id.toString(),
                g(i),
              ),
              o("WAWebSignupLoadingState").setSignupLoading(l, !1),
              o("WAWebSignupQPLLogger").deepLinkSuccess(a));
          } catch (e) {
            (l != null
              ? o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(l)
              : o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(
                  f,
                ),
              o("WAWebSignupGreetingActionShared").cancelledSignups.delete(a) ||
                o("WAWebSignupQPLLogger").deepLinkFail(a, h()),
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:greeting] injection failed signupId=",
                      " phone=",
                      "",
                    ])),
                  a,
                  t,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("signup-greeting-injection-failed"),
              l != null
                ? o("WAWebSignupLoadingState").setSignupLoading(l, !1)
                : o("WAWebSignupLoadingState").setSignupLoading(f, !1));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t,
        n = new Map([
          [
            "ctwa_signup_agentic",
            o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT
              .CTWA_SIGNUP_AGENTIC,
          ],
          [
            "ctwa_signup_manual",
            o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT
              .CTWA_SIGNUP_MANUAL,
          ],
        ]);
      return (t = n.get(e != null ? e : "")) != null
        ? t
        : o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT.EXTERNAL;
    }
    function h() {
      return r("WAWebNetworkStatus").online
        ? "agm_injection_failed"
        : "network_error";
    }
    l.injectSignupGreetingMessage = _;
  },
  98,
);
