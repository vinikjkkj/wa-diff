__d(
  "WAWebGalaxyFlowMediaPicker.react",
  [
    "WAFilteredCatch",
    "WAFlowsDocumentPickerAllowedMIMEType",
    "WAFlowsNativeMediaEventTypes",
    "WAPromiseRaceAbort",
    "WAWebAttachMediaCollection",
    "WAWebCaptureDrawer.react",
    "WAWebFilePicker.react",
    "WAWebFileUtils",
    "WAWebGalaxyFlowMediaView.react",
    "WAWebGuidePopup.react",
    "WAWebKeyboardTabUtils",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMimeTypes",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebMsgType",
    "react",
    "useWAWebUIM",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useRef,
      _ = 30,
      f = [
        o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.CAMERA,
        o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.CAMERA_GALLERY,
      ],
      g = function (t) {
        var e = t.allowedMimeTypes,
          n = t.inputType;
        if (
          n === o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.DOCUMENT
        ) {
          var a =
            Array.isArray(e) && e.length > 0
              ? e
              : Array.from(
                  Object.values(r("WAFlowsDocumentPickerAllowedMIMEType")),
                );
          return a.join(",");
        }
        return [o("WAWebMimeTypes").IMAGE_MIMES].join(",");
      },
      h = function (t) {
        var e = t.inputType;
        return e ===
          o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.DOCUMENT
          ? o("WAWebMsgType").MSG_TYPE.DOCUMENT
          : o("WAWebMsgType").MSG_TYPE.IMAGE;
      };
    function y(e) {
      var t = e.mediaPayload,
        n = r("useWAWebUIM")(),
        a = p(),
        i = m(
          function () {
            var e;
            return [g(t), new Set([h(t)]), (e = t.maxItems) != null ? e : _];
          },
          [t],
        ),
        l = i[0],
        u = i[1],
        y = i[2],
        C = p(null),
        b = r("useWAWebUnmountSignal")(),
        v = m(
          function () {
            return (
              t.inputType !==
              o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.CAMERA
            );
          },
          [t.inputType],
        ),
        S = c(
          function (e) {
            var n = e.attachments,
              a = new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: 1,
              }),
              i = function () {
                a.processAttachments(n, void 0, u, y);
              },
              c = s.jsx(r("WAWebGalaxyFlowMediaView.react"), {
                allowMultipleMedia: v,
                onRender: i,
                mediaPayload: t,
                mediaCollection: a,
                suportedMediaTypes: u,
                mediaMimeTypes: l,
                maxItems: y,
                maxFileSizeBytes: t.maxFileSizeBytes,
              });
            o("WAWebModalManager").ModalManager.openMedia(c, {
              transition: "status-modal",
              blockClose: !0,
              focusType: {
                type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            });
          },
          [v, y, l, t, u],
        ),
        R = c(
          function () {
            n == null || n.requestDismiss();
          },
          [n],
        ),
        L = c(
          function (e) {
            var t;
            if (!e) {
              R();
              return;
            }
            e.stopPropagation();
            var n = Array.from((t = e.target.files) != null ? t : []);
            (R(),
              n.length &&
                S({
                  attachments: n.map(function (e) {
                    return { file: e };
                  }),
                }));
          },
          [R, S],
        ),
        E = c(
          function () {
            var e = o("WAWebMediaCapture").start({
                type: o("WAWebMediaCaptureStreamType")
                  .WAWebMediaCaptureStreamType.CAMERA,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                  .PHOTO_CAPTURE,
              }),
              t = e.asyncStream,
              n = e.disposeStream;
            ((C.current = n),
              r("WAPromiseRaceAbort")(t, b)
                .then(function (e) {
                  if (e) {
                    var t = s.jsx("div", {
                      className:
                        "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x1y61xfy",
                      children: s.jsx(r("WAWebCaptureDrawer.react"), {
                        onBack: function () {
                          o("WAWebModalManager").ModalManager.closeMedia();
                        },
                        chat: void 0,
                        theme: "capture-cover",
                        stream: e,
                        disposeStream: C.current,
                        caption: !1,
                        onCaptured: function (t) {
                          var e = o("WAWebFileUtils").createFile([t], "", {
                            type: "image/jpeg",
                          });
                          e && S({ attachments: [{ file: e }] });
                        },
                      }),
                    });
                    o("WAWebModalManager").ModalManager.openMedia(t, {
                      transition: "status-modal",
                      blockClose: !0,
                      focusType: {
                        type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                      },
                    });
                  }
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebMiscErrors").GetUserMedia.NotAllowedError,
                    function () {
                      var e;
                      o("WAWebModalManager").ModalManager.open(
                        s.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                          messaging: e.Messaging.CAMERA_FAIL,
                          type: e.GuidePopupType.GUIDE_UNBLOCK,
                          featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
                        }),
                      );
                    },
                  ),
                )
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebMiscErrors").GetUserMedia.GetUserMediaError,
                    function () {
                      var e;
                      o("WAWebModalManager").ModalManager.open(
                        s.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                          messaging: e.Messaging.CAMERA_MISSING,
                          type: e.GuidePopupType.GUIDE_NONE,
                          featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
                        }),
                      );
                    },
                  ),
                ));
          },
          [b, S],
        );
      return (
        d(
          function () {
            if (t.inputType != null && f.includes(t.inputType)) E();
            else {
              var e;
              (e = a.current) == null || e.open();
            }
            return function () {
              C.current == null || C.current();
            };
          },
          [t.inputType, E],
        ),
        s.jsx(r("WAWebFilePicker.react"), {
          ref: a,
          mimes: l,
          onChange: L,
          multiple: !0,
        })
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
