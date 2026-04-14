__d(
  "WAWebProfileDrawerUsername.react",
  [
    "fbt",
    "WAWebChevronRightRefreshedIcon.react",
    "WAWebCmd",
    "WAWebDrawerBlock.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebGetMeUsernameQueryAction",
    "WAWebMentionsRefreshedIcon.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsUsername",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WDSIconIcKey.react",
    "WDSText.react",
    "react",
    "useWAWebContactValues",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = {
        sectionPadding: {
          paddingTop: "xyinxu5",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        titlePadding: {
          paddingInlineStart: "x162tt16",
          paddingBottom: "xjkvuk6",
          $$css: !0,
        },
        mentionIcon: { color: "xhslqc4", $$css: !0 },
        chevronIcon: { color: "xhslqc4", $$css: !0 },
        usernameKeyContainer: {
          backgroundColor: "x6egj2d",
          paddingTop: "x4p5aij",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x1j85h84",
          paddingInlineStart: "x25sj25",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          $$css: !0,
        },
        usernameKeyIcon: { color: "xhslqc4", $$css: !0 },
        createUsernameWithKey: { marginTop: "x1ci5j9l", $$css: !0 },
      };
    function _(e) {
      var t = e.onClick,
        n = o("WAWebUserPrefsMeUser").getMeUser(),
        a = o("useWAWebContactValues").useContactValues(n, [
          o("WAWebFrontendContactGetters").getUsername,
          o("WAWebFrontendContactGetters").getUsernameKey,
        ]),
        i = a[0],
        l = a[1],
        c = m(o("WAWebUserPrefsUsername").getUsernameState()),
        _ = c[0],
        f = c[1];
      if (
        (d(function () {
          o("WAWebGetMeUsernameQueryAction").getMeUsername();
        }, []),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "username_state_updated",
          function (e) {
            f(e);
          },
        ),
        _ == null &&
          (o(
            "WAWebUsernameWorkerCompatibleGatingUtils",
          ).usernameAccountLinkingEnabled() ||
            o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).usernameReservationOnlyMode()))
      )
        return null;
      var g = s._(/*BTDS*/ "Create username"),
        h =
          _ === "RESERVED"
            ? s._(/*BTDS*/ "Reserved Username")
            : s._(/*BTDS*/ "Username"),
        y = l != null,
        C = u.jsx(r("WAWebDrawerBlock.react"), {
          xstyle: y && o("WAWebUISpacing").uiPadding.bottom30,
          onClick: t,
          side: u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            children: u.jsx(
              o("WAWebChevronRightRefreshedIcon.react")
                .ChevronRightRefreshedIcon,
              { xstyle: p.chevronIcon, directional: !0, height: 24, width: 24 },
            ),
          }),
          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 24,
            align: "center",
            children: [
              u.jsx(
                o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon,
                { xstyle: p.mentionIcon },
              ),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                gap: 8,
                xstyle: y && p.createUsernameWithKey,
                children: [
                  u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName:
                      i != null ? "contentDefault" : "contentActionEmphasized",
                    children: i != null ? i : g,
                  }),
                  y &&
                    u.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      gap: 8,
                      xstyle: p.usernameKeyContainer,
                      children: [
                        u.jsx(r("WDSIconIcKey.react"), {
                          xstyle: p.usernameKeyIcon,
                        }),
                        u.jsx(r("WDSText.react"), {
                          type: "Body2",
                          colorName: "contentDeemphasized",
                          children: l,
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        });
      return u.jsx(r("WAWebDrawerSection.react"), {
        theme: "no-padding",
        animation: !1,
        title: h,
        titleXStyle: p.titlePadding,
        xstyle: p.sectionPadding,
        children: C,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
