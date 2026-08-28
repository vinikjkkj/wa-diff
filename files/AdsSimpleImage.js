__d(
  "AdsSimpleImage",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getTyped = function () {
          var e;
          return {
            height: Number(this.height) || 0,
            url: String((e = this.url) != null ? e : ""),
            width: Number(this.width) || 0,
            isSphericalPhoto: !!this.isSphericalPhoto,
          };
        }),
        t
      );
    })(
      r("immutable").Record({
        height: null,
        url: null,
        width: null,
        isSphericalPhoto: null,
      }),
    );
    l.default = e;
  },
  98,
);
