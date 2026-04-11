__d(
  "BaseSwitch.react",
  [
    "BaseFocusRing.react",
    "BaseInput.react",
    "BaseView.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "children",
        "onFocusVisibleChange",
        "ref",
        "xstyle",
        "suppressFocusRing",
        "testid",
      ],
      s,
      u = s || (s = o("react")),
      c = {
        switch: {
          cursor: "x1ypdohk",
          height: "x5yr21d",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          opacity: "x1w3u9th",
          outline: "x1a2a7pz",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          position: "x10l6tqk",
          top: "x13vifvy",
          width: "xh8yej3",
          $$css: !0,
        },
        wrapper: { position: "x1n2onr6", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(18),
        a,
        i,
        l,
        s,
        d,
        m,
        p;
      n[0] !== t
        ? ((a = t.children),
          (i = t.onFocusVisibleChange),
          (s = t.ref),
          (p = t.xstyle),
          (d = t.suppressFocusRing),
          (m = t.testid),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = d),
          (n[6] = m),
          (n[7] = p))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (s = n[4]),
          (d = n[5]),
          (m = n[6]),
          (p = n[7]));
      var _;
      n[8] !== a || n[9] !== l || n[10] !== s || n[11] !== m || n[12] !== p
        ? ((_ = function (t) {
            var e;
            return u.jsxs(r("BaseView.react"), {
              testid: void 0,
              xstyle: [c.wrapper, t, p],
              children: [
                a,
                u.jsx(
                  r("BaseInput.react"),
                  babelHelpers.extends({}, l, {
                    "aria-checked": (e = l.checked) != null ? e : !1,
                    ref: s,
                    role: "switch",
                    type: "checkbox",
                    xstyle: c.switch,
                  }),
                ),
              ],
            });
          }),
          (n[8] = a),
          (n[9] = l),
          (n[10] = s),
          (n[11] = m),
          (n[12] = p),
          (n[13] = _))
        : (_ = n[13]);
      var f;
      return (
        n[14] !== i || n[15] !== d || n[16] !== _
          ? ((f = u.jsx(r("BaseFocusRing.react"), {
              onFocusVisibleChange: i,
              suppressFocusRing: d,
              children: _,
            })),
            (n[14] = i),
            (n[15] = d),
            (n[16] = _),
            (n[17] = f))
          : (f = n[17]),
        f
      );
    }
    var m = u.memo(d);
    l.default = m;
  },
  98,
);
