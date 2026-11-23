__d(
  "pipeline-chain",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.pipe = function (n) {
          var t = this.$1,
            r = this.$2,
            o = function (r, o) {
              var e = t(r, o);
              return e instanceof Promise
                ? e.then(function (e) {
                    return n(e, o);
                  })
                : n(e, o);
            };
          return new e(o, r);
        }),
        (t.run = async function (t) {
          var e = await this.$1(t, this.$2);
          return e;
        }),
        e
      );
    })();
    function l(t, n) {
      return new e(t, n);
    }
    function s(e) {
      return e;
    }
    ((i.Pipeline = e), (i.pipeline = l), (i.pipeNoop = s));
  },
  66,
);
