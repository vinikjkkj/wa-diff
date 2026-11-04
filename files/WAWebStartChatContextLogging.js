__d(
  "WAWebStartChatContextLogging",
  [
    "WAWebStartChatContextDidNotShowWamEvent",
    "WAWebStartChatContextUiInteractionWamEvent",
    "WAWebWamEnumStartChatContextEntryPoint",
    "WAWebWamEnumStartChatContextUiAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      new (o(
        "WAWebStartChatContextDidNotShowWamEvent",
      ).StartChatContextDidNotShowWamEvent)(
        babelHelpers.extends({}, u(e), {
          startChatContextEntryPoint: o(
            "WAWebWamEnumStartChatContextEntryPoint",
          ).START_CHAT_CONTEXT_ENTRY_POINT[t],
        }),
      ).commit();
    }
    function s(e, t) {
      var n = t.entryPoint,
        r = t.isBusiness;
      new (o(
        "WAWebStartChatContextUiInteractionWamEvent",
      ).StartChatContextUiInteractionWamEvent)({
        isBusiness: r,
        startChatContextEntryPoint: o("WAWebWamEnumStartChatContextEntryPoint")
          .START_CHAT_CONTEXT_ENTRY_POINT[n],
        startChatContextUiAction: o("WAWebWamEnumStartChatContextUiAction")
          .START_CHAT_CONTEXT_UI_ACTION[e],
      }).commit();
    }
    function u(e) {
      return e === "self" || e === "contact"
        ? { otherUserIsContact: !0 }
        : e === "non_empty_chat"
          ? { isNonEmptyChat: !0, otherUserIsContact: !1 }
          : e === "not_suspicious"
            ? {
                isNonEmptyChat: !1,
                otherUserIsContact: !1,
                serverDecisionNotNeeded: !0,
              }
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    ((l.logStartChatContextDidNotShow = e),
      (l.logStartChatContextUiAction = s));
  },
  98,
);
