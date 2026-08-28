__d(
  "MediaUploadFBNetworkProbe",
  ["MediaUploadNetworkStatus", "Network"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.probe = function () {
          return r("Network").isOnline()
            ? r("MediaUploadNetworkStatus").CONNECTED
            : r("MediaUploadNetworkStatus").DISCONNECTED;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
