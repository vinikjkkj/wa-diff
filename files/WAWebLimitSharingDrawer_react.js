__d(
  "WAWebLimitSharingDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingUIUtils",
    "WAWebMediaUploadIcon.react",
    "WAWebNoop",
    "WAWebSecurityMessageLockIllustrationIcon.react",
    "WAWebText.react",
    "WAWebWdsIcAiFilledIcon.react",
    "WDSIconIcImage.react",
    "WDSSwitch.react",
    "cr:15980",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = {
        headerIcon: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          height: "x1wkxgih",
          $$css: !0,
        },
        defaultLineHeight: { lineHeight: "x1o2sk6j", $$css: !0 },
        description: { paddingTop: "x1y1aw1k", $$css: !0 },
        block: { marginTop: "xqui205", marginBottom: "x1hq5gj4", $$css: !0 },
        feature: {
          paddingTop: "xyinxu5",
          paddingBottom: "x1g2khh7",
          ":first-child_paddingTop": "x10zg81t",
          ":last-child_paddingBottom": "xup0pd7",
          $$css: !0,
        },
        featureImg: {
          paddingInlineEnd: "x64bnmy",
          color: "xhslqc4",
          $$css: !0,
        },
        status: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          paddingTop: "x1xy6bms",
          paddingBottom: "x1t4gjm",
          $$css: !0,
        },
        statusDescription: {
          paddingTop: "x1iorvi4",
          paddingBottom: "xjkvuk6",
          $$css: !0,
        },
        spaceBefore: {
          "::before_content": "xjuopq5",
          "::before_whiteSpace": "xulcptl",
          $$css: !0,
        },
      },
      m = {
        as: "li",
        align: "center",
        xstyle: [d.feature, d.defaultLineHeight],
      },
      p = { width: 24, height: 24, xstyle: d.featureImg };
    function _(e) {
      var t = e.chat,
        n = e.onClose,
        a = e.ref,
        i = o("useWAWebModelValues").useModelValues(t, ["id", "limitSharing"]),
        l = o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(i),
        c = o(
          "WAWebLimitSharingGatingUtils",
        ).isLimitSharingSetterUpdateGatingEnabledForWeb(),
        m = function () {
          n == null || n();
        };
      return u.jsxs(r("WAWebDrawer.react"), {
        theme: "gallery",
        ref: a,
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "limit-sharing" },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Advanced chat privacy"),
            onBack: m,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "padding-no-vertical",
              children: [
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  children: u.jsx(
                    o("WAWebSecurityMessageLockIllustrationIcon.react")
                      .SecurityMessageLockIllustrationIcon,
                    { xstyle: [d.headerIcon, d.block] },
                  ),
                }),
                u.jsx(f, {}),
                !o("WAWebLimitSharingGatingUtils").isOpusFlagOn() &&
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    xstyle: d.status,
                    justify: "all",
                    align: c ? "center" : "start",
                    children: [
                      u.jsxs(o("WAWebFlex.react").FlexColumn, {
                        testid: void 0,
                        children: [
                          s._(/*BTDS*/ "Advanced chat privacy"),
                          !c &&
                            u.jsx(o("WAWebText.react").WAWebTextMuted, {
                              xstyle: d.statusDescription,
                              testid: void 0,
                              children: s._(
                                /*BTDS*/ "This setting can only be updated on your phone.",
                              ),
                            }),
                        ],
                      }),
                      u.jsx(o("WAWebFlex.react").FlexColumn, {
                        children: u.jsx(r("WDSSwitch.react"), {
                          value: l,
                          disabled: !c,
                          onChange: function () {
                            return c
                              ? void o(
                                  "WAWebLimitSharingUIUtils",
                                ).toggleLimitSharing(i)
                              : r("WAWebNoop")();
                          },
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return o("WAWebLimitSharingGatingUtils").isOpusFlagOn() &&
        n("cr:15980") != null
        ? u.jsx(n("cr:15980"), {})
        : o(
              "WAWebLimitSharingGatingUtils",
            ).isLimitSharingContentUpdateJuly25Enabled()
          ? u.jsx(g, {})
          : u.jsx(h, {});
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      var e = c(function () {
        return [
          {
            icon: u.jsx(r("WDSIconIcImage.react"), babelHelpers.extends({}, p)),
            text: s._(
              /*BTDS*/ "Can't save media to their device gallery automatically",
            ),
          },
          {
            icon: u.jsx(
              o("WAWebWdsIcAiFilledIcon.react").WdsIcAiFilledIcon,
              babelHelpers.extends({}, p),
            ),
            text: u.jsxs("div", {
              children: [
                s._(/*BTDS*/ "Can't use AI features like mentioning"),
                "\xA0",
                u.jsx("label", {
                  className: "xuxw1ft",
                  children: s._(/*BTDS*/ "\u0040Meta AI"),
                }),
                "\xA0",
                s._(/*BTDS*/ "or summarizing unread messages"),
              ],
            }),
          },
          {
            icon: u.jsx(
              o("WAWebMediaUploadIcon.react").MediaUploadIcon,
              babelHelpers.extends({}, p),
            ),
            text: s._(/*BTDS*/ "Can't export the chat"),
          },
        ];
      }, []);
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("div", {
            "data-testid": void 0,
            className: "x1y1aw1k x1o2sk6j",
            children: s._(
              /*BTDS*/ "Limit how messages and media from this chat can be shared outside of WhatsApp",
            ),
          }),
          u.jsxs(o("WAWebText.react").WAWebTextMuted, {
            testid: void 0,
            xstyle: d.block,
            children: [
              s._(
                /*BTDS*/ "Your personal messages are protected with end-to-end encryption even if you don't turn on advanced chat privacy. No one outside of the chat, not even WhatsApp or Meta, can read, listen to, or share them.",
              ),
              u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o(
                  "WAWebLimitSharingUIUtils",
                ).getSystemMessageLearnMoreURL(),
                xstyle: d.spaceBefore,
                children: r("WAWebFbtCommon")("Learn more"),
              }),
            ],
          }),
          u.jsx(o("WAWebText.react").WAWebTextMuted, {
            testid: void 0,
            children: s._(/*BTDS*/ "If you turn this on, people in this chat:"),
          }),
          u.jsx("ul", {
            className: "xqui205 x1hq5gj4",
            children: e.map(function (e, t) {
              return u.jsx(y, { icon: e.icon, text: e.text }, t);
            }),
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      var e = c(function () {
        return [
          {
            icon: u.jsx(r("WDSIconIcImage.react"), babelHelpers.extends({}, p)),
            text: s._(
              /*BTDS*/ "Media won't be automatically saved to device gallery",
            ),
          },
          {
            icon: u.jsx(
              o("WAWebWdsIcAiFilledIcon.react").WdsIcAiFilledIcon,
              babelHelpers.extends({}, p),
            ),
            text: s._(
              /*BTDS*/ "Messages won't be used for AI features like mentioning \u0040Meta AI",
            ),
          },
          {
            icon: u.jsx(
              o("WAWebMediaUploadIcon.react").MediaUploadIcon,
              babelHelpers.extends({}, p),
            ),
            text: s._(/*BTDS*/ "Chat exports will be disabled"),
          },
        ];
      }, []);
      return u.jsxs(u.Fragment, {
        children: [
          u.jsxs(o("WAWebText.react").WAWebTextMuted, {
            testid: void 0,
            xstyle: d.description,
            children: [
              s._(
                /*BTDS*/ "Limit how messages and media from this chat can be shared outside of WhatsApp.",
              ),
              u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o(
                  "WAWebLimitSharingUIUtils",
                ).getSystemMessageLearnMoreURL(),
                xstyle: d.spaceBefore,
                children: r("WAWebFbtCommon")("Learn more"),
              }),
            ],
          }),
          u.jsx("ul", {
            className: "xqui205 x1hq5gj4",
            children: e.map(function (e, t) {
              return u.jsx(y, { icon: e.icon, text: e.text }, t);
            }),
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.icon,
        n = e.text;
      return u.jsxs(
        o("WAWebFlex.react").FlexRow,
        babelHelpers.extends({}, m, { children: [t, n] }),
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
