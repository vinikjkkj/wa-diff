__d(
  "WASmaxOutGroupsReportMessagesRequest",
  ["WASmaxJsx", "WASmaxOutGroupsBaseSetGroupMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.reportMessageId,
        n = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "reports",
              null,
              o("WASmaxJsx").smax("report", {
                message_id: o("WAWap").STANZA_ID(t),
              }),
            ),
          ),
          e,
        );
      return n;
    }
    l.makeReportMessagesRequest = e;
  },
  98,
);
