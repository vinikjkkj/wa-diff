__d(
  "WAWebChatTextMentionMutatorComponent.react",
  [
    "WAWebABProps",
    "WAWebChatContactUtils",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebMentionMutatorComponentBase.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.contact,
        a = e.lastMessage,
        i = e.onClick,
        l = e.selectable,
        u = e.theme,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [
            o("WAWebContactGetters").getId,
            o("WAWebFrontendContactGetters").getDisplayName,
            o("WAWebContactGetters").getNotifyName,
          ]),
          (t[0] = c))
        : (c = t[0]);
      var d = o("useWAWebContactValues").useContactValues(e.contact.id, c),
        m = d[0],
        p = d[1],
        _ = d[2],
        f,
        g;
      if (
        o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(n) &&
        o("WAWebABProps").getABPropConfigValue(
          "elevated_push_names_v2_m2_enabled",
        )
      ) {
        var h;
        (t[1] !== _
          ? ((h = o("WAWebChatContactUtils")
              .getFormattedNotifyName(_, !1)
              .toString()),
            (t[1] = _),
            (t[2] = h))
          : (h = t[2]),
          (f = h));
        var y;
        (t[3] !== _
          ? ((y = o("WAWebChatContactUtils")
              .getAccessibleNotifyName(_)
              .toString()),
            (t[3] = _),
            (t[4] = y))
          : (y = t[4]),
          (g = y));
      } else f = p;
      var C = f,
        b;
      t[5] !== m ? ((b = m.toString()), (t[5] = m), (t[6] = b)) : (b = t[6]);
      var v;
      return (
        t[7] !== g ||
        t[8] !== f ||
        t[9] !== a ||
        t[10] !== i ||
        t[11] !== l ||
        t[12] !== b ||
        t[13] !== u
          ? ((v = s.jsx(r("WAWebMentionMutatorComponentBase.react"), {
              text: C,
              jid: b,
              onClick: i,
              theme: u,
              selectable: l,
              ariaLabel: g,
              lastMessage: a,
            })),
            (t[7] = g),
            (t[8] = f),
            (t[9] = a),
            (t[10] = i),
            (t[11] = l),
            (t[12] = b),
            (t[13] = u),
            (t[14] = v))
          : (v = t[14]),
        v
      );
    }
    l.default = u;
  },
  98,
);
