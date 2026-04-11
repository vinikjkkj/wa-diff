__d(
  "WAWebAbPropsSyncJob",
  [
    "Promise",
    "WAGetAbPropsProtocol",
    "WALogger",
    "WAPromiseDelays",
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
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(
      (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.isInitialSync,
            r = e.partialPreviousABPropsValues,
            a = r.ctwa_ad_account_token_storage_kill_switch_web,
            i = r.service_improvement_opt_out_flag,
            l = r.web_ui_refresh_m1;
          (yield (t =
            o("WAWebSyncOnABProps")).ensureNonCriticalDataSyncIsInitialized(),
            t.handleServiceImprovementOptOutFlagABPropConfigValueChange(i),
            t.handleAdAccountTokenStorageKillSwitchABPropConfigValueChange(a),
            t.handleUIRefreshNuxOnABPropConfigValueChange(l),
            n &&
              (yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                "checkOrphanFavoriteStickers",
              )));
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
    );
    var m = { shouldSendHash: !0 };
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.localRefreshId,
            i = t.shouldSendHash,
            l = r("justknobx")._("3330") && a != null,
            c = l
              ? { propsRefreshId: a }
              : {
                  propsHash: i
                    ? o("WAWebABPropsLocalStorage").getHash()
                    : void 0,
                },
            m = yield o("WAGetAbPropsProtocol").getAbPropsProtocol(c);
          if (!m.success) return !1;
          var p = m.value,
            _ = p.abKey,
            f = p.erid,
            g = p.hash,
            h = p.isDeltaUpdate,
            y = p.props,
            C = p.refresh,
            b = p.refreshId,
            v = p.samplingConfigs,
            S =
              f == null
                ? (d || (d = n("Promise"))).resolve()
                : o("WAWebEncryptedRid").setEncryptedRid(f);
          if (
            (h && !l
              ? o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncABProps: received delta update response without responding to emergency push request",
                      ])),
                  )
                  .sendLogs("abprops-requested-regular-received-delta")
              : !h &&
                l &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "syncABProps: received regular update response when responding to emergency push request",
                    ])),
                ),
            !h)
          ) {
            o("WAWebABPropsGlobals").updateGlobalABKey(_ != null ? _ : "");
            var R = Date.now();
            o("WAWebABPropsLocalStorage").updateAttributesLocalStorage(
              _,
              g,
              C,
              R,
            );
          }
          if (
            (b != null && o("WAWebABPropsLocalStorage").setRefreshId(b),
            g == null && !h)
          )
            return !1;
          try {
            return (
              yield (d || (d = n("Promise"))).all([
                !h &&
                  o(
                    "WAWebApiAbPropEventSamplingConfig",
                  ).updateEventSamplingConfigs(v),
                o("WAWebApiAbPropConfig").updateABPropConfigs(
                  o("WAWebAbPropsParsingJob").parseABProps(y, h),
                  h,
                ),
                S,
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
              .sendLogs(
                "update ABProps config table failed when syncing ABProps",
              );
          }
          return !1;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync(),
              r = 3;
            r-- > 0;
          )
            try {
              var a,
                i = {
                  service_improvement_opt_out_flag: (a =
                    o("WAWebABProps")).getABPropConfigValue(
                    "service_improvement_opt_out_flag",
                  ),
                  ctwa_ad_account_token_storage_kill_switch_web:
                    a.getABPropConfigValue(
                      "ctwa_ad_account_token_storage_kill_switch_web",
                    ),
                  web_ui_refresh_m1:
                    a.getABPropConfigValue("web_ui_refresh_m1"),
                  single_e2ee_session_migration_state_outgoing:
                    a.getABPropConfigValue(
                      "single_e2ee_session_migration_state_outgoing",
                    ),
                },
                l = e
                  ? babelHelpers.extends({}, e)
                  : babelHelpers.extends({}, m);
              l.localRefreshId == null &&
                (l.shouldSendHash = t && l.shouldSendHash !== !1);
              var s = yield p(l);
              if (s) {
                (yield (d || (d = n("Promise"))).all([
                  o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage(),
                  o("WAWebEventSamplingCache").updateEventSamplingFromStorage(),
                ]),
                  o(
                    "WAWebBackendEventBus",
                  ).BackendEventBus.triggerAbPropsUpdate({
                    partialPreviousABPropsValues: i,
                    isInitialSync: !t,
                  }));
                return;
              }
            } catch (e) {
              (r === 0 &&
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "failed to sync ABProps",
                      ])),
                  )
                  .verbose()
                  .sendLogs("failed to sync ABProps"),
                yield o("WAPromiseDelays").delayMs(10 * 1e3 * Math.random()));
            }
        })),
        g.apply(this, arguments)
      );
    }
    ((l.syncABProps = p), (l.syncABPropsTask = f));
  },
  98,
);
