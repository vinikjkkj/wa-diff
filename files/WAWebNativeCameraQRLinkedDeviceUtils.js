__d(
  "WAWebNativeCameraQRLinkedDeviceUtils",
  ["$InternalEnum", "WAWebAutoLogoutGating", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ NONE: -1, CONTROL: 0, TEST: 1 });
    function s() {
      if (o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()) {
        var t = window.parent.nativeCameraVariant,
          n = e.cast(t);
        return n != null ? n : u();
      }
      var r = u();
      return ((window.nativeCameraVariant = r), r);
    }
    function u() {
      return !r("gkx")("14464") || r("gkx")("26256")
        ? e.NONE
        : r("gkx")("15235")
          ? e.TEST
          : e.CONTROL;
    }
    function c() {
      return s() === e.TEST;
    }
    ((l.NativeCameraQRLinkedDeviceVariantType = e),
      (l.getNativeCameraQRLinkedDeviceVariant = s),
      (l.isNativeCameraQRLinkedDeviceTest = c));
  },
  98,
);
