__d(
  "AdsCanvasCollectionsThumbnail",
  ["ImmutableRecordWithV4Types"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { element_crops: {}, element_id: "", element_child_index: -1 },
      s = o("ImmutableRecordWithV4Types").Record(e),
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.isProductThumbnail = function () {
            return this.element_child_index !== -1;
          }),
          t
        );
      })(s);
    l.default = u;
  },
  98,
);
