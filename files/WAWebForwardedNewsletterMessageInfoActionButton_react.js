__d(
  "WAWebForwardedNewsletterMessageInfoActionButton.react",
  [
    "WAWebCommonNewsletterStrings",
    "WAWebMessageBubbleActions.react",
    "WAWebNewsletterGatingUtils",
    "react",
    "useWAWebForwardedNewsletterMessageClickHandler",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { paddingBottom8: { paddingBottom: "x12xbjc7", $$css: !0 } };
    function c(e) {
      var t = e.isAlbum,
        n = t === void 0 ? !1 : t,
        r = e.msg,
        a = o(
          "useWAWebForwardedNewsletterMessageClickHandler",
        ).useForwardedNewsletterMessageClickHandler(
          r,
          o("WAWebNewsletterGatingUtils")
            .isNewsletterForwardBottomButtonEnabled,
        );
      return a == null
        ? null
        : s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [
              {
                label: o(
                  "WAWebCommonNewsletterStrings",
                ).getNewsletterLinkActionLabel("view"),
                onClick: a,
                testid: "newsletter-invite-link-action",
                xstyle: u.paddingBottom8,
              },
            ],
            theme: n
              ? o("WAWebMessageBubbleActions.react").BubbleActionsTheme.ALBUM
              : o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                  .FORWARDED_NEWSLETTER,
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
