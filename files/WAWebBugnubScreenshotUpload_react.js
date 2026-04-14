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
      var a = t.customCloseMediaModal,
        i = t.customOpenMediaModal,
        l = t.customOpenSupportModal,
        s = t.mediaState,
        _ = t.onChangeState,
        f = function (t) {
          new (o("WAWebBugReportSessionWamEvent").BugReportSessionWamEvent)({
            bugReportFlowAction: t,
          }).commit();
        },
        g = c(0),
        h = g[0],
        y = g[1],
        C = c(null),
        b = C[0],
        v = C[1],
        S = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            if (t.length > 0) {
              (y(t.length),
                _({ state: "uploading", mediaFiles: s.mediaFiles }));
              var a = t.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e.type === "image" ? "image" : "video",
                          n = e.file;
                        if (n instanceof Blob) {
                          var a = o(
                              "WAWebStartMediaUploadQpl",
                            ).startMediaUploadQpl({
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
                            l = yield r("WAWebCryptoCreateMediaKeys")(
                              t,
                              i.mediaKey,
                            );
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
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
                i = yield (e || (e = n("Promise"))).all(a).then(function (e) {
                  return e.filter(Boolean);
                });
              (f(
                o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION
                  .MEDIA_UPLOAD_SUCCESSFUL,
              ),
                y(0),
                _({
                  state: "success",
                  mediaFiles: [].concat(s.mediaFiles, i),
                }));
            }
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        R = function () {
          f(
            o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION
              .ADD_SCREENSHOT_CLICK,
          );
          var e = u.jsx(r("WAWebBugReportFlowAttachMediaFlow.react"), {
            mediaPayload: {
              maxItems: m - s.mediaFiles.length,
              maxFileSizeBytes: p,
            },
            onSend: S,
            customOpenMediaModal: i,
            customCloseMediaModal: a,
          });
          l != null
            ? l(e)
            : o("WAWebModalManager").ModalManager.openSupportModal(e);
        },
        L = function (t) {
          f(
            o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION
              .REMOVE_SCREENSHOT_CLICK,
          );
          var e = [].concat(s.mediaFiles);
          (e.splice(t, 1),
            _({ state: e.length > 0 ? "success" : "none", mediaFiles: e }));
        },
        E = function (t) {
          var e = s.mediaFiles[t],
            l = e.originalFile;
          if (l != null) {
            var c = new File([l], e.filename, { type: l.type }),
              d = (function () {
                var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    if (n.length !== 0) {
                      var a = n[0],
                        i = a.type === "image" ? "image" : "video",
                        l = a.file;
                      if (l instanceof Blob) {
                        var u = o(
                            "WAWebStartMediaUploadQpl",
                          ).startMediaUploadQpl({
                            entryPoint: "BugnubScreenshotUpload",
                          }),
                          c = yield r("WAWebUploadManager").encryptAndUpload({
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
                            uploadQpl: u,
                          }),
                          d = yield r("WAWebCryptoCreateMediaKeys")(
                            i,
                            c.mediaKey,
                          ),
                          m = [].concat(s.mediaFiles);
                        (a.file instanceof Blob &&
                          e.previewUrl &&
                          URL.revokeObjectURL(e.previewUrl),
                          (m[t] = {
                            url: c.url,
                            iv: d.iv,
                            encKey: d.encKey,
                            previewUrl:
                              a.file instanceof Blob
                                ? URL.createObjectURL(a.file)
                                : e.previewUrl,
                            filename: a.filename,
                            mediaType: i,
                            originalFile:
                              a.file instanceof Blob ? a.file : void 0,
                          }),
                          f(
                            o("WAWebWamEnumBugReportFlowAction")
                              .BUG_REPORT_FLOW_ACTION.MEDIA_UPLOAD_SUCCESSFUL,
                          ),
                          _({ state: "success", mediaFiles: m }));
                      }
                    }
                  },
                );
                return function (t) {
                  return a.apply(this, arguments);
                };
              })(),
              m = new Set([
                o("WAWebMsgType").MSG_TYPE.IMAGE,
                o("WAWebMsgType").MSG_TYPE.VIDEO,
              ]),
              g = [
                o("WAWebMimeTypes").IMAGE_MIMES,
                o("WAWebMimeTypes").VIDEO_MIMES,
              ].join(","),
              h = new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: 1,
              }),
              y = { file: c },
              C = function () {
                h.processAttachments([y], void 0, m, 1);
              },
              b = u.jsx(r("WAWebBugReportFlowMediaView.react"), {
                onRender: C,
                mediaCollection: h,
                suportedMediaTypes: m,
                mediaMimeTypes: g,
                maxItems: 1,
                maxFileSizeBytes: p,
                onSend: d,
                customCloseMediaModal: a,
              }),
              v = {
                transition: "status-modal",
                blockClose: !0,
                focusType: {
                  type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                },
              };
            i != null
              ? i(b, v)
              : o("WAWebModalManager").ModalManager.openMedia(b, v);
          }
        };
      return u.jsxs(r("WAWebBox.react"), {
        xstyle: d.container,
        children: [
          s.mediaFiles.map(function (e, t) {
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
                  return v(t);
                },
                onMouseLeave: function () {
                  return v(null);
                },
                onClick: function () {
                  return E(t);
                },
                children: [
                  u.jsxs(r("WAWebBox.react"), {
                    xstyle: d.thumbnailContent,
                    children: [
                      u.jsx(r("WAWebBox.react"), {
                        xstyle: d.imagePreview,
                        style: { backgroundImage: "url(" + e.previewUrl + ")" },
                      }),
                      u.jsx(r("WAWebBox.react"), {
                        xstyle: [
                          d.hoverOverlay,
                          b === t && d.hoverOverlayVisible,
                        ],
                      }),
                    ],
                  }),
                  u.jsx(r("WAWebUnstyledButton.react"), {
                    xstyle: [d.deleteButton, b === t && d.deleteButtonVisible],
                    onClick: function (n) {
                      (n.stopPropagation(), L(t));
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
              t,
            );
          }),
          s.state === "uploading" &&
            Array.from({ length: h }, function (e, t) {
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
            }),
          s.state !== "uploading" &&
            s.mediaFiles.length < m &&
            u.jsxs(r("WAWebUnstyledButton.react"), {
              xstyle: [d.mediaContainer, d.clickable],
              onClick: R,
              onMouseEnter: function () {
                return v(-1);
              },
              onMouseLeave: function () {
                return v(null);
              },
              title:
                s.state === "error"
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
                    b === -1 && d.mediaContainerHoverVisible,
                  ],
                }),
              ],
            }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
