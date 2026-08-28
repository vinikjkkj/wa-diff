__d(
  "WebBloksRichTextTruncationCustom",
  ["WebBloksComponentContext", "WebBloksStyle", "WebBloksTextStyle", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef,
      m = u.useState,
      p = '[data-wbloks-inline-truncation="true"]';
    function _(e) {
      var t = e.children,
        n = e.dimensions,
        r = e.node,
        a = e.truncationSpans,
        i = o("WebBloksComponentContext").useWebBloksContext(),
        l = i.renderChildren,
        u = d(null),
        _ = m(!1),
        g = _[0],
        h = _[1],
        y = r.get("max_number_of_lines"),
        C = n.lineHeight,
        b = n.textSizePx,
        v = b * C,
        S = v * (y != null ? y : 1);
      if (
        (c(
          function () {
            var e, t;
            h(
              ((e = (t = u.current) == null ? void 0 : t.clientHeight) != null
                ? e
                : 0) >
                S + v / 2,
            );
          },
          [S, v],
        ),
        y == null)
      )
        return null;
      var R = u.current,
        L = R != null ? window.getComputedStyle(R).direction === "rtl" : !1,
        E = L ? "left" : "right",
        k = y === 1 || (R == null ? void 0 : R.closest(p)) != null,
        I = o("WebBloksTextStyle").getMaxTextSizePx(a) * C,
        T = {
          fontSize: b,
          maxHeight: S + "px",
          wordBreak: k ? "break-all" : "break-word",
        },
        D = l(a);
      return s.jsxs("div", {
        style: T,
        className: f.container,
        children: [
          g &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx("div", { style: { float: E, height: S - I + "px" } }),
                s.jsx("div", {
                  dir: L ? "rtl" : "ltr",
                  style: { float: E, clear: E },
                  children: D,
                }),
              ],
            }),
          s.jsx("div", {
            className: f.content,
            dir: "auto",
            ref: u,
            children: t,
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = o("WebBloksStyle").createStyles({
      container: { overflow: "hidden" },
      content: { float: "none" },
    });
    l.default = _;
  },
  98,
);
