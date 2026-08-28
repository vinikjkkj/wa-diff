__d(
  "ZenonDGWUtils",
  [
    "WebDriverConfig",
    "ZenonActorHooks",
    "ZenonAppProvider",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("WebDriverConfig").isJestE2ETestRun ||
        o("ZenonActorHooks").ZenonActor.isWorkUser()
        ? !1
        : o("ZenonAppProvider").isMessengerWebApp() ||
            r("qex")._("3911") ||
            o("ZenonActorHooks").ZenonActor.isLiveChatOnlyPerson() ||
            r("gkx")("18052") ||
            r("gkx")("7595") ||
            s() ||
            u() ||
            d() ||
            r("gkx")("5667");
    }
    function s() {
      return (
        o("ZenonAppProvider").isInternApp() &&
        r("justknobx")._("453") &&
        !r("gkx")("15868")
      );
    }
    function u() {
      var e;
      return (e =
        o("ZenonActorHooks").ZenonActor.isBizWebUser() && r("qex")._("706")) !=
        null
        ? e
        : !1;
    }
    function c() {
      var t;
      return (
        e() &&
        !r("qex")._("4380") &&
        ((t = r("qex")._("5403")) != null ? t : !1)
      );
    }
    function d() {
      var e;
      return (
        o("ZenonAppProvider").isOculusCastingSite() &&
        ((e = r("qex")._("2658")) != null ? e : !1)
      );
    }
    function m() {
      var t;
      return o("ZenonAppProvider").isMessengerWebApp() &&
        r("qex")._("3674") === !0
        ? !1
        : (t = e() && !r("qex")._("4380")) != null
          ? t
          : !1;
    }
    ((l.shouldUseDGW = e),
      (l.shouldUseUnifiedStream = c),
      (l.shouldUseMQTTFallback = m));
  },
  98,
);
