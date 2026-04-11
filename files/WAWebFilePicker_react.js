__d(
  "WAWebFilePicker.react",
  ["WAWebStopEvent", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useRef;
    function p(t) {
      var n = o("react-compiler-runtime").c(12),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = r,
        l = i.mimes,
        s = i.multiple,
        c = i.onChange,
        p = s === void 0 ? !0 : s,
        _ = m(null),
        f;
      n[3] !== c
        ? ((f = function (t) {
            c(t);
          }),
          (n[3] = c),
          (n[4] = f))
        : (f = n[4]);
      var g = f,
        h;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            _.current && ((_.current.value = ""), _.current.click());
          }),
          (n[5] = h))
        : (h = n[5]);
      var y = h,
        C;
      (n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            return { open: y };
          }),
          (n[6] = C))
        : (C = n[6]),
        d(a, C));
      var b;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { display: "none" }), (n[7] = b))
        : (b = n[7]);
      var v;
      return (
        n[8] !== g || n[9] !== l || n[10] !== p
          ? ((v = u.jsx("input", {
              accept: l,
              ref: _,
              type: "file",
              multiple: p,
              style: b,
              onClick: o("WAWebStopEvent").stopPropagation,
              onChange: g,
            })),
            (n[8] = g),
            (n[9] = l),
            (n[10] = p),
            (n[11] = v))
          : (v = n[11]),
        v
      );
    }
    l.default = p;
  },
  98,
);
