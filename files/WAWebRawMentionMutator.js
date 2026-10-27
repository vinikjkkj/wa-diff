__d(
  "WAWebRawMentionMutator",
  [
    "WAWebChatContactUtils",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebMentionDisplayUtils",
    "WAWebMentionFormatMutator",
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
          a =
            (n = o("WAWebOrgMemberContactName").getOrgMemberDisplayName(r)) !=
            null
              ? n
              : o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(r)
                ? o("WAWebChatContactUtils")
                    .getFormattedNotifyName(
                      o("WAWebContactGetters").getNotifyName(r),
                      !1,
                    )
                    .toString()
                : o("WAWebFrontendContactGetters").getDisplayName(r);
        return o("WAWebMentionDisplayUtils").addAtPrefixForMention(a);
      }),
      (l.default = e));
  },
  98,
);
