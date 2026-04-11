__d(
  "WAWebRawGroupMentionFormatMutator",
  ["WAWebGroupMentionFormatMutator"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebGroupMentionFormatMutator").GroupMention);
    ((e.mutates = !0),
      (e.mutate = function (e, t) {
        var n = t.groupSubject;
        return "@" + (n != null ? n : "");
      }),
      (l.RawGroupMention = e));
  },
  98,
);
