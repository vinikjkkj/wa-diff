__d(
  "WAWebFetchMessagesInThread",
  [
    "WALogger",
    "WAWebDBMessageUtils",
    "WAWebSchemaMessage",
    "WAWebThreadUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
      return String(t) + "_" + e.key.toString() + "_/";
    }
    function u(e) {
      var t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
      return String(t) + "_" + e.key.toString() + "_g";
    }
    var c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "NoOffsetMessageError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      d = 20;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.count,
            r = n === void 0 ? d : n,
            a = t.direction,
            i = t.lastLoadedMsg,
            l = t.threadId,
            m =
              i == null
                ? void 0
                : yield o("WAWebSchemaMessage")
                    .getMessageTable()
                    .equals(["id"], i.toString());
          if (i && m != null && m.length === 0)
            throw (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Offset message ",
                    " does not exist in message table",
                  ])),
                i && i.toString(),
              ),
              new c()
            );
          var p = m == null ? void 0 : m[0],
            _,
            f,
            g = !1;
          a === "before"
            ? ((_ = s(l)),
              (f =
                p == null
                  ? u(l)
                  : o("WAWebDBMessageUtils").craftInternalThreadId(
                      o("WAWebDBMessageUtils").getInChatMsgId(
                        p.internalId || "",
                      ),
                      l,
                    )),
              (g = !0))
            : ((_ =
                p == null
                  ? s(l)
                  : o("WAWebDBMessageUtils").craftInternalThreadId(
                      o("WAWebDBMessageUtils").getInChatMsgId(
                        p.internalId || "",
                      ),
                      l,
                    )),
              (f = u(l)));
          var h = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .between(["internalThreadIDs"], _, f, {
              lowerInclusive: !1,
              upperInclusive: !1,
              limit: r,
              reverse: g,
            });
          return h;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalThreadIDs"], s(e), u(e), {
                lowerInclusive: !1,
                upperInclusive: !1,
                limit: 1,
              }),
            n = t[0];
          return n == null ? null : { id: n.id, t: n.t };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalThreadIDs"], s(e), u(e), {
                lowerInclusive: !1,
                upperInclusive: !1,
                limit: 1,
                reverse: !0,
              }),
            n = t[0];
          return n == null ? null : { id: n.id, t: n.t };
        })),
        h.apply(this, arguments)
      );
    }
    ((l.beginningOfThread = s),
      (l.endOfThread = u),
      (l.NoOffsetMessageError = c),
      (l.queryMessageForThreadId = m),
      (l.getFirstMessageInfoForThread = _),
      (l.getLatestMessageInfoForThread = g));
  },
  98,
);
