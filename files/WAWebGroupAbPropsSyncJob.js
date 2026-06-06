__d(
  "WAWebGroupAbPropsSyncJob",
  [
    "WAGetGroupAbPropsProtocol",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABPropsLocalStorage",
    "WAWebApiGroupAbPropConfig",
    "WAWebGroupABPropsUpdateFromStorage",
    "WAWebGroupAbPropsParsingJob",
    "WAWebGroupGatingUtils",
    "WAWebSchemaGroupMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 600,
      d = 604800,
      m = 86400;
    function p(e) {
      return e == null ? m : e < c ? c : e > d ? d : e;
    }
    async function _(e) {
      var t,
        n,
        r = await o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(e);
      return {
        hash: (t = r == null ? void 0 : r.groupAbPropsHash) != null ? t : null,
        refresh: p(r == null ? void 0 : r.groupAbPropsRefreshSec),
        lastFetchTimestamp:
          (n = r == null ? void 0 : r.groupAbPropsLastFetchTimestampSec) != null
            ? n
            : null,
      };
    }
    async function f(e) {
      var t = e.groupJid,
        n = e.hash,
        r = e.lastFetchTimestamp,
        a = e.refresh;
      await o("WAWebSchemaGroupMetadata")
        .getGroupMetadataTable()
        .merge(
          t,
          babelHelpers.extends(
            {},
            n != null ? { groupAbPropsHash: n } : void 0,
            {
              groupAbPropsLastFetchTimestampSec:
                o("WATimeUtils").castToUnixTime(r),
              groupAbPropsRefreshSec: p(a),
            },
          ),
        );
    }
    function g(e, t) {
      if (e == null) return !0;
      var n = o("WATimeUtils").unixTime();
      return n - e >= t;
    }
    function h(e) {
      var t = o(
        "WAWebABPropsLocalStorage",
      ).getGroupAbPropsEmergencyPushTimestamp();
      return t == null ? !1 : e == null ? !0 : t > e;
    }
    async function y(t, n) {
      var r = await _(t),
        a = r.hash,
        i = { propsGroup: t, propsHash: n ? a : void 0 },
        l = await o("WAGetGroupAbPropsProtocol").getGroupAbPropsProtocol(i);
      if (!l.success) return { success: !1, updated: !1 };
      var s = l.value,
        u = s.hash,
        c = s.props,
        d = s.refresh,
        m = s.refreshId,
        p = o("WATimeUtils").unixTime();
      if (
        (m != null && o("WAWebABPropsLocalStorage").setGroupAbPropsRefreshId(m),
        u == null)
      )
        return (
          await f({ groupJid: t, hash: a, refresh: d, lastFetchTimestamp: p }),
          { success: !0, updated: !1 }
        );
      try {
        var g = o("WAWebGroupAbPropsParsingJob").parseGroupABProps(t, c);
        return (
          await o("WAWebApiGroupAbPropConfig").updateGroupABPropConfigs(t, g),
          o("WAWebGroupABPropsUpdateFromStorage").updateSingleGroupABPropsCache(
            t,
            g,
          ),
          await f({ groupJid: t, hash: u, refresh: d, lastFetchTimestamp: p }),
          { success: !0, updated: !0 }
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "update GroupABProps config table failed",
              ])),
          )
          .verbose()
          .sendLogs("update GroupABProps config table failed when syncing");
      }
      return { success: !1, updated: !1 };
    }
    async function C(e) {
      if (o("WAWebGroupGatingUtils").isGroupExperimentationEnabled()) {
        var t = await _(e),
          n = t.lastFetchTimestamp,
          r = t.refresh,
          a = h(n);
        if (!(!a && !g(n, r)))
          for (var i = !a && n != null, l = 3; l-- > 0; )
            try {
              var c = await y(e, i);
              if (c.success) return;
            } catch (t) {
              if (l === 0) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "failed to sync GroupABProps for group ",
                        "",
                      ])),
                    e,
                  )
                  .verbose()
                  .sendLogs("failed to sync GroupABProps");
                var d = o("WATimeUtils").unixTime();
                await f({ groupJid: e, lastFetchTimestamp: d });
              } else
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "retrying sync GroupABProps for group ",
                      "",
                    ])),
                  e,
                );
              await o("WAPromiseDelays").delayMs(10 * 1e3 * Math.random());
            }
      }
    }
    l.syncGroupABPropsTask = C;
  },
  98,
);
