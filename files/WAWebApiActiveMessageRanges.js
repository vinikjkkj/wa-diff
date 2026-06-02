__d(
  "WAWebApiActiveMessageRanges",
  [
    "invariant",
    "WALogger",
    "WANullthrows",
    "WAWebDBMsgUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaActiveMessageRanges",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = new Map(),
      c = {
        reset: function () {
          u = new Map();
        },
        removeRange: function (t, n) {
          var e;
          return (
            (e = u.get(t)) == null || e.delete(n),
            o("WAWebSchemaActiveMessageRanges")
              .getActiveMessageRangesTable()
              .remove([t, n])
          );
        },
        createOrReplaceRange: function (t) {
          var e = u.get(t.chatId);
          return (
            e == null && ((e = new Map()), u.set(t.chatId, e)),
            e.set(t.action, t),
            o("WAWebSchemaActiveMessageRanges")
              .getActiveMessageRangesTable()
              .createOrReplace(t)
          );
        },
        bulkCreateOrReplaceRanges: function (t, n) {
          return (
            n === void 0 && (n = !0),
            t.forEach(function (e) {
              var t = u.get(e.chatId);
              (t == null && ((t = new Map()), u.set(e.chatId, t)),
                t.set(e.action, e));
            }),
            n
              ? o("WAWebSchemaActiveMessageRanges")
                  .getActiveMessageRangesTable()
                  .bulkCreateOrReplace(t)
              : Promise.resolve()
          );
        },
        getRangesForChat: async function (n) {
          var t = u.get(n);
          try {
            if (t == null) {
              var r = await o("WAWebSchemaActiveMessageRanges")
                .getActiveMessageRangesTable()
                .anyOf(["chatId"], [n]);
              ((t = new Map(
                r.map(function (e) {
                  return [e.action, e];
                }),
              )),
                u.set(n, t));
            }
          } catch (t) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getRangesForChat failed with error: ",
                  "",
                ])),
              t,
            );
          }
          return t ? Array.from(t.values()) : [];
        },
      };
    function d(e, t) {
      return e === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive
        ? {
            action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
              .Archive,
            actionValue: r("WANullthrows")(t.archiveChatAction),
          }
        : e ===
            o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.MarkChatAsRead
          ? {
              action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                .MarkChatAsRead,
              actionValue: r("WANullthrows")(t.markChatAsReadAction),
            }
          : e ===
              o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                .ClearChatKeepStarredKeepMedia
            ? {
                action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                  .ClearChatKeepStarredKeepMedia,
                actionValue: r("WANullthrows")(t.clearChatAction),
              }
            : e ===
                o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                  .ClearChatKeepStarredDeleteMedia
              ? {
                  action: o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .ClearChatKeepStarredDeleteMedia,
                  actionValue: r("WANullthrows")(t.clearChatAction),
                }
              : e ===
                  o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .ClearChatDeleteStarredKeepMedia
                ? {
                    action: o("WAWebSchemaActiveMessageRanges")
                      .ActiveRangeAction.ClearChatDeleteStarredKeepMedia,
                    actionValue: r("WANullthrows")(t.clearChatAction),
                  }
                : e ===
                    o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                      .ClearChatDeleteStarredDeleteMedia
                  ? {
                      action: o("WAWebSchemaActiveMessageRanges")
                        .ActiveRangeAction.ClearChatDeleteStarredDeleteMedia,
                      actionValue: r("WANullthrows")(t.clearChatAction),
                    }
                  : e ===
                      o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                        .DeleteChatDeleteMedia
                    ? {
                        action: o("WAWebSchemaActiveMessageRanges")
                          .ActiveRangeAction.DeleteChatDeleteMedia,
                        actionValue: r("WANullthrows")(t.deleteChatAction),
                      }
                    : e ===
                        o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                          .DeleteChatKeepMedia
                      ? {
                          action: o("WAWebSchemaActiveMessageRanges")
                            .ActiveRangeAction.DeleteChatKeepMedia,
                          actionValue: r("WANullthrows")(t.deleteChatAction),
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
    async function m(e, t, n) {
      var r,
        a = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
          n,
        ),
        i = d(t, a),
        l = i.actionValue,
        s = ((r = l.messageRange) == null ? void 0 : r.messages) || [],
        u = await o("WAWebDBMsgUtils").filterReceivedMessagesInRange(e, s),
        m = Math.max(0, s.length - u.length);
      return c.createOrReplaceRange(
        babelHelpers.extends({ chatId: e }, d(t, a), { remainingMessages: m }),
      );
    }
    function p(e, t) {
      return c.removeRange(e, t);
    }
    function _(e, t) {
      return (t === void 0 && (t = !0), c.bulkCreateOrReplaceRanges(e, t));
    }
    function f(e) {
      return c.getRangesForChat(e);
    }
    function g(e, t) {
      var n = !!(t != null && t.deleteStarred),
        a = !!(t != null && t.deleteMedia);
      switch (e) {
        case "archive":
          return o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive;
        case "markChatAsRead":
          return o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
            .MarkChatAsRead;
        case "clearChat":
          return n && a
            ? o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                .ClearChatDeleteStarredDeleteMedia
            : n && !a
              ? o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                  .ClearChatDeleteStarredKeepMedia
              : a && !n
                ? o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .ClearChatKeepStarredDeleteMedia
                : o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .ClearChatKeepStarredKeepMedia;
        case "deleteChat":
          return a
            ? o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                .DeleteChatDeleteMedia
            : o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                .DeleteChatKeepMedia;
        default:
          throw r("err")("unsupported active message range action");
      }
    }
    ((l._cache = c),
      (l.addActiveMessageRange = m),
      (l.removeActiveMessageRange = p),
      (l.bulkUpdateActiveMessageRanges = _),
      (l.getActiveMessageRanges = f),
      (l.getActiveRangeAction = g));
  },
  98,
);
