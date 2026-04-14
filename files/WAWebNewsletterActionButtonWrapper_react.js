__d(
  "WAWebNewsletterActionButtonWrapper.react",
  [
    "fbt",
    "WAWebApiParse",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardTabUtils",
    "WAWebMessageBubbleActions.react",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebQuestionsRenderingUtils",
    "WAWebSendStickerToActiveChatStickersAction",
    "WAWebStickerPackCollectionMd",
    "WAWebStickerPackUtils",
    "WAWebStickerStoreFlowLoadable",
    "react",
    "useWAWebForwardedNewsletterMessageClickHandler",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t =
        e.isForwarded &&
        o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e) &&
        o(
          "WAWebNewsletterGatingUtils",
        ).isStickerPackForwardedAttributionEnabled();
      if (!t) return null;
      var n = function (n) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            u.jsx(r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable, {
              stickerPackId: n,
              onSticker: r("WAWebSendStickerToActiveChatStickersAction"),
              msg: e.unsafe(),
            }),
            { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
          );
        },
        a = s._(/*BTDS*/ "View sticker pack"),
        i = e.body;
      if (i == null) return null;
      if (o("WAWebApiParse").isStickerPackURL(i)) {
        var l = function () {
          var e = o("WAWebStickerPackUtils").extractStickerPackIdFromUrl(i);
          e != null &&
            o("WAWebStickerPackCollectionMd")
              .StickerPackCollectionMd.fetchStickerPack(e)
              .then(function () {
                n(e);
              })
              .catch(r("WAWebNoop"));
        };
        return {
          label: a,
          title: a,
          onClick: l,
          disabled: !1,
          testid: "view-sticker-pack",
        };
      }
    }
    function d(e) {
      var t = e.msg,
        n = e.theme,
        r = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getUnreadQuestionResponsesCount,
          o("WAWebMsgGetters").getServerId,
        ]),
        a = r[0],
        i = r[1],
        l = o("WAWebMsgGetters").getHasOriginatedFromNewsletter(t),
        s = o(
          "useWAWebForwardedNewsletterMessageClickHandler",
        ).useForwardedNewsletterMessageClickHandler(
          t,
          o("WAWebNewsletterGatingUtils")
            .isNewsletterForwardBottomButtonEnabled,
        );
      if (!(!l || o("WAWebFrontendMsgGetters").getIsTransparentMsg(t))) {
        var d = [],
          m = o("WAWebQuestionsRenderingUtils").getQuestionAction(t, a);
        m != null && d.push(m);
        var p = c(t);
        if ((p != null && d.push(p), s != null)) {
          var _;
          d.push({
            label: o(
              "WAWebCommonNewsletterStrings",
            ).getNewsletterLinkActionLabel(
              "view",
              ((_ = t.forwardedNewsletterMessageInfo) == null
                ? void 0
                : _.newsletterId) === t.id.remote
                ? i
                : null,
            ),
            onClick: s,
            testid: "newsletter-invite-link-action",
          });
        }
        if (d.length !== 0)
          return u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: d,
            theme:
              n != null
                ? n
                : o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                    .FORWARDED_NEWSLETTER,
            direction: "vertical",
          });
      }
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
