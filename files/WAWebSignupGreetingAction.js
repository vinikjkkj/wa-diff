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
    "WAWebSignupQPLLogger",
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
      g,
      h = new Set(),
      y = new Map(),
      C = new Set(),
      b = 5;
    function v(t) {
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
    function S(e, t) {
      var n = e.msgs.getModelsArray();
      return n.length > b
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
    function R() {
      h.clear();
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a;
          o("WAWebSignupQPLLogger").deepLinkStart(t);
          var i;
          try {
            i = o("WAWebWidFactory").createWid(e);
          } catch (n) {
            (o("WAWebSignupQPLLogger").deepLinkFail(t, "invalid_phone"),
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:greeting] invalid phone signupId=",
                      " phone=",
                      "",
                    ])),
                  t,
                  e,
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("signup-greeting-invalid-phone"));
            return;
          }
          y.set(i.toString(), t);
          try {
            o("WAWebSignupFlowLoggerLazy").logSignupOp({
              operation: o("WAWebSignupFlowLoggerLazy")
                .SIGNUP_USER_JOURNEY_OPERATION.DEEP_LINK_PARSED,
              signupId: t,
              businessWid: i,
            });
            var l = yield (g || (g = n("Promise"))).all([
                o("WAWebFindChatAction").findOrCreateLatestChat(i, "signupAGM"),
                n("asyncToGeneratorRuntime")
                  .asyncToGenerator(function* () {
                    o("WAWebSignupQPLLogger").deepLinkMetadataFetchStart(t);
                    try {
                      return yield o(
                        "WAWebSignupMetadataFetcher",
                      ).fetchSignupMetadata(t, i.user);
                    } finally {
                      o("WAWebSignupQPLLogger").deepLinkMetadataFetchEnd(t);
                    }
                  })()
                  .catch(o("WAWebNullFunc").returnNull),
              ]),
              s = l[0].chat,
              u = l[1];
            a = s.id.toString();
            var c = i.toString();
            a !== c && (y.delete(c), y.set(a, t));
            var b = S(s);
            if (u == null) {
              (y.delete(a),
                o("WALogger")
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
                b &&
                  (s.draftMessage == null || s.draftMessage.text === "") &&
                  (o("WAWebCmd").Cmd.closeChat(s), v(s)),
                o("WAWebSendSignupResponseAction").showInvalidSignupLinkToast(),
                o("WAWebSignupLoadingState").setSignupLoading(a, !1),
                C.delete(t) ||
                  o("WAWebSignupQPLLogger").deepLinkFail(
                    t,
                    "invalid_response",
                  ));
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
              !h.has(a))
            ) {
              h.add(a);
              try {
                var R = s.msgs.getModelsArray().some(function (e) {
                  return (
                    e.subtype ===
                    o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard
                  );
                });
                if (b && !R) {
                  var L = yield o(
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
                  L != null &&
                    (yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: s.id,
                      newMsg: L,
                      handleSingleMsgOrigin: "signupAGM",
                    }),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[injectSignupGreetingMessage] contact info card injected",
                        ])),
                    ));
                }
              } catch (e) {
                throw (h.delete(a), e);
              }
            }
            var E = o("WAWebUserPrefsMeUser").getMeUser(),
              k = {
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
                to: E,
                body: u.signupMessage,
                signupContext: {
                  signupId: u.signupId,
                  privacyPolicyUrl: u.privacyPolicyUrl,
                },
              };
            if (
              (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(s, k)[1],
              y.delete(a),
              C.delete(t))
            ) {
              o("WAWebSignupLoadingState").setSignupLoading(a, !1);
              return;
            }
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
              o("WAWebSignupLoadingState").setSignupLoading(a, !1),
              o("WAWebSignupQPLLogger").deepLinkSuccess(t));
          } catch (n) {
            if (
              (a != null ? y.delete(a) : y.delete(i.toString()),
              C.delete(t) ||
                o("WAWebSignupQPLLogger").deepLinkFail(t, "network_error"),
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup &&
        e.signupCtaTapped !== !0
      );
    }
    function I(e) {
      var t = e.id.toString(),
        n = null,
        r = y.get(t);
      if (r != null) n = t;
      else if (o("WAWebSignupLoadingState").isSignupLoading(t))
        for (var a of y) {
          var i = a[0],
            l = a[1];
          ((n = i), (r = l));
          break;
        }
      r == null ||
        n == null ||
        (y.delete(n),
        C.add(r),
        o("WAWebSignupQPLLogger").deepLinkCancel(r),
        o("WAWebSignupFlowLoggerLazy").logSignupOp({
          operation: o("WAWebSignupFlowLoggerLazy")
            .SIGNUP_USER_JOURNEY_OPERATION.AGM_CANCELLED_USER_LEFT,
          signupId: r,
          businessWid: e.id,
          chatTimestamp: e.t,
        }));
    }
    function T(e) {
      var t = e.msgs.last();
      if (
        !(t == null || !k(t)) &&
        !(
          !o("WAWebSignupGating").isSignupAGMEnabled() ||
          !o("WAWebSignupGating").isSignupAGMCleanupEnabled()
        ) &&
        !(e.draftMessage != null && e.draftMessage.text !== "")
      ) {
        var n = e.msgs.getModelsArray(),
          r = n.filter(k);
        if (S(e, r))
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[maybeCleanupSignupAGM] deleting signup chat",
              ])),
          ),
            v(e));
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
        h.delete(e.id.toString());
      }
    }
    ((l.resetSignupCardInjectedChats = R),
      (l.injectSignupGreetingMessage = L),
      (l.cancelInFlightSignups = I),
      (l.maybeCleanupSignupAGM = T));
  },
  98,
);
