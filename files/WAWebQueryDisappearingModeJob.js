__d(
  "WAWebQueryDisappearingModeJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))("dmParser", function (e) {
      var t = e.child("disappearing_mode");
      return { duration: t.attrInt("duration"), t: t.attrInt("t") };
    });
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWap").wap("iq", {
              xmlns: "disappearing_mode",
              to: o("WAWap").S_WHATSAPP_NET,
              type: "get",
              id: o("WAWap").generateId(),
            }),
            n = yield o("WADeprecatedSendIq").deprecatedSendIq(t, e);
          if (!n.success)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              n.errorCode,
            );
          return n.result;
        })),
        u.apply(this, arguments)
      );
    }
    l.queryDisappearingMode = s;
  },
  98,
);
