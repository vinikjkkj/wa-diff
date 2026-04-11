__d(
  "WASmaxOutSpamStatusReportRequest",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamBizOptOutMixin",
    "WASmaxOutSpamBizReportMixin",
    "WASmaxOutSpamFRXMixin",
    "WASmaxOutSpamIsKnownChatMixin",
    "WASmaxOutSpamMessageMixin",
    "WASmaxOutSpamMessageRecipientMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.fRXMixinArgs,
        r = e.isKnownChatMixinArgs,
        a = e.spamListJid,
        i = e.bizOptOutMixinArgs,
        l = e.bizReportMixinArgs,
        s = e.messageFrom,
        u = e.messageMixinArgs,
        c = e.messageRecipientMixinArgs,
        d = (t = o("WASmaxMixins")).optionalMerge(
          o("WASmaxOutSpamIsKnownChatMixin").mergeIsKnownChatMixin,
          t.optionalMerge(
            o("WASmaxOutSpamFRXMixin").mergeFRXMixin,
            o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(
              o(
                "WASmaxOutSpamBaseIQSetRequestMixin",
              ).mergeBaseIQSetRequestMixin(
                o("WASmaxJsx").smax(
                  "iq",
                  null,
                  t.optionalMerge(
                    o("WASmaxOutSpamBizReportMixin").mergeBizReportMixin,
                    t.optionalMerge(
                      o("WASmaxOutSpamBizOptOutMixin").mergeBizOptOutMixin,
                      o("WASmaxJsx").smax(
                        "spam_list",
                        { jid: o("WAWap").JID(a) },
                        t.optionalMerge(
                          o("WASmaxOutSpamMessageRecipientMixin")
                            .mergeMessageRecipientMixin,
                          o("WASmaxOutSpamMessageMixin").mergeMessageMixin(
                            o("WASmaxJsx").smax("message", {
                              from: o("WAWap").JID(s),
                            }),
                            u,
                          ),
                          c,
                        ),
                      ),
                      i,
                    ),
                    l,
                  ),
                ),
              ),
              e,
            ),
            n,
          ),
          r,
        );
      return d;
    }
    l.makeStatusReportRequest = e;
  },
  98,
);
