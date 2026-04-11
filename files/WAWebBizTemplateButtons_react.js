__d(
  "WAWebBizTemplateButtons.react",
  [
    "fbt",
    "WALogger",
    "WAWebApiParse",
    "WAWebBizMessageOpenCallModal",
    "WAWebCopyRefreshedIcon.react",
    "WAWebCouponCodeHelper",
    "WAWebExecApiCmd",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebLaunchIcon.react",
    "WAWebMsgGetters",
    "WAWebOTPHelper",
    "WAWebPhoneIcon.react",
    "WAWebPopoverContext.react",
    "WAWebProductCatalogMetaLinkingGatingUtils",
    "WAWebSendTextMsgChatAction",
    "WAWebStateUtils",
    "WAWebTemplateButtonSubtype",
    "WAWebTooltip.react",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useMemo,
      _ = m.useRef,
      f = {
        actionButton: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          flexGrow: "x1iyjqo2",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          minWidth: "xy8zicb",
          height: "xc9qbxq",
          fontSize: "x1f6kntn",
          lineHeight: "x1fc57z9",
          color: "xo1mcw5",
          cursor: "x1ypdohk",
          backgroundColor: "x1ew7x2d",
          $$css: !0,
        },
        actionButtonQuickReply: {
          minWidth: "x11ll3k9",
          marginTop: "x7r5mf7",
          marginInlineEnd: "xbpr5gs",
          marginBottom: "xat24cr",
          marginInlineStart: "xvkbmy",
          borderStartStartRadius: "xp43t2z",
          borderStartEndRadius: "x5j5mwf",
          borderEndEndRadius: "xptal55",
          borderEndStartRadius: "xjodkme",
          boxShadow: "x1b9z3ur",
          $$css: !0,
        },
        actionButtonDisabled: {
          color: "xhslqc4",
          cursor: "xt0e3qv",
          boxShadow: "x1gnnqk1",
          $$css: !0,
        },
        actionButtonFirstButton: { height: "xrtz9ly", $$css: !0 },
      };
    function g(t) {
      "use no forget";
      var n = t.chat,
        a = t.msg,
        i = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        l = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
          o("WAWebFrontendMsgGetters").getButtons,
          o("WAWebFrontendMsgGetters").getIsQuickReply,
          o("WAWebMsgGetters").getFrom,
        ]),
        c = l[0],
        m = l[1],
        g = l[2];
      o("useWAWebListener").useListeners(
        (c != null ? c : []).map(function (e) {
          return { source: e, eventOrEvents: "change:selected", callback: i };
        }),
      );
      var h = function (i) {
          var t = i.displayText,
            l = i.id,
            s = i.selectionId,
            u = i.subtype,
            c = i.url;
          if (
            u === o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.CALL
          )
            r("WAWebBizMessageOpenCallModal")();
          else if (
            u === o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL &&
            c != null
          ) {
            if (o("WAWebOTPHelper").isOTPCopyCodeButton(i)) {
              o("WAWebOTPHelper").copyOTPCode(i, a);
              return;
            }
            if (o("WAWebCouponCodeHelper").isCouponCodeButton(i)) {
              o("WAWebCouponCodeHelper").copyCouponCode(i);
              return;
            }
            var d = o("WAWebApiParse").parseAPICmd(c);
            if (
              d.resultType === "OPEN_CATALOG" ||
              d.resultType === "CTWA_ADS_DATA_SHARING" ||
              d.resultType === "BIZ_AGENTS_ONBOARDING" ||
              d.resultType === "BIZ_BROADCAST_AUDIENCE_MODAL" ||
              d.resultType === "BIZ_BROADCAST_HOME"
            ) {
              r("WAWebExecApiCmd")({ cmdData: d, isExternal: !1 });
              return;
            }
            (d.resultType, o("WAWebExternalLink.react").openExternalLink(c));
          } else
            u ===
              o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE
                .QUICK_REPLY &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleClick inside WAWebBizTemplateButtons",
                  ])),
              ),
              o("WAWebSendTextMsgChatAction")
                .sendTextMsgToChat(n, t, {
                  quotedMsg: o("WAWebStateUtils").unproxy(a),
                  selectedIndex: parseInt(l, 10),
                  selectedId: s,
                })
                .then(function () {
                  i.selected = !0;
                }));
        },
        y = _(null),
        C = p(
          function () {
            return c == null
              ? []
              : c.map(function (e) {
                  if (e.selected) return "selected";
                  if (
                    e.subtype !==
                    o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL
                  )
                    return null;
                  var t = e.url;
                  if (t == null) return null;
                  var n = o("WAWebApiParse").parseAPICmd(t);
                  if (n.resultType === "OPEN_CATALOG") {
                    if (
                      o(
                        "WAWebProductCatalogMetaLinkingGatingUtils",
                      ).shouldDisableCatalogDueToMetaLinkingForSelf()
                    )
                      return "meta-linked-catalog";
                  } else n.resultType;
                  return null;
                });
          },
          [c],
        ),
        b;
      return (
        c &&
          (b = c.map(function (e, t) {
            var n,
              a = [o("WAWebUISpacing").uiMargin.end3];
            switch (e.subtype) {
              case o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.CALL:
                n = d.jsx(o("WAWebPhoneIcon.react").PhoneIcon, {
                  height: 18,
                  xstyle: a,
                });
                break;
              case o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL:
                o("WAWebOTPHelper").isOTPCopyCodeButton(e) ||
                o("WAWebCouponCodeHelper").isCouponCodeButton(e)
                  ? (n = d.jsx(
                      o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
                      { xstyle: a },
                    ))
                  : (n = d.jsx(o("WAWebLaunchIcon.react").LaunchIcon, {
                      xstyle: a,
                    }));
                break;
            }
            var i = C[t],
              l = i != null,
              c = l
                ? void 0
                : function () {
                    return h(e);
                  },
              p = d.jsxs(
                "button",
                babelHelpers.extends(
                  {},
                  (u || (u = r("stylex"))).props(
                    f.actionButton,
                    o("WAWebUISpacing").uiPadding.top6,
                    o("WAWebUISpacing").uiPadding.end7,
                    o("WAWebUISpacing").uiPadding.bottom8,
                    o("WAWebUISpacing").uiPadding.start9,
                    l && f.actionButtonDisabled,
                    parseInt(e.id, 10) === 0 &&
                      e.subtype !==
                        o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE
                          .QUICK_REPLY &&
                      f.actionButtonFirstButton,
                    m && f.actionButtonQuickReply,
                    !m && o("WAWebUISpacing").uiMargin.end7,
                    !m && o("WAWebUISpacing").uiMargin.start9,
                  ),
                  {
                    onClick: c,
                    children: [
                      n,
                      d.jsx("span", {
                        className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                        children: e.displayText,
                      }),
                    ],
                  },
                ),
              ),
              _;
            if (
              i === "meta-linked-catalog" &&
              o(
                "WAWebProductCatalogMetaLinkingGatingUtils",
              ).linkedCatalogDisabledTooltipEnabled()
            ) {
              var g = s._(
                /*BTDS*/ "Connected catalog. View with WhatsApp mobile app.",
              );
              _ = d.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
                targetRef: y,
                popover: d.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
                  targetRef: "context",
                  alignment: o("WAWebTooltip.react").PopoverAlignment.Center,
                  position: o("WAWebTooltip.react").PopoverPosition.Top,
                  openingDelay: 350,
                  children: g,
                }),
              });
            }
            return d.jsxs(d.Fragment, { children: [p, _] }, e.id);
          })),
        d.jsx(
          "div",
          babelHelpers.extends(
            {},
            { 0: {}, 1: { className: "xlkrthq" } }[!!m << 0],
            {
              children: d.jsx(
                "div",
                babelHelpers.extends(
                  { ref: y },
                  {
                    0: { className: "x9f619 x78zum5 x1a02dak" },
                    2: {
                      className:
                        "x9f619 x78zum5 x1a02dak xdj266r x16xob1z xat24cr xnelg8w",
                    },
                    1: {
                      className:
                        "x9f619 x78zum5 x1a02dak x6ikm8r x10wlt62 x1ew7x2d xptal55 xjodkme x1b9z3ur",
                    },
                    3: {
                      className:
                        "x9f619 x78zum5 x1a02dak xdj266r x16xob1z xat24cr xnelg8w x6ikm8r x10wlt62 x1ew7x2d xptal55 xjodkme x1b9z3ur",
                    },
                  }[(!!m << 1) | (!m << 0)],
                  { children: b },
                ),
              ),
            },
          ),
        )
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
