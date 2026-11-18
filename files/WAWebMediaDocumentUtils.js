__d(
  "WAWebMediaDocumentUtils",
  [
    "fbt",
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAWebActiveIntegrityHoldout",
    "WAWebCmd",
    "WAWebDocStateControls.react",
    "WAWebDualUploadsPreferredMsg",
    "WAWebEnvironment",
    "WAWebFileSaver",
    "WAWebFilenameManager",
    "WAWebFrontendMsgGetters",
    "WAWebHarmfulFileWarningGate",
    "WAWebHarmfulFileWarningModal.react",
    "WAWebHtmlViewerGatingUtils",
    "WAWebMediaCleanFileName",
    "WAWebMediaDataGetters",
    "WAWebMediaMissingModal.react",
    "WAWebMediaStore",
    "WAWebMediaTypes",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebShowMediaNotReadableModal",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "cr:11804",
    "cr:7565",
    "getErrorSafe",
    "justknobx",
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
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            r("justknobx")._("8497") &&
            o("WAWebHarmfulFileWarningGate").shouldShowHarmfulFileWarning(
              o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(e),
            ) &&
            !o(
              "WAWebActiveIntegrityHoldout",
            ).isSuppressedByActiveIntegrityHoldout();
          (t || U(e),
            yield n("cr:7565") == null ? void 0 : n("cr:7565").openMediaFile(e),
            t && U(e));
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
      e && (e.stopPropagation(), e.preventDefault());
    }
    function z(e) {
      var t,
        n = o("react-compiler-runtime").c(11),
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
                .catch(j);
          }),
          (n[1] = m),
          (n[2] = d),
          (n[3] = p))
        : (p = n[3]);
      var _ = p,
        f;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["change:filehash", "change:mediaStage"]), (n[4] = f))
        : (f = n[4]);
      var g;
      (n[5] !== _ || n[6] !== (u == null ? void 0 : u.mediaStage)
        ? ((g = function () {
            ((u == null ? void 0 : u.mediaStage) ===
              o("WAWebMediaTypes").MediaDataStage.INIT && i(null),
              _());
          }),
          (n[5] = _),
          (n[6] = u == null ? void 0 : u.mediaStage),
          (n[7] = g))
        : (g = n[7]),
        o("useWAWebListener").useListener(u, f, g));
      var h, y;
      return (
        n[8] !== _
          ? ((h = function () {
              _();
            }),
            (y = [_]),
            (n[8] = _),
            (n[9] = h),
            (n[10] = y))
          : ((h = n[9]), (y = n[10])),
        F(h, y),
        a
      );
    }
    function j(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[useIsFileInCacheState] Failed to get file from cache",
            ])),
        )
        .catching(r("getErrorSafe")(t));
    }
    function K(e) {
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
          function () {
            if (n("cr:7565") != null && s != null && _ != null) {
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
              t != null &&
                n("cr:7565")
                  .isMediaFileSaved(t)
                  .then(
                    function (e) {
                      i(e);
                    },
                    function (t) {
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
                    },
                  );
            }
          },
          [s, e, _],
        ),
        g = O(function () {
          return f;
        }),
        h = g[0],
        y = g[1];
      return (
        h !== f &&
          (y(function () {
            return f;
          }),
          i(null)),
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
    function Q(e, t) {
      t === void 0 && (t = {});
      var a = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_loader_button_uix_improvement",
        ),
        i = z(e),
        l = K(e),
        u = o("useWAWebMsgValues").useMsgValues(e, [
          o("WAWebMsgGetters").getIsVcardOverMmsDocument,
          o("WAWebMsgGetters").getIsFailed,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebFrontendMsgGetters").getMediaData,
          o("WAWebMsgGetters").getT,
          o("WAWebMsgGetters").getType,
          o("WAWebMsgGetters").getMimetype,
          o("WAWebMsgGetters").getVcardFormattedName,
          o("WAWebMsgGetters").getFilename,
          o("WAWebMsgGetters").getCaption,
          o("WAWebMsgGetters").getVcardList,
        ]),
        c = u[0],
        d = u[1],
        m = u[2],
        P = u[3],
        N = u[4],
        w = u[5],
        A = u[6],
        F = u[7],
        O = u[8],
        U = u[9],
        H = u[10],
        j = o("useWAWebMediaDataValues").useMediaDataValues(P, [
          o("WAWebMediaDataGetters").getMediaStage,
          o("WAWebMediaDataGetters").getFilename,
          o("WAWebMediaDataGetters").getSize,
          o("WAWebMediaDataGetters").getFilehash,
          o("WAWebMediaDataGetters").getLoadedSize,
          o("WAWebMediaDataGetters").getMimetype,
        ]),
        Q = j[0],
        J = j[1],
        Z = j[2],
        ee = j[3],
        te = j[4],
        ne = j[5],
        re = o("WAWebFilenameManager").getDefaultName({
          caption: U,
          filename: O,
          isVcardOverMmsDocument: c,
          mimetype: A,
          t: N,
          type: w,
          vcardFormattedName: F,
          vcardList: H,
        }),
        oe = function (n) {
          G(n);
          var t = o("WAWebMsgCollection").MsgCollection.get(e);
          t != null &&
            o("WAWebModalManager").ModalManager.open(
              M.jsx(r("WAWebMediaMissingModal.react"), { msg: t }),
            );
        },
        ae = function (n) {
          var t;
          (G(n),
            (t = o("WAWebMsgCollection").MsgCollection.get(e)) == null ||
              t.cancelDownload());
        },
        ie = function (n) {
          var t;
          (G(n),
            (t = o("WAWebMsgCollection").MsgCollection.get(e)) == null ||
              t.cancelUpload());
        },
        le = function (n) {
          G(n);
          var t = o("WAWebMsgCollection").MsgCollection.get(e);
          t != null &&
            t.resumeUpload().catch(function (e) {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to resume document upload",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("document-resume-upload-failed");
            });
        },
        se = function (n) {
          G(n);
          var t = o("WAWebMsgCollection").MsgCollection.get(e);
          t != null &&
            t.resumeRemoteUpload().catch(function (e) {
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to resume remote document upload",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("document-resume-remote-upload-failed");
            });
        },
        ue = (function () {
          var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[downloadMediaAsync] start ",
                  " stage=",
                  " size=",
                  "",
                ])),
              e.toString(),
              Q,
              Z || "unknown",
            ),
              G(a));
            var s = o("WAWebMsgCollection").MsgCollection.get(e);
            if (s != null) {
              if (n("cr:7565") != null && l === !0)
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[downloadMediaAsync] file in fs ",
                      "",
                    ])),
                  e.toString(),
                );
              else {
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[downloadMediaAsync] downloading ",
                      " expensive=",
                      "",
                    ])),
                  e.toString(),
                  Z <= B,
                );
                try {
                  (o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPPdfViewerEnabledForMimeType(ne) &&
                    (n("cr:11804") == null ||
                      n("cr:11804").maybePreloadWebTPIframeForPDFs(void 0, {
                        source: "pdfPreviewClick",
                        force: !0,
                      })),
                    yield s.downloadMedia({
                      downloadEvenIfExpensive: Z <= B,
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
                      e.toString(),
                    ));
                } catch (t) {
                  o("WALogger").ERROR(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] Failed to download media for msg ",
                        ": ",
                        "",
                      ])),
                    e.toString(),
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
                  Q,
                  e.toString(),
                ),
                o(
                  "WAWebHarmfulFileWarningGate",
                ).shouldOpenHarmfulFileWarningModal(s))
              )
                if (
                  o(
                    "WAWebActiveIntegrityHoldout",
                  ).isSuppressedByActiveIntegrityHoldout()
                )
                  r("justknobx")._("8497") ||
                    o(
                      "WAWebHarmfulFileWarningGate",
                    ).markUserAcceptedHarmfulFileWarning(s);
                else {
                  var u = yield Y();
                  if (!u) return;
                  o(
                    "WAWebHarmfulFileWarningGate",
                  ).markUserAcceptedHarmfulFileWarning(s);
                }
              if (
                o(
                  "WAWebTPPdfViewerGatingUtils",
                ).isWebTPPdfViewerEnabledForMimeType(ne)
              ) {
                (yield o(
                  "WAWebHarmfulFileWarningGate",
                ).confirmHarmfulFileIfNeeded(s),
                  o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] opening WebTP PDF viewer ",
                        "",
                      ])),
                    e.toString(),
                  ),
                  o("WAWebCmd").Cmd.mediaViewerModal({
                    msg: s,
                    getZoomNode: t.getZoomNode,
                    shouldShowAllMedia: !1,
                  }));
                return;
              }
              switch (Q) {
                case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
                case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                  if (c !== !0) {
                    if (t.forceDownload === !0) {
                      (o("WALogger").LOG(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "[downloadMediaAsync] Force download for msg ",
                            "",
                          ])),
                        e.toString(),
                      ),
                        q(s),
                        yield o("WAWebFileSaver").FileSaver.downloadAsync({
                          msg: s,
                        }));
                      break;
                    }
                    var d = n("cr:7565") != null && (l === !0 || i === !0);
                    (o("WALogger").LOG(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "[downloadMediaAsync] file check ",
                          " canOpen=",
                          "",
                        ])),
                      e.toString(),
                      d,
                    ),
                      n("cr:7565") && d === !0
                        ? (o("WALogger").LOG(
                            L ||
                              (L = babelHelpers.taggedTemplateLiteralLoose([
                                "[downloadMediaAsync] Opening existing file for msg ",
                                "",
                              ])),
                            e.toString(),
                          ),
                          yield V(s))
                        : n("cr:7565") && d === !1
                          ? (o("WALogger").LOG(
                              E ||
                                (E = babelHelpers.taggedTemplateLiteralLoose([
                                  "[downloadMediaAsync] saving to Windows fs ",
                                  "",
                                ])),
                              e.toString(),
                            ),
                            q(s),
                            yield n("cr:7565").saveMediaFile(s))
                          : o(
                                "WAWebHtmlViewerGatingUtils",
                              ).isHtmlViewerEnabledForMimeType(ne, e.remote)
                            ? o("WAWebCmd").Cmd.mediaViewerModal({
                                msg: s,
                                getZoomNode: t.getZoomNode,
                                shouldShowAllMedia: !1,
                              })
                            : (o("WALogger").LOG(
                                k ||
                                  (k = babelHelpers.taggedTemplateLiteralLoose([
                                    "[downloadMediaAsync] Using FileSaver to download for msg ",
                                    "",
                                  ])),
                                e.toString(),
                              ),
                              q(s),
                              yield o("WAWebFileSaver").FileSaver.downloadAsync(
                                { msg: s },
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
                    e.toString(),
                  ),
                    oe());
                  break;
                case o("WAWebMediaTypes").MediaDataStage.INIT:
                  c !== !0 && n("cr:7565") != null && l === !0
                    ? (o("WALogger").LOG(
                        T ||
                          (T = babelHelpers.taggedTemplateLiteralLoose([
                            "[downloadMediaAsync] Opening existing file for msg ",
                            "",
                          ])),
                        e.toString(),
                      ),
                      yield V(s))
                    : o("WALogger").LOG(
                        D ||
                          (D = babelHelpers.taggedTemplateLiteralLoose([
                            "[downloadMediaAsync] INIT state, awaiting download ",
                            "",
                          ])),
                        e.toString(),
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
                e.toString(),
              );
            }
          });
          return function (t) {
            return a.apply(this, arguments);
          };
        })(),
        ce = function (n) {
          ue(n).catch(function (t) {
            o("WAAbortError").isAbortError(t) ||
              o("WALogger")
                .ERROR(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "[downloadMedia] Failed to download media for msg ",
                      "",
                    ])),
                  e.toString(),
                )
                .catching(r("getErrorSafe")(t));
          });
        },
        de = null,
        me = { onClick: r("WAWebNoop") },
        pe =
          l === !0 ||
          Q === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
          (Q === o("WAWebMediaTypes").MediaDataStage.INIT &&
            (a ? i !== !1 : i === !0)),
        _e = function () {
          return t.forceDownload === !0
            ? s._(/*BTDS*/ 'Download "{name}"', [s._param("name", re)])
            : pe && r("WAWebEnvironment").isWindows
              ? s._(/*BTDS*/ 'Open "{name}"', [s._param("name", re)])
              : o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPPdfViewerEnabledForMimeType(ne) ||
                  o(
                    "WAWebHtmlViewerGatingUtils",
                  ).isHtmlViewerEnabledForMimeType(ne, e.remote)
                ? s._(/*BTDS*/ 'View "{name}"', [s._param("name", re)])
                : s._(/*BTDS*/ 'Download "{name}"', [s._param("name", re)]);
        };
      switch (Q) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
        case o("WAWebMediaTypes").MediaDataStage.INIT: {
          var fe = X({
            forceDownload: t.forceDownload,
            isMediaFileCached: pe,
            name: re,
            onClick: ce,
            title: _e(),
          });
          ((me.onClick = fe.onClick),
            (me.title = fe.title),
            (de =
              !pe &&
              !r("WAWebEnvironment").isWindows &&
              !o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPPdfViewerEnabledForMimeType(ne) &&
              !o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(
                ne,
                e.remote,
              )
                ? M.jsx(o("WAWebDocStateControls.react").Download, {
                    onClick: ce,
                  })
                : null));
          break;
        }
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
          de = a
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
          var ge = Q === o("WAWebMediaTypes").MediaDataStage.FETCHING ? ae : ie;
          ((de = M.jsx(o("WAWebDocStateControls.react").Pending, {
            canCancel: !0,
            onClick: ge,
            outgoingMsg: m,
            value:
              te != null && Z != null && Z > 0
                ? Math.ceil((te / Z) * 100)
                : void 0,
          })),
            (me.onClick = ge));
          break;
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          ((de = M.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (me.onClick = le));
          break;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          ((de = M.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (me.onClick = se));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          me.onClick = r("WAWebShowMediaNotReadableModal");
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          me.onClick = oe;
          break;
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
          de = d
            ? null
            : M.jsx(o("WAWebDocStateControls.react").Pending, {
                outgoingMsg: m,
              });
          break;
        default:
          de = M.jsx(o("WAWebDocStateControls.react").Pending, {
            outgoingMsg: m,
          });
      }
      return [me, de];
    }
    function X(e) {
      var t = e.forceDownload,
        n = e.isMediaFileCached,
        a = e.name,
        i = e.onClick,
        l = e.title;
      return r("WAWebEnvironment").isWindows &&
        n &&
        t !== !0 &&
        o("WAWebMediaCleanFileName").hasExecutableExtension(a)
        ? { onClick: null }
        : { onClick: i, title: l };
    }
    function Y() {
      return new (P || (P = n("Promise")))(function (e) {
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
          }),
        );
      });
    }
    ((l.displayDownloadingToast = q),
      (l.displayFileOpeningToast = U),
      (l.openMediaFileWithToast = V),
      (l.useIsFileInCacheState = z),
      (l.useIsFileSavedOnFileSystem = K),
      (l.useMediaAction = Q));
  },
  226,
);
