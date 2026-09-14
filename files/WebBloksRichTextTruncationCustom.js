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
        l = i.renderChildren,
        u = d(null),
        _ = m(!1),
        g = _[0],
        h = _[1],
        y = n.lineHeight,
        C = n.textSizePx,
        b = C * y,
        v = b * r;
      if (
        (c(
          function () {
            var e, t;
            h(
              ((e = (t = u.current) == null ? void 0 : t.clientHeight) != null
                ? e
                : 0) >
                v + b / 2,
            );
          },
          [v, b],
        ),
        r == null)
      )
        return null;
      var S = u.current,
        R = S != null ? window.getComputedStyle(S).direction === "rtl" : !1,
        L = R ? "left" : "right",
        E = r === 1 || (S == null ? void 0 : S.closest(p)) != null,
        k = o("WebBloksTextStyle").getMaxTextSizePx(a) * y,
        I = {
          fontSize: C,
          maxHeight: v + "px",
          wordBreak: E ? "break-all" : "break-word",
        },
        T = l(a);
      return s.jsxs("div", {
        style: I,
        className: f.container,
        children: [
          g &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx("div", { style: { float: L, height: v - k + "px" } }),
                s.jsx("div", {
                  dir: R ? "rtl" : "ltr",
                  style: { float: L, clear: L },
                  children: T,
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
