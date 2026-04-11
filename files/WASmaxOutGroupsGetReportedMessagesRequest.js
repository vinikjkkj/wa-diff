__d(
  "WASmaxOutGroupsGetReportedMessagesRequest",
  ["WASmaxJsx", "WASmaxOutGroupsBaseGetGroupMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(
        o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("reports", null)),
        e,
      );
      return t;
    }
    l.makeGetReportedMessagesRequest = e;
  },
  98,
);
