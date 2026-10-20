__d(
  "WAWebAttachMenuUtils",
  [
    "WAWebBizCatalogGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebChatGetters",
    "WAWebConnGetters",
    "WAWebConnModel",
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
        ).blockCatalogCreationECommerceComplianceIndia(t)
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
    ((l.shouldShowCatalogOption = e),
      (l.shouldShowDisabledCatalogOption = s),
      (l.canSendOrder = u));
  },
  98,
);
