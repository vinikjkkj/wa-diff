__d(
  "WAWebSetDisappearingModeJob",
  ["WADeprecatedSendIq", "WADeprecatedWapParser", "WALogger", "WAWap"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WADeprecatedWapParser"))("setDMResponseParser", function (e) {
        (e.assertTag("iq"), e.assertAttr("type", "result"));
      });
    async function u(t) {
      var n,
        r = (n = o("WAWap")).wap(
          "iq",
          {
            xmlns: "disappearing_mode",
            to: n.S_WHATSAPP_NET,
            type: "set",
            id: n.generateId(),
          },
          n.wap("disappearing_mode", { duration: n.CUSTOM_STRING(String(t)) }),
        ),
        a = await o("WADeprecatedSendIq").deprecatedSendIq(r, s);
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
    }
    l.setDisappearingMode = u;
  },
  98,
);
