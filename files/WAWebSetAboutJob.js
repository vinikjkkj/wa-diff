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
    });
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = (n = o("WAWap")).wap(
              "iq",
              {
                to: n.S_WHATSAPP_NET,
                type: "set",
                xmlns: "status",
                id: n.generateId(),
              },
              n.wap("status", null, t),
            ),
            a = yield o("WADeprecatedSendIq").deprecatedSendIq(r, e);
          return a.success ? { status: 200 } : { status: a.errorCode };
        })),
        u.apply(this, arguments)
      );
    }
    var c = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep("sendStanza", function (e) {
        var t = e.content;
        return s(t);
      })
      .end();
    ((l.sendSetAbout = s), (l.setAbout = c));
  },
  98,
);
