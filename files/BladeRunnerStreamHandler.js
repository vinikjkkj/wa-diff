__d(
  "BladeRunnerStreamHandler",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var l = (function () {
      function e(e, t, n, r, o, a) {
        ((this.$1 = e),
          (this.$2 = t),
          (this.$3 = n || function (e) {}),
          (this.$4 = r || function (e) {}),
          (this.$5 = o || function (e) {}),
          (this.$6 = a));
      }
      var t = e.prototype;
      return (
        (t.onData = function (t) {
          var e = this.$1,
            n = this.$2;
          if (e != null) e(t.decodeData());
          else if (n != null) {
            for (
              var r = atob(t.rawData()), o = new Uint8Array(r.length), a = 0;
              a < r.length;
              a++
            )
              o[a] = r.charCodeAt(a);
            n(o.buffer);
          }
        }),
        (t.onStatusUpdate = function (t) {
          this.$3(t);
        }),
        (t.onLog = function (t) {
          this.$4(t);
        }),
        (t.onBatch = function (t) {
          this.$5(t);
        }),
        (t.onClientCancel = function () {}),
        (t.getUpdatedRequestBody = function () {
          if (this.$6 != null) return this.$6();
        }),
        e
      );
    })();
    i.default = l;
  },
  66,
);
