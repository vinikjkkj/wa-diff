__d(
  "WAWebSmbUpsellSmbAppUpsellModal.react",
  [
    "fbt",
    "WAWebBannerEventWamEvent",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebSmbUpsellSmbDownloadQrCode.react",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBannerTypes",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = "https://www.whatsapp.com/business";
    function d() {
      var e = function () {
          (new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
            bannerOperation: o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS
              .DISMISS,
            bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
              .CROSS_SELL_PROFILE_INTERSTITIAL,
          }).commit(),
            o("WAWebModalManager").ModalManager.close());
        },
        t = function (t) {
          (t.preventDefault(),
            o("WAWebModalManager").ModalManager.close(),
            self.setTimeout(function () {
              return o("WAWebExternalLink.react").openExternalLink(c);
            }, 10));
        };
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "WhatsApp Business app"),
        onOK: e,
        okText: r("WAWebFbtCommon")("Close"),
        children: [
          u.jsx(r("WAWebSmbUpsellSmbDownloadQrCode.react"), {}),
          u.jsx("p", {
            children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: s._(
                /*BTDS*/ "If you're a business, you can benefit from switching to the free WhatsApp Business app. It has tools to connect with customers and manage messages.",
              ),
            }),
          }),
          u.jsx("br", {}),
          u.jsxs("p", {
            children: [
              u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: s._(
                  /*BTDS*/ "Scan this code to get the WhatsApp Business app. Or, you can install it from the App Store or Google Play Store.",
                ),
              }),
              "\xA0",
              u.jsx(r("WAWebClickableLink.react"), {
                href: c,
                onClick: t,
                children: s._(/*BTDS*/ "Learn more"),
              }),
            ],
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
