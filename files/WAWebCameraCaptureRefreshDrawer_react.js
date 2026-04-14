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
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorForChatLoadable.react",
    "WAWebNoop",
    "WAWebObjectFit.react",
    "WAWebRound.react",
    "WAWebSpinner.react",
    "WAWebVelocityTransitionGroup",
    "WAWebVideo.react",
    "WDSIconIcClose.react",
    "WDSIconIcDownload.react",
    "WDSMenuBarItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useState;
    function _() {
      var e = p(null),
        t = e[0],
        n = e[1],
        r = m(function (e) {
          n(e);
        }, []);
      return [t, r];
    }
    var f = "x18re5ia-B",
      g = {
        videoContainer: {
          zIndex: "xhtitgo",
          width: "xh8yej3",
          height: "x5yr21d",
          $$css: !0,
        },
      },
      h = { surface: "camera" };
    function y(e) {
      var t = e.onClose,
        n = e.onDownload,
        o = e.toolbarRef;
      return c.jsxs("header", {
        className:
          "x9f619 x78zum5 x1okw0bk x6s0dn4 x1qughib x1peatla x1280gxy x1iw51ew xde1mab",
        children: [
          c.jsx(r("WDSMenuBarItem.react"), {
            icon: r("WDSIconIcClose.react"),
            testid: void 0,
            onClick: t,
            title: s._(/*BTDS*/ "Close"),
          }),
          o != null
            ? c.jsx("div", { ref: o, className: "x78zum5 xl56j7k x1iyjqo2" })
            : null,
          c.jsx(r("WDSMenuBarItem.react"), {
            icon: r("WDSIconIcDownload.react"),
            testid: void 0,
            onClick: n,
            title: s._(/*BTDS*/ "Download"),
          }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(t) {
      var n = t.chat,
        a = t.drawerTitle,
        i = t.img,
        l = t.onCapture,
        s = t.onSendMedia,
        u = t.onVideoLoaded,
        d = t.questionType,
        m = t.state,
        p = t.stream,
        f = t.urlRef,
        C = t.videoRef,
        b = t.videoSize,
        v = _(),
        S = v[0],
        R = v[1],
        L,
        E,
        k,
        I = t.theme === "capture-cover" ? "cover" : "contain";
      switch (m) {
        case "ANIMATING":
        case "LOADING":
          if (
            ((k = c.jsx(o("WAWebSpinner.react").Spinner, {
              stroke: 4,
              size: 50,
            })),
            m === "ANIMATING")
          )
            break;
        case "RECORDING": {
          var T = {
              0: "xh8yej3 x5yr21d x1hc1fzr x19991ni x1d8287x x1j7uda5 xpk2tj9 x1bndym7",
              1: "xh8yej3 x5yr21d x19991ni x1d8287x x1j7uda5 xpk2tj9 x1bndym7 xg01cxk",
            }[!!(p && m === "LOADING") << 0],
            D = p
              ? c.jsx(r("WAWebVideo.react"), {
                  autoPlay: !0,
                  ref: C,
                  onPlaying: u,
                  src: f.current != null ? f.current : void 0,
                  srcObject: f.current != null ? void 0 : p,
                })
              : null;
          ((E = p
            ? c.jsx(
                "div",
                {
                  className: "xh8yej3 x5yr21d",
                  children: c.jsx(r("WAWebObjectFit.react"), {
                    type: I,
                    size: b,
                    children: c.jsx("div", {
                      className: T,
                      "data-animage-capture-webcam": !0,
                      children: D,
                    }),
                  }),
                },
                "webcam",
              )
            : null),
            (L =
              m === "RECORDING"
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
            ((E = c.jsx(r("WAWebObjectFit.react"), {
              type: I,
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
            var x = r("WANullthrows")(n.attachMediaContents);
            E = c.jsx(
              o("WAWebMediaEditorForChatLoadable.react")
                .MediaEditorForChatLoadable,
              {
                theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE,
                chat: n,
                initCaption: null,
                mediaCollection: x,
                onDropText: r("WAWebNoop"),
                onSendMedia: s,
                placeholderText: o(
                  "WAWebComposeBoxUtils",
                ).getComposeBoxPlaceholderText({ chat: n, questionType: d }),
                toolbarContainer: S,
              },
            );
          }
          break;
        }
        default:
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "captureDrawer:render Unhandled video capture state ",
                "",
              ])),
            m,
          );
      }
      var $ = c.jsx("div", {
        className:
          "x1n2onr6 xhtitgo x9f619 x78zum5 x6s0dn4 xl56j7k x5sx7kw xexx8yu x1xnnf8n x10b6aqq x106a9eq x1m8r95a",
        children: c.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "pop_delay",
          children: L,
        }),
      });
      return c.jsxs(
        r("WAWebDrawer.react"),
        {
          theme: t.theme,
          tsNavigationData: h,
          children: [
            c.jsx(y, {
              onClose: t.onBack,
              onDownload: r("WAWebNoop"),
              toolbarRef: m === "SENDING" ? R : void 0,
            }),
            c.jsxs(r("WAWebDrawerBody.react"), {
              overflow: "hidden",
              children: [
                c.jsxs("div", {
                  className:
                    "x1n2onr6 x78zum5 x1iyjqo2 x6s0dn4 xl56j7k xh8yej3",
                  children: [
                    k,
                    c.jsx("div", {
                      className:
                        "x10l6tqk x13vifvy x1o0tod x78zum5 xdt5ytf x6s0dn4 xh8yej3 x5yr21d",
                      children: c.jsx(r("WAWebVelocityTransitionGroup"), {
                        transitionName: "capture",
                        xstyle: g.videoContainer,
                        children: E,
                      }),
                    }),
                  ],
                }),
                $,
              ],
            }),
          ],
        },
        "attach-capture-modal",
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
