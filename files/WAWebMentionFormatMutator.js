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
            var e = n.fromChatWid,
              a = n.groupMetadata,
              i = n.isDraftMessage,
              l = n.mentions;
            if (i === !0) {
              for (
                var s = r("WAWebExtractRangesUsingRegex")(
                    t,
                    new RegExp(
                      o("WAWebRichTextInputConst").userJidRegexStr,
                      "g",
                    ),
                  ),
                  u = [],
                  d = 0;
                d < s.length;
                ++d
              ) {
                var m = s[d],
                  p = m[4][1],
                  _ = o("WAWebWidFactory").createUserWidOrThrow(p),
                  f = o("WAWebContactCollection").ContactCollection.get(_);
                if (f == null) return [];
                u.push([
                  m[0],
                  m[1],
                  m[2],
                  m[3],
                  { contact: f, fromChatWid: e, groupMetadata: a },
                ]);
              }
              return u;
            }
            if (!l || r("isEmptyObject")(l)) return [];
            for (
              var g = c(l),
                h = r("WAWebExtractRangesUsingRegex")(t, g),
                y = [],
                C = 0;
              C < h.length;
              ++C
            ) {
              var b = h[C],
                v = b[0],
                S = b[1],
                R = b[2],
                L = b[3],
                E = b[4];
              y.push([
                v,
                S,
                R,
                L,
                { contact: l[E[0]], fromChatWid: e, groupMetadata: a },
              ]);
            }
            return y;
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
