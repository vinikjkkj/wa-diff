__d(
  "WAWebBizAdCreationPreviewMediaRenderers.react",
  [
    "fbt",
    "WAWebMsgType",
    "bx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = 300,
      m = {
        mediaPreviewThumbnailContainer: {
          height: "x1vd4hg5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(19),
        a = t.containerXstyle,
        i = t.media,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["fullPreview", "preview", "type"]), (n[0] = l))
        : (l = n[0]);
      var u = o("useWAWebModelValues").useModelValues(i, l),
        d = u.fullPreview,
        p = u.preview,
        _ = u.type;
      if (_ === o("WAWebMsgType").MSG_TYPE.VIDEO) {
        var f;
        n[1] !== a
          ? ((f = (e || (e = r("stylex"))).props(
              m.mediaPreviewThumbnailContainer,
              a,
            )),
            (n[1] = a),
            (n[2] = f))
          : (f = n[2]);
        var g;
        n[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = { className: "x5yr21d x19kjcj4 xh8yej3" }), (n[3] = g))
          : (g = n[3]);
        var h;
        n[4] !== d || n[5] !== p
          ? ((h = c.jsx(
              "video",
              babelHelpers.extends({}, g, {
                src: d,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                poster: p,
              }),
            )),
            (n[4] = d),
            (n[5] = p),
            (n[6] = h))
          : (h = n[6]);
        var y;
        return (
          n[7] !== f || n[8] !== h
            ? ((y = c.jsx("div", babelHelpers.extends({}, f, { children: h }))),
              (n[7] = f),
              (n[8] = h),
              (n[9] = y))
            : (y = n[9]),
          y
        );
      }
      var C;
      n[10] !== a
        ? ((C = (e || (e = r("stylex"))).props(
            m.mediaPreviewThumbnailContainer,
            a,
          )),
          (n[10] = a),
          (n[11] = C))
        : (C = n[11]);
      var b;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "x5yr21d xl1xv1r xh8yej3" }), (n[12] = b))
        : (b = n[12]);
      var v;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Media preview")), (n[13] = v))
        : (v = n[13]);
      var S;
      n[14] !== p
        ? ((S = c.jsx("img", babelHelpers.extends({}, b, { src: p, alt: v }))),
          (n[14] = p),
          (n[15] = S))
        : (S = n[15]);
      var R;
      return (
        n[16] !== C || n[17] !== S
          ? ((R = c.jsx("div", babelHelpers.extends({}, C, { children: S }))),
            (n[16] = C),
            (n[17] = S),
            (n[18] = R))
          : (R = n[18]),
        R
      );
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.containerXstyle,
        i = t.thumbnailUrl,
        l;
      if (n[0] !== i) {
        var u = r("bx")("78840");
        ((l = i != null ? i : r("bx").getURL(u)), (n[0] = i), (n[1] = l));
      } else l = n[1];
      var d = l,
        p;
      n[2] !== a
        ? ((p = (e || (e = r("stylex"))).props(
            m.mediaPreviewThumbnailContainer,
            a,
          )),
          (n[2] = a),
          (n[3] = p))
        : (p = n[3]);
      var _;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { className: "x5yr21d xl1xv1r xh8yej3" }), (n[4] = _))
        : (_ = n[4]);
      var f;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Media preview")), (n[5] = f))
        : (f = n[5]);
      var g;
      n[6] !== d
        ? ((g = c.jsx("img", babelHelpers.extends({}, _, { src: d, alt: f }))),
          (n[6] = d),
          (n[7] = g))
        : (g = n[7]);
      var h;
      return (
        n[8] !== p || n[9] !== g
          ? ((h = c.jsx("div", babelHelpers.extends({}, p, { children: g }))),
            (n[8] = p),
            (n[9] = g),
            (n[10] = h))
          : (h = n[10]),
        h
      );
    }
    ((l.SingleMediaPreview = p), (l.PlaceholderMediaPreview = _));
  },
  226,
);
