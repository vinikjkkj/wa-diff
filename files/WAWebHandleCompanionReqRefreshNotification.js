__d(
  "WAWebHandleCompanionReqRefreshNotification",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebQrDeviceLinkingQpl",
    "WAWebUserPrefsMultiDevice",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))(
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
    async function c(e) {
      return (
        e.type === "companion_reg_refresh" &&
          (o(
            "WAWebQrDeviceLinkingQpl",
          ).companionDeviceLinkingScreenQpl.regRefreshNotificationReceived(),
          await o("WAWebAdvSignatureApi").generateADVSecretKey(),
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
    }
    function d(e) {
      var t = u.parse(e);
      return t.error
        ? (o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            t.error.toString(),
          ),
          Promise.reject(t.error))
        : c(t.success);
    }
    l.handleCompanionReqRefreshNotification = d;
  },
  98,
);
