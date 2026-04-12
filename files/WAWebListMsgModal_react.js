__d(
  "WAWebListMsgModal.react",
  [
    "WALogger",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebListMsgRow.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebRound.react",
    "WAWebSendListMsgReplyChatAction",
    "WAWebVelocityTransitionGroup",
    "WAWebWdsIcSendFilledIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d(e) {
      var t = e.list,
        n = e.onClick,
        o = e.selected;
      return t.sections.map(function (e, t) {
        return u.jsx(
          r("WAWebDrawerSection.react"),
          {
            title: e.title,
            theme: "list-section",
            children: e.rows.map(function (e, t) {
              return u.jsx(
                r("WAWebListMsgRow.react"),
                { row: e, onClick: n.bind(null, e), selected: e === o },
                t,
              );
            }),
          },
          t,
        );
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(t) {
      var n = t.msg,
        a = c(null),
        i = a[0],
        l = a[1],
        s = function (t) {
          l(t);
        },
        m = n.list;
      if (!m) return null;
      var p = function () {
          i &&
            (r("WAWebSendListMsgReplyChatAction")(n, i).catch(function () {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "ListDrawer: failed to send list message reply",
                    ])),
                )
                .sendLogs("list-drawer-send-failed");
            }),
            o("WAWebModalManager").closeModalManager());
        },
        _;
      return (
        i &&
          (_ = u.jsxs("div", {
            className:
              "xfo81ep x9f619 x78zum5 x6s0dn4 xh8yej3 x1x0gksc x15fo07t x13jy36j x17t9dm2 x1280gxy",
            children: [
              i.title,
              u.jsx("div", {
                className: "x10l6tqk x145d82y x3h4tne",
                children: u.jsx(o("WAWebRound.react").Round, {
                  large: !0,
                  onClick: p,
                  testid: void 0,
                  children: u.jsx(
                    o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
                    { directional: !0 },
                  ),
                }),
              }),
            ],
          })),
        u.jsx(o("WAWebModal.react").Modal, {
          type: o("WAWebModal.react").ModalTheme.Tower,
          children: u.jsxs(r("WAWebDrawer.react"), {
            theme: "products",
            children: [
              u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: m.buttonText,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                onCancel: o("WAWebModalManager").closeModalManager,
              }),
              u.jsx(r("WAWebDrawerBody.react"), {
                theme: "padding",
                children: u.jsx(d, { list: m, onClick: s, selected: i }),
              }),
              u.jsx(r("WAWebVelocityTransitionGroup"), {
                transitionName: "slide-up-down-footer",
                className_DONOTUSE: "xa1v5g2 x1okw0bk",
                children: _,
              }),
            ],
          }),
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
