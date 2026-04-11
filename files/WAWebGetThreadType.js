__d(
  "WAWebGetThreadType",
  ["WAWebChatGetters", "WAWebGroupType", "WAWebWamEnumThreadType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebChatGetters").getIsBroadcast(e))
        return o("WAWebWamEnumThreadType").THREAD_TYPE.BROADCAST;
      if (o("WAWebChatGetters").getIsNewsletter(e))
        return o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL;
      var t = e == null ? void 0 : e.groupMetadata;
      if (!t) return o("WAWebWamEnumThreadType").THREAD_TYPE.INDIVIDUAL;
      switch (t.groupType) {
        case o("WAWebGroupType").GroupType.COMMUNITY:
          return o("WAWebWamEnumThreadType").THREAD_TYPE.PARENT_GROUP;
        case o("WAWebGroupType").GroupType.DEFAULT:
          return o("WAWebWamEnumThreadType").THREAD_TYPE.GROUP;
        case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
          return o("WAWebWamEnumThreadType").THREAD_TYPE.SUB_GROUP;
        case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
          return o("WAWebWamEnumThreadType").THREAD_TYPE.DEFAULT_SUB_GROUP;
        case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
          return o("WAWebWamEnumThreadType").THREAD_TYPE.SUB_GROUP;
      }
    }
    l.getThreadType = e;
  },
  98,
);
