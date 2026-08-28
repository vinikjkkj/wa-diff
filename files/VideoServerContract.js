__d(
  "VideoServerContract",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.startRequest = e), (this.receiveRequest = t));
      }
      var t = e.prototype;
      return (
        (t.getServerAssetID = function (t) {
          var e = t.serverAssetID;
          return e != null ? String(e) : null;
        }),
        (t.applyStartConfig = function (t) {
          this.startRequest.configuration = t;
        }),
        (t.applyReceiveConfig = function (t) {
          this.receiveRequest.configuration = t;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
