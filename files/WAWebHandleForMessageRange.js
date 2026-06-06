__d(
  "WAWebHandleForMessageRange",
  [
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
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Set(),
      s = function (t) {
        return t.reduce(function (e, t) {
          return new Set([].concat(Array.from(e), Array.from(t)));
        }, new Set());
      };
    async function u(t, n, r) {
      e: {
        if (
          t.action ===
          o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive
        ) {
          return (
            t.actionValue.archived === !0
              ? await o("WAWebMsgRangeContainmentHandlers").handleForArchive(
                  t,
                  r,
                )
              : await o("WAWebMsgRangeContainmentHandlers").handleForUnarchive(
                  t,
                  r,
                ),
            e
          );
          break e;
        }
        if (
          t.action ===
          o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.MarkChatAsRead
        ) {
          return (
            await o(
              "WAWebMsgRangeContainmentHandlers",
            ).handleForMarkAsReadUnread(t, r, !!t.actionValue.read),
            e
          );
          break e;
        }
        if (
          t.action ===
            o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
              .ClearChatDeleteStarredDeleteMedia ||
          t.action ===
            o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
              .ClearChatDeleteStarredKeepMedia
        ) {
          var a = o("WAWebMsgRangeContainmentHandlers").handleForClearChat(
            t,
            r,
          );
          return a ? new Set([a]) : e;
        }
        if (
          t.action ===
            o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
              .ClearChatKeepStarredDeleteMedia ||
          t.action ===
            o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
              .ClearChatKeepStarredKeepMedia
        ) {
          if (!(await c(n.id))) {
            var i = o("WAWebMsgRangeContainmentHandlers").handleForClearChat(
              t,
              r,
            );
            return i ? new Set([i]) : e;
          }
          return e;
        }
        if (
          t.action ===
            o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
              .DeleteChatDeleteMedia ||
          t.action ===
            o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
              .DeleteChatKeepMedia
        ) {
          var l = o("WAWebMsgRangeContainmentHandlers").handleForDeleteChat(
            t,
            r,
          );
          return l ? new Set([l]) : e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t.action,
        );
      }
    }
    async function c(e) {
      var t = o("WAWebSyncdActionUtils").buildIndex(
          o("WASyncdConst").Actions.Star,
          o("WAWebSyncdUtils").constructMsgKeySegmentsFromMsgKey(e),
        ),
        n = await o("WAWebSyncdDb").getSyncAction(t);
      if (n) {
        var r,
          a = o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
            n.binarySyncData,
          ).value;
        return (
          (a == null || (r = a.starAction) == null ? void 0 : r.starred) || !1
        );
      }
      return !1;
    }
    async function d(t, n, r) {
      if (
        (r === void 0 && (r = !0),
        o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(n.type))
      )
        return e;
      var a = await o("WAWebApiActiveMessageRanges").getActiveMessageRanges(
          t.toString(),
        ),
        i = a.map(function (e) {
          return [
            e,
            o("WAWebActiveMessageRanges").rangeContainsMessage(
              e.actionValue.messageRange,
              n,
            ),
          ];
        }),
        l = i
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
      (l.forEach(function (e) {
        e.remainingMessages--;
      }),
        await o("WAWebApiActiveMessageRanges").bulkUpdateActiveMessageRanges(
          l,
          r,
        ));
      var c = i.map(function (e) {
          var t = e[0],
            r = e[1];
          return u(t, n, r);
        }),
        d = await Promise.all(c);
      return s(d);
    }
    function m(e) {
      return !!(
        o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type) ||
        e.type === "reaction" ||
        e.type === "poll_update"
      );
    }
    async function p(e) {
      var t = new Map();
      (e.forEach(function (e) {
        if (
          !(o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(e.type) || m(e))
        ) {
          var n = t.get(e.id.remote.toString());
          (n == null || n.t < e.t) && t.set(e.id.remote.toString(), e);
        }
      }),
        await Promise.all(
          Array.from(t.entries(), function (e) {
            var t = e[0],
              n = e[1];
            return d(o("WAWebWidFactory").createWid(t), n);
          }),
        ));
    }
    ((l.handleForActiveMessageRange = d), (l.handleOfflineForMessageRange = p));
  },
  98,
);
