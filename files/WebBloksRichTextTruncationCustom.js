__d(
  "WebBloksRichTextTruncationCustom",
  ["WebBloksComponentContext", "WebBloksStyle", "WebBloksTextStyle", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef,
      m = u.useState;
    function p(e) {
      var t = e.children,
        n = e.dimensions,
        r = e.node,
        a = e.truncationSpans,
        i = o("WebBloksComponentContext").useWebBloksContext(),
        l = i.renderChildren,
        u = d(null),
        p = m(!1),
        f = p[0],
        g = p[1],
        h = r.get("max_number_of_lines"),
        y = n.lineHeight,
        C = n.textSizePx,
        b = C * y,
        v = b * (h != null ? h : 1);
      if (
        (c(
          function () {
            var e, t;
            g(
              ((e = (t = u.current) == null ? void 0 : t.clientHeight) != null
                ? e
                : 0) >
                v + b / 2,
            );
          },
          [v, b],
        ),
        h == null)
      )
        return null;
      var S =
          u.current != null
            ? window.getComputedStyle(u.current).direction === "rtl"
            : !1,
        R = S ? "left" : "right",
        L = o("WebBloksTextStyle").getMaxTextSizePx(a) * y,
        E = {
          fontSize: C,
          maxHeight: v + "px",
          wordBreak: h === 1 ? "break-all" : "break-word",
        },
        k = l(a);
      return s.jsxs("div", {
        style: E,
        className: _.container,
        children: [
          f &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx("div", { style: { float: R, height: v - L + "px" } }),
                s.jsx("div", {
                  dir: S ? "rtl" : "ltr",
                  style: { float: R, clear: R },
                  children: k,
                }),
              ],
            }),
          s.jsx("div", {
            className: _.content,
            dir: "auto",
            ref: u,
            children: t,
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = o("WebBloksStyle").createStyles({
      container: { overflow: "hidden" },
      content: { float: "none" },
    });
    l.default = p;
  },
  98,
);
