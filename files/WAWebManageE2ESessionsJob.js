__d(
  "WAWebManageE2ESessionsJob",
  [
    "WAJids",
    "WALogger",
    "WAResolvable",
    "WAWebAeaRollout",
    "WAWebAppTracker",
    "WAWebBackendErrors",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebFetchPrekeysJob",
    "WAWebHandleMsgError",
    "WAWebManagePhoneNumberMappingJob",
    "WAWebProcessKeyBundle",
    "WAWebReleaseToEventLoop",
    "WAWebRunInBatches",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    async function h(e) {
      var t = e.filter(I),
        n = await Promise.all([
          o("WAWebSignal").Session.hasSignalSessions(
            e,
            o("WAWebSessionScope").SessionScope.DEFAULT,
          ),
          o("WAWebSignal").Session.hasSignalSessions(
            t,
            o("WAWebSessionScope").SessionScope.PQ,
          ),
        ]),
        r = n[0],
        a = n[1];
      return {
        default: e.filter(function (e, t) {
          return r[t] === !0;
        }),
        pq: t.filter(function (e, t) {
          return a[t] === !0;
        }),
      };
    }
    var y = 406,
      C = new Map(),
      b = { SESSION_CHECK: 50 };
    async function v(t) {
      var n = t.aeaOptions,
        r = t.identityChanged,
        a = r === void 0 ? !1 : r,
        i = t.options,
        l = t.sessionScope,
        h = t.wids;
      ((i == null ? void 0 : i.skipOfflineDeliveryWait) !== !0 &&
        (await o(
          "WAWebEventsWaitForOfflineDeliveryEnd",
        ).waitForOfflineDeliveryEnd()),
        o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
        ),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "ensureE2ESessions: ",
              " wids: ",
              "",
            ])),
          h.length,
          h
            .map(function (e) {
              return e.toString();
            })
            .join(),
        ));
      try {
        await o(
          "WAWebManagePhoneNumberMappingJob",
        ).ensurePhoneNumberToLidMapping(h);
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "ensureE2ESessions: ",
                " wids: ensurePhoneNumberToLidMapping failed: ",
                "",
              ])),
            h.length,
            e,
          )
          .sendLogs("ensureE2ESessions", { sampling: 0.01 });
      }
      var v = new (o("WAResolvable").Resolvable)(),
        L = [],
        k = [],
        I = [],
        x = [],
        $ = 0,
        P = 0,
        N = 0,
        M = [],
        w = [];
      try {
        if (
          (h.forEach(function (e) {
            var t, r;
            if (!e.isUserNotPSA()) {
              $++;
              return;
            }
            var a = o("WAWebSignalCommonUtils").createSignalAddress(e, l),
              i = o("WAWebAeaRollout").isAeaEnforcementEnabled()
                ? [
                    a,
                    String(n != null),
                    String(n == null ? void 0 : n.isMonitoredSend),
                    String(
                      (n == null ? void 0 : n.isBeforeEnforcedSendDecision) ===
                        !0,
                    ),
                    (t =
                      n == null || (r = n.sendRecipient) == null
                        ? void 0
                        : r.toString()) != null
                      ? t
                      : "",
                  ].join(":")
                : a,
              s = C.get(i);
            s
              ? (L.push(s), k.push(e))
              : (x.push(e), I.push(i), C.set(i, v.promise));
          }),
          $ > 0 &&
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "ensureE2ESessions: ",
                  " wids: ",
                  " skipped (non-user)",
                ])),
              h.length,
              $,
            ),
          x.length > 0)
        ) {
          var A = [];
          if (
            (await o("WAWebRunInBatches").runInBatches(
              x,
              async function (e) {
                var t = await T(e, l);
                A.push.apply(A, t);
              },
              { batchSize: b.SESSION_CHECK },
            ),
            x.forEach(function (e, t) {
              A[t] || w.push(e);
            }),
            w.length > 0)
          ) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "ensureE2ESessions: ",
                  " wids: fetch prekeys for ",
                  " wids",
                ])),
              h.length,
              w.length,
            );
            var F = await o("WAWebFetchPrekeysJob").fetchPrekeys(w, a, void 0, {
                pqSupport: l === o("WAWebSessionScope").SessionScope.PQ,
              }),
              O = F.errors,
              B = F.prekeyBundles;
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "ensureE2ESessions: ",
                  " wids: prekeys ",
                  ": got ",
                  ", err ",
                  "",
                ])),
              h.length,
              w.length,
              B.length,
              O.length,
            );
            var W = await D(B, l, n);
            if (
              ((N += W.depletedPrekeyCount),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions: ",
                    " wids: ",
                    "/",
                    " E2E sessions +",
                  ])),
                h.length,
                W.processedPrekeyCount,
                h.length,
              ),
              W.aeaSkippedPrimaries.length > 0)
            )
              throw new R(W.aeaSkippedPrimaries, O[0]);
            if (O.length > 0) throw O[0];
            P = w.length;
          }
        }
        v.resolve();
      } catch (e) {
        if (
          e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
          e.statusCode === y &&
          w.every(function (e) {
            return (
              e.device != null && e.device !== o("WAJids").DEFAULT_DEVICE_ID
            );
          })
        )
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "ensureE2ESessions: ",
                " wids: failed with 406 error code for companion devices: ",
                "",
              ])),
            h.length,
            w
              .map(function (e) {
                return e.toString();
              })
              .join(),
          ),
            (M = w),
            v.resolve());
        else {
          (o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "ensureE2ESessions: ",
                " wids: request failed: ",
                "",
              ])),
            h.length,
            e,
          ),
            v.resolve(e));
          var q = e;
          throw (
            (n == null ? void 0 : n.isBeforeEnforcedSendDecision) === !0 &&
              o("WAWebAeaRollout").isAeaEnforcementEnabled() &&
              (E(I, v.promise), (q = await S(L, k, e))),
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
            ),
            q
          );
        }
      } finally {
        E(I, v.promise);
      }
      try {
        var U = await S(L, k);
        if (U != null) throw U;
      } catch (e) {
        throw (
          o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "ensureE2ESessions: ",
                " wids: deduped requests failed: ",
                "",
              ])),
            h.length,
            e,
          ),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
          ),
          e
        );
      } finally {
        o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
        );
      }
      return (
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "ensureE2ESessions: ",
              " wids: ",
              " existing, ",
              " req, ",
              " deduped",
            ])),
          h.length,
          x.length - P,
          P,
          L.length,
        ),
        { missedPrekeyCount: P, depletedPrekeyCount: N, deletedDevices: M }
      );
    }
    async function S(e, t, n) {
      var r,
        a,
        i = await Promise.allSettled(e),
        l = i.map(function (e, n) {
          return L(e.status === "fulfilled" ? e.value : e.reason, t[n]);
        });
      return (r =
        (a = l.find(function (e) {
          return e instanceof o("WAWebHandleMsgError").AeaSendBlockedError;
        })) != null
          ? a
          : n) != null
        ? r
        : l.find(function (e) {
            return e != null;
          });
    }
    var R = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this) || this),
          (r.skippedPrimaries = t),
          (r.fetchError = n),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebHandleMsgError").AeaSendBlockedError);
    function L(e, t) {
      return e instanceof R
        ? e.skippedPrimaries.some(function (e) {
            return e.equals(t);
          })
          ? new (o("WAWebHandleMsgError").AeaSendBlockedError)()
          : e.fetchError
        : e;
    }
    function E(e, t) {
      e.forEach(function (e) {
        C.get(e) === t && C.delete(e);
      });
    }
    function k(e, t) {
      return t !== o("WAWebSessionScope").SessionScope.PQ
        ? t
        : e.kyberKey != null && I(e.wid)
          ? o("WAWebSessionScope").SessionScope.PQ
          : o("WAWebSessionScope").SessionScope.DEFAULT;
    }
    function I(e) {
      return (
        o("WAWebSignalCommonUtils").createSignalAddress(
          e,
          o("WAWebSessionScope").SessionScope.DEFAULT,
        ) !==
        o("WAWebSignalCommonUtils").createSignalAddress(
          e,
          o("WAWebSessionScope").SessionScope.PQ,
        )
      );
    }
    async function T(e, t) {
      if (t !== o("WAWebSessionScope").SessionScope.PQ)
        return o("WAWebSignal").Session.hasSignalSessions(e, t);
      var n = await h(e),
        r = n.default,
        a = n.pq,
        i = new Set([].concat(r, a));
      return e.map(function (e) {
        return i.has(e);
      });
    }
    async function D(e, t, n) {
      var r = 0,
        a = 0,
        i = [];
      for (var l of e) {
        var s,
          u,
          c,
          d = k(l, t),
          m = await o("WAWebProcessKeyBundle").processKeyBundles([l], d, n);
        ((r += (s = m.depletedPrekeyCount) != null ? s : 0),
          (a += (u = m.processedPrekeyCount) != null ? u : 0),
          i.push.apply(i, (c = m.aeaSkippedPrimaries) != null ? c : []),
          await o("WAWebReleaseToEventLoop").releaseToEventLoop());
      }
      return {
        depletedPrekeyCount: r,
        processedPrekeyCount: a,
        aeaSkippedPrimaries: i,
      };
    }
    ((l.getSignalSessionWids = h),
      (l.ensureE2ESessions = v),
      (l.getPrekeyBundleSessionScope = k));
  },
  98,
);
