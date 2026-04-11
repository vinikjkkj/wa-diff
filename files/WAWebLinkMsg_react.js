__d(
  "WAWebLinkMsg.react",
  [
    "cx",
    "WAWebBizSuspiciousLabel.react",
    "WAWebClassnames",
    "WAWebDisplayType",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebGalleryMsg.react",
    "WAWebL10N",
    "WAWebMediaLinkPreview.react",
    "WAWebMessageAuthor.react",
    "WAWebMessageCheckbox.react",
    "WAWebMessageContainer.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgModelPropUtils",
    "WAWebMsgPhoneNumbers",
    "WAWebUISpacing",
    "WAWebVelocityTransitionGroup",
    "react",
    "stylex",
    "useWAWebListener",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        msg: {
          position: "x1n2onr6",
          display: "x78zum5",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
      };
    function p(t) {
      var n,
        a,
        i,
        l = t.displayAuthor,
        s = t.link,
        u = t.msg,
        p = t.onClickMsg,
        _ = t.onMessageSelect,
        f = t.selectedMessages,
        g = t.testid,
        h = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
          (a = o("WAWebMsgGetters")).getBody,
          a.getCaption,
          (i = o("WAWebFrontendMsgGetters")).getDir,
          a.getId,
          a.getIsSentByMe,
          i.getMediaData,
          a.getType,
          i.getRtl,
          i.getSenderObj,
          a.getStar,
          i.getAsRevoked,
          a.getIsKept,
        ]),
        y = h[0],
        C = h[1],
        b = h[2],
        v = h[3],
        S = h[4],
        R = h[5],
        L = h[6],
        E = h[7],
        k = h[8],
        I = h[9],
        T = h[10],
        D = h[11],
        x = d(!1),
        $ = x[0],
        P = x[1],
        N = d(function () {
          return f.isSelected(u.unsafe());
        }),
        M = N[0],
        w = N[1],
        A = function (t) {
          M !== t && w(t);
        };
      o("useWAWebListener").useListener(f, v.toString(), A);
      var F = function () {
          $ || P(!0);
        },
        O = function () {
          $ || P(!0);
        },
        B = function () {
          $ && P(!1);
        },
        W = function () {
          p(u.unsafe(), !M);
        },
        q = function (t) {
          (t && t.stopPropagation(), _(u.unsafe(), !M, t));
        },
        U =
          t.selectable === !0 || $
            ? c.jsx(r("WAWebMessageCheckbox.react"), {
                checked: M,
                onClick: q,
                msgTheme: "gallery",
              })
            : null,
        V = !0,
        H = o("WAWebFormatConfiguration").Conversation({
          mentions: u.mentionMap(),
          groupMentions: u.groupMentionMap(),
          links: o("WAWebMsgLinks").getLinksFromMsg(u.unsafe()),
          phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(
            u.unsafe(),
          ),
          selectable: V,
          trusted: o("WAWebMsgModelPropUtils").isTrusted(u.unsafe()),
          fromMe: v.fromMe,
          fromChatWid: v.remote,
          parseLists: !0,
          parseQuotes: !0,
          parseInlineCode: !0,
        }),
        G = y && y.includes(s.url) ? y : C,
        z = l
          ? c.jsx("div", {
              className: "_ak16",
              children: c.jsx(r("WAWebMessageAuthor.react"), {
                msg: u,
                contact: k,
              }),
            })
          : null,
        j = o("WAWebMsgLinks").getSuspiciousLinks(u.unsafe()).length > 0;
      return c.jsx(r("WAWebGalleryMsg.react"), {
        hover: $,
        onClick: W,
        onMouseEnter: $ ? null : O,
        onMouseOver: $ ? null : F,
        onMouseLeave: $ ? B : null,
        testid: void 0,
        children: c.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props([
              m.msg,
              o("WAWebUISpacing").uiPadding.end12,
              o("WAWebUISpacing").uiPadding.start30,
            ]),
            {
              "data-testid": void 0,
              children: [
                c.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: "delay-leave",
                  children: U,
                }),
                c.jsx(r("WAWebMessageContainer.react"), {
                  isSentByMe: S,
                  children: c.jsxs("div", {
                    className: o(
                      "WAWebClassnames",
                    ).classnamesConvertMeToStylexPlease(
                      ((n = {}),
                      (n._ak18 = l),
                      (n._ak17 = j),
                      (n._ak15 = !0),
                      n),
                    ),
                    children: [
                      z,
                      c.jsx(
                        o("WAWebBizSuspiciousLabel.react").SuspiciousLabel,
                        {
                          link: s,
                          displayType:
                            o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
                        },
                      ),
                      c.jsx(r("WAWebMediaLinkPreview.react"), {
                        title: s.url,
                        isSentByMe: S,
                        matchedText: s.domain,
                        displayType: o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
                        star: I,
                        kept: D,
                        isLoading: !1,
                      }),
                      c.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: G,
                        selectable: V,
                        className: "_ak14",
                        dirMismatch: E !== r("WAWebL10N").isRTL(),
                        direction: b,
                        formatters: H,
                      }),
                    ],
                  }),
                }),
              ],
            },
          ),
        ),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
