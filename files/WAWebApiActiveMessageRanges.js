__d(
  "WAWebApiActiveMessageRanges",
  [
    "Promise",
    "WALogger",
    "WAWebSchemaActiveMessageRanges",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
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
        bulkCreateOrReplaceRanges: function (t, r) {
          return (
            r === void 0 && (r = !0),
            t.forEach(function (e) {
              var t = u.get(e.chatId);
              (t == null && ((t = new Map()), u.set(e.chatId, t)),
                t.set(e.action, e));
            }),
            r
              ? o("WAWebSchemaActiveMessageRanges")
                  .getActiveMessageRangesTable()
                  .bulkCreateOrReplace(t)
              : (s || (s = n("Promise"))).resolve()
          );
        },
        getRangesForChat: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = u.get(t);
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
                  u.set(t, n));
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
    function d(e) {
      return c.createOrReplaceRange(e);
    }
    function m(e, t) {
      return c.removeRange(e, t);
    }
    function p(e, t) {
      return (t === void 0 && (t = !0), c.bulkCreateOrReplaceRanges(e, t));
    }
    function _(e) {
      return c.getRangesForChat(e);
    }
    function f(e, t) {
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
      (l.createOrReplaceActiveMessageRange = d),
      (l.removeActiveMessageRange = m),
      (l.bulkUpdateActiveMessageRanges = p),
      (l.getActiveMessageRanges = _),
      (l.getActiveRangeAction = f));
  },
  98,
);
