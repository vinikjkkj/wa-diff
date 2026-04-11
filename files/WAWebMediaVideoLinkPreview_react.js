__d(
  "WAWebMediaVideoLinkPreview.react",
  [
    "cx",
    "fbt",
    "WAWebClassnames",
    "WAWebClientFeatureFlags",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMediaStateControls.react",
    "WAWebMsgGetters",
    "WAWebPipConst",
    "WAWebPipController",
    "WAWebPipOverlay.react",
    "WAWebPonyfillsUrlSearchParams",
    "WAWebStateUtils",
    "WAWebURLUtils",
    "WAWebUnstyledButton.react",
    "WAWebUtilsYoutubeUrlParser",
    "WAWebVideoPipLargeIcon.react",
    "err",
    "isStringNullOrEmpty",
    "lodash",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react")),
      d = e,
      m = d.useRef,
      p = d.useState,
      _ = {
        thumbnailWrapper: {
          position: "x1n2onr6",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          maxHeight: "x6aax8c",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          boxSizing: "x9f619",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopWidth: "xl8et2f",
          borderInlineEndWidth: "xuc0g9m",
          borderBottomWidth: "x1dmim90",
          borderInlineStartWidth: "xs4xcjr",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1v8p93f x1878o1q",
          borderInlineEndColor: "x1o3jo1z xf2y0h5",
          borderBottomColor: "x16stqrj xnv9r3m",
          borderInlineStartColor: "xv5lvn5 xo81p9n",
          $$css: !0,
        },
      },
      f = { PREVIEW: "PREVIEW", FLOATER: "FLOATER" },
      g = [
        o("WAWebPipConst").HOSTNAME.YOUTUBE,
        o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE,
        o("WAWebPipConst").HOSTNAME.YOUTUBE_SHORTENED,
      ];
    function h(e) {
      return g.includes(e);
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(79),
        n = e.msg,
        a = m(null),
        i;
      t[0] !== n
        ? ((i = function () {
            return r("WAWebPipController").isOpened(
              o("WAWebStateUtils").unproxy(n),
            )
              ? f.FLOATER
              : f.PREVIEW;
          }),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = p(i),
        s = l[0],
        d = l[1],
        g;
      t[2] !== s
        ? ((g = function () {
            s !== f.FLOATER && d(f.FLOATER);
          }),
          (t[2] = s),
          (t[3] = g))
        : (g = t[3]);
      var y = g,
        b;
      t[4] !== s
        ? ((b = function () {
            s !== f.PREVIEW && d(f.PREVIEW);
          }),
          (t[4] = s),
          (t[5] = b))
        : (b = t[5]);
      var v = b,
        S;
      (t[6] !== n.id
        ? ((S = n.id.toString()), (t[6] = n.id), (t[7] = S))
        : (S = t[7]),
        o("useWAWebListener").useListener(
          r("WAWebPipController"),
          S + "_pip_did_open",
          y,
        ));
      var R;
      (t[8] !== n.id
        ? ((R = n.id.toString()), (t[8] = n.id), (t[9] = R))
        : (R = t[9]),
        o("useWAWebListener").useListener(
          r("WAWebPipController"),
          R + "_pip_did_close",
          v,
        ));
      var L;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function () {
            return a.current ? a.current.getBoundingClientRect() : null;
          }),
          (t[10] = L))
        : (L = t[10]);
      var E = L,
        k = C,
        I;
      t[11] !== n.description
        ? ((I = r("isStringNullOrEmpty")(n.description)
            ? null
            : c.jsx("div", {
                className:
                  "x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1pg5gke xhslqc4",
                title: n.description,
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: n.description,
                }),
              })),
          (t[11] = n.description),
          (t[12] = I))
        : (I = t[12]);
      var T = I,
        D,
        x;
      (t[13] !== e.msg.matchedText
        ? ((D = r("WAWebURLUtils").hostname(e.msg.matchedText)),
          (x = r("WAWebURLUtils").withoutWww(D)),
          (t[13] = e.msg.matchedText),
          (t[14] = D),
          (t[15] = x))
        : ((D = t[14]), (x = t[15])),
        (D = x),
        D === o("WAWebPipConst").HOSTNAME.YOUTUBE_SHORTENED &&
          (D = o("WAWebPipConst").HOSTNAME.YOUTUBE));
      var $;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = { className: "x4p5aij x1pg5gke xhslqc4" }), (t[16] = $))
        : ($ = t[16]);
      var P;
      t[17] !== D
        ? ((P = c.jsx(
            "div",
            babelHelpers.extends({}, $, {
              children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: D }),
            }),
          )),
          (t[17] = D),
          (t[18] = P))
        : (P = t[18]);
      var N = P,
        M;
      t[19] !== e.msg.thumbnail
        ? ((M = {
            0: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x6h9qgo x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5",
            1: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x6h9qgo x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5 x193iq5w",
          }[!e.msg.thumbnail << 0]),
          (t[19] = e.msg.thumbnail),
          (t[20] = M))
        : (M = t[20]);
      var w = M,
        A;
      t[21] !== n.t
        ? ((A = o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(n.t)),
          (t[21] = n.t),
          (t[22] = A))
        : (A = t[22]);
      var F = A,
        O = !F && e.msg.thumbnailHQ ? e.msg.thumbnailHQ : e.msg.thumbnail,
        B;
      if (s === f.PREVIEW)
        e: switch (D) {
          case o("WAWebPipConst").HOSTNAME.YOUTUBE:
          case o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE: {
            var W, q;
            if (
              (t[23] !== e.msg.matchedText
                ? ((q = o("WAWebUtilsYoutubeUrlParser").parseYoutubeVideoId(
                    e.msg.matchedText,
                  )),
                  (W = r("isStringNullOrEmpty")(q)),
                  (t[23] = e.msg.matchedText),
                  (t[24] = W),
                  (t[25] = q))
                : ((W = t[24]), (q = t[25])),
              !W)
            ) {
              var U;
              t[26] !== e.msg.matchedText
                ? ((U = k(e.msg.matchedText)),
                  (t[26] = e.msg.matchedText),
                  (t[27] = U))
                : (U = t[27]);
              var V = U,
                H;
              (t[28] !== e.msg || t[29] !== q || t[30] !== V
                ? ((H = function (n) {
                    (n && n.stopPropagation(),
                      r("WAWebPipController").openYoutubePiP(q, e.msg, V, E()));
                  }),
                  (t[28] = e.msg),
                  (t[29] = q),
                  (t[30] = V),
                  (t[31] = H))
                : (H = t[31]),
                (B = H));
            }
            break e;
          }
          case o("WAWebPipConst").HOSTNAME.INSTAGRAM:
          case o("WAWebPipConst").HOSTNAME.STREAMABLE:
          case o("WAWebPipConst").HOSTNAME.FACEBOOK:
          case o("WAWebPipConst").HOSTNAME.FBWATCH:
          case o("WAWebPipConst").HOSTNAME.FBWATCH_ALT:
          case o("WAWebPipConst").HOSTNAME.SHARECHAT: {
            var G;
            (t[32] !== e.msg || t[33] !== O
              ? ((G = function (n) {
                  throw (
                    r("WAWebPipController").openOgVideoPiP(
                      "",
                      O,
                      e.msg,
                      0,
                      E(),
                    ),
                    r("err")("This call is not supported")
                  );
                }),
                (t[32] = e.msg),
                (t[33] = O),
                (t[34] = G))
              : (G = t[34]),
              (B = G));
            break e;
          }
          default:
            return null;
        }
      var z;
      t[35] !== e.msg
        ? ((z = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            {
              0: "x6ikm8r x10wlt62 x1wl59ut x1fc57z9 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1bu39yj",
              1: "x6ikm8r x10wlt62 x1wl59ut x1fc57z9 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1bu39yj",
            }[!!o("WAWebMsgGetters").getIsSentByMe(e.msg) << 0],
            "_ah-7",
          )),
          (t[35] = e.msg),
          (t[36] = z))
        : (z = t[36]);
      var j = z,
        K;
      t[37] !== s
        ? ((K =
            s === f.PREVIEW
              ? c.jsx("div", {
                  className:
                    "x10l6tqk x13vifvy x1o0tod x1ja2u2z xh8yej3 x5yr21d x1ypdohk",
                  children: c.jsx(o("WAWebMediaStateControls.react").Play, {}),
                })
              : null),
          (t[37] = s),
          (t[38] = K))
        : (K = t[38]);
      var Q = K,
        X;
      t[39] !== s
        ? ((X =
            s === f.FLOATER
              ? c.jsx(r("WAWebPipOverlay.react"), {
                  icon: c.jsx(
                    o("WAWebVideoPipLargeIcon.react").VideoPipLargeIcon,
                    {},
                  ),
                  children: u._(
                    /*BTDS*/ "This video is playing in picture in picture.",
                  ),
                })
              : null),
          (t[39] = s),
          (t[40] = X))
        : (X = t[40]);
      var Y = X,
        J,
        Z;
      if (O && r("lodash").values(o("WAWebPipConst").HOSTNAME).includes(D)) {
        var ee, te;
        if (t[41] !== D || t[42] !== F || t[43] !== e.msg.thumbnailHQ) {
          var ne = h(D);
          ((ee = ""),
            (te = {
              0: {
                className:
                  "x1n2onr6 xjibb99 x1ur3nm9 x1h1h5sg x1ypdohk x14tgpju",
              },
              2: {
                className:
                  "x1n2onr6 xjibb99 x1ur3nm9 x1h1h5sg x1ypdohk x14tgpju x1a842fp xl1xv1r",
              },
              1: {
                className:
                  "x1n2onr6 xjibb99 x1ur3nm9 x1h1h5sg x1ypdohk xkcp37y",
              },
              3: {
                className:
                  "x1n2onr6 xjibb99 x1ur3nm9 x1h1h5sg x1ypdohk x1a842fp xl1xv1r xkcp37y",
              },
            }[
              (!!ne << 1) |
                (!!(
                  (ne &&
                    o("WAWebClientFeatureFlags").isFeatureEnabled(
                      "youtube_video_preview_without_blur",
                    )) ||
                  (!F && e.msg.thumbnailHQ)
                ) <<
                  0)
            ]),
            (t[41] = D),
            (t[42] = F),
            (t[43] = e.msg.thumbnailHQ),
            (t[44] = ee),
            (t[45] = te));
        } else ((ee = t[44]), (te = t[45]));
        var re = "data:image/jpeg;base64," + O,
          oe;
        (t[46] !== ee || t[47] !== te || t[48] !== re
          ? ((oe = c.jsx(
              "img",
              babelHelpers.extends({ alt: ee }, te, { src: re }),
            )),
            (t[46] = ee),
            (t[47] = te),
            (t[48] = re),
            (t[49] = oe))
          : (oe = t[49]),
          (J = oe));
        var ae;
        t[50] !== D
          ? ((ae = o("WAWebPipConst").getAttributionIcon(D)),
            (t[50] = D),
            (t[51] = ae))
          : (ae = t[51]);
        var ie = ae;
        if (ie) {
          var le;
          t[52] === Symbol.for("react.memo_cache_sentinel")
            ? ((le = { className: "x10l6tqk x1bv8kjd x1jn9clo x1vjfegm" }),
              (t[52] = le))
            : (le = t[52]);
          var se;
          (t[53] !== ie
            ? ((se = c.jsx(
                "div",
                babelHelpers.extends({}, le, { children: c.jsx(ie, {}) }),
              )),
              (t[53] = ie),
              (t[54] = se))
            : (se = t[54]),
            (Z = se));
        }
      } else {
        var ue;
        (t[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((ue = c.jsx("div", {
              className: "x1n2onr6 xh8yej3 xmi39wt x8du59y",
            })),
            (t[55] = ue))
          : (ue = t[55]),
          (J = ue));
      }
      var ce = B,
        de;
      t[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = u._(/*BTDS*/ "Open video player")), (t[56] = de))
        : (de = t[56]);
      var me;
      t[57] !== Z || t[58] !== B || t[59] !== Q || t[60] !== Y || t[61] !== J
        ? ((me = c.jsxs(r("WAWebUnstyledButton.react"), {
            tabIndex: 0,
            ref: a,
            xstyle: _.thumbnailWrapper,
            onClick: ce,
            "aria-label": de,
            children: [Z, J, Q, Y],
          })),
          (t[57] = Z),
          (t[58] = B),
          (t[59] = Q),
          (t[60] = Y),
          (t[61] = J),
          (t[62] = me))
        : (me = t[62]);
      var pe = e.msg.matchedText,
        _e;
      t[63] === Symbol.for("react.memo_cache_sentinel")
        ? ((_e = {
            className:
              "x104kibb x1c4vz4f xs83m0k xdl72j9 x13m54ha x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub",
          }),
          (t[63] = _e))
        : (_e = t[63]);
      var fe;
      t[64] !== e.msg.title
        ? ((fe = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: e.msg.title,
          })),
          (t[64] = e.msg.title),
          (t[65] = fe))
        : (fe = t[65]);
      var ge;
      t[66] !== e.msg.title || t[67] !== fe
        ? ((ge = c.jsx(
            "div",
            babelHelpers.extends({}, _e, { title: e.msg.title, children: fe }),
          )),
          (t[66] = e.msg.title),
          (t[67] = fe),
          (t[68] = ge))
        : (ge = t[68]);
      var he;
      t[69] !== w ||
      t[70] !== T ||
      t[71] !== e.msg.matchedText ||
      t[72] !== ge ||
      t[73] !== N
        ? ((he = c.jsxs(o("WAWebExternalLink.react").ExternalLink, {
            className: w,
            href: pe,
            tabIndex: -1,
            children: [ge, T, N],
          })),
          (t[69] = w),
          (t[70] = T),
          (t[71] = e.msg.matchedText),
          (t[72] = ge),
          (t[73] = N),
          (t[74] = he))
        : (he = t[74]);
      var ye;
      return (
        t[75] !== j || t[76] !== me || t[77] !== he
          ? ((ye = c.jsxs("div", { className: j, children: [me, he] })),
            (t[75] = j),
            (t[76] = me),
            (t[77] = he),
            (t[78] = ye))
          : (ye = t[78]),
        ye
      );
    }
    function C(e) {
      var t = e.split("?");
      if (t.length !== 2) return 0;
      var n = t[1],
        a = new (r("WAWebPonyfillsUrlSearchParams"))(n).get(
          o("WAWebPipConst").YOUTUBE_URL_TIME_PARAM_NAME,
        );
      if (r("isStringNullOrEmpty")(a)) return 0;
      var i = a.match(o("WAWebPipConst").YOUTUBE_URL_TIME_PARAM_PATTERN),
        l = 0;
      if (i != null && i.length)
        for (var s = 1; s < i.length; s++) {
          var u = i[s];
          if (u) {
            var c = parseInt(u, 10);
            if (Number.isNaN(c)) return 0;
            (u.endsWith("h") && (l = l + c * 3600),
              u.endsWith("m") && (l = l + c * 60),
              u.endsWith("s") && (l = l + c),
              /^\d+$/.test(u) && (l = l + c));
          }
        }
      return l;
    }
    l.default = y;
  },
  226,
);
