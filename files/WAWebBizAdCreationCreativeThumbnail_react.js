__d(
  "WAWebBizAdCreationCreativeThumbnail.react",
  [
    "fbt",
    "DurationFormatter",
    "FBLogger",
    "WAWebMsgType",
    "WDSIconIcVideocamFilled.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { videoIcon: { color: "x1awj2ng", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.overlay,
        r = e.previewUrl,
        a = e.variant,
        i;
      t[0] !== a
        ? ((i = {
            0: {
              className: "x7kvr32 x1o0tod x1n2onr6 x13vifvy x1lzt3e6 xhtitgo",
            },
            1: {
              className: "x1o0tod x1n2onr6 x13vifvy xhtitgo xy2rkmd x3bhodz",
            },
          }[(a === "Editor") << 0]),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x5yr21d xl1xv1r x47corl xh8yej3" }), (t[2] = l))
        : (l = t[2]);
      var c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Preview")), (t[3] = c))
        : (c = t[3]);
      var d;
      t[4] !== r
        ? ((d = u.jsx("img", babelHelpers.extends({}, l, { src: r, alt: c }))),
          (t[4] = r),
          (t[5] = d))
        : (d = t[5]);
      var m;
      return (
        t[6] !== n || t[7] !== i || t[8] !== d
          ? ((m = u.jsxs(
              "div",
              babelHelpers.extends({}, i, { children: [d, n] }),
            )),
            (t[6] = n),
            (t[7] = i),
            (t[8] = d),
            (t[9] = m))
          : (m = t[9]),
        m
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.duration,
        a = e.variant,
        i;
      t[0] !== n
        ? ((i = o("DurationFormatter").formatShort(n)), (t[0] = n), (t[1] = i))
        : (i = t[1]);
      var l = i,
        s;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = {
            className:
              "x6s0dn4 x1f0yzma x1ey2m1c x78zum5 x129bwdz x1trrmfo x1o0tod x1tiyuxx x1uc92m x1nbhmlj x181vq82 x10l6tqk xh8yej3 xzkaem6",
          }),
          (t[2] = s))
        : (s = t[2]);
      var d = a === "Creative" ? 20 : 16,
        m = a === "Creative" ? 20 : 16,
        p;
      t[3] !== d || t[4] !== m
        ? ((p = u.jsx(r("WDSIconIcVideocamFilled.react"), {
            height: d,
            width: m,
            iconXstyle: c.videoIcon,
          })),
          (t[3] = d),
          (t[4] = m),
          (t[5] = p))
        : (p = t[5]);
      var _ = a === "Creative" ? "Body2Emphasized" : "Body3Emphasized",
        f;
      t[6] !== l || t[7] !== _
        ? ((f = u.jsx(r("WDSText.react"), {
            type: _,
            colorName: "contentInverse",
            children: l,
          })),
          (t[6] = l),
          (t[7] = _),
          (t[8] = f))
        : (f = t[8]);
      var g;
      return (
        t[9] !== p || t[10] !== f
          ? ((g = u.jsxs(
              "div",
              babelHelpers.extends({}, s, { children: [p, f] }),
            )),
            (t[9] = p),
            (t[10] = f),
            (t[11] = g))
          : (g = t[11]),
        g
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.attachMediaProp,
        a = e.variant,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["preview", "type", "file"]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useModelValues(n, i),
        s;
      e: {
        if (l.type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
          var c;
          (t[1] !== l.preview || t[2] !== a
            ? ((c = u.jsx(d, { previewUrl: l.preview, variant: a })),
              (t[1] = l.preview),
              (t[2] = a),
              (t[3] = c))
            : (c = t[3]),
            (s = c));
          break e;
        } else if (l.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
          var p = "data:image/jpeg;base64," + l.preview,
            _;
          t[4] !== l.duration || t[5] !== a
            ? ((_ = u.jsx(m, { duration: l.duration, variant: a })),
              (t[4] = l.duration),
              (t[5] = a),
              (t[6] = _))
            : (_ = t[6]);
          var f;
          (t[7] !== p || t[8] !== _ || t[9] !== a
            ? ((f = u.jsx(d, { previewUrl: p, variant: a, overlay: _ })),
              (t[7] = p),
              (t[8] = _),
              (t[9] = a),
              (t[10] = f))
            : (f = t[10]),
            (s = f));
          break e;
        }
        r("FBLogger")("wa_ctwa_web").mustfix("Invalid media type: " + l.type);
        var g;
        (t[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = u.jsx("div", {})), (t[11] = g))
          : (g = t[11]),
          (s = g));
      }
      var h = s,
        y;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { className: "x1280gxy x6ikm8r x10wlt62" }), (t[12] = y))
        : (y = t[12]);
      var C;
      return (
        t[13] !== h
          ? ((C = u.jsx("div", babelHelpers.extends({}, y, { children: h }))),
            (t[13] = h),
            (t[14] = C))
          : (C = t[14]),
        C
      );
    }
    l.default = p;
  },
  226,
);
