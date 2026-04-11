__d(
  "WAWebGroupMentionFormatMutator",
  [
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator",
    "WAWebGroupMetadataCollection",
    "WAWebRichTextInputConst",
    "WAWebTextGroupMentionWrapperMutatorComponent.react",
    "WAWebUnjoinedSubgroupMetadataCollection",
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
              a = n.groupMentions,
              i = n.isDraftMessage;
            if (((this.fromChatWid = e), i === !0)) {
              for (
                var l = r("WAWebExtractRangesUsingRegex")(
                    t,
                    new RegExp(
                      o("WAWebRichTextInputConst").groupJidRegexStr,
                      "g",
                    ),
                  ),
                  s = 0;
                s < l.length;
                ++s
              ) {
                var u = l[s][4][1],
                  c =
                    r("WAWebUnjoinedSubgroupMetadataCollection").get(u) ||
                    r("WAWebGroupMetadataCollection").get(u);
                if (!c || !c.subject) return [];
                l[s][4] = {
                  groupJid: u.slice(1),
                  groupSubject: c.subject,
                  fromChatWid: e,
                };
              }
              return l;
            }
            if (!a || Object.keys(a).length === 0) return [];
            for (
              var m = d(a), p = r("WAWebExtractRangesUsingRegex")(t, m), _ = 0;
              _ < p.length;
              ++_
            ) {
              var f = p[_][4][0];
              p[_][4] = {
                groupJid: f.slice(1),
                groupSubject: a[f],
                fromChatWid: e,
              };
            }
            return p;
          }),
          (t.jsx = function (t, n, o) {
            var e = o.clickable,
              a = e === void 0 ? !0 : e,
              i = o.lastMessage,
              l = o.selectable,
              u = o.theme;
            return s.jsx(
              r("WAWebTextGroupMentionWrapperMutatorComponent.react"),
              {
                groupSubject: n.groupSubject,
                groupJid: n.groupJid,
                selectable: l,
                clickable: a,
                theme: u,
                lastMessage: i,
                fromChatWid: this.fromChatWid,
              },
            );
          }),
          t
        );
      })(r("WAWebFormatMutator"));
    u.compatibility = !0;
    function c(e) {
      var t = /[\\^$.*+?()[\]{}|]/g,
        n = RegExp(t.source);
      return e && n.test(e) ? e.replace(t, "\\$&") : e;
    }
    function d(e) {
      var t = Object.keys(e).map(c).join("|");
      return new RegExp("(" + t + ")", "g");
    }
    l.GroupMention = u;
  },
  98,
);
