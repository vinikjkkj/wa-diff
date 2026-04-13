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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(72),
        a = t.context,
        i = a.sourceApp === "whatsapp",
        l;
      e: {
        if (t.msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
          var s;
          if (n[0] !== t.msg) {
            var c = t.msg.toJSON(),
              m = new (r("WAWebMsgKey"))({
                fromMe: t.msg.id.fromMe,
                remote: t.msg.id.remote,
                id: r("WAWebMsgKey").newId_DEPRECATED(),
              });
            ((c.id = m),
              (s = new (o("WAWebMsgModel").Msg)(c)),
              (n[0] = t.msg),
              (n[1] = s));
          } else s = n[1];
          l = s;
          break e;
        }
        l = t.msg;
      }
      var p = l,
        y = _(null),
        C;
      n[2] !== p
        ? ((C = function () {
            return r("WAWebPipController").isOpened(p) ? h.FLOATER : h.PREVIEW;
          }),
          (n[2] = p),
          (n[3] = C))
        : (C = n[3]);
      var b = f(C),
        v = b[0],
        S = b[1],
        R;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function () {
            S(h.FLOATER);
          }),
          (n[4] = R))
        : (R = n[4]);
      var L = R,
        E;
      n[5] !== v
        ? ((E = function () {
            v !== h.PREVIEW && S(h.PREVIEW);
          }),
          (n[5] = v),
          (n[6] = E))
        : (E = n[6]);
      var k = E,
        I;
      (n[7] !== p.id
        ? ((I = p.id.toString()), (n[7] = p.id), (n[8] = I))
        : (I = n[8]),
        o("useWAWebListener").useListener(
          r("WAWebPipController"),
          I + "_pip_did_open",
          L,
        ));
      var T;
      (n[9] !== p.id
        ? ((T = p.id.toString()), (n[9] = p.id), (n[10] = T))
        : (T = n[10]),
        o("useWAWebListener").useListener(
          r("WAWebPipController"),
          T + "_pip_did_close",
          k,
        ));
      var D;
      n[11] !== a.sourceUrl
        ? ((D = function (t) {
            (t.preventDefault(),
              t.stopPropagation(),
              a.sourceUrl != null &&
                a.sourceUrl !== "" &&
                o("WAWebExternalLink.react").openExternalLink(a.sourceUrl));
          }),
          (n[11] = a.sourceUrl),
          (n[12] = D))
        : (D = n[12]);
      var x = D,
        $;
      n[13] !== t.context.sourceUrl
        ? (($ =
            t.context.sourceUrl != null && t.context.sourceUrl !== ""
              ? r("WAWebURLUtils").withoutWww(
                  r("WAWebURLUtils").hostname(t.context.sourceUrl),
                )
              : null),
          (n[13] = t.context.sourceUrl),
          (n[14] = $))
        : ($ = n[14]);
      var P = $,
        N;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = { className: "x4p5aij x1pg5gke xhslqc4" }), (n[15] = N))
        : (N = n[15]);
      var M;
      n[16] !== P
        ? ((M = d.jsx(
            "div",
            babelHelpers.extends({}, N, {
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, { text: P }),
            }),
          )),
          (n[16] = P),
          (n[17] = M))
        : (M = n[17]);
      var w = M,
        A;
      n[18] !== t.context.thumbnail
        ? ((A = {
            0: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x6h9qgo x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5",
            1: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x6h9qgo x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5 x193iq5w",
          }[(t.context.thumbnail != null) << 0]),
          (n[18] = t.context.thumbnail),
          (n[19] = A))
        : (A = n[19]);
      var F = A,
        O;
      n[20] !== a.description ||
      n[21] !== a.isSuspiciousLink ||
      n[22] !== t.context.description
        ? ((O =
            a.description != null && a.isSuspiciousLink !== !0
              ? d.jsx("div", {
                  className:
                    "x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1pg5gke xhslqc4",
                  title: t.context.description,
                  children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: t.context.description,
                  }),
                })
              : null),
          (n[20] = a.description),
          (n[21] = a.isSuspiciousLink),
          (n[22] = t.context.description),
          (n[23] = O))
        : (O = n[23]);
      var B = O,
        W,
        q;
      n[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = { className: "x1c4vz4f xo1l8bm x1pg5gke x1k4tb9n xhslqc4" }),
          (q = o("WAWebSettingsFBT").wamoNonAGMMessagePreviewDescription()),
          (n[24] = W),
          (n[25] = q))
        : ((W = n[24]), (q = n[25]));
      var U;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = d.jsx(
            "div",
            babelHelpers.extends({}, W, {
              title: q,
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: o(
                  "WAWebSettingsFBT",
                ).wamoNonAGMMessagePreviewDescription(),
              }),
            }),
          )),
          (n[26] = U))
        : (U = n[26]);
      var V = U,
        H;
      n[27] !== a.isSuspiciousLink || n[28] !== a.title
        ? ((H =
            a.title != null && a.isSuspiciousLink !== !0
              ? d.jsx("div", {
                  className:
                    "x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub",
                  title: a.title,
                  children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: a.title,
                  }),
                })
              : null),
          (n[27] = a.isSuspiciousLink),
          (n[28] = a.title),
          (n[29] = H))
        : (H = n[29]);
      var G = H,
        z,
        j;
      n[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = {
            className:
              "x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub xk50ysn",
          }),
          (j = o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle()),
          (n[30] = z),
          (n[31] = j))
        : ((z = n[30]), (j = n[31]));
      var K;
      n[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = d.jsx(
            "div",
            babelHelpers.extends({}, z, {
              title: j,
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle(),
              }),
            }),
          )),
          (n[32] = K))
        : (K = n[32]);
      var Q = K,
        X;
      n[33] !== p
        ? ((X = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            (e || (e = r("stylex")))(
              g.preview,
              (o("WAWebMsgGetters").getIsSentByMe(p) && g.bubbleOut) ||
                g.bubbleIn,
            ),
            "_ah-7",
          )),
          (n[33] = p),
          (n[34] = X))
        : (X = n[34]);
      var Y = X,
        J;
      n[35] !== i || n[36] !== v
        ? ((J =
            v === h.PREVIEW && !i
              ? d.jsx("div", {
                  className:
                    "x10l6tqk x13vifvy x1o0tod x1ja2u2z xh8yej3 x5yr21d x1ypdohk",
                  children: d.jsx(o("WAWebMediaStateControls.react").Play, {}),
                })
              : null),
          (n[35] = i),
          (n[36] = v),
          (n[37] = J))
        : (J = n[37]);
      var Z = J,
        ee;
      n[38] !== v
        ? ((ee =
            v === h.FLOATER
              ? d.jsx(r("WAWebPipOverlay.react"), {
                  icon: d.jsx(
                    o("WAWebVideoPipLargeIcon.react").VideoPipLargeIcon,
                    {},
                  ),
                  children: u._(
                    /*BTDS*/ "This video is playing in picture in picture.",
                  ),
                })
              : null),
          (n[38] = v),
          (n[39] = ee))
        : (ee = n[39]);
      var te = ee,
        ne;
      n[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = {
            className:
              "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 x6aax8c x6ikm8r x10wlt62",
          }),
          (n[40] = ne))
        : (ne = n[40]);
      var re;
      n[41] !== x || n[42] !== i
        ? ((re = !i && { onClick: x }), (n[41] = x), (n[42] = i), (n[43] = re))
        : (re = n[43]);
      var oe;
      n[44] !== x || n[45] !== P || n[46] !== i
        ? ((oe =
            P != null && !i
              ? d.jsx(r("WAWebBizCtwaContextSourceButton.react"), {
                  hostname: P,
                  onClick: x,
                })
              : null),
          (n[44] = x),
          (n[45] = P),
          (n[46] = i),
          (n[47] = oe))
        : (oe = n[47]);
      var ae;
      n[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae =
            "x1n2onr6 xjibb99 x1ur3nm9 xmi39wt x1h1h5sg x1ypdohk x14tgpju x15622t4 xl1xv1r"),
          (n[48] = ae))
        : (ae = n[48]);
      var ie;
      n[49] !== a
        ? ((ie = d.jsx(
            o("WAWebBizCtwaContextThumbImage.react").CtwaContextThumbImage,
            { context: a, className: ae },
          )),
          (n[49] = a),
          (n[50] = ie))
        : (ie = n[50]);
      var le;
      n[51] !== Z ||
      n[52] !== te ||
      n[53] !== re ||
      n[54] !== oe ||
      n[55] !== ie
        ? ((le = d.jsxs(
            "div",
            babelHelpers.extends({ ref: y }, ne, re, {
              children: [oe, ie, Z, te],
            }),
          )),
          (n[51] = Z),
          (n[52] = te),
          (n[53] = re),
          (n[54] = oe),
          (n[55] = ie),
          (n[56] = le))
        : (le = n[56]);
      var se;
      n[57] !== F ||
      n[58] !== a.sourceUrl ||
      n[59] !== B ||
      n[60] !== i ||
      n[61] !== G ||
      n[62] !== w
        ? ((se =
            !i &&
            (a.sourceUrl == null || a.sourceUrl === ""
              ? d.jsxs("div", { children: [G, B, w] })
              : d.jsxs(o("WAWebExternalLink.react").ExternalLink, {
                  className: F,
                  href: a.sourceUrl,
                  children: [G, B, w],
                }))),
          (n[57] = F),
          (n[58] = a.sourceUrl),
          (n[59] = B),
          (n[60] = i),
          (n[61] = G),
          (n[62] = w),
          (n[63] = se))
        : (se = n[63]);
      var ue;
      n[64] !== F || n[65] !== i
        ? ((ue = i && d.jsxs("div", { className: F, children: [Q, V] })),
          (n[64] = F),
          (n[65] = i),
          (n[66] = ue))
        : (ue = n[66]);
      var ce;
      return (
        n[67] !== Y || n[68] !== le || n[69] !== se || n[70] !== ue
          ? ((ce = d.jsxs("div", { className: Y, children: [le, se, ue] })),
            (n[67] = Y),
            (n[68] = le),
            (n[69] = se),
            (n[70] = ue),
            (n[71] = ce))
          : (ce = n[71]),
        ce
      );
    }
    l.default = y;
  },
  226,
);
