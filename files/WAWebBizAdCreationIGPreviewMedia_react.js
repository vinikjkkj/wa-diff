__d(
  "WAWebBizAdCreationIGPreviewMedia.react",
  [
    "fbt",
    "WAWebBizAdCreationPreviewMediaRenderers.react",
    "WAWebChevronIcon.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 300,
      d = {
        chevronButtonIcon: { color: "x17t9dm2", $$css: !0 },
        chevronButtonIconFlipped: { transform: "xpk2tj9", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.currentIndex,
        a = e.media,
        i = e.totalCount,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x1n2onr6 x2lah0s x6ikm8r x10wlt62" }), (t[0] = l))
        : (l = t[0]);
      var s;
      t[1] !== a
        ? ((s = u.jsx(
            o("WAWebBizAdCreationPreviewMediaRenderers.react")
              .SingleMediaPreview,
            { media: a },
          )),
          (t[1] = a),
          (t[2] = s))
        : (s = t[2]);
      var c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className:
              "x10l6tqk x1ctoq22 xffp2at x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xhtitgo",
          }),
          (t[3] = c))
        : (c = t[3]);
      var d = n + 1 + "/" + i,
        m;
      t[4] !== d
        ? ((m = u.jsx(
            "div",
            babelHelpers.extends({}, c, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body3Emphasized",
                colorName: "contentInverse",
                children: d,
              }),
            }),
          )),
          (t[4] = d),
          (t[5] = m))
        : (m = t[5]);
      var p;
      return (
        t[6] !== s || t[7] !== m
          ? ((p = u.jsxs(
              "div",
              babelHelpers.extends({}, l, { children: [s, m] }),
            )),
            (t[6] = s),
            (t[7] = m),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.currentIndex,
        r = e.medias,
        a = e.setCurrentIndex;
      if (r == null || r.length === 0) return null;
      var i;
      t[0] !== r.length || t[1] !== a
        ? ((i = function () {
            a(function (e) {
              return e > 0 ? e - 1 : r.length - 1;
            });
          }),
          (t[0] = r.length),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c;
      t[3] !== r.length || t[4] !== a
        ? ((c = function () {
            a(function (e) {
              return e < r.length - 1 ? e + 1 : 0;
            });
          }),
          (t[3] = r.length),
          (t[4] = a),
          (t[5] = c))
        : (c = t[5]);
      var p = c,
        _ = n === 0,
        f = n === r.length - 1,
        g = r.length > 1 && !_,
        h = r.length > 1 && !f,
        y;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { className: "x1n2onr6 x2lah0s x6ikm8r x10wlt62" }), (t[6] = y))
        : (y = t[6]);
      var C = r[n],
        b;
      t[7] !== n || t[8] !== r.length || t[9] !== C
        ? ((b = u.jsx(m, { currentIndex: n, media: C, totalCount: r.length })),
          (t[7] = n),
          (t[8] = r.length),
          (t[9] = C),
          (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] !== l || t[12] !== g
        ? ((v =
            g &&
            u.jsx("button", {
              className:
                "x10l6tqk xwa60dl x1cb1t30 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1ypdohk x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x78zum5 x6s0dn4 xl56j7k xhtitgo x10ohsjv x1ixa496",
              onClick: l,
              "aria-label": s._(/*BTDS*/ "Previous media"),
              children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                height: 24,
                width: 24,
                directional: !0,
                iconXstyle: [d.chevronButtonIcon, d.chevronButtonIconFlipped],
              }),
            })),
          (t[11] = l),
          (t[12] = g),
          (t[13] = v))
        : (v = t[13]);
      var S;
      t[14] !== p || t[15] !== h
        ? ((S =
            h &&
            u.jsx("button", {
              className:
                "x10l6tqk xwa60dl x1cb1t30 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1ypdohk x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x78zum5 x6s0dn4 xl56j7k xhtitgo x10ohsjv xffp2at",
              onClick: p,
              "aria-label": s._(/*BTDS*/ "Next media"),
              children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                height: 24,
                width: 24,
                directional: !0,
                iconXstyle: d.chevronButtonIcon,
              }),
            })),
          (t[14] = p),
          (t[15] = h),
          (t[16] = S))
        : (S = t[16]);
      var R;
      return (
        t[17] !== b || t[18] !== v || t[19] !== S
          ? ((R = u.jsxs(
              "div",
              babelHelpers.extends({}, y, { children: [b, v, S] }),
            )),
            (t[17] = b),
            (t[18] = v),
            (t[19] = S),
            (t[20] = R))
          : (R = t[20]),
        R
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(47),
        n = e.currentIndex,
        a = e.medias,
        i = e.setCurrentIndex,
        l = e.thumbnailUrl,
        c = e.videoPosterUrl,
        m = e.videoUrl;
      if (m != null) {
        var _, h, y;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = { className: "x2lah0s x6ikm8r x10wlt62" }),
            (h = { className: "x1vd4hg5 x6ikm8r x10wlt62" }),
            (y = { className: "x5yr21d x19kjcj4 xh8yej3" }),
            (t[0] = _),
            (t[1] = h),
            (t[2] = y))
          : ((_ = t[0]), (h = t[1]), (y = t[2]));
        var C;
        return (
          t[3] !== c || t[4] !== m
            ? ((C = u.jsx(
                "div",
                babelHelpers.extends({}, _, {
                  children: u.jsx(
                    "div",
                    babelHelpers.extends({}, h, {
                      children: u.jsx(
                        "video",
                        babelHelpers.extends({}, y, {
                          src: m,
                          autoPlay: !0,
                          loop: !0,
                          muted: !0,
                          playsInline: !0,
                          poster: c,
                        }),
                      ),
                    }),
                  ),
                }),
              )),
              (t[3] = c),
              (t[4] = m),
              (t[5] = C))
            : (C = t[5]),
          C
        );
      }
      if (a != null && a.length > 0) {
        if (a.length === 1) {
          var b = a[0],
            v;
          t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = { className: "x2lah0s x6ikm8r x10wlt62" }), (t[6] = v))
            : (v = t[6]);
          var S;
          return (
            t[7] !== b
              ? ((S = u.jsx(
                  "div",
                  babelHelpers.extends({}, v, {
                    children:
                      typeof b == "string"
                        ? u.jsx("div", {
                            className: "x1vd4hg5 x6ikm8r x10wlt62",
                            children: u.jsx("img", {
                              className: "x5yr21d xl1xv1r xh8yej3",
                              src: b,
                              alt: s._(/*BTDS*/ "Media preview"),
                            }),
                          })
                        : u.jsx(
                            o("WAWebBizAdCreationPreviewMediaRenderers.react")
                              .SingleMediaPreview,
                            { media: b },
                          ),
                  }),
                )),
                (t[7] = b),
                (t[8] = S))
              : (S = t[8]),
            S
          );
        }
        var R = a.every(g);
        if (R) {
          var L = n === 0,
            E = n === a.length - 1,
            k = !L,
            I = !E,
            T;
          t[9] !== a.length || t[10] !== i
            ? ((T = function () {
                i(function (e) {
                  return e > 0 ? e - 1 : a.length - 1;
                });
              }),
              (t[9] = a.length),
              (t[10] = i),
              (t[11] = T))
            : (T = t[11]);
          var D = T,
            x;
          t[12] !== a.length || t[13] !== i
            ? ((x = function () {
                i(function (e) {
                  return e < a.length - 1 ? e + 1 : 0;
                });
              }),
              (t[12] = a.length),
              (t[13] = i),
              (t[14] = x))
            : (x = t[14]);
          var $ = x,
            P = a[n],
            N,
            M,
            w;
          t[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((N = { className: "x1n2onr6 x2lah0s x6ikm8r x10wlt62" }),
              (M = { className: "x1vd4hg5 x6ikm8r x10wlt62" }),
              (w = {
                className:
                  "x10l6tqk x1ctoq22 xffp2at x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xhtitgo",
              }),
              (t[15] = N),
              (t[16] = M),
              (t[17] = w))
            : ((N = t[15]), (M = t[16]), (w = t[17]));
          var A = n + 1,
            F;
          t[18] !== a.length || t[19] !== A
            ? ((F = u.jsx(
                "div",
                babelHelpers.extends({}, w, {
                  children: u.jsxs(r("WDSText.react"), {
                    type: "Body3",
                    colorName: "contentDefault",
                    children: [A, "/", a.length],
                  }),
                }),
              )),
              (t[18] = a.length),
              (t[19] = A),
              (t[20] = F))
            : (F = t[20]);
          var O;
          t[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((O = { className: "x5yr21d xl1xv1r xh8yej3" }), (t[21] = O))
            : (O = t[21]);
          var B = typeof P == "string" ? P : "",
            W;
          t[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((W = s._(/*BTDS*/ "Media preview")), (t[22] = W))
            : (W = t[22]);
          var q;
          t[23] !== B
            ? ((q = u.jsx(
                "img",
                babelHelpers.extends({}, O, { src: B, alt: W }),
              )),
              (t[23] = B),
              (t[24] = q))
            : (q = t[24]);
          var U;
          t[25] !== q || t[26] !== F
            ? ((U = u.jsxs(
                "div",
                babelHelpers.extends({}, M, { children: [F, q] }),
              )),
              (t[25] = q),
              (t[26] = F),
              (t[27] = U))
            : (U = t[27]);
          var V;
          t[28] !== D || t[29] !== k
            ? ((V =
                k &&
                u.jsx("button", {
                  className:
                    "x10l6tqk xwa60dl x1cb1t30 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1ypdohk x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x78zum5 x6s0dn4 xl56j7k xhtitgo x10ohsjv x1ixa496",
                  onClick: D,
                  "aria-label": s._(/*BTDS*/ "Previous media"),
                  children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                    height: 24,
                    width: 24,
                    directional: !0,
                    iconXstyle: [
                      d.chevronButtonIcon,
                      d.chevronButtonIconFlipped,
                    ],
                  }),
                })),
              (t[28] = D),
              (t[29] = k),
              (t[30] = V))
            : (V = t[30]);
          var H;
          t[31] !== $ || t[32] !== I
            ? ((H =
                I &&
                u.jsx("button", {
                  className:
                    "x10l6tqk xwa60dl x1cb1t30 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1ypdohk x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x78zum5 x6s0dn4 xl56j7k xhtitgo x10ohsjv xffp2at",
                  onClick: $,
                  "aria-label": s._(/*BTDS*/ "Next media"),
                  children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                    height: 24,
                    width: 24,
                    directional: !0,
                    iconXstyle: d.chevronButtonIcon,
                  }),
                })),
              (t[31] = $),
              (t[32] = I),
              (t[33] = H))
            : (H = t[33]);
          var G;
          return (
            t[34] !== U || t[35] !== V || t[36] !== H
              ? ((G = u.jsxs(
                  "div",
                  babelHelpers.extends({}, N, { children: [U, V, H] }),
                )),
                (t[34] = U),
                (t[35] = V),
                (t[36] = H),
                (t[37] = G))
              : (G = t[37]),
            G
          );
        }
        var z;
        t[38] !== a
          ? ((z = a.filter(f)), (t[38] = a), (t[39] = z))
          : (z = t[39]);
        var j = z,
          K;
        return (
          t[40] !== j || t[41] !== n || t[42] !== i
            ? ((K = u.jsx(p, {
                currentIndex: n,
                medias: j,
                setCurrentIndex: i,
              })),
              (t[40] = j),
              (t[41] = n),
              (t[42] = i),
              (t[43] = K))
            : (K = t[43]),
          K
        );
      }
      var Q;
      t[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = { className: "x2lah0s x6ikm8r x10wlt62" }), (t[44] = Q))
        : (Q = t[44]);
      var X;
      return (
        t[45] !== l
          ? ((X = u.jsx(
              "div",
              babelHelpers.extends({}, Q, {
                children: u.jsx(
                  o("WAWebBizAdCreationPreviewMediaRenderers.react")
                    .PlaceholderMediaPreview,
                  { thumbnailUrl: l },
                ),
              }),
            )),
            (t[45] = l),
            (t[46] = X))
          : (X = t[46]),
        X
      );
    }
    function f(e) {
      return typeof e != "string";
    }
    function g(e) {
      return typeof e == "string";
    }
    l.MediaPreviewRow = _;
  },
  226,
);
