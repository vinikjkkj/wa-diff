__d(
  "WAWebSmbUpsellBusinessInfoWithUpsellModal.react",
  [
    "fbt",
    "WAWebBannerEventWamEvent",
    "WAWebBusinessProfileTypes",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebSmbUpsellSmbAppUpsellModal.react",
    "WAWebText.react",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBannerTypes",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.contact,
        n = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebContactGetters").getVerifiedLevel,
          o("WAWebContactGetters").getVerifiedName,
        ]),
        a = n[0],
        i = n[1],
        l = o("WAWebFaqUrl").getBusinessFaqUrl(),
        d = !o("WAWebConnModel").Conn.isSMB;
      c(
        function () {
          d &&
            new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
              bannerOperation: o("WAWebWamEnumBannerOperations")
                .BANNER_OPERATIONS.SHOWN,
              bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
                .CROSS_SELL_PROFILE_INTERSTITIAL,
            }).commit();
        },
        [d],
      );
      var p = function () {
          (o("WAWebModalManager").ModalManager.close(),
            d &&
              new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
                bannerOperation: o("WAWebWamEnumBannerOperations")
                  .BANNER_OPERATIONS.DISMISS,
                bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
                  .CROSS_SELL_PROFILE_INTERSTITIAL,
              }).commit());
        },
        _ = function (t) {
          (t.preventDefault(),
            o("WAWebModalManager").ModalManager.close(),
            self.setTimeout(function () {
              return o("WAWebExternalLink.react").openExternalLink(l);
            }, 10));
        },
        f = a === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH,
        g =
          f && !o("WAWebMiscGatingUtils").isBlueEducationEnabled()
            ? s._(
                /*BTDS*/ 'WhatsApp has verified that this is the official business account of "{businessName}". This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.',
                [s._param("businessName", i)],
              )
            : s._(
                /*BTDS*/ "This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.",
              );
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "about-whatsapp-business",
          viewName: "about-whatsapp-business",
        },
        title: s._(/*BTDS*/ "About WhatsApp Business"),
        onOK: p,
        okText: r("WAWebFbtCommon")("OK"),
        children: [
          u.jsx(o("WAWebEmojiText.react").EmojiText, { text: g }),
          "\xA0",
          u.jsx(r("WAWebClickableLink.react"), {
            href: l,
            onClick: _,
            children: s._(/*BTDS*/ "Learn more"),
          }),
          d &&
            u.jsx("div", {
              className: "x98l61r",
              children: u.jsxs(o("WAWebText.react").WAWebTextMuted, {
                as: "span",
                children: [
                  s._(
                    /*BTDS*/ "If you're a business, the free WhatsApp Business app can help.",
                  ),
                  u.jsx("br", {}),
                  u.jsx(r("WAWebClickableLink.react"), {
                    onClick: m,
                    className: "x1v5yvga",
                    children: s._(/*BTDS*/ "Learn about getting the app"),
                  }),
                ],
              }),
            }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      (e.preventDefault(),
        o("WAWebModalManager").ModalManager.close(),
        new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
          bannerOperation: o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS
            .CLICK,
          bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
            .CROSS_SELL_PROFILE_INTERSTITIAL,
        }).commit(),
        self.setTimeout(function () {
          return o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebSmbUpsellSmbAppUpsellModal.react"), {}),
          );
        }, 200));
    }
    l.default = d;
  },
  226,
);
