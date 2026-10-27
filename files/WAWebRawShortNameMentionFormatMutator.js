__d(
  "WAWebRawShortNameMentionFormatMutator",
  [
    "WAWebFrontendContactGetters",
    "WAWebMentionDisplayUtils",
    "WAWebMentionFormatMutator",
    "WAWebMiscGatingUtils",
    "WAWebOrgMemberContactName",
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
        var n,
          r = t.contact,
          a = t.groupMetadata;
        return o("WAWebMiscGatingUtils").isDropLastNameEnabled() &&
          a &&
          a.hasUniqueShortNameMention(r)
          ? o("WAWebMentionDisplayUtils").addAtPrefixForMention(r.shortName)
          : o("WAWebMentionDisplayUtils").addAtPrefixForMention(
              (n = o("WAWebOrgMemberContactName").getOrgMemberDisplayName(r)) !=
                null
                ? n
                : o("WAWebFrontendContactGetters").getDisplayName(r),
            );
      }),
      (l.default = e));
  },
  98,
);
