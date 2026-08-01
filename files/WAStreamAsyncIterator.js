__d(
  "WAStreamAsyncIterator",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return l.apply(this, arguments);
    }
    function l() {
      return (
        (l = babelHelpers.wrapAsyncGenerator(function* (e) {
          var t = e.getReader();
          try {
            for (;;) {
              var n = yield babelHelpers.awaitAsyncGenerator(t.read()),
                r = n.done,
                o = n.value;
              if (r) return;
              yield o;
            }
          } finally {
            t.releaseLock();
          }
        })),
        l.apply(this, arguments)
      );
    }
    i.streamAsyncIterator = e;
  },
  66,
);
