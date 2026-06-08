__d(
  "WhatsappFalcoNativeTestFalcoEvent",
  [
    "FalcoLoggerInternal",
    "Promise",
    "getFalcoLogPolicy_DO_NOT_USE",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("getFalcoLogPolicy_DO_NOT_USE")("7021"),
      c = {
        ab_key2: (s = r("requireDeferred"))(
          "WAWebFalcoCanonicalAbKey2",
        ).__setRef("WhatsappFalcoNativeTestFalcoEvent"),
        app_build: s("WAWebFalcoCanonicalAppBuild").__setRef(
          "WhatsappFalcoNativeTestFalcoEvent",
        ),
        app_is_beta_release: s("WAWebFalcoCanonicalAppIsBetaRelease").__setRef(
          "WhatsappFalcoNativeTestFalcoEvent",
        ),
        app_version: s("WAWebFalcoCanonicalAppVersion").__setRef(
          "WhatsappFalcoNativeTestFalcoEvent",
        ),
        dedup_key: s("WAWebFalcoCanonicalDedupKey").__setRef(
          "WhatsappFalcoNativeTestFalcoEvent",
        ),
        device_classification: s(
          "WAWebFalcoCanonicalDeviceClassification",
        ).__setRef("WhatsappFalcoNativeTestFalcoEvent"),
        device_name: s("WAWebFalcoCanonicalDeviceName").__setRef(
          "WhatsappFalcoNativeTestFalcoEvent",
        ),
        mem_class: s("WAWebFalcoCanonicalMemClass").__setRef(
          "WhatsappFalcoNativeTestFalcoEvent",
        ),
        oc_version: s("WAWebFalcoCanonicalOcVersion").__setRef(
          "WhatsappFalcoNativeTestFalcoEvent",
        ),
        os_version: s("WAWebFalcoCanonicalOsVersion").__setRef(
          "WhatsappFalcoNativeTestFalcoEvent",
        ),
        platform: s("WAWebFalcoCanonicalPlatform").__setRef(
          "WhatsappFalcoNativeTestFalcoEvent",
        ),
        webc_phone_platform: s("WAWebFalcoCanonicalPlatform").__setRef(
          "WhatsappFalcoNativeTestFalcoEvent",
        ),
      };
    function d() {
      return (e || (e = n("Promise")))
        .all(
          Object.entries(c).map(function (e) {
            var t = e[0],
              n = e[1];
            return n.load().then(function (e) {
              return [t, e()];
            });
          }),
        )
        .then(function (e) {
          var t = {};
          return (
            e.forEach(function (e) {
              var n = e[0],
                r = e[1];
              t[n] = r;
            }),
            t
          );
        });
    }
    var m = o("FalcoLoggerInternal").create("whatsapp_falco_native_test", u, d),
      p = m;
    l.default = p;
  },
  98,
);
