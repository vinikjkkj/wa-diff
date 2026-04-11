__d(
  "WAWebSearchMatchResult",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(t, n) {
        if (this.constructor === e)
          throw r("err")(
            "WAWebSearchMatchResult is abstract and cannot be instantiated directly. Use a subclass instead.",
          );
        ((this.startIndex = t), (this.length = n));
      }
      var t = e.prototype;
      return (
        (t.isMatch = function () {
          return this.startIndex >= 0;
        }),
        (t.compareTo = function (t) {
          return this.startIndex !== t.startIndex
            ? this.startIndex - t.startIndex
            : t.length - this.length;
        }),
        (e.noMatch = function () {
          throw r("err")('Method "noMatch" must be implemented by subclass.');
        }),
        e
      );
    })();
    l.WAWebSearchMatchResult = e;
  },
  98,
);
