__d(
  "WAWebPttAudioBubble.react",
  [
    "cx",
    "WAWebAck",
    "WAWebBizCtwaContext.react",
    "WAWebClassnames",
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "WAWebNewsletterGatingUtils",
    "WAWebPttMessagePlaybackRateButton",
    "WAWebPttPrefs",
    "WAWebShowForwardedNewsletterMessageIndicator",
    "react",
    "stylex",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = "6px",
      m = "336px",
      p = {
        bubble: {
          boxSizing: "x9f619",
          maxWidth: "x193iq5w",
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
        newsletterBubble: { width: "x1yuel0x", $$css: !0 },
        regularBubble: { width: "x121pien", $$css: !0 },
        bubbleAnnouncement: { width: "x1yuel0x", $$css: !0 },
        hasAuthorAnnouncement: { paddingTop: "x1byr4rc", $$css: !0 },
        forwardedIndicator: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xg8j3zb",
          paddingInlineStart: "x135b78x",
          $$css: !0,
        },
        hasAuthorForwardedIndicator: { paddingTop: "x123j3cw", $$css: !0 },
        hasAuthor: { paddingTop: "x9tmck8", $$css: !0 },
        hasAuthorElevatedPushNames: { paddingTop: "xexx8yu", $$css: !0 },
        hasQuote: { paddingTop: "xyqdw3p", $$css: !0 },
      };
    function _(t) {
      var n,
        a,
        i,
        l,
        s,
        u = t.msg,
        d = o("useWAWebMsgValues").useMsgValues(u.id, [
          o("WAWebMsgGetters").getId,
          o("WAWebMsgGetters").getAck,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebFrontendMsgGetters").getAsPttLike,
        ]),
        m = d[0],
        _ = d[1],
        f = d[2],
        g = d[3],
        h = o("WAWebFrontendMsgGetters").getChat(u.unsafe()),
        y = r("WAWebL10N").isRTL() ? !f : f,
        C = t.author != null,
        b = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(h),
        v = t.quotedMsg != null,
        S = o("WAWebMsgSelectors").showForwarded(u),
        R = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((n = {}),
          (n._ak49 = !y),
          (n._ak4a = y),
          (n._ak4e =
            t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ||
            t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY),
          n),
          (e || (e = r("stylex")))(
            t.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
              ? p.regularBubble
              : p.newsletterBubble,
            o("WAWebDisplayType").isWideDisplay(t.displayType) &&
              p.bubbleAnnouncement,
            t.author != null &&
              o("WAWebDisplayType").isWideDisplay(t.displayType) &&
              p.hasAuthorAnnouncement,
            C && p.hasAuthor,
            C && b && p.hasAuthorElevatedPushNames,
            v && p.hasQuote,
            p.bubble,
          ),
        ),
        L = t.status
          ? c.jsx("div", { className: "_ak4g", children: t.status })
          : null,
        E = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((a = {}), (a._ak4c = b), (a._ak4h = !0), a),
          {
            0: "x1e8r7jv xiqdezl",
            8: "x1n2onr6 x1ngbm5e x1tvzbhf xyqdw3p x1djpfga x1e8r7jv xiqdezl",
            4: "x1e8r7jv xiqdezl",
            12: "x1n2onr6 x1ngbm5e x1tvzbhf xyqdw3p x1djpfga x1e8r7jv xiqdezl",
            2: "x1e8r7jv xiqdezl",
            10: "x1n2onr6 x1ngbm5e x1tvzbhf xyqdw3p x1djpfga x1e8r7jv xiqdezl",
            6: "x1e8r7jv xiqdezl",
            14: "x1n2onr6 x1ngbm5e x1tvzbhf xyqdw3p x1djpfga x1e8r7jv xiqdezl",
            1: "xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            9: "x1n2onr6 x1ngbm5e xyqdw3p xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            5: "xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            13: "x1n2onr6 x1ngbm5e xyqdw3p xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            3: "xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            11: "x1n2onr6 x1ngbm5e xyqdw3p xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            7: "xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
            15: "x1n2onr6 x1ngbm5e xyqdw3p xiqdezl xh8yej3 x10b6aqq x4tra6z x1o0tod",
          }[
            (!!v << 3) |
              (!!S << 2) |
              (!!o("WAWebDisplayType").isWideDisplay(t.displayType) << 1) |
              (!!b << 0)
          ],
        ),
        k =
          t.author != null
            ? c.jsx("div", { className: E, children: t.author })
            : null,
        I = o("WAWebMsgSelectors").showForwarded(u)
          ? c.jsx(r("WAWebMessageForwardedIndicator.react"), {
              msg: u.unsafe(),
              xstyle: [
                p.forwardedIndicator,
                C && p.hasAuthorForwardedIndicator,
              ],
            })
          : null,
        T = c.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
          msg: u,
        }),
        D = o(
          "WAWebShowForwardedNewsletterMessageIndicator",
        ).showForwardedNewsletterMessageIndicator(
          u.forwardedNewsletterMessageInfo,
          u.type,
          o("WAWebNewsletterGatingUtils")
            .isNewsletterForwardBottomButtonEnabled,
        ),
        x = t.quotedMsg
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "xdj266r x18faa90 x1e56ztr x4h0osi" },
                  1: { className: "x18faa90 x1e56ztr x4h0osi x1ok221b" },
                }[!!C << 0],
                { children: t.quotedMsg },
              ),
            )
          : null,
        $ = o("useWAWebModelValues").useModelValues(
          o("WAWebPttPrefs").PttPrefs,
          ["playbackRate", "playbackControlMessageId"],
        ),
        P = $.playbackControlMessageId,
        N = $.playbackRate,
        M = g != null,
        w,
        A = !1;
      if (M) {
        var F;
        A = P === m.toString();
        var O = function () {
            o("WAWebPttPrefs").PttPrefs.advancePlaybackRateFor(m);
          },
          B = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((F = {}), (F._ak4l = A), (F._ak4k = !0), F),
          );
        w = c.jsx("div", {
          className: B,
          children: c.jsx(r("WAWebPttMessagePlaybackRateButton"), {
            playbackRate: N,
            onClick: O,
            isSentByMe: f,
            played: _ === o("WAWebAck").ACK.PLAYED,
            playbackRateButtonIsVisible: A,
          }),
        });
      }
      var W = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((i = {}), (i._ak4n = !A), (i._ak4m = !0), i),
        ),
        q = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((l = {}), (l._ak4c = b), (l._ak4o = !0), l),
        ),
        U = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((s = {}), (s._ak4s = !0), s),
          { 0: "", 2: "xbfrwjf", 1: "x1ua38it", 3: "x1ua38it" }[
            (!D << 1) | (!!D << 0)
          ],
        );
      return c.jsxs("div", {
        className: R,
        children: [
          k,
          I,
          T,
          x,
          c.jsx(r("WAWebBizCtwaContext.react"), {
            msg: u.unsafe(),
            wrapperClass: "x1198e8h x18faa90 xahult9 x4h0osi",
          }),
          c.jsxs("div", {
            className: q,
            children: [
              c.jsx("div", { className: "_ak4q", children: t.player }),
              c.jsxs("div", {
                className: "x1n2onr6",
                children: [
                  w,
                  c.jsxs("div", { className: W, children: [t.avatar, L] }),
                ],
              }),
            ],
          }),
          c.jsx("div", {
            className: U,
            children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: u }),
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
