__d(
  "WAWebMediaDocumentUtils",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDocStateControls.react",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFileSaver",
    "WAWebFilenameManager",
    "WAWebFrontendMsgGetters",
    "WAWebHarmfulFileSenderRelationshipResolver",
    "WAWebHarmfulFileWarningGate",
    "WAWebHarmfulFileWarningModal.react",
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
      $,
      P = $ || ($ = o("react")),
      N = $,
      M = N.useCallback,
      w = N.useEffect,
      A = N.useState,
      F = 100 * 1024 * 1024;
    function O(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e);
      o("WAWebToastManager").ToastManager.open(
        P.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ '"{name}" downloaded.', [s._param("name", t)]),
        }),
      );
    }
    function B(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e);
      o("WAWebToastManager").ToastManager.open(
        P.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ '"{name}" opening.', [s._param("name", t)]),
        }),
      );
    }
    function W(e) {
      e && (e.stopPropagation(), e.preventDefault());
    }
    function q(e) {
      var t = o("react-compiler-runtime").c(8),
        n = A(null),
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
                .catch(U);
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
        w(d, m),
        r
      );
    }
    function U(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[useIsFileInCacheState] Failed to get file from cache",
            ])),
        )
        .catching(r("getErrorSafe")(t));
    }
    function V(e) {
      var t = A(null),
        r = t[0],
        a = t[1],
        i = o("useWAWebModelValues").useOptionalModelValues(e.mediaData, [
          "filehash",
        ]),
        l = M(
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
        w(
          function () {
            l();
          },
          [l, e.id],
        ),
        r
      );
    }
    function H(e, t) {
      t === void 0 && (t = {});
      var a = q(e),
        i = V(e),
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
        $ = o("WAWebFilenameManager").getDefaultName(e),
        N = o("WAWebFrontendMsgGetters").getChat(e),
        M = function (n) {
          (W(n),
            o("WAWebModalManager").ModalManager.open(
              P.jsx(r("WAWebMediaMissingModal.react"), { msg: e.unsafe() }),
            ));
        },
        w = function (n) {
          (W(n), e.cancelDownload());
        },
        A = function (n) {
          (W(n), e.cancelUpload());
        },
        U = function (n) {
          (W(n), e.resumeUpload());
        },
        H = function (n) {
          (W(n), e.resumeRemoteUpload());
        },
        G = (function () {
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
              W(l),
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
                  P.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeModalManager,
                    okText: r("WAWebFbtCommon")("OK"),
                    children: P.jsx(
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
                m.size <= F,
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
                    downloadEvenIfExpensive: m.size <= F,
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
            if (
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
              o(
                "WAWebHarmfulFileWarningGate",
              ).shouldOpenHarmfulFileWarningModal(e))
            ) {
              var s = o(
                  "WAWebHarmfulFileSenderRelationshipResolver",
                ).resolveHarmfulFileSenderRelationship(e),
                c = yield new (x || (x = n("Promise")))(function (e) {
                  o("WAWebModalManager").ModalManager.open(
                    P.jsx(r("WAWebHarmfulFileWarningModal.react"), {
                      learnMoreUrl: o(
                        "WAWebHarmfulFileWarningGate",
                      ).getHarmfulFileLearnMoreUrl(),
                      onCancel: function () {
                        (o("WAWebModalManager").closeModalManager(), e(!1));
                      },
                      onOpen: function () {
                        (o("WAWebModalManager").closeModalManager(), e(!0));
                      },
                      senderRelationship: s,
                    }),
                  );
                });
              if (!c) return;
              o(
                "WAWebHarmfulFileWarningGate",
              ).markUserAcceptedHarmfulFileWarning(e);
            }
            switch (m.mediaStage) {
              case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
              case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                if (u !== !0) {
                  var d = o("WAWebStateUtils").unproxy(e.unsafe());
                  if (t.forceDownload === !0) {
                    (o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "[downloadMediaAsync] Force download for msg ",
                          "",
                        ])),
                      e.id.toString(),
                    ),
                      O(d),
                      yield o("WAWebFileSaver").FileSaver.downloadAsync(d));
                    break;
                  }
                  var D = n("cr:7565") != null && (i === !0 || a === !0);
                  (o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] file check ",
                        " canOpen=",
                        "",
                      ])),
                    e.id.toString(),
                    D,
                  ),
                    n("cr:7565") && D === !0
                      ? (o("WALogger").LOG(
                          S ||
                            (S = babelHelpers.taggedTemplateLiteralLoose([
                              "[downloadMediaAsync] Opening existing file for msg ",
                              "",
                            ])),
                          e.id.toString(),
                        ),
                        B(d),
                        yield n("cr:7565").openMediaFile(d))
                      : n("cr:7565") && D === !1
                        ? (o("WALogger").LOG(
                            R ||
                              (R = babelHelpers.taggedTemplateLiteralLoose([
                                "[downloadMediaAsync] saving to Windows fs ",
                                "",
                              ])),
                            e.id.toString(),
                          ),
                          O(d),
                          yield n("cr:7565").saveMediaFile(d))
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
                              ).isHtmlViewerEnabledForMimeType(m.mimetype, N.id)
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
                              O(d),
                              yield o("WAWebFileSaver").FileSaver.downloadAsync(
                                d,
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
                  M());
                break;
              case o("WAWebMediaTypes").MediaDataStage.INIT:
                if (u !== !0 && n("cr:7565") != null && i === !0) {
                  var $ = o("WAWebStateUtils").unproxy(e.unsafe());
                  (o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] Opening existing file for msg ",
                        "",
                      ])),
                    e.id.toString(),
                  ),
                    B($),
                    yield n("cr:7565").openMediaFile($));
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
        z = function (n) {
          G(n).catch(function (t) {
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
        j = null,
        K = { onClick: r("WAWebNoop") },
        Q =
          i === !0 ||
          m.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
          (m.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT &&
            a === !0),
        X = function () {
          return t.forceDownload === !0
            ? s._(/*BTDS*/ 'Download "{name}"', [s._param("name", $)])
            : Q && r("WAWebEnvironment").isWindows
              ? s._(/*BTDS*/ 'Open "{name}"', [s._param("name", $)])
              : o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPPdfViewerEnabledForMimeType(m.mimetype) ||
                  o(
                    "WAWebHtmlViewerGatingUtils",
                  ).isHtmlViewerEnabledForMimeType(m.mimetype, N.id)
                ? s._(/*BTDS*/ 'View "{name}"', [s._param("name", $)])
                : s._(/*BTDS*/ 'Download "{name}"', [s._param("name", $)]);
        };
      switch (m.mediaStage) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
        case o("WAWebMediaTypes").MediaDataStage.INIT:
          ((K.onClick = z),
            (K.title = X()),
            (j =
              !Q &&
              !r("WAWebEnvironment").isWindows &&
              !o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPPdfViewerEnabledForMimeType(m.mimetype) &&
              !o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(
                m.mimetype,
                N.id,
              )
                ? P.jsx(o("WAWebDocStateControls.react").Download, {
                    onClick: z,
                  })
                : null));
          break;
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.FETCHING: {
          var Y =
            m.mediaStage === o("WAWebMediaTypes").MediaDataStage.FETCHING
              ? w
              : A;
          ((j = P.jsx(o("WAWebDocStateControls.react").Pending, {
            canCancel: !0,
            onClick: Y,
            outgoingMsg: d,
            value:
              m.loadedSize != null && m.size != null && m.size > 0
                ? Math.ceil((m.loadedSize / m.size) * 100)
                : void 0,
          })),
            (K.onClick = Y));
          break;
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          ((j = P.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (K.onClick = U));
          break;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          ((j = P.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (K.onClick = H));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          K.onClick = r("WAWebShowMediaNotReadableModal");
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          K.onClick = M;
          break;
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
          j = c
            ? null
            : P.jsx(o("WAWebDocStateControls.react").Pending, {
                outgoingMsg: d,
              });
          break;
        default:
          j = P.jsx(o("WAWebDocStateControls.react").Pending, {
            outgoingMsg: d,
          });
      }
      return [K, j];
    }
    ((l.displayDownloadingToast = O),
      (l.displayFileOpeningToast = B),
      (l.useIsFileInCacheState = q),
      (l.useIsFileSavedOnFileSystem = V),
      (l.useMediaAction = H));
  },
  226,
);
