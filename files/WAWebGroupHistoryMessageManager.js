__d(
  "WAWebGroupHistoryMessageManager",
  [
    "WALogger",
    "WAWebDBGroupHistoryPreProcessor",
    "WAWebDBMessageUtils",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 2;
    async function g(t, n) {
      var a = await b(t, n);
      return a == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] no join message found for chat ",
                "; anchoring history at start of chat",
              ])),
            t.toString(),
          ),
          h(t))
        : (await v(t, a))
          ? {
              chatId: t,
              anchorMessage: a,
              anchorInChatMsgId: o("WAWebDBMessageUtils").getInChatMsgId(
                r("nullthrows")(
                  a.internalId,
                  "join message should have an internal id",
                ),
              ),
            }
          : h(t);
    }
    async function h(e) {
      var t = await R(e),
        n = t == null ? void 0 : t.internalId;
      return n == null
        ? null
        : {
            chatId: e,
            anchorMessage: null,
            anchorInChatMsgId: o("WAWebDBMessageUtils").getInChatMsgId(n),
          };
    }
    async function y(e, t) {
      if (t <= 0) return e;
      var n = await C(e.chatId, e.anchorInChatMsgId);
      if (n == null) return e;
      var r = e.anchorInChatMsgId - n - 1;
      if (r >= t) return e;
      var a = await R(e.chatId),
        i =
          (a == null ? void 0 : a.internalId) != null
            ? o("WAWebDBMessageUtils").getInChatMsgId(a.internalId)
            : null;
      return i == null
        ? e
        : (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] insufficient gap below join (",
                " free < ",
                " msgs) for chat ",
                "; rebasing history below start of chat",
              ])),
            r,
            t,
            e.chatId.toString(),
          ),
          babelHelpers.extends({}, e, { anchorInChatMsgId: i }));
    }
    async function C(e, t) {
      var n = o("WAWebDBMessageUtils").beginningOfChat(e),
        r = o("WAWebDBMessageUtils").craftInternalId({
          chatId: e.toString(),
          inChatMsgId: t,
        });
      try {
        var a,
          i = await o("WAWebSchemaMessage")
            .getMessageTable()
            .between(["internalId"], n, r, {
              lowerInclusive: !0,
              upperInclusive: !1,
              reverse: !0,
              limit: 1,
            }),
          l = (a = i[0]) == null ? void 0 : a.internalId;
        return l == null ? null : o("WAWebDBMessageUtils").getInChatMsgId(l);
      } catch (t) {
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] getHighestInChatMsgIdBelow err ",
                ": ",
                "",
              ])),
            e.toString(),
            t,
          ),
          null
        );
      }
    }
    async function b(e, t) {
      var n = o("WAWebDBMessageUtils").beginningOfChat(e),
        r;
      if (t != null) {
        var a = await o("WAWebSchemaMessage")
          .getMessageTable()
          .get(t.toString());
        (a == null ? void 0 : a.internalId) != null && (r = a.internalId);
      }
      r == null && (r = o("WAWebDBMessageUtils").endOfChat(e));
      try {
        var i = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["internalId"],
            n,
            r,
            { lowerInclusive: !0, upperInclusive: !1, reverse: !0, limit: 1 },
            void 0,
            function (e) {
              return o("WAWebDBGroupHistoryPreProcessor").isMeJoined(e);
            },
          );
        return i.length === 0 ? null : i[0];
      } catch (t) {
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Error finding join message for chat ",
                ": ",
                "",
              ])),
            e.toString(),
            t,
          ),
          null
        );
      }
    }
    async function v(e, t) {
      if (t == null || t.internalId == null) return !1;
      var n = o("WAWebDBMessageUtils").getInChatMsgId(t.internalId),
        r = o("WAWebDBMessageUtils").beginningOfChat(e),
        a = o("WAWebDBMessageUtils").craftInternalId({
          chatId: e.toString(),
          inChatMsgId: n,
        });
      try {
        var i = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], r, a, { limit: f + 1 });
        return i.length > f;
      } catch (t) {
        return (
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[groupHistory] last valid msg before join err ",
                ": ",
                "",
              ])),
            e.toString(),
            t,
          ),
          !1
        );
      }
    }
    async function S(e, t) {
      if (t == null || t.internalId == null) return null;
      var n = o("WAWebDBMessageUtils").getInChatMsgId(t.internalId),
        a = o("WAWebDBMessageUtils").beginningOfChat(e),
        i = o("WAWebDBMessageUtils").craftInternalId({
          chatId: e.toString(),
          inChatMsgId: n,
        });
      try {
        var l = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["internalId"],
            a,
            i,
            { lowerInclusive: !0, upperInclusive: !1, reverse: !0, limit: 1 },
            void 0,
            function (e) {
              return r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type);
            },
          );
        return l.length === 0 ? null : l[0];
      } catch (t) {
        return (
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[groupHistory] last valid msg before join err ",
                ": ",
                "",
              ])),
            e.toString(),
            t,
          ),
          null
        );
      }
    }
    async function R(e) {
      var t = o("WAWebDBMessageUtils").beginningOfChat(e),
        n = o("WAWebDBMessageUtils").endOfChat(e);
      try {
        var r = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], t, n, {
            lowerInclusive: !0,
            upperInclusive: !0,
            reverse: !1,
            limit: 1,
          });
        return r.length === 0 ? null : r[0];
      } catch (t) {
        return (
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Error finding start of chat ",
                ": ",
                "",
              ])),
            e.toString(),
            t,
          ),
          null
        );
      }
    }
    var L = new Set([
      o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
        .FAILED_NO_RETRY,
      o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
        .DEDUPED,
    ]);
    async function E(e, t, n) {
      var r = t.toString(),
        a = n == null ? void 0 : n.internalId,
        i = a != null ? a : o("WAWebDBMessageUtils").beginningOfChat(e),
        l = o("WAWebDBMessageUtils").endOfChat(e);
      try {
        var s = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["internalId"],
            i,
            l,
            { lowerInclusive: a == null, upperInclusive: !0, limit: 1 },
            void 0,
            function (e) {
              return k(e, r);
            },
          );
        return s.length > 0;
      } catch (t) {
        return (
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] hasReceivedBundleForJoinSession err ",
                ": ",
                "",
              ])),
            e.toString(),
            t,
          ),
          !1
        );
      }
    }
    function k(e, t) {
      var n;
      if (
        e.type !== o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE ||
        e.id === t ||
        r("WAWebMsgKey").from(e.id).fromMe
      )
        return !1;
      var a =
        (n = e.groupHistoryBundleMetadata) == null ? void 0 : n.processState;
      return a == null ? !1 : !L.has(a);
    }
    ((l.findGroupHistoryInsertionAnchor = g),
      (l.ensureAnchorHasRoomForHistory = y),
      (l.findMostRecentJoinSystemMessage = b),
      (l.findLastValidMessageBefore = S),
      (l.hasReceivedBundleForJoinSession = E));
  },
  98,
);
