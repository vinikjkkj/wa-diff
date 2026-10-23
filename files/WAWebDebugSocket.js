__d(
  "WAWebDebugSocket",
  [
    "WAComms",
    "WAWebJSHaltDetector",
    "WAWebLogoutReasonConstants",
    "WAWebSocketModel",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      (r("vulture")("ES7ZYAy4RAdX8KkRIYT68P4sr5A="),
        o("WAWebSocketModel").Socket.socket.close(!1, "debug-close"));
    }
    e.doc = "Close the web socket";
    function s() {
      (r("vulture")("wh7IF0Sw_liItUBjxgpMQ0BZ-Dw="),
        o("WAWebSocketModel").Socket.takeover());
    }
    s.doc = "Use this web client session over other active ones";
    function u(e) {
      if ((r("vulture")("MNY0tGfFUUyORMrd_J5-8Q8_XB0="), e)) {
        o("WAWebSocketModel").Socket.logout(e);
        return;
      }
      o("WAWebSocketModel").Socket.logout(
        o("WAWebLogoutReasonConstants").LogoutReason.UserInitiated,
      );
    }
    u.doc = "Log out of the web client";
    function c() {
      r("vulture")("2L9U1CjUrHiGLdsE_cLTNkcLalM=");
      var e = o("WAComms").singletonOrThrowIfUninitialized("closeSocket");
      e.closeSocketInDebugMode();
    }
    c.doc = "Take client offline";
    function d() {
      (r("vulture")("xFOiDEdqR3z3Fehvbe927E0NTto="),
        o("WAComms").socketLoopIteration());
    }
    d.doc = "Take client back online";
    function m() {
      (r("vulture")("5j4V9hwPNRnAp4Nf2shCHPsdQZg="),
        o("WAComms").closeSocketAndPreventRetry());
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
