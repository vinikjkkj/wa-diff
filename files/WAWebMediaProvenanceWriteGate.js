__d(
  "WAWebMediaProvenanceWriteGate",
  [
    "WAKaleidoscopeProvenanceField",
    "WAWebMediaTypes",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [];
    function s(e) {
      return (
        e === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
        e === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO
      );
    }
    function u(e) {
      var t, n, r, o;
      return (e == null || (t = e.c2pa) == null
        ? void 0
        : t.createdWithGenAi) === !0 ||
        (e == null || (n = e.iptc) == null ? void 0 : n.createdWithGenAi) === !0
        ? "created"
        : (e == null || (r = e.c2pa) == null ? void 0 : r.editedWithGenAi) ===
              !0 ||
            (e == null || (o = e.iptc) == null ? void 0 : o.editedWithGenAi) ===
              !0
          ? "edited"
          : null;
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.isChannel,
            r = t.mediaType,
            a = t.resolveVerdict;
          if (!n || !s(r)) return e;
          var i = u(yield a());
          return i == null ||
            !o("WAWebNewsletterGatingUtils").isChannelAIAntiTamperingEnabled()
            ? e
            : [o("WAKaleidoscopeProvenanceField").iptcDigitalSourceType(i)];
        })),
        d.apply(this, arguments)
      );
    }
    ((l.isMarkableMediaType = s), (l.fieldsToEmbed = c));
  },
  98,
);
