__d(
  "BaseRadio.react",
  [
    "BaseFocusRing.react",
    "BaseInput.react",
    "BaseView.react",
    "XPlatReactNestedPressableContext",
    "mergeRefs",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ref",
        "children",
        "indeterminate",
        "onClick",
        "onValueChange",
        "suppressFocusRing",
        "tabIndex",
        "testid",
        "xstyle",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = {
        radio: {
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
    function g(t) {
      var n = t.ref,
        o = t.children,
        a = t.indeterminate,
        i = a === void 0 ? !1 : a,
        l = t.onClick,
        s = t.onValueChange,
        c = t.suppressFocusRing,
        g = t.tabIndex,
        h = t.testid,
        y = t.xstyle,
        C = babelHelpers.objectWithoutPropertiesLoose(t, e),
        b = d(r("XPlatReactNestedPressableContext")),
        v = _(null);
      m(
        function () {
          v.current != null && (v.current.indeterminate = i);
        },
        [i],
      );
      var S = p(
        function () {
          return r("mergeRefs")(n, v);
        },
        [n],
      );
      return u.jsx(r("BaseFocusRing.react"), {
        suppressFocusRing: c,
        children: function (t) {
          var e;
          return u.jsxs(r("BaseView.react"), {
            testid: void 0,
            xstyle: [f.wrapper, t, y],
            children: [
              o,
              u.jsx(
                r("BaseInput.react"),
                babelHelpers.extends({}, C, {
                  "aria-checked": i
                    ? "mixed"
                    : (e = C.checked) != null
                      ? e
                      : !1,
                  onClick: b ? void 0 : l,
                  onValueChange: b ? void 0 : s,
                  ref: S,
                  tabIndex: g != null ? g : c === !0 ? -1 : void 0,
                  type: "radio",
                  xstyle: f.radio,
                }),
              ),
            ],
          });
        },
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = u.memo(g);
    l.default = h;
  },
  98,
);
