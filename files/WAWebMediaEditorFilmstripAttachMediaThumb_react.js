__d(
  "WAWebMediaEditorFilmstripAttachMediaThumb.react",
  [
    "cx",
    "fbt",
    "WAWebAudioFileIcon.react",
    "WAWebClassnames",
    "WAWebClickable.react",
    "WAWebDocumentFileIcon",
    "WAWebKeyboardIsKeyActivation",
    "WAWebMimeTypes",
    "WAWebMsgType",
    "WAWebStateUtils",
    "WAWebXAltIcon.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebHover",
    "useWAWebIsKeyboardUser",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useRef,
      f = m.useState,
      g = {
        closeButton: {
          position: "x10l6tqk",
          top: "xnfr1j",
          insetInlineEnd: "x1h1655f",
          left: null,
          right: null,
          zIndex: "x16uhe5s",
          color: "x1u01il4",
          opacity: "xg01cxk",
          $$css: !0,
        },
        closeButtonVisible: { opacity: "x1hc1fzr", $$css: !0 },
      };
    function h(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.previewUrl,
        r = "_ak3i",
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u._(/*BTDS*/ "Preview")), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = d.jsx("div", {
              className: r,
              children: d.jsx("img", { src: n, alt: a }),
            })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function y(e) {
      var t,
        n = o("react-compiler-runtime").c(15),
        a = e.attachMedia,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            "mimetype",
            "preview",
            "type",
            "fullPreview",
            "fullPreviewSize",
            "documentPageCount",
            "fileExt",
          ]),
          (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebModelValues").useModelValues(a, i);
      if (l.type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
        var s;
        return (
          n[1] !== l.preview
            ? ((s = d.jsx(h, { previewUrl: l.preview })),
              (n[1] = l.preview),
              (n[2] = s))
            : (s = n[2]),
          s
        );
      } else if (l.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
        var u = "data:image/jpeg;base64," + l.preview,
          c;
        return (
          n[3] !== u
            ? ((c = d.jsx(h, { previewUrl: u })), (n[3] = u), (n[4] = c))
            : (c = n[4]),
          c
        );
      } else if (o("WAWebMimeTypes").previewType(l.mimetype) === "pdf") {
        var m =
          l.fullPreview &&
          l.fullPreviewSize &&
          l.documentPageCount != null &&
          l.documentPageCount > 0;
        if (m) {
          var p;
          return (
            n[5] !== l.fullPreview
              ? ((p = d.jsx(h, { previewUrl: l.fullPreview })),
                (n[5] = l.fullPreview),
                (n[6] = p))
              : (p = n[6]),
            p
          );
        }
      }
      if (l.type === o("WAWebMsgType").MSG_TYPE.AUDIO) {
        var _;
        return (
          n[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = d.jsx("div", {
                className: "_ak3i",
                children: d.jsx(
                  o("WAWebAudioFileIcon.react").AudioFileIcon,
                  {},
                ),
              })),
              (n[7] = _))
            : (_ = n[7]),
          _
        );
      }
      var f;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_ak3i",
            "_ak3j",
            "x78zum5 xl56j7k x6s0dn4",
          )),
          (n[8] = f))
        : (f = n[8]);
      var g = f,
        y = (t = l.fileExt) != null ? t : "",
        C;
      n[9] !== l.mimetype || n[10] !== y
        ? ((C = d.jsx(r("WAWebDocumentFileIcon"), {
            width: 26,
            mimeType: l.mimetype,
            ext: y,
          })),
          (n[9] = l.mimetype),
          (n[10] = y),
          (n[11] = C))
        : (C = n[11]);
      var b;
      return (
        n[12] !== g || n[13] !== C
          ? ((b = d.jsx("div", { className: g, children: C })),
            (n[12] = g),
            (n[13] = C),
            (n[14] = b))
          : (b = n[14]),
        b
      );
    }
    function C(e, t, n, r) {
      return e === o("WAWebMsgType").MSG_TYPE.VIDEO && r
        ? u._(/*BTDS*/ "GIF thumbnail, item {position} of {total}", [
            u._param("position", t),
            u._param("total", n),
          ])
        : e === o("WAWebMsgType").MSG_TYPE.VIDEO
          ? u._(/*BTDS*/ "Video thumbnail, item {position} of {total}", [
              u._param("position", t),
              u._param("total", n),
            ])
          : e === o("WAWebMsgType").MSG_TYPE.AUDIO
            ? u._(/*BTDS*/ "Audio thumbnail, item {position} of {total}", [
                u._param("position", t),
                u._param("total", n),
              ])
            : e === o("WAWebMsgType").MSG_TYPE.IMAGE
              ? u._(/*BTDS*/ "Image thumbnail, item {position} of {total}", [
                  u._param("position", t),
                  u._param("total", n),
                ])
              : u._(/*BTDS*/ "Document thumbnail, item {position} of {total}", [
                  u._param("position", t),
                  u._param("total", n),
                ]);
    }
    function b(t) {
      var n = o("react-compiler-runtime").c(49),
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
        s = l.attachMedia,
        c = l.index,
        m = l.onClick,
        p = l.onClose,
        h = l.totalCount,
        b = r("useWAWebIsKeyboardUser")(),
        S = b.isKeyboardUser,
        R = _(null),
        L = o("useWAWebHover").useWAWebHover(R),
        E = r("useMergeRefs")(i, R),
        k = f(!1),
        I = k[0],
        T = k[1],
        D;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            return T(!0);
          }),
          (n[3] = D))
        : (D = n[3]);
      var x = D,
        $;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function (t) {
            (R.current != null &&
              t.relatedTarget instanceof Node &&
              R.current.contains(t.relatedTarget)) ||
              T(!1);
          }),
          (n[4] = $))
        : ($ = n[4]);
      var P = $,
        N = L || (S && I),
        M;
      n[5] !== s || n[6] !== m
        ? ((M = function (t) {
            m(o("WAWebStateUtils").unproxy(s), t);
          }),
          (n[5] = s),
          (n[6] = m),
          (n[7] = M))
        : (M = n[7]);
      var w = M,
        A = v,
        F;
      n[8] !== w
        ? ((F = function (t) {
            t.target === t.currentTarget &&
              r("WAWebKeyboardIsKeyActivation")(t) &&
              (t.stopPropagation(), t.preventDefault(), w(t));
          }),
          (n[8] = w),
          (n[9] = F))
        : (F = n[9]);
      var O = F,
        B;
      n[10] !== s || n[11] !== p
        ? ((B = function (t) {
            (t.stopPropagation(),
              t.preventDefault(),
              p(o("WAWebStateUtils").unproxy(s), t));
          }),
          (n[10] = s),
          (n[11] = p),
          (n[12] = B))
        : (B = n[12]);
      var W = B,
        q;
      if (n[13] !== a.active) {
        var U;
        ((q = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((U = {}), (U._ak3l = a.active), (U._ak3k = !0), U),
        )),
          (n[13] = a.active),
          (n[14] = q));
      } else q = n[14];
      var V;
      n[15] !== N
        ? ((V = N ? { filter: "none" } : void 0), (n[15] = N), (n[16] = V))
        : (V = n[16]);
      var H;
      n[17] !== s.isGif || n[18] !== s.type || n[19] !== c || n[20] !== h
        ? ((H = C(s.type, c, h, s.isGif)),
          (n[17] = s.isGif),
          (n[18] = s.type),
          (n[19] = c),
          (n[20] = h),
          (n[21] = H))
        : (H = n[21]);
      var G = a.active,
        z;
      n[22] !== N
        ? ((z = {
            0: {
              className:
                "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x1honnu5 xg01cxk x1vq37if x47corl x1pb5qga",
            },
            1: {
              className:
                "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x1honnu5 x1vq37if x47corl x1pb5qga x1hc1fzr",
            },
          }[!!N << 0]),
          (n[22] = N),
          (n[23] = z))
        : (z = n[23]);
      var j;
      n[24] !== z
        ? ((j = d.jsx("div", babelHelpers.extends({}, z))),
          (n[24] = z),
          (n[25] = j))
        : (j = n[25]);
      var K;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = u._(/*BTDS*/ "Remove attachment")), (n[26] = K))
        : (K = n[26]);
      var Q = N && g.closeButtonVisible,
        X;
      n[27] !== Q
        ? ((X = [g.closeButton, Q]), (n[27] = Q), (n[28] = X))
        : (X = n[28]);
      var Y;
      n[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = d.jsx(o("WAWebXAltIcon.react").XAltIcon, {})), (n[29] = Y))
        : (Y = n[29]);
      var J;
      n[30] !== W || n[31] !== X
        ? ((J = d.jsx(o("WAWebClickable.react").Clickable, {
            onClick: W,
            ariaLabel: K,
            xstyle: X,
            children: Y,
          })),
          (n[30] = W),
          (n[31] = X),
          (n[32] = J))
        : (J = n[32]);
      var Z;
      n[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = { className: "x6ikm8r x10wlt62 xm0mufa" }), (n[33] = Z))
        : (Z = n[33]);
      var ee;
      n[34] !== s
        ? ((ee = d.jsx(
            "div",
            babelHelpers.extends({}, Z, {
              children: d.jsx(y, { attachMedia: s }),
            }),
          )),
          (n[34] = s),
          (n[35] = ee))
        : (ee = n[35]);
      var te;
      return (
        n[36] !== w ||
        n[37] !== O ||
        n[38] !== c ||
        n[39] !== E ||
        n[40] !== a.active ||
        n[41] !== j ||
        n[42] !== J ||
        n[43] !== ee ||
        n[44] !== q ||
        n[45] !== V ||
        n[46] !== H ||
        n[47] !== h
          ? ((te = d.jsxs("div", {
              tabIndex: 0,
              role: "tab",
              className: q,
              style: V,
              onClick: w,
              onKeyDown: A,
              onKeyPress: O,
              onFocus: x,
              onBlur: P,
              "aria-label": H,
              "aria-selected": G,
              "aria-posinset": c,
              "aria-setsize": h,
              ref: E,
              children: [j, J, ee],
            })),
            (n[36] = w),
            (n[37] = O),
            (n[38] = c),
            (n[39] = E),
            (n[40] = a.active),
            (n[41] = j),
            (n[42] = J),
            (n[43] = ee),
            (n[44] = q),
            (n[45] = V),
            (n[46] = H),
            (n[47] = h),
            (n[48] = te))
          : (te = n[48]),
        te
      );
    }
    function v(e) {
      e.target !== e.currentTarget &&
        r("WAWebKeyboardIsKeyActivation")(e) &&
        e.stopPropagation();
    }
    l.default = b;
  },
  226,
);
