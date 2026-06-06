__d(
  "WAWebAbPropsSyncJob",
  [
    "WAGetAbPropsProtocol",
    "WALogger",
    "WAPromiseDelays",
    "WATaskScheduler",
    "WAWebABProps",
    "WAWebABPropsGlobals",
    "WAWebABPropsLocalStorage",
    "WAWebABPropsUpdateFromStorage",
    "WAWebAbPropsParsingJob",
    "WAWebApiAbPropConfig",
    "WAWebApiAbPropEventSamplingConfig",
    "WAWebBackendEventBus",
    "WAWebEncryptedRid",
    "WAWebEventSamplingCache",
    "WAWebSyncOnABProps",
    "WAWebTasksTaskType",
    "WAWebWorkerSafeBackendApi",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(
      async function (e) {
        var t,
          n = e.isInitialSync,
          r = e.partialPreviousABPropsValues,
          a = r.ctwa_ad_account_token_storage_kill_switch_web,
          i = r.service_improvement_opt_out_flag,
          l = r.web_ui_refresh_m1;
        (await (t =
          o("WAWebSyncOnABProps")).ensureNonCriticalDataSyncIsInitialized(),
          t.handleServiceImprovementOptOutFlagABPropConfigValueChange(i),
          t.handleAdAccountTokenStorageKillSwitchABPropConfigValueChange(a),
          t.handleUIRefreshNuxOnABPropConfigValueChange(l),
          o("WAWebSyncOnABProps").consumeQpEmergencyForceFetchNonce() &&
            o("WATaskScheduler").rescheduleNow(
              o("WAWebTasksTaskType").TaskType.FETCH_QUICK_PROMOTIONS,
            ),
          n &&
            (await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "checkOrphanFavoriteStickers",
            )));
      },
    );
    var d = { shouldSendHash: !0 };
    async function m(t) {
      var n = t.localRefreshId,
        a = t.shouldSendHash,
        i = r("justknobx")._("3330") && n != null,
        l = i
          ? { propsRefreshId: n }
          : { propsHash: a ? o("WAWebABPropsLocalStorage").getHash() : void 0 },
        c = await o("WAGetAbPropsProtocol").getAbPropsProtocol(l);
      if (!c.success) return !1;
      var d = c.value,
        m = d.abKey,
        p = d.erid,
        _ = d.hash,
        f = d.isDeltaUpdate,
        g = d.props,
        h = d.refresh,
        y = d.refreshId,
        C = d.samplingConfigs,
        b =
          p == null
            ? Promise.resolve()
            : o("WAWebEncryptedRid").setEncryptedRid(p);
      if (
        (f && !i
          ? o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncABProps: received delta update response without responding to emergency push request",
                  ])),
              )
              .sendLogs("abprops-requested-regular-received-delta")
          : !f &&
            i &&
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "syncABProps: received regular update response when responding to emergency push request",
                ])),
            ),
        !f)
      ) {
        o("WAWebABPropsGlobals").updateGlobalABKey(m != null ? m : "");
        var v = Date.now();
        o("WAWebABPropsLocalStorage").updateAttributesLocalStorage(m, _, h, v);
      }
      if (
        (y != null && o("WAWebABPropsLocalStorage").setRefreshId(y),
        _ == null && !f)
      )
        return !1;
      try {
        return (
          await Promise.all([
            !f &&
              o("WAWebApiAbPropEventSamplingConfig").updateEventSamplingConfigs(
                C,
              ),
            o("WAWebApiAbPropConfig").updateABPropConfigs(
              o("WAWebAbPropsParsingJob").parseABProps(g, f),
              f,
            ),
            b,
          ]),
          !0
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "update ABProps config table failed",
              ])),
          )
          .verbose()
          .sendLogs("update ABProps config table failed when syncing ABProps");
      }
      return !1;
    }
    async function p(e) {
      for (
        var t = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync(), n = 3;
        n-- > 0;
      )
        try {
          var r,
            a = {
              service_improvement_opt_out_flag: (r =
                o("WAWebABProps")).getABPropConfigValue(
                "service_improvement_opt_out_flag",
              ),
              ctwa_ad_account_token_storage_kill_switch_web:
                r.getABPropConfigValue(
                  "ctwa_ad_account_token_storage_kill_switch_web",
                ),
              web_ui_refresh_m1: r.getABPropConfigValue("web_ui_refresh_m1"),
              single_e2ee_session_migration_state_outgoing:
                r.getABPropConfigValue(
                  "single_e2ee_session_migration_state_outgoing",
                ),
              after_read_sending_enabled: r.getABPropConfigValue(
                "after_read_sending_enabled",
              ),
            },
            i = e ? babelHelpers.extends({}, e) : babelHelpers.extends({}, d);
          i.localRefreshId == null &&
            (i.shouldSendHash = t && i.shouldSendHash !== !1);
          var l = await m(i);
          if (l) {
            (await Promise.all([
              o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage(),
              o("WAWebEventSamplingCache").updateEventSamplingFromStorage(),
            ]),
              o("WAWebBackendEventBus").BackendEventBus.triggerAbPropsUpdate({
                partialPreviousABPropsValues: a,
                isInitialSync: !t,
              }));
            return;
          }
        } catch (e) {
          (n === 0 &&
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "failed to sync ABProps",
                  ])),
              )
              .verbose()
              .sendLogs("failed to sync ABProps"),
            await o("WAPromiseDelays").delayMs(10 * 1e3 * Math.random()));
        }
    }
    ((l.syncABProps = m), (l.syncABPropsTask = p));
  },
  98,
);
