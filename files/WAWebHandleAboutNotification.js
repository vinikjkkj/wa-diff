__d(
  "WAWebHandleAboutNotification",
  ["WADeprecatedWapParser", "WALogger", "WAWap"],
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
    async function u(t) {
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
    }
    l.handleAboutNotification = u;
  },
  98,
);
