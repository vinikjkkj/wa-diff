__d(
  "WAWebPromiseQueue",
  ["WALogger", "WAPromiseQueue"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n(e) {
          return t.call(this, e) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.wait = function () {
            return t.prototype.wait.call(this);
          }),
          (r.waitUntilResolved = async function (r) {
            var n = this;
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
            var a = t.prototype.wait.call(this);
            return new Promise(async function (e, o) {
              try {
                (await a,
                  a !== t.prototype.wait.call(n) &&
                    (await n.waitUntilResolved(r + 1)),
                  e());
              } catch (e) {
                o(e);
              }
            });
          }),
          n
        );
      })(o("WAPromiseQueue").PromiseQueue);
    l.PromiseQueue = s;
  },
  98,
);
