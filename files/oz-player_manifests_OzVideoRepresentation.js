__d(
  "oz-player/manifests/OzVideoRepresentation",
  ["oz-player/manifests/OzRepresentationBase"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
        var g;
        if (
          ((g = e.call(this, t, n, r, o, a, i, l, s, u, c, d, m, p) || this),
          (g.$OzVideoRepresentation$p_5 = null),
          (g.$OzVideoRepresentation$p_6 = null),
          (g.$OzVideoRepresentation$p_7 = null),
          (g.$OzVideoRepresentation$p_1 = _),
          (g.$OzVideoRepresentation$p_2 = f),
          (g.$OzVideoRepresentation$p_4 = p),
          (g.$OzVideoRepresentation$p_3 = t),
          p != null)
        ) {
          if (p.playbackResolutionMos != null) {
            var h = g.getCustomField("playbackResolutionMos");
            g.$OzVideoRepresentation$p_7 = h != null ? String(h) : null;
          }
          if (p.playbackResolutionCsvqm != null) {
            var y = g.getCustomField("playbackResolutionCsvqm");
            g.$OzVideoRepresentation$p_6 = y != null ? String(y) : null;
          }
        }
        return g;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getQualityScoreCurveString = function (t) {
          return t === "csvqm"
            ? this.$OzVideoRepresentation$p_6
            : this.$OzVideoRepresentation$p_7;
        }),
        (n.getWidth = function () {
          return this.$OzVideoRepresentation$p_1;
        }),
        (n.getHeight = function () {
          return this.$OzVideoRepresentation$p_2;
        }),
        (n.getDisplayLabel = function () {
          if (this.$OzVideoRepresentation$p_5 != null)
            return this.$OzVideoRepresentation$p_5;
          var e = this.$OzVideoRepresentation$p_4
            ? this.$OzVideoRepresentation$p_4.qualityLabel
            : null;
          return (
            e &&
              (this.$OzVideoRepresentation$p_5 = e(
                this.$OzVideoRepresentation$p_3,
              )),
            (this.$OzVideoRepresentation$p_5 == null ||
              this.$OzVideoRepresentation$p_5 == "") &&
              (this.$OzVideoRepresentation$p_5 =
                this.getHeight().toString() + "p"),
            this.$OzVideoRepresentation$p_5 || ""
          );
        }),
        t
      );
    })(r("oz-player/manifests/OzRepresentationBase"));
    l.default = e;
  },
  98,
);
