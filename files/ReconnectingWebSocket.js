__d(
  "ReconnectingWebSocket",
  ["invariant", "EventEmitter"],
  function (t, n, r, o, a, i, l, s) {
    var e = 1e3,
      u = {
        debug: !1,
        automaticOpen: !0,
        reconnectInterval: 1e3,
        maxReconnectInterval: 3e4,
        reconnectDecay: 1.5,
        timeoutInterval: 2e3,
        maxReconnectAttempts: null,
        binaryType: "blob",
      },
      c = (function (t) {
        function n(n, r, o) {
          var a, i, l, c, d, m, p, _, f;
          return (
            r === void 0 && (r = []),
            o === void 0 && (o = u),
            (f = t.call(this) || this),
            (f.reconnectAttempts = 0),
            (f.readyState = WebSocket.CONNECTING),
            (f.protocol = null),
            (f.$ReconnectingWebSocket$p_2 = !1),
            (f.$ReconnectingWebSocket$p_3 = !1),
            (f.$ReconnectingWebSocket$p_4 = []),
            (f.send = function (e) {
              f.$ReconnectingWebSocket$p_1 || s(0, 21010);
              var t = f.$ReconnectingWebSocket$p_1;
              return (f.$ReconnectingWebSocket$p_5() && f.url, t.send(e));
            }),
            (f.close = function (t, n) {
              (t === void 0 && (t = e),
                (f.$ReconnectingWebSocket$p_2 = !0),
                f.$ReconnectingWebSocket$p_1 &&
                  f.$ReconnectingWebSocket$p_1.close(t, n));
            }),
            (f.refresh = function () {
              f.$ReconnectingWebSocket$p_1 &&
                f.$ReconnectingWebSocket$p_1.close();
            }),
            (f.onopen = function () {}),
            (f.onclose = function () {}),
            (f.onconnecting = function () {}),
            (f.onmessage = function () {}),
            (f.onerror = function () {}),
            (f.debug = (a = o.debug) != null ? a : u.debug),
            (f.automaticOpen =
              (i = o.automaticOpen) != null ? i : u.automaticOpen),
            (f.reconnectInterval =
              (l = o.reconnectInterval) != null ? l : u.reconnectInterval),
            (f.maxReconnectInterval =
              (c = o.maxReconnectInterval) != null
                ? c
                : u.maxReconnectInterval),
            (f.reconnectDecay =
              (d = o.reconnectDecay) != null ? d : u.reconnectDecay),
            (f.timeoutInterval =
              (m = o.timeoutInterval) != null ? m : u.timeoutInterval),
            (f.maxReconnectAttempts =
              (p = o.maxReconnectAttempts) != null
                ? p
                : u.maxReconnectAttempts),
            (f.binaryType = (_ = o.binaryType) != null ? _ : u.binaryType),
            (f.$ReconnectingWebSocket$p_4 = r),
            (f.url = n),
            f.addListener("open", function () {
              var e;
              return (e = f).onopen.apply(e, arguments);
            }),
            f.addListener("close", function () {
              var e;
              return (e = f).onclose.apply(e, arguments);
            }),
            f.addListener("connecting", function () {
              var e;
              return (e = f).onconnecting.apply(e, arguments);
            }),
            f.addListener("message", function () {
              var e;
              return (e = f).onmessage.apply(e, arguments);
            }),
            f.addListener("error", function () {
              var e;
              return (e = f).onerror.apply(e, arguments);
            }),
            f.automaticOpen === !0 && f.open(!1),
            f
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.generateEvent = function (t, n) {
            n === void 0 && (n = {});
            var e = document.createEvent("CustomEvent");
            return (e.initCustomEvent(t, !1, !1, n), [e]);
          }),
          (r.$ReconnectingWebSocket$p_5 = function () {
            return this.debug || n.debugAll;
          }),
          (r.open = function (t) {
            var e = this,
              n = t;
            if (
              ((this.$ReconnectingWebSocket$p_1 = new WebSocket(
                this.url,
                this.$ReconnectingWebSocket$p_4,
              )),
              (this.$ReconnectingWebSocket$p_1.binaryType = this.binaryType),
              n)
            ) {
              if (
                this.maxReconnectAttempts != null &&
                this.reconnectAttempts > this.maxReconnectAttempts
              )
                return;
            } else
              (this.emit.apply(
                this,
                ["connecting"].concat(this.generateEvent("connecting")),
              ),
                (this.reconnectAttempts = 0));
            this.$ReconnectingWebSocket$p_5() && this.url;
            var r = this.$ReconnectingWebSocket$p_1,
              o = window.setTimeout(function () {
                (e.$ReconnectingWebSocket$p_5() && e.url,
                  (e.$ReconnectingWebSocket$p_3 = !0),
                  r.close(),
                  (e.$ReconnectingWebSocket$p_3 = !1));
              }, this.timeoutInterval);
            ((this.$ReconnectingWebSocket$p_1.onopen = function () {
              var t;
              if ((window.clearTimeout(o), !!e.$ReconnectingWebSocket$p_1)) {
                (e.$ReconnectingWebSocket$p_5() && e.url,
                  (e.protocol =
                    (t = e.$ReconnectingWebSocket$p_1) == null
                      ? void 0
                      : t.protocol),
                  (e.readyState = WebSocket.OPEN),
                  (e.reconnectAttempts = 0));
                var r = e.generateEvent("open", { isReconnect: n });
                ((n = !1), e.emit.apply(e, ["open"].concat(r)));
              }
            }),
              (this.$ReconnectingWebSocket$p_1.onclose = function (t) {
                if (
                  (window.clearTimeout(o),
                  (e.$ReconnectingWebSocket$p_1 = null),
                  e.$ReconnectingWebSocket$p_2)
                )
                  ((e.readyState = WebSocket.CLOSED),
                    e.emit.apply(
                      e,
                      ["close"].concat(
                        e.generateEvent("close", { code: t.code }),
                      ),
                    ));
                else {
                  ((e.readyState = WebSocket.CONNECTING),
                    e.emit.apply(
                      e,
                      ["connecting"].concat(e.generateEvent("connecting")),
                    ),
                    !n &&
                      !e.$ReconnectingWebSocket$p_3 &&
                      (e.$ReconnectingWebSocket$p_5() && e.url,
                      e.emit.apply(
                        e,
                        ["close"].concat(
                          e.generateEvent("close", { code: t.code }),
                        ),
                      )));
                  var r =
                    e.reconnectInterval *
                    Math.pow(e.reconnectDecay, e.reconnectAttempts);
                  window.setTimeout(
                    function () {
                      ((e.reconnectAttempts += 1), e.open(!0));
                    },
                    r > e.maxReconnectInterval ? e.maxReconnectInterval : r,
                  );
                }
              }),
              (this.$ReconnectingWebSocket$p_1.onmessage = function (t) {
                e.$ReconnectingWebSocket$p_5() && (e.url, t.data);
                var n = e.generateEvent("message");
                ((n[0].data = t.data), e.emit.apply(e, ["message"].concat(n)));
              }),
              (this.$ReconnectingWebSocket$p_1.onerror = function (t) {
                (e.$ReconnectingWebSocket$p_5() && e.url,
                  e.emit.apply(e, ["error"].concat(e.generateEvent("error"))));
              }));
          }),
          n
        );
      })(r("EventEmitter"));
    ((c.debugAll = !1),
      (c.CONNECTING = WebSocket.CONNECTING),
      (c.OPEN = WebSocket.OPEN),
      (c.CLOSING = WebSocket.CLOSING),
      (c.CLOSED = WebSocket.CLOSED),
      (l.default = c));
  },
  98,
);
