__d(
  "WAWebDebugABProps",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebABPropsConfigs",
    "WAWebABPropsExpoKeyUtils",
    "WAWebABPropsGlobals",
    "WAWebABPropsUpdateFromStorage",
    "WAWebAbPropsSyncJob",
    "WAWebApiAbPropConfig",
    "WAWebBackendEventBus",
    "WAWebGroupABProps",
    "WAWebGroupABPropsConfigs",
    "WAWebGroupABPropsUpdateFromStorage",
    "WAWebGroupAbPropsSyncJob",
    "WAWebHybridABProps",
    "WAWebSchemaAbPropConfig",
    "WAWebSchemaGroupAbPropConfig",
    "WAWebSchemaGroupMetadata",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e === void 0 && (e = !0),
            r("vulture")("uPYjjTvF4zMCgjs0_e_woqAXZNw="));
          var t = yield o("WAWebAbPropsSyncJob").syncABProps({
            shouldSendHash: e,
          });
          return (
            yield o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage(),
            t
          );
        })),
        _.apply(this, arguments)
      );
    }
    p.doc = "Sync AB Props";
    function f(e) {
      return (
        r("vulture")("H4WjeUkV5blMPZGwmwMNk8rQ_BE="),
        o("WAWebABProps").getABPropConfigValue(e)
      );
    }
    f.doc = "get an ABProp config value from cache";
    function g(e, t) {
      r("vulture")("hfKLkFw0neIDid2f0bskAgADjPQ=");
      var n = o("WAWebWidFactory").createWid(e),
        a = o("WAWebWidToJid").widToGroupJid(n);
      return o("WAWebGroupABProps").getGroupABPropConfigValue(a, t);
    }
    g.doc =
      'get a group ABProp config value from cache for a given group JID (e.g., "120363023305337144@g.us")';
    function h(t) {
      return (
        r("vulture")("wTxJHu1SmfIjj6AgOxfvxNrmDZU="),
        o("WAWebApiAbPropConfig")
          .getConfigValue(t)
          .then(function (n) {
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    'ABProp "',
                    '" config value: [',
                    "]",
                  ])),
                t,
                String(n),
              ),
              n
            );
          })
      );
    }
    h.doc = "get an ABProp config value";
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebABPropsConfigs").ABPropConfigs[e][0],
            r = yield h(e),
            a = { configCode: String(n), configValue: String(r) };
          t != null && (a.overriddenConfigValue = String(t));
          var i = t != null ? t : r;
          return o("WAWebSchemaAbPropConfig")
            .getAbpropConfigsTable()
            .createOrReplace(a)
            .then(function () {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    'ABProp "',
                    '" (config code: ',
                    ") new config value: [",
                    "]",
                  ])),
                e,
                String(n),
                String(i),
              );
              var r = {
                service_improvement_opt_out_flag: o(
                  "WAWebABProps",
                ).getABPropConfigValue("service_improvement_opt_out_flag"),
                ctwa_ad_account_token_storage_kill_switch_web: o(
                  "WAWebABProps",
                ).getABPropConfigValue(
                  "ctwa_ad_account_token_storage_kill_switch_web",
                ),
                web_ui_refresh_m1:
                  o("WAWebABProps").getABPropConfigValue("web_ui_refresh_m1"),
                single_e2ee_session_migration_state_outgoing: o(
                  "WAWebABProps",
                ).getABPropConfigValue(
                  "single_e2ee_session_migration_state_outgoing",
                ),
                after_read_sending_enabled: o(
                  "WAWebABProps",
                ).getABPropConfigValue("after_read_sending_enabled"),
              };
              return o("WAWebABPropsUpdateFromStorage")
                .updateABPropsFromStorage()
                .then(function () {
                  return (
                    o(
                      "WAWebBackendEventBus",
                    ).BackendEventBus.triggerAbPropsUpdate({
                      partialPreviousABPropsValues: r,
                      isInitialSync: !1,
                    }),
                    t
                  );
                });
            });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (yield y(e, t), t);
        })),
        v.apply(this, arguments)
      );
    }
    b.doc = "override an ABProp config value locally";
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (r("vulture")("wsgVvISsbpTzItVjkqgbMrqcxFk="), yield y(e, void 0));
        })),
        R.apply(this, arguments)
      );
    }
    S.doc = "reset an ABProp to its original value";
    function L() {
      return (
        r("vulture")("qeOCw-VGLLa3GCtM6Yf3fn11rMY="),
        o("WAWebABPropsCache").getAllABPropConfigs()
      );
    }
    L.doc = "list all ABProps";
    function E() {
      return (
        r("vulture")("gLSUDnKVKLhcWtm5tiQ3tgyECV4="),
        o("WAWebApiAbPropConfig").getABPropConfigs()
      );
    }
    E.doc = "list all ABProps";
    function k(e) {
      return (
        e === void 0 && (e = !0),
        r("vulture")("ul4kuxGaqR0uJ3bV69nQatjY6NU="),
        o("WAWebHybridABProps").getAllHybridAbProps(e)
      );
    }
    k.doc = "list all hybrid ABProps";
    function I() {
      return (
        r("vulture")("kLg3UojybI9WF0RqkAJnuegY2X4="),
        o("WAWebABPropsExpoKeyUtils").combineExposuresIntoExpoKey(
          o("WAWebABPropsGlobals").exposureKeys,
        )
      );
    }
    I.doc = "get global expo key";
    function T(e) {
      (r("vulture")("e5FmhJSpudJN50zGiosICrPv2dg="),
        o("WAWebABPropsGlobals").exposureKeys.clear(),
        e.split(",").forEach(function (e) {
          return o("WAWebABPropsGlobals").exposureKeys.add(e);
        }),
        o("WAWebABPropsGlobals").updateGlobalExpoKey());
    }
    T.doc = "set global expo key";
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a, i, l;
          r("vulture")("NCo7ldpW2-M9PrS19KwxxMGWNhM=");
          var s = o("WAWebWidFactory").createWid(e),
            c = o("WAWebWidToJid").widToGroupJid(s),
            d = o("WAWebGroupABPropsConfigs").ABPropConfigs[t][0],
            m = yield o("WAWebSchemaGroupAbPropConfig")
              .getGroupAbpropConfigsTable()
              .equals(["groupJid", "configCode"], [c, String(d)]),
            p = m[0],
            _ = {
              groupJid: c,
              configCode: String(d),
              configValue:
                (a = p == null ? void 0 : p.configValue) != null ? a : null,
              configExpoKey:
                (i = p == null ? void 0 : p.configExpoKey) != null ? i : null,
              hasAccessed:
                (l = p == null ? void 0 : p.hasAccessed) != null ? l : !1,
              overriddenConfigValue: String(n),
            };
          yield o("WAWebSchemaGroupAbPropConfig")
            .getGroupAbpropConfigsTable()
            .createOrReplace(_);
          var f = yield o("WAWebSchemaGroupAbPropConfig")
            .getGroupAbpropConfigsTable()
            .equals(["groupJid"], [c]);
          return (
            o(
              "WAWebGroupABPropsUpdateFromStorage",
            ).updateSingleGroupABPropsCache(c, f),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  'Group ABProp "',
                  '" for group ',
                  " overridden to: [",
                  "]",
                ])),
              t,
              e,
              String(n),
            ),
            n
          );
        })),
        x.apply(this, arguments)
      );
    }
    D.doc =
      'override a group ABProp config value locally for a given group JID (e.g., "120363023305337144@g.us")';
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          r("vulture")("BrbxOdU40vcVY5ADvIiLh9pCH9U=");
          var n = o("WAWebWidFactory").createWid(e),
            a = o("WAWebWidToJid").widToGroupJid(n),
            i = o("WAWebGroupABPropsConfigs").ABPropConfigs[t][0],
            l = yield o("WAWebSchemaGroupAbPropConfig")
              .getGroupAbpropConfigsTable()
              .equals(["groupJid", "configCode"], [a, String(i)]),
            s = l[0];
          if (s != null) {
            var u = {
              groupJid: a,
              configCode: String(i),
              configValue: s.configValue,
              configExpoKey: s.configExpoKey,
              hasAccessed: s.hasAccessed,
              overriddenConfigValue: null,
            };
            yield o("WAWebSchemaGroupAbPropConfig")
              .getGroupAbpropConfigsTable()
              .createOrReplace(u);
            var d = yield o("WAWebSchemaGroupAbPropConfig")
              .getGroupAbpropConfigsTable()
              .equals(["groupJid"], [a]);
            o(
              "WAWebGroupABPropsUpdateFromStorage",
            ).updateSingleGroupABPropsCache(a, d);
          }
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                'Group ABProp "',
                '" for group ',
                " reset to original value",
              ])),
            t,
            e,
          );
        })),
        P.apply(this, arguments)
      );
    }
    $.doc = "reset a group ABProp to its original value for a given group JID";
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("BnyoEPwJYeIDuZ2in56Dj4DjRyw=");
          var t = o("WAWebWidFactory").createWid(e),
            n = o("WAWebWidToJid").widToGroupJid(t);
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "Syncing group AB props for group: ",
                "",
              ])),
            e,
          ),
            yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .merge(n, { groupAbPropsLastFetchTimestampSec: void 0 }),
            yield o("WAWebGroupAbPropsSyncJob").syncGroupABPropsTask(n),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "Group AB props sync completed for group: ",
                  "",
                ])),
              e,
            ));
        })),
        M.apply(this, arguments)
      );
    }
    N.doc =
      'Sync group AB props for a given group JID (e.g., "120363023305337144@g.us")';
    var w = {
      syncABProps: p,
      syncABPropsTask: o("WAWebAbPropsSyncJob").syncABPropsTask,
      syncGroupABProps: N,
      getABPropConfigValue: f,
      getGroupABPropConfigValue: g,
      getABPropFromDb: h,
      getHybridAbProps: k,
      overrideABProp: b,
      resetABProp: S,
      overrideGroupABProp: D,
      resetGroupABProp: $,
      listABProps: E,
      listABPropsFromCache: L,
      getGlobalExpoKey: I,
      setGlobalExpoKey: T,
    };
    l.default = w;
  },
  98,
);
