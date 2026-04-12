__d(
  "WAWebCellFrame.react",
  [
    "cx",
    "WAWebClassnames",
    "WDSFocusStateStyles",
    "cr:23442",
    "react",
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
      var a,
        i,
        l,
        s,
        c = t.ref,
        p = babelHelpers.objectWithoutPropertiesLoose(t, e),
        _ = p.active,
        f = p.activeStyleType,
        g = f === void 0 ? "DEFAULT" : f,
        h = p.ariaColIndex,
        y = h === void 0 ? 2 : h,
        C = p.ariaLabel,
        b = p.checkbox,
        v = b === void 0 ? !1 : b,
        S = p.className,
        R = p.containerRole,
        L = p.customImage,
        E = L === void 0 ? !1 : L,
        k = p.detail,
        I = p.disabled,
        T = p.dragging,
        D = p.extendSecondaryEllipsis,
        x = D === void 0 ? !1 : D,
        $ = p.focusable,
        P = $ === void 0 ? !1 : $,
        N = p.focusid,
        M = p.handleKeyboardClick,
        w = p.idle,
        A = p.image,
        F = p.isMuted,
        O = p.label,
        B = p.onClick,
        W = p.onContextMenu,
        q = p.onMouseDown,
        U = p.onMouseEnter,
        V = p.onMouseLeave,
        H = p.onMouseOver,
        G = p.primary,
        z = p.primaryDetail,
        j = p.role,
        K = j === void 0 ? "gridcell" : j,
        Q = p.secondary,
        X = p.secondaryDetail,
        Y = p.tabIndex,
        J = p.tabOrder,
        Z = p.testid,
        ee = p.theme,
        te = p.unreadStyle,
        ne = !!(I !== !0 && ee !== "disabled" && (B || q || U || H)),
        re = r("useWAWebStaticButtonA11y")(B),
        oe = re[0],
        ae = re[1],
        ie = n("cr:23442")(),
        le = ie[0],
        se = ie[1],
        ue = r("useMergeRefs")(c, oe, le),
        ce = (P && ne && _ == null) || M === !0,
        de = ee !== "voip-ongoing-call" && (se === !0 || _ === !0),
        me = de && (g === "DEFAULT" || g === "BOTH"),
        pe = de && (g === "BORDER" || g === "BOTH"),
        _e = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          S,
          "_ak72",
          ee === "refresh" && "_asii",
          ee === "voip-ongoing-call" && "_at36",
          pe &&
            (u || (u = r("stylex")))(
              o("WDSFocusStateStyles").WDSFocusStateStyles
                .genericFocusPersistent,
            ),
          ((a = {}),
          (a._ak73 = ne && ee !== "refresh"),
          (a._asio = ne && ee === "refresh"),
          (a._ak74 = ee === "cart-product"),
          (a._ak75 =
            v ||
            ee === "chat-checkbox" ||
            ee === "chat-checkbox-no-delete" ||
            ee === "cell-message-checkbox" ||
            ee === "chat-checkbox-disabled"),
          (a._ak76 =
            ee === "drawer-list" ||
            ee === "chat-info" ||
            ee === "subgroup" ||
            ee === "subgroup-new" ||
            ee === "quick-replies-drawer-item"),
          (a._ak77 = ee === "chat-info"),
          (a._ak78 = ee === "subgroup" || ee === "subgroup-new"),
          (a._ak79 = ee === "subgroup-new"),
          (a._ak7a = ee === "community-home"),
          (a._ak7b = ee === "identity"),
          (a._ak7c = ee === "list-names" || ee === "list-names-no-delete"),
          (a._ak7d = ee === "cell-message" || ee === "cell-message-checkbox"),
          (a._ak7e = ee === "plain"),
          (a._ak7f = ee === "chat-search"),
          (a._aos2 = ee === "status-list-modal"),
          (a._ak7h =
            ee === "label-selection" ||
            ee === "label-selection-redesigned" ||
            ee === "label-selection-new-label" ||
            ee === "create-new-list-consumer" ||
            ee === "create-new-list-smb"),
          (a._apbm =
            ee === "label-selection-redesigned" ||
            ee === "label-selection-new-label"),
          (a._as3r =
            ee === "create-new-list-smb" || ee === "create-new-list-consumer"),
          (a._ap2q = ee === "label-selection-new-label"),
          (a._ak7i = ee === "add-item"),
          (a._ak7j = ee === "add-item-placeholder"),
          (a._ak7k = ee === "add-order-item"),
          (a._ak7l = w === !0),
          (a._ak7m = ee === "group-modal" || ee === "chat-checkbox-no-delete"),
          (a._ak7n = !!te),
          (a._asiw = !0),
          (a._ak7o = !!T),
          (a._ak7p = me),
          (a._ak7q = !!F),
          (a._ak7r = ee === "groups_v4_invite"),
          (a._ak7s =
            ee === "product" ||
            ee === "product-out-of-stock" ||
            ee === "product-of-collection" ||
            ee === "collection-header" ||
            ee === "collection-edit" ||
            ee === "ads-list"),
          (a._ak7t = ee === "product-of-collection"),
          (a._ak7u = ee === "product-out-of-stock"),
          (a._ak7v = ee === "collection-edit"),
          (a._ak7w = ee === "collection-header"),
          (a._ak7x = ee === "order-product"),
          (a._ak7y = ee === "media"),
          (a._ak7z = ee === "list-button-compact"),
          (a["_ak7-"] = ee === "list-msg"),
          (a._ak7_ = ee === "archive-panel"),
          (a._ak80 = ee === "radio-button-row"),
          (a._ak81 = ee === "sticker-pack"),
          (a._ak82 =
            ee === "reaction-by-others" ||
            ee === "reaction-by-me" ||
            ee === "newsletter-reaction-by-others" ||
            ee === "newsletter-reaction-by-me"),
          (a._ak83 = ee === "reaction-by-me"),
          (a._aohh = ee === "newsletter-link-cell"),
          (a._ak84 = ee === "reaction-by-others"),
          (a["_any-"] = ee === "newsletter-reaction-by-others"),
          (a._aofs = ee === "newsletter-reaction-by-contact"),
          (a._ak85 = ee === "disabled" || ee === "disabled-no-border"),
          (a._ak86 =
            ee === "linked-account" || ee === "linked-account-consumer"),
          (a._ak87 = ee === "linked-account-consumer"),
          (a._ak88 = ee === "chat-checkbox-disabled"),
          (a._ak89 =
            ee === "community-tab-home" || ee === "community-tab-home-new"),
          (a._ak8a = ee === "community-tab-home-new"),
          (a._ak8b = ee === "community-tab-subgroup"),
          (a._ak8c = ee === "view-all"),
          (a._ak8d = ee === "community-tab-activity-cell"),
          (a._ak8e = ee === "community-create"),
          (a._as4r = ee === "menu-item"),
          (a._auka = ee === "lists-assign-modal"),
          (a._ak8f =
            ee === "no-border" ||
            ee === "label-list-no-border" ||
            ee === "disabled-no-border"),
          (a._aqwg = ee === "label-list-no-border"),
          (a._ak8g = ee === "product-add-to-order"),
          (a._akk4 = ee === "select-dropdown-item"),
          (a._am_1 = O != null),
          (a._au9t = p.tallerCellWithMemberLabel === !0),
          (a["_ap1-"] = !0),
          (a._ap1_ = !0),
          a),
          { 0: "", 1: "xdylf7x" }[
            (ee === "label-selection-new-label" && !p.image) << 0
          ],
          { 0: "", 1: "x12w63v0" }[
            (ee === "create-new-list-consumer" && !p.image) << 0
          ],
          { 0: "", 1: "xdx6fka" }[
            ((ee === "label-selection-redesigned" ||
              ee === "label-selection") &&
              !p.image) << 0
          ],
          { 0: "", 1: "x1iw51ew" }[
            ((ee === "label-list-no-border" || ee === "label-list") &&
              !p.image) << 0
          ],
          { 0: "", 1: "xjbqb8w x722v89 x1h1zc6f" }[(ee === "ads-list") << 0],
        ),
        fe = ee === "ads-list" ? [m.adsListChatBody] : null,
        ge =
          fe == null
            ? o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_ak8l",
                ((i = {}), (i._ap1_ = !0), i),
              )
            : (u || (u = r("stylex")))(fe),
        he;
      A &&
        (he = E
          ? A
          : d.jsx("div", {
              className:
                ee === "refresh" || ee === "chat-info" ? "_asin" : "_ak8h",
              children: A,
            }));
      var ye = [
          "product",
          "product-out-of-stock",
          "product-of-collection",
          "sticker-pack",
        ],
        Ce;
      if (z != null) {
        var be,
          ve = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            [((be = {}), (be._ak8i = ee == null || !ye.includes(ee)), be)],
            te === !0 && "x1s688f",
          );
        Ce = d.jsx("div", {
          className: ve,
          "data-testid": void 0,
          children: z,
        });
      }
      var Se, Re;
      if (Q != null) {
        var Le;
        ((Re =
          X != null
            ? d.jsx("div", {
                role: "gridcell",
                "aria-colindex": 1,
                className: "_ak8i",
                children: X,
              })
            : null),
          (Se = d.jsxs("div", {
            className: "_ak8j",
            "data-testid": void 0,
            children: [
              d.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  "_ak8k",
                  ((Le = {}), (Le["_ao-u"] = x), Le),
                ),
                children: Q,
              }),
              O == null && Re,
            ],
          })));
      }
      var Ee =
        k != null
          ? d.jsx("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_ak8l",
                "_ak8m",
                ((l = {}), (l._ap1_ = !0), l),
              ),
              children: k,
            })
          : null;
      return d.jsxs(
        "div",
        babelHelpers.extends(
          {
            "data-tab": J,
            ref: ue,
            tabIndex: Y,
            "data-testid": void 0,
            "data-focusid": N,
            className: _e,
            onClick: B,
            onMouseDown: q,
            onMouseEnter: U,
            onMouseOver: H,
            onMouseLeave: V,
            onContextMenu: W,
            role: R,
            "aria-label": C != null && C !== "" ? C : void 0,
          },
          ce && ae,
          {
            children: [
              d.jsx("div", { className: "_ak8n", children: he }),
              d.jsxs("div", {
                className: ge,
                children: [
                  O != null &&
                    d.jsxs("div", {
                      className: "_am_2",
                      "data-testid": void 0,
                      children: [O, Ce],
                    }),
                  d.jsxs("div", {
                    role: K,
                    "aria-colindex": y,
                    className: o(
                      "WAWebClassnames",
                    ).classnamesConvertMeToStylexPlease(
                      "_ak8o",
                      ((s = {}), (s._ak8p = ee === "list-names-no-delete"), s),
                    ),
                    children: [
                      d.jsxs("div", {
                        className: "_ak8q",
                        "data-testid": void 0,
                        children: [G, O != null && Re],
                      }),
                      O == null && Ce,
                    ],
                  }),
                  Se,
                ],
              }),
              Ee,
            ],
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
