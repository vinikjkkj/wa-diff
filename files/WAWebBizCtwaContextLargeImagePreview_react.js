__d(
  "WAWebBizCtwaContextLargeImagePreview.react",
  [
    "cx",
    "WAWebBizCtwaContextSourceButton.react",
    "WAWebBizCtwaContextThumbImage.react",
    "WAWebClassnames",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebLinkify",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebSettingsFBT",
    "WAWebStopEvent",
    "WAWebSuspiciousLinkPopup.react",
    "WAWebURLUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef;
    function d(e) {
      var t = o("react-compiler-runtime").c(60),
        n = e.context,
        a = e.msg,
        i = n.sourceApp === "whatsapp",
        l = c(null),
        s =
          n.isSuspiciousLink === !0 ||
          (n.thumbnailUrl == null && n.thumbnail == null),
        d;
      t[0] !== n.isSuspiciousLink || t[1] !== n.sourceUrl
        ? ((d = function (t) {
            if (
              (o("WAWebStopEvent").stopEvent(t),
              n.isSuspiciousLink === !0 && n.sourceUrl != null)
            ) {
              var e = o("WAWebLinkify").findLink(n.sourceUrl);
              e &&
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebSuspiciousLinkPopup.react"), { link: e }),
                );
            } else
              n.sourceUrl != null &&
                n.sourceUrl !== "" &&
                o("WAWebExternalLink.react").openExternalLink(n.sourceUrl);
          }),
          (t[0] = n.isSuspiciousLink),
          (t[1] = n.sourceUrl),
          (t[2] = d))
        : (d = t[2]);
      var m = d,
        p;
      t[3] !== n.sourceUrl
        ? ((p =
            n.sourceUrl != null
              ? r("WAWebURLUtils").withoutWww(
                  r("WAWebURLUtils").hostname(n.sourceUrl),
                )
              : null),
          (t[3] = n.sourceUrl),
          (t[4] = p))
        : (p = t[4]);
      var _ = p,
        f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x4p5aij x1pg5gke xhslqc4" }), (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== _
        ? ((g = u.jsx(
            "div",
            babelHelpers.extends({}, f, {
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: _ }),
            }),
          )),
          (t[6] = _),
          (t[7] = g))
        : (g = t[7]);
      var h = g,
        y;
      t[8] !== n.thumbnail
        ? ((y = {
            0: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x6h9qgo x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5",
            1: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x6h9qgo x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5 x193iq5w",
          }[(n.thumbnail != null) << 0]),
          (t[8] = n.thumbnail),
          (t[9] = y))
        : (y = t[9]);
      var C = y,
        b;
      t[10] !== n.description || t[11] !== n.isSuspiciousLink
        ? ((b =
            n.description != null && n.isSuspiciousLink !== !0
              ? u.jsx("div", {
                  className:
                    "x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1pg5gke xhslqc4",
                  title: n.description,
                  children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: n.description,
                  }),
                })
              : null),
          (t[10] = n.description),
          (t[11] = n.isSuspiciousLink),
          (t[12] = b))
        : (b = t[12]);
      var v = b,
        S,
        R;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { className: "x1c4vz4f xo1l8bm x1pg5gke x1k4tb9n xhslqc4" }),
          (R = o("WAWebSettingsFBT").wamoNonAGMMessagePreviewDescription()),
          (t[13] = S),
          (t[14] = R))
        : ((S = t[13]), (R = t[14]));
      var L;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx(
            "div",
            babelHelpers.extends({}, S, {
              title: R,
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: o(
                  "WAWebSettingsFBT",
                ).wamoNonAGMMessagePreviewDescription(),
              }),
            }),
          )),
          (t[15] = L))
        : (L = t[15]);
      var E = L,
        k;
      t[16] !== n.isSuspiciousLink || t[17] !== n.title
        ? ((k =
            n.title != null && n.isSuspiciousLink !== !0
              ? u.jsx("div", {
                  className:
                    "x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub",
                  title: n.title,
                  children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: n.title,
                  }),
                })
              : null),
          (t[16] = n.isSuspiciousLink),
          (t[17] = n.title),
          (t[18] = k))
        : (k = t[18]);
      var I = k,
        T,
        D;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = {
            className:
              "x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub xk50ysn",
          }),
          (D = o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle()),
          (t[19] = T),
          (t[20] = D))
        : ((T = t[19]), (D = t[20]));
      var x;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsx(
            "div",
            babelHelpers.extends({}, T, {
              title: D,
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle(),
              }),
            }),
          )),
          (t[21] = x))
        : (x = t[21]);
      var $ = x,
        P;
      t[22] !== a
        ? ((P = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            {
              0: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa x6ikm8r x10wlt62 x1wl59ut x1fc57z9 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1bu39yj",
              1: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa x6ikm8r x10wlt62 x1wl59ut x1fc57z9 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1bu39yj",
            }[!!o("WAWebMsgGetters").getIsSentByMe(a) << 0],
            "_ah-7",
          )),
          (t[22] = a),
          (t[23] = P))
        : (P = t[23]);
      var N = P,
        M;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = {
            className:
              "x78zum5 x6s0dn4 xl56j7k xh8yej3 x6aax8c x6ikm8r x10wlt62",
          }),
          (t[24] = M))
        : (M = t[24]);
      var w;
      t[25] !== m || t[26] !== i
        ? ((w = !i && { onClick: m }), (t[25] = m), (t[26] = i), (t[27] = w))
        : (w = t[27]);
      var A;
      t[28] !== s
        ? ((A = {
            0: { className: "x78zum5 x6s0dn4 x1n2onr6 x6ikm8r x10wlt62" },
            1: {
              className: "x78zum5 x6s0dn4 x1n2onr6 x6ikm8r x10wlt62 xh8yej3",
            },
          }[!!s << 0]),
          (t[28] = s),
          (t[29] = A))
        : (A = t[29]);
      var F;
      t[30] !== n.isSuspiciousLink || t[31] !== m || t[32] !== _ || t[33] !== i
        ? ((F =
            n.isSuspiciousLink !== !0 &&
            _ != null &&
            !i &&
            u.jsx(r("WAWebBizCtwaContextSourceButton.react"), {
              hostname: _,
              onClick: m,
            })),
          (t[30] = n.isSuspiciousLink),
          (t[31] = m),
          (t[32] = _),
          (t[33] = i),
          (t[34] = F))
        : (F = t[34]);
      var O =
          "x1n2onr6 xjibb99 xapaqfs x1h1h5sg xmi39wt xl1xv1r" +
          (i ? "" : " x1ypdohk"),
        B;
      t[35] !== n || t[36] !== O
        ? ((B = u.jsx(
            o("WAWebBizCtwaContextThumbImage.react").CtwaContextThumbImage,
            { context: n, className: O },
          )),
          (t[35] = n),
          (t[36] = O),
          (t[37] = B))
        : (B = t[37]);
      var W;
      t[38] !== A || t[39] !== F || t[40] !== B
        ? ((W = u.jsxs(
            "div",
            babelHelpers.extends({}, A, { children: [F, B] }),
          )),
          (t[38] = A),
          (t[39] = F),
          (t[40] = B),
          (t[41] = W))
        : (W = t[41]);
      var q;
      t[42] !== w || t[43] !== W
        ? ((q = u.jsx(
            "div",
            babelHelpers.extends({ ref: l }, M, w, { children: W }),
          )),
          (t[42] = w),
          (t[43] = W),
          (t[44] = q))
        : (q = t[44]);
      var U;
      t[45] !== n.sourceUrl ||
      t[46] !== v ||
      t[47] !== C ||
      t[48] !== i ||
      t[49] !== I ||
      t[50] !== h
        ? ((U =
            n.sourceUrl != null &&
            !i &&
            u.jsxs(o("WAWebExternalLink.react").ExternalLink, {
              className: C,
              href: n.sourceUrl,
              children: [I, v, h],
            })),
          (t[45] = n.sourceUrl),
          (t[46] = v),
          (t[47] = C),
          (t[48] = i),
          (t[49] = I),
          (t[50] = h),
          (t[51] = U))
        : (U = t[51]);
      var V;
      t[52] !== C || t[53] !== i
        ? ((V = i && u.jsxs("div", { className: C, children: [$, E] })),
          (t[52] = C),
          (t[53] = i),
          (t[54] = V))
        : (V = t[54]);
      var H;
      return (
        t[55] !== N || t[56] !== q || t[57] !== U || t[58] !== V
          ? ((H = u.jsxs("div", { className: N, children: [q, U, V] })),
            (t[55] = N),
            (t[56] = q),
            (t[57] = U),
            (t[58] = V),
            (t[59] = H))
          : (H = t[59]),
        H
      );
    }
    l.default = d;
  },
  98,
);
