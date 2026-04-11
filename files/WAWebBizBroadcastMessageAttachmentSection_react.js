__d(
  "WAWebBizBroadcastMessageAttachmentSection.react",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebAttachMediaCollection",
    "WAWebAttachMenuStrings",
    "WAWebBBLoggerTypes",
    "WAWebBizBroadcastMediaProcessor",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsMessageDocumentSection.react",
    "WAWebBizBroadcastsNewBroadcastAddButton.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCaptureDrawer.react",
    "WAWebFilePicker.react",
    "WAWebFileUtils",
    "WAWebFlex.react",
    "WAWebGuidePopup.react",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorLoadable.react",
    "WAWebMimeTypes",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebNoop",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSIconIcDescriptionFilled.react",
    "WDSIconIcEdit.react",
    "WDSIconIcFilterFilled.react",
    "WDSIconIcPhotoCameraFilled.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSText.react",
    "react",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useRef,
      g = m.useState,
      h = 1,
      y = {
        attachmentSection: { marginTop: "x98l61r", $$css: !0 },
        attachmentTitleRow: { columnGap: "x1trrmfo", $$css: !0 },
        cameraIconStyle: { color: "x1cbnkk4", $$css: !0 },
        documentIconColor: { color: "x19mqsdy", $$css: !0 },
        mediaEditorContainer: {
          height: "x5yr21d",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          position: "x10l6tqk",
          top: "x13vifvy",
          width: "xh8yej3",
          zIndex: "xbpklzw",
          $$css: !0,
        },
        mediaEditorModalContainer: {
          backgroundColor: "x1q7yeco",
          borderTopColor: "x1ditxmn",
          borderInlineEndColor: "x17pw8c",
          borderBottomColor: "xcsjwe9",
          borderInlineStartColor: "x1pma5q3",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          height: "x1097qzo",
          insetInlineStart: "xbudbmw",
          left: null,
          right: null,
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x10l6tqk",
          top: "xwa60dl",
          transform: "x11lhmoz",
          width: "x1lh4fz6",
          zIndex: "xbpklzw",
          $$css: !0,
        },
        photosIconStyle: { color: "xihbb3s", $$css: !0 },
      };
    function C() {
      return d.jsx(d.Fragment, {});
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.onCameraClick,
        n = e.onDocumentsClick,
        a = e.onPhotosVideosClick;
      return d.jsxs(r("WDSMenu.react"), {
        children: [
          d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcDescriptionFilled.react"),
              iconXstyle: y.documentIconColor,
              title: o("WAWebAttachMenuStrings").DocumentText(),
              onPress: n,
              testid: void 0,
            },
            "documents",
          ),
          d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcFilterFilled.react"),
              iconXstyle: y.photosIconStyle,
              title: o(
                "WAWebBizBroadcastsCreationStrings",
              ).getAttachmentMenuPhotosVideosLabel(),
              onPress: a,
              testid: void 0,
            },
            "photos-videos",
          ),
          d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcPhotoCameraFilled.react"),
              iconXstyle: y.cameraIconStyle,
              title: o(
                "WAWebBizBroadcastsCreationStrings",
              ).getAttachmentMenuCameraLabel(),
              onPress: t,
              testid: void 0,
            },
            "camera",
          ),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(t) {
      var n,
        a,
        i = t.attachmentData,
        l = t.entryPoint,
        c = t.setAttachmentData,
        m = f(null),
        v = f(null),
        S = f(null),
        R = r("useWAWebUnmountSignal")();
      _(function () {
        return function () {
          S.current == null || S.current();
        };
      }, []);
      var L = p(
          function (e) {
            if (e.length) {
              var t = e[0],
                n = new (r("WAWebAttachMediaCollection"))({
                  chatParticipantCount: 1,
                }),
                a = function () {
                  n.processAttachments(
                    e.map(function (e) {
                      return { file: e };
                    }),
                    void 0,
                    o("WAWebBizBroadcastMediaProcessor").SUPPORTED_MEDIA_TYPES,
                    h,
                  );
                },
                i = function (n) {
                  var e,
                    r,
                    a = n.at(0),
                    i = a == null ? void 0 : a.media;
                  if (i == null) {
                    o("WAWebModalManager").ModalManager.closeMedia();
                    return;
                  }
                  o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.attachmentPreviewSaveButtonClicked(
                    l,
                    i.fileExt,
                    i.filesize,
                  );
                  var s =
                    i.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
                    (e = i.editedFile) != null
                      ? e
                      : t;
                  (c({
                    file: s,
                    fileExt: i.fileExt,
                    fileName: i.filename,
                    fileSize: i.filesize,
                    mediaType: i.type,
                    mimetype: i.mimetype,
                    pageCount: (r = i.documentPageCount) != null ? r : 0,
                    previewSize: i.fullPreviewSize,
                    previewUrl: i.fullPreview,
                  }),
                    o("WAWebModalManager").ModalManager.closeMedia());
                },
                s = function (t) {
                  return n.processAttachments(
                    t,
                    void 0,
                    o("WAWebBizBroadcastMediaProcessor").SUPPORTED_MEDIA_TYPES,
                    h,
                  );
                },
                u = function () {
                  o("WAWebModalManager").ModalManager.closeMedia();
                },
                m = d.jsxs(d.Fragment, {
                  children: [
                    d.jsx("div", {
                      className:
                        "x1honnu5 x5yr21d x1o0tod xixxii4 x13vifvy xh8yej3 xbpklzw",
                    }),
                    d.jsx(o("WAWebFlex.react").FlexColumn, {
                      xstyle: y.mediaEditorModalContainer,
                      children: d.jsx(
                        o("WAWebMediaEditorLoadable.react").MediaEditorLoadable,
                        {
                          theme: o("WAWebMediaEditorEnumsThemes").MediaTheme
                            .BROADCAST,
                          onClose: u,
                          onRender: a,
                          initCaption: null,
                          onSendMedia: i,
                          mediaCollection: n,
                          sendAsSticker: !1,
                          onDropText: r("WAWebNoop"),
                          canViewOnce: !1,
                          hdEligible: !0,
                          maxNumberOfMedia: h,
                          renderCaptionInput: C,
                          allowMultipleMedia: !1,
                          onProcessAttachments: s,
                          tsNavigationData: {
                            surface: "status-composer-media",
                          },
                        },
                      ),
                    }),
                  ],
                });
              (o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.attachmentFileSelected(l),
                o("WAWebModalManager").ModalManager.openMedia(m, {
                  blockClose: !0,
                  transition: "status-modal",
                }));
            }
          },
          [c, l],
        ),
        E = (n = i == null ? void 0 : i.file) != null ? n : null,
        k = p(
          function (e) {
            var t;
            if (e) {
              e.stopPropagation();
              var n = Array.from((t = e.target.files) != null ? t : []);
              n.length && L(n);
            }
          },
          [L],
        ),
        I = p(
          function () {
            E != null && L([E]);
          },
          [E, L],
        ),
        T = p(
          function () {
            (c(null),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[useWAWebBizBroadcastMediaEditor] Media removed",
                  ])),
              ));
          },
          [c],
        ),
        D = p(
          function () {
            var e;
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.attachmentsDocumentDropdownClicked(
              l,
            ),
              (e = m.current) == null || e.open());
          },
          [l],
        ),
        x = p(
          function () {
            var e;
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.attachmentsImageVideoDropdownClicked(
              l,
            ),
              (e = v.current) == null || e.open());
          },
          [l],
        ),
        $ = p(function () {
          S.current != null && (S.current(), (S.current = null));
        }, []),
        P = p(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.attachmentsCameraDropdownClicked(
              l,
            ),
              $());
            var e = o("WAWebMediaCapture").start({
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                  .PHOTO_CAPTURE,
                type: o("WAWebMediaCaptureStreamType")
                  .WAWebMediaCaptureStreamType.CAMERA,
              }),
              t = e.asyncStream,
              n = e.disposeStream;
            ((S.current = n),
              r("WAPromiseRaceAbort")(t, R)
                .then(function (e) {
                  if (e) {
                    var t = d.jsx(o("WAWebFlex.react").FlexRow, {
                      xstyle: y.mediaEditorContainer,
                      children: d.jsx(r("WAWebCaptureDrawer.react"), {
                        onBack: function () {
                          ($(),
                            o("WAWebModalManager").ModalManager.closeMedia());
                        },
                        chat: void 0,
                        theme: "capture-cover",
                        stream: e,
                        disposeStream: S.current,
                        caption: !1,
                        onCaptured: function (t) {
                          var e = o("WAWebFileUtils").createFile([t], "", {
                            type: "image/jpeg",
                          });
                          ($(),
                            e &&
                              (o("WAWebModalManager").ModalManager.closeMedia(),
                              L([e])));
                        },
                      }),
                    });
                    o("WAWebModalManager").ModalManager.openMedia(t, {
                      blockClose: !0,
                      transition: "status-modal",
                    });
                  } else $();
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebMiscErrors").GetUserMedia.NotAllowedError,
                    function () {
                      var e;
                      ($(),
                        o("WAWebModalManager").ModalManager.open(
                          d.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                            messaging: e.Messaging.CAMERA_FAIL,
                            type: e.GuidePopupType.GUIDE_UNBLOCK,
                            featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
                          }),
                        ));
                    },
                  ),
                )
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebMiscErrors").GetUserMedia.GetUserMediaError,
                    function () {
                      var e;
                      ($(),
                        o("WAWebModalManager").ModalManager.open(
                          d.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                            messaging: e.Messaging.CAMERA_MISSING,
                            type: e.GuidePopupType.GUIDE_NONE,
                            featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
                          }),
                        ));
                    },
                  ),
                )
                .catch(function (e) {
                  ($(),
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[useWAWebBizBroadcastMediaEditor] Unexpected camera error: ",
                          "",
                        ])),
                      String(e),
                    ));
                }));
          },
          [R, L, $, l],
        ),
        N = g(!1),
        M = N[0],
        w = N[1],
        A = g(!1),
        F = A[0],
        O = A[1],
        B = function () {
          w(!0);
        },
        W = function () {
          w(!1);
        },
        q = function () {
          O(!0);
        },
        U = function (t) {
          var e = t.relatedTarget;
          (!(e instanceof Node) || !t.currentTarget.contains(e)) && O(!1);
        },
        V = M || F,
        H = (a = i == null ? void 0 : i.previewUrl) != null ? a : null,
        G = (function (e) {
          return e === o("WAWebMsgType").MSG_TYPE.DOCUMENT
            ? i &&
                d.jsx(r("WAWebBizBroadcastsMessageDocumentSection.react"), {
                  onRemoveMedia: T,
                  selectedDocumentData: i,
                  entryPoint: l,
                })
            : e === o("WAWebMsgType").MSG_TYPE.VIDEO
              ? d.jsxs("div", {
                  role: "group",
                  className: "x1n2onr6",
                  onMouseEnter: B,
                  onMouseLeave: W,
                  onFocus: q,
                  onBlur: U,
                  children: [
                    d.jsx("div", {
                      className:
                        "x6s0dn4 x1280gxy xx42vgk xbogo7e x120ee7l x1vb5itz x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x78zum5 xjp8j0k xl56j7k x6ikm8r x10wlt62 x13oubkp",
                      children: d.jsx("video", {
                        className: "x5yr21d xl1xv1r xh8yej3",
                        src: H,
                        muted: !0,
                        "data-testid": void 0,
                        children: d.jsx("track", { kind: "captions" }),
                      }),
                    }),
                    V &&
                      d.jsxs("div", {
                        className:
                          "x78zum5 x1b73lln x46w9ns x1rh878x x10l6tqk x16xtl6x",
                        children: [
                          d.jsx(r("WDSButton.react"), {
                            variant: "tonal",
                            type: "media",
                            size: "small",
                            Icon: r("WDSIconIcEdit.react"),
                            onPress: function () {
                              (o(
                                "WAWebBusinessBroadcastUserJourneyLogger",
                              ).BusinessBroadcastUserJourneyLogger.attachmentPreviewButtonClicked(
                                l,
                                o("WAWebBBLoggerTypes").UserActionTarget
                                  .ATTACHMENT_VIDEO_PREVIEW_BUTTON,
                                i == null ? void 0 : i.fileExt,
                                i == null ? void 0 : i.fileSize,
                              ),
                                I());
                            },
                            "aria-label": o(
                              "WAWebBizBroadcastsCreationStrings",
                            ).getEditMediaAriaLabel(),
                            testid: void 0,
                          }),
                          d.jsx(r("WDSButton.react"), {
                            variant: "tonal",
                            type: "media",
                            size: "small",
                            Icon: r("WDSIconIcClose.react"),
                            onPress: function () {
                              (o(
                                "WAWebBusinessBroadcastUserJourneyLogger",
                              ).BusinessBroadcastUserJourneyLogger.attachmentRemoveButtonClicked(
                                l,
                                o("WAWebBBLoggerTypes").UserActionTarget
                                  .ATTACHMENT_VIDEO_REMOVE_BUTTON,
                                i == null ? void 0 : i.fileExt,
                                i == null ? void 0 : i.fileSize,
                              ),
                                T());
                            },
                            "aria-label": o(
                              "WAWebBizBroadcastsCreationStrings",
                            ).getRemoveMediaAriaLabel(),
                            testid: void 0,
                          }),
                        ],
                      }),
                  ],
                })
              : e === o("WAWebMsgType").MSG_TYPE.IMAGE
                ? d.jsxs("div", {
                    role: "group",
                    className: "x1n2onr6",
                    onMouseEnter: B,
                    onMouseLeave: W,
                    onFocus: q,
                    onBlur: U,
                    children: [
                      d.jsx("div", {
                        className:
                          "x6s0dn4 x1280gxy xx42vgk xbogo7e x120ee7l x1vb5itz x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x78zum5 xjp8j0k xl56j7k x6ikm8r x10wlt62 x13oubkp",
                        children: d.jsx("img", {
                          className: "x5yr21d xl1xv1r xh8yej3",
                          src: H,
                          alt: s._(/*BTDS*/ "Selected media"),
                          "data-testid": void 0,
                        }),
                      }),
                      V &&
                        d.jsxs("div", {
                          className:
                            "x78zum5 x1b73lln x46w9ns x1rh878x x10l6tqk x16xtl6x",
                          children: [
                            d.jsx(r("WDSButton.react"), {
                              variant: "tonal",
                              type: "media",
                              size: "small",
                              Icon: r("WDSIconIcEdit.react"),
                              onPress: function () {
                                (o(
                                  "WAWebBusinessBroadcastUserJourneyLogger",
                                ).BusinessBroadcastUserJourneyLogger.attachmentPreviewButtonClicked(
                                  l,
                                  o("WAWebBBLoggerTypes").UserActionTarget
                                    .ATTACHMENT_IMAGE_PREVIEW_BUTTON,
                                  i == null ? void 0 : i.fileExt,
                                  i == null ? void 0 : i.fileSize,
                                ),
                                  I());
                              },
                              "aria-label": o(
                                "WAWebBizBroadcastsCreationStrings",
                              ).getEditMediaAriaLabel(),
                              testid: void 0,
                            }),
                            d.jsx(r("WDSButton.react"), {
                              variant: "tonal",
                              type: "media",
                              size: "small",
                              Icon: r("WDSIconIcClose.react"),
                              onPress: function () {
                                (o(
                                  "WAWebBusinessBroadcastUserJourneyLogger",
                                ).BusinessBroadcastUserJourneyLogger.attachmentRemoveButtonClicked(
                                  l,
                                  o("WAWebBBLoggerTypes").UserActionTarget
                                    .ATTACHMENT_IMAGE_REMOVE_BUTTON,
                                  i == null ? void 0 : i.fileExt,
                                  i == null ? void 0 : i.fileSize,
                                ),
                                  T());
                              },
                              "aria-label": o(
                                "WAWebBizBroadcastsCreationStrings",
                              ).getRemoveMediaAriaLabel(),
                              testid: void 0,
                            }),
                          ],
                        }),
                    ],
                  })
                : d.jsx(r("WAWebBizBroadcastsNewBroadcastAddButton.react"), {
                    buttonLabel: o(
                      "WAWebBizBroadcastsCreationStrings",
                    ).getAddAttachmentButtonLabel(),
                    contextMenu: d.jsx(b, {
                      onCameraClick: P,
                      onDocumentsClick: D,
                      onPhotosVideosClick: x,
                    }),
                    onButtonClick: function () {
                      o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.addAttachmentButtonClicked(
                        l,
                      );
                    },
                    testid: void 0,
                  });
        })(i == null ? void 0 : i.mediaType);
      return d.jsxs(d.Fragment, {
        children: [
          d.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: y.attachmentSection,
            children: [
              d.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                xstyle: y.attachmentTitleRow,
                children: [
                  d.jsx(r("WDSText.react"), {
                    type: "Body1Emphasized",
                    colorName: "contentDefault",
                    testid: void 0,
                    children: o(
                      "WAWebBizBroadcastsCreationStrings",
                    ).getAttachmentSectionTitle(),
                  }),
                  d.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: o(
                      "WAWebBizBroadcastsCreationStrings",
                    ).getOptionalLabel(),
                  }),
                ],
              }),
              d.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                testid: void 0,
                children: o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getAttachmentSectionSubtitle(),
              }),
              d.jsx("div", {
                className:
                  "x6s0dn4 x78zum5 x1q0g3np x1qvou4u x1s70e7g x1de0gy xh8yej3",
                children: G,
              }),
            ],
          }),
          d.jsx(r("WAWebFilePicker.react"), {
            ref: v,
            mimes: [
              o("WAWebMimeTypes").IMAGE_MIMES,
              o("WAWebMimeTypes").VIDEO_MIMES,
            ].join(","),
            onChange: k,
            multiple: !1,
          }),
          d.jsx(r("WAWebFilePicker.react"), {
            ref: m,
            mimes: o("WAWebMimeTypes").DOC_MIMES,
            onChange: k,
            multiple: !1,
          }),
        ],
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"),
      (l.renderEmptyCaptionInput = C),
      (l.WAWebBizBroadcastMessageAttachmentSection = v));
  },
  226,
);
