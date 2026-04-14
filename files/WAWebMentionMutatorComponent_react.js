__d(
  "WAWebMentionMutatorComponent.react",
  ["WAWebTextMentionWrapperMutatorComponent.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.lastMessage,
        n = e.mentionMeta,
        o = e.selectable,
        a = e.theme;
      return s.jsx(r("WAWebTextMentionWrapperMutatorComponent.react"), {
        contact: n.contact,
        theme: a,
        selectable: o,
        lastMessage: t,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
