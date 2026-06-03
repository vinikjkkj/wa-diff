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
      P,
      N = P || (P = o("react")),
      M = P,
      w = M.useCallback,
      A = M.useEffect,
      F = M.useState,
      O = 100 * 1024 * 1024;
    function B(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e);
      o("WAWebToastManager").ToastManager.open(
        N.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ '"{name}" downloaded.', [s._param("name", t)]),
        }),
      );
    }
    function W(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e);
      o("WAWebToastManager").ToastManager.open(
        N.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ '"{name}" opening.', [s._param("name", t)]),
        }),
      );
    }
    function q(e) {
      e && (e.stopPropagation(), e.preventDefault());
    }
    function U(e) {
      var t = o("react-compiler-runtime").c(8),
        n = F(null),
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
                .catch(V);
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
        A(d, m),
        r
      );
    }
    function V(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[useIsFileInCacheState] Failed to get file from cache",
            ])),
        )
        .catching(r("getErrorSafe")(t));
    }
    function H(e) {
      var t = F(null),
        r = t[0],
        a = t[1],
        i = o("useWAWebModelValues").useOptionalModelValues(e.mediaData, [
          "filehash",
        ]),
        l = w(
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
        A(
          function () {
            l();
          },
          [l, e.id],
        ),
        r
      );
    }
    function G(e, t) {
      t === void 0 && (t = {});
      var a = U(e),
        i = H(e),
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
        P = o("WAWebFilenameManager").getDefaultName(e),
        M = o("WAWebFrontendMsgGetters").getChat(e),
        w = function (n) {
          (q(n),
            o("WAWebModalManager").ModalManager.open(
              N.jsx(r("WAWebMediaMissingModal.react"), { msg: e.unsafe() }),
            ));
        },
        A = function (n) {
          (q(n), e.cancelDownload());
        },
        F = function (n) {
          (q(n), e.cancelUpload());
        },
        V = function (n) {
          (q(n), e.resumeUpload());
        },
        G = function (n) {
          (q(n), e.resumeRemoteUpload());
        },
        z = (function () {
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
              q(l),
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
                  N.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeModalManager,
                    okText: r("WAWebFbtCommon")("OK"),
                    children: N.jsx(
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
                m.size <= O,
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
                    downloadEvenIfExpensive: m.size <= O,
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
                c = yield new ($ || ($ = n("Promise")))(function (e) {
                  o("WAWebModalManager").ModalManager.open(
                    N.jsx(r("WAWebHarmfulFileWarningModal.react"), {
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
            if (
              o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPPdfViewerEnabledForMimeType(m.mimetype)
            ) {
              (o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMediaAsync] opening WebTP PDF viewer ",
                    "",
                  ])),
                e.id.toString(),
              ),
                o("WAWebCmd").Cmd.mediaViewerModal({
                  msg: o("WAWebStateUtils").unproxy(e.unsafe()),
                  getZoomNode: t.getZoomNode,
                  shouldShowAllMedia: !1,
                }));
              return;
            }
            switch (m.mediaStage) {
              case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
              case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                if (u !== !0) {
                  var d = o("WAWebStateUtils").unproxy(e.unsafe());
                  if (t.forceDownload === !0) {
                    (o("WALogger").LOG(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "[downloadMediaAsync] Force download for msg ",
                          "",
                        ])),
                      e.id.toString(),
                    ),
                      B(d),
                      yield o("WAWebFileSaver").FileSaver.downloadAsync(d));
                    break;
                  }
                  var x = n("cr:7565") != null && (i === !0 || a === !0);
                  (o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] file check ",
                        " canOpen=",
                        "",
                      ])),
                    e.id.toString(),
                    x,
                  ),
                    n("cr:7565") && x === !0
                      ? (o("WALogger").LOG(
                          R ||
                            (R = babelHelpers.taggedTemplateLiteralLoose([
                              "[downloadMediaAsync] Opening existing file for msg ",
                              "",
                            ])),
                          e.id.toString(),
                        ),
                        W(d),
                        yield n("cr:7565").openMediaFile(d))
                      : n("cr:7565") && x === !1
                        ? (o("WALogger").LOG(
                            L ||
                              (L = babelHelpers.taggedTemplateLiteralLoose([
                                "[downloadMediaAsync] saving to Windows fs ",
                                "",
                              ])),
                            e.id.toString(),
                          ),
                          B(d),
                          yield n("cr:7565").saveMediaFile(d))
                        : o(
                              "WAWebHtmlViewerGatingUtils",
                            ).isHtmlViewerEnabledForMimeType(m.mimetype, M.id)
                          ? o("WAWebCmd").Cmd.mediaViewerModal({
                              msg: o("WAWebStateUtils").unproxy(e.unsafe()),
                              getZoomNode: t.getZoomNode,
                              shouldShowAllMedia: !1,
                            })
                          : (o("WALogger").LOG(
                              E ||
                                (E = babelHelpers.taggedTemplateLiteralLoose([
                                  "[downloadMediaAsync] Using FileSaver to download for msg ",
                                  "",
                                ])),
                              e.id.toString(),
                            ),
                            B(d),
                            yield o("WAWebFileSaver").FileSaver.downloadAsync(
                              d,
                            )));
                }
                break;
              case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
              case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                (o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "[downloadMediaAsync] Media missing, showing modal for msg ",
                      "",
                    ])),
                  e.id.toString(),
                ),
                  w());
                break;
              case o("WAWebMediaTypes").MediaDataStage.INIT:
                if (u !== !0 && n("cr:7565") != null && i === !0) {
                  var P = o("WAWebStateUtils").unproxy(e.unsafe());
                  (o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] Opening existing file for msg ",
                        "",
                      ])),
                    e.id.toString(),
                  ),
                    W(P),
                    yield n("cr:7565").openMediaFile(P));
                } else
                  o("WALogger").LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] INIT state, awaiting download ",
                        "",
                      ])),
                    e.id.toString(),
                  );
                break;
              default:
            }
            o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
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
        j = function (n) {
          z(n).catch(function (t) {
            o("WALogger")
              .ERROR(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMedia] Failed to download media for msg ",
                    "",
                  ])),
                e.id.toString(),
              )
              .catching(r("getErrorSafe")(t));
          });
        },
        K = null,
        Q = { onClick: r("WAWebNoop") },
        X =
          i === !0 ||
          m.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
          (m.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT &&
            a === !0),
        Y = function () {
          return t.forceDownload === !0
            ? s._(/*BTDS*/ 'Download "{name}"', [s._param("name", P)])
            : X && r("WAWebEnvironment").isWindows
              ? s._(/*BTDS*/ 'Open "{name}"', [s._param("name", P)])
              : o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPPdfViewerEnabledForMimeType(m.mimetype) ||
                  o(
                    "WAWebHtmlViewerGatingUtils",
                  ).isHtmlViewerEnabledForMimeType(m.mimetype, M.id)
                ? s._(/*BTDS*/ 'View "{name}"', [s._param("name", P)])
                : s._(/*BTDS*/ 'Download "{name}"', [s._param("name", P)]);
        };
      switch (m.mediaStage) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
        case o("WAWebMediaTypes").MediaDataStage.INIT:
          ((Q.onClick = j),
            (Q.title = Y()),
            (K =
              !X &&
              !r("WAWebEnvironment").isWindows &&
              !o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPPdfViewerEnabledForMimeType(m.mimetype) &&
              !o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(
                m.mimetype,
                M.id,
              )
                ? N.jsx(o("WAWebDocStateControls.react").Download, {
                    onClick: j,
                  })
                : null));
          break;
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.FETCHING: {
          var J =
            m.mediaStage === o("WAWebMediaTypes").MediaDataStage.FETCHING
              ? A
              : F;
          ((K = N.jsx(o("WAWebDocStateControls.react").Pending, {
            canCancel: !0,
            onClick: J,
            outgoingMsg: d,
            value:
              m.loadedSize != null && m.size != null && m.size > 0
                ? Math.ceil((m.loadedSize / m.size) * 100)
                : void 0,
          })),
            (Q.onClick = J));
          break;
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          ((K = N.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (Q.onClick = V));
          break;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          ((K = N.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (Q.onClick = G));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          Q.onClick = r("WAWebShowMediaNotReadableModal");
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          Q.onClick = w;
          break;
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
          K = c
            ? null
            : N.jsx(o("WAWebDocStateControls.react").Pending, {
                outgoingMsg: d,
              });
          break;
        default:
          K = N.jsx(o("WAWebDocStateControls.react").Pending, {
            outgoingMsg: d,
          });
      }
      return [Q, K];
    }
    ((l.displayDownloadingToast = B),
      (l.displayFileOpeningToast = W),
      (l.useIsFileInCacheState = U),
      (l.useIsFileSavedOnFileSystem = H),
      (l.useMediaAction = G));
  },
  226,
);
