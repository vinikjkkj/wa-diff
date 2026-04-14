__d(
  "WAWebShortNameTextMentionMutatorComponent.react",
  [
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebMentionMutatorComponentBase.react",
    "WAWebMiscGatingUtils",
    "react",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.contact,
        n = e.lastMessage,
        a = e.onClick,
        i = e.selectable,
        l = e.theme,
        u = o("useWAWebContactValues").useContactValues(e.contact.id, [
          o("WAWebContactGetters").getId,
          o("WAWebFrontendContactGetters").getDisplayName,
          o("WAWebContactGetters").getShortName,
          o("WAWebFrontendContactGetters").getIsMyContact,
        ]),
        c = u[0],
        d = u[1],
        m = u[2],
        p = u[3],
        _ = o("useWAWebModelValues").useModelValues(e.groupMetadata, [
          "uniqueShortNameMap",
        ]),
        f = function () {
          return o("WAWebMiscGatingUtils").isDropLastNameEnabled() &&
            _ &&
            _.hasUniqueShortNameMention(t)
            ? m
            : d;
        },
        g = f();
      return s.jsx(r("WAWebMentionMutatorComponentBase.react"), {
        text: g,
        jid: c.toString(),
        theme: l,
        selectable: i,
        onClick: a,
        lastMessage: n,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
