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
      m,
      p,
      _,
      f = 2;
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = yield L(t, n);
          return a == null
            ? (o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] no join message found for chat ",
                    "; anchoring history at start of chat",
                  ])),
                t.toString(),
              ),
              y(t))
            : (yield k(t, a))
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
              : y(t);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield x(e),
            n = t == null ? void 0 : t.internalId;
          return n == null
            ? null
            : {
                chatId: e,
                anchorMessage: null,
                anchorInChatMsgId: o("WAWebDBMessageUtils").getInChatMsgId(n),
              };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t <= 0) return e;
          var n = yield S(e.chatId, e.anchorInChatMsgId);
          if (n == null) return e;
          var r = e.anchorInChatMsgId - n - 1;
          if (r >= t) return e;
          var a = yield x(e.chatId),
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
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebDBMessageUtils").beginningOfChat(e),
            r = o("WAWebDBMessageUtils").craftInternalId(e.toString(), t);
          try {
            var a,
              i = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .between(["internalId"], n, r, {
                  lowerInclusive: !0,
                  upperInclusive: !1,
                  reverse: !0,
                  limit: 1,
                }),
              l = (a = i[0]) == null ? void 0 : a.internalId;
            return l == null
              ? null
              : o("WAWebDBMessageUtils").getInChatMsgId(l);
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
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebDBMessageUtils").beginningOfChat(e),
            r;
          if (t != null) {
            var a = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(t.toString());
            (a == null ? void 0 : a.internalId) != null && (r = a.internalId);
          }
          r == null && (r = o("WAWebDBMessageUtils").endOfChat(e));
          try {
            var i = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["internalId"],
                n,
                r,
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
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t == null || t.internalId == null) return !1;
          var n = o("WAWebDBMessageUtils").getInChatMsgId(t.internalId),
            r = o("WAWebDBMessageUtils").beginningOfChat(e),
            a = o("WAWebDBMessageUtils").craftInternalId(e.toString(), n);
          try {
            var i = yield o("WAWebSchemaMessage")
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
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        })),
        $.apply(this, arguments)
      );
    }
    var P = new Set([
      o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
        .FAILED_NO_RETRY,
      o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
        .DEDUPED,
    ]);
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                  return w(e, r);
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
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      var n;
      if (
        e.type !== o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE ||
        e.id === t ||
        r("WAWebMsgKey").from(e.id).fromMe
      )
        return !1;
      var a =
        (n = e.groupHistoryBundleMetadata) == null ? void 0 : n.processState;
      return a == null ? !1 : !P.has(a);
    }
    ((l.findGroupHistoryInsertionAnchor = g),
      (l.ensureAnchorHasRoomForHistory = b),
      (l.findMostRecentJoinSystemMessage = L),
      (l.findLastValidMessageBefore = T),
      (l.hasReceivedBundleForJoinSession = N));
  },
  98,
);
