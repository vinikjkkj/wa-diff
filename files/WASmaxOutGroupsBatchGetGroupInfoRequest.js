__d(
  "WASmaxOutGroupsBatchGetGroupInfoRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseGetServerMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.groupJid,
        n = o("WASmaxJsx").smax("group", { jid: o("WAWap").GROUP_JID(t) });
      return n;
    }
    function s(t) {
      var n = t.groupArgs,
        r = t.queryContext,
        a = o("WASmaxOutGroupsBaseGetServerMixin").mergeBaseGetServerMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "query",
              {
                context: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
              },
              o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 1e4),
            ),
          ),
        );
      return a;
    }
    ((l.makeBatchGetGroupInfoRequestQueryGroup = e),
      (l.makeBatchGetGroupInfoRequest = s));
  },
  98,
);
