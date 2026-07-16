__d(
  "WAWebSignupGreetingAction",
  [
    "WALogger",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBMessageDelete",
    "WAWebMsgType",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSignupGating",
    "WAWebSignupGreetingActionShared",
    "WAWebSignupLoadingState",
    "WAWebSignupQPLLogger",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      o("WAWebSignupGreetingActionShared").signupCardInjectedChats.clear();
    }
    function d(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup &&
        e.signupCtaTapped !== !0
      );
    }
    function m(e) {
      var t = e.id.toString(),
        n = null,
        r = o("WAWebSignupGreetingActionShared").inFlightDeepLinks.get(t);
      if (r != null) n = t;
      else if (o("WAWebSignupLoadingState").isSignupLoading(t))
        for (var a of o("WAWebSignupGreetingActionShared").inFlightDeepLinks) {
          var i = a[0],
            l = a[1];
          ((n = i), (r = l));
          break;
        }
      r == null ||
        n == null ||
        (o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(n),
        o("WAWebSignupGreetingActionShared").cancelledSignups.add(r),
        o("WAWebSignupQPLLogger").deepLinkCancel(r),
        o("WAWebSignupFlowLoggerLazy").logSignupOp({
          operation: o("WAWebSignupFlowLoggerLazy")
            .SIGNUP_USER_JOURNEY_OPERATION.AGM_CANCELLED_USER_LEFT,
          signupId: r,
          businessWid: e.id,
          chatTimestamp: e.t,
        }));
    }
    function p(t) {
      var n = t.msgs.last();
      if (
        !(n == null || !d(n)) &&
        !(
          !o("WAWebSignupGating").isSignupAGMEnabled() ||
          !o("WAWebSignupGating").isSignupAGMCleanupEnabled()
        ) &&
        !(t.draftMessage != null && t.draftMessage.text !== "")
      ) {
        var r = t.msgs.getModelsArray(),
          a = r.filter(d);
        if (o("WAWebSignupGreetingActionShared").isChatSafeToDelete(t, a))
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[maybeCleanupSignupAGM] deleting signup chat",
              ])),
          ),
            o("WAWebSignupGreetingActionShared").deleteSignupChat(t));
        else {
          var i = [];
          for (var l of a) (t.msgs.remove(l), i.push(l.id.toString()));
          i.length > 0 &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[maybeCleanupSignupAGM] removing ",
                  " AGMs from existing chat",
                ])),
              String(i.length),
            ),
            o("WAWebDBMessageDelete")
              .removeMessagesFromHistory(i, { deleteAssociatedMsgs: !1 })
              .catch(function (e) {
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[maybeCleanupSignupAGM] failed to remove from history ",
                      "",
                    ])),
                  e,
                );
              }));
        }
        o("WAWebSignupGreetingActionShared").signupCardInjectedChats.delete(
          t.id.toString(),
        );
      }
    }
    ((l.resetSignupCardInjectedChats = c),
      (l.cancelInFlightSignups = m),
      (l.maybeCleanupSignupAGM = p));
  },
  98,
);
