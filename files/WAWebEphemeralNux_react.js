__d(
  "WAWebEphemeralNux.react",
  [
    "fbt",
    "WAWebEphemeralNuxAnimationData",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebLottieAnimationLoadable",
    "WAWebText_DONOTUSE.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        badge: {
          backgroundColor: "xfn3atn",
          borderStartStartRadius: "x1fqc64z",
          borderStartEndRadius: "xs83zq4",
          borderEndEndRadius: "xt6ovg4",
          borderEndStartRadius: "x1ru8ea5",
          color: "xzqyxu6",
          fontSize: "x1pg5gke",
          marginTop: "x1de0gy",
          paddingTop: "x1iorvi4",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "xjkvuk6",
          paddingInlineStart: "x25sj25",
          textTransform: "xtvhhri",
          $$css: !0,
        },
        header: {
          fontSize: "x1603h9y",
          lineHeight: "x1o2sk6j",
          marginTop: "x1de0gy",
          $$css: !0,
        },
        animation: { height: "x1njnjl6", width: "x1oysuqx", $$css: !0 },
        paragraph: { marginTop: "x1de0gy", $$css: !0 },
      };
    function d(e) {
      var t = e.fromMe,
        n = t
          ? s._(/*BTDS*/ "Get started with disappearing messages")
          : s._(/*BTDS*/ "Disappearing messages are turned on in this chat"),
        a = s._(
          /*BTDS*/ "For more privacy and storage, all new messages will disappear for everyone in this chat after the selected duration.",
        ),
        i;
      return (
        t
          ? (i = s._(
              /*BTDS*/ "This setting does not affect your existing chats or any messages already saved to your device. Remember, people may find other ways to save messages.",
            ))
          : (i = u.jsxs(u.Fragment, {
              children: [
                s._(
                  /*BTDS*/ "This setting does not affect your existing chats or any messages already saved to your device. Remember, people may find other ways to save messages.",
                ),
                " ",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getEphemeralFaqUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            })),
        u.jsxs(u.Fragment, {
          children: [
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              children: u.jsx(
                o("WAWebLottieAnimationLoadable").LottieAnimation,
                {
                  loop: !0,
                  autoplay: !0,
                  data: r("WAWebEphemeralNuxAnimationData"),
                  xstyle: c.animation,
                },
              ),
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              children: u.jsx(r("WAWebFlexItem.react"), {
                xstyle: c.badge,
                children: s._(/*BTDS*/ "New"),
              }),
            }),
            u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
              xstyle: c.header,
              children: n,
            }),
            u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
              xstyle: c.paragraph,
              children: a,
            }),
            u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
              xstyle: c.paragraph,
              children: i,
            }),
          ],
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
