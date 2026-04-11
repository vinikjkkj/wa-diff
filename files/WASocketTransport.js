__d(
  "WASocketTransport",
  ["Promise", "WABinary", "WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 1,
      d = (function () {
        function t(t) {
          var n = this;
          ((this.$2 = !1),
            (this.onData = null),
            (this.onClose = null),
            (this.onError = null),
            (this.dataToSend = new (o("WABinary").Binary)()),
            (this.$3 = function (t) {
              if (!n.$2) {
                var r = new Uint8Array(t.data);
                n.onData
                  ? n.onData(r)
                  : o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "WebSocket #",
                          " dropped ",
                          " bytes",
                        ])),
                      n.id,
                      r.length,
                    );
              }
            }),
            (this.$4 = function (e) {
              n.$2 || n.$6(e);
            }),
            (this.$5 = function (e) {
              if (!n.$2) {
                var t = n.onError;
                t && t(String(e));
              }
            }));
          var r = c++;
          ((this.id = r),
            (this.$1 = t),
            (t.onmessage = this.$3),
            (t.onclose = this.$4),
            (t.onerror = this.$5));
        }
        var n = t.prototype;
        return (
          (n.close = function () {
            this.$2 || (this.$1.close(), this.$6());
          }),
          (n.requestSend = function () {
            if (this.$2) {
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WebSocket #",
                    " not opened",
                  ])),
                this.id,
              );
              return;
            }
            this.dataToSend.size() &&
              this.$1.send(this.dataToSend.readBuffer());
          }),
          (n.$6 = function (t) {
            ((this.$2 = !0), this.onClose && this.onClose(t));
          }),
          t
        );
      })();
    function m(e, t, o, a) {
      var i = new WebSocket(e);
      return (
        (i.binaryType = "arraybuffer"),
        new (u || (u = n("Promise")))(function (e, n) {
          ((i.onopen = function () {
            (a == null || a(), e());
          }),
            (i.onclose = function (e) {
              (t == null || t(e),
                o == null || o(null, e),
                n(
                  r("err")(
                    "WebSocket closed after microtask delay}: " +
                      e.reason +
                      " " +
                      e.code,
                  ),
                ));
            }));
        }).then(function () {
          var e = new d(i);
          return (
            o != null &&
              (e.onClose = function (t) {
                t != null && o(e.id, t);
              }),
            e
          );
        })
      );
    }
    ((l.WebSocketTransport = d), (l.openWebSocket = m));
  },
  98,
);
