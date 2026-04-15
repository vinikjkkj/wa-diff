__d(
  "WAWebCameraCaptureRefreshDrawer.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebComposeBoxUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebFlex.react",
    "WAWebIcPhotoCameraIcon.react",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorForChatLoadable.react",
    "WAWebNoop",
    "WAWebObjectFit.react",
    "WAWebSpinner.react",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WAWebVideo.react",
    "WDSIconIcClose.react",
    "WDSIconIcDownload.react",
    "WDSMenuBarItem.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState;
    function p() {
      var e = o("react-compiler-runtime").c(3),
        t = m(null),
        n = t[0],
        r = t[1],
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function (t) {
            r(t);
          }),
          (e[0] = a))
        : (a = e[0]);
      var i = a,
        l;
      return (
        e[1] !== n ? ((l = [n, i]), (e[1] = n), (e[2] = l)) : (l = e[2]),
        l
      );
    }
    var _ = "x18re5ia-B",
      f = {
        modeBtn: {
          width: "xpmtt7c",
          height: "x1vqgdyp",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          cursor: "x1ypdohk",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          backgroundColor: "xjbqb8w",
          $$css: !0,
        },
        modeBtnActive: { backgroundColor: "x4wrhlh", $$css: !0 },
        modeBtnHover: { ":hover_backgroundColor": "x1ubxc9n", $$css: !0 },
        captureBtn: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x15yg21f",
          height: "xnnlda6",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundColor: "xfn3atn",
          color: "x17t9dm2",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        container: {
          position: "x1n2onr6",
          width: "xh8yej3",
          height: "x5yr21d",
          $$css: !0,
        },
        body: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          width: "xh8yej3",
          height: "x5yr21d",
          $$css: !0,
        },
        videoContainer: {
          zIndex: "xhtitgo",
          width: "xh8yej3",
          height: "x5yr21d",
          $$css: !0,
        },
        bodyContent: {
          width: "xh8yej3",
          height: "x5yr21d",
          paddingTop: "xnk5j39",
          paddingBottom: "xn4wywj",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          boxSizing: "x9f619",
          $$css: !0,
        },
        cameraContainer: { position: "x1n2onr6", $$css: !0 },
        feedWrapper: { paddingBottom: "xgb8hzy", $$css: !0 },
        cameraArea: {
          height: "x5yr21d",
          maxWidth: "x193iq5w",
          alignSelf: "xamitd3",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
        cameraAreaBorder: {
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        cameraAreaSpacing: { marginBottom: "xcytdqz", $$css: !0 },
      },
      g = { surface: "camera" };
    function h(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.onClose,
        a = e.onDownload,
        i = e.toolbarRef,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = {
            className:
              "x9f619 x78zum5 x1okw0bk x6s0dn4 x1qughib x1peatla x1280gxy x1iw51ew xde1mab",
          }),
          (t[0] = l))
        : (l = t[0]);
      var c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Close")), (t[1] = c))
        : (c = t[1]);
      var d;
      t[2] !== n
        ? ((d = u.jsx(r("WDSMenuBarItem.react"), {
            icon: r("WDSIconIcClose.react"),
            testid: void 0,
            onClick: n,
            title: c,
          })),
          (t[2] = n),
          (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] !== i
        ? ((m =
            i != null
              ? u.jsx("div", { ref: i, className: "x78zum5 xl56j7k x1iyjqo2" })
              : null),
          (t[4] = i),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Download")), (t[6] = p))
        : (p = t[6]);
      var _;
      t[7] !== a
        ? ((_ = u.jsx(r("WDSMenuBarItem.react"), {
            icon: r("WDSIconIcDownload.react"),
            testid: void 0,
            onClick: a,
            title: p,
          })),
          (t[7] = a),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      return (
        t[9] !== d || t[10] !== m || t[11] !== _
          ? ((f = u.jsxs(
              "header",
              babelHelpers.extends({}, l, { children: [d, m, _] }),
            )),
            (t[9] = d),
            (t[10] = m),
            (t[11] = _),
            (t[12] = f))
          : (f = t[12]),
        f
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.isActive,
        a = e.label,
        i = n ? f.modeBtnActive : f.modeBtnHover,
        l;
      t[0] !== i ? ((l = [f.modeBtn, i]), (t[0] = i), (t[1] = l)) : (l = t[1]);
      var s = n ? "contentDefault" : "contentActionDefault",
        c;
      t[2] !== a || t[3] !== s
        ? ((c = u.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: s,
            children: a,
          })),
          (t[2] = a),
          (t[3] = s),
          (t[4] = c))
        : (c = t[4]);
      var d;
      return (
        t[5] !== l || t[6] !== c
          ? ((d = u.jsx(r("WAWebUnstyledButton.react"), {
              xstyle: l,
              children: c,
            })),
            (t[5] = l),
            (t[6] = c),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    function C(e) {
      var t = e.chat,
        n = e.drawerTitle,
        a = e.img,
        i = e.onCapture,
        l = e.onSendMedia,
        c = e.onVideoLoaded,
        d = e.questionType,
        m = e.state,
        _ = e.stream,
        C = e.urlRef,
        b = e.videoRef,
        v = e.videoSize,
        S = p(),
        R = S[0],
        L = S[1],
        E = null,
        k = null,
        I = "cover";
      if (m === "LOADING" || m === "ANIMATING" || m === "RECORDING") {
        var T = {
            0: "xh8yej3 x5yr21d x1hc1fzr x19991ni x1d8287x x1j7uda5 xpk2tj9 x1bndym7",
            1: "xh8yej3 x5yr21d x19991ni x1d8287x x1j7uda5 xpk2tj9 x1bndym7 xg01cxk",
          }[!!(_ && m === "LOADING") << 0],
          D = _
            ? u.jsx(r("WAWebVideo.react"), {
                autoPlay: !0,
                ref: b,
                onPlaying: c,
                src: C.current != null ? C.current : void 0,
                srcObject: C.current != null ? void 0 : _,
              })
            : null;
        ((k = _
          ? u.jsx(
              "div",
              {
                className: "xh8yej3 x5yr21d",
                children: u.jsx(r("WAWebObjectFit.react"), {
                  type: I,
                  size: v,
                  children: u.jsx("div", {
                    className: T,
                    "data-animage-capture-webcam": !0,
                    children: D,
                  }),
                }),
              },
              "webcam",
            )
          : null),
          (E =
            m === "RECORDING"
              ? u.jsx(
                  "div",
                  {
                    className: "x10l6tqk x1ey2m1c xbudbmw xuuh30 xzkaem6",
                    children: u.jsx(r("WAWebUnstyledButton.react"), {
                      xstyle: f.captureBtn,
                      "aria-label": n,
                      onClick: i,
                      children: u.jsx(
                        o("WAWebIcPhotoCameraIcon.react").IcPhotoCameraIcon,
                        {},
                      ),
                    }),
                  },
                  "btn-capture",
                )
              : null));
      } else if (
        m === "SENDING" &&
        ((k = u.jsx(r("WAWebObjectFit.react"), {
          type: I,
          size: v,
          children: u.jsx("img", {
            alt: "",
            className: "x10l6tqk xh8yej3 x5yr21d xqcmdr3 xxkxylk",
            "data-animate-capture-snapshot": !0,
            src: a,
          }),
        })),
        t)
      ) {
        var x = r("WANullthrows")(t.attachMediaContents);
        k = u.jsx(
          o("WAWebMediaEditorForChatLoadable.react").MediaEditorForChatLoadable,
          {
            theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE,
            chat: t,
            initCaption: null,
            mediaCollection: x,
            onDropText: r("WAWebNoop"),
            onSendMedia: l,
            placeholderText: o(
              "WAWebComposeBoxUtils",
            ).getComposeBoxPlaceholderText({ chat: t, questionType: d }),
            toolbarContainer: R,
            hideFooter: !0,
          },
        );
      }
      return u.jsxs(
        r("WAWebDrawer.react"),
        {
          theme: e.theme,
          tsNavigationData: g,
          children: [
            u.jsx(h, {
              onClose: e.onBack,
              onDownload: r("WAWebNoop"),
              toolbarRef: m === "SENDING" ? L : void 0,
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              overflow: "hidden",
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                justify: "center",
                xstyle: f.bodyContent,
                children: [
                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    grow: 1,
                    align: "stretch",
                    alignSelf: "stretch",
                    xstyle: [f.cameraContainer, f.cameraAreaSpacing],
                    children: [
                      u.jsx(o("WAWebFlex.react").FlexColumn, {
                        grow: 1,
                        shrink: 0,
                        align: "stretch",
                        xstyle: f.feedWrapper,
                        children: u.jsx(o("WAWebFlex.react").FlexRow, {
                          grow: 1,
                          shrink: 0,
                          align: "stretch",
                          xstyle: [
                            f.cameraArea,
                            m !== "LOADING" &&
                              m !== "ANIMATING" &&
                              f.cameraAreaBorder,
                          ],
                          style:
                            v != null
                              ? { aspectRatio: v.width + " / " + v.height }
                              : void 0,
                          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                            align: "center",
                            justify: "center",
                            grow: 1,
                            xstyle: f.container,
                            children: [
                              m === "LOADING" || m === "ANIMATING"
                                ? u.jsx(o("WAWebSpinner.react").Spinner, {
                                    stroke: 4,
                                    size: 50,
                                  })
                                : null,
                              u.jsx(o("WAWebFlex.react").FlexColumn, {
                                align: "stretch",
                                xstyle: f.body,
                                children: u.jsx(
                                  r("WAWebVelocityTransitionGroup"),
                                  {
                                    transitionName: "capture",
                                    xstyle: f.videoContainer,
                                    children: k,
                                  },
                                ),
                              }),
                            ],
                          }),
                        }),
                      }),
                      E,
                    ],
                  }),
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    justify: "center",
                    gap: 4,
                    children: [
                      u.jsx(y, { label: s._(/*BTDS*/ "Video"), isActive: !1 }),
                      u.jsx(y, { label: s._(/*BTDS*/ "Photo"), isActive: !0 }),
                      u.jsx(y, {
                        label: s._(/*BTDS*/ "Video Note"),
                        isActive: !1,
                      }),
                    ],
                  }),
                ],
              }),
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
