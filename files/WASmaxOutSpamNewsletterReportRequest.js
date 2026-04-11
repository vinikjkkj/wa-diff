__d(
  "WASmaxOutSpamNewsletterReportRequest",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamEntitySubjectMixin",
    "WASmaxOutSpamMessageMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageFrom,
        n = o("WASmaxOutSpamMessageMixin").mergeMessageMixin(
          o("WASmaxJsx").smax("message", { from: o("WAWap").JID(t) }),
          e,
        );
      return n;
    }
    function s(t) {
      var n = t.messageArgs,
        r = t.spamListJid,
        a = o("WASmaxOutSpamEntitySubjectMixin").mergeEntitySubjectMixin(
          o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(
            o("WASmaxOutSpamBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
              o("WASmaxJsx").smax(
                "iq",
                null,
                o("WASmaxJsx").smax(
                  "spam_list",
                  { jid: o("WAWap").JID(r) },
                  o("WASmaxChildren").REPEATED_CHILD(e, n, 0, 65),
                ),
              ),
            ),
            t,
          ),
          t,
        );
      return a;
    }
    ((l.makeNewsletterReportRequestSpamListMessage = e),
      (l.makeNewsletterReportRequest = s));
  },
  98,
);
