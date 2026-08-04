__d(
  "WASmaxOutSpamStatusReportV2Request",
  [
    "WASmaxAttrs",
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
        r = e.statusFrom,
        a = e.reportableNewsletterStatusMixinArgs,
        i = o("WASmaxMixins").optionalMerge(
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
                    o("WASmaxJsx").smax("status", {
                      from: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, r),
                    }),
                    a,
                  ),
                ),
              ),
            ),
            e,
          ),
          t,
        );
      return i;
    }
    l.makeStatusReportV2Request = e;
  },
  98,
);
