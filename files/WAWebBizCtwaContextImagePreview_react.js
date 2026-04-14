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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.compose,
        a = e.context,
        i = e.isSentByMe,
        l = e.sourceUrl,
        s = function () {
          if (!n) {
            if (a == null || a.sourceUrl == null || a.sourceUrl === "") return;
            if (a.isSuspiciousLink === !0) {
              var e = o("WAWebLinkify").findLink(a.sourceUrl);
              e &&
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebSuspiciousLinkPopup.react"), { link: e }),
                );
            } else o("WAWebExternalLink.react").openExternalLink(a.sourceUrl);
          }
        },
        c =
          (a == null ? void 0 : a.description) != null &&
          a.isSuspiciousLink !== !0 &&
          u.jsx("div", {
            className: "_ah8m",
            children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: a.description,
              titlify: !0,
            }),
          }),
        d = l;
      if (
        a &&
        a.sourceUrl != null &&
        ((d = a.sourceUrl),
        a.isSuspiciousLink !== !0 &&
          ((a.title != null && a.title !== "") ||
            (a.thumbnailUrl != null && a.thumbnailUrl !== "") ||
            (a.thumbnail != null && a.thumbnail !== "")))
      ) {
        d = r("WAWebURLUtils").hostname(d);
        try {
          d = r("punycode").toUnicode(d);
        } catch (e) {}
      }
      var m =
          d != null && d !== ""
            ? u.jsx("div", {
                className: "_ah8n",
                children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: d,
                }),
              })
            : null,
        p =
          (a == null ? void 0 : a.isSuspiciousLink) === !0
            ? null
            : a == null
              ? void 0
              : a.title,
        _ = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((t = {}),
          (t._ah8b = n),
          (t._ah89 = !n && !i),
          (t._ah8a = i === !0),
          (t._ah88 = !0),
          t),
        );
      return u.jsxs("div", {
        className: _,
        onClick: s,
        children: [
          u.jsx(
            o("WAWebBizCtwaContextThumbImage.react").CtwaContextThumbImage,
            { context: a, className: "_ah8k" },
          ),
          u.jsxs("div", {
            className: "_ah8o",
            children: [
              u.jsx("div", {
                className: "_ah8l",
                title: p,
                children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: p,
                }),
              }),
              c,
              m,
            ],
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
