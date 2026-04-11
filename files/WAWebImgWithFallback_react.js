__d(
  "WAWebImgWithFallback.react",
  [
    "cx",
    "$InternalEnum",
    "WAWebAvatarSpinner.react",
    "WAWebClassnames",
    "WAWebDetailImage.react",
    "WAWebImg.react",
    "isEmptyObject",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        SMALL: "SMALL",
        MEDIUM: "MEDIUM",
        LARGE: "LARGE",
        AUTO: "AUTO",
        NONE: "NONE",
      },
      m = n("$InternalEnum").Mirrored(["Default", "Transparent"]);
    function p(e) {
      switch (e) {
        case d.SMALL:
          return 49;
        case d.MEDIUM:
          return 100;
        case d.LARGE:
          return 200;
        case d.NONE:
          return;
        default:
          return e;
      }
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(48),
        n = e.size,
        a = e.fallbackSVG,
        i = e.className,
        l = e.loader,
        s = e.wrapOptions,
        _ = e.transition,
        f = e.imgProps,
        g = e.theme,
        h = e.shape,
        y = n === void 0 ? d.SMALL : n,
        C = l === void 0 ? !1 : l,
        b;
      t[0] !== s
        ? ((b = s === void 0 ? {} : s), (t[0] = s), (t[1] = b))
        : (b = t[1]);
      var v = b,
        S =
          h === void 0
            ? o("WAWebDetailImage.react").DetailImageShape.Circle
            : h,
        R = c(!1),
        L = R[0],
        E = R[1],
        k;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function () {
            E(!0);
          }),
          (t[2] = k))
        : (k = t[2]);
      var I = k,
        T = f.alt,
        D = f.crossOrigin,
        x = f.draggable,
        $ = f.src,
        P = v.centerWrapperChild,
        N = v.wrapperClassName,
        M = _ === !0,
        w;
      if (t[3] !== L || t[4] !== M) {
        var A;
        ((w = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ak0l",
          ((A = {}), (A._ak0m = L), (A._ak0n = M), A),
        )),
          (t[3] = L),
          (t[4] = M),
          (t[5] = w));
      } else w = t[5];
      var F = w,
        O;
      t[6] !== y ? ((O = p(y)), (t[6] = y), (t[7] = O)) : (O = t[7]);
      var B;
      t[8] !== y ? ((B = p(y)), (t[8] = y), (t[9] = B)) : (B = t[9]);
      var W;
      t[10] !== O || t[11] !== B
        ? ((W = { height: O, width: B }), (t[10] = O), (t[11] = B), (t[12] = W))
        : (W = t[12]);
      var q = W,
        U;
      if (C && !L) {
        var V;
        (t[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = u.jsx(r("WAWebAvatarSpinner.react"), {})), (t[13] = V))
          : (V = t[13]),
          (U = V));
      }
      var H;
      t[14] !== T || t[15] !== D || t[16] !== x || t[17] !== $ || t[18] !== F
        ? ((H = u.jsx(r("WAWebImg.react"), {
            src: $,
            className: F,
            onLoad: I,
            alt: T,
            crossOrigin: D,
            draggable: x,
          })),
          (t[14] = T),
          (t[15] = D),
          (t[16] = x),
          (t[17] = $),
          (t[18] = F),
          (t[19] = H))
        : (H = t[19]);
      var G = H,
        z;
      if (
        t[20] !== P ||
        t[21] !== G ||
        t[22] !== L ||
        t[23] !== g ||
        t[24] !== v ||
        t[25] !== N
      ) {
        var j;
        ((z =
          v != null && !r("isEmptyObject")(v)
            ? u.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  N,
                  "_ak0o",
                  "_ak0p",
                  ((j = {}),
                  (j._ak0q = P),
                  (j._ak0m = L),
                  (j._ak0r = g === m.Transparent),
                  j),
                ),
                children: G,
              })
            : G),
          (t[20] = P),
          (t[21] = G),
          (t[22] = L),
          (t[23] = g),
          (t[24] = v),
          (t[25] = N),
          (t[26] = z));
      } else z = t[26];
      var K = z,
        Q;
      t[27] !== U || t[28] !== $ || t[29] !== K
        ? ((Q = $ !== "" ? u.jsxs(u.Fragment, { children: [U, K] }) : null),
          (t[27] = U),
          (t[28] = $),
          (t[29] = K),
          (t[30] = Q))
        : (Q = t[30]);
      var X = Q,
        Y = S === o("WAWebDetailImage.react").DetailImageShape.Circle,
        J = g === m.Transparent,
        Z = S === o("WAWebDetailImage.react").DetailImageShape.Squircle,
        ee;
      if (t[31] !== i || t[32] !== Y || t[33] !== J || t[34] !== Z) {
        var te;
        ((ee = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ak0s",
          i,
          ((te = {}), (te._ak0t = Y), (te._ak0r = J), (te._ak0u = Z), te),
        )),
          (t[31] = i),
          (t[32] = Y),
          (t[33] = J),
          (t[34] = Z),
          (t[35] = ee));
      } else ee = t[35];
      var ne;
      if (
        t[36] !== P ||
        t[37] !== a ||
        t[38] !== L ||
        t[39] !== g ||
        t[40] !== _ ||
        t[41] !== N
      ) {
        var re;
        ((ne =
          !L &&
          u.jsx("div", {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              N,
              "_ak0o",
              "_ak0v",
              ((re = {}),
              (re._ak0q = P),
              (re._ak0n = _ === !0),
              (re._ak0r = g === m.Transparent),
              re),
            ),
            children: a,
          })),
          (t[36] = P),
          (t[37] = a),
          (t[38] = L),
          (t[39] = g),
          (t[40] = _),
          (t[41] = N),
          (t[42] = ne));
      } else ne = t[42];
      var oe;
      return (
        t[43] !== X || t[44] !== q || t[45] !== ee || t[46] !== ne
          ? ((oe = u.jsxs("div", {
              className: ee,
              style: q,
              children: [X, ne],
            })),
            (t[43] = X),
            (t[44] = q),
            (t[45] = ee),
            (t[46] = ne),
            (t[47] = oe))
          : (oe = t[47]),
        oe
      );
    }
    ((l.Theme = m), (l.ImgWithFallback = _));
  },
  98,
);
