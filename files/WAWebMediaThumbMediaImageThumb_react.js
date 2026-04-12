__d(
  "WAWebMediaThumbMediaImageThumb.react",
  [
    "WAWebMediaData",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMediaUrlProvider",
    "WAWebUnstyledButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.ref,
        n = e.children,
        o = e.className,
        a = e.onClick,
        i = e.onDragStart,
        l = e.shade,
        u = e.tabIndex,
        c = e.url,
        d =
          l === !0
            ? s.jsx("div", {
                className:
                  "xtc4mwu x1ey2m1c x1qx5ct2 xu96u03 x47corl x10l6tqk xh8yej3",
              })
            : null,
        m =
          c != null && c !== "" ? { backgroundImage: "url(" + c + ")" } : null;
      return s.jsx(r("WAWebUnstyledButton.react"), {
        onClick: a,
        tabIndex: u != null ? u : 0,
        children: s.jsxs("div", {
          ref: t,
          style: m,
          className: o,
          "data-testid": void 0,
          onDragStart: i,
          draggable: i == null ? null : !0,
          children: [n, d],
        }),
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.ref,
        n = e.isRefreshed,
        o = n === void 0 ? !1 : n,
        a = e.mediaData,
        i = e.onClick,
        l = e.onDragStart,
        c = e.shade,
        d = e.shouldApplyBlur,
        m = e.tabIndex,
        p = e.url,
        _ = !!d;
      return s.jsx(u, {
        ref: t,
        tabIndex: m != null ? m : 0,
        onClick: i,
        onDragStart: l,
        className: {
          0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
          2: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
          1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm xhe8x8x",
          3: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm xhe8x8x",
        }[(!!o << 1) | (!!_ << 0)],
        shade: c,
        url:
          a.preview instanceof r("WAWebMediaOpaqueData")
            ? a.preview.url()
            : null,
        children:
          p != null
            ? s.jsx("div", {
                className: {
                  0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
                  1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
                }[!!o << 0],
                style: { backgroundImage: "url(" + p + ")" },
              })
            : null,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.ref,
        n = e.isRefreshed,
        r = e.mediaData,
        o = e.onClick,
        a = e.onDragStart,
        i = e.shade,
        l = e.tabIndex;
      return r.preview != null
        ? s.jsx(c, {
            tabIndex: l,
            ref: t,
            onClick: o,
            onDragStart: a,
            mediaData: r,
            isRefreshed: n,
          })
        : s.jsx(u, {
            ref: t,
            tabIndex: l,
            onClick: o,
            onDragStart: a,
            className: {
              0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
              1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
            }[(n === !0) << 0],
            shade: i,
            isRefreshed: n,
          });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.ref,
        n = e.downloadMedia,
        a = e.msg,
        i = e.onClick,
        l = e.onDragStart,
        m = e.preferPreview,
        p = e.tabIndex,
        _ = p === void 0 ? -1 : p,
        f = e.isRefreshed,
        g = f === void 0 ? !1 : f,
        h = a.mediaData,
        y = { onClick: i, onDragStart: l, ref: t, tabIndex: _ };
      switch (h.type) {
        case r("WAWebMediaData").TYPE.AUDIO:
          return s.jsx(
            u,
            babelHelpers.extends({}, y, {
              className:
                "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm attach-media-audio-thumb",
            }),
          );
        case r("WAWebMediaData").TYPE.VIDEO: {
          var C,
            b = h.fullPreviewData == null && h.preview == null,
            v = (C = h.fullPreviewData) != null ? C : h.preview,
            S = h.isGif && !h.preview;
          return s.jsx(
            u,
            babelHelpers.extends({}, y, {
              className:
                {
                  0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
                  2: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
                  1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm xhe8x8x",
                  3: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm xhe8x8x",
                }[(!!g << 1) | (!!b << 0)] +
                " " +
                (S ? "media-video-thumb" : ""),
              shade: !0,
              url: v instanceof r("WAWebMediaOpaqueData") ? v.url() : null,
            }),
          );
        }
        case r("WAWebMediaData").TYPE.IMAGE: {
          var R =
            h.preview != null &&
            h.mediaStage === o("WAWebMediaTypes").MediaDataStage.NEED_POKE;
          return m === !0
            ? s.jsx(
                d,
                babelHelpers.extends({}, y, {
                  mediaData: h,
                  shade: a.star,
                  shouldApplyBlur: R,
                  isRefreshed: g,
                }),
              )
            : s.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
                    },
                    1: {
                      className:
                        "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
                    },
                  }[!!g << 0],
                  {
                    children: s.jsx(r("WAWebMediaUrlProvider"), {
                      mediaData: h,
                      placeholderRenderer: function () {
                        return s.jsx(
                          d,
                          babelHelpers.extends({}, y, {
                            mediaData: h,
                            shade: a.star,
                            shouldApplyBlur: R,
                            isRefreshed: g,
                          }),
                        );
                      },
                      renderProgressively: !0,
                      downloadMedia: n,
                      children: function (t) {
                        return s.jsx(
                          c,
                          babelHelpers.extends({}, y, {
                            mediaData: h,
                            shade: a.star,
                            shouldApplyBlur: R,
                            url: t,
                            isRefreshed: g,
                          }),
                        );
                      },
                    }),
                  },
                ),
              );
        }
        default:
          return s.jsx(u, babelHelpers.extends({}, y, { shade: a.star }));
      }
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
