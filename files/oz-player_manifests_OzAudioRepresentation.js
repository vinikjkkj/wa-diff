__d(
  "oz-player/manifests/OzAudioRepresentation",
  ["oz-player/manifests/OzRepresentationBase"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r, o, a, i, l, s, u, c, d, m, p) {
        var _;
        return (
          (_ = e.call(this, t, n, r, o, a, i, l, s, u, c, d, m, p) || this),
          (_.$OzAudioRepresentation$p_1 = r),
          (_.$OzAudioRepresentation$p_2 = d),
          (_.$OzAudioRepresentation$p_3 = {
            id: r,
            displayLabel: _.getDisplayLabel(),
            mimeCodecs: _.getMimeCodecs(),
            variantKey: i,
            lang: l,
            role: s,
          }),
          _
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getBitrateKbps = function () {
          var e = 1024;
          return (this.$OzAudioRepresentation$p_2 / e).toFixed(1) + "Kbps";
        }),
        (n.getDisplayLabel = function () {
          var t = e.prototype.getLang.call(this),
            n = e.prototype.getRole.call(this),
            r = t == null ? "Default" : t;
          return n == null ? r : r + " - " + n;
        }),
        (n.getAudioTrack = function () {
          return this.$OzAudioRepresentation$p_3;
        }),
        t
      );
    })(r("oz-player/manifests/OzRepresentationBase"));
    l.default = e;
  },
  98,
);
