__d(
  "WASmaxOutSpamStatusReportV2Request",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamEntitySubjectMixin",
    "WASmaxOutSpamReportableNewsletterStatusMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.entitySubjectMixinArgs,
        n = e.spamListJid,
        r = e.reportableNewsletterStatusMixinArgs,
        a = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutSpamEntitySubjectMixin").mergeEntitySubjectMixin,
          o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(
            o("WASmaxOutSpamBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
              o("WASmaxJsx").smax(
                "iq",
                null,
                o("WASmaxJsx").smax(
                  "spam_list",
                  { jid: o("WAWap").JID(n) },
                  o(
                    "WASmaxOutSpamReportableNewsletterStatusMixin",
                  ).mergeReportableNewsletterStatusMixin(
                    o("WASmaxJsx").smax("status", null),
                    r,
                  ),
                ),
              ),
            ),
            e,
          ),
          t,
        );
      return a;
    }
    l.makeStatusReportV2Request = e;
  },
  98,
);
