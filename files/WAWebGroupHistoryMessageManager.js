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
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 2;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield f(e, t);
          if (n == null) return null;
          var a = n.internalId,
            i = yield h(e, n);
          if (!i) {
            var l = yield v(e);
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = o("WAWebDBMessageUtils").beginningOfChat(t),
            a;
          if (n != null) {
            var i = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(n.toString());
            (i == null ? void 0 : i.internalId) != null && (a = i.internalId);
          }
          a == null && (a = o("WAWebDBMessageUtils").endOfChat(t));
          try {
            var l = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["internalId"],
                r,
                a,
                {
                  lowerInclusive: !0,
                  upperInclusive: !1,
                  reverse: !0,
                  limit: 1,
                },
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t == null || t.internalId == null) return !1;
          var n = o("WAWebDBMessageUtils").getInChatMsgId(t.internalId),
            r = o("WAWebDBMessageUtils").beginningOfChat(e),
            a = o("WAWebDBMessageUtils").craftInternalId(e.toString(), n);
          try {
            var i = yield o("WAWebSchemaMessage")
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
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t == null || t.internalId == null) return null;
          var n = o("WAWebDBMessageUtils").getInChatMsgId(t.internalId),
            a = o("WAWebDBMessageUtils").beginningOfChat(e),
            i = o("WAWebDBMessageUtils").craftInternalId(e.toString(), n);
          try {
            var l = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["internalId"],
                a,
                i,
                {
                  lowerInclusive: !0,
                  upperInclusive: !1,
                  reverse: !0,
                  limit: 1,
                },
                void 0,
                function (e) {
                  return r("WAWebGroupHistorySupportedMessageTypesUtil")(
                    e.type,
                  );
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
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebDBMessageUtils").beginningOfChat(e),
            n = o("WAWebDBMessageUtils").endOfChat(e);
          try {
            var r = yield o("WAWebSchemaMessage")
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
        })),
        S.apply(this, arguments)
      );
    }
    var R = new Set([
      o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
        .FAILED_NO_RETRY,
      o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
        .DEDUPED,
    ]);
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = t.toString(),
            a = n == null ? void 0 : n.internalId,
            i = a != null ? a : o("WAWebDBMessageUtils").beginningOfChat(e),
            l = o("WAWebDBMessageUtils").endOfChat(e);
          try {
            var s = yield o("WAWebSchemaMessage")
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
        })),
        E.apply(this, arguments)
      );
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
      return a == null ? !1 : !R.has(a);
    }
    ((l.findGroupHistoryInsertionAnchor = p),
      (l.findMostRecentJoinSystemMessage = f),
      (l.findLastValidMessageBefore = C),
      (l.hasReceivedBundleForJoinSession = L));
  },
  98,
);
