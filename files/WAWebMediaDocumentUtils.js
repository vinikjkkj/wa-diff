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
      P = $ || ($ = o("react")),
      N = $,
      M = N.useCallback,
      w = N.useEffect,
      A = N.useState,
      F = 100 * 1024 * 1024,
      O = 100;
    function B(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e);
      o("WAWebToastManager").ToastManager.open(
        P.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ '"{name}" downloaded.', [s._param("name", t)]),
        }),
      );
    }
    function W(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e);
      o("WAWebToastManager").ToastManager.open(
        P.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ '"{name}" opening.', [s._param("name", t)]),
        }),
      );
    }
    function q(e) {
      e && (e.stopPropagation(), e.preventDefault());
    }
    function U(e) {
      var t,
        n = o("react-compiler-runtime").c(9),
        r = A(!1),
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
                .catch(V);
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
        w(p, _),
        a
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
      var t = A(null),
        r = t[0],
        a = t[1],
        i = o("useWAWebModelValues").useOptionalModelValues(e.mediaData, [
          "filehash",
        ]),
        l = M(
          async function () {
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
              var t = await n("cr:7565").isMediaFileSaved(e);
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
          },
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
    function G(e, t) {
      t === void 0 && (t = {});
      var a = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_loader_button_uix_improvement",
        ),
        i = U(e),
        l = H(e),
        u = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getIsVcardOverMmsDocument,
          o("WAWebMsgGetters").getIsFailed,
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        c = u[0],
        d = u[1],
        m = u[2],
        $ = o("useWAWebModelValues").useModelValues(e.mediaData, [
          "mediaStage",
          "filename",
          "size",
          "filehash",
          "loadedSize",
          "mimetype",
        ]),
        N = o("WAWebFilenameManager").getDefaultName(e),
        M = o("WAWebFrontendMsgGetters").getChat(e),
        w = function (n) {
          (q(n),
            o("WAWebModalManager").ModalManager.open(
              P.jsx(r("WAWebMediaMissingModal.react"), { msg: e.unsafe() }),
            ));
        },
        A = function (n) {
          (q(n), e.cancelDownload());
        },
        V = function (n) {
          (q(n), e.cancelUpload());
        },
        G = function (n) {
          (q(n), e.resumeUpload());
        },
        z = function (n) {
          (q(n), e.resumeRemoteUpload());
        },
        j = async function (s) {
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
              $.mediaStage,
              $.size || "unknown",
            ),
            q(s),
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
          if (n("cr:7565") != null && l === !0)
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
              $.size <= F,
            );
            try {
              (o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPPdfViewerEnabledForMimeType($.mimetype) &&
                (n("cr:11804") == null ||
                  n("cr:11804").maybePreloadWebTPIframeForPDFs(void 0, {
                    source: "pdfPreviewClick",
                    force: !0,
                  })),
                await e.downloadMedia({
                  downloadEvenIfExpensive: $.size <= F,
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
              $.mediaStage,
              e.id.toString(),
            ),
            o("WAWebHarmfulFileWarningGate").shouldOpenHarmfulFileWarningModal(
              e,
            ))
          ) {
            var a = o(
                "WAWebHarmfulFileSenderRelationshipResolver",
              ).resolveHarmfulFileSenderRelationship(e),
              u = await new Promise(function (e) {
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
                    senderRelationship: a,
                  }),
                );
              });
            if (!u) return;
            o("WAWebHarmfulFileWarningGate").markUserAcceptedHarmfulFileWarning(
              e,
            );
          }
          if (
            o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(
              $.mimetype,
            )
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
          switch ($.mediaStage) {
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
              if (c !== !0) {
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
                    await o("WAWebFileSaver").FileSaver.downloadAsync(d));
                  break;
                }
                var m = n("cr:7565") != null && (l === !0 || i === !0);
                (o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[downloadMediaAsync] file check ",
                      " canOpen=",
                      "",
                    ])),
                  e.id.toString(),
                  m,
                ),
                  n("cr:7565") && m === !0
                    ? (o("WALogger").LOG(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[downloadMediaAsync] Opening existing file for msg ",
                            "",
                          ])),
                        e.id.toString(),
                      ),
                      W(d),
                      await n("cr:7565").openMediaFile(d))
                    : n("cr:7565") && m === !1
                      ? (o("WALogger").LOG(
                          L ||
                            (L = babelHelpers.taggedTemplateLiteralLoose([
                              "[downloadMediaAsync] saving to Windows fs ",
                              "",
                            ])),
                          e.id.toString(),
                        ),
                        B(d),
                        await n("cr:7565").saveMediaFile(d))
                      : o(
                            "WAWebHtmlViewerGatingUtils",
                          ).isHtmlViewerEnabledForMimeType($.mimetype, M.id)
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
                          await o("WAWebFileSaver").FileSaver.downloadAsync(
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
              if (c !== !0 && n("cr:7565") != null && l === !0) {
                var x = o("WAWebStateUtils").unproxy(e.unsafe());
                (o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "[downloadMediaAsync] Opening existing file for msg ",
                      "",
                    ])),
                  e.id.toString(),
                ),
                  W(x),
                  await n("cr:7565").openMediaFile(x));
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
        },
        K = function (n) {
          j(n).catch(function (t) {
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
        Q = null,
        X = { onClick: r("WAWebNoop") },
        Y =
          l === !0 ||
          $.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
          ($.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT &&
            (a ? i !== !1 : i === !0)),
        J = function () {
          return t.forceDownload === !0
            ? s._(/*BTDS*/ 'Download "{name}"', [s._param("name", N)])
            : Y && r("WAWebEnvironment").isWindows
              ? s._(/*BTDS*/ 'Open "{name}"', [s._param("name", N)])
              : o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPPdfViewerEnabledForMimeType($.mimetype) ||
                  o(
                    "WAWebHtmlViewerGatingUtils",
                  ).isHtmlViewerEnabledForMimeType($.mimetype, M.id)
                ? s._(/*BTDS*/ 'View "{name}"', [s._param("name", N)])
                : s._(/*BTDS*/ 'Download "{name}"', [s._param("name", N)]);
        };
      switch ($.mediaStage) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
        case o("WAWebMediaTypes").MediaDataStage.INIT:
          ((X.onClick = K),
            (X.title = J()),
            (Q =
              !Y &&
              !r("WAWebEnvironment").isWindows &&
              !o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPPdfViewerEnabledForMimeType($.mimetype) &&
              !o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(
                $.mimetype,
                M.id,
              )
                ? P.jsx(o("WAWebDocStateControls.react").Download, {
                    onClick: K,
                  })
                : null));
          break;
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
          Q = a
            ? P.jsx(o("WAWebDocStateControls.react").Pending, {
                canCancel: !1,
                outgoingMsg: m,
                value: O,
              })
            : P.jsx(o("WAWebDocStateControls.react").Pending, {
                outgoingMsg: m,
              });
          break;
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.FETCHING: {
          var Z =
            $.mediaStage === o("WAWebMediaTypes").MediaDataStage.FETCHING
              ? A
              : V;
          ((Q = P.jsx(o("WAWebDocStateControls.react").Pending, {
            canCancel: !0,
            onClick: Z,
            outgoingMsg: m,
            value:
              $.loadedSize != null && $.size != null && $.size > 0
                ? Math.ceil(($.loadedSize / $.size) * 100)
                : void 0,
          })),
            (X.onClick = Z));
          break;
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          ((Q = P.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (X.onClick = G));
          break;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          ((Q = P.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (X.onClick = z));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          X.onClick = r("WAWebShowMediaNotReadableModal");
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          X.onClick = w;
          break;
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
          Q = d
            ? null
            : P.jsx(o("WAWebDocStateControls.react").Pending, {
                outgoingMsg: m,
              });
          break;
        default:
          Q = P.jsx(o("WAWebDocStateControls.react").Pending, {
            outgoingMsg: m,
          });
      }
      return [X, Q];
    }
    ((l.displayDownloadingToast = B),
      (l.displayFileOpeningToast = W),
      (l.useIsFileInCacheState = U),
      (l.useIsFileSavedOnFileSystem = H),
      (l.useMediaAction = G));
  },
  226,
);
