__d(
  "useClickablePropsForWebBloks",
  [
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksConstants",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var a = o("react-compiler-runtime").c(18),
        i = o("WebBloksComponentContext").useWebBloksContext(),
        l = i.bloksContext,
        u = i.executeCatch,
        c = r === !0 ? s : void 0;
      if (t == null) {
        var d;
        return (
          a[0] !== c
            ? ((d = { onClickCapture: c }), (a[0] = c), (a[1] = d))
            : (d = a[1]),
          d
        );
      }
      var m;
      a[2] !== l ||
      a[3] !== n ||
      a[4] !== u ||
      a[5] !== r ||
      a[6] !== t ||
      a[7] !== e
        ? ((m = function (i) {
            (r === !0 && i.preventDefault(),
              !o("WebBloksBooleanUtils").isFalse(n) &&
                t != null &&
                (i.preventDefault(), i.stopPropagation(), u(e, t, [e, l])));
          }),
          (a[2] = l),
          (a[3] = n),
          (a[4] = u),
          (a[5] = r),
          (a[6] = t),
          (a[7] = e),
          (a[8] = m))
        : (m = a[8]);
      var p = m,
        _ = p,
        f;
      a[9] !== p
        ? ((f = function (t) {
            t.keyCode === o("WebBloksConstants").KEY_RETURN
              ? p(t)
              : t.keyCode === o("WebBloksConstants").KEY_SPACE &&
                t.preventDefault();
          }),
          (a[9] = p),
          (a[10] = f))
        : (f = a[10]);
      var g = f,
        h;
      a[11] !== p
        ? ((h = function (t) {
            t.keyCode === o("WebBloksConstants").KEY_SPACE && p(t);
          }),
          (a[11] = p),
          (a[12] = h))
        : (h = a[12]);
      var y = h,
        C;
      return (
        a[13] !== _ || a[14] !== c || a[15] !== g || a[16] !== y
          ? ((C = { onClick: _, onClickCapture: c, onKeyDown: g, onKeyUp: y }),
            (a[13] = _),
            (a[14] = c),
            (a[15] = g),
            (a[16] = y),
            (a[17] = C))
          : (C = a[17]),
        C
      );
    }
    function s(e) {
      e.preventDefault();
    }
    l.default = e;
  },
  98,
);
