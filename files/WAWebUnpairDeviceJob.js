__d(
  "WAWebUnpairDeviceJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
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
                id: n.generateId(),
                xmlns: "md",
              },
              n.wap("remove-companion-device", {
                jid: o("WAWebCommsWapMd").DEVICE_JID(
                  o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
                ),
                reason: n.CUSTOM_STRING(t),
              }),
            ),
            a = yield o("WADeprecatedSendIq").deprecatedSendIq(r, e);
          return a.success
            ? { status: a.result.status }
            : { status: a.errorCode };
        })),
        u.apply(this, arguments)
      );
    }
    l.unpairDevice = s;
  },
  98,
);
