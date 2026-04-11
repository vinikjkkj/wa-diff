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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(16),
        n = e.fromMe,
        a;
      t[0] !== n
        ? ((a = n
            ? s._(/*BTDS*/ "Get started with disappearing messages")
            : s._(/*BTDS*/ "Disappearing messages are turned on in this chat")),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(
            /*BTDS*/ "For more privacy and storage, all new messages will disappear for everyone in this chat after the selected duration.",
          )),
          (t[2] = l))
        : (l = t[2]);
      var d = l,
        m;
      if (n) {
        var p;
        (t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = s._(
              /*BTDS*/ "This setting does not affect your existing chats or any messages already saved to your device. Remember, people may find other ways to save messages.",
            )),
            (t[3] = p))
          : (p = t[3]),
          (m = p));
      } else {
        var _;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = s._(
              /*BTDS*/ "This setting does not affect your existing chats or any messages already saved to your device. Remember, people may find other ways to save messages.",
            )),
            (t[4] = _))
          : (_ = t[4]);
        var f;
        (t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = u.jsxs(u.Fragment, {
              children: [
                _,
                " ",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getEphemeralFaqUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            })),
            (t[5] = f))
          : (f = t[5]),
          (m = f));
      }
      var g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
              loop: !0,
              autoplay: !0,
              data: r("WAWebEphemeralNuxAnimationData"),
              xstyle: c.animation,
            }),
          })),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(r("WAWebFlexItem.react"), {
              xstyle: c.badge,
              children: s._(/*BTDS*/ "New"),
            }),
          })),
          (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] !== i
        ? ((y = u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
            xstyle: c.header,
            children: i,
          })),
          (t[8] = i),
          (t[9] = y))
        : (y = t[9]);
      var C;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: c.paragraph,
            children: d,
          })),
          (t[10] = C))
        : (C = t[10]);
      var b;
      t[11] !== m
        ? ((b = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: c.paragraph,
            children: m,
          })),
          (t[11] = m),
          (t[12] = b))
        : (b = t[12]);
      var v;
      return (
        t[13] !== y || t[14] !== b
          ? ((v = u.jsxs(u.Fragment, { children: [g, h, y, C, b] })),
            (t[13] = y),
            (t[14] = b),
            (t[15] = v))
          : (v = t[15]),
        v
      );
    }
    l.default = d;
  },
  226,
);
