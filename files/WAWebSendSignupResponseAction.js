__d(
  "WAWebSendSignupResponseAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBackendRuntime",
    "WAWebDBUpdateMessageTable",
    "WAWebInAppSignupInfoStore",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMessageStoreService",
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
    "getErrorSafe",
    "justknobx",
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
      S = v || (v = o("react")),
      R = 2e3;
    async function L(t, n, a) {
      if (a === void 0) {
        var i;
        a = (i = n.signupContext) == null ? void 0 : i.signupId;
      }
      if (a == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendSignupResponse: missing signupId",
              ])),
          ),
          !1
        );
      if (
        (o("WAWebSignupFlowLoggerLazy").logSignupOp({
          operation: o("WAWebSignupFlowLoggerLazy")
            .SIGNUP_USER_JOURNEY_OPERATION.AGM_CTA_CLICKED,
          signupId: a,
          businessWid: t.id,
          chatTimestamp: t.t,
        }),
        n.signupCtaTapped === !0)
      )
        return !1;
      var l = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (l == null)
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "sendSignupResponse: no meUser",
              ])),
          ),
          !1
        );
      var f = l,
        g = t.id,
        h = { signup_id: a },
        y;
      try {
        (o("WAWebSignupQPLLogger").userRequestStart(a),
          (y = {
            type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
            kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
            ack: o("WAWebAck").ACK.CLOCK,
            to: g,
            from: f,
            id: await new (r("WAWebMsgKey"))({
              id: await r("WAWebMsgKey").newId(),
              from: f,
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
            body: (o("WAWebSignupCTAExperiment").getSignupCTAExperiment() ===
            o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "")
            ).toString(),
          }),
          n.set({ signupCtaTapped: !0 }),
          (o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMessageStoreService").MessageStoreService,
              ).updateMessageTable
            : o("WAWebDBUpdateMessageTable").updateMessageTable)(n.id, {
            signupCtaTapped: !0,
          }),
          o("WAWebSignupFlowLoggerLazy").logSignupOp({
            operation: o("WAWebSignupFlowLoggerLazy")
              .SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_REQUEST_SENT,
            signupId: a,
            businessWid: t.id,
            chatTimestamp: t.t,
          }));
        var C = o("WAWebWidToJid").widToUserJid(t.id),
          b = await r("JSResourceForInteraction")("WAWebOptOutUserJob")
            .__setRef("WAWebSendSignupResponseAction")
            .load(),
          v = b.signupUser;
        o("WAWebSignupQPLLogger").userRequestIqStart(a);
        var S = await v(C, a);
        if (
          (o("WAWebSignupQPLLogger").userRequestIqEnd(a),
          S && S.errorCode != null)
        ) {
          var R;
          return (
            n.set({ signupCtaTapped: !1 }),
            (o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebMessageStoreService").MessageStoreService,
                ).updateMessageTable
              : o("WAWebDBUpdateMessageTable").updateMessageTable)(n.id, {
              signupCtaTapped: !1,
            }),
            T(),
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:response] IQ error signupId=",
                    " errorCode=",
                    "",
                  ])),
                a,
                S.errorCode,
              )
              .sendLogs("signup-response-iq-error"),
            k(t, a),
            o("WAWebSignupQPLLogger").userRequestFail(
              a,
              (R = S.errorKind) != null ? R : "server_error",
            ),
            !1
          );
        }
        (await o("WAWebUserPrefsMultiDevice").setOptOutlistHash(S.listDhash),
          await o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
            "updateOptOutListModelInCollection",
            { targetWid: t.id, isBlocked: !1 },
          ),
          o("WAWebInAppSignupInfoStore").saveOptinDate(
            t.id.toString(),
            o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT
              .CHAT_THREAD_BUSINESS,
          ));
      } catch (e) {
        return (
          n.set({ signupCtaTapped: !1 }),
          (o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMessageStoreService").MessageStoreService,
              ).updateMessageTable
            : o("WAWebDBUpdateMessageTable").updateMessageTable)(n.id, {
            signupCtaTapped: !1,
          }),
          T(),
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[signup:response] IQ exception signupId=",
                  "",
                ])),
              a,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("signup-response-iq-exception"),
          k(t, a),
          o("WAWebSignupQPLLogger").userRequestFail(a, "delivery_failure"),
          !1
        );
      }
      var L = !1;
      try {
        var D = await o(
          "WAWebInAppSignupInfoStore",
        ).startPendingConfirmationTimer(t.id.toString(), a);
        D === "write_failed" &&
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[signup:confirmation] timer start failed signupId=",
                  "",
                ])),
              a,
            )
            .sendLogs("signup-start-pending-confirmation-failed");
        var x = await o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, y)[1];
        return x.messageSendResult !==
          o("WAWebSendMsgResultAction").SendMsgResult.OK
          ? (o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:response] send failed signupId=",
                    " result=",
                    "",
                  ])),
                a,
                x.messageSendResult,
              )
              .sendLogs("signup-response-send-failed"),
            k(t, a),
            o("WAWebSignupQPLLogger").userRequestFail(a, "delivery_failure"),
            await E(a),
            !1)
          : ((L = !0),
            I(o("WAWebStateUtils").unproxy(t)),
            o("WAWebSignupQPLLogger").userRequestSuccess(a),
            o("WAWebSignupQPLLogger").confirmationStart(a),
            !0);
      } catch (e) {
        return (
          k(t, a),
          o("WAWebSignupQPLLogger").userRequestFail(a, "delivery_failure"),
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "sendSignupResponse: send failure: ",
                "",
              ])),
            e,
          ),
          L || (await E(a)),
          !1
        );
      }
    }
    async function E(e) {
      var t = await o("WAWebInAppSignupInfoStore").stopPendingConfirmationTimer(
        e,
      );
      t === "write_failed" &&
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[signup:confirmation] rollback failed signupId=",
                "",
              ])),
            e,
          )
          .sendLogs("signup-rollback-pending-confirmation-failed");
    }
    function k(e, t) {
      try {
        o("WAWebSignupFlowLoggerLazy").logSignupOp({
          operation: o("WAWebSignupFlowLoggerLazy")
            .SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_REQUEST_FAILED,
          signupId: t,
          businessWid: e.id,
          chatTimestamp: e.t,
        });
      } catch (e) {
        o("WALogger")
          .ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[signup:response] failed to log request failure signupId=",
                "",
              ])),
            t,
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("signup-request-failed-log-failed");
      }
    }
    async function I(e) {
      try {
        if (
          (await o("WAPromiseDelays").delayMs(R),
          e.msgs == null || e.contact == null)
        )
          return;
        var t = await Promise.all([
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
          n = t[0].getPostSendOptOutSystemMsg,
          a = t[1].getMessageCache,
          i = t[2].handleSingleMsg,
          l = e.contact.verifiedName || e.contact.pushname || "",
          s = n(e.id, l);
        (a()
          .addMessages([{ msg: s }], !1)
          .catch(function () {
            o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[injectPostSendOptOutSystemMsg] Failed to add to cache",
                ])),
            );
          }),
          i({
            chatId: s.from,
            newMsg: s,
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
    }
    function T() {
      o("WAWebToastManager").ToastManager.open(
        S.jsx(o("WAWebToast.react").Toast, {
          msg: r("justknobx")._("8427") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
        }),
      );
    }
    function D() {
      o("WAWebToastManager").ToastManager.open(
        S.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    ((l.sendSignupResponse = L), (l.showInvalidSignupLinkToast = D));
  },
  226,
);
