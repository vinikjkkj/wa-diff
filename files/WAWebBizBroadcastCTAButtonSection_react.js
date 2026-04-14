__d(
  "WAWebBizBroadcastCTAButtonSection.react",
  [
    "fbt",
    "WALogger",
    "WAWebBizBroadcastCTAButtonModalLoadable",
    "WAWebBizBroadcastCTAButtonSectionStrings",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsNewBroadcastAddButton.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSButton.react",
    "WDSIconIcCall.react",
    "WDSIconIcClose.react",
    "WDSIconIcEdit.react",
    "WDSIconIcLink.react",
    "WDSIconIcReply.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react")),
      g = _,
      h = g.useCallback,
      y = g.useEffect,
      C = g.useRef,
      b = g.useState,
      v = {
        actionButtons: {
          alignItems: "x6s0dn4",
          columnGap: "x1trrmfo",
          top: "x1ngp85i",
          insetInlineEnd: "xe9xzdg",
          left: null,
          right: null,
          position: "x10l6tqk",
          transition: "xzdg38j",
          $$css: !0,
        },
        buttonSection: { marginTop: "x98l61r", $$css: !0 },
        buttonTitleRow: { columnGap: "x1trrmfo", $$css: !0 },
        ctaBackgroundHovered: { backgroundColor: "x1cbl2y9", $$css: !0 },
        ctaIcon: {
          backgroundColor: "x1abdmlv",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          height: "x1gnnpzl",
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          width: "x23j0i4",
          $$css: !0,
        },
        row: { flexGrow: "x1iyjqo2", $$css: !0 },
        text: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function S(t) {
      var n = t.buttonData,
        a = t.entryPoint,
        i = t.onButtonDataChange,
        l = C(null),
        s = C(!1);
      y(
        function () {
          if (s.current) {
            var e = l.current;
            if (e != null && !e.contains(document.activeElement)) {
              s.current = !1;
              var t = e.querySelector('button, [tabindex="0"]');
              t instanceof HTMLElement && t.focus();
            }
          }
        },
        void 0,
      );
      var _ = h(
          function (t, a) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizBroadcast] handleOpenModal type=",
                  "",
                ])),
              t,
            );
            var l = n;
            o("WAWebModalManager").ModalManager.open(
              f.jsx(
                o("WAWebBizBroadcastCTAButtonModalLoadable")
                  .WAWebBizBroadcastCTAButtonModalLoadable,
                {
                  buttonType: t,
                  initialButtonData: a,
                  onClose: o("WAWebModalManager").closeModalManager,
                  onSave: function (t) {
                    (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[BizBroadcast] handleSave: saving btn data",
                        ])),
                    ),
                      i(t),
                      o("WAWebModalManager").ModalManager.close());
                    var e = o("WAWebToast.react").genId();
                    (o("WAWebToastManager").ToastManager.open(
                      f.jsx(o("WAWebToast.react").Toast, {
                        id: e,
                        msg: o(
                          "WAWebBizBroadcastCTAButtonSectionStrings",
                        ).getButtonUpdatedToastLabel(),
                        action: {
                          actionText: r("WAWebFbtCommon")("Undo"),
                          onAction: function () {
                            (o("WALogger").LOG(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "[BizBroadcast] handleUndo: restoring prev btn",
                                ])),
                            ),
                              i(l),
                              o("WAWebToastManager").ToastManager.close(e));
                          },
                        },
                      }),
                    ),
                      (s.current = !0));
                  },
                },
              ),
            );
          },
          [n, i],
        ),
        g = C(n);
      y(
        function () {
          g.current = n;
        },
        [n],
      );
      var b = h(
          function () {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizBroadcast] handleRemoveButton: removing btn",
                ])),
            );
            var e = g.current;
            (i(null), (s.current = !0));
            var t = o("WAWebToast.react").genId();
            o("WAWebToastManager").ToastManager.open(
              f.jsx(o("WAWebToast.react").Toast, {
                id: t,
                msg: o(
                  "WAWebBizBroadcastCTAButtonSectionStrings",
                ).getButtonRemovedToastLabel(),
                action: {
                  actionText: r("WAWebFbtCommon")("Undo"),
                  onAction: function () {
                    (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[BizBroadcast] handleUndo: restoring type=",
                          "",
                        ])),
                      e == null ? void 0 : e.type,
                    ),
                      i(e),
                      o("WAWebToastManager").ToastManager.close(t));
                  },
                },
              }),
            );
          },
          [i],
        ),
        S = h(
          function () {
            n != null &&
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizBroadcast] handleEditButton: opening edit modal",
                  ])),
              ),
              _(n.type, n));
          },
          [n, _],
        );
      return f.jsx("div", {
        ref: l,
        children: f.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: v.buttonSection,
          children: [
            f.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: v.buttonTitleRow,
              children: [
                f.jsx(r("WDSText.react"), {
                  type: "Body1Emphasized",
                  colorName: "contentDefault",
                  testid: void 0,
                  children: o(
                    "WAWebBizBroadcastCTAButtonSectionStrings",
                  ).getButtonSectionTitle(),
                }),
                f.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  testid: void 0,
                  children: o(
                    "WAWebBizBroadcastsCreationStrings",
                  ).getOptionalLabel(),
                }),
              ],
            }),
            f.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              testid: void 0,
              children: o(
                "WAWebBizBroadcastCTAButtonSectionStrings",
              ).getButtonSectionSubtitle(),
            }),
            n != null
              ? f.jsx(L, { buttonData: n, onEdit: S, onRemove: b })
              : f.jsx(R, { entryPoint: a, onSelectButtonType: _ }),
          ],
        }),
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.entryPoint,
        n = e.onSelectButtonType,
        a = h(
          function () {
            n("quick_reply");
          },
          [n],
        ),
        i = h(
          function () {
            n("cta_call");
          },
          [n],
        ),
        l = h(
          function () {
            n("cta_url");
          },
          [n],
        ),
        s = f.jsxs(r("WDSMenu.react"), {
          children: [
            f.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcReply.react"),
              title: o(
                "WAWebBizBroadcastCTAButtonSectionStrings",
              ).getCustomReplyMenuLabel(),
              subtitle: o(
                "WAWebBizBroadcastCTAButtonSectionStrings",
              ).getCustomReplyMenuSubtitle(),
              onPress: a,
              testid: void 0,
            }),
            f.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcCall.react"),
              title: o(
                "WAWebBizBroadcastCTAButtonSectionStrings",
              ).getPhoneCallMenuLabel(),
              subtitle: o(
                "WAWebBizBroadcastCTAButtonSectionStrings",
              ).getPhoneCallMenuSubtitle(),
              onPress: i,
              testid: void 0,
            }),
            f.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcLink.react"),
              title: o(
                "WAWebBizBroadcastCTAButtonSectionStrings",
              ).getWebsiteMenuLabel(),
              subtitle: o(
                "WAWebBizBroadcastCTAButtonSectionStrings",
              ).getWebsiteMenuSubtitle(),
              onPress: l,
              testid: void 0,
            }),
          ],
        });
      return f.jsx("div", {
        className: "x1de0gy xh8yej3",
        children: f.jsx(r("WAWebBizBroadcastsNewBroadcastAddButton.react"), {
          buttonLabel: o(
            "WAWebBizBroadcastCTAButtonSectionStrings",
          ).getAddButtonLabel(),
          contextMenu: s,
          onButtonClick: function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.addCTAButtonClicked(t);
          },
          position: "above",
          testid: void 0,
        }),
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.buttonData,
        n = e.onEdit,
        a = e.onRemove;
      return t.type === "quick_reply"
        ? f.jsx(E, {
            Icon: r("WDSIconIcReply.react"),
            displayText: t.displayText,
            secondaryText: o("WAWebBizBroadcastCTAButtonSectionStrings")
              .getCustomReplyMenuLabel()
              .toString(),
            onEdit: n,
            onRemove: a,
          })
        : t.type === "cta_call"
          ? f.jsx(E, {
              Icon: r("WDSIconIcCall.react"),
              displayText: t.displayText,
              secondaryText: t.phoneNumber,
              onEdit: n,
              onRemove: a,
            })
          : t.type === "cta_url"
            ? f.jsx(E, {
                Icon: r("WDSIconIcLink.react"),
                displayText: t.displayText,
                secondaryText: t.url,
                onEdit: n,
                onRemove: a,
              })
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t.type,
                );
              })();
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.Icon,
        n = e.displayText,
        a = e.onEdit,
        i = e.onRemove,
        l = e.secondaryText,
        u = b(!1),
        c = u[0],
        d = u[1],
        m = b(!1),
        p = m[0],
        _ = m[1],
        g = h(function (e) {
          var t = e.relatedTarget;
          (!(t instanceof Node) || !e.currentTarget.contains(t)) && _(!1);
        }, []),
        y = c || p;
      return f.jsxs(
        "div",
        babelHelpers.extends(
          { role: "group" },
          {
            0: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1de0gy x1ncir08 x1n2onr6 x1bu39yj",
            },
            1: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1de0gy x1ncir08 x1n2onr6 x1cbl2y9",
            },
          }[!!y << 0],
          {
            "data-testid": void 0,
            onMouseEnter: function () {
              return d(!0);
            },
            onMouseLeave: function () {
              return d(!1);
            },
            onFocus: function () {
              return _(!0);
            },
            onBlur: g,
            children: [
              f.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "stretch",
                xstyle: v.row,
                children: [
                  f.jsx(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    justify: "center",
                    xstyle: [v.ctaIcon, y && v.ctaBackgroundHovered],
                    children: f.jsx(t, {}),
                  }),
                  f.jsxs(o("WAWebFlex.react").FlexColumn, {
                    justify: "center",
                    xstyle: v.text,
                    children: [
                      f.jsx(r("WDSText.react"), {
                        maxLines: 1,
                        colorName: "contentDefault",
                        type: "Body2Emphasized",
                        testid: void 0,
                        children: n,
                      }),
                      l != null &&
                        f.jsx(r("WDSText.react"), {
                          maxLines: 1,
                          colorName: "contentDeemphasized",
                          type: "Body3",
                          testid: void 0,
                          children: l,
                        }),
                    ],
                  }),
                ],
              }),
              y &&
                f.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: v.actionButtons,
                  children: [
                    f.jsx(r("WDSButton.react"), {
                      "aria-label": s._(/*BTDS*/ "Edit button"),
                      size: "small",
                      variant: "filled",
                      Icon: r("WDSIconIcEdit.react"),
                      onPress: a,
                      testid: void 0,
                    }),
                    f.jsx(r("WDSButton.react"), {
                      "aria-label": s._(/*BTDS*/ "Remove button"),
                      size: "small",
                      variant: "filled",
                      Icon: r("WDSIconIcClose.react"),
                      onPress: i,
                      testid: void 0,
                    }),
                  ],
                }),
            ],
          },
        ),
      );
    }
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = S));
  },
  226,
);
