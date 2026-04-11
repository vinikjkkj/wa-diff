__d(
  "WAWebInvocationHandler",
  [
    "WAWebBrokerProtocolInvocation",
    "WAWebBrokerProtocolResponse",
    "WAWebInvocationInterface",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {
          this.$1 = function (e, t) {
            var n = t.data,
              r = o("WAWebBrokerProtocolInvocation").unwrapInvocationPayload(n);
            if (r != null) {
              var a = r.args,
                i = r.invocationId,
                l = r.method,
                s = o("WAWebInvocationInterface").get();
              s[l].apply(s, a).then(function (t) {
                e.postMessage(
                  o("WAWebBrokerProtocolResponse").buildResponsePayload(i, t),
                );
              });
            }
          };
        }
        var t = e.prototype;
        return (
          (t.respondTo = function (t) {
            var e = this;
            (t.addEventListener("message", function (n) {
              return e.$1(t, n);
            }),
              t.start());
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
