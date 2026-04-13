__d(
  "WAWebCellFrame.react",
  [
    "cx",
    "WAWebClassnames",
    "WDSFocusStateStyles",
    "cr:23442",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        adsListChatBody: {
          borderTopStyle: "x1ejq31n",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function p(t) {
      var a = o("react-compiler-runtime").c(82),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var s = i,
        c = s.active,
        p = s.activeStyleType,
        _ = s.ariaColIndex,
        f = s.ariaLabel,
        g = s.checkbox,
        h = s.className,
        y = s.containerRole,
        C = s.customImage,
        b = s.detail,
        v = s.disabled,
        S = s.dragging,
        R = s.extendSecondaryEllipsis,
        L = s.focusable,
        E = s.focusid,
        k = s.handleKeyboardClick,
        I = s.idle,
        T = s.image,
        D = s.isMuted,
        x = s.label,
        $ = s.onClick,
        P = s.onContextMenu,
        N = s.onMouseDown,
        M = s.onMouseEnter,
        w = s.onMouseLeave,
        A = s.onMouseOver,
        F = s.primary,
        O = s.primaryDetail,
        B = s.role,
        W = s.secondary,
        q = s.secondaryDetail,
        U = s.tabIndex,
        V = s.tabOrder,
        H = s.testid,
        G = s.theme,
        z = s.unreadStyle,
        j = p === void 0 ? "DEFAULT" : p,
        K = _ === void 0 ? 2 : _,
        Q = g === void 0 ? !1 : g,
        X = C === void 0 ? !1 : C,
        Y = R === void 0 ? !1 : R,
        J = L === void 0 ? !1 : L,
        Z = B === void 0 ? "gridcell" : B,
        ee = !!(v !== !0 && G !== "disabled" && ($ || N || M || A)),
        te = r("useWAWebStaticButtonA11y")($),
        ne = te[0],
        re = te[1],
        oe = n("cr:23442")(),
        ae = oe[0],
        ie = oe[1],
        le = r("useMergeRefs")(l, ne, ae),
        se = (J && ee && c == null) || k === !0,
        ue = G !== "voip-ongoing-call" && (ie === !0 || c === !0),
        ce = ue && (j === "DEFAULT" || j === "BOTH"),
        de = ue && (j === "BORDER" || j === "BOTH"),
        me;
      if (
        a[3] !== de ||
        a[4] !== ce ||
        a[5] !== Q ||
        a[6] !== h ||
        a[7] !== S ||
        a[8] !== I ||
        a[9] !== ee ||
        a[10] !== D ||
        a[11] !== x ||
        a[12] !== i.image ||
        a[13] !== i.tallerCellWithMemberLabel ||
        a[14] !== G ||
        a[15] !== z
      ) {
        var pe;
        ((me = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          h,
          "_ak72",
          G === "refresh" && "_asii",
          G === "voip-ongoing-call" && "_at36",
          de &&
            (u || (u = r("stylex")))(
              o("WDSFocusStateStyles").WDSFocusStateStyles
                .genericFocusPersistent,
            ),
          ((pe = {}),
          (pe._ak73 = ee && G !== "refresh"),
          (pe._asio = ee && G === "refresh"),
          (pe._ak74 = G === "cart-product"),
          (pe._ak75 =
            Q ||
            G === "chat-checkbox" ||
            G === "chat-checkbox-no-delete" ||
            G === "cell-message-checkbox" ||
            G === "chat-checkbox-disabled"),
          (pe._ak76 =
            G === "drawer-list" ||
            G === "chat-info" ||
            G === "subgroup" ||
            G === "subgroup-new" ||
            G === "quick-replies-drawer-item"),
          (pe._ak77 = G === "chat-info"),
          (pe._ak78 = G === "subgroup" || G === "subgroup-new"),
          (pe._ak79 = G === "subgroup-new"),
          (pe._ak7a = G === "community-home"),
          (pe._ak7b = G === "identity"),
          (pe._ak7c = G === "list-names" || G === "list-names-no-delete"),
          (pe._ak7d = G === "cell-message" || G === "cell-message-checkbox"),
          (pe._ak7e = G === "plain"),
          (pe._ak7f = G === "chat-search"),
          (pe._aos2 = G === "status-list-modal"),
          (pe._ak7h =
            G === "label-selection" ||
            G === "label-selection-redesigned" ||
            G === "label-selection-new-label" ||
            G === "create-new-list-consumer" ||
            G === "create-new-list-smb"),
          (pe._apbm =
            G === "label-selection-redesigned" ||
            G === "label-selection-new-label"),
          (pe._as3r =
            G === "create-new-list-smb" || G === "create-new-list-consumer"),
          (pe._ap2q = G === "label-selection-new-label"),
          (pe._ak7i = G === "add-item"),
          (pe._ak7j = G === "add-item-placeholder"),
          (pe._ak7k = G === "add-order-item"),
          (pe._ak7l = I === !0),
          (pe._ak7m = G === "group-modal" || G === "chat-checkbox-no-delete"),
          (pe._ak7n = !!z),
          (pe._asiw = !0),
          (pe._ak7o = !!S),
          (pe._ak7p = ce),
          (pe._ak7q = !!D),
          (pe._ak7r = G === "groups_v4_invite"),
          (pe._ak7s =
            G === "product" ||
            G === "product-out-of-stock" ||
            G === "product-of-collection" ||
            G === "collection-header" ||
            G === "collection-edit" ||
            G === "ads-list"),
          (pe._ak7t = G === "product-of-collection"),
          (pe._ak7u = G === "product-out-of-stock"),
          (pe._ak7v = G === "collection-edit"),
          (pe._ak7w = G === "collection-header"),
          (pe._ak7x = G === "order-product"),
          (pe._ak7y = G === "media"),
          (pe._ak7z = G === "list-button-compact"),
          (pe["_ak7-"] = G === "list-msg"),
          (pe._ak7_ = G === "archive-panel"),
          (pe._ak80 = G === "radio-button-row"),
          (pe._ak81 = G === "sticker-pack"),
          (pe._ak82 =
            G === "reaction-by-others" ||
            G === "reaction-by-me" ||
            G === "newsletter-reaction-by-others" ||
            G === "newsletter-reaction-by-me"),
          (pe._ak83 = G === "reaction-by-me"),
          (pe._aohh = G === "newsletter-link-cell"),
          (pe._ak84 = G === "reaction-by-others"),
          (pe["_any-"] = G === "newsletter-reaction-by-others"),
          (pe._aofs = G === "newsletter-reaction-by-contact"),
          (pe._ak85 = G === "disabled" || G === "disabled-no-border"),
          (pe._ak86 =
            G === "linked-account" || G === "linked-account-consumer"),
          (pe._ak87 = G === "linked-account-consumer"),
          (pe._ak88 = G === "chat-checkbox-disabled"),
          (pe._ak89 =
            G === "community-tab-home" || G === "community-tab-home-new"),
          (pe._ak8a = G === "community-tab-home-new"),
          (pe._ak8b = G === "community-tab-subgroup"),
          (pe._ak8c = G === "view-all"),
          (pe._ak8d = G === "community-tab-activity-cell"),
          (pe._ak8e = G === "community-create"),
          (pe._as4r = G === "menu-item"),
          (pe._auka = G === "lists-assign-modal"),
          (pe._ak8f =
            G === "no-border" ||
            G === "label-list-no-border" ||
            G === "disabled-no-border"),
          (pe._aqwg = G === "label-list-no-border"),
          (pe._ak8g = G === "product-add-to-order"),
          (pe._akk4 = G === "select-dropdown-item"),
          (pe._am_1 = x != null),
          (pe._au9t = i.tallerCellWithMemberLabel === !0),
          (pe["_ap1-"] = !0),
          (pe._ap1_ = !0),
          pe),
          { 0: "", 1: "xdylf7x" }[
            (G === "label-selection-new-label" && !i.image) << 0
          ],
          { 0: "", 1: "x12w63v0" }[
            (G === "create-new-list-consumer" && !i.image) << 0
          ],
          { 0: "", 1: "xdx6fka" }[
            ((G === "label-selection-redesigned" || G === "label-selection") &&
              !i.image) << 0
          ],
          { 0: "", 1: "x1iw51ew" }[
            ((G === "label-list-no-border" || G === "label-list") &&
              !i.image) << 0
          ],
          { 0: "", 1: "xjbqb8w x722v89 x1h1zc6f" }[(G === "ads-list") << 0],
        )),
          (a[3] = de),
          (a[4] = ce),
          (a[5] = Q),
          (a[6] = h),
          (a[7] = S),
          (a[8] = I),
          (a[9] = ee),
          (a[10] = D),
          (a[11] = x),
          (a[12] = i.image),
          (a[13] = i.tallerCellWithMemberLabel),
          (a[14] = G),
          (a[15] = z),
          (a[16] = me));
      } else me = a[16];
      var _e = me,
        fe;
      if (a[17] !== G) {
        var ge,
          he = G === "ads-list" ? [m.adsListChatBody] : null;
        ((fe =
          he == null
            ? o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_ak8l",
                ((ge = {}), (ge._ap1_ = !0), ge),
              )
            : (u || (u = r("stylex")))(he)),
          (a[17] = G),
          (a[18] = fe));
      } else fe = a[18];
      var ye = fe,
        Ce;
      if (T) {
        var be;
        (a[19] !== X || a[20] !== T || a[21] !== G
          ? ((be = X
              ? T
              : d.jsx("div", {
                  className:
                    G === "refresh" || G === "chat-info" ? "_asin" : "_ak8h",
                  children: T,
                })),
            (a[19] = X),
            (a[20] = T),
            (a[21] = G),
            (a[22] = be))
          : (be = a[22]),
          (Ce = be));
      }
      var ve;
      a[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((ve = [
            "product",
            "product-out-of-stock",
            "product-of-collection",
            "sticker-pack",
          ]),
          (a[23] = ve))
        : (ve = a[23]);
      var Se = ve,
        Re;
      if (O != null) {
        var Le;
        if (a[24] !== G || a[25] !== z) {
          var Ee;
          ((Le = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            [((Ee = {}), (Ee._ak8i = G == null || !Se.includes(G)), Ee)],
            z === !0 && "x1s688f",
          )),
            (a[24] = G),
            (a[25] = z),
            (a[26] = Le));
        } else Le = a[26];
        var ke = Le,
          Ie;
        (a[27] !== ke || a[28] !== O
          ? ((Ie = d.jsx("div", {
              className: ke,
              "data-testid": void 0,
              children: O,
            })),
            (a[27] = ke),
            (a[28] = O),
            (a[29] = Ie))
          : (Ie = a[29]),
          (Re = Ie));
      }
      var Te, De;
      if (W != null) {
        var xe;
        (a[30] !== q
          ? ((xe =
              q != null
                ? d.jsx("div", {
                    role: "gridcell",
                    "aria-colindex": 1,
                    className: "_ak8i",
                    children: q,
                  })
                : null),
            (a[30] = q),
            (a[31] = xe))
          : (xe = a[31]),
          (De = xe));
        var $e = "_ak8j",
          Pe;
        if (a[32] !== Y) {
          var Ne;
          ((Pe = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_ak8k",
            ((Ne = {}), (Ne["_ao-u"] = Y), Ne),
          )),
            (a[32] = Y),
            (a[33] = Pe));
        } else Pe = a[33];
        var Me;
        a[34] !== W || a[35] !== Pe
          ? ((Me = d.jsx("div", { className: Pe, children: W })),
            (a[34] = W),
            (a[35] = Pe),
            (a[36] = Me))
          : (Me = a[36]);
        var we = x == null && De,
          Ae;
        (a[37] !== Me || a[38] !== we
          ? ((Ae = d.jsxs("div", {
              className: $e,
              "data-testid": void 0,
              children: [Me, we],
            })),
            (a[37] = Me),
            (a[38] = we),
            (a[39] = Ae))
          : (Ae = a[39]),
          (Te = Ae));
      }
      var Fe;
      if (a[40] !== b) {
        var Oe;
        ((Fe =
          b != null
            ? d.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  "_ak8l",
                  "_ak8m",
                  ((Oe = {}), (Oe._ap1_ = !0), Oe),
                ),
                children: b,
              })
            : null),
          (a[40] = b),
          (a[41] = Fe));
      } else Fe = a[41];
      var Be = Fe,
        We = H != null ? H : "cell-frame-container",
        qe = f != null && f !== "" ? f : void 0,
        Ue = se && re,
        Ve;
      a[42] !== Ce
        ? ((Ve = d.jsx("div", { className: "_ak8n", children: Ce })),
          (a[42] = Ce),
          (a[43] = Ve))
        : (Ve = a[43]);
      var He;
      a[44] !== x || a[45] !== Re
        ? ((He =
            x != null &&
            d.jsxs("div", {
              className: "_am_2",
              "data-testid": void 0,
              children: [x, Re],
            })),
          (a[44] = x),
          (a[45] = Re),
          (a[46] = He))
        : (He = a[46]);
      var Ge = G === "list-names-no-delete",
        ze;
      if (a[47] !== Ge) {
        var je;
        ((ze = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ak8o",
          ((je = {}), (je._ak8p = Ge), je),
        )),
          (a[47] = Ge),
          (a[48] = ze));
      } else ze = a[48];
      var Ke = x != null && De,
        Qe;
      a[49] !== F || a[50] !== Ke
        ? ((Qe = d.jsxs("div", {
            className: "_ak8q",
            "data-testid": void 0,
            children: [F, Ke],
          })),
          (a[49] = F),
          (a[50] = Ke),
          (a[51] = Qe))
        : (Qe = a[51]);
      var Xe = x == null && Re,
        Ye;
      a[52] !== K || a[53] !== Z || a[54] !== ze || a[55] !== Qe || a[56] !== Xe
        ? ((Ye = d.jsxs("div", {
            role: Z,
            "aria-colindex": K,
            className: ze,
            children: [Qe, Xe],
          })),
          (a[52] = K),
          (a[53] = Z),
          (a[54] = ze),
          (a[55] = Qe),
          (a[56] = Xe),
          (a[57] = Ye))
        : (Ye = a[57]);
      var Je;
      a[58] !== ye || a[59] !== Te || a[60] !== He || a[61] !== Ye
        ? ((Je = d.jsxs("div", { className: ye, children: [He, Ye, Te] })),
          (a[58] = ye),
          (a[59] = Te),
          (a[60] = He),
          (a[61] = Ye),
          (a[62] = Je))
        : (Je = a[62]);
      var Ze;
      return (
        a[63] !== Be ||
        a[64] !== _e ||
        a[65] !== y ||
        a[66] !== E ||
        a[67] !== le ||
        a[68] !== $ ||
        a[69] !== P ||
        a[70] !== N ||
        a[71] !== M ||
        a[72] !== w ||
        a[73] !== A ||
        a[74] !== We ||
        a[75] !== qe ||
        a[76] !== Ue ||
        a[77] !== Ve ||
        a[78] !== Je ||
        a[79] !== U ||
        a[80] !== V
          ? ((Ze = d.jsxs(
              "div",
              babelHelpers.extends(
                {
                  "data-tab": V,
                  ref: le,
                  tabIndex: U,
                  "data-testid": void 0,
                  "data-focusid": E,
                  className: _e,
                  onClick: $,
                  onMouseDown: N,
                  onMouseEnter: M,
                  onMouseOver: A,
                  onMouseLeave: w,
                  onContextMenu: P,
                  role: y,
                  "aria-label": qe,
                },
                Ue,
                { children: [Ve, Je, Be] },
              ),
            )),
            (a[63] = Be),
            (a[64] = _e),
            (a[65] = y),
            (a[66] = E),
            (a[67] = le),
            (a[68] = $),
            (a[69] = P),
            (a[70] = N),
            (a[71] = M),
            (a[72] = w),
            (a[73] = A),
            (a[74] = We),
            (a[75] = qe),
            (a[76] = Ue),
            (a[77] = Ve),
            (a[78] = Je),
            (a[79] = U),
            (a[80] = V),
            (a[81] = Ze))
          : (Ze = a[81]),
        Ze
      );
    }
    l.default = p;
  },
  98,
);
