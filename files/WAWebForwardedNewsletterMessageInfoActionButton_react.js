__d(
  "WAWebForwardedNewsletterMessageInfoActionButton.react",
  [
    "WAWebCommonNewsletterStrings",
    "WAWebMessageBubbleActions.react",
    "WAWebNewsletterGatingUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebForwardedNewsletterMessageClickHandler",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { paddingBottom8: { paddingBottom: "x12xbjc7", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.isAlbum,
        r = e.msg,
        a = n === void 0 ? !1 : n,
        i = o(
          "useWAWebForwardedNewsletterMessageClickHandler",
        ).useForwardedNewsletterMessageClickHandler(
          r,
          o("WAWebNewsletterGatingUtils")
            .isNewsletterForwardBottomButtonEnabled,
        );
      if (i == null) return null;
      var l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebCommonNewsletterStrings").getNewsletterLinkActionLabel(
            "view",
          )),
          (t[0] = l))
        : (l = t[0]);
      var c;
      t[1] !== i
        ? ((c = [
            {
              label: l,
              onClick: i,
              testid: "newsletter-invite-link-action",
              xstyle: u.paddingBottom8,
            },
          ]),
          (t[1] = i),
          (t[2] = c))
        : (c = t[2]);
      var d = a
          ? o("WAWebMessageBubbleActions.react").BubbleActionsTheme.ALBUM
          : o("WAWebMessageBubbleActions.react").BubbleActionsTheme
              .FORWARDED_NEWSLETTER,
        m;
      return (
        t[3] !== c || t[4] !== d
          ? ((m = s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
              items: c,
              theme: d,
            })),
            (t[3] = c),
            (t[4] = d),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    l.default = c;
  },
  98,
);
