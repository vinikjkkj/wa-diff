__d(
  "WAWebChatContact.react",
  [
    "cx",
    "fbt",
    "$InternalEnum",
    "WANullthrows",
    "WAWebBizGatingUtils",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatModel",
    "WAWebChatParticipantUtils.react",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebClassnames",
    "WAWebClickable.react",
    "WAWebCommonNewsletterStrings",
    "WAWebContactGetters",
    "WAWebContactImage.react",
    "WAWebContactModel",
    "WAWebDomScroll",
    "WAWebEmojiText.react",
    "WAWebFocusTracer",
    "WAWebFrontendContactGetters",
    "WAWebGroupType",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabelComponents.react",
    "WAWebName.react",
    "WAWebReachoutTimelockUtils",
    "WAWebStateUtils",
    "WAWebTag.react",
    "WAWebText.react",
    "WAWebTextStatusGatingUtils",
    "WAWebUnstyledButton.react",
    "WAWebWid",
    "WAWebXAltIcon.react",
    "WDSFocusStateStyles",
    "WDSIconIcClose.react",
    "WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react",
    "WDSText.react",
    "WDSTooltip.react",
    "react",
    "useMergeRefs",
    "useWAWebContactValues",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebSearchQuery",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref", "truncateName"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useRef,
      _ = m.useState,
      f = {
        accountRestrictedText: { fontStyle: "x1k4tb9n", $$css: !0 },
        chatControls: {
          ":hover_backgroundColor": "x1ubxc9n",
          ":hover_boxShadow": "xqhg8r4",
          $$css: !0,
        },
      };
    function g(e) {
      var t,
        n = e.contact,
        r = e.groupMetadata,
        a = e.hideStatus,
        i = e.secondaryProp;
      if (i != null) return !0;
      var l =
        o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() &&
        !n.canSendMsgWhileTimelocked;
      if (l) return !0;
      var s =
        (r == null ? void 0 : r.hasCapi) === !0 &&
        n.id.toString() ===
          (r == null || (t = r.owner) == null ? void 0 : t.toString());
      return s
        ? !0
        : a
          ? !1
          : o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? o("WAWebChatTextStatusWrapper").willTextStatusDisplayContent(n.id)
            : o("WAWebChatStatus").willStatusDisplayContent(n.id);
    }
    var h = n("$InternalEnum").Mirrored(["SMALL", "DEFAULT", "REACTION_TRAY"]);
    function y(t) {
      "use no forget";
      var n,
        a,
        i,
        l,
        s,
        c = t.ref,
        m = t.truncateName,
        g = babelHelpers.objectWithoutPropertiesLoose(t, e),
        y = o("useWAWebContactValues").useContactValues(g.contact.id, [
          (s = o("WAWebContactGetters")).getId,
          o("WAWebFrontendContactGetters").getPendingAction,
          s.getNotifyName,
          s.getName,
          s.getShowBusinessCheckmarkAsPrimary,
          s.getShowBusinessCheckmarkAsSecondary,
          s.getIsGroup,
          o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
          s.getVerifiedName,
          s.getVerifiedLevel,
        ]),
        C = y[0],
        b = y[1],
        v = y[2],
        S = y[3],
        R = y[4],
        L = y[5],
        E = y[6],
        k = y[7],
        I = y[8],
        T = y[9],
        D = g.admin,
        x = D === void 0 ? !1 : D,
        $ = g.chatOrigin,
        P = g.checked,
        N = g.contact,
        M = g.contextEnabled,
        w = g.contextMenu,
        A = g.detail,
        F = g.elevatedPushNamesEnabled,
        O = F === void 0 ? !1 : F,
        B = g.ephemeralIcon,
        W = g.hideStatus,
        q = W === void 0 ? !1 : W,
        U = g.hideYouSuffix,
        V = U === void 0 ? !1 : U,
        H = g.idle,
        G = g.isGroupCreationFlow,
        z = g.isPendingParticipant,
        j = z === void 0 ? !1 : z,
        K = g.isSearchResult,
        Q = K === void 0 ? !1 : K,
        X = g.listenForAdminChange,
        Y = X === void 0 ? !1 : X,
        J = g.loadPicture,
        Z = J === void 0 ? !0 : J,
        ee = g.nameOverride,
        te = g.newsletterMembershipType,
        ne = g.onDelete,
        re = g.participantCollection,
        oe = g.role,
        ae = g.searchMatch,
        ie = g.searchQuery,
        le = g.secondary,
        se = g.showInactiveFlag,
        ue = se === void 0 ? !1 : se,
        ce = g.showMessageYourselfName,
        de = ce === void 0 ? !1 : ce,
        me = g.showNotifyName,
        pe = g.tabIndex,
        _e = g.useShortName,
        fe = g.waitIdle,
        ge = p(null),
        he = p(null),
        ye = _(!1),
        Ce = ye[0],
        be = ye[1],
        ve = r("useMergeRefs")(c, he),
        Se = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        Re = _(!1),
        Le = Re[0],
        Ee = Re[1],
        ke = _(
          o(
            "WAWebReachoutTimelockUtils",
          ).isUserReachoutTimelockedAndVisible() &&
            !N.canSendMsgWhileTimelocked,
        ),
        Ie = ke[0],
        Te = ke[1],
        De = o("useWAWebSearchQuery").useSearchText(ie),
        xe =
          ae == null || ae.results.length === 0
            ? De
            : ae.results
                .map(function (e) {
                  return ae.match.substring(
                    e.startIndex,
                    e.startIndex + e.length,
                  );
                })
                .join(" "),
        $e = !1;
      if (((n = g.active) == null ? void 0 : n.value) != null) {
        var Pe = g.active.value;
        Pe instanceof r("WAWebContactModel")
          ? ($e = Pe.id.equals(N.id))
          : Pe instanceof o("WAWebChatModel").Chat &&
            o("WAWebChatGetters").getIsUser(Pe) &&
            ($e = Pe.contact.id.equals(N.id));
      }
      Le !== $e && Ee($e);
      var Ne = function (t, n) {
          if (t === "focus") {
            var e = he.current;
            e &&
              (r("WAWebFocusTracer").focus(e),
              n && o("WAWebDomScroll").scrollIntoViewIfNeeded(e));
          }
          Ee(!!t);
        },
        Me = C.toString();
      (o("useWAWebListener").useListener(g.active, Me, Ne),
        o("useWAWebListener").useListener(
          N,
          "change:canSendMsgWhileTimelocked",
          function () {
            Te(
              o(
                "WAWebReachoutTimelockUtils",
              ).isUserReachoutTimelockedAndVisible() &&
                !N.canSendMsgWhileTimelocked,
            );
          },
        ),
        o("useWAWebListener").useListener(
          Y && re ? re : null,
          ["change:isAdmin", "change:isSuperAdmin"],
          function (e) {
            r("WAWebWid").equals.apply(
              r("WAWebWid"),
              o("WAWebLidMigrationUtils").toCommonAddressingMode(e.id, C),
            ) && Se();
          },
        ));
      var we = Ie ? null : g.onClick,
        Ae = g.theme;
      Ie &&
        (Ae =
          g.theme === "chat-checkbox-disabled" || g.theme === "chat-checkbox"
            ? "chat-checkbox-disabled"
            : "disabled");
      var Fe = function (t) {
          (t.stopPropagation(),
            ne && ne(t, o("WAWebStateUtils").unproxy(g.contact)));
        },
        Oe = function (t) {
          we && we(t, o("WAWebStateUtils").unproxy(N), Q, $);
        },
        Be = function (t) {
          t.button === 0 && Oe(t);
        },
        We = function (t) {
          (t.preventDefault(), t.stopPropagation(), Oe(t));
        },
        qe = function (t) {
          g.onContext == null || g.onContext(t, N);
        },
        Ue = function (t) {
          (be(!0),
            g.allowFocusEventPropagation !== !0 && t.stopPropagation(),
            t.preventDefault());
        },
        Ve = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((a = {}), (a._agr7 = g.type === h.SMALL), a),
        ),
        He,
        Ge,
        ze;
      (S == null || S === "") &&
        (I == null || I === "" || T === 0) &&
        me === !0 &&
        v != null &&
        v !== "" &&
        (ze = O
          ? d.jsx("span", {
              className: "_ajzr",
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: k,
              }),
            })
          : d.jsx("span", {
              className: "_agr6",
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: v,
              }),
            }));
      var je = !!(x || (Y && C.isUser() && re != null && re.userIsAdmin(C))),
        Ke = d.jsx(o("WAWebTag.react").Tag, {
          testid: void 0,
          children: u._(/*BTDS*/ "Community admin"),
        }),
        Qe = o("useWAWebModelValues").useOptionalModelValues(
          re == null ? void 0 : re.getGroupMetadata(),
          ["groupType", "owner", "hasCapi"],
        ),
        Xe =
          (i = Qe == null ? void 0 : Qe.groupType) != null
            ? i
            : o("WAWebGroupType").GroupType.DEFAULT;
      switch (Xe) {
        case o("WAWebGroupType").GroupType.COMMUNITY: {
          var Ye = !!(Y && C.isUser() && re != null && re.userIsSuperAdmin(C));
          Ye
            ? (Ge = d.jsx(o("WAWebTag.react").Tag, {
                testid: void 0,
                children: u._(/*BTDS*/ "Community owner"),
              }))
            : je && (Ge = Ke);
          break;
        }
        case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP: {
          je && (Ge = Ke);
          break;
        }
        default:
          je &&
            (Ge = d.jsx(o("WAWebTag.react").Tag, {
              testid: void 0,
              children: u._(/*BTDS*/ "Group admin"),
            }));
      }
      if (
        (j &&
          (Ge = d.jsx(o("WAWebTag.react").Tag, {
            testid: void 0,
            children: u._(/*BTDS*/ "Invited"),
          })),
        ue &&
          !N.isActive() &&
          (Ge = d.jsx(o("WAWebTag.react").Tag, {
            theme: o("WAWebTag.react").TagTheme.Secondary,
            children: u._(/*BTDS*/ "Inactive"),
          })),
        te != null)
      ) {
        var Je = o(
          "WAWebCommonNewsletterStrings",
        ).getNewsletterMembershipRoleTag(te);
        Je != null &&
          (Ge = d.jsx(o("WAWebTag.react").Tag, {
            testid: void 0,
            theme: o("WAWebTag.react").TagTheme.Primary,
            children: Je,
          }));
      }
      if (A != null) He = A;
      else if (ne) {
        var Ze =
          g.type === h.SMALL
            ? d.jsx(r("WDSIconIcClose.react"), { "aria-hidden": !0 })
            : d.jsx(o("WAWebXAltIcon.react").XAltIcon, { "aria-hidden": !0 });
        G
          ? (He = d.jsx(
              r("WAWebUnstyledButton.react"),
              {
                dataTab: 2,
                xstyle: [
                  o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                  f.chatControls,
                ],
                className_DONOTUSE: "_agr5",
                role: "button",
                onClick: Fe,
                "aria-label": u._(
                  /*BTDS*/ "Remove {contact-name} from add list",
                  [u._param("contact-name", S)],
                ),
                customDataAttr: "selectedContact",
                children: Ze,
              },
              "chat-controls",
            ))
          : (He = d.jsx(r("WDSTooltip.react"), {
              label: u._(/*BTDS*/ "Remove"),
              children: d.jsx(o("WAWebClickable.react").Clickable, {
                dataTestId: "chat-controls",
                className: "_agr5",
                onClick: Fe,
                ariaLabel: u._(/*BTDS*/ "Remove member {name}", [
                  u._param("name", S),
                ]),
                children: Ze,
              }),
            }));
      }
      var et = le,
        tt = null,
        nt = g.showMemberLabel === !0,
        rt = g.sourceChat,
        ot = N.id;
      nt &&
        rt &&
        (tt = d.jsx(
          o("WAWebMemberLabelComponents.react").GroupParticipantContent,
          { chat: rt, member: ot },
        ));
      var at =
        (Qe == null ? void 0 : Qe.hasCapi) === !0 &&
        N.id.toString() ===
          (Qe == null || (l = Qe.owner) == null ? void 0 : l.toString());
      if (Ie) {
        var it =
          Ae === "chat-checkbox-disabled"
            ? "contentDefault"
            : "contentDisabled";
        et = d.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: it,
          testid: void 0,
          xstyle: f.accountRestrictedText,
          children: u._(/*BTDS*/ "Your account is restricted"),
        });
      } else
        at
          ? (et = d.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: u._(/*BTDS*/ "Business account"),
            }))
          : et == null &&
            !q &&
            (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
              ? (et = d.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
                  contactId: N.id,
                  waitIdle: fe,
                }))
              : (et = d.jsx(o("WAWebChatStatus").StatusWrapper, {
                  id: C,
                  waitIdle: fe,
                })));
      (tt &&
        (et = d.jsxs("div", {
          children: [d.jsx("div", { children: tt }), et],
        })),
        (et = d.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
          children: et,
        })));
      var lt = g.type === h.SMALL ? 26 : g.photoSize;
      Ae === "chat-info" && (lt = 49);
      var st = function (t, n) {
          if ((t && n === "left") || (!t && n === "right")) {
            var e;
            (e = ge.current) == null || e.focusOnContextMenuButton();
          }
        },
        ut = {
          enter: We,
          space: We,
          right: function () {
            return st(r("WAWebL10N").isRTL(), "right");
          },
          left: function () {
            return st(r("WAWebL10N").isRTL(), "left");
          },
        },
        ct = g.mouseDownAsClick,
        dt = at ? R || L : R,
        mt = o("WAWebBizGatingUtils").canDisplayLabel(),
        pt;
      if (ee != null)
        pt = d.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
          children: ee,
        });
      else if (E) {
        var _t = r("WANullthrows")(
          o("WAWebChatCollection").ChatCollection.get(C.toString()),
        );
        ((pt = d.jsx(o("WAWebName.react").Name, {
          chat: _t,
          useShortName: _e,
          highlightText: xe,
          showBusinessCheckmark: dt,
          showLabelIcon: mt,
          titlify: !0,
          ellipsify: !0,
        })),
          (pt = d.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: pt,
          })));
      } else
        ((pt = d.jsx(o("WAWebName.react").Name, {
          contact: N,
          useShortName: _e,
          highlightText: xe,
          showBusinessCheckmark: dt,
          showLabelIcon: mt,
          showNotifyName: O && me,
          useVerifiedName: at && N.name ? !1 : O && T > 0,
          elevatedPushNamesEnabled: O,
          titlify: !0,
          ellipsify: !0,
          you: !V,
          showMessageYourselfName: !V && de,
          truncateName: m,
        })),
          (pt = d.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: pt,
          })));
      var ft = Ae === "list-names" && !ne ? "list-names-no-delete" : Ae,
        gt = d.jsx(r("WAWebContactImage.react"), {
          contact: N,
          size: lt,
          theme: Ae,
          waitIdle: fe,
          ephemeralIcon: B,
          searchQuery: ie,
          showStatusRingAroundProfilePhoto: g.showStatusRingAroundProfilePhoto,
          loadPicture: Z,
        }),
        ht =
          g.showTeeLockBadge === !0
            ? d.jsxs("div", {
                className: "x1n2onr6 x1rg5ohu",
                children: [
                  gt,
                  d.jsx("div", {
                    className:
                      "x10l6tqk x1me21xl x131a0oe x1p8t8ri xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x6s0dn4 xl56j7k x1mzsije x8lyb6r x119zby7 x47corl x1vjfegm",
                    children: d.jsx(
                      r("WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react"),
                      { height: 14, width: 12 },
                    ),
                  }),
                ],
              })
            : gt,
        yt = function () {
          be(!1);
        },
        Ct = o("WAWebChatParticipantUtils.react").shouldUseTallerItemHeight({
          contact: N,
          chat: rt,
          showMemberLabel: nt,
          groupMetadata: Qe,
          secondaryProp: le,
          hideStatus: q,
        }),
        bt = d.jsx(
          r("WAWebChatCell.react"),
          babelHelpers.extends(
            {
              ref: ge,
              theme: ft,
              active: Le != null ? Le : Ce,
              contextEnabled: M || o("WAWebBoolFunc").returnFalse,
              contextMenu: w,
              pendingAction: b,
              detail: He,
              image: ht,
              primary: pt,
              primaryDetail: Ge,
              secondary: et,
              secondaryDetail: ze,
              onClick: ct ? null : Oe,
              onMouseDown: ct ? Be : null,
              onContext: qe,
              tabIndex: pe,
              containerRole: oe,
              role: oe,
              tallerCellWithMemberLabel: Ct,
              idle: H,
            },
            de && {
              testid: "message-yourself-row",
              extendSecondaryEllipsis: !0,
            },
          ),
        ),
        vt = babelHelpers.extends(
          {},
          we &&
            (oe === "checkbox"
              ? { role: "checkbox", "aria-checked": P }
              : { role: "button" }),
        );
      return G
        ? d.jsx(
            "div",
            babelHelpers.extends({ onBlur: yt, ref: ve, className: Ve }, vt, {
              children: bt,
            }),
          )
        : d.jsx(
            o("WAWebKeyboardHotKeys.react").HotKeys,
            babelHelpers.extends(
              { onBlur: yt, ref: ve, handlers: ut, onFocus: Ue, className: Ve },
              vt,
              { children: bt },
            ),
          );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return y;
    }
    var b = y;
    ((l.willShowSecondaryContent = g),
      (l.ContactCellType = h),
      (l.ContactFactory = C),
      (l.Contact = b));
  },
  226,
);
