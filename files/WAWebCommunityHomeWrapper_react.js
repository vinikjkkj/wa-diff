__d(
  "WAWebCommunityHomeWrapper.react",
  [
    "$InternalEnum",
    "Promise",
    "WAFilteredCatch",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebCommunityActivityCollection",
    "WAWebCommunityActivityModel",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebCommunityNavigation.react",
    "WAWebCommunityTabbedInfoDrawer.react",
    "WAWebDrawerManager",
    "WAWebGroupQueryJob",
    "WAWebLidMigrationUtils",
    "WAWebQuerySubGroupAction",
    "WAWebShowCommunityHomeError",
    "WAWebSuspendedCommunityUtils",
    "WAWebUiActionWamEvent",
    "WAWebUpdateCommunityLastSeenTimestampAction",
    "WAWebUpdateDbForCommunityAction",
    "WAWebUpdateModelsForCommunityAction",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumUiActionType",
    "WAWebWamGroupMetricUtils",
    "WAWebWamPrivateStatsUtils",
    "asyncToGeneratorRuntime",
    "gkx",
    "react",
    "useLazyRef",
    "useWAWebCommunityNux",
    "useWAWebEventTargetValue",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = n("$InternalEnum").Mirrored(["TabbedInfo", "Navigation"]);
    function p(t) {
      var a,
        i,
        l = t.ref,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p = u.jid,
        _ = u.showFullDescription,
        f = u.callbacks,
        g = u.theme,
        h = g === void 0 ? m.Navigation : g,
        y = u.hasFetchedSubgroups,
        C = y === void 0 ? !1 : y,
        b = u.initialTab,
        v =
          b === void 0
            ? o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs
                .Community
            : b,
        S = u.scrollToMemberList,
        R = r("useWAWebEventTargetValue")(
          o("WAWebChatCollection").ChatCollection,
          "add",
          function () {
            return o("WAWebChatCollection").ChatCollection.get(p);
          },
        ),
        L = R ? o("WAWebLidMigrationUtils").chatIsLid(R) : null,
        E = r("useLazyRef")(function () {
          return L != null
            ? new (o("WAWebUiActionWamEvent").UiActionWamEvent)({
                uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE
                  .COMMUNITY_INFO_OPEN,
                uiActionPreloaded: !0,
                isLid: L,
              })
            : new (o("WAWebUiActionWamEvent").UiActionWamEvent)({
                uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE
                  .COMMUNITY_INFO_OPEN,
                uiActionPreloaded: !0,
              });
        }),
        k = r("useWAWebEventTargetValue")(
          R == null || (a = R.groupMetadata) == null ? void 0 : a.participants,
          ["bulk_add", "bulk_remove", "reset", "change:isAdmin"],
          function () {
            var e;
            return !!(
              !(R == null || (e = R.groupMetadata) == null) &&
              e.participants.iAmAdmin()
            );
          },
        ),
        I = r("useWAWebEventTargetValue")(
          R == null || (i = R.groupMetadata) == null ? void 0 : i.participants,
          ["bulk_add", "bulk_remove", "reset", "change:isSuperAdmin"],
          function () {
            var e;
            return !!(
              !(R == null || (e = R.groupMetadata) == null) &&
              e.participants.iAmSuperAdmin()
            );
          },
        );
      d(function () {
        var e = E.current;
        if (e) {
          e.markUiActionT();
          var t = R == null ? void 0 : R.groupMetadata,
            n = t == null ? void 0 : t.cachedDeviceSizeBucket;
          if ((n != null && (e.sizeBucket = n), t)) {
            var a = o(
              "WAWebWamAddressingModeUtils",
            ).getAddressingModeMetricsFromGroupMetadata(t);
            a != null && (e.localAddressingMode = a);
            var i = o(
              "WAWebWamGroupMetricUtils",
            ).getGroupCountMetricsFromGroupMetadata(t);
            e.set(i);
          }
          (e.commit(),
            (E.current = void 0),
            o(
              "WAWebWamPrivateStatsUtils",
            ).logUiActionShadowPrivateStatsTestEvents());
        }
        if (!r("gkx")("26258")) {
          var l = o("WAWebChatCollection").ChatCollection.get(p);
          window.community = l;
        }
        var s =
            h === m.Navigation
              ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV
              : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_HOME,
          u = new (o(
            "WAWebCommunityGroupJourneyEventImpl",
          ).CommunityGroupJourneyEvent)({
            action: o("WAWebWamEnumChatFilterActionTypes")
              .CHAT_FILTER_ACTION_TYPES.VIEW,
            surface: s,
            chat: R,
          });
        u.commit();
      }, []);
      var T = function () {
        if (f.onBack) {
          f.onBack();
          return;
        }
        o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
      };
      function D() {
        return x.apply(this, arguments);
      }
      function x() {
        return (
          (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            R &&
              (yield (s || (s = n("Promise"))).all(
                yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForDeactivateCommunity(R.id, !1),
              ),
              o(
                "WAWebUpdateModelsForCommunityAction",
              ).updateModelsForDeactivateCommunity(R.id));
          })),
          x.apply(this, arguments)
        );
      }
      function $() {
        return P.apply(this, arguments);
      }
      function P() {
        return (
          (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            R &&
              (yield (s || (s = n("Promise"))).all(
                yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForExitedCommunity(R.id),
              ),
              o(
                "WAWebUpdateModelsForCommunityAction",
              ).updateModelsForExitedCommunity(R.id));
          })),
          P.apply(this, arguments)
        );
      }
      (d(
        function () {
          var e,
            t = o("WAWebChatCollection").ChatCollection.get(p);
          ((h === m.Navigation ||
            (h === m.TabbedInfo &&
              t != null &&
              (e = t.groupMetadata) != null &&
              e.hasJoined())) &&
            o("WAWebGroupQueryJob")
              .queryAndUpdateGroupMetadataById({ id: p })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  function (e) {
                    o(
                      "WAWebChatCommunityUtils",
                    ).isIntegrityDeactivatedCommunity(t) ||
                      ((e.status === 403 || e.status === 404) &&
                        (T(),
                        o("WAWebShowCommunityHomeError").showCommunityHomeError(
                          e,
                        ),
                        e.status === 403 ? $() : e.status === 404 && D()));
                  },
                ),
              ),
            o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(t) &&
              o("WAWebSuspendedCommunityUtils").openTerminatedCommunityModal());
        },
        [p],
      ),
        o("useWAWebListener").useListener(
          R == null ? void 0 : R.groupMetadata,
          "exitParentGroup",
          T,
        ),
        d(
          function () {
            if (!C) {
              var e;
              o("WAWebQuerySubGroupAction").queryAndUpdateSubgroupsMetadata(
                p,
                R == null || (e = R.groupMetadata) == null
                  ? void 0
                  : e.joinedSubgroups,
              );
            }
          },
          [p, C],
        ),
        r("useWAWebCommunityNux")(R));
      var N = function () {
          var e = R
            ? r("WAWebCommunityActivityCollection")
                .getActivityFor(R.id)
                .filter(function (e) {
                  return (
                    e.type ===
                      o("WAWebCommunityActivityModel").ActivityTypeType
                        .SUB_GROUP_LINK ||
                    e.type ===
                      o("WAWebCommunityActivityModel").ActivityTypeType
                        .NEW_COMMUNITY
                  );
                })
            : [];
          return e;
        },
        M = r("useWAWebEventTargetValue")(
          r("WAWebCommunityActivityCollection"),
          ["add"],
          function () {
            return N();
          },
        ),
        w = M,
        A = w.filter(function (e) {
          return (
            o("WATimeUtils").unixTime() <
            e.timestamp +
              o("WAWebCommunityActivityModel")
                .EXPIRATION_TIME_FOR_SUB_GROUP_LINK
          );
        }),
        F = A.map(function (e) {
          var t = e.subgroupId;
          return t;
        }),
        O = function () {
          R != null &&
            R.groupMetadata &&
            o(
              "WAWebUpdateCommunityLastSeenTimestampAction",
            ).updateLastSeenTimestamp(R.groupMetadata);
        },
        B = function () {
          (O(), f.onBack());
        },
        W = { callbacks: f, isAdmin: k };
      return h === m.TabbedInfo
        ? c.jsx(
            o("WAWebCommunityTabbedInfoDrawer.react").CommunityTabbedInfoDrawer,
            babelHelpers.extends(
              {
                ref: l,
                initialTab: v,
                showFullDescription: _,
                scrollToMemberList: S,
                parentChat: R,
              },
              W,
            ),
          )
        : c.jsx(
            r("WAWebCommunityNavigation.react"),
            babelHelpers.extends(
              { ref: l, highlightedSubgroups: F, onBack: B, chat: R },
              W,
              { isSuperAdmin: I },
            ),
          );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.CommunityHomeTheme = m),
      (l.CommunityHomeWrapper = p));
  },
  98,
);
