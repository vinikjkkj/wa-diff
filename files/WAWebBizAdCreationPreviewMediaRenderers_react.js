__d(
  "WAWebBizAdCreationPreviewMediaRenderers.react",
  ["fbt", "WAWebMsgType", "bx", "react", "stylex", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = 300,
      m = {
        mediaPreviewThumbnailContainer: {
          height: "x1vd4hg5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function p(t) {
      var n = t.containerXstyle,
        a = t.media,
        i = o("useWAWebModelValues").useModelValues(a, [
          "fullPreview",
          "preview",
          "type",
        ]),
        l = i.fullPreview,
        u = i.preview,
        d = i.type;
      return d === o("WAWebMsgType").MSG_TYPE.VIDEO
        ? c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                m.mediaPreviewThumbnailContainer,
                n,
              ),
              {
                children: c.jsx("video", {
                  className: "x5yr21d x19kjcj4 xh8yej3",
                  src: l,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  poster: u,
                }),
              },
            ),
          )
        : c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                m.mediaPreviewThumbnailContainer,
                n,
              ),
              {
                children: c.jsx("img", {
                  className: "x5yr21d xl1xv1r xh8yej3",
                  src: u,
                  alt: s._(/*BTDS*/ "Media preview"),
                }),
              },
            ),
          );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.containerXstyle,
        o = t.thumbnailUrl,
        a = r("bx")("78840"),
        i = o != null ? o : r("bx").getURL(a);
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(m.mediaPreviewThumbnailContainer, n),
          {
            children: c.jsx("img", {
              className: "x5yr21d xl1xv1r xh8yej3",
              src: i,
              alt: s._(/*BTDS*/ "Media preview"),
            }),
          },
        ),
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.SingleMediaPreview = p),
      (l.PlaceholderMediaPreview = _));
  },
  226,
);
