__d(
  "oz-player/parsers/OzVideoRepresentationParser",
  [
    "oz-player/manifests/OzVideoRepresentation",
    "oz-player/parsers/OzRepresentationParserBase",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
        var g;
        return (
          (g =
            e.call(this, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) || this),
          (g.$OzVideoRepresentationParser$p_1 = n),
          (g.$OzVideoRepresentationParser$p_2 = r),
          (g.$OzVideoRepresentationParser$p_3 = o),
          g
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.parse = function () {
          var e = Number.parseInt(
              this.$OzVideoRepresentationParser$p_1.$.height,
              10,
            ),
            t = Number.parseInt(
              this.$OzVideoRepresentationParser$p_1.$.width,
              10,
            ),
            n =
              this.$OzVideoRepresentationParser$p_3.customRepresentationParsers;
          return new (r("oz-player/manifests/OzVideoRepresentation"))(
            this.$OzVideoRepresentationParser$p_1,
            this.$OzVideoRepresentationParser$p_2,
            this.parseID(),
            this.parseMimeType(),
            this.parseCodecs(),
            this.parseVariantKey(),
            this.parseLang(),
            this.parseRole(),
            this.parseInitSegment(),
            this.parseSegmentsContainer(),
            this.parseBandwidth(),
            this.parseCustomFieldFirstSegment(),
            n,
            t,
            e,
          );
        }),
        t
      );
    })(r("oz-player/parsers/OzRepresentationParserBase"));
    l.default = e;
  },
  98,
);
