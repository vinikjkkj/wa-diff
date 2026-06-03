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
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            n === void 0 && (n = d);
            var i =
              a == null
                ? void 0
                : yield o("WAWebSchemaMessage")
                    .getMessageTable()
                    .equals(["id"], a.toString());
            if (a && i != null && i.length === 0)
              throw (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Offset message ",
                      " does not exist in message table",
                    ])),
                  a && a.toString(),
                ),
                new c()
              );
            var l = i == null ? void 0 : i[0],
              m,
              p,
              _ = !1;
            r === "before"
              ? ((m = s(t)),
                (p =
                  l == null
                    ? u(t)
                    : o("WAWebDBMessageUtils").craftInternalThreadId(
                        o("WAWebDBMessageUtils").getInChatMsgId(
                          l.internalId || "",
                        ),
                        t,
                      )),
                (_ = !0))
              : ((m =
                  l == null
                    ? s(t)
                    : o("WAWebDBMessageUtils").craftInternalThreadId(
                        o("WAWebDBMessageUtils").getInChatMsgId(
                          l.internalId || "",
                        ),
                        t,
                      )),
                (p = u(t)));
            var f = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalThreadIDs"], m, p, {
                lowerInclusive: !1,
                upperInclusive: !1,
                limit: n,
                reverse: _,
              });
            return f;
          },
        )),
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
