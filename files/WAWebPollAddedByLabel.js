__d(
  "WAWebPollAddedByLabel",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebPollAddOptionContributor",
    "WAWebUserPrefsMeUser",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.addOptionMsg,
        r,
        a,
        i,
        l;
      if (t[0] !== n) {
        l = Symbol.for("react.early_return_sentinel");
        e: {
          var c = o("WAWebMsgGetters").getSender(n);
          if (c == null) {
            l = null;
            break e;
          }
          if (o("WAWebUserPrefsMeUser").isMeAccount(c)) {
            var p;
            (t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = u.jsx(m, { label: s._(/*BTDS*/ "Added by you") })),
                (t[5] = p))
              : (p = t[5]),
              (l = p));
            break e;
          }
          ((r = d),
            (a = o("WAWebFrontendMsgGetters").getChat(n)),
            (i = o("WAWebContactCollection").ContactCollection.gadd(c)));
        }
        ((t[0] = n), (t[1] = r), (t[2] = a), (t[3] = i), (t[4] = l));
      } else ((r = t[1]), (a = t[2]), (i = t[3]), (l = t[4]));
      if (l !== Symbol.for("react.early_return_sentinel")) return l;
      var _;
      return (
        t[6] !== r || t[7] !== a || t[8] !== i
          ? ((_ = u.jsx(r, { chat: a, contact: i })),
            (t[6] = r),
            (t[7] = a),
            (t[8] = i),
            (t[9] = _))
          : (_ = t[9]),
        _
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.chat,
        r = e.contact,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebFrontendContactGetters").getFormattedName,
            o("WAWebFrontendContactGetters").getIsMyContact,
            o("WAWebContactGetters").getNotifyName,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebContactValues").useContactValues(r.id, a),
        l = i[0],
        c = i[1],
        d = i[2],
        p;
      return (
        t[1] !== n || t[2] !== r || t[3] !== l || t[4] !== c || t[5] !== d
          ? ((p = u.jsx(m, {
              label: s._(/*BTDS*/ "Added by {contributor-name}", [
                s._param(
                  "contributor-name",
                  o("WAWebPollAddOptionContributor").resolveContributorName({
                    chat: n,
                    contact: r,
                    formattedName: l,
                    isMyContact: c,
                    notifyName: d,
                  }),
                ),
              ]),
            })),
            (t[1] = n),
            (t[2] = r),
            (t[3] = l),
            (t[4] = c),
            (t[5] = d),
            (t[6] = p))
          : (p = t[6]),
        p
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.label,
        a;
      return (
        t[0] !== n
          ? ((a = u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: n,
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    l.default = c;
  },
  226,
);
