__d(
  "WAWebInvocationDispatcher",
  [
    "invariant",
    "WANullthrows",
    "WAWebBrokerProtocolInvocation",
    "WAWebBrokerProtocolResponse",
    "WAWebInvocationId",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
        function e() {
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
        var t = e.prototype;
        return (
          (t.setConnectionManager = function (t) {
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
          (t.invoke = async function (t, n) {
            var e = this;
            (this.$1 || s(0, 56298),
              await this.$1.waitForConnection(),
              this.$1 || s(0, 56298));
            var a = r("WANullthrows")(
                this.$1.getPort(),
                "Port obtained from ConnectionManager after connection",
              ),
              i = o("WAWebInvocationId").genInvocationId();
            return (
              a.postMessage(
                o("WAWebBrokerProtocolInvocation").buildInvocationPayload({
                  invocationId: i,
                  method: t,
                  args: n,
                }),
              ),
              new Promise(function (t, n) {
                e.$2.set(i, { resolve: t, reject: n });
              })
            );
          }),
          e
        );
      })(),
      u = new e();
    l.default = u;
  },
  98,
);
