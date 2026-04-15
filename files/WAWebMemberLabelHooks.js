__d(
  "WAWebMemberLabelHooks",
  [
    "WAWebMemberLabelCollection",
    "WAWebMemberLabelKey",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebUserPrefsMeUser",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      return new (r("WAWebMemberLabelKey"))({ chatId: e, member: t });
    }
    var c = function (t) {
      if (t) {
        var e;
        return (e = r("WAWebMemberLabelCollection").get(t)) == null
          ? void 0
          : e.label;
      }
    };
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e ? ((n = c(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var a = s(n),
        i = a[0],
        l = a[1],
        u;
      if (t[2] !== e) {
        var d;
        ((u = (d = e == null ? void 0 : e.toString()) != null ? d : ""),
          (t[2] = e),
          (t[3] = u));
      } else u = t[3];
      var m = u,
        p;
      return (
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = function (t) {
              var e = t == null ? void 0 : t.label;
              (e === "" && (e = null), l(e));
            }),
            (t[4] = p))
          : (p = t[4]),
        o("useWAWebListener").useListener(
          r("WAWebMemberLabelCollection"),
          m,
          p,
        ),
        i
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      if (t[0] !== e) {
        var a = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
        ((n = o("WAWebMemberLabelsFrontendUtils").memberLabelKeyFrom({
          from: "chat_and_member",
          chat: e,
          member: a,
        })),
          (t[0] = e),
          (t[1] = n));
      } else n = t[1];
      var i = n,
        l = d(i),
        s;
      return (
        t[2] !== l
          ? ((s = r("isStringNotNullAndNotWhitespaceOnly")(l)),
            (t[2] = l),
            (t[3] = s))
          : (s = t[3]),
        s
      );
    }
    ((l.createMemberLabelKey = u),
      (l.useMemberLabelValue = d),
      (l.useHasSelfMemberLabelForChat = m));
  },
  98,
);
