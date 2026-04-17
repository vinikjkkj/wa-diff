__d(
  "CometHovercardEntityRenderer",
  [
    "Actor",
    "ActorHovercard.react",
    "CometHovercardEntityRenderer_actor.graphql",
    "canRenderHovercardForGraphQLEntityType",
    "gkx",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    e !== void 0 || (e = n("CometHovercardEntityRenderer_actor.graphql"));
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.entity,
        a = e.node,
        i = o("Actor").useActor(),
        l = i[0];
      if (
        l == null ||
        l === "0" ||
        r("canRenderHovercardForGraphQLEntityType")(n.__typename) === !1 ||
        n.id == null
      )
        return a;
      var s = n.id,
        c;
      t[0] !== s
        ? ((c = r("gkx")("943") ? { "data-actor-id": s } : void 0),
          (t[0] = s),
          (t[1] = c))
        : (c = t[1]);
      var d = c,
        m;
      t[2] !== d || t[3] !== a
        ? ((m = function (t) {
            return u.jsx(
              "span",
              babelHelpers.extends({ ref: t }, d, { children: a }),
            );
          }),
          (t[2] = d),
          (t[3] = a),
          (t[4] = m))
        : (m = t[4]);
      var p;
      return (
        t[5] !== s || t[6] !== m
          ? ((p = u.jsx(r("ActorHovercard.react"), {
              actorID: s,
              display: "inline",
              children: m,
            })),
            (t[5] = s),
            (t[6] = m),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    function d(e, t) {
      return u.jsx(c, { entity: t, node: e });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
