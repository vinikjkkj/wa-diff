__d(
  "WAWebEditCaptureFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WAFilteredCatch",
    "WANullthrows",
    "WAWebCaptureDrawer.react",
    "WAWebEditImageDrawer.react",
    "WAWebGuidePopup.react",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMiscErrors",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = n("$InternalEnum").Mirrored(["Capture", "Guide", "EditImage"]);
    function f(e) {
      var t = p(null),
        n = t[0],
        a = t[1],
        i = m(null),
        l = m(),
        c = o("useWAWebFlow").useFlow(_.Capture),
        f = c[0],
        g = c[1],
        h = function () {
          l.current == null || l.current();
          var e = o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA,
              timeoutCallback: function () {
                return g.push(_.Guide, "modal");
              },
              timeoutLimit: 5e3,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                .PHOTO_CAPTURE,
            }),
            t = e.asyncStream,
            n = e.disposeStream;
          ((l.current = n),
            t
              .then(function (e) {
                (i.current || g.pop("modal"),
                  e && i.current && i.current.loadNewStream(e, n));
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebMiscErrors").GetUserMedia.NotAllowedError,
                  function () {
                    var e;
                    (g.end(),
                      o("WAWebModalManager").ModalManager.open(
                        u.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
                    (g.end(),
                      o("WAWebModalManager").ModalManager.open(
                        u.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                          messaging: e.Messaging.CAMERA_MISSING,
                          type: e.GuidePopupType.GUIDE_NONE,
                          featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
                        }),
                      ));
                  },
                ),
              ));
        };
      if (
        (d(function () {
          return (
            h(),
            function () {
              l.current == null || l.current();
            }
          );
        }, []),
        g.step == null)
      )
        return null;
      var y;
      switch (g.step) {
        case _.Capture: {
          var C = function (t) {
            (a(t), g.push(_.EditImage, "flow-transition-box-size-drawer-push"));
          };
          y = u.jsx(o("WAWebModal.react").Modal, {
            type: e.modalTheme || o("WAWebModal.react").ModalTheme.Box,
            ariaLabel: s._(/*BTDS*/ "Take photo"),
            testid: void 0,
            children: u.jsx(r("WAWebCaptureDrawer.react"), {
              ref: i,
              stream: void 0,
              disposeStream: void 0,
              caption: !1,
              theme: "capture-cover",
              onBack: function () {
                return g.end();
              },
              onSend: null,
              onCaptured: C,
              chat: void 0,
            }),
          });
          break;
        }
        case _.Guide:
          y = u.jsx(o("WAWebGuidePopup.react").GuidePopup, {
            messaging: o("WAWebGuidePopup.react").Messaging.CAMERA,
            type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_ALLOW,
            onConfirm: function () {
              return g.pop("modal");
            },
            featureSurface: o("WAWebGuidePopup.react").FeatureSurface
              .PHOTO_CAPTURE,
          });
          break;
        case _.EditImage: {
          var b = function () {
              (g.pop("flow-transition-box-size-drawer-pop"), h());
            },
            v = function (n, r) {
              (e.onFinished(n, r), g.end());
            };
          y = u.jsx(o("WAWebModal.react").Modal, {
            type: e.modalTheme || o("WAWebModal.react").ModalTheme.Box,
            children: u.jsx(o("WAWebEditImageDrawer.react").EditImageDrawer, {
              onRetake: b,
              retryText: o("WAWebEditImageDrawer.react").RETRY_OPTIONS.RETAKE,
              onFinished: v,
              onCancel: function () {
                return g.end();
              },
              img: r("WANullthrows")(n),
              cropShape: e.editCropShape,
            }),
          });
        }
      }
      return u.jsx(f, { flow: g, children: y });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
