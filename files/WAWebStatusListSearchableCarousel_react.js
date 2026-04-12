__d(
  "WAWebStatusListSearchableCarousel.react",
  [
    "fbt",
    "WAReplaceRepeatingWhitespace",
    "WAWebCarousel.react",
    "WAWebChatCollection",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebParticipantListUtils",
    "WAWebRound.react",
    "WAWebSendStatusMuteAction",
    "WAWebStatusCollection",
    "WAWebStatusPostingDropdown.react",
    "WAWebStatusSearchUtils",
    "WAWebStatusThumbnailForUpdatesTab.react",
    "WAWebStatusViewer.react",
    "WAWebStopEvent",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumStatusRowSection",
    "WDSIconIcAdd.react",
    "WDSIconIcVisibilityOff.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSText.react",
    "react",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebFocusState",
    "useWAWebListener",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState,
      f = 17,
      g = 24,
      h = 4,
      y = 40,
      C = 8,
      b = {
        addStatusBadge: {
          position: "x10l6tqk",
          bottom: "x1o583il",
          insetInlineEnd: "xqwxbl3",
          left: null,
          right: null,
          width: "x1mzsije",
          height: "x8lyb6r",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundColor: "xfn3atn",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          borderTopWidth: "xamhcws",
          borderInlineEndWidth: "x1alpsbp",
          borderBottomWidth: "xlxy82",
          borderInlineStartWidth: "xyumdvf",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1yqpz0i",
          borderInlineEndColor: "x1lebdv1",
          borderBottomColor: "x1454cx3",
          borderInlineStartColor: "x1qppnnw",
          boxShadow: "x1gnnqk1",
          $$css: !0,
        },
        popupControls: { paddingTop: "xl7twdi", $$css: !0 },
      };
    function v(e) {
      var t = e.onOpenHiddenUpdates,
        n = e.searchQuery,
        a = e.sessionIdRef,
        i = e.showCarouselNavigationButtons,
        l = i === void 0 ? !1 : i,
        c = p(null),
        d = p(null),
        b = _(function () {
          return o("WAWebStatusCollection").StatusCollection.getMyStatus();
        }),
        v = b[0],
        R = b[1],
        k = _(function () {
          var e;
          return (e = o(
            "WAWebStatusCollection",
          ).StatusCollection.getMyStatus()) == null
            ? void 0
            : e.msgs.last();
        }),
        I = k[0],
        T = k[1],
        D = o("WAWebStatusSearchUtils").getFilteredStatusLists(),
        x = _(function () {
          return D.unread;
        }),
        $ = x[0],
        P = x[1],
        N = _(function () {
          return D.read;
        }),
        M = N[0],
        w = N[1],
        A = _(function () {
          return D.hasMutedStatuses;
        }),
        F = A[0],
        O = A[1],
        B = function () {
          var e = o("WAWebStatusSearchUtils").getFilteredStatusLists(),
            t = e.hasMutedStatuses,
            n = e.read,
            r = e.unread;
          (P(r), w(n), O(t));
          var a = o("WAWebStatusCollection").StatusCollection.getMyStatus();
          (R(a), T(a == null ? void 0 : a.msgs.last()));
        };
      o("useWAWebListener").useListener(
        o("WAWebStatusCollection").StatusCollection,
        "add remove bulk_add sort change:msgsChanged change:unreadCount",
        B,
      );
      var W = function () {
        var e = o("WAWebStatusSearchUtils").getFilteredStatusLists(),
          t = e.hasMutedStatuses,
          n = e.read,
          r = e.unread;
        (P(r), w(n), O(t));
      };
      (o("useWAWebListener").useListener(
        o("WAWebContactCollection").ContactCollection,
        "change:statusMute change:parentStatusMute",
        W,
      ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:archive change:isLocked",
          B,
        ),
        o("useWAWebListener").useListener(
          r("WAWebGroupMetadataCollection"),
          "change:suspended",
          B,
        ));
      var q = r("useWDSMenu")({
          targetRef: d,
          menu: u.jsx(o("WAWebStatusPostingDropdown.react").AddStatusMenu, {}),
          dismissable: !0,
          positionOnAnyClick: !0,
        }),
        U = q.closeMenu,
        V = q.isMenuOpen,
        H = q.menuPortal,
        G = q.openMenu,
        z = function (t) {
          V ? U() : G(t);
        },
        j = function () {
          o("WAWebModalManager").ModalManager.closeMedia();
        },
        K = function (t, n) {
          o("WAWebModalManager").ModalManager.openMedia(
            u.jsx(r("WAWebStatusViewer.react"), {
              initialStatus: t,
              initialStatusMsg: void 0,
              closeStatusViewer: j,
              rowIdx: n + 1,
              sessionId: a == null ? void 0 : a.current,
              continuousPlay: !0,
            }),
            {
              transition: "status-modal",
              focusType: { type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM },
            },
          );
        },
        Q = function (t) {
          (t.key === "Enter" || t.key === " ") && z();
        },
        X = function () {
          v &&
            v.msgs.length > 0 &&
            o("WAWebModalManager").ModalManager.openMedia(
              u.jsx(r("WAWebStatusViewer.react"), {
                initialStatus: v,
                initialStatusMsg: void 0,
                closeStatusViewer: j,
                rowIdx: 0,
                rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                  .MY_STATUS,
                sessionId: a == null ? void 0 : a.current,
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
        Y = m(
          function () {
            var e = [].concat($, M),
              t = function (t) {
                if (n == null || n.trim() === "") return t;
                var e = n.toLowerCase().trim();
                return t.filter(function (t) {
                  var n,
                    r,
                    o =
                      (n =
                        (r = t.contact) == null || (r = r.name) == null
                          ? void 0
                          : r.toLowerCase()) != null
                        ? n
                        : "";
                  return o.includes(e);
                });
              };
            return t(e);
          },
          [$, M, n],
        ),
        J = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        Z = n != null && n.trim() !== "",
        ee =
          v != null && I != null
            ? u.jsx(S, {
                addStatusMenuAnchorRef: d,
                addStatusRef: c,
                isMyStatus: !0,
                onAddStatusClick: z,
                onClick: X,
                status: v,
              })
            : u.jsx(E, {
                addStatusMenuAnchorRef: d,
                addStatusRef: c,
                meUser: J,
                onAddStatusClick: z,
                onKeyDown: Q,
              }),
        te = [].concat(
          Z ? [] : [u.jsxs("div", { children: [ee, H] }, "my-status")],
          Y.map(function (e, t) {
            return u.jsx(
              "div",
              {
                children: u.jsx(S, {
                  status: e,
                  onClick: function () {
                    return K(e, t);
                  },
                  tabbable: !1,
                }),
              },
              e.id.toString(),
            );
          }),
          F && !Z
            ? [
                u.jsx(
                  "div",
                  { children: u.jsx(L, { onClick: t, tabbable: !1 }) },
                  "hidden-status",
                ),
              ]
            : [],
        );
      return u.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
        role: "listbox",
        customSelector: '[role="option"], [role="button"]',
        children: u.jsx("div", {
          className: "x78zum5 xh8yej3",
          "aria-label": s._(/*BTDS*/ "Updates"),
          children: u.jsx(r("WAWebCarousel.react"), {
            cardWidth: 96,
            allowPartialCards: !0,
            carouselMargins: { left: f, right: f },
            spacing: 0,
            enableWheelScroll: !0,
            isRTL: r("WAWebL10N").isRTL(),
            stepButtonScrollEasing: !0,
            stepButtonScrollSpeed: 25,
            stepButtonProps: {
              iconSize: g,
              offset: h,
              size: y,
              tabIndex: -1,
              useWdsIcons: !0,
              verticalOffset: C,
              hideButtons: !l,
            },
            children: te,
          }),
        }),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t,
        n = e.addStatusMenuAnchorRef,
        a = e.addStatusRef,
        i = e.isMyStatus,
        l = i === void 0 ? !1 : i,
        c = e.onAddStatusClick,
        m = e.onClick,
        f = e.status,
        g = e.tabbable,
        h = g === void 0 ? !0 : g,
        y = f.contact,
        C = o("useWAWebContactValues").useContactValues(y.id, [
          o("WAWebFrontendContactGetters").getFormattedName,
        ]),
        b = C[0],
        v = p(null),
        S = r("useWAWebFocusState")(),
        L = S[0],
        E = S[1],
        k = _(!1),
        I = k[0],
        T = k[1],
        D =
          (t = o("useWAWebChatValues").useOptionalChatValues(
            f == null ? void 0 : f.id,
            [o("WAWebFrontendChatGetters").getGroupMetadata],
          )) != null
            ? t
            : [null],
        x = D[0],
        $ = b;
      l
        ? ($ = s._(/*BTDS*/ "My status").toString())
        : x != null &&
          x.isUnnamed &&
          ($ = r("WAReplaceRepeatingWhitespace")(
            o(
              "WAWebParticipantListUtils",
            ).calculateUnnamedGroupFullParticipantsList(x, !0),
          ));
      var P = d(
          function (e) {
            (L(e), (v.current = e));
          },
          [L],
        ),
        N = function () {
          (o("WAWebSendStatusMuteAction").setStatusMute(y.id, !0),
            o("WAWebModalManager").ModalManager.close());
        },
        M = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(R, {
              contact: y,
              onCancel: o("WAWebModalManager").closeModalManager,
              onHide: N,
            }),
          );
        },
        w = u.jsx(r("WDSMenu.react"), {
          children: u.jsx(r("WDSMenuItem.react"), {
            title: s._(/*BTDS*/ "Hide"),
            onPress: M,
            Icon: r("WDSIconIcVisibilityOff.react"),
          }),
        }),
        A = r("useWDSMenu")({
          targetRef: v,
          menu: w,
          dismissable: !0,
          contextMenuArea: !l,
        }),
        F = A.menuPortal,
        O = A.openMenu,
        B = function (t) {
          (t.key === "Enter" || t.key === " ") && (t.preventDefault(), m());
        },
        W = function (t) {
          l || (t.preventDefault(), O(t));
        },
        q = function (t) {
          l ? c == null || c(t) : m();
        },
        U = function (t) {
          (t.stopPropagation(), c == null || c(t));
        },
        V = function (t) {
          (t.key === "Enter" || t.key === " ") &&
            (t.preventDefault(), t.stopPropagation(), c == null || c());
        },
        H = function () {
          T(!0);
        },
        G = function () {
          T(!1);
        };
      return u.jsxs("div", {
        className:
          "x1380le5 x1n2onr6 x13oubkp xq48mlj xyqdw3p xg8j3zb x1djpfga x1im30kd x9f619",
        children: [
          u.jsx("div", {
            ref: P,
            className:
              "xlr9sxt xvvg52n xwd4zgb xq8v1ta x1qiirwl x1n2onr6 x1280gxy x1ypdohk x78zum5 xdt5ytf xh8yej3 x5yr21d xc8icb0",
            onClick: q,
            onKeyDown: B,
            onContextMenu: W,
            role: "option",
            "aria-selected": E,
            tabIndex: h ? 0 : -1,
            children: u.jsxs("div", {
              className: "x78zum5 xdt5ytf x5yr21d x1n2onr6",
              children: [
                u.jsx("div", {
                  className:
                    "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c xupqr0c",
                  children: u.jsx(
                    r("WAWebStatusThumbnailForUpdatesTab.react"),
                    { id: f.id, contact: y, onClick: m },
                  ),
                }),
                u.jsx("div", {
                  className:
                    "x10l6tqk x1t6nodo xrotz4w x11dcrhx x12xzxwr x6ikm8r x10wlt62",
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body3Emphasized",
                    colorName: "persistentAlwaysWhite",
                    maxLines: 2,
                    children: $,
                  }),
                }),
              ],
            }),
          }),
          E &&
            u.jsx("div", {
              className:
                "x10l6tqk x13vifvy x1ey2m1c x1o0tod xtijo5x x12l2aii x1mbk4o x14vvt0a x1w3ol1v xamhcws x1alpsbp xlxy82 xyumdvf x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xlze6vy x47fsot x1rrvw3c x18djku1 x47corl",
            }),
          l &&
            u.jsx("div", {
              ref: n,
              className: "x10l6tqk x1atx4j1 xrr41r3 x1guw455 x16wdlz0 x12xzxwr",
              onClick: U,
              onKeyDown: V,
              onMouseDown: o("WAWebStopEvent").preventDefault,
              onFocus: H,
              onBlur: G,
              role: "button",
              "aria-label": s._(/*BTDS*/ "Add status"),
              tabIndex: 0,
              children: u.jsx(
                "div",
                babelHelpers.extends(
                  { ref: a },
                  {
                    0: {
                      className:
                        "x10l6tqk x1o583il xqwxbl3 x1mzsije x8lyb6r x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x78zum5 x6s0dn4 xl56j7k x1gnnqk1 x1ypdohk",
                    },
                    1: {
                      className:
                        "x10l6tqk x1o583il xqwxbl3 x1mzsije x8lyb6r x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x78zum5 x6s0dn4 xl56j7k x1gnnqk1 x1ypdohk xczwrxl",
                    },
                  }[!!I << 0],
                  {
                    children: u.jsx(r("WDSIconIcAdd.react"), {
                      width: 14,
                      height: 14,
                      colorName: "contentOnAccent",
                    }),
                  },
                ),
              ),
            }),
          F,
        ],
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.contact,
        n = e.onCancel,
        a = e.onHide,
        i = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebFrontendContactGetters").getFormattedName,
        ]),
        l = i[0],
        c = s._(/*BTDS*/ "Hide {name-of-contact-being-hidden}'s statuses?", [
          s._param("name-of-contact-being-hidden", l),
        ]),
        d = u.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDeemphasized",
          children: s._(
            /*BTDS*/ "New statuses from {name-of-contact-being-hidden} won't appear under recent updates anymore.",
            [s._param("name-of-contact-being-hidden", l)],
          ),
        });
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: u.jsx("span", {
          className: "x1aueamr x1s688f",
          children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: c }),
        }),
        okButtonType: "secondary",
        okText: s._(/*BTDS*/ "Hide"),
        buttonWidth: "hug",
        onOK: a,
        cancelButtonType: "secondary",
        cancelText: s._(/*BTDS*/ "Cancel"),
        onCancel: n,
        buttonGroupStyle: b.popupControls,
        children: u.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          children: d,
        }),
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.onClick,
        n = e.tabbable,
        o = n === void 0 ? !0 : n,
        a = r("useWAWebFocusState")(),
        i = a[0],
        l = a[1],
        c = function (n) {
          (n.stopPropagation(), t == null || t());
        },
        d = function (n) {
          (n.key === "Enter" || n.key === " ") &&
            (n.preventDefault(), n.stopPropagation(), t == null || t());
        };
      return u.jsxs("div", {
        className:
          "x1380le5 x1n2onr6 x13oubkp xq48mlj xyqdw3p xg8j3zb x1djpfga x1im30kd x9f619",
        children: [
          u.jsxs("div", {
            ref: i,
            className:
              "xlr9sxt xvvg52n xwd4zgb xq8v1ta x6ikm8r x10wlt62 x1h3rtpe x1ypdohk x78zum5 xdt5ytf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x9f619 xh8yej3 x5yr21d",
            onClick: c,
            onKeyDown: d,
            role: "option",
            "aria-selected": l,
            tabIndex: o ? 0 : -1,
            children: [
              u.jsx("div", {
                className:
                  "x78zum5 xdt5ytf x1cy8zhl x1nhvcw1 x1iyjqo2 x16ovd2e x12w63v0",
                children: u.jsx("div", {
                  className: "x78zum5 x6s0dn4 xl56j7k xc9qbxq x14qfxbe",
                  children: u.jsx(r("WDSIconIcVisibilityOff.react"), {
                    width: 24,
                    height: 24,
                    colorName: "contentDeemphasized",
                  }),
                }),
              }),
              u.jsx("div", {
                className:
                  "x78zum5 xsdox4t x1y1aw1k xf159sx xwib8y2 xmzvs34 xuk3077 xl56j7k x1r0jzty x2lah0s xkh2ocl",
                children: u.jsx(r("WDSText.react"), {
                  type: "Body3Emphasized",
                  colorName: "contentDeemphasized",
                  children: s._(/*BTDS*/ "Hidden"),
                }),
              }),
            ],
          }),
          l &&
            u.jsx("div", {
              className:
                "x10l6tqk x13vifvy x1ey2m1c x1o0tod xtijo5x x12l2aii x1mbk4o x14vvt0a x1w3ol1v xamhcws x1alpsbp xlxy82 xyumdvf x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xlze6vy x47fsot x1rrvw3c x18djku1 x47corl",
            }),
        ],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.addStatusMenuAnchorRef,
        n = e.addStatusRef,
        a = e.meUser,
        i = e.onAddStatusClick,
        l = e.onKeyDown,
        c = r("useWAWebFocusState")(),
        d = c[0],
        m = c[1];
      return u.jsxs("div", {
        className:
          "x1380le5 x1n2onr6 x13oubkp xq48mlj xyqdw3p xg8j3zb x1djpfga x1im30kd x9f619",
        children: [
          u.jsxs("div", {
            ref: function (n) {
              (d(n), (t.current = n));
            },
            className:
              "xlr9sxt xvvg52n xwd4zgb xq8v1ta x6ikm8r x10wlt62 x1h3rtpe x1ypdohk x78zum5 xdt5ytf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x9f619 xh8yej3 x5yr21d",
            onClick: i,
            onKeyDown: l,
            role: "button",
            tabIndex: 0,
            children: [
              u.jsx("div", {
                className: "x78zum5 xdt5ytf x6s0dn4 x1nhvcw1 x1iyjqo2 x1h678fw",
                children: u.jsxs("div", {
                  className: "x1n2onr6 x1e56ztr",
                  children: [
                    u.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: a,
                      theme: "status",
                      size: 56,
                    }),
                    u.jsx(o("WAWebRound.react").Round, {
                      ref: n,
                      xstyle: b.addStatusBadge,
                      children: u.jsx(r("WDSIconIcAdd.react"), {
                        width: 14,
                        height: 14,
                        colorName: "contentOnAccent",
                      }),
                    }),
                  ],
                }),
              }),
              u.jsx("div", {
                className:
                  "x78zum5 xsdox4t x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xuk3077 x1r0jzty x2lah0s xkh2ocl",
                children: u.jsx("span", {
                  className: "x2b8uid xh8yej3",
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body3Emphasized",
                    colorName: "contentDeemphasized",
                    children: s._(/*BTDS*/ "Add status"),
                  }),
                }),
              }),
            ],
          }),
          m &&
            u.jsx("div", {
              className:
                "x10l6tqk x13vifvy x1ey2m1c x1o0tod xtijo5x x12l2aii x1mbk4o x14vvt0a x1w3ol1v xamhcws x1alpsbp xlxy82 xyumdvf x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xlze6vy x47fsot x1rrvw3c x18djku1 x47corl",
            }),
        ],
      });
    }
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = v));
  },
  226,
);
