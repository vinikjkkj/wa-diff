__d(
  "WAWebDragAndDrop.react",
  ["react", "react-compiler-runtime", "useWAWebPrevious", "useWAWebTimeout"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useState;
    function _(e) {
      if (e.dataTransfer)
        try {
          if (!e.dataTransfer.dropEffect) return;
        } catch (e) {
          return;
        }
    }
    function f(t) {
      var n = o("react-compiler-runtime").c(37),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.disableFromWithin,
        c = l.onDragChange,
        f = l.onDrop,
        g = p(!1),
        h = g[0],
        y = g[1],
        C = p(!1),
        b = C[0],
        v = C[1],
        S = p(!1),
        R = S[0],
        L = S[1],
        E;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            (v(!1), L(!1));
          }),
          (n[3] = E))
        : (E = n[3]);
      var k = o("useWAWebTimeout").useTimeout(E, 250),
        I = k[0],
        T = k[1],
        D = r("useWAWebPrevious")(b),
        x;
      n[4] !== s
        ? ((x = function (t) {
            s && y(!0);
          }),
          (n[4] = s),
          (n[5] = x))
        : (x = n[5]);
      var $ = x,
        P;
      n[6] !== s
        ? ((P = function (t) {
            s && y(!1);
          }),
          (n[6] = s),
          (n[7] = P))
        : (P = n[7]);
      var N = P,
        M;
      n[8] !== h || n[9] !== f
        ? ((M = function (t) {
            (t.preventDefault(), t.stopPropagation(), v(!1), L(!0), !h && f(t));
          }),
          (n[8] = h),
          (n[9] = f),
          (n[10] = M))
        : (M = n[10]);
      var w = M,
        A;
      n[11] !== h || n[12] !== T || n[13] !== b
        ? ((A = function (t) {
            (t.preventDefault(),
              t.stopPropagation(),
              T(),
              !(b || h) && (v(!0), L(!1), _(t)));
          }),
          (n[11] = h),
          (n[12] = T),
          (n[13] = b),
          (n[14] = A))
        : (A = n[14]);
      var F = A,
        O;
      n[15] !== b
        ? ((O = function (t) {
            (t.preventDefault(), t.stopPropagation(), b && (v(!1), L(!1)));
          }),
          (n[15] = b),
          (n[16] = O))
        : (O = n[16]);
      var B = O,
        W;
      n[17] !== I
        ? ((W = function (t) {
            (I(), t.preventDefault(), t.stopPropagation());
          }),
          (n[17] = I),
          (n[18] = W))
        : (W = n[18]);
      var q = W,
        U,
        V;
      (n[19] !== R || n[20] !== b || n[21] !== c || n[22] !== D
        ? ((U = function () {
            D == null || D === b || !c || c(b, R);
          }),
          (V = [R, b, c, D]),
          (n[19] = R),
          (n[20] = b),
          (n[21] = c),
          (n[22] = D),
          (n[23] = U),
          (n[24] = V))
        : ((U = n[23]), (V = n[24])),
        d(U, V));
      var H;
      (n[25] !== N || n[26] !== F || n[27] !== $ || n[28] !== q
        ? ((H = function () {
            return {
              onDragStart: $,
              onDragEnd: N,
              onDragOver: F,
              onDragLeave: q,
            };
          }),
          (n[25] = N),
          (n[26] = F),
          (n[27] = $),
          (n[28] = q),
          (n[29] = H))
        : (H = n[29]),
        m(i, H));
      var G;
      n[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = "x10l6tqk x13vifvy x1o0tod x1wvqwft xh8yej3 x5yr21d"),
          (n[30] = G))
        : (G = n[30]);
      var z;
      n[31] !== b
        ? ((z = b ? {} : { display: "none" }), (n[31] = b), (n[32] = z))
        : (z = n[32]);
      var j;
      return (
        n[33] !== B || n[34] !== w || n[35] !== z
          ? ((j = u.jsx(
              "div",
              { className: G, style: z, onDrop: w, onDragLeave: B },
              "mask",
            )),
            (n[33] = B),
            (n[34] = w),
            (n[35] = z),
            (n[36] = j))
          : (j = n[36]),
        j
      );
    }
    l.default = f;
  },
  98,
);
