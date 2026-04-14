__d(
  "WAWebContactInfoCard.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebBizGatingUtils",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebBusinessToolsOutlineIcon.react",
    "WAWebButton.react",
    "WAWebCheckmarkInfoModal.react",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebDrawerManager",
    "WAWebFMXGatingUtils",
    "WAWebFMXTrustSignals",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebGetPrioritizedCommonGroupsAction",
    "WAWebInfoFlowLoadable",
    "WAWebInfoShieldIcon.react",
    "WAWebL10nFormatNumber",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebPsFmxActionWamEvent",
    "WAWebPsaVerifiedBlueIcon.react",
    "WAWebSafetyToolsModal.react",
    "WAWebSettingsBlockedIcon.react",
    "WAWebSignupGating",
    "WAWebSignupLoadingState",
    "WAWebSocialMediaTrustSignals.react",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebUseBusinessProfile.react",
    "WAWebWamEnumFmxEntryPoint",
    "WAWebWamEnumFmxEvent",
    "WDSButtonGroup.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAsync",
    "useWAWebContactValues",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = 50,
      f = {
        container: {
          maxWidth: "xlnrm6",
          width: "xh8yej3",
          boxSizing: "x9f619",
          $$css: !0,
        },
        metaVerifiedLabel: {
          fontWeight: "xk50ysn",
          display: "xt0psk2",
          $$css: !0,
        },
      };
    function g(e) {
      var t,
        a,
        i,
        l,
        c,
        g = e.chat,
        h = g.contact,
        y = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "info_flow",
                  chat: o("WAWebStateUtils").unproxy(g),
                }
              : u.jsx(
                  o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                  { chat: o("WAWebStateUtils").unproxy(g) },
                  "info-" + g.id.toString(),
                ),
          );
        },
        C = o("useWAWebContactValues").useContactValues(h.id, [
          (c = o("WAWebContactGetters")).getId,
          c.getNotifyName,
          o("WAWebFrontendContactGetters").getIsContactBlocked,
          c.getIsSmb,
          o("WAWebFrontendContactGetters").getCommonGroups,
          o("WAWebFrontendContactGetters").getIsMyContact,
          c.getIsEnterprise,
          c.getBusinessProfile,
        ]),
        b = C[0],
        v = C[1],
        S = C[2],
        R = C[3],
        L = C[4],
        E = C[5],
        k = C[6],
        I = C[7],
        T = o("WAWebUseBusinessProfile.react").useBusinessProfile(h.id, [
          "isAuthorizedAgent",
          "parentCompanyName",
        ]),
        D =
          o("WAWebBizCoexGatingUtils").authorizedAgentsEnabled() &&
          (T == null ? void 0 : T.isAuthorizedAgent) === !0,
        x = T == null ? void 0 : T.parentCompanyName,
        $ = r("useWAWebAsync")(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebFMXTrustSignals").getCountryCodeTrustSignal(h);
          }),
          [h],
        ),
        P = $.value,
        N = r("useWAWebAsync")(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!R)
              return o(
                "WAWebGetPrioritizedCommonGroupsAction",
              ).getPrioritizedCommonGroups(h);
          }),
          [h, R],
        ),
        M = N.value,
        w = (t = M == null ? void 0 : M.commonGroups.length) != null ? t : 0,
        A = M == null || (a = M.priority) == null ? void 0 : a.wamEnum,
        F = o("WAWebFMXTrustSignals").getContactTrustSignal(h),
        O = o("WAWebFMXTrustSignals").getNewAccountTrustSignal(g),
        B = o("WAWebFMXTrustSignals").getNewSmbAccountTrustSignal(g),
        W = d(
          function (e) {
            o("WAWebFMXGatingUtils").fmxLoggingEnabled() &&
              new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
                fmxEvent: e,
                fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
                  .FMX_CARD,
                commonGroupNum: w,
                countryShown: !!P,
                notAContactShown: !!F,
                isSenderSmb: R,
              }).commit();
          },
          [w, P, F, R],
        );
      m(
        function () {
          o("WAWebFMXGatingUtils").fmxLoggingEnabled() &&
            new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
              fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT
                .HIGHLIGHT_GROUP_NAME,
              fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
                .FMX_CARD,
              highlightGroupType: A,
            }).commit();
        },
        [A],
      );
      var q = function () {
          (W(o("WAWebWamEnumFmxEvent").FMX_EVENT.SAFETY_TOOLS),
            o("WAWebSafetyToolsModal.react").displaySafetyToolsModal(h, g));
        },
        U = function () {
          (W(o("WAWebWamEnumFmxEvent").FMX_EVENT.CONTACT_INFO), y());
        },
        V,
        H = w > 0,
        G = p(
          function () {
            return o("WAWebBizCtwaAGMUtils").isCtWAInitiatedChat(g);
          },
          [g],
        ),
        z = r("useWAWebEventTargetValue")(
          o("WAWebSignupLoadingState").getSignupLoadingEmitter(),
          o("WAWebSignupLoadingState").SIGNUP_LOADING_CHANGE_EVENT,
          function () {
            return o("WAWebSignupLoadingState").isSignupLoading(
              g.id.toString(),
            );
          },
        ),
        j = p(
          function () {
            if (!o("WAWebSignupGating").isSignupAGMEnabled()) return !1;
            if (z) return !0;
            var e = g.msgs.getModelsArray();
            return e.slice(-_).some(function (e) {
              return (
                e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup
              );
            });
          },
          [g.msgs, z],
        );
      if (M != null)
        if (!H) V = s._(/*BTDS*/ "No groups in common");
        else {
          var K,
            Q = function () {
              (W(o("WAWebWamEnumFmxEvent").FMX_EVENT.COMMON_GROUPS), y());
            },
            X = M == null || (K = M.priority) == null ? void 0 : K.group;
          if (X != null)
            if (w > 1) {
              var Y;
              V =
                ((Y = s._plural(w, "number_common_groups")),
                s._(/*BTDS*/ '_j{"*":"You\'re both in {=m2}"}', [
                  Y,
                  s._implicitParam(
                    "=m2",
                    u.jsx(o("WAWebText.react").WAWebClickableText, {
                      color: "teal",
                      onClick: Q,
                      children: s._(
                        /*BTDS*/ '_j{"*":"{number_common_groups} groups including {group-name}","_1":"1 group including {group-name}"}',
                        [Y, s._param("group-name", X.name)],
                      ),
                    }),
                  ),
                ]));
            } else
              V = s._(/*BTDS*/ "You're both in the group {=m1}", [
                s._implicitParam(
                  "=m1",
                  u.jsx(o("WAWebText.react").WAWebClickableText, {
                    color: "teal",
                    onClick: Q,
                    children: s._(/*BTDS*/ "{group-name}", [
                      s._param("group-name", X.name),
                    ]),
                  }),
                ),
              ]);
          else
            V = u.jsx(o("WAWebText.react").WAWebClickableText, {
              color: "teal",
              onClick: Q,
              children: s._(
                /*BTDS*/ '_j{"*":"{number_common_groups} groups in common","_1":"1 group in common"}',
                [s._plural(w, "number_common_groups")],
              ),
            });
        }
      var J =
          o("WAWebBizGatingUtils").isMetaVerifiedContextCardEnabled() &&
          o("WAWebContactGetters").getShowAsMetaVerified(h),
        Z = o("WAWebBizGatingUtils").getFmxAgmEnabled(),
        ee = H || R || J || j,
        te = !0,
        ne,
        re,
        oe,
        ae,
        ie = p(
          function () {
            var e,
              t,
              n = new Map();
            return (
              (I == null || (e = I.fbPage) == null ? void 0 : e.likes) !=
                null &&
                I.fbPage.likes > 0 &&
                Z &&
                n.set(
                  o("WAWebSocialMediaTrustSignals.react")
                    .SocialMediaTrustSignalSource.FACEBOOK,
                  o("WAWebL10nFormatNumber").formatWAWebL10nNumber(
                    I.fbPage.likes,
                  ),
                ),
              (I == null || (t = I.igProfessional) == null
                ? void 0
                : t.followers) != null &&
                I.igProfessional.followers > 0 &&
                Z &&
                n.set(
                  o("WAWebSocialMediaTrustSignals.react")
                    .SocialMediaTrustSignalSource.INSTAGRAM,
                  o("WAWebL10nFormatNumber").formatWAWebL10nNumber(
                    I.igProfessional.followers,
                  ),
                ),
              n
            );
          },
          [
            I == null || (i = I.fbPage) == null ? void 0 : i.likes,
            I == null || (l = I.igProfessional) == null ? void 0 : l.followers,
            Z,
          ],
        );
      (I == null ? void 0 : I.memberSinceText) != null &&
        Z &&
        (ae = I == null ? void 0 : I.memberSinceText);
      var le = s._(/*BTDS*/ "Business account"),
        se =
          D && x != null && x !== ""
            ? s._(/*BTDS*/ "Representative at {company}", [
                s._param(
                  "company",
                  u.jsxs("span", {
                    className: "x3nfvp2 x6s0dn4 x1trrmfo x117nqv4",
                    children: [
                      x,
                      u.jsx(
                        o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon,
                        { width: 14, height: 14 },
                      ),
                    ],
                  }),
                ),
              ])
            : null;
      if (J) {
        o("WAWebMiscGatingUtils").isBlueEducationEnabled() &&
          (re = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebCheckmarkInfoModal.react"), {}),
            );
          });
        var ue = s._(/*BTDS*/ "Meta Verified"),
          ce = o("WAWebMiscGatingUtils").isBlueEducationEnabled()
            ? u.jsx(o("WAWebText.react").WAWebClickableText, {
                color: "primary",
                onClick: re,
                children: ue,
              })
            : u.jsx(o("WAWebText.react").WAWebTextSmall, {
                xstyle: f.metaVerifiedLabel,
                color: "primary",
                children: ue,
              });
        (v != null &&
          (ne = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: v })),
          (te = !1),
          (oe = Z ? [ce, le, ae].filter(Boolean) : [le, ae].filter(Boolean)));
      } else
        R || k
          ? (oe = Z
              ? [B != null ? B : le, ae].filter(Boolean)
              : [P, F, le].filter(Boolean))
          : (oe = [P, O, F, V].filter(Boolean));
      var de = function () {
          var e = u.jsx(
            o("WAWebButton.react").WAWebButtonSecondaryDestructive,
            {
              onClick: function () {
                (o("WAWebBlockContactUtils").handleBlock(
                  g,
                  g.trusted
                    ? o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlock
                    : o("WAWebBlockContants").BlockEntryPoint
                        .ChatFmxCardBlockSuspicious,
                ),
                  W(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK));
              },
              icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
              testid: void 0,
              children: r("WAWebFbtCommon")("Block"),
            },
          );
          if (Z) {
            if (j || ((R || k) && G)) return null;
            if (k)
              return u.jsx(r("WDSButtonGroup.react"), {
                width: "hug",
                orientation: "horizontal",
                secondaryButtonProps: {
                  variant: "outline",
                  type: "destructive",
                  onPress: function () {
                    (o("WAWebBlockContactUtils").handleBlock(
                      g,
                      g.trusted
                        ? o("WAWebBlockContants").BlockEntryPoint
                            .ChatFmxCardBlock
                        : o("WAWebBlockContants").BlockEntryPoint
                            .ChatFmxCardBlockSuspicious,
                    ),
                      W(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK));
                  },
                  Icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
                  testid: "fmx-card-block-btn",
                  label: r("WAWebFbtCommon")("Block"),
                },
                primaryButtonProps: {
                  variant: "outline",
                  type: "default",
                  onPress: U,
                  Icon: o("WAWebBusinessToolsOutlineIcon.react")
                    .BusinessToolsOutlineIcon,
                  testid: "fmx-card-profile-btn",
                  label: s._(/*BTDS*/ "Profile"),
                },
              });
          }
          return e;
        },
        me = de();
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        padding: [24, 12],
        xstyle: f.container,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: [
              u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: b,
                size: o("WAWebDetailImage.react").DetailImageSize.Medium,
                quality: o("WAWebDetailImage.react").DetailImageQuality.High,
                onClick: U,
                tabIndex: 0,
                ariaLabel: s._(
                  /*BTDS*/ "Profile picture. Click to view contact info",
                ),
              }),
              u.jsx(o("WAWebText.react").WAWebTextLarge, {
                paddingTop: 8,
                children: u.jsx(o("WAWebName.react").Name, {
                  contact: h,
                  onClick: re,
                  showBusinessCheckmark: J,
                  makeCheckmarkClickable: J,
                }),
              }),
              ne,
              te &&
                v != null &&
                u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: "~" + v,
                }),
              u.jsxs(o("WAWebText.react").WAWebTextSmall, {
                paddingTop: 8,
                testid: void 0,
                children: [
                  oe.map(function (e, t) {
                    return u.jsxs(
                      "span",
                      {
                        children: [
                          e,
                          t < oe.length - 1 &&
                            u.jsx(u.Fragment, { children: " \u2022 " }),
                        ],
                      },
                      t,
                    );
                  }),
                  se != null &&
                    u.jsxs("span", {
                      className: "x1lliihq",
                      children: [
                        oe.length > 0 &&
                          u.jsx(u.Fragment, { children: "\u2022 " }),
                        se,
                      ],
                    }),
                ],
              }),
              Z &&
                ie.size > 0 &&
                u.jsx(
                  o("WAWebSocialMediaTrustSignals.react")
                    .WAWebSocialMediaTrustSignals,
                  { socialMediaSignals: ie },
                ),
            ],
          }),
          u.jsxs(o("WAWebButton.react").ButtonGroup, {
            direction: "vertical",
            align: "center",
            paddingTop: 16,
            style: { minWidth: 160 },
            children: [
              !ee &&
                u.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
                  onClick: q,
                  icon: o("WAWebInfoShieldIcon.react").InfoShieldIcon,
                  testid: void 0,
                  children: s._(/*BTDS*/ "Safety tools"),
                }),
              S
                ? u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
                    onClick: function () {
                      (o("WAWebBlockContactUtils").handleUnblock(
                        g.contact,
                        g.trusted
                          ? o("WAWebBlockContants").BlockEntryPoint
                              .ChatFmxCardBlock
                          : o("WAWebBlockContants").BlockEntryPoint
                              .ChatFmxCardBlockSuspicious,
                      ),
                        W(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK));
                    },
                    testid: void 0,
                    children: r("WAWebFbtCommon")("Unblock"),
                  })
                : me,
            ],
          }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
