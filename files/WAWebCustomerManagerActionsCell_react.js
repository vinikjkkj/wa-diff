__d(
  "WAWebCustomerManagerActionsCell.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactType",
    "WAWebCustomerDataCollection",
    "WAWebCustomerDataFieldSaver",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSIconIcChat.react",
    "WDSIconIcClose.react",
    "WDSIconIcMoreVert.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef;
    function p(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return t != null
        ? o("WAWebFrontendContactGetters").getDisplayName(t)
        : String(e);
    }
    function _(e, t) {
      var n = p(e);
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          title: s._(/*BTDS*/ "Remove as customer?"),
          okText: s._(/*BTDS*/ "Remove"),
          okButtonType: "warning",
          onOK: function () {
            var n = o(
              "WAWebCustomerDataCollection",
            ).CustomerDataCollection.maybeGetCustomerDataByChatJid(e);
            (n != null &&
              o("WAWebCustomerDataFieldSaver").saveCustomerDataField(e, n, {
                contactType: o("WAWebContactType").ContactType.NONE,
              }),
              t == null || t(e),
              o("WAWebModalManager").closeModalManager());
          },
          onCancel: o("WAWebModalManager").closeModalManager,
          onOverlayClick: o("WAWebModalManager").closeModalManager,
          testid: void 0,
          children: s._(
            /*BTDS*/ "This will remove {customerName} as a customer. They will still be a contact.",
            [s._param("customerName", n)],
          ),
        }),
      );
    }
    function f(e) {
      var t = e.chatJid,
        n = e.onChatClick,
        o = e.onDelete,
        a = m(null),
        i = d(
          function (e) {
            (e.stopPropagation(), n == null || n(t));
          },
          [t, n],
        ),
        l = d(
          function () {
            _(t, o);
          },
          [t, o],
        ),
        c = u.jsx(r("WDSMenu.react"), {
          children: u.jsx(r("WDSMenuItem.react"), {
            title: s._(/*BTDS*/ "Remove"),
            Icon: r("WDSIconIcClose.react"),
            onPress: l,
            testid: void 0,
          }),
        }),
        p = r("useWDSMenu")({ targetRef: a, menu: c }),
        f = p.closeMenu,
        g = p.isMenuOpen,
        h = p.menuPortal,
        y = p.openMenu,
        C = d(
          function (e) {
            (e.stopPropagation(), g ? f() : y());
          },
          [g, f, y],
        );
      return u.jsxs("div", {
        className: "x78zum5 x6s0dn4 x15w1vwp",
        children: [
          u.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcChat.react"),
            variant: "borderless",
            size: "small",
            type: "default",
            onPress: i,
            "aria-label": s._(/*BTDS*/ "Chat"),
            testid: void 0,
          }),
          u.jsx(r("WDSButton.react"), {
            ref: a,
            Icon: r("WDSIconIcMoreVert.react"),
            variant: "borderless",
            size: "small",
            type: "default",
            onPress: C,
            "aria-label": s._(/*BTDS*/ "More actions"),
            testid: void 0,
          }),
          h,
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
