__d(
  "WAWebVoipCallLinkSharePanel.react",
  [
    "fbt",
    "WALogger",
    "WAWebChatCollection",
    "WAWebConfirmPopup.react",
    "WAWebCopyRefreshedIcon.react",
    "WAWebCopyToClipboard",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebForwardRefreshedIcon.react",
    "WAWebSendTextFlow.react",
    "WAWebSvgButton.react",
    "WAWebTextBoxReadonly.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipEventConstants",
    "WAWebVoipNewGroupCallContactPicker.react",
    "WAWebVoipStackInterface",
    "WAWebVoipUiContext",
    "WAWebVoipUiPopoutWindowContext",
    "WDSButton.react",
    "WDSColorStyles.stylex",
    "WDSIconIcPersonAdd.react",
    "WDSSwitch.react",
    "WDSText.react",
    "WDSThemes",
    "asyncToGeneratorRuntime",
    "fbs",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebEventTargetValue",
    "useWAWebVoipModalManager",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useContext,
      f = m.useEffect,
      g = m.useState,
      h = 280,
      y = {
        container: {
          width: "x1dz1jew",
          height: "x5yr21d",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          paddingTop: "x1sk1jro",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          borderInlineStartWidth: "xpilrb4",
          borderInlineStartStyle: "x1t7ytsu",
          borderInlineStartColor: "xiotldb",
          $$css: !0,
        },
        sidebarContainer: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        linkContainer: {
          width: "xh8yej3",
          marginBottom: "x1ua1l7f",
          $$css: !0,
        },
        textBox: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        fullWidthButton: { width: "xh8yej3", $$css: !0 },
      };
    function C(e) {
      var t = e.callLinkToken;
      if (t == null || t === "") return null;
      var n = e.isVideo ? "video" : "voice";
      return "https://call.whatsapp.com/" + n + "/" + t;
    }
    function b(t) {
      var a = t.call,
        i = t.surface,
        l = i === void 0 ? "standalone" : i,
        c = C(a),
        m = r("useWAWebVoipModalManager")(),
        _ = m.closeModal,
        f = m.openModal,
        g = r("useWAWebEventTargetValue")(
          a,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE,
          ),
          function () {
            var e;
            return (e = a == null ? void 0 : a.isWaitingRoomEnabled) != null
              ? e
              : !1;
          },
        ),
        h = r("useWAWebEventTargetValue")(
          a,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE,
          ),
          function () {
            var e;
            return (e = a == null ? void 0 : a.waitingRoomUsers) != null
              ? e
              : [];
          },
        ),
        b =
          a.callLinkCreatorJid != null &&
          o("WAWebUserPrefsMeUser").isMeAccount(a.callLinkCreatorJid),
        S = p(function (e) {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var t = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              t != null &&
                t.type === "web" &&
                (yield t.waitingRoomToggleActiveCall(e));
            } catch (e) {}
          })();
        }, []),
        R = p(
          function (e) {
            !e && h.length > 0
              ? f(
                  d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: function () {
                      (_(), S(!1));
                    },
                    onCancel: function () {
                      return _();
                    },
                    children: d.jsx(r("WDSText.react"), {
                      colorName: "contentDefault",
                      type: "Body2",
                      children: s._(
                        /*BTDS*/ "Anyone waiting to join will be admitted to the call.",
                      ),
                    }),
                  }),
                )
              : S(e);
          },
          [h, f, _, S],
        ),
        L = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        ),
        E = p(
          function () {
            c != null &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebVoipCallLinkSharePanel: Opening send link flow",
                  ])),
              ),
              f(
                d.jsx(r("WAWebSendTextFlow.react"), {
                  alwaysShowComposeModal: !0,
                  title: s._(/*BTDS*/ "Send link to"),
                  text: c,
                  onSend: o("WAWebDrawerManager").closeDrawerLeft,
                }),
                { skipDarkTheme: !0 },
              ));
          },
          [c, f],
        );
      if (c == null) return null;
      var k = l === "standalone";
      return d.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(
            k && o("WDSThemes").WDSDarkTheme,
            k ? y.container : y.sidebarContainer,
            k &&
              o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
            k &&
              o("WDSColorStyles.stylex").WDSBackgroundColorStyles
                .backgroundWashPlain,
          ),
          {
            children: [
              d.jsx("div", {
                className: "x1nxh6w3 x1ks1olk x2b8uid x1ua1l7f x37zpob",
                children: s._(
                  /*BTDS*/ "Anyone with WhatsApp can use this link to join this call. Only share it with people you trust.",
                ),
              }),
              d.jsx(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                xstyle: y.linkContainer,
                children: d.jsx(r("WAWebTextBoxReadonly.react"), {
                  addOnAfter: d.jsx(v, { textToCopy: c }),
                  ariaLabel: r("fbs")._(/*BTDS*/ "Call link"),
                  text: c,
                  xstyle: y.textBox,
                }),
              }),
              d.jsx(r("WDSButton.react"), {
                variant: "filled",
                type: "default",
                Icon: o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon,
                directional: !0,
                label: s._(/*BTDS*/ "Send link via WhatsApp"),
                onPress: E,
                size: "small",
                xstyle: y.fullWidthButton,
              }),
              k &&
                d.jsx("div", {
                  className: "xh8yej3 x1380le5",
                  children: d.jsx(r("WDSButton.react"), {
                    variant: "tonal",
                    type: "default",
                    Icon: r("WDSIconIcPersonAdd.react"),
                    label: s._(/*BTDS*/ "Add people"),
                    onPress: function () {
                      L != null &&
                        f(
                          d.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                            chat: L,
                            isAddingToExistingCall: !0,
                            isVideoCall: a.isVideo,
                            onClose: _,
                          }),
                          { blockClose: !0, skipDarkTheme: !0 },
                        );
                    },
                    size: "small",
                    xstyle: y.fullWidthButton,
                  }),
                }),
              k &&
                a.isCallLink &&
                b &&
                d.jsxs(d.Fragment, {
                  children: [
                    d.jsx("div", {
                      className: "xso031l x1q0q8m5 x7cikya xh8yej3 x98l61r",
                    }),
                    d.jsxs("div", {
                      className:
                        "x78zum5 x1q0g3np x6s0dn4 x1qughib xh8yej3 x98l61r",
                      children: [
                        d.jsx(r("WDSText.react"), {
                          type: "Body2Emphasized",
                          colorName: "contentDefault",
                          children: s._(/*BTDS*/ "Require approval to join"),
                        }),
                        d.jsx(r("WDSSwitch.react"), {
                          value: g,
                          onChange: R,
                          "aria-label": s._(
                            /*BTDS*/ "Require approval to join",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          },
        ),
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.textToCopy,
        a = g(!1),
        i = a[0],
        l = a[1],
        u = _(r("WAWebVoipUiPopoutWindowContext")),
        c = u.windowEl,
        m = _(r("WAWebVoipUiContext")),
        p = m.showToast,
        h,
        y;
      (t[0] !== i || t[1] !== p || t[2] !== c || t[3] !== n
        ? ((h = function () {
            var e = new AbortController();
            return (
              i &&
                o("WAWebCopyToClipboard")
                  .copyTextToClipboard(n, c)
                  .then(function () {
                    e.signal.aborted ||
                      (l(!1),
                      p == null || p(s._(/*BTDS*/ "Link copied"), "center"));
                  })
                  .catch(function () {
                    e.signal.aborted || l(!1);
                  }),
              function () {
                e.abort();
              }
            );
          }),
          (y = [i, n, c, p]),
          (t[0] = i),
          (t[1] = p),
          (t[2] = c),
          (t[3] = n),
          (t[4] = h),
          (t[5] = y))
        : ((h = t[4]), (y = t[5])),
        f(h, y));
      var C;
      return (
        t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = d.jsx(r("WAWebSvgButton.react"), {
              Icon: o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
              "aria-label": r("fbs")._(/*BTDS*/ "Copy call link"),
              onClick: function () {
                l(!0);
              },
            })),
            (t[6] = C))
          : (C = t[6]),
        C
      );
    }
    l.default = b;
  },
  226,
);
