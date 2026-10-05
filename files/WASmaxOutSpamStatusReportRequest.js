__d(
  "WASmaxOutSpamStatusReportRequest",
  [
    "WASmaxChildren",
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
      var t = e.messageFrom,
        n = e.messageRecipientMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutSpamMessageRecipientMixin").mergeMessageRecipientMixin,
          o("WASmaxOutSpamMessageMixin").mergeMessageMixin(
            o("WASmaxJsx").smax("message", { from: o("WAWap").JID(t) }),
            e,
          ),
          n,
        );
      return r;
    }
    function s(t) {
      var n,
        r = t.messageArgs,
        a = t.fRXMixinArgs,
        i = t.isKnownChatMixinArgs,
        l = t.spamListJid,
        s = t.bizOptOutMixinArgs,
        u = t.bizReportMixinArgs,
        c = (n = o("WASmaxMixins")).optionalMerge(
          o("WASmaxOutSpamIsKnownChatMixin").mergeIsKnownChatMixin,
          n.optionalMerge(
            o("WASmaxOutSpamFRXMixin").mergeFRXMixin,
            o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(
              o(
                "WASmaxOutSpamBaseIQSetRequestMixin",
              ).mergeBaseIQSetRequestMixin(
                o("WASmaxJsx").smax(
                  "iq",
                  null,
                  n.optionalMerge(
                    o("WASmaxOutSpamBizReportMixin").mergeBizReportMixin,
                    n.optionalMerge(
                      o("WASmaxOutSpamBizOptOutMixin").mergeBizOptOutMixin,
                      o("WASmaxJsx").smax(
                        "spam_list",
                        { jid: o("WAWap").JID(l) },
                        o("WASmaxChildren").REPEATED_CHILD(e, r, 1, 2),
                      ),
                      s,
                    ),
                    u,
                  ),
                ),
              ),
              t,
            ),
            a,
          ),
          i,
        );
      return c;
    }
    ((l.makeStatusReportRequestSpamListMessage = e),
      (l.makeStatusReportRequest = s));
  },
  98,
);
