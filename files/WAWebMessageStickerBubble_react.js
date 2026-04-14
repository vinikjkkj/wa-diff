__d(
  "WAWebMessageStickerBubble.react",
  [
    "WAWebABProps",
    "WAWebCmd",
    "WAWebInMemoryLottieStickerCache",
    "WAWebL10N",
    "WAWebMessageStickerLikeBubbleContainer.react",
    "WAWebMessageStickerMediaControl.react",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "WAWebSticker.react",
    "WAWebStickerOverlayAnimation.react",
    "WAWebStickerPremiumStatus",
    "WAWebStickerUtils",
    "WAWebStopEvent",
    "react",
    "useWAWebIntersection",
    "useWAWebMarkAnimatedAsNewMsg",
    "useWAWebModelValues",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState,
      m = { overlayActive: { zIndex: "xfo81ep", $$css: !0 } };
    function p(e) {
      var t = e.animateOnView,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.forwardRef,
        l = e.isGroupedSticker,
        u = l === void 0 ? !1 : l,
        p = e.mediaData,
        _ = e.msg,
        f = e.onDetailsPaneClosed,
        g = e.position,
        h = e.quotedMsg,
        y = e.stickerLikeBubbleContainerRef,
        C = o("useWAWebMsgValues").useMsgValues(_.id, [
          o("WAWebMsgGetters").getIsNewMsg,
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        b = C[0],
        v = C[1],
        S = d(!1),
        R = S[0],
        L = S[1],
        E = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(_),
        k = r("useWAWebIntersection")({ root: null, threshold: 0 }),
        I = k[0],
        T = k[1].isIntersecting;
      o("useWAWebModelValues").useOptionalModelValues(p, ["mediaStage"]);
      var D = c(
        function (e) {
          p != null &&
            o("WAWebStateUtils").unproxy(p).set("animatedAsNewMsg", e);
        },
        [p],
      );
      o("useWAWebMarkAnimatedAsNewMsg").useMarkAnimatedAsNewMsg(R, D);
      var x = c(function () {
        L(!1);
      }, []);
      if (p == null) return null;
      var $ =
          o("WAWebStickerUtils").getStickerFileType(p.mimetype) ===
          o("WAWebStickerUtils").StickerFileType.LOTTIE,
        P = o("WAWebABProps").getABPropConfigValue(
          "aura_stickers_overlay_animation_enabled",
        ),
        N = function () {
          return (
            P &&
            $ &&
            o(
              "WAWebInMemoryLottieStickerCache",
            ).InMemorySecondaryLottieStickerCache.has(p.filehash)
          );
        };
      !R && T && b === !0 && !p.animatedAsNewMsg && N() && L(!0);
      var M = function (t) {
          if ((o("WAWebStopEvent").stopPropagation(t), N())) {
            L(!0);
            return;
          }
          o("WAWebCmd").Cmd.mediaViewerModal({
            msg: o("WAWebStateUtils").unproxy(_.unsafe()),
            getZoomNode: function () {
              var e;
              return i == null || (e = i.current) == null
                ? void 0
                : e.getImgNode();
            },
          });
        },
        w =
          p.stickerPremiumStatus ===
          o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM,
        A = w && v === r("WAWebL10N").isRTL(),
        F = s.jsxs(
          "div",
          babelHelpers.extends(
            { ref: I },
            {
              0: {
                className:
                  "x1n2onr6 x1plvlek xryxfnj x1vjgj0v x1rg5ohu x3ajldb",
              },
              1: {
                className:
                  "x1n2onr6 x1plvlek xryxfnj x1vjgj0v x1rg5ohu x3ajldb xpk2tj9",
              },
            }[!!A << 0],
            {
              children: [
                s.jsx(r("WAWebMessageStickerMediaControl.react"), {
                  mediaData: p,
                  msg: _,
                  children: s.jsx(r("WAWebSticker.react"), {
                    ref: i,
                    mediaData: p,
                    theme: "conversation",
                    isNewMsg: b,
                    downloadMedia: E,
                    animateOnView: t,
                    onClick: M,
                    onEnter: M,
                  }),
                }),
                R &&
                  s.jsx(r("WAWebStickerOverlayAnimation.react"), {
                    mediaData: p,
                    onClose: x,
                    sizePercent: 387,
                  }),
              ],
            },
          ),
        );
      return s.jsx(r("WAWebMessageStickerLikeBubbleContainer.react"), {
        displayAuthor: n,
        mediaData: p,
        msg: _,
        quotedMsg: h,
        position: g,
        displayType: a,
        onDetailsPaneClosed: f,
        msgContent: F,
        ref: y,
        displayCtwaContext: !0,
        isGroupedSticker: u,
        bubbleStyle: R ? m.overlayActive : void 0,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
