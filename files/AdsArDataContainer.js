__d(
  "AdsArDataContainer",
  ["AdsArDataContainerBase"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.from = function (n) {
          var e = new t(n.toObject());
          return e;
        }));
      var n = t.prototype;
      return (
        (n.getEffectAttachment = function () {
          return this.effectAttachments.get(0);
        }),
        (n.getEffectID = function () {
          var e;
          return (e = this.getEffectAttachment()) == null ? void 0 : e.effectID;
        }),
        (n.setEffectAttachment = function (t) {
          var e = this.effectAttachments.set(0, t);
          return this.set("effectAttachments", e);
        }),
        t
      );
    })(r("AdsArDataContainerBase"));
    l.default = e;
  },
  98,
);
