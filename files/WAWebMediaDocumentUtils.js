__d(
  "WAWebMediaDocumentUtils",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebCmd",
    "WAWebDocStateControls.react",
    "WAWebEnvironment",
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
    "WAWebMsgGetters",
    "WAWebNoop",
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
    "useWAWebABPropConfigValue",
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
      N,
      M = N || (N = o("react")),
      w = N,
      A = w.useCallback,
      F = w.useEffect,
      O = w.useState,
      B = 100 * 1024 * 1024,
      W = 100;
    function q(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e);
      o("WAWebToastManager").ToastManager.open(
        M.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ '"{name}" downloaded.', [s._param("name", t)]),
        }),
      );
    }
    function U(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e);
      o("WAWebToastManager").ToastManager.open(
        M.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ '"{name}" opening.', [s._param("name", t)]),
        }),
      );
    }
    function V(e) {
      e && (e.stopPropagation(), e.preventDefault());
    }
    function H(e) {
      var t,
        n = o("react-compiler-runtime").c(9),
        r = O(!1),
        a = r[0],
        i = r[1],
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["mediaStage", "filehash"]), (n[0] = l))
        : (l = n[0]);
      var s = o("useWAWebModelValues").useOptionalModelValues(e.mediaData, l),
        u;
      n[1] !== s
        ? ((u = function () {
            s == null ||
              s.filehash == null ||
              s.mediaStage !== o("WAWebMediaTypes").MediaDataStage.INIT ||
              o("WAWebMediaStore")
                .LruMediaStore.has(s.filehash)
                .then(function (e) {
                  return i(e);
                })
                .catch(G);
          }),
          (n[1] = s),
          (n[2] = u))
        : (u = n[2]);
      var c = u,
        d;
      if (
        n[3] !== c ||
        n[4] !== ((t = e.mediaData) == null ? void 0 : t.mediaStage)
      ) {
        var m;
        ((d = function () {
          var t;
          (((t = e.mediaData) == null ? void 0 : t.mediaStage) ===
            o("WAWebMediaTypes").MediaDataStage.INIT && i(null),
            c());
        }),
          (n[3] = c),
          (n[4] = (m = e.mediaData) == null ? void 0 : m.mediaStage),
          (n[5] = d));
      } else d = n[5];
      o("useWAWebListener").useListener(
        e.mediaData,
        "change:filehash change:mediaStage",
        d,
      );
      var p, _;
      return (
        n[6] !== c
          ? ((p = function () {
              c();
            }),
            (_ = [c]),
            (n[6] = c),
            (n[7] = p),
            (n[8] = _))
          : ((p = n[7]), (_ = n[8])),
        F(p, _),
        a
      );
    }
    function G(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[useIsFileInCacheState] Failed to get file from cache",
            ])),
        )
        .catching(r("getErrorSafe")(t));
    }
    function z(e) {
      var t = O(null),
        r = t[0],
        a = t[1],
        i = o("useWAWebModelValues").useOptionalModelValues(e.mediaData, [
          "filehash",
        ]),
        l = A(
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
        F(
          function () {
            l();
          },
          [l, e.id],
        ),
        r
      );
    }
    function j(e, t) {
      t === void 0 && (t = {});
      var a = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_loader_button_uix_improvement",
        ),
        i = H(e),
        l = z(e),
        u = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getIsVcardOverMmsDocument,
          o("WAWebMsgGetters").getIsFailed,
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        c = u[0],
        d = u[1],
        m = u[2],
        N = o("useWAWebModelValues").useModelValues(e.mediaData, [
          "mediaStage",
          "filename",
          "size",
          "filehash",
          "loadedSize",
          "mimetype",
        ]),
        w = o("WAWebFilenameManager").getDefaultName(e),
        A = o("WAWebFrontendMsgGetters").getChat(e),
        F = function (n) {
          (V(n),
            o("WAWebModalManager").ModalManager.open(
              M.jsx(r("WAWebMediaMissingModal.react"), { msg: e.unsafe() }),
            ));
        },
        O = function (n) {
          (V(n), e.cancelDownload());
        },
        G = function (n) {
          (V(n), e.cancelUpload());
        },
        j = function (n) {
          (V(n),
            e.resumeUpload().catch(function (e) {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to resume document upload",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("document-resume-upload-failed");
            }));
        },
        K = function (n) {
          (V(n),
            e.resumeRemoteUpload().catch(function (e) {
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to resume remote document upload",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("document-resume-remote-upload-failed");
            }));
        },
        Q = (function () {
          var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            if (
              (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMediaAsync] start ",
                    " stage=",
                    " size=",
                    "",
                  ])),
                e.id.toString(),
                N.mediaStage,
                N.size || "unknown",
              ),
              V(a),
              n("cr:7565") != null && l === !0)
            )
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMediaAsync] file in fs ",
                    "",
                  ])),
                e.id.toString(),
              );
            else {
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMediaAsync] downloading ",
                    " expensive=",
                    "",
                  ])),
                e.id.toString(),
                N.size <= B,
              );
              try {
                (o(
                  "WAWebTPPdfViewerGatingUtils",
                ).isWebTPPdfViewerEnabledForMimeType(N.mimetype) &&
                  (n("cr:11804") == null ||
                    n("cr:11804").maybePreloadWebTPIframeForPDFs(void 0, {
                      source: "pdfPreviewClick",
                      force: !0,
                    })),
                  yield e.downloadMedia({
                    downloadEvenIfExpensive: N.size <= B,
                    rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                      .WEBC_RMR_REASON_CODE.MSG_CLICK,
                    isUserInitiated: !0,
                  }),
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] Media download completed for msg ",
                        "",
                      ])),
                    e.id.toString(),
                  ));
              } catch (t) {
                o("WALogger").ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
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
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMediaAsync] Processing mediaStage ",
                    " for msg ",
                    "",
                  ])),
                N.mediaStage,
                e.id.toString(),
              ),
              o(
                "WAWebHarmfulFileWarningGate",
              ).shouldOpenHarmfulFileWarningModal(e))
            ) {
              var s = o(
                  "WAWebHarmfulFileSenderRelationshipResolver",
                ).resolveHarmfulFileSenderRelationship(e),
                u = yield new (P || (P = n("Promise")))(function (e) {
                  o("WAWebModalManager").ModalManager.open(
                    M.jsx(r("WAWebHarmfulFileWarningModal.react"), {
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
              if (!u) return;
              o(
                "WAWebHarmfulFileWarningGate",
              ).markUserAcceptedHarmfulFileWarning(e);
            }
            if (
              o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPPdfViewerEnabledForMimeType(N.mimetype)
            ) {
              (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
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
            switch (N.mediaStage) {
              case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
              case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                if (c !== !0) {
                  var d = o("WAWebStateUtils").unproxy(e.unsafe());
                  if (t.forceDownload === !0) {
                    (o("WALogger").LOG(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "[downloadMediaAsync] Force download for msg ",
                          "",
                        ])),
                      e.id.toString(),
                    ),
                      q(d),
                      yield o("WAWebFileSaver").FileSaver.downloadAsync(d));
                    break;
                  }
                  var m = n("cr:7565") != null && (l === !0 || i === !0);
                  (o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] file check ",
                        " canOpen=",
                        "",
                      ])),
                    e.id.toString(),
                    m,
                  ),
                    n("cr:7565") && m === !0
                      ? (o("WALogger").LOG(
                          L ||
                            (L = babelHelpers.taggedTemplateLiteralLoose([
                              "[downloadMediaAsync] Opening existing file for msg ",
                              "",
                            ])),
                          e.id.toString(),
                        ),
                        U(d),
                        yield n("cr:7565").openMediaFile(d))
                      : n("cr:7565") && m === !1
                        ? (o("WALogger").LOG(
                            E ||
                              (E = babelHelpers.taggedTemplateLiteralLoose([
                                "[downloadMediaAsync] saving to Windows fs ",
                                "",
                              ])),
                            e.id.toString(),
                          ),
                          q(d),
                          yield n("cr:7565").saveMediaFile(d))
                        : o(
                              "WAWebHtmlViewerGatingUtils",
                            ).isHtmlViewerEnabledForMimeType(N.mimetype, A.id)
                          ? o("WAWebCmd").Cmd.mediaViewerModal({
                              msg: o("WAWebStateUtils").unproxy(e.unsafe()),
                              getZoomNode: t.getZoomNode,
                              shouldShowAllMedia: !1,
                            })
                          : (o("WALogger").LOG(
                              k ||
                                (k = babelHelpers.taggedTemplateLiteralLoose([
                                  "[downloadMediaAsync] Using FileSaver to download for msg ",
                                  "",
                                ])),
                              e.id.toString(),
                            ),
                            q(d),
                            yield o("WAWebFileSaver").FileSaver.downloadAsync(
                              d,
                            )));
                }
                break;
              case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
              case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                (o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "[downloadMediaAsync] Media missing, showing modal for msg ",
                      "",
                    ])),
                  e.id.toString(),
                ),
                  F());
                break;
              case o("WAWebMediaTypes").MediaDataStage.INIT:
                if (c !== !0 && n("cr:7565") != null && l === !0) {
                  var p = o("WAWebStateUtils").unproxy(e.unsafe());
                  (o("WALogger").LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] Opening existing file for msg ",
                        "",
                      ])),
                    e.id.toString(),
                  ),
                    U(p),
                    yield n("cr:7565").openMediaFile(p));
                } else
                  o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] INIT state, awaiting download ",
                        "",
                      ])),
                    e.id.toString(),
                  );
                break;
              default:
            }
            o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "[downloadMediaAsync] Completed processing for msg ",
                  "",
                ])),
              e.id.toString(),
            );
          });
          return function (t) {
            return a.apply(this, arguments);
          };
        })(),
        X = function (n) {
          Q(n).catch(function (t) {
            o("WALogger")
              .ERROR(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMedia] Failed to download media for msg ",
                    "",
                  ])),
                e.id.toString(),
              )
              .catching(r("getErrorSafe")(t));
          });
        },
        Y = null,
        J = { onClick: r("WAWebNoop") },
        Z =
          l === !0 ||
          N.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
          (N.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT &&
            (a ? i !== !1 : i === !0)),
        ee = function () {
          return t.forceDownload === !0
            ? s._(/*BTDS*/ 'Download "{name}"', [s._param("name", w)])
            : Z && r("WAWebEnvironment").isWindows
              ? s._(/*BTDS*/ 'Open "{name}"', [s._param("name", w)])
              : o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPPdfViewerEnabledForMimeType(N.mimetype) ||
                  o(
                    "WAWebHtmlViewerGatingUtils",
                  ).isHtmlViewerEnabledForMimeType(N.mimetype, A.id)
                ? s._(/*BTDS*/ 'View "{name}"', [s._param("name", w)])
                : s._(/*BTDS*/ 'Download "{name}"', [s._param("name", w)]);
        };
      switch (N.mediaStage) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
        case o("WAWebMediaTypes").MediaDataStage.INIT:
          ((J.onClick = X),
            (J.title = ee()),
            (Y =
              !Z &&
              !r("WAWebEnvironment").isWindows &&
              !o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPPdfViewerEnabledForMimeType(N.mimetype) &&
              !o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(
                N.mimetype,
                A.id,
              )
                ? M.jsx(o("WAWebDocStateControls.react").Download, {
                    onClick: X,
                  })
                : null));
          break;
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
          Y = a
            ? M.jsx(o("WAWebDocStateControls.react").Pending, {
                canCancel: !1,
                outgoingMsg: m,
                value: W,
              })
            : M.jsx(o("WAWebDocStateControls.react").Pending, {
                outgoingMsg: m,
              });
          break;
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.FETCHING: {
          var te =
            N.mediaStage === o("WAWebMediaTypes").MediaDataStage.FETCHING
              ? O
              : G;
          ((Y = M.jsx(o("WAWebDocStateControls.react").Pending, {
            canCancel: !0,
            onClick: te,
            outgoingMsg: m,
            value:
              N.loadedSize != null && N.size != null && N.size > 0
                ? Math.ceil((N.loadedSize / N.size) * 100)
                : void 0,
          })),
            (J.onClick = te));
          break;
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          ((Y = M.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (J.onClick = j));
          break;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          ((Y = M.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (J.onClick = K));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          J.onClick = r("WAWebShowMediaNotReadableModal");
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          J.onClick = F;
          break;
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
          Y = d
            ? null
            : M.jsx(o("WAWebDocStateControls.react").Pending, {
                outgoingMsg: m,
              });
          break;
        default:
          Y = M.jsx(o("WAWebDocStateControls.react").Pending, {
            outgoingMsg: m,
          });
      }
      return [J, Y];
    }
    ((l.displayDownloadingToast = q),
      (l.displayFileOpeningToast = U),
      (l.useIsFileInCacheState = H),
      (l.useIsFileSavedOnFileSystem = z),
      (l.useMediaAction = j));
  },
  226,
);
