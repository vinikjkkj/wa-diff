__d(
  "WAWebBizCtwaAdPreview.react",
  [
    "WABidi",
    "WAWebBizCtwaAGMUtils",
    "WAWebBizCtwaThumbnailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFlexBox.react",
    "WAWebFlexItem.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebUISpacing",
    "react",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useMemo,
      p = {
        adContainer: {
          borderStartStartRadius: "x1rgw4pv",
          borderStartEndRadius: "x1vjm0to",
          borderEndEndRadius: "xnqoqkk",
          borderEndStartRadius: "x16lu3ki",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1wpzk8y",
          borderInlineEndColor: "xts9ub1",
          borderBottomColor: "xhl97hz",
          borderInlineStartColor: "x16gmtct",
          $$css: !0,
        },
        thumbnail: {
          objectFit: "xl1xv1r",
          width: "xh8yej3",
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          flexShrink: "x2lah0s",
          minHeight: "x16ctwrx",
          $$css: !0,
        },
        container: { width: "x1t0p1hu", $$css: !0 },
        body: {
          marginInlineStart: "x1o1p3th",
          marginInlineEnd: "x1trhqq4",
          $$css: !0,
        },
      },
      _ = 1e3;
    function f(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.automatedGreetingMessage,
        s = i.ctwaContext,
        c = i.onClose,
        f = r("useWAWebUIM")(),
        g =
          (n = s.sourceApp) != null
            ? n
            : o("WAWebBizCtwaAGMUtils").getHostnameLabel(s),
        h = g != null ? g.charAt(0).toUpperCase() + g.slice(1) : null,
        y = d(
          function () {
            (c(), f == null || f.requestDismiss());
          },
          [c, f],
        ),
        C = m(
          function () {
            return h != null
              ? u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title: o("WAWebBizCtwaAGMUtils").getAdSourceLabel(h),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                  onCancel: y,
                  focusBackOrCancel: !0,
                })
              : null;
          },
          [h, y],
        ),
        b = m(
          function () {
            return h != null
              ? o("WAWebBizCtwaAGMUtils").getAdImageAlt(h).toString()
              : "";
          },
          [h],
        ),
        v = m(
          function () {
            if (s.description != null && s.isSuspiciousLink !== !0) {
              var e = s.description;
              return u.jsxs(u.Fragment, {
                children: [
                  u.jsx("div", { className: "xso031l x1q0q8m5 xhl97hz" }),
                  u.jsx("div", {
                    title: s.description,
                    className:
                      "x1cy8zhl xkh2ocl x1y1aw1k xf159sx xwib8y2 xmzvs34 x1mzt3pk x126k92a",
                    children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: e,
                      textLimit: _,
                      dirMismatch:
                        (o("WABidi").dir(e) === "rtl") !==
                        r("WAWebL10N").isRTL(),
                      direction: o("WABidi").dir(e),
                      inferLinesDirection: !0,
                    }),
                  }),
                ],
              });
            }
            return null;
          },
          [s.description, s.isSuspiciousLink],
        );
      return u.jsxs(
        r("WAWebDrawer.react"),
        {
          theme: "striped",
          ref: a,
          xstyle: o("WAWebUISpacing").uiPadding.horiz0,
          testid: void 0,
          children: [
            C,
            u.jsxs(r("WAWebDrawerBody.react"), {
              xstyle: p.body,
              children: [
                u.jsx(r("WAWebDrawerSection.react"), {
                  animation: !1,
                  theme: "padding-no-margin",
                  xstyle: [
                    p.container,
                    o("WAWebUISpacing").uiPadding.vert48,
                    o("WAWebUISpacing").uiPadding.horiz48,
                  ],
                  children: u.jsx(r("WAWebFlexItem.react"), {
                    justify: "center",
                    xstyle: [
                      o("WAWebUISpacing").uiPadding.horiz20,
                      p.container,
                    ],
                    children: u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                      justify: "center",
                      xstyle: p.adContainer,
                      testid: void 0,
                      children: [
                        u.jsx(r("WAWebBizCtwaThumbnailImage.react"), {
                          context: s,
                          xstyle: p.thumbnail,
                          alt: b,
                          businessWid: l.from,
                          fromMe: o("WAWebMsgGetters").getIsSentByMe(l),
                        }),
                        v,
                      ],
                    }),
                  }),
                }),
                u.jsx(r("WAWebGroupInfoSeparator.react"), {}),
              ],
            }),
          ],
        },
        "ctwa-ad-details-modal",
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
