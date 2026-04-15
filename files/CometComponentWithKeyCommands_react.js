__d(
  "CometComponentWithKeyCommands.react",
  [
    "CometKeyCommandWrapper.react",
    "react",
    "react-compiler-runtime",
    "useKeyCommands",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children", "commandConfigs", "elementType", "xstyle"],
      s,
      u = s || (s = o("react")),
      c = {
        displayInherit: { display: "x1jfb8zj", $$css: !0 },
        inherit: {
          alignContent: "x4k7w5x",
          alignItems: "x1h91t0o",
          flexDirection: "x1beo9mf",
          flexGrow: "xaigb6o",
          flexShrink: "x12ejxvf",
          height: "x3igimt",
          justifyContent: "xarpa2k",
          maxHeight: "xedcshv",
          maxWidth: "x1lytzrv",
          minHeight: "x1t2pt76",
          minWidth: "x7ja8zs",
          position: "x1n2onr6",
          width: "x1qrby5j",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.commandConfigs;
      return (r("useKeyCommands")(t), null);
    }
    function m(t) {
      var n = o("react-compiler-runtime").c(16);
      r("vulture")("LgdEKDqwYvx3sbAAubZpD9kOtGc=");
      var a, i, l, s, m;
      n[0] !== t
        ? ((a = t.children),
          (i = t.commandConfigs),
          (l = t.elementType),
          (m = t.xstyle),
          (s = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = m))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (s = n[4]), (m = n[5]));
      var p;
      n[6] !== l
        ? ((p = l === "span" ? c.inherit : [c.inherit, c.displayInherit]),
          (n[6] = l),
          (n[7] = p))
        : (p = n[7]);
      var _ = p,
        f = m != null ? m : _,
        g;
      n[8] !== i
        ? ((g = u.jsx(d, { commandConfigs: i })), (n[8] = i), (n[9] = g))
        : (g = n[9]);
      var h;
      return (
        n[10] !== a || n[11] !== l || n[12] !== s || n[13] !== f || n[14] !== g
          ? ((h = u.jsxs(
              r("CometKeyCommandWrapper.react"),
              babelHelpers.extends({ elementType: l, xstyle: f }, s, {
                children: [g, a],
              }),
            )),
            (n[10] = a),
            (n[11] = l),
            (n[12] = s),
            (n[13] = f),
            (n[14] = g),
            (n[15] = h))
          : (h = n[15]),
        h
      );
    }
    l.default = m;
  },
  98,
);
