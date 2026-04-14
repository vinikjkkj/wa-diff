__d(
  "WAWebRequestPhoneNumberMessage.react",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebDialpadGreenIcon.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebSharePhoneNumberModal.react",
    "WAWebUISpacing",
    "WAWebWamEnumPnhEntryPointType",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          textAlign: "x2b8uid",
          position: "x1n2onr6",
          alignItems: "x6s0dn4",
          marginTop: "x1198e8h",
          marginInlineEnd: "x1lxpwgx",
          marginBottom: "xz62fqu",
          marginInlineStart: "xw01apr",
          borderStartStartRadius: "x13t61ll",
          borderStartEndRadius: "x1kchd1x",
          borderEndEndRadius: "x1u0fnx4",
          borderEndStartRadius: "xbxn0j6",
          backgroundColor: "x1ymkhp9",
          $$css: !0,
        },
        icon: {
          marginTop: "x1ok221b",
          marginInlineEnd: "xf6vk7d",
          marginBottom: "xu06os2",
          marginInlineStart: "x1hm9lzh",
          $$css: !0,
        },
        text: {
          marginTop: "x1xmf6yo",
          marginInlineEnd: "x1xegmmw",
          marginBottom: "xyorhqc",
          marginInlineStart: "x1hm9lzh",
          $$css: !0,
        },
      },
      d = function () {
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebSharePhoneNumberModal.react")
              .SharePhoneNumberRestrictedActionModal,
            {
              entryPoint: o("WAWebWamEnumPnhEntryPointType")
                .PNH_ENTRY_POINT_TYPE.PN_REQUEST,
            },
          ),
        );
      };
    function m(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getTo,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebFrontendMsgGetters").getSenderObj,
        ]),
        a = n[0],
        i = n[1],
        l = n[2],
        m = u.jsx(o("WAWebDialpadGreenIcon.react").DialpadGreenIcon, {});
      if (i) {
        var p = o("WAWebContactCollection").ContactCollection.gadd(a),
          _ = o("WAWebFrontendContactGetters").getIsMyContact(p)
            ? o("WAWebFrontendContactGetters").getFormattedName(p)
            : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(p),
          f = s._(
            /*BTDS*/ "You requested {person-name} to share their phone number.",
            [
              s._param(
                "person-name",
                u.jsx("span", { className: "xk50ysn", children: _ }),
              ),
            ],
          );
        return u.jsx(r("WAWebMessageTextBubble.react"), {
          msg: t,
          displayAuthor: !1,
          testid: void 0,
          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: c.container,
            children: [
              u.jsx(r("WAWebFlexItem.react"), { xstyle: c.icon, children: m }),
              u.jsx(r("WAWebFlexItem.react"), {
                xstyle: c.text,
                children: u.jsx(r("WAWebMessageSpacerText.react"), {
                  msg: t.unsafe(),
                  children: f,
                }),
              }),
            ],
          }),
        });
      }
      var g = o("WAWebContactCollection").ContactCollection.gadd(l),
        h = o("WAWebFrontendContactGetters").getIsMyContact(g)
          ? o("WAWebFrontendContactGetters").getFormattedName(g)
          : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(g),
        y = s._(
          /*BTDS*/ "{person-name} requested you to share your phone number.",
          [
            s._param(
              "person-name",
              u.jsx("span", { className: "xk50ysn", children: h }),
            ),
          ],
        ),
        C = s._(/*BTDS*/ "Share phone number"),
        b = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
          items: [
            {
              label: C,
              onClick: d,
              disabled: g.shareOwnPn || g.isContactBlocked,
              testid: "share-phone-number-button",
            },
          ],
          theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme
            .NO_DIVIDER,
        });
      return u.jsxs(r("WAWebMessageTextBubble.react"), {
        msg: t,
        displayAuthor: !1,
        hideMeta: !0,
        testid: void 0,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: [c.container, o("WAWebUISpacing").uiPadding.bottom5],
            children: [
              u.jsx(r("WAWebFlexItem.react"), { xstyle: c.icon, children: m }),
              u.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
                xstyle: c.text,
                contact: t.senderObj,
                msg: t.unsafe(),
                children: [
                  u.jsx("div", { children: y }),
                  u.jsx("div", {
                    className: "x10l6tqk xxx7yvo x1c7jfne",
                    children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                      msg: t,
                    }),
                  }),
                ],
              }),
            ],
          }),
          b,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
