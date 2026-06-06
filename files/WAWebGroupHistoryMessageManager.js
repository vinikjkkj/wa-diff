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
      m = 2;
    async function p(e, t) {
      var n = await _(e, t);
      if (n == null) return null;
      var a = n.internalId,
        i = await f(e, n);
      if (!i) {
        var l = await h(e);
        return {
          chatId: e,
          anchorMessage: null,
          anchorInChatMsgId: o("WAWebDBMessageUtils").getInChatMsgId(
            r("nullthrows")(
              l == null ? void 0 : l.internalId,
              "start of chat should have an internal id",
            ),
          ),
        };
      }
      var s = o("WAWebDBMessageUtils").getInChatMsgId(
        r("nullthrows")(a, "join message should have an internal id"),
      );
      return { chatId: e, anchorMessage: n, anchorInChatMsgId: s };
    }
    async function _(t, n) {
      var r = o("WAWebDBMessageUtils").beginningOfChat(t),
        a;
      if (n != null) {
        var i = await o("WAWebSchemaMessage")
          .getMessageTable()
          .get(n.toString());
        (i == null ? void 0 : i.internalId) != null && (a = i.internalId);
      }
      a == null && (a = o("WAWebDBMessageUtils").endOfChat(t));
      try {
        var l = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["internalId"],
            r,
            a,
            { lowerInclusive: !0, upperInclusive: !1, reverse: !0, limit: 1 },
            void 0,
            function (e) {
              return o("WAWebDBGroupHistoryPreProcessor").isMeJoined(e);
            },
          );
        return l.length === 0 ? null : l[0];
      } catch (n) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Error finding join message for chat ",
                ": ",
                "",
              ])),
            t.toString(),
            n,
          ),
          null
        );
      }
    }
    async function f(e, t) {
      if (t == null || t.internalId == null) return !1;
      var n = o("WAWebDBMessageUtils").getInChatMsgId(t.internalId),
        r = o("WAWebDBMessageUtils").beginningOfChat(e),
        a = o("WAWebDBMessageUtils").craftInternalId(e.toString(), n);
      try {
        var i = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], r, a, { limit: m + 1 });
        return i.length > m;
      } catch (t) {
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
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
    async function g(e, t) {
      if (t == null || t.internalId == null) return null;
      var n = o("WAWebDBMessageUtils").getInChatMsgId(t.internalId),
        a = o("WAWebDBMessageUtils").beginningOfChat(e),
        i = o("WAWebDBMessageUtils").craftInternalId(e.toString(), n);
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
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
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
    async function h(e) {
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
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
    var y = new Set([
      o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
        .FAILED_NO_RETRY,
      o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
        .DEDUPED,
    ]);
    async function C(e, t, n) {
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
              return b(e, r);
            },
          );
        return s.length > 0;
      } catch (t) {
        return (
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function b(e, t) {
      var n;
      if (
        e.type !== o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE ||
        e.id === t ||
        r("WAWebMsgKey").from(e.id).fromMe
      )
        return !1;
      var a =
        (n = e.groupHistoryBundleMetadata) == null ? void 0 : n.processState;
      return a == null ? !1 : !y.has(a);
    }
    ((l.findGroupHistoryInsertionAnchor = p),
      (l.findMostRecentJoinSystemMessage = _),
      (l.findLastValidMessageBefore = g),
      (l.hasReceivedBundleForJoinSession = C));
  },
  98,
);
