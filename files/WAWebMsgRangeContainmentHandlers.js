__d(
  "WAWebMsgRangeContainmentHandlers",
  [
    "WAWebApiActiveMessageRanges",
    "WAWebBackendApi",
    "WAWebChatDbUpdatesApi",
    "WAWebHandleForMessageRangeEnums",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if (
        t === o("WAWebHandleForMessageRangeEnums").RangeContain.DOES_NOT_CONTAIN
      ) {
        var n = await o(
            "WAWebUserPrefsMultiDevice",
          ).getArchiveV2EnabledSetting(),
          r = await o("WAWebUserPrefsMultiDevice").getUnarchiveChatsSetting();
        ((!n || r) &&
          o("WAWebChatDbUpdatesApi").setArchive([
            { id: e.chatId, archive: !1 },
          ]),
          await o("WAWebApiActiveMessageRanges").removeActiveMessageRange(
            e.chatId,
            e.action,
          ));
      }
    }
    async function s(e, t) {
      (t ===
        o("WAWebHandleForMessageRangeEnums").RangeContain.DOES_NOT_CONTAIN ||
        e.remainingMessages === 0) &&
        (await o("WAWebApiActiveMessageRanges").removeActiveMessageRange(
          e.chatId,
          e.action,
        ));
    }
    async function u(e, t, n) {
      t === o("WAWebHandleForMessageRangeEnums").RangeContain.DOES_NOT_CONTAIN
        ? await o("WAWebApiActiveMessageRanges").removeActiveMessageRange(
            e.chatId,
            e.action,
          )
        : e.remainingMessages === 0 &&
          (o("WAWebBackendApi").frontendFireAndForget("updateChatReadStatus", {
            id: o("WAWebWidFactory").createWid(e.chatId),
            read: n,
          }),
          await o("WAWebApiActiveMessageRanges").removeActiveMessageRange(
            e.chatId,
            e.action,
          ));
    }
    function c(e, t) {
      return t ===
        o("WAWebHandleForMessageRangeEnums").RangeContain
          .CONTAINS_BY_TIMESTAMP ||
        t ===
          o("WAWebHandleForMessageRangeEnums").RangeContain
            .CONTAINS_BY_ADDITIONAL
        ? o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction
            .DropMessage
        : t ===
            o("WAWebHandleForMessageRangeEnums").RangeContain.DOES_NOT_CONTAIN
          ? void 0
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            })();
    }
    function d(e, t) {
      switch (t) {
        case o("WAWebHandleForMessageRangeEnums").RangeContain
          .CONTAINS_BY_TIMESTAMP:
        case o("WAWebHandleForMessageRangeEnums").RangeContain
          .CONTAINS_BY_ADDITIONAL:
          return o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction
            .DropMessage;
        case o("WAWebHandleForMessageRangeEnums").RangeContain.DOES_NOT_CONTAIN:
          return;
      }
    }
    ((l.handleForArchive = e),
      (l.handleForUnarchive = s),
      (l.handleForMarkAsReadUnread = u),
      (l.handleForClearChat = c),
      (l.handleForDeleteChat = d));
  },
  98,
);
