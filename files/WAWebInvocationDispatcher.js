__d(
  "WAWebInvocationDispatcher",
  [
    "invariant",
    "Promise",
    "WANullthrows",
    "WAWebBrokerProtocolInvocation",
    "WAWebBrokerProtocolResponse",
    "WAWebInvocationId",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = (function () {
        function t() {
          var e = this;
          ((this.$2 = new Map()),
            (this.$3 = function (t) {
              var n = o("WAWebBrokerProtocolResponse").unwrapResponsePayload(
                t.data,
              );
              if (n != null) {
                var a = n.invocationId,
                  i = n.result;
                if (e.$2.has(a)) {
                  var l = r("WANullthrows")(e.$2.get(a)),
                    s = l.resolve;
                  (s(i), e.$2.delete(a));
                }
              }
            }));
        }
        var a = t.prototype;
        return (
          (a.setConnectionManager = function (t) {
            var e = this;
            ((this.$1 = t),
              t.waitForConnection().then(function () {
                var n = r("WANullthrows")(
                  t.getPort(),
                  "Port obtained from ConnectionManager after connection",
                );
                (n.addEventListener("message", e.$3), n.start());
              }));
          }),
          (a.invoke = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a) {
                var i = this;
                (this.$1 || s(0, 56298),
                  yield this.$1.waitForConnection(),
                  this.$1 || s(0, 56298));
                var l = r("WANullthrows")(
                    this.$1.getPort(),
                    "Port obtained from ConnectionManager after connection",
                  ),
                  u = o("WAWebInvocationId").genInvocationId();
                return (
                  l.postMessage(
                    o("WAWebBrokerProtocolInvocation").buildInvocationPayload({
                      invocationId: u,
                      method: t,
                      args: a,
                    }),
                  ),
                  new (e || (e = n("Promise")))(function (e, t) {
                    i.$2.set(u, { resolve: e, reject: t });
                  })
                );
              },
            );
            function a(e, n) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          t
        );
      })(),
      c = new u();
    l.default = c;
  },
  98,
);
