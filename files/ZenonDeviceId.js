__d(
  "ZenonDeviceId",
  ["ChannelClientID", "WebStorage", "ZenonAppProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "chatd-deviceid";
    function u() {
      return o("ChannelClientID").getID();
    }
    function c(t) {
      (e || (e = r("WebStorage"))).setAllowlistedKeyToLocalStorage(
        e.getLocalStorage(),
        s,
        t,
      );
    }
    function d() {
      return (e || (e = r("WebStorage"))).getAllowlistedKeyFromLocalStorage(s);
    }
    function m() {
      var e;
      return (e = d()) != null ? e : u();
    }
    function p() {
      return o("ZenonAppProvider").isInstagramApp() ? u() : m();
    }
    ((l.getZenonDeviceId = u),
      (l.setZenonLocalStorageDeviceId = c),
      (l.getZenonLocalStorageDeviceId = d),
      (l.getZenonLocalStorageDeviceIdWithFallback = m),
      (l.getSignalingDeviceId = p));
  },
  98,
);
