__d(
  "WAWebSignupGreetingAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCommonMsgUtils",
    "WAWebContactSystemMsg",
    "WAWebFindChatAction",
    "WAWebHandleSingleMsgFactory",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNullFunc",
    "WAWebSendMsgChatAction",
    "WAWebSignupLoadingState",
    "WAWebSignupMetadataFetcher",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new Set();
    function p() {
      m.clear();
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i;
          try {
            var l = o("WAWebWidFactory").createWid(t),
              p = yield (d || (d = n("Promise"))).all([
                o("WAWebFindChatAction").findOrCreateLatestChat(l, "signupAGM"),
                o("WAWebSignupMetadataFetcher")
                  .fetchSignupMetadata(a, l.user)
                  .catch(o("WAWebNullFunc").returnNull),
              ]),
              _ = p[0],
              f = _.chat,
              g = _.created,
              h = p[1];
            if (((i = f.id.toString()), !g && !m.has(i))) {
              m.add(i);
              try {
                var y = f.msgs.getModelsArray().some(function (e) {
                  return (
                    e.subtype ===
                      o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                        .ContactInfoCard ||
                    !o("WAWebCommonMsgUtils").isNotificationType(
                      e.type,
                      e.subtype,
                    )
                  );
                });
                if (!y) {
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
                    (yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
                      chatId: f.id,
                      newMsg: C,
                      handleSingleMsgOrigin: "signupAGM",
                    }),
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[injectSignupGreetingMessage] contact info card injected",
                        ])),
                    ));
                }
              } catch (e) {
                throw (m.delete(i), e);
              }
            }
            if (h == null) {
              (o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[injectSignupGreetingMessage] skipping: metadata null",
                  ])),
              ),
                o("WAWebSignupLoadingState").setSignupLoading(i, !1));
              return;
            }
            var b = o("WAWebUserPrefsMeUser").getMeUser(),
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
                body: h.signupMessage,
                signupContext: {
                  signupId: h.signupId,
                  privacyPolicyUrl: h.privacyPolicyUrl,
                },
              };
            (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(f, v)[1],
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[injectSignupGreetingMessage] AGM injected id=",
                    "",
                  ])),
                a,
              ),
              o("WAWebSignupLoadingState").setSignupLoading(i, !1));
          } catch (e) {
            if (
              (o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[injectSignupGreetingMessage] error ",
                    "",
                  ])),
                e,
              ),
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
        f.apply(this, arguments)
      );
    }
    ((l.resetSignupCardInjectedChats = p), (l.injectSignupGreetingMessage = _));
  },
  98,
);
