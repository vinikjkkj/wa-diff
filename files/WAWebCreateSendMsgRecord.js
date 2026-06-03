__d(
  "WAWebCreateSendMsgRecord",
  [
    "WALogger",
    "WAWebAddonDBTable",
    "WAWebDBMessageSerialization",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebSchemaMessage",
    "WAWebSendMsgTypes",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (a === o("WAWebSendMsgTypes").SendMessageRecordType.Message) {
            var i = yield o("WAWebSchemaMessage").getMessageTable().get(t);
            if (i == null)
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsgJob didn't find a msg in the db",
                    ])),
                ),
                null
              );
            var l = new (o("WAWebMsgModel").Msg)(
              o("WAWebDBMessageSerialization").messageFromDbRow(i),
            );
            return {
              type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
              data: l,
            };
          } else if (a === o("WAWebSendMsgTypes").SendMessageRecordType.Addon) {
            var u = r("WAWebMsgKey").from(t),
              c = yield o("WAWebAddonDBTable").addonDBTable.getByMsgKey(n, u);
            return c == null
              ? (o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsgJob didn't find an addonMsgData in the db",
                    ])),
                ),
                null)
              : {
                  type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                  data: c,
                };
          }
          throw r("err")("unexpected msgRecordType: " + a);
        })),
        c.apply(this, arguments)
      );
    }
    l.createMsgRecord = u;
  },
  98,
);
