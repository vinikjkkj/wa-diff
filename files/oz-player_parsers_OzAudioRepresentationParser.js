__d(
  "oz-player/parsers/OzAudioRepresentationParser",
  [
    "oz-player/manifests/OzAudioRepresentation",
    "oz-player/parsers/OzRepresentationParserBase",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
        var f;
        return (
          (f = e.call(this, t, n, r, o, a, i, l, s, u, c, d, m, p, _) || this),
          (f.$OzAudioRepresentationParser$p_1 = n),
          (f.$OzAudioRepresentationParser$p_3 = o),
          f
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.parse = function () {
          var e =
            this.$OzAudioRepresentationParser$p_3.customRepresentationParsers;
          return new (r("oz-player/manifests/OzAudioRepresentation"))(
            this.$OzAudioRepresentationParser$p_1,
            this.$OzAudioRepresentationParser$p_2,
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
