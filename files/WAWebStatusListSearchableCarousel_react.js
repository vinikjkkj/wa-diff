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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(59),
        n = e.onOpenHiddenUpdates,
        a = e.searchQuery,
        i = e.sessionIdRef,
        l = e.showCarouselNavigationButtons,
        c = l === void 0 ? !1 : l,
        d = p(null),
        m = p(null),
        b = _(L),
        v = b[0],
        k = b[1],
        D = _(R),
        x = D[0],
        $ = D[1],
        P;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = o("WAWebStatusSearchUtils").getFilteredStatusLists()),
          (t[0] = P))
        : (P = t[0]);
      var N = P,
        M;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = function () {
            return N.unread;
          }),
          (t[1] = M))
        : (M = t[1]);
      var w = _(M),
        A = w[0],
        F = w[1],
        O;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function () {
            return N.read;
          }),
          (t[2] = O))
        : (O = t[2]);
      var B = _(O),
        W = B[0],
        q = B[1],
        U;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = function () {
            return N.hasMutedStatuses;
          }),
          (t[3] = U))
        : (U = t[3]);
      var V = _(U),
        H = V[0],
        G = V[1],
        z;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = function () {
            var e = o("WAWebStatusSearchUtils").getFilteredStatusLists(),
              t = e.hasMutedStatuses,
              n = e.read,
              r = e.unread;
            (F(r), q(n), G(t));
            var a = o("WAWebStatusCollection").StatusCollection.getMyStatus();
            (k(a), $(a == null ? void 0 : a.msgs.last()));
          }),
          (t[4] = z))
        : (z = t[4]);
      var j = z;
      o("useWAWebListener").useListener(
        o("WAWebStatusCollection").StatusCollection,
        "add remove bulk_add sort change:msgsChanged change:unreadCount",
        j,
      );
      var K;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = function () {
            var e = o("WAWebStatusSearchUtils").getFilteredStatusLists(),
              t = e.hasMutedStatuses,
              n = e.read,
              r = e.unread;
            (F(r), q(n), G(t));
          }),
          (t[5] = K))
        : (K = t[5]);
      var Q = K;
      (o("useWAWebListener").useListener(
        o("WAWebContactCollection").ContactCollection,
        "change:statusMute change:parentStatusMute",
        Q,
      ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:archive change:isLocked",
          j,
        ),
        o("useWAWebListener").useListener(
          r("WAWebGroupMetadataCollection"),
          "change:suspended",
          j,
        ));
      var X;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = {
            targetRef: m,
            menu: u.jsx(
              o("WAWebStatusPostingDropdown.react").AddStatusMenu,
              {},
            ),
            dismissable: !0,
            positionOnAnyClick: !0,
          }),
          (t[6] = X))
        : (X = t[6]);
      var Y = r("useWDSMenu")(X),
        J = Y.closeMenu,
        Z = Y.isMenuOpen,
        ee = Y.menuPortal,
        te = Y.openMenu,
        ne;
      t[7] !== J || t[8] !== Z || t[9] !== te
        ? ((ne = function (t) {
            Z ? J() : te(t);
          }),
          (t[7] = J),
          (t[8] = Z),
          (t[9] = te),
          (t[10] = ne))
        : (ne = t[10]);
      var re = ne,
        oe = S,
        ae;
      if (
        t[11] !== ee ||
        t[12] !== re ||
        t[13] !== H ||
        t[14] !== x ||
        t[15] !== v ||
        t[16] !== n ||
        t[17] !== W ||
        t[18] !== a ||
        t[19] !== i ||
        t[20] !== A
      ) {
        var ie = function (t, n) {
            o("WAWebModalManager").ModalManager.openMedia(
              u.jsx(r("WAWebStatusViewer.react"), {
                initialStatus: t,
                initialStatusMsg: void 0,
                closeStatusViewer: oe,
                rowIdx: n + 1,
                sessionId: i == null ? void 0 : i.current,
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
          le;
        t[22] !== re
          ? ((le = function (t) {
              (t.key === "Enter" || t.key === " ") && re();
            }),
            (t[22] = re),
            (t[23] = le))
          : (le = t[23]);
        var se = le,
          ue;
        t[24] !== v || t[25] !== i
          ? ((ue = function () {
              v &&
                v.msgs.length > 0 &&
                o("WAWebModalManager").ModalManager.openMedia(
                  u.jsx(r("WAWebStatusViewer.react"), {
                    initialStatus: v,
                    initialStatusMsg: void 0,
                    closeStatusViewer: oe,
                    rowIdx: 0,
                    rowSection: o("WAWebWamEnumStatusRowSection")
                      .STATUS_ROW_SECTION.MY_STATUS,
                    sessionId: i == null ? void 0 : i.current,
                    continuousPlay: !0,
                  }),
                  {
                    transition: "status-modal",
                    focusType: {
                      type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
                    },
                  },
                );
            }),
            (t[24] = v),
            (t[25] = i),
            (t[26] = ue))
          : (ue = t[26]);
        var ce = ue,
          de;
        if (t[27] !== W || t[28] !== a || t[29] !== A) {
          var me = [].concat(A, W),
            pe;
          t[31] !== a
            ? ((pe = function (t) {
                if (a == null || a.trim() === "") return t;
                var e = a.toLowerCase().trim();
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
              }),
              (t[31] = a),
              (t[32] = pe))
            : (pe = t[32]);
          var _e = pe;
          ((de = _e(me)), (t[27] = W), (t[28] = a), (t[29] = A), (t[30] = de));
        } else de = t[30];
        var fe = de,
          ge;
        t[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((ge = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()),
            (t[33] = ge))
          : (ge = t[33]);
        var he = ge,
          ye;
        t[34] !== a
          ? ((ye = a != null && a.trim() !== ""), (t[34] = a), (t[35] = ye))
          : (ye = t[35]);
        var Ce = ye,
          be;
        t[36] !== se ||
        t[37] !== re ||
        t[38] !== ce ||
        t[39] !== x ||
        t[40] !== v
          ? ((be =
              v != null && x != null
                ? u.jsx(E, {
                    addStatusMenuAnchorRef: m,
                    addStatusRef: d,
                    isMyStatus: !0,
                    onAddStatusClick: re,
                    onClick: ce,
                    status: v,
                  })
                : u.jsx(T, {
                    addStatusMenuAnchorRef: m,
                    addStatusRef: d,
                    meUser: he,
                    onAddStatusClick: re,
                    onKeyDown: se,
                  })),
            (t[36] = se),
            (t[37] = re),
            (t[38] = ce),
            (t[39] = x),
            (t[40] = v),
            (t[41] = be))
          : (be = t[41]);
        var ve = be,
          Se;
        t[42] !== ee || t[43] !== Ce || t[44] !== ve
          ? ((Se = Ce
              ? []
              : [u.jsxs("div", { children: [ve, ee] }, "my-status")]),
            (t[42] = ee),
            (t[43] = Ce),
            (t[44] = ve),
            (t[45] = Se))
          : (Se = t[45]);
        var Re;
        (t[46] !== H || t[47] !== Ce || t[48] !== n
          ? ((Re =
              H && !Ce
                ? [
                    u.jsx(
                      "div",
                      { children: u.jsx(I, { onClick: n, tabbable: !1 }) },
                      "hidden-status",
                    ),
                  ]
                : []),
            (t[46] = H),
            (t[47] = Ce),
            (t[48] = n),
            (t[49] = Re))
          : (Re = t[49]),
          (ae = [].concat(
            Se,
            fe.map(function (e, t) {
              return u.jsx(
                "div",
                {
                  children: u.jsx(E, {
                    status: e,
                    onClick: function () {
                      return ie(e, t);
                    },
                    tabbable: !1,
                  }),
                },
                e.id.toString(),
              );
            }),
            Re,
          )),
          (t[11] = ee),
          (t[12] = re),
          (t[13] = H),
          (t[14] = x),
          (t[15] = v),
          (t[16] = n),
          (t[17] = W),
          (t[18] = a),
          (t[19] = i),
          (t[20] = A),
          (t[21] = ae));
      } else ae = t[21];
      var Le = ae,
        Ee,
        ke;
      t[50] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ee = { className: "x78zum5 xh8yej3" }),
          (ke = s._(/*BTDS*/ "Updates")),
          (t[50] = Ee),
          (t[51] = ke))
        : ((Ee = t[50]), (ke = t[51]));
      var Ie;
      t[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ie = { left: f, right: f }), (t[52] = Ie))
        : (Ie = t[52]);
      var Te;
      t[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((Te = r("WAWebL10N").isRTL()), (t[53] = Te))
        : (Te = t[53]);
      var De = !c,
        xe;
      t[54] !== De
        ? ((xe = {
            iconSize: g,
            offset: h,
            size: y,
            tabIndex: -1,
            useWdsIcons: !0,
            verticalOffset: C,
            hideButtons: De,
          }),
          (t[54] = De),
          (t[55] = xe))
        : (xe = t[55]);
      var $e;
      return (
        t[56] !== Le || t[57] !== xe
          ? (($e = u.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
              role: "listbox",
              customSelector: '[role="option"], [role="button"]',
              children: u.jsx(
                "div",
                babelHelpers.extends({}, Ee, {
                  "aria-label": ke,
                  children: u.jsx(r("WAWebCarousel.react"), {
                    cardWidth: 96,
                    allowPartialCards: !0,
                    carouselMargins: Ie,
                    spacing: 0,
                    enableWheelScroll: !0,
                    isRTL: Te,
                    stepButtonScrollEasing: !0,
                    stepButtonScrollSpeed: 25,
                    stepButtonProps: xe,
                    children: Le,
                  }),
                }),
              ),
            })),
            (t[56] = Le),
            (t[57] = xe),
            (t[58] = $e))
          : ($e = t[58]),
        $e
      );
    }
    function S() {
      o("WAWebModalManager").ModalManager.closeMedia();
    }
    function R() {
      var e;
      return (e = o("WAWebStatusCollection").StatusCollection.getMyStatus()) ==
        null
        ? void 0
        : e.msgs.last();
    }
    function L() {
      return o("WAWebStatusCollection").StatusCollection.getMyStatus();
    }
    function E(e) {
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
        R = S[0],
        L = S[1],
        E = _(!1),
        I = E[0],
        T = E[1],
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
            (R(e), (v.current = e));
          },
          [R],
        ),
        N = function () {
          (o("WAWebSendStatusMuteAction").setStatusMute(y.id, !0),
            o("WAWebModalManager").ModalManager.close());
        },
        M = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(k, {
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
            "aria-selected": L,
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
          L &&
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
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.contact,
        a = e.onCancel,
        i = e.onHide,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebFrontendContactGetters").getFormattedName]),
          (t[0] = l))
        : (l = t[0]);
      var c = o("useWAWebContactValues").useContactValues(n.id, l),
        d = c[0],
        m;
      t[1] !== d
        ? ((m = s._(
            /*BTDS*/ "Hide {name-of-contact-being-hidden}'s statuses?",
            [s._param("name-of-contact-being-hidden", d)],
          )),
          (t[1] = d),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] !== d
        ? ((_ = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "New statuses from {name-of-contact-being-hidden} won't appear under recent updates anymore.",
              [s._param("name-of-contact-being-hidden", d)],
            ),
          })),
          (t[3] = d),
          (t[4] = _))
        : (_ = t[4]);
      var f = _,
        g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { className: "x1aueamr x1s688f" }), (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== p
        ? ((h = u.jsx(
            "span",
            babelHelpers.extends({}, g, {
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: p }),
            }),
          )),
          (t[6] = p),
          (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Hide")), (t[8] = y))
        : (y = t[8]);
      var C;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Cancel")), (t[9] = C))
        : (C = t[9]);
      var v;
      t[10] !== f
        ? ((v = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: f,
          })),
          (t[10] = f),
          (t[11] = v))
        : (v = t[11]);
      var S;
      return (
        t[12] !== a || t[13] !== i || t[14] !== h || t[15] !== v
          ? ((S = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: h,
              okButtonType: "secondary",
              okText: y,
              buttonWidth: "hug",
              onOK: i,
              cancelButtonType: "secondary",
              cancelText: C,
              onCancel: a,
              buttonGroupStyle: b.popupControls,
              children: v,
            })),
            (t[12] = a),
            (t[13] = i),
            (t[14] = h),
            (t[15] = v),
            (t[16] = S))
          : (S = t[16]),
        S
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.onClick,
        a = e.tabbable,
        i = a === void 0 ? !0 : a,
        l = r("useWAWebFocusState")(),
        c = l[0],
        d = l[1],
        m;
      t[0] !== n
        ? ((m = function (t) {
            (t.stopPropagation(), n == null || n());
          }),
          (t[0] = n),
          (t[1] = m))
        : (m = t[1]);
      var p = m,
        _;
      t[2] !== n
        ? ((_ = function (t) {
            (t.key === "Enter" || t.key === " ") &&
              (t.preventDefault(), t.stopPropagation(), n == null || n());
          }),
          (t[2] = n),
          (t[3] = _))
        : (_ = t[3]);
      var f = _,
        g;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = {
            className:
              "x1380le5 x1n2onr6 x13oubkp xq48mlj xyqdw3p xg8j3zb x1djpfga x1im30kd x9f619",
          }),
          (t[4] = g))
        : (g = t[4]);
      var h;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = {
            className:
              "xlr9sxt xvvg52n xwd4zgb xq8v1ta x6ikm8r x10wlt62 x1h3rtpe x1ypdohk x78zum5 xdt5ytf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x9f619 xh8yej3 x5yr21d",
          }),
          (t[5] = h))
        : (h = t[5]);
      var y = i ? 0 : -1,
        C,
        b;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx("div", {
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
          })),
          (b = {
            className:
              "x78zum5 xsdox4t x1y1aw1k xf159sx xwib8y2 xmzvs34 xuk3077 xl56j7k x1r0jzty x2lah0s xkh2ocl",
          }),
          (t[6] = C),
          (t[7] = b))
        : ((C = t[6]), (b = t[7]));
      var v;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(
            "div",
            babelHelpers.extends({}, b, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body3Emphasized",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "Hidden"),
              }),
            }),
          )),
          (t[8] = v))
        : (v = t[8]);
      var S;
      t[9] !== c || t[10] !== p || t[11] !== f || t[12] !== d || t[13] !== y
        ? ((S = u.jsxs(
            "div",
            babelHelpers.extends({ ref: c }, h, {
              onClick: p,
              onKeyDown: f,
              role: "option",
              "aria-selected": d,
              tabIndex: y,
              children: [C, v],
            }),
          )),
          (t[9] = c),
          (t[10] = p),
          (t[11] = f),
          (t[12] = d),
          (t[13] = y),
          (t[14] = S))
        : (S = t[14]);
      var R;
      t[15] !== d
        ? ((R =
            d &&
            u.jsx("div", {
              className:
                "x10l6tqk x13vifvy x1ey2m1c x1o0tod xtijo5x x12l2aii x1mbk4o x14vvt0a x1w3ol1v xamhcws x1alpsbp xlxy82 xyumdvf x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xlze6vy x47fsot x1rrvw3c x18djku1 x47corl",
            })),
          (t[15] = d),
          (t[16] = R))
        : (R = t[16]);
      var L;
      return (
        t[17] !== S || t[18] !== R
          ? ((L = u.jsxs(
              "div",
              babelHelpers.extends({}, g, { children: [S, R] }),
            )),
            (t[17] = S),
            (t[18] = R),
            (t[19] = L))
          : (L = t[19]),
        L
      );
    }
    function T(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.addStatusMenuAnchorRef,
        a = e.addStatusRef,
        i = e.meUser,
        l = e.onAddStatusClick,
        c = e.onKeyDown,
        d = r("useWAWebFocusState")(),
        m = d[0],
        p = d[1],
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = {
            className:
              "x1380le5 x1n2onr6 x13oubkp xq48mlj xyqdw3p xg8j3zb x1djpfga x1im30kd x9f619",
          }),
          (t[0] = _))
        : (_ = t[0]);
      var f;
      t[1] !== n || t[2] !== m
        ? ((f = function (t) {
            (m(t), (n.current = t));
          }),
          (t[1] = n),
          (t[2] = m),
          (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = {
            className:
              "xlr9sxt xvvg52n xwd4zgb xq8v1ta x6ikm8r x10wlt62 x1h3rtpe x1ypdohk x78zum5 xdt5ytf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x9f619 xh8yej3 x5yr21d",
          }),
          (t[4] = g))
        : (g = t[4]);
      var h, y;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = {
            className: "x78zum5 xdt5ytf x6s0dn4 x1nhvcw1 x1iyjqo2 x1h678fw",
          }),
          (y = { className: "x1n2onr6 x1e56ztr" }),
          (t[5] = h),
          (t[6] = y))
        : ((h = t[5]), (y = t[6]));
      var C;
      t[7] !== i
        ? ((C = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: i,
            theme: "status",
            size: 56,
          })),
          (t[7] = i),
          (t[8] = C))
        : (C = t[8]);
      var v;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(r("WDSIconIcAdd.react"), {
            width: 14,
            height: 14,
            colorName: "contentOnAccent",
          })),
          (t[9] = v))
        : (v = t[9]);
      var S;
      t[10] !== a
        ? ((S = u.jsx(o("WAWebRound.react").Round, {
            ref: a,
            xstyle: b.addStatusBadge,
            children: v,
          })),
          (t[10] = a),
          (t[11] = S))
        : (S = t[11]);
      var R;
      t[12] !== C || t[13] !== S
        ? ((R = u.jsx(
            "div",
            babelHelpers.extends({}, h, {
              children: u.jsxs(
                "div",
                babelHelpers.extends({}, y, { children: [C, S] }),
              ),
            }),
          )),
          (t[12] = C),
          (t[13] = S),
          (t[14] = R))
        : (R = t[14]);
      var L, E;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = {
            className:
              "x78zum5 xsdox4t x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xuk3077 x1r0jzty x2lah0s xkh2ocl",
          }),
          (E = { className: "x2b8uid xh8yej3" }),
          (t[15] = L),
          (t[16] = E))
        : ((L = t[15]), (E = t[16]));
      var k;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsx(
            "div",
            babelHelpers.extends({}, L, {
              children: u.jsx(
                "span",
                babelHelpers.extends({}, E, {
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body3Emphasized",
                    colorName: "contentDeemphasized",
                    children: s._(/*BTDS*/ "Add status"),
                  }),
                }),
              ),
            }),
          )),
          (t[17] = k))
        : (k = t[17]);
      var I;
      t[18] !== l || t[19] !== c || t[20] !== f || t[21] !== R
        ? ((I = u.jsxs(
            "div",
            babelHelpers.extends({ ref: f }, g, {
              onClick: l,
              onKeyDown: c,
              role: "button",
              tabIndex: 0,
              children: [R, k],
            }),
          )),
          (t[18] = l),
          (t[19] = c),
          (t[20] = f),
          (t[21] = R),
          (t[22] = I))
        : (I = t[22]);
      var T;
      t[23] !== p
        ? ((T =
            p &&
            u.jsx("div", {
              className:
                "x10l6tqk x13vifvy x1ey2m1c x1o0tod xtijo5x x12l2aii x1mbk4o x14vvt0a x1w3ol1v xamhcws x1alpsbp xlxy82 xyumdvf x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xlze6vy x47fsot x1rrvw3c x18djku1 x47corl",
            })),
          (t[23] = p),
          (t[24] = T))
        : (T = t[24]);
      var D;
      return (
        t[25] !== I || t[26] !== T
          ? ((D = u.jsxs(
              "div",
              babelHelpers.extends({}, _, { children: [I, T] }),
            )),
            (t[25] = I),
            (t[26] = T),
            (t[27] = D))
          : (D = t[27]),
        D
      );
    }
    l.default = v;
  },
  226,
);
