__d(
  "WAWebDBMarkFutureproofMessagesReparsed",
  ["WALogger", "WAWebMsgType", "WAWebSchemaMessage"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        if (t.length === 0) return;
        var n = await o("WAWebSchemaMessage").getMessageTable().bulkGet(t),
          r = n.filter(function (e) {
            return e != null && e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
          });
        if (r.length === 0) return;
        var a = r.map(function (e) {
          return { id: e.id.toString(), futureproofReparsed: !0 };
        });
        await o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(a);
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
    }
    l.markFutureproofMessagesReparsed = s;
  },
  98,
);
