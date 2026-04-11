__d(
  "WAWebDesktopUpsellCommonStrings",
  ["fbt", "WAWebDesktopUpsellUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Get the app");
    }
    function u(t) {
      var n = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
      if (n == null) return e();
      var r = o("WAWebDesktopUpsellUtils").getEmptyStateUpsellBannerVariant();
      if (
        r ===
          o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum
            .Variant2 ||
        r ===
          o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum
            .Variant3
      )
        return s._(/*BTDS*/ "Download app");
      switch (n) {
        case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
          return s._(/*BTDS*/ "Download");
        case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
          return t === !0
            ? s._(/*BTDS*/ "Download beta app")
            : s._(/*BTDS*/ "Get from App Store");
      }
    }
    function c(e) {
      var t = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
      if (t == null) return null;
      switch (t) {
        case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
          return s._(/*BTDS*/ "Get WhatsApp for Windows");
        case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
          return e
            ? s._(/*BTDS*/ "Download the beta Mac app")
            : s._(/*BTDS*/ "Get WhatsApp for Mac");
      }
    }
    function d(e) {
      var t,
        n =
          (t = o("WAWebDesktopUpsellUtils").getUserDesktopOs()) != null
            ? t
            : o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS,
        r = o("WAWebDesktopUpsellUtils").getEmptyStateUpsellBannerVariant();
      if (
        r ===
        o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant2
      )
        switch (n) {
          case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
            return s._(/*BTDS*/ "Calling is available on the Windows app");
          case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
            return s._(/*BTDS*/ "Calling is available on the Mac app");
        }
      if (
        r ===
        o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant3
      )
        switch (n) {
          case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
            return s._(/*BTDS*/ "Get more features on the Windows app");
          case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
            return s._(/*BTDS*/ "Get more features on the Mac app");
        }
      switch (n) {
        case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
          return s._(/*BTDS*/ "Download WhatsApp for Windows");
        case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
          return e === !0
            ? s._(/*BTDS*/ "Download the beta Mac app")
            : s._(/*BTDS*/ "Download WhatsApp for Mac");
      }
    }
    function m(e) {
      var t,
        n =
          (t = o("WAWebDesktopUpsellUtils").getUserDesktopOs()) != null
            ? t
            : o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS,
        r = o("WAWebDesktopUpsellUtils").getEmptyStateUpsellBannerVariant();
      if (
        r ===
        o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant2
      )
        switch (n) {
          case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
            return s._(
              /*BTDS*/ "Get all the features from WhatsApp Web, plus calls and screen share.",
            );
          case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
            return s._(
              /*BTDS*/ "Get all the features from WhatsApp Web, plus calls and screen share.",
            );
        }
      if (
        r ===
        o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant3
      )
        switch (n) {
          case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
            return s._(
              /*BTDS*/ "Join calls, share your screen, and get a faster experience.",
            );
          case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
            return s._(
              /*BTDS*/ "Join calls, share your screen, and get a faster experience.",
            );
        }
      switch (n) {
        case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
          return s._(
            /*BTDS*/ "Get extra features like voice and video calling, screen sharing and more.",
          );
        case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
          return e === !0
            ? s._(
                /*BTDS*/ "Be the first to try out new features, share your feedback, and help make WhatsApp even better.",
              )
            : s._(
                /*BTDS*/ "Make calls and get a faster experience when you download the Mac app.",
              );
      }
    }
    ((l.getDesktopAppDownloadBtnLabel = e),
      (l.getDesktopAppDownloadFromStoreBtnLabel = u),
      (l.getDesktopUpsellToastbarLabel = c),
      (l.getDesktopUpsellDownloadWhatsAppTitle = d),
      (l.getDesktopUpsellIntroPanelText = m));
  },
  226,
);
