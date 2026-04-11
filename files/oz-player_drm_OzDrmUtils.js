__d(
  "oz-player/drm/OzDrmUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        return Uint8Array.from(window.atob(t), function (e) {
          return e.charCodeAt(0);
        });
      },
      l = function (t) {
        return window.btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
      };
    ((i.base64ToUint8Array = e), (i.arrayBufferToBase64 = l));
  },
  66,
);
