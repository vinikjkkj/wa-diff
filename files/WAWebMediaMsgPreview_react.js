__d(
  "WAWebMediaMsgPreview.react",
  [
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMediaUrlProvider",
    "WAWebMsgType",
    "compactMap",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = new Set([
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.PRODUCT,
      ]);
    function c(e) {
      return u.has(e);
    }
    function d(e) {
      var t = e.type,
        n = e.url;
      return s.jsx("div", {
        className: {
          0: "x10l6tqk xh8yej3 x5yr21d x1xsqp64 x18d0r48",
          1: "x10l6tqk xh8yej3 x5yr21d x1xsqp64 x18d0r48 xvs2etk xg3wpu6 x1jwbhkm xgg4q86",
        }[(t === o("WAWebMediaTypes").OUTWARD_TYPES.PTV) << 0],
        style: { backgroundImage: "url(" + n + ")" },
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t,
        n = e.fallbackPreview,
        o = e.mediaData,
        a = r("compactMap")(
          [
            [
              o.preview instanceof r("WAWebMediaOpaqueData")
                ? o.preview.url()
                : null,
              "preview",
            ],
            [(t = o.fullPreviewData) == null ? void 0 : t.url(), "fullPreview"],
          ],
          function (e) {
            var t = e[0],
              n = e[1];
            return t != null ? s.jsx(d, { url: t, type: o.type }, n) : null;
          },
        );
      if (a.length > 0) return a;
      if (n != null) return n;
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.fallbackPreview,
        n = e.mediaData,
        a = o("useWAWebModelValues").useModelValues(n, [
          "filehash",
          "fullPreviewData",
          "mediaStage",
          "preview",
          "type",
        ]);
      return c(a.type)
        ? s.jsx(
            r("WAWebMediaUrlProvider"),
            {
              mediaData: a,
              placeholderRenderer: function () {
                return s.jsx(m, { mediaData: a, fallbackPreview: t });
              },
              renderProgressively: !0,
              children: function (t) {
                return s.jsx(d, { url: t, type: a.type });
              },
            },
            a.filehash,
          )
        : s.jsx(m, { mediaData: a });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.isMediaTypeWithImage = c),
      (l.MediaMsgPreview = p));
  },
  98,
);
