__d(
  "WAWebChatInfoExpandButton.react",
  [
    "fbt",
    "WALogger",
    "WAWebChevronCustomIcons",
    "WAWebChevronRightRefreshedIcon.react",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawerButton.react",
    "WAWebDrawerButtonRefreshed.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebRoundShape.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          height: "xnnlda6",
          width: "xh8yej3",
          boxSizing: "x9f619",
          paddingInlineStart: "xe2zdcy",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          color: "xhslqc4",
          ":hover_backgroundColor": "x17gydlx",
          $$css: !0,
        },
        iconWrapper: { width: "x13zx6y", $$css: !0 },
        iconWrapperRefreshed: {
          transform: "x1wc7zzz",
          color: "xhslqc4",
          $$css: !0,
        },
        textAlt: { color: "x1v5yvga", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
      };
    function m(t) {
      var n = t.ariaLabel,
        a = t.fromNewsletter,
        i = a === void 0 ? !1 : a,
        l = t.isRefresh,
        u = t.numMore,
        m = t.onClick,
        p = t.viewAll,
        _ = p === void 0 ? !1 : p,
        f = t.xstyle;
      u <= 0 &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[chat-info-expand-button] numMore should be >= 1",
              ])),
          )
          .sendLogs("invalid-number-of-more-contacts-in-chat");
      var g = c.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          xstyle: l === !0 ? d.iconWrapperRefreshed : d.iconWrapper,
          children: _
            ? null
            : c.jsx(r("WAWebRoundShape.react"), {
                transparent: !0,
                children:
                  l === !0
                    ? c.jsx(
                        o("WAWebChevronRightRefreshedIcon.react")
                          .ChevronRightRefreshedIcon,
                        {},
                      )
                    : c.jsx(
                        o("WAWebChevronCustomIcons").ChevronDownCustomIcon,
                        { iconXstyle: d.secondaryColor },
                      ),
              }),
        }),
        h = s._(/*BTDS*/ '_j{"*":"{count} more","_1":"1 more"}', [
          s._plural(u, "count"),
        ]);
      _ &&
        ((h = s._(/*BTDS*/ "View all ({more})", [s._param("more", h)])),
        i &&
          (h = o(
            "WAWebCommonNewsletterStrings",
          ).getViewAllChannelFollowersText()));
      var y = c.jsx(r("WAWebFlexItem.react"), {
          align: "start",
          grow: 1,
          xstyle: _ && d.textAlt,
          children: h,
        }),
        C =
          l === !0
            ? r("WAWebDrawerButtonRefreshed.react")
            : o("WAWebDrawerButton.react").DrawerButtonSimple;
      return c.jsx(C, {
        ariaLabel: n,
        icon: g,
        onClick: m,
        xstyle: [d.container, f],
        children: y,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
