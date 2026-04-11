__d(
  "WAWebStatusListHeader.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebContactCollection",
    "WAWebCrosspostingIcons.react",
    "WAWebDetailImage.react",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebRound.react",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebStatusLastPostPreview.react",
    "WAWebStatusPostingDropdown.react",
    "WAWebStatusThumbnail.react",
    "WAWebStatusViewer.react",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumStatusRowSection",
    "WDSFocusStateStyles",
    "WDSIconIcAdd.react",
    "react",
    "stylex",
    "useWAWebEventTargetValue",
    "useWAWebFocusState",
    "useWAWebListener",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useRef,
      _ = d.useState,
      f = {
        panelHeader: {
          display: "x78zum5",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          justifyContent: "x1qughib",
          width: "xh8yej3",
          height: "xwnsf4a",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        clickable: {
          cursor: "x1ypdohk",
          backgroundColor: "x1ubxc9n",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          marginInlineStart: "x1hm9lzh",
          marginInlineEnd: "x1sa5p1d",
          width: "xnlsq7q",
          $$css: !0,
        },
        headerText: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          justifyContent: "x1qughib",
          minWidth: "x9hgts1",
          height: "xc9qbxq",
          marginInlineEnd: "x11t971q",
          $$css: !0,
        },
        roundComponent: {
          height: "x1ta3ar0",
          width: "x1se2ifz",
          transitionProperty: "x13b0p5u",
          boxShadow: "x1gnnqk1",
          backgroundColor: "xfn3atn",
          color: "x1pse0pq",
          $$css: !0,
        },
        wrappingRoundComponent: {
          position: "x10l6tqk",
          bottom: "x1t6nodo",
          zIndex: "xupqr0c",
          insetInlineEnd: "x11dcrhx",
          left: null,
          right: null,
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        paddingAll2: {
          paddingTop: "x1gxa6cn",
          paddingInlineEnd: "x1j8ymqv",
          paddingBottom: "xa0aww2",
          paddingInlineStart: "x4tra6z",
          $$css: !0,
        },
      };
    function g(t) {
      var n,
        a = t.sessionIdRef,
        i = r("useWAWebFocusState")(),
        l = i[0],
        u = i[1],
        d = p(null),
        g = _(function () {
          return o("WAWebStatusCollection").StatusCollection.getMyStatus();
        }),
        h = g[0],
        y = g[1],
        C = _(function () {
          return h == null ? void 0 : h.msgs.last();
        }),
        b = C[0],
        v = C[1],
        S = r("useWAWebEventTargetValue")(
          b,
          "change:crosspostingInfo",
          function () {
            return b == null ? void 0 : b.crosspostingInfo;
          },
        ),
        R = function () {
          var e;
          (y(o("WAWebStatusCollection").StatusCollection.getMyStatus()),
            v(
              (e = o("WAWebStatusCollection").StatusCollection.getMyStatus()) ==
                null
                ? void 0
                : e.msgs.last(),
            ));
        };
      (o("useWAWebListener").useListener(
        o("WAWebStatusCollection").StatusCollection,
        "add remove bulk_add sort change:msgsChanged change:unreadCount",
        R,
      ),
        o("useWAWebListener").useListener(
          o("WAWebContactCollection").ContactCollection,
          "change:statusMute",
          R,
        ));
      var L, E, k;
      h && (k = h.msgs);
      var I = function () {
          var e = h == null ? void 0 : h.msgs;
          h &&
            e != null &&
            e.length &&
            o("WAWebModalManager").ModalManager.openMedia(
              c.jsx(r("WAWebStatusViewer.react"), {
                initialStatus: h,
                initialStatusMsg: void 0,
                closeStatusViewer: function () {
                  o("WAWebModalManager").ModalManager.closeMedia();
                },
                sessionId: a == null ? void 0 : a.current,
                rowIdx: 0,
                rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                  .MY_STATUS,
                continuousPlay: !0,
              }),
              {
                transition: "status-modal",
                focusType: {
                  type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
                },
              },
            );
        },
        T = null,
        D = null,
        x = h != null && h.msgs.length > 0,
        $ = s._(/*BTDS*/ "My status"),
        P = s._(/*BTDS*/ "Add status"),
        N = p(null),
        M = r("useWDSMenu")({
          targetRef: N,
          menu: c.jsx(o("WAWebStatusPostingDropdown.react").AddStatusMenu, {}),
          dismissable: !0,
        }),
        w = M.closeMenu,
        A = M.isMenuOpen,
        F = M.menuPortal,
        O = M.openMenu,
        B = m(
          function () {
            A ? w() : O();
          },
          [A, w, O],
        );
      if (h && (n = k) != null && n.length)
        ((L = c.jsx(r("WAWebStatusThumbnail.react"), {
          tabIndex: x ? 0 : -1,
          role: x ? "button" : null,
          ariaLabel: o(
            "WAWebStatusGatingUtils",
          ).isUpdatesTabInNavigationBarEnabled()
            ? P
            : $,
          id: h.id,
          contact: h.contact,
          onClick: I,
        })),
          (E = c.jsxs("div", {
            className: "x78zum5 x1q0g3np x6s0dn4",
            children: [
              c.jsx(r("WAWebStatusLastPostPreview.react"), {
                msg: r("WANullthrows")(b),
              }),
              S != null
                ? c.jsx(r("WAWebCrosspostingIcons.react"), {
                    crosspostingInfo: S,
                    testidPrefix: "status-header",
                  })
                : null,
            ],
          })),
          (D = I));
      else {
        T = c.jsx(o("WAWebRound.react").Round, {
          ref: N,
          xstyle: [f.roundComponent, f.wrappingRoundComponent, f.paddingAll2],
          children: c.jsx(o("WAWebRound.react").Round, {
            xstyle: f.roundComponent,
            ref: d,
            children: c.jsx(r("WDSIconIcAdd.react"), { width: 14, height: 14 }),
          }),
        });
        var W = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
        L = c.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: W,
          theme: "status",
          size: 40,
        });
        var q = s._(/*BTDS*/ "Click to add status update"),
          U = s._(/*BTDS*/ "Disappears after 24 hours");
        ((E = c.jsx("span", {
          "data-testid": void 0,
          className: "x1nxh6w3 xhslqc4",
          children: o(
            "WAWebStatusGatingUtils",
          ).isUpdatesTabInNavigationBarEnabled()
            ? U
            : q,
        })),
          (D = B));
      }
      var V = c.jsx("span", {
          "data-testid": void 0,
          className: "x1jchvi3",
          children: s._(/*BTDS*/ "My status"),
        }),
        H = c.jsx("span", {
          className: "x1jchvi3",
          children: s._(/*BTDS*/ "Add status"),
        }),
        G = c.jsxs(r("WAWebUnstyledButton.react"), {
          xstyle: [f.panelHeader, f.clickable],
          onClick: D,
          ref: l,
          testid: void 0,
          children: [
            c.jsx("div", {
              className: "x1n2onr6",
              children: c.jsxs("div", {
                className:
                  "x78zum5 x1q0g3np x6s0dn4 xl56j7k x13zx6y x1peatla x17t9dm2",
                children: [L, T],
              }),
            }),
            c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  f.headerText,
                  u &&
                    o("WDSFocusStateStyles").WDSFocusStateStyles
                      .genericFocusPersistent,
                ),
                {
                  children: [
                    o(
                      "WAWebStatusGatingUtils",
                    ).isUpdatesTabInNavigationBarEnabled() && x === !1
                      ? H
                      : V,
                    E,
                  ],
                },
              ),
            ),
            F,
          ],
        });
      return G;
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
