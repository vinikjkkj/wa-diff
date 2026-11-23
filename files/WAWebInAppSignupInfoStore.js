__d(
  "WAWebInAppSignupInfoStore",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebInAppSignupInfoCache",
    "WAWebModelStorageUtils",
    "WAWebSchemaInAppSignupInfo",
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
      _ = "in-app-signup-info",
      f = null,
      g = new Map(),
      h = new Map();
    function y() {
      return o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
        ? (f == null &&
            (f = o("WAWebSchemaInAppSignupInfo")
              .getInAppSignupInfoTable()
              .all()
              .then(function (e) {
                (o("WAWebInAppSignupInfoCache").primeInAppSignupInfoCache(e),
                  e.some(function (e) {
                    return e.pendingConfirmationSignupId != null;
                  }) && E("deferExpiredPendingConfirmations"));
              })
              .catch(function (t) {
                ((f = null),
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
          f)
        : Promise.resolve();
    }
    async function C(e, t) {
      try {
        if (
          !o("WAWebABProps").getABPropConfigValue(
            "inapp_signup_m1_logging_enabled",
          ) ||
          !o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
        )
          return "unavailable";
        await y();
        var n = o("WAWebSchemaInAppSignupInfo").getInAppSignupInfoTable();
        return (
          await n.createOrMerge(e, babelHelpers.extends({}, t, { id: e })),
          o("WAWebInAppSignupInfoCache").setInAppSignupInfo(
            o("WAWebInAppSignupInfoCache").buildMergedInAppSignupInfoRow(e, t),
          ),
          "written"
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[ias-store] write failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("ias-store-write-failed"),
          "write_failed"
        );
      }
    }
    async function b(e, t) {
      var n;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "inapp_signup_m1_logging_enabled",
        )
      ) {
        await y();
        var r = o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e);
        (r == null ? void 0 : r.iasOptinDs) == null &&
          (await C(e, {
            isIasSubscriber: !0,
            iasOptinDs: M(),
            iasEntryPoint:
              (n = r == null ? void 0 : r.iasEntryPoint) != null ? n : t,
          }));
      }
    }
    async function v(e, t) {
      var n;
      o("WAWebABProps").getABPropConfigValue(
        "inapp_signup_m1_logging_enabled",
      ) &&
        (await y(),
        ((n = o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e)) == null
          ? void 0
          : n.iasOptinDs) == null && (await C(e, { iasEntryPoint: t })));
    }
    var S = 6e4,
      R = 2e3;
    async function L(e, t) {
      var n = o("WATimeUtils").unixTimeMs(),
        r = n + S,
        a = await C(e, {
          pendingConfirmationSignupId: t,
          pendingConfirmationDeadlineMs: r,
        });
      return a !== "written" ? a : (x(t, r, n), "written");
    }
    function E(e) {
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[signup:confirmation] ",
                  " failed to start",
                ])),
              e,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("signup-pending-confirmation-sweep-failed");
        }
    }
    async function k(e, t) {
      try {
        var n;
        if (
          !o("WAWebABProps").getABPropConfigValue(
            "inapp_signup_m1_logging_enabled",
          ) ||
          !o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
        )
          return "unavailable";
        await y();
        var a = o("WATimeUtils").unixTimeMs(),
          i = a + t,
          l = await o("WAWebModelStorageUtils")
            .getStorage()
            .lock([_], async function (t) {
              var n,
                r = t[0],
                o = await r.all(),
                a = o.find(function (t) {
                  return (
                    t.pendingConfirmationSignupId === e &&
                    t.pendingConfirmationDeadlineMs != null
                  );
                });
              if (a == null) return null;
              var l =
                ((n = a.pendingConfirmationDeadlineMs) != null ? n : 0) < i;
              return (
                l &&
                  (await r.createOrMerge(a.id, {
                    id: a.id,
                    pendingConfirmationDeadlineMs: i,
                  })),
                { existing: a, wrote: l }
              );
            });
        if (l == null) return "not_found";
        var s = Math.max(
          (n = l.existing.pendingConfirmationDeadlineMs) != null ? n : 0,
          i,
        );
        return (
          o("WAWebInAppSignupInfoCache").setInAppSignupInfo(
            o("WAWebInAppSignupInfoCache").buildMergedInAppSignupInfoRow(
              l.existing.id,
              { pendingConfirmationDeadlineMs: s },
            ),
          ),
          x(e, s, a),
          l.wrote ? "written" : "unchanged"
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[ias-store] restart failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("ias-store-restart-failed"),
          "write_failed"
        );
      }
    }
    var I = 3,
      T = 6e4;
    function D(e) {
      var t,
        n = (t = h.get(e)) != null ? t : 0;
      if (!(n >= I)) {
        var r = o("WATimeUtils").unixTimeMs(),
          a = x(e, r + T, r);
        a && h.set(e, n + 1);
      }
    }
    function x(e, t, n) {
      var a = g.get(e);
      return a != null && a >= t
        ? !1
        : (g.set(e, t),
          o("WAPromiseDelays")
            .delayMs(t - n + R)
            .then(function () {
              (g.get(e) === t && g.delete(e),
                E("sweepExpiredPendingConfirmations"));
            })
            .catch(function (t) {
              return o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
    async function $(e) {
      return N(e, o("WAWebBoolFunc").returnTrue);
    }
    async function P(e, t) {
      return N(e, function (e) {
        return (
          e.pendingConfirmationDeadlineMs != null &&
          e.pendingConfirmationDeadlineMs <= t
        );
      });
    }
    async function N(e, t) {
      try {
        if (
          !o("WAWebABProps").getABPropConfigValue(
            "inapp_signup_m1_logging_enabled",
          ) ||
          !o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
        )
          return "unavailable";
        await y();
        var n = await o("WAWebModelStorageUtils")
          .getStorage()
          .lock([_], async function (n) {
            var r = n[0],
              o = await r.all(),
              a = o.find(function (t) {
                return t.pendingConfirmationSignupId === e;
              });
            return a == null
              ? { row: null, cleared: !1 }
              : t(a)
                ? (await r.createOrMerge(a.id, {
                    id: a.id,
                    pendingConfirmationSignupId: void 0,
                    pendingConfirmationDeadlineMs: void 0,
                  }),
                  { row: a, cleared: !0 })
                : { row: a, cleared: !1 };
          });
        if (n.row == null) return (h.delete(e), "not_found");
        if (!n.cleared) {
          var a = n.row.pendingConfirmationDeadlineMs;
          return (
            a != null && x(e, a, o("WATimeUtils").unixTimeMs()),
            "not_expired"
          );
        }
        var i = n.row;
        return (
          o("WAWebInAppSignupInfoCache").setInAppSignupInfo(
            babelHelpers.extends(
              {},
              o("WAWebInAppSignupInfoCache").buildMergedInAppSignupInfoRow(
                i.id,
                i,
              ),
              {
                pendingConfirmationSignupId: void 0,
                pendingConfirmationDeadlineMs: void 0,
              },
            ),
          ),
          h.delete(e),
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
    }
    function M() {
      return new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Los_Angeles",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
        .format(o("WATimeUtils").unixTimeMs())
        .replace(/-/g, "/");
    }
    ((l.ensureInAppSignupInfoHydrated = y),
      (l.saveOptinDate = b),
      (l.saveEntryPoint = v),
      (l.startPendingConfirmationTimer = L),
      (l.restartPendingConfirmationTimer = k),
      (l.schedulePendingConfirmationRetry = D),
      (l.schedulePendingConfirmationSweep = x),
      (l.stopPendingConfirmationTimer = $),
      (l.stopExpiredPendingConfirmationTimer = P));
  },
  98,
);
