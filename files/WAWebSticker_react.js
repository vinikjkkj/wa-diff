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
      var t = e.ref,
        n = e.className,
        o = e.controlledAnimatedStickerimageRef,
        a = e.downloadMedia,
        i = e.label,
        l = e.loopAnimation,
        s = e.mediaData,
        u = e.onClick,
        d = e.onEnter,
        m = e.renderPreview,
        p = e.startAnimation,
        _ = e.stickerImgRef,
        f = function (t) {
          if (t.key === "Enter") return d == null ? void 0 : d(t);
        };
      return s.animationDuration > 0 && !l
        ? c.jsx(r("WAWebControlledAnimatedSticker.react"), {
            className: n,
            mediaData: s,
            startAnimation: p,
            onClick: u,
            onEnter: f,
            placeholderRenderer: m,
            downloadMedia: a,
            ref: t,
            label: i,
            imageRef: o,
          })
        : c.jsx(r("WAWebMediaUrlProvider"), {
            mediaData: s,
            placeholderRenderer: m,
            downloadMedia: a,
            children: function (t) {
              return u != null
                ? c.jsx(r("WAWebUnstyledButton.react"), {
                    onClick: u,
                    children: c.jsx("img", {
                      ref: _,
                      className: n,
                      draggable: "false",
                      src: t,
                      alt: i,
                    }),
                  })
                : c.jsx("img", {
                    ref: _,
                    className: n,
                    draggable: "false",
                    src: t,
                    alt: i,
                  });
            },
          });
    }
    g.displayName = g.name + " [from " + i.id + "]";
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
      var t,
        n = e.className,
        a = e.isCreateButton,
        i = e.mediaData,
        l = e.onClick,
        s = e.theme,
        d = i.preview,
        m = d instanceof r("WAWebMediaOpaqueData") ? d.url() : null,
        p = (t = i.emojis) == null ? void 0 : t.join(" "),
        _ =
          p != null && p !== ""
            ? u._(/*BTDS*/ "Sticker with: {emojis}", [u._param("emojis", p)])
            : u._(/*BTDS*/ "Sticker with no label");
      return m == null
        ? a === !0
          ? c.jsx(r("WAWebStickerCreateButton.react"), {
              onClick: l,
              theme:
                s === "stickerExpressionsPanel"
                  ? "stickerExpressionsPanel"
                  : void 0,
            })
          : c.jsx(r("WAWebStickerLikeMsgPlaceholder.react"), {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_ajxc",
                n,
              ),
            })
        : c.jsx("img", {
            className: n,
            draggable: "false",
            onClick: l,
            src: m,
            alt: _,
          });
    }
    y.displayName = y.name + " [from " + i.id + "]";
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
