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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(21),
        n = e.chat,
        a = e.onClose,
        i = e.ref,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["id", "limitSharing"]), (t[0] = l))
        : (l = t[0]);
      var c = o("useWAWebModelValues").useModelValues(n, l),
        m;
      t[1] !== c
        ? ((m = o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(c)),
          (t[1] = c),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = o(
            "WAWebLimitSharingGatingUtils",
          ).isLimitSharingSetterUpdateGatingEnabledForWeb()),
          (t[3] = _))
        : (_ = t[3]);
      var g = _,
        h;
      t[4] !== a
        ? ((h = function () {
            a == null || a();
          }),
          (t[4] = a),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { surface: "unknown", viewName: "limit-sharing" }), (t[6] = C))
        : (C = t[6]);
      var b;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Advanced chat privacy")), (t[7] = b))
        : (b = t[7]);
      var v;
      t[8] !== y
        ? ((v = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: b,
            onBack: y,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (t[8] = y),
          (t[9] = v))
        : (v = t[9]);
      var S, R;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(
              o("WAWebSecurityMessageLockIllustrationIcon.react")
                .SecurityMessageLockIllustrationIcon,
              { xstyle: [d.headerIcon, d.block] },
            ),
          })),
          (R = u.jsx(f, {})),
          (t[10] = S),
          (t[11] = R))
        : ((S = t[10]), (R = t[11]));
      var L;
      t[12] !== c || t[13] !== p
        ? ((L =
            !o("WAWebLimitSharingGatingUtils").isOpusFlagOn() &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: d.status,
              justify: "all",
              align: g ? "center" : "start",
              children: [
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  testid: void 0,
                  children: [
                    s._(/*BTDS*/ "Advanced chat privacy"),
                    !g &&
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
                    value: p,
                    disabled: !g,
                    onChange: function () {
                      return g
                        ? void o("WAWebLimitSharingUIUtils").toggleLimitSharing(
                            c,
                          )
                        : r("WAWebNoop")();
                    },
                  }),
                }),
              ],
            })),
          (t[12] = c),
          (t[13] = p),
          (t[14] = L))
        : (L = t[14]);
      var E;
      t[15] !== L
        ? ((E = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "padding-no-vertical",
              children: [S, R, L],
            }),
          })),
          (t[15] = L),
          (t[16] = E))
        : (E = t[16]);
      var k;
      return (
        t[17] !== i || t[18] !== E || t[19] !== v
          ? ((k = u.jsxs(r("WAWebDrawer.react"), {
              theme: "gallery",
              ref: i,
              testid: void 0,
              tsNavigationData: C,
              children: [v, E],
            })),
            (t[17] = i),
            (t[18] = E),
            (t[19] = v),
            (t[20] = k))
          : (k = t[20]),
        k
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(3);
      if (
        o("WAWebLimitSharingGatingUtils").isOpusFlagOn() &&
        n("cr:15980") != null
      ) {
        var t;
        return (
          e[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = u.jsx(n("cr:15980"), {})), (e[0] = t))
            : (t = e[0]),
          t
        );
      }
      if (
        o(
          "WAWebLimitSharingGatingUtils",
        ).isLimitSharingContentUpdateJuly25Enabled()
      ) {
        var r;
        return (
          e[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = u.jsx(g, {})), (e[1] = r))
            : (r = e[1]),
          r
        );
      }
      var a;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = u.jsx(h, {})), (e[2] = a))
          : (a = e[2]),
        a
      );
    }
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
      var t = o("react-compiler-runtime").c(3),
        n = e.icon,
        r = e.text,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = u.jsxs(
              o("WAWebFlex.react").FlexRow,
              babelHelpers.extends({}, m, { children: [n, r] }),
            )),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.default = _;
  },
  226,
);
