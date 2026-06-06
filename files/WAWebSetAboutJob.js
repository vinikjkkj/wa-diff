__d(
  "WAWebSetAboutJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebDefinePersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))("aboutResponse", function (e) {
        return (e.assertAttr("type", "result"), { id: e.attrInt("id") });
      }),
      s = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep(
          "sendStanza",
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n,
                  r = t.content,
                  a = (n = o("WAWap")).wap(
                    "iq",
                    {
                      to: n.S_WHATSAPP_NET,
                      type: "set",
                      xmlns: "status",
                      id: n.generateId(),
                    },
                    n.wap("status", null, r),
                  ),
                  i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, e);
                return i.success ? { status: 200 } : { status: i.errorCode };
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        )
        .end();
    l.setAbout = s;
  },
  98,
);
