__d(
  "WAWebRawMentionMutator",
  [
    "WAWebChatContactUtils",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebMentionDisplayUtils",
    "WAWebMentionFormatMutator",
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
          r = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(n)
            ? o("WAWebChatContactUtils")
                .getFormattedNotifyName(
                  o("WAWebContactGetters").getNotifyName(n),
                  !1,
                )
                .toString()
            : o("WAWebFrontendContactGetters").getDisplayName(n);
        return o("WAWebMentionDisplayUtils").addAtPrefixForMention(r);
      }),
      (l.default = e));
  },
  98,
);
