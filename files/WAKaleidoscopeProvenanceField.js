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
      c = "dc-publisher";
    function d(t) {
      return { digitalSourceType: e[t] };
    }
    function m(e) {
      var t = e.digitalSourceType;
      return t == null
        ? []
        : [l + "=" + t].concat(
            p(s, e.makeId),
            p(u, e.aiSystemUsedId),
            p(c, e.publisherId),
          );
    }
    function p(e, t) {
      return t == null || t === 0 ? [] : [e + "=" + t];
    }
    function _(e, t) {
      var n = e.digitalSourceType;
      return n == null || !t.has(l)
        ? null
        : {
            digitalSourceType: n,
            makeId: f(e.makeId, s, t),
            aiSystemUsedId: f(e.aiSystemUsedId, u, t),
            publisherId: f(e.publisherId, c, t),
          };
    }
    function f(e, t, n) {
      return e != null && e !== 0 && n.has(t) ? e : void 0;
    }
    ((i.digitalSourceTypeFields = d),
      (i.provenanceFieldArgs = m),
      (i.allowedProvenanceFields = _));
  },
  66,
);
