__d(
  "WAWebMediaThumbMediaImageThumb.react",
  [
    "WAWebMediaData",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMediaUrlProvider",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.ref,
        a = e.children,
        i = e.className,
        l = e.onClick,
        u = e.onDragStart,
        c = e.shade,
        d = e.tabIndex,
        m = e.url,
        p;
      t[0] !== c
        ? ((p =
            c === !0
              ? s.jsx("div", {
                  className:
                    "xtc4mwu x1ey2m1c x1qx5ct2 xu96u03 x47corl x10l6tqk xh8yej3",
                })
              : null),
          (t[0] = c),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f;
      t[2] !== m
        ? ((f =
            m != null && m !== ""
              ? { backgroundImage: "url(" + m + ")" }
              : null),
          (t[2] = m),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h = d != null ? d : 0,
        y = u == null ? null : !0,
        C;
      t[4] !== a ||
      t[5] !== i ||
      t[6] !== u ||
      t[7] !== n ||
      t[8] !== _ ||
      t[9] !== g ||
      t[10] !== y
        ? ((C = s.jsxs("div", {
            ref: n,
            style: g,
            className: i,
            "data-testid": void 0,
            onDragStart: u,
            draggable: y,
            children: [a, _],
          })),
          (t[4] = a),
          (t[5] = i),
          (t[6] = u),
          (t[7] = n),
          (t[8] = _),
          (t[9] = g),
          (t[10] = y),
          (t[11] = C))
        : (C = t[11]);
      var b;
      return (
        t[12] !== l || t[13] !== h || t[14] !== C
          ? ((b = s.jsx(r("WAWebUnstyledButton.react"), {
              onClick: l,
              tabIndex: h,
              children: C,
            })),
            (t[12] = l),
            (t[13] = h),
            (t[14] = C),
            (t[15] = b))
          : (b = t[15]),
        b
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.ref,
        a = e.isRefreshed,
        i = e.mediaData,
        l = e.onClick,
        c = e.onDragStart,
        d = e.shade,
        m = e.shouldApplyBlur,
        p = e.tabIndex,
        _ = e.url,
        f = a === void 0 ? !1 : a,
        g = !!m,
        h = p != null ? p : 0,
        y;
      t[0] !== f || t[1] !== g
        ? ((y = {
            0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
            2: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
            1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm xhe8x8x",
            3: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm xhe8x8x",
          }[(!!f << 1) | (!!g << 0)]),
          (t[0] = f),
          (t[1] = g),
          (t[2] = y))
        : (y = t[2]);
      var C;
      t[3] !== i.preview
        ? ((C =
            i.preview instanceof r("WAWebMediaOpaqueData")
              ? i.preview.url()
              : null),
          (t[3] = i.preview),
          (t[4] = C))
        : (C = t[4]);
      var b;
      t[5] !== f || t[6] !== _
        ? ((b =
            _ != null
              ? s.jsx("div", {
                  className: {
                    0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
                    1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
                  }[!!f << 0],
                  style: { backgroundImage: "url(" + _ + ")" },
                })
              : null),
          (t[5] = f),
          (t[6] = _),
          (t[7] = b))
        : (b = t[7]);
      var v;
      return (
        t[8] !== l ||
        t[9] !== c ||
        t[10] !== n ||
        t[11] !== d ||
        t[12] !== h ||
        t[13] !== y ||
        t[14] !== C ||
        t[15] !== b
          ? ((v = s.jsx(u, {
              ref: n,
              tabIndex: h,
              onClick: l,
              onDragStart: c,
              className: y,
              shade: d,
              url: C,
              children: b,
            })),
            (t[8] = l),
            (t[9] = c),
            (t[10] = n),
            (t[11] = d),
            (t[12] = h),
            (t[13] = y),
            (t[14] = C),
            (t[15] = b),
            (t[16] = v))
          : (v = t[16]),
        v
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.ref,
        r = e.isRefreshed,
        a = e.mediaData,
        i = e.onClick,
        l = e.onDragStart,
        d = e.shade,
        m = e.tabIndex,
        p;
      return (
        t[0] !== r ||
        t[1] !== a ||
        t[2] !== i ||
        t[3] !== l ||
        t[4] !== n ||
        t[5] !== d ||
        t[6] !== m
          ? ((p =
              a.preview != null
                ? s.jsx(c, {
                    tabIndex: m,
                    ref: n,
                    onClick: i,
                    onDragStart: l,
                    mediaData: a,
                    isRefreshed: r,
                  })
                : s.jsx(u, {
                    ref: n,
                    tabIndex: m,
                    onClick: i,
                    onDragStart: l,
                    className: {
                      0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
                      1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
                    }[(r === !0) << 0],
                    shade: d,
                    isRefreshed: r,
                  })),
            (t[0] = r),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l),
            (t[4] = n),
            (t[5] = d),
            (t[6] = m),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(48),
        n = e.ref,
        a = e.downloadMedia,
        i = e.msg,
        l = e.onClick,
        m = e.onDragStart,
        p = e.preferPreview,
        _ = e.tabIndex,
        f = e.isRefreshed,
        g = _ === void 0 ? -1 : _,
        h = f === void 0 ? !1 : f,
        y = i.mediaData,
        C;
      t[0] !== l || t[1] !== m || t[2] !== n || t[3] !== g
        ? ((C = { onClick: l, onDragStart: m, ref: n, tabIndex: g }),
          (t[0] = l),
          (t[1] = m),
          (t[2] = n),
          (t[3] = g),
          (t[4] = C))
        : (C = t[4]);
      var b = C;
      switch (y.type) {
        case r("WAWebMediaData").TYPE.AUDIO: {
          var v;
          t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((v =
                "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm"),
              (t[5] = v))
            : (v = t[5]);
          var S;
          return (
            t[6] !== b
              ? ((S = s.jsx(
                  u,
                  babelHelpers.extends({}, b, {
                    className: v + " attach-media-audio-thumb",
                  }),
                )),
                (t[6] = b),
                (t[7] = S))
              : (S = t[7]),
            S
          );
        }
        case r("WAWebMediaData").TYPE.VIDEO: {
          var R,
            L = y.fullPreviewData == null && y.preview == null,
            E = (R = y.fullPreviewData) != null ? R : y.preview,
            k = y.isGif && !y.preview,
            I;
          t[8] !== h || t[9] !== L
            ? ((I = {
                0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
                2: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
                1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm xhe8x8x",
                3: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm xhe8x8x",
              }[(!!h << 1) | (!!L << 0)]),
              (t[8] = h),
              (t[9] = L),
              (t[10] = I))
            : (I = t[10]);
          var T = I + " " + (k ? "media-video-thumb" : ""),
            D;
          t[11] !== E
            ? ((D = E instanceof r("WAWebMediaOpaqueData") ? E.url() : null),
              (t[11] = E),
              (t[12] = D))
            : (D = t[12]);
          var x;
          return (
            t[13] !== b || t[14] !== T || t[15] !== D
              ? ((x = s.jsx(
                  u,
                  babelHelpers.extends({}, b, {
                    className: T,
                    shade: !0,
                    url: D,
                  }),
                )),
                (t[13] = b),
                (t[14] = T),
                (t[15] = D),
                (t[16] = x))
              : (x = t[16]),
            x
          );
        }
        case r("WAWebMediaData").TYPE.IMAGE: {
          var $ =
            y.preview != null &&
            y.mediaStage === o("WAWebMediaTypes").MediaDataStage.NEED_POKE;
          if (p === !0) {
            var P;
            return (
              t[17] !== h ||
              t[18] !== y ||
              t[19] !== i.star ||
              t[20] !== b ||
              t[21] !== $
                ? ((P = s.jsx(
                    d,
                    babelHelpers.extends({}, b, {
                      mediaData: y,
                      shade: i.star,
                      shouldApplyBlur: $,
                      isRefreshed: h,
                    }),
                  )),
                  (t[17] = h),
                  (t[18] = y),
                  (t[19] = i.star),
                  (t[20] = b),
                  (t[21] = $),
                  (t[22] = P))
                : (P = t[22]),
              P
            );
          }
          var N;
          t[23] !== h
            ? ((N = {
                0: {
                  className:
                    "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
                },
                1: {
                  className:
                    "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
                },
              }[!!h << 0]),
              (t[23] = h),
              (t[24] = N))
            : (N = t[24]);
          var M;
          t[25] !== h ||
          t[26] !== y ||
          t[27] !== i.star ||
          t[28] !== b ||
          t[29] !== $
            ? ((M = function () {
                return s.jsx(
                  d,
                  babelHelpers.extends({}, b, {
                    mediaData: y,
                    shade: i.star,
                    shouldApplyBlur: $,
                    isRefreshed: h,
                  }),
                );
              }),
              (t[25] = h),
              (t[26] = y),
              (t[27] = i.star),
              (t[28] = b),
              (t[29] = $),
              (t[30] = M))
            : (M = t[30]);
          var w;
          t[31] !== h ||
          t[32] !== y ||
          t[33] !== i.star ||
          t[34] !== b ||
          t[35] !== $
            ? ((w = function (t) {
                return s.jsx(
                  c,
                  babelHelpers.extends({}, b, {
                    mediaData: y,
                    shade: i.star,
                    shouldApplyBlur: $,
                    url: t,
                    isRefreshed: h,
                  }),
                );
              }),
              (t[31] = h),
              (t[32] = y),
              (t[33] = i.star),
              (t[34] = b),
              (t[35] = $),
              (t[36] = w))
            : (w = t[36]);
          var A;
          t[37] !== a || t[38] !== y || t[39] !== M || t[40] !== w
            ? ((A = s.jsx(r("WAWebMediaUrlProvider"), {
                mediaData: y,
                placeholderRenderer: M,
                renderProgressively: !0,
                downloadMedia: a,
                children: w,
              })),
              (t[37] = a),
              (t[38] = y),
              (t[39] = M),
              (t[40] = w),
              (t[41] = A))
            : (A = t[41]);
          var F;
          return (
            t[42] !== N || t[43] !== A
              ? ((F = s.jsx(
                  "div",
                  babelHelpers.extends({}, N, { children: A }),
                )),
                (t[42] = N),
                (t[43] = A),
                (t[44] = F))
              : (F = t[44]),
            F
          );
        }
        default: {
          var O;
          return (
            t[45] !== i.star || t[46] !== b
              ? ((O = s.jsx(u, babelHelpers.extends({}, b, { shade: i.star }))),
                (t[45] = i.star),
                (t[46] = b),
                (t[47] = O))
              : (O = t[47]),
            O
          );
        }
      }
    }
    l.default = m;
  },
  98,
);
