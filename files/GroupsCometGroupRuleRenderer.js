__d(
  "GroupsCometGroupRuleRenderer",
  [
    "FDSLink.react",
    "GroupsCometGroupRuleLink.react",
    "GroupsCometGroupRuleRenderer_entity.graphql",
    "react",
    "react-compiler-runtime",
    "useRenderLinkedEntity",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    e !== void 0 || (e = n("GroupsCometGroupRuleRenderer_entity.graphql"));
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.entity,
        a = e.entityIsWeakReference,
        i = e.node,
        l = o("useRenderLinkedEntity").useRenderWeakReferenceEntity(a),
        s = l == null ? void 0 : l.colorProp,
        c = l == null ? void 0 : l.icon;
      if (n.id != null) {
        var d;
        return (
          t[0] !== n.id || t[1] !== i
            ? ((d = u.jsx(r("GroupsCometGroupRuleLink.react"), {
                groupRuleID: n.id,
                children: i,
              })),
              (t[0] = n.id),
              (t[1] = i),
              (t[2] = d))
            : (d = t[2]),
          d
        );
      }
      var m = c != null ? c : null,
        p;
      return (
        t[3] !== s || t[4] !== n.url || t[5] !== i || t[6] !== m
          ? ((p = u.jsxs(
              r("FDSLink.react"),
              babelHelpers.extends({ href: n.url }, s, { children: [m, i] }),
            )),
            (t[3] = s),
            (t[4] = n.url),
            (t[5] = i),
            (t[6] = m),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    var d = function (t, n, r, o, a) {
      return u.jsx(c, {
        entity: n,
        entityIsWeakReference: a != null ? a : null,
        node: t,
      });
    };
    l.default = d;
  },
  98,
);
