__d(
  "GeoHorizontalBarChartUtils",
  [
    "$InternalEnum",
    "GeoMediaItem.react",
    "GeoPrivateChartVisibilityContext",
    "GeoPrivateMediaUtils",
    "react",
    "react-compiler-runtime",
    "useGeoTheme",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useState,
      p = 32,
      _ = { size: p },
      f = 50;
    function g(e) {
      return e != null
        ? o("GeoPrivateMediaUtils").isMediaItem(e)
          ? e
          : s.jsx(r("GeoMediaItem.react"), { media: e, size: p })
        : s.jsx("div", { className: "x2lah0s x46jg8d" });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = n("$InternalEnum").Mirrored(["NORMAL", "COMPACT"]),
      y = "x1webfkv-B",
      C = "x1m1j469-B",
      b = {
        root: {
          height: "x5yr21d",
          width: "xh8yej3",
          position: "x1n2onr6",
          $$css: !0,
        },
        list: {
          flexGrow: "x1iyjqo2",
          listStyleType: "x3ct3a4",
          listStylePosition: null,
          listStyleImage: null,
          width: "xh8yej3",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          minWidth: "xeuugli",
          $$css: !0,
        },
        item: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          width: "xh8yej3",
          $$css: !0,
        },
        itemHit: { width: "xh8yej3", position: "x10l6tqk", $$css: !0 },
        itemHitContent: {
          visibility: "xlshs6z",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        itemContent: { position: "x1n2onr6", $$css: !0 },
        label: { paddingInlineStart: "xmzvs34", $$css: !0 },
        labelBase: { opacity: "xg01cxk", $$css: !0 },
        labelEntered: {
          animationName: "x15ctrt1",
          animationDuration: "x18stm66",
          animationFillMode: "x10e4vud",
          transform: "xbryuvx",
          transitionProperty: "x11xpdln",
          transitionDuration: "xdpj1uo",
          opacity: "x1hc1fzr",
          $$css: !0,
        },
        mediaSpace: { flexShrink: "x2lah0s", minWidth: "x46jg8d", $$css: !0 },
        bar: {
          borderStartStartRadius: "xr9e8f9",
          borderStartEndRadius: "x1e4oeot",
          borderEndEndRadius: "x1ui04y5",
          borderEndStartRadius: "x6en5u8",
          flexShrink: "x2lah0s",
          height: "x1kpxq89",
          $$css: !0,
        },
        barCompact: { height: "xdk7pt", $$css: !0 },
        barMinWidth: { minWidth: "x9041oi", $$css: !0 },
        barAnimatedBase: {
          transform: "x1ufz0iv",
          transformOrigin: "x1nf803f",
          $$css: !0,
        },
        barAnimatedEnter: {
          animationName: "x2ekcqr",
          animationDuration: "x18stm66",
          animationFillMode: "x10e4vud",
          $$css: !0,
        },
        spacingPlaceholder: {
          flexShrink: "xs83m0k",
          visibility: "xlshs6z",
          $$css: !0,
        },
        hoverHighlight: {
          marginTop: "x1rdy4ex",
          marginInlineEnd: "x14z9mp",
          marginBottom: "x12nagc",
          marginInlineStart: "x1lziwak",
          height: "x1qx5ct2",
          $$css: !0,
        },
      };
    function v(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.hasAnimation,
        a = e.index,
        i = c(r("GeoPrivateChartVisibilityContext")),
        l = m(!1),
        s = l[0],
        u = l[1],
        p,
        _;
      (t[0] !== n || t[1] !== a || t[2] !== i
        ? ((p = function () {
            n &&
              i &&
              window.setTimeout(function () {
                u(!0);
              }, a * f);
          }),
          (_ = [n, a, i]),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = p),
          (t[4] = _))
        : ((p = t[3]), (_ = t[4])),
        d(p, _));
      var g = r("useGeoTheme")(),
        h = g.selectAnimation,
        y = g.selectTransition,
        C;
      t[5] !== h
        ? ((C = h({ duration: "slow", timing: "quickMove" })),
          (t[5] = h),
          (t[6] = C))
        : (C = t[6]);
      var v = C,
        S;
      t[7] !== y
        ? ((S = y({ duration: "slow", timing: "quickMove" })),
          (t[7] = y),
          (t[8] = S))
        : (S = t[8]);
      var R = S,
        L = s && b.barAnimatedEnter,
        E;
      t[9] !== v || t[10] !== L
        ? ((E = [v, b.barAnimatedBase, L]),
          (t[9] = v),
          (t[10] = L),
          (t[11] = E))
        : (E = t[11]);
      var k = E,
        I = m(null),
        T = I[0],
        D = I[1],
        x;
      t[12] !== n
        ? ((x = function (t) {
            t != null && n && D(t.offsetWidth);
          }),
          (t[12] = n),
          (t[13] = x))
        : (x = t[13]);
      var $ = x,
        P =
          s && T != null ? "translateX(0)" : "translateX(-" + (T || 0) + "px)",
        N;
      t[14] !== P
        ? ((N = { transform: P }), (t[14] = P), (t[15] = N))
        : (N = t[15]);
      var M = N,
        w = s && R,
        A = s && b.labelEntered,
        F;
      t[16] !== v || t[17] !== w || t[18] !== A
        ? ((F = [v, w, b.labelBase, A]),
          (t[16] = v),
          (t[17] = w),
          (t[18] = A),
          (t[19] = F))
        : (F = t[19]);
      var O = F,
        B = n ? $ : null,
        W = n ? k : void 0,
        q = n ? M : void 0,
        U = n ? O : void 0,
        V;
      return (
        t[20] !== B || t[21] !== W || t[22] !== q || t[23] !== U
          ? ((V = {
              barRef: B,
              barAnimationXStyle: W,
              metricAnimationInlineStyle: q,
              metricAnimationXStyle: U,
            }),
            (t[20] = B),
            (t[21] = W),
            (t[22] = q),
            (t[23] = U),
            (t[24] = V))
          : (V = t[24]),
        V
      );
    }
    ((l.RANKING_ICON_SIZE = p),
      (l.mediaIconSize = _),
      (l.getBarChartMediaItem = g),
      (l.HorizontalBarHeight = h),
      (l.styles = b),
      (l.useEnterAnimation = v));
  },
  98,
);
