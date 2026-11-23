__d(
  "WAWebInjectSignupGreetingMessage",
  [
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
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWamEnumSignupEntryPoint",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(t, n, a) {
      var i;
      o("WAWebSignupQPLLogger").deepLinkStart(n);
      var l;
      try {
        l = o("WAWebWidFactory").createWid(t);
      } catch (a) {
        (o("WAWebSignupQPLLogger").deepLinkFail(n, "invalid_phone"),
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[signup:greeting] invalid phone signupId=",
                  " phone=",
                  "",
                ])),
              n,
              t,
            )
            .catching(r("getErrorSafe")(a))
            .sendLogs("signup-greeting-invalid-phone"));
        return;
      }
      var p = l.toString();
      o("WAWebSignupGreetingActionShared").inFlightDeepLinks.set(p, n);
      try {
        o("WAWebSignupFlowLoggerLazy").logSignupOp({
          operation: o("WAWebSignupFlowLoggerLazy")
            .SIGNUP_USER_JOURNEY_OPERATION.DEEP_LINK_PARSED,
          signupId: n,
          businessWid: l,
        });
        var g = await Promise.all([
            o("WAWebFindChatAction").findOrCreateLatestChat(l, "signupAGM"),
            (async function () {
              o("WAWebSignupQPLLogger").deepLinkMetadataFetchStart(n);
              try {
                return await o(
                  "WAWebSignupMetadataFetcher",
                ).fetchSignupMetadata(n, l.user);
              } finally {
                o("WAWebSignupQPLLogger").deepLinkMetadataFetchEnd(n);
              }
            })().catch(function (e) {
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[signup:greeting] metadata step threw signupId=",
                        "",
                      ])),
                    n,
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("signup-greeting-metadata-instrumentation-failed"),
                { metadata: null, reason: "instrumentation_error" }
              );
            }),
          ]),
          h = g[0].chat,
          y = g[1],
          C = y.metadata;
        ((i = h.id.toString()),
          i !== p &&
            (o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(p),
            o("WAWebSignupGreetingActionShared").inFlightDeepLinks.set(i, n)));
        var b = o("WAWebSignupGreetingActionShared").isChatSafeToDelete(h);
        if (C == null) {
          if (
            (o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(i),
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:greeting] metadata null signupId=",
                    " phone=",
                    "",
                  ])),
                n,
                t,
              )
              .sendLogs("signup-greeting-metadata-null"),
            b &&
              (h.draftMessage == null || h.draftMessage.text === "") &&
              (o("WAWebCmd").Cmd.closeChat(h),
              o("WAWebSignupGreetingActionShared").deleteSignupChat(h)),
            o("WAWebSendSignupResponseAction").showInvalidSignupLinkToast(),
            o("WAWebSignupLoadingState").setSignupLoading(i, !1),
            !o("WAWebSignupGreetingActionShared").cancelledSignups.delete(n))
          ) {
            var v;
            o("WAWebSignupQPLLogger").deepLinkFail(
              n,
              (v = y.reason) != null ? v : "invalid_response",
            );
          }
          return;
        }
        if (
          (o("WAWebSignupFlowLoggerLazy").logSignupOp({
            operation: o("WAWebSignupFlowLoggerLazy")
              .SIGNUP_USER_JOURNEY_OPERATION.LAND_ON_CHAT_THREAD,
            signupId: n,
            businessWid: h.id,
            chatTimestamp: h.t,
          }),
          !o("WAWebSignupGreetingActionShared").signupCardInjectedChats.has(i))
        ) {
          o("WAWebSignupGreetingActionShared").signupCardInjectedChats.add(i);
          try {
            var S = h.msgs.getModelsArray().some(function (e) {
              return (
                e.subtype ===
                o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard
              );
            });
            if (b && !S) {
              var R = await o("WAWebContactSystemMsg").genContactInfoCardMsg(
                h.id,
                {
                  isSmb: !1,
                  isEnterprise: !1,
                  iAmStartingChat: !0,
                  isWASupportStartingChat: !1,
                  isFromCTWA: !1,
                  isFMXCtWA: !1,
                  isSignupDeeplink: !0,
                },
              );
              R != null &&
                (await o(
                  "WAWebHandleSingleMsgWorkerCompatible",
                ).handleSingleMsg({
                  chatId: h.id,
                  newMsg: R,
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
              ).signupCardInjectedChats.delete(i),
              e
            );
          }
        }
        var L = o("WAWebUserUtils").getMeUserOrThrow(),
          E = {
            type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
            kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
            subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            ack: o("WAWebAck").ACK.READ,
            from: h.id,
            author: h.id,
            id: new (r("WAWebMsgKey"))({
              fromMe: !1,
              remote: h.id,
              id: await r("WAWebMsgKey").newId(),
              participant: void 0,
            }),
            local: !1,
            isNewMsg: !0,
            t: o("WATimeUtils").unixTime(),
            to: L,
            body: C.signupMessage,
            signupContext: {
              signupId: C.signupId,
              privacyPolicyUrl: C.privacyPolicyUrl,
            },
          };
        if (
          (await o("WAWebSendMsgChatAction").addAndSendMsgToChat(h, E)[1],
          o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(i),
          o("WAWebSignupGreetingActionShared").cancelledSignups.delete(n))
        ) {
          o("WAWebSignupLoadingState").setSignupLoading(i, !1);
          return;
        }
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[injectSignupGreetingMessage] AGM injected id=",
              "",
            ])),
          n,
        ),
          o("WAWebSignupFlowLoggerLazy").logSignupOp({
            operation: o("WAWebSignupFlowLoggerLazy")
              .SIGNUP_USER_JOURNEY_OPERATION.AGM_INJECTED,
            signupId: n,
            businessWid: h.id,
            chatTimestamp: h.t,
          }),
          o("WAWebInAppSignupInfoStore").saveEntryPoint(h.id.toString(), _(a)),
          o("WAWebSignupLoadingState").setSignupLoading(i, !1),
          o("WAWebSignupQPLLogger").deepLinkSuccess(n));
      } catch (e) {
        (i != null
          ? o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(i)
          : o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(p),
          o("WAWebSignupGreetingActionShared").cancelledSignups.delete(n) ||
            o("WAWebSignupQPLLogger").deepLinkFail(n, f()),
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[signup:greeting] injection failed signupId=",
                  " phone=",
                  "",
                ])),
              n,
              t,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("signup-greeting-injection-failed"),
          i != null
            ? o("WAWebSignupLoadingState").setSignupLoading(i, !1)
            : o("WAWebSignupLoadingState").setSignupLoading(p, !1));
      }
    }
    function _(e) {
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
    function f() {
      return r("WAWebNetworkStatus").online
        ? "agm_injection_failed"
        : "network_error";
    }
    l.injectSignupGreetingMessage = p;
  },
  98,
);
