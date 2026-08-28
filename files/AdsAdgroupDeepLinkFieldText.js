__d(
  "AdsAdgroupDeepLinkFieldText",
  ["fbt", "AdsAppPlatformCreativeFieldTypes", "GeoLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "https://www.facebook.com/business/help/1627795160837067";
    function d(e) {
      switch (e) {
        case "IOS":
        case "IPAD":
        case "IPHONE":
        case "GENERIC_IOS":
          return s._(/*BTDS*/ "{=m0}{=m1}{=m2}{=m3}{=Learn more}", [
            s._param(
              "=Learn more",
              u.jsx(r("GeoLink.react"), {
                href: c,
                target: "_blank",
                children: "Learn more",
              }),
            ),
            s._implicitParam(
              "=m0",
              u.jsx("div", {
                className: "fwb pbm",
                children: s._(/*BTDS*/ "Using a deferred deep link"),
              }),
            ),
            s._implicitParam(
              "=m1",
              u.jsx("p", {
                children: s._(
                  /*BTDS*/ "A deferred deep link is a URL that sends people to your app in the respective app store. Once people install your app, the link will take them to a specific screen, such as a product page.",
                ),
              }),
            ),
            s._implicitParam(
              "=m2",
              u.jsx("p", {
                children: s._(
                  /*BTDS*/ "To use a deferred deep link, you need to first connect the Facebook SDK. You can use any of these link types:",
                ),
              }),
            ),
            s._implicitParam(
              "=m3",
              u.jsx("ul", {
                style: { listStyleType: "disc", marginLeft: "16px" },
                children: s._(/*BTDS*/ "{=m1}{=m2}{=m3}", [
                  s._implicitParam(
                    "=m1",
                    u.jsx("li", { children: s._(/*BTDS*/ "Universal link") }),
                  ),
                  s._implicitParam(
                    "=m2",
                    u.jsx("li", {
                      children: s._(/*BTDS*/ "Custom URL scheme"),
                    }),
                  ),
                  s._implicitParam(
                    "=m3",
                    u.jsx("li", {
                      children: s._(/*BTDS*/ "Facebook App Link"),
                    }),
                  ),
                ]),
              }),
            ),
          ]);
        case "ANDROID":
          return s._(/*BTDS*/ "{=m0}{=m1}{=m2}{=m3}{=Learn more}", [
            s._param(
              "=Learn more",
              u.jsx(r("GeoLink.react"), {
                href: c,
                target: "_blank",
                children: "Learn more",
              }),
            ),
            s._implicitParam(
              "=m0",
              u.jsx("div", {
                className: "fwb pbm",
                children: s._(/*BTDS*/ "Using a deferred deep link"),
              }),
            ),
            s._implicitParam(
              "=m1",
              u.jsx("p", {
                children: s._(
                  /*BTDS*/ "A deferred deep link is a URL that sends people to your app in the respective app store. Once people install your app, the link will take them to a specific screen, such as a product page.",
                ),
              }),
            ),
            s._implicitParam(
              "=m2",
              u.jsx("p", {
                children: s._(
                  /*BTDS*/ "To use a deferred deep link, you need to first connect the Facebook SDK. You can use any of these link types:",
                ),
              }),
            ),
            s._implicitParam(
              "=m3",
              u.jsx("ul", {
                style: { listStyleType: "disc", marginLeft: "16px" },
                children: s._(/*BTDS*/ "{=m1}{=m2}{=m3}", [
                  s._implicitParam(
                    "=m1",
                    u.jsx("li", { children: s._(/*BTDS*/ "Android App Link") }),
                  ),
                  s._implicitParam(
                    "=m2",
                    u.jsx("li", {
                      children: s._(/*BTDS*/ "Custom URL scheme"),
                    }),
                  ),
                  s._implicitParam(
                    "=m3",
                    u.jsx("li", {
                      children: s._(/*BTDS*/ "Facebook App Link"),
                    }),
                  ),
                ]),
              }),
            ),
          ]);
        default:
          return s._(/*BTDS*/ "{=m0}{=m1}{=m2}{=m3}{=Learn more}", [
            s._param(
              "=Learn more",
              u.jsx(r("GeoLink.react"), {
                href: c,
                target: "_blank",
                children: "Learn more",
              }),
            ),
            s._implicitParam(
              "=m0",
              u.jsx("div", {
                className: "fwb pbm",
                children: s._(/*BTDS*/ "Using a deferred deep link"),
              }),
            ),
            s._implicitParam(
              "=m1",
              u.jsx("p", {
                children: s._(
                  /*BTDS*/ "A deferred deep link is a URL that sends people to your app in the respective app store. Once people install your app, the link will take them to a specific screen, such as a product page.",
                ),
              }),
            ),
            s._implicitParam(
              "=m2",
              u.jsx("p", {
                children: s._(
                  /*BTDS*/ "To use a deferred deep link, you need to first connect the Facebook SDK. You can use any of these link types:",
                ),
              }),
            ),
            s._implicitParam(
              "=m3",
              u.jsx("ul", {
                style: { listStyleType: "disc", marginLeft: "16px" },
                children: s._(/*BTDS*/ "{=m1}{=m2}{=m3}", [
                  s._implicitParam(
                    "=m1",
                    u.jsx("li", {
                      children: s._(
                        /*BTDS*/ "Universal link or Android App Link",
                      ),
                    }),
                  ),
                  s._implicitParam(
                    "=m2",
                    u.jsx("li", {
                      children: s._(/*BTDS*/ "Custom URL scheme"),
                    }),
                  ),
                  s._implicitParam(
                    "=m3",
                    u.jsx("li", {
                      children: s._(/*BTDS*/ "Facebook App Link"),
                    }),
                  ),
                ]),
              }),
            ),
          ]);
      }
    }
    function m() {
      return s._(/*BTDS*/ "Deferred deep link");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(/*BTDS*/ "Enter the deferred deep link URL");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "{=m0}{=m1}{=m2}", [
        s._implicitParam(
          "=m0",
          u.jsx("div", {
            className: "fwb pbm",
            children: s._(/*BTDS*/ "Using a Deep Link"),
          }),
        ),
        s._implicitParam(
          "=m1",
          u.jsx("p", {
            children: s._(
              /*BTDS*/ "A deep link is a URL that takes people who click on your ad to a specific location within your app, like a product page.",
            ),
          }),
        ),
        s._implicitParam(
          "=m2",
          u.jsx("p", {
            children: s._(
              /*BTDS*/ "You can use a deep link (ex: myapp:\/\/buynow\/12345) or a URL with {=App Links} enabled. {=Learn More}",
              [
                s._param(
                  "=App Links",
                  u.jsx(r("GeoLink.react"), {
                    href: "https://developers.facebook.com/docs/applinks",
                    target: "_blank",
                    children: "App Links",
                  }),
                ),
                s._param(
                  "=Learn More",
                  u.jsx(r("GeoLink.react"), {
                    href: c,
                    target: "_blank",
                    children: "Learn More",
                  }),
                ),
              ],
            ),
          }),
        ),
      ]);
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "{=m0}{=m1}{=m2}", [
        s._implicitParam(
          "=m0",
          u.jsx("div", {
            className: "fwb pbm",
            children: s._(/*BTDS*/ "Using a deep link"),
          }),
        ),
        s._implicitParam(
          "=m1",
          u.jsx("p", {
            children: s._(
              /*BTDS*/ "A deep link is a URL that sends people to a specific location in your app. You can use a universal link, an Android App Link, a custom URL scheme or a Facebook App Link.",
            ),
          }),
        ),
        s._implicitParam(
          "=m2",
          u.jsx("div", {
            children: s._(/*BTDS*/ "{=Learn More}", [
              s._param(
                "=Learn More",
                u.jsx(r("GeoLink.react"), {
                  href: c,
                  target: "_blank",
                  children: "Learn more",
                }),
              ),
            ]),
          }),
        ),
      ]);
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(
        /*BTDS*/ "Send people to a specific place in your app. You can use an Apple universal link, Android App Link, custom URL scheme or Facebook App Link. {=m1}",
        [
          s._implicitParam(
            "=m1",
            u.jsx("div", {
              children: s._(/*BTDS*/ "{=Learn More}", [
                s._param(
                  "=Learn More",
                  u.jsx(r("GeoLink.react"), {
                    href: c,
                    target: "_blank",
                    children: "About app deep links",
                  }),
                ),
              ]),
            }),
          ),
        ],
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Deep link");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Enter the deep link URL");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return u.jsx("div", {
        children: s._(
          /*BTDS*/ "A deep link is a URL that points to a specific place in your app. Ex: https:\/\/apps.facebook.com\/mygame\/custom\/path\/",
        ),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Deep link");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "Enter the deep link URL");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t) {
      var n = s._(
          /*BTDS*/ "Use a deep link to specify where in your app to send people. Entering an Android deep link here will override any Android deep links for products in the selected catalog.",
        ),
        o = s._(
          /*BTDS*/ "Use a deep link to specify where in your app to send people. Entering an iOS deep link here will override any iOS deep links for products in the selected catalog.",
        );
      switch (e) {
        case r("AdsAppPlatformCreativeFieldTypes").ANDROID:
          return t
            ? n
            : s._(/*BTDS*/ "{=m0}{=m1}", [
                s._implicitParam(
                  "=m0",
                  u.jsx("div", {
                    className: "fwb pbm",
                    children: s._(/*BTDS*/ "Using an Android deep link"),
                  }),
                ),
                s._implicitParam(
                  "=m1",
                  u.jsx("p", {
                    children: s._(
                      /*BTDS*/ "Specify where to send people in your app using either an Android App Link or custom URL scheme. {Learn More}",
                      [
                        s._param(
                          "Learn More",
                          u.jsx(r("GeoLink.react"), {
                            href: c,
                            target: "_blank",
                            children: "Learn more",
                          }),
                        ),
                      ],
                    ),
                  }),
                ),
              ]);
        case r("AdsAppPlatformCreativeFieldTypes").IOS:
        case r("AdsAppPlatformCreativeFieldTypes").IPAD:
        case r("AdsAppPlatformCreativeFieldTypes").IPHONE:
          return t === !0
            ? o
            : s._(/*BTDS*/ "{=m0}{=m1}", [
                s._implicitParam(
                  "=m0",
                  u.jsx("div", {
                    className: "fwb pbm",
                    children: s._(/*BTDS*/ "Using an iOS deep link"),
                  }),
                ),
                s._implicitParam(
                  "=m1",
                  u.jsx("p", {
                    children: s._(
                      /*BTDS*/ "Specify where to send people in your app using either a universal link or custom URL scheme. {Learn More}",
                      [
                        s._param(
                          "Learn More",
                          u.jsx(r("GeoLink.react"), {
                            href: c,
                            target: "_blank",
                            children: "Learn more",
                          }),
                        ),
                      ],
                    ),
                  }),
                ),
              ]);
        default:
          return;
      }
    }
    function R() {
      return s._(
        /*BTDS*/ "You can use an Apple universal link, Android app link, custom URL scheme or MMP deep link. {=About deep links}",
        [
          s._param(
            "=About deep links",
            u.jsx(r("GeoLink.react"), {
              href: c,
              target: "_blank",
              children: "About deep links",
            }),
          ),
        ],
      );
    }
    ((R.displayName = R.name + " [from " + i.id + "]"),
      (l.renderMAIDeepLinkMobileHelpText = d),
      (l.renderMAIDeepLinkMobileLabel = m),
      (l.renderMAIDeepLinkMobilePlaceholder = p),
      (l.renderMAEDeepLinkMobileHelpText = _),
      (l.renderMAEDeepLinkMobileHelpTextWithUL = f),
      (l.renderMAEDeepLinkMobileHelpTextWithULNew = g),
      (l.renderMAEDeepLinkMobileLabel = h),
      (l.renderMAEDeepLinkMobilePlaceholder = y),
      (l.renderDeepLinkCanvasHelpText = C),
      (l.renderDeepLinkCanvasLabel = b),
      (l.renderDeepLinkCanvasPlaceholder = v),
      (l.renderDeepLinkHelpTextForPlatform = S),
      (l.renderUnifiedDeepLinkHelpText = R));
  },
  226,
);
