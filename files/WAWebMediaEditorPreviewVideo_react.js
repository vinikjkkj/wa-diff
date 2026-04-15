__d(
  "WAWebMediaEditorPreviewVideo.react",
  [
    "fbt",
    "WAWebAttachMediaDrawerAttachMediaTypeStyles",
    "WAWebAttachMediaModel",
    "WAWebMediaEditorPreviewHeader.react",
    "WAWebMediaEditorPreviewStyles",
    "WAWebObjectFit.react",
    "WAWebSpinner.react",
    "WAWebVideo.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(33),
        a = t.attachMedia,
        i = t.captionInput,
        l = t.onClose,
        u;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = [
            "fullPreview",
            "isGif",
            "fullPreviewSize",
            "state",
            "preview",
            "processingProgressPercentage",
          ]),
          (n[0] = u))
        : (u = n[0]);
      var d = o("useWAWebModelValues").useModelValues(a, u),
        m = d.fullPreview,
        p = d.fullPreviewSize,
        _ = d.isGif,
        f = d.preview,
        g = d.processingProgressPercentage,
        h = d.state,
        y = h === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING,
        C;
      n[1] !== _ || n[2] !== y
        ? ((C = _ ? { loop: !y, autoPlay: !y, muted: !1, controls: !1 } : {}),
          (n[1] = _),
          (n[2] = y),
          (n[3] = C))
        : (C = n[3]);
      var b = C,
        v;
      n[4] !== y || n[5] !== g
        ? ((v = y
            ? c.jsx("div", {
                className: "xfo81ep",
                children: c.jsx(o("WAWebSpinner.react").Spinner, {
                  color: "white",
                  size: 50,
                  stroke: 3,
                  value: g != null ? g : void 0,
                  max: 100,
                }),
              })
            : null),
          (n[4] = y),
          (n[5] = g),
          (n[6] = v))
        : (v = n[6]);
      var S = v,
        R;
      n[7] !== f
        ? ((R = f
            ? c.jsx("img", {
                alt: s._(/*BTDS*/ "Preview"),
                className: "x10l6tqk x13vifvy x1o0tod x1vjfegm xh8yej3 x5yr21d",
                src: "data:image/jpeg;base64," + f,
              })
            : null),
          (n[7] = f),
          (n[8] = R))
        : (R = n[8]);
      var L = R,
        E;
      n[9] !== m || n[10] !== b || n[11] !== y
        ? ((E = y
            ? null
            : c.jsx(
                r("WAWebVideo.react"),
                babelHelpers.extends(
                  {
                    controls: !0,
                    controlsList: "nodownload nofullscreen",
                    className:
                      "x10l6tqk x13vifvy x1o0tod x1n327nk xh8yej3 x5yr21d",
                  },
                  b,
                  { src: m },
                ),
              )),
          (n[9] = m),
          (n[10] = b),
          (n[11] = y),
          (n[12] = E))
        : (E = n[12]);
      var k = E,
        I;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            className:
              "xhtitgo xh8yej3 x5yr21d x1n2onr6 x78zum5 x6s0dn4 xl56j7k",
          }),
          (n[13] = I))
        : (I = n[13]);
      var T;
      n[14] !== S || n[15] !== L || n[16] !== k
        ? ((T = c.jsxs(
            "div",
            babelHelpers.extends({}, I, { children: [S, k, L] }),
          )),
          (n[14] = S),
          (n[15] = L),
          (n[16] = k),
          (n[17] = T))
        : (T = n[17]);
      var D = T,
        x;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = (e || (e = r("stylex"))).props(
            o("WAWebMediaEditorPreviewStyles").styles.container,
          )),
          (n[18] = x))
        : (x = n[18]);
      var $;
      n[19] !== l
        ? (($ = c.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
            onClose: l,
          })),
          (n[19] = l),
          (n[20] = $))
        : ($ = n[20]);
      var P;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = (e || (e = r("stylex"))).props(
            r("WAWebAttachMediaDrawerAttachMediaTypeStyles").container,
          )),
          (n[21] = P))
        : (P = n[21]);
      var N;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = (e || (e = r("stylex"))).props(
            r("WAWebAttachMediaDrawerAttachMediaTypeStyles").mediaContainer,
          )),
          (n[22] = N))
        : (N = n[22]);
      var M;
      n[23] !== p || n[24] !== D
        ? ((M = c.jsx(
            "div",
            babelHelpers.extends({}, P, {
              "data-animate-attach-media": !0,
              children: c.jsx(
                "div",
                babelHelpers.extends({}, N, {
                  children: c.jsx(r("WAWebObjectFit.react"), {
                    type: "scaleDown",
                    size: p,
                    children: D,
                  }),
                }),
              ),
            }),
          )),
          (n[23] = p),
          (n[24] = D),
          (n[25] = M))
        : (M = n[25]);
      var w;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = (e || (e = r("stylex"))).props(
            o("WAWebMediaEditorPreviewStyles").styles.footer,
          )),
          (n[26] = w))
        : (w = n[26]);
      var A;
      n[27] !== i
        ? ((A = c.jsx("div", babelHelpers.extends({}, w, { children: i }))),
          (n[27] = i),
          (n[28] = A))
        : (A = n[28]);
      var F;
      return (
        n[29] !== M || n[30] !== A || n[31] !== $
          ? ((F = c.jsxs(
              "div",
              babelHelpers.extends({}, x, { children: [$, M, A] }),
            )),
            (n[29] = M),
            (n[30] = A),
            (n[31] = $),
            (n[32] = F))
          : (F = n[32]),
        F
      );
    }
    l.default = d;
  },
  226,
);
