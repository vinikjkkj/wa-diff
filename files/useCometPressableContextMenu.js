__d(
  "useCometPressableContextMenu",
  ["CometContainerPressableContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect,
      d = s.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.isContainerTarget,
        a = e.linkProps,
        i = e.localRef,
        l = e.onContextMenu,
        s = e.preventContextMenu,
        m = n === void 0 ? !1 : n,
        p = u(r("CometContainerPressableContext")),
        _ = d(null),
        f;
      t[0] !== p ||
      t[1] !== m ||
      t[2] !== (a == null ? void 0 : a.target) ||
      t[3] !== (a == null ? void 0 : a.url) ||
      t[4] !== i ||
      t[5] !== l ||
      t[6] !== s
        ? ((f = function () {
            m &&
              p &&
              p.onMount(
                {
                  onContextMenu: function (t) {
                    (s === !0 && t.preventDefault(), l != null && l(t));
                  },
                  onPress: function (t) {
                    var e = i.current;
                    e && e.click();
                  },
                  target: a == null ? void 0 : a.target,
                  url: a == null ? void 0 : a.url,
                },
                _,
              );
          }),
          (t[0] = p),
          (t[1] = m),
          (t[2] = a == null ? void 0 : a.target),
          (t[3] = a == null ? void 0 : a.url),
          (t[4] = i),
          (t[5] = l),
          (t[6] = s),
          (t[7] = f))
        : (f = t[7]);
      var g = a == null ? void 0 : a.url,
        h = a == null ? void 0 : a.target,
        y;
      (t[8] !== p ||
      t[9] !== m ||
      t[10] !== i ||
      t[11] !== l ||
      t[12] !== s ||
      t[13] !== g ||
      t[14] !== h
        ? ((y = [p, m, l, s, g, h, i]),
          (t[8] = p),
          (t[9] = m),
          (t[10] = i),
          (t[11] = l),
          (t[12] = s),
          (t[13] = g),
          (t[14] = h),
          (t[15] = y))
        : (y = t[15]),
        c(f, y));
    }
    l.default = m;
  },
  98,
);
