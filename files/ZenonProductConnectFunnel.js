__d(
  "ZenonProductConnectFunnel",
  ["FBLogger", "performanceNow", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        return Math.trunc((e || (e = r("performanceNow")))());
      },
      u = (function () {
        function e() {
          ((this.$6 = null),
            (this.$7 = null),
            (this.$1 = null),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = null),
            (this.$8 = new Map()),
            (this.$9 = new Map()));
        }
        var t = e.prototype;
        return (
          (t.$10 = function (t) {
            var e = this.$8.get(t);
            if (e != null) return e;
            e = {
              acceptedTs: this.$3,
              connectedTs: null,
              connectingTs: null,
              contactingTs: null,
              endCallTs: null,
              permissionsReceivedTs: this.$5,
              permissionsRequestTs: this.$4,
              ringingTs: this.$2,
              triggeredTs: this.$1,
            };
            var n = {
              cameraPermission: this.$6,
              microphonePermission: this.$7,
            };
            return (
              this.clearPreJoinTimings(),
              this.$8.set(t, e),
              this.$9.set(t, n),
              e
            );
          }),
          (t.$11 = function (t, n) {
            var e,
              o =
                t == null || (e = t.getLogIdentifiers()) == null
                  ? void 0
                  : e.clientSessionID;
            if (o == null) {
              r("FBLogger")("rtc_www").warn(
                "ProductConnectFunnel: could not record UI event due to missing signaling ID",
              );
              return;
            }
            var a = this.$10(o);
            a[n] == null && (a[n] = s());
          }),
          (t.getTimings = function (t) {
            return this.$8.get(t);
          }),
          (t.getPreJoinTimings = function () {
            return {
              acceptedTs: this.$3,
              ringingTs: this.$2,
              triggeredTs: this.$1,
            };
          }),
          (t.clearPreJoinTimings = function () {
            ((this.$3 = null),
              (this.$2 = null),
              (this.$1 = null),
              (this.$4 = null),
              (this.$5 = null),
              (this.$6 = null),
              (this.$7 = null));
          }),
          (t.setPreJoinTimings = function (t) {
            ((this.$3 = t.acceptedTs),
              (this.$2 = t.ringingTs),
              (this.$1 = t.triggeredTs));
          }),
          (t.getAnnotations = function (t) {
            return this.$9.get(t);
          }),
          (t.remove = function (t) {
            (this.clearPreJoinTimings(), this.$8.delete(t), this.$9.delete(t));
          }),
          (t.setUITriggered = function () {
            var e;
            (e = this.$1) != null || (this.$1 = s());
          }),
          (t.setUIPermissionsRequest = function () {
            var e = this;
            if (!(this.$4 != null || !navigator.permissions)) {
              this.$4 = s();
              var t = navigator.permissions;
              (r("promiseDone")(
                t.query({ name: "microphone" }).then(function (t) {
                  e.$7 = t.state;
                }),
              ),
                r("promiseDone")(
                  t.query({ name: "camera" }).then(function (t) {
                    e.$6 = t.state;
                  }),
                ));
            }
          }),
          (t.setUIPermissionsReceived = function () {
            var e;
            this.$4 != null && ((e = this.$5) != null || (this.$5 = s()));
          }),
          (t.setUIAccepted = function () {
            var e;
            (e = this.$3) != null || (this.$3 = s());
          }),
          (t.setUIConnected = function (t) {
            this.$11(t, "connectedTs");
          }),
          (t.setUIConnecting = function (t) {
            this.$11(t, "connectingTs");
          }),
          (t.setUIRinging = function () {
            var e;
            (e = this.$2) != null || (this.$2 = s());
          }),
          (t.setUIContacting = function (t) {
            this.$11(t, "contactingTs");
          }),
          (t.setUIEnded = function (t) {
            this.$11(t, "endCallTs");
          }),
          e
        );
      })(),
      c = new u();
    l.default = c;
  },
  98,
);
