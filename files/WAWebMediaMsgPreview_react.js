__d(
  "WAWebMediaMsgPreview.react",
  [
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMediaUrlProvider",
    "WAWebMsgType",
    "compactMap",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(7),
        n = e.type,
        r = e.url,
        a;
      t[0] !== n
        ? ((a = {
            0: "x10l6tqk xh8yej3 x5yr21d x1xsqp64 x18d0r48",
            1: "x10l6tqk xh8yej3 x5yr21d x1xsqp64 x18d0r48 xvs2etk xg3wpu6 x1jwbhkm xgg4q86",
          }[(n === o("WAWebMediaTypes").OUTWARD_TYPES.PTV) << 0]),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = "url(" + r + ")",
        l;
      t[2] !== i
        ? ((l = { backgroundImage: i }), (t[2] = i), (t[3] = l))
        : (l = t[3]);
      var u;
      return (
        t[4] !== a || t[5] !== l
          ? ((u = s.jsx("div", { className: a, style: l })),
            (t[4] = a),
            (t[5] = l),
            (t[6] = u))
          : (u = t[6]),
        u
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.fallbackPreview,
        a = e.mediaData,
        i;
      if (t[0] !== a.fullPreviewData || t[1] !== a.preview || t[2] !== a.type) {
        var l, u;
        (t[4] !== a.type
          ? ((u = function (t) {
              var e = t[0],
                n = t[1];
              return e != null ? s.jsx(d, { url: e, type: a.type }, n) : null;
            }),
            (t[4] = a.type),
            (t[5] = u))
          : (u = t[5]),
          (i = r("compactMap")(
            [
              [
                a.preview instanceof r("WAWebMediaOpaqueData")
                  ? a.preview.url()
                  : null,
                "preview",
              ],
              [
                (l = a.fullPreviewData) == null ? void 0 : l.url(),
                "fullPreview",
              ],
            ],
            u,
          )),
          (t[0] = a.fullPreviewData),
          (t[1] = a.preview),
          (t[2] = a.type),
          (t[3] = i));
      } else i = t[3];
      var c = i;
      if (c.length > 0) return c;
      if (n != null) return n;
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.fallbackPreview,
        a = e.mediaData,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            "filehash",
            "fullPreviewData",
            "mediaStage",
            "preview",
            "type",
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useModelValues(a, i);
      if (!c(l.type)) {
        var u;
        return (
          t[1] !== l
            ? ((u = s.jsx(m, { mediaData: l })), (t[1] = l), (t[2] = u))
            : (u = t[2]),
          u
        );
      }
      var p;
      t[3] !== n || t[4] !== l
        ? ((p = function () {
            return s.jsx(m, { mediaData: l, fallbackPreview: n });
          }),
          (t[3] = n),
          (t[4] = l),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== l.type
        ? ((_ = function (t) {
            return s.jsx(d, { url: t, type: l.type });
          }),
          (t[6] = l.type),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      return (
        t[8] !== l || t[9] !== p || t[10] !== _
          ? ((f = s.jsx(
              r("WAWebMediaUrlProvider"),
              {
                mediaData: l,
                placeholderRenderer: p,
                renderProgressively: !0,
                children: _,
              },
              l.filehash,
            )),
            (t[8] = l),
            (t[9] = p),
            (t[10] = _),
            (t[11] = f))
          : (f = t[11]),
        f
      );
    }
    ((l.isMediaTypeWithImage = c), (l.MediaMsgPreview = p));
  },
  98,
);
