__d(
  "stream-utils",
  ["stream-helpers"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
      t &&
        t.constructor === o("stream-helpers").AssertionError &&
        setTimeout(function () {
          throw t;
        }, 0);
    };
    l.rethrowAssertionErrorRejection = e;
  },
  98,
);
