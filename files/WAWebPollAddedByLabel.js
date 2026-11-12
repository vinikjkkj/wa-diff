__d(
  "WAWebPollAddedByLabel",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebSystemMsgContactName",
    "WAWebUserUtils",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatOrgIdentityRefresh",
    "useWAWebChatValues",
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
          if (o("WAWebUserUtils").isMeAccount(c)) {
            var p;
            (t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = u.jsx(m, { label: s._(/*BTDS*/ "Added by you") })),
                (t[5] = p))
              : (p = t[5]),
              (l = p));
            break e;
          }
          ((r = d),
            (a = n.id.remote),
            (i = o("WAWebContactCollection").ContactCollection.gadd(c)));
        }
        ((t[0] = n), (t[1] = r), (t[2] = a), (t[3] = i), (t[4] = l));
      } else ((r = t[1]), (a = t[2]), (i = t[3]), (l = t[4]));
      if (l !== Symbol.for("react.early_return_sentinel")) return l;
      var _;
      return (
        t[6] !== r || t[7] !== a || t[8] !== i
          ? ((_ = u.jsx(r, { chatId: a, contact: i })),
            (t[6] = r),
            (t[7] = a),
            (t[8] = i),
            (t[9] = _))
          : (_ = t[9]),
        _
      );
    }
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(9),
        a = e.chatId,
        i = e.contact,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebFrontendContactGetters").getFormattedName,
            o("WAWebFrontendContactGetters").getIsMyContact,
            o("WAWebContactGetters").getNotifyName,
            o("WAWebFrontendContactGetters").getShownOrgMemberName,
          ]),
          (n[0] = l))
        : (l = n[0]);
      var c = o("useWAWebContactValues").useContactValues(i.id, l),
        d = c[0],
        p = c[1],
        _ = c[2],
        f = c[3],
        g =
          (t = o("useWAWebChatValues").useOptionalChatValues(a, [
            o("WAWebFrontendChatGetters").getGroupMetadata,
          ])) != null
            ? t
            : [null],
        h = g[0];
      r("useWAWebChatOrgIdentityRefresh")(a);
      var y;
      return (
        n[1] !== a ||
        n[2] !== i ||
        n[3] !== d ||
        n[4] !== h ||
        n[5] !== p ||
        n[6] !== _ ||
        n[7] !== f
          ? ((y = u.jsx(m, {
              label: s._(/*BTDS*/ "Added by {contributor-name}", [
                s._param(
                  "contributor-name",
                  o("WAWebSystemMsgContactName").resolveSystemMsgContactNameFor(
                    {
                      chatId: a,
                      contact: i,
                      formattedName: d,
                      groupMetadata: h,
                      isMyContact: p,
                      notifyName: _,
                      orgMemberName: f,
                    },
                  ),
                ),
              ]),
            })),
            (n[1] = a),
            (n[2] = i),
            (n[3] = d),
            (n[4] = h),
            (n[5] = p),
            (n[6] = _),
            (n[7] = f),
            (n[8] = y))
          : (y = n[8]),
        y
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
