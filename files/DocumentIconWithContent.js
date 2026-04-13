__d(
  "DocumentIconWithContent",
  ["WAWebIcDocBaseIcon.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["content", "fontSize", "iconXStyle"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(26),
        r,
        a,
        i,
        l;
      n[0] !== t
        ? ((r = t.content),
          (a = t.fontSize),
          (i = t.iconXStyle),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a),
          (n[3] = i),
          (n[4] = l))
        : ((r = n[1]), (a = n[2]), (i = n[3]), (l = n[4]));
      var s;
      n[5] !== r
        ? ((s = r.slice(0, 3).toUpperCase()), (n[5] = r), (n[6] = s))
        : (s = n[6]);
      var c = s,
        d;
      n[7] !== l.width
        ? ((d = { width: l.width }), (n[7] = l.width), (n[8] = d))
        : (d = n[8]);
      var m;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = "x1n2onr6"), (n[9] = m))
        : (m = n[9]);
      var p;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { width: 22, height: 26, x: 0, y: 0 }), (n[10] = p))
        : (p = n[10]);
      var _ = "document-" + c + "-icon",
        f;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = {}), (n[11] = f))
        : (f = n[11]);
      var g;
      n[12] !== i || n[13] !== l || n[14] !== _
        ? ((g = u.jsx(
            o("WAWebIcDocBaseIcon.react").IcDocBaseIcon,
            babelHelpers.extends({}, l, {
              viewBox: p,
              xstyle: i,
              name: _,
              innerStyles: f,
            }),
          )),
          (n[12] = i),
          (n[13] = l),
          (n[14] = _),
          (n[15] = g))
        : (g = n[15]);
      var h;
      n[16] !== a
        ? ((h = { fontSize: a }), (n[16] = a), (n[17] = h))
        : (h = n[17]);
      var y;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((y =
            "x1s688f x1lliihq xfungia x10l6tqk x1icnayv xh8yej3 x2b8uid xo5v014 x87ps6o"),
          (n[18] = y))
        : (y = n[18]);
      var C;
      n[19] !== c || n[20] !== h
        ? ((C = u.jsx("div", { style: h, className: y, children: c })),
          (n[19] = c),
          (n[20] = h),
          (n[21] = C))
        : (C = n[21]);
      var b;
      return (
        n[22] !== C || n[23] !== d || n[24] !== g
          ? ((b = u.jsxs("div", { style: d, className: m, children: [g, C] })),
            (n[22] = C),
            (n[23] = d),
            (n[24] = g),
            (n[25] = b))
          : (b = n[25]),
        b
      );
    }
    l.default = c;
  },
  98,
);
