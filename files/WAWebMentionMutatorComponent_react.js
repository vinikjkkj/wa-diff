__d(
  "WAWebMentionMutatorComponent.react",
  [
    "WAWebTextMentionWrapperMutatorComponent.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.lastMessage,
        a = e.mentionMeta,
        i = e.selectable,
        l = e.theme,
        u;
      return (
        t[0] !== n || t[1] !== a.contact || t[2] !== i || t[3] !== l
          ? ((u = s.jsx(r("WAWebTextMentionWrapperMutatorComponent.react"), {
              contact: a.contact,
              theme: l,
              selectable: i,
              lastMessage: n,
            })),
            (t[0] = n),
            (t[1] = a.contact),
            (t[2] = i),
            (t[3] = l),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    l.default = u;
  },
  98,
);
