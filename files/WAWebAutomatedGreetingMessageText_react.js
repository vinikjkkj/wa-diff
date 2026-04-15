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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.chat,
        a = e.displayAuthor,
        i = e.displayType,
        l = e.msg,
        u = o("WAWebStateUtils").unproxy(l);
      if (!o("WAWebBizCtwaAGMUtils").isAGMSupported(u)) {
        var c;
        return (
          t[0] !== a || t[1] !== l
            ? ((c = s.jsx(r("WAWebUnsupportedMessage"), {
                msg: l,
                displayAuthor: a,
                hideUpdateButton: !0,
              })),
              (t[0] = a),
              (t[1] = l),
              (t[2] = c))
            : (c = t[2]),
          c
        );
      }
      if (l.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup) {
        var d,
          m = (d = l.signupContext) == null ? void 0 : d.privacyPolicyUrl,
          p;
        return (
          t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== l || t[7] !== m
            ? ((p = s.jsx(r("WAWebAGMSignupMessage.react"), {
                chat: n,
                displayAuthor: a,
                displayType: i,
                msg: l,
                privacyPolicyUrl: m,
              })),
              (t[3] = n),
              (t[4] = a),
              (t[5] = i),
              (t[6] = l),
              (t[7] = m),
              (t[8] = p))
            : (p = t[8]),
          p
        );
      }
      var _;
      return (
        t[9] !== n || t[10] !== a || t[11] !== i || t[12] !== l
          ? ((_ = s.jsx(r("WAWebAGMCtwaMessage.react"), {
              chat: n,
              displayAuthor: a,
              displayType: i,
              msg: l,
            })),
            (t[9] = n),
            (t[10] = a),
            (t[11] = i),
            (t[12] = l),
            (t[13] = _))
          : (_ = t[13]),
        _
      );
    }
    l.default = u;
  },
  98,
);
