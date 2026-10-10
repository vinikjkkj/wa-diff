__d(
  "WAWebSendSignupResponseAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBUpdateMessageTable",
    "WAWebInAppSignupInfoStore",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSignupCTAExperiment",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSignupQPLLogger",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumSignupEntryPoint",
    "WAWebWidToJid",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R = S || (S = o("react")),
      L = 2e3;
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (n === void 0) {
            var a;
            n = (a = t.signupContext) == null ? void 0 : a.signupId;
          }
          if (n == null)
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "sendSignupResponse: missing signupId",
                  ])),
              ),
              !1
            );
          if (
            (o("WAWebSignupFlowLoggerLazy").logSignupOp({
              operation: o("WAWebSignupFlowLoggerLazy")
                .SIGNUP_USER_JOURNEY_OPERATION.AGM_CTA_CLICKED,
              signupId: n,
              businessWid: e.id,
              chatTimestamp: e.t,
            }),
            t.signupCtaTapped === !0)
          )
            return !1;
          var i = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (i == null)
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "sendSignupResponse: no meUser",
                  ])),
              ),
              !1
            );
          var l = i,
            g = e.id,
            h = { signup_id: n },
            y;
          try {
            (o("WAWebSignupQPLLogger").userRequestStart(n),
              (y = {
                type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
                kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
                ack: o("WAWebAck").ACK.CLOCK,
                to: g,
                from: l,
                id: yield new (r("WAWebMsgKey"))({
                  id: yield r("WAWebMsgKey").newId(),
                  from: l,
                  to: g,
                  participant: void 0,
                  selfDir: "out",
                }),
                local: !0,
                isNewMsg: !0,
                t: o("WATimeUtils").unixTime(),
                interactivePayload: {
                  type: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                  name: r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP,
                  paramsJson: JSON.stringify(h),
                  version: 1,
                },
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
                  .API_SIGNUP,
                interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                viewMode: "VISIBLE",
                body: (o(
                  "WAWebSignupCTAExperiment",
                ).getSignupCTAExperiment() ===
                o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
                  ? s._(/*BTDS*/ "Get offers")
                  : s._(/*BTDS*/ "Sign up")
                ).toString(),
              }),
              t.set({ signupCtaTapped: !0 }),
              o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, {
                signupCtaTapped: !0,
              }),
              o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy")
                  .SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_REQUEST_SENT,
                signupId: n,
                businessWid: e.id,
                chatTimestamp: e.t,
              }));
            var C = o("WAWebWidToJid").widToUserJid(e.id),
              b = yield r("JSResourceForInteraction")("WAWebOptOutUserJob")
                .__setRef("WAWebSendSignupResponseAction")
                .load(),
              v = b.signupUser;
            o("WAWebSignupQPLLogger").userRequestIqStart(n);
            var S = yield v(C, n);
            if (
              (o("WAWebSignupQPLLogger").userRequestIqEnd(n),
              S && S.errorCode != null)
            ) {
              var R;
              return (
                t.set({ signupCtaTapped: !1 }),
                o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, {
                  signupCtaTapped: !1,
                }),
                P(),
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[signup:response] IQ error signupId=",
                        " errorCode=",
                        "",
                      ])),
                    n,
                    S.errorCode,
                  )
                  .sendLogs("signup-response-iq-error"),
                D(e, n),
                o("WAWebSignupQPLLogger").userRequestFail(
                  n,
                  (R = S.errorKind) != null ? R : "server_error",
                ),
                !1
              );
            }
            (yield o("WAWebUserPrefsMultiDevice").setOptOutlistHash(
              S.listDhash,
            ),
              yield o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                "updateOptOutListModelInCollection",
                { targetWid: e.id, isBlocked: !1 },
              ),
              o("WAWebInAppSignupInfoStore").saveOptinDate(
                e.id.toString(),
                o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT
                  .CHAT_THREAD_BUSINESS,
              ));
          } catch (a) {
            return (
              t.set({ signupCtaTapped: !1 }),
              o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, {
                signupCtaTapped: !1,
              }),
              P(),
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:response] IQ exception signupId=",
                      "",
                    ])),
                  n,
                )
                .catching(r("getErrorSafe")(a))
                .sendLogs("signup-response-iq-exception"),
              D(e, n),
              o("WAWebSignupQPLLogger").userRequestFail(n, "delivery_failure"),
              !1
            );
          }
          var L = !1;
          try {
            var E = yield o(
              "WAWebInAppSignupInfoStore",
            ).startPendingConfirmationTimer(e.id.toString(), n);
            E === "write_failed" &&
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:confirmation] timer start failed signupId=",
                      "",
                    ])),
                  n,
                )
                .sendLogs("signup-start-pending-confirmation-failed");
            var k = yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(
              e,
              y,
            )[1];
            return k.messageSendResult !==
              o("WAWebSendMsgResultAction").SendMsgResult.OK
              ? (o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[signup:response] send failed signupId=",
                        " result=",
                        "",
                      ])),
                    n,
                    k.messageSendResult,
                  )
                  .sendLogs("signup-response-send-failed"),
                D(e, n),
                o("WAWebSignupQPLLogger").userRequestFail(
                  n,
                  "delivery_failure",
                ),
                yield I(n),
                !1)
              : ((L = !0),
                x(o("WAWebStateUtils").unproxy(e)),
                o("WAWebSignupQPLLogger").userRequestSuccess(n),
                o("WAWebSignupQPLLogger").confirmationStart(n),
                !0);
          } catch (t) {
            return (
              D(e, n),
              o("WAWebSignupQPLLogger").userRequestFail(n, "delivery_failure"),
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "sendSignupResponse: send failure: ",
                    "",
                  ])),
                t,
              ),
              L || (yield I(n)),
              !1
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebInAppSignupInfoStore",
          ).stopPendingConfirmationTimer(e);
          t === "write_failed" &&
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:confirmation] rollback failed signupId=",
                    "",
                  ])),
                e,
              )
              .sendLogs("signup-rollback-pending-confirmation-failed");
        })),
        T.apply(this, arguments)
      );
    }
    function D(t, n) {
      try {
        o("WAWebSignupFlowLoggerLazy").logSignupOp({
          operation: o("WAWebSignupFlowLoggerLazy")
            .SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_REQUEST_FAILED,
          signupId: n,
          businessWid: t.id,
          chatTimestamp: t.t,
        });
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[signup:response] failed to log request failure signupId=",
                "",
              ])),
            n,
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("signup-request-failed-log-failed");
      }
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (
              (yield o("WAPromiseDelays").delayMs(L),
              e.msgs == null || e.contact == null)
            )
              return;
            var t = yield (v || (v = n("Promise"))).all([
                r("JSResourceForInteraction")("WAWebPostSendOptOutSystemMsg")
                  .__setRef("WAWebSendSignupResponseAction")
                  .load(),
                r("JSResourceForInteraction")("WAWebGetMessageCache")
                  .__setRef("WAWebSendSignupResponseAction")
                  .load(),
                r("JSResourceForInteraction")(
                  "WAWebHandleSingleMsgWorkerCompatible",
                )
                  .__setRef("WAWebSendSignupResponseAction")
                  .load(),
              ]),
              a = t[0].getPostSendOptOutSystemMsg,
              i = t[1].getMessageCache,
              l = t[2].handleSingleMsg,
              s = e.contact.verifiedName || e.contact.pushname || "",
              u = a(e.id, s);
            (i()
              .addMessages([{ msg: u }], !1)
              .catch(function () {
                o("WALogger").ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[injectPostSendOptOutSystemMsg] Failed to add to cache",
                    ])),
                );
              }),
              l({
                chatId: u.from,
                newMsg: u,
                handleSingleMsgOrigin: "postSendOptOutSystemMsg",
              }).catch(function () {
                o("WALogger").ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[injectPostSendOptOutSystemMsg] handle sys msg failed",
                    ])),
                );
              }),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[injectPostSendOptOutSystemMsg] System message injected",
                  ])),
              ));
          } catch (e) {
            o("WALogger").ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[injectPostSendOptOutSystemMsg] Failed",
                ])),
            );
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      o("WAWebToastManager").ToastManager.open(
        R.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Something went wrong. Try again."),
        }),
      );
    }
    function N() {
      o("WAWebToastManager").ToastManager.open(
        R.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "This link is no longer valid."),
        }),
      );
    }
    ((l.sendSignupResponse = E), (l.showInvalidSignupLinkToast = N));
  },
  226,
);
