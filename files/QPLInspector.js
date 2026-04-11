__d(
  "QPLInspector",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
        function e() {
          ((this.$1 = []), (this.$2 = {}));
        }
        var t = e.prototype;
        return (
          (t.appendLog = function (t) {
            for (var e in this.$2)
              !Object.prototype.hasOwnProperty.call(this.$2, e) ||
                t.marker_id !== e ||
                this.$2[t.marker_id].forEach(function (e) {
                  return e(t);
                });
            this.$1.push(t);
          }),
          (t.dumpLogs = function () {
            return this.$1;
          }),
          (t.addListener = function (t, n) {
            (Object.prototype.hasOwnProperty.call(this.$2, t) ||
              (this.$2[t] = []),
              this.$2[t].push(n),
              this.$1.forEach(function (e) {
                e.marker_id === t && n(e);
              }));
          }),
          (t.removeListener = function (t, n) {
            var e = this.$2[t].indexOf(n);
            e !== -1 && this.$2[t].splice(e, 1);
          }),
          e
        );
      })(),
      l = new e();
    i.default = l;
  },
  66,
);
