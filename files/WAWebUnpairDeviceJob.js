__d(
  "WAWebUnpairDeviceJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebABProps",
    "WAWebCommsWapMd",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))("unpairResponse", function (e) {
      (e.assertTag("iq"), e.assertFromServer());
      var t = e.attrString("type"),
        n = 200;
      return (
        t === "error" && (n = e.child("error").attrInt("code")),
        { status: n }
      );
    });
    async function s(t, n) {
      var r,
        a = (r = o("WAWap")).wap(
          "iq",
          {
            to: r.S_WHATSAPP_NET,
            type: "set",
            id: r.generateId(),
            xmlns: "md",
          },
          r.wap("remove-companion-device", {
            jid: o("WAWebCommsWapMd").DEVICE_JID(
              o("WAWebUserUtils").getMeDevicePnLessOrFallback_DO_NOT_USE(),
            ),
            reason: r.CUSTOM_STRING(t),
            trigger:
              n != null &&
              o("WAWebABProps").getABPropConfigValue(
                "md_logout_trigger_enabled",
              )
                ? o("WAWap").CUSTOM_STRING(n)
                : o("WAWap").DROP_ATTR,
          }),
        ),
        i = await o("WADeprecatedSendIq").deprecatedSendIq(a, e);
      return i.success ? { status: i.result.status } : { status: i.errorCode };
    }
    l.unpairDevice = s;
  },
  98,
);
