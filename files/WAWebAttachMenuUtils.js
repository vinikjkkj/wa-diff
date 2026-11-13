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
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s({
        chatId: e.id,
        isNewsletter: o("WAWebChatGetters").getIsNewsletter(e),
      });
    }
    function s(e) {
      var t = e.chatId,
        n = e.isNewsletter;
      if (n || t.isAiHub()) return !1;
      var r = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserUtils").getMeUserOrThrow(),
      );
      return !(
        !m() ||
        o(
          "WAWebBizCatalogGatingUtils",
        ).blockCatalogCreationECommerceComplianceIndia(r)
      );
    }
    function u() {
      return o(
        "WAWebProductCatalogMetaLinkingGatingUtils",
      ).shouldShowMetaLinkedDisabledCatalogTooltipForSelf();
    }
    function c(e) {
      return d({
        chatId: e.id,
        isBroadcast: o("WAWebChatGetters").getIsBroadcast(e),
        isGroup: o("WAWebChatGetters").getIsGroup(e),
        isNewsletter: o("WAWebChatGetters").getIsNewsletter(e),
      });
    }
    function d(e) {
      var t = e.chatId,
        n = e.isBroadcast,
        r = e.isGroup,
        a = e.isNewsletter;
      if (
        !o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) ||
        r ||
        a ||
        n ||
        t.isAiHub() ||
        o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog()
      )
        return !1;
      if (o("WAWebOrderGatingUtils").orderDetailsCustomItemEnabled()) return !0;
      var i = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserUtils").getMeUserOrThrow(),
      );
      return (
        o("WAWebOrderGatingUtils").orderDetailsFromCatalogEnabled() &&
        o("WAWebBusinessProfileUtils").hasCatalog(i)
      );
    }
    function m() {
      if (!o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) return !1;
      var e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserUtils").getMeUserOrThrow(),
      );
      return !o("WAWebBusinessProfileUtils").hasShop(e);
    }
    ((l.shouldShowCatalogOption = e),
      (l.shouldShowCatalogOptionFor = s),
      (l.shouldShowDisabledCatalogOption = u),
      (l.canSendOrder = c),
      (l.canSendOrderFor = d));
  },
  98,
);
