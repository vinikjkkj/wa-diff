__d(
  "WAWebMediaDocumentUtils",
  [
    "fbt",
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
    "cr:11804",
    "cr:7565",
    "getErrorSafe",
    "justknobx",
    "react",
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
      N = P || (P = o("react")),
      M = P,
      w = M.useCallback,
      A = M.useEffect,
      F = M.useState,
      O = 100 * 1024 * 1024,
      B = 100;
    function W(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e);
      o("WAWebToastManager").ToastManager.open(
        N.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "", [s._param("name", t)]),
        }),
      );
    }
    function q(e) {
      var t = o("WAWebFilenameManager").getDefaultName(e);
      o("WAWebToastManager").ToastManager.open(
        N.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "", [s._param("name", t)]),
        }),
      );
    }
    async function U(e) {
      var t =
        r("justknobx")._("8497") &&
        o("WAWebHarmfulFileWarningGate").shouldShowHarmfulFileWarning(
          o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(e),
        ) &&
        !o(
          "WAWebActiveIntegrityHoldout",
        ).isSuppressedByActiveIntegrityHoldout();
      (t || q(e),
        await (n("cr:7565") == null ? void 0 : n("cr:7565").openMediaFile(e)),
        t && q(e));
    }
    function V(e) {
      e && (e.stopPropagation(), e.preventDefault());
    }
    function H(t) {
      var n,
        a = F(!1),
        i = a[0],
        l = a[1],
        s = o("useWAWebMsgValues").useMsgValues(t, [
          o("WAWebFrontendMsgGetters").getMediaData,
        ]),
        u = s[0],
        c =
          (n = o("useWAWebMediaDataValues").useOptionalMediaDataValues(u, [
            o("WAWebMediaDataGetters").getMediaStage,
            o("WAWebMediaDataGetters").getFilehash,
          ])) != null
            ? n
            : [null, null],
        d = c[0],
        m = c[1],
        p = w(
          function () {
            m == null ||
              d !== o("WAWebMediaTypes").MediaDataStage.INIT ||
              o("WAWebMediaStore")
                .LruMediaStore.has(m)
                .then(function (e) {
                  return l(e);
                })
                .catch(function (t) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[useIsFileInCacheState] Failed to get file from cache",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t));
                });
          },
          [m, d, l],
        );
      return (
        o("useWAWebListener").useListener(
          u,
          ["change:filehash", "change:mediaStage"],
          function () {
            ((u == null ? void 0 : u.mediaStage) ===
              o("WAWebMediaTypes").MediaDataStage.INIT && l(null),
              p());
          },
        ),
        A(
          function () {
            p();
          },
          [p],
        ),
        i
      );
    }
    function G(e) {
      var t,
        r = F(null),
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
        f = w(
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
        g = F(function () {
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
        A(
          function () {
            f();
          },
          [f, e],
        ),
        a
      );
    }
    function z(e, t) {
      t === void 0 && (t = {});
      var a = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_loader_button_uix_improvement",
        ),
        i = H(e),
        l = G(e),
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
        M = u[4],
        w = u[5],
        A = u[6],
        F = u[7],
        q = u[8],
        z = u[9],
        Q = u[10],
        X = o("useWAWebMediaDataValues").useMediaDataValues(P, [
          o("WAWebMediaDataGetters").getMediaStage,
          o("WAWebMediaDataGetters").getFilename,
          o("WAWebMediaDataGetters").getSize,
          o("WAWebMediaDataGetters").getFilehash,
          o("WAWebMediaDataGetters").getLoadedSize,
          o("WAWebMediaDataGetters").getMimetype,
        ]),
        Y = X[0],
        J = X[1],
        Z = X[2],
        ee = X[3],
        te = X[4],
        ne = X[5],
        re = o("WAWebFilenameManager").getDefaultName({
          caption: z,
          filename: q,
          isVcardOverMmsDocument: c,
          mimetype: A,
          t: M,
          type: w,
          vcardFormattedName: F,
          vcardList: Q,
        }),
        oe = function (n) {
          V(n);
          var t = o("WAWebMsgCollection").MsgCollection.get(e);
          t != null &&
            o("WAWebModalManager").ModalManager.open(
              N.jsx(r("WAWebMediaMissingModal.react"), { msg: t }),
            );
        },
        ae = function (n) {
          var t;
          (V(n),
            (t = o("WAWebMsgCollection").MsgCollection.get(e)) == null ||
              t.cancelDownload());
        },
        ie = function (n) {
          var t;
          (V(n),
            (t = o("WAWebMsgCollection").MsgCollection.get(e)) == null ||
              t.cancelUpload());
        },
        le = function (n) {
          V(n);
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
          V(n);
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
        ue = async function (s) {
          (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[downloadMediaAsync] start ",
                " stage=",
                " size=",
                "",
              ])),
            e.toString(),
            Y,
            Z || "unknown",
          ),
            V(s));
          var a = o("WAWebMsgCollection").MsgCollection.get(e);
          if (a != null) {
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
                Z <= O,
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
                  await a.downloadMedia({
                    downloadEvenIfExpensive: Z <= O,
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
                Y,
                e.toString(),
              ),
              o(
                "WAWebHarmfulFileWarningGate",
              ).shouldOpenHarmfulFileWarningModal(a))
            )
              if (
                o(
                  "WAWebActiveIntegrityHoldout",
                ).isSuppressedByActiveIntegrityHoldout()
              )
                r("justknobx")._("8497") ||
                  o(
                    "WAWebHarmfulFileWarningGate",
                  ).markUserAcceptedHarmfulFileWarning(a);
              else {
                var u = await K();
                if (!u) return;
                o(
                  "WAWebHarmfulFileWarningGate",
                ).markUserAcceptedHarmfulFileWarning(a);
              }
            if (
              o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPPdfViewerEnabledForMimeType(ne)
            ) {
              (await o(
                "WAWebHarmfulFileWarningGate",
              ).confirmHarmfulFileIfNeeded(a),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[downloadMediaAsync] opening WebTP PDF viewer ",
                      "",
                    ])),
                  e.toString(),
                ),
                o("WAWebCmd").Cmd.mediaViewerModal({
                  msg: a,
                  getZoomNode: t.getZoomNode,
                  shouldShowAllMedia: !1,
                }));
              return;
            }
            switch (Y) {
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
                      W(a),
                      await o("WAWebFileSaver").FileSaver.downloadAsync({
                        msg: a,
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
                        await U(a))
                      : n("cr:7565") && d === !1
                        ? (o("WALogger").LOG(
                            E ||
                              (E = babelHelpers.taggedTemplateLiteralLoose([
                                "[downloadMediaAsync] saving to Windows fs ",
                                "",
                              ])),
                            e.toString(),
                          ),
                          W(a),
                          await n("cr:7565").saveMediaFile(a))
                        : o(
                              "WAWebHtmlViewerGatingUtils",
                            ).isHtmlViewerEnabledForMimeType(ne, e.remote)
                          ? o("WAWebCmd").Cmd.mediaViewerModal({
                              msg: a,
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
                            W(a),
                            await o("WAWebFileSaver").FileSaver.downloadAsync({
                              msg: a,
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
                    await U(a))
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
        },
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
          Y === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
          (Y === o("WAWebMediaTypes").MediaDataStage.INIT &&
            (a ? i !== !1 : i === !0)),
        _e = function () {
          return t.forceDownload === !0
            ? s._(/*BTDS*/ "", [s._param("name", re)])
            : pe && r("WAWebEnvironment").isWindows
              ? s._(/*BTDS*/ "", [s._param("name", re)])
              : o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPPdfViewerEnabledForMimeType(ne) ||
                  o(
                    "WAWebHtmlViewerGatingUtils",
                  ).isHtmlViewerEnabledForMimeType(ne, e.remote)
                ? s._(/*BTDS*/ "", [s._param("name", re)])
                : s._(/*BTDS*/ "", [s._param("name", re)]);
        };
      switch (Y) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
        case o("WAWebMediaTypes").MediaDataStage.INIT: {
          var fe = j({
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
                ? N.jsx(o("WAWebDocStateControls.react").Download, {
                    onClick: ce,
                  })
                : null));
          break;
        }
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
          de = a
            ? N.jsx(o("WAWebDocStateControls.react").Pending, {
                canCancel: !1,
                outgoingMsg: m,
                value: B,
              })
            : N.jsx(o("WAWebDocStateControls.react").Pending, {
                outgoingMsg: m,
              });
          break;
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.FETCHING: {
          var ge = Y === o("WAWebMediaTypes").MediaDataStage.FETCHING ? ae : ie;
          ((de = N.jsx(o("WAWebDocStateControls.react").Pending, {
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
          ((de = N.jsx(o("WAWebDocStateControls.react").Upload, {})),
            (me.onClick = le));
          break;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          ((de = N.jsx(o("WAWebDocStateControls.react").Upload, {})),
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
            : N.jsx(o("WAWebDocStateControls.react").Pending, {
                outgoingMsg: m,
              });
          break;
        default:
          de = N.jsx(o("WAWebDocStateControls.react").Pending, {
            outgoingMsg: m,
          });
      }
      return [me, de];
    }
    function j(e) {
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
    function K() {
      return new Promise(function (e) {
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
          }),
        );
      });
    }
    ((l.displayDownloadingToast = W),
      (l.displayFileOpeningToast = q),
      (l.openMediaFileWithToast = U),
      (l.useIsFileInCacheState = H),
      (l.useIsFileSavedOnFileSystem = G),
      (l.useMediaAction = z));
  },
  226,
);
