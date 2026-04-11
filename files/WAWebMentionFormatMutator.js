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
                  s = 0;
                s < l.length;
                ++s
              ) {
                var u = l[s][4][1],
                  d = o("WAWebWidFactory").createUserWidOrThrow(u),
                  m = o("WAWebContactCollection").ContactCollection.get(d);
                if (m == null) return [];
                l[s][4] = { contact: m, groupMetadata: e };
              }
              return l;
            }
            if (!i || r("isEmptyObject")(i)) return [];
            for (
              var p = c(i), _ = r("WAWebExtractRangesUsingRegex")(t, p), f = 0;
              f < _.length;
              ++f
            )
              _[f][4] = { contact: i[_[f][4][0]], groupMetadata: e };
            return _;
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
