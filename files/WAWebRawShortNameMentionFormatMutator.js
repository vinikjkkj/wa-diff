__d(
  "WAWebRawShortNameMentionFormatMutator",
  [
    "WAWebFrontendContactGetters",
    "WAWebMentionDisplayUtils",
    "WAWebMentionFormatMutator",
    "WAWebMiscGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("WAWebMentionFormatMutator"));
    ((e.mutates = !0),
      (e.mutate = function (e, t) {
        var n = t.contact,
          r = t.groupMetadata;
        return o("WAWebMiscGatingUtils").isDropLastNameEnabled() &&
          r &&
          r.hasUniqueShortNameMention(n)
          ? o("WAWebMentionDisplayUtils").addAtPrefixForMention(n.shortName)
          : o("WAWebMentionDisplayUtils").addAtPrefixForMention(
              o("WAWebFrontendContactGetters").getDisplayName(n),
            );
      }),
      (l.default = e));
  },
  98,
);
