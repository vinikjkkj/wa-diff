__d(
  "WAWebDebugSocket",
  [
    "WAComms",
    "WAWebJSHaltDetector",
    "WAWebLogoutReasonConstants",
    "WAWebSocketModel",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebSocketModel").Socket.socket.close(!1, "debug-close");
    }
    e.doc = "Close the web socket";
    function s() {
      o("WAWebSocketModel").Socket.takeover();
    }
    s.doc = "Use this web client session over other active ones";
    function u(e) {
      if (e) {
        o("WAWebSocketModel").Socket.logout(e);
        return;
      }
      o("WAWebSocketModel").Socket.logout(
        o("WAWebLogoutReasonConstants").LogoutReason.UserInitiated,
      );
    }
    u.doc = "Log out of the web client";
    function c() {
      var e = o("WAComms").singletonOrThrowIfUninitialized("closeSocket");
      e.closeSocketInDebugMode();
    }
    c.doc = "Take client offline";
    function d() {
      o("WAComms").socketLoopIteration();
    }
    d.doc = "Take client back online";
    function m() {
      o("WAComms").closeSocketAndPreventRetry();
    }
    m.doc = "Closes the socket and prevents it from reopening";
    var p = {
      Socket: o("WAWebSocketModel").Socket,
      disconnectSocket: e,
      logout: u,
      takeover: s,
      closeSocket: c,
      reopenSocket: d,
      jsHaltDetector: o("WAWebJSHaltDetector").jsHaltDetector,
      closeSocketAndPreventRetry: m,
    };
    l.default = p;
  },
  98,
);
