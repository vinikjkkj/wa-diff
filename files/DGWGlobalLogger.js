__d(
  "DGWGlobalLogger",
  ["gkx", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          var e = this;
          ((this.tabID = r("uuidv4")()),
            (this.isTabClosed = !1),
            (this.otherTabs = new Map()),
            (this.thisTab = { realtime: 0, lightspeed: 0 }),
            (this.broadcastChannel = this.$1("DGWGlobalLogger")),
            (this.broadcastChannel.onmessage = function (t) {
              var n = JSON.parse(String(t.data)),
                r = !e.otherTabs.has(n.key);
              n.event === "DELETE"
                ? e.otherTabs.delete(n.key)
                : n.event === "UPDATE" &&
                  n.value != null &&
                  (e.otherTabs.set(n.key, n.value), r && e.$2());
            }));
        }
        var t = e.prototype;
        return (
          (t.$1 = function (t) {
            return window.BroadcastChannel != null
              ? new BroadcastChannel(t)
              : { onmessage: function (t) {}, postMessage: function (t) {} };
          }),
          (t.streamRequested = function (t) {
            switch (t) {
              case "realtime":
                this.thisTab.realtime++;
                break;
              case "lightspeed":
                this.thisTab.lightspeed++;
                break;
            }
            this.$2();
          }),
          (t.streamClosed = function (t) {
            switch (t) {
              case "realtime":
                this.thisTab.realtime = Math.max(0, this.thisTab.realtime - 1);
                break;
              case "lightspeed":
                this.thisTab.lightspeed = Math.max(
                  0,
                  this.thisTab.lightspeed - 1,
                );
                break;
            }
            this.$2();
          }),
          (t.tabClosed = function () {
            if (!this.isTabClosed) {
              this.isTabClosed = !0;
              var e = { key: this.tabID, event: "DELETE" };
              this.broadcastChannel.postMessage(JSON.stringify(e));
            }
          }),
          (t.getGlobalState = function () {
            var e = {
              realtime: this.thisTab.realtime,
              lightspeed: this.thisTab.lightspeed,
            };
            return (
              this.otherTabs.forEach(function (t) {
                ((e.realtime += t.realtime), (e.lightspeed += t.lightspeed));
              }),
              e
            );
          }),
          (t.$2 = function () {
            var e = { key: this.tabID, event: "UPDATE", value: this.thisTab };
            this.broadcastChannel.postMessage(JSON.stringify(e));
          }),
          e
        );
      })(),
      s = r("gkx")("4337")
        ? new e()
        : {
            streamRequested: function () {},
            streamClosed: function () {},
            tabClosed: function () {},
            getGlobalState: function () {
              return { realtime: -1, lightspeed: -1 };
            },
          },
      u = function () {
        return s;
      };
    l.getInstance = u;
  },
  98,
);
