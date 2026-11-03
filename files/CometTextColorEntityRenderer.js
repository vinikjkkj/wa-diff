__d(
  "CometTextColorEntityRenderer",
  ["CometTextColorEntityRenderer_entity.graphql", "react", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        color: function (t) {
          return [
            { color: t != null ? "x14rh7hd" : t, $$css: !0 },
            { "--x-color": t != null ? t : void 0 },
          ];
        },
      };
    e !== void 0 || (e = n("CometTextColorEntityRenderer_entity.graphql"));
    var d = function (t, n) {
      var e = n.hex_rgb_color_with_pound_key;
      return e == null
        ? t
        : u.jsx(o("react-strict-dom").html.span, {
            style: c.color(e),
            children: t,
          });
    };
    l.default = d;
  },
  98,
);
