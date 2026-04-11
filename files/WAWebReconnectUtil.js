__d(
  "WAWebReconnectUtil",
  ["WAWebSocketModel", "WAWebStreamModel"],
  function (t, n, r, o, a, i, l) {
    var e = function () {
        var e = this;
        ((this.isReconnecting = !1),
          (this.reconnectIfDisconnected = function () {
            !e.isReconnecting &&
              o("WAWebStreamModel").Stream.displayInfo ===
                o("WAWebStreamModel").StreamInfo.OFFLINE &&
              ((e.isReconnecting = !0),
              o("WAWebSocketModel").Socket.summary(),
              self.setTimeout(function () {
                return (e.isReconnecting = !1);
              }, 3e3));
          }));
      },
      s = new e().reconnectIfDisconnected;
    l.reconnect = s;
  },
  98,
);
