__d(
  "WAWebBizCtwaContextImagePreview.react",
  [
    "cx",
    "WAWebBizCtwaContextThumbImage.react",
    "WAWebClassnames",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebLinkify",
    "WAWebModalManager",
    "WAWebSuspiciousLinkPopup.react",
    "WAWebURLUtils",
    "punycode",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.compose,
        a = e.context,
        i = e.isSentByMe,
        l = e.sourceUrl,
        s;
      t[0] !== n || t[1] !== a
        ? ((s = function () {
            if (!n) {
              if (a == null || a.sourceUrl == null || a.sourceUrl === "")
                return;
              if (a.isSuspiciousLink === !0) {
                var e = o("WAWebLinkify").findLink(a.sourceUrl);
                e &&
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(r("WAWebSuspiciousLinkPopup.react"), { link: e }),
                  );
              } else o("WAWebExternalLink.react").openExternalLink(a.sourceUrl);
            }
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = s))
        : (s = t[2]);
      var c = s,
        d;
      t[3] !== a
        ? ((d =
            (a == null ? void 0 : a.description) != null &&
            a.isSuspiciousLink !== !0 &&
            u.jsx("div", {
              className: "_ah8m",
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: a.description,
                titlify: !0,
              }),
            })),
          (t[3] = a),
          (t[4] = d))
        : (d = t[4]);
      var m = d,
        p = l;
      if (
        a &&
        a.sourceUrl != null &&
        ((p = a.sourceUrl),
        a.isSuspiciousLink !== !0 &&
          ((a.title != null && a.title !== "") ||
            (a.thumbnailUrl != null && a.thumbnailUrl !== "") ||
            (a.thumbnail != null && a.thumbnail !== "")))
      )
        if (t[5] !== p) {
          p = r("WAWebURLUtils").hostname(p);
          try {
            p = r("punycode").toUnicode(p);
          } catch (e) {}
          ((t[5] = p), (t[6] = p));
        } else p = t[6];
      var _;
      t[7] !== p
        ? ((_ =
            p != null && p !== ""
              ? u.jsx("div", {
                  className: "_ah8n",
                  children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: p,
                  }),
                })
              : null),
          (t[7] = p),
          (t[8] = _))
        : (_ = t[8]);
      var f = _,
        g =
          (a == null ? void 0 : a.isSuspiciousLink) === !0
            ? null
            : a == null
              ? void 0
              : a.title,
        h = !n && !i,
        y = i === !0,
        C;
      if (t[9] !== n || t[10] !== h || t[11] !== y) {
        var b;
        ((C = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((b = {}),
          (b._ah8b = n),
          (b._ah89 = h),
          (b._ah8a = y),
          (b._ah88 = !0),
          b),
        )),
          (t[9] = n),
          (t[10] = h),
          (t[11] = y),
          (t[12] = C));
      } else C = t[12];
      var v = C,
        S;
      t[13] !== a
        ? ((S = u.jsx(
            o("WAWebBizCtwaContextThumbImage.react").CtwaContextThumbImage,
            { context: a, className: "_ah8k" },
          )),
          (t[13] = a),
          (t[14] = S))
        : (S = t[14]);
      var R;
      t[15] !== g
        ? ((R = u.jsx(o("WAWebEmojiText.react").EmojiText, { text: g })),
          (t[15] = g),
          (t[16] = R))
        : (R = t[16]);
      var L;
      t[17] !== R || t[18] !== g
        ? ((L = u.jsx("div", { className: "_ah8l", title: g, children: R })),
          (t[17] = R),
          (t[18] = g),
          (t[19] = L))
        : (L = t[19]);
      var E;
      t[20] !== m || t[21] !== L || t[22] !== f
        ? ((E = u.jsxs("div", { className: "_ah8o", children: [L, m, f] })),
          (t[20] = m),
          (t[21] = L),
          (t[22] = f),
          (t[23] = E))
        : (E = t[23]);
      var k;
      return (
        t[24] !== v || t[25] !== c || t[26] !== E || t[27] !== S
          ? ((k = u.jsxs("div", {
              className: v,
              onClick: c,
              children: [S, E],
            })),
            (t[24] = v),
            (t[25] = c),
            (t[26] = E),
            (t[27] = S),
            (t[28] = k))
          : (k = t[28]),
        k
      );
    }
    l.default = c;
  },
  98,
);
