__d(
  "WAWebSticker.react",
  [
    "cx",
    "fbt",
    "WAAbortError",
    "WANullthrows",
    "WAPromiseRaceAbort",
    "WAWebABProps",
    "WAWebClassnames",
    "WAWebControlledAnimatedSticker.react",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebLottieSticker.react",
    "WAWebMediaBlobProvider",
    "WAWebMediaOpaqueData",
    "WAWebMediaUrlProvider",
    "WAWebMessageUiUtils",
    "WAWebNullFunc",
    "WAWebRgbaCanvas.react",
    "WAWebStickerAnimationCanvas.react",
    "WAWebStickerCreateButton.react",
    "WAWebStickerLikeMsgPlaceholder.react",
    "WAWebStickerUtils",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react")),
      d = e,
      m = d.useEffect,
      p = d.useImperativeHandle,
      _ = d.useRef,
      f = d.useState;
    function g(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.ref,
        a = e.className,
        i = e.controlledAnimatedStickerimageRef,
        l = e.downloadMedia,
        s = e.label,
        u = e.loopAnimation,
        d = e.mediaData,
        m = e.onClick,
        p = e.onEnter,
        _ = e.renderPreview,
        f = e.startAnimation,
        g = e.stickerImgRef,
        h;
      t[0] !== p
        ? ((h = function (t) {
            if (t.key === "Enter") return p == null ? void 0 : p(t);
          }),
          (t[0] = p),
          (t[1] = h))
        : (h = t[1]);
      var y = h;
      if (d.animationDuration > 0 && !u) {
        var C;
        return (
          t[2] !== a ||
          t[3] !== i ||
          t[4] !== l ||
          t[5] !== y ||
          t[6] !== s ||
          t[7] !== d ||
          t[8] !== m ||
          t[9] !== n ||
          t[10] !== _ ||
          t[11] !== f
            ? ((C = c.jsx(r("WAWebControlledAnimatedSticker.react"), {
                className: a,
                mediaData: d,
                startAnimation: f,
                onClick: m,
                onEnter: y,
                placeholderRenderer: _,
                downloadMedia: l,
                ref: n,
                label: s,
                imageRef: i,
              })),
              (t[2] = a),
              (t[3] = i),
              (t[4] = l),
              (t[5] = y),
              (t[6] = s),
              (t[7] = d),
              (t[8] = m),
              (t[9] = n),
              (t[10] = _),
              (t[11] = f),
              (t[12] = C))
            : (C = t[12]),
          C
        );
      }
      var b;
      t[13] !== a || t[14] !== s || t[15] !== m || t[16] !== g
        ? ((b = function (t) {
            return m != null
              ? c.jsx(r("WAWebUnstyledButton.react"), {
                  onClick: m,
                  children: c.jsx("img", {
                    ref: g,
                    className: a,
                    draggable: "false",
                    src: t,
                    alt: s,
                  }),
                })
              : c.jsx("img", {
                  ref: g,
                  className: a,
                  draggable: "false",
                  src: t,
                  alt: s,
                });
          }),
          (t[13] = a),
          (t[14] = s),
          (t[15] = m),
          (t[16] = g),
          (t[17] = b))
        : (b = t[17]);
      var v;
      return (
        t[18] !== l || t[19] !== d || t[20] !== _ || t[21] !== b
          ? ((v = c.jsx(r("WAWebMediaUrlProvider"), {
              mediaData: d,
              placeholderRenderer: _,
              downloadMedia: l,
              children: b,
            })),
            (t[18] = l),
            (t[19] = d),
            (t[20] = _),
            (t[21] = b),
            (t[22] = v))
          : (v = t[22]),
        v
      );
    }
    function h(e) {
      var t = e.className,
        n = e.controlledAnimatedStickerimageRef,
        o = e.downloadMedia,
        a = e.label,
        i = e.loopAnimation,
        l = e.mediaData,
        s = e.onClick,
        u = e.onEnter,
        d = e.renderPreview,
        m = e.startAnimation,
        p = e.stickerImgRef;
      if (l.animationDuration > 0) {
        var _ = i
          ? 1 / 0
          : l.animationDuration / r("WANullthrows")(l.singleLoopDuration);
        return c.jsx(r("WAWebMediaBlobProvider"), {
          mediaData: l,
          render: function (n) {
            return c.jsx(r("WAWebStickerAnimationCanvas.react"), {
              className: t,
              loopAnimation: i,
              maxLoops: _,
              blob: n,
              renderPreview: d,
              startAnimation: m,
              onClick: s,
            });
          },
          renderPlaceholder: d,
          downloadMedia: o,
        });
      }
      return l.rgbaBuffer
        ? c.jsx(r("WAWebRgbaCanvas.react"), {
            className: t,
            height: l.rgbaHeight,
            onClick: s,
            rgbaBuffer: l.rgbaBuffer,
            width: l.rgbaWidth,
          })
        : d();
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.className,
        a = e.isCreateButton,
        i = e.mediaData,
        l = e.onClick,
        s = e.theme,
        d = i.preview,
        m;
      t[0] !== d
        ? ((m = d instanceof r("WAWebMediaOpaqueData") ? d.url() : null),
          (t[0] = d),
          (t[1] = m))
        : (m = t[1]);
      var p = m,
        _;
      if (t[2] !== i.emojis) {
        var f,
          g = (f = i.emojis) == null ? void 0 : f.join(" ");
        ((_ =
          g != null && g !== ""
            ? u._(/*BTDS*/ "Sticker with: {emojis}", [u._param("emojis", g)])
            : u._(/*BTDS*/ "Sticker with no label")),
          (t[2] = i.emojis),
          (t[3] = _));
      } else _ = t[3];
      var h = _;
      if (p == null) {
        if (a === !0) {
          var y =
              s === "stickerExpressionsPanel"
                ? "stickerExpressionsPanel"
                : void 0,
            C;
          return (
            t[4] !== l || t[5] !== y
              ? ((C = c.jsx(r("WAWebStickerCreateButton.react"), {
                  onClick: l,
                  theme: y,
                })),
                (t[4] = l),
                (t[5] = y),
                (t[6] = C))
              : (C = t[6]),
            C
          );
        }
        var b;
        t[7] !== n
          ? ((b = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              "_ajxc",
              n,
            )),
            (t[7] = n),
            (t[8] = b))
          : (b = t[8]);
        var v;
        return (
          t[9] !== b
            ? ((v = c.jsx(r("WAWebStickerLikeMsgPlaceholder.react"), {
                className: b,
              })),
              (t[9] = b),
              (t[10] = v))
            : (v = t[10]),
          v
        );
      }
      var S;
      return (
        t[11] !== h || t[12] !== n || t[13] !== l || t[14] !== p
          ? ((S = c.jsx("img", {
              className: n,
              draggable: "false",
              onClick: l,
              src: p,
              alt: h,
            })),
            (t[11] = h),
            (t[12] = n),
            (t[13] = l),
            (t[14] = p),
            (t[15] = S))
          : (S = t[15]),
        S
      );
    }
    function C(e) {
      var t,
        n = e.animateOnView,
        a = e.downloadMedia,
        i = e.isCreateButton,
        l = e.isNewMsg,
        s = e.loopAnimation,
        u = e.mediaData,
        d = e.onClick,
        m = e.onEnter,
        f = e.ref,
        C = e.theme,
        v = o("useWAWebModelValues").useModelValues(u, [
          "animatedAsNewMsg",
          "animationDuration",
          "singleLoopDuration",
          "mediaBlob",
          "preview",
          "renderableUrl",
          "rgbaBuffer",
          "rgbaHeight",
          "rgbaWidth",
          "emojis",
          "mediaStage",
          "extractedLottieSticker",
          "filehash",
          "mimetype",
          "accessibilityLabel",
        ]),
        S = r("useLazyRef")(function () {
          return v.animatedAsNewMsg;
        }),
        R = S.current,
        L = b(),
        E = _(),
        k = _(),
        I = _(),
        T = _();
      p(f, function () {
        return {
          startAnimation: function () {
            var e;
            (e = k.current) == null || e.startAnimation();
          },
          getImgNode: function () {
            return E.current;
          },
        };
      });
      var D = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((t = {}),
          (t._ajxb = C === "conversation"),
          (t._ajxf = C === "quoted"),
          (t._ajxe = C === "composeBoxQuoted"),
          (t._aocu = C === "composeBox"),
          (t._ajxg = C === "stickerPanel"),
          (t._alpw = C === "stickerExpressionsPanel"),
          (t._aows =
            C === "stickerExpressionsPanel" &&
            o("WAWebABProps").getABPropConfigValue(
              "web_expression_panels_show_less_stickers",
            )),
          (t._as8t = C === "stickerExpressionsPanel"),
          (t._ajxh = C === "stickerStore"),
          (t._ajxi = C === "stickerDetails"),
          (t._ajxj = !!d),
          (t._ajxd = C !== "composeBox"),
          t),
        ),
        x;
      if (
        o("WAWebStickerUtils").getStickerFileType(v.mimetype) ===
        o("WAWebStickerUtils").StickerFileType.LOTTIE
      )
        x = c.jsx(r("WAWebLottieSticker.react"), {
          mediaData: v,
          startAnimation: !0,
          onClick: d,
          placeholderRenderer: o("WAWebNullFunc").returnNull,
          downloadMedia: a,
          className: D,
        });
      else if (L == null)
        x = c.jsx(y, {
          isCreateButton: i,
          mediaData: v,
          className: D,
          theme: C,
          onClick: d,
        });
      else {
        var $,
          P = ($ = v.emojis) == null ? void 0 : $.join(" "),
          N = o("WAWebMessageUiUtils").getStickerCustomLabel(
            v.accessibilityLabel,
            P,
          ),
          M = n === !0 || (l === !0 && !R),
          w = !!s;
        L
          ? (x = c.jsx(g, {
              ref: k,
              stickerImgRef: I,
              controlledAnimatedStickerimageRef: T,
              className: D,
              mediaData: v,
              loopAnimation: w,
              startAnimation: M,
              renderPreview: function () {
                return c.jsx(y, {
                  isCreateButton: i,
                  mediaData: v,
                  className: D,
                  theme: C,
                  onClick: d,
                });
              },
              onClick: d,
              onEnter: m,
              downloadMedia: a,
              label: N,
            }))
          : (x = c.jsx(h, {
              className: D,
              mediaData: v,
              loopAnimation: w,
              startAnimation: M,
              renderPreview: function () {
                return c.jsx(y, {
                  isCreateButton: i,
                  mediaData: v,
                  className: D,
                  onClick: d,
                  theme: C,
                });
              },
              onClick: d,
              downloadMedia: a,
              label: N,
              controlledAnimatedStickerimageRef: T,
            }));
      }
      return c.jsx("span", {
        ref: E,
        "data-testid": void 0,
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ajxd",
          "_ajxk",
        ),
        children: x,
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      var e = f(
          o("WAWebFeatureDetectionDetectWebpSupport").getCachedWebpSupport,
        ),
        t = e[0],
        n = e[1],
        a = r("useWAWebUnmountSignal")();
      return (
        m(function () {
          t == null &&
            r("WAPromiseRaceAbort")(
              o("WAWebFeatureDetectionDetectWebpSupport").detectWebpSupport(),
              a,
            )
              .then(n)
              .catch(function (e) {
                if (e.name !== o("WAAbortError").ABORT_ERROR) throw e;
              });
        }, []),
        t
      );
    }
    l.default = C;
  },
  226,
);
