__d(
  "WAWebChatCell.react",
  [
    "fbt",
    "WAWebAccessibility.react",
    "WAWebCellFrame.react",
    "WAWebEmojiText.react",
    "WAWebFocusTracer",
    "WAWebFormatConfiguration",
    "WAWebKeyboardIsKeyActivation",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebSpinner.react",
    "WAWebStopEvent",
    "WAWebUISpacing",
    "WAWebVelocityTransitionGroup",
    "WDSFocusStateStyles",
    "WDSIconIcExpandMore.react",
    "react",
    "stylex",
    "useWAWebIsKeyboardUser",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.Fragment,
      _ = m.useImperativeHandle,
      f = m.useRef,
      g = m.useState,
      h = {
        btnContext: {
          display: "x1rg5ohu",
          width: "xn6xy2s",
          height: "x1qx5ct2",
          marginInlineStart: "x1wbi8v6",
          color: "xhslqc4",
          verticalAlign: "x16dsc37",
          $$css: !0,
        },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        btnContextAdjust: {
          width: "xw4jnvo",
          height: "x1qx5ct2",
          marginInlineEnd: "x18faa90",
          $$css: !0,
        },
        btnContextVerticallyCenter: {
          position: "x1n2onr6",
          top: "x1fur4o1",
          $$css: !0,
        },
        btnContextHidden: {
          visibility: "xlshs6z",
          pointerEvents: "x47corl",
          $$css: !0,
        },
      };
    function y(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.contextEnabled,
        l = a.firstCellInList,
        c = a.onContext,
        m = a.onMouseEnter,
        y = a.onMouseLeave,
        C = g(!1),
        b = C[0],
        v = C[1],
        S = g(!1),
        R = S[0],
        L = S[1],
        E = g(!1),
        k = E[0],
        I = E[1],
        T = r("useWAWebPrevious")(R),
        D = r("useWAWebIsKeyboardUser")(),
        x = D.isKeyboardUser,
        $ = f(null),
        P = f(null),
        N = function () {
          return P.current;
        };
      T && !a.contextMenu && L(!1);
      var M = function (t) {
          (t.stopPropagation(),
            !(!i() && !R) &&
              (t.preventDefault(), c == null || c({ anchor: $.current })));
        },
        w = function (t) {
          if (r("WAWebKeyboardIsKeyActivation")(t)) {
            if ((t.stopPropagation(), t.preventDefault(), !i() && !R)) return;
            c == null || c({ anchor: $.current });
          }
        },
        A = function () {
          return $.current;
        },
        F = function (t) {
          i() &&
            (t.stopPropagation(), t.preventDefault(), c && c({ event: t }));
        },
        O = function () {
          (!$ && !a.contextEnabled()) || r("WAWebFocusTracer").focus($.current);
        },
        B = function () {
          !b && !R && a.contextEnabled() && v(!0);
        },
        W = function () {
          !b && !R && a.contextEnabled() && (v(!0), m == null || m());
        },
        q = function () {
          b && (v(!1), y == null || y());
        },
        U = x && a.active === !0 && a.contextEnabled(),
        V = function () {
          var e;
          ((e = $.current) == null || e.removeAttribute("aria-hidden"), I(!0));
        },
        H = function () {
          var e;
          ((e = $.current) == null || e.setAttribute("aria-hidden", "true"),
            I(!1));
        };
      _(n, function () {
        return {
          focusOnContextMenuButton: O,
          mouseOver: B,
          mouseLeave: q,
          getContextMenuRef: A,
          getCellFrameDivRef: N,
        };
      });
      var G = a.primary,
        z =
          typeof G == "string"
            ? d.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                ellipsify: !0,
                formatters: o("WAWebFormatConfiguration").Search({
                  terms: a.searchText ? [a.searchText] : [],
                }),
                text: G,
                titlify: !0,
              })
            : G,
        j = s._(/*BTDS*/ "Open the chat context menu"),
        K = null,
        Q = null;
      if (a.pendingAction != null && a.pendingAction > 0)
        Q = d.jsx(
          "div",
          babelHelpers.extends(
            {},
            (u || (u = r("stylex"))).props(
              h.btnContext,
              x && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            ),
            {
              children: d.jsx(o("WAWebSpinner.react").Spinner, {
                color: "highlight",
                size: 18,
                stroke: 6,
              }),
            },
          ),
        );
      else if (a.contextEnabled()) {
        var X,
          Y = b || a.active === !0 || U || a.contextMenu === !0,
          J = (u || (u = r("stylex")))(
            h.btnContext,
            (a.theme === "hidden-status-row-cell" ||
              a.theme === "product" ||
              a.theme === "label-list" ||
              a.theme === "label-list-no-border" ||
              a.theme === "quick-replies-drawer-item") &&
              h.btnContextVerticallyCenter,
            x && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            [h.btnContextAdjust, o("WAWebUISpacing").uiMargin.start6],
            !Y && h.btnContextHidden,
          ),
          Z = a.theme === "chat-info",
          ee = d.jsx(r("WDSIconIcExpandMore.react"), {
            width: 20,
            height: 20,
            iconXstyle: Z ? h.secondaryColor : null,
          });
        K = d.jsxs(
          "button",
          {
            className: J,
            "data-testid": void 0,
            onBlur: H,
            onClick: M,
            onFocus: V,
            onKeyDown: w,
            onMouseDown: o("WAWebStopEvent").stopPropagation,
            ref: $,
            tabIndex: a.contextMenuControlled ? -1 : 0,
            children: [
              ee,
              k &&
                d.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
                  assertive: !0,
                  startWithText: !0,
                  text: (X = a.contextMenuAriaLabel) != null ? X : j,
                }),
            ],
          },
          "icon-context",
        );
      }
      var te = d.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "fade",
          children: Q,
        }),
        ne = d.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "pop-fast-chat",
          children: b || U || a.contextMenu === !0 ? K : null,
        }),
        re,
        oe;
      return (
        a.secondary != null
          ? ((re = a.primaryDetail),
            (oe = [
              d.jsx(p, { children: a.secondaryDetail }, "prop"),
              d.jsx(p, { children: te }, "spinner"),
              d.jsx(p, { children: ne }, "button"),
            ]))
          : (re = [
              d.jsx(p, { children: a.primaryDetail }, "prop"),
              d.jsx(p, { children: te }, "spinner"),
              d.jsx(p, { children: ne }, "button"),
            ]),
        d.jsx(r("WAWebPrivacyBlurWrapper.react"), {
          containerRef: P,
          forceReveal: U,
          children: d.jsx(r("WAWebCellFrame.react"), {
            active: a.active,
            activeStyleType: a.activeStyleType,
            checkbox: a.checkbox,
            className: a.className,
            containerRole: a.containerRole,
            customImage: a.customImage,
            detail: a.detail,
            dragging: a.dragging,
            extendSecondaryEllipsis: a.extendSecondaryEllipsis,
            firstCellInList: l,
            focusid: a.focusid,
            handleKeyboardClick: a.handleKeyboardClick,
            hideMeta: a.hideMeta,
            idle: a.idle,
            image: a.image,
            isMuted: a.isMuted,
            label: a.label,
            onClick: a.onClick,
            onContextMenu: a.contextEnabled() ? F : null,
            onMouseDown: a.onMouseDown,
            onMouseEnter: b ? null : W,
            onMouseLeave: b ? q : null,
            onMouseOver: b ? null : B,
            primary: z,
            primaryDetail: re,
            ref: P,
            role: a.role,
            secondary: a.secondary,
            secondaryDetail: oe,
            tabIndex: a.tabIndex,
            tallerCellWithMemberLabel: a.tallerCellWithMemberLabel,
            testid: void 0,
            theme: a.theme,
            unreadStyle: a.unreadStyle,
          }),
        })
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
