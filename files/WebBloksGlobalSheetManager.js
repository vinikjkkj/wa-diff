__d(
  "WebBloksGlobalSheetManager",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = null), (this.$2 = !1), (this.$3 = new Set()));
      }
      var t = e.prototype;
      return (
        (t.openingGlobalSheet = function (t) {
          var e = this.$2;
          this.$2 = !0;
          try {
            t();
          } finally {
            this.$2 = e;
          }
        }),
        (t.isOpeningGlobalSheet = function () {
          return this.$2;
        }),
        (t.getSheet = function () {
          return this.$1;
        }),
        (t.getSheetForTree = function (t) {
          var e = this.$1;
          return e != null && e.treeManager === t ? e : null;
        }),
        (t.open = function (t) {
          this.$1 == null && this.$4(t);
        }),
        (t.close = function () {
          var e = this.$1;
          e != null && (e.onExit("back"), e.dismiss(), this.$4(null));
        }),
        (t.$4 = function (t) {
          ((this.$1 = t),
            this.$3.forEach(function (e) {
              return e(t);
            }));
        }),
        (t.addListener = function (t) {
          var e = this;
          return (
            this.$3.add(t),
            {
              remove: function () {
                e.$3.delete(t);
              },
            }
          );
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
