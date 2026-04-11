__d(
  "WASmaxOutSpamGroupReportRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamCallReportMixin",
    "WASmaxOutSpamEntitySubjectMixin",
    "WASmaxOutSpamFRXMixin",
    "WASmaxOutSpamIsKnownChatMixin",
    "WASmaxOutSpamMessageMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageFrom,
        n = e.messagePhash,
        r = o("WASmaxOutSpamMessageMixin").mergeMessageMixin(
          o("WASmaxJsx").smax("message", {
            from: o("WAWap").GROUP_JID(t),
            phash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
          }),
          e,
        );
      return r;
    }
    function s(e) {
      var t = o("WASmaxOutSpamCallReportMixin").mergeCallReportMixin(
        o("WASmaxJsx").smax("call", null),
        e,
      );
      return t;
    }
    function u(t) {
      var n = t.messageArgs,
        r = t.callArgs,
        a = t.fRXMixinArgs,
        i = t.isKnownChatMixinArgs,
        l = t.spamListJid,
        u = t.spamListSource,
        c = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutSpamIsKnownChatMixin").mergeIsKnownChatMixin,
          o("WASmaxOutSpamEntitySubjectMixin").mergeEntitySubjectMixin(
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutSpamFRXMixin").mergeFRXMixin,
              o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(
                o(
                  "WASmaxOutSpamBaseIQSetRequestMixin",
                ).mergeBaseIQSetRequestMixin(
                  o("WASmaxJsx").smax(
                    "iq",
                    null,
                    o("WASmaxJsx").smax(
                      "spam_list",
                      {
                        jid: o("WAWap").GROUP_JID(l),
                        source: o("WASmaxAttrs").OPTIONAL(
                          o("WAWap").USER_JID,
                          u,
                        ),
                      },
                      [].concat(
                        o("WASmaxChildren").REPEATED_CHILD(e, n, 0, 210),
                        o("WASmaxChildren").REPEATED_CHILD(s, r, 0, 5),
                      ),
                    ),
                  ),
                ),
                t,
              ),
              a,
            ),
            t,
          ),
          i,
        );
      return c;
    }
    ((l.makeGroupReportRequestSpamListMessage = e),
      (l.makeGroupReportRequestSpamListCall = s),
      (l.makeGroupReportRequest = u));
  },
  98,
);
