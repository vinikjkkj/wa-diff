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
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSignupCTAExperiment",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidToJid",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
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
      b = C || (C = o("react")),
      v = 2e3;
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
          if (n.signupCtaTapped === !0) return !1;
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
            h = {
              type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
              kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
              ack: o("WAWebAck").ACK.CLOCK,
              to: f,
              from: _,
              id: yield new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
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
            };
          (n.set({ signupCtaTapped: !0 }),
            o("WAWebDBUpdateMessageTable").updateMessageTable(n.id, {
              signupCtaTapped: !0,
            }));
          try {
            var y = o("WAWebWidToJid").widToUserJid(t.id),
              C = yield r("JSResourceForInteraction")("WAWebOptOutUserJob")
                .__setRef("WAWebSendSignupResponseAction")
                .load(),
              b = C.signupUser,
              v = yield b(y, i);
            if (v && v.errorCode != null)
              return (
                n.set({ signupCtaTapped: !1 }),
                o("WAWebDBUpdateMessageTable").updateMessageTable(n.id, {
                  signupCtaTapped: !1,
                }),
                k(),
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "sendSignupResponse: signup IQ failure",
                    ])),
                ),
                !1
              );
            (yield o("WAWebUserPrefsMultiDevice").setOptOutlistHash(
              v.listDhash,
            ),
              yield o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                "updateOptOutListModelInCollection",
                { targetWid: t.id, isBlocked: !1 },
              ));
          } catch (e) {
            return (
              n.set({ signupCtaTapped: !1 }),
              o("WAWebDBUpdateMessageTable").updateMessageTable(n.id, {
                signupCtaTapped: !1,
              }),
              k(),
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "sendSignupResponse: signup IQ exception: ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
          try {
            var S = yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(
              t,
              h,
            )[1];
            return S.messageSendResult !==
              o("WAWebSendMsgResultAction").SendMsgResult.OK
              ? (o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "sendSignupResponse: SendMsgResult failure",
                    ])),
                ),
                !1)
              : (L(o("WAWebStateUtils").unproxy(t)), !0);
          } catch (e) {
            return (
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
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (
              (yield o("WAPromiseDelays").delayMs(v),
              e.msgs == null || e.contact == null)
            )
              return;
            var t = yield (y || (y = n("Promise"))).all([
                r("JSResourceForInteraction")("WAWebPostSendOptOutSystemMsg")
                  .__setRef("WAWebSendSignupResponseAction")
                  .load(),
                r("JSResourceForInteraction")("WAWebGetMessageCache")
                  .__setRef("WAWebSendSignupResponseAction")
                  .load(),
                r("JSResourceForInteraction")("WAWebHandleSingleMsgFactory")
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      o("WAWebToastManager").ToastManager.open(
        b.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Something went wrong. Try again."),
        }),
      );
    }
    l.sendSignupResponse = S;
  },
  226,
);
