__d(
  "WAWebSystemMessageWithSingleCTA.react",
  [
    "fbt",
    "WAWebKeyboardIsKeyActivation",
    "WAWebMsgType",
    "WAWebWamEnumSystemMessageCategoryType",
    "WDSFontTokenStyles",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        container: { color: "xhslqc4", $$css: !0 },
        ctaTextHovered: {
          textDecoration: "x1bvjpef",
          cursor: "x1ypdohk",
          $$css: !0,
        },
      };
    function p(t) {
      var n = t.bodyText,
        a = t.className,
        i = t.ctaText,
        l = t.ctaXstyle,
        u = t.icon,
        p = t.isBodyTextClickable,
        _ = p === void 0 ? !1 : p,
        f = t.onClick,
        g = t.onclickRef,
        h = t.role,
        y = t.testid,
        C = t.xstyle,
        b = d(!1),
        v = b[0],
        S = b[1],
        R = h != null ? h : f ? "button" : void 0,
        L = function (t) {
          r("WAWebKeyboardIsKeyActivation")(t) &&
            (t.stopPropagation(), t.preventDefault(), f == null || f(t));
        },
        E = c.jsx(
          "span",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              o("WDSFontTokenStyles").WDSFontTokenStyles.Body3Emphasized,
              v && m.ctaTextHovered,
              l,
            ),
            _ === !0
              ? babelHelpers.extends(
                  { role: R },
                  R === "link" ? { tabIndex: 0 } : {},
                  {
                    onClick: f,
                    onKeyDown: L,
                    onMouseEnter: function () {
                      return S(!0);
                    },
                    onMouseLeave: function () {
                      return S(!1);
                    },
                  },
                )
              : {},
            { children: i },
          ),
        ),
        k = c.jsx(
          "span",
          babelHelpers.extends(
            { "data-testid": void 0 },
            e.props(
              m.container,
              o("WDSFontTokenStyles").WDSFontTokenStyles.Body3,
              C,
            ),
            {
              children: s._(
                /*BTDS*/ "{system-message-icon}{system-message-body}. {system-message-cta}",
                [
                  s._param("system-message-icon", u),
                  s._param("system-message-body", n),
                  s._param("system-message-cta", E),
                ],
              ),
            },
          ),
        ),
        I =
          _ === !0
            ? babelHelpers.extends({}, R === "link" ? { tabIndex: 0 } : {})
            : babelHelpers.extends(
                { role: R },
                R === "link" ? { tabIndex: 0 } : {},
                {
                  onClick: f,
                  onMouseEnter: function () {
                    return S(!0);
                  },
                  onMouseLeave: function () {
                    return S(!1);
                  },
                },
              );
      return c.jsx(
        "div",
        babelHelpers.extends({ ref: g, className: a != null ? a : void 0 }, I, {
          children: k,
        }),
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
          return o("WAWebWamEnumSystemMessageCategoryType")
            .SYSTEM_MESSAGE_CATEGORY_TYPE.PRIVACY;
        case o("WAWebMsgType").MSG_TYPE.GP2:
          return o("WAWebWamEnumSystemMessageCategoryType")
            .SYSTEM_MESSAGE_CATEGORY_TYPE.GROUPS;
      }
    }
    ((l.SystemMessageWithSingleCTA = p), (l.getSystemMessageCategoryType = _));
  },
  226,
);
