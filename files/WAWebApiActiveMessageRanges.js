__d(
  "WAWebApiActiveMessageRanges",
  ["WALogger", "WAWebSchemaActiveMessageRanges", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map(),
      u = {
        reset: function () {
          s = new Map();
        },
        removeRange: function (t, n) {
          var e;
          return (
            (e = s.get(t)) == null || e.delete(n),
            o("WAWebSchemaActiveMessageRanges")
              .getActiveMessageRangesTable()
              .remove([t, n])
          );
        },
        createOrReplaceRange: function (t) {
          var e = s.get(t.chatId);
          return (
            e == null && ((e = new Map()), s.set(t.chatId, e)),
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
              var t = s.get(e.chatId);
              (t == null && ((t = new Map()), s.set(e.chatId, t)),
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
          var t = s.get(n);
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
                s.set(n, t));
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
    function c(e) {
      return u.createOrReplaceRange(e);
    }
    function d(e, t) {
      return u.removeRange(e, t);
    }
    function m(e, t) {
      return (t === void 0 && (t = !0), u.bulkCreateOrReplaceRanges(e, t));
    }
    function p(e) {
      return u.getRangesForChat(e);
    }
    function _(e, t) {
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
    ((l._cache = u),
      (l.createOrReplaceActiveMessageRange = c),
      (l.removeActiveMessageRange = d),
      (l.bulkUpdateActiveMessageRanges = m),
      (l.getActiveMessageRanges = p),
      (l.getActiveRangeAction = _));
  },
  98,
);
