__d(
  "WAWebMediaLinkPreviewImageLayout.react",
  ["WAWebDisplayType", "react", "stylex"],
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
      var t = e.children,
        n = e.displayType,
        r = e.galleryView,
        o = e.height,
        a = e.isComposerHightQualityLayout,
        i = e.isHighQualityLayout,
        l = e.isStatus,
        s = e.thumbnailJpegDirectPath,
        c = e.thumbnailJpegHQ,
        d = e.width;
      if (
        ((s != null && s !== "") || (c != null && c !== "")) &&
        o != null &&
        d != null &&
        !r
      ) {
        var m = i || a ? S : R;
        return u.jsx(m, {
          height: o,
          width: d,
          displayType: n,
          isCompose: a,
          hasHqThumbnail: c != null,
          children: t,
        });
      }
      return l && i
        ? u.jsx("div", {
            className: "x78zum5 xs83m0k x6ikm8r x10wlt62 xmqja0k xh8yej3",
            children: t,
          })
        : t;
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(t) {
      var n = t.children,
        o = t.displayType,
        a = t.hasHqThumbnail,
        i = t.height,
        l = t.isCompose,
        s = t.width,
        c = C(i, s, !0),
        d = c < 1,
        m = b(o, d, l),
        p = { height: m * c };
      return u.jsx("div", {
        "data-testid": void 0,
        className: (e || (e = r("stylex")))([
          y.thumbnailContainer,
          !l && y.highQualityLayoutThumbnailContainer,
          !a && y.blurred,
        ]),
        style: p,
        children: n,
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(t) {
      var n = t.children,
        o = t.displayType,
        a = t.hasHqThumbnail,
        i = t.height,
        l = t.isCompose,
        s = t.width,
        d = o,
        m = C(i, s),
        p = c,
        _ = { width: p / m, minWidth: p / m };
      return u.jsx("div", {
        "data-testid": void 0,
        className: (e || (e = r("stylex")))([
          y.thumbnailContainer,
          !a && y.blurred,
        ]),
        style: _,
        children: n,
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = v));
  },
  98,
);
