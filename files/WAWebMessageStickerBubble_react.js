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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(56),
        n = e.animateOnView,
        a = e.displayAuthor,
        i = e.displayType,
        l = e.forwardRef,
        u = e.isGroupedSticker,
        c = e.mediaData,
        p = e.msg,
        _ = e.onDetailsPaneClosed,
        f = e.position,
        g = e.quotedMsg,
        h = e.stickerLikeBubbleContainerRef,
        y = u === void 0 ? !1 : u,
        C;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = [
            o("WAWebMsgGetters").getIsNewMsg,
            o("WAWebMsgGetters").getIsSentByMe,
          ]),
          (t[0] = C))
        : (C = t[0]);
      var b = o("useWAWebMsgValues").useMsgValues(p.id, C),
        v = b[0],
        S = b[1],
        R = d(!1),
        L = R[0],
        E = R[1],
        k = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(p),
        I;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = { root: null, threshold: 0 }), (t[1] = I))
        : (I = t[1]);
      var T = r("useWAWebIntersection")(I),
        D = T[0],
        x = T[1],
        $ = x.isIntersecting,
        P;
      (t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = ["mediaStage"]), (t[2] = P))
        : (P = t[2]),
        o("useWAWebModelValues").useOptionalModelValues(c, P));
      var N;
      t[3] !== c
        ? ((N = function (t) {
            c != null &&
              o("WAWebStateUtils").unproxy(c).set("animatedAsNewMsg", t);
          }),
          (t[3] = c),
          (t[4] = N))
        : (N = t[4]);
      var M = N;
      o("useWAWebMarkAnimatedAsNewMsg").useMarkAnimatedAsNewMsg(L, M);
      var w;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = function () {
            E(!1);
          }),
          (t[5] = w))
        : (w = t[5]);
      var A = w;
      if (c == null) return null;
      var F;
      t[6] !== c.mimetype
        ? ((F = o("WAWebStickerUtils").getStickerFileType(c.mimetype)),
          (t[6] = c.mimetype),
          (t[7] = F))
        : (F = t[7]);
      var O = F === o("WAWebStickerUtils").StickerFileType.LOTTIE,
        B,
        W;
      if (
        t[8] !== $ ||
        t[9] !== O ||
        t[10] !== v ||
        t[11] !== c.animatedAsNewMsg ||
        t[12] !== c.filehash ||
        t[13] !== L
      ) {
        var q = o("WAWebABProps").getABPropConfigValue(
          "aura_stickers_overlay_animation_enabled",
        );
        ((B = function () {
          return (
            q &&
            O &&
            o(
              "WAWebInMemoryLottieStickerCache",
            ).InMemorySecondaryLottieStickerCache.has(c.filehash)
          );
        }),
          (W = !L && $ && v === !0 && !c.animatedAsNewMsg && B()),
          (t[8] = $),
          (t[9] = O),
          (t[10] = v),
          (t[11] = c.animatedAsNewMsg),
          (t[12] = c.filehash),
          (t[13] = L),
          (t[14] = B),
          (t[15] = W));
      } else ((B = t[14]), (W = t[15]));
      W && E(!0);
      var U;
      t[16] !== l || t[17] !== B || t[18] !== p
        ? ((U = function (t) {
            if ((o("WAWebStopEvent").stopPropagation(t), B())) {
              E(!0);
              return;
            }
            o("WAWebCmd").Cmd.mediaViewerModal({
              msg: o("WAWebStateUtils").unproxy(p.unsafe()),
              getZoomNode: function () {
                var e;
                return l == null || (e = l.current) == null
                  ? void 0
                  : e.getImgNode();
              },
            });
          }),
          (t[16] = l),
          (t[17] = B),
          (t[18] = p),
          (t[19] = U))
        : (U = t[19]);
      var V = U,
        H =
          c.stickerPremiumStatus ===
          o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM,
        G;
      t[20] !== H || t[21] !== S
        ? ((G = H && S === r("WAWebL10N").isRTL()),
          (t[20] = H),
          (t[21] = S),
          (t[22] = G))
        : (G = t[22]);
      var z = G,
        j;
      t[23] !== z
        ? ((j = {
            0: {
              className: "x1n2onr6 x1plvlek xryxfnj x1vjgj0v x1rg5ohu x3ajldb",
            },
            1: {
              className:
                "x1n2onr6 x1plvlek xryxfnj x1vjgj0v x1rg5ohu x3ajldb xpk2tj9",
            },
          }[!!z << 0]),
          (t[23] = z),
          (t[24] = j))
        : (j = t[24]);
      var K;
      t[25] !== n ||
      t[26] !== k ||
      t[27] !== l ||
      t[28] !== v ||
      t[29] !== V ||
      t[30] !== c
        ? ((K = s.jsx(r("WAWebSticker.react"), {
            ref: l,
            mediaData: c,
            theme: "conversation",
            isNewMsg: v,
            downloadMedia: k,
            animateOnView: n,
            onClick: V,
            onEnter: V,
          })),
          (t[25] = n),
          (t[26] = k),
          (t[27] = l),
          (t[28] = v),
          (t[29] = V),
          (t[30] = c),
          (t[31] = K))
        : (K = t[31]);
      var Q;
      t[32] !== c || t[33] !== p || t[34] !== K
        ? ((Q = s.jsx(r("WAWebMessageStickerMediaControl.react"), {
            mediaData: c,
            msg: p,
            children: K,
          })),
          (t[32] = c),
          (t[33] = p),
          (t[34] = K),
          (t[35] = Q))
        : (Q = t[35]);
      var X;
      t[36] !== c || t[37] !== L
        ? ((X =
            L &&
            s.jsx(r("WAWebStickerOverlayAnimation.react"), {
              mediaData: c,
              onClose: A,
              sizePercent: 387,
            })),
          (t[36] = c),
          (t[37] = L),
          (t[38] = X))
        : (X = t[38]);
      var Y;
      t[39] !== D || t[40] !== j || t[41] !== Q || t[42] !== X
        ? ((Y = s.jsxs(
            "div",
            babelHelpers.extends({ ref: D }, j, { children: [Q, X] }),
          )),
          (t[39] = D),
          (t[40] = j),
          (t[41] = Q),
          (t[42] = X),
          (t[43] = Y))
        : (Y = t[43]);
      var J = Y,
        Z = L ? m.overlayActive : void 0,
        ee;
      return (
        t[44] !== a ||
        t[45] !== i ||
        t[46] !== y ||
        t[47] !== c ||
        t[48] !== p ||
        t[49] !== J ||
        t[50] !== _ ||
        t[51] !== f ||
        t[52] !== g ||
        t[53] !== h ||
        t[54] !== Z
          ? ((ee = s.jsx(r("WAWebMessageStickerLikeBubbleContainer.react"), {
              displayAuthor: a,
              mediaData: c,
              msg: p,
              quotedMsg: g,
              position: f,
              displayType: i,
              onDetailsPaneClosed: _,
              msgContent: J,
              ref: h,
              displayCtwaContext: !0,
              isGroupedSticker: y,
              bubbleStyle: Z,
            })),
            (t[44] = a),
            (t[45] = i),
            (t[46] = y),
            (t[47] = c),
            (t[48] = p),
            (t[49] = J),
            (t[50] = _),
            (t[51] = f),
            (t[52] = g),
            (t[53] = h),
            (t[54] = Z),
            (t[55] = ee))
          : (ee = t[55]),
        ee
      );
    }
    l.default = p;
  },
  98,
);
