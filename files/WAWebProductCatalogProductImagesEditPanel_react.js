__d(
  "WAWebProductCatalogProductImagesEditPanel.react",
  [
    "fbt",
    "Promise",
    "WAWebAttachMediaModel",
    "WAWebCameraIcon.react",
    "WAWebEventFiles",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebMedia",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMimeTypes",
    "WAWebMsgType",
    "WAWebProductCatalogProductThumb.react",
    "WAWebQplFlowWrapper",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WAWebXAltIcon.react",
    "compactMap",
    "countWhere",
    "qpl",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useImperativeHandle,
      f = p.useRef,
      g = p.useState,
      h = "128px",
      y = "131px",
      C = r("qpl")._(774779113, "3440"),
      b = {
        btnDelete: {
          position: "x10l6tqk",
          top: "x1pdr0v7",
          insetInlineEnd: "x1lm9i9x",
          left: null,
          right: null,
          zIndex: "x11uqc5h",
          color: "x17t9dm2",
          filter: "xjjae95",
          $$css: !0,
        },
        btnAdd: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x2pejg6",
          height: "x1vlo0dj",
          fontSize: "x1ncwhqj",
          fontWeight: "xk50ysn",
          lineHeight: "xo5v014",
          letterSpacing: "x1yrajzq",
          $$css: !0,
        },
        btnAddContainer: {
          position: "x1n2onr6",
          display: "x1rg5ohu",
          width: "x2pejg6",
          height: "x1vlo0dj",
          color: "xqg7fiw",
          verticalAlign: "x16dsc37",
          backgroundColor: "xep993w",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          $$css: !0,
        },
        btnAddText: { textAlign: "x2b8uid", $$css: !0 },
        btnAddTextRefreshed: { color: "x14ug900", $$css: !0 },
        btnAddContainerRefreshed: { color: "x1v5yvga", $$css: !0 },
        imageTile: {
          position: "x1n2onr6",
          display: "x1rg5ohu",
          width: "x2pejg6",
          height: "x1vlo0dj",
          ":focus_boxShadow": "x1s2ixkd",
          $$css: !0,
        },
        imageThumb: { width: "xh8yej3", pointerEvents: "x47corl", $$css: !0 },
        dismissableMessage: {
          backgroundColor: "x1280gxy",
          position: "x1n2onr6",
          lineHeight: "x1u7k74",
          $$css: !0,
        },
      };
    function v(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.imageData,
        a = e.index,
        i = e.onDelete,
        l = e.ref,
        u = e.removable,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (c || (c = r("stylex"))).props(
            b.imageTile,
            o("WAWebUISpacing").uiMargin.end8,
            o("WAWebUISpacing").uiMargin.bottom10,
          )),
          (t[0] = d))
        : (d = t[0]);
      var p;
      t[1] !== a || t[2] !== i || t[3] !== u
        ? ((p =
            u &&
            m.jsx(r("WAWebUnstyledButton.react"), {
              xstyle: b.btnDelete,
              "aria-label": s._(/*BTDS*/ "Remove image number {imageNumber}", [
                s._param("imageNumber", a + 1),
              ]),
              testid: void 0,
              onClick: i,
              children: m.jsx(o("WAWebXAltIcon.react").XAltIcon, {
                width: 30,
                height: 30,
              }),
            })),
          (t[1] = a),
          (t[2] = i),
          (t[3] = u),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] !== n.mediaData
        ? ((_ = m.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
            mediaData: n.mediaData,
            xstyle: b.imageThumb,
          })),
          (t[5] = n.mediaData),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] !== l || t[8] !== p || t[9] !== _
          ? ((f = m.jsxs(
              "div",
              babelHelpers.extends({ ref: l }, d, { children: [p, _] }),
            )),
            (t[7] = l),
            (t[8] = p),
            (t[9] = _),
            (t[10] = f))
          : (f = t[10]),
        f
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.handleFilePick,
        r = e.inputRef,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { display: "none" }), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n || t[2] !== r
          ? ((i = m.jsx("input", {
              ref: r,
              type: "file",
              accept: o("WAWebMimeTypes").IMAGE_MIMES,
              style: a,
              onChange: n,
              multiple: !0,
            })),
            (t[1] = n),
            (t[2] = r),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        r = g(!1),
        a = r[0],
        i = r[1];
      if (a) return null;
      var l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebUISpacing").uiMargin.end10,
            o("WAWebUISpacing").uiPadding.all15,
            o("WAWebUISpacing").uiPadding.end30,
            b.dismissableMessage,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = m.jsx("button", {
            "aria-label": s._(/*BTDS*/ "Close"),
            onClick: function () {
              i(!0);
            },
            className:
              "x10l6tqk xwa60dl x1lm9i9x xhslqc4 x1cb1t30 x11uqc5h x1wus5yt",
            children: m.jsx(o("WAWebXAltIcon.react").XAltIcon, {
              width: 36,
              height: 36,
            }),
          })),
          (t[1] = u))
        : (u = t[1]);
      var c;
      return (
        t[2] !== n
          ? ((c = m.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: l,
              children: [n, u],
            })),
            (t[2] = n),
            (t[3] = c))
          : (c = t[3]),
        c
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.onAddFileClick,
        a = e.ref,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (c || (c = r("stylex"))).props(
            b.btnAddContainer,
            b.btnAddContainerRefreshed,
            o("WAWebUISpacing").uiMargin.end8,
            o("WAWebUISpacing").uiMargin.bottom10,
          )),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Add additional image")), (t[1] = l))
        : (l = t[1]);
      var u, d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = m.jsx(o("WAWebCameraIcon.react").CameraIcon, {})),
          (d = m.jsx(
            "div",
            babelHelpers.extends(
              {},
              (c || (c = r("stylex"))).props(
                b.btnAddText,
                b.btnAddTextRefreshed,
                o("WAWebUISpacing").uiMargin.top5,
              ),
              { children: s._(/*BTDS*/ "Add images") },
            ),
          )),
          (t[2] = u),
          (t[3] = d))
        : ((u = t[2]), (d = t[3]));
      var p;
      t[4] !== n
        ? ((p = m.jsxs(r("WAWebUnstyledButton.react"), {
            xstyle: b.btnAdd,
            "aria-label": l,
            onClick: n,
            testid: void 0,
            children: [u, d],
          })),
          (t[4] = n),
          (t[5] = p))
        : (p = t[5]);
      var _;
      return (
        t[6] !== a || t[7] !== p
          ? ((_ = m.jsx(
              "div",
              babelHelpers.extends({ ref: a }, i, { children: p }),
            )),
            (t[6] = a),
            (t[7] = p),
            (t[8] = _))
          : (_ = t[8]),
        _
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.error,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "xh8yej3 x1hshjfz x30a034" }), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = m.jsx(
              "div",
              babelHelpers.extends({}, r, { role: "alert", children: n }),
            )),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function k(t) {
      var a = o("react-compiler-runtime").c(52),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var d = i,
        p = d.error,
        h = d.maxImageCount,
        y = d.onChange,
        b = d.product,
        k = f(null),
        F;
      a[3] !== b.productImageCollection
        ? ((F = function () {
            return b.productImageCollection.filter(A).map(w);
          }),
          (a[3] = b.productImageCollection),
          (a[4] = F))
        : (F = a[4]);
      var O = g(F),
        B = O[0],
        W = O[1],
        q;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = function () {
            if (k.current) {
              var e = k.current;
              e.click();
            }
          }),
          (a[5] = q))
        : (q = a[5]);
      var U = q,
        V;
      a[6] !== B
        ? ((V = function (t) {
            return B.some(function (e) {
              return e.mediaData.filehash === t.filehash;
            })
              ? (o("WAWebToastManager").ToastManager.open(
                  m.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Two or more images are the same. Delete any duplicates and try again.",
                    ),
                  }),
                ),
                !1)
              : !0;
          }),
          (a[6] = B),
          (a[7] = V))
        : (V = a[7]);
      var H = V,
        G;
      a[8] !== B || a[9] !== y || a[10] !== H
        ? ((G = function (t) {
            t.mediaPrep.waitForPrep().then(function (e) {
              if (H(e)) {
                ((e.mediaStage = o("WAWebMediaTypes").MediaDataStage.RESOLVED),
                  (e.renderableUrl = t.fullPreview));
                var n = e.mediaBlob;
                (n &&
                  !(n instanceof r("WAWebMediaOpaqueData")) &&
                  r("WAWebMediaOpaqueData")
                    .createFromData(n, n.type)
                    .then(function (t) {
                      e.mediaBlob = t;
                    }),
                  W(function (t) {
                    return [].concat(t, [{ url: null, mediaData: e }]);
                  }),
                  y == null || y([].concat(B, [{ url: null, mediaData: e }])));
              }
            });
          }),
          (a[8] = B),
          (a[9] = y),
          (a[10] = H),
          (a[11] = G))
        : (G = a[11]);
      var z = G,
        j;
      a[12] !== z || a[13] !== B.length || a[14] !== h
        ? ((j = function (t) {
            (o("WAWebEventFiles")
              .getFiles(t, o("WAWebMimeTypes").IMAGE_MIMES)
              .then(function (e) {
                var t = h - B.length;
                (e.length > t &&
                  o("WAWebToastManager").ToastManager.open(
                    m.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ "You've reached the maximum number of images to add.",
                      ),
                      duration: 6e3,
                      action: {
                        actionText: r("WAWebFbtCommon")("GOT IT"),
                        dismiss: !0,
                        theme: "success",
                      },
                    }),
                  ),
                  e
                    .slice(0, h - B.length)
                    .map(M)
                    .map(function (e) {
                      var t,
                        r = new (o("WAWebAttachMediaModel").AttachMedia)({
                          file: (u || (u = n("Promise"))).resolve(e),
                        });
                      return (t = r.processPromise) == null
                        ? void 0
                        : t.then(function () {
                            z(r);
                          });
                    }));
              }),
              t.target instanceof HTMLInputElement &&
                t.target.value != null &&
                t.target.value !== "" &&
                (t.target.value = ""));
          }),
          (a[12] = z),
          (a[13] = B.length),
          (a[14] = h),
          (a[15] = j))
        : (j = a[15]);
      var K = j,
        Q;
      a[16] !== B
        ? ((Q = function (t) {
            var e = B.map(N),
              a = r("countWhere")(e, P);
            (o("WAWebQplFlowWrapper").QPL.markerAnnotate(C, {
              int: { ImagesCount: a },
            }),
              o("WAWebQplFlowWrapper").QPL.markerPoint(
                C,
                "images_upload_start",
              ));
            var i = e.filter($),
              l = r("compactMap")(i, function (e) {
                var n = e.mediaData,
                  a = e.mediaIndex,
                  i = n.filehash,
                  l = n.mediaBlob;
                return l instanceof r("WAWebMediaOpaqueData")
                  ? o("WAWebMedia")
                      .uploadProductImage(l, i, a, t)
                      .then(function (t) {
                        e.url = t;
                      })
                  : null;
              });
            return (u || (u = n("Promise"))).all(l).then(function () {
              return (
                o("WAWebQplFlowWrapper").QPL.markerPoint(
                  C,
                  "images_upload_end",
                ),
                e.filter(x).map(D)
              );
            });
          }),
          (a[16] = B),
          (a[17] = Q))
        : (Q = a[17]);
      var X = Q,
        Y;
      (a[18] !== K || a[19] !== X
        ? ((Y = function () {
            return { uploadImages: X, handleFilePick: K };
          }),
          (a[18] = K),
          (a[19] = X),
          (a[20] = Y))
        : (Y = a[20]),
        _(l, Y));
      var J;
      a[21] !== B || a[22] !== y
        ? ((J = function (t) {
            var e = B.filter(function (e) {
              return e !== t;
            });
            (W(e), y == null || y(e));
          }),
          (a[21] = B),
          (a[22] = y),
          (a[23] = J))
        : (J = a[23]);
      var Z = J,
        ee;
      a[24] !== B
        ? ((ee = B.some(T)), (a[24] = B), (a[25] = ee))
        : (ee = a[25]);
      var te = ee,
        ne;
      a[26] !== te
        ? ((ne = te
            ? m.jsx(R, {
                children: s._(
                  /*BTDS*/ "Note: use your WhatsApp Business mobile app to add or delete catalog item videos",
                ),
              })
            : null),
          (a[26] = te),
          (a[27] = ne))
        : (ne = a[27]);
      var re = ne,
        oe,
        ae;
      a[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = (c || (c = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.bottom14,
          )),
          (ae = { className: "x78zum5 x1a02dak" }),
          (a[28] = oe),
          (a[29] = ae))
        : ((oe = a[28]), (ae = a[29]));
      var ie;
      if (a[30] !== Z || a[31] !== B) {
        var le;
        (a[33] !== Z
          ? ((le = function (t, n) {
              return m.jsx(
                v,
                {
                  index: n,
                  imageData: t,
                  onDelete: function () {
                    return Z(t);
                  },
                  removable: t.videoUrl == null,
                },
                t.mediaData.filehash,
              );
            }),
            (a[33] = Z),
            (a[34] = le))
          : (le = a[34]),
          (ie = B.filter(I).map(le)),
          (a[30] = Z),
          (a[31] = B),
          (a[32] = ie));
      } else ie = a[32];
      var se;
      a[35] !== B.length || a[36] !== h
        ? ((se = B.length < h ? m.jsx(L, { onAddFileClick: U }) : null),
          (a[35] = B.length),
          (a[36] = h),
          (a[37] = se))
        : (se = a[37]);
      var ue;
      a[38] !== ie || a[39] !== se
        ? ((ue = m.jsxs(r("WAWebVelocityTransitionGroup"), {
            appear: !0,
            transitionName: "thumb-scale-flex",
            children: [ie, se],
          })),
          (a[38] = ie),
          (a[39] = se),
          (a[40] = ue))
        : (ue = a[40]);
      var ce;
      a[41] !== K
        ? ((ce = m.jsx(S, { inputRef: k, handleFilePick: K })),
          (a[41] = K),
          (a[42] = ce))
        : (ce = a[42]);
      var de;
      a[43] !== ue || a[44] !== ce
        ? ((de = m.jsxs(
            "div",
            babelHelpers.extends({}, ae, { children: [ue, ce] }),
          )),
          (a[43] = ue),
          (a[44] = ce),
          (a[45] = de))
        : (de = a[45]);
      var me;
      a[46] !== p
        ? ((me = m.jsx(E, { error: p })), (a[46] = p), (a[47] = me))
        : (me = a[47]);
      var pe;
      return (
        a[48] !== de || a[49] !== me || a[50] !== re
          ? ((pe = m.jsxs(
              "div",
              babelHelpers.extends({}, oe, { children: [de, re, me] }),
            )),
            (a[48] = de),
            (a[49] = me),
            (a[50] = re),
            (a[51] = pe))
          : (pe = a[51]),
        pe
      );
    }
    function I(e) {
      return e.mediaData;
    }
    function T(e) {
      return e.videoUrl != null;
    }
    function D(e) {
      return e.url || "";
    }
    function x(e) {
      return e.videoUrl == null;
    }
    function $(e) {
      return e.url == null && e.videoUrl == null;
    }
    function P(e) {
      return e.url == null && e.videoUrl == null;
    }
    function N(e, t) {
      return babelHelpers.extends({}, e, { mediaIndex: t });
    }
    function M(e) {
      return {
        file: e,
        filename: e.name,
        mimetype: e.type,
        type: o("WAWebMsgType").MSG_TYPE.PRODUCT,
      };
    }
    function w(e) {
      return { url: e.mediaUrl, mediaData: e.mediaData, videoUrl: e.videoUrl };
    }
    function A(e) {
      return !e.old;
    }
    l.default = k;
  },
  226,
);
