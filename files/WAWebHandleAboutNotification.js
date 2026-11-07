__d(
  "WAWebHandleAboutNotification",
  ["WADeprecatedWapParser", "WALogger", "WAWap", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WADeprecatedWapParser"))(
        "incomingAboutNotification",
        function (e) {
          return (
            e.assertTag("notification"),
            { stanzaId: e.attrString("id"), from: e.attrWapJid("from") }
          );
        },
      );
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = s.parse(t);
          if (n.error)
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                n.error.toString(),
              ),
              n.error
            );
          return o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(n.success.stanzaId),
            to: n.success.from,
            class: "notification",
            type: "status",
          });
        })),
        c.apply(this, arguments)
      );
    }
    l.handleAboutNotification = u;
  },
  98,
);
