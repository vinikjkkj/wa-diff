__d(
  "WAKaleidoscopeProvenanceField",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        created: "trainedAlgorithmicMedia",
        edited: "compositeWithTrainedAlgorithmicMedia",
      },
      l = "iptc-digital-source-type",
      s = "tiff-make",
      u = "iptc-ai-system-used",
      c = "dc-publisher",
      d = "xmpmm-history";
    function m(t) {
      return { digitalSourceType: e[t] };
    }
    function p(e) {
      var t,
        n = e.digitalSourceType;
      return n == null
        ? []
        : [l + "=" + n].concat(
            f(s, e.make),
            f(u, e.aiSystemUsed),
            f(c, e.publisher),
            f(d, (t = e.history) == null ? void 0 : t.map(_)),
          );
    }
    function _(e) {
      var t = e.action,
        n = e.parameters;
      return t + "|" + n;
    }
    function f(e, t) {
      return (t != null ? t : []).map(function (t) {
        return e + "=" + t;
      });
    }
    function g(e, t) {
      var n = e.digitalSourceType;
      return n == null || !t.has(l)
        ? null
        : {
            digitalSourceType: n,
            make: h(e.make, s, t),
            aiSystemUsed: h(e.aiSystemUsed, u, t),
            publisher: h(e.publisher, c, t),
            history: h(e.history, d, t),
          };
    }
    function h(e, t, n) {
      return e != null && e.length > 0 && n.has(t) ? e : void 0;
    }
    ((i.digitalSourceTypeFields = m),
      (i.provenanceFieldArgs = p),
      (i.allowedProvenanceFields = g));
  },
  66,
);
