__d(
  "VirtualMessageChannel",
  ["invariant", "Promise", "SimpleHook", "nullthrows", "promiseDone"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function () {
        function t(e) {
          (e === void 0 && (e = !1),
            (this.$2 = new (o("SimpleHook").SimpleHook)()),
            (this.onmessage = null),
            (this.onmessageerror = null),
            (this.$3 = e));
        }
        var a = t.prototype;
        return (
          (a.setRemotePort = function (t) {
            this.$1 = t;
          }),
          (a.addEventListener = function (t, n, r) {
            if (
              (((t === "message" || t === "error") && r == null) ||
                s(0, 55320, t),
              t === "message")
            )
              if (typeof n == "function") this.$2.add(n);
              else {
                var e = n.handleEvent.bind(n);
                (this.$2.add(e), (n.__handler = e));
              }
          }),
          (a.removeEventListener = function (t, n, r) {
            if (typeof n == "function") this.$2.remove(n);
            else {
              var e = n.__handler;
              this.$2.remove(e);
            }
          }),
          (a.postMessage = function (o, a) {
            var t = this,
              i = function () {
                var e = r("nullthrows")(
                  t.$1,
                  "By now remote port must have value!",
                );
                e.$2.call({ data: o, ports: a });
              };
            this.$3
              ? i()
              : r("promiseDone")((e || (e = n("Promise"))).resolve(), i);
          }),
          (a.start = function () {}),
          (a.close = function () {}),
          t
        );
      })(),
      c = function (t, n) {
        ((this.port1 = new u(t)),
          (this.port2 = new u(n)),
          this.port1.setRemotePort(this.port2),
          this.port2.setRemotePort(this.port1));
      };
    ((l.VirtualMessagePort = u), (l.VirtualMessageChannel = c));
  },
  98,
);
