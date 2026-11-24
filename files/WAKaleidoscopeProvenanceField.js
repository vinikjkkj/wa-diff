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
      u = "tiff-model",
      c = "iptc-ai-system-used",
      d = "dc-publisher",
      m = "xmpmm-history";
    function p(t) {
      return { digitalSourceType: e[t] };
    }
    function _(e) {
      return (
        e.digitalSourceType != null ||
        [e.make, e.model, e.aiSystemUsed, e.publisher, e.history].some(
          function (e) {
            return e != null && e.length > 0;
          },
        )
      );
    }
    function f(e) {
      var t,
        n = e.digitalSourceType;
      return [].concat(
        n == null ? [] : [l + "=" + n],
        h(s, e.make),
        h(u, e.model),
        h(c, e.aiSystemUsed),
        h(d, e.publisher),
        h(m, (t = e.history) == null ? void 0 : t.map(g)),
      );
    }
    function g(e) {
      var t = e.action,
        n = e.parameters;
      return t + "|" + n;
    }
    function h(e, t) {
      return (t != null ? t : []).map(function (t) {
        return e + "=" + t;
      });
    }
    function y(e, t) {
      var n = e.digitalSourceType,
        r = babelHelpers.extends(
          {},
          n != null && t.has(l) ? { digitalSourceType: n } : null,
          {
            make: C(e.make, s, t),
            model: C(e.model, u, t),
            aiSystemUsed: C(e.aiSystemUsed, c, t),
            publisher: C(e.publisher, d, t),
            history: C(e.history, m, t),
          },
        );
      return _(r) ? r : null;
    }
    function C(e, t, n) {
      return e != null && e.length > 0 && n.has(t) ? e : void 0;
    }
    ((i.digitalSourceTypeFields = p),
      (i.hasProvenanceValue = _),
      (i.provenanceFieldArgs = f),
      (i.allowedProvenanceFields = y));
  },
  66,
);
