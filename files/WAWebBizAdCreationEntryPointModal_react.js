__d(
  "WAWebBizAdCreationEntryPointModal.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBusinessAdBudgetIcon.react",
    "WAWebBusinessPauseadsIcon.react",
    "WAWebBusinessReachIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebModalManager",
    "WAWebUISpacing",
    "WAWebWdsIllAdsWaIcon.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        chatIcon: { display: "x78zum5", justifyContent: "xl56j7k", $$css: !0 },
        chatIconRefresh: {
          paddingTop: "x889kno",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        title: {
          fontSize: "x1603h9y",
          lineHeight: "x1o2sk6j",
          textAlign: "x2b8uid",
          $$css: !0,
        },
      },
      p = { grayIcon: { color: "xhslqc4", $$css: !0 } };
    function _(t) {
      var n = t.children,
        a = t.icon;
      return c.jsx(
        "li",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(o("WAWebUISpacing").uiPadding.vert5),
          {
            children: c.jsxs("span", {
              className: "x6s0dn4 x3nfvp2",
              children: [a, n],
            }),
          },
        ),
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(t) {
      var a = t.isPagelessAd,
        i = t.onClose,
        l = t.onLearnMore,
        u = t.onOK,
        f = d(!1),
        g = f[0],
        h = f[1],
        y = o(
          "WAWebBizGatingUtils",
        ).isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing(),
        C = s._(
          /*BTDS*/ "Bring in new customers with Facebook & Instagram ads",
        ),
        b = s._(
          /*BTDS*/ "Easily create ads that show on Facebook & Instagram and lead people to WhatsApp chats with you.",
        ),
        v = s._(
          /*BTDS*/ "Your business name and photo will be shared with Meta in order to create your ad. {=m2}",
          [
            s._implicitParam(
              "=m2",
              c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o("WAWebFaqUrl").getSharingBusinessInfoForAdsFaqUrl(),
                onClick: function () {
                  l && l();
                },
                children: s._(/*BTDS*/ "Learn more"),
              }),
            ),
          ],
        ),
        S = {
          className_DONOTUSE: (e || (e = r("stylex")))(
            o("WAWebUISpacing").uiPadding.end16,
          ),
          height: 25,
          iconXstyle: p.grayIcon,
          width: 25,
        },
        R = [
          {
            icon: c.jsx(
              o("WAWebBusinessReachIcon.react").BusinessReachIcon,
              babelHelpers.extends({}, S),
            ),
            text: s._(/*BTDS*/ "Reach people locally"),
          },
          {
            icon: c.jsx(
              o("WAWebBusinessAdBudgetIcon.react").BusinessAdBudgetIcon,
              babelHelpers.extends({}, S),
            ),
            text: s._(/*BTDS*/ "Control your ad budget"),
          },
          {
            icon: c.jsx(
              o("WAWebBusinessPauseadsIcon.react").BusinessPauseadsIcon,
              babelHelpers.extends({}, S),
            ),
            text: s._(/*BTDS*/ "Pause or stop ads anytime"),
          },
        ],
        L = R.map(function (e, t) {
          return c.jsx(_, { icon: e.icon, children: e.text }, t);
        }),
        E = function () {
          (i && i(), o("WAWebModalManager").ModalManager.close());
        },
        k = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            h(!0);
            try {
              yield u();
            } finally {
              h(!1);
            }
            o("WAWebModalManager").ModalManager.close();
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        I = c.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {
          xstyle: [m.chatIcon, m.chatIconRefresh],
        });
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "ad-creation-entry" },
        onOK: k,
        okDisabled: g || y,
        okSpinner: g,
        okText: s._(/*BTDS*/ "Continue in Facebook"),
        onCancel: E,
        onOverlayClick: E,
        cancelText: s._(/*BTDS*/ "Cancel"),
        children: [
          I,
          c.jsxs("div", {
            className: "x1f6kntn xf4yft x1o2sk6j x1yc453h xh8yej3",
            children: [
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    m.title,
                    o("WAWebUISpacing").uiMargin.all16,
                    o("WAWebUISpacing").uiPadding.horiz36,
                  ),
                  { children: C },
                ),
              ),
              c.jsx("p", { children: b }),
              c.jsx(
                "ul",
                babelHelpers.extends(
                  {},
                  e.props(
                    o("WAWebUISpacing").uiPadding.horiz16,
                    o("WAWebUISpacing").uiMargin.vert20,
                  ),
                  { children: L },
                ),
              ),
              a === !0 &&
                c.jsx(
                  "p",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      o("WAWebUISpacing").uiMargin.vert32,
                    ),
                    { children: v },
                  ),
                ),
            ],
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
