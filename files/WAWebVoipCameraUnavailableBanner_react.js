__d(
  "WAWebVoipCameraUnavailableBanner.react",
  [
    "fbt",
    "WAWebChromePermissionsIcon.react",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebUA",
    "WDSIconIcLock.react",
    "WDSIconIcVideocamOffFilled.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        overlay: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          width: "xh8yej3",
          height: "x5yr21d",
          zIndex: "xcegukh",
          backgroundColor: "x1od0jb8",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        content: {
          paddingTop: "x1sk1jro",
          paddingBottom: "x1ci70gm",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          maxWidth: "x193iq5w",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        iconContainer: {
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          marginBottom: "x14mdic9",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.noCameraDevice,
        n = t === void 0 ? !1 : t,
        a = o("WAWebUA").UA.browser,
        i = u.jsx("div", {
          className:
            "x6s0dn4 xl56j7k x3nfvp2 xxymvpz xlup9mm x1kky2od xg5evlq xup1sw1 x1tiyuxx x1uc92m x1nbhmlj x181vq82 xt8t1vi x1xc408v x129tdwq x15urzxu x4wrhlh",
          children: u.jsx(
            o("WAWebChromePermissionsIcon.react").ChromePermissionsIcon,
            { height: 13, width: 13 },
          ),
        }),
        l = u.jsx("div", {
          className:
            "x7a106z xl56j7k x3nfvp2 x16dsc37 xxk0z11 xvy4d1p x1sbwfh8 x16q7b9a",
          children: u.jsx(r("WDSIconIcLock.react"), { height: 20, width: 20 }),
        }),
        d =
          a === "edge"
            ? l
            : a === "chrome"
              ? i
              : a === "opera"
                ? l
                : a === "firefox"
                  ? i
                  : null,
        m = function () {
          return n
            ? s._(/*BTDS*/ "Camera not found")
            : s._(
                /*BTDS*/ "WhatsApp needs access to your camera to share your video in calls",
              );
        },
        p = function () {
          return n
            ? r("WAWebEnvironment").isWindows
              ? s._(
                  /*BTDS*/ "It looks like your computer doesn't have a camera. Try connecting one or if you have one connected, try restarting your computer.",
                )
              : s._(
                  /*BTDS*/ "It looks like your computer doesn't have a camera. Try connecting one or if you have one connected, try restarting your browser.",
                )
            : r("WAWebEnvironment").isWindows
              ? s._(
                  /*BTDS*/ "Go to your privacy settings and allow camera access for this app.",
                )
              : a === "safari"
                ? s._(
                    /*BTDS*/ "Open your browser's Preferences \u2192 Websites and change camera setting for web.whatsapp.com to Allow.",
                  )
                : s._(
                    /*BTDS*/ "Click the{browser_permissions_icon}icon next to the address bar and toggle {=m3} on.",
                    [
                      s._param("browser_permissions_icon", d),
                      s._implicitParam(
                        "=m3",
                        u.jsx(r("WDSText.react"), {
                          type: "Body2Emphasized",
                          colorName: "contentDeemphasized",
                          children: s._(/*BTDS*/ "Camera"),
                        }),
                      ),
                    ],
                  );
        };
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        justify: "center",
        xstyle: c.overlay,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          xstyle: c.content,
          children: [
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              xstyle: c.iconContainer,
              children: u.jsx("span", {
                className: "xhslqc4",
                children: u.jsx(r("WDSIconIcVideocamOffFilled.react"), {
                  height: 32,
                  width: 32,
                }),
              }),
            }),
            u.jsx("span", {
              className: "x14ug900 x1jchvi3 x19v9tvf xk50ysn xefnzgg",
              children: m(),
            }),
            u.jsx("span", {
              className: "xhslqc4 x1f6kntn x1fc57z9",
              children: p(),
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
