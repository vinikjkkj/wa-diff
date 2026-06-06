__d(
  "WAWebDBMarkFutureproofMessagesReparsed",
  ["WALogger", "WAWebMsgType", "WAWebSchemaMessage", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            if (t.length === 0) return;
            var n = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(t),
              r = n.filter(function (e) {
                return (
                  e != null && e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN
                );
              });
            if (r.length === 0) return;
            var a = r.map(function (e) {
              return { id: e.id.toString(), futureproofReparsed: !0 };
            });
            yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkCreateOrMerge(a);
          } catch (t) {
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "markFutureproofMessagesReparsed: error ",
                    "",
                  ])),
                t,
              ),
              t
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.markFutureproofMessagesReparsed = s;
  },
  98,
);
