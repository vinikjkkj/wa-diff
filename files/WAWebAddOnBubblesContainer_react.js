__d(
  "WAWebAddOnBubblesContainer.react",
  [
    "WAWebAddOnBubble.react",
    "WAWebAddOnBubbleRenderUtils",
    "WAWebAddOnBubbleType",
    "WAWebAddOnBubblesContainerConditions",
    "WAWebCommentsBubbleContainer.react",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMessageHandlers",
    "WAWebMsgCollection",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebReactionsBubbleContainer.react",
    "WAWebRollerCounter.react",
    "WAWebUnstyledButton.react",
    "WDSIconIcFastForward.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        container: {
          display: "x78zum5",
          bottom: "xbfrwjf",
          zIndex: "x8k05lb",
          width: "xeq5yr9",
          $$css: !0,
        },
        positionRelative: { position: "x1n2onr6", $$css: !0 },
        startAlign: {
          insetInlineStart: "xrr41r3",
          left: null,
          right: null,
          alignSelf: "xqcrz7y",
          $$css: !0,
        },
        endAlign: {
          insetInlineEnd: "x1f889gz",
          left: null,
          right: null,
          alignSelf: "xpvyfi4",
          $$css: !0,
        },
        startAlignMediaViewer: {
          position: "x10l6tqk",
          insetInlineStart: "xaoy8p5",
          insetInlineEnd: "xvihmje",
          left: null,
          right: null,
          bottom: "x130t2gz",
          $$css: !0,
        },
        endAlignMediaViewer: {
          position: "x10l6tqk",
          insetInlineStart: "x1tvzbhf",
          insetInlineEnd: "xz03a8w",
          left: null,
          right: null,
          bottom: "x130t2gz",
          $$css: !0,
        },
        sticker: {
          insetInlineStart: "x1tvzbhf",
          insetInlineEnd: "xz03a8w",
          left: null,
          right: null,
          $$css: !0,
        },
        image: { bottom: "x1wa3icf", $$css: !0 },
        wideSticker: {
          insetInlineStart: "xrr41r3",
          insetInlineEnd: "xvihmje",
          left: null,
          right: null,
          $$css: !0,
        },
        svgColorRefreshed: { color: "xhslqc4", $$css: !0 },
        button: { paddingInlineStart: "x181vq82", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(33),
        a = t.bubbleType,
        i = t.canHaveComments,
        l = t.displayType,
        s = t.isOutgoingMsg,
        d = t.parentIds,
        p,
        _,
        f,
        g;
      if (
        n[0] !== a ||
        n[1] !== i ||
        n[2] !== l ||
        n[3] !== s ||
        n[4] !== d ||
        n[5] !== t.displayReactionBubble ||
        n[6] !== t.hasReaction ||
        n[7] !== t.onDetailsPaneClosed
      ) {
        var h = o("WAWebDisplayType").isWideDisplay(l),
          y = s && !h,
          C = !y;
        ((p = null), (f = null), (_ = null));
        var b;
        n[12] !== d[0]
          ? ((b = o("WAWebMsgCollection").MsgCollection.get(d[0])),
            (n[12] = d[0]),
            (n[13] = b))
          : (b = n[13]);
        var v = b;
        if ((d == null ? void 0 : d.length) === 1) {
          var S;
          (n[14] !== a || n[15] !== l || n[16] !== v
            ? ((S = u.jsx(m, { parentMsg: v, displayType: l, bubbleType: a })),
              (n[14] = a),
              (n[15] = l),
              (n[16] = v),
              (n[17] = S))
            : (S = n[17]),
            (_ = S));
        }
        if (i !== !1 && d != null && d.length > 0) {
          var R;
          (n[18] !== d
            ? ((R = u.jsx(r("WAWebCommentsBubbleContainer.react"), {
                msgIds: d,
              })),
              (n[18] = d),
              (n[19] = R))
            : (R = n[19]),
            (p = R));
        }
        if (d != null && d.length > 0) {
          var L;
          (n[20] !== a ||
          n[21] !== l ||
          n[22] !== s ||
          n[23] !== d ||
          n[24] !== t.displayReactionBubble ||
          n[25] !== t.hasReaction ||
          n[26] !== t.onDetailsPaneClosed
            ? ((L = u.jsx(
                o("WAWebReactionsBubbleContainer.react")
                  .ReactionBubbleContainer,
                {
                  msgIds: d,
                  isOutgoingMsg: s,
                  displayType: l,
                  reactionBubbleType: a,
                  hasReaction: t.hasReaction,
                  onDetailsPaneClosed: t.onDetailsPaneClosed,
                  reactionBubbleVisible: t.displayReactionBubble,
                },
              )),
              (n[20] = a),
              (n[21] = l),
              (n[22] = s),
              (n[23] = d),
              (n[24] = t.displayReactionBubble),
              (n[25] = t.hasReaction),
              (n[26] = t.onDetailsPaneClosed),
              (n[27] = L))
            : (L = n[27]),
            (f = L));
        }
        ((g = (e || (e = r("stylex"))).props(
          c.container,
          (!o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(l) ||
            a !== o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG) &&
            c.positionRelative,
          C && c.startAlign,
          y && c.endAlign,
          a === o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG &&
            c.sticker,
          a === o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG &&
            h &&
            c.wideSticker,
          a === o("WAWebAddOnBubbleType").AddOnBubbleType.IMAGE_MSG && c.image,
          a === o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER &&
            C &&
            c.startAlignMediaViewer,
          a === o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER &&
            y &&
            c.endAlignMediaViewer,
        )),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l),
          (n[3] = s),
          (n[4] = d),
          (n[5] = t.displayReactionBubble),
          (n[6] = t.hasReaction),
          (n[7] = t.onDetailsPaneClosed),
          (n[8] = p),
          (n[9] = _),
          (n[10] = f),
          (n[11] = g));
      } else ((p = n[8]), (_ = n[9]), (f = n[10]), (g = n[11]));
      var E;
      return (
        n[28] !== p || n[29] !== _ || n[30] !== f || n[31] !== g
          ? ((E = u.jsxs(
              "div",
              babelHelpers.extends({}, g, {
                "data-testid": void 0,
                children: [f, p, _],
              }),
            )),
            (n[28] = p),
            (n[29] = _),
            (n[30] = f),
            (n[31] = g),
            (n[32] = E))
          : (E = n[32]),
        E
      );
    }
    function m(e) {
      var t,
        a = o("react-compiler-runtime").c(11),
        i = e.bubbleType,
        l = e.displayType,
        s = e.parentMsg;
      if (
        !o("WAWebAddOnBubblesContainerConditions").getHasForwardBubble(s, l, i)
      )
        return null;
      var d;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(r("WDSIconIcFastForward.react"), {
            directional: !0,
            iconXstyle: c.svgColorRefreshed,
            height: 20,
          })),
          (a[0] = d))
        : (d = a[0]);
      var m = d,
        p;
      a[1] !== s
        ? ((p = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              s != null &&
                o("WAWebMessageHandlers").handleOpenForwardFlow({
                  msg: s,
                  multiSelect: !1,
                });
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[1] = s),
          (a[2] = p))
        : (p = a[2]);
      var _ = p,
        f =
          s != null && s.forwardedNewsletterMessageInfo
            ? 0
            : (t = s == null ? void 0 : s.forwardsCount) != null
              ? t
              : 0,
        g;
      a[3] !== f || a[4] !== s
        ? ((g =
            f > 0 &&
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).shouldShowNewsletterForwardCounterBubble(
              o("WAWebFrontendMsgGetters").getChat(s),
            )
              ? u.jsx(r("WAWebRollerCounter.react"), {
                  counter: f,
                  shouldAnimate: !1,
                  rollerCounterOptions: {
                    showAggregateMax: !0,
                    showOneToTwoAnimation: !1,
                  },
                })
              : null),
          (a[3] = f),
          (a[4] = s),
          (a[5] = g))
        : (g = a[5]);
      var h = g,
        y;
      a[6] !== _
        ? ((y = u.jsx(r("WAWebUnstyledButton.react"), {
            xstyle: c.button,
            onClick: _,
            children: m,
          })),
          (a[6] = _),
          (a[7] = y))
        : (y = a[7]);
      var C;
      return (
        a[8] !== h || a[9] !== y
          ? ((C = u.jsxs(r("WAWebAddOnBubble.react"), { children: [y, h] })),
            (a[8] = h),
            (a[9] = y),
            (a[10] = C))
          : (C = a[10]),
        C
      );
    }
    l.default = d;
  },
  98,
);
