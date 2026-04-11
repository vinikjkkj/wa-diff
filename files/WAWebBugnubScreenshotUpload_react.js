__d(
  "WAWebBugnubScreenshotUpload.react",
  [
    "Promise",
    "WAWebAttachMediaCollection",
    "WAWebBox.react",
    "WAWebBugReportFlowAttachMediaFlow.react",
    "WAWebBugReportFlowMediaView.react",
    "WAWebBugReportSessionWamEvent",
    "WAWebCloseRefreshedIcon.react",
    "WAWebCryptoCreateMediaKeys",
    "WAWebIcAddPhotoAlternateIcon.react",
    "WAWebKeyboardTabUtils",
    "WAWebMimeTypes",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebSpinner.react",
    "WAWebStartMediaUploadQpl",
    "WAWebUnstyledButton.react",
    "WAWebUploadManager",
    "WAWebWamEnumBugReportFlowAction",
    "WAWebWamEnumUploadOriginType",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = {
        container: {
          display: "x78zum5",
          columnGap: "x1s70e7g",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        mediaContainer: {
          position: "x1n2onr6",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x1dmp6jm",
          height: "xwzfr38",
          aspectRatio: "x1y5e3q9",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          backgroundColor: "x4wrhlh",
          ":focus-visible_outline": "x1iy98g",
          ":focus-visible_outlineOffset": "x7s97pk",
          $$css: !0,
        },
        mediaContainerHover: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          pointerEvents: "x47corl",
          width: "xh8yej3",
          height: "x5yr21d",
          borderStartStartRadius: "x1fmog5m",
          borderStartEndRadius: "xu25z0z",
          borderEndEndRadius: "x140muxe",
          borderEndStartRadius: "xo1y3bh",
          backgroundColor: "x5fk640",
          opacity: "xg01cxk",
          transition: "x1y2wqyl",
          $$css: !0,
        },
        mediaContainerHoverVisible: { opacity: "x1hc1fzr", $$css: !0 },
        mediaThumbnail: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          backgroundColor: "x4wrhlh",
          $$css: !0,
        },
        thumbnail: {
          position: "x1n2onr6",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        thumbnailContent: {
          position: "x1n2onr6",
          width: "xh8yej3",
          height: "x5yr21d",
          $$css: !0,
        },
        hoverOverlay: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineEnd: "xtijo5x",
          left: null,
          right: null,
          width: "xh8yej3",
          height: "x1l2mjrv",
          background: "x18bz5l2",
          opacity: "xg01cxk",
          transition: "x1y2wqyl",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        thumbnailHover: { ":hover_cursor": "x1277o0a", $$css: !0 },
        hoverOverlayVisible: { opacity: "x1hc1fzr", $$css: !0 },
        deleteButton: {
          position: "x10l6tqk",
          top: "xfr5jun",
          insetInlineEnd: "x11dcrhx",
          left: null,
          right: null,
          width: "x1kky2od",
          height: "xlup9mm",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          cursor: "x1ypdohk",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          opacity: "xg01cxk",
          transition: "x17j15dm",
          zIndex: "x11uqc5h",
          color: "x17t9dm2",
          $$css: !0,
        },
        deleteButtonVisible: { opacity: "x1hc1fzr", $$css: !0 },
        imagePreview: {
          width: "xh8yej3",
          height: "x5yr21d",
          backgroundSize: "x18d0r48",
          backgroundPosition: "x1xsqp64",
          $$css: !0,
        },
        clickable: { cursor: "x1ypdohk", $$css: !0 },
      },
      m = 3,
      p = 1024 * 1024 * 10;
    function _(t) {
      var a = o("react-compiler-runtime").c(38),
        i = t.customCloseMediaModal,
        l = t.customOpenMediaModal,
        s = t.customOpenSupportModal,
        _ = t.mediaState,
        y = t.onChangeState,
        b = C,
        v = c(0),
        S = v[0],
        R = v[1],
        L = c(null),
        E = L[0],
        k = L[1],
        I;
      a[0] !== _.mediaFiles || a[1] !== y
        ? ((I = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                if (t.length > 0) {
                  (R(t.length),
                    y({ state: "uploading", mediaFiles: _.mediaFiles }));
                  var r = t.map(h),
                    a = yield (e || (e = n("Promise"))).all(r).then(g);
                  (b(
                    o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION
                      .MEDIA_UPLOAD_SUCCESSFUL,
                  ),
                    R(0),
                    y({
                      state: "success",
                      mediaFiles: [].concat(_.mediaFiles, a),
                    }));
                }
              },
            );
            return function (n) {
              return t.apply(this, arguments);
            };
          })()),
          (a[0] = _.mediaFiles),
          (a[1] = y),
          (a[2] = I))
        : (I = a[2]);
      var T = I,
        D;
      a[3] !== i ||
      a[4] !== l ||
      a[5] !== s ||
      a[6] !== T ||
      a[7] !== _.mediaFiles.length
        ? ((D = function () {
            b(
              o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION
                .ADD_SCREENSHOT_CLICK,
            );
            var e = u.jsx(r("WAWebBugReportFlowAttachMediaFlow.react"), {
              mediaPayload: {
                maxItems: m - _.mediaFiles.length,
                maxFileSizeBytes: p,
              },
              onSend: T,
              customOpenMediaModal: l,
              customCloseMediaModal: i,
            });
            s != null
              ? s(e)
              : o("WAWebModalManager").ModalManager.openSupportModal(e);
          }),
          (a[3] = i),
          (a[4] = l),
          (a[5] = s),
          (a[6] = T),
          (a[7] = _.mediaFiles.length),
          (a[8] = D))
        : (D = a[8]);
      var x = D,
        $;
      a[9] !== _.mediaFiles || a[10] !== y
        ? (($ = function (t) {
            b(
              o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION
                .REMOVE_SCREENSHOT_CLICK,
            );
            var e = [].concat(_.mediaFiles);
            (e.splice(t, 1),
              y({ state: e.length > 0 ? "success" : "none", mediaFiles: e }));
          }),
          (a[9] = _.mediaFiles),
          (a[10] = y),
          (a[11] = $))
        : ($ = a[11]);
      var P = $,
        N;
      a[12] !== i || a[13] !== l || a[14] !== _.mediaFiles || a[15] !== y
        ? ((N = function (t) {
            var e = _.mediaFiles[t],
              a = e.originalFile;
            if (a != null) {
              var s = new File([a], e.filename, { type: a.type }),
                c = (function () {
                  var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      if (n.length !== 0) {
                        var a = n[0],
                          i = a.type === "image" ? "image" : "video",
                          l = a.file;
                        if (l instanceof Blob) {
                          var s = o(
                              "WAWebStartMediaUploadQpl",
                            ).startMediaUploadQpl({
                              entryPoint: "BugnubScreenshotUpload",
                            }),
                            u = yield r("WAWebUploadManager").encryptAndUpload({
                              blob: l,
                              mediaKey: null,
                              mediaKeyTimestamp: null,
                              type: i,
                              signal: new AbortController().signal,
                              userUploadAttemptCount: 0,
                              forwardedFromWeb: !1,
                              uploadOrigin: o("WAWebWamEnumUploadOriginType")
                                .UPLOAD_ORIGIN_TYPE.UNKNOWN,
                              isViewOnce: !1,
                              uploadQpl: s,
                            }),
                            c = yield r("WAWebCryptoCreateMediaKeys")(
                              i,
                              u.mediaKey,
                            ),
                            d = [].concat(_.mediaFiles);
                          (a.file instanceof Blob &&
                            e.previewUrl &&
                            URL.revokeObjectURL(e.previewUrl),
                            (d[t] = {
                              url: u.url,
                              iv: c.iv,
                              encKey: c.encKey,
                              previewUrl:
                                a.file instanceof Blob
                                  ? URL.createObjectURL(a.file)
                                  : e.previewUrl,
                              filename: a.filename,
                              mediaType: i,
                              originalFile:
                                a.file instanceof Blob ? a.file : void 0,
                            }),
                            b(
                              o("WAWebWamEnumBugReportFlowAction")
                                .BUG_REPORT_FLOW_ACTION.MEDIA_UPLOAD_SUCCESSFUL,
                            ),
                            y({ state: "success", mediaFiles: d }));
                        }
                      }
                    },
                  );
                  return function (t) {
                    return a.apply(this, arguments);
                  };
                })(),
                d = new Set([
                  o("WAWebMsgType").MSG_TYPE.IMAGE,
                  o("WAWebMsgType").MSG_TYPE.VIDEO,
                ]),
                m = [
                  o("WAWebMimeTypes").IMAGE_MIMES,
                  o("WAWebMimeTypes").VIDEO_MIMES,
                ].join(","),
                f = new (r("WAWebAttachMediaCollection"))({
                  chatParticipantCount: 1,
                }),
                g = { file: s },
                h = function () {
                  f.processAttachments([g], void 0, d, 1);
                },
                C = u.jsx(r("WAWebBugReportFlowMediaView.react"), {
                  onRender: h,
                  mediaCollection: f,
                  suportedMediaTypes: d,
                  mediaMimeTypes: m,
                  maxItems: 1,
                  maxFileSizeBytes: p,
                  onSend: c,
                  customCloseMediaModal: i,
                }),
                v = {
                  transition: "status-modal",
                  blockClose: !0,
                  focusType: {
                    type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  },
                };
              l != null
                ? l(C, v)
                : o("WAWebModalManager").ModalManager.openMedia(C, v);
            }
          }),
          (a[12] = i),
          (a[13] = l),
          (a[14] = _.mediaFiles),
          (a[15] = y),
          (a[16] = N))
        : (N = a[16]);
      var M = N,
        w;
      if (a[17] !== E || a[18] !== _.mediaFiles || a[19] !== M || a[20] !== P) {
        var A;
        (a[22] !== E || a[23] !== M || a[24] !== P
          ? ((A = function (t, n) {
              return u.jsxs(
                r("WAWebUnstyledButton.react"),
                {
                  xstyle: [
                    d.mediaContainer,
                    d.mediaThumbnail,
                    d.thumbnail,
                    d.thumbnailHover,
                  ],
                  onMouseEnter: function () {
                    return k(n);
                  },
                  onMouseLeave: function () {
                    return k(null);
                  },
                  onClick: function () {
                    return M(n);
                  },
                  children: [
                    u.jsxs(r("WAWebBox.react"), {
                      xstyle: d.thumbnailContent,
                      children: [
                        u.jsx(r("WAWebBox.react"), {
                          xstyle: d.imagePreview,
                          style: {
                            backgroundImage: "url(" + t.previewUrl + ")",
                          },
                        }),
                        u.jsx(r("WAWebBox.react"), {
                          xstyle: [
                            d.hoverOverlay,
                            E === n && d.hoverOverlayVisible,
                          ],
                        }),
                      ],
                    }),
                    u.jsx(r("WAWebUnstyledButton.react"), {
                      xstyle: [
                        d.deleteButton,
                        E === n && d.deleteButtonVisible,
                      ],
                      onClick: function (t) {
                        (t.stopPropagation(), P(n));
                      },
                      tabIndex: -1,
                      "aria-label": "Remove file",
                      children: u.jsx(
                        o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
                        { height: 24, width: 24 },
                      ),
                    }),
                  ],
                },
                n,
              );
            }),
            (a[22] = E),
            (a[23] = M),
            (a[24] = P),
            (a[25] = A))
          : (A = a[25]),
          (w = _.mediaFiles.map(A)),
          (a[17] = E),
          (a[18] = _.mediaFiles),
          (a[19] = M),
          (a[20] = P),
          (a[21] = w));
      } else w = a[21];
      var F;
      a[26] !== _.state || a[27] !== S
        ? ((F = _.state === "uploading" && Array.from({ length: S }, f)),
          (a[26] = _.state),
          (a[27] = S),
          (a[28] = F))
        : (F = a[28]);
      var O;
      a[29] !== E ||
      a[30] !== _.mediaFiles.length ||
      a[31] !== _.state ||
      a[32] !== x
        ? ((O =
            _.state !== "uploading" &&
            _.mediaFiles.length < m &&
            u.jsxs(r("WAWebUnstyledButton.react"), {
              xstyle: [d.mediaContainer, d.clickable],
              onClick: x,
              onMouseEnter: function () {
                return k(-1);
              },
              onMouseLeave: function () {
                return k(null);
              },
              title:
                _.state === "error"
                  ? "Error uploading files. Click to retry."
                  : "Add screenshot or video",
              children: [
                u.jsx(
                  o("WAWebIcAddPhotoAlternateIcon.react")
                    .IcAddPhotoAlternateIcon,
                  { height: 24, width: 24 },
                ),
                u.jsx(r("WAWebBox.react"), {
                  xstyle: [
                    d.mediaContainerHover,
                    E === -1 && d.mediaContainerHoverVisible,
                  ],
                }),
              ],
            })),
          (a[29] = E),
          (a[30] = _.mediaFiles.length),
          (a[31] = _.state),
          (a[32] = x),
          (a[33] = O))
        : (O = a[33]);
      var B;
      return (
        a[34] !== w || a[35] !== F || a[36] !== O
          ? ((B = u.jsxs(r("WAWebBox.react"), {
              xstyle: d.container,
              children: [w, F, O],
            })),
            (a[34] = w),
            (a[35] = F),
            (a[36] = O),
            (a[37] = B))
          : (B = a[37]),
        B
      );
    }
    function f(e, t) {
      return u.jsx(
        r("WAWebBox.react"),
        {
          xstyle: d.mediaContainer,
          children: u.jsx(o("WAWebSpinner.react").Spinner, {
            size: 24,
            color: "wdsSecondaryLighter",
          }),
        },
        "uploading-" + t,
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      return e.filter(Boolean);
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.type === "image" ? "image" : "video",
            n = e.file;
          if (n instanceof Blob) {
            var a = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
                entryPoint: "BugnubScreenshotUpload",
              }),
              i = yield r("WAWebUploadManager").encryptAndUpload({
                blob: n,
                mediaKey: null,
                mediaKeyTimestamp: null,
                type: t,
                signal: new AbortController().signal,
                userUploadAttemptCount: 0,
                forwardedFromWeb: !1,
                uploadOrigin: o("WAWebWamEnumUploadOriginType")
                  .UPLOAD_ORIGIN_TYPE.UNKNOWN,
                isViewOnce: !1,
                uploadQpl: a,
              }),
              l = yield r("WAWebCryptoCreateMediaKeys")(t, i.mediaKey);
            if (e.file instanceof Blob)
              return {
                url: i.url,
                iv: l.iv,
                encKey: l.encKey,
                previewUrl:
                  t === "image"
                    ? URL.createObjectURL(e.file)
                    : "data:image/jpeg;base64," + e.preview,
                filename: e.filename,
                mediaType: t,
                originalFile: n,
              };
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
        bugReportFlowAction: e,
      }).commit();
    }
    l.default = _;
  },
  98,
);
