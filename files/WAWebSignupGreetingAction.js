__d(
  "WAWebSignupGreetingAction",
  [
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
      h = new Map(),
      y = new Set(),
      C = 5;
    function b(t) {
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
    function v(e, t) {
      var n = e.msgs.getModelsArray();
      return n.length > C
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
    function S() {
      g.clear();
    }
    async function R(e, t) {
      var n;
      o("WAWebSignupQPLLogger").deepLinkStart(t);
      var a;
      try {
        a = o("WAWebWidFactory").createWid(e);
      } catch (n) {
        (o("WAWebSignupQPLLogger").deepLinkFail(t, "invalid_phone"),
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
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
      h.set(a.toString(), t);
      try {
        o("WAWebSignupFlowLoggerLazy").logSignupOp({
          operation: o("WAWebSignupFlowLoggerLazy")
            .SIGNUP_USER_JOURNEY_OPERATION.DEEP_LINK_PARSED,
          signupId: t,
          businessWid: a,
        });
        var i = await Promise.all([
            o("WAWebFindChatAction").findOrCreateLatestChat(a, "signupAGM"),
            (async function () {
              o("WAWebSignupQPLLogger").deepLinkMetadataFetchStart(t);
              try {
                return await o(
                  "WAWebSignupMetadataFetcher",
                ).fetchSignupMetadata(t, a.user);
              } finally {
                o("WAWebSignupQPLLogger").deepLinkMetadataFetchEnd(t);
              }
            })().catch(o("WAWebNullFunc").returnNull),
          ]),
          l = i[0].chat,
          p = i[1];
        n = l.id.toString();
        var _ = a.toString();
        n !== _ && (h.delete(_), h.set(n, t));
        var f = v(l);
        if (p == null) {
          (h.delete(n),
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:greeting] metadata null signupId=",
                    " phone=",
                    "",
                  ])),
                t,
                e,
              )
              .sendLogs("signup-greeting-metadata-null"),
            f &&
              (l.draftMessage == null || l.draftMessage.text === "") &&
              (o("WAWebCmd").Cmd.closeChat(l), b(l)),
            o("WAWebSendSignupResponseAction").showInvalidSignupLinkToast(),
            o("WAWebSignupLoadingState").setSignupLoading(n, !1),
            y.delete(t) ||
              o("WAWebSignupQPLLogger").deepLinkFail(t, "invalid_response"));
          return;
        }
        if (
          (o("WAWebSignupFlowLoggerLazy").logSignupOp({
            operation: o("WAWebSignupFlowLoggerLazy")
              .SIGNUP_USER_JOURNEY_OPERATION.LAND_ON_CHAT_THREAD,
            signupId: t,
            businessWid: l.id,
            chatTimestamp: l.t,
          }),
          !g.has(n))
        ) {
          g.add(n);
          try {
            var C = l.msgs.getModelsArray().some(function (e) {
              return (
                e.subtype ===
                o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard
              );
            });
            if (f && !C) {
              var S = await o("WAWebContactSystemMsg").genContactInfoCardMsg(
                l.id,
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
              S != null &&
                (await o(
                  "WAWebHandleSingleMsgWorkerCompatible",
                ).handleSingleMsg({
                  chatId: l.id,
                  newMsg: S,
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
            throw (g.delete(n), e);
          }
        }
        var R = o("WAWebUserPrefsMeUser").getMeUser(),
          L = {
            type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
            kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
            subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            ack: o("WAWebAck").ACK.READ,
            from: l.id,
            author: l.id,
            id: new (r("WAWebMsgKey"))({
              fromMe: !1,
              remote: l.id,
              id: await r("WAWebMsgKey").newId(),
              participant: void 0,
            }),
            local: !1,
            isNewMsg: !0,
            t: o("WATimeUtils").unixTime(),
            to: R,
            body: p.signupMessage,
            signupContext: {
              signupId: p.signupId,
              privacyPolicyUrl: p.privacyPolicyUrl,
            },
          };
        if (
          (await o("WAWebSendMsgChatAction").addAndSendMsgToChat(l, L)[1],
          h.delete(n),
          y.delete(t))
        ) {
          o("WAWebSignupLoadingState").setSignupLoading(n, !1);
          return;
        }
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[injectSignupGreetingMessage] AGM injected id=",
              "",
            ])),
          t,
        ),
          o("WAWebSignupFlowLoggerLazy").logSignupOp({
            operation: o("WAWebSignupFlowLoggerLazy")
              .SIGNUP_USER_JOURNEY_OPERATION.AGM_INJECTED,
            signupId: t,
            businessWid: l.id,
            chatTimestamp: l.t,
          }),
          o("WAWebSignupLoadingState").setSignupLoading(n, !1),
          o("WAWebSignupQPLLogger").deepLinkSuccess(t));
      } catch (i) {
        if (
          (n != null ? h.delete(n) : h.delete(a.toString()),
          y.delete(t) ||
            o("WAWebSignupQPLLogger").deepLinkFail(t, "network_error"),
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[signup:greeting] injection failed signupId=",
                  " phone=",
                  "",
                ])),
              t,
              e,
            )
            .catching(r("getErrorSafe")(i))
            .sendLogs("signup-greeting-injection-failed"),
          n != null)
        )
          o("WAWebSignupLoadingState").setSignupLoading(n, !1);
        else
          try {
            o("WAWebSignupLoadingState").setSignupLoading(
              o("WAWebWidFactory").createWid(e).toString(),
              !1,
            );
          } catch (e) {}
      }
    }
    function L(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup &&
        e.signupCtaTapped !== !0
      );
    }
    function E(e) {
      var t = e.id.toString(),
        n = null,
        r = h.get(t);
      if (r != null) n = t;
      else if (o("WAWebSignupLoadingState").isSignupLoading(t))
        for (var a of h) {
          var i = a[0],
            l = a[1];
          ((n = i), (r = l));
          break;
        }
      r == null ||
        n == null ||
        (h.delete(n),
        y.add(r),
        o("WAWebSignupQPLLogger").deepLinkCancel(r),
        o("WAWebSignupFlowLoggerLazy").logSignupOp({
          operation: o("WAWebSignupFlowLoggerLazy")
            .SIGNUP_USER_JOURNEY_OPERATION.AGM_CANCELLED_USER_LEFT,
          signupId: r,
          businessWid: e.id,
          chatTimestamp: e.t,
        }));
    }
    function k(e) {
      var t = e.msgs.last();
      if (
        !(t == null || !L(t)) &&
        !(
          !o("WAWebSignupGating").isSignupAGMEnabled() ||
          !o("WAWebSignupGating").isSignupAGMCleanupEnabled()
        ) &&
        !(e.draftMessage != null && e.draftMessage.text !== "")
      ) {
        var n = e.msgs.getModelsArray(),
          r = n.filter(L);
        if (v(e, r))
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[maybeCleanupSignupAGM] deleting signup chat",
              ])),
          ),
            b(e));
        else {
          var a = [];
          for (var i of r) (e.msgs.remove(i), a.push(i.id.toString()));
          a.length > 0 &&
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[maybeCleanupSignupAGM] removing ",
                  " AGMs from existing chat",
                ])),
              String(a.length),
            ),
            o("WAWebDBMessageDelete")
              .removeMessagesFromHistory(a, { deleteAssociatedMsgs: !1 })
              .catch(function (e) {
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.resetSignupCardInjectedChats = S),
      (l.injectSignupGreetingMessage = R),
      (l.cancelInFlightSignups = E),
      (l.maybeCleanupSignupAGM = k));
  },
  98,
);
