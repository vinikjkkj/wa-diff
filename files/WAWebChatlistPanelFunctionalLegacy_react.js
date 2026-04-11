__d(
  "WAWebChatlistPanelFunctionalLegacy.react",
  [
    "cx",
    "fbt",
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WALogger",
    "WANullthrows",
    "WAPromiseRaceAbort",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAccessibility.react",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizGatingUtils",
    "WAWebBotGating",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatArchivedEntryPoint.react",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentUtils",
    "WAWebChatCollection",
    "WAWebChatComparator",
    "WAWebChatGetters",
    "WAWebChatListFilters.react",
    "WAWebChatListSearch.react",
    "WAWebChatLockUtils",
    "WAWebChatLockedEntryPoint.react",
    "WAWebChatMessageSearch",
    "WAWebChatModel",
    "WAWebChatSearchFilters",
    "WAWebChatSearchQuery",
    "WAWebChatlistBanners.react",
    "WAWebChatlistFunctional.react",
    "WAWebChatlistPanelMode",
    "WAWebChatlistPanelUtils",
    "WAWebChatlistUtils",
    "WAWebChatlist_DEPRECATED.react",
    "WAWebChevronCustomIcons",
    "WAWebClassnames",
    "WAWebClientFeatureFlags",
    "WAWebCmd",
    "WAWebCommandCollection",
    "WAWebCommandModel",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebComposeBoxActions",
    "WAWebConnModel",
    "WAWebConstantsDeprecated",
    "WAWebConsumerMultiSelectBar.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactModel",
    "WAWebContactSearchGatingUtils",
    "WAWebContactSyncLogger",
    "WAWebContactlessChatUtils",
    "WAWebCoreActionsODS",
    "WAWebDesktopUpsellChatlistToastbar.react",
    "WAWebDesktopUpsellSearchToastbar.react",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebEmptyState.react",
    "WAWebEnvironment",
    "WAWebErrorBoundary.react",
    "WAWebFilterLogging",
    "WAWebFilterSession",
    "WAWebFindCommonGroupsContactAction",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFocusTracer",
    "WAWebFrontendChatGetters",
    "WAWebFrontendConstants",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebFtsConstants",
    "WAWebFtsMsgsCallLogCollection",
    "WAWebFtsMsgsCollection",
    "WAWebGetMetaAISearchSuggestionsAction",
    "WAWebGroupType",
    "WAWebHistorySyncComponents.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebKeyboardRun",
    "WAWebL10NAccentFold",
    "WAWebListsGatingUtils",
    "WAWebMessageYourselfMetricUtils",
    "WAWebMiscGatingUtils",
    "WAWebMixedMultiSelectBar.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebMultiSelectEntryPointConstants",
    "WAWebMultiSelection",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeProgressToastbar.react",
    "WAWebOfflineResumeTypes.flow",
    "WAWebOutContactCollection",
    "WAWebPREGatingUtils",
    "WAWebParticipantListUtils",
    "WAWebPhoneNumberSearch",
    "WAWebPrivacyNarrativeE2EMessage.react",
    "WAWebPttOocPlayer",
    "WAWebSearchLogging",
    "WAWebSearchUserJourneyLogger",
    "WAWebSearchZeroStateGatingUtils",
    "WAWebSelectableState",
    "WAWebSettingsConst",
    "WAWebSettingsFlowLoadable",
    "WAWebSingleSelection",
    "WAWebSpinner.react",
    "WAWebUimUie.react",
    "WAWebUnknownContactSection.react",
    "WAWebUseRecentlySearchedChats",
    "WAWebUsernameKeyVerificationFlow",
    "WAWebUsernameSearchLogger",
    "WAWebVelocityAnimate",
    "WAWebVelocityTransitionGroup",
    "WAWebVoipCallsTabPanelManager",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumContactSearchEntrypoint",
    "WAWebWamEnumLandingSurface",
    "WAWebWamEnumSearchActionName",
    "WAWebWamEnumSearchUjItemType",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUnlockEntryPoint",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "cr:177",
    "cr:5923",
    "cr:5932",
    "cr:5959",
    "err",
    "gkx",
    "isEmptyObject",
    "react",
    "useWAWebCallbackAfterRender",
    "useWAWebChatLockRestriction",
    "useWAWebDebouncedCallback",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebShiftTimerCallback",
    "useWAWebStableCallback",
    "useWAWebThrottledCallback",
    "useWAWebUnknownContact",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q,
      X,
      Y,
      J,
      Z,
      ee,
      te,
      ne = te || (te = o("react")),
      re = te,
      oe = re.startTransition,
      ae = re.useCallback,
      ie = re.useEffect,
      le = re.useImperativeHandle,
      se = re.useMemo,
      ue = re.useRef,
      ce = re.useState,
      de = { unreadIcon: { verticalAlign: "xwgq4w4", $$css: !0 } },
      me = n("cr:5959") == null ? void 0 : n("cr:5959").executeDebugCommand,
      pe = 50,
      _e = 75,
      fe = { THROTTLE: 450 },
      ge = [o("WAWebChatSearchFilters").SearchFilters.UNREAD],
      he = [].concat(ge, [
        o("WAWebChatSearchFilters").SearchFilters.CONTACT,
        o("WAWebChatSearchFilters").SearchFilters.GROUP,
        o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
      ]),
      ye = [].concat(he, [o("WAWebChatSearchFilters").SearchFilters.LABELS]),
      Ce = new Set(ge),
      be = new Set(he),
      ve = new Set(ye),
      Se = new Set([
        o("WAWebChatSearchFilters").SearchFilters.UNREAD,
        o("WAWebChatSearchFilters").SearchFilters.CONTACT,
        o("WAWebChatSearchFilters").SearchFilters.GROUP,
        o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
        o("WAWebChatSearchFilters").SearchFilters.LABELS,
        o("WAWebChatSearchFilters").SearchFilters.COMMUNITY,
        o("WAWebChatSearchFilters").SearchFilters.CHANNELS,
      ]),
      Re = function () {
        return o("WAWebListsGatingUtils").isListsEnabled()
          ? Se
          : o("WAWebInboxFiltersGatingUtils").inboxCustomFiltersEnabled()
            ? ve
            : o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()
              ? be
              : Ce;
      },
      Le = [];
    function Ee(t) {
      "use no forget";
      var a,
        i,
        l,
        s,
        te = t.aiSearchExperienceEnabled,
        re = t.chatlistPanelRef,
        ge = re === void 0 ? null : re,
        he = t.endMultiSelect,
        ye = t.hideLockedChats,
        Ce = t.hideMultiSelectBar,
        be = t.labelFilter,
        ve = t.mode,
        Se = t.multiSelectEntryPoint,
        Ee = t.multiSelection,
        ke = t.selectable,
        Ie = t.showArchiveV2,
        Te = t.startChatInteraction,
        De = t.unknownContactPhoneSearchEnabled,
        xe = t.unknownContactUsernameSearchEnabled,
        $e = be ? { label: be } : void 0,
        Pe =
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.getResumeUIProgressBarType() ===
          o("WAWebOfflineResumeTypes.flow").ResumeUIProgressBarType.Toastbar,
        Ne = ce(!1),
        Me = Ne[0],
        we = Ne[1],
        Ae = ce(void 0),
        Fe = Ae[0],
        Oe = Ae[1],
        Be = ce([]),
        We = Be[0],
        qe = Be[1],
        Ue = ce(!1),
        Ve = Ue[0],
        He = Ue[1],
        Ge = ce(Se),
        ze = Ge[0],
        je = Ge[1],
        Ke = ce($e),
        Qe = Ke[0],
        Xe = Ke[1],
        Ye = ce(void 0),
        Je = Ye[0],
        Ze = Ye[1],
        et = ce(Pe),
        tt = et[0],
        nt = et[1],
        rt = ce(!1),
        ot = rt[0],
        at = rt[1],
        it = ce([]),
        lt = it[0],
        st = it[1],
        ut = ue(
          ve === r("WAWebChatlistPanelMode").CallsTab
            ? new (r("WAWebFtsMsgsCallLogCollection"))()
            : new (r("WAWebFtsMsgsCollection"))(),
        ),
        ct = ue(
          new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          }),
        ),
        dt = ue(new (o("WAWebChatSearchQuery").SearchQuery)()),
        mt = ue(null),
        pt = ue(null),
        _t = ue(null),
        ft = ue(null),
        gt = ue(null),
        ht = ue(null),
        yt = ae(function (e) {
          pt.current = e;
        }, []),
        Ct = ue(new (r("WAWebFlatListController"))()),
        bt = ue(
          Ee ||
            new (r("WAWebMultiSelection"))([], function (e) {
              return e.id.toString();
            }),
        ),
        vt = ue(new (r("WAWebSelectableState"))(ke || !1)),
        St = ue(new (r("WAWebFilterSession"))()),
        Rt = ue({}),
        Lt = ue(new Set()),
        Et = ue(null),
        kt = ue(null),
        It = ue(null),
        Tt = ue(null),
        Dt = ue(null),
        xt = ue(null),
        $t = r("useWAWebUnmountSignal")(),
        Pt = n("cr:177")(),
        Nt = ae(function (e) {
          return !e || (!e.label && !e.kind);
        }, []),
        Mt = ae(
          function (t, n, a) {
            var i = n != null ? n : {},
              l = a != null ? a : {},
              s = l.includeActiveChat,
              u = s === void 0 ? !1 : s,
              c = l.includeStickyChats,
              d = Re(),
              m = (t || "").trim();
            if (m || !Nt(i)) {
              m = o("WAWebL10NAccentFold").accentFold(m);
              var p = o("WAWebPhoneNumberSearch").numberSearch(m),
                _ = [];
              o("WAWebChatCollection").ChatCollection.filter(function (e) {
                if (!o("WAWebFrontendChatGetters").getShouldAppearInList(e))
                  return !1;
                var t = u && ct.current.getVal() === e;
                if (t) return (_.push({ chat: e }), !0);
                var n = e.archive && i.kind != null && d.has(i.kind);
                if (n) return !1;
                if (c != null && c.has(e.id.toString()))
                  return (_.push({ chat: e }), !0);
                if (i.label != null) {
                  var a = e.contact.searchMatchExact(m, p, i.label);
                  if (a != null)
                    return (_.push({ chat: e, searchMatch: a }), !0);
                }
                if (m) {
                  var l = e.contact.searchMatchExact(m, p);
                  if (l != null) {
                    var s =
                      (i.kind == null && i.label == null) ||
                      o("WAWebChatMessageSearch").matchFilter(e, i);
                    if (s) return (_.push({ chat: e, searchMatch: l }), !0);
                  }
                } else {
                  var f =
                    (i.kind == null && i.label == null) ||
                    o("WAWebChatMessageSearch").matchFilter(e, i);
                  if (f) return (_.push({ chat: e }), !0);
                }
                var g = !1;
                if (
                  (o("WAWebChatGetters").getIsGroup(e) &&
                    (g =
                      r("WANullthrows")(e.groupMetadata).isUnnamed &&
                      o("WAWebParticipantListUtils")
                        .calculateUnnamedGroupFullParticipantsList(
                          r("WANullthrows")(e.groupMetadata),
                        )
                        .includes(m)),
                  g)
                ) {
                  var h =
                    (i.kind == null && i.label == null) ||
                    o("WAWebChatMessageSearch").matchFilter(e, i);
                  if (h) return (_.push({ chat: e }), !0);
                }
                return !1;
              });
              var f = _;
              if (
                _.length === 0 &&
                m &&
                o("WAWebContactSearchGatingUtils").isFuzzySearchEnabled() &&
                o(
                  "WAWebContactSearchGatingUtils",
                ).canTermsMeetFuzzySearchThreshold(
                  m.split(/\s+/).filter(Boolean),
                )
              ) {
                var g =
                    o(
                      "WAWebContactSearchGatingUtils",
                    ).getFuzzySearchTimeoutThreshold() * 1e3,
                  h = new (o("WATimeUtils").MonotonicTimer)(),
                  y = !1;
                ((f = []),
                  o("WAWebChatCollection").ChatCollection.filter(function (t) {
                    if (!o("WAWebFrontendChatGetters").getShouldAppearInList(t))
                      return !1;
                    var n = h.elapsed();
                    if (y || n > g)
                      return (
                        y ||
                          o("WALogger").LOG(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Fuzzy chat search timeout ",
                                "ms (limit ",
                                "ms)",
                              ])),
                            n,
                            g,
                          ),
                        (y = !0),
                        !1
                      );
                    var r = u && ct.current.getVal() === t;
                    if (r) return (f.push({ chat: t }), !0);
                    var a = t.archive && i.kind != null && d.has(i.kind);
                    if (a) return !1;
                    if (c != null && c.has(t.id.toString()))
                      return (f.push({ chat: t }), !0);
                    var l = t.contact.searchMatchFuzzy(m);
                    if (l == null) return !1;
                    var s =
                      (i.kind == null && i.label == null) ||
                      o("WAWebChatMessageSearch").matchFilter(t, i);
                    return s ? (f.push({ chat: t, searchMatch: l }), !0) : !1;
                  }));
              }
              if (
                o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
              ) {
                var C = function (t) {
                    return Pt.flatMap(function (e) {
                      var n = u && ct.current.getVal() === e;
                      if (n) return [{ chat: e }];
                      var r = e.archive && i.kind != null && d.has(i.kind);
                      if (r) return [];
                      var a = !e.archive,
                        l = o("WAWebChatMessageSearch").matchFilter(e, i);
                      if (!a || !l) return [];
                      if (t != null) {
                        var s = t(e);
                        return s != null ? [{ chat: e, searchMatch: s }] : [];
                      }
                      return [{ chat: e }];
                    });
                  },
                  b = C(
                    m
                      ? function (e) {
                          return e.contact.searchMatchExact(m, p);
                        }
                      : null,
                  ),
                  v = b;
                if (
                  (b.length === 0 &&
                    m &&
                    o("WAWebContactSearchGatingUtils").isFuzzySearchEnabled() &&
                    o(
                      "WAWebContactSearchGatingUtils",
                    ).canTermsMeetFuzzySearchThreshold(
                      m.split(/\s+/).filter(Boolean),
                    ) &&
                    (v = C(function (e) {
                      return e.contact.searchMatchFuzzy(m);
                    })),
                  v.length > 0)
                )
                  return [].concat(f, v).sort(function (e, t) {
                    return r("WAWebChatComparator")(e.chat, t.chat);
                  });
              }
              return f;
            }
            var S = o("WAWebChatCollection").ChatCollection.filter(
              function (e) {
                return (
                  !e.archive &&
                  o("WAWebFrontendChatGetters").getShouldAppearInList(e)
                );
              },
            );
            if (o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()) {
              var R = Pt.filter(function (e) {
                var t = !e.archive,
                  n = o("WAWebChatMessageSearch").matchFilter(e, i);
                return t && n;
              });
              if (R.length > 0) {
                var L = [].concat(S, R);
                return (
                  L.sort(r("WAWebChatComparator")),
                  L.map(function (e) {
                    return { chat: e };
                  })
                );
              }
            }
            return S.map(function (e) {
              return { chat: e };
            });
          },
          [Nt, Pt],
        ),
        wt = ce(function () {
          return Mt("", Qe);
        }),
        At = wt[0],
        Ft = wt[1],
        Ot = ae(
          function (e) {
            var t = e != null ? e : {},
              n = t.searchText,
              r = t.filter,
              a = r === void 0 ? {} : r,
              i = t.includeChats,
              l = i === void 0 ? !1 : i,
              s = t.includeNonContacts,
              u = s === void 0 ? !1 : s;
            if (
              a.kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT ||
              a.kind ===
                o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT ||
              a.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD ||
              a.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES
            )
              return o("WAWebABProps").getABPropConfigValue(
                "web_anr_batch_and_queue_bulk_contacts_db_writes_enabled",
              )
                ? Le
                : [];
            var c = (n || "").trim();
            if (!c && Nt(a))
              return o("WAWebABProps").getABPropConfigValue(
                "web_anr_batch_and_queue_bulk_contacts_db_writes_enabled",
              )
                ? Le
                : [];
            c = o("WAWebL10NAccentFold").accentFold(c);
            var d = o("WAWebPhoneNumberSearch").numberSearch(c);
            return o("WAWebContactCollection").ContactCollection.searchContacts(
              {
                query: { text: c, number: d, label: a.label },
                filter: {
                  showMe: !!c,
                  showWithoutName: u,
                  cancelAt: e == null ? void 0 : e.cancelAt,
                  filterFn: function (t) {
                    if (l) return !0;
                    var e = o(
                      "WAWebChatCollection",
                    ).ChatCollection.getLatestChatForWid(t.id);
                    return (
                      e == null ||
                      !o("WAWebFrontendChatGetters").getShouldAppearInList(e)
                    );
                  },
                },
              },
            );
          },
          [Nt],
        ),
        Bt = ce(function () {
          return Ot({ searchText: "", filter: Qe });
        }),
        Wt = Bt[0],
        qt = Bt[1],
        Ut = se(
          function () {
            var e = new Map();
            if (Wt != null)
              for (var t of Wt) {
                var n = t.contact,
                  r = t.searchMatch;
                e.set(n.id.toString(), r);
              }
            return e;
          },
          [Wt],
        ),
        Vt = ae(function (e) {
          var t = (e || "").trim();
          if (!t) return [];
          var n = o("WAWebL10NAccentFold").accentFold(t);
          return o(
            "WAWebOutContactCollection",
          ).OutContactCollection.searchOutContacts({
            query: {
              text: n,
              number: o("WAWebPhoneNumberSearch").numberSearch(t),
            },
          });
        }, []),
        Ht = ce(function () {
          return [];
        }),
        Gt = Ht[0],
        zt = Ht[1],
        jt = se(
          function () {
            var e = new Map();
            for (var t of Gt) {
              var n = t.outContact,
                r = t.searchMatch;
              e.set(n.id.toString(), r);
            }
            return e;
          },
          [Gt],
        ),
        Kt = se(
          function () {
            var e = new Map();
            for (var t of At) {
              var n = t.chat,
                r = t.searchMatch;
              r != null && e.set(n.id.toString(), r);
            }
            return e;
          },
          [At],
        ),
        Qt = ce(""),
        Xt = Qt[0],
        Yt = Qt[1],
        Jt = ae(
          function (e) {
            var t = (e || "").trim();
            return !t || ve !== r("WAWebChatlistPanelMode").CommandPalette
              ? []
              : o("WAWebCommandCollection").CommandCollection.query({
                  query: t,
                  type: "action",
                });
          },
          [ve],
        ),
        Zt = ce(function () {
          return Jt("");
        }),
        en = Zt[0],
        tn = Zt[1],
        nn = ae(
          function (e) {
            var t,
              a = (e || "").trim();
            return !a ||
              ve !== r("WAWebChatlistPanelMode").CommandPalette ||
              !o("WAWebClientFeatureFlags").isFeatureEnabled("debug_commands")
              ? []
              : (t =
                    n("cr:5923") == null
                      ? void 0
                      : n("cr:5923").query(a).slice(0, 3)) != null
                ? t
                : [];
          },
          [ve],
        ),
        rn = ce(function () {
          return nn("");
        }),
        on = rn[0],
        an = rn[1],
        ln = ae(
          function (e) {
            var t = (e || "").trim().toLowerCase();
            if (!t || ve !== r("WAWebChatlistPanelMode").CommandPalette)
              return [];
            var n = o("WAWebChatCollection").ChatCollection.filter(
              function (e) {
                var n;
                return (
                  ((n = e.groupMetadata) == null ? void 0 : n.groupType) ===
                    o("WAWebGroupType").GroupType.COMMUNITY &&
                  e.formattedTitle.toLowerCase().includes(t)
                );
              },
            );
            return n;
          },
          [ve],
        ),
        sn = ce(function () {
          return ln("");
        }),
        un = sn[0],
        cn = sn[1],
        dn = ae(
          function (e) {
            var t = (e || "").trim();
            return !t || ve !== r("WAWebChatlistPanelMode").CommandPalette
              ? []
              : o("WAWebCommandCollection").CommandCollection.query({
                  query: t,
                  type: "setting",
                });
          },
          [ve],
        ),
        mn = ce(function () {
          return dn("");
        }),
        pn = mn[0],
        _n = mn[1],
        fn = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        gn = r("useWAWebDebouncedCallback")(function (e) {
          var t;
          (e === void 0 && (e = !1), be || Ar());
          var a = dt.current.trimmed();
          ((t = kt.current) == null || t.abort(),
            (kt.current = new AbortController()));
          var i = kt.current.signal,
            l = (ee || (ee = n("Promise")))
              .resolve()
              .then(function () {
                !e && !Me && xn({ searching: !0 }, _e);
              })
              .then(function () {
                return (
                  e && ut.current.resetSearch(),
                  ut.current.search({
                    count: o("WAWebFtsConstants").FTS_NUM_RESULTS,
                    filter: dt.current.filter,
                    searchTerm: a,
                  })
                );
              });
          Et.current = r("WAPromiseRaceAbort")(l, i)
            .then(function (t) {
              t && !t.canceled && (xn({ searching: !1 }, _e), e && fn());
            })
            .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
            .finally(function () {
              ((Et.current = void 0), (kt.current = void 0));
            })
            .catch(function () {
              Me && xn({ searching: !1 }, _e);
            });
        }, o("WAWebFtsConstants").FTS_TYPING_DELAY),
        hn = r("useWAWebThrottledCallback")(
          function (e, t) {
            var n = Mt(e, t);
            Wn(n) && xn({ chats: n }, _e, pe);
          },
          fe.THROTTLE,
          { leading: !1, trailing: !0 },
        ),
        yn = r("useWAWebThrottledCallback")(
          function (e, t) {
            var n = Ot({
                searchText: e,
                filter: t,
                includeChats: ve === r("WAWebChatlistPanelMode").CallsTab,
              }),
              a = Vt(e);
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebChatlistPanelFunctional: Updating contacts via throttledFilteredContacts, count: ",
                  "",
                ])),
              n.length,
            ),
              xn({ contacts: n, outContacts: a }, _e, pe));
          },
          fe.THROTTLE,
          { leading: !1, trailing: !0 },
        ),
        Cn = r("useWAWebThrottledCallback")(
          function (e) {
            var t = Jt(e);
            xn({ actions: t }, _e, pe);
          },
          fe.THROTTLE,
          { leading: !1, trailing: !0 },
        ),
        bn = r("useWAWebThrottledCallback")(
          function (e) {
            var t = nn(e);
            xn({ debugCommands: t }, _e, pe);
          },
          fe.THROTTLE,
          { leading: !1, trailing: !0 },
        ),
        vn = r("useWAWebThrottledCallback")(
          function (e) {
            var t = ln(e);
            xn({ communities: t }, _e, pe);
          },
          fe.THROTTLE,
          { leading: !1, trailing: !0 },
        ),
        Sn = r("useWAWebThrottledCallback")(
          function (e) {
            var t = dn(e);
            xn({ settingsCommands: t }, _e, pe);
          },
          fe.THROTTLE,
          { leading: !1, trailing: !0 },
        ),
        Rn = r("useWAWebThrottledCallback")(function () {
          if (!$n()) {
            yn.cancel();
            var e = Ot({ filter: dt.current.filter });
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebChatlistPanelFunctional: Updating contacts via ContactCollection sort, count: ",
                  "",
                ])),
              e.length,
            ),
              xn({ contacts: e }));
          }
        }, fe.THROTTLE),
        Ln = r("useWAWebThrottledCallback")(function (e) {
          rr(e) && cr();
        }, 100),
        En = r("useWAWebDebouncedCallback")(function () {
          var e = dt.current.trimmed();
          if (!e) {
            qe([]);
            return;
          }
          var t = dt.current.filter;
          if (
            t.kind === o("WAWebChatSearchFilters").SearchFilters.CONTACT ||
            t.kind === o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT ||
            t.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES
          ) {
            qe([]);
            return;
          }
          var a = o("WAWebABProps").getABPropConfigValue(
            "wa_web_groups_in_common_multi_contact",
          );
          if (
            a &&
            o(
              "WAWebFindCommonGroupsContactAction",
            ).shouldRunMultiContactTokenSearch(e)
          ) {
            var i,
              l = e.split(/\s+/).filter(Boolean),
              s = o("WAWebABProps").getABPropConfigValue(
                "web_max_contacts_to_show_common_groups",
              ),
              u = l.map(function (e) {
                return Ot({
                  searchText: e,
                  filter: t,
                  includeChats: !0,
                  includeNonContacts: !0,
                  cancelAt: s + 1,
                });
              });
            if (
              u.some(function (e) {
                return e.length === 0;
              })
            ) {
              qe([]);
              return;
            }
            var c = new Set(),
              d = [];
            for (var _ of u)
              for (var f of _) {
                var g = f.contact,
                  h = g.id.toString();
                c.has(h) || (c.add(h), d.push(g));
              }
            var y = d.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      yield o(
                        "WAWebFindCommonGroupsContactAction",
                      ).findCommonGroups(e);
                    } catch (e) {
                      var t = String(e);
                      throw (
                        o("WALogger")
                          .ERROR(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "get from participants table failed",
                              ])),
                          )
                          .verbose()
                          .sendLogs(
                            "get from participants table failed when finding common groups: " +
                              t,
                          ),
                        r("err")("get from participants table failed")
                      );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
            ((i = Tt.current) == null || i.abort(),
              (Tt.current = new AbortController()));
            var C = Tt.current.signal;
            It.current = r("WAPromiseRaceAbort")(
              (ee || (ee = n("Promise"))).all(y),
              C,
            )
              .then(function () {
                if (e === dt.current.trimmed()) {
                  var t = o("WAWebABProps").getABPropConfigValue(
                      "web_max_found_common_groups_displayed",
                    ),
                    n = o(
                      "WAWebFindCommonGroupsContactAction",
                    ).findGroupsWithContactGroups(u, t);
                  qe(n);
                }
              })
              .catch(r("WAWebNoop"))
              .finally(function () {
                ((It.current = null), (Tt.current = null));
              });
          } else {
            var b,
              v = o("WAWebABProps").getABPropConfigValue(
                "web_max_contacts_to_show_common_groups",
              ),
              S = Ot({
                searchText: e,
                filter: t,
                includeChats: !0,
                includeNonContacts: !0,
                cancelAt: v + 1,
              });
            if (S.length === 0) {
              qe([]);
              return;
            }
            var R = S.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.contact;
                    try {
                      return (
                        yield o(
                          "WAWebFindCommonGroupsContactAction",
                        ).findCommonGroups(t),
                        t.commonGroups
                      );
                    } catch (e) {
                      var n = String(e);
                      throw (
                        o("WALogger")
                          .ERROR(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "get from participants table failed",
                              ])),
                          )
                          .verbose()
                          .sendLogs(
                            "get from participants table failed when finding common groups: " +
                              n,
                          ),
                        r("err")("get from participants table failed")
                      );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
            ((b = Tt.current) == null || b.abort(),
              (Tt.current = new AbortController()));
            var L = Tt.current.signal;
            It.current = r("WAPromiseRaceAbort")(
              (ee || (ee = n("Promise"))).all(R),
              L,
            )
              .then(function (t) {
                if (e === dt.current.trimmed()) {
                  var n = or(
                    t,
                    S.map(function (e) {
                      var t = e.contact;
                      return t;
                    }),
                  );
                  qe(n);
                }
              })
              .catch(r("WAWebNoop"))
              .finally(function () {
                ((It.current = null), (Tt.current = null));
              });
          }
        }, 750),
        kn = r("useWAWebDebouncedCallback")(function () {
          var e;
          if (
            !(
              o("WAWebBotGating").canSearchMetaAiSuggestions(dt.current) &&
              te === !0
            )
          ) {
            st([]);
            return;
          }
          var t = o(
            "WAWebGetMetaAISearchSuggestionsAction",
          ).getMetaAISearchTypeAheadSuggestionsAction(dt.current.trimmed());
          ((e = xt.current) == null || e.abort(),
            (xt.current = new AbortController()));
          var n = xt.current.signal;
          Dt.current = r("WAPromiseRaceAbort")(t, n)
            .then(function (e) {
              st(
                e.slice(
                  0,
                  o(
                    "WAWebBotGating",
                  ).getMetaAISearchTypeAheadMaxSuggestionsCount(),
                ),
              );
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAAbortError").AbortError,
                r("WAWebNoop"),
              ),
            )
            .finally(function () {
              ((Dt.current = null), (xt.current = null));
            });
        }, 200),
        In = r("useWAWebDebouncedCallback")(function (e) {
          ar(e);
        }, 1e3),
        Tn = ae(function (e) {
          r("isEmptyObject")(e) ||
            (e.searching !== void 0 && we(e.searching),
            e.chats !== void 0 && Ft(e.chats),
            e.contacts !== void 0 && qt(e.contacts),
            e.outContacts !== void 0 && zt(e.outContacts),
            e.messages !== void 0 && Oe(e.messages),
            e.actions !== void 0 && tn(e.actions),
            e.communities !== void 0 && cn(e.communities),
            e.debugCommands !== void 0 && an(e.debugCommands),
            e.settingsCommands !== void 0 && _n(e.settingsCommands),
            e.commonGroups !== void 0 && qe(e.commonGroups),
            e.showMultiSelectBar !== void 0 && He(e.showMultiSelectBar),
            e.multiSelectEntryPoint !== void 0 && je(e.multiSelectEntryPoint),
            e.filterPreset !== void 0 && Xe(e.filterPreset),
            e.unreadButton !== void 0 && Ze(e.unreadButton),
            e.showOfflineToastbar !== void 0 && nt(e.showOfflineToastbar),
            e.lockedChatsEntryPointVisible !== void 0 &&
              at(e.lockedChatsEntryPointVisible),
            e.aiSuggestions !== void 0 && st(e.aiSuggestions));
        }, []),
        Dn = r("useWAWebShiftTimerCallback")(function () {
          (Tn(Rt.current), (Rt.current = {}));
        }),
        xn = ae(
          function (e, t, n) {
            if (!r("isEmptyObject")(e)) {
              var o = Object.keys(e).some(function (t) {
                return Rt.current[t] !== e[t];
              });
              o && (Object.assign(Rt.current, e), Dn(t, n));
            }
          },
          [Dn],
        ),
        $n = ae(
          function () {
            return (
              ve === r("WAWebChatlistPanelMode").CallsTab || !!dt.current.query
            );
          },
          [ve],
        ),
        Pn =
          (ve === r("WAWebChatlistPanelMode").Chatlist ||
            ve === r("WAWebChatlistPanelMode").CallsTab) &&
          $n(),
        Nn = Pn && De === !0,
        Mn = Pn && xe === !0,
        wn = r("useWAWebUnknownContact")({
          phoneOrUsername: Xt,
          searchPhoneNumber: Nn,
          searchUsername: Mn,
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .UNKNOWN_CONTACT_SEARCH_GLOBAL,
        }),
        An = wn.error,
        Fn = wn.loading,
        On = wn.onRetry,
        Bn = wn.unknownContactInfo,
        Wn = ae(
          function (e) {
            if (!o("WAWebPREGatingUtils").isPREMessageSendEnabled()) return !0;
            var t = At.length === e.length;
            if (!t) return !0;
            var n = At.some(function (t, n) {
              return t.chat.id !== e[n].chat.id;
            });
            return n;
          },
          [At],
        ),
        qn = ue(0),
        Un = ue(null),
        Vn = ue(null),
        Hn = ue(!1);
      (o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "remove",
        function (e) {
          if (
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebChatlistPanelFunctional: ChatCollection remove event, isSearching: ",
                  "",
                ])),
              !!dt.current.query,
            ),
            dt.current.query)
          ) {
            var t = At.filter(function (t) {
              return t.chat !== e;
            });
            At && t.length !== At.length && xn({ chats: t });
          } else (hn.cancel(), xn({ chats: Mt(void 0, dt.current.filter) }));
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebContactCollection").ContactCollection,
          "remove",
          function (e) {
            if ($n()) {
              var t = Wt.filter(function (t) {
                return t.contact !== e;
              });
              Wt &&
                t.length !== Wt.length &&
                (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebChatlistPanelFunctional: Updating contacts via ContactCollection remove (searching), old count: ",
                      ", new count: ",
                      "",
                    ])),
                  Wt.length,
                  t.length,
                ),
                xn({ contacts: t }));
            } else {
              yn.cancel();
              var n = Ot({ searchText: void 0, filter: dt.current.filter });
              (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: Updating contacts via ContactCollection remove (not searching), count: ",
                    "",
                  ])),
                n.length,
              ),
                xn({ contacts: n }));
            }
          },
        ),
        o("useWAWebListener").useListener(
          $n() ? o("WAWebOutContactCollection").OutContactCollection : null,
          ["add", "change", "remove", "reset"],
          function () {
            var e = dt.current.query;
            xn({ outContacts: e ? Vt(e) : [] });
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatAssignmentCollection").ChatAssignmentCollection,
          "add remove",
          function (e) {
            if (
              o("WAWebChatAssignmentUtils").canAssignChats() &&
              dt.current.filter.kind ===
                o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU
            )
              if (dt.current.query) {
                var t = At.filter(function (t) {
                  return t.chat !== e;
                });
                At && t.length !== At.length && xn({ chats: t });
              } else
                (hn.cancel(), xn({ chats: Mt(void 0, dt.current.filter) }));
          },
        ));
      var Gn = r("useWAWebThrottledCallback")(function (e) {
        if (
          !(
            $n() ||
            (dt.current.filter.kind !==
              o("WAWebChatSearchFilters").SearchFilters.UNREAD &&
              (!o("WAWebChatAssignmentUtils").canAssignChats() ||
                dt.current.filter.kind !==
                  o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU))
          )
        ) {
          hn.cancel();
          var t =
              dt.current.filter.kind ===
              o("WAWebChatSearchFilters").SearchFilters.UNREAD,
            n =
              t &&
              o("WAWebABProps").getABPropConfigValue(
                "wa_web_feature_parity_small_wins",
              );
          n && e && Lt.current.add(e.id.toString());
          var r = Mt(void 0, dt.current.filter, {
            includeActiveChat: !0,
            includeStickyChats: n ? Lt.current : void 0,
          });
          (n &&
            r.forEach(function (e) {
              return Lt.current.add(e.chat.id.toString());
            }),
            e &&
              !n &&
              (r = r.filter(function (t) {
                return t.chat !== e;
              })),
            xn({ chats: r }));
        }
      }, fe.THROTTLE);
      (o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "sort change:archive",
        function () {
          var e;
          if (
            (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebChatlistPanelFunctional: ChatCollection sort/archive event, isSearching: ",
                  ", filter: ",
                  "",
                ])),
              $n(),
              (e = dt.current.filter.kind) != null ? e : "none",
            ),
            !$n())
          ) {
            if (
              dt.current.filter.kind ===
              o("WAWebChatSearchFilters").SearchFilters.UNREAD
            ) {
              Gn();
              return;
            }
            if (
              dt.current.filter.kind ===
              o("WAWebChatSearchFilters").SearchFilters.FAVORITES
            ) {
              zn();
              return;
            }
            hn.cancel();
            var t = Mt(void 0, dt.current.filter),
              n =
                At.length !== t.length ||
                At.some(function (e, n) {
                  var r;
                  return (
                    e.chat.id !== ((r = t[n]) == null ? void 0 : r.chat.id)
                  );
                });
            n && xn(babelHelpers.extends({ chats: t }, void 0));
          }
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
            ? r("WAWebNewsletterCollection")
            : null,
          "change:archive",
          function () {
            if (!$n()) {
              hn.cancel();
              var e = Mt(void 0, dt.current.filter);
              Wn(e) && xn({ chats: e });
            }
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:unreadCount change:isAssignedToMe",
          function () {
            return Gn();
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "close_chat",
          function (e) {
            Gn(e);
          },
        ));
      var zn = r("useWAWebThrottledCallback")(function () {
        if (
          !(
            $n() ||
            dt.current.filter.kind !==
              o("WAWebChatSearchFilters").SearchFilters.FAVORITES
          )
        ) {
          hn.cancel();
          var e = Mt(void 0, dt.current.filter, { includeActiveChat: !1 });
          xn({ chats: e });
        }
      }, fe.THROTTLE);
      (o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "change:isFavorite",
        function () {
          return zn();
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "offline_progress_update_from_bridge offline_delivery_end_from_bridge",
          function () {
            return Fr();
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebContactCollection").ContactCollection,
          "sort",
          Rn,
        ),
        o("useWAWebListener").useListener(
          ut.current,
          "bulk_remove reset",
          function () {
            $n() || (hn.cancel(), xn({ chats: Mt(void 0, dt.current.filter) }));
          },
        ),
        o("useWAWebListener").useListener(
          r("WAWebVoipCallsTabPanelManager"),
          "onWriteCallLogMessage",
          function () {
            (hn.cancel(), gn(!0));
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebMsgCollection").MsgCollection,
          r("WAWebConstantsDeprecated").NEW_MSG_SENT,
          function () {
            $n()
              ? mr().then(function () {
                  return tr();
                })
              : tr();
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:unreadCount",
          function (e) {},
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:archive remove",
          function (e) {},
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "reset",
          function () {},
        ),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "open_modal open_media",
          function () {
            (o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebChatlistPanelFunctional: ModalManager open_modal/open_media event received",
                ])),
            ),
              ve === r("WAWebChatlistPanelMode").Chatlist &&
                o("WAWebABProps").getABPropConfigValue(
                  "inbox_filters_reset_timeout",
                ) > 0 &&
                o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() &&
                (o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate(true) from open_modal/open_media event",
                    ])),
                ),
                Or(!0)));
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "close_modal close_media",
          function () {
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebChatlistPanelFunctional: ModalManager close_modal/close_media event received",
                ])),
            ),
              ve === r("WAWebChatlistPanelMode").Chatlist &&
                o("WAWebABProps").getABPropConfigValue(
                  "inbox_filters_reset_timeout",
                ) > 0 &&
                o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() &&
                (o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate() from close_modal/close_media event",
                    ])),
                ),
                Or()));
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:contact.labels",
          function () {
            o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() &&
              dt.current.filter.kind ===
                o("WAWebChatSearchFilters").SearchFilters.LABELS &&
              dt.current.filter.label != null &&
              (hn.cancel(), xn({ chats: Mt(void 0, dt.current.filter) }));
          },
        ));
      var jn = ae(
          function () {
            var e;
            return !1;
            var t;
            if (Un.current && !((e = Un.current) != null && e.archive)) {
              var n;
              ((qn.current =
                (n + 0.5) * o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT),
                t ||
                  (t = mt.current != null && mt.current.scrollTop > qn.current),
                (Un.current = void 0));
            }
          },
          [Je],
        ),
        Kn = ae(
          function () {
            Je === !0 && ((Un.current = void 0), Ze(!1));
          },
          [Je],
        ),
        Qn = ae(
          function (e) {
            if (!e.active) {
              var t =
                Un.current != null && r("WAWebWid").equals(Un.current.id, e.id);
              e.isDirty() ? t || (Un.current = e) : t && Kn();
            }
          },
          [Kn],
        ),
        Xn = ae(
          function (e) {
            Un.current && r("WAWebWid").equals(Un.current.id, e.id) && Kn();
          },
          [Kn],
        ),
        Yn = ae(function () {
          var e;
          gt.current && ((e = gt.current) == null || e.focusFirst());
        }, []),
        Jn = ae(
          function () {
            var e = bt.current && bt.current.getSelected().length > 0 && !Ce;
            Ve !== e && xn({ showMultiSelectBar: e });
          },
          [Ve, Ce, xn],
        );
      o("useWAWebListener").useListener(bt.current, "all", Jn);
      var Zn = ae(
          function (e) {
            e.key === "ArrowDown" &&
              ((pt.current && !pt.current.cursorIsAtEnd()) ||
                (e == null || e.preventDefault(), Yn()));
          },
          [Yn],
        ),
        er = ae(
          function (e) {
            e !== ze && je(e);
          },
          [ze],
        ),
        tr = ae(
          function () {
            var e = mt.current;
            if (e) {
              var t = e.scrollTop;
              e.scrollTop !== 0 &&
                (t < e.clientHeight
                  ? r("WAWebVelocityAnimate")(e, "scroll", {
                      duration: 300,
                      container: e,
                      offset: -(e.scrollTop + e.getBoundingClientRect().top),
                    })
                  : (e.scrollTop = 0));
            }
          },
          [Kn],
        ),
        nr = ae(
          function () {
            var e = Rt.current;
            return e != null && "searching" in e ? e.searching || !1 : Me;
          },
          [Me],
        ),
        rr = ae(
          function (e) {
            return !ut.current.hasMoreMsgs ||
              nr() ||
              (ve !== r("WAWebChatlistPanelMode").CallsTab &&
                !r("WAFtsIsSearchQueryEligibleForMessageSearch")(
                  dt.current.query || "",
                ))
              ? !1
              : e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >
                  e.scrollHeight - e.clientHeight;
          },
          [nr, ve],
        ),
        or = ae(function (e, t) {
          for (
            var n = new Map(),
              r = function (o) {
                var r = e[o];
                r &&
                  r.forEach(function (e) {
                    e && (n.has(e) || n.set(e, []), n.get(e).push(t[o]));
                  });
              },
              a = 0;
            a < e.length;
            a++
          )
            r(a);
          var i = [];
          return (
            n.forEach(function (e, t) {
              i.push([t, e]);
            }),
            i.sort(function (e, t) {
              return e[1].length === t[1].length
                ? e[0].t != null && t[0].t != null
                  ? t[0].t - e[0].t
                  : e[0].t != null
                    ? -1
                    : 1
                : t[1].length - e[1].length;
            }),
            i.slice(
              0,
              o("WAWebABProps").getABPropConfigValue(
                "web_max_found_common_groups_displayed",
              ),
            )
          );
        }, []),
        ar = ae(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (
                  (o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistPanelFunctional: handleSecretCodeSearch called, searchTextLength: ",
                        ", hideLockedChats: ",
                        "",
                      ])),
                    e.length,
                    ye != null ? ye : !1,
                  ),
                  ye !== !0)
                ) {
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistPanelFunctional: handleSecretCodeSearch early return - hideLockedChats is not true",
                      ])),
                  );
                  return;
                }
                var t = yield o("WAWebChatLockUtils").validateSecretCode(e, {
                  unlockAppOnSuccess: !0,
                  unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint")
                    .UNLOCK_ENTRY_POINT.SEARCH,
                  landingSurface: o("WAWebWamEnumLandingSurface")
                    .LANDING_SURFACE.FOLDER,
                });
                (o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebChatlistPanelFunctional: handleSecretCodeSearch validation result: ",
                      ", lockedChatsEntryPointVisible: ",
                      ", chatLockComponentIsMounted: ",
                      "",
                    ])),
                  t,
                  ot,
                  o("useWAWebChatLockRestriction").chatLockComponentIsMounted(),
                ),
                  !t &&
                    ot &&
                    !o(
                      "useWAWebChatLockRestriction",
                    ).chatLockComponentIsMounted() &&
                    (o("WALogger").LOG(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "WAWebChatlistPanelFunctional: handleSecretCodeSearch locking chats (validation failed)",
                        ])),
                    ),
                    o("WAWebChatLockUtils").lockChats()),
                  o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistPanelFunctional: handleSecretCodeSearch calling debounceSetState, setting lockedChatsEntryPointVisible to: ",
                        "",
                      ])),
                    t,
                  ),
                  xn({ lockedChatsEntryPointVisible: t }));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [ye, ot, xn],
        ),
        ir = ae(
          function () {
            var e,
              t = dt.current;
            t.hasFilter() ||
              !t.query ||
              o("WAWebSearchLogging").logSearchActionTypesAheadShow({
                aiSuggestionsCount: lt.length,
                chatsCount: At.length,
                contactsCount: Wt.length,
                groupsCount: We.length,
                messagesCount:
                  (e = Fe == null ? void 0 : Fe.length) != null ? e : 0,
              });
          },
          [lt, At, Wt, We, Fe],
        ),
        lr = ae(
          function () {
            var e,
              t = At.length,
              n = Wt.length,
              r = (e = Fe == null ? void 0 : Fe.length) != null ? e : 0,
              o = lt.length,
              a = We.length,
              i = ut.current.length;
            return {
              chatsCount: t,
              contactsCount: n,
              messagesCount: r,
              aiSuggestionCount: o,
              groupsInCommonCount: a,
              ftsMessagesCount: i,
            };
          },
          [lt.length, At.length, Wt.length, We.length, Fe],
        );
      ie(
        function () {
          if (dt.current.query) {
            var e = lr(),
              t = e.chatsCount,
              n = e.contactsCount,
              r = e.ftsMessagesCount,
              a = e.groupsInCommonCount,
              i = e.messagesCount;
            ((t > 0 || n > 0 || r > 0 || a > 0 || i > 0) &&
              o("WAWebCoreActionsODS").logGlobalSearchHasResults(),
              o(
                "WAWebSearchUserJourneyLogger",
              ).SearchUserJourneyLogger.resultPageShow(
                babelHelpers.extends({}, e),
              ));
          }
        },
        [lr],
      );
      var sr = ae(
          function () {
            (hn.cancel(),
              yn.cancel(),
              Cn.cancel(),
              bn.cancel(),
              vn.cancel(),
              Sn.cancel(),
              Ln.cancel());
          },
          [hn, yn, Cn, bn, vn, Sn, Ln],
        ),
        ur = ae(
          function () {
            var e, t;
            (gn.cancel(),
              En.cancel(),
              kn.cancel(),
              ut.current.resetSearch(),
              ut.current.reset(),
              (e = kt.current) == null || e.abort(),
              (t = Tt.current) == null || t.abort(),
              qe([]),
              nr() && xn({ searching: !1 }, _e));
          },
          [En, xn, gn, nr, kn],
        ),
        cr = ae(
          function (e, t) {
            var n = e || dt.current.query;
            ve === r("WAWebChatlistPanelMode").CallsTab ||
            r("WAFtsIsSearchQueryEligibleForMessageSearch")(n) ||
            (t != null && t.label)
              ? (Me ||
                  oe(function () {
                    we(!0);
                  }),
                gn())
              : nr()
                ? ur()
                : ut.current.reset();
          },
          [ve, nr, Me, gn, ur],
        ),
        dr = r("useWAWebCallbackAfterRender")([At, Wt, en, on, un, pn, Me, lt]),
        mr = ae(
          function () {
            return new (ee || (ee = n("Promise")))(function (e) {
              if (
                (o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebChatlistPanelFunctional: handleStopSearch called",
                    ])),
                ),
                Nt(dt.current.filter) ||
                  o("WAWebFilterLogging").logSearchWithFilterEvent(
                    St.current.sessionId,
                  ),
                ur(),
                dt.current.clear(),
                sr(),
                pt.current != null &&
                  (pt.current.clearSearch == null || pt.current.clearSearch()),
                dr(e),
                $t.aborted)
              ) {
                o("WALogger").LOG(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebChatlistPanelFunctional: Skipping setState in handleStopSearch because component is unmounting",
                    ])),
                );
                return;
              }
              (o("WALogger").LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: Proceeding with setState in handleStopSearch, updating 8 fields",
                  ])),
              ),
                Tn({
                  chats: Mt(),
                  contacts: Ot(),
                  outContacts: [],
                  actions: Jt(),
                  debugCommands: nn(),
                  communities: ln(),
                  settingsCommands: dn(),
                  searching: !1,
                  aiSuggestions: [],
                }));
            });
          },
          [Nt, ur, sr, Tn, Mt, Ot, Jt, nn, ln, dn, dr, $t.aborted],
        ),
        pr = ae(
          function (e, t) {
            var n;
            if (
              (o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: handleSearch called hasSearchText: ",
                    ", hasLabel: ",
                    ", filterKind: ",
                    "",
                  ])),
                !!e,
                !!(t != null && t.label),
                (n = t == null ? void 0 : t.kind) != null ? n : "none",
              ),
              In(e),
              Yt(e),
              ve !== r("WAWebChatlistPanelMode").CallsTab && !e && Nt(t))
            ) {
              (o("WALogger").LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: handleSearch clearing search (empty text and no filter)",
                  ])),
              ),
                ir(),
                dt.current.updateQuery(e),
                dt.current.updateLabelQuery({}),
                mr());
              return;
            }
            var a = dt.current.query;
            if (
              ve !== r("WAWebChatlistPanelMode").CallsTab &&
              dt.current.equals(e, t)
            ) {
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: handleSearch query unchanged, skipping",
                  ])),
              );
              return;
            }
            (dt.current.updateQuery(e),
              dt.current.updateLabelQuery(t),
              $n()
                ? (Ct.current.setScrollFromStart(0),
                  cr(e, t),
                  En(),
                  kn(),
                  hn(e, t),
                  yn(e, t),
                  Cn(e),
                  bn(e),
                  vn(e),
                  Sn(e))
                : (a && !e && mr(), Ft(Mt(void 0, t))));
          },
          [In, ve, Nt, $n, ir, mr, cr, En, kn, hn, yn, Cn, bn, vn, Sn, Mt],
        ),
        _r = ue(pr);
      (ie(
        function () {
          (o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebChatlistPanelFunctional: useEffect[handleSearchRef] running, updating ref with latest handleSearch",
              ])),
          ),
            (_r.current = pr));
        },
        [pr],
      ),
        ie(function () {
          if (
            (o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebChatlistPanelFunctional: useEffect[mount] running (component mount), mode: ",
                  ", hasLabelFilter: ",
                  "",
                ])),
              ve,
              !!be,
            ),
            ve === r("WAWebChatlistPanelMode").CallsTab &&
              (o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: useEffect[mount] initializing CallsTab search",
                  ])),
              ),
              pr("")),
            ve === r("WAWebChatlistPanelMode").CommandPalette &&
              (o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: useEffect[mount] initializing CommandPalette",
                  ])),
              ),
              o("WAWebCommandCollection").CommandCollection.reset(),
              o(
                "WAWebCommandCollection",
              ).CommandCollection.initializeCommands()),
            be &&
              (o("WALogger").LOG(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: useEffect[mount] initializing labelFilter search",
                  ])),
              ),
              pr("", { label: be })),
            o("WAWebChatCollection").ChatCollection.some(function (e) {
              return o("WAWebChatGetters").getIsBroadcast(e);
            }))
          ) {
            var e = At.some(function (e) {
                var t = e.chat;
                return o("WAWebChatGetters").getIsBroadcast(t);
              }),
              t = At.filter(function (e) {
                var t = e.chat;
                return o("WAWebChatGetters").getIsBroadcast(t);
              }).length,
              n = o("WAWebChatCollection").ChatCollection.some(function (e) {
                var t, n;
                return (
                  o("WAWebChatGetters").getIsBroadcast(e) &&
                  ((t =
                    (n = e.broadcastMetadata) == null ||
                    (n = n.recipients) == null
                      ? void 0
                      : n.length) != null
                    ? t
                    : 0) === 0
                );
              }),
              a = o("WAWebChatCollection").ChatCollection.some(function (e) {
                var t, n;
                return (
                  o("WAWebChatGetters").getIsBroadcast(e) &&
                  ((t =
                    (n = e.broadcastMetadata) == null ||
                    (n = n.recipients) == null
                      ? void 0
                      : n.length) != null
                    ? t
                    : 0) !== 0
                );
              });
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.broadcastChatListItemViewed(
              e,
              t,
              n,
              a,
              o(
                "WAWebBizBroadcastDeviceCapabilityCommon",
              ).getPrimarySupportsBusinessBroadcast(),
            );
          }
        }, []));
      var fr = ae(function () {
          return !!dt.current.query;
        }, []),
        gr = ae(
          function (e, t) {
            if (
              (t != null &&
                o("WAWebContactGetters").getIsMe(t.contact) &&
                o(
                  "WAWebMessageYourselfMetricUtils",
                ).UiMessageYourselfSearchAction.logMessageYourselfOpenedEvent(
                  t,
                  $n(),
                ),
              o("WAWebBizGatingUtils").smartFiltersEnabled() &&
                !be &&
                (!Nt(dt.current.filter) || fr()))
            ) {
              var n = dt.current.filter,
                r = St.current.sessionId;
              (o("WAWebFilterLogging").logSearchItemSelectedFilterEvent(
                r,
                n,
                e,
                t == null ? void 0 : t.id,
              ),
                t &&
                  o(
                    "WAWebComposeBoxActions",
                  ).ComposeBoxActions.addMsgSendingLogAttributes(t, {
                    handleOnce: function () {
                      o("WAWebFilterLogging").logSearchMsgSentFilterEvent(
                        r,
                        n,
                        e,
                        t.id,
                      );
                    },
                  }));
            }
          },
          [be, $n, Nt, fr],
        ),
        hr = ae(function (e) {
          (e == null || e.preventDefault(),
            r("WAWebFocusTracer").focus(_t.current));
        }, []),
        yr = ae(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                (yield o("WAWebChatlistUtils").openExistingChat(t.id, n, r),
                  gr("message", t));
              },
            );
            return function (t, n, r, o) {
              return e.apply(this, arguments);
            };
          })(),
          [gr],
        ),
        Cr = ae(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o("WAWebFrontendContactGetters").getIsMyContact(
                    t.contact,
                  ),
                  r = n
                    ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
                        .CLICK_ON_CONTACT_WITH_EXISTING_CHAT
                    : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
                        .CLICK_ON_NON_CONTACT_WITH_EXISTING_CHAT;
                (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                  contactSearchEntrypoint: o(
                    "WAWebWamEnumContactSearchEntrypoint",
                  ).CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                  searchActionName: r,
                  searchStartsWithAt: dt.current.query.startsWith("@"),
                }),
                  o("WALogger").LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistPanelFunctional: handleChatClick, isSearching: ",
                        "",
                      ])),
                    $n(),
                  ),
                  $n() &&
                    o(
                      "WAWebSearchZeroStateGatingUtils",
                    ).isSearchZeroStateEnabled() &&
                    o("WAWebUseRecentlySearchedChats").addChatToRecentSearches(
                      t.id.toString(),
                    ));
                var a =
                    (yield o("WAWebChatlistUtils").openExistingChat(t.id)) !=
                    null,
                  i = a
                    ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
                        .INITIATION_SUCCESS
                    : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
                        .INITIATION_FAILURE;
                (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                  contactSearchEntrypoint: o(
                    "WAWebWamEnumContactSearchEntrypoint",
                  ).CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                  searchActionName: i,
                  searchStartsWithAt: dt.current.query.startsWith("@"),
                }),
                  o("WAWebChatGetters").getIsBroadcast(t)
                    ? gr("broadcast_list", t)
                    : o("WAWebChatGetters").getIsGroup(t)
                      ? (new (o(
                          "WAWebCommunityGroupJourneyEventImpl",
                        ).CommunityGroupJourneyEvent)({
                          action: o("WAWebWamEnumChatFilterActionTypes")
                            .CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
                          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                            .CHATLIST,
                          chat: t,
                        }).commit(),
                        gr("group", t))
                      : gr("chat", t));
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          [gr, $n],
        ),
        br = ae(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o("WAWebFrontendContactGetters").getIsMyContact(t),
                  a = n
                    ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
                        .CLICK_ON_CONTACT
                    : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
                        .CLICK_ON_NON_CONTACT;
                o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                  contactSearchEntrypoint: o(
                    "WAWebWamEnumContactSearchEntrypoint",
                  ).CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                  searchActionName: a,
                  searchStartsWithAt: dt.current.query.startsWith("@"),
                });
                var i = yield o("WAWebChatlistUtils").openOrCreateLatestChat(
                    t.id,
                  ),
                  l =
                    i != null
                      ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
                          .INITIATION_SUCCESS
                      : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
                          .INITIATION_FAILURE;
                (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                  contactSearchEntrypoint: o(
                    "WAWebWamEnumContactSearchEntrypoint",
                  ).CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                  searchActionName: l,
                  searchStartsWithAt: dt.current.query.startsWith("@"),
                }),
                  gr("contact", i),
                  ve === r("WAWebChatlistPanelMode").CallsTab &&
                    o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          [ve, gr],
        ),
        vr = r("useWAWebStableCallback")(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                if ((e.preventDefault(), e.stopPropagation(), Bn != null)) {
                  var n = Xt.startsWith("@"),
                    r = Bn.isUsernameSearch;
                  o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                    contactSearchEntrypoint: o(
                      "WAWebWamEnumContactSearchEntrypoint",
                    ).CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                    searchActionName: o("WAWebWamEnumSearchActionName")
                      .SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT,
                    isUsernameSearch: r,
                    searchStartsWithAt: n,
                  });
                  var a;
                  if ((Bn == null ? void 0 : Bn.wid) == null) {
                    o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                      contactSearchEntrypoint: o(
                        "WAWebWamEnumContactSearchEntrypoint",
                      ).CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                      searchActionName: o("WAWebWamEnumSearchActionName")
                        .SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION,
                      isUsernameSearch: r,
                      searchStartsWithAt: n,
                    });
                    var i = function () {
                      o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                        contactSearchEntrypoint: o(
                          "WAWebWamEnumContactSearchEntrypoint",
                        ).CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                        searchActionName: o("WAWebWamEnumSearchActionName")
                          .SEARCH_ACTION_NAME.PIN_VERFICATION_ERROR_SHOWN,
                        isUsernameSearch: r,
                        searchStartsWithAt: n,
                      });
                    };
                    if (
                      ((a = yield o(
                        "WAWebUsernameKeyVerificationFlow",
                      ).usernameKeyVerificationFlow({
                        username: Bn.username,
                        initWithError: Bn.triedKey,
                        onInvalidKeyError: i,
                      })),
                      a == null)
                    )
                      return;
                  } else a = Bn.wid;
                  var l =
                    (t = Bn == null ? void 0 : Bn.chat) != null
                      ? t
                      : yield o("WAWebChatlistUtils").openOrCreateLatestChat(a);
                  o(
                    "WAWebSearchUserJourneyLogger",
                  ).SearchUserJourneyLogger.resultItemClick(
                    babelHelpers.extends(
                      {
                        item: l,
                        itemTypeOverride: o("WAWebWamEnumSearchUjItemType")
                          .SEARCH_UJ_ITEM_TYPE.UNKNOWN_CONTACT,
                      },
                      lr(),
                    ),
                  );
                  var s = yield o("WAWebCmd").Cmd.openChatFromUnread({
                      chat: l,
                    }),
                    u = s
                      ? o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
                          .INITIATION_SUCCESS
                      : o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
                          .INITIATION_FAILURE;
                  (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                    contactSearchEntrypoint: o(
                      "WAWebWamEnumContactSearchEntrypoint",
                    ).CONTACT_SEARCH_ENTRYPOINT.CHATS_LIST_GLOBAL_SEARCH,
                    searchActionName: u,
                    isUsernameSearch: r,
                    searchStartsWithAt: n,
                  }),
                    s &&
                      o("WAWebComposeBoxActions").ComposeBoxActions.focus(l));
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        Sr = ae(
          function (e, t, a, i) {
            var l;
            (e.preventDefault(),
              e.stopPropagation(),
              o("WAWebSearchLogging").logSearchActionTypeAheadItemClick(t, i));
            var s;
            if (t instanceof r("WAWebContactModel")) {
              var u = t.id.toString();
              !Wt.some(function (e) {
                return e.contact.id.toString() === u;
              }) &&
                o("WAWebABProps").getABPropConfigValue(
                  "contacts_from_common_groups_section_enabled",
                ) &&
                (s = o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE
                  .CONTACT_FROM_COMMON_GROUP);
            } else
              t instanceof o("WAWebChatModel").Chat &&
                ((l = t.groupMetadata) == null ? void 0 : l.groupType) ===
                  o("WAWebGroupType").GroupType.COMMUNITY &&
                (s = o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE
                  .COMMUNITY);
            var c = lr();
            if (
              (o(
                "WAWebSearchUserJourneyLogger",
              ).SearchUserJourneyLogger.resultItemClick(
                babelHelpers.extends(
                  { item: i != null ? i : t, itemTypeOverride: s },
                  c,
                ),
              ),
              Te && Te(),
              ve === r("WAWebChatlistPanelMode").CommandPalette &&
                o("WAWebModalManager").ModalManager.close(),
              t instanceof o("WAWebMsgModel").Msg)
            ) {
              var d = o("WAWebFrontendMsgGetters").getChat(t);
              d.getEventMsgs().initialize();
              var m = o("WAWebChatMessageSearch").getSearchContext({
                chat: d,
                msgKey: t.id,
              });
              ((m.msg = t), yr(e, d, m));
            } else if (t instanceof o("WAWebChatModel").Chat) {
              var p;
              (t.getEventMsgs().initialize(),
                a != null
                  ? yr(e, t, a, i)
                  : ((p = t.groupMetadata) == null ? void 0 : p.groupType) ===
                      o("WAWebGroupType").GroupType.COMMUNITY
                    ? o("WAWebCmd").Cmd.openCommunityHome(t.id, !1)
                    : Cr(e, t));
            } else if (t instanceof r("WAWebContactModel")) br(e, t);
            else if (t instanceof r("WAWebCommandModel"))
              switch (t.type) {
                case "setting": {
                  o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                    o(
                      "WAWebAdaptiveLayoutGatingUtils",
                    ).shouldUseDrawerDescriptor()
                      ? {
                          descriptorType: "settings",
                          initialStep: o(
                            "WAWebSettingsConst",
                          ).SettingsSteps.cast(t.id),
                        }
                      : ne.jsx(
                          o("WAWebSettingsFlowLoadable").SettingsFlowLoadable,
                          {
                            initialStep: o(
                              "WAWebSettingsConst",
                            ).SettingsSteps.cast(t.id),
                          },
                        ),
                  );
                  break;
                }
                case "action": {
                  r("WAWebKeyboardRun")(t.name);
                  break;
                }
              }
            else
              !r("gkx")("26258") &&
                n("cr:5932") &&
                t instanceof n("cr:5932") &&
                (me == null || me(t));
          },
          [Wt, lr, Te, ve, yr, Cr, br],
        ),
        Rr = ae(
          function (e) {
            var t,
              n,
              r,
              o,
              a,
              i,
              l,
              s,
              u = dt.current.query,
              c = dt.current.filter,
              d =
                (t =
                  (n =
                    (r =
                      (o =
                        (a = (i = nn(u)[0]) != null ? i : Jt(u)[0]) != null
                          ? a
                          : dn(u)[0]) != null
                        ? o
                        : ln(u)[0]) != null
                      ? r
                      : (l = Mt(u, c)[0]) == null
                        ? void 0
                        : l.chat) != null
                    ? n
                    : (s = Ot({ searchText: u, filter: c })[0]) == null
                      ? void 0
                      : s.contact) != null
                  ? t
                  : ut.current.at(0);
            d && Sr(e, d);
          },
          [nn, Jt, dn, ln, Mt, Ot, Sr],
        ),
        Lr = o("WAWebDrawerManagerContext").useDrawerManagerContext("left"),
        Er = ae(
          function () {
            var e,
              t,
              n = (e = Lr.existsDrawer()) != null ? e : !1;
            (n && ve !== r("WAWebChatlistPanelMode").CommandPalette) ||
              (r("WAWebFocusTracer").focus(pt.current),
              (t = pt.current) == null || t.focus == null || t.focus());
          },
          [ve, Lr],
        );
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "focus_chat_search",
        Er,
      );
      var kr = ae(
          function (e) {
            e.target instanceof HTMLElement && Ln(e.target);
          },
          [Ln],
        ),
        Ir = ae(function () {
          var e;
          (e = pt.current) == null || e.clearFilter();
        }, []),
        Tr = ae(function () {
          var e;
          (e = pt.current) == null || e.focus == null || e.focus();
        }, []),
        Dr = ae(
          function (e) {
            if (
              (At != null && At.length) ||
              (Wt != null && Wt.length) ||
              (Gt != null && Gt.length) ||
              e.length ||
              (Fe != null && Fe.length) ||
              (un != null && un.length) ||
              (on != null && on.length) ||
              (en != null && en.length) ||
              (pn != null && pn.length) ||
              (lt != null && lt.length) ||
              Bn != null ||
              (We != null && We.length)
            )
              return [null, null];
            if (be)
              return Me
                ? [ne.jsx("span", {}, "null"), null]
                : [
                    ne.jsx(
                      o("WAWebEmptyState.react").NoResultForLabel,
                      { labelId: be },
                      "no-result-for-label",
                    ),
                    o("WAWebEmptyState.react").noResultForLabelFbt(be),
                  ];
            if (dt.current.query)
              return Me
                ? [
                    ne.jsx(
                      o("WAWebEmptyState.react").Searching,
                      {},
                      "searching",
                    ),
                    o("WAWebEmptyState.react").searchingFbt(),
                  ]
                : [
                    ne.jsx(
                      o("WAWebEmptyState.react").Search,
                      { hasFilter: dt.current.hasFilter(), onClearFilter: Ir },
                      "search",
                    ),
                    o("WAWebEmptyState.react").searchFbt(),
                  ];
            var t = dt.current.filter.kind;
            if (
              !$n() &&
              t != null &&
              [
                o("WAWebChatSearchFilters").SearchFilters.UNREAD,
                o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU,
              ]
                .concat(
                  o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()
                    ? [
                        o("WAWebChatSearchFilters").SearchFilters.CONTACT,
                        o("WAWebChatSearchFilters").SearchFilters.GROUP,
                        o("WAWebChatSearchFilters").SearchFilters.LABELS,
                        o("WAWebChatSearchFilters").SearchFilters.COMMUNITY,
                      ]
                    : [],
                )
                .concat(
                  o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
                    ? [o("WAWebChatSearchFilters").SearchFilters.FAVORITES]
                    : [],
                )
                .includes(t)
            ) {
              var n,
                r =
                  (n = o("WAWebEmptyState.react").getNoFilteredChatsStrings(
                    t,
                  )) == null
                    ? void 0
                    : n.title;
              return [
                ne.jsx(
                  o("WAWebEmptyState.react").NoFilteredChats,
                  {
                    filter: dt.current.filter,
                    filterSession: St.current,
                    onClearFilter: Ir,
                    onShowSearch: Tr,
                  },
                  "no-filtered-chats",
                ),
                r,
              ];
            }
            return o("WAWebChatCollection").ChatCollection.some(function (e) {
              return o("WAWebFrontendChatGetters").getShouldAppearInList(e);
            })
              ? [
                  ne.jsx(
                    o("WAWebEmptyState.react").AllArchived,
                    {},
                    "all-archived",
                  ),
                  o("WAWebEmptyState.react").allArchivedFbt(),
                ]
              : [
                  ne.jsx(
                    o("WAWebEmptyState.react").ListChats,
                    {},
                    "list-chats",
                  ),
                  o("WAWebEmptyState.react").listChatsFbt(),
                ];
          },
          [
            At,
            Wt,
            Fe,
            un,
            on,
            en,
            pn,
            lt,
            Me,
            be,
            $n,
            Ir,
            Tr,
            Bn,
            We,
            Gt.length,
          ],
        ),
        xr = ae(function (e) {
          mt.current = e;
        }, []),
        $r = ae(
          function () {
            (xn({ showMultiSelectBar: !1 }),
              bt.current && bt.current.unsetAll(),
              vt.current && vt.current.setSelectable(!!ke),
              he == null || he());
          },
          [xn, ke, he],
        ),
        Pr = ae(
          function () {
            return !1;
          },
          [Je],
        ),
        Nr = function () {
          return (
            o("WAWebChatCollection").ChatCollection.some(function (e) {
              return (
                e.archive &&
                o("WAWebFrontendChatGetters").getShouldAppearInList(e)
              );
            }) ||
            (o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled() &&
              r("WAWebNewsletterCollection").some(function (e) {
                return e.archive;
              }))
          );
        },
        Mr = ae(
          function () {
            var e;
            return !!(
              ve === r("WAWebChatlistPanelMode").Chatlist &&
              Ie === !0 &&
              !Ve &&
              dt.current.isEmptyQuery() &&
              !dt.current.hasFilter() &&
              At &&
              At.length > 0 &&
              ((e = vt.current) == null ? void 0 : e.isSelectable) !== !0 &&
              Nr()
            );
          },
          [ve, Ie, Ve, At],
        ),
        wr = ae(
          function () {
            return o("WAWebChatlistPanelUtils").shouldShowLockedChatsPanel({
              mode: ve,
              selectableState: vt.current,
              showMultiSelectBar: Ve,
              hideLockedChats: ye === !0,
              lockedChatsEntryPointVisible: ot,
              searchQuery: dt.current,
            });
          },
          [ve, ye, Ve, ot],
        ),
        Ar = ae(function () {
          o("WAWebBizGatingUtils").smartFiltersEnabled() &&
            o("WAWebFilterLogging").logSearchFilterEvent(
              St.current.sessionId,
              dt.current.filter,
            );
        }, []),
        Fr = ae(
          function () {
            xn({
              showOfflineToastbar:
                o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.getResumeUIProgressBarType() ===
                o("WAWebOfflineResumeTypes.flow").ResumeUIProgressBarType
                  .Toastbar,
            });
          },
          [xn],
        ),
        Or = ae(
          function (e) {
            var t;
            if (
              (e === void 0 && (e = !1),
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: handleChatlistDisplayUpdate called, open: ",
                    ", chatlistHidden: ",
                    ", filterKind: ",
                    "",
                  ])),
                e,
                Hn.current,
                (t = dt.current.filter.kind) != null ? t : "none",
              ),
              o("WAWebCmd").Cmd.chatListVisibilityChange(!e),
              !dt.current.filter.kind)
            ) {
              o("WALogger").LOG(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistDisplayUpdate: Early return - no filter selected",
                  ])),
              );
              return;
            }
            if (e && Hn.current) {
              o("WALogger").LOG(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistDisplayUpdate: Early return - chatlist already hidden",
                  ])),
              );
              return;
            }
            var a = new (ee || (ee = n("Promise")))(function (e) {
                self.setTimeout(function () {
                  var t,
                    n = (t = Lr.existsDrawer()) != null ? t : !1;
                  e(n);
                }, 0);
              }),
              i = new ee(function (e) {
                self.setTimeout(function () {
                  return o("WAWebModalManager").ModalManager.exists(e);
                }, 0);
              }),
              l = new ee(function (e) {
                self.setTimeout(function () {
                  return o("WAWebModalManager").ModalManager.existsMedia(e);
                }, 0);
              });
            ee.all([a, i, l])
              .then(function (e) {
                var t = e[0],
                  n = e[1],
                  a = e[2];
                if ($t.aborted) {
                  o("WALogger").LOG(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistDisplayUpdate: Unmount signal aborted, skipping processing",
                      ])),
                  );
                  return;
                }
                var i = t || n || a;
                if (
                  (o("WALogger").LOG(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistDisplayUpdate: Checked overlays - drawer: ",
                        ", modal: ",
                        ", media: ",
                        ", hovered: ",
                        "",
                      ])),
                    t,
                    n,
                    a,
                    i,
                  ),
                  i)
                )
                  (o("WALogger").LOG(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistDisplayUpdate: Marking chatlist as hidden (user left chats screen)",
                      ])),
                  ),
                    (Hn.current = !0));
                else if (Hn.current)
                  if (
                    (o("WALogger").LOG(
                      G ||
                        (G = babelHelpers.taggedTemplateLiteralLoose([
                          "WAWebChatlistDisplayUpdate: Marking chatlist as visible (user returned to chats screen)",
                        ])),
                    ),
                    (Hn.current = !1),
                    Vn.current != null)
                  ) {
                    var l = Date.now() - r("WANullthrows")(Vn.current),
                      s =
                        o("WAWebABProps").getABPropConfigValue(
                          "inbox_filters_reset_timeout",
                        ) * 1e3;
                    (o("WALogger").LOG(
                      z ||
                        (z = babelHelpers.taggedTemplateLiteralLoose([
                          "WAWebChatlistDisplayUpdate: Filters set timespan: ",
                          "ms, reset timeout: ",
                          "ms",
                        ])),
                      l,
                      s,
                    ),
                      l >= s
                        ? (o("WALogger").LOG(
                            j ||
                              (j = babelHelpers.taggedTemplateLiteralLoose([
                                "WAWebChatlistDisplayUpdate: Resetting filters via handleSearchRef.current (timeout exceeded)",
                              ])),
                          ),
                          _r.current(dt.current.query, { kind: null }))
                        : o("WALogger").LOG(
                            K ||
                              (K = babelHelpers.taggedTemplateLiteralLoose([
                                "WAWebChatlistDisplayUpdate: Filters NOT reset (timeout not exceeded)",
                              ])),
                          ));
                  } else
                    o("WALogger").LOG(
                      Q ||
                        (Q = babelHelpers.taggedTemplateLiteralLoose([
                          "WAWebChatlistDisplayUpdate: No filter set time tracked",
                        ])),
                    );
                else
                  o("WALogger").LOG(
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebChatlistDisplayUpdate: Chatlist remains visible (no state change)",
                      ])),
                  );
              })
              .catch(r("WAWebNoop"));
          },
          [Lr, $t.aborted],
        ),
        Br = ae(
          function () {
            if (fr()) return !0;
            var e = o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled();
            if (e === !1 && dt.current.hasLabelFilter()) return !0;
            if (dt.current.filter.kind == null) return !1;
            var t = e
              ? o("WAWebChatSearchFilters")
                  .isFilterExcludedFromSearchTreatmentInInboxFlow
              : o("WAWebChatSearchFilters")
                  .isFilterExcludedFromSearchTreatmentInNormalFlow;
            return !t(dt.current.filter.kind);
          },
          [fr],
        ),
        Wr = ae(
          function () {
            ve === r("WAWebChatlistPanelMode").Chatlist &&
              o("WAWebABProps").getABPropConfigValue(
                "inbox_filters_reset_timeout",
              ) > 0 &&
              o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() &&
              (o("WALogger").LOG(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate(true) from handleDrawerOpenLeft",
                  ])),
              ),
              Or(!0));
          },
          [ve, Or],
        ),
        qr = ae(
          function () {
            ve === r("WAWebChatlistPanelMode").Chatlist &&
              o("WAWebABProps").getABPropConfigValue(
                "inbox_filters_reset_timeout",
              ) > 0 &&
              o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() &&
              (o("WALogger").LOG(
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebChatlistPanelFunctional: Calling handleChatlistDisplayUpdate() from handleLeftDrawerClose",
                  ])),
              ),
              Or());
          },
          [ve, Or],
        );
      le(
        ge,
        function () {
          return {
            containsDOMNode: function (t) {
              return ht.current ? ht.current.contains(t) : !1;
            },
            onLeftDrawerOpen: Wr,
            onLeftDrawerClose: qr,
          };
        },
        [Wr, qr],
      );
      var Ur = ut.current.toArray(),
        Vr = Dr(Ur),
        Hr = Vr[1],
        Gr = Vr[0],
        zr,
        jr = o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled(),
        Kr = Br();
      if (
        Gr == null &&
        (ve === r("WAWebChatlistPanelMode").CallsTab ||
          ve === r("WAWebChatlistPanelMode").Chatlist ||
          (ve === r("WAWebChatlistPanelMode").CommandPalette &&
            dt.current.query.length > 0))
      ) {
        var Qr,
          Xr = o(
            "WAWebAdaptiveLayoutGatingUtils",
          ).shouldUseFunctionalChatlist(),
          Yr = {
            flatListController: Ct.current,
            chats: At.map(function (e) {
              var t = e.chat;
              return t;
            }),
            contacts:
              (Wt == null
                ? void 0
                : Wt.map(function (e) {
                    var t = e.contact;
                    return t;
                  })) || [],
            contactSearchMatches: Ut,
            messages: Fe || [],
            actions: en || [],
            debugCommands: on || [],
            communities: un || [],
            settings: pn || [],
            filterPreset: Qe,
            commonGroups: We,
            isSearching: Kr,
            isSearchInputFocused: !!(
              (Qr = pt.current) != null && Qr.hasFocus()
            ),
            searchQuery: dt.current,
            ftsResult: Ur,
            selection: ct.current,
            onFocusSearch: Er,
            multiSelection: bt.current,
            onStartMultiSelect: er,
            selectableState: vt.current,
            onItemClick: Sr,
            onFocusFilters: hr,
            mode: ve,
            aiSuggestions: lt,
          };
        Xr
          ? (Gr = ne.jsx(
              r("WAWebChatlistFunctional.react"),
              babelHelpers.extends({}, Yr, {
                outContacts: Gt,
                outContactSearchMatches: jt,
                chatSearchMatches: Kt,
                ref: gt,
              }),
            ))
          : (Gr = ne.jsx(
              r("WAWebChatlist_DEPRECATED.react"),
              babelHelpers.extends({}, Yr, { chatSearchMatches: Kt, ref: gt }),
            ));
      }
      (tt === !0 &&
        (zr = ne.jsx(r("WAWebOfflineResumeProgressToastbar.react"), {})),
        zr == null &&
          Gr != null &&
          ve === r("WAWebChatlistPanelMode").Chatlist &&
          (zr = $n()
            ? ne.jsx(r("WAWebDesktopUpsellSearchToastbar.react"), {})
            : ne.jsx(r("WAWebDesktopUpsellChatlistToastbar.react"), {})));
      var Jr =
          (Me && be) || (Me && ut.current.length)
            ? ne.jsx(
                "div",
                {
                  className: "_ak9o",
                  children: ne.jsx(o("WAWebSpinner.react").Spinner, {
                    stroke: 6,
                    size: 24,
                  }),
                },
                "spinner",
              )
            : null,
        Zr = ve === r("WAWebChatlistPanelMode").CommandPalette,
        eo = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ak9p",
          ((a = {}), (a._ak9q = Zr), (a._ak9s = Zr), a),
        ),
        to = (ut.current.hasMoreMsgs && gn.length) || Pr() ? kr : void 0,
        no,
        ro = null,
        oo,
        ao = ae(function (e) {
          var t;
          (dt.current.filter.kind ===
            o("WAWebChatSearchFilters").SearchFilters.UNREAD &&
            e.kind !== o("WAWebChatSearchFilters").SearchFilters.UNREAD &&
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_feature_parity_small_wins",
            ) &&
            Lt.current.clear(),
            (Vn.current = e.kind == null ? void 0 : Date.now()),
            o("WALogger").LOG(
              Z ||
                (Z = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebChatlistPanelFunctional: Calling handleSearch from handleFilterChange, hasQuery: ",
                  ", filterKind: ",
                  "",
                ])),
              !!dt.current.query,
              (t = e.kind) != null ? t : "none",
            ),
            _r.current(dt.current.query, e));
        }, []),
        io,
        lo;
      if (
        Ve ||
        ze ===
          o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint
            .ChatListHeaderDropdown
      ) {
        var so =
          o("WAWebConnModel").Conn.isSMB &&
          (ze !==
            o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint
              .ChatListHeaderDropdown ||
            !o("WAWebABProps").getABPropConfigValue(
              "wa_web_feature_parity_small_wins",
            ));
        ((no = ne.jsx(
          o("WAWebUimUie.react").UIE,
          {
            displayName: "MultiSelect",
            escapable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: $r,
            children: so
              ? ne.jsx(r("WAWebMixedMultiSelectBar.react"), {
                  theme: "chatlist-panel",
                  selectedModels: bt.current,
                  labelEditEnabled:
                    ze ===
                    o("WAWebMultiSelectEntryPointConstants")
                      .MultiSelectEntryPoint.Label,
                  multiSelectEntryPoint: ze,
                  onCancel: $r,
                })
              : ne.jsx(r("WAWebConsumerMultiSelectBar.react"), {
                  selectedModels: bt.current,
                  onCancel: $r,
                }),
          },
          "multiSelectBar",
        )),
          (Hr = Hr == null && no != null ? u._(/*BTDS*/ "Select Chats") : Hr));
      } else
        ((oo = ne.jsx("div", {
          ref: ft,
          className: "_ak9t",
          children: ne.jsx(o("WAWebChatListSearch.react").ListSearch, {
            ref: yt,
            handleKeyDown: Zn,
            onSearch: pr,
            onEnter: Rr,
            filterSession: St.current,
            listFilterEnabled:
              ve === r("WAWebChatlistPanelMode").Chatlist && !jr,
            chatlistFilterEnabled:
              ve === r("WAWebChatlistPanelMode").Chatlist && !jr,
            inboxFiltersEnabled:
              ve === r("WAWebChatlistPanelMode").Chatlist && jr,
            inboxFilter: dt.current.filter,
            aiSuggestionsEnabled: te,
            logSearchActionEvents: te,
            focusOnMount: ve === r("WAWebChatlistPanelMode").CommandPalette,
            mode: ve,
            borderBottom:
              ve === r("WAWebChatlistPanelMode").CallsTab ? !1 : void 0,
            showPlaceholderUntilType: !0,
            usernameSearchEnabled: xe === !0,
            tsSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_LIST,
            searchZeroStateAllowed: ve === r("WAWebChatlistPanelMode").Chatlist,
          }),
        })),
          ve === r("WAWebChatlistPanelMode").Chatlist &&
            jr &&
            (io = ne.jsx(o("WAWebChatListFilters.react").ChatListFilters, {
              ref: _t,
              filter: dt.current.filter,
              filterSession: St.current,
              onFilterChange: ao,
            })));
      if (!be) {
        var uo;
        !r("gkx")("26258") &&
          Je === !0 &&
          (uo = ne.jsx("div", {
            className: "_ak9u",
            children: ne.jsxs("div", {
              className: "_ak9v",
              onClick: tr,
              role: "button",
              children: [
                ne.jsx("span", {
                  className: "xqf2s3x",
                  children: ne.jsx(
                    o("WAWebChevronCustomIcons").ChevronUpCustomIcon,
                    { xstyle: de.unreadIcon, height: 19, displayInline: !0 },
                  ),
                }),
                u._(/*BTDS*/ "Unread messages"),
              ],
            }),
          }));
        var co =
          ve === r("WAWebChatlistPanelMode").CallsTab || Zr || Kr || no
            ? null
            : ne.jsx(r("WAWebChatlistBanners.react"), {});
        ro = ne.jsxs(ne.Fragment, { children: [oo, io, co, no, null] });
      }
      Mr() && (lo = ne.jsx(r("WAWebChatArchivedEntryPoint.react"), {}));
      var mo;
      wr() &&
        (mo = ne.jsx(r("WAWebChatLockedEntryPoint.react"), {
          onOpen: function () {
            mr();
          },
        }));
      var po = null,
        _o = ((i = dt.current) == null ? void 0 : i.query) || "";
      if (Kr && (Nn || Mn) && _o) {
        var fo =
          !Wt.some(function (e) {
            var t = e.contact;
            return (
              t.id.equals(Bn == null ? void 0 : Bn.wid) ||
              t.username === (Bn == null ? void 0 : Bn.username)
            );
          }) &&
          !At.some(function (e) {
            var t = e.chat;
            return (
              t.id.equals(Bn == null ? void 0 : Bn.wid) ||
              t.contact.username === (Bn == null ? void 0 : Bn.username)
            );
          });
        Fn
          ? (po = ne.jsx(
              "div",
              {
                className: "_ak9o",
                children: ne.jsx(o("WAWebSpinner.react").Spinner, {
                  stroke: 6,
                  size: 24,
                }),
              },
              "unknown-contact-loading",
            ))
          : An
            ? (po = ne.jsx(
                o("WAWebEmptyState.react").SearchingNonContactError,
                {
                  error: o("WAWebContactlessChatUtils").getErrorStr(An),
                  onClick: On,
                },
                "error",
              ))
            : Bn &&
              fo &&
              (po = ne.jsx(
                r("WAWebUnknownContactSection.react"),
                { contactInfo: Bn, onUnknownContactClick: vr, searchText: _o },
                "unknown-contact",
              ));
      }
      var go;
      zr == null &&
        (fr() || dt.current.hasLabelFilter()) &&
        (go = ne.jsx(
          o("WAWebHistorySyncComponents.react")
            .HistorySyncSearchIncompletePlaceholder,
          {},
        ));
      var ho = (l = At == null ? void 0 : At.length) != null ? l : 0,
        yo =
          o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && ho > 0
            ? ne.jsx(
                o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageChatList,
                {},
              )
            : null,
        Co =
          ve === r("WAWebChatlistPanelMode").CallsTab &&
          o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled()
            ? ne.jsx(
                o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageCallsList,
                {},
              )
            : null,
        bo =
          Hr != null
            ? ne.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
                text: Hr,
              })
            : null;
      return ne.jsxs("div", {
        id: "side",
        className: eo,
        ref: ht,
        children: [
          ne.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            name: "app-header",
            children: ro,
          }),
          ne.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            name: "chat-list",
            type: "fatal",
            children: ne.jsxs(r("WAWebFlatListContainer.react"), {
              flatListControllers: [Ct.current],
              ref: xr,
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_ak9y",
                ((s = {}),
                (s._ak9z = ve === r("WAWebChatlistPanelMode").CommandPalette),
                s),
              ),
              onScroll: to,
              id: "pane-side",
              "data-scrolltracepolicy": "wa.web.chatlist",
              children: [
                mo,
                !r("WAWebEnvironment").isWindows && lo,
                bo,
                Gr,
                po,
                Jr,
                ve === r("WAWebChatlistPanelMode").Chatlist &&
                  (go != null ? go : yo),
                ve === r("WAWebChatlistPanelMode").CallsTab && Co,
              ],
            }),
          }),
          ne.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            name: "out-of-chat-player",
            children: ne.jsx(r("WAWebPttOocPlayer"), {}),
          }),
          ne.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            name: "chat-list-toastbar",
            children: zr != null ? zr : null,
          }),
        ],
      });
    }
    ((Ee.displayName = Ee.name + " [from " + i.id + "]"),
      (l.getFiltersWhichArchivedChats = Re),
      (l.ChatlistPanelFunctional = Ee));
  },
  226,
);
