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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.msg,
        r = e.theme,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebMsgGetters").getUnreadQuestionResponsesCount,
            o("WAWebMsgGetters").getServerId,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n.id, a),
        l = i[0],
        s = i[1],
        d = o("WAWebMsgGetters").getHasOriginatedFromNewsletter(n),
        m = o(
          "useWAWebForwardedNewsletterMessageClickHandler",
        ).useForwardedNewsletterMessageClickHandler(
          n,
          o("WAWebNewsletterGatingUtils")
            .isNewsletterForwardBottomButtonEnabled,
        );
      if (!(!d || o("WAWebFrontendMsgGetters").getIsTransparentMsg(n))) {
        var p;
        if (t[1] !== m || t[2] !== n || t[3] !== s || t[4] !== l) {
          p = [];
          var _;
          t[6] !== n || t[7] !== l
            ? ((_ = o("WAWebQuestionsRenderingUtils").getQuestionAction(n, l)),
              (t[6] = n),
              (t[7] = l),
              (t[8] = _))
            : (_ = t[8]);
          var f = _;
          f != null && p.push(f);
          var g;
          t[9] !== n ? ((g = c(n)), (t[9] = n), (t[10] = g)) : (g = t[10]);
          var h = g;
          if ((h != null && p.push(h), m != null)) {
            var y,
              C =
                ((y = n.forwardedNewsletterMessageInfo) == null
                  ? void 0
                  : y.newsletterId) === n.id.remote
                  ? s
                  : null,
              b;
            t[11] !== C
              ? ((b = o(
                  "WAWebCommonNewsletterStrings",
                ).getNewsletterLinkActionLabel("view", C)),
                (t[11] = C),
                (t[12] = b))
              : (b = t[12]);
            var v;
            (t[13] !== m || t[14] !== b
              ? ((v = {
                  label: b,
                  onClick: m,
                  testid: "newsletter-invite-link-action",
                }),
                (t[13] = m),
                (t[14] = b),
                (t[15] = v))
              : (v = t[15]),
              p.push(v));
          }
          ((t[1] = m), (t[2] = n), (t[3] = s), (t[4] = l), (t[5] = p));
        } else p = t[5];
        if (p.length !== 0) {
          var S =
              r != null
                ? r
                : o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                    .FORWARDED_NEWSLETTER,
            R;
          return (
            t[16] !== p || t[17] !== S
              ? ((R = u.jsx(
                  o("WAWebMessageBubbleActions.react").BubbleActions,
                  { items: p, theme: S, direction: "vertical" },
                )),
                (t[16] = p),
                (t[17] = S),
                (t[18] = R))
              : (R = t[18]),
            R
          );
        }
      }
    }
    l.default = d;
  },
  226,
);
