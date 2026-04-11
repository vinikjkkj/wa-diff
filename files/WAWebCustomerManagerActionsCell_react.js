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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(26),
        n = e.chatJid,
        a = e.onChatClick,
        i = e.onDelete,
        l = m(null),
        c;
      t[0] !== n || t[1] !== a
        ? ((c = function (t) {
            (t.stopPropagation(), a == null || a(n));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        p;
      t[3] !== n || t[4] !== i
        ? ((p = function () {
            _(n, i);
          }),
          (t[3] = n),
          (t[4] = i),
          (t[5] = p))
        : (p = t[5]);
      var f = p,
        g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Remove")), (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] !== f
        ? ((h = u.jsx(r("WDSMenu.react"), {
            children: u.jsx(r("WDSMenuItem.react"), {
              title: g,
              Icon: r("WDSIconIcClose.react"),
              onPress: f,
              testid: void 0,
            }),
          })),
          (t[7] = f),
          (t[8] = h))
        : (h = t[8]);
      var y = h,
        C;
      t[9] !== y
        ? ((C = { targetRef: l, menu: y }), (t[9] = y), (t[10] = C))
        : (C = t[10]);
      var b = r("useWDSMenu")(C),
        v = b.closeMenu,
        S = b.isMenuOpen,
        R = b.menuPortal,
        L = b.openMenu,
        E;
      t[11] !== v || t[12] !== S || t[13] !== L
        ? ((E = function (t) {
            (t.stopPropagation(), S ? v() : L());
          }),
          (t[11] = v),
          (t[12] = S),
          (t[13] = L),
          (t[14] = E))
        : (E = t[14]);
      var k = E,
        I;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = { className: "x78zum5 x6s0dn4 x15w1vwp" }), (t[15] = I))
        : (I = t[15]);
      var T;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "Chat")), (t[16] = T))
        : (T = t[16]);
      var D;
      t[17] !== d
        ? ((D = u.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcChat.react"),
            variant: "borderless",
            size: "small",
            type: "default",
            onPress: d,
            "aria-label": T,
            testid: void 0,
          })),
          (t[17] = d),
          (t[18] = D))
        : (D = t[18]);
      var x;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "More actions")), (t[19] = x))
        : (x = t[19]);
      var $;
      t[20] !== k
        ? (($ = u.jsx(r("WDSButton.react"), {
            ref: l,
            Icon: r("WDSIconIcMoreVert.react"),
            variant: "borderless",
            size: "small",
            type: "default",
            onPress: k,
            "aria-label": x,
            testid: void 0,
          })),
          (t[20] = k),
          (t[21] = $))
        : ($ = t[21]);
      var P;
      return (
        t[22] !== R || t[23] !== $ || t[24] !== D
          ? ((P = u.jsxs(
              "div",
              babelHelpers.extends({}, I, { children: [D, $, R] }),
            )),
            (t[22] = R),
            (t[23] = $),
            (t[24] = D),
            (t[25] = P))
          : (P = t[25]),
        P
      );
    }
    l.default = f;
  },
  226,
);
