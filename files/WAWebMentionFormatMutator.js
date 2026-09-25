__d(
  "WAWebMentionFormatMutator",
  [
    "WAWebContactCollection",
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator",
    "WAWebMentionMutatorComponent.react",
    "WAWebRichTextInputConst",
    "WAWebWidFactory",
    "escapeRegex",
    "isEmptyObject",
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
            if (!n) return [];
            var e = n.groupMetadata,
              a = n.isDraftMessage,
              i = n.mentions;
            if (a === !0) {
              for (
                var l = r("WAWebExtractRangesUsingRegex")(
                    t,
                    new RegExp(
                      o("WAWebRichTextInputConst").userJidRegexStr,
                      "g",
                    ),
                  ),
                  s = [],
                  u = 0;
                u < l.length;
                ++u
              ) {
                var d = l[u],
                  m = d[4][1],
                  p = o("WAWebWidFactory").createUserWidOrThrow(m),
                  _ = o("WAWebContactCollection").ContactCollection.get(p);
                if (_ == null) return [];
                s.push([
                  d[0],
                  d[1],
                  d[2],
                  d[3],
                  { contact: _, groupMetadata: e },
                ]);
              }
              return s;
            }
            if (!i || r("isEmptyObject")(i)) return [];
            for (
              var f = c(i), g = r("WAWebExtractRangesUsingRegex")(t, f), h = 0;
              h < g.length;
              ++h
            )
              g[h][4] = { contact: i[g[h][4][0]], groupMetadata: e };
            return g;
          }),
          (t.jsx = function (t, n, o) {
            var e = o.lastMessage,
              a = o.selectable;
            return s.jsx(r("WAWebMentionMutatorComponent.react"), {
              mentionMeta: n,
              selectable: a,
              lastMessage: e,
            });
          }),
          t
        );
      })(r("WAWebFormatMutator"));
    u.compatibility = !0;
    function c(e) {
      var t = Object.keys(e).map(r("escapeRegex")).join("|");
      return new RegExp("(" + t + ")", "g");
    }
    l.default = u;
  },
  98,
);
