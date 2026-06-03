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
    "asyncToGeneratorRuntime",
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .get(e);
          return {
            hash:
              (t = r == null ? void 0 : r.groupAbPropsHash) != null ? t : null,
            refresh: p(r == null ? void 0 : r.groupAbPropsRefreshSec),
            lastFetchTimestamp:
              (n = r == null ? void 0 : r.groupAbPropsLastFetchTimestampSec) !=
              null
                ? n
                : null,
          };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupJid,
            n = e.hash,
            r = e.lastFetchTimestamp,
            a = e.refresh;
          yield o("WAWebSchemaGroupMetadata")
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      if (e == null) return !0;
      var n = o("WATimeUtils").unixTime();
      return n - e >= t;
    }
    function C(e) {
      var t = o(
        "WAWebABPropsLocalStorage",
      ).getGroupAbPropsEmergencyPushTimestamp();
      return t == null ? !1 : e == null ? !0 : t > e;
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield _(t),
            a = r.hash,
            i = { propsGroup: t, propsHash: n ? a : void 0 },
            l = yield o("WAGetGroupAbPropsProtocol").getGroupAbPropsProtocol(i);
          if (!l.success) return { success: !1, updated: !1 };
          var s = l.value,
            u = s.hash,
            c = s.props,
            d = s.refresh,
            m = s.refreshId,
            p = o("WATimeUtils").unixTime();
          if (
            (m != null &&
              o("WAWebABPropsLocalStorage").setGroupAbPropsRefreshId(m),
            u == null)
          )
            return (
              yield g({
                groupJid: t,
                hash: a,
                refresh: d,
                lastFetchTimestamp: p,
              }),
              { success: !0, updated: !1 }
            );
          try {
            var f = o("WAWebGroupAbPropsParsingJob").parseGroupABProps(t, c);
            return (
              yield o("WAWebApiGroupAbPropConfig").updateGroupABPropConfigs(
                t,
                f,
              ),
              o(
                "WAWebGroupABPropsUpdateFromStorage",
              ).updateSingleGroupABPropsCache(t, f),
              yield g({
                groupJid: t,
                hash: u,
                refresh: d,
                lastFetchTimestamp: p,
              }),
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
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebGroupGatingUtils").isGroupExperimentationEnabled()) {
            var t = yield _(e),
              n = t.lastFetchTimestamp,
              r = t.refresh,
              a = C(n);
            if (!(!a && !y(n, r)))
              for (var i = !a && n != null, l = 3; l-- > 0; )
                try {
                  var c = yield b(e, i);
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
                    yield g({ groupJid: e, lastFetchTimestamp: d });
                  } else
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "retrying sync GroupABProps for group ",
                          "",
                        ])),
                      e,
                    );
                  yield o("WAPromiseDelays").delayMs(10 * 1e3 * Math.random());
                }
          }
        })),
        R.apply(this, arguments)
      );
    }
    l.syncGroupABPropsTask = S;
  },
  98,
);
