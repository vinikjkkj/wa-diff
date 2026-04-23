__d(
  "WAWebWamBlockEventReporter",
  [
    "WAWebBlockEventsFsWamEvent",
    "WAWebChatCollection",
    "WAWebFrontendContactGetters",
    "WAWebWamEnumBlockEventActionType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.blockEntryPoint,
        r = e.contact,
        a = e.isBlock,
        i =
          o("WAWebFrontendContactGetters").getIsMyContact(r) ||
          ((t = o("WAWebChatCollection").ChatCollection.get(r.id)) == null
            ? void 0
            : t.isTrusted());
      new (o("WAWebBlockEventsFsWamEvent").BlockEventsFsWamEvent)({
        blockEntryPoint: n,
        blockEventIsSuspicious: !i,
        blockEventIsUnsub: !o("WAWebFrontendContactGetters").getIsMyContact(r),
        blockEventActionType: a
          ? o("WAWebWamEnumBlockEventActionType").BLOCK_EVENT_ACTION_TYPE.BLOCK
          : o("WAWebWamEnumBlockEventActionType").BLOCK_EVENT_ACTION_TYPE
              .UNBLOCK,
      }).commit();
    }
    l.logBlockEvent = e;
  },
  98,
);
