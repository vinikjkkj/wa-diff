__d(
  "WAWebRawMentionMutator",
  [
    "WAWebChatContactUtils",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebMentionDisplayUtils",
    "WAWebMentionFormatMutator",
    "WAWebWorkDirectoryMemberName",
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
          r,
          a = t.contact,
          i =
            (n =
              (r = o("WAWebWorkDirectoryMemberName").getWorkDirectoryMemberName(
                a,
              )) != null
                ? r
                : o("WAWebFrontendContactGetters").getShownOrgMemberName(a)) !=
            null
              ? n
              : o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(a)
                ? o("WAWebChatContactUtils")
                    .getFormattedNotifyName(
                      o("WAWebContactGetters").getNotifyName(a),
                      !1,
                    )
                    .toString()
                : o("WAWebFrontendContactGetters").getDisplayName(a);
        return o("WAWebMentionDisplayUtils").addAtPrefixForMention(i);
      }),
      (l.default = e));
  },
  98,
);
