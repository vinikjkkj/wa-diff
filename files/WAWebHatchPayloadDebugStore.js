__d(
  "WAWebHatchPayloadDebugStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = []),
          (this.$2 = []),
          (this.$3 = []),
          (this.$4 = 0),
          (this.$5 = new Set()));
      }
      var t = e.prototype;
      return (
        (t.record = function (t) {
          var e = t.action;
          if (e.type === "req") {
            if (this.$5.has(e.requestId)) return;
            this.$5.add(e.requestId);
          }
          var n = l(t.rawBytes),
            r = n.raw,
            o = n.rawByteLength;
          (this.$1.push({
            id: String(this.$4++),
            capturedAtMs: Date.now(),
            direction: t.direction,
            action: e,
            raw: r,
            rawByteLength: o,
          }),
            this.$6());
        }),
        (t.getRecords = function () {
          return this.$2;
        }),
        (t.clear = function () {
          ((this.$1 = []), this.$5.clear(), this.$6());
        }),
        (t.subscribe = function (t) {
          var e = this;
          return (
            this.$3.push(t),
            function () {
              e.$3 = e.$3.filter(function (e) {
                return e !== t;
              });
            }
          );
        }),
        (t.__resetForTesting = function () {
          ((this.$1 = []),
            (this.$2 = []),
            (this.$3 = []),
            (this.$4 = 0),
            (this.$5 = new Set()));
        }),
        (t.$6 = function () {
          this.$2 = [].concat(this.$1);
          for (var e of [].concat(this.$3)) e();
        }),
        e
      );
    })();
    function l(e) {
      return e == null || e.byteLength === 0
        ? { raw: null, rawByteLength: null }
        : {
            raw: new TextDecoder("utf-8").decode(e),
            rawByteLength: e.byteLength,
          };
    }
    var s = new e(),
      u = s;
    i.default = u;
  },
  66,
);
