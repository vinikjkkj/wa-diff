__d(
  "WAWebMediaLinkPreviewImageLayout.react",
  ["WAWebDisplayType", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = 90,
      d = 240,
      m = 330,
      p = 480,
      _ = 0.25,
      f = 1,
      g = 1,
      h = 1.4,
      y = {
        thumbnailContainer: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
        highQualityLayoutThumbnailContainer: { width: "xh8yej3", $$css: !0 },
        blurred: { filter: "x14tgpju", $$css: !0 },
      };
    function C(e, t, n) {
      n === void 0 && (n = !1);
      var r = n ? [f, _] : [h, g],
        o = r[0],
        a = r[1];
      return Math.min(Math.max(e / t, a), o);
    }
    function b(e, t, n) {
      return n
        ? m
        : e === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT ||
            e === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
          ? p
          : t
            ? m
            : d;
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        r = e.displayType,
        a = e.galleryView,
        i = e.height,
        l = e.isComposerHightQualityLayout,
        s = e.isHighQualityLayout,
        c = e.isStatus,
        d = e.thumbnailJpegDirectPath,
        m = e.thumbnailJpegHQ,
        p = e.width;
      if (
        ((d != null && d !== "") || (m != null && m !== "")) &&
        i != null &&
        p != null &&
        !a
      ) {
        var _ = s || l ? S : R,
          f = m != null,
          g;
        return (
          t[0] !== _ ||
          t[1] !== n ||
          t[2] !== r ||
          t[3] !== i ||
          t[4] !== l ||
          t[5] !== f ||
          t[6] !== p
            ? ((g = u.jsx(_, {
                height: i,
                width: p,
                displayType: r,
                isCompose: l,
                hasHqThumbnail: f,
                children: n,
              })),
              (t[0] = _),
              (t[1] = n),
              (t[2] = r),
              (t[3] = i),
              (t[4] = l),
              (t[5] = f),
              (t[6] = p),
              (t[7] = g))
            : (g = t[7]),
          g
        );
      }
      if (c && s) {
        var h;
        t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = {
              className: "x78zum5 xs83m0k x6ikm8r x10wlt62 xmqja0k xh8yej3",
            }),
            (t[8] = h))
          : (h = t[8]);
        var y;
        return (
          t[9] !== n
            ? ((y = u.jsx("div", babelHelpers.extends({}, h, { children: n }))),
              (t[9] = n),
              (t[10] = y))
            : (y = t[10]),
          y
        );
      }
      return n;
    }
    function S(t) {
      var n = o("react-compiler-runtime").c(9),
        a = t.children,
        i = t.displayType,
        l = t.hasHqThumbnail,
        s = t.height,
        c = t.isCompose,
        d = t.width,
        m = C(s, d, !0),
        p = m < 1,
        _ = b(i, p, c),
        f = _ * m,
        g;
      n[0] !== f ? ((g = { height: f }), (n[0] = f), (n[1] = g)) : (g = n[1]);
      var h = g,
        v;
      n[2] !== l || n[3] !== c
        ? ((v = (e || (e = r("stylex")))([
            y.thumbnailContainer,
            !c && y.highQualityLayoutThumbnailContainer,
            !l && y.blurred,
          ])),
          (n[2] = l),
          (n[3] = c),
          (n[4] = v))
        : (v = n[4]);
      var S;
      return (
        n[5] !== a || n[6] !== h || n[7] !== v
          ? ((S = u.jsx("div", {
              "data-testid": void 0,
              className: v,
              style: h,
              children: a,
            })),
            (n[5] = a),
            (n[6] = h),
            (n[7] = v),
            (n[8] = S))
          : (S = n[8]),
        S
      );
    }
    function R(t) {
      var n = o("react-compiler-runtime").c(9),
        a = t.children,
        i = t.hasHqThumbnail,
        l = t.height,
        s = t.width,
        d = C(l, s),
        m = c / d,
        p = c / d,
        _;
      n[0] !== m || n[1] !== p
        ? ((_ = { width: m, minWidth: p }), (n[0] = m), (n[1] = p), (n[2] = _))
        : (_ = n[2]);
      var f = _,
        g;
      n[3] !== i
        ? ((g = (e || (e = r("stylex")))([
            y.thumbnailContainer,
            !i && y.blurred,
          ])),
          (n[3] = i),
          (n[4] = g))
        : (g = n[4]);
      var h;
      return (
        n[5] !== a || n[6] !== f || n[7] !== g
          ? ((h = u.jsx("div", {
              "data-testid": void 0,
              className: g,
              style: f,
              children: a,
            })),
            (n[5] = a),
            (n[6] = f),
            (n[7] = g),
            (n[8] = h))
          : (h = n[8]),
        h
      );
    }
    l.default = v;
  },
  98,
);
