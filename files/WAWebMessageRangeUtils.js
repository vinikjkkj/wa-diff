__d(
  "WAWebMessageRangeUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WALongInt",
    "WASyncdConst",
    "WAWebApiActiveMessageRanges",
    "WAWebDBMessageRange",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaActiveMessageRanges",
    "WAWebSyncdCoreApi",
    "WAWebSyncdDb",
    "WAWebSyncdMetrics",
    "WAWebTimestampConversionUtils",
    "WAWebWamEnumMdSyncdCriticalEventCode",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "countWhere",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum").Mirrored([
        "RangeAEnclosesRangeB",
        "RangeBEnclosesRangeA",
        "RangesAreEqual",
        "RangesNotEnclosing",
      ]);
    function m(e, t) {
      for (
        var n = new Set(
            e.messages.map(function (e) {
              var t;
              return (t = e.key) == null ? void 0 : t.id;
            }),
          ),
          r = 0;
        r < t.messages.length;
        r++
      )
        if (t.messages[r].timestamp == null) {
          var a;
          if (!n.has((a = t.messages[r].key) == null ? void 0 : a.id))
            return !1;
        }
      for (var i = 0; i < t.messages.length; i++) {
        var l, s, u;
        if (
          !n.has((l = t.messages[i].key) == null ? void 0 : l.id) &&
          o("WALongInt").numberOrThrowIfTooLarge(
            (s = e.lastMessageTimestamp) != null ? s : 0,
          ) <=
            o("WALongInt").numberOrThrowIfTooLarge(
              (u = t.messages[i].timestamp) != null ? u : 0,
            )
        )
          return !1;
      }
      return !0;
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield (n = o("WAWebDBMessageRange")).getLastMessageTimestamp(e);
          n.logMaybeMillisecondTimestamp(r, "getLastMessageTimestamp");
          var a = yield n.getLastSystemMessageTimestamp(e);
          n.logMaybeMillisecondTimestamp(a, "lastSystemMessageTimestamp");
          var i = yield n.getAdditionalMessages(e, r),
            l = i.messages,
            s = i.newLastMessageTimestamp;
          if (
            (s != null &&
              ((r = s),
              o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(
                s,
                "newLastMessageTimestamp",
              )),
            r == null)
          ) {
            var u,
              c = l.sort(o("WAWebDBMessageRange").timestampComparison),
              d = (u = c[l.length - 1]) == null ? void 0 : u.timestamp;
            ((r = d != null ? o("WALongInt").numberOrThrowIfTooLarge(d) : null),
              o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(
                r,
                "sorting",
              ));
          }
          var m = { messages: l };
          if (
            (r != null && (m.lastMessageTimestamp = r),
            a != null &&
              (r == null || a > o("WALongInt").numberOrThrowIfTooLarge(r)) &&
              ((m.lastSystemMessageTimestamp = a),
              o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(
                m.lastSystemMessageTimestamp,
                "lastSystemMessageTimestamp",
              )),
            t.forOutgoingMutation && m.lastMessageTimestamp == null)
          ) {
            var p = yield o(
              "WAWebDBMessageRange",
            ).getFirstSystemMessageTimestamp(e);
            p != null &&
              ((m.lastMessageTimestamp = p),
              o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(
                m.lastMessageTimestamp,
                "firstSystemMessageTimestamp",
              ),
              p === a && (m.lastSystemMessageTimestamp = void 0));
          }
          if (t.forOutgoingMutation && t.mutationIndexJid != null)
            for (var _ of m.messages) {
              var f;
              ((f = _.key) == null ? void 0 : f.remoteJid) != null &&
                (_.key.remoteJid = t.mutationIndexJid);
            }
          return m;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n = m(e, t),
        r = m(t, e);
      return n && r
        ? d.RangesAreEqual
        : n
          ? d.RangeAEnclosesRangeB
          : r
            ? d.RangeBEnclosesRangeA
            : d.RangesNotEnclosing;
    }
    function g(e, t, n) {
      var r = new Map(),
        a = e.concat(t);
      return (
        a.forEach(function (e) {
          var t,
            a,
            i,
            l = (t = (a = e.key) == null ? void 0 : a.id) != null ? t : "";
          if (
            o("WALongInt").numberOrThrowIfTooLarge(
              (i = e.timestamp) != null ? i : 0,
            ) >= n
          ) {
            var s = r.get(l);
            if (s) {
              var u, c;
              r.set(
                l,
                o("WALongInt").numberOrThrowIfTooLarge(
                  (u = s.timestamp) != null ? u : 0,
                ) <
                  o("WALongInt").numberOrThrowIfTooLarge(
                    (c = e.timestamp) != null ? c : 0,
                  )
                  ? e
                  : s,
              );
            } else r.set(l, e);
          }
        }),
        Array.from(r.values())
      );
    }
    function h(e, t) {
      var n,
        r,
        a = o("WALongInt").numberOrThrowIfTooLarge(
          (n = e.lastMessageTimestamp) != null ? n : 0,
        ),
        i = o("WALongInt").numberOrThrowIfTooLarge(
          (r = t.lastMessageTimestamp) != null ? r : 0,
        ),
        l = Math.max(a, i),
        s = g(e.messages, t.messages, l),
        u = { messages: s };
      if (
        (l !== 0 && (u.lastMessageTimestamp = l),
        e.lastSystemMessageTimestamp != null ||
          t.lastSystemMessageTimestamp != null)
      ) {
        var c,
          d,
          m = Math.max(
            o("WALongInt").numberOrThrowIfTooLarge(
              (c = e.lastSystemMessageTimestamp) != null ? c : 0,
            ),
            o("WALongInt").numberOrThrowIfTooLarge(
              (d = t.lastSystemMessageTimestamp) != null ? d : 0,
            ),
          );
        (l == null || m > l) && (u.lastSystemMessageTimestamp = m);
      }
      return u;
    }
    var y = [
        [
          (c = o("WAWebWamEnumMdSyncdCriticalEventCode"))
            .MD_SYNCD_CRITICAL_EVENT_CODE
            .MESSAGE_RANGE_LAST_SYSTEM_MESSAGE_TIMESTAMP_SET,
          function (e) {
            var t = e.lastMessageTimestamp,
              n = e.lastSystemMessageTimestamp;
            return (
              n != null &&
              t != null &&
              o("WALongInt").numberOrThrowIfTooLarge(n) <
                o("WALongInt").numberOrThrowIfTooLarge(t)
            );
          },
        ],
        [
          c.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGES_CROSS_LIMIT,
          function (e) {
            return (
              r("countWhere")(e.messages, function (e) {
                return e.timestamp != null;
              }) > 1e3
            );
          },
        ],
      ],
      C = [
        [
          c.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_UNSET,
          function (e) {
            return e.key == null;
          },
        ],
        [
          c.MD_SYNCD_CRITICAL_EVENT_CODE
            .MESSAGE_RANGE_MESSAGE_KEY_REMOTE_JID_UNSET,
          function (e) {
            var t;
            return ((t = e.key) == null ? void 0 : t.remoteJid) == null;
          },
        ],
        [
          c.MD_SYNCD_CRITICAL_EVENT_CODE
            .MESSAGE_RANGE_MESSAGE_KEY_FROM_ME_UNSET,
          function (e) {
            var t;
            return ((t = e.key) == null ? void 0 : t.fromMe) == null;
          },
        ],
        [
          c.MD_SYNCD_CRITICAL_EVENT_CODE
            .MESSAGE_RANGE_MESSAGE_KEY_STANZA_ID_UNSET,
          function (e) {
            var t;
            return ((t = e.key) == null ? void 0 : t.id) == null;
          },
        ],
        [
          c.MD_SYNCD_CRITICAL_EVENT_CODE
            .MESSAGE_RANGE_MESSAGE_KEY_REMOTE_JID_INVALID,
          function (e) {
            var t;
            return !o("WAWebWidFactory").isWidlike(
              (t = e.key) == null ? void 0 : t.remoteJid,
            );
          },
        ],
        [
          c.MD_SYNCD_CRITICAL_EVENT_CODE
            .MESSAGE_RANGE_MESSAGE_KEY_PARTICIPANT_UNSET,
          function (e) {
            var t, n, o;
            return (
              r("WAWebWid").isGroup(
                (t = e.key) == null ? void 0 : t.remoteJid,
              ) &&
              ((n = e.key) == null ? void 0 : n.fromMe) !== !0 &&
              ((o = e.key) == null ? void 0 : o.participant) == null
            );
          },
        ],
      ];
    function b(e, t, n) {
      if (e == null) {
        o("WAWebSyncdMetrics").uploadMdCriticalEventMetric(
          o("WAWebWamEnumMdSyncdCriticalEventCode").MD_SYNCD_CRITICAL_EVENT_CODE
            .MESSAGE_RANGE_UNSET,
          t,
          n,
        );
        return;
      }
      for (var r of y) {
        var a = r[0],
          i = r[1];
        if (i(e)) {
          o("WAWebSyncdMetrics").uploadMdCriticalEventMetric(a, t, n);
          return;
        }
      }
      if (e.messages == null) return e;
      for (var l of e.messages)
        for (var s of C) {
          var u = s[0],
            c = s[1];
          if (c(l)) {
            o("WAWebSyncdMetrics").uploadMdCriticalEventMetric(u, t, n);
            return;
          }
        }
      return e;
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield p(e, { forOutgoingMutation: !0, mutationIndexJid: t }),
            a = yield o("WAWebApiActiveMessageRanges").getActiveMessageRanges(
              e.toString(),
            );
          (a.forEach(function (e) {
            var t = e.actionValue.messageRange;
            t &&
              (o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(
                t.lastMessageTimestamp,
                "activeRanges",
              ),
              o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(
                t.lastSystemMessageTimestamp,
                "activeRangesSystem",
              ));
            e: {
              if (
                e.action ===
                  o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .ClearChatDeleteStarredDeleteMedia ||
                e.action ===
                  o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .ClearChatDeleteStarredKeepMedia ||
                e.action ===
                  o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .ClearChatKeepStarredDeleteMedia ||
                e.action ===
                  o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .ClearChatKeepStarredKeepMedia ||
                e.action ===
                  o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .DeleteChatDeleteMedia ||
                e.action ===
                  o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .DeleteChatKeepMedia
              ) {
                var n = e.actionValue.messageRange;
                n && (r = h(r, n));
                break e;
              }
              if (
                e.action ===
                  o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .Archive ||
                e.action ===
                  o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                    .MarkChatAsRead
              )
                break e;
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e.action,
              );
            }
          }),
            o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(
              r.lastMessageTimestamp,
              "intermediaForwardMovingRange",
            ));
          var i = yield R(e);
          return (
            (r.messages = g(
              r.messages,
              i,
              o("WALongInt").numberOrThrowIfTooLarge(
                (n = r.lastMessageTimestamp) != null ? n : 0,
              ),
            )),
            (r = o("WAWebDBMessageRange").fixMessageRange(r)),
            o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(
              r.lastMessageTimestamp,
              "forwardMovingRange",
            ),
            r
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = [],
            r = yield o("WAWebSyncdDb").getSyncActionsRows(
              ["action"],
              [o("WASyncdConst").Actions.DeleteMessageForMe],
            );
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: deleteForMeSyncActions length: ",
                "",
              ])),
            r.length,
          );
          var a = [],
            i = 0,
            l = 0;
          return (
            r.forEach(function (e) {
              var r = t.toString({ legacy: !0 }),
                s = JSON.parse(e.index);
              if (s.length !== 5) (i++, a.length < 3 && a.push(e.index));
              else if (
                r === s[1] &&
                e.actionState === o("WASyncdConst").SyncActionState.Success
              ) {
                var u,
                  c = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                    e.binarySyncData,
                  ).value,
                  d =
                    c == null || (u = c.deleteMessageForMeAction) == null
                      ? void 0
                      : u.messageTimestamp;
                if (d == null) l++;
                else {
                  var m = {
                    remoteJid: s[1],
                    id: s[2],
                    fromMe: s[3] === "1",
                    participant: s[4] !== "0" ? s[4] : void 0,
                  };
                  n.push({
                    key: m,
                    timestamp: o(
                      "WAWebTimestampConversionUtils",
                    ).maybeMillisecondsToSeconds(d),
                  });
                }
              }
            }),
            i > 0 &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[constructForwardMovingMessageRange] ",
                    " malformed indices => ",
                    "",
                  ])),
                i,
                a,
              ),
            l > 0 &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[constructForwardMovingMessageRange] ",
                    " malformed actions",
                  ])),
                l,
              ),
            n
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return babelHelpers.extends({}, t, {
        messages: t.messages.map(function (t) {
          return babelHelpers.extends({}, t, {
            key: babelHelpers.extends({}, t.key, { remoteJid: e.toString() }),
          });
        }),
      });
    }
    var k = function (t, n, r) {
      return o("WAWebSyncdCoreApi").lockForSync(
        [].concat(t, ["message", "active-message-ranges"]),
        n,
        r,
      );
    };
    ((l.MessageRangeEncloseType = d),
      (l.constructMessageRange = p),
      (l.compareMessageRanges = f),
      (l.mergeMessageRanges = h),
      (l.validateMessageRange = b),
      (l.constructForwardMovingMessageRange = v),
      (l.replaceMessageRangeRemoteJid = E),
      (l.lockForMessageRangeSync = k));
  },
  98,
);
