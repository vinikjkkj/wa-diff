__d(
  "KeyframesAsyncSession",
  ["Promise", "promiseDone", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("FBKeyframesLoggedSession").__setRef(
        "KeyframesAsyncSession",
      ),
      u = (function () {
        function t(e) {
          var n = this;
          ((this.$3 = function () {
            var e = t.timestamp();
            r("promiseDone")(n.$1, function (t) {
              return t.error(e);
            });
          }),
            (this.$1 = s.load().then(function (t) {
              return new t(e);
            })),
            (this.$2 = this.$1.then(function (e) {
              return e.getPerformanceLogIfEnabled();
            })));
        }
        t.timestamp = function () {
          return { value: Date.now() };
        };
        var o = t.prototype;
        return (
          (o.scheduleDecode = function (a, i) {
            var o = a.then(function () {
                return t.timestamp();
              }),
              l = a
                .then(function () {
                  return i;
                })
                .then(function () {
                  return t.timestamp();
                }),
              s = i.then(function (e) {
                return e &&
                  e.pluginsLoader != null &&
                  e.pluginsLoader.getPluginTable instanceof Function
                  ? e.pluginsLoader.getPluginTable()
                  : [];
              }),
              u = (e || (e = n("Promise")))
                .all([this.$1, o])
                .then(function (t) {
                  var r = t[0],
                    o = t[1],
                    a = r.startDecode(o);
                  return (e || (e = n("Promise"))).all([a, l, s]);
                });
            r("promiseDone")(
              u,
              function (e) {
                var t = e[0],
                  n = e[1],
                  r = e[2];
                return t(n, r);
              },
              this.$3,
            );
          }),
          (o.maybeGetPerformanceLog = function () {
            return this.$2;
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
