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
        r = e.maxNumberOfLines,
        a = e.truncationSpans,
        i = o("WebBloksComponentContext").useWebBloksContext(),
        l = i.bloksContext,
        u = i.renderChildren,
        _ = l.objectSet.environment.enableDeterministicTextSize,
        g = d(null),
        h = m(!1),
        y = h[0],
        C = h[1],
        b = n.lineHeight,
        v = n.textSizePx,
        S = v * b,
        R = S * r;
      if (
        (c(
          function () {
            var e, t;
            C(
              ((e = (t = g.current) == null ? void 0 : t.clientHeight) != null
                ? e
                : 0) >
                R + S / 2,
            );
          },
          [R, S],
        ),
        r == null)
      )
        return null;
      var L = g.current,
        E = L != null ? window.getComputedStyle(L).direction === "rtl" : !1,
        k = E ? "left" : "right",
        I = r === 1 || (L == null ? void 0 : L.closest(p)) != null,
        T = o("WebBloksTextStyle").getMaxTextSizePx(a, _) * b,
        D = {
          fontSize: v,
          maxHeight: R + "px",
          wordBreak: I ? "break-all" : "break-word",
        },
        x = u(a);
      return s.jsxs("div", {
        style: D,
        className: f.container,
        children: [
          y &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx("div", { style: { float: k, height: R - T + "px" } }),
                s.jsx("div", {
                  dir: E ? "rtl" : "ltr",
                  style: { float: k, clear: k },
                  children: x,
                }),
              ],
            }),
          s.jsx("div", {
            className: f.content,
            dir: "auto",
            ref: g,
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
