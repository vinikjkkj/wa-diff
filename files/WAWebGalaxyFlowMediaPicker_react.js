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
    "react-compiler-runtime",
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
      var t,
        n = o("react-compiler-runtime").c(31),
        a = e.mediaPayload,
        i = r("useWAWebUIM")(),
        l = p(),
        u;
      n[0] !== a ? ((u = g(a)), (n[0] = a), (n[1] = u)) : (u = n[1]);
      var c;
      n[2] !== a ? ((c = h(a)), (n[2] = a), (n[3] = c)) : (c = n[3]);
      var m;
      n[4] !== c ? ((m = new Set([c])), (n[4] = c), (n[5] = m)) : (m = n[5]);
      var y = (t = a.maxItems) != null ? t : _,
        R;
      n[6] !== u || n[7] !== m || n[8] !== y
        ? ((R = [u, m, y]), (n[6] = u), (n[7] = m), (n[8] = y), (n[9] = R))
        : (R = n[9]);
      var L = R,
        E = L[0],
        k = L[1],
        I = L[2],
        T = p(null),
        D = r("useWAWebUnmountSignal")(),
        x =
          a.inputType !==
          o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.CAMERA,
        $;
      n[10] !== x || n[11] !== I || n[12] !== E || n[13] !== a || n[14] !== k
        ? (($ = function (t) {
            var e = t.attachments,
              n = new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: 1,
              }),
              i = function () {
                n.processAttachments(e, void 0, k, I);
              },
              l = s.jsx(r("WAWebGalaxyFlowMediaView.react"), {
                allowMultipleMedia: x,
                onRender: i,
                mediaPayload: a,
                mediaCollection: n,
                suportedMediaTypes: k,
                mediaMimeTypes: E,
                maxItems: I,
                maxFileSizeBytes: a.maxFileSizeBytes,
              });
            o("WAWebModalManager").ModalManager.openMedia(l, {
              transition: "status-modal",
              blockClose: !0,
              focusType: {
                type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            });
          }),
          (n[10] = x),
          (n[11] = I),
          (n[12] = E),
          (n[13] = a),
          (n[14] = k),
          (n[15] = $))
        : ($ = n[15]);
      var P = $,
        N;
      n[16] !== i
        ? ((N = function () {
            i == null || i.requestDismiss();
          }),
          (n[16] = i),
          (n[17] = N))
        : (N = n[17]);
      var M = N,
        w;
      n[18] !== M || n[19] !== P
        ? ((w = function (t) {
            var e;
            if (!t) {
              M();
              return;
            }
            t.stopPropagation();
            var n = Array.from((e = t.target.files) != null ? e : []);
            (M(), n.length && P({ attachments: n.map(S) }));
          }),
          (n[18] = M),
          (n[19] = P),
          (n[20] = w))
        : (w = n[20]);
      var A = w,
        F;
      n[21] !== P || n[22] !== D
        ? ((F = function () {
            var e = o("WAWebMediaCapture").start({
                type: o("WAWebMediaCaptureStreamType")
                  .WAWebMediaCaptureStreamType.CAMERA,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                  .PHOTO_CAPTURE,
              }),
              t = e.asyncStream,
              n = e.disposeStream;
            ((T.current = n),
              r("WAPromiseRaceAbort")(t, D)
                .then(function (e) {
                  if (e) {
                    var t = s.jsx("div", {
                      className:
                        "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x1y61xfy",
                      children: s.jsx(r("WAWebCaptureDrawer.react"), {
                        onBack: v,
                        chat: void 0,
                        theme: "capture-cover",
                        stream: e,
                        disposeStream: T.current,
                        caption: !1,
                        onCaptured: function (t) {
                          var e = o("WAWebFileUtils").createFile([t], "", {
                            type: "image/jpeg",
                          });
                          e && P({ attachments: [{ file: e }] });
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
                    b,
                  ),
                )
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebMiscErrors").GetUserMedia.GetUserMediaError,
                    C,
                  ),
                ));
          }),
          (n[21] = P),
          (n[22] = D),
          (n[23] = F))
        : (F = n[23]);
      var O = F,
        B,
        W;
      (n[24] !== a.inputType || n[25] !== O
        ? ((W = function () {
            if (a.inputType != null && f.includes(a.inputType)) O();
            else {
              var e;
              (e = l.current) == null || e.open();
            }
            return function () {
              T.current == null || T.current();
            };
          }),
          (B = [a.inputType, O]),
          (n[24] = a.inputType),
          (n[25] = O),
          (n[26] = B),
          (n[27] = W))
        : ((B = n[26]), (W = n[27])),
        d(W, B));
      var q;
      return (
        n[28] !== A || n[29] !== E
          ? ((q = s.jsx(r("WAWebFilePicker.react"), {
              ref: l,
              mimes: E,
              onChange: A,
              multiple: !0,
            })),
            (n[28] = A),
            (n[29] = E),
            (n[30] = q))
          : (q = n[30]),
        q
      );
    }
    function C() {
      var e;
      o("WAWebModalManager").ModalManager.open(
        s.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
          messaging: e.Messaging.CAMERA_MISSING,
          type: e.GuidePopupType.GUIDE_NONE,
          featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
        }),
      );
    }
    function b() {
      var e;
      o("WAWebModalManager").ModalManager.open(
        s.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
          messaging: e.Messaging.CAMERA_FAIL,
          type: e.GuidePopupType.GUIDE_UNBLOCK,
          featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
        }),
      );
    }
    function v() {
      o("WAWebModalManager").ModalManager.closeMedia();
    }
    function S(e) {
      return { file: e };
    }
    l.default = y;
  },
  98,
);
