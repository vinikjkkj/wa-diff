__d(
  "WAWebIntroPanel.react",
  [
    "cx",
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebBizGatingUtils",
    "WAWebDesktopUpsellAnimationData",
    "WAWebDesktopUpsellCommonStrings",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebDesktopUpsellUtils",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFeatureFlagName",
    "WAWebIntroMdBetaLogoDarkIcon.react",
    "WAWebIntroMdBetaLogoLightIcon.react",
    "WAWebLockOutlineIcon.react",
    "WAWebLottieAnimationLoadable",
    "WAWebMobilePlatforms",
    "WAWebThemeContext",
    "WAWebVelocityAnimate",
    "WAWebWaLogoIcon.react",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WAWebWdsIllWebNativeIcon.react",
    "WAWebWdsSmbIllStartAChatIcon.react",
    "WDSButton.react",
    "WDSText.react",
    "bx",
    "cr:10211",
    "cr:23046",
    "react",
    "stylex",
    "useWAWebDesktopUpsellWamImpression",
    "useWAWebExternalBetaOptIn",
    "useWAWebGetFeatureFlag",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = ["ref"],
      m,
      p,
      _ = p || (p = o("react")),
      f = p,
      g = f.useContext,
      h = f.useEffect,
      y = f.useImperativeHandle,
      C = f.useRef,
      b = {
        whatsappLogo: { color: "x1vef352", display: "x1rg5ohu", $$css: !0 },
        textContainer: { opacity: "xg01cxk", $$css: !0 },
        mdTextContainer: { opacity: "xg01cxk", $$css: !0 },
        mdBetaImage: {
          display: "x1rg5ohu",
          marginTop: "xdj266r",
          marginInlineEnd: "x11t971q",
          marginBottom: "xat24cr",
          marginInlineStart: "xvc5jky",
          $$css: !0,
        },
        spacingSingleBottom: { marginBottom: "xcytdqz", $$css: !0 },
        spacingTripleBottom: { marginBottom: "x14mdic9", $$css: !0 },
        spacingTripleTop: { marginTop: "x9u28bd", $$css: !0 },
        animation: { width: "x9r4l05", height: "x1ebt64t", $$css: !0 },
      };
    function v(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, d),
        l = i.animate,
        s = g(o("WAWebThemeContext").ThemeContext),
        p = o("WAWebDesktopUpsellUtils").getUserDesktopOs(),
        f = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        v = f[0],
        L = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(),
        E = C(null),
        k = C(null);
      h(function () {
        var t = E.current,
          n = k.current;
        l
          ? (r("WAWebVelocityAnimate")(
              t,
              { scale: [1, 0], opacity: [1, 0] },
              { delay: 1340, duration: 180, easing: [0.05, 1.02, 0, 1.01] },
            ).catch(function () {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[intro-panel] Velocity animate failed",
                  ])),
              );
            }),
            r("WAWebVelocityAnimate")(
              n,
              { translateY: [0, 80], opacity: [1, 0] },
              { delay: 1300, duration: 140, easing: [0.05, 1.02, 0, 1.01] },
            ).catch(function () {
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[intro-panel] 2nd Velocity animate failed",
                  ])),
              );
            }))
          : (t && (t.style.opacity = "1"), n && (n.style.opacity = "1"));
      }, []);
      var I = C(null),
        T = function (t) {
          return I.current ? I.current.contains(t) : !1;
        };
      y(a, function () {
        return { containsDOMNode: T };
      });
      var D = r("useWAWebGetFeatureFlag")(
          o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
        ).enabled,
        x,
        $,
        P,
        N = b.textContainer,
        M = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformCheck();
      o(
        "useWAWebDesktopUpsellWamImpression",
      ).useWAWebDesktopUpsellWamImpression({
        source: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL,
        isCtaVisible: M,
        isBeta: M && L,
        isBetaUser: v,
      });
      var w =
          (n("cr:23046") == null
            ? void 0
            : n("cr:23046").isWindowsHybridEnabled()) === !0,
        A = o("WAWebMobilePlatforms").isSMB();
      if (M) {
        x = _.jsx("div", {
          ref: E,
          className: "xg01cxk x1g0ag68 x78zum5 xl56j7k",
          children: _.jsx(S, { userDesktopOs: p }),
        });
        var F = _.jsx(r("WDSText.react"), {
            type: "LargeTitle1",
            colorName: "contentDefault",
            isPrimaryHeading: !0,
            xstyle: [b.spacingSingleBottom, b.spacingTripleTop],
            children: o(
              "WAWebDesktopUpsellCommonStrings",
            ).getDesktopUpsellDownloadWhatsAppTitle(L),
          }),
          O = _.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDeemphasized",
            xstyle: b.spacingTripleBottom,
            children: o(
              "WAWebDesktopUpsellCommonStrings",
            ).getDesktopUpsellIntroPanelText(L),
          });
        (($ = _.jsxs(_.Fragment, { children: [F, O] })),
          (P = R({
            buttonText: o(
              "WAWebDesktopUpsellCommonStrings",
            ).getDesktopAppDownloadFromStoreBtnLabel(L),
            onClick: function () {
              o(
                "WAWebDesktopUpsellStoreOpener",
              ).openExternalWhatsAppDesktopDownloadUrl({
                ctaSource: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                  .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL,
                isBetaUpsell: L,
                isBetaUser: v,
              });
            },
          })));
      } else {
        N = b.mdTextContainer;
        var B;
        (w
          ? (B = _.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
              height: 56,
              width: 56,
              iconXstyle: b.whatsappLogo,
            }))
          : A
            ? (B = _.jsx(
                o("WAWebWdsSmbIllStartAChatIcon.react").WdsSmbIllStartAChatIcon,
                { xstyle: b.mdBetaImage },
              ))
            : (B =
                s.theme === "light"
                  ? _.jsx(
                      o("WAWebIntroMdBetaLogoLightIcon.react")
                        .IntroMdBetaLogoLightIcon,
                      {
                        className_DONOTUSE:
                          "x1rg5ohu xdj266r x11t971q xat24cr xvc5jky",
                        width: 360,
                      },
                    )
                  : _.jsx(
                      o("WAWebIntroMdBetaLogoDarkIcon.react")
                        .IntroMdBetaLogoDarkIcon,
                      {
                        className_DONOTUSE:
                          "x1rg5ohu xdj266r x11t971q xat24cr xvc5jky",
                        width: 360,
                      },
                    )),
          (x = _.jsx("div", {
            ref: E,
            className: "xg01cxk x1g0ag68 x78zum5 xl56j7k",
            children: B,
          })));
        var W;
        (A
          ? (W = r("WAWebFbtCommon")("WhatsApp Business on Web"))
          : (W = r("WAWebFbtCommon")("WhatsApp Web")),
          r("WAWebEnvironment").isWindows &&
            (W = r("WAWebFbtCommon")("WhatsApp for Windows")));
        var q = _.jsx("div", {
          className: "x3nfvp2 x1q9ymp4 x579bpy x1iikomf x1srq1fq x14ug900",
          children: _.jsx("h1", { "data-testid": void 0, children: W }),
        });
        D
          ? ($ = _.jsxs(_.Fragment, {
              children: [
                q,
                _.jsxs("div", {
                  "data-testid": void 0,
                  className: "x98l61r x1f6kntn xo1l8bm x1fc57z9 xhslqc4",
                  children: [
                    u._(
                      /*BTDS*/ "Your Meta verified subscription allows you to link up to 6 devices to your WhatsApp account and assign chats to each one.",
                    ),
                    _.jsx("br", {}),
                    u._(/*BTDS*/ "Use your phone to add devices."),
                  ],
                }),
              ],
            }))
          : o("WAWebBizGatingUtils").billingEnabled()
            ? ($ = _.jsxs(_.Fragment, {
                children: [
                  q,
                  _.jsxs("div", {
                    "data-testid": void 0,
                    className: "x98l61r x1f6kntn xo1l8bm x1fc57z9 xhslqc4",
                    children: [
                      u._(/*BTDS*/ "{=m0}", [
                        u._implicitParam(
                          "=m0",
                          _.jsx("strong", {
                            children: u._(
                              /*BTDS*/ "New: multi-agent sales and support",
                            ),
                          }),
                        ),
                      ]),
                      _.jsx("br", {}),
                      u._(
                        /*BTDS*/ "Respond to customers faster with up to 10 assignable agents. Available with WhatsApp Business Premium.",
                      ),
                      _.jsx("br", {}),
                      _.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o(
                          "WAWebFaqUrl",
                        ).getWhatsAppBusinessPremiumFaqUrl(),
                        children: u._(/*BTDS*/ "Learn more"),
                      }),
                    ],
                  }),
                ],
              }))
            : A
              ? ($ = _.jsxs(_.Fragment, {
                  children: [
                    q,
                    _.jsxs("div", {
                      "data-testid": void 0,
                      className: "x98l61r x1f6kntn xo1l8bm x1fc57z9 xhslqc4",
                      children: [
                        u._(
                          /*BTDS*/ "Grow, organise and manage your business account.",
                        ),
                        _.jsx("br", {}),
                      ],
                    }),
                  ],
                }))
              : ($ = _.jsxs(_.Fragment, {
                  children: [
                    q,
                    _.jsxs("div", {
                      "data-testid": void 0,
                      className: "x98l61r x1f6kntn xo1l8bm x1fc57z9 xhslqc4",
                      children: [
                        u._(
                          /*BTDS*/ "Send and receive messages without keeping your phone online.",
                        ),
                        _.jsx("br", {}),
                        u._(
                          /*BTDS*/ "Use WhatsApp on up to 4 linked devices and 1 phone at the same time.",
                        ),
                      ],
                    }),
                  ],
                }));
      }
      var U = _.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
        height: 20,
        width: 20,
      });
      return _.jsx("div", {
        className:
          "x10l6tqk x1vjfegm x9f619 x78zum5 x1iyjqo2 x6s0dn4 xl56j7k xh8yej3 x5yr21d xv8gdss xgb8hzy xt0e3qv x6egj2d",
        ref: I,
        children: _.jsxs("div", {
          className: "xktia5q x27kpxv x135pmgq x2b8uid",
          "data-testid": void 0,
          children: [
            x,
            _.jsxs(
              "div",
              babelHelpers.extends(
                { ref: k },
                (m || (m = r("stylex"))).props(N),
                {
                  children: [
                    $,
                    P,
                    n("cr:10211")
                      ? _.jsx("div", {
                          className: "x1hogkm0",
                          children: _.jsx(n("cr:10211"), {}),
                        })
                      : null,
                  ],
                },
              ),
            ),
            _.jsxs("div", {
              className: "_al_x",
              children: [
                U,
                " ",
                u._(/*BTDS*/ "Your personal messages are end-to-end encrypted"),
              ],
            }),
          ],
        }),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.userDesktopOs,
        n = o("WAWebThemeContext").useIsDarkTheme(),
        a = r("bx")("482"),
        i = r("bx")("484"),
        l = o("WAWebABProps").getABPropConfigValue(
          "desktop_upsell_intro_panel_illustration_variant",
        );
      if (l === 1) ((a = r("bx")("32107")), (i = r("bx")("32108")));
      else {
        if (l === 2)
          return _.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
            loop: !1,
            autoplay: !0,
            data: r("WAWebDesktopUpsellAnimationData")(n),
            xstyle: b.animation,
          });
        if (l === 3)
          return _.jsx(
            o("WAWebWdsIllWebNativeIcon.react").WdsIllWebNativeIcon,
            { width: 270, height: 180 },
          );
      }
      return _.jsx("img", {
        src:
          t === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS
            ? r("bx").getURL(a)
            : r("bx").getURL(i),
        width: 320,
        alt: "",
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e != null ? e : {},
        n = t.buttonText,
        o = t.onClick;
      return n != null && o != null
        ? _.jsx("div", {
            className: "x1ci5j9l x78zum5 xl56j7k",
            children: _.jsx(r("WDSButton.react"), {
              variant: "filled",
              type: "default",
              size: "medium",
              onPress: o,
              label: n,
            }),
          })
        : null;
    }
    l.default = v;
  },
  226,
);
