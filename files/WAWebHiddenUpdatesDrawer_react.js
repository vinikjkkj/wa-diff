__d(
  "WAWebHiddenUpdatesDrawer.react",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebSendStatusMuteAction",
    "WAWebStatusCell.react",
    "WAWebStatusCollection",
    "WAWebStatusViewer.react",
    "WAWebStatusVisibilityUtils",
    "WAWebWamEnumStatusRowSection",
    "WDSFlex.stylex",
    "WDSIconIcVisibility.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebListener",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useRef,
      p = d.useState,
      _ = { listBody: { overflowY: "x1odjw0f", $$css: !0 } };
    function f() {
      var e = [],
        t = o("WAWebStatusCollection").StatusCollection.getValidStatus();
      for (var n of t)
        o("WAWebStatusVisibilityUtils").isUserOrTrustedGroupOrNewsletterStatus(
          n,
        ) &&
          o("WAWebContactGetters").getCalculatedStatusMute(n.contact) &&
          e.push(n);
      return e;
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.contact,
        a = e.index,
        i = e.onOpenStatus,
        l = e.status,
        u;
      t[0] !== a || t[1] !== i || t[2] !== l
        ? ((u = function () {
            i(l, a);
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = u))
        : (u = t[3]);
      var d = u,
        p;
      t[4] !== n.id
        ? ((p = function () {
            o("WAWebSendStatusMuteAction").setStatusMute(n.id, !1);
          }),
          (t[4] = n.id),
          (t[5] = p))
        : (p = t[5]);
      var _ = p,
        f;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Unhide")), (t[6] = f))
        : (f = t[6]);
      var g = f,
        h;
      t[7] !== _
        ? ((h = c.jsx(r("WDSMenu.react"), {
            children: c.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcVisibility.react"),
              title: g,
              onPress: _,
            }),
          })),
          (t[7] = _),
          (t[8] = h))
        : (h = t[8]);
      var y = h,
        C = m(null),
        b;
      t[9] !== y
        ? ((b = { targetRef: C, menu: y, enableUIM: !1 }),
          (t[9] = y),
          (t[10] = b))
        : (b = t[10]);
      var v = r("useWDSMenu")(b),
        S = v.isMenuOpen,
        R = v.menuPortal,
        L = v.openMenu,
        E;
      t[11] !== L
        ? ((E = function (t) {
            t.anchor instanceof HTMLElement
              ? ((C.current = t.anchor), L())
              : t.event != null && L(t.event);
          }),
          (t[11] = L),
          (t[12] = E))
        : (E = t[12]);
      var k = E,
        I;
      t[13] !== n || t[14] !== d || t[15] !== k || t[16] !== S || t[17] !== l
        ? ((I = c.jsx(r("WAWebStatusCell.react"), {
            status: l,
            contact: n,
            onClick: d,
            isModalView: !1,
            onContext: k,
            contextMenu: S,
            showMutedStatusesDimmed: !1,
          })),
          (t[13] = n),
          (t[14] = d),
          (t[15] = k),
          (t[16] = S),
          (t[17] = l),
          (t[18] = I))
        : (I = t[18]);
      var T;
      return (
        t[19] !== R || t[20] !== I
          ? ((T = c.jsxs(c.Fragment, { children: [I, R] })),
            (t[19] = R),
            (t[20] = I),
            (t[21] = T))
          : (T = t[21]),
        T
      );
    }
    function h(t) {
      var n = o("react-compiler-runtime").c(15),
        a = t.onBack,
        i = t.ref,
        l = p(f),
        u = l[0],
        d = l[1],
        m;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function () {
            d(f());
          }),
          (n[0] = m))
        : (m = n[0]);
      var h = m;
      (o("useWAWebListener").useListener(
        o("WAWebStatusCollection").StatusCollection,
        "add remove bulk_add change:msgsChanged",
        h,
      ),
        o("useWAWebListener").useListener(
          o("WAWebContactCollection").ContactCollection,
          "change:statusMute change:parentStatusMute",
          h,
        ));
      var C;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Muted updates")), (n[1] = C))
        : (C = n[1]);
      var b = C,
        v = y,
        S;
      if (n[2] !== u) {
        var R;
        (n[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = function (t, n) {
              return c.jsx(
                g,
                { status: t, contact: t.contact, index: n, onOpenStatus: v },
                t.id.toString(),
              );
            }),
            (n[4] = R))
          : (R = n[4]),
          (S = u.map(R)),
          (n[2] = u),
          (n[3] = S));
      } else S = n[3];
      var L = S,
        E;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { surface: "unknown", viewName: "hidden-updates" }), (n[5] = E))
        : (E = n[5]);
      var k;
      n[6] !== a
        ? ((k = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: b,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: a,
          })),
          (n[6] = a),
          (n[7] = k))
        : (k = n[7]);
      var I;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexGrow1,
            o("WDSFlex.stylex").wdsFlex.flexShrink1,
            _.listBody,
          )),
          (n[8] = I))
        : (I = n[8]);
      var T;
      n[9] !== L
        ? ((T = c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsx(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              animation: !1,
              children: c.jsx(
                "div",
                babelHelpers.extends({}, I, { children: L }),
              ),
            }),
          })),
          (n[9] = L),
          (n[10] = T))
        : (T = n[10]);
      var D;
      return (
        n[11] !== i || n[12] !== k || n[13] !== T
          ? ((D = c.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              theme: "striped",
              testid: void 0,
              tsNavigationData: E,
              children: [k, T],
            })),
            (n[11] = i),
            (n[12] = k),
            (n[13] = T),
            (n[14] = D))
          : (D = n[14]),
        D
      );
    }
    function y(e, t) {
      o("WAWebModalManager").ModalManager.openMedia(
        c.jsx(r("WAWebStatusViewer.react"), {
          initialStatus: e,
          initialStatusMsg: void 0,
          closeStatusViewer: C,
          rowIdx: t,
          rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
            .MUTED_STORIES,
          continuousPlay: !0,
        }),
        {
          transition: "status-modal",
          focusType: { type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM },
        },
      );
    }
    function C() {
      o("WAWebModalManager").ModalManager.closeMedia();
    }
    l.default = h;
  },
  226,
);
