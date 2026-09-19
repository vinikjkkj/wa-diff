__d(
  "WAWebGetThreadType",
  [
    "WAWebChatGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebWamEnumThreadType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e.isStatus()
        ? o("WAWebWamEnumThreadType").THREAD_TYPE.STATUS
        : e.isBroadcast()
          ? o("WAWebWamEnumThreadType").THREAD_TYPE.BROADCAST
          : e.isNewsletter()
            ? o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL
            : t == null
              ? e.isGroup()
                ? o("WAWebWamEnumThreadType").THREAD_TYPE.GROUP
                : o("WAWebWamEnumThreadType").THREAD_TYPE.INDIVIDUAL
              : t === o("WAWebGroupType").GroupType.COMMUNITY
                ? o("WAWebWamEnumThreadType").THREAD_TYPE.PARENT_GROUP
                : t === o("WAWebGroupType").GroupType.DEFAULT
                  ? o("WAWebWamEnumThreadType").THREAD_TYPE.GROUP
                  : t === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
                      t === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
                    ? o("WAWebWamEnumThreadType").THREAD_TYPE.SUB_GROUP
                    : t ===
                        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                      ? o("WAWebWamEnumThreadType").THREAD_TYPE
                          .DEFAULT_SUB_GROUP
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              t,
                          );
                        })();
    }
    function s(t) {
      var n = t == null ? void 0 : t.groupMetadata;
      return e(
        o("WAWebChatGetters").getId(t),
        n != null ? o("WAWebGroupMetadataGetters").getGroupType(n) : null,
      );
    }
    ((l.getThreadTypeFromWid = e), (l.getThreadType = s));
  },
  98,
);
