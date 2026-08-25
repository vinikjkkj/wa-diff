__d(
  "WAWebApiAddActiveMessageRange",
  [
    "invariant",
    "WAWebApiActiveMessageRanges",
    "WAWebDBMsgUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaActiveMessageRanges",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return e === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive
        ? {
            action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
              .Archive,
            actionValue: r("nullthrows")(t.archiveChatAction),
          }
        : e ===
            o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.MarkChatAsRead
          ? {
              action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                .MarkChatAsRead,
              actionValue: r("nullthrows")(t.markChatAsReadAction),
            }
          : e ===
              o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                .ClearChatKeepStarredKeepMedia
            ? {
                action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                  .ClearChatKeepStarredKeepMedia,
                actionValue: r("nullthrows")(t.clearChatAction),
              }
            : e ===
                o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                  .ClearChatKeepStarredDeleteMedia
              ? {
                  action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .ClearChatKeepStarredDeleteMedia,
                  actionValue: r("nullthrows")(t.clearChatAction),
                }
              : e ===
                  o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .ClearChatDeleteStarredKeepMedia
                ? {
                    action: o("WAWebSchemaActiveMessageRanges")
                      .ActiveRangeAction.ClearChatDeleteStarredKeepMedia,
                    actionValue: r("nullthrows")(t.clearChatAction),
                  }
                : e ===
                    o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                      .ClearChatDeleteStarredDeleteMedia
                  ? {
                      action: o("WAWebSchemaActiveMessageRanges")
                        .ActiveRangeAction.ClearChatDeleteStarredDeleteMedia,
                      actionValue: r("nullthrows")(t.clearChatAction),
                    }
                  : e ===
                      o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                        .DeleteChatDeleteMedia
                    ? {
                        action: o("WAWebSchemaActiveMessageRanges")
                          .ActiveRangeAction.DeleteChatDeleteMedia,
                        actionValue: r("nullthrows")(t.deleteChatAction),
                      }
                    : e ===
                        o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                          .DeleteChatKeepMedia
                      ? {
                          action: o("WAWebSchemaActiveMessageRanges")
                            .ActiveRangeAction.DeleteChatKeepMedia,
                          actionValue: r("nullthrows")(t.deleteChatAction),
                        }
                      : e ===
                          o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                            .Unknown
                        ? s(!1, "unsupported action for message ranges: %s", e)
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                e,
                            );
                          })();
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a,
            i = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
              r,
            ),
            l = e(n, i),
            s = l.actionValue,
            u = ((a = s.messageRange) == null ? void 0 : a.messages) || [],
            c = yield o("WAWebDBMsgUtils").filterReceivedMessagesInRange(t, u),
            d = Math.max(0, u.length - c.length);
          return o(
            "WAWebApiActiveMessageRanges",
          ).createOrReplaceActiveMessageRange(
            babelHelpers.extends({ chatId: t }, e(n, i), {
              remainingMessages: d,
            }),
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.addActiveMessageRange = u;
  },
  98,
);
