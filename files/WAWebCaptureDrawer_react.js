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
    "WAWebCaptureTypes",
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
      E = function (t) {
        t.current != null &&
          (window.URL.revokeObjectURL(t.current), (t.current = null));
      };
    function k(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, p),
        l = i.chat,
        _ = i.disposeStream,
        g = i.onBack,
        v = i.onCaptured,
        k = i.onSend,
        I = s._(/*BTDS*/ "Take photo"),
        T = C(null),
        D = C(null),
        x = C(null),
        $ = C(null),
        P = b(void 0),
        N = P[0],
        M = P[1],
        w = b(void 0),
        A = w[0],
        F = w[1],
        O = b(o("WAWebCaptureTypes").CaptureState.ANIMATING),
        B = O[0],
        W = O[1],
        q = b(void 0),
        U = q[0],
        V = q[1],
        H = r("useWAWebStableCallback")(function (e, t) {
          if (!e) {
            B === o("WAWebCaptureTypes").CaptureState.ANIMATING &&
              W(o("WAWebCaptureTypes").CaptureState.LOADING);
            return;
          }
          (D.current == null || D.current(),
            (D.current = t),
            W(o("WAWebCaptureTypes").CaptureState.LOADING),
            V(e),
            o("WAWebMediaCapture").isSrcObjectInVideoElement() ||
              (e ? (E(x), (x.current = window.URL.createObjectURL(e))) : E(x)));
        }),
        G = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(function (e) {
            var t = e.disposeStream,
              n = e.stream;
            H(n, t);
          });
        }),
        z = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(function (e) {
            var t = e.disposeStream,
              n = e.stream;
            (n && t && (D.current == null || D.current()),
              o("WAWebMediaCapture").isSrcObjectInVideoElement() || E(x));
          });
        }),
        j = function () {
          l && l.setAttachMediaContents(null);
        },
        K = r("useWAWebUnmountSignal")();
      (h(function () {
        return (
          G.current.onOrBefore(300, {
            stream: i.stream,
            disposeStream: i.disposeStream,
          }),
          function () {
            (G.current.cancel(),
              E(x),
              _ == null || _(),
              T.current && T.current.logCancel(),
              j());
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
      var Q = function (t, n) {
        G.current.forceRunNow({ stream: t, disposeStream: n });
      };
      y(a, function () {
        return { loadNewStreamTimerUpdate: Q, loadNewStream: H };
      });
      var X = function () {
          var t = $.current;
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
                    K.aborted || v(e);
                  });
              else {
                z.current.onOrBefore(500, { stream: U, disposeStream: _ });
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
                  (T.current = s));
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
                (M(u),
                  W(o("WAWebCaptureTypes").CaptureState.SENDING),
                  V(void 0));
              }
            }
          }
        },
        Y = function () {
          var e;
          W(o("WAWebCaptureTypes").CaptureState.RECORDING);
          var t = (e = $.current) == null ? void 0 : e.getVideoDimensions();
          t != null
            ? F({ width: t.width, height: t.height })
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
        J = function () {
          (W(o("WAWebCaptureTypes").CaptureState.LOADING), j());
          var e = o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                .PHOTO_CAPTURE,
            }),
            t = e.asyncStream,
            n = e.disposeStream;
          ((D.current = n),
            t
              .then(function (e) {
                e &&
                  (o("WAWebMediaCapture").isSrcObjectInVideoElement() ||
                    (x.current = window.URL.createObjectURL(e)),
                  V(e));
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
        Z = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              l && (yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(l));
              var n = (t == null ? void 0 : t.isViewOnce) === !0,
                a = (t == null ? void 0 : t.isWamoSub) === !0;
              if (!k)
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
                  (k({
                    getImg: r("WAWebMediaOpaqueData").createFromData(p, p.type),
                    caption: (_ = u.caption) != null ? _ : void 0,
                    isViewOnce: !!n,
                    mentionedJidList: m,
                    groupMentions: s,
                    isWamoSub: a,
                  }),
                    (f = T.current) == null || f.logSend({ isViewOnce: !!n }));
                }
                j();
              }
            },
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })();
      if (o("WAWebMediaGatingUtils").isCameraCaptureRefreshEnabled())
        return f.jsx(r("WAWebCameraCaptureRefreshDrawer.react"), {
          stream: U,
          state: B,
          videoRef: $,
          urlRef: x,
          videoSize: A,
          img: N,
          chat: l,
          theme: i.theme,
          drawerTitle: I,
          onBack: i.onBack,
          onCapture: X,
          onVideoLoaded: Y,
          onRetake: J,
          onSendMedia: Z,
          questionType: i.questionType,
        });
      var ee,
        te,
        ne,
        re,
        oe = i.theme === "capture-cover" ? "cover" : "contain";
      switch (B) {
        case o("WAWebCaptureTypes").CaptureState.ANIMATING:
        case o("WAWebCaptureTypes").CaptureState.LOADING:
          if (
            ((re = f.jsx(o("WAWebSpinner.react").Spinner, {
              stroke: 4,
              size: 50,
            })),
            B === o("WAWebCaptureTypes").CaptureState.ANIMATING)
          )
            break;
        case o("WAWebCaptureTypes").CaptureState.RECORDING: {
          var ae = {
              0: "xh8yej3 x5yr21d x1hc1fzr x19991ni x1d8287x x1j7uda5 xpk2tj9 x1bndym7",
              1: "xh8yej3 x5yr21d x19991ni x1d8287x x1j7uda5 xpk2tj9 x1bndym7 xg01cxk",
            }[!!(U && B === o("WAWebCaptureTypes").CaptureState.LOADING) << 0],
            ie = U
              ? f.jsx(r("WAWebVideo.react"), {
                  autoPlay: !0,
                  ref: $,
                  onPlaying: Y,
                  src: x.current != null ? x.current : void 0,
                  srcObject: x.current != null ? void 0 : U,
                })
              : null;
          ((ne = U
            ? f.jsx(
                "div",
                {
                  className: "xh8yej3 x5yr21d",
                  children: f.jsx(r("WAWebObjectFit.react"), {
                    type: oe,
                    size: A,
                    children: f.jsx("div", {
                      className: ae,
                      "data-animage-capture-webcam": !0,
                      children: ie,
                    }),
                  }),
                },
                "webcam",
              )
            : null),
            (ee =
              B === o("WAWebCaptureTypes").CaptureState.RECORDING
                ? f.jsx(
                    "div",
                    {
                      className: "x10l6tqk x2rgi xbudbmw xbx705l xg01cxk",
                      children: f.jsx(o("WAWebRound.react").Round, {
                        large: !0,
                        label: I,
                        onClick: X,
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
        case o("WAWebCaptureTypes").CaptureState.SENDING: {
          if (
            ((ne = f.jsx(r("WAWebObjectFit.react"), {
              type: oe,
              size: A,
              children: f.jsx("img", {
                alt: "",
                className: "x10l6tqk xh8yej3 x5yr21d xqcmdr3 xxkxylk",
                "data-animate-capture-snapshot": !0,
                src: N,
              }),
            })),
            l)
          ) {
            var le = r("WANullthrows")(l.attachMediaContents);
            ne = f.jsx(
              o("WAWebMediaEditorForChatLoadable.react")
                .MediaEditorForChatLoadable,
              {
                theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE,
                chat: l,
                initCaption: null,
                mediaCollection: le,
                onDropText: r("WAWebNoop"),
                onSendMedia: Z,
                placeholderText: o(
                  "WAWebComposeBoxUtils",
                ).getComposeBoxPlaceholderText({
                  chat: l,
                  questionType: i.questionType,
                }),
              },
            );
          }
          te = f.jsxs(r("WAWebUnstyledButton.react"), {
            xstyle: S.retakeBtn,
            onClick: J,
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
            B,
          );
      }
      var se = f.jsx("div", {
        className:
          "x1n2onr6 xhtitgo x9f619 x78zum5 x6s0dn4 xl56j7k x5sx7kw xexx8yu x1xnnf8n x10b6aqq x106a9eq x1m8r95a",
        children: f.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "pop_delay",
          children: ee,
        }),
      });
      return f.jsxs(
        r("WAWebDrawer.react"),
        {
          theme: i.theme,
          tsNavigationData: R,
          children: [
            f.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: I,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.OFFSET,
              focusBackOrCancel: !0,
              onCancel: i.onBack,
              children: te,
            }),
            f.jsxs(r("WAWebDrawerBody.react"), {
              overflow: "hidden",
              children: [
                f.jsxs("div", {
                  className:
                    "x1n2onr6 x78zum5 x1iyjqo2 x6s0dn4 xl56j7k xh8yej3",
                  children: [
                    re,
                    f.jsx("div", {
                      className:
                        "x10l6tqk x13vifvy x1o0tod x78zum5 xdt5ytf x6s0dn4 xh8yej3 x5yr21d",
                      children: f.jsx(r("WAWebVelocityTransitionGroup"), {
                        transitionName: "capture",
                        xstyle: S.videoContainer,
                        children: ne,
                      }),
                    }),
                  ],
                }),
                se,
              ],
            }),
          ],
        },
        "attach-capture-modal",
      );
    }
    ((k.displayName = k.name + " [from " + i.id + "]"), (l.default = k));
  },
  226,
);
