__d(
  "WAWebMediaProvenanceWriteGate",
  [
    "WAKaleidoscopeProvenanceField",
    "WAWebMediaTypes",
    "WAWebNewsletterGatingUtils",
    "WAWebSystemProvenanceGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
        e === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO
      );
    }
    function s(e) {
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
    var u = {
      trainedAlgorithmicMedia: "created",
      compositeSynthetic: "created",
      compositeWithTrainedAlgorithmicMedia: "edited",
      digitalCapture: "capture",
      computationalCapture: "capture",
    };
    function c(e) {
      var t,
        n = e == null ? void 0 : e.digitalSourceType;
      if (n == null) return "none";
      var r = n.slice(n.lastIndexOf("/") + 1);
      return (t = u[r]) != null ? t : "other";
    }
    function d(e, t) {
      var n,
        r = s(e),
        a =
          r == null
            ? null
            : o("WAKaleidoscopeProvenanceField").digitalSourceTypeFields(r)
                .digitalSourceType;
      return (
        a ===
        ((n = t == null ? void 0 : t.digitalSourceType) != null ? n : null)
      );
    }
    function m(e) {
      return e == null || c(e) === "other"
        ? null
        : o("WAKaleidoscopeProvenanceField").hasProvenanceValue(e)
          ? e
          : null;
    }
    async function p(t) {
      var n = t.isChannel,
        r = t.mediaType,
        o = t.resolveSystemProvenance;
      if (!n || !e(r)) return null;
      var a = m(await o());
      return a == null ? null : a.digitalSourceType == null ? f(a) : _(a);
    }
    function _(e) {
      return o("WAWebNewsletterGatingUtils").isChannelAIAntiTamperingEnabled()
        ? o("WAKaleidoscopeProvenanceField").allowedProvenanceFields(
            e,
            o(
              "WAWebSystemProvenanceGating",
            ).systemProvenanceAllowedFieldNames(),
          )
        : null;
    }
    function f(e) {
      var t = o("WAKaleidoscopeProvenanceField").allowedProvenanceFields(
        e,
        o("WAWebSystemProvenanceGating").systemProvenanceAllowedFieldNames(),
      );
      return t == null ||
        !o("WAWebNewsletterGatingUtils").isChannelAIAntiTamperingEnabled()
        ? null
        : t;
    }
    ((l.isMarkableMediaType = e),
      (l.systemProvenanceClass = c),
      (l.systemProvenanceMatchesLegacy = d),
      (l.fieldsToEmbed = p));
  },
  98,
);
