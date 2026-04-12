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
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.attachMedia,
        a = t.captionInput,
        i = t.onClose,
        l = o("useWAWebModelValues").useModelValues(n, [
          "fullPreview",
          "isGif",
          "fullPreviewSize",
          "state",
          "preview",
          "processingProgressPercentage",
        ]),
        u = l.fullPreview,
        d = l.fullPreviewSize,
        m = l.isGif,
        p = l.preview,
        _ = l.processingProgressPercentage,
        f = l.state,
        g = f === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING,
        h = m ? { loop: !g, autoPlay: !g, muted: !1, controls: !1 } : {},
        y = g
          ? c.jsx("div", {
              className: "xfo81ep",
              children: c.jsx(o("WAWebSpinner.react").Spinner, {
                color: "white",
                size: 50,
                stroke: 3,
                value: _ != null ? _ : void 0,
                max: 100,
              }),
            })
          : null,
        C = p
          ? c.jsx("img", {
              alt: s._(/*BTDS*/ "Preview"),
              className: "x10l6tqk x13vifvy x1o0tod x1vjfegm xh8yej3 x5yr21d",
              src: "data:image/jpeg;base64," + p,
            })
          : null,
        b = g
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
                h,
                { src: u },
              ),
            ),
        v = c.jsxs("div", {
          className: "xhtitgo xh8yej3 x5yr21d x1n2onr6 x78zum5 x6s0dn4 xl56j7k",
          children: [y, b, C],
        });
      return c.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            o("WAWebMediaEditorPreviewStyles").styles.container,
          ),
          {
            children: [
              c.jsx(r("WAWebMediaEditorPreviewHeader.react"), { onClose: i }),
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    r("WAWebAttachMediaDrawerAttachMediaTypeStyles").container,
                  ),
                  {
                    "data-animate-attach-media": !0,
                    children: c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        e.props(
                          r("WAWebAttachMediaDrawerAttachMediaTypeStyles")
                            .mediaContainer,
                        ),
                        {
                          children: c.jsx(r("WAWebObjectFit.react"), {
                            type: "scaleDown",
                            size: d,
                            children: v,
                          }),
                        },
                      ),
                    ),
                  },
                ),
              ),
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(o("WAWebMediaEditorPreviewStyles").styles.footer),
                  { children: a },
                ),
              ),
            ],
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
