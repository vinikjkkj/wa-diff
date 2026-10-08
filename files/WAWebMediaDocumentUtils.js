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
    "WAWebMediaDataGetters",
    "WAWebMediaMissingModal.react",
    "WAWebMediaStore",
    "WAWebMediaTypes",
    "WAWebModalManager",
    "WAWebMsgCollection",
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
    "useWAWebMediaDataValues",
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
        n = o("react-compiler-runtime").c(10),
        r = O(!1),
        a = r[0],
        i = r[1],
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebFrontendMsgGetters").getMediaData]), (n[0] = l))
        : (l = n[0]);
      var s = o("useWAWebMsgValues").useMsgValues(e, l),
        u = s[0],
        c =
          (t = o("useWAWebMediaDataValues").useOptionalMediaDataValues(u, [
            o("WAWebMediaDataGetters").getMediaStage,
            o("WAWebMediaDataGetters").getFilehash,
          ])) != null
            ? t
            : [null, null],
        d = c[0],
        m = c[1],
        p;
      n[1] !== m || n[2] !== d
        ? ((p = function () {
            m == null ||
              d !== o("WAWebMediaTypes").MediaDataStage.INIT ||
              o("WAWebMediaStore")
                .LruMediaStore.has(m)
                .then(function (e) {
                  return i(e);
                })
                .catch(G);
          }),
          (n[1] = m),
          (n[2] = d),
          (n[3] = p))
        : (p = n[3]);
      var _ = p,
        f;
      (n[4] !== _ || n[5] !== (u == null ? void 0 : u.mediaStage)
        ? ((f = function () {
            ((u == null ? void 0 : u.mediaStage) ===
              o("WAWebMediaTypes").MediaDataStage.INIT && i(null),
              _());
          }),
          (n[4] = _),
          (n[5] = u == null ? void 0 : u.mediaStage),
          (n[6] = f))
        : (f = n[6]),
        o("useWAWebListener").useListener(
          u,
          "change:filehash change:mediaStage",
          f,
        ));
      var g, h;
      return (
        n[7] !== _
          ? ((g = function () {
              _();
            }),
            (h = [_]),
            (n[7] = _),
            (n[8] = g),
            (n[9] = h))
          : ((g = n[8]), (h = n[9])),
        F(g, h),
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
      var t,
        r = O(null),
        a = r[0],
        i = r[1],
        l = o("useWAWebMsgValues").useMsgValues(e, [
          o("WAWebFrontendMsgGetters").getMediaData,
        ]),
        s = l[0],
        p =
          (t = o("useWAWebMediaDataValues").useOptionalMediaDataValues(s, [
            o("WAWebMediaDataGetters").getFilehash,
          ])) != null
            ? t
            : [null],
        _ = p[0],
        f = A(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (n("cr:7565") == null) {
              i(null);
              return;
            }
            if (s == null) {
              i(null);
              return;
            }
            if (_ == null) {
              i(null);
              return;
            }
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[useIsFileSavedOnFileSystem] checking fs ",
                  " hash=",
                  "",
                ])),
              e.toString(),
              _,
            );
            var t = o("WAWebMsgCollection").MsgCollection.get(e);
            if (t == null) {
              i(null);
              return;
            }
            try {
              var r = yield n("cr:7565").isMediaFileSaved(t);
              i(r);
            } catch (t) {
              (o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[useIsFileSavedOnFileSystem] fs check error ",
                    ": ",
                    "",
                  ])),
                e.toString(),
                t,
              ),
                i(null));
            }
          }),
          [s, e, _],
        );
      return (
        o("useWAWebListener").useListener(s, "change:filehash", function () {
          f();
        }),
        o("useWAWebListener").useListener(
          s,
          "mediaFileSavedOnFileSystem",
          function () {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[useIsFileSavedOnFileSystem] file saved event ",
                  "",
                ])),
              e.toString(),
            ),
              i(!0));
          },
        ),
        o("useWAWebListener").useListener(
          s,
          "mediaFileSavingFailed",
          function () {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[useIsFileSavedOnFileSystem] file saving failed event ",
                  "",
                ])),
              e.toString(),
            ),
              i(!1));
          },
        ),
        F(
          function () {
            f();
          },
          [f, e],
        ),
        a
      );
    }
    function j(e, t) {
      t === void 0 && (t = {});
      var a = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_loader_button_uix_improvement",
        ),
        i = H(e.id),
        l = z(e.id),
        u = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getIsVcardOverMmsDocument,
          o("WAWebMsgGetters").getIsFailed,
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        c = u[0],
        d = u[1],
        m = u[2],
        N = o("useWAWebMediaDataValues").useMediaDataValues(e.mediaData, [
          o("WAWebMediaDataGetters").getMediaStage,
          o("WAWebMediaDataGetters").getFilename,
          o("WAWebMediaDataGetters").getSize,
          o("WAWebMediaDataGetters").getFilehash,
          o("WAWebMediaDataGetters").getLoadedSize,
          o("WAWebMediaDataGetters").getMimetype,
        ]),
        w = N[0],
        A = N[1],
        F = N[2],
        O = N[3],
        G = N[4],
        j = N[5],
        K = o("WAWebFilenameManager").getDefaultName(e),
        Q = o("WAWebFrontendMsgGetters").getChat(e),
        X = function (n) {
          (V(n),
            o("WAWebModalManager").ModalManager.open(
              M.jsx(r("WAWebMediaMissingModal.react"), { msg: e.unsafe() }),
            ));
        },
        Y = function (n) {
          (V(n), e.cancelDownload());
        },
        J = function (n) {
          (V(n), e.cancelUpload());
        },
        Z = function (n) {
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
        ee = function (n) {
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
        te = (function () {
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
                w,
                F || "unknown",
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
                F <= B,
              );
              try {
                (o(
                  "WAWebTPPdfViewerGatingUtils",
                ).isWebTPPdfViewerEnabledForMimeType(j) &&
                  (n("cr:11804") == null ||
                    n("cr:11804").maybePreloadWebTPIframeForPDFs(void 0, {
                      source: "pdfPreviewClick",
                      force: !0,
                    })),
                  yield e.downloadMedia({
                    downloadEvenIfExpensive: F <= B,
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
                w,
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
              ).isWebTPPdfViewerEnabledForMimeType(j)
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
            switch (w) {
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
                      yield o("WAWebFileSaver").FileSaver.downloadAsync({
                        msg: d,
                      }));
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
                            ).isHtmlViewerEnabledForMimeType(j, Q.id)
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
                            yield o("WAWebFileSaver").FileSaver.downloadAsync({
                              msg: d,
                            })));
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
                  X());
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
        ne = function (n) {
          te(n).catch(function (t) {
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
        re = null,
        oe = { onClick: r("WAWebNoop") },
        ae =
          l === !0 ||
          w === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
          (w === o("WAWebMediaTypes").MediaDataStage.INIT &&
            (a ? i !== !1 : i === !0)),
        ie = function () {
          return t.forceDownload === !0
            ? s._(/*BTDS*/ 'Download "{name}"', [s._param("name", K)])
            : ae && r("WAWebEnvironment").isWindows
              ? s._(/*BTDS*/ 'Open "{name}"', [s._param("name", K)])
              : o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPPdfViewerEnabledForMimeType(j) ||
                  o(
                    "WAWebHtmlViewerGatingUtils",
                  ).isHtmlViewerEnabledForMimeType(j, Q.id)
                ? s._(/*BTDS*/ 'View "{name}"', [s._param("name", K)])
                : s._(/*BTDS*/ 'Download "{name}"', [s._param("name", K)]);
        };
      switch (w) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
        case o("WAWebMediaTypes").MediaDataStage.INIT:
          ((oe.onClick = ne),
            (oe.title = ie()),
            (re =
              !ae &&
              !r("WAWebEnvironment").isWindows &&
              !o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPPdfViewerEnabledForMimeType(j) &&
              !o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(
                j,
                Q.id,
              )
                ? M.jsx(o("WAWebDocStateControls.react").Download, {
                    onClick: ne,
                  })
                : null));
          break;
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
          re = a
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
          var le = w === o("WAWebMediaTypes").MediaDataStage.FETCHING ? Y : J;
          ((re = M.jsx(o("WAWebDocStateControls.react").Pending, {
            canCancel: !0,
            onClick: le,
            outgoingMsg: m,
            value:
              G != null && F != null && F > 0
                ? Math.ceil((G / F) * 100)
                : void 0,
          })),
            (oe.onClick = le));
          break;
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          ((re = M.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (oe.onClick = Z));
          break;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          ((re = M.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (oe.onClick = ee));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          oe.onClick = r("WAWebShowMediaNotReadableModal");
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          oe.onClick = X;
          break;
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
          re = d
            ? null
            : M.jsx(o("WAWebDocStateControls.react").Pending, {
                outgoingMsg: m,
              });
          break;
        default:
          re = M.jsx(o("WAWebDocStateControls.react").Pending, {
            outgoingMsg: m,
          });
      }
      return [oe, re];
    }
    ((l.displayDownloadingToast = q),
      (l.displayFileOpeningToast = U),
      (l.useIsFileInCacheState = H),
      (l.useIsFileSavedOnFileSystem = z),
      (l.useMediaAction = j));
  },
  226,
);
