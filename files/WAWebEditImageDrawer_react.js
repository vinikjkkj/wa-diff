__d(
  "WAWebEditImageDrawer.react",
  [
    "fbt",
    "WARandomHex",
    "WAWebCheckmarkLargeIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEditedMedia",
    "WAWebExternalLink.react",
    "WAWebMediaEditCanvas.react",
    "WAWebMediaEditControllerGetters",
    "WAWebMediaEditControllerModel",
    "WAWebObjectFit.react",
    "WAWebProfileCropTool.react",
    "WAWebReturnIcon.react",
    "WAWebRound.react",
    "WAWebTosUrl",
    "WAWebUISpacing",
    "WAWebURLUtils",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WDSFocusStateStyles",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebMediaEditControllerValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useRef,
      _ = m.useState,
      f = 361,
      g = 500,
      h = { NONE: "none", RETAKE: "retake", RESTART: "restart" },
      y = {
        retake: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          color: "x1heor9g",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        retakeIcon: { flex: "x1okw0bk", color: "x17t9dm2", $$css: !0 },
        attribution: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          maxHeight: "x1wb0a4p",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          fontSize: "x1nxh6w3",
          lineHeight: "x17fgdl5",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        footer: {
          position: "x1n2onr6",
          zIndex: "xzkaem6",
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          minHeight: "x5sx7kw",
          $$css: !0,
        },
      };
    function C(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.attributionUrl,
        c = i.cropShape,
        m = i.onFinished,
        C = i.onRetake,
        b = i.retryText,
        v = p(),
        S = p(null),
        R = r("useLazyRef")(function () {
          return new (r("WAWebMediaEditControllerModel"))({
            id: o("WARandomHex").randomHex(8),
          });
        }),
        L = o("useWAWebMediaEditControllerValues").useMediaEditControllerValues(
          R.current,
          [o("WAWebMediaEditControllerGetters").getIsInitialized],
        ),
        E = L[0],
        k = _(!1),
        I = k[0],
        T = k[1],
        D = _({ width: g, height: f }),
        x = D[0],
        $ = D[1],
        P = _(function () {
          return new (r("WAWebEditedMedia"))(i.img);
        }),
        N = P[0],
        M = function () {
          var e;
          (e = v.current) == null || e.saveCanvas();
        },
        w = function () {
          var e;
          (M(),
            (e = S.current) == null ||
              e.crop().then(function (e) {
                var t = e.full,
                  n = e.thumb;
                (m(n, t), N.cleanUp());
              }));
        },
        A = function (t) {
          t == null ||
            !(t instanceof HTMLElement) ||
            (x &&
              (x.width !== t.clientWidth || x.height !== t.clientHeight) &&
              $({ width: t.clientWidth, height: t.clientHeight }),
            I || T(!0));
        },
        F = function (t, n) {
          var e;
          (e = v.current) == null || e.drawCanvas(t, n);
        },
        O = I
          ? d.jsx(
              "div",
              {
                className: "x10l6tqk x13vifvy x1g9hn12 xhi6v0a xhtitgo xzbmw64",
                children: d.jsx(o("WAWebRound.react").Round, {
                  large: !0,
                  onClick: w,
                  label: s._(/*BTDS*/ "Submit image"),
                  children: d.jsx(
                    o("WAWebCheckmarkLargeIcon.react").CheckmarkLargeIcon,
                    {},
                  ),
                }),
              },
              "btn-send",
            )
          : null,
        B;
      E &&
        (B = d.jsx(o("WAWebProfileCropTool.react").WrappedProfileCropTool, {
          editedMedia: N,
          stage: R.current.stage,
          cropOverlay: R.current.cropOverlay,
          mediaContainer: R.current.mediaContainer,
          drawCanvas: F,
          ref: S,
          cropShape: c || o("WAWebProfileCropTool.react").CropShapeType.CIRCLE,
        }));
      var W = d.jsx(r("WAWebMediaEditCanvas.react"), {
          className:
            "x78zum5 x6s0dn4 xl56j7k xiy17q3 xztyhrg x1tbiz1a x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod",
          editedMedia: N,
          mediaEditController: R.current,
          fitType: "cover",
          ref: v,
        }),
        q;
      if (C) {
        var U;
        switch (b) {
          case h.NONE:
            U = null;
            break;
          case h.RETAKE:
            U = s._(/*BTDS*/ "Retake");
            break;
          case h.RESTART:
          default:
            U = s._(/*BTDS*/ "Upload");
        }
        q = d.jsxs(r("WAWebUnstyledButton.react"), {
          xstyle: [
            y.retake,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ],
          onClick: C,
          title: U != null ? U.toString() : "",
          children: [
            d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  y.retakeIcon,
                  o("WAWebUISpacing").uiMargin.end4,
                ),
                { children: d.jsx(o("WAWebReturnIcon.react").ReturnIcon, {}) },
              ),
            ),
            U,
          ],
        });
      }
      var V = l
          ? d.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  y.attribution,
                  o("WAWebUISpacing").uiMargin.top6,
                ),
                {
                  children: [
                    d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      className:
                        "x1okw0bk x1jkqq1h x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                      href: l,
                      children: r("WAWebURLUtils").hostname(l),
                    }),
                    d.jsxs("span", {
                      children: [
                        s._(/*BTDS*/ "Image may be subject to copyright."),
                        d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                          href: o("WAWebTosUrl").getTosUrl(),
                          children: s._(/*BTDS*/ "Terms of Service"),
                        }),
                      ],
                    }),
                  ],
                },
              ),
            )
          : null,
        H =
          c === o("WAWebProfileCropTool.react").CropShapeType.RECT
            ? d.jsx("div", {
                className: "x98rzlu x1yc453h",
                children: s._(
                  /*BTDS*/ "Hint: Use 16:9 ratio images (eg. 1920 x 1020 or its multiples)",
                ),
              })
            : void 0,
        G = d.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (u || (u = r("stylex"))).props(
              y.footer,
              o("WAWebUISpacing").uiPadding.top0,
              o("WAWebUISpacing").uiPadding.bottom6,
              o("WAWebUISpacing").uiPadding.horiz20,
            ),
            {
              children: [
                d.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: "btn",
                  children: O,
                }),
                V,
                H,
              ],
            },
          ),
        ),
        z = (n = i.imageSize) != null ? n : { width: g, height: f };
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: a,
          theme: "edit",
          tsNavigationData: { surface: "unknown", viewName: "edit-image" },
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Drag the image to adjust"),
              type: "offset",
              onCancel: i.onCancel,
              focusBackOrCancel: !0,
              children: q,
            }),
            d.jsxs(r("WAWebDrawerBody.react"), {
              overflow: "hidden",
              children: [
                d.jsxs("div", {
                  className: "x1n2onr6 x78zum5 x98rzlu x6s0dn4 xl56j7k xh8yej3",
                  children: [
                    B,
                    d.jsx("div", {
                      className:
                        "x10l6tqk x13vifvy x1o0tod x78zum5 xdt5ytf xuk3077 xl56j7k xh8yej3 x5yr21d x1m8r95a",
                      children: d.jsx(r("WAWebVelocityTransitionGroup"), {
                        transitionName: "capture",
                        children: d.jsx(r("WAWebObjectFit.react"), {
                          type: "cover",
                          size: z,
                          onObjectLoad: A,
                          children: W,
                        }),
                      }),
                    }),
                  ],
                }),
                G,
              ],
            }),
          ],
        },
        "attach-edit-modal",
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.RETRY_OPTIONS = h),
      (l.EditImageDrawer = C));
  },
  226,
);
