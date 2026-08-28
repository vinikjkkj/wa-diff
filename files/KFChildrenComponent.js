__d(
  "KFChildrenComponent",
  ["KFComponentNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        (e === void 0 && (e = []), (this.children = e));
      }
      var t = e.prototype;
      return (
        (t.getChildren = function () {
          return this.children;
        }),
        (t.addChild = function (t) {
          this.children.push(t);
        }),
        (t.removeChild = function (t, n) {
          var e = this.children.indexOf(t);
          e !== -1 &&
            (n != null
              ? this.children.splice(e, 1, n)
              : this.children.splice(e, 1));
        }),
        (t.toString = function () {
          return o("KFComponentNames").CHILDREN;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
