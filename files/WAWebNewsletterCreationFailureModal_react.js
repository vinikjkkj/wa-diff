__d(
  "WAWebNewsletterCreationFailureModal.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSButtonGroup.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        title: function () {
          return s._(/*BTDS*/ "Channel wasn't created");
        },
        body: function () {
          return s._(/*BTDS*/ "Check your internet connection and try again.");
        },
        tryAgain: function () {
          return s._(/*BTDS*/ "Try again");
        },
        cancel: function () {
          return s._(/*BTDS*/ "Cancel");
        },
      },
      d = {
        container: {
          height: "x96gkwo",
          paddingInlineStart: "x25sj25",
          paddingInlineEnd: "x1icxu4v",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x1y1aw1k",
          marginBottom: "xmgb6t1",
          alignItems: "x1cy8zhl",
          boxSizing: "x9f619",
          $$css: !0,
        },
        textContainer: { rowGap: "x1o0lzc5", $$css: !0 },
      };
    function m(e) {
      var t = e.onRetry,
        n = function () {
          (o("WAWebModalManager").ModalManager.close(), t());
        };
      return u.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Promote,
        onOverlayClick: o("WAWebModalManager").closeModalManager,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: d.container,
          children: [
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: d.textContainer,
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Headline2",
                  colorName: "contentDefault",
                  children: c.title(),
                }),
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: c.body(),
                }),
              ],
            }),
            u.jsx("div", {
              className: "xh8yej3 x78zum5 x13a6bvl xm77wn2",
              children: u.jsx(r("WDSButtonGroup.react"), {
                orientation: "horizontal",
                width: "hug",
                primaryButtonProps: {
                  variant: "filled",
                  type: "default",
                  onPress: n,
                  testid: "retry-channel-creation-button",
                  label: c.tryAgain(),
                },
                tertiaryButtonProps: {
                  variant: "borderless",
                  type: "default",
                  onPress: o("WAWebModalManager").closeModalManager,
                  testid: "cancel-channel-creation-button",
                  label: c.cancel(),
                },
              }),
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
