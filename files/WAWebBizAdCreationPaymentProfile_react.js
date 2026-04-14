__d(
  "WAWebBizAdCreationPaymentProfile.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCreationIdentityProfileImage.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationPaymentProfile_facebookProfile.graphql",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdLogger",
    "WAWebConnModel",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcMoreVert.react",
    "WDSText.react",
    "react",
    "useWAWebBizAdCreationIdentityContext",
    "useWAWebBizAdCreationIdentitySelectionMenu.react",
    "useWAWebModelValues",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useRef,
      f = {
        container: { height: "xnnlda6", width: "xh8yej3", $$css: !0 },
        profileImageWrapper: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function g(e) {
      var t,
        n = e.menu,
        a = e.onMenuOpen,
        i = e.profileImageComponent,
        l = e.subtitle,
        u = e.title,
        d = _(null),
        p = r("useWDSMenu")({ targetRef: d, menu: n, dismissable: !0 }),
        g = p.menuPortal,
        h = p.openMenu,
        y = m(
          function () {
            (a(), h());
          },
          [a, h],
        );
      return c.jsxs((t = o("WAWebFlex.react")).FlexRow, {
        align: "center",
        justify: "start",
        xstyle: f.container,
        children: [
          c.jsx(t.FlexItem, {
            marginEnd: 16,
            children: c.jsx(t.FlexRow, {
              xstyle: f.profileImageWrapper,
              children: i,
            }),
          }),
          c.jsxs(t.FlexColumn, {
            padding: [12, 0],
            marginEnd: 16,
            grow: 1,
            children: [
              c.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children: u,
              }),
              l != null
                ? c.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: l,
                  })
                : null,
            ],
          }),
          c.jsxs(o("WAWebFlex.react").FlexItem, {
            justify: "end",
            children: [
              c.jsx(r("WDSButton.react"), {
                ref: d,
                Icon: r("WDSIconIcMoreVert.react"),
                variant: "borderless",
                size: "small",
                onPress: y,
                "aria-label": String(s._(/*BTDS*/ "Account options")),
              }),
              g,
            ],
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h =
      e !== void 0
        ? e
        : (e = n("WAWebBizAdCreationPaymentProfile_facebookProfile.graphql"));
    function y(e) {
      var t,
        n = e.facebookProfileRef,
        a = r("useWAWebBizAdCreationIdentityContext")(),
        i = a == null ? void 0 : a.accountType,
        l = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, [
          "pushname",
        ]),
        u = l.pushname,
        d = p(r("WAWebBizAdCreationLoggerContext")),
        _ = p(r("WAWebBizAdCreationSpecContext")),
        f =
          _ == null ||
          (t = _.currentValue) == null ||
          (t = t.adAccountData) == null
            ? void 0
            : t.id,
        y = m(
          function (e) {
            d != null &&
              r("WAWebBizAdLogger").log({
                event: e,
                loggerContext: d,
                adAccountID: f,
              });
          },
          [f, d],
        ),
        C = m(
          function () {
            return y("payment_profile_menu_click");
          },
          [y],
        ),
        b = m(
          function () {
            return y("payment_profile_login_to_facebook_click");
          },
          [y],
        ),
        v = m(
          function () {
            return y("payment_profile_switch_to_whatsapp_click");
          },
          [y],
        ),
        S = m(
          function () {
            return y("payment_profile_remove_account_click");
          },
          [y],
        ),
        R = o("CometRelay").useFragment(h, n),
        L = r("useWAWebBizAdCreationIdentitySelectionMenu.react")(
          !0,
          C,
          b,
          v,
          S,
        ),
        E = L.menuContent,
        k = L.onMenuOpen;
      if (i === "WAA")
        return c.jsx(g, {
          menu: E,
          onMenuOpen: k,
          profileImageComponent: c.jsx(
            r("WAWebBizAdCreationIdentityProfileImage.react"),
            { size: 24 },
          ),
          subtitle: s._(/*BTDS*/ "WhatsApp account"),
          title: u != null ? u : "",
        });
      if (i === "FB") {
        var I = R == null ? void 0 : R.name;
        return I == null
          ? null
          : c.jsx(g, {
              menu: E,
              onMenuOpen: k,
              profileImageComponent: c.jsx(
                r("WAWebBizAdCreationIdentityProfileImage.react"),
                { facebookProfileRef: R, size: 24 },
              ),
              title: I,
            });
      }
      return null;
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
