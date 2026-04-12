__d(
  "WAWebCommunityDeactivationInfoDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCommunityDeactivationPopup.react",
    "WAWebCommunityInformationCell.react",
    "WAWebDeactivateBadgeDarkIcon.react",
    "WAWebDeactivateBadgeIcon.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFocusTracer",
    "WAWebLinkCrossedIcon.react",
    "WAWebModalManager",
    "WAWebSpeakerCrossedIcon.react",
    "WAWebText.react",
    "WAWebThemeContext",
    "WAWebTrashActiveIcon.react",
    "react",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useEffect,
      p = c.useRef,
      _ = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          paddingTop: "x1miatn0",
          paddingInlineEnd: "x15zmtp0",
          paddingBottom: "xuzjt68",
          paddingInlineStart: "x1oiqv2n",
          $$css: !0,
        },
        buttonContainer: {
          marginTop: "x98l61r",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        header: {
          marginTop: "x9u28bd",
          marginBottom: "x1ua1l7f",
          textAlign: "x2b8uid",
          lineHeight: "x1evy7pa",
          $$css: !0,
        },
        badge: {
          zIndex: "xhtitgo",
          bottom: "xvp9gi2",
          insetInlineEnd: "x1i4sgur",
          left: null,
          right: null,
          position: "x1n2onr6",
          marginInlineEnd: "xhg6vv5",
          $$css: !0,
        },
        marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 },
      };
    function f(e) {
      var t = e.chat,
        n = e.onBack,
        a = e.ref,
        i = o("useWAWebModelValues").useModelValues(t.contact, ["id", "name"]),
        l = d(o("WAWebThemeContext").ThemeContext),
        c = l.theme,
        f = p();
      (m(function () {
        r("WAWebFocusTracer").focus(f.current);
      }, []),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          ["close_modal"],
          function () {
            return r("WAWebFocusTracer").focus(f.current);
          },
        ));
      var g = c === "dark",
        h = g
          ? o("WAWebDeactivateBadgeDarkIcon.react").DeactivateBadgeDarkIcon
          : o("WAWebDeactivateBadgeIcon.react").DeactivateBadgeIcon,
        y = s._(/*BTDS*/ 'Deactivate "{community-name}"?', [
          s._param(
            "community-name",
            u.jsx(o("WAWebEmojiText.react").EmojiText, { text: i.name }),
          ),
        ]),
        C = s._(/*BTDS*/ "This action cannot be undone."),
        b = [
          {
            title: s._(/*BTDS*/ "Groups will be disconnected"),
            description: s._(
              /*BTDS*/ "Groups won't be in this community but will still work as usual.",
            ),
            Icon: o("WAWebLinkCrossedIcon.react").LinkCrossedIcon,
            key: "all-groups-removed",
          },
          {
            title: s._(/*BTDS*/ "Announcement group will be closed"),
            description: s._(
              /*BTDS*/ "Past admins won't be able to message this community.",
            ),
            Icon: o("WAWebSpeakerCrossedIcon.react").SpeakerCrossedIcon,
            key: "announcement-group-removed",
          },
          {
            title: s._(/*BTDS*/ "Community info will be deleted"),
            description: s._(
              /*BTDS*/ "Members won't have access to past info, like admins and groups.",
            ),
            Icon: o("WAWebTrashActiveIcon.react").TrashActiveIcon,
            key: "community-info-deleted",
          },
        ],
        v = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebCommunityDeactivationPopup.react"), { chat: t }),
          );
        };
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "community-deactivation-info",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Deactivate community"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: n,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            ref: f,
            tabIndex: "-1",
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: _.container,
              children: [
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  children: [
                    u.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: t.id,
                      size: 104,
                      quality: o("WAWebDetailImage.react").DetailImageQuality
                        .High,
                      shape: o("WAWebDetailImage.react").DetailImageShape
                        .Squircle,
                    }),
                    u.jsx(h, { width: 36, height: 36, xstyle: _.badge }),
                  ],
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
                    weight: "bold",
                    xstyle: _.header,
                    children: y,
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  xstyle: _.marginBottom16,
                  children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                    as: "h1",
                    children: C,
                  }),
                }),
                b.map(function (e) {
                  var t = e.Icon,
                    n = e.description,
                    o = e.key,
                    a = e.title;
                  return u.jsx(
                    r("WAWebCommunityInformationCell.react"),
                    { Icon: t, title: a, description: n },
                    o,
                  );
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: _.buttonContainer,
                  children: u.jsx(o("WAWebButton.react").Button, {
                    testid: void 0,
                    type: "solid-warning",
                    onClick: v,
                    children: s._(/*BTDS*/ "Deactivate"),
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
