__d(
  "WAWebSetDisappearingModeJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WADeprecatedWapParser"))("setDMResponseParser", function (e) {
        (e.assertTag("iq"), e.assertAttr("type", "result"));
      });
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = (n = o("WAWap")).wap(
              "iq",
              {
                xmlns: "disappearing_mode",
                to: n.S_WHATSAPP_NET,
                type: "set",
                id: n.generateId(),
              },
              n.wap("disappearing_mode", {
                duration: n.CUSTOM_STRING(String(t)),
              }),
            ),
            a = yield o("WADeprecatedSendIq").deprecatedSendIq(r, s);
          if (!a.success) {
            var i = a.errorCode,
              l = a.errorText;
            throw (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "setDisappearingMode: failed ",
                      ", ",
                      "",
                    ])),
                  i,
                  l,
                )
                .tags("DM", "DDM"),
              new Error({ errorCode: i, errorText: l })
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.setDisappearingMode = u;
  },
  98,
);
