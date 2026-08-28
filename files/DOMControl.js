__d(
  "DOMControl",
  ["$", "DataStore"],
  function (t, n, r, o, a, i) {
    var e = (function () {
      "use strict";
      function e(e) {
        ((this.root = n("$").fromIDOrElement(e)),
          (this.updating = !1),
          n("DataStore").set(e, "DOMControl", this));
      }
      var t = e.prototype;
      return (
        (t.getRoot = function () {
          return this.root;
        }),
        (t.beginUpdate = function () {
          return this.updating ? !1 : ((this.updating = !0), !0);
        }),
        (t.endUpdate = function () {
          this.updating = !1;
        }),
        (t.update = function (t) {
          if (!this.beginUpdate()) return this;
          (this.onupdate(t), this.endUpdate());
        }),
        (t.onupdate = function (t) {}),
        (e.getInstance = function (t) {
          return n("DataStore").get(t, "DOMControl");
        }),
        e
      );
    })();
    a.exports = e;
  },
  null,
);
