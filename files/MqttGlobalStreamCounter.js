__d(
  "MqttGlobalStreamCounter",
  ["CrossWindowEventEmitter", "MqttEnv", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          var e = this;
          ((this.isTabClosed = !1),
            (this.otherTabs = new Map()),
            (this.thisTab = { totalConnectionStreams: 0 }),
            (this.broadcastChannel = new (r("CrossWindowEventEmitter"))(
              "MqttGlobalStreamCounter",
            )),
            this.broadcastChannel.addListener("count-updated", function (t) {
              var n = JSON.parse(String(t)),
                r = !1;
              (e.otherTabs.has(n.key) || (r = !0),
                n.event === "DELETE"
                  ? e.otherTabs.delete(n.key)
                  : n.event === "UPDATE" &&
                    n.value != null &&
                    (e.otherTabs.set(n.key, n.value), r && e.$1()));
            }),
            (this.tabID = r("uuidv4")()));
        }
        var t = e.prototype;
        return (
          (t.streamRequested = function () {
            (this.thisTab.totalConnectionStreams++, this.$1());
          }),
          (t.streamClosed = function () {
            this.thisTab.totalConnectionStreams > 0 &&
              (this.thisTab.totalConnectionStreams--, this.$1());
          }),
          (t.tabClosed = function () {
            if (!this.isTabClosed) {
              this.isTabClosed = !0;
              var e = { key: this.tabID, event: "DELETE" };
              this.broadcastChannel.emitRemote(
                "count-updated",
                JSON.stringify(e),
              );
            }
          }),
          (t.getGlobalState = function () {
            var e = {
              totalConnectionStreams: this.thisTab.totalConnectionStreams,
            };
            return (
              this.otherTabs.forEach(function (t) {
                e.totalConnectionStreams += t.totalConnectionStreams;
              }),
              e
            );
          }),
          (t.$1 = function () {
            var e = { key: this.tabID, event: "UPDATE", value: this.thisTab };
            this.broadcastChannel.emitRemote(
              "count-updated",
              JSON.stringify(e),
            );
          }),
          (t.isEnabled = function () {
            return !0;
          }),
          e
        );
      })(),
      s = o("MqttEnv").Env.genGk(
        o("MqttEnv").MqttGkNames.mqttweb_global_connection_counter,
      )
        ? new e()
        : {
            streamRequested: function () {},
            streamClosed: function () {},
            tabClosed: function () {},
            getGlobalState: function () {
              return { totalConnectionStreams: -1 };
            },
            isEnabled: function () {
              return !1;
            },
          },
      u = function () {
        return s;
      };
    l.getInstance = u;
  },
  98,
);
