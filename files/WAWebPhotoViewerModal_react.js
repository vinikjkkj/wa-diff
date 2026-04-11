__d(
  "WAWebPhotoViewerModal.react",
  [
    "WANullthrows",
    "WAWebCellFrame.react",
    "WAWebClassnames",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebImg.react",
    "WAWebMenuBar.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebObjectFit.react",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebVelocityAnimate",
    "WAWebWaChatPsaIcon.react",
    "WAWebWid",
    "WAWebXViewerIcon.react",
    "react",
    "stylex",
    "useWAWebContactValues",
    "useWAWebModelValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = 500,
      f = 40,
      g = 640,
      h = 641,
      y = "x18re5ia-B",
      C = {
        avatarDefaultPSASmall: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          width: "x100vrsf",
          height: "x1vqgdyp",
          $$css: !0,
        },
        avatarDefaultPSALarge: {
          width: "x11i3ho8",
          height: "xzpm71n",
          $$css: !0,
        },
        profileThumb: {
          flex: "x98rzlu",
          order: "x14yy4lh",
          cursor: "x1sqbtui",
          $$css: !0,
        },
        mediaPanelTools: { order: "x9ek82g", $$css: !0 },
        profileContainer: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flex: "xc8qplx",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          justifyContent: "x1qughib",
          height: "x4t50tc",
          $$css: !0,
        },
      };
    function b(t) {
      var n = t.animateBorderRadius,
        a = t.animateSquircle,
        i = a === void 0 ? !1 : a,
        l = t.contact,
        s = t.getZoomNode,
        c = o("useWAWebContactValues").useContactValues(t.contact.id, [
          o("WAWebFrontendContactGetters").getFormattedUser,
          o("WAWebContactGetters").getId,
        ]),
        y = c[0],
        b = c[1],
        v = o("useWAWebModelValues").useModelValues(t.profilePicThumb, [
          "imgFull",
        ]),
        S = v.imgFull,
        R = p(S),
        L = R[0],
        E = R[1];
      S != null && L !== S && E(S);
      var k = p(function () {
          return r("WAWebWid").isPSA(t.contact.id)
            ? {
                visibility: "visible",
                transform: "translateX(0px) translateY(0px) scale(1)",
                borderRadius: "0%",
                transition:
                  "transform " +
                  _ +
                  "ms cubic-bezier(.1,.82,.25,1),\n                  border-radius " +
                  _ +
                  "ms cubic-bezier(.1,.82,.25,1)",
              }
            : { visibility: "hidden" };
        }),
        I = k[0],
        T = k[1],
        D = p(function () {
          return r("WAWebWid").isPSA(t.contact.id)
            ? { width: g, height: h }
            : null;
        }),
        x = D[0],
        $ = D[1],
        P = m(!1),
        N = m(),
        M = m();
      (d(
        function () {
          var e = M.current;
          ((M.current = null), e == null || e());
        },
        void 0,
      ),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: "profile-picture-preview",
        }));
      var w = function (t) {
          var e = t.currentTarget;
          ($({ width: e.naturalWidth, height: e.naturalHeight }),
            (M.current = function () {
              return s(function (t) {
                var r = e.getBoundingClientRect(),
                  o = t.getBoundingClientRect(),
                  a = o.top - r.top,
                  i = o.left - r.left,
                  l = t.clientWidth / e.clientWidth,
                  s = {
                    visibility: "hidden",
                    transform:
                      "translateX(" +
                      i +
                      "px) translateY(" +
                      a +
                      "px) scale(" +
                      l +
                      ")",
                    transition: "transform 0s",
                    borderRadius: void 0,
                  };
                (n && (s.borderRadius = "50%"),
                  T(s),
                  (M.current = function () {
                    var e = {
                      transform: "translateX(0px) translateY(0px) scale(1)",
                      transition:
                        "transform " + _ + "ms cubic-bezier(.1,.82,.25,1)",
                    };
                    (n &&
                      (e = {
                        transform: "translateX(0px) translateY(0px) scale(1)",
                        borderRadius: "0%",
                        transition:
                          "transform " +
                          _ +
                          "ms cubic-bezier(.1,.82,.25,1),\n                                       border-radius " +
                          _ +
                          "ms cubic-bezier(.1,.82,.25,1)",
                      }),
                      T(e));
                  }));
              });
            }));
        },
        A = r("useWAWebStableCallback")(function () {
          if (!P.current) {
            P.current = !0;
            var e;
            if (
              (s(function (t) {
                e = t;
              }),
              !e)
            )
              return o("WAWebModalManager").ModalManager.closeMedia();
            var t = N.current;
            if (t) {
              (n || i) &&
                ((t.style.transition =
                  (i ? "clip-path" : "border-radius") +
                  " " +
                  _ +
                  "ms cubic-bezier(.1,.82,.25,1)"),
                i
                  ? (t.style.clipPath = "var(--squircle-polygon)")
                  : (t.style.borderRadius = "50%"));
              var a = r("WANullthrows")(e),
                l = t.getBoundingClientRect(),
                u = a.getBoundingClientRect(),
                c = u.top - l.top,
                d = u.left - l.left,
                m = a.clientWidth / t.clientWidth;
              r("WAWebVelocityAnimate")(
                t,
                { translateX: [d, 0], translateY: [c, 0], scale: [m, 1] },
                { duration: 200, easing: [0.1, 0.82, 0.25, 1] },
              ).then(function () {
                o("WAWebModalManager").ModalManager.closeMedia();
              });
            }
          }
        });
      d(
        function () {
          (S == null || S === "") && !r("WAWebWid").isPSA(b) && A();
        },
        [S, A, b],
      );
      var F = function (t) {
          Math.abs(t.deltaY) > 3 && A();
        },
        O,
        B;
      return (
        r("WAWebWid").isPSA(b)
          ? ((O = u.jsx(o("WAWebWaChatPsaIcon.react").WaChatPsaIcon, {
              iconXstyle: C.avatarDefaultPSALarge,
            })),
            (B = u.jsx(o("WAWebWaChatPsaIcon.react").WaChatPsaIcon, {
              iconXstyle: C.avatarDefaultPSASmall,
            })))
          : L &&
            ((O = u.jsx(r("WAWebImg.react"), {
              src: L,
              hasPrivacyChecks: !0,
              onLoad: w,
              crossOrigin: !1,
              className: "xhtitgo xh8yej3 x5yr21d",
            })),
            (B = u.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: b,
              size: f,
              shape: i
                ? o("WAWebDetailImage.react").DetailImageShape.Squircle
                : null,
            }))),
        u.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "PhotoViewer",
          escapable: !0,
          requestDismiss: A,
          children: u.jsxs("div", {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              "overlay",
              "x1pb5qga x78zum5 xdt5ytf x1akjpcp xqcmdr3 xfbpl4g x1alahoq",
              r("WAWebEnvironment").isWindows && "x9ri80z",
            ),
            onWheel: F,
            onClick: A,
            children: [
              u.jsxs("div", {
                className:
                  "x78zum5 x3psx0u x15zctf7 x6s0dn4 xng8ra x1280gxy xqu7myx",
                children: [
                  u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        C.profileThumb,
                        o("WAWebUISpacing").uiMargin.start18,
                      ),
                      {
                        children: u.jsx(r("WAWebCellFrame.react"), {
                          image: B,
                          theme: r("WAWebEnvironment").isWindows
                            ? "label-selection"
                            : "plain",
                          primary: u.jsx(o("WAWebName.react").Name, {
                            contact: l,
                            selectable: !0,
                          }),
                        }),
                      },
                    ),
                  ),
                  u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      e.props(
                        C.mediaPanelTools,
                        o("WAWebUISpacing").uiMargin.end18,
                      ),
                      {
                        children: u.jsx(
                          o("WAWebMenuBar.react").MenuBar,
                          {
                            theme: "strong",
                            children: u.jsx(
                              o("WAWebMenuBar.react").MenuBarItem,
                              {
                                testid: void 0,
                                icon: u.jsx(
                                  o("WAWebXViewerIcon.react").XViewerIcon,
                                  {},
                                ),
                                title: r("WAWebFbtCommon")("Close"),
                                onClick: A,
                              },
                            ),
                          },
                          "media-panel-header",
                        ),
                      },
                    ),
                  ),
                ],
              }),
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    C.profileContainer,
                    o("WAWebUISpacing").uiPadding.vert10,
                    o("WAWebUISpacing").uiPadding.horiz0,
                  ),
                  {
                    dir: "ltr",
                    children: u.jsx("div", {
                      className:
                        "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 xeuugli x5yr21d",
                      children: u.jsx(r("WAWebObjectFit.react"), {
                        type: "scaleDown",
                        size: x,
                        children: u.jsx("div", {
                          className:
                            "xh8yej3 x5yr21d x6ikm8r x10wlt62 xiy17q3 x1lvsgvq x1tbiz1a xyyilfv",
                          ref: N,
                          style: I,
                          children: O,
                        }),
                      }),
                    }),
                  },
                ),
              ),
            ],
          }),
        })
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  98,
);
