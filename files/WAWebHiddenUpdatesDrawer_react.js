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
      var t = e.contact,
        n = e.index,
        a = e.onOpenStatus,
        i = e.status,
        l = function () {
          a(i, n);
        },
        u = function () {
          o("WAWebSendStatusMuteAction").setStatusMute(t.id, !1);
        },
        d = s._(/*BTDS*/ "Unhide"),
        p = c.jsx(r("WDSMenu.react"), {
          children: c.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcVisibility.react"),
            title: d,
            onPress: u,
          }),
        }),
        _ = m(null),
        f = r("useWDSMenu")({ targetRef: _, menu: p, enableUIM: !1 }),
        g = f.isMenuOpen,
        h = f.menuPortal,
        y = f.openMenu,
        C = function (t) {
          t.anchor instanceof HTMLElement
            ? ((_.current = t.anchor), y())
            : t.event != null && y(t.event);
        };
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx(r("WAWebStatusCell.react"), {
            status: i,
            contact: t,
            onClick: l,
            isModalView: !1,
            onContext: C,
            contextMenu: g,
            showMutedStatusesDimmed: !1,
          }),
          h,
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n = t.onBack,
        a = t.ref,
        i = p(f),
        l = i[0],
        u = i[1],
        d = function () {
          u(f());
        };
      (o("useWAWebListener").useListener(
        o("WAWebStatusCollection").StatusCollection,
        "add remove bulk_add change:msgsChanged",
        d,
      ),
        o("useWAWebListener").useListener(
          o("WAWebContactCollection").ContactCollection,
          "change:statusMute change:parentStatusMute",
          d,
        ));
      var m = s._(/*BTDS*/ "Hidden updates"),
        h = function (t, n) {
          o("WAWebModalManager").ModalManager.openMedia(
            c.jsx(r("WAWebStatusViewer.react"), {
              initialStatus: t,
              initialStatusMsg: void 0,
              closeStatusViewer: function () {
                o("WAWebModalManager").ModalManager.closeMedia();
              },
              rowIdx: n,
              rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                .MUTED_STORIES,
              continuousPlay: !0,
            }),
            {
              transition: "status-modal",
              focusType: { type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM },
            },
          );
        },
        y = l.map(function (e, t) {
          return c.jsx(
            g,
            { status: e, contact: e.contact, index: t, onOpenStatus: h },
            e.id.toString(),
          );
        });
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        theme: "striped",
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "hidden-updates" },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: m,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: n,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsx(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              animation: !1,
              children: c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    o("WDSFlex.stylex").wdsFlex.flexGrow1,
                    o("WDSFlex.stylex").wdsFlex.flexShrink1,
                    _.listBody,
                  ),
                  { children: y },
                ),
              ),
            }),
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
