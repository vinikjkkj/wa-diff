__d(
  "WAWebName.react",
  [
    "fbt",
    "WAArrayMoveToFirst",
    "WALogger",
    "WAReplaceRepeatingWhitespace",
    "WAWebABProps",
    "WAWebBroadcastName.react",
    "WAWebBusinessProfileTypes",
    "WAWebChatAssignmentIcon.react",
    "WAWebChatContactUtils",
    "WAWebChatGetters",
    "WAWebClassnames",
    "WAWebContactGetters",
    "WAWebContactSearchGatingUtils",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebErrorBoundary.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupType",
    "WAWebLabels.react",
    "WAWebLidMigrationUtils",
    "WAWebListsGatingUtils",
    "WAWebMiscGatingUtils",
    "WAWebNewsletterName.react",
    "WAWebParticipantListUtils",
    "WAWebPsaVerifiedBlueIcon.react",
    "WAWebPsaVerifiedIcon.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "WDSButton.react",
    "cr:17281",
    "react",
    "stylex",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["chat", "selectable"],
      u = ["chat", "selectable"],
      c = ["chat"],
      d = ["contact"],
      m,
      p,
      _,
      f = _ || (_ = o("react")),
      g = {
        spaceBefore: {
          "::before_content": "xjuopq5",
          "::before_whiteSpace": "xulcptl",
          $$css: !0,
        },
        chatAssignmentIconAssignedToYou: { color: "x29oog3", $$css: !0 },
        chatAssignmentIconAssignedToOthers: { color: "xms21op", $$css: !0 },
        icon: {
          display: "x78zum5",
          flex: "x3psx0u",
          verticalAlign: "x16dsc37",
          $$css: !0,
        },
        smallCheckmarkButton: {
          width: "x1kky2od",
          height: "xlup9mm",
          $$css: !0,
        },
        largeCheckmarkButton: {
          width: "xvy4d1p",
          height: "xxk0z11",
          $$css: !0,
        },
        hasLabels: {
          display: "x1jfb8zj",
          overflowX: "xuce83p",
          overflowY: "x1bft6iq",
          textOverflow: "x1i7k8ik",
          whiteSpace: "xq9mrsl",
          marginInlineEnd: "x11t971q",
          $$css: !0,
        },
      },
      h = function (t) {
        var e = t.contact,
          n = t.elevatedPushNamesEnabled,
          r = t.isUsernameContact,
          a = t.showMessageYourselfName,
          i = t.showNotifyName,
          l = t.useDisplayName,
          u = t.useLiftMeUp,
          c = t.useShortName,
          d = t.useVerifiedName,
          m = t.you,
          p = n && o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(e);
        if (a && o("WAWebContactGetters").getIsMe(e)) {
          var _;
          return {
            displayName: s._(/*BTDS*/ "{nameOrPhoneNumber}", [
              s._param(
                "nameOrPhoneNumber",
                d
                  ? e.verifiedName
                  : (_ = e.name) != null
                    ? _
                    : o(
                        "WAWebFrontendContactGetters",
                      ).getFormattedUsernameOrPhone(e),
              ),
            ]),
          };
        }
        var f = o("WAWebFrontendContactGetters").getDisplayName(e),
          g = o("WAWebContactGetters").getPushname(e);
        if (l && f) {
          var h = o("WAWebFrontendContactGetters").getDisplayNameType(e);
          return h ===
            o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER &&
            u &&
            g != null
            ? { displayName: "~" + g }
            : { displayName: f };
        }
        if (c && !p) {
          var y = o("WAWebFrontendContactGetters").getFormattedShortName(e);
          if (y) return { displayName: y };
        }
        if (n && g && r) return { displayName: "~" + g };
        if (d && e.verifiedName) return { displayName: e.verifiedName };
        if (m && o("WAWebContactGetters").getIsMe(e))
          return {
            displayName: o("WAWebFrontendContactGetters").getFormattedName(e),
          };
        if (i && p) {
          var C = o("WAWebContactGetters").getNotifyName(e);
          if (C != null)
            return {
              displayName: n
                ? o("WAWebChatContactUtils").getFormattedNotifyName(C)
                : "~" + C,
              displayNameAriaLabel: o("WAWebABProps").getABPropConfigValue(
                "elevated_push_names_v2_m2_enabled",
              )
                ? o("WAWebChatContactUtils").getAccessibleNotifyName(C)
                : void 0,
            };
        }
        if (!u)
          return {
            displayName: o("WAWebFrontendContactGetters").getFormattedUser(e),
          };
        var b = o("WAWebFrontendContactGetters").getFormattedUserAndType(
          e,
        ).type;
        return b ===
          o("WAWebWamEnumOppositeVisibleIdentificationType")
            .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER && g != null
          ? { displayName: e.verifiedName }
          : o("WAWebContactGetters").getIsBusiness(e) &&
              e.verifiedLevel ===
                o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH
            ? { displayName: e.verifiedName }
            : { displayName: "~" + g };
      },
      y = function (t) {
        var e = o("WAWebUserPrefsMeUser")
            .getMeDevicePnOrThrow_DO_NOT_USE()
            .getDeviceId(),
          n;
        if (
          t.some(function (t) {
            return t.deviceId === e;
          })
        ) {
          var r = s._(/*BTDS*/ "Assigned to you");
          n = f.jsx(o("WAWebChatAssignmentIcon.react").ChatAssignmentIcon, {
            width: 18,
            height: 12,
            xstyle: [
              o("WAWebUISpacing").uiMargin.end4,
              g.chatAssignmentIconAssignedToYou,
            ],
            title: r,
          });
        } else if (t.length > 0) {
          var a = s._(/*BTDS*/ "Assigned to {agentName}", [
            s._param("agentName", t[0].name),
          ]);
          n = f.jsx(o("WAWebChatAssignmentIcon.react").ChatAssignmentIcon, {
            width: 18,
            height: 12,
            xstyle: [
              o("WAWebUISpacing").uiMargin.end4,
              g.chatAssignmentIconAssignedToOthers,
            ],
            title: a,
          });
        } else n = null;
        return n;
      };
    function C(e) {
      var t = e.contact,
        a = e.element,
        i = a === void 0 ? "span" : a,
        l = e.highlightText,
        u = e.titlify,
        c = e.ellipsify,
        d = e.breakWord,
        _ = e.you,
        C = _ === void 0 ? !1 : _,
        b = e.selectable,
        v = e.useShortName,
        S = v === void 0 ? !1 : v,
        R = e.useDisplayName,
        L = R === void 0 ? !1 : R,
        E = e.onClick,
        k = e.showLabelIcon,
        I = k === void 0 ? !1 : k,
        T = e.showBusinessCheckmark,
        D = e.showNotifyName,
        x = D === void 0 ? !1 : D,
        $ = e.elevatedPushNamesEnabled,
        P = $ === void 0 ? !1 : $,
        N = e.useLiftMeUp,
        M = N === void 0 ? !1 : N,
        w = e.useVerifiedName,
        A = w === void 0 ? !1 : w,
        F = e.firstLabel,
        O = e.xstyle,
        B = e.showChatAssignmentIcon,
        W = B === void 0 ? !1 : B,
        q = e.assignedAgents,
        U = q === void 0 ? [] : q,
        V = e.skipCheckMark,
        H = V === void 0 ? !1 : V,
        G = e.showMessageYourselfName,
        z = G === void 0 ? !1 : G,
        j = e.testid,
        K = e.isVerifiedNewsletter,
        Q = e.makeCheckmarkClickable,
        X = Q === void 0 ? !1 : Q,
        Y = e.checkmarkLarge,
        J = Y === void 0 ? !1 : Y,
        Z = e.truncateName,
        ee = e.emojiXstyle,
        te = e.containerXstyle,
        ne = e.tabIndex,
        re = o("useWAWebContactValues").useOptionalContactValues(t.id, [
          o("WAWebContactGetters").getIsPSA,
          o("WAWebContactGetters").getIsIAS,
          o("WAWebContactGetters").getIsCAPISupportAccount,
          o("WAWebFrontendContactGetters").getFormattedUser,
          o("WAWebFrontendContactGetters").getFormattedName,
          o("WAWebFrontendContactGetters").getFormattedShortName,
          o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
          o("WAWebFrontendContactGetters").getDisplayName,
          o("WAWebContactGetters").getLabels,
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getNotifyName,
          o("WAWebContactGetters").getIsMe,
          o("WAWebContactGetters").getVerifiedName,
          o("WAWebContactGetters").getId,
          o("WAWebFrontendContactGetters").getIsUsernameContact,
        ]);
      if (re == null) return "";
      var oe = re[0],
        ae = re[1],
        ie = re[2],
        le = re[3],
        se = re[4],
        ue = re[5],
        ce = re[6],
        de = re[7],
        me = re[8],
        pe = re[9],
        _e = re[10],
        fe = re[11],
        ge = re[12],
        he = re[13],
        ye = re[14],
        Ce;
      if (l != null && l !== "") {
        var be = o("WAWebContactSearchGatingUtils").isTokenizedSearchEnabled()
          ? l.split(/\s+/).filter(Boolean)
          : [l];
        Ce = o("WAWebFormatConfiguration").SearchName({ terms: be });
      }
      var ve = h({
          contact: t,
          showNotifyName: x,
          elevatedPushNamesEnabled: P,
          useLiftMeUp: M,
          useDisplayName: L,
          useShortName: S,
          useVerifiedName: A,
          you: C,
          showMessageYourselfName: z,
          isUsernameContact: ye,
        }),
        Se = ve.displayName,
        Re = ve.displayNameAriaLabel;
      if (!Se)
        return (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "displayName:",
                  ",\n               formattedName:",
                  ",\n               name:",
                  ",\n               formattedShortName:",
                  ",\n               formattedUser:",
                  "",
                ])),
              Se,
              se,
              pe,
              ue,
              le,
            )
            .sendLogs("display name is null or undefined"),
          ""
        );
      var Le =
          o("WAWebLidMigrationUtils").getShouldShowLidDebugUI(he) &&
          n("cr:17281"),
        Ee = r("WAReplaceRepeatingWhitespace")(Se.toString()),
        ke = f.jsxs(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "x78zum5" },
              1: { className: "xuxw1ft x6ikm8r x10wlt62 xlyipyv x78zum5" },
            }[(Z === !0) << 0],
            {
              children: [
                f.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: Ee,
                  ariaLabel:
                    Re != null
                      ? r("WAReplaceRepeatingWhitespace")(Re.toString())
                      : void 0,
                  element: i,
                  className: o(
                    "WAWebClassnames",
                  ).classnamesConvertMeToStylexPlease(null, e.className),
                  formatters: Ce,
                  titlify: u,
                  ellipsify: c,
                  breakWord: d,
                  tabIndex: ne,
                  direction: "auto",
                  selectable: b,
                  inlineblock: !0,
                  onClick: E,
                  role: E != null ? "link" : void 0,
                  xstyle: O,
                  testid: void 0,
                  emojiXstyle: ee,
                }),
                z &&
                  f.jsx(o("WAWebEmojiText.react").EmojiText, {
                    emojiXstyle: ee,
                    testid: void 0,
                    text: s._(/*BTDS*/ "(You)"),
                    xstyle: g.spaceBefore,
                  }),
                Le && n("cr:17281") && f.jsx(n("cr:17281"), {}),
              ],
            },
          ),
        ),
        Ie = e.labels || me;
      Ie != null && Ie.length && F != null && r("WAArrayMoveToFirst")(Ie, F);
      var Te = o("WAWebListsGatingUtils").isListsEnabled(),
        De =
          I === !0 && Ie != null && Ie.length
            ? f.jsx(o("WAWebLabels.react").Labels, {
                labels: Ie,
                showName: !1,
                iconXstyle: o("WAWebUISpacing").uiPadding.start4,
                isListsFeatureEnabled: Te,
              })
            : null,
        xe = !H && (oe || ae || ie || !!T || K),
        $e = W ? y(U) : null;
      if (xe === !0) {
        var Pe;
        if (o("WAWebMiscGatingUtils").isBlueEnabled()) {
          var Ne = J ? 24 : 16;
          Pe =
            X && E
              ? f.jsx(r("WDSButton.react"), {
                  Icon: o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon,
                  "aria-label": s._(/*BTDS*/ "Verified information"),
                  onPress: E,
                  variant: "borderless",
                  xstyle: J ? g.largeCheckmarkButton : g.smallCheckmarkButton,
                })
              : f.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
                  height: Ne,
                  width: Ne,
                });
        } else Pe = f.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {});
        return f.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (p || (p = r("stylex"))).props(
              o("WAWebNewsletterName.react").styles.verified,
            ),
            {
              children: [
                ke,
                f.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    p.props(
                      K === !0
                        ? o("WAWebNewsletterName.react").styles.newsletterIcon
                        : [
                            g.icon,
                            o("WAWebUISpacing").uiMargin.top1,
                            o("WAWebUISpacing").uiMargin.start3,
                          ],
                    ),
                    { children: Pe },
                  ),
                ),
                f.jsxs("div", {
                  className: "x3nfvp2 x6s0dn4 x5yr21d x1eqw3am x16dsc37",
                  children: [$e, De],
                }),
              ],
            },
          ),
        );
      }
      return $e || De
        ? f.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (p || (p = r("stylex"))).props(
                o("WAWebNewsletterName.react").styles.verified,
              ),
              {
                children: [
                  ke,
                  f.jsxs("div", {
                    className: "x3nfvp2 x6s0dn4 x5yr21d x1eqw3am x16dsc37",
                    children: [$e, De],
                  }),
                ],
              },
            ),
          )
        : f.jsx(
            "div",
            babelHelpers.extends(
              {},
              (p || (p = r("stylex"))).props(
                o("WAWebNewsletterName.react").styles.verified,
                te,
              ),
              { children: ke },
            ),
          );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      "use no forget";
      var t,
        a = e.chat,
        i = e.element,
        l = e.highlightText,
        u = e.titlify,
        c = e.ellipsify,
        d = e.breakWord,
        m = e.onClick,
        _ = e.showLabelIcon,
        h = e.firstLabel,
        C = e.className,
        b = e.xstyle,
        v = e.showChatAssignmentIcon,
        S = v === void 0 ? !1 : v,
        R = e.assignedAgents,
        L = R === void 0 ? [] : R,
        E = e.testid,
        k = e.overrideCommunityAnnouncementGroupName,
        I = k === void 0 ? !1 : k,
        T = e.checkmarkLarge,
        D = T === void 0 ? !1 : T,
        x,
        $ = o("useWAWebChatValues").useChatValues(e.chat.id, [
          o("WAWebFrontendChatGetters").getFormattedTitle,
          o("WAWebChatGetters").getLabels,
        ]),
        P = $[0],
        N = $[1],
        M = o("useWAWebModelValues").useModelValues(e.groupMetadata, [
          "support",
          "isUnnamed",
          "participants",
          "groupType",
          "isLidAddressingMode",
          "isCag",
          "parentGroup",
        ]),
        w = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      if (
        (o("useWAWebListener").useListener(
          M.participants,
          "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin remove add",
          w,
        ),
        l != null && l !== "")
      ) {
        var A = o("WAWebContactSearchGatingUtils").isTokenizedSearchEnabled()
          ? l.split(/\s+/).filter(Boolean)
          : [l];
        x = o("WAWebFormatConfiguration").SearchName({ terms: A });
      }
      var F = e.labels || N;
      F != null && F.length && h != null && r("WAArrayMoveToFirst")(F, h);
      var O = o("WAWebListsGatingUtils").isListsEnabled(),
        B =
          _ === !0 && F != null && F.length
            ? f.jsx(o("WAWebLabels.react").Labels, {
                labels: F,
                showName: !1,
                iconXstyle: o("WAWebUISpacing").uiPadding.start4,
                isListsFeatureEnabled: O,
              })
            : null,
        W =
          I &&
          M.groupType ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            ? s._(/*BTDS*/ "Announcements")
            : r("WAReplaceRepeatingWhitespace")(
                M != null && M.isUnnamed
                  ? o(
                      "WAWebParticipantListUtils",
                    ).calculateUnnamedGroupFullParticipantsList(M, !0)
                  : a.title(),
              ),
        q = o("WAWebLidMigrationUtils").getShouldShowLidDebugUIForGroups(
          M.isLidAddressingMode,
        ),
        U = M.parentGroup,
        V = U
          ? ((t = r("WAWebGroupMetadataCollection").get(U)) == null
              ? void 0
              : t.isLidAddressingMode) === !0
          : !1,
        H = o("WAWebLidMigrationUtils").getShouldShowLidDebugUIForGroups(V),
        G = f.jsxs(f.Fragment, {
          children: [
            f.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: W,
              element: i,
              className: C,
              xstyle: b,
              formatters: x,
              titlify: u,
              ellipsify: c,
              breakWord: d,
              direction: "auto",
              inlineblock: !0,
              onClick: m,
              testid: void 0,
            }),
            q && n("cr:17281") && f.jsx(n("cr:17281"), { isCAG: M.isCag }),
            H && n("cr:17281") && f.jsx(n("cr:17281"), { isParentGroup: !0 }),
          ],
        }),
        z = M.support;
      if (z) {
        var j = D ? 24 : 20;
        return f.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (p || (p = r("stylex"))).props(
              o("WAWebNewsletterName.react").styles.verified,
              !!B && g.hasLabels,
            ),
            {
              children: [
                G,
                f.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    p.props(
                      g.icon,
                      o("WAWebUISpacing").uiMargin.top1,
                      o("WAWebUISpacing").uiMargin.start3,
                    ),
                    {
                      children: o("WAWebMiscGatingUtils").isBlueEnabled()
                        ? f.jsx(
                            o("WAWebPsaVerifiedBlueIcon.react")
                              .PsaVerifiedBlueIcon,
                            { width: j, height: j },
                          )
                        : f.jsx(
                            o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon,
                            {},
                          ),
                    },
                  ),
                ),
                f.jsx("div", {
                  className: "x3nfvp2 x6s0dn4 x5yr21d x1eqw3am x16dsc37",
                  children: B,
                }),
              ],
            },
          ),
        );
      }
      var K = S ? y(L) : null;
      return K || B
        ? f.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (p || (p = r("stylex"))).props(
                o("WAWebNewsletterName.react").styles.verified,
                g.hasLabels,
              ),
              {
                children: [
                  G,
                  f.jsxs("div", {
                    className: "x3nfvp2 x6s0dn4 x5yr21d x1eqw3am x16dsc37",
                    children: [K, B],
                  }),
                ],
              },
            ),
          )
        : G;
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(t) {
      var n,
        r,
        a =
          (n = o("useWAWebChatValues").useOptionalChatValues(
            (r = t.chat) == null ? void 0 : r.id,
            [
              o("WAWebChatGetters").getIsUser,
              o("WAWebChatGetters").getIsNewsletter,
              o("WAWebChatGetters").getIsBroadcast,
              o("WAWebFrontendChatGetters").getGroupMetadata,
              o("WAWebFrontendChatGetters").getFormattedTitle,
            ],
          )) != null
            ? n
            : [!1, !1, !1, null, null],
        i = a[0],
        l = a[1],
        s = a[2],
        m = a[3],
        p = a[4];
      if (t.chat && m != null && !i && !l && !s) {
        var _ = t.chat,
          g = t.selectable,
          h = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return f.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          name: "group-name",
          fallback: function () {
            return f.jsx("span", { children: p });
          },
          children: f.jsx(
            b,
            babelHelpers.extends({ chat: _, groupMetadata: m }, h),
          ),
        });
      }
      if (t.chat && !i && l) {
        var y = t.chat,
          v = t.selectable,
          S = babelHelpers.objectWithoutPropertiesLoose(t, u);
        return f.jsx(
          o("WAWebNewsletterName.react").NewsletterName,
          babelHelpers.extends({ chat: y, selectable: v }, S),
        );
      }
      if (t.chat && s) {
        var R = t.breakWord,
          L = t.chat,
          E = t.className,
          k = t.element,
          I = t.ellipsify,
          T = t.firstLabel,
          D = t.highlightText,
          x = t.labels,
          $ = t.onClick,
          P = t.selectable,
          N = t.showLabelIcon,
          M = t.testid,
          w = t.titlify,
          A = t.xstyle;
        return f.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          name: "broadcast-name",
          fallback: function () {
            return f.jsx("span", { children: p });
          },
          children: f.jsx(o("WAWebBroadcastName.react").BroadcastName, {
            chat: L,
            breakWord: R,
            className: E,
            element: k,
            ellipsify: I,
            firstLabel: T,
            highlightText: D,
            labels: x,
            onClick: $,
            selectable: P,
            showLabelIcon: N,
            testid: void 0,
            titlify: w,
            xstyle: A,
          }),
        });
      }
      var F, O;
      if (t.chat) {
        var B = t.chat,
          W = babelHelpers.objectWithoutPropertiesLoose(t, c);
        ((F = B.contact), (O = W));
      } else {
        var q = t.contact,
          U = babelHelpers.objectWithoutPropertiesLoose(t, d);
        ((F = q), (O = U));
      }
      return f.jsx(C, babelHelpers.extends({ contact: F }, O));
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.chat,
        n = e.contact,
        o = e.xstyle;
      return f.jsxs(
        "span",
        babelHelpers.extends({}, (p || (p = r("stylex"))).props(o), {
          children: [
            f.jsx(v, {
              contact: n,
              useShortName: !!n.shortName,
              showNotifyName: !0,
              elevatedPushNamesEnabled: !0,
              useLiftMeUp: !0,
            }),
            f.jsx("span", { children: "\xA0\u2022\xA0" }),
            t.groupMetadata &&
              f.jsx(b, { chat: t, groupMetadata: t.groupMetadata }),
          ],
        }),
      );
    }
    ((S.displayName = S.name + " [from " + i.id + "]"),
      (l.ContactName = C),
      (l.GroupName = b),
      (l.Name = v),
      (l.ContactAndGroupName = S));
  },
  226,
);
