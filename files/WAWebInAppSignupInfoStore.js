__d(
  "WAWebInAppSignupInfoStore",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebInAppSignupInfoCache",
    "WAWebModelStorageUtils",
    "WAWebSchemaInAppSignupInfo",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = "in-app-signup-info",
      g = null,
      h = new Map(),
      y = new Map();
    function C() {
      return o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
        ? (g == null &&
            (g = o("WAWebSchemaInAppSignupInfo")
              .getInAppSignupInfoTable()
              .all()
              .then(function (e) {
                (o("WAWebInAppSignupInfoCache").primeInAppSignupInfoCache(e),
                  e.some(function (e) {
                    return e.pendingConfirmationSignupId != null;
                  }) && x("deferExpiredPendingConfirmations"));
              })
              .catch(function (t) {
                ((g = null),
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[ias-store] hydrate failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("ias-store-hydrate-failed"));
              })),
          g)
        : (_ || (_ = n("Promise"))).resolve();
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            if (
              !o("WAWebABProps").getABPropConfigValue(
                "inapp_signup_m1_logging_enabled",
              ) ||
              !o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
            )
              return "unavailable";
            yield C();
            var n = o("WAWebSchemaInAppSignupInfo").getInAppSignupInfoTable();
            return (
              yield n.createOrMerge(e, babelHelpers.extends({}, t, { id: e })),
              o("WAWebInAppSignupInfoCache").setInAppSignupInfo(
                o("WAWebInAppSignupInfoCache").buildMergedInAppSignupInfoRow(
                  e,
                  t,
                ),
              ),
              "written"
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[ias-store] write failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("ias-store-write-failed"),
              "write_failed"
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (
            o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            )
          ) {
            yield C();
            var r = o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e);
            (r == null ? void 0 : r.iasOptinDs) == null &&
              (yield b(e, {
                isIasSubscriber: !0,
                iasOptinDs: V(),
                iasEntryPoint:
                  (n = r == null ? void 0 : r.iasEntryPoint) != null ? n : t,
              }));
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          o("WAWebABProps").getABPropConfigValue(
            "inapp_signup_m1_logging_enabled",
          ) &&
            (yield C(),
            ((n = o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e)) == null
              ? void 0
              : n.iasOptinDs) == null && (yield b(e, { iasEntryPoint: t })));
        })),
        E.apply(this, arguments)
      );
    }
    var k = 6e4,
      I = 2e3;
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WATimeUtils").unixTimeMs(),
            r = n + k,
            a = yield b(e, {
              pendingConfirmationSignupId: t,
              pendingConfirmationDeadlineMs: r,
            });
          return a !== "written" ? a : (A(t, r, n), "written");
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "inapp_signup_m1_logging_enabled",
        )
      )
        try {
          r("JSResourceForInteraction")("WAWebPendingConfirmationSweep")
            .__setRef("WAWebInAppSignupInfoStore")
            .load()
            .then(function (t) {
              return t[e]();
            })
            .catch(function (t) {
              return o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:confirmation] ",
                      " failed",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("signup-pending-confirmation-sweep-failed");
            });
        } catch (t) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[signup:confirmation] ",
                  " failed to start",
                ])),
              e,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("signup-pending-confirmation-sweep-failed");
        }
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var a;
            if (
              !o("WAWebABProps").getABPropConfigValue(
                "inapp_signup_m1_logging_enabled",
              ) ||
              !o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
            )
              return "unavailable";
            yield C();
            var i = o("WATimeUtils").unixTimeMs(),
              l = i + t,
              s = yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  [f],
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var n,
                          r = t[0],
                          o = yield r.all(),
                          a = o.find(function (t) {
                            return (
                              t.pendingConfirmationSignupId === e &&
                              t.pendingConfirmationDeadlineMs != null
                            );
                          });
                        if (a == null) return null;
                        var i =
                          ((n = a.pendingConfirmationDeadlineMs) != null
                            ? n
                            : 0) < l;
                        return (
                          i &&
                            (yield r.createOrMerge(a.id, {
                              id: a.id,
                              pendingConfirmationDeadlineMs: l,
                            })),
                          { existing: a, wrote: i }
                        );
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                );
            if (s == null) return "not_found";
            var u = Math.max(
              (a = s.existing.pendingConfirmationDeadlineMs) != null ? a : 0,
              l,
            );
            return (
              o("WAWebInAppSignupInfoCache").setInAppSignupInfo(
                o("WAWebInAppSignupInfoCache").buildMergedInAppSignupInfoRow(
                  s.existing.id,
                  { pendingConfirmationDeadlineMs: u },
                ),
              ),
              A(e, u, i),
              s.wrote ? "written" : "unchanged"
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[ias-store] restart failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("ias-store-restart-failed"),
              "write_failed"
            );
          }
        })),
        P.apply(this, arguments)
      );
    }
    var N = 3,
      M = 6e4;
    function w(e) {
      var t,
        n = (t = y.get(e)) != null ? t : 0;
      if (!(n >= N)) {
        var r = o("WATimeUtils").unixTimeMs(),
          a = A(e, r + M, r);
        a && y.set(e, n + 1);
      }
    }
    function A(e, t, n) {
      var a = h.get(e);
      return a != null && a >= t
        ? !1
        : (h.set(e, t),
          o("WAPromiseDelays")
            .delayMs(t - n + I)
            .then(function () {
              (h.get(e) === t && h.delete(e),
                x("sweepExpiredPendingConfirmations"));
            })
            .catch(function (t) {
              return o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:confirmation] sweep timer failed signupId=",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("signup-pending-confirmation-sweep-failed");
            }),
          !0);
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return q(e, o("WAWebBoolFunc").returnTrue);
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return q(e, function (e) {
            return (
              e.pendingConfirmationDeadlineMs != null &&
              e.pendingConfirmationDeadlineMs <= t
            );
          });
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            if (
              !o("WAWebABProps").getABPropConfigValue(
                "inapp_signup_m1_logging_enabled",
              ) ||
              !o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
            )
              return "unavailable";
            yield C();
            var a = yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [f],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r = n[0],
                        o = yield r.all(),
                        a = o.find(function (t) {
                          return t.pendingConfirmationSignupId === e;
                        });
                      return a == null
                        ? { row: null, cleared: !1 }
                        : t(a)
                          ? (yield r.createOrMerge(a.id, {
                              id: a.id,
                              pendingConfirmationSignupId: void 0,
                              pendingConfirmationDeadlineMs: void 0,
                            }),
                            { row: a, cleared: !0 })
                          : { row: a, cleared: !1 };
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              );
            if (a.row == null) return (y.delete(e), "not_found");
            if (!a.cleared) {
              var i = a.row.pendingConfirmationDeadlineMs;
              return (
                i != null && A(e, i, o("WATimeUtils").unixTimeMs()),
                "not_expired"
              );
            }
            var l = a.row;
            return (
              o("WAWebInAppSignupInfoCache").setInAppSignupInfo(
                babelHelpers.extends(
                  {},
                  o("WAWebInAppSignupInfoCache").buildMergedInAppSignupInfoRow(
                    l.id,
                    l,
                  ),
                  {
                    pendingConfirmationSignupId: void 0,
                    pendingConfirmationDeadlineMs: void 0,
                  },
                ),
              ),
              y.delete(e),
              "cleared"
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[ias-store] stop failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("ias-store-stop-failed"),
              "write_failed"
            );
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V() {
      return new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Los_Angeles",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
        .format(o("WATimeUtils").unixTimeMs())
        .replace(/-/g, "/");
    }
    ((l.ensureInAppSignupInfoHydrated = C),
      (l.saveOptinDate = S),
      (l.saveEntryPoint = L),
      (l.startPendingConfirmationTimer = T),
      (l.restartPendingConfirmationTimer = $),
      (l.schedulePendingConfirmationRetry = w),
      (l.schedulePendingConfirmationSweep = A),
      (l.stopPendingConfirmationTimer = F),
      (l.stopExpiredPendingConfirmationTimer = B));
  },
  98,
);
