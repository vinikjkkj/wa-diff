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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(11),
        n = e.onRetry,
        a;
      t[0] !== n
        ? ((a = function () {
            (o("WAWebModalManager").ModalManager.close(), n());
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(r("WDSText.react"), {
            type: "Headline2",
            colorName: "contentDefault",
            children: c.title(),
          })),
          (t[2] = l))
        : (l = t[2]);
      var s, m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.textContainer,
            children: [
              l,
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: c.body(),
              }),
            ],
          })),
          (m = { className: "xh8yej3 x78zum5 x13a6bvl xm77wn2" }),
          (t[3] = s),
          (t[4] = m))
        : ((s = t[3]), (m = t[4]));
      var p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = c.tryAgain()), (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== i
        ? ((_ = {
            variant: "filled",
            type: "default",
            onPress: i,
            testid: "retry-channel-creation-button",
            label: p,
          }),
          (t[6] = i),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = {
            variant: "borderless",
            type: "default",
            onPress: o("WAWebModalManager").closeModalManager,
            testid: "cancel-channel-creation-button",
            label: c.cancel(),
          }),
          (t[8] = f))
        : (f = t[8]);
      var g;
      return (
        t[9] !== _
          ? ((g = u.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Promote,
              onOverlayClick: o("WAWebModalManager").closeModalManager,
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: d.container,
                children: [
                  s,
                  u.jsx(
                    "div",
                    babelHelpers.extends({}, m, {
                      children: u.jsx(r("WDSButtonGroup.react"), {
                        orientation: "horizontal",
                        width: "hug",
                        primaryButtonProps: _,
                        tertiaryButtonProps: f,
                      }),
                    }),
                  ),
                ],
              }),
            })),
            (t[9] = _),
            (t[10] = g))
          : (g = t[10]),
        g
      );
    }
    l.default = m;
  },
  226,
);
