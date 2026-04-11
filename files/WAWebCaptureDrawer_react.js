__d(
  "WAWebCaptureDrawer.react",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WANullthrows",
    "WAShiftTimer",
    "WAWebAppTracker",
    "WAWebAttachMediaCollection",
    "WAWebBizBotTosUtils",
    "WAWebCameraCaptureRefreshDrawer.react",
    "WAWebCameraIcon.react",
    "WAWebCanvasUtils",
    "WAWebComposeBoxUtils",
    "WAWebDataUrlToBlob",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFileUtils",
    "WAWebGuidePopup.react",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorForChatLoadable.react",
    "WAWebMediaGatingUtils",
    "WAWebMediaOpaqueData",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebObjectFit.react",
    "WAWebReturnIcon.react",
    "WAWebRound.react",
    "WAWebSpinner.react",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WAWebVideo.react",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamMediaPickerStatsLogger",
    "asyncToGeneratorRuntime",
    "react",
    "useLazyRef",
    "useWAWebStableCallback",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = ["ref"],
      _,
      f = _ || (_ = o("react")),
      g = _,
      h = g.useEffect,
      y = g.useImperativeHandle,
      C = g.useRef,
      b = g.useState,
      v = "x18re5ia-B",
      S = {
        retakeBtn: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        videoContainer: {
          zIndex: "xhtitgo",
          width: "xh8yej3",
          height: "x5yr21d",
          $$css: !0,
        },
      },
      R = { surface: "camera" },
      L = "CAPTURE_MEDIA",
      E = {
        ANIMATING: "ANIMATING",
        LOADING: "LOADING",
        RECORDING: "RECORDING",
        SENDING: "SENDING",
      },
      k = function (t) {
        t.current != null &&
          (window.URL.revokeObjectURL(t.current), (t.current = null));
      };
    function I(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, p),
        l = i.chat,
        _ = i.disposeStream,
        g = i.onBack,
        v = i.onCaptured,
        I = i.onSend,
        T = s._(/*BTDS*/ "Take photo"),
        D = C(null),
        x = C(null),
        $ = C(null),
        P = C(null),
        N = b(void 0),
        M = N[0],
        w = N[1],
        A = b(void 0),
        F = A[0],
        O = A[1],
        B = b(E.ANIMATING),
        W = B[0],
        q = B[1],
        U = b(void 0),
        V = U[0],
        H = U[1],
        G = r("useWAWebStableCallback")(function (e, t) {
          if (!e) {
            W === E.ANIMATING && q(E.LOADING);
            return;
          }
          (x.current == null || x.current(),
            (x.current = t),
            q(E.LOADING),
            H(e),
            o("WAWebMediaCapture").isSrcObjectInVideoElement() ||
              (e ? (k($), ($.current = window.URL.createObjectURL(e))) : k($)));
        }),
        z = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(function (e) {
            var t = e.disposeStream,
              n = e.stream;
            G(n, t);
          });
        }),
        j = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(function (e) {
            var t = e.disposeStream,
              n = e.stream;
            (n && t && (x.current == null || x.current()),
              o("WAWebMediaCapture").isSrcObjectInVideoElement() || k($));
          });
        }),
        K = function () {
          l && l.setAttachMediaContents(null);
        },
        Q = r("useWAWebUnmountSignal")();
      (h(function () {
        return (
          z.current.onOrBefore(300, {
            stream: i.stream,
            disposeStream: i.disposeStream,
          }),
          function () {
            (z.current.cancel(),
              k($),
              _ == null || _(),
              D.current && D.current.logCancel(),
              K());
          }
        );
      }, []),
        h(function () {
          return (
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.Camera,
            ),
            function () {
              o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.Camera,
              );
            }
          );
        }, []));
      var X = function (t, n) {
        z.current.forceRunNow({ stream: t, disposeStream: n });
      };
      y(a, function () {
        return { loadNewStreamTimerUpdate: X, loadNewStream: G };
      });
      var Y = function () {
          var t = P.current;
          if (t != null) {
            var n = t.getVideoDimensions();
            if (n != null) {
              var a = document.createElement("canvas");
              ((a.height = n.height), (a.width = n.width));
              var i = a.getContext("2d");
              if (!i) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "CaptureDrawer:onCapture can not get 2d context",
                    ])),
                );
                return;
              }
              if (
                (i.translate(a.width, 0),
                i.scale(-1, 1),
                t.drawFrameToContext(i, 0, 0, n.width, n.height),
                v)
              )
                o("WAWebCanvasUtils")
                  .canvasToBlob(a)
                  .then(function (e) {
                    Q.aborted || v(e);
                  });
              else {
                j.current.onOrBefore(500, { stream: V, disposeStream: _ });
                var s = new (o(
                  "WAWebWamMediaPickerStatsLogger",
                ).MediaPickerStatsLogger)();
                (s.logAdd(
                  L,
                  "image",
                  o("WAWebWamEnumMediaPickerOriginType")
                    .MEDIA_PICKER_ORIGIN_TYPE.MENU_CAMERA_CAPTURE,
                ),
                  (s.chatRecipients =
                    l != null && l.groupMetadata
                      ? l.groupMetadata.participants.length
                      : 1),
                  (D.current = s));
                var u = a.toDataURL("image/jpeg"),
                  c = o("WAWebDataUrlToBlob").dataURLtoBlob(u);
                if (l) {
                  l.attachMediaContents ||
                    l.setAttachMediaContents(
                      new (r("WAWebAttachMediaCollection"))({
                        chatParticipantCount: l.getParticipantCount(),
                      }),
                    );
                  var d = r("WANullthrows")(l.attachMediaContents);
                  d.processAttachmentsForChat(
                    [
                      {
                        file: o("WAWebFileUtils").createFile([c], "", {
                          type: "image/jpeg",
                        }),
                      },
                    ],
                    void 0,
                    l,
                  );
                }
                (w(u), q(E.SENDING), H(void 0));
              }
            }
          }
        },
        J = function () {
          var e;
          q(E.RECORDING);
          var t = (e = P.current) == null ? void 0 : e.getVideoDimensions();
          t != null
            ? O({ width: t.width, height: t.height })
            : o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to get video dimensions in handleVideoLoaded",
                    ])),
                )
                .tags("non-sad")
                .sendLogs("capture-drawer-video-dimensions-missing");
        },
        Z = function () {
          (q(E.LOADING), K());
          var e = o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                .PHOTO_CAPTURE,
            }),
            t = e.asyncStream,
            n = e.disposeStream;
          ((x.current = n),
            t
              .then(function (e) {
                e &&
                  (o("WAWebMediaCapture").isSrcObjectInVideoElement() ||
                    ($.current = window.URL.createObjectURL(e)),
                  H(e));
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebMiscErrors").GetUserMedia.NotAllowedError,
                  function () {
                    var e;
                    (g(),
                      o("WAWebModalManager").ModalManager.open(
                        f.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
                    (g(),
                      o("WAWebModalManager").ModalManager.open(
                        f.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                          messaging: e.Messaging.CAMERA_MISSING,
                          type: e.GuidePopupType.GUIDE_NONE,
                          featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
                        }),
                      ));
                  },
                ),
              ));
        },
        ee = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              l && (yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(l));
              var n = (t == null ? void 0 : t.isViewOnce) === !0,
                a = (t == null ? void 0 : t.isWamoSub) === !0;
              if (!I)
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!",
                      ])),
                  )
                  .sendLogs("capture-drawer-no-onSend");
              else if (e.length === 0)
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!",
                      ])),
                  )
                  .sendLogs("capture-drawer-no-img");
              else {
                var i = r("WANullthrows")(e[0]),
                  s = i.groupMentions,
                  u = i.media,
                  m = i.mentionedJidList,
                  p = u.file;
                if (p instanceof Blob) {
                  var _, f;
                  (I({
                    getImg: r("WAWebMediaOpaqueData").createFromData(p, p.type),
                    caption: (_ = u.caption) != null ? _ : void 0,
                    isViewOnce: !!n,
                    mentionedJidList: m,
                    groupMentions: s,
                    isWamoSub: a,
                  }),
                    (f = D.current) == null || f.logSend({ isViewOnce: !!n }));
                }
                K();
              }
            },
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })();
      if (o("WAWebMediaGatingUtils").isCameraCaptureRefreshEnabled())
        return f.jsx(r("WAWebCameraCaptureRefreshDrawer.react"), {
          stream: V,
          state: W,
          videoRef: P,
          urlRef: $,
          videoSize: F,
          img: M,
          chat: l,
          theme: i.theme,
          drawerTitle: T,
          onBack: i.onBack,
          onCapture: Y,
          onVideoLoaded: J,
          onRetake: Z,
          onSendMedia: ee,
          questionType: i.questionType,
        });
      var te,
        ne,
        re,
        oe,
        ae = i.theme === "capture-cover" ? "cover" : "contain";
      switch (W) {
        case E.ANIMATING:
        case E.LOADING:
          if (
            ((oe = f.jsx(o("WAWebSpinner.react").Spinner, {
              stroke: 4,
              size: 50,
            })),
            W === E.ANIMATING)
          )
            break;
        case E.RECORDING: {
          var ie = {
              0: "xh8yej3 x5yr21d x1hc1fzr x19991ni x1d8287x x1j7uda5 xpk2tj9 x1bndym7",
              1: "xh8yej3 x5yr21d x19991ni x1d8287x x1j7uda5 xpk2tj9 x1bndym7 xg01cxk",
            }[!!(V && W === E.LOADING) << 0],
            le = V
              ? f.jsx(r("WAWebVideo.react"), {
                  autoPlay: !0,
                  ref: P,
                  onPlaying: J,
                  src: $.current != null ? $.current : void 0,
                  srcObject: $.current != null ? void 0 : V,
                })
              : null;
          ((re = V
            ? f.jsx(
                "div",
                {
                  className: "xh8yej3 x5yr21d",
                  children: f.jsx(r("WAWebObjectFit.react"), {
                    type: ae,
                    size: F,
                    children: f.jsx("div", {
                      className: ie,
                      "data-animage-capture-webcam": !0,
                      children: le,
                    }),
                  }),
                },
                "webcam",
              )
            : null),
            (te =
              W === E.RECORDING
                ? f.jsx(
                    "div",
                    {
                      className: "x10l6tqk x2rgi xbudbmw xbx705l xg01cxk",
                      children: f.jsx(o("WAWebRound.react").Round, {
                        large: !0,
                        label: T,
                        onClick: Y,
                        children: f.jsx(
                          o("WAWebCameraIcon.react").CameraIcon,
                          {},
                        ),
                      }),
                    },
                    "btn-capture",
                  )
                : null));
          break;
        }
        case E.SENDING: {
          if (
            ((re = f.jsx(r("WAWebObjectFit.react"), {
              type: ae,
              size: F,
              children: f.jsx("img", {
                alt: "",
                className: "x10l6tqk xh8yej3 x5yr21d xqcmdr3 xxkxylk",
                "data-animate-capture-snapshot": !0,
                src: M,
              }),
            })),
            l)
          ) {
            var se = r("WANullthrows")(l.attachMediaContents);
            re = f.jsx(
              o("WAWebMediaEditorForChatLoadable.react")
                .MediaEditorForChatLoadable,
              {
                theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE,
                chat: l,
                initCaption: null,
                mediaCollection: se,
                onDropText: r("WAWebNoop"),
                onSendMedia: ee,
                placeholderText: o(
                  "WAWebComposeBoxUtils",
                ).getComposeBoxPlaceholderText({
                  chat: l,
                  questionType: i.questionType,
                }),
              },
            );
          }
          ne = f.jsxs(r("WAWebUnstyledButton.react"), {
            xstyle: S.retakeBtn,
            onClick: Z,
            children: [
              f.jsx("div", {
                className: "x2lah0s xbelrpt x17t9dm2",
                children: f.jsx(o("WAWebReturnIcon.react").ReturnIcon, {
                  "aria-hidden": !0,
                }),
              }),
              s._(/*BTDS*/ "Retake"),
            ],
          });
          break;
        }
        default:
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "captureDrawer:render Unhandled video capture state ",
                "",
              ])),
            W,
          );
      }
      var ue = f.jsx("div", {
        className:
          "x1n2onr6 xhtitgo x9f619 x78zum5 x6s0dn4 xl56j7k x5sx7kw xexx8yu x1xnnf8n x10b6aqq x106a9eq x1m8r95a",
        children: f.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "pop_delay",
          children: te,
        }),
      });
      return f.jsxs(
        r("WAWebDrawer.react"),
        {
          theme: i.theme,
          tsNavigationData: R,
          children: [
            f.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: T,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.OFFSET,
              focusBackOrCancel: !0,
              onCancel: i.onBack,
              children: ne,
            }),
            f.jsxs(r("WAWebDrawerBody.react"), {
              overflow: "hidden",
              children: [
                f.jsxs("div", {
                  className:
                    "x1n2onr6 x78zum5 x1iyjqo2 x6s0dn4 xl56j7k xh8yej3",
                  children: [
                    oe,
                    f.jsx("div", {
                      className:
                        "x10l6tqk x13vifvy x1o0tod x78zum5 xdt5ytf x6s0dn4 xh8yej3 x5yr21d",
                      children: f.jsx(r("WAWebVelocityTransitionGroup"), {
                        transitionName: "capture",
                        xstyle: S.videoContainer,
                        children: re,
                      }),
                    }),
                  ],
                }),
                ue,
              ],
            }),
          ],
        },
        "attach-capture-modal",
      );
    }
    ((I.displayName = I.name + " [from " + i.id + "]"), (l.default = I));
  },
  226,
);
