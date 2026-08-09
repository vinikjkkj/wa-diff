__d(
  "MAWCreateOneToOneThread",
  [
    "I64",
    "LSAuthorityLevel",
    "LSFactory",
    "LSIntEnum",
    "MAWBridgeSendAndReceive",
    "MAWHandleActThread",
    "MAWJids",
    "MAWMiActMappingTableAPI",
    "MAWThreadLoadingState",
    "MAWThreadMappingQPL",
    "MAWVerifyThreadExistsUtils",
    "Promise",
    "QPLUserFlow",
    "WMIWABridgeApi",
    "asyncToGeneratorRuntime",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["instanceKey"],
      s,
      u,
      c;
    function d(e, t, n, r) {
      if (t != null) return t;
      var a = n != null ? (u || (u = o("I64"))).of_string(n) : void 0,
        i = o("MAWThreadMappingQPL").getInstanceKeyForThreadKey(
          a != null ? a : (u || (u = o("I64"))).zero,
        );
      return (
        o("MAWThreadMappingQPL").start({
          instanceKey: i,
          jid: e,
          threadKey: a,
          trigger: "MAWCreateOneToOneThread_" + r,
        }),
        i
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = yield o(
              "MAWVerifyThreadExistsUtils",
            ).runVerifyThreadExistsSproc(
              r("LSFactory")(e),
              {
                authorityLevel: (c || (c = o("LSIntEnum"))).ofNumber(
                  r("LSAuthorityLevel").OPTIMISTIC,
                ),
                threadType: c.ofNumber(15),
              },
              "MAWCreateOneToOneThread",
            ),
            i = a[0],
            l = yield S(e, t);
          return (
            l === !0 &&
              (o("MAWThreadMappingQPL").addPoint(
                "insert_placeholder_mapping_row",
                n,
              ),
              yield o("MAWThreadLoadingState").markActThreadLoadingAsInProgress(
                e,
                i,
                o("MAWJids").convertChatJidToIntJid(t),
              )),
            (u || (u = o("I64"))).to_string(i)
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.db,
            r = e.description,
            a = e.existingInstanceKey,
            l = e.jid,
            u = e.optimisticThreadKey,
            c = yield y(t.tables, l);
          if (c != null)
            return {
              skippedOrFailedResult: babelHelpers.extends({}, c, { jid: l }),
            };
          var p = d(l, a, u, r),
            _ = t.runInTransaction(
              function (e) {
                return m(e, l, p);
              },
              "readwrite",
              void 0,
              void 0,
              i.id + ":141",
            ),
            f = yield u != null
              ? (s || (s = n("Promise"))).resolve(u)
              : o("MAWThreadMappingQPL").measurePerformance(
                  "running_verify_thread_exists",
                  p,
                  function () {
                    return _;
                  },
                );
          return { instanceKey: p, passedOptimisticThreadKey: f };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r, o, a) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, c) {
            var d = o("MAWJids").convertIntJidToOneToOneChatJid(t),
              m = {
                db: e,
                description: i,
                existingInstanceKey: c,
                jid: d,
                optimisticThreadKey: a,
              },
              p = yield _(m);
            if (p.skippedOrFailedResult != null) return p.skippedOrFailedResult;
            var f = p.instanceKey,
              g = p.passedOptimisticThreadKey,
              h = (u || (u = o("I64"))).to_string(t),
              y = function (a) {
                l != null &&
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(25313175, "1551"),
                    "verify-e2ee-metadata-thread-exists-end",
                    { instanceKey: l },
                  );
                var t = {
                    contactFbid: h,
                    description: i,
                    instanceKey: f,
                    s2sInstanceKey: l,
                    threadKey: a,
                  },
                  u = v(e, d, i, t);
                return (s || (s = n("Promise")))
                  .all([
                    u,
                    r("WMIWABridgeApi").getDevices({
                      ignoreDhash: !1,
                      reason: "creating-1-1-thread: " + i,
                      users: new Set().add(o("MAWJids").toUserJid(h)),
                    }),
                  ])
                  .then(function (e) {
                    var t = e[0].isCreated;
                    return t;
                  });
              };
            return y(g).then(function (e) {
              return { isCreated: e, jid: d };
            });
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("MAWThreadLoadingState").genLoadingStateFromJid(e, t);
          if (n.miState !== o("MAWThreadLoadingState").MiState.MISSING)
            return { isCreated: !1 };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return o("MAWMiActMappingTableAPI")
        .getMappingRowForChatJid(e, n)
        .then(function (r) {
          return (
            r != null &&
            o("MAWThreadLoadingState").markActThreadLoadingAsCompletedForJid(
              e,
              { jid: n, threadKey: (u || (u = o("I64"))).of_string(t) },
            )
          );
        });
    }
    function v(t, n, r, a) {
      var l = a.instanceKey,
        s = babelHelpers.objectWithoutPropertiesLoose(a, e);
      return o("MAWThreadMappingQPL")
        .measurePerformance("maw_create_thread", l, function () {
          return o("MAWBridgeSendAndReceive").sendAndReceive(
            "backend",
            "createOrUpdateThread",
            s,
          );
        })
        .then(function (e) {
          var a = e.created;
          return t.runInTransaction(
            function (e) {
              return o("MAWHandleActThread")
                .handleActThreadWhenOptimisticInMI(e, {
                  description: r,
                  instanceKey: l,
                  jid: n,
                  optimisticThreadKey: s.threadKey,
                })
                .then(function () {
                  return b(e, s.threadKey, n).then(function () {
                    return { isCreated: a };
                  });
                });
            },
            "readwrite",
            void 0,
            void 0,
            i.id + ":275",
          );
        });
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("MAWMiActMappingTableAPI").getMappingRowForChatJid(
            e,
            t,
          );
          return n == null;
        })),
        R.apply(this, arguments)
      );
    }
    l.call = g;
  },
  98,
);
