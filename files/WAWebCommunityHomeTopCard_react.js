__d(
  "WAWebCommunityHomeTopCard.react",
  [
    "fbt",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WANullthrows",
    "WAPromiseRaceAbort",
    "WAWebAddUserIcon.react",
    "WAWebAlertErrorIcon.react",
    "WAWebChatCommunityUtils",
    "WAWebCommunitySubjectChangePopups.react",
    "WAWebConfirmPopup.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebDrawerSectionRefreshed.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebGroupInfoSubjectInput.react",
    "WAWebL10N",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebNewGroupIcon.react",
    "WAWebNoop",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerLoadable.react",
    "WAWebProfilePicThumbAction",
    "WAWebSetSubjectGroupAction",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSActionTile.react",
    "WDSActionTileGroup.react",
    "WDSIconIcGroupAdd.react",
    "WDSIconIcGroupAddFilled.react",
    "WDSIconIcLink.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcPersonAddFilled.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebCommunitySubgroups",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
    "useWAWebShowCommunitySubjectSyncIssue",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = ["chat", "isAdmin"],
      d,
      m,
      p = m || (m = o("react")),
      _ = m.useState,
      f = {
        groupSecondaryRefreshed: { overflowWrap: "x1mzt3pk", $$css: !0 },
        icon: { zIndex: "xzkaem6", $$css: !0 },
        subjectInputFlex: {
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          $$css: !0,
        },
        infoActions: {
          display: "xrvj5dj",
          rowGap: "x1rpttp",
          columnGap: "x9bxmr9",
          gridAutoFlow: "x1mt1orb",
          gridAutoColumns: "xu6a5m6",
          justifyItems: "x1o2pa38",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        actionIconRefreshed: { color: "x1v5yvga", $$css: !0 },
        infoAction: {
          flexGrow: "x1iyjqo2",
          color: "x1v5yvga",
          fontWeight: "x1s688f",
          $$css: !0,
        },
        infoActionFontSize: { fontSize: "x1f6kntn", $$css: !0 },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(30),
        n,
        a,
        i;
      t[0] !== e
        ? ((n = e.chat),
          (i = e.isAdmin),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, c)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i))
        : ((n = t[1]), (a = t[2]), (i = t[3]));
      var l;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["groupMetadata", "contact", "id"]), (t[4] = l))
        : (l = t[4]);
      var u = o("useWAWebModelValues").useModelValues(n, l),
        m = r("useWAWebCommunitySubgroups")(u.groupMetadata),
        _ = m.subgroupCount,
        g;
      t[5] !== u
        ? ((g =
            o("WAWebChatCommunityUtils").isSuspendedCommunity(u) ||
            o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(u)),
          (t[5] = u),
          (t[6] = g))
        : (g = t[6]);
      var y = g,
        v;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Community")), (t[7] = v))
        : (v = t[7]);
      var S = v,
        R;
      t[8] !== y || t[9] !== _
        ? ((R = y
            ? null
            : p.jsxs(p.Fragment, {
                children: [
                  r("WAWebL10N").isRTL() ? " -\xA0" : " \xB7\xA0",
                  s._(/*BTDS*/ '_j{"*":"{count} groups","_1":"1 group"}', [
                    s._plural(_, "count"),
                  ]),
                ],
              })),
          (t[8] = y),
          (t[9] = _),
          (t[10] = R))
        : (R = t[10]);
      var L;
      t[11] !== R
        ? ((L = p.jsxs(p.Fragment, { children: [S, R] })),
          (t[11] = R),
          (t[12] = L))
        : (L = t[12]);
      var E = L,
        k;
      t[13] !== u || t[14] !== y
        ? ((k = p.jsx(C, {
            chat: u,
            xstyle: o("WAWebUISpacing").uiMargin.bottom6,
            isCommunitySuspended: y,
          })),
          (t[13] = u),
          (t[14] = y),
          (t[15] = k))
        : (k = t[15]);
      var I;
      t[16] !== u
        ? ((I = p.jsx(b, { chat: u })), (t[16] = u), (t[17] = I))
        : (I = t[17]);
      var T;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = (d || (d = r("stylex"))).props(
            f.groupSecondaryRefreshed,
            o("WAWebUISpacing").uiMargin.top10,
          )),
          (t[18] = T))
        : (T = t[18]);
      var D;
      t[19] !== E
        ? ((D = p.jsx(
            "div",
            babelHelpers.extends({}, T, {
              children: p.jsx(
                o("WAWebCopyPasteSelectable.react").SelectableSpan,
                {
                  dir: "auto",
                  selectable: !0,
                  children: p.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDeemphasized",
                    children: E,
                  }),
                },
              ),
            }),
          )),
          (t[19] = E),
          (t[20] = D))
        : (D = t[20]);
      var x = i && y !== !0,
        $;
      t[21] !== u || t[22] !== a || t[23] !== x
        ? (($ = p.jsx(h, babelHelpers.extends({ chat: u, adminMode: x }, a))),
          (t[21] = u),
          (t[22] = a),
          (t[23] = x),
          (t[24] = $))
        : ($ = t[24]);
      var P;
      return (
        t[25] !== $ || t[26] !== k || t[27] !== I || t[28] !== D
          ? ((P = p.jsx(r("WAWebDrawerSectionRefreshed.react"), {
              theme: "padding-large",
              children: p.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                children: [k, I, D, $],
              }),
            })),
            (t[25] = $),
            (t[26] = k),
            (t[27] = I),
            (t[28] = D),
            (t[29] = P))
          : (P = t[29]),
        P
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(50),
        n = e.adminMode,
        a = e.chat,
        i = e.onAddMembersClick,
        l = e.onInviteMembersClick,
        u = e.onManageCommunityGroupsClick,
        c = e.onViewMembersClick,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = ["change:allowNonAdminSubGroupCreation"]), (t[0] = m))
        : (m = t[0]);
      var _;
      t[1] !== a
        ? ((_ = function () {
            return o("WAWebChatCommunityUtils").canAddGroupToCommunity(a);
          }),
          (t[1] = a),
          (t[2] = _))
        : (_ = t[2]);
      var g = r("useWAWebEventTargetValue")(
          a == null ? void 0 : a.groupMetadata,
          m,
          _,
        ),
        h = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "waweb_chatinfo_refresh",
        );
      if (!n) {
        if (!h) return null;
        var C;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = { className: "xh8yej3 x1de0gy" }), (t[3] = C))
          : (C = t[3]);
        var b;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = s._(/*BTDS*/ "Add members")), (t[4] = b))
          : (b = t[4]);
        var v;
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = s._(
              /*BTDS*/ "Only admins can add members to this community",
            )),
            (t[5] = v))
          : (v = t[5]);
        var S;
        t[6] !== i
          ? ((S = p.jsx(r("WDSActionTile.react"), {
              label: b,
              Icon: r("WDSIconIcPersonAdd.react"),
              onPress: i,
              tooltip: v,
              disabled: !0,
            })),
            (t[6] = i),
            (t[7] = S))
          : (S = t[7]);
        var R;
        t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = s._(/*BTDS*/ "Add groups")), (t[8] = R))
          : (R = t[8]);
        var L = !g,
          E;
        t[9] !== g
          ? ((E = g
              ? null
              : s._(/*BTDS*/ "Only admins can add groups to this community")),
            (t[9] = g),
            (t[10] = E))
          : (E = t[10]);
        var k;
        t[11] !== u || t[12] !== L || t[13] !== E
          ? ((k = p.jsx(r("WDSActionTile.react"), {
              label: R,
              Icon: r("WDSIconIcGroupAdd.react"),
              onPress: u,
              disabled: L,
              tooltip: E,
            })),
            (t[11] = u),
            (t[12] = L),
            (t[13] = E),
            (t[14] = k))
          : (k = t[14]);
        var I;
        return (
          t[15] !== k || t[16] !== S
            ? ((I = p.jsx(
                "div",
                babelHelpers.extends({}, C, {
                  children: p.jsxs(r("WDSActionTileGroup.react"), {
                    children: [S, k],
                  }),
                }),
              )),
              (t[15] = k),
              (t[16] = S),
              (t[17] = I))
            : (I = t[17]),
          I
        );
      }
      if (h) {
        var T;
        t[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = { className: "xh8yej3 x1de0gy" }), (t[18] = T))
          : (T = t[18]);
        var D;
        t[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = s._(/*BTDS*/ "Invite")), (t[19] = D))
          : (D = t[19]);
        var x;
        t[20] !== l
          ? ((x = p.jsx(r("WDSActionTile.react"), {
              label: D,
              Icon: r("WDSIconIcLink.react"),
              onPress: l,
              testid: void 0,
            })),
            (t[20] = l),
            (t[21] = x))
          : (x = t[21]);
        var $;
        t[22] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = s._(/*BTDS*/ "Add members")), (t[22] = $))
          : ($ = t[22]);
        var P;
        t[23] !== i
          ? ((P = p.jsx(r("WDSActionTile.react"), {
              label: $,
              Icon: r("WDSIconIcPersonAdd.react"),
              onPress: i,
              testid: void 0,
            })),
            (t[23] = i),
            (t[24] = P))
          : (P = t[24]);
        var N;
        t[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = s._(/*BTDS*/ "Add groups")), (t[25] = N))
          : (N = t[25]);
        var M;
        t[26] !== u
          ? ((M = p.jsx(r("WDSActionTile.react"), {
              label: N,
              Icon: r("WDSIconIcGroupAdd.react"),
              onPress: u,
              testid: void 0,
            })),
            (t[26] = u),
            (t[27] = M))
          : (M = t[27]);
        var w;
        return (
          t[28] !== x || t[29] !== P || t[30] !== M
            ? ((w = p.jsx(
                "div",
                babelHelpers.extends({}, T, {
                  children: p.jsxs(r("WDSActionTileGroup.react"), {
                    children: [x, P, M],
                  }),
                }),
              )),
              (t[28] = x),
              (t[29] = P),
              (t[30] = M),
              (t[31] = w))
            : (w = t[31]),
          w
        );
      }
      var A;
      t[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Invite")), (t[32] = A))
        : (A = t[32]);
      var F;
      t[33] !== l
        ? ((F = {
            Icon: r("WDSIconIcLink.react"),
            IconRefreshed: r("WDSIconIcLink.react"),
            onClick: l,
            testid: "info-invite-action",
            title: A,
          }),
          (t[33] = l),
          (t[34] = F))
        : (F = t[34]);
      var O = i != null ? i : c,
        B;
      t[35] !== i
        ? ((B = i ? s._(/*BTDS*/ "Add members") : s._(/*BTDS*/ "Members")),
          (t[35] = i),
          (t[36] = B))
        : (B = t[36]);
      var W;
      t[37] !== O || t[38] !== B
        ? ((W = {
            Icon: o("WAWebAddUserIcon.react").AddUserIcon,
            IconRefreshed: r("WDSIconIcPersonAddFilled.react"),
            onClick: O,
            testid: "info-members-action",
            title: B,
          }),
          (t[37] = O),
          (t[38] = B),
          (t[39] = W))
        : (W = t[39]);
      var q;
      t[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = s._(/*BTDS*/ "Add groups")), (t[40] = q))
        : (q = t[40]);
      var U;
      t[41] !== u
        ? ((U = {
            Icon: o("WAWebNewGroupIcon.react").NewGroupIcon,
            IconRefreshed: r("WDSIconIcGroupAddFilled.react"),
            onClick: u,
            testid: "info-add-groups-action",
            title: q,
          }),
          (t[41] = u),
          (t[42] = U))
        : (U = t[42]);
      var V;
      t[43] !== F || t[44] !== W || t[45] !== U
        ? ((V = [F, W, U]), (t[43] = F), (t[44] = W), (t[45] = U), (t[46] = V))
        : (V = t[46]);
      var H = V,
        G;
      t[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = (d || (d = r("stylex"))).props(
            f.infoActions,
            o("WAWebUISpacing").uiPadding.top15,
            o("WAWebUISpacing").uiPadding.horiz20,
          )),
          (t[47] = G))
        : (G = t[47]);
      var z;
      return (
        t[48] !== H
          ? ((z = p.jsx(
              "div",
              babelHelpers.extends({}, G, { children: H.map(y) }),
            )),
            (t[48] = H),
            (t[49] = z))
          : (z = t[49]),
        z
      );
    }
    function y(e, t) {
      var n = e.IconRefreshed,
        a = e.onClick,
        i = e.testid,
        l = e.title;
      return p.jsx(
        r("WAWebUnstyledButton.react"),
        {
          "aria-label": l,
          testid: void 0,
          onClick: a,
          xstyle: f.infoActionFontSize,
          children: p.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: [f.infoAction, o("WAWebUISpacing").uiPadding.all5],
            children: [
              p.jsx(n, {
                xstyle: f.actionIconRefreshed,
                width: 32,
                height: 32,
              }),
              p.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "accent",
                children: l,
              }),
            ],
          }),
        },
        t,
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(t) {
      var n,
        a = o("react-compiler-runtime").c(25),
        i = t.chat,
        l = t.isCommunitySuspended,
        s = t.xstyle,
        u;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["isReadOnly", "groupMetadata", "contact"]), (a[0] = u))
        : (u = a[0]);
      var c = o("useWAWebModelValues").useModelValues(i, u),
        m;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = ["id", "profilePicThumb"]), (a[1] = m))
        : (m = a[1]);
      var f = o("useWAWebModelValues").useModelValues(c.contact, m);
      f.getProfilePicThumb();
      var g;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = ["imgFull"]), (a[2] = g))
        : (g = a[2]);
      var h = o("useWAWebModelValues").useModelValues(f.profilePicThumb, g),
        y = _(!1),
        C = y[0],
        b = y[1],
        v = _(!1),
        S = v[0],
        R = v[1],
        L = r("useWAWebUnmountSignal")(),
        E;
      a[3] !== C || a[4] !== h || a[5] !== L
        ? ((E = function (n, a) {
            R(!0);
            var t;
            (n != null && a != null
              ? (t = o("WAWebProfilePicThumbAction").setProfilePic(h, n, a))
              : (t = o("WAWebProfilePicThumbAction").deleteProfilePic(h)),
              r("WAPromiseRaceAbort")(t, L)
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebMiscErrors").ActionError,
                    function (t) {
                      (o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "CommunityInfoDrawer: failed to set/delete community image",
                          ])),
                      ),
                        b(!C));
                    },
                  ),
                )
                .finally(function () {
                  R(!1);
                }));
          }),
          (a[3] = C),
          (a[4] = h),
          (a[5] = L),
          (a[6] = E))
        : (E = a[6]);
      var k = E,
        I;
      if (
        a[7] !== ((n = c.groupMetadata) == null ? void 0 : n.participants) ||
        a[8] !== c.isReadOnly ||
        a[9] !== l ||
        a[10] !== h
      ) {
        var T, D;
        ((I =
          c.isReadOnly ||
          (!h.canDelete() && !h.canSet()) ||
          l ||
          !((T = c.groupMetadata) != null && T.participants.iAmAdmin())),
          (a[7] = (D = c.groupMetadata) == null ? void 0 : D.participants),
          (a[8] = c.isReadOnly),
          (a[9] = l),
          (a[10] = h),
          (a[11] = I));
      } else I = a[11];
      var x = I,
        $;
      a[12] !== s
        ? (($ = (d || (d = r("stylex"))).props(s)), (a[12] = s), (a[13] = $))
        : ($ = a[13]);
      var P = String(C),
        N;
      a[14] !== f.id ||
      a[15] !== k ||
      a[16] !== l ||
      a[17] !== S ||
      a[18] !== h.imgFull ||
      a[19] !== x ||
      a[20] !== P
        ? ((N = p.jsx(
            o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable,
            {
              type: o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY,
              id: f.id,
              attachToChat: !0,
              pending: S,
              startImage: h.imgFull,
              readOnly: x,
              onImageSet: k,
              dimmed: l,
              size: 128,
            },
            P,
          )),
          (a[14] = f.id),
          (a[15] = k),
          (a[16] = l),
          (a[17] = S),
          (a[18] = h.imgFull),
          (a[19] = x),
          (a[20] = P),
          (a[21] = N))
        : (N = a[21]);
      var M;
      return (
        a[22] !== $ || a[23] !== N
          ? ((M = p.jsx("div", babelHelpers.extends({}, $, { children: N }))),
            (a[22] = $),
            (a[23] = N),
            (a[24] = M))
          : (M = a[24]),
        M
      );
    }
    function b(e) {
      var t = e.chat,
        a = o("useWAWebModelValues").useModelValues(t.contact, ["name"]),
        i = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(t.groupMetadata),
          ["creation", "restrict"],
        ),
        l = r("useWAWebUnmountSignal")(),
        c = _(!1),
        d = c[0],
        m = c[1],
        g = r("useWAWebShowCommunitySubjectSyncIssue")(t),
        h = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n = e;
            n.trim() !== a.name &&
              (yield r("WAPromiseRaceAbort")(
                o("WAWebSetSubjectGroupAction").setGroupSubject(t, n),
                l,
              )
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                .catch(function (e) {
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "community_home:onSetSubject failed",
                      ])),
                  );
                }));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        y = function () {
          o("WAWebModalManager").ModalManager.open(
            p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: o("WAWebModalManager").closeModalManager,
              okText: r("WAWebFbtCommon")("OK"),
              children: s._(
                /*BTDS*/ "Only admins can edit this community's info",
              ),
            }),
          );
        },
        C = function () {
          o("WAWebModalManager").ModalManager.open(
            p.jsx(
              o("WAWebCommunitySubjectChangePopups.react")
                .CommunitySubjectSyncingIssuePopup,
              {
                parentChat: t,
                onOK: function () {
                  return m(!0);
                },
              },
            ),
          );
        };
      return p.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: f.subjectInputFlex,
        children: [
          p.jsx(r("WAWebGroupInfoSubjectInput.react"), {
            testid: void 0,
            subject: a.name,
            onSave: h,
            editable: g && !d ? !1 : i.canSetSubject(),
            editRestrictionInfo: i.restrict ? y : void 0,
          }),
          g && !d
            ? p.jsx(r("WAWebUnstyledButton.react"), {
                onClick: C,
                xstyle: [f.icon, o("WAWebUISpacing").uiMargin.top8],
                "aria-label": o(
                  "WAWebCommunitySubjectChangePopups.react",
                ).getCommunitySubjectSyncingIssueTitle(),
                children: p.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, {
                  width: 20,
                }),
              })
            : null,
        ],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
