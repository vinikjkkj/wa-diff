__d(
  "WAWebQueryDisappearingModeJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))("dmParser", function (e) {
      var t = e.child("disappearing_mode");
      return { duration: t.attrInt("duration"), t: t.attrInt("t") };
    });
    async function s() {
      var t = o("WAWap").wap("iq", {
          xmlns: "disappearing_mode",
          to: o("WAWap").S_WHATSAPP_NET,
          type: "get",
          id: o("WAWap").generateId(),
        }),
        n = await o("WADeprecatedSendIq").deprecatedSendIq(t, e);
      if (!n.success)
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(n.errorCode);
      return n.result;
    }
    l.queryDisappearingMode = s;
  },
  98,
);
