__d(
  "WAWebDebugSocket",
  [
    "WAComms",
    "WALogger",
    "WAWebJSHaltDetector",
    "WAWebLogoutReasonConstants",
    "WAWebSocketModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      o("WAWebSocketModel").Socket.socket.close(!1, "debug-close");
    }
    u.doc = "Close the web socket";
    function c() {
      o("WAWebSocketModel").Socket.takeover();
    }
    c.doc = "Use this web client session over other active ones";
    function d(e) {
      if (e) {
        o("WAWebSocketModel").Socket.logout(e);
        return;
      }
      o("WAWebSocketModel").Socket.logout(
        o("WAWebLogoutReasonConstants").LogoutReason.UserInitiated,
      );
    }
    d.doc = "Log out of the web client";
    function m() {
      var t = o("WAComms").singletonOrThrowIfUninitialized("closeSocket"),
        n = t.socket;
      n &&
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "closeSocket called",
            ])),
        ),
        n.setOnClose(function () {
          var e = t.socketId;
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] Socket ",
                " closed",
              ])),
            e,
          ),
            t.activePing &&
              e === t.activePing.socketId &&
              (t.activePing.handler.resolve(), (t.activePing = null)),
            t
              .filterPending(function (t) {
                return t.attachedToSocketId === e;
              })
              .forEach(function (e) {
                return void t.removeHandler(e);
              }),
            e === t.socketId &&
              ((t.socketId = o("WAComms").DEFAULT_SOCKET_ID),
              (t.socket = null)));
        }),
        n.close());
    }
    m.doc = "Take client offline";
    function p() {
      o("WAComms").socketLoopIteration();
    }
    p.doc = "Take client back online";
    function _() {
      o("WAComms").closeSocketAndPreventRetry();
    }
    _.doc = "Closes the socket and prevents it from reopening";
    var f = {
      Socket: o("WAWebSocketModel").Socket,
      disconnectSocket: u,
      logout: d,
      takeover: c,
      closeSocket: m,
      reopenSocket: p,
      jsHaltDetector: o("WAWebJSHaltDetector").jsHaltDetector,
      closeSocketAndPreventRetry: _,
    };
    l.default = f;
  },
  98,
);
