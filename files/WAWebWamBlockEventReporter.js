__d(
  "WAWebWamBlockEventReporter",
  [
    "WAWebABProps",
    "WAWebBlockEventsFsWamEvent",
    "WAWebChatCollection",
    "WAWebFrontendContactGetters",
    "WAWebWamEnumBlockEventActionType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.blockEntryPoint,
        n = e.contact,
        r = e.isBlock;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "block_entry_point_logging_enabled",
        )
      ) {
        var a,
          i =
            o("WAWebFrontendContactGetters").getIsMyContact(n) ||
            ((a = o("WAWebChatCollection").ChatCollection.get(n.id)) == null
              ? void 0
              : a.isTrusted());
        new (o("WAWebBlockEventsFsWamEvent").BlockEventsFsWamEvent)({
          blockEntryPoint: t,
          blockEventIsSuspicious: !i,
          blockEventIsUnsub: !o("WAWebFrontendContactGetters").getIsMyContact(
            n,
          ),
          blockEventActionType: r
            ? o("WAWebWamEnumBlockEventActionType").BLOCK_EVENT_ACTION_TYPE
                .BLOCK
            : o("WAWebWamEnumBlockEventActionType").BLOCK_EVENT_ACTION_TYPE
                .UNBLOCK,
        }).commit();
      }
    }
    l.logBlockEvent = e;
  },
  98,
);
