__d(
  "AdsDispatchCycle",
  ["invariant", "AdsDataAtomInstrumentation"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u =
        ((e = window.performance) == null ? void 0 : e.now) != null
          ? function () {
              return window.performance.now();
            }
          : function () {
              return Date.now();
            },
      c = Object.freeze({
        PENDING: "PENDING",
        STARTED: "STARTED",
        COMPLETE: "COMPLETE",
      }),
      d = (function () {
        function e(e, t, n, r) {
          var a = this;
          ((this.$8 = null),
            (this.$9 = []),
            (this.$1 = []),
            (this.$2 = {}),
            (this.$5 = {}),
            (this.$3 = r),
            (this.$4 = n));
          var i = o("AdsDataAtomInstrumentation").onMeasureDispatchCallbacks();
          (i && ((this.$7 = i), (this.$8 = [])),
            e.forEach(function (e, t) {
              return a.register(t, e);
            }),
            (this.$6 = t));
        }
        var t = e.prototype;
        return (
          (t.start = function () {
            for (var e of this.$1) this.$10(e);
            this.$8 &&
              this.$7 &&
              this.$7({ entries: this.$8, actionType: this.$4 });
          }),
          (t.waitFor = function (t) {
            for (var e of t) this.$10(e);
          }),
          (t.register = function (t, n) {
            (this.$1.push(t), (this.$2[t] = n), (this.$5[t] = c.PENDING));
          }),
          (t.getPayload = function () {
            return this.$6;
          }),
          (t.$10 = function (t) {
            var e = this;
            switch (this.$5[t]) {
              case c.COMPLETE:
                break;
              case c.PENDING:
                ((this.$5[t] = c.STARTED), this.$9.push(t));
                var n = this.$7 ? u() : null;
                if ((this.$2[t](this.$6), this.$8 && n != null)) {
                  var r;
                  this.$8.push({
                    start: n,
                    end: u(),
                    name: (r = this.$3[t]) != null ? r : "unknown",
                  });
                }
                (this.$9.pop(), (this.$5[t] = c.COMPLETE));
                break;
              case c.STARTED:
                s(
                  0,
                  15659,
                  t,
                  this.$3[t],
                  this.$4,
                  this.$9
                    .map(function (t) {
                      return e.$3[t];
                    })
                    .join(", "),
                );
              default:
                break;
            }
          }),
          e
        );
      })();
    l.default = d;
  },
  98,
);
