__d(
  "WAWebInAppSignupInfoStore",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
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
      y = new Map(),
      C = 0;
    function b() {
      return o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
        ? (g == null &&
            (g = o("WAWebSchemaInAppSignupInfo")
              .getInAppSignupInfoTable()
              .all()
              .then(function (e) {
                (o("WAWebInAppSignupInfoCache").primeInAppSignupInfoCache(e),
                  e.some(function (e) {
                    return e.pendingConfirmationSignupId != null;
                  }) && P("deferExpiredPendingConfirmations"));
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
    function v() {
      ((g = null),
        h.clear(),
        y.clear(),
        C++,
        o("WAWebInAppSignupInfoCache").clearInAppSignupInfoCache());
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            if (
              !o("WAWebABProps").getABPropConfigValue(
                "inapp_signup_m1_logging_enabled",
              ) ||
              !o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
            )
              return "unavailable";
            yield b();
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
          if (
            o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            )
          ) {
            yield b();
            var r = o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e);
            (r == null ? void 0 : r.iasOptinDs) == null &&
              (yield S(e, {
                isIasSubscriber: !0,
                iasOptinDs: G(),
                iasEntryPoint:
                  (n = r == null ? void 0 : r.iasEntryPoint) != null ? n : t,
              }));
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          o("WAWebABProps").getABPropConfigValue(
            "inapp_signup_m1_logging_enabled",
          ) &&
            (yield b(),
            ((n = o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e)) == null
              ? void 0
              : n.iasOptinDs) == null && (yield S(e, { iasEntryPoint: t })));
        })),
        I.apply(this, arguments)
      );
    }
    var T = 6e4,
      D = 2e3;
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WATimeUtils").unixTimeMs(),
            r = n + T,
            a = yield S(e, {
              pendingConfirmationSignupId: t,
              pendingConfirmationDeadlineMs: r,
            });
          return a !== "written" ? a : (O(t, r, n), "written");
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "inapp_signup_m1_logging_enabled",
        )
      ) {
        var t = C;
        try {
          r("JSResourceForInteraction")("WAWebPendingConfirmationSweep")
            .__setRef("WAWebInAppSignupInfoStore")
            .load()
            .then(function (n) {
              if (t === C) return n[e]();
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
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var a;
            if (
              !o("WAWebABProps").getABPropConfigValue(
                "inapp_signup_m1_logging_enabled",
              ) ||
              !o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
            )
              return "unavailable";
            yield b();
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
              O(e, u, i),
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
        M.apply(this, arguments)
      );
    }
    var w = 3,
      A = 6e4;
    function F(e) {
      var t,
        n = (t = y.get(e)) != null ? t : 0;
      if (!(n >= w)) {
        var r = o("WATimeUtils").unixTimeMs(),
          a = O(e, r + A, r);
        a && y.set(e, n + 1);
      }
    }
    function O(e, t, n) {
      var a = h.get(e);
      if (a != null && a >= t) return !1;
      h.set(e, t);
      var i = C;
      return (
        o("WAPromiseDelays")
          .delayMs(t - n + D)
          .then(function () {
            i === C &&
              (h.get(e) === t && h.delete(e),
              P("sweepExpiredPendingConfirmations"));
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
        !0
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return V(e, function () {
            return !0;
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
          return V(e, function (e) {
            return (
              e.pendingConfirmationDeadlineMs != null &&
              e.pendingConfirmationDeadlineMs <= t
            );
          });
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            if (
              !o("WAWebABProps").getABPropConfigValue(
                "inapp_signup_m1_logging_enabled",
              ) ||
              !o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
            )
              return "unavailable";
            yield b();
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
                i != null && O(e, i, o("WATimeUtils").unixTimeMs()),
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
        H.apply(this, arguments)
      );
    }
    function G() {
      return new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Los_Angeles",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
        .format(o("WATimeUtils").unixTimeMs())
        .replace(/-/g, "/");
    }
    ((l.ensureInAppSignupInfoHydrated = b),
      (l.clearInAppSignupInfo = v),
      (l.saveOptinDate = L),
      (l.saveEntryPoint = k),
      (l.startPendingConfirmationTimer = x),
      (l.restartPendingConfirmationTimer = N),
      (l.schedulePendingConfirmationRetry = F),
      (l.schedulePendingConfirmationSweep = O),
      (l.stopPendingConfirmationTimer = B),
      (l.stopExpiredPendingConfirmationTimer = q));
  },
  98,
);
