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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(e) {
      e === void 0 && (e = !0);
      var t = await o("WAWebAbPropsSyncJob").syncABProps({ shouldSendHash: e });
      return (
        await o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage(),
        t
      );
    }
    p.doc = "Sync AB Props";
    function _(e) {
      return o("WAWebABProps").getABPropConfigValue(e);
    }
    _.doc = "get an ABProp config value from cache";
    function f(e, t) {
      var n = o("WAWebWidFactory").createWid(e),
        r = o("WAWebWidToJid").widToGroupJid(n);
      return o("WAWebGroupABProps").getGroupABPropConfigValue(r, t);
    }
    f.doc =
      'get a group ABProp config value from cache for a given group JID (e.g., "120363023305337144@g.us")';
    function g(t) {
      return o("WAWebApiAbPropConfig")
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
        });
    }
    g.doc = "get an ABProp config value";
    async function h(e, t) {
      var n = o("WAWebABPropsConfigs").ABPropConfigs[e][0],
        r = await g(e),
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
            after_read_sending_enabled: o("WAWebABProps").getABPropConfigValue(
              "after_read_sending_enabled",
            ),
          };
          return o("WAWebABPropsUpdateFromStorage")
            .updateABPropsFromStorage()
            .then(function () {
              return (
                o("WAWebBackendEventBus").BackendEventBus.triggerAbPropsUpdate({
                  partialPreviousABPropsValues: r,
                  isInitialSync: !1,
                }),
                t
              );
            });
        });
    }
    async function y(e, t) {
      return (await h(e, t), t);
    }
    y.doc = "override an ABProp config value locally";
    async function C(e) {
      await h(e, void 0);
    }
    C.doc = "reset an ABProp to its original value";
    function b() {
      return o("WAWebABPropsCache").getAllABPropConfigs();
    }
    b.doc = "list all ABProps";
    function v() {
      return o("WAWebApiAbPropConfig").getABPropConfigs();
    }
    v.doc = "list all ABProps";
    function S(e) {
      return (
        e === void 0 && (e = !0),
        o("WAWebHybridABProps").getAllHybridAbProps(e)
      );
    }
    S.doc = "list all hybrid ABProps";
    function R() {
      return o("WAWebABPropsExpoKeyUtils").combineExposuresIntoExpoKey(
        o("WAWebABPropsGlobals").exposureKeys,
      );
    }
    R.doc = "get global expo key";
    function L(e) {
      (o("WAWebABPropsGlobals").exposureKeys.clear(),
        e.split(",").forEach(function (e) {
          return o("WAWebABPropsGlobals").exposureKeys.add(e);
        }),
        o("WAWebABPropsGlobals").updateGlobalExpoKey());
    }
    L.doc = "set global expo key";
    async function E(e, t, n) {
      var r,
        a,
        i,
        l = o("WAWebWidFactory").createWid(e),
        s = o("WAWebWidToJid").widToGroupJid(l),
        c = o("WAWebGroupABPropsConfigs").ABPropConfigs[t][0],
        d = await o("WAWebSchemaGroupAbPropConfig")
          .getGroupAbpropConfigsTable()
          .equals(["groupJid", "configCode"], [s, String(c)]),
        m = d[0],
        p = {
          groupJid: s,
          configCode: String(c),
          configValue:
            (r = m == null ? void 0 : m.configValue) != null ? r : null,
          configExpoKey:
            (a = m == null ? void 0 : m.configExpoKey) != null ? a : null,
          hasAccessed:
            (i = m == null ? void 0 : m.hasAccessed) != null ? i : !1,
          overriddenConfigValue: String(n),
        };
      await o("WAWebSchemaGroupAbPropConfig")
        .getGroupAbpropConfigsTable()
        .createOrReplace(p);
      var _ = await o("WAWebSchemaGroupAbPropConfig")
        .getGroupAbpropConfigsTable()
        .equals(["groupJid"], [s]);
      return (
        o("WAWebGroupABPropsUpdateFromStorage").updateSingleGroupABPropsCache(
          s,
          _,
        ),
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
    }
    E.doc =
      'override a group ABProp config value locally for a given group JID (e.g., "120363023305337144@g.us")';
    async function k(e, t) {
      var n = o("WAWebWidFactory").createWid(e),
        r = o("WAWebWidToJid").widToGroupJid(n),
        a = o("WAWebGroupABPropsConfigs").ABPropConfigs[t][0],
        i = await o("WAWebSchemaGroupAbPropConfig")
          .getGroupAbpropConfigsTable()
          .equals(["groupJid", "configCode"], [r, String(a)]),
        l = i[0];
      if (l != null) {
        var s = {
          groupJid: r,
          configCode: String(a),
          configValue: l.configValue,
          configExpoKey: l.configExpoKey,
          hasAccessed: l.hasAccessed,
          overriddenConfigValue: null,
        };
        await o("WAWebSchemaGroupAbPropConfig")
          .getGroupAbpropConfigsTable()
          .createOrReplace(s);
        var u = await o("WAWebSchemaGroupAbPropConfig")
          .getGroupAbpropConfigsTable()
          .equals(["groupJid"], [r]);
        o("WAWebGroupABPropsUpdateFromStorage").updateSingleGroupABPropsCache(
          r,
          u,
        );
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
    }
    k.doc = "reset a group ABProp to its original value for a given group JID";
    async function I(e) {
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
        await o("WAWebSchemaGroupMetadata")
          .getGroupMetadataTable()
          .merge(n, { groupAbPropsLastFetchTimestampSec: void 0 }),
        await o("WAWebGroupAbPropsSyncJob").syncGroupABPropsTask(n),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "Group AB props sync completed for group: ",
              "",
            ])),
          e,
        ));
    }
    I.doc =
      'Sync group AB props for a given group JID (e.g., "120363023305337144@g.us")';
    var T = {
      syncABProps: p,
      syncABPropsTask: o("WAWebAbPropsSyncJob").syncABPropsTask,
      syncGroupABProps: I,
      getABPropConfigValue: _,
      getGroupABPropConfigValue: f,
      getABPropFromDb: g,
      getHybridAbProps: S,
      overrideABProp: y,
      resetABProp: C,
      overrideGroupABProp: E,
      resetGroupABProp: k,
      listABProps: v,
      listABPropsFromCache: b,
      getGlobalExpoKey: R,
      setGlobalExpoKey: L,
    };
    l.default = T;
  },
  98,
);
