__d(
  "WebBloksRichTextTruncationCustom",
  [
    "WebBloksComponentContext",
    "WebBloksStyle",
    "WebBloksTextStyle",
    "calculateWebBloksInlineTruncationOffset",
    "react",
  ],
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
        a = e.maxNumberOfLines,
        i = e.truncationSpans,
        l = o("WebBloksComponentContext").useWebBloksContext(),
        u = l.bloksContext,
        _ = l.renderChildren,
        g = u.objectSet.environment.enableDeterministicTextSize,
        h = d(null),
        y = d(null),
        C = m(!1),
        b = C[0],
        v = C[1],
        S = m(0),
        R = S[0],
        L = S[1],
        E = n.lineHeight,
        k = n.textSizePx,
        I = k * E,
        T = I * a;
      if (
        (c(
          function () {
            var e, t;
            v(
              ((e = (t = h.current) == null ? void 0 : t.clientHeight) != null
                ? e
                : 0) >
                T + I / 2,
            );
          },
          [T, I],
        ),
        c(
          function () {
            var e = h.current,
              t = y.current;
            if (!b || e == null || t == null || e.closest(p) == null) {
              L(0);
              return;
            }
            var n = window.getComputedStyle(e).direction === "rtl",
              o = e.getBoundingClientRect().top,
              a = o + T,
              i = document.createRange();
            (i.selectNodeContents(e),
              L(
                r("calculateWebBloksInlineTruncationOffset")(
                  Array.from(i.getClientRects()),
                  t.getBoundingClientRect(),
                  a,
                  n,
                ),
              ));
          },
          [b, T],
        ),
        a == null)
      )
        return null;
      var D = h.current,
        x = D != null ? window.getComputedStyle(D).direction === "rtl" : !1,
        $ = x ? "left" : "right",
        P = a === 1,
        N = o("WebBloksTextStyle").getMaxTextSizePx(i, g) * E,
        M = {
          fontSize: k,
          maxHeight: T + "px",
          wordBreak: P ? "break-all" : "break-word",
        },
        w = _(i);
      return s.jsxs("div", {
        style: M,
        className: f.container,
        children: [
          b &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx("div", { style: { float: $, height: T - N + "px" } }),
                s.jsx("div", {
                  dir: x ? "rtl" : "ltr",
                  ref: y,
                  style: { float: $, clear: $ },
                  children: s.jsx("div", {
                    style: {
                      transform:
                        R === 0 ? void 0 : "translateX(" + (x ? R : -R) + "px)",
                    },
                    children: w,
                  }),
                }),
              ],
            }),
          s.jsx("div", {
            className: f.content,
            dir: "auto",
            ref: h,
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
