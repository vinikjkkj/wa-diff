__d(
  "WAWebChatInfoExpandButton.react",
  [
    "fbt",
    "WALogger",
    "WAWebChevronCustomIcons",
    "WAWebChevronRightRefreshedIcon.react",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawerButton.react",
    "WAWebDrawerButtonRefreshed.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebRoundShape.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          height: "xnnlda6",
          width: "xh8yej3",
          boxSizing: "x9f619",
          paddingInlineStart: "xe2zdcy",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          color: "xhslqc4",
          ":hover_backgroundColor": "x17gydlx",
          $$css: !0,
        },
        iconWrapper: { width: "x13zx6y", $$css: !0 },
        iconWrapperRefreshed: {
          transform: "x1wc7zzz",
          color: "xhslqc4",
          $$css: !0,
        },
        textAlt: { color: "x1v5yvga", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(23),
        a = t.ariaLabel,
        i = t.fromNewsletter,
        l = t.isRefresh,
        u = t.numMore,
        m = t.onClick,
        p = t.viewAll,
        _ = t.xstyle,
        f = i === void 0 ? !1 : i,
        g = p === void 0 ? !1 : p;
      u <= 0 &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[chat-info-expand-button] numMore should be >= 1",
              ])),
          )
          .sendLogs("invalid-number-of-more-contacts-in-chat");
      var h = l === !0 ? d.iconWrapperRefreshed : d.iconWrapper,
        y;
      n[0] !== l || n[1] !== g
        ? ((y = g
            ? null
            : c.jsx(r("WAWebRoundShape.react"), {
                transparent: !0,
                children:
                  l === !0
                    ? c.jsx(
                        o("WAWebChevronRightRefreshedIcon.react")
                          .ChevronRightRefreshedIcon,
                        {},
                      )
                    : c.jsx(
                        o("WAWebChevronCustomIcons").ChevronDownCustomIcon,
                        { iconXstyle: d.secondaryColor },
                      ),
              })),
          (n[0] = l),
          (n[1] = g),
          (n[2] = y))
        : (y = n[2]);
      var C;
      n[3] !== h || n[4] !== y
        ? ((C = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: h,
            children: y,
          })),
          (n[3] = h),
          (n[4] = y),
          (n[5] = C))
        : (C = n[5]);
      var b = C,
        v;
      if (n[6] !== f || n[7] !== u || n[8] !== g) {
        if (
          ((v = s._(/*BTDS*/ '_j{"*":"{count} more","_1":"1 more"}', [
            s._plural(u, "count"),
          ])),
          g &&
            ((v = s._(/*BTDS*/ "View all ({more})", [s._param("more", v)])), f))
        ) {
          var S;
          (n[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = o(
                "WAWebCommonNewsletterStrings",
              ).getViewAllChannelFollowersText()),
              (n[10] = S))
            : (S = n[10]),
            (v = S));
        }
        ((n[6] = f), (n[7] = u), (n[8] = g), (n[9] = v));
      } else v = n[9];
      var R = g && d.textAlt,
        L;
      n[11] !== R || n[12] !== v
        ? ((L = c.jsx(r("WAWebFlexItem.react"), {
            align: "start",
            grow: 1,
            xstyle: R,
            children: v,
          })),
          (n[11] = R),
          (n[12] = v),
          (n[13] = L))
        : (L = n[13]);
      var E = L,
        k =
          l === !0
            ? r("WAWebDrawerButtonRefreshed.react")
            : o("WAWebDrawerButton.react").DrawerButtonSimple,
        I;
      n[14] !== _
        ? ((I = [d.container, _]), (n[14] = _), (n[15] = I))
        : (I = n[15]);
      var T;
      return (
        n[16] !== k ||
        n[17] !== a ||
        n[18] !== E ||
        n[19] !== b ||
        n[20] !== m ||
        n[21] !== I
          ? ((T = c.jsx(k, {
              ariaLabel: a,
              icon: b,
              onClick: m,
              xstyle: I,
              children: E,
            })),
            (n[16] = k),
            (n[17] = a),
            (n[18] = E),
            (n[19] = b),
            (n[20] = m),
            (n[21] = I),
            (n[22] = T))
          : (T = n[22]),
        T
      );
    }
    l.default = m;
  },
  226,
);
