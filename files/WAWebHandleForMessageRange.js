__d(
  "WAWebHandleForMessageRange",
  [
    "Promise",
    "WASyncdConst",
    "WAWebActiveMessageRanges",
    "WAWebAddonGatingUtils",
    "WAWebApiActiveMessageRanges",
    "WAWebHandleForMessageRangeEnums",
    "WAWebMsgRangeContainmentHandlers",
    "WAWebMsgType",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaActiveMessageRanges",
    "WAWebSyncdActionUtils",
    "WAWebSyncdDb",
    "WAWebSyncdUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set(),
      u = function (t) {
        return t.reduce(function (e, t) {
          return new Set([].concat(Array.from(e), Array.from(t)));
        }, new Set());
      };
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          e: {
            if (
              e.action ===
              o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive
            ) {
              return (
                e.actionValue.archived === !0
                  ? yield o(
                      "WAWebMsgRangeContainmentHandlers",
                    ).handleForArchive(e, n)
                  : yield o(
                      "WAWebMsgRangeContainmentHandlers",
                    ).handleForUnarchive(e, n),
                s
              );
              break e;
            }
            if (
              e.action ===
              o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                .MarkChatAsRead
            ) {
              return (
                yield o(
                  "WAWebMsgRangeContainmentHandlers",
                ).handleForMarkAsReadUnread(e, n, !!e.actionValue.read),
                s
              );
              break e;
            }
            if (
              e.action ===
                o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                  .ClearChatDeleteStarredDeleteMedia ||
              e.action ===
                o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                  .ClearChatDeleteStarredKeepMedia
            ) {
              var r = o("WAWebMsgRangeContainmentHandlers").handleForClearChat(
                e,
                n,
              );
              return r ? new Set([r]) : s;
            }
            if (
              e.action ===
                o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                  .ClearChatKeepStarredDeleteMedia ||
              e.action ===
                o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                  .ClearChatKeepStarredKeepMedia
            ) {
              if (!(yield m(t.id))) {
                var a = o(
                  "WAWebMsgRangeContainmentHandlers",
                ).handleForClearChat(e, n);
                return a ? new Set([a]) : s;
              }
              return s;
            }
            if (
              e.action ===
                o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                  .DeleteChatDeleteMedia ||
              e.action ===
                o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                  .DeleteChatKeepMedia
            ) {
              var i = o("WAWebMsgRangeContainmentHandlers").handleForDeleteChat(
                e,
                n,
              );
              return i ? new Set([i]) : s;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e.action,
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebSyncdActionUtils").buildIndex(
              o("WASyncdConst").Actions.Star,
              o("WAWebSyncdUtils").constructMsgKeySegmentsFromMsgKey(e),
            ),
            n = yield o("WAWebSyncdDb").getSyncAction(t);
          if (n) {
            var r,
              a = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                n.binarySyncData,
              ).value;
            return (
              (a == null || (r = a.starAction) == null ? void 0 : r.starred) ||
              !1
            );
          }
          return !1;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          if (
            (a === void 0 && (a = !0),
            o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(r.type))
          )
            return s;
          var i = yield o("WAWebApiActiveMessageRanges").getActiveMessageRanges(
              t.toString(),
            ),
            l = i.map(function (e) {
              return [
                e,
                o("WAWebActiveMessageRanges").rangeContainsMessage(
                  e.actionValue.messageRange,
                  r,
                ),
              ];
            }),
            d = l
              .filter(function (e) {
                var t = e[1];
                return (
                  t ===
                  o("WAWebHandleForMessageRangeEnums").RangeContain
                    .CONTAINS_BY_ADDITIONAL
                );
              })
              .map(function (e) {
                var t = e[0];
                return t;
              });
          (d.forEach(function (e) {
            e.remainingMessages--;
          }),
            yield o(
              "WAWebApiActiveMessageRanges",
            ).bulkUpdateActiveMessageRanges(d, a));
          var m = l.map(function (e) {
              var t = e[0],
                n = e[1];
              return c(t, r, n);
            }),
            p = yield (e || (e = n("Promise"))).all(m);
          return u(p);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return !!(
        o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type) ||
        e.type === "reaction" ||
        e.type === "poll_update"
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = new Map();
          (t.forEach(function (e) {
            if (
              !(o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(e.type) || g(e))
            ) {
              var t = r.get(e.id.remote.toString());
              (t == null || t.t < e.t) && r.set(e.id.remote.toString(), e);
            }
          }),
            yield (e || (e = n("Promise"))).all(
              Array.from(r.entries(), function (e) {
                var t = e[0],
                  n = e[1];
                return _(o("WAWebWidFactory").createWid(t), n);
              }),
            ));
        })),
        y.apply(this, arguments)
      );
    }
    ((l.handleForActiveMessageRange = _), (l.handleOfflineForMessageRange = h));
  },
  98,
);
