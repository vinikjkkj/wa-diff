__d(
  "WAWebMsgAIProvenance",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return (
        e != null && (e.createdWithGenAi === !0 || e.editedWithGenAi === !0)
      );
    }
    function l(t) {
      return t == null ? !1 : t.selfDisclosed === !0 || e(t.c2pa) || e(t.iptc);
    }
    function s(e) {
      if (e == null) return null;
      var t = {};
      return (
        e.createdWithGenAi != null && (t.createdWithGenAi = e.createdWithGenAi),
        e.editedWithGenAi != null && (t.editedWithGenAi = e.editedWithGenAi),
        t
      );
    }
    function u(e) {
      if (e == null) return null;
      var t = s(e.c2PaMetadata),
        n = s(e.iptcMetadata);
      if (t == null && n == null) return null;
      var r = {};
      return (t != null && (r.c2pa = t), n != null && (r.iptc = n), r);
    }
    function c(e) {
      if (e == null) return null;
      var t = {};
      return (
        e.createdWithGenAi != null && (t.createdWithGenAi = e.createdWithGenAi),
        e.editedWithGenAi != null && (t.editedWithGenAi = e.editedWithGenAi),
        t
      );
    }
    function d(e) {
      if (e == null) return null;
      var t = c(e.c2pa),
        n = c(e.iptc);
      if (t == null && n == null) return null;
      var r = {};
      return (
        t != null && (r.c2PaMetadata = t),
        n != null && (r.iptcMetadata = n),
        r
      );
    }
    ((i.hasAIProvenanceSignal = l),
      (i.aiProvenanceFromProto = u),
      (i.aiProvenanceToProto = d));
  },
  66,
);
