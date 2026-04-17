__d(
  "CometImageEntityRenderer",
  ["CometImage.react", "CometImageEntityRenderer_entity.graphql", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        image: { display: "x1rg5ohu", verticalAlign: "x1dg2w4v", $$css: !0 },
      };
    e !== void 0 || (e = n("CometImageEntityRenderer_entity.graphql"));
    function d(e) {
      return (
        e === void 0 && (e = { imageXStyle: null }),
        function (t, n) {
          var o,
            a,
            i =
              (o = (a = n.entity_with_image) == null ? void 0 : a.image) != null
                ? o
                : {},
            l = i.height,
            s = i.scale,
            d = i.uri,
            m = i.width;
          return l == null || d == null || m == null || s == null
            ? t
            : u.jsxs(u.Fragment, {
                children: [
                  u.jsx(r("CometImage.react"), {
                    height: l / s,
                    src: d,
                    width: m / s,
                    xstyle: [c.image, e.imageXStyle],
                  }),
                  " ",
                ],
              });
        }
      );
    }
    l.default = d;
  },
  98,
);
