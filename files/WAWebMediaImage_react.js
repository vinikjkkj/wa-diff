__d(
  "WAWebMediaImage.react",
  [
    "WALogger",
    "WAWebAnnotation.react",
    "WAWebBlurredImage.react",
    "WAWebEnvironment",
    "WAWebImg.react",
    "WAWebMediaIncrementalZoom",
    "WAWebMediaTypes",
    "WAWebMediaUrlProvider",
    "WAWebMediaViewerStyles",
    "WAWebMediaZoomable.react",
    "WAWebObjectFit.react",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebHdImageChildMsg",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useContext,
      _ = m.useEffect,
      f = m.useRef,
      g = { isDownloadPrevented: { pointerEvents: "x47corl", $$css: !0 } };
    function h(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.mediaData,
        a;
      t[0] !== n
        ? ((a = o("WAWebStateUtils").unproxy(n)), (t[0] = n), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== i.fullHeight || t[3] !== i.fullWidth
        ? ((l = { width: i.fullWidth, height: i.fullHeight }),
          (t[2] = i.fullHeight),
          (t[3] = i.fullWidth),
          (t[4] = l))
        : (l = t[4]);
      var s;
      t[5] !== i
        ? ((s = d.jsx(r("WAWebBlurredImage.react"), {
            altText: "",
            mediaData: i,
          })),
          (t[5] = i),
          (t[6] = s))
        : (s = t[6]);
      var u;
      return (
        t[7] !== l || t[8] !== s
          ? ((u = d.jsx(r("WAWebObjectFit.react"), {
              type: "scaleDown",
              size: l,
              position: "relative",
              objectPosition: "relative",
              children: s,
            })),
            (t[7] = l),
            (t[8] = s),
            (t[9] = u))
          : (u = t[9]),
        u
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.onImageClick,
        a = e.onLoad,
        i = e.preventDownload,
        l = e.src,
        s = i === void 0 ? !1 : i,
        c = !s && !r("WAWebEnvironment").isWindows,
        m;
      t[0] !== s
        ? ((m = (u || (u = r("stylex")))(
            r("WAWebMediaViewerStyles").content,
            s && g.isDownloadPrevented,
          )),
          (t[0] = s),
          (t[1] = m))
        : (m = t[1]);
      var p;
      return (
        t[2] !== c ||
        t[3] !== n ||
        t[4] !== a ||
        t[5] !== s ||
        t[6] !== l ||
        t[7] !== m
          ? ((p = d.jsx("div", {
              "data-testid": void 0,
              children: d.jsx(r("WAWebImg.react"), {
                className: m,
                draggable: c,
                onClick: n,
                disableContextMenu: s,
                src: l,
                onLoad: a,
              }),
            })),
            (t[2] = c),
            (t[3] = n),
            (t[4] = a),
            (t[5] = s),
            (t[6] = l),
            (t[7] = m),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.onImageClick,
        a = e.onLoad,
        i = e.src,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (u || (u = r("stylex"))).props(
            r("WAWebMediaViewerStyles").content,
          )),
          (t[0] = l))
        : (l = t[0]);
      var s;
      t[1] !== n || t[2] !== a || t[3] !== i
        ? ((s = d.jsx(y, {
            src: i,
            preventDownload: !0,
            onImageClick: n,
            onLoad: a,
          })),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i),
          (t[4] = s))
        : (s = t[4]);
      var c;
      return (
        t[5] !== n || t[6] !== s
          ? ((c = d.jsx(
              "figure",
              babelHelpers.extends({}, l, {
                draggable: "false",
                onClick: n,
                onContextMenu: o("WAWebStopEvent").preventDefault,
                children: s,
              }),
            )),
            (t[5] = n),
            (t[6] = s),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function b(e) {
      var t,
        n = o("react-compiler-runtime").c(23),
        a = e.mediaData,
        i = e.msg,
        l = e.onAnnotationTooltipDismiss,
        s = e.onAnnotationTooltipDisplay,
        u = e.renderImageProxy,
        c = o("useWAWebHdImageChildMsg").useHdImageChildMsg(i),
        m = (t = c == null ? void 0 : c.mediaData) != null ? t : a,
        p;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = ["mediaStage"]), (n[0] = p))
        : (p = n[0]);
      var f = o("useWAWebModelValues").useModelValues(m, p),
        g = f.mediaStage,
        y = c != null && g === o("WAWebMediaTypes").MediaDataStage.RESOLVED,
        C = y ? m : a,
        b,
        S;
      (n[1] !== c || n[2] !== i.mediaObject
        ? ((b = function () {
            c == null ||
              i.mediaObject == null ||
              c.forceDownloadMediaEvenIfExpensive().catch(v);
          }),
          (S = [c, i.mediaObject]),
          (n[1] = c),
          (n[2] = i.mediaObject),
          (n[3] = b),
          (n[4] = S))
        : ((b = n[3]), (S = n[4])),
        _(b, S));
      var R;
      n[5] !== a
        ? ((R = function () {
            return d.jsx(h, { mediaData: a });
          }),
          (n[5] = a),
          (n[6] = R))
        : (R = n[6]);
      var L;
      n[7] !== c || n[8] !== y || n[9] !== i
        ? ((L = function () {
            if (i.mediaObject != null)
              return y && c != null
                ? c.forceDownloadMediaEvenIfExpensive()
                : i.downloadMedia({
                    downloadEvenIfExpensive: !0,
                    rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                      .WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                    isUserInitiated: !0,
                  });
          }),
          (n[7] = c),
          (n[8] = y),
          (n[9] = i),
          (n[10] = L))
        : (L = n[10]);
      var E;
      n[11] !== u || n[12] !== R || n[13] !== L || n[14] !== C
        ? ((E = d.jsx(r("WAWebMediaUrlProvider"), {
            mediaData: C,
            placeholderRenderer: R,
            downloadMedia: L,
            renderProgressively: !0,
            children: u,
          })),
          (n[11] = u),
          (n[12] = R),
          (n[13] = L),
          (n[14] = C),
          (n[15] = E))
        : (E = n[15]);
      var k;
      n[16] !== i.interactiveAnnotations || n[17] !== l || n[18] !== s
        ? ((k =
            i.interactiveAnnotations &&
            i.interactiveAnnotations.length > 0 &&
            d.jsx(r("WAWebAnnotation.react"), {
              annotations: i.interactiveAnnotations,
              onTooltipDisplay: s,
              onTooltipDismiss: l,
            })),
          (n[16] = i.interactiveAnnotations),
          (n[17] = l),
          (n[18] = s),
          (n[19] = k))
        : (k = n[19]);
      var I;
      return (
        n[20] !== E || n[21] !== k
          ? ((I = d.jsxs(d.Fragment, { children: [E, k] })),
            (n[20] = E),
            (n[21] = k),
            (n[22] = I))
          : (I = n[22]),
        I
      );
    }
    function v() {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[media-image] failed to download HD media",
            ])),
        )
        .sendLogs("failed-to-download-hd-media");
    }
    function S(t) {
      var n = o("react-compiler-runtime").c(32),
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
        s = l.msg,
        u = l.onLoad,
        c = l.preventDownload,
        m;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [
            "mediaStage",
            "fullWidth",
            "fullHeight",
            "renderableUrl",
            "progressiveStage",
          ]),
          (n[3] = m))
        : (m = n[3]);
      var g = o("useWAWebModelValues").useModelValues(a.mediaData, m),
        v = f(null),
        S = r("useMergeRefs")(i, v),
        R = p(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        L = R.getHandler,
        E = R.isEnabled,
        k,
        I;
      (n[4] !== s
        ? ((k = function () {
            if (s)
              return (
                s.downloadMedia({
                  downloadEvenIfExpensive: !0,
                  rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                    .WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                  isUserInitiated: !0,
                }),
                function () {
                  s.mediaObject && s.cancelDownload();
                }
              );
          }),
          (I = [s]),
          (n[4] = s),
          (n[5] = k),
          (n[6] = I))
        : ((k = n[5]), (I = n[6])),
        _(k, I));
      var T;
      n[7] !== L || n[8] !== E
        ? ((T = function (t) {
            var e;
            if (E) {
              t.stopPropagation();
              var n = L();
              n && n.handleClick(t.clientX, t.clientY);
              return;
            }
            (e = v.current) == null || e.onClick(t);
          }),
          (n[7] = L),
          (n[8] = E),
          (n[9] = T))
        : (T = n[9]);
      var D = T;
      e: switch (g.mediaStage) {
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING: {
          if (g.progressiveStage == null) {
            var x;
            return (
              n[10] !== g
                ? ((x = d.jsx(h, { mediaData: g })), (n[10] = g), (n[11] = x))
                : (x = n[11]),
              x
            );
          }
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
          break e;
        default: {
          var $;
          return (
            n[12] !== g
              ? (($ = d.jsx(h, { mediaData: g })), (n[12] = g), (n[13] = $))
              : ($ = n[13]),
            $
          );
        }
      }
      var P;
      n[14] !== D || n[15] !== u || n[16] !== c
        ? ((P = c
            ? function (e) {
                return d.jsx(C, { src: e, onImageClick: D, onLoad: u });
              }
            : function (e) {
                return d.jsx(y, { src: e, onImageClick: D, onLoad: u });
              }),
          (n[14] = D),
          (n[15] = u),
          (n[16] = c),
          (n[17] = P))
        : (P = n[17]);
      var N = P,
        M;
      n[18] !== g.renderableUrl ||
      n[19] !== s ||
      n[20] !== a.mediaData ||
      n[21] !== a.onAnnotationTooltipDismiss ||
      n[22] !== a.onAnnotationTooltipDisplay ||
      n[23] !== N
        ? ((M =
            s != null
              ? d.jsx(b, {
                  msg: s,
                  mediaData: a.mediaData,
                  renderImageProxy: N,
                  onAnnotationTooltipDisplay: a.onAnnotationTooltipDisplay,
                  onAnnotationTooltipDismiss: a.onAnnotationTooltipDismiss,
                })
              : N(g.renderableUrl)),
          (n[18] = g.renderableUrl),
          (n[19] = s),
          (n[20] = a.mediaData),
          (n[21] = a.onAnnotationTooltipDismiss),
          (n[22] = a.onAnnotationTooltipDisplay),
          (n[23] = N),
          (n[24] = M))
        : (M = n[24]);
      var w = M,
        A;
      return (
        n[25] !== w ||
        n[26] !== g.fullHeight ||
        n[27] !== g.fullWidth ||
        n[28] !== S ||
        n[29] !== s ||
        n[30] !== a.onImgZoomIn
          ? ((A = d.jsx(r("WAWebMediaZoomable.react"), {
              role: "img",
              ref: S,
              width: g.fullWidth,
              height: g.fullHeight,
              onZoomIn: a.onImgZoomIn,
              msg: s,
              children: w,
            })),
            (n[25] = w),
            (n[26] = g.fullHeight),
            (n[27] = g.fullWidth),
            (n[28] = S),
            (n[29] = s),
            (n[30] = a.onImgZoomIn),
            (n[31] = A))
          : (A = n[31]),
        A
      );
    }
    l.default = S;
  },
  98,
);
