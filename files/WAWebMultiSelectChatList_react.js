__d(
  "WAWebMultiSelectChatList.react",
  [
    "fbt",
    "WALogger",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebCellFrame.react",
    "WAWebChat.react",
    "WAWebChatCollection",
    "WAWebChatComparator",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatModel",
    "WAWebChatUnblockableContactWrapper.react",
    "WAWebCheckBox.react",
    "WAWebCheckboxSelectableWrapper.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactModel",
    "WAWebEmptyState.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlatList.react",
    "WAWebFrontendChatGetters",
    "WAWebGroupMetadataCollection",
    "WAWebL10NAccentFold",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebMultiSelectChatListTypes",
    "WAWebMultiSelectListHotKeys.react",
    "WAWebNewsletterCollection",
    "WAWebNoop",
    "WAWebPhoneNumberSearch",
    "WAWebReachoutTimelockActions",
    "WAWebReachoutTimelockButterBarLoadable.react",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebRound.react",
    "WAWebSectionHeader.react",
    "WAWebStatusJidUtils",
    "WAWebStatusPostingUtils",
    "WAWebStatusPrivacySettingsFlowLoadable",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTosCountryGating",
    "WAWebTosGating",
    "WAWebUserPrefsMeUser",
    "WDSButton.react",
    "WDSIconIcMoreHoriz.react",
    "WDSIconWdsIcAddToStatus.react",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useWAWebHover",
    "useWAWebListener",
    "useWAWebPrevious",
    "useWAWebStableCallback",
    "useWAWebStatusPrivacySettingConfig",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useImperativeHandle,
      f = m.useRef,
      g = m.useState,
      h = {
        SEC_CHATS: "SEC_CHATS",
        SEC_MY_NEWSLETTERS: "SEC_MY_NEWSLETTERS",
        SEC_CONTACTS: "SEC_CONTACTS",
        REACHOUT_TIMELOCK_BANNER: "REACHOUT_TIMELOCK_BANNER",
      },
      y = {
        myStatus: { color: "x1pse0pq", backgroundColor: "xfn3atn", $$css: !0 },
      };
    function C(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.active,
        a = e.model,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "My status")), (t[0] = i))
        : (i = t[0]);
      var l = i,
        u = o(
          "useWAWebStatusPrivacySettingConfig",
        ).useWAWebStatusPrivacySettingConfig(),
        c = u.statusPostingPrivacyConfig,
        m = u.updateStatusPostingPrivacyConfig,
        p;
      t[1] !== c
        ? ((p = c ? o("WAWebStatusPostingUtils").formatStatusSetting(c) : null),
          (t[1] = c),
          (t[2] = p))
        : (p = t[2]);
      var _ = p,
        g = f(null),
        h = o("useWAWebHover").useWAWebHover(g),
        C;
      if (t[3] !== c || t[4] !== m) {
        var b = function (t) {
          (t.stopPropagation(),
            o("WAWebModalManager").ModalManager.openSupportModal(
              d.jsx(
                o("WAWebStatusPrivacySettingsFlowLoadable")
                  .StatusPrivacySettingsFlowLoadable,
                {
                  statusPostingPrivacyConfig: c,
                  setStatusPostingPrivacyConfig: m,
                },
              ),
            ));
        };
        ((C = d.jsx(r("WDSButton.react"), {
          Icon: r("WDSIconIcMoreHoriz.react"),
          onPress: b,
          variant: "borderless",
        })),
          (t[3] = c),
          (t[4] = m),
          (t[5] = C));
      } else C = t[5];
      var v = C,
        S;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = d.jsx(o("WAWebRound.react").Round, {
            xstyle: y.myStatus,
            theme: o("WAWebRound.react").RoundTheme.NoShadow,
            children: d.jsx(r("WDSIconWdsIcAddToStatus.react"), {
              directional: !0,
            }),
          })),
          (t[6] = S))
        : (S = t[6]);
      var R = S,
        L;
      if (t[7] !== n || t[8] !== h || t[9] !== a) {
        var E;
        ((L = h || ((E = n.value) == null ? void 0 : E.id.equals(a.id))),
          (t[7] = n),
          (t[8] = h),
          (t[9] = a),
          (t[10] = L));
      } else L = t[10];
      var k;
      return (
        t[11] !== _ || t[12] !== v || t[13] !== L
          ? ((k = d.jsx(r("WAWebCellFrame.react"), {
              ref: g,
              active: L,
              focusable: !0,
              image: R,
              primary: l,
              secondary: _,
              theme: "chat-checkbox",
              onClick: r("WAWebNoop"),
              detail: v,
            })),
            (t[11] = _),
            (t[12] = v),
            (t[13] = L),
            (t[14] = k))
          : (k = t[14]),
        k
      );
    }
    function b(e) {
      var t,
        n = o("react-compiler-runtime").c(14),
        r = e.active,
        a = e.chat,
        i = e.customSecondaryText,
        l = e.disabled,
        u = e.ephemeralIcon,
        c = e.hasFrequentlyForwarded,
        m = e.isMaxGroupsSelected,
        p = e.isMaxNewslettersSelected,
        _ = e.selected,
        f = l,
        g;
      n[0] !== a || n[1] !== i || n[2] !== l
        ? ((g = i == null ? void 0 : i(a, l)),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l),
          (n[3] = g))
        : (g = n[3]);
      var h = g,
        y = !!((t = a.groupMetadata) != null && t.noFrequentlyForwarded);
      if (c && y) {
        f = !0;
        var b;
        (n[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = s._(
              /*BTDS*/ "Can't send messages that have been forwarded many times",
            )),
            (n[4] = b))
          : (b = n[4]),
          (h = b));
      } else
        ((m && !_) || (p && !_ && o("WAWebChatGetters").getIsNewsletter(a))) &&
          (f = !0);
      var v = f ? "chat-checkbox-disabled" : "chat-checkbox";
      if (a.id.isStatus()) {
        var S;
        return (
          n[5] !== r || n[6] !== a
            ? ((S = d.jsx(C, { active: r, model: a })),
              (n[5] = r),
              (n[6] = a),
              (n[7] = S))
            : (S = n[7]),
          S
        );
      }
      var R;
      return (
        n[8] !== r || n[9] !== a || n[10] !== u || n[11] !== h || n[12] !== v
          ? ((R = d.jsx(o("WAWebChat.react").ChatOrContact, {
              theme: v,
              active: r,
              chat: a,
              mode: o("WAWebChat.react").Mode.INFO,
              noContext: !0,
              secondary: h,
              ephemeralIcon: u,
            })),
            (n[8] = r),
            (n[9] = a),
            (n[10] = u),
            (n[11] = h),
            (n[12] = v),
            (n[13] = R))
          : (R = n[13]),
        R
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.active,
        a = e.contact,
        i = e.disabled,
        l = e.ephemeralIcon,
        u = e.isMetaAiBot,
        c = e.isSearchResult,
        m = u === void 0 ? !1 : u,
        p = null;
      if (m) {
        var _;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = s._(/*BTDS*/ "Ask me anything")), (t[0] = _))
          : (_ = t[0]),
          (p = _));
      } else if (!c && o("WAWebContactGetters").getIsMe(a)) {
        var f;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = s._(/*BTDS*/ "Message yourself")), (t[1] = f))
          : (f = t[1]),
          (p = f));
      }
      var g;
      return (
        t[2] !== n || t[3] !== a || t[4] !== p || t[5] !== i || t[6] !== l
          ? ((g = d.jsx(r("WAWebChatUnblockableContactWrapper.react"), {
              contact: a,
              onSelect: r("WAWebNoop"),
              active: n,
              customSecondaryText: p,
              ephemeralIcon: l,
              disabled: i,
              theme: "multi-select-chat-list",
            })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = p),
            (t[5] = i),
            (t[6] = l),
            (t[7] = g))
          : (g = t[7]),
        g
      );
    }
    function S(e) {
      var t = e.active,
        n = e.children,
        a = e.isDisabled,
        i = e.isMaxChatsSelected,
        l = e.model,
        s = e.onClick,
        u = e.selected,
        c = e.selections,
        m = i && !u,
        p;
      a && ((p = a(l)), m || (m = p));
      var _ = function () {
        p || s(l);
      };
      return d.jsx(
        r("WAWebCheckboxSelectableWrapper.react"),
        {
          onClick: _,
          active: t,
          wrapperTestid: "checkbox-selectable-wrapper-" + l.id.toString(),
          model: l,
          selections: c,
          disabled: m,
          checkboxTheme: o("WAWebCheckBox.react").CheckboxTheme.OUTLINE,
          children: n(m),
        },
        l.id.toString(),
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = o("react-compiler-runtime").c(45),
        n = e.active,
        a = e.customSecondaryText,
        i = e.data,
        l = e.ephemeralIcon,
        c = e.hasFrequentlyForwarded,
        m = e.isDisabled,
        p = e.isMaxChatsSelected,
        _ = e.isMaxGroupsSelected,
        f = e.isMaxNewslettersSelected,
        g = e.isSearchResult,
        y = e.onChatClick,
        C = e.selections;
      switch (i.type) {
        case h.REACHOUT_TIMELOCK_BANNER: {
          var R;
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((R = d.jsx(
                  o("WAWebReachoutTimelockButterBarLoadable.react")
                    .ReachoutTimelockButterBarLoadable,
                  {},
                )),
                (t[0] = R))
              : (R = t[0]),
            R
          );
        }
        case h.SEC_CHATS: {
          var L;
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((L = d.jsx(r("WAWebSectionHeader.react"), {
                  header: s._(/*BTDS*/ "Recent chats"),
                  uppercase: !1,
                })),
                (t[1] = L))
              : (L = t[1]),
            L
          );
        }
        case h.SEC_MY_NEWSLETTERS: {
          if (i.type === h.SEC_MY_NEWSLETTERS) {
            var E;
            return (
              t[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((E = d.jsx(r("WAWebSectionHeader.react"), {
                    header: s._(/*BTDS*/ "My Channels"),
                    uppercase: !1,
                  })),
                  (t[2] = E))
                : (E = t[2]),
              E
            );
          }
          var k;
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((k = d.jsx(r("WAWebSectionHeader.react"), {
                  header: s._(/*BTDS*/ "My channels"),
                  uppercase: !1,
                })),
                (t[3] = k))
              : (k = t[3]),
            k
          );
        }
        case h.SEC_CONTACTS: {
          var I;
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((I = d.jsx(r("WAWebSectionHeader.react"), {
                  header: s._(/*BTDS*/ "Other contacts"),
                  uppercase: !1,
                })),
                (t[4] = I))
              : (I = t[4]),
            I
          );
        }
        case o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS: {
          var T = i.data,
            D;
          t[5] !== T || t[6] !== C
            ? ((D = C.isSelected(T)), (t[5] = T), (t[6] = C), (t[7] = D))
            : (D = t[7]);
          var x = D,
            $;
          t[8] !== n ||
          t[9] !== T ||
          t[10] !== a ||
          t[11] !== l ||
          t[12] !== c ||
          t[13] !== _ ||
          t[14] !== f ||
          t[15] !== g ||
          t[16] !== x
            ? (($ = function (t) {
                return o("WAWebChatGetters").getIsUser(T)
                  ? d.jsx(v, {
                      active: n,
                      contact: T.contact,
                      disabled: t,
                      ephemeralIcon: l,
                      isSearchResult: g,
                    })
                  : d.jsx(b, {
                      active: n,
                      chat: T,
                      customSecondaryText: a,
                      disabled: t,
                      ephemeralIcon: l,
                      hasFrequentlyForwarded: c,
                      isMaxGroupsSelected: _,
                      isMaxNewslettersSelected: f,
                      selected: x,
                    });
              }),
              (t[8] = n),
              (t[9] = T),
              (t[10] = a),
              (t[11] = l),
              (t[12] = c),
              (t[13] = _),
              (t[14] = f),
              (t[15] = g),
              (t[16] = x),
              (t[17] = $))
            : ($ = t[17]);
          var P;
          return (
            t[18] !== n ||
            t[19] !== T ||
            t[20] !== m ||
            t[21] !== p ||
            t[22] !== y ||
            t[23] !== x ||
            t[24] !== C ||
            t[25] !== $
              ? ((P = d.jsx(S, {
                  isMaxChatsSelected: p,
                  onClick: y,
                  active: n,
                  model: T,
                  selections: C,
                  selected: x,
                  isDisabled: m,
                  children: $,
                })),
                (t[18] = n),
                (t[19] = T),
                (t[20] = m),
                (t[21] = p),
                (t[22] = y),
                (t[23] = x),
                (t[24] = C),
                (t[25] = $),
                (t[26] = P))
              : (P = t[26]),
            P
          );
        }
        case o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS: {
          var N = i.data,
            M;
          t[27] !== N || t[28] !== C
            ? ((M = C.isSelected(N)), (t[27] = N), (t[28] = C), (t[29] = M))
            : (M = t[29]);
          var w = M,
            A;
          t[30] !== n ||
          t[31] !== N.id ||
          t[32] !== i.data ||
          t[33] !== l ||
          t[34] !== g
            ? ((A = function (t) {
                return d.jsx(v, {
                  active: n,
                  contact: i.data,
                  disabled: t,
                  ephemeralIcon: l,
                  isSearchResult: g,
                  isMetaAiBot: o("WAWebBotUtils").isMetaAiBot(N.id),
                });
              }),
              (t[30] = n),
              (t[31] = N.id),
              (t[32] = i.data),
              (t[33] = l),
              (t[34] = g),
              (t[35] = A))
            : (A = t[35]);
          var F;
          return (
            t[36] !== n ||
            t[37] !== N ||
            t[38] !== m ||
            t[39] !== p ||
            t[40] !== y ||
            t[41] !== w ||
            t[42] !== C ||
            t[43] !== A
              ? ((F = d.jsx(S, {
                  isMaxChatsSelected: p,
                  onClick: y,
                  active: n,
                  model: N,
                  selections: C,
                  selected: w,
                  isDisabled: m,
                  children: A,
                })),
                (t[36] = n),
                (t[37] = N),
                (t[38] = m),
                (t[39] = p),
                (t[40] = y),
                (t[41] = w),
                (t[42] = C),
                (t[43] = A),
                (t[44] = F))
              : (F = t[44]),
            F
          );
        }
        default:
          throw (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "UnknownDataError: invoked from WAWebMultiSelectChatList",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(i)
          );
      }
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.flatList,
        r = e.isEmpty,
        a = e.searchText;
      if (r) {
        if (a) {
          var i;
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = d.jsx(o("WAWebEmptyState.react").Search, {})), (t[0] = i))
              : (i = t[0]),
            i
          );
        }
        var l;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = d.jsx(o("WAWebEmptyState.react").ListChats, {})),
              (t[1] = l))
            : (l = t[1]),
          l
        );
      }
      return n;
    }
    function E(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.active,
        l = a.customItemSecondaryText,
        u = a.ephemeralIcon,
        c = a.excludeChat,
        m = a.excludeContacts,
        y = m === void 0 ? !1 : m,
        C = a.flatListController,
        b = a.getInitialItems,
        v = a.hasForwarded,
        S = v === void 0 ? !1 : v,
        E = a.hasFrequentlyForwarded,
        k = E === void 0 ? !1 : E,
        I = a.includeNewsletters,
        T = I === void 0 ? !1 : I,
        D = a.isCommunityExistingGroupsDrawer,
        x = D === void 0 ? !1 : D,
        $ = a.isDisabled,
        P = a.maxChats,
        N = a.onChatsLoaded,
        M = a.onSelectionChanged,
        w = a.searchText,
        A = a.selections,
        F = r("useWAWebPrevious")(w),
        O = o("WAWebStatusJidUtils").getStatusChat(),
        B = function (t) {
          return t.filter(function (e) {
            return (
              !o("WAWebTosGating").shouldBlockByTos(e) &&
              !o("WAWebTosCountryGating").shouldBlockByCountry(e)
            );
          });
        },
        W = function (t, n) {
          var e = n;
          if (e) {
            e = o("WAWebL10NAccentFold").accentFold(e);
            var a = o("WAWebPhoneNumberSearch").numberSearch(e);
            return t.filter(function (t) {
              return (
                t.canSend &&
                o("WAWebFrontendChatGetters").getShouldAppearInList(t) &&
                t.contact.searchMatchExact(e, a)
              );
            });
          }
          return t
            .filter(function (e) {
              return (
                e.canSend &&
                o("WAWebFrontendChatGetters").getShouldAppearInList(e)
              );
            })
            .sort(r("WAWebChatComparator"));
        },
        q = function (t) {
          var e = t,
            n = o(
              "WAWebContactCollection",
            ).ContactCollection.getFilteredContacts({ showMe: !0 });
          if (a.includeMetaAi === !0) {
            var r = o("WAWebBotFrontendUtils").getMetaAiContact();
            r && n.push(r);
          }
          if (!e) return n;
          e = o("WAWebL10NAccentFold").accentFold(e);
          var i = o("WAWebPhoneNumberSearch").numberSearch(e);
          return n.filter(function (t) {
            return t.searchMatchExact(e, i);
          });
        },
        U = r("useWAWebStableCallback")(function (e) {
          var t = {},
            n = W(o("WAWebChatCollection").ChatCollection, e),
            i = T ? W(r("WAWebNewsletterCollection"), e) : [],
            l = r("compactMap")(n, function (e) {
              if (
                o("WAWebChatGetters").getIsBroadcast(e) ||
                o("WAWebChatGroupUtils").isSuspendedGroup(e) ||
                (a.includeMetaAi !== !0 &&
                  o("WAWebBotUtils").isMetaAiBot(e.id)) ||
                (a.chatFilter && !a.chatFilter(e))
              )
                return null;
              var n = o("WAWebLidMigrationUtils").toPn(e.id);
              return (n && (t[n] = !0), e);
            }),
            s = [];
          if (!y) {
            var u = B(q(e));
            ((s = r("compactMap")(u, function (e) {
              var n = o("WAWebLidMigrationUtils").toPn(e.id);
              return (n && t[n]) || (a.contactFilter && !a.contactFilter(e))
                ? null
                : e;
            })),
              o(
                "WAWebReachoutTimelockActions",
              ).maybeSetCanSendMsgWhileTimelockedProp(s));
          }
          if (!e) {
            var c = function (t, n) {
              return o("WAWebUserPrefsMeUser").isMeAccount(t.id)
                ? -1
                : o("WAWebUserPrefsMeUser").isMeAccount(n.id)
                  ? 1
                  : 0;
            };
            (l.sort(c), s.sort(c));
          }
          return (
            x &&
              l.sort(function (e, t) {
                if ($) {
                  var n = r("WAWebGroupMetadataCollection").get(
                      e.id.toString(),
                    ),
                    o = (n == null ? void 0 : n.isUnnamed) === !0;
                  if ($(e) && !o) return 1;
                  if ($(t)) return -1;
                }
                return 1;
              }),
            { statusChat: O, chats: l, contacts: s, newsletters: i }
          );
        }),
        V = g(function () {
          return U(w);
        }),
        H = V[0],
        G = V[1],
        z = f(null),
        j = f(null),
        K = r("useWAWebStableCallback")(function (e) {
          var t = e.chats,
            n = e.contacts,
            r = e.newsletters,
            o = e.statusChat,
            i = o != null && a.includeMyStatus === !0 ? [o] : [];
          return i.concat(t, n, r);
        });
      p(function () {
        var e = K(H);
        (i.init(e),
          b &&
            b().forEach(function (e) {
              return A.setVal(e, !0);
            }),
          N && N(e));
      }, []);
      var Q = g(!1),
        X = Q[0],
        Y = Q[1],
        J = g(!1),
        Z = J[0],
        ee = J[1],
        te = g(!1),
        ne = te[0],
        re = te[1];
      o("useWAWebListener").useListener(A, "all", function () {
        (Y(
          A.getSelected().filter(function (e) {
            return (
              e instanceof r("WAWebContactModel") ||
              !o("WAWebChatGetters").getIsNewsletter(e)
            );
          }).length === P,
        ),
          ee(
            S &&
              A.getSelected().some(function (e) {
                return e instanceof o("WAWebChatModel").Chat
                  ? o("WAWebChatGetters").getIsGroup(e)
                  : o("WAWebContactGetters").getIsGroup(e);
              }),
          ),
          re(
            A.getSelected().some(function (e) {
              return (
                e instanceof o("WAWebChatModel").Chat &&
                o("WAWebChatGetters").getIsNewsletter(e)
              );
            }),
          ));
      });
      var oe = function (t, n, r) {
          if (n) {
            var e, l;
            if (typeof P == "number" && A.getSelected().length >= P)
              if (x && M) {
                M(t, n);
                return;
              } else if (k)
                ((e = s._(
                  /*BTDS*/ '_j{"*":"Messages forwarded many times can only be shared with up to {count} chats at a time.","_1":"Messages forwarded many times can only be shared with up to 1 chat at a time."}',
                  [s._plural(P, "count")],
                )),
                  (l = {
                    actionText: s._(/*BTDS*/ "Learn more"),
                    onAction: function () {
                      return o("WAWebExternalLink.react").openExternalLink(
                        o("WAWebFaqUrl").getFrequentlyForwardedFaqUrl(),
                      );
                    },
                  }));
              else {
                var u;
                e =
                  (u = a.maxChatsExceedErrorMsg) != null
                    ? u
                    : s._(
                        /*BTDS*/ '_j{"*":"You can only share with up to {count} chats","_1":"You can only share with up to 1 chat"}',
                        [s._plural(P, "count")],
                      );
              }
            else
              Z &&
              (t instanceof o("WAWebChatModel").Chat
                ? o("WAWebChatGetters").getIsGroup(t)
                : o("WAWebContactGetters").getIsGroup(t))
                ? ((e = s._(
                    /*BTDS*/ "Forwarded messages can only be sent to one group chat at a time.",
                  )),
                  (l = {
                    actionText: s._(/*BTDS*/ "Learn more"),
                    onAction: function () {
                      return o("WAWebExternalLink.react").openExternalLink(
                        o("WAWebFaqUrl").getFrequentlyForwardedFaqUrl(),
                      );
                    },
                  }))
                : ne &&
                  t instanceof o("WAWebChatModel").Chat &&
                  o("WAWebChatGetters").getIsNewsletter(t) &&
                  (e = s._(/*BTDS*/ "You can only forward to 1 channel."));
            if (e != null) {
              o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, { msg: e, action: l }),
                o("WAWebToastManager").ToastPosition.CENTER,
              );
              return;
            }
          }
          (A.setVal(t, n, r), i.setVal(t, r), M && M(t, n));
        },
        ae = function (t) {
          var e;
          (e = j.current) == null || e.scrollIntoViewIfNeeded(t);
        },
        ie = function (t) {
          if (
            o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndHidden()
          ) {
            if (
              t instanceof o("WAWebChatModel").Chat &&
              !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
                chat: t,
                contact: t.contact,
              })
            ) {
              o("WAWebModalManager").ModalManager.open(
                d.jsx(
                  o("WAWebReachoutTimelockRestrictedModalLoadable")
                    .ReachoutTimelockRestrictedModalLoadable,
                  {},
                ),
              );
              return;
            }
            if (t instanceof r("WAWebContactModel")) {
              var e = t,
                n = e.id,
                a = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
                  n,
                );
              if (
                !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
                  chat: a,
                  contact: e,
                })
              ) {
                o("WAWebModalManager").ModalManager.open(
                  d.jsx(
                    o("WAWebReachoutTimelockRestrictedModalLoadable")
                      .ReachoutTimelockRestrictedModalLoadable,
                    {},
                  ),
                );
                return;
              }
            }
          }
          var i = A.isSelected(t);
          oe(t, !i, !1);
        };
      p(
        function () {
          if (w !== F) {
            var e = U(w);
            (G(e), i.init(K(e)));
          }
        },
        [i, U, F, w, K],
      );
      var le = function () {
          var e = H.chats,
            t = H.contacts,
            n = H.newsletters;
          return !e.length && !t.length && !n.length;
        },
        se = function () {
          var e = [],
            t = H.chats,
            n = H.contacts,
            r = H.newsletters,
            i = c
              ? t.filter(function (e) {
                  return !c.id.equals(e.id);
                })
              : t,
            l = c
              ? n.filter(function (e) {
                  return !c.id.equals(e.id);
                })
              : n;
          if (
            (o(
              "WAWebReachoutTimelockUtils",
            ).isUserReachoutTimelockedAndVisible() &&
              e.push({
                itemKey: h.REACHOUT_TIMELOCK_BANNER,
                type: h.REACHOUT_TIMELOCK_BANNER,
                height: 110,
              }),
            a.includeMetaAi === !0)
          ) {
            var s = o("WAWebBotFrontendUtils").maybeGetTopMetaAiRow(i, l);
            s &&
              !o("WAWebBotGating").isAiAsContactEnabled() &&
              (e.push(s),
              (i = i.filter(function (e) {
                return !o("WAWebBotUtils").isMetaAiBot(e.id);
              })),
              (l = l.filter(function (e) {
                return !o("WAWebBotUtils").isMetaAiBot(e.id);
              })));
          }
          return (
            a.includeMyStatus === !0 &&
              e.push({
                itemKey: O.id.toString(),
                type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
                data: O,
              }),
            i.length &&
              (y !== !0 && e.push({ itemKey: h.SEC_CHATS, type: h.SEC_CHATS }),
              e.push.apply(
                e,
                i.map(function (e) {
                  return {
                    itemKey: e.id.toString(),
                    type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
                    data: e,
                  };
                }),
              )),
            r.length &&
              (e.push({
                itemKey: h.SEC_MY_NEWSLETTERS,
                type: h.SEC_MY_NEWSLETTERS,
              }),
              e.push.apply(
                e,
                r.map(function (e) {
                  return {
                    itemKey: e.id.toString(),
                    type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
                    data: e,
                  };
                }),
              )),
            l.length &&
              (e.push({ itemKey: h.SEC_CONTACTS, type: h.SEC_CONTACTS }),
              e.push.apply(
                e,
                l.map(function (e) {
                  return {
                    itemKey: e.id.toString(),
                    type: o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS,
                    data: e,
                  };
                }),
              )),
            e
          );
        },
        ue = function (t) {
          var e = H.chats,
            n = H.contacts,
            r;
          if (e.length) r = e[0];
          else if (n.length) r = n[0];
          else return;
          var o = !A.isSelected(r);
          oe(r, o, t);
        };
      return (
        _(n, function () {
          return { toggleFirst: ue };
        }),
        d.jsx(r("WAWebMultiSelectListHotKeys.react"), {
          active: a.active,
          onLeave: a.onLeaveList,
          ref: z,
          onIndexChange: ae,
          children: d.jsx(L, {
            flatList: d.jsx(o("WAWebFlatList.react").FlatList, {
              ref: j,
              flatListController: C,
              direction: "vertical",
              forceConsistentRenderCount: !1,
              data: se(),
              renderItem: function (t) {
                return d.jsx(R, {
                  data: t,
                  active: i,
                  isSearchResult: !!w,
                  selections: A,
                  hasFrequentlyForwarded: k,
                  ephemeralIcon: u,
                  onChatClick: ie,
                  isMaxChatsSelected: X,
                  isMaxGroupsSelected: Z,
                  isMaxNewslettersSelected: ne,
                  isDisabled: $,
                  customSecondaryText: l,
                });
              },
            }),
            searchText: w,
            isEmpty: le(),
          }),
        })
      );
    }
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = E));
  },
  226,
);
