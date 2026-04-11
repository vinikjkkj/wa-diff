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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(29),
        n = e.onAudienceSelectorClicked,
        a = e.setStatusPostingPrivacyConfig,
        i = e.statusPostingPrivacyConfig,
        l = e.type,
        c;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var g;
        ((c = [
          (g = o("WAWebSettingsGetters")).getIsFBLinked,
          g.getIsIGLinked,
          g.getLinkState,
          g.getShareToFB,
          g.getShareToIG,
        ]),
          (t[0] = c));
      } else c = t[0];
      var y = o("useWAWebSettingsValues").useSettingsValues(c),
        C = y[0],
        b = y[1],
        v = y[2],
        S = y[3],
        R = y[4],
        L;
      t[1] !== v
        ? ((L =
            o("WAWebCrosspostingGatingUtils").statusCrosspostingEnabled() &&
            v === o("WAWebAccountLinkingConstants").AccountLinkState.Active),
          (t[1] = v),
          (t[2] = L))
        : (L = t[2]);
      var E = L,
        k = E && C && S,
        I = E && b && R,
        T = h,
        D;
      t[3] !== i ? ((D = T(i)), (t[3] = i), (t[4] = D)) : (D = t[4]);
      var x = p(D),
        $ = x[0],
        P = x[1],
        N,
        M;
      (t[5] !== i
        ? ((N = function () {
            P(T(i));
          }),
          (M = [i]),
          (t[5] = i),
          (t[6] = N),
          (t[7] = M))
        : ((N = t[6]), (M = t[7])),
        d(N, M));
      var w = m(!1),
        A;
      (t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = function () {
            w.current &&
              ((w.current = !1),
              o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
                null,
                "media",
              ));
          }),
          (t[8] = A))
        : (A = t[8]),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "close_modal",
          A,
        ));
      var F;
      t[9] !== n || t[10] !== a || t[11] !== i
        ? ((F = function () {
            (n == null || n(),
              (w.current = !0),
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
          }),
          (t[9] = n),
          (t[10] = a),
          (t[11] = i),
          (t[12] = F))
        : (F = t[12]);
      var O = F,
        B;
      t[13] !== $
        ? ((B = s._(/*BTDS*/ "Status {status-privacy-button-text}", [
            s._param("status-privacy-button-text", $),
          ])),
          (t[13] = $),
          (t[14] = B))
        : (B = t[14]);
      var W = B,
        q = k || I,
        U = l === "text" ? "media" : "default",
        V = U === "media" ? "persistentAlwaysWhite" : "contentActionEmphasized",
        H;
      t[15] !== W || t[16] !== q
        ? ((H = q ? { xstyle: f.contentWithIcons } : { label: W }),
          (t[15] = W),
          (t[16] = q),
          (t[17] = H))
        : (H = t[17]);
      var G;
      t[18] !== W || t[19] !== V || t[20] !== q || t[21] !== k || t[22] !== I
        ? ((G =
            q &&
            u.jsxs("span", {
              className: "x78zum5 x6s0dn4 xozqiw3 x150mmf0",
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  selectable: !1,
                  maxLines: 1,
                  colorName: V,
                  children: W,
                }),
                u.jsxs("span", {
                  className: "x3nfvp2 x6s0dn4 x1trrmfo x1wbi8v6 x2lah0s",
                  children: [
                    "+",
                    k &&
                      u.jsx(r("WDSIconWdsIcLogoFacebook.react"), {
                        width: _,
                        height: _,
                      }),
                    I &&
                      u.jsx(r("WDSIconWdsIcLogoInstagram.react"), {
                        width: _,
                        height: _,
                      }),
                  ],
                }),
              ],
            })),
          (t[18] = W),
          (t[19] = V),
          (t[20] = q),
          (t[21] = k),
          (t[22] = I),
          (t[23] = G))
        : (G = t[23]);
      var z;
      return (
        t[24] !== U || t[25] !== O || t[26] !== G || t[27] !== H
          ? ((z = u.jsx(
              r("WDSButton.react"),
              babelHelpers.extends(
                {
                  variant: "outline",
                  type: U,
                  Icon: o("WAWebE2EStatusV2Icon.react").E2EStatusV2Icon,
                  onPress: O,
                  testid: void 0,
                },
                H,
                { children: G },
              ),
            )),
            (t[24] = U),
            (t[25] = O),
            (t[26] = G),
            (t[27] = H),
            (t[28] = z))
          : (z = t[28]),
        z
      );
    }
    function h(e) {
      if (
        (e == null ? void 0 : e.setting) ===
        o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
      )
        return s._(/*BTDS*/ "(Contacts)");
      if (
        (e == null ? void 0 : e.setting) ===
        o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList
      )
        return s._(/*BTDS*/ "({excluded-contacts-count} excluded)", [
          s._param(
            "excluded-contacts-count",
            e == null ? void 0 : e.denyList.length,
          ),
        ]);
      if (
        (e == null ? void 0 : e.setting) ===
        o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
      )
        return s._(/*BTDS*/ "({included-contacts-count} included)", [
          s._param(
            "included-contacts-count",
            e == null ? void 0 : e.allowList.length,
          ),
        ]);
    }
    l.default = g;
  },
  226,
);
