__d(
  "WAWebHandleCompanionReqRefreshNotification",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebQrDeviceLinkingQpl",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new (r("WADeprecatedWapParser"))(
        "serverNotifyCompanionRefresh",
        function (t) {
          if (
            (t.assertTag("notification"),
            t.assertAttr("type", "companion_reg_refresh"),
            !t.hasChild("companion_reg_refresh") &&
              !t.hasChild("pair-device-rotate-qr"))
          )
            throw t.createParseError(
              "Server companion_reg_refresh notification should contain pair-device-rotate-qr or companion_reg_refresh",
            );
          var n = t.attrString("id"),
            r = t.attrString("from");
          return (
            r !== o("WAWap").S_WHATSAPP_NET.toString() &&
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    '[handleServerSyncNotification] "from" != s.whatsapp.net',
                  ])),
              ),
            { type: "companion_reg_refresh", stanzaId: n }
          );
        },
      );
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            e.type === "companion_reg_refresh" &&
              (o(
                "WAWebQrDeviceLinkingQpl",
              ).companionDeviceLinkingScreenQpl.regRefreshNotificationReceived(),
              yield o("WAWebAdvSignatureApi").generateADVSecretKey(),
              o("WAWebUserPrefsMultiDevice").advSecretEventEmitter.trigger(
                "change",
              )),
            o("WAWap").wap("ack", {
              id: o("WAWap").CUSTOM_STRING(e.stanzaId),
              class: "notification",
              type: "companion_reg_refresh",
              to: o("WAWap").S_WHATSAPP_NET,
            })
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = c.parse(e);
      return t.error
        ? (o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            t.error.toString(),
          ),
          (u || (u = n("Promise"))).reject(t.error))
        : d(t.success);
    }
    l.handleCompanionReqRefreshNotification = p;
  },
  98,
);
