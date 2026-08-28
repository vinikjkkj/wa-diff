__d(
  "waitForZenonMqttConnected",
  ["Promise", "ZenonUserActionLogger", "err", "getZenonMqttChannel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 15e3;
    function u() {
      return new (e || (e = n("Promise")))(function (e, t) {
        var n = r("getZenonMqttChannel")();
        if (n.getConnectionState() === "Connected") e();
        else {
          (r("ZenonUserActionLogger").logCheckpoint({
            checkpoint: "MQTT not connected, deferring sending MWS message",
          }),
            r("ZenonUserActionLogger").startTimer("MQTT not connected"));
          var o = {
              onMQTTStateChanged: function (i) {
                i === "Connected" &&
                  (r("ZenonUserActionLogger").stopTimer({
                    checkpointName:
                      "MQTT connected after deferring sending MWS message",
                    timerName: "MQTT not connected",
                  }),
                  n.unsubscribeChannelEvents(o),
                  window.clearTimeout(a),
                  e());
              },
            },
            a = window.setTimeout(function () {
              (n.unsubscribeChannelEvents(o),
                r("ZenonUserActionLogger").stopTimer({
                  checkpointName:
                    "MQTT never connected. Current status: " +
                    n.getConnectionState(),
                  timerName: "MQTT not connected",
                }),
                t(r("err")("timeout")));
            }, s);
          n.subscribeChannelEvents(o);
        }
      });
    }
    l.default = u;
  },
  98,
);
