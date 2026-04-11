__d(
  "WAWebMessageAnimatedEmoji.react",
  [
    "WAWebLottieWrapper.react",
    "WAWebMessageStickerLikeBubbleContainer.react",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        bubble: { zIndex: "x157c1n", $$css: !0 },
        placeholderContainer: {
          position: "x10l6tqk",
          width: "xm4d0b7",
          height: "x1fmsig4",
          $$css: !0,
        },
      },
      c = {
        svgContainer: {
          width: "xwrzu5u",
          height: "xfltuzg",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          zIndex: "xyw6214",
          $$css: !0,
        },
        wrapper: {
          position: "x1n2onr6",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        lottieAnimatedEmojiContainer: {
          width: "xm4d0b7",
          height: "x1fmsig4",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        n = e.asset,
        a = e.msg,
        i = s.jsx(r("WAWebLottieWrapper.react"), {
          data: n,
          lottieWrapperXStyle: [
            (t = o("WAWebUISpacing")).uiPadding.top20,
            t.uiMargin.bottom14,
            t.uiMargin.start15,
            t.uiMargin.end18,
            c.lottieAnimatedEmojiContainer,
          ],
          lottieSVGContainerXStyle: c.svgContainer,
          lottieSVGContainerWrapperXStyle: c.wrapper,
          placeholderContainerXStyle: u.placeholderContainer,
          maxLoopCount: 1,
        });
      return s.jsx(r("WAWebMessageStickerLikeBubbleContainer.react"), {
        displayAuthor: e.displayAuthor,
        msg: a,
        quotedMsg: e.quotedMsg,
        position: e.position,
        displayType: e.displayType,
        onDetailsPaneClosed: e.onDetailsPaneClosed,
        msgContent: i,
        ref: e.stickerLikeBubbleContainerRef,
        bubbleStyle: u.bubble,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = d;
    l.default = m;
  },
  98,
);
