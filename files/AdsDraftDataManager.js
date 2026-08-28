__d(
  "AdsDraftDataManager",
  [
    "invariant",
    "AdDraftOwnership",
    "AdDraftPublishStatuses",
    "AdDraftStates",
    "AdsAPIDraftPaths",
    "AdsApplicationIDs",
    "AdsApplicationUtils",
    "AdsBaseDataManager",
    "AdsCurrentUser",
    "AdsDefaultDraftNameConfig",
    "AdsDraftDataManagerFields",
    "AdsDraftDataManagerPreloader",
    "AdsDraftDraftBatchLoadErrorDataAction",
    "AdsDraftDraftBatchLoadedDataAction",
    "AdsDraftDraftCurrentDraftLoadErrorDataAction",
    "AdsDraftDraftCurrentDraftLoadedDataAction",
    "AdsDraftDraftDiscardErrorDataAction",
    "AdsDraftDraftDiscardedDataAction",
    "AdsDraftDraftSetCurrentDraftErrorDataAction",
    "AdsDraftDraftSetCurrentDraftSuccessDataAction",
    "AdsDraftLoginAsDraftsLoadedDataAction",
    "AdsDraftPublishDataManager",
    "AdsDraftPublishQPLUserFlowLogging",
    "AdsDraftPublishQPLUserFlowLoggingConsts",
    "AdsDraftPublishRealtimeClient",
    "AdsDraftTypes",
    "AdsGraphAPI",
    "AdsLoginAs",
    "AdsManagerQPLUserFlowLogger",
    "AdsMgmtPreloadingUtils",
    "AdsPEEmployeeSelectDraftUtils",
    "AdsPerfInteractionsController",
    "FBLogger",
    "Promise",
    "QPLEvent",
    "adsDraftCreateToastCardForPublishComplete",
    "adsDraftGetFragmentStatusesFromPublishResponse",
    "asyncToGeneratorRuntime",
    "err",
    "formatDate",
    "getByPath",
    "immutable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = function (t, n) {
        return !0;
      },
      d =
        "loginas draft for " +
        String(r("AdsCurrentUser").employeeName) +
        " " +
        r("formatDate")(new Date(), "Y-m-d", { skipPatternLocalization: !0 }),
      m = (function (t) {
        function a() {
          for (var e, a = arguments.length, l = new Array(a), s = 0; s < a; s++)
            l[s] = arguments[s];
          return (
            (e = t.call.apply(t, [this].concat(l)) || this),
            (e.load = function (t) {
              r("promiseDone")(e.$AdsDraftDataManager$p_1(t));
            }),
            (e.getOrCreateCurrentDraft = function (t) {
              var n,
                a = t.accountID,
                l = t.adsApplicationID,
                s = t.ownershipType,
                u = t.type,
                m = u === void 0 ? r("AdsDraftTypes").ACTIVE : u,
                p = { name: c },
                _ = i.id + ".getOrCreateCurrentDraft";
              r("promiseDone")(
                o("AdsGraphAPI")
                  .get(_)
                  .adaccount(a)
                  .edge("addrafts")
                  .preloadedBy(
                    r("AdsDraftDataManagerPreloader").preloader,
                    o("AdsMgmtPreloadingUtils").defaultConfig,
                    { fieldComparators: p, ignoreMismatches: !0 },
                  )
                  .setPriority("HIGH")
                  .post(
                    ((n = {}),
                    (n.name =
                      m === r("AdsDraftTypes").ACTIVE
                        ? r("AdsDefaultDraftNameConfig").draft_name
                        : d),
                    (n.use_active_draft_if_exists = !0),
                    (n.use_employee_draft = m !== r("AdsDraftTypes").ACTIVE),
                    (n.application_id = l),
                    (n.ownership_type = s),
                    n),
                  )
                  .then(function (t) {
                    return e.$AdsDraftDataManager$p_1(t.id);
                  }),
                function (t) {
                  t && t.id
                    ? e.$AdsDraftDataManager$p_2(a, t, m, l, t.ownership_type)
                    : r(
                        "AdsDraftDraftCurrentDraftLoadErrorDataAction",
                      ).dispatch(
                        {
                          accountID: a,
                          adsApplicationID: l,
                          currentDraftID: void 0,
                          error: r("err")(
                            "Draft creation failed, API response is undefined",
                          ),
                        },
                        {
                          line: "413",
                          module: "AdsDraftDataManager.js",
                          moduleID: i.id,
                        },
                      );
                },
                function (e) {
                  return r(
                    "AdsDraftDraftCurrentDraftLoadErrorDataAction",
                  ).dispatch(
                    {
                      accountID: a,
                      adsApplicationID: l,
                      currentDraftID: void 0,
                      error: e,
                    },
                    {
                      line: "422",
                      module: "AdsDraftDataManager.js",
                      moduleID: i.id,
                    },
                  );
                },
              );
            }),
            (e.getCurrentDraftIncludingLoginAs = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var a = yield (u || (u = n("Promise"))).all([
                      e.$AdsDraftDataManager$p_4(
                        t,
                        null,
                        r("AdsDraftTypes").ACTIVE,
                        r("AdsApplicationIDs").ADS_POWER_EDITOR,
                        r("AdDraftOwnership").USER,
                      ),
                      e.$AdsDraftDataManager$p_4(
                        t,
                        null,
                        r("AdsDraftTypes").LOGIN_AS_ACTIVE,
                        r("AdsApplicationIDs").ADS_POWER_EDITOR,
                        r("AdDraftOwnership").USER,
                      ),
                    ]),
                    l = a[0],
                    s = a[1],
                    c = r("immutable")
                      .Map()
                      .withMutations(function (e) {
                        (l && e.set(r("AdsDraftTypes").ACTIVE, l),
                          s && e.set(r("AdsDraftTypes").LOGIN_AS_ACTIVE, s));
                      }),
                    d = o(
                      "AdsPEEmployeeSelectDraftUtils",
                    ).isUseLoginAsActiveUrlParamPresent();
                  (r("AdsDraftLoginAsDraftsLoadedDataAction").dispatch(
                    { accountID: t, drafts: c, hideSelectDraftModal: d },
                    {
                      line: "466",
                      module: "AdsDraftDataManager.js",
                      moduleID: i.id,
                    },
                  ),
                    d &&
                      e.onCurrentDraftSelectedThroughLoginas(
                        t,
                        c.get(r("AdsDraftTypes").LOGIN_AS_ACTIVE),
                        r("AdsDraftTypes").LOGIN_AS_ACTIVE,
                        r("AdsApplicationIDs").ADS_POWER_EDITOR,
                        r("AdDraftOwnership").USER,
                      ));
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var l = a.prototype;
        return (
          (l.$AdsDraftDataManager$p_1 = function (t) {
            var e,
              n = this,
              a = i.id + "._load";
            return o("AdsGraphAPI")
              .get(a)
              .root("addraft_" + t)
              .batched()
              .preloadedBy(
                r("AdsDraftDataManagerPreloader").preloader,
                o("AdsMgmtPreloadingUtils").defaultConfig,
              )
              .get(
                ((e = {}),
                (e.fields = r("AdsDraftDataManagerFields").fields),
                e),
              )
              .then(
                function (e) {
                  return (n.__handleSuccess(["load"], t, null, e), e);
                },
                function (e) {
                  return n.__handleError(["load"], t, null, e);
                },
              );
          }),
          (l.loadAll = function (t) {
            t.forEach(this.load, this);
          }),
          (l.discardFragments = function (t) {
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("draft_id", t)
                .edge("discard_fragments")
                .post(),
              function (e) {
                return r("AdsDraftDraftDiscardedDataAction").dispatch(
                  { draftID: t },
                  {
                    line: "133",
                    module: "AdsDraftDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
              function (e) {
                return r("AdsDraftDraftDiscardErrorDataAction").dispatch(
                  { error: e },
                  {
                    line: "134",
                    module: "AdsDraftDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          (l.setCurrentDraft = function (t, n, a) {
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .adaccount(t)
                .edge("current_addrafts")
                .batched()
                .post({ addraft_id: n }),
              function () {
                return r(
                  "AdsDraftDraftSetCurrentDraftSuccessDataAction",
                ).dispatch(
                  { accountID: t, adsApplicationID: a, draftID: n },
                  {
                    line: "152",
                    module: "AdsDraftDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
              function (e) {
                return r(
                  "AdsDraftDraftSetCurrentDraftErrorDataAction",
                ).dispatch(
                  { accountID: t, adsApplicationID: a, draftID: n, error: e },
                  {
                    line: "158",
                    module: "AdsDraftDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          (l.onCurrentDraftSelectedThroughLoginas = function (
            t,
            n,
            r,
            o,
            a,
            i,
          ) {
            (i === void 0 && (i = !1),
              this.$AdsDraftDataManager$p_2(t, n, r, o, a, i));
          }),
          (l.$AdsDraftDataManager$p_2 = function (n, a, l, u, c, d) {
            d === void 0 && (d = !1);
            var t = this.$AdsDraftDataManager$p_3(a);
            if (t === "NO_DRAFT") {
              this.getOrCreateCurrentDraft({
                accountID: n,
                adsApplicationID: u,
                ownershipType: c,
              });
              return;
            }
            if (
              (a || s(0, 2836),
              t === "CLOSE_AND_USE" &&
                r("AdsDraftPublishDataManager").close(
                  a.id,
                  void 0,
                  void 0,
                  "CLOSE_AND_USE",
                ),
              r("AdsDraftDraftCurrentDraftLoadedDataAction").dispatch(
                {
                  accountID: n,
                  draft: a,
                  draftID: a.id,
                  draftType: l,
                  adsApplicationID: u,
                  wasRefreshed: d,
                },
                {
                  line: "215",
                  module: "AdsDraftDataManager.js",
                  moduleID: i.id,
                },
              ),
              !!o("AdsApplicationUtils").isPowerEditor())
            ) {
              var m = a.publish_status,
                p = m == null ? void 0 : m.async_request_set_id;
              if (p != null) {
                var _ = o(
                  "AdsDraftPublishQPLUserFlowLoggingConsts",
                ).PUBLISH_USER_FLOWS.filter(function (e) {
                  return o("AdsManagerQPLUserFlowLogger").isActiveFlow(e);
                });
                if (_.length > 0)
                  r("FBLogger")("ads_draft_publish").warn(
                    "Existing publish flow %s is active in publish from reload path: draft ID %s, async_request_set_id %s",
                    _.map(function (t) {
                      return (e || (e = o("QPLEvent"))).getMarkerId(t);
                    }).join(", "),
                    a.id,
                    p,
                  );
                else {
                  (o(
                    "AdsDraftPublishQPLUserFlowLogging",
                  ).registerSharedPointCallbacks(),
                    r("AdsPerfInteractionsController").startInteraction(
                      "am.publish_ads.in_reload",
                      i.id,
                    ));
                  var f = r("adsDraftGetFragmentStatusesFromPublishResponse")(
                    m,
                  );
                  r(
                    "AdsPerfInteractionsController",
                  ).addCustomInteractionAnnotation("am.toast_card.publish", {
                    async_request_set_id: p,
                    draft_id: a.id,
                    fragment_count: f.length,
                  });
                }
                o("AdsDraftPublishRealtimeClient").updatePublishStatus(
                  p,
                  m.status,
                );
              }
              t === "CLOSE_AND_USE" &&
                r("adsDraftCreateToastCardForPublishComplete")(
                  "pe-initial-publish",
                  r("adsDraftGetFragmentStatusesFromPublishResponse")(m),
                  m.async_request_set_id,
                  null,
                  !1,
                  n,
                );
            }
          }),
          (l.$AdsDraftDataManager$p_4 = function (t, a, l, s, c) {
            var e;
            if (
              l === r("AdsDraftTypes").LOGIN_AS_ACTIVE &&
              !o("AdsLoginAs").isUsingLoginAsDrafts()
            )
              return (u || (u = n("Promise"))).resolve(null);
            var d = i.id + "._loadCurrentDraft",
              m = o("AdsGraphAPI")
                .get(d)
                .adaccount(t)
                .edge("current_addrafts")
                .setPriority("HIGH")
                .batched(),
              p =
                ((e = {}),
                (e.cross_application_id = s),
                (e.fields = r("AdsDraftDataManagerFields").fields),
                (e.use_employee_draft = l !== r("AdsDraftTypes").ACTIVE),
                (e.ownership_type = c),
                e);
            return m.get(p).then(
              function (e) {
                return r("getByPath")(e, ["data", "0"]);
              },
              function (e) {
                return r(
                  "AdsDraftDraftCurrentDraftLoadErrorDataAction",
                ).dispatch(
                  {
                    accountID: t,
                    adsApplicationID: s,
                    currentDraftID: a,
                    error: e,
                  },
                  {
                    line: "308",
                    module: "AdsDraftDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          (l.$AdsDraftDataManager$p_3 = function (t) {
            var e = r("getByPath")(
              t,
              r("AdsAPIDraftPaths").ADDRAFT_FRAGMENTS.SUMMARY.TOTAL_COUNT,
            );
            if (!t || e == null) return "NO_DRAFT";
            var n = t.publish_status,
              o = n == null ? void 0 : n.status;
            return t.state !== r("AdDraftStates").EDITING &&
              o &&
              (o === r("AdDraftPublishStatuses").SUCCEEDED ||
                o === r("AdDraftPublishStatuses").FAILED)
              ? "CLOSE_AND_USE"
              : "USE";
          }),
          (l.__onBatchLoaded = function (t) {
            r("AdsDraftDraftBatchLoadedDataAction").dispatch(
              { drafts: t },
              { line: "485", module: "AdsDraftDataManager.js", moduleID: i.id },
            );
          }),
          (l.__onBatchLoadError = function (t) {
            r("AdsDraftDraftBatchLoadErrorDataAction").dispatch(
              { errors: t },
              { line: "492", module: "AdsDraftDataManager.js", moduleID: i.id },
            );
          }),
          a
        );
      })(r("AdsBaseDataManager")),
      p = new m();
    l.default = p;
  },
  98,
);
