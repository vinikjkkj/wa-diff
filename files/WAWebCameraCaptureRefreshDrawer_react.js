__d(
  "WAWebCameraCaptureRefreshDrawer.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebCameraIcon.react",
    "WAWebComposeBoxUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorForChatLoadable.react",
    "WAWebNoop",
    "WAWebObjectFit.react",
    "WAWebReturnIcon.react",
    "WAWebRound.react",
    "WAWebSpinner.react",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WAWebVideo.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = "x18re5ia-B",
      m = {
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
      p = { surface: "camera" };
    function _(t) {
      var n = t.chat,
        a = t.drawerTitle,
        i = t.img,
        l = t.onCapture,
        u = t.onRetake,
        d = t.onSendMedia,
        _ = t.onVideoLoaded,
        f = t.questionType,
        g = t.state,
        h = t.stream,
        y = t.urlRef,
        C = t.videoRef,
        b = t.videoSize,
        v,
        S,
        R,
        L,
        E = t.theme === "capture-cover" ? "cover" : "contain";
      switch (g) {
        case "ANIMATING":
        case "LOADING":
          if (
            ((L = c.jsx(o("WAWebSpinner.react").Spinner, {
              stroke: 4,
              size: 50,
            })),
            g === "ANIMATING")
          )
            break;
        case "RECORDING": {
          var k = {
              0: "xh8yej3 x5yr21d x1hc1fzr x19991ni x1d8287x x1j7uda5 xpk2tj9 x1bndym7",
              1: "xh8yej3 x5yr21d x19991ni x1d8287x x1j7uda5 xpk2tj9 x1bndym7 xg01cxk",
            }[!!(h && g === "LOADING") << 0],
            I = h
              ? c.jsx(r("WAWebVideo.react"), {
                  autoPlay: !0,
                  ref: C,
                  onPlaying: _,
                  src: y.current != null ? y.current : void 0,
                  srcObject: y.current != null ? void 0 : h,
                })
              : null;
          ((R = h
            ? c.jsx(
                "div",
                {
                  className: "xh8yej3 x5yr21d",
                  children: c.jsx(r("WAWebObjectFit.react"), {
                    type: E,
                    size: b,
                    children: c.jsx("div", {
                      className: k,
                      "data-animage-capture-webcam": !0,
                      children: I,
                    }),
                  }),
                },
                "webcam",
              )
            : null),
            (v =
              g === "RECORDING"
                ? c.jsx(
                    "div",
                    {
                      className: "x10l6tqk x2rgi xbudbmw xbx705l xg01cxk",
                      children: c.jsx(o("WAWebRound.react").Round, {
                        large: !0,
                        label: a,
                        onClick: l,
                        children: c.jsx(
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
        case "SENDING": {
          if (
            ((R = c.jsx(r("WAWebObjectFit.react"), {
              type: E,
              size: b,
              children: c.jsx("img", {
                alt: "",
                className: "x10l6tqk xh8yej3 x5yr21d xqcmdr3 xxkxylk",
                "data-animate-capture-snapshot": !0,
                src: i,
              }),
            })),
            n)
          ) {
            var T = r("WANullthrows")(n.attachMediaContents);
            R = c.jsx(
              o("WAWebMediaEditorForChatLoadable.react")
                .MediaEditorForChatLoadable,
              {
                theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE,
                chat: n,
                initCaption: null,
                mediaCollection: T,
                onDropText: r("WAWebNoop"),
                onSendMedia: d,
                placeholderText: o(
                  "WAWebComposeBoxUtils",
                ).getComposeBoxPlaceholderText({ chat: n, questionType: f }),
              },
            );
          }
          S = c.jsxs(r("WAWebUnstyledButton.react"), {
            xstyle: m.retakeBtn,
            onClick: u,
            children: [
              c.jsx("div", {
                className: "x2lah0s xbelrpt x17t9dm2",
                children: c.jsx(o("WAWebReturnIcon.react").ReturnIcon, {
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
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "captureDrawer:render Unhandled video capture state ",
                "",
              ])),
            g,
          );
      }
      var D = c.jsx("div", {
        className:
          "x1n2onr6 xhtitgo x9f619 x78zum5 x6s0dn4 xl56j7k x5sx7kw xexx8yu x1xnnf8n x10b6aqq x106a9eq x1m8r95a",
        children: c.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "pop_delay",
          children: v,
        }),
      });
      return c.jsxs(
        r("WAWebDrawer.react"),
        {
          theme: t.theme,
          tsNavigationData: p,
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: a,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.OFFSET,
              focusBackOrCancel: !0,
              onCancel: t.onBack,
              children: S,
            }),
            c.jsxs(r("WAWebDrawerBody.react"), {
              overflow: "hidden",
              children: [
                c.jsxs("div", {
                  className:
                    "x1n2onr6 x78zum5 x1iyjqo2 x6s0dn4 xl56j7k xh8yej3",
                  children: [
                    L,
                    c.jsx("div", {
                      className:
                        "x10l6tqk x13vifvy x1o0tod x78zum5 xdt5ytf x6s0dn4 xh8yej3 x5yr21d",
                      children: c.jsx(r("WAWebVelocityTransitionGroup"), {
                        transitionName: "capture",
                        xstyle: m.videoContainer,
                        children: R,
                      }),
                    }),
                  ],
                }),
                D,
              ],
            }),
          ],
        },
        "attach-capture-modal",
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
