__d(
  "WAWebPaymentReceiptPicker",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebAttachMenuFilePicker",
    "WAWebCaptureDrawer.react",
    "WAWebGetUserMediaErrors",
    "WAWebGuidePopup.react",
    "WAWebKeyboardTabUtils",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebModalManager",
    "WAWebNoop",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d(e) {
      o("WAWebAttachMenuFilePicker").createFilePicker(
        {
          accept: o("WAWebAttachMenuFilePicker").FilePickerMimeType.IMAGE,
          multiple: !1,
          transformAttachment: function (t) {
            return { file: t };
          },
        },
        function (t) {
          var r = t[0];
          r != null &&
            (s || (s = n("Promise"))).resolve(r).then(function (t) {
              var n = t.file;
              return e(n);
            });
        },
        r("WAWebNoop"),
      );
    }
    function m(t, n) {
      var a = o("WAWebMediaCapture").start({
          type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .CAMERA,
          featureSurface: o("WAWebGuidePopup.react").FeatureSurface
            .PHOTO_CAPTURE,
        }),
        i = a.asyncStream,
        l = a.disposeStream,
        s = function () {
          (n == null || n.removeEventListener("abort", s),
            o("WAWebModalManager").ModalManager.closeMedia(),
            l());
        };
      r("WAPromiseRaceAbort")(i, n)
        .then(function (e) {
          e != null &&
            (o("WAWebModalManager").ModalManager.openMedia(
              c.jsx("div", {
                className:
                  "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 xbpklzw",
                "data-testid": "payment-details-receipt-camera",
                children: c.jsx(r("WAWebCaptureDrawer.react"), {
                  chat: void 0,
                  disposeStream: l,
                  onBack: s,
                  isMirrored: !1,
                  onCaptured: function (n) {
                    (s(), t(n));
                  },
                  stream: e,
                  theme: "capture-cover",
                }),
              }),
              {
                transition: "status-modal",
                blockClose: !0,
                focusType: {
                  type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                },
              },
            ),
            n == null || n.addEventListener("abort", s, { once: !0 }));
        })
        .catch(function (t) {
          if ((l(), !(t instanceof o("WAAbortError").AbortError))) {
            if (t instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
              var n;
              o("WAWebModalManager").ModalManager.open(
                c.jsx((n = o("WAWebGuidePopup.react")).GuidePopup, {
                  featureSurface: n.FeatureSurface.PHOTO_CAPTURE,
                  messaging: n.Messaging.CAMERA_FAIL,
                  type: n.GuidePopupType.GUIDE_UNBLOCK,
                }),
              );
              return;
            }
            if (t instanceof o("WAWebGetUserMediaErrors").GetUserMediaError) {
              var n;
              o("WAWebModalManager").ModalManager.open(
                c.jsx((n = o("WAWebGuidePopup.react")).GuidePopup, {
                  featureSurface: n.FeatureSurface.PHOTO_CAPTURE,
                  messaging: n.Messaging.CAMERA_MISSING,
                  type: n.GuidePopupType.GUIDE_NONE,
                }),
              );
              return;
            }
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not open the receipt camera",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("br-payment-state-receipt-camera-failed");
          }
        });
    }
    ((l.choosePaymentReceiptPhoto = d), (l.takePaymentReceiptPhoto = m));
  },
  98,
);
