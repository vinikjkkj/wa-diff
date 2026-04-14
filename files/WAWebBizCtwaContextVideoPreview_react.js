__d(
  "WAWebBizCtwaContextVideoPreview.react",
  [
    "cx",
    "fbt",
    "WAWebBizCtwaContextSourceButton.react",
    "WAWebBizCtwaContextThumbImage.react",
    "WAWebClassnames",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebMediaStateControls.react",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebPipController",
    "WAWebPipOverlay.react",
    "WAWebSettingsFBT",
    "WAWebURLUtils",
    "WAWebVideoPipLargeIcon.react",
    "react",
    "stylex",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useMemo,
      _ = m.useRef,
      f = m.useState,
      g = {
        preview: {
          marginTop: "xvijh9v",
          marginInlineEnd: "x1mpyi22",
          marginBottom: "x1ty9z65",
          marginInlineStart: "xm2jcoa",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          fontSize: "x1wl59ut",
          lineHeight: "x1fc57z9",
          borderStartStartRadius: "xaejkm2",
          borderStartEndRadius: "x1uuy6ko",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          $$css: !0,
        },
        bubbleIn: { backgroundColor: "x1bu39yj", $$css: !0 },
        bubbleOut: { backgroundColor: "x1bu39yj", $$css: !0 },
      },
      h = { PREVIEW: "PREVIEW", FLOATER: "FLOATER" };
    function y(t) {
      var n = t.context,
        a = n.sourceApp === "whatsapp",
        i = p(
          function () {
            if (t.msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
              var e = t.msg.toJSON(),
                n = new (r("WAWebMsgKey"))({
                  fromMe: t.msg.id.fromMe,
                  remote: t.msg.id.remote,
                  id: r("WAWebMsgKey").newId_DEPRECATED(),
                });
              return ((e.id = n), new (o("WAWebMsgModel").Msg)(e));
            }
            return t.msg;
          },
          [t.msg],
        ),
        l = _(null),
        s = f(function () {
          return r("WAWebPipController").isOpened(i) ? h.FLOATER : h.PREVIEW;
        }),
        c = s[0],
        m = s[1],
        y = function () {
          m(h.FLOATER);
        },
        C = function () {
          c !== h.PREVIEW && m(h.PREVIEW);
        };
      (o("useWAWebListener").useListener(
        r("WAWebPipController"),
        i.id.toString() + "_pip_did_open",
        y,
      ),
        o("useWAWebListener").useListener(
          r("WAWebPipController"),
          i.id.toString() + "_pip_did_close",
          C,
        ));
      var b = function (t) {
          (t.preventDefault(),
            t.stopPropagation(),
            n.sourceUrl != null &&
              n.sourceUrl !== "" &&
              o("WAWebExternalLink.react").openExternalLink(n.sourceUrl));
        },
        v =
          t.context.sourceUrl != null && t.context.sourceUrl !== ""
            ? r("WAWebURLUtils").withoutWww(
                r("WAWebURLUtils").hostname(t.context.sourceUrl),
              )
            : null,
        S = d.jsx("div", {
          className: "x4p5aij x1pg5gke xhslqc4",
          children: d.jsx(o("WAWebEmojiText.react").EmojiText, { text: v }),
        }),
        R = {
          0: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x6h9qgo x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5",
          1: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x6h9qgo x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5 x193iq5w",
        }[(t.context.thumbnail != null) << 0],
        L =
          n.description != null && n.isSuspiciousLink !== !0
            ? d.jsx("div", {
                className:
                  "x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1pg5gke xhslqc4",
                title: t.context.description,
                children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: t.context.description,
                }),
              })
            : null,
        E = d.jsx("div", {
          className: "x1c4vz4f xo1l8bm x1pg5gke x1k4tb9n xhslqc4",
          title: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewDescription(),
          children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewDescription(),
          }),
        }),
        k =
          n.title != null && n.isSuspiciousLink !== !0
            ? d.jsx("div", {
                className:
                  "x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub",
                title: n.title,
                children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: n.title,
                }),
              })
            : null,
        I = d.jsx("div", {
          className:
            "x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub xk50ysn",
          title: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle(),
          children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle(),
          }),
        }),
        T = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          (e || (e = r("stylex")))(
            g.preview,
            (o("WAWebMsgGetters").getIsSentByMe(i) && g.bubbleOut) ||
              g.bubbleIn,
          ),
          "_ah-7",
        ),
        D =
          c === h.PREVIEW && !a
            ? d.jsx("div", {
                className:
                  "x10l6tqk x13vifvy x1o0tod x1ja2u2z xh8yej3 x5yr21d x1ypdohk",
                children: d.jsx(o("WAWebMediaStateControls.react").Play, {}),
              })
            : null,
        x =
          c === h.FLOATER
            ? d.jsx(r("WAWebPipOverlay.react"), {
                icon: d.jsx(
                  o("WAWebVideoPipLargeIcon.react").VideoPipLargeIcon,
                  {},
                ),
                children: u._(
                  /*BTDS*/ "This video is playing in picture in picture.",
                ),
              })
            : null;
      return d.jsxs("div", {
        className: T,
        children: [
          d.jsxs(
            "div",
            babelHelpers.extends(
              {
                ref: l,
                className:
                  "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 x6aax8c x6ikm8r x10wlt62",
              },
              !a && { onClick: b },
              {
                children: [
                  v != null && !a
                    ? d.jsx(r("WAWebBizCtwaContextSourceButton.react"), {
                        hostname: v,
                        onClick: b,
                      })
                    : null,
                  d.jsx(
                    o("WAWebBizCtwaContextThumbImage.react")
                      .CtwaContextThumbImage,
                    {
                      context: n,
                      className:
                        "x1n2onr6 xjibb99 x1ur3nm9 xmi39wt x1h1h5sg x1ypdohk x14tgpju x15622t4 xl1xv1r",
                    },
                  ),
                  D,
                  x,
                ],
              },
            ),
          ),
          !a &&
            (n.sourceUrl == null || n.sourceUrl === ""
              ? d.jsxs("div", { children: [k, L, S] })
              : d.jsxs(o("WAWebExternalLink.react").ExternalLink, {
                  className: R,
                  href: n.sourceUrl,
                  children: [k, L, S],
                })),
          a && d.jsxs("div", { className: R, children: [I, E] }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
