__d(
  "WAWebSignupGreetingActionShared",
  [
    "WALogger",
    "WAWebChatDeleteBridge",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCommonMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set(),
      u = new Map(),
      c = new Set(),
      d = 5;
    function m(t) {
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
    function p(e, t) {
      var n = e.msgs.getModelsArray();
      return n.length > d
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
    ((l.signupCardInjectedChats = s),
      (l.inFlightDeepLinks = u),
      (l.cancelledSignups = c),
      (l.deleteSignupChat = m),
      (l.isChatSafeToDelete = p));
  },
  98,
);
