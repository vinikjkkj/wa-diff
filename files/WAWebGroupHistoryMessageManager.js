__d(
  "WAWebGroupHistoryMessageManager",
  [
    "WALogger",
    "WAWebDBGroupHistoryPreProcessor",
    "WAWebDBMessageUtils",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 2;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield _(e, t);
          if (n == null) return null;
          var a = n.internalId,
            i = yield g(e, n);
          if (!i) {
            var l = yield b(e);
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
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t == null || t.internalId == null) return !1;
          var n = o("WAWebDBMessageUtils").getInChatMsgId(t.internalId),
            r = o("WAWebDBMessageUtils").beginningOfChat(e),
            a = o("WAWebDBMessageUtils").craftInternalId(e.toString(), n);
          try {
            var i = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalId"], r, a, { limit: d + 1 });
            return i.length > d;
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
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        v.apply(this, arguments)
      );
    }
    ((l.findGroupHistoryInsertionAnchor = m),
      (l.findLastValidMessageBefore = y));
  },
  98,
);
