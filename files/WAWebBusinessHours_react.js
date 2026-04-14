__d(
  "WAWebBusinessHours.react",
  [
    "fbt",
    "WAWebBusinessLogEvents",
    "WAWebBusinessProfileUtils",
    "WAWebDrawerContext",
    "WAWebEmojiText.react",
    "WAWebProductCatalogContext",
    "WAWebSmbUtils",
    "WAWebUnstyledButton.react",
    "WDSIconIcKeyboardArrowDown.react",
    "WDSPaddings.stylex",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useState,
      _ = {
        businessHours: {
          display: "x1lliihq",
          width: "xh8yej3",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        businessHoursHours: {
          display: "x1n9xxwz",
          width: "xh8yej3",
          lineHeight: "x1fc57z9",
          textAlign: "xp4054r",
          whiteSpace: "x126k92a",
          verticalAlign: "xxymvpz",
          $$css: !0,
        },
        businessHoursDay: {
          display: "x1n9xxwz",
          whiteSpace: "xuxw1ft",
          verticalAlign: "xxymvpz",
          $$css: !0,
        },
        flipSvg: {
          transform: "x1fzjszq",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        dayIsOpen: { fontWeight: "xk50ysn", color: "x1du590y", $$css: !0 },
      };
    function f(e) {
      var t = e.businessHours,
        n = e.hasCoverPhoto,
        a = e.isProfileLinked,
        i = o("WAWebProductCatalogContext").getProductCatalogSessionId(
          m(o("WAWebDrawerContext").DrawerContext),
        ),
        l = o("WAWebBusinessProfileUtils").getBusinessOpenState(t),
        u = p(!0),
        d = u[0],
        f = u[1];
      if (t == null) return null;
      var h = o("WAWebSmbUtils").getBusinessHours(t),
        y = h.map(function (e) {
          var t = e.day,
            n = e.first,
            r = e.hours,
            a = t,
            i = r,
            u = !1;
          if (n)
            switch (l.status) {
              case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN_24H:
                ((a = s._(/*BTDS*/ "Open now")),
                  (i = s._(/*BTDS*/ "Open 24 hours")),
                  (u = !0));
                break;
              case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS
                .OPEN_APPOINTMENT:
                ((a = s._(/*BTDS*/ "Open now")),
                  (i = s._(/*BTDS*/ "Open by appointment only")),
                  (u = !0));
                break;
              case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN:
                ((a = s._(/*BTDS*/ "Open now")), (u = !0));
                break;
              case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS
                .CLOSED_TODAY:
                i = s._(/*BTDS*/ "Closed");
                break;
            }
          return !n && d
            ? null
            : c.jsx(
                g,
                { day: a, dayIsOpen: u, hours: i, first: n, collapsed: d },
                t,
              );
        });
      return c.jsx(r("WAWebUnstyledButton.react"), {
        xstyle: _.businessHours,
        onClick: function () {
          (o("WAWebBusinessLogEvents").logHoursClick(i, a, !!n), f(!d));
        },
        testid: void 0,
        children: y,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var n = t.collapsed,
        a = t.day,
        i = t.dayIsOpen,
        l = t.first,
        s = t.hours;
      return l
        ? c.jsxs("div", {
            "data-testid": void 0,
            className: "xf5m44m x1jchvi3 x14ug900",
            children: [
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    _.businessHoursDay,
                    o("WDSPaddings.stylex").wdsPaddings.paddingRight16,
                    i && _.dayIsOpen,
                  ),
                  {
                    children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                      direction: "auto",
                      text: a,
                    }),
                  },
                ),
              ),
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    _.businessHoursHours,
                    o("WDSPaddings.stylex").wdsPaddings.paddingRight4,
                  ),
                  {
                    children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                      direction: "auto",
                      text: s,
                    }),
                  },
                ),
              ),
              c.jsx("div", {
                className: "x1n9xxwz xhslqc4 xxymvpz x181vq82",
                role: "button",
                children: c.jsx(r("WDSIconIcKeyboardArrowDown.react"), {
                  iconXstyle: [!n && _.flipSvg],
                }),
              }),
            ],
          })
        : c.jsxs("div", {
            "data-testid": void 0,
            className: "xf5m44m x1f6kntn x1anpt5t",
            children: [
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    _.businessHoursDay,
                    o("WDSPaddings.stylex").wdsPaddings.paddingRight16,
                    o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
                  ),
                  {
                    children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                      direction: "auto",
                      text: a,
                    }),
                  },
                ),
              ),
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    _.businessHoursHours,
                    o("WDSPaddings.stylex").wdsPaddings.paddingRight4,
                    o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
                  ),
                  {
                    children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                      direction: "auto",
                      text: s,
                    }),
                  },
                ),
              ),
            ],
          });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
