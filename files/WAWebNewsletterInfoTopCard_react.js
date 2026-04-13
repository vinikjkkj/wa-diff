__d(
  "WAWebNewsletterInfoTopCard.react",
  [
    "fbt",
    "WAWebCheckmarkIcon.react",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterStrings",
    "WAWebCopyPasteSelectable.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFollowNewsletter",
    "WAWebForwardRefreshedIcon.react",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebNewsletterInfoPhoto.react",
    "WAWebNewsletterInfoSubject.react",
    "WAWebNewsletterMembershipUtil",
    "WAWebPlusIcon.react",
    "WAWebSpinner.react",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUnfollowNewsletterConfirmationModal.react",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelLinkShareScreen",
    "WAWebWamEnumTsSurface",
    "WDSActionTile.react",
    "WDSActionTileGroup.react",
    "WDSIconIcAdd.react",
    "WDSIconIcCheck.react",
    "WDSIconIcFastForward.react",
    "WDSIconIcLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebModelValues",
    "useWAWebNewsletterInviteLink",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = {
        actionIcon: { color: "xo1mcw5", $$css: !0 },
        infoAction: {
          flexGrow: "x1iyjqo2",
          color: "xo1mcw5",
          fontWeight: "xk50ysn",
          $$css: !0,
        },
        spinner: { stroke: "x7iy8sv", $$css: !0 },
        infoActionBtn: { fontSize: "x1nxh6w3", minWidth: "xktpd3l", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(32),
        n = e.adminFunnelLogger,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            "size",
            "privacy",
            "terminated",
            "isSuspendedOrTerminated",
            "membershipType",
            "inviteCode",
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useOptionalModelValues(
          e.chat.newsletterMetadata,
          a,
        ),
        l;
      t[1] !== (i == null ? void 0 : i.privacy)
        ? ((l =
            (i == null ? void 0 : i.privacy) ===
            o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Private
              ? s._(/*BTDS*/ "Private channel")
              : s._(/*BTDS*/ "Channel")),
          (t[1] = i == null ? void 0 : i.privacy),
          (t[2] = l))
        : (l = t[2]);
      var c = l;
      if (i != null && i.terminated) {
        var d;
        (t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = s._(/*BTDS*/ "Deleted channel")), (t[3] = d))
          : (d = t[3]),
          (c = d));
      }
      var m;
      t[4] !== i
        ? ((m =
            (i == null ? void 0 : i.size) != null
              ? o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(
                  i.size,
                  !0,
                )
              : null),
          (t[4] = i),
          (t[5] = m))
        : (m = t[5]);
      var p = m,
        _;
      t[6] !== i
        ? ((_ =
            (i == null ? void 0 : i.isSuspendedOrTerminated) === !0 ||
            !o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(i)),
          (t[6] = i),
          (t[7] = _))
        : (_ = t[7]);
      var g;
      t[8] !== n || t[9] !== e.chat || t[10] !== _
        ? ((g = u.jsx(r("WAWebNewsletterInfoPhoto.react"), {
            chat: e.chat,
            xstyle: o("WAWebUISpacing").uiMargin.bottom7,
            readOnly: _,
            adminFunnelLogger: n,
            showOutline: !0,
          })),
          (t[8] = n),
          (t[9] = e.chat),
          (t[10] = _),
          (t[11] = g))
        : (g = t[11]);
      var h;
      t[12] !== n || t[13] !== e.chat
        ? ((h = u.jsx(r("WAWebNewsletterInfoSubject.react"), {
            chat: e.chat,
            adminFunnelLogger: n,
          })),
          (t[12] = n),
          (t[13] = e.chat),
          (t[14] = h))
        : (h = t[14]);
      var y;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { className: "x1evy7pa x1kgmq87 x2b8uid" }), (t[15] = y))
        : (y = t[15]);
      var C;
      t[16] !== (i == null ? void 0 : i.isSuspendedOrTerminated) || t[17] !== p
        ? ((C =
            i != null && i.isSuspendedOrTerminated
              ? null
              : u.jsxs(u.Fragment, {
                  children: [
                    r("WAWebL10N").isRTL() ? " -\xA0" : " \xB7\xA0",
                    p,
                  ],
                })),
          (t[16] = i == null ? void 0 : i.isSuspendedOrTerminated),
          (t[17] = p),
          (t[18] = C))
        : (C = t[18]);
      var b;
      t[19] !== c || t[20] !== C
        ? ((b = u.jsx(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, y, {
              children: u.jsx(
                o("WAWebCopyPasteSelectable.react").SelectableSpan,
                {
                  dir: "auto",
                  selectable: !0,
                  children: u.jsxs(o("WAWebText.react").WAWebTextTitle, {
                    color: "secondary",
                    children: [c, C],
                  }),
                },
              ),
            }),
          )),
          (t[19] = c),
          (t[20] = C),
          (t[21] = b))
        : (b = t[21]);
      var v;
      t[22] !== g || t[23] !== h || t[24] !== b
        ? ((v = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: [g, h, b],
          })),
          (t[22] = g),
          (t[23] = h),
          (t[24] = b),
          (t[25] = v))
        : (v = t[25]);
      var S;
      t[26] !== (i == null ? void 0 : i.isSuspendedOrTerminated) ||
      t[27] !== e.chat
        ? ((S =
            i != null && i.isSuspendedOrTerminated
              ? null
              : u.jsx(f, { chat: e.chat })),
          (t[26] = i == null ? void 0 : i.isSuspendedOrTerminated),
          (t[27] = e.chat),
          (t[28] = S))
        : (S = t[28]);
      var R;
      return (
        t[29] !== S || t[30] !== v
          ? ((R = u.jsxs(r("WAWebDrawerSection.react"), {
              theme: "padding-small-refreshed",
              children: [v, S],
            })),
            (t[29] = S),
            (t[30] = v),
            (t[31] = R))
          : (R = t[31]),
        R
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(23),
        a = e.chat,
        i = m(!1),
        l = i[0],
        c = i[1],
        d = a.newsletterMetadata,
        _;
      t[0] !== a
        ? ((_ = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (c(!0),
                yield o("WAWebFollowNewsletter").followNewsletter(
                  o("WAWebStateUtils").unproxy(a),
                  {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .CHANNEL_PROFILE,
                  },
                ),
                c(!1));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = a),
          (t[1] = _))
        : (_ = t[1]);
      var f = _,
        h = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "waweb_chatinfo_refresh",
        ),
        y;
      t[2] !== a
        ? ((y = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebUnfollowNewsletterConfirmationModal.react")
                  .UnfollowNewsletterConfirmationModal,
                {
                  chat: a,
                  loggingOptions: {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .CHANNEL_PROFILE,
                  },
                },
              ),
            );
          }),
          (t[2] = a),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b = [];
      if (o("WAWebNewsletterMembershipUtil").iAmGuest(d)) {
        var v;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = s._(/*BTDS*/ "Follow")), (t[4] = v))
          : (v = t[4]);
        var S;
        (t[5] !== f || t[6] !== l
          ? ((S = {
              Icon: o("WAWebPlusIcon.react").PlusIcon,
              wdsIcon: r("WDSIconIcAdd.react"),
              onClick: f,
              testid: "newsletter-info-follow-action",
              title: v,
              isLoading: l,
            }),
            (t[5] = f),
            (t[6] = l),
            (t[7] = S))
          : (S = t[7]),
          b.push(S));
      } else if (o("WAWebNewsletterMembershipUtil").iAmSubscriber(d)) {
        var R;
        t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = s._(/*BTDS*/ "Following")), (t[8] = R))
          : (R = t[8]);
        var L;
        (t[9] !== C
          ? ((L = {
              Icon: o("WAWebCheckmarkIcon.react").CheckmarkIcon,
              wdsIcon: r("WDSIconIcCheck.react"),
              onClick: C,
              testid: "newsletter-info-unfollow-action",
              title: R,
              isLoading: !1,
            }),
            (t[9] = C),
            (t[10] = L))
          : (L = t[10]),
          b.push(L));
      }
      var E;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = {
            linkShareScreen: o("WAWebWamEnumChannelLinkShareScreen")
              .CHANNEL_LINK_SHARE_SCREEN.CHANNEL_INFO,
          }),
          (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] !== a
        ? ((k = { chat: a, linkShareLoggingNavigationParams: E }),
          (t[12] = a),
          (t[13] = k))
        : (k = t[13]);
      var I = o("useWAWebNewsletterInviteLink").useNewsletterInviteLink(k),
        T = I[0],
        D = I[1],
        x = I[2];
      if (T != null) {
        var $;
        t[14] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = o(
              "WAWebCommonNewsletterStrings",
            ).getForwardNewsletterLinkText()),
            (t[14] = $))
          : ($ = t[14]);
        var P;
        if (
          (t[15] !== x
            ? ((P = {
                Icon: o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon,
                wdsIcon: r("WDSIconIcFastForward.react"),
                onClick: x,
                testid: "newsletter-info-invite-action",
                title: $,
                isLoading: !1,
                directional: !0,
              }),
              (t[15] = x),
              (t[16] = P))
            : (P = t[16]),
          b.push(P),
          document.queryCommandSupported("copy"))
        ) {
          var N;
          t[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((N = o("WAWebCommonNewsletterStrings").getCopyLinkText()),
              (t[17] = N))
            : (N = t[17]);
          var M;
          (t[18] !== D
            ? ((M = {
                Icon: r("WDSIconIcLink.react"),
                wdsIcon: r("WDSIconIcLink.react"),
                onClick: D,
                testid: "newsletter-info-copy-link-action",
                title: N,
                isLoading: !1,
              }),
              (t[18] = D),
              (t[19] = M))
            : (M = t[19]),
            b.push(M));
        }
      }
      var w = h ? b.map(g) : null,
        A;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = [
            o("WAWebUISpacing").uiMargin.top25,
            o("WAWebUISpacing").uiMargin.bottom10,
          ]),
          (t[20] = A))
        : (A = t[20]);
      var F = h
          ? u.jsx(r("WDSActionTileGroup.react"), { children: w })
          : b.map(function (e, t) {
              var n = e.Icon,
                a = e.directional,
                i = e.isLoading,
                s = e.onClick,
                c = e.testid,
                d = e.title;
              return u.jsx(
                r("WAWebUnstyledButton.react"),
                {
                  "aria-label": d,
                  testid: void 0,
                  onClick: s,
                  xstyle: p.infoActionBtn,
                  disabled: l,
                  children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    xstyle: [
                      p.infoAction,
                      o("WAWebUISpacing").uiPadding.horiz15,
                    ],
                    children: [
                      i
                        ? u.jsx(o("WAWebSpinner.react").Spinner, {
                            color: p.spinner,
                            size: 32,
                            xstyle: o("WAWebUISpacing").uiMargin.bottom15,
                          })
                        : u.jsx(n, {
                            directional: a != null ? a : !1,
                            xstyle: [
                              p.actionIcon,
                              o("WAWebUISpacing").uiMargin.bottom15,
                            ],
                            width: 24,
                            height: 24,
                          }),
                      d,
                    ],
                  }),
                },
                t,
              );
            }),
        O;
      return (
        t[21] !== F
          ? ((O = u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              xstyle: A,
              children: F,
            })),
            (t[21] = F),
            (t[22] = O))
          : (O = t[22]),
        O
      );
    }
    function g(e, t) {
      var n = e.onClick,
        o = e.testid,
        a = e.title,
        i = e.wdsIcon;
      return u.jsx(
        r("WDSActionTile.react"),
        {
          Icon: i,
          onPress: function () {
            return void n();
          },
          label: a,
          testid: void 0,
        },
        t,
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
