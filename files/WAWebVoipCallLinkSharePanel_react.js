__d(
  "WAWebVoipCallLinkSharePanel.react",
  [
    "fbt",
    "WALogger",
    "WAWebChatCollection",
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
    "WDSButton.react",
    "WDSColorStyles.stylex",
    "WDSIconIcPersonAdd.react",
    "WDSText.react",
    "WDSThemes",
    "asyncToGeneratorRuntime",
    "fbs",
    "react",
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
        h =
          a.callLinkCreatorJid != null &&
          o("WAWebUserPrefsMeUser").isMeAccount(a.callLinkCreatorJid),
        b = p(function (e) {
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
        S = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        ),
        R = p(
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
      var L = l === "standalone";
      return d.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(
            L && o("WDSThemes").WDSDarkTheme,
            L ? y.container : y.sidebarContainer,
            L &&
              o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
            L &&
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
                onPress: R,
                size: "small",
                xstyle: y.fullWidthButton,
              }),
              L &&
                d.jsx("div", {
                  className: "xh8yej3 x1380le5",
                  children: d.jsx(r("WDSButton.react"), {
                    variant: "tonal",
                    type: "default",
                    Icon: r("WDSIconIcPersonAdd.react"),
                    label: s._(/*BTDS*/ "Add people"),
                    onPress: function () {
                      S != null &&
                        f(
                          d.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                            chat: S,
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
              L &&
                a.isCallLink &&
                h &&
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
                        d.jsx(r("WDSButton.react"), {
                          variant: g ? "tonal" : "borderless",
                          type: "default",
                          size: "small",
                          label: g
                            ? s._(/*BTDS*/ "Turn off")
                            : s._(/*BTDS*/ "Turn on"),
                          onPress: function () {
                            return b(!g);
                          },
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
      var t = e.textToCopy,
        n = g(!1),
        a = n[0],
        i = n[1],
        l = _(r("WAWebVoipUiContext")),
        u = l.showCenteredToast;
      return (
        f(
          function () {
            var e = new AbortController();
            return (
              a &&
                o("WAWebCopyToClipboard")
                  .copyTextToClipboard(t)
                  .then(function () {
                    e.signal.aborted ||
                      (i(!1), u == null || u(s._(/*BTDS*/ "Link copied")));
                  })
                  .catch(function () {
                    e.signal.aborted || i(!1);
                  }),
              function () {
                e.abort();
              }
            );
          },
          [a, u, t],
        ),
        d.jsx(r("WAWebSvgButton.react"), {
          Icon: o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
          "aria-label": r("fbs")._(/*BTDS*/ "Copy call link"),
          onClick: function () {
            i(!0);
          },
        })
      );
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
