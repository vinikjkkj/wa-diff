__d(
  "WAWebTextMentionFormatMutator",
  [
    "WAWebMentionFormatMutator",
    "WAWebTextMentionMutatorComponent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = n.contact,
              a = n.groupMetadata,
              i = o.lastMessage,
              l = o.selectable,
              u = o.theme;
            return s.jsx(r("WAWebTextMentionMutatorComponent.react"), {
              contact: e,
              groupMetadata: a,
              selectable: l,
              theme: u,
              lastMessage: i,
            });
          }),
          t
        );
      })(r("WAWebMentionFormatMutator"));
    l.default = u;
  },
  98,
);
