__d(
  "WAWebMediaDocumentUtils",
  [
    "fbt",
    "WALogger",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDocStateControls.react",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFileSaver",
    "WAWebFilenameManager",
    "WAWebFrontendMsgGetters",
    "WAWebHtmlViewerGatingUtils",
    "WAWebMediaMissingModal.react",
    "WAWebMediaStore",
    "WAWebMediaTypes",
    "WAWebModalManager",
    "WAWebModernizr",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebSafariLimited",
    "WAWebShowMediaNotReadableModal",
    "WAWebStateUtils",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "cr:11804",
    "cr:7565",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $ = x || (x = o("react")),
      P = x,
      N = P.useCallback,
      M = P.useEffect,
      w = P.useState,
      A = 100 * 1024 * 1024;
    function F(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e);
      o("WAWebToastManager").ToastManager.open(
        $.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ '"{name}" downloaded.', [s._param("name", t)]),
        }),
      );
    }
    function O(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e);
      o("WAWebToastManager").ToastManager.open(
        $.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ '"{name}" opening.', [s._param("name", t)]),
        }),
      );
    }
    function B(e) {
      e && (e.stopPropagation(), e.preventDefault());
    }
    function W(e) {
      var t = o("react-compiler-runtime").c(8),
        n = w(null),
        r = n[0],
        a = n[1],
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["mediaStage", "filehash"]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useOptionalModelValues(e.mediaData, i),
        s;
      t[1] !== l
        ? ((s = function () {
            l == null ||
              l.filehash == null ||
              l.mediaStage !== o("WAWebMediaTypes").MediaDataStage.INIT ||
              o("WAWebMediaStore")
                .LruMediaStore.has(l.filehash)
                .then(function (e) {
                  return a(e);
                })
                .catch(q);
          }),
          (t[1] = l),
          (t[2] = s))
        : (s = t[2]);
      var u = s,
        c;
      (t[3] !== u
        ? ((c = function () {
            u();
          }),
          (t[3] = u),
          (t[4] = c))
        : (c = t[4]),
        o("useWAWebListener").useListener(
          e.mediaData,
          "change:filehash change:mediaStage",
          c,
        ));
      var d, m;
      return (
        t[5] !== u
          ? ((d = function () {
              u();
            }),
            (m = [u]),
            (t[5] = u),
            (t[6] = d),
            (t[7] = m))
          : ((d = t[6]), (m = t[7])),
        M(d, m),
        r
      );
    }
    function q(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[useIsFileInCacheState] Failed to get file from cache",
            ])),
        )
        .catching(r("getErrorSafe")(t));
    }
    function U(e) {
      var t = w(null),
        r = t[0],
        a = t[1],
        i = o("useWAWebModelValues").useOptionalModelValues(e.mediaData, [
          "filehash",
        ]),
        l = N(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (n("cr:7565") == null) {
              a(null);
              return;
            }
            if (i == null) {
              a(null);
              return;
            }
            if (i.filehash == null) {
              a(null);
              return;
            }
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[useIsFileSavedOnFileSystem] checking fs ",
                  " hash=",
                  "",
                ])),
              e.id.toString(),
              i.filehash,
            );
            try {
              var t = yield n("cr:7565").isMediaFileSaved(e);
              a(t);
            } catch (t) {
              (o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[useIsFileSavedOnFileSystem] fs check error ",
                    ": ",
                    "",
                  ])),
                e.id.toString(),
                t,
              ),
                a(null));
            }
          }),
          [i, e],
        );
      return (
        o("useWAWebListener").useListener(
          e.mediaData,
          "change:filehash",
          function () {
            l();
          },
        ),
        o("useWAWebListener").useListener(
          e.mediaData,
          "mediaFileSavedOnFileSystem",
          function () {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[useIsFileSavedOnFileSystem] file saved event ",
                  "",
                ])),
              e.id.toString(),
            ),
              a(!0));
          },
        ),
        o("useWAWebListener").useListener(
          e.mediaData,
          "mediaFileSavingFailed",
          function () {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[useIsFileSavedOnFileSystem] file saving failed event ",
                  "",
                ])),
              e.id.toString(),
            ),
              a(!1));
          },
        ),
        M(
          function () {
            l();
          },
          [l, e.id],
        ),
        r
      );
    }
    function V(e, t) {
      t === void 0 && (t = {});
      var a = W(e),
        i = U(e),
        l = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getIsVcardOverMmsDocument,
          o("WAWebMsgGetters").getIsFailed,
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        u = l[0],
        c = l[1],
        d = l[2],
        m = o("useWAWebModelValues").useModelValues(e.mediaData, [
          "mediaStage",
          "filename",
          "size",
          "filehash",
          "loadedSize",
          "mimetype",
        ]),
        x = o("WAWebFilenameManager").getDefaultName(e),
        P = o("WAWebFrontendMsgGetters").getChat(e),
        N = function (n) {
          (B(n),
            o("WAWebModalManager").ModalManager.open(
              $.jsx(r("WAWebMediaMissingModal.react"), { msg: e.unsafe() }),
            ));
        },
        M = function (n) {
          (B(n), e.cancelDownload());
        },
        w = function (n) {
          (B(n), e.cancelUpload());
        },
        q = function (n) {
          (B(n), e.resumeUpload());
        },
        V = function (n) {
          (B(n), e.resumeRemoteUpload());
        },
        H = (function () {
          var l = n("asyncToGeneratorRuntime").asyncToGenerator(function* (l) {
            if (
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMediaAsync] start ",
                    " stage=",
                    " size=",
                    "",
                  ])),
                e.id.toString(),
                m.mediaStage,
                m.size || "unknown",
              ),
              B(l),
              !o("WAWebModernizr").getModernizr().adownload)
            ) {
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMediaAsync] no adownload, Safari popup ",
                    "",
                  ])),
                e.id.toString(),
              ),
                o("WAWebModalManager").ModalManager.open(
                  $.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeModalManager,
                    okText: r("WAWebFbtCommon")("OK"),
                    children: $.jsx(
                      o("WAWebSafariLimited").SafariLimitedText,
                      {},
                    ),
                  }),
                ));
              return;
            }
            if (n("cr:7565") != null && i === !0)
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMediaAsync] file in fs ",
                    "",
                  ])),
                e.id.toString(),
              );
            else {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMediaAsync] downloading ",
                    " expensive=",
                    "",
                  ])),
                e.id.toString(),
                m.size <= A,
              );
              try {
                (o(
                  "WAWebTPPdfViewerGatingUtils",
                ).isWebTPPdfViewerEnabledForMimeType(m.mimetype) &&
                  (n("cr:11804") == null ||
                    n("cr:11804").maybePreloadWebTPIframeForPDFs(void 0, {
                      source: "pdfPreviewClick",
                      force: !0,
                    })),
                  yield e.downloadMedia({
                    downloadEvenIfExpensive: m.size <= A,
                    rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                      .WEBC_RMR_REASON_CODE.MSG_CLICK,
                    isUserInitiated: !0,
                  }),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] Media download completed for msg ",
                        "",
                      ])),
                    e.id.toString(),
                  ));
              } catch (t) {
                o("WALogger").ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[downloadMediaAsync] Failed to download media for msg ",
                      ": ",
                      "",
                    ])),
                  e.id.toString(),
                  t,
                );
              }
            }
            switch (
              (o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMediaAsync] Processing mediaStage ",
                    " for msg ",
                    "",
                  ])),
                m.mediaStage,
                e.id.toString(),
              ),
              m.mediaStage)
            ) {
              case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
              case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                if (u !== !0) {
                  var s = o("WAWebStateUtils").unproxy(e.unsafe());
                  if (t.forceDownload === !0) {
                    (o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "[downloadMediaAsync] Force download for msg ",
                          "",
                        ])),
                      e.id.toString(),
                    ),
                      F(s),
                      yield o("WAWebFileSaver").FileSaver.downloadAsync(s));
                    break;
                  }
                  var c = n("cr:7565") != null && (i === !0 || a === !0);
                  (o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] file check ",
                        " canOpen=",
                        "",
                      ])),
                    e.id.toString(),
                    c,
                  ),
                    n("cr:7565") && c === !0
                      ? (o("WALogger").LOG(
                          S ||
                            (S = babelHelpers.taggedTemplateLiteralLoose([
                              "[downloadMediaAsync] Opening existing file for msg ",
                              "",
                            ])),
                          e.id.toString(),
                        ),
                        O(s),
                        yield n("cr:7565").openMediaFile(s))
                      : n("cr:7565") && c === !1
                        ? (o("WALogger").LOG(
                            R ||
                              (R = babelHelpers.taggedTemplateLiteralLoose([
                                "[downloadMediaAsync] saving to Windows fs ",
                                "",
                              ])),
                            e.id.toString(),
                          ),
                          F(s),
                          yield n("cr:7565").saveMediaFile(s))
                        : n("cr:11804") &&
                            o(
                              "WAWebTPPdfViewerGatingUtils",
                            ).isWebTPPdfViewerEnabledForMimeType(m.mimetype)
                          ? o("WAWebCmd").Cmd.mediaViewerModal({
                              msg: o("WAWebStateUtils").unproxy(e.unsafe()),
                              getZoomNode: t.getZoomNode,
                              shouldShowAllMedia: !1,
                            })
                          : o(
                                "WAWebHtmlViewerGatingUtils",
                              ).isHtmlViewerEnabledForMimeType(m.mimetype, P.id)
                            ? o("WAWebCmd").Cmd.mediaViewerModal({
                                msg: o("WAWebStateUtils").unproxy(e.unsafe()),
                                getZoomNode: t.getZoomNode,
                                shouldShowAllMedia: !1,
                              })
                            : (o("WALogger").LOG(
                                L ||
                                  (L = babelHelpers.taggedTemplateLiteralLoose([
                                    "[downloadMediaAsync] Using FileSaver to download for msg ",
                                    "",
                                  ])),
                                e.id.toString(),
                              ),
                              F(s),
                              yield o("WAWebFileSaver").FileSaver.downloadAsync(
                                s,
                              )));
                }
                break;
              case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
              case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                (o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[downloadMediaAsync] Media missing, showing modal for msg ",
                      "",
                    ])),
                  e.id.toString(),
                ),
                  N());
                break;
              case o("WAWebMediaTypes").MediaDataStage.INIT:
                if (u !== !0 && n("cr:7565") != null && i === !0) {
                  var d = o("WAWebStateUtils").unproxy(e.unsafe());
                  (o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] Opening existing file for msg ",
                        "",
                      ])),
                    e.id.toString(),
                  ),
                    O(d),
                    yield n("cr:7565").openMediaFile(d));
                } else
                  o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] INIT state, awaiting download ",
                        "",
                      ])),
                    e.id.toString(),
                  );
                break;
              default:
            }
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "[downloadMediaAsync] Completed processing for msg ",
                  "",
                ])),
              e.id.toString(),
            );
          });
          return function (t) {
            return l.apply(this, arguments);
          };
        })(),
        G = function (n) {
          H(n).catch(function (t) {
            o("WALogger")
              .ERROR(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMedia] Failed to download media for msg ",
                    "",
                  ])),
                e.id.toString(),
              )
              .catching(r("getErrorSafe")(t));
          });
        },
        z = null,
        j = { onClick: r("WAWebNoop") },
        K =
          i === !0 ||
          m.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
          (m.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT &&
            a === !0),
        Q = function () {
          return t.forceDownload === !0
            ? s._(/*BTDS*/ 'Download "{name}"', [s._param("name", x)])
            : K && r("WAWebEnvironment").isWindows
              ? s._(/*BTDS*/ 'Open "{name}"', [s._param("name", x)])
              : o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPPdfViewerEnabledForMimeType(m.mimetype) ||
                  o(
                    "WAWebHtmlViewerGatingUtils",
                  ).isHtmlViewerEnabledForMimeType(m.mimetype, P.id)
                ? s._(/*BTDS*/ 'View "{name}"', [s._param("name", x)])
                : s._(/*BTDS*/ 'Download "{name}"', [s._param("name", x)]);
        };
      switch (m.mediaStage) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
        case o("WAWebMediaTypes").MediaDataStage.INIT:
          ((j.onClick = G),
            (j.title = Q()),
            (z =
              !K &&
              !r("WAWebEnvironment").isWindows &&
              !o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPPdfViewerEnabledForMimeType(m.mimetype) &&
              !o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(
                m.mimetype,
                P.id,
              )
                ? $.jsx(o("WAWebDocStateControls.react").Download, {
                    onClick: G,
                  })
                : null));
          break;
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.FETCHING: {
          var X =
            m.mediaStage === o("WAWebMediaTypes").MediaDataStage.FETCHING
              ? M
              : w;
          ((z = $.jsx(o("WAWebDocStateControls.react").Pending, {
            canCancel: !0,
            onClick: X,
            outgoingMsg: d,
            value:
              m.loadedSize != null && m.size != null && m.size > 0
                ? Math.ceil((m.loadedSize / m.size) * 100)
                : void 0,
          })),
            (j.onClick = X));
          break;
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          ((z = $.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (j.onClick = q));
          break;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          ((z = $.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (j.onClick = V));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          j.onClick = r("WAWebShowMediaNotReadableModal");
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          j.onClick = N;
          break;
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
          z = c
            ? null
            : $.jsx(o("WAWebDocStateControls.react").Pending, {
                outgoingMsg: d,
              });
          break;
        default:
          z = $.jsx(o("WAWebDocStateControls.react").Pending, {
            outgoingMsg: d,
          });
      }
      return [j, z];
    }
    ((l.displayDownloadingToast = F),
      (l.displayFileOpeningToast = O),
      (l.useIsFileInCacheState = W),
      (l.useIsFileSavedOnFileSystem = U),
      (l.useMediaAction = V));
  },
  226,
);
