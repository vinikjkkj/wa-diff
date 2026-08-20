__d(
  "WAWebAttachMenuUtils",
  [
    "WAWebBizCatalogGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebChatGetters",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebLinkedCatalogHelper",
    "WAWebOrderGatingUtils",
    "WAWebProductCatalogMetaLinkingGatingUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebChatGetters").getIsNewsletter(e) || e.id.isAiHub()) return !1;
      var t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
      );
      return !(
        !c() ||
        o(
          "WAWebBizCatalogGatingUtils",
        ).blockCatalogCreationECommerceComplianceIndia(t) ||
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
        !o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) ||
        o("WAWebChatGetters").getIsGroup(e) ||
        o("WAWebChatGetters").getIsNewsletter(e) ||
        o("WAWebChatGetters").getIsBroadcast(e) ||
        e.id.isAiHub() ||
        o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog()
      )
        return !1;
      if (o("WAWebOrderGatingUtils").orderDetailsCustomItemEnabled()) return !0;
      var t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
      );
      return (
        o("WAWebOrderGatingUtils").orderDetailsFromCatalogEnabled() &&
        o("WAWebBusinessProfileUtils").hasCatalog(t)
      );
    }
    function c() {
      if (!o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) return !1;
      var e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
      );
      return !o("WAWebBusinessProfileUtils").hasShop(e);
    }
    function d(e) {
      var t = o("WAWebLidMigrationUtils").toPn(e.contact.id),
        n = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          t == null ? void 0 : t.user,
        );
      return !(
        !o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) ||
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
