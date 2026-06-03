__d(
  "WAWebApiActiveMessageRanges",
  [
    "invariant",
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWebDBMsgUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaActiveMessageRanges",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = new Map(),
      d = {
        reset: function () {
          c = new Map();
        },
        removeRange: function (t, n) {
          var e;
          return (
            (e = c.get(t)) == null || e.delete(n),
            o("WAWebSchemaActiveMessageRanges")
              .getActiveMessageRangesTable()
              .remove([t, n])
          );
        },
        createOrReplaceRange: function (t) {
          var e = c.get(t.chatId);
          return (
            e == null && ((e = new Map()), c.set(t.chatId, e)),
            e.set(t.action, t),
            o("WAWebSchemaActiveMessageRanges")
              .getActiveMessageRangesTable()
              .createOrReplace(t)
          );
        },
        bulkCreateOrReplaceRanges: function (t, r) {
          return (
            r === void 0 && (r = !0),
            t.forEach(function (e) {
              var t = c.get(e.chatId);
              (t == null && ((t = new Map()), c.set(e.chatId, t)),
                t.set(e.action, e));
            }),
            r
              ? o("WAWebSchemaActiveMessageRanges")
                  .getActiveMessageRangesTable()
                  .bulkCreateOrReplace(t)
              : (u || (u = n("Promise"))).resolve()
          );
        },
        getRangesForChat: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = c.get(t);
            try {
              if (n == null) {
                var r = yield o("WAWebSchemaActiveMessageRanges")
                  .getActiveMessageRangesTable()
                  .anyOf(["chatId"], [t]);
                ((n = new Map(
                  r.map(function (e) {
                    return [e.action, e];
                  }),
                )),
                  c.set(t, n));
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
            return n ? Array.from(n.values()) : [];
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      };
    function m(e, t) {
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
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
              n,
            ),
            i = m(t, a),
            l = i.actionValue,
            s = ((r = l.messageRange) == null ? void 0 : r.messages) || [],
            u = yield o("WAWebDBMsgUtils").filterReceivedMessagesInRange(e, s),
            c = Math.max(0, s.length - u.length);
          return d.createOrReplaceRange(
            babelHelpers.extends({ chatId: e }, m(t, a), {
              remainingMessages: c,
            }),
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return d.removeRange(e, t);
    }
    function g(e, t) {
      return (t === void 0 && (t = !0), d.bulkCreateOrReplaceRanges(e, t));
    }
    function h(e) {
      return d.getRangesForChat(e);
    }
    function y(e, t) {
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
    ((l._cache = d),
      (l.addActiveMessageRange = p),
      (l.removeActiveMessageRange = f),
      (l.bulkUpdateActiveMessageRanges = g),
      (l.getActiveMessageRanges = h),
      (l.getActiveRangeAction = y));
  },
  98,
);
