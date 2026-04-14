__d(
  "WAWebAutomatedGreetingMessageText.react",
  [
    "WAWebAGMCtwaMessage.react",
    "WAWebAGMSignupMessage.react",
    "WAWebBizCtwaAGMUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebStateUtils",
    "WAWebUnsupportedMessage",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chat,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l = o("WAWebStateUtils").unproxy(i);
      if (!o("WAWebBizCtwaAGMUtils").isAGMSupported(l))
        return s.jsx(r("WAWebUnsupportedMessage"), {
          msg: i,
          displayAuthor: n,
          hideUpdateButton: !0,
        });
      if (i.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup) {
        var u;
        return s.jsx(r("WAWebAGMSignupMessage.react"), {
          chat: t,
          displayAuthor: n,
          displayType: a,
          msg: i,
          privacyPolicyUrl:
            (u = i.signupContext) == null ? void 0 : u.privacyPolicyUrl,
        });
      }
      return s.jsx(r("WAWebAGMCtwaMessage.react"), {
        chat: t,
        displayAuthor: n,
        displayType: a,
        msg: i,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
