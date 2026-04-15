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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(29),
        n = e.entryPoint,
        a = e.onSelectButtonType,
        i;
      t[0] !== a
        ? ((i = function () {
            a("quick_reply");
          }),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        s;
      t[2] !== a
        ? ((s = function () {
            a("cta_call");
          }),
          (t[2] = a),
          (t[3] = s))
        : (s = t[3]);
      var u = s,
        c;
      t[4] !== a
        ? ((c = function () {
            a("cta_url");
          }),
          (t[4] = a),
          (t[5] = c))
        : (c = t[5]);
      var d = c,
        m,
        p;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o(
            "WAWebBizBroadcastCTAButtonSectionStrings",
          ).getCustomReplyMenuLabel()),
          (p = o(
            "WAWebBizBroadcastCTAButtonSectionStrings",
          ).getCustomReplyMenuSubtitle()),
          (t[6] = m),
          (t[7] = p))
        : ((m = t[6]), (p = t[7]));
      var _;
      t[8] !== l
        ? ((_ = f.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcReply.react"),
            title: m,
            subtitle: p,
            onPress: l,
            testid: void 0,
          })),
          (t[8] = l),
          (t[9] = _))
        : (_ = t[9]);
      var g, h;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = o(
            "WAWebBizBroadcastCTAButtonSectionStrings",
          ).getPhoneCallMenuLabel()),
          (h = o(
            "WAWebBizBroadcastCTAButtonSectionStrings",
          ).getPhoneCallMenuSubtitle()),
          (t[10] = g),
          (t[11] = h))
        : ((g = t[10]), (h = t[11]));
      var y;
      t[12] !== u
        ? ((y = f.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcCall.react"),
            title: g,
            subtitle: h,
            onPress: u,
            testid: void 0,
          })),
          (t[12] = u),
          (t[13] = y))
        : (y = t[13]);
      var C, b;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = o(
            "WAWebBizBroadcastCTAButtonSectionStrings",
          ).getWebsiteMenuLabel()),
          (b = o(
            "WAWebBizBroadcastCTAButtonSectionStrings",
          ).getWebsiteMenuSubtitle()),
          (t[14] = C),
          (t[15] = b))
        : ((C = t[14]), (b = t[15]));
      var v;
      t[16] !== d
        ? ((v = f.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcLink.react"),
            title: C,
            subtitle: b,
            onPress: d,
            testid: void 0,
          })),
          (t[16] = d),
          (t[17] = v))
        : (v = t[17]);
      var S;
      t[18] !== v || t[19] !== _ || t[20] !== y
        ? ((S = f.jsxs(r("WDSMenu.react"), { children: [_, y, v] })),
          (t[18] = v),
          (t[19] = _),
          (t[20] = y),
          (t[21] = S))
        : (S = t[21]);
      var R = S,
        L;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = "x1de0gy xh8yej3"), (t[22] = L))
        : (L = t[22]);
      var E;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = o(
            "WAWebBizBroadcastCTAButtonSectionStrings",
          ).getAddButtonLabel()),
          (t[23] = E))
        : (E = t[23]);
      var k;
      t[24] !== n
        ? ((k = function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.addCTAButtonClicked(n);
          }),
          (t[24] = n),
          (t[25] = k))
        : (k = t[25]);
      var I;
      return (
        t[26] !== R || t[27] !== k
          ? ((I = f.jsx("div", {
              className: L,
              children: f.jsx(
                r("WAWebBizBroadcastsNewBroadcastAddButton.react"),
                {
                  buttonLabel: E,
                  contextMenu: R,
                  onButtonClick: k,
                  position: "above",
                  testid: void 0,
                },
              ),
            })),
            (t[26] = R),
            (t[27] = k),
            (t[28] = I))
          : (I = t[28]),
        I
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.buttonData,
        a = e.onEdit,
        i = e.onRemove,
        l;
      return (
        t[0] !== n.displayText ||
        t[1] !== n.phoneNumber ||
        t[2] !== n.type ||
        t[3] !== n.url ||
        t[4] !== a ||
        t[5] !== i
          ? ((l =
              n.type === "quick_reply"
                ? f.jsx(E, {
                    Icon: r("WDSIconIcReply.react"),
                    displayText: n.displayText,
                    secondaryText: o("WAWebBizBroadcastCTAButtonSectionStrings")
                      .getCustomReplyMenuLabel()
                      .toString(),
                    onEdit: a,
                    onRemove: i,
                  })
                : n.type === "cta_call"
                  ? f.jsx(E, {
                      Icon: r("WDSIconIcCall.react"),
                      displayText: n.displayText,
                      secondaryText: n.phoneNumber,
                      onEdit: a,
                      onRemove: i,
                    })
                  : n.type === "cta_url"
                    ? f.jsx(E, {
                        Icon: r("WDSIconIcLink.react"),
                        displayText: n.displayText,
                        secondaryText: n.url,
                        onEdit: a,
                        onRemove: i,
                      })
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            n.type,
                        );
                      })()),
            (t[0] = n.displayText),
            (t[1] = n.phoneNumber),
            (t[2] = n.type),
            (t[3] = n.url),
            (t[4] = a),
            (t[5] = i),
            (t[6] = l))
          : (l = t[6]),
        l
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.Icon,
        a = e.displayText,
        i = e.onEdit,
        l = e.onRemove,
        u = e.secondaryText,
        c = b(!1),
        d = c[0],
        m = c[1],
        p = b(!1),
        _ = p[0],
        g = p[1],
        h;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t) {
            var e = t.relatedTarget;
            (!(e instanceof Node) || !t.currentTarget.contains(e)) && g(!1);
          }),
          (t[0] = h))
        : (h = t[0]);
      var y = h,
        C = d || _,
        S;
      t[1] !== C
        ? ((S = {
            0: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1de0gy x1ncir08 x1n2onr6 x1bu39yj",
            },
            1: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1de0gy x1ncir08 x1n2onr6 x1cbl2y9",
            },
          }[!!C << 0]),
          (t[1] = C),
          (t[2] = S))
        : (S = t[2]);
      var R, L, E;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function () {
            return m(!0);
          }),
          (L = function () {
            return m(!1);
          }),
          (E = function () {
            return g(!0);
          }),
          (t[3] = R),
          (t[4] = L),
          (t[5] = E))
        : ((R = t[3]), (L = t[4]), (E = t[5]));
      var k = C && v.ctaBackgroundHovered,
        I;
      t[6] !== k ? ((I = [v.ctaIcon, k]), (t[6] = k), (t[7] = I)) : (I = t[7]);
      var T;
      t[8] !== n ? ((T = f.jsx(n, {})), (t[8] = n), (t[9] = T)) : (T = t[9]);
      var D;
      t[10] !== I || t[11] !== T
        ? ((D = f.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            xstyle: I,
            children: T,
          })),
          (t[10] = I),
          (t[11] = T),
          (t[12] = D))
        : (D = t[12]);
      var x;
      t[13] !== a
        ? ((x = f.jsx(r("WDSText.react"), {
            maxLines: 1,
            colorName: "contentDefault",
            type: "Body2Emphasized",
            testid: void 0,
            children: a,
          })),
          (t[13] = a),
          (t[14] = x))
        : (x = t[14]);
      var $;
      t[15] !== u
        ? (($ =
            u != null &&
            f.jsx(r("WDSText.react"), {
              maxLines: 1,
              colorName: "contentDeemphasized",
              type: "Body3",
              testid: void 0,
              children: u,
            })),
          (t[15] = u),
          (t[16] = $))
        : ($ = t[16]);
      var P;
      t[17] !== x || t[18] !== $
        ? ((P = f.jsxs(o("WAWebFlex.react").FlexColumn, {
            justify: "center",
            xstyle: v.text,
            children: [x, $],
          })),
          (t[17] = x),
          (t[18] = $),
          (t[19] = P))
        : (P = t[19]);
      var N;
      t[20] !== P || t[21] !== D
        ? ((N = f.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "stretch",
            xstyle: v.row,
            children: [D, P],
          })),
          (t[20] = P),
          (t[21] = D),
          (t[22] = N))
        : (N = t[22]);
      var M;
      t[23] !== C || t[24] !== i || t[25] !== l
        ? ((M =
            C &&
            f.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: v.actionButtons,
              children: [
                f.jsx(r("WDSButton.react"), {
                  "aria-label": s._(/*BTDS*/ "Edit button"),
                  size: "small",
                  variant: "filled",
                  Icon: r("WDSIconIcEdit.react"),
                  onPress: i,
                  testid: void 0,
                }),
                f.jsx(r("WDSButton.react"), {
                  "aria-label": s._(/*BTDS*/ "Remove button"),
                  size: "small",
                  variant: "filled",
                  Icon: r("WDSIconIcClose.react"),
                  onPress: l,
                  testid: void 0,
                }),
              ],
            })),
          (t[23] = C),
          (t[24] = i),
          (t[25] = l),
          (t[26] = M))
        : (M = t[26]);
      var w;
      return (
        t[27] !== N || t[28] !== M || t[29] !== S
          ? ((w = f.jsxs(
              "div",
              babelHelpers.extends({ role: "group" }, S, {
                "data-testid": void 0,
                onMouseEnter: R,
                onMouseLeave: L,
                onFocus: E,
                onBlur: y,
                children: [N, M],
              }),
            )),
            (t[27] = N),
            (t[28] = M),
            (t[29] = S),
            (t[30] = w))
          : (w = t[30]),
        w
      );
    }
    l.default = S;
  },
  226,
);
