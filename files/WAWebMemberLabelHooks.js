__d(
  "WAWebMemberLabelHooks",
  [
    "WAWebMemberLabelCollection",
    "WAWebMemberLabelKey",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebUserUtils",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      return new (r("WAWebMemberLabelKey"))({ chatId: e, member: t });
    }
    function c(e) {
      if (e) {
        var t;
        return (t = r("WAWebMemberLabelCollection").get(e)) == null
          ? void 0
          : t.label;
      }
    }
    function d(e) {
      var t,
        n = s(c(e)),
        a = n[0],
        i = n[1],
        l = (t = e == null ? void 0 : e.toString()) != null ? t : "";
      return (
        o("useWAWebListener").useListener(
          r("WAWebMemberLabelCollection"),
          l,
          function (e) {
            var t = e == null ? void 0 : e.label;
            (t === "" && (t = null), i(t));
          },
        ),
        a
      );
    }
    function m(e) {
      var t = o("WAWebUserUtils").getMeLidUserOrThrow(),
        n = o("WAWebMemberLabelsFrontendUtils").memberLabelKeyFrom({
          from: "chat_and_member",
          chatId: e,
          member: t,
        }),
        a = d(n);
      return r("isStringNotNullAndNotWhitespaceOnly")(a);
    }
    ((l.createMemberLabelKey = u),
      (l.useMemberLabelValue = d),
      (l.useHasSelfMemberLabelForChat = m));
  },
  98,
);
