__d(
  "WAWebMsgRangeContainmentHandlers",
  [
    "WAWebApiActiveMessageRanges",
    "WAWebBackendApi",
    "WAWebChatDbUpdatesApi",
    "WAWebHandleForMessageRangeEnums",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            t ===
            o("WAWebHandleForMessageRangeEnums").RangeContain.DOES_NOT_CONTAIN
          ) {
            var n = yield o(
                "WAWebUserPrefsMultiDevice",
              ).getArchiveV2EnabledSetting(),
              r = yield o(
                "WAWebUserPrefsMultiDevice",
              ).getUnarchiveChatsSetting();
            ((!n || r) &&
              o("WAWebChatDbUpdatesApi").setArchive([
                { id: e.chatId, archive: !1 },
              ]),
              yield o("WAWebApiActiveMessageRanges").removeActiveMessageRange(
                e.chatId,
                e.action,
              ));
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (t ===
            o("WAWebHandleForMessageRangeEnums").RangeContain
              .DOES_NOT_CONTAIN ||
            e.remainingMessages === 0) &&
            (yield o("WAWebApiActiveMessageRanges").removeActiveMessageRange(
              e.chatId,
              e.action,
            ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          t ===
          o("WAWebHandleForMessageRangeEnums").RangeContain.DOES_NOT_CONTAIN
            ? yield o("WAWebApiActiveMessageRanges").removeActiveMessageRange(
                e.chatId,
                e.action,
              )
            : e.remainingMessages === 0 &&
              (o("WAWebBackendApi").frontendFireAndForget(
                "updateChatReadStatus",
                { id: o("WAWebWidFactory").createWid(e.chatId), read: n },
              ),
              yield o("WAWebApiActiveMessageRanges").removeActiveMessageRange(
                e.chatId,
                e.action,
              ));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
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
    function _(e, t) {
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
      (l.handleForUnarchive = u),
      (l.handleForMarkAsReadUnread = d),
      (l.handleForClearChat = p),
      (l.handleForDeleteChat = _));
  },
  98,
);
