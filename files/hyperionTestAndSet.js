__d(
  "hyperionTestAndSet",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e() {
        this.value = !1;
      }
      var t = e.prototype;
      return (
        (t.testAndSet = function () {
          var e = this.value;
          return ((this.value = !0), e);
        }),
        e
      );
    })();
    i.TestAndSet = e;
  },
  66,
);
