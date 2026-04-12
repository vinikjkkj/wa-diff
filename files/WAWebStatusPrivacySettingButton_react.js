__d(
  "WAWebStatusPrivacySettingButton.react",
  [
    "fbt",
    "WAWebAccountLinkingConstants",
    "WAWebCrosspostingGatingUtils",
    "WAWebE2EStatusV2Icon.react",
    "WAWebModalManager",
    "WAWebSettingsGetters",
    "WAWebStatusPrivacySettingsFlowLoadable",
    "WAWebUserPrefsStatusType",
    "WDSButton.react",
    "WDSIconWdsIcLogoFacebook.react",
    "WDSIconWdsIcLogoInstagram.react",
    "WDSText.react",
    "react",
    "useWAWebListener",
    "useWAWebSettingsValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = 16,
      f = {
        contentWithIcons: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          width: "xezivpi",
          $$css: !0,
        },
      };
    function g(e) {
      var t,
        n = e.onAudienceSelectorClicked,
        a = e.setStatusPostingPrivacyConfig,
        i = e.statusPostingPrivacyConfig,
        l = e.type,
        c = o("useWAWebSettingsValues").useSettingsValues([
          (t = o("WAWebSettingsGetters")).getIsFBLinked,
          t.getIsIGLinked,
          t.getLinkState,
          t.getShareToFB,
          t.getShareToIG,
        ]),
        g = c[0],
        h = c[1],
        y = c[2],
        C = c[3],
        b = c[4],
        v =
          o("WAWebCrosspostingGatingUtils").statusCrosspostingEnabled() &&
          y === o("WAWebAccountLinkingConstants").AccountLinkState.Active,
        S = v && g && C,
        R = v && h && b,
        L = function (t) {
          if (
            (t == null ? void 0 : t.setting) ===
            o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
          )
            return s._(/*BTDS*/ "(Contacts)");
          if (
            (t == null ? void 0 : t.setting) ===
            o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList
          )
            return s._(/*BTDS*/ "({excluded-contacts-count} excluded)", [
              s._param(
                "excluded-contacts-count",
                t == null ? void 0 : t.denyList.length,
              ),
            ]);
          if (
            (t == null ? void 0 : t.setting) ===
            o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
          )
            return s._(/*BTDS*/ "({included-contacts-count} included)", [
              s._param(
                "included-contacts-count",
                t == null ? void 0 : t.allowList.length,
              ),
            ]);
        },
        E = p(L(i)),
        k = E[0],
        I = E[1];
      d(
        function () {
          I(L(i));
        },
        [i],
      );
      var T = m(!1);
      o("useWAWebListener").useListener(
        o("WAWebModalManager").ModalManager,
        "close_modal",
        function () {
          T.current &&
            ((T.current = !1),
            o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
              null,
              "media",
            ));
        },
      );
      var D = function () {
          (n == null || n(),
            (T.current = !0),
            o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
              !1,
              "media",
            ),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebStatusPrivacySettingsFlowLoadable")
                  .StatusPrivacySettingsFlowLoadable,
                {
                  statusPostingPrivacyConfig: i,
                  setStatusPostingPrivacyConfig: a,
                },
              ),
            ));
        },
        x = s._(/*BTDS*/ "Status {status-privacy-button-text}", [
          s._param("status-privacy-button-text", k),
        ]),
        $ = S || R,
        P = l === "text" ? "media" : "default",
        N = P === "media" ? "persistentAlwaysWhite" : "contentActionEmphasized";
      return u.jsx(
        r("WDSButton.react"),
        babelHelpers.extends(
          {
            variant: "outline",
            type: P,
            Icon: o("WAWebE2EStatusV2Icon.react").E2EStatusV2Icon,
            onPress: D,
            testid: void 0,
          },
          $ ? { xstyle: f.contentWithIcons } : { label: x },
          {
            children:
              $ &&
              u.jsxs("span", {
                className: "x78zum5 x6s0dn4 xozqiw3 x150mmf0",
                children: [
                  u.jsx(r("WDSText.react"), {
                    type: "Body2Emphasized",
                    selectable: !1,
                    maxLines: 1,
                    colorName: N,
                    children: x,
                  }),
                  u.jsxs("span", {
                    className: "x3nfvp2 x6s0dn4 x1trrmfo x1wbi8v6 x2lah0s",
                    children: [
                      "+",
                      S &&
                        u.jsx(r("WDSIconWdsIcLogoFacebook.react"), {
                          width: _,
                          height: _,
                        }),
                      R &&
                        u.jsx(r("WDSIconWdsIcLogoInstagram.react"), {
                          width: _,
                          height: _,
                        }),
                    ],
                  }),
                ],
              }),
          },
        ),
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
