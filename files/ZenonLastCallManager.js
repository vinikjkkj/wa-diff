__d(
  "ZenonLastCallManager",
  ["ZenonCallInfoManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.save = function (t) {
          var e = this.getCallInfo(),
            n = e.peerID,
            r = e.signalingID;
          t.storeCallIdentifiers(n, r, this);
        }),
        (n.setConferenceName = function (t) {
          t != null && (this.getCallInfo().conferenceName = t);
        }),
        (n.toJSONString = function () {
          return JSON.stringify(this.getCallInfo());
        }),
        t
      );
    })(r("ZenonCallInfoManager"));
    l.default = e;
  },
  98,
);
