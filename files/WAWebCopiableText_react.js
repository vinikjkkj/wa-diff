__d(
  "WAWebCopiableText.react",
  [
    "WAWebBox.react",
    "WAWebCopyRefreshedIcon.react",
    "WAWebCopyToClipboard",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = { icon: { height: "x1q3kd3q", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.children,
        a = e.showOnHover,
        i = e.text,
        l = u(!1),
        d = l[0],
        m = l[1],
        p;
      t[0] !== i
        ? ((p = function (t) {
            (t.stopPropagation(),
              o("WAWebCopyToClipboard").copyTextToClipboard(i),
              o("WAWebToastManager").ToastManager.open(
                s.jsx(o("WAWebToast.react").Toast, {
                  msg: 'Copied "' + i + '" to clipboard',
                }),
              ));
          }),
          (t[0] = i),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function () {
            return m(!0);
          }),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            return m(!1);
          }),
          (t[3] = h))
        : (h = t[3]);
      var y = h,
        C;
      t[4] !== n
        ? ((C = s.jsx(r("WAWebBox.react"), {
            as: "span",
            textWrap: "ellipsis",
            children: n,
          })),
          (t[4] = n),
          (t[5] = C))
        : (C = t[5]);
      var b;
      t[6] !== _ || t[7] !== d || t[8] !== a || t[9] !== i
        ? ((b =
            (a !== !0 || d) &&
            s.jsx(o("WAWebText.react").WAWebClickableText, {
              onClick: _,
              highlightOnHover: !0,
              title: 'Copy "' + i + '" to clipboard',
              children: s.jsx(
                o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
                { iconXstyle: c.icon },
              ),
            })),
          (t[6] = _),
          (t[7] = d),
          (t[8] = a),
          (t[9] = i),
          (t[10] = b))
        : (b = t[10]);
      var v;
      return (
        t[11] !== C || t[12] !== b
          ? ((v = s.jsxs(r("WAWebBox.react"), {
              flex: !0,
              align: "center",
              onMouseEnter: g,
              onMouseLeave: y,
              children: [C, b],
            })),
            (t[11] = C),
            (t[12] = b),
            (t[13] = v))
          : (v = t[13]),
        v
      );
    }
    l.default = d;
  },
  98,
);
