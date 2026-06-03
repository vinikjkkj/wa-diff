__d(
  "WAWebPromiseQueue",
  ["Promise", "WALogger", "WAPromiseQueue", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function r(e) {
          return t.call(this, e) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.wait = function () {
            return t.prototype.wait.call(this);
          }),
          (a.waitUntilResolved = (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (r) {
                var a = this;
                if ((r === void 0 && (r = 0), r > 9)) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "PromiseQueue: wait called more than 10 times",
                        ])),
                    )
                    .sendLogs("promise_queue_long_wait_time");
                  return;
                }
                var i = t.prototype.wait.call(this);
                return new (s || (s = n("Promise")))(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e, n) {
                        try {
                          (yield i,
                            i !== t.prototype.wait.call(a) &&
                              (yield a.waitUntilResolved(r + 1)),
                            e());
                        } catch (e) {
                          n(e);
                        }
                      },
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
              },
            );
            function a(e) {
              return r.apply(this, arguments);
            }
            return a;
          })()),
          r
        );
      })(o("WAPromiseQueue").PromiseQueue);
    l.PromiseQueue = u;
  },
  98,
);
