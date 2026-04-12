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
      var t = e.mediaData,
        n = o("WAWebStateUtils").unproxy(t);
      return d.jsx(r("WAWebObjectFit.react"), {
        type: "scaleDown",
        size: { width: n.fullWidth, height: n.fullHeight },
        position: "relative",
        objectPosition: "relative",
        children: d.jsx(r("WAWebBlurredImage.react"), {
          altText: "",
          mediaData: n,
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.onImageClick,
        n = e.onLoad,
        o = e.preventDownload,
        a = o === void 0 ? !1 : o,
        i = e.src,
        l = !a && !r("WAWebEnvironment").isWindows;
      return d.jsx("div", {
        "data-testid": void 0,
        children: d.jsx(r("WAWebImg.react"), {
          className: (u || (u = r("stylex")))(
            r("WAWebMediaViewerStyles").content,
            a && g.isDownloadPrevented,
          ),
          draggable: l,
          onClick: t,
          disableContextMenu: a,
          src: i,
          onLoad: n,
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.onImageClick,
        n = e.onLoad,
        a = e.preventDownload,
        i = e.src;
      return d.jsx(
        "figure",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(r("WAWebMediaViewerStyles").content),
          {
            draggable: "false",
            onClick: t,
            onContextMenu: o("WAWebStopEvent").preventDefault,
            children: d.jsx(y, {
              src: i,
              preventDownload: !0,
              onImageClick: t,
              onLoad: n,
            }),
          },
        ),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t,
        n = e.mediaData,
        a = e.msg,
        i = e.onAnnotationTooltipDismiss,
        l = e.onAnnotationTooltipDisplay,
        u = e.renderImageProxy,
        c = o("useWAWebHdImageChildMsg").useHdImageChildMsg(a),
        m = (t = c == null ? void 0 : c.mediaData) != null ? t : n,
        p = o("useWAWebModelValues").useModelValues(m, ["mediaStage"]),
        f = p.mediaStage,
        g = c != null && f === o("WAWebMediaTypes").MediaDataStage.RESOLVED,
        y = g ? m : n;
      return (
        _(
          function () {
            c == null ||
              a.mediaObject == null ||
              c.forceDownloadMediaEvenIfExpensive().catch(function () {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[media-image] failed to download HD media",
                      ])),
                  )
                  .sendLogs("failed-to-download-hd-media");
              });
          },
          [c, a.mediaObject],
        ),
        d.jsxs(d.Fragment, {
          children: [
            d.jsx(r("WAWebMediaUrlProvider"), {
              mediaData: y,
              placeholderRenderer: function () {
                return d.jsx(h, { mediaData: n });
              },
              downloadMedia: function () {
                if (a.mediaObject != null)
                  return g && c != null
                    ? c.forceDownloadMediaEvenIfExpensive()
                    : a.downloadMedia({
                        downloadEvenIfExpensive: !0,
                        rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                          .WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                        isUserInitiated: !0,
                      });
              },
              renderProgressively: !0,
              children: u,
            }),
            a.interactiveAnnotations &&
              a.interactiveAnnotations.length > 0 &&
              d.jsx(r("WAWebAnnotation.react"), {
                annotations: a.interactiveAnnotations,
                onTooltipDisplay: l,
                onTooltipDismiss: i,
              }),
          ],
        })
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.msg,
        l = a.onLoad,
        s = a.preventDownload,
        u = o("useWAWebModelValues").useModelValues(a.mediaData, [
          "mediaStage",
          "fullWidth",
          "fullHeight",
          "renderableUrl",
          "progressiveStage",
        ]),
        c = f(null),
        m = r("useMergeRefs")(n, c),
        g = p(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        v = g.getHandler,
        S = g.isEnabled;
      _(
        function () {
          if (i)
            return (
              i.downloadMedia({
                downloadEvenIfExpensive: !0,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                isUserInitiated: !0,
              }),
              function () {
                i.mediaObject && i.cancelDownload();
              }
            );
        },
        [i],
      );
      var R = function (t) {
        var e;
        if (S) {
          t.stopPropagation();
          var n = v();
          n && n.handleClick(t.clientX, t.clientY);
          return;
        }
        (e = c.current) == null || e.onClick(t);
      };
      switch (u.mediaStage) {
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
          if (u.progressiveStage == null) return d.jsx(h, { mediaData: u });
          break;
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
          break;
        default:
          return d.jsx(h, { mediaData: u });
      }
      var L = s
          ? function (e) {
              return d.jsx(C, { src: e, onImageClick: R, onLoad: l });
            }
          : function (e) {
              return d.jsx(y, { src: e, onImageClick: R, onLoad: l });
            },
        E =
          i != null
            ? d.jsx(b, {
                msg: i,
                mediaData: a.mediaData,
                renderImageProxy: L,
                onAnnotationTooltipDisplay: a.onAnnotationTooltipDisplay,
                onAnnotationTooltipDismiss: a.onAnnotationTooltipDismiss,
              })
            : L(u.renderableUrl);
      return d.jsx(r("WAWebMediaZoomable.react"), {
        role: "img",
        ref: m,
        width: u.fullWidth,
        height: u.fullHeight,
        onZoomIn: a.onImgZoomIn,
        msg: i,
        children: E,
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  98,
);
