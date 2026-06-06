__d(
  "WAWebSendSignupResponseAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBUpdateMessageTable",
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
    "WAWebWidToJid",
    "WAWebWorkerSafeBackendApi",
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
      C = y || (y = o("react")),
      b = 2e3;
    async function v(t, n) {
      var a,
        i = (a = n.signupContext) == null ? void 0 : a.signupId;
      if (i == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendSignupResponse: missing signupId on AGM",
              ])),
          ),
          !1
        );
      if (
        (o("WAWebSignupFlowLoggerLazy").logSignupOp({
          operation: o("WAWebSignupFlowLoggerLazy")
            .SIGNUP_USER_JOURNEY_OPERATION.AGM_CTA_CLICKED,
          signupId: i,
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
      var _ = l,
        f = t.id,
        g = { signup_id: i },
        h;
      try {
        (o("WAWebSignupQPLLogger").userRequestStart(i),
          (h = {
            type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
            kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
            ack: o("WAWebAck").ACK.CLOCK,
            to: f,
            from: _,
            id: await new (r("WAWebMsgKey"))({
              id: await r("WAWebMsgKey").newId(),
              from: _,
              to: f,
              participant: void 0,
              selfDir: "out",
            }),
            local: !0,
            isNewMsg: !0,
            t: o("WATimeUtils").unixTime(),
            interactivePayload: {
              type: r("WAWebInteractiveMessageType").NATIVE_FLOW,
              name: r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP,
              paramsJson: JSON.stringify(g),
              version: 1,
            },
            nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
              .API_SIGNUP,
            interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
            viewMode: "VISIBLE",
            body: (o("WAWebSignupCTAExperiment").getSignupCTAExperiment() ===
            o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
              ? s._(/*BTDS*/ "Get offers")
              : s._(/*BTDS*/ "Sign up")
            ).toString(),
          }),
          n.set({ signupCtaTapped: !0 }),
          o("WAWebDBUpdateMessageTable").updateMessageTable(n.id, {
            signupCtaTapped: !0,
          }),
          o("WAWebSignupFlowLoggerLazy").logSignupOp({
            operation: o("WAWebSignupFlowLoggerLazy")
              .SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_REQUEST_SENT,
            signupId: i,
            businessWid: t.id,
            chatTimestamp: t.t,
          }));
        var y = o("WAWebWidToJid").widToUserJid(t.id),
          C = await r("JSResourceForInteraction")("WAWebOptOutUserJob")
            .__setRef("WAWebSendSignupResponseAction")
            .load(),
          b = C.signupUser;
        o("WAWebSignupQPLLogger").userRequestIqStart(i);
        var v = await b(y, i);
        if (
          (o("WAWebSignupQPLLogger").userRequestIqEnd(i),
          v && v.errorCode != null)
        ) {
          var L;
          return (
            n.set({ signupCtaTapped: !1 }),
            o("WAWebDBUpdateMessageTable").updateMessageTable(n.id, {
              signupCtaTapped: !1,
            }),
            R(),
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:response] IQ error signupId=",
                    " errorCode=",
                    "",
                  ])),
                i,
                v.errorCode,
              )
              .sendLogs("signup-response-iq-error"),
            o("WAWebSignupQPLLogger").userRequestFail(
              i,
              (L = v.errorKind) != null ? L : "server_error",
            ),
            !1
          );
        }
        (await o("WAWebUserPrefsMultiDevice").setOptOutlistHash(v.listDhash),
          await o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
            "updateOptOutListModelInCollection",
            { targetWid: t.id, isBlocked: !1 },
          ));
      } catch (e) {
        return (
          n.set({ signupCtaTapped: !1 }),
          o("WAWebDBUpdateMessageTable").updateMessageTable(n.id, {
            signupCtaTapped: !1,
          }),
          R(),
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[signup:response] IQ exception signupId=",
                  "",
                ])),
              i,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("signup-response-iq-exception"),
          o("WAWebSignupQPLLogger").userRequestFail(i, "delivery_failure"),
          !1
        );
      }
      try {
        var E = await o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, h)[1];
        return E.messageSendResult !==
          o("WAWebSendMsgResultAction").SendMsgResult.OK
          ? (o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:response] send failed signupId=",
                    " result=",
                    "",
                  ])),
                i,
                E.messageSendResult,
              )
              .sendLogs("signup-response-send-failed"),
            o("WAWebSignupQPLLogger").userRequestFail(i, "delivery_failure"),
            !1)
          : (S(o("WAWebStateUtils").unproxy(t)),
            o("WAWebSignupQPLLogger").userRequestSuccess(i),
            o("WAWebSignupQPLLogger").confirmationStart(i),
            !0);
      } catch (e) {
        return (
          o("WAWebSignupQPLLogger").userRequestFail(i, "delivery_failure"),
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "sendSignupResponse: send failure: ",
                "",
              ])),
            e,
          ),
          !1
        );
      }
    }
    async function S(e) {
      try {
        if (
          (await o("WAPromiseDelays").delayMs(b),
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
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[injectPostSendOptOutSystemMsg] handle sys msg failed",
                ])),
            );
          }),
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[injectPostSendOptOutSystemMsg] System message injected",
              ])),
          ));
      } catch (e) {
        o("WALogger").ERROR(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[injectPostSendOptOutSystemMsg] Failed",
            ])),
        );
      }
    }
    function R() {
      o("WAWebToastManager").ToastManager.open(
        C.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Something went wrong. Try again."),
        }),
      );
    }
    function L() {
      o("WAWebToastManager").ToastManager.open(
        C.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "This link is no longer valid."),
        }),
      );
    }
    ((l.sendSignupResponse = v), (l.showInvalidSignupLinkToast = L));
  },
  226,
);
