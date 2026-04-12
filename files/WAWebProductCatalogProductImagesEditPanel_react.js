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
      var t = e.imageData,
        n = e.index,
        a = e.onDelete,
        i = e.ref,
        l = e.removable;
      return m.jsxs(
        "div",
        babelHelpers.extends(
          { ref: i },
          (c || (c = r("stylex"))).props(
            b.imageTile,
            o("WAWebUISpacing").uiMargin.end8,
            o("WAWebUISpacing").uiMargin.bottom10,
          ),
          {
            children: [
              l &&
                m.jsx(r("WAWebUnstyledButton.react"), {
                  xstyle: b.btnDelete,
                  "aria-label": s._(
                    /*BTDS*/ "Remove image number {imageNumber}",
                    [s._param("imageNumber", n + 1)],
                  ),
                  testid: void 0,
                  onClick: a,
                  children: m.jsx(o("WAWebXAltIcon.react").XAltIcon, {
                    width: 30,
                    height: 30,
                  }),
                }),
              m.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
                mediaData: t.mediaData,
                xstyle: b.imageThumb,
              }),
            ],
          },
        ),
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.handleFilePick,
        n = e.inputRef;
      return m.jsx("input", {
        ref: n,
        type: "file",
        accept: o("WAWebMimeTypes").IMAGE_MIMES,
        style: { display: "none" },
        onChange: t,
        multiple: !0,
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.children,
        n = g(!1),
        r = n[0],
        a = n[1];
      return r
        ? null
        : m.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: [
              o("WAWebUISpacing").uiMargin.end10,
              o("WAWebUISpacing").uiPadding.all15,
              o("WAWebUISpacing").uiPadding.end30,
              b.dismissableMessage,
            ],
            children: [
              t,
              m.jsx("button", {
                "aria-label": s._(/*BTDS*/ "Close"),
                onClick: function () {
                  a(!0);
                },
                className:
                  "x10l6tqk xwa60dl x1lm9i9x xhslqc4 x1cb1t30 x11uqc5h x1wus5yt",
                children: m.jsx(o("WAWebXAltIcon.react").XAltIcon, {
                  width: 36,
                  height: 36,
                }),
              }),
            ],
          });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.onAddFileClick,
        n = e.ref;
      return m.jsx(
        "div",
        babelHelpers.extends(
          { ref: n },
          (c || (c = r("stylex"))).props(
            b.btnAddContainer,
            b.btnAddContainerRefreshed,
            o("WAWebUISpacing").uiMargin.end8,
            o("WAWebUISpacing").uiMargin.bottom10,
          ),
          {
            children: m.jsxs(r("WAWebUnstyledButton.react"), {
              xstyle: b.btnAdd,
              "aria-label": s._(/*BTDS*/ "Add additional image"),
              onClick: t,
              testid: void 0,
              children: [
                m.jsx(o("WAWebCameraIcon.react").CameraIcon, {}),
                m.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    c.props(
                      b.btnAddText,
                      b.btnAddTextRefreshed,
                      o("WAWebUISpacing").uiMargin.top5,
                    ),
                    { children: s._(/*BTDS*/ "Add images") },
                  ),
                ),
              ],
            }),
          },
        ),
      );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.error;
      return m.jsx("div", {
        className: "xh8yej3 x1hshjfz x30a034",
        role: "alert",
        children: t,
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.error,
        d = i.maxImageCount,
        p = i.onChange,
        h = i.product,
        y = f(null),
        b = g(function () {
          return h.productImageCollection
            .filter(function (e) {
              return !e.old;
            })
            .map(function (e) {
              return {
                url: e.mediaUrl,
                mediaData: e.mediaData,
                videoUrl: e.videoUrl,
              };
            });
        }),
        k = b[0],
        I = b[1],
        T = function () {
          if (y.current) {
            var e = y.current;
            e.click();
          }
        },
        D = function (t) {
          return k.some(function (e) {
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
        },
        x = function (t) {
          t.mediaPrep.waitForPrep().then(function (e) {
            if (D(e)) {
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
                I(function (t) {
                  return [].concat(t, [{ url: null, mediaData: e }]);
                }),
                p == null || p([].concat(k, [{ url: null, mediaData: e }])));
            }
          });
        },
        $ = function (t) {
          (o("WAWebEventFiles")
            .getFiles(t, o("WAWebMimeTypes").IMAGE_MIMES)
            .then(function (e) {
              var t = d - k.length;
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
                  .slice(0, d - k.length)
                  .map(function (e) {
                    return {
                      file: e,
                      filename: e.name,
                      mimetype: e.type,
                      type: o("WAWebMsgType").MSG_TYPE.PRODUCT,
                    };
                  })
                  .map(function (e) {
                    var t,
                      r = new (o("WAWebAttachMediaModel").AttachMedia)({
                        file: (u || (u = n("Promise"))).resolve(e),
                      });
                    return (t = r.processPromise) == null
                      ? void 0
                      : t.then(function () {
                          x(r);
                        });
                  }));
            }),
            t.target instanceof HTMLInputElement &&
              t.target.value != null &&
              t.target.value !== "" &&
              (t.target.value = ""));
        },
        P = function (t) {
          var e = k.map(function (e, t) {
              return babelHelpers.extends({}, e, { mediaIndex: t });
            }),
            a = r("countWhere")(e, function (e) {
              return e.url == null && e.videoUrl == null;
            });
          (o("WAWebQplFlowWrapper").QPL.markerAnnotate(C, {
            int: { ImagesCount: a },
          }),
            o("WAWebQplFlowWrapper").QPL.markerPoint(C, "images_upload_start"));
          var i = e.filter(function (e) {
              return e.url == null && e.videoUrl == null;
            }),
            l = r("compactMap")(i, function (e) {
              var n = e.mediaData,
                a = n.filehash,
                i = n.mediaBlob,
                l = e.mediaIndex;
              return i instanceof r("WAWebMediaOpaqueData")
                ? o("WAWebMedia")
                    .uploadProductImage(i, a, l, t)
                    .then(function (t) {
                      e.url = t;
                    })
                : null;
            });
          return (u || (u = n("Promise"))).all(l).then(function () {
            return (
              o("WAWebQplFlowWrapper").QPL.markerPoint(C, "images_upload_end"),
              e
                .filter(function (e) {
                  return e.videoUrl == null;
                })
                .map(function (e) {
                  return e.url || "";
                })
            );
          });
        };
      _(a, function () {
        return { uploadImages: P, handleFilePick: $ };
      });
      var N = function (t) {
          var e = k.filter(function (e) {
            return e !== t;
          });
          (I(e), p == null || p(e));
        },
        M = k.some(function (e) {
          return e.videoUrl != null;
        }),
        w = M
          ? m.jsx(R, {
              children: s._(
                /*BTDS*/ "Note: use your WhatsApp Business mobile app to add or delete catalog item videos",
              ),
            })
          : null;
      return m.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (c || (c = r("stylex"))).props(o("WAWebUISpacing").uiMargin.bottom14),
          {
            children: [
              m.jsxs("div", {
                className: "x78zum5 x1a02dak",
                children: [
                  m.jsxs(r("WAWebVelocityTransitionGroup"), {
                    appear: !0,
                    transitionName: "thumb-scale-flex",
                    children: [
                      k
                        .filter(function (e) {
                          return e.mediaData;
                        })
                        .map(function (e, t) {
                          return m.jsx(
                            v,
                            {
                              index: t,
                              imageData: e,
                              onDelete: function () {
                                return N(e);
                              },
                              removable: e.videoUrl == null,
                            },
                            e.mediaData.filehash,
                          );
                        }),
                      k.length < d ? m.jsx(L, { onAddFileClick: T }) : null,
                    ],
                  }),
                  m.jsx(S, { inputRef: y, handleFilePick: $ }),
                ],
              }),
              w,
              m.jsx(E, { error: l }),
            ],
          },
        ),
      );
    }
    ((k.displayName = k.name + " [from " + i.id + "]"), (l.default = k));
  },
  226,
);
