__d(
  "KFRandomSubdocumentAlternateChildrenComponent",
  ["KFComponentNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.swappableChildren = []), (this.lastSwappedChildIndex = -1));
      }
      var t = e.prototype;
      return (
        (t.addSwappableChild = function (t, n) {
          (this.swappableChildren.push(t),
            n === !0 &&
              (this.lastSwappedChildIndex = this.swappableChildren.length - 1));
        }),
        (t.getLastSwappedChild = function () {
          return this.swappableChildren[this.lastSwappedChildIndex];
        }),
        (t.getSwappableChild = function (t) {
          return this.swappableChildren[t];
        }),
        (t.setLastSwappedIndex = function (t) {
          this.lastSwappedChildIndex = t;
        }),
        (t.toString = function () {
          return o("KFComponentNames").RANDOM_SUBDOCUMENT_CHILDREN;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
