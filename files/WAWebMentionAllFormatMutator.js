__d(
  "WAWebMentionAllFormatMutator",
  [
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator",
    "WAWebMentionAllMutatorComponent.react",
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
          (t.match = function (t, n) {
            if (!n || n.hasMentionAll !== !0) return [];
            var e = /@all\b/g,
              o = r("WAWebExtractRangesUsingRegex")(t, e),
              a = o.map(function (e) {
                var t = e[0],
                  n = e[1],
                  r = e[2],
                  o = e[3],
                  a = e[4],
                  i = { text: a[0] };
                return [t, n, r, o, i];
              });
            return a;
          }),
          (t.jsx = function (t, n, o) {
            var e = o.lastMessage,
              a = o.selectable;
            return s.jsx(r("WAWebMentionAllMutatorComponent.react"), {
              text: n.text,
              selectable: a,
              lastMessage: e,
            });
          }),
          t
        );
      })(r("WAWebFormatMutator"));
    ((u.compatibility = !0), (l.default = u));
  },
  98,
);
