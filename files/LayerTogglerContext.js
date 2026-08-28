__d(
  "LayerTogglerContext",
  ["Toggler"],
  function (t, n, r, o, a, i) {
    var e = (function () {
      "use strict";
      function e(e) {
        this._layer = e;
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          ((this._root = this._layer.getRoot()),
            n("Toggler").createInstance(this._root).setSticky(!1));
        }),
        (t.disable = function () {
          (n("Toggler").destroyInstance(this._root), (this._root = null));
        }),
        e
      );
    })();
    a.exports = e;
  },
  null,
);
