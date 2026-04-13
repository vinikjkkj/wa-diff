__d(
  "WAWebSelectGroupParticipantsDrawer.react",
  [
    "fbt",
    "WAWebBlockContactAction",
    "WAWebChatCollection",
    "WAWebChatComparator",
    "WAWebChatContactList.react",
    "WAWebChatParticipantList.react",
    "WAWebClassnames",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebCommunityGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebContactSyncLogger",
    "WAWebContactUtils",
    "WAWebContactlessChatUtils",
    "WAWebCopyPasteSelectable.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerUtils",
    "WAWebEmptyState.react",
    "WAWebFbtCommon",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebFocusTracer",
    "WAWebGroupMetadataCollection",
    "WAWebGroupType",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebL10NAccentFold",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebOutContactConsts",
    "WAWebOutContactModel",
    "WAWebPeopleIcon.react",
    "WAWebPhoneNumberSearch",
    "WAWebSelectAllIcon.react",
    "WAWebSpinner.react",
    "WAWebTabOrder",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUnknownContactSection.react",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameKeyVerificationFlow",
    "WAWebUsernameSearchLogger",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumContactSearchEntrypoint",
    "WAWebWamEnumSearchActionName",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebCommunityMembers",
    "useWAWebCommunitySubgroups",
    "useWAWebFilteredOutContacts",
    "useWAWebStableCallback",
    "useWAWebUnknownContact",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useMemo,
      f = m.useRef,
      g = m.useState,
      h = {
        icon: { marginInlineEnd: "x7g7pl8", $$css: !0 },
        subgroup: {
          borderStartStartRadius: "x51soum",
          borderStartEndRadius: "x1p52sp3",
          borderEndEndRadius: "xkyogvf",
          borderEndStartRadius: "xluoswm",
          backgroundColor: "x4wrhlh",
          paddingInlineStart: "x1g0dm76",
          paddingInlineEnd: "xpdmqnj",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
        selectedSubgroup: {
          backgroundColor: "xa9qhua",
          color: "xhslqc4",
          $$css: !0,
        },
        selectAllIcon: { color: "xhslqc4", $$css: !0 },
        inputLine: {
          position: "x1n2onr6",
          width: "xh8yej3",
          minHeight: "xisnujt",
          maxHeight: "x1hkcv85",
          overflowY: "x1odjw0f",
          fontSize: "x6prxxf",
          fontWeight: "x1fcty0u",
          lineHeight: "x1fc57z9",
          backgroundColor: "xjbqb8w",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderInlineStartStyle: "xstzfhl",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          outline: "x1a2a7pz",
          transitionProperty: "xshfolx",
          transitionDuration: "x13dflua",
          transitionTimingFunction: "x9lcvmn",
          $$css: !0,
        },
        nextBtnSection: {
          zIndex: "xhtitgo",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "x1l1ennw",
          paddingTop: "x1p5oq8j",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x1t1ogtf",
          paddingInlineStart: "x1c1uobl",
          textAlign: "x2b8uid",
          $$css: !0,
        },
      },
      y = o("WAWebToast.react").genId("max_participant_toast"),
      C = function (t, n) {
        o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
          contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint")
            .CONTACT_SEARCH_ENTRYPOINT.NEW_GROUP,
          searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
            .PIN_VERFICATION_ERROR_SHOWN,
          isUsernameSearch: n,
          searchStartsWithAt: t,
        });
      };
    function b(t) {
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        c = l.communityName,
        m = l.errorToastOnAddParticipantLimit,
        b = l.header,
        v = l.initialSelectedOutContacts,
        S = v === void 0 ? [] : v,
        R = l.initialSelectedSubgroup,
        L = l.nextBtn,
        E = l.nextBtnContainerXstyle,
        k = l.nextBtnDetail,
        I = l.onBack,
        T = l.onCancel,
        D = l.onChange,
        x = l.onKeyboardEnter,
        $ = l.onOutContactSelectionChange,
        P = l.parentGroupId,
        N = l.participants,
        M = l.selectionSizeLimit,
        w = l.selectionSizeMin,
        A = w === void 0 ? 1 : w,
        F = l.testid,
        O = l.tsNavigationData,
        B = r("useWAWebUnmountSignal")(),
        W = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        q = f(null),
        U = f(null),
        V = f(null),
        H = f(null),
        G = g(R),
        z = G[0],
        j = G[1],
        K = g(""),
        Q = K[0],
        X = K[1],
        Y = g(!0),
        J = Y[0],
        Z = Y[1],
        ee = g(!1),
        te = ee[0],
        ne = ee[1],
        re = g(function () {
          return new Set(
            S.map(function (e) {
              return e.id.toString();
            }),
          );
        }),
        oe = re[0],
        ae = re[1],
        ie = r("useWAWebFilteredOutContacts")(),
        le = !!P && o("WAWebCommunityGatingUtils").subgroupFilterEnabled(),
        se = !!(!z && P),
        ue = P ? o("WAWebChatCollection").ChatCollection.get(P) : null,
        ce = o(
          "WAWebCommunityAnnouncementGroupUtils",
        ).getCommunityAnnouncementGroup(ue == null ? void 0 : ue.groupMetadata),
        de = o("useWAWebCommunityMembers").useCommunityMembers(ue, ce),
        me = de.members,
        pe = r("useWAWebCommunitySubgroups")(
          ue == null ? void 0 : ue.groupMetadata,
        ),
        _e = pe.joinedSubgroups,
        fe = _(
          function () {
            var e = [];
            if (!le || !_e.length) return e;
            var t = _e
              .map(function (e) {
                return o("WAWebChatCollection").ChatCollection.assertGet(e);
              })
              .filter(function (e) {
                var t;
                return (
                  ((t = e.groupMetadata) == null ? void 0 : t.groupType) !==
                  o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                );
              })
              .sort(r("WAWebChatComparator"));
            return (
              R && e.push(o("WAWebChatCollection").ChatCollection.assertGet(R)),
              t.forEach(function (t) {
                t.id.equals(R) || e.push(t);
              }),
              e
            );
          },
          [le, _e, R],
        ),
        ge = function (t) {
          var e;
          U.current &&
            (t.preventDefault(),
            t.stopPropagation(),
            (e = U.current) == null || e.focusFirst());
        },
        he = function (t) {
          X(t.target.value);
        },
        ye = function (t) {
          r("WAWebFocusTracer").focus(V.current);
        },
        Ce = function (t) {
          var e, n;
          t.repeat ||
            ((e = V.current) == null ? void 0 : e.selectionStart) !== 0 ||
            (q.current &&
              (t.preventDefault(),
              t.stopPropagation(),
              (n = q.current) == null || n.focusLast()));
        },
        be = function (t, n) {
          var e = N.filter(function (e) {
            return !e.id.equals(n.id);
          });
          (D(e), Z(!e.length));
        },
        ve = function (t) {
          var e = new Set(oe);
          if ((e.delete(t.id.toString()), ae(e), $ != null && ie != null)) {
            var n = ie.filter(function (t) {
              return e.has(t.id.toString());
            });
            $(Array.from(n));
          }
        },
        Se = function (t) {
          t.key === "Backspace" &&
            !Q &&
            N.length > 0 &&
            (t.preventDefault(), D(N.slice(0, N.length - 1)), Z(!0));
        },
        Re = function () {
          r("WAWebFocusTracer").focus(V.current);
        },
        Le = function () {
          X("");
        },
        Ee = function (t) {
          (D(
            N.filter(function (e) {
              return !t.id.equals(e.id);
            }),
          ),
            Z(!0));
        },
        ke = function () {
          return N.length + oe.size;
        },
        Ie = function (t) {
          ke() >= M
            ? o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, { msg: m, id: y }),
              )
            : (X(""), D(N.concat(t)), Z(!0));
        },
        Te = function (t) {
          (ne(!0),
            o("WAWebBlockContactAction")
              .unblockContact(t)
              .then(function () {
                B.aborted || (Ie(t), ne(!1));
              })
              .catch(function () {
                ne(!1);
              }));
        },
        De = function () {
          var e,
            t = [];
          if (z && le) {
            var n = r("WAWebGroupMetadataCollection").assertGet(z),
              a = [];
            (n.participants.forEach(function (e) {
              o("WAWebContactGetters").getIsMe(e.contact) || a.push(e.contact);
            }),
              (e = Array.from(new Set(a).difference(new Set(N)))));
          } else {
            var i = o(
                "WAWebContactCollection",
              ).ContactCollection.getFilteredContacts({}),
              l = [];
            (me &&
              se &&
              ((l = me
                .filter(function (e) {
                  var t = e.id;
                  return (
                    !o("WAWebUserPrefsMeUser").isMeAccount(t) && !t.isLid()
                  );
                })
                .sort(o("WAWebContactComparator").ContactComparator)),
              (t = Array.from(new Set(l).difference(new Set(N))))),
              (e = Array.from(
                new Set(i).difference(new Set([].concat(N, l))),
              )));
          }
          var s = Q;
          if (!s) return { contacts: e, communityDirectory: t };
          s = o("WAWebL10NAccentFold").accentFold(s);
          var u = o("WAWebPhoneNumberSearch").numberSearch(s),
            c = function (t) {
              return t.searchMatchExact(s, u) != null;
            };
          return { contacts: e.filter(c), communityDirectory: t.filter(c) };
        },
        xe = De(),
        $e = xe.communityDirectory,
        Pe = xe.contacts,
        Ne = _(
          function () {
            if (ie == null || ie.length === 0) {
              var e = [];
              return e;
            }
            var t = Q ? o("WAWebL10NAccentFold").accentFold(Q) : "",
              n = Q ? o("WAWebPhoneNumberSearch").numberSearch(t) : null;
            return ie.filter(function (e) {
              return (
                !oe.has(e.id.toString()) &&
                (!Q || e.searchMatchExact(t, n) != null)
              );
            });
          },
          [ie, Q, oe],
        ),
        Me = _(
          function () {
            return Ne.length === 0
              ? Pe
              : o("WAWebContactUtils").mergeSortedContacts(Pe, Ne);
          },
          [Pe, Ne],
        ),
        we = Me.length === 0 && $e.length === 0,
        Ae = r("useWAWebUnknownContact")({
          phoneOrUsername: Q,
          searchPhoneNumber: we,
          searchUsername: we,
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .UNKNOWN_CONTACT_SEARCH_GROUP,
        }),
        Fe = Ae.error,
        Oe = Ae.loading,
        Be = Ae.onRetry,
        We = Ae.unknownContactInfo,
        qe = function (t, n) {
          var e = N.find(function (e) {
            return e.id.equals(n.id);
          });
          e
            ? Ee(n)
            : n.isContactBlocked
              ? o("WAWebModalManager").ModalManager.open(
                  d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    tsNavigationData: {
                      surface: "unknown",
                      viewName: "select-group-participants",
                    },
                    title: s._(/*BTDS*/ "Add blocked contact"),
                    onOK: function () {
                      (Te(n), o("WAWebModalManager").ModalManager.close());
                    },
                    onCancel: function () {
                      return o("WAWebModalManager").ModalManager.close();
                    },
                    okText: s._(/*BTDS*/ "Yes"),
                    cancelText: s._(/*BTDS*/ "No"),
                    children: s._(
                      /*BTDS*/ "The contact you have selected is blocked. Would you like to unblock them and add them to the group?",
                    ),
                  }),
                )
              : Ie(n);
        },
        Ue = function (t, n) {
          var e = oe.has(n.id.toString());
          if (!e && ke() >= M) {
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, { msg: m, id: y }),
            );
            return;
          }
          e || X("");
          var r = new Set(oe),
            a = n.id.toString();
          if (
            (r.has(a) ? r.delete(a) : r.add(a), ae(r), $ != null && ie != null)
          ) {
            var i = ie.filter(function (e) {
              return r.has(e.id.toString());
            });
            $(Array.from(i));
          }
        },
        Ve = r("useWAWebStableCallback")(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if ((e.preventDefault(), e.stopPropagation(), We != null)) {
                  var t = We.isUsernameSearch,
                    n;
                  if ((We == null ? void 0 : We.wid) == null) {
                    var r = Q.startsWith("@");
                    if (
                      (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                        contactSearchEntrypoint: o(
                          "WAWebWamEnumContactSearchEntrypoint",
                        ).CONTACT_SEARCH_ENTRYPOINT.NEW_GROUP,
                        searchActionName: o("WAWebWamEnumSearchActionName")
                          .SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION,
                        isUsernameSearch: t,
                        searchStartsWithAt: r,
                      }),
                      We.triedKey && C(r, t),
                      (n = yield o(
                        "WAWebUsernameKeyVerificationFlow",
                      ).usernameKeyVerificationFlow({
                        username: We.username,
                        initWithError: We.triedKey,
                        onInvalidKeyError: function () {
                          return C(r, t);
                        },
                      })),
                      n == null)
                    )
                      return;
                  } else n = We.wid;
                  qe(e, o("WAWebContactCollection").ContactCollection.gadd(n));
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        He = function (t) {
          var e;
          (t.preventDefault(), t.stopPropagation());
          var n =
              (e = $e == null ? void 0 : $e[0]) != null
                ? e
                : Me.find(function (e) {
                    return !(e instanceof r("WAWebOutContactModel"));
                  }),
            o = Ne[0];
          n != null && !(n instanceof r("WAWebOutContactModel"))
            ? qe(t, n)
            : o instanceof r("WAWebOutContactModel")
              ? Ue(t, o)
              : We && Ve(t);
        };
      p(
        function () {
          V.current && J && Re();
        },
        [N, J],
      );
      var Ge;
      te
        ? (Ge = d.jsx("div", {
            className: "x78zum5 xl56j7k",
            children: d.jsx(o("WAWebSpinner.react").Spinner, {
              stroke: 6,
              size: 24,
            }),
          }))
        : (N.length >= A || P != null || oe.size > 0) && (Ge = L);
      var ze =
          (a =
            ie == null
              ? void 0
              : ie.filter(function (e) {
                  return oe.has(e.id.toString());
                })) != null
            ? a
            : [],
        je = o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled()
          ? r("WAWebFbtCommon")("Search name, number or username")
          : r("WAWebFbtCommon")("Search name or number");
      N.length && (je = " ");
      var Ke = function (t) {
          var e = t.target;
          (e instanceof HTMLElement &&
            e.getAttribute("data-custom-attr") === "selectedContact") ||
            x();
        },
        Qe = {
          down: ge,
          enter: Q ? He : N.length ? Ke : r("WAWebNoop"),
          up: Ce,
        };
      Qe[r("WAWebL10N").LR("left", "right")] = Ce;
      var Xe;
      we
        ? Oe
          ? (Xe = d.jsx(o("WAWebEmptyState.react").SearchingNonContact, {}))
          : Fe
            ? (Xe = d.jsx(o("WAWebEmptyState.react").SearchingNonContactError, {
                error: o("WAWebContactlessChatUtils").getErrorStr(Fe),
                onClick: Be,
              }))
            : We
              ? (Xe = d.jsx(r("WAWebUnknownContactSection.react"), {
                  contactInfo: We,
                  onUnknownContactClick: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        return We && Ve(e);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  searchText: Q,
                }))
              : (Xe = d.jsx(o("WAWebEmptyState.react").SearchContacts, {}))
        : (Xe = d.jsx(r("WAWebChatContactList.react"), {
            ref: U,
            flatListController: W.current,
            contacts: Me,
            separateContacts: {
              contacts: $e,
              header: s._(/*BTDS*/ "People also in {community-name}", [
                s._param("community-name", c),
              ]),
            },
            onClick: qe,
            onOutContactClick: $ != null ? Ue : void 0,
            selectedOutContactIds: $ != null ? oe : void 0,
            hideOutContactCheckbox: !0,
            inviteFlow: o("WAWebOutContactConsts").WAWebOutContactInviteFlow
              .GroupInvite,
            onFocusSearch: ye,
            showPersonGroupDivisionHeader: se,
            searchText: Q,
            searchEntrypoint: "new_group",
          }));
      var Ye = function (t) {
          t.equals(z) ? j(void 0) : j(t);
        },
        Je = function () {
          var e = [];
          for (var t of Me) t instanceof r("WAWebOutContactModel") || e.push(t);
          var n = e.filter(function (e) {
              return !e.isContactBlocked;
            }),
            a = new Set(oe);
          Ne.forEach(function (e) {
            a.add(e.id.toString());
          });
          var i = a.size - oe.size;
          if (ke() + n.length + i > M)
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, { msg: m, id: y }),
            );
          else {
            if ((X(""), D(N.concat(n)), ae(a), $ != null && ie != null)) {
              var l = ie.filter(function (e) {
                return a.has(e.id.toString());
              });
              $(Array.from(l));
            }
            (Z(!0),
              n.length !== e.length &&
                o("WAWebModalManager").ModalManager.open(
                  d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    tsNavigationData: {
                      surface: "unknown",
                      viewName: "select-group-participants",
                    },
                    title: s._(/*BTDS*/ "Blocked contacts"),
                    onOK: function () {
                      o("WAWebModalManager").ModalManager.close();
                    },
                    children: s._(
                      /*BTDS*/ "Some contacts you have selected are blocked. Please select them individually if you would like to unblock them and add them to the group.",
                    ),
                  }),
                ));
          }
        },
        Ze = Oe
          ? d.jsx(r("WAWebUnstyledButton.react"), {
              onClick: Le,
              xstyle: o("WAWebUISpacing").uiPadding.end2,
              children: d.jsx(o("WAWebSpinner.react").Spinner, {
                size: 20,
                stroke: 5,
                color: "highlight",
              }),
            })
          : null,
        et = le
          ? d.jsx("div", {
              className:
                "x1xrf6ya xscbp6u xizuyw3 xhig867 x1280gxy x14aock7 xuxw1ft",
              children: fe.map(function (e, t) {
                return d.jsx(
                  r("WAWebUnstyledButton.react"),
                  {
                    onClick: function () {
                      return Ye(e.id);
                    },
                    xstyle: [
                      h.subgroup,
                      t + 1 < fe.length && o("WAWebUISpacing").uiMargin.end6,
                      e.id.equals(z) && h.selectedSubgroup,
                    ],
                    children: d.jsxs(o("WAWebFlex.react").FlexRow, {
                      children: [
                        d.jsx(o("WAWebPeopleIcon.react").PeopleIcon, {
                          width: 20,
                          height: 20,
                          xstyle: h.icon,
                        }),
                        d.jsx(o("WAWebName.react").Name, { chat: e }),
                      ],
                    }),
                  },
                  e.id.toString(),
                );
              }),
            })
          : null,
        tt =
          z && le
            ? d.jsx(r("WAWebUnstyledButton.react"), {
                onClick: Je,
                children: d.jsx(o("WAWebSelectAllIcon.react").SelectAllIcon, {
                  title: s._(/*BTDS*/ "Select all contacts"),
                  xstyle: h.selectAllIcon,
                }),
              })
            : null,
        nt = o("WAWebDrawerUtils").getDrawerHeaderType(l.viewType);
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: i,
        testid: void 0,
        viewType: l.viewType,
        tsNavigationData: O != null ? O : void 0,
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: b,
            type: nt,
            onBack: I,
            onCancel: T,
          }),
          d.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              d.jsx("div", {
                className:
                  "x9desvi xhig867 xscbp6u xizuyw3 xdj266r x14z9mp xat24cr x1lziwak x1280gxy",
                children: d.jsx("div", {
                  children: d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
                    handlers: Qe,
                    className: (u || (u = r("stylex")))(
                      h.inputLine,
                      o("WAWebUISpacing").uiPadding.top6,
                      o("WAWebUISpacing").uiPadding.bottom0,
                      o("WAWebUISpacing").uiPadding.horiz2,
                    ),
                    children: [
                      d.jsx("div", {
                        "data-list-scroll-container": !0,
                        children: d.jsx(r("WAWebChatParticipantList.react"), {
                          ref: q,
                          theme: "list-names",
                          contacts: N,
                          outContacts: ze,
                          onDelete: be,
                          onDeleteOutContact: ve,
                          onFocusSearch: ye,
                        }),
                      }),
                      d.jsxs(o("WAWebFlex.react").FlexRow, {
                        children: [
                          d.jsx("input", {
                            "data-tab":
                              o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH,
                            "data-testid": void 0,
                            className: o(
                              "WAWebClassnames",
                            ).classnamesConvertMeToStylexPlease(
                              "x1rg5ohu xh8yej3 xt7dq6l x1gxa6cn xyri2b xa0aww2 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak x6prxxf x19v9tvf xzsf02u x16dsc37 xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1a2a7pz",
                              o("WAWebCopyPasteSelectable.react")
                                .SELECTABLE_INPUT_CSS_CLASS,
                            ),
                            ref: V,
                            placeholder: je,
                            onKeyDown: Se,
                            onChange: he,
                            value: Q,
                            type: "text",
                          }),
                          d.jsx("span", {
                            className: "xixxii4 xlshs6z",
                            ref: H,
                            children: Q,
                          }),
                          tt,
                          Ze,
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              et,
              d.jsx(r("WAWebFlatListContainer.react"), {
                className:
                  "x1n2onr6 x1iyjqo2 xs83m0k x1r8uery x6ikm8r x1odjw0f x1280gxy",
                flatListControllers: [W.current],
                children: Xe,
              }),
              d.jsxs(r("WAWebVelocityTransitionGroup"), {
                transitionName: "btn",
                xstyle: [h.nextBtnSection, E],
                children: [Ge, k],
              }),
            ],
          }),
        ],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
