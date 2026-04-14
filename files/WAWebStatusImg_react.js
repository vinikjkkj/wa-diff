__d(
  "WAWebStatusImg.react",
  [
    "WAWebAnnotation.react",
    "WAWebImg.react",
    "WAWebMediaDataUtils",
    "WAWebMediaTypes",
    "WAWebMediaUrlProvider",
    "WAWebObjectFit.react",
    "WAWebStatusButton.react",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = e.mediaData,
        n = e.msg,
        o = e.onMouseDown,
        a = e.onMouseUp,
        i = e.src,
        l = n.actionLink || {},
        u = l.buttonTitle,
        c = l.url;
      return s.jsx("div", {
        className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
        onMouseDown: o,
        onMouseUp: a,
        onDragEnd: a,
        "data-testid": void 0,
        children: s.jsx(r("WAWebObjectFit.react"), {
          type: "contain",
          size: { width: t.fullWidth, height: t.fullHeight },
          children: s.jsxs("div", {
            className:
              "x1n2onr6 xh8yej3 x5yr21d x6ikm8r x10wlt62 xyi3aci xwf5gio x1p453bz x1suzm8a",
            children: [
              s.jsx(r("WAWebImg.react"), {
                className:
                  "x1n2onr6 x1lliihq x5yr21d x11t971q xvc5jky xyi3aci xwf5gio x1p453bz x1suzm8a",
                src: i,
                disableContextMenu: !0,
              }),
              n.interactiveAnnotations &&
                n.interactiveAnnotations.length > 0 &&
                s.jsx(r("WAWebAnnotation.react"), {
                  annotations: n.interactiveAnnotations,
                  onTooltipDisplay: o,
                  onTooltipDismiss: a,
                }),
              u &&
                c &&
                s.jsx("div", {
                  className:
                    "x10l6tqk x1kiq0my x78zum5 x6s0dn4 xl56j7k xh8yej3",
                  children: s.jsx(r("WAWebStatusButton.react"), {
                    text: u,
                    url: c,
                  }),
                }),
            ],
          }),
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t,
        n = e.mediaData,
        a = e.onMouseDown,
        i = e.onMouseUp;
      return s.jsx("div", {
        className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
        onMouseDown: a,
        onMouseUp: i,
        children: s.jsx(r("WAWebObjectFit.react"), {
          type: "contain",
          size: { width: n.aspectRatio, height: 1 },
          children: s.jsx(r("WAWebImg.react"), {
            className:
              "x1n2onr6 x1lliihq x5yr21d x11t971q xvc5jky xyi3aci xwf5gio x1p453bz x1suzm8a",
            src:
              (t = o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(n)) !=
              null
                ? t
                : "",
          }),
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.markRead,
        n = e.msg,
        a = e.onMouseDown,
        i = e.onMouseUp,
        l = e.pause,
        m = e.play,
        p = e.status,
        _ = o("useWAWebModelValues").useModelValues(e.mediaData, [
          "mediaStage",
          "renderableUrl",
          "preview",
          "fullWidth",
          "fullHeight",
          "aspectRatio",
          "fullPreviewData",
        ]);
      u(function () {
        return (
          _.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
            n.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .STATUS_V3,
              isUserInitiated: !0,
            }),
          function () {
            l();
          }
        );
      }, []);
      var f = function () {
        return n.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .STATUS_V3,
          isUserInitiated: !0,
        });
      };
      return (
        u(
          function () {
            (m(),
              _.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                t(p, n));
          },
          [t, _.mediaStage, n, m, p],
        ),
        s.jsx(r("WAWebMediaUrlProvider"), {
          mediaData: _,
          placeholderRenderer: function () {
            return s.jsx(d, { mediaData: _, onMouseDown: a, onMouseUp: i });
          },
          downloadMedia: f,
          renderProgressively: !0,
          children: function (t) {
            return s.jsx(c, {
              src: t,
              msg: n,
              mediaData: _,
              onMouseUp: i,
              onMouseDown: a,
            });
          },
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
