__d(
  "WAWebAttachMenuUtils",
  [
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebChatGetters",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebLinkedCatalogHelper",
    "WAWebProductCatalogMetaLinkingGatingUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebChatGetters").getIsNewsletter(e)) return !1;
      var t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return !(
        !c() ||
        o("WAWebBizGatingUtils").blockCatalogCreationECommerceComplianceIndia(
          t,
        ) ||
        o(
          "WAWebProductCatalogMetaLinkingGatingUtils",
        ).shouldDisableCatalogDueToMetaLinkingForSelf()
      );
    }
    function s() {
      return o(
        "WAWebProductCatalogMetaLinkingGatingUtils",
      ).shouldShowMetaLinkedDisabledCatalogTooltipForSelf();
    }
    function u(e) {
      if (
        !o("WAWebConnModel").Conn.isSMB ||
        o("WAWebChatGetters").getIsGroup(e) ||
        o("WAWebChatGetters").getIsNewsletter(e) ||
        o("WAWebChatGetters").getIsBroadcast(e) ||
        o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog()
      )
        return !1;
      if (o("WAWebBizGatingUtils").orderDetailsCustomItemEnabled()) return !0;
      var t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return (
        o("WAWebBizGatingUtils").orderDetailsFromCatalogEnabled() &&
        o("WAWebBusinessProfileUtils").hasCatalog(t)
      );
    }
    function c() {
      if (!o("WAWebConnModel").Conn.isSMB) return !1;
      var e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return !o("WAWebBusinessProfileUtils").hasShop(e);
    }
    function d(e) {
      var t = o("WAWebLidMigrationUtils").toPn(e.contact.id),
        n = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          t == null ? void 0 : t.user,
        );
      return !(
        !o("WAWebConnModel").Conn.isSMB ||
        o("WAWebChatGetters").getIsGroup(e) ||
        o("WAWebContactGetters").getIsMe(e.contact) ||
        n !== "BR" ||
        e.contact.isEnterprise
      );
    }
    ((l.shouldShowCatalogOption = e),
      (l.shouldShowDisabledCatalogOption = s),
      (l.canSendOrder = u),
      (l.canSendPix = d));
  },
  98,
);
