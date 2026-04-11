__d(
  "WAWebContactSyncApi",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAdvHandlerApi",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebAppTracker",
    "WAWebBizVerifiedNameAction",
    "WAWebContactSyncApiConst",
    "WAWebContactSyncLogger",
    "WAWebContactSyncUtils",
    "WAWebDBCreateLidPnMappings",
    "WAWebGetIdentityKeysJob",
    "WAWebHandleUsernameSync",
    "WAWebLidAwareContactsDB",
    "WAWebLocalStorage",
    "WAWebPhashUtils",
    "WAWebRunInBatches",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGatingUtils",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUpdateTextStatusForContact",
    "WAWebUserPrefsKeys",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.contactIds,
            n = e.mode,
            r = e.shouldDelayBetweenChunks,
            a = o("WAWebContactSyncApiConst").CONTACT_SYNC_CHUNK_SIZE,
            i = Math.ceil(t.length / a);
          o("WALogger")
            .LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-sync] start ",
                  " contacts, ",
                  " chunks, size=",
                  "",
                ])),
              t.length,
              i,
              a,
            )
            .tags("contact-sync");
          for (var l = 0; l < t.length; l += a) {
            var s = t.slice(l, l + a);
            (r &&
              (yield o("WAPromiseDelays").delayMs(
                o("WAWebContactSyncApiConst")
                  .SYNC_CONTACT_CHUNK_INTERVAL_SECONDS * 1e3,
              )),
              yield L(
                { contactIds: s, shouldSyncDevice: !0, mode: n },
                o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.PERIODIC_SYNC,
              ));
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
          var a = e.contactIds,
            i = e.mode,
            l = e.shouldSyncDevice;
          if (a.length !== 0) {
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.ContactSync,
            );
            try {
              var s = yield O(a),
                u = new (o("WAWebUsync").USyncQuery)()
                  .withContext("background")
                  .withMode(i)
                  .withBusinessProtocol()
                  .withStatusProtocol();
              (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
                u.withTextStatusProtocol(),
                l && u.withDeviceProtocol(),
                u.withDisappearingModeProtocol(),
                u.withLidProtocol(),
                u.withUsernameProtocol());
              var c = o(
                  "WAWebContactSyncLogger",
                ).contactSyncLogger.createEventContext({
                  syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                    "background",
                    i,
                  ),
                  requestOrigin:
                    t != null
                      ? t
                      : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
                  requestedCount: s.length,
                  protocols: u.protocols,
                }),
                d = s
                  .filter(function (e) {
                    return !e.id.isLid();
                  })
                  .map(function (e) {
                    return o("WAWebWidFactory").asUserWidOrThrow(e.id);
                  }),
                p = new Map(
                  r("compactMap")(d, function (e) {
                    var t = o("WAWebApiContact").getCurrentLid(e);
                    return t == null ? null : [e.toString(), t];
                  }),
                ),
                _ = s
                  .filter(function (e) {
                    return !e.id.isLid();
                  })
                  .map(function (e) {
                    return e.id;
                  });
              s.forEach(function (e) {
                var t = new (o("WAWebUsyncUser").USyncUser)()
                  .withId(e.id)
                  .withDeviceHash(String(e.hash));
                if (!e.id.isLid()) {
                  var n = p.get(e.id.toString());
                  n != null && t.withLid(n);
                }
                u.withUser(t);
              });
              for (var f = null, g = 3, h = 10 * Math.random(); g-- > 0; )
                try {
                  f = yield u.execute();
                  var y = f.error.all;
                  if (y) {
                    var C;
                    throw (
                      (h =
                        (C = y.errorBackoff) != null ? C : 10 * Math.random()),
                      r("err")(
                        "syncContactList: error " +
                          y.errorCode +
                          ": " +
                          y.errorText,
                      )
                    );
                  } else g = 0;
                } catch (e) {
                  var b = r("getErrorSafe")(e);
                  (g === 0 &&
                    (o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "failed to execute usync query",
                          ])),
                      )
                      .verbose()
                      .sendLogs("failed to execute usync query: " + b.message),
                    o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                      c,
                      b.errorCode,
                      f != null ? f : void 0,
                    )),
                    yield o("WAPromiseDelays").delayMs(h * 1e3));
                }
              if (f == null || f.error.all) return;
              var S = f.refresh,
                R = [];
              for (var L of Object.keys(S)) R.push(S[L]);
              if (R.length > 0) {
                var E = Math.min.apply(Math, R);
                W(E);
              }
              yield $(f);
              var T = o("WAWebContactSyncLogger").createUpdateCounter();
              (yield (v || (v = n("Promise"))).all([
                l ? A(f, _, T) : (v || (v = n("Promise"))).resolve(),
                D(f, T),
                o("WAWebHandleUsernameSync").handleUsernameSync(f),
                k(f, T),
                I(f),
                N(f, T),
              ]),
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(
                  c,
                  f,
                  T,
                ),
                yield w(a));
            } finally {
              o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.ContactSync,
              );
            }
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(t, n) {
      var r = t.error.status;
      if (r) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "handleSyncStatus: failed ",
              " : ",
              "",
            ])),
          r.errorCode,
          r.errorText,
        );
        return;
      }
      t.list.map(function (e) {
        var t = o("WAWebTextStatusCollection").TextStatusCollection.get(e.id);
        t && e.status && (t.set({ status: e.status }), n.statusChange++);
      });
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled())
            return (v || (v = n("Promise"))).resolve();
          var t = e.error.text_status;
          if (t) {
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "handleSyncTextStatus: failed ",
                  " : ",
                  "",
                ])),
              t.errorCode,
              t.errorText,
            );
            return;
          }
          yield (v || (v = n("Promise"))).all(
            e.list.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (e.text_status) {
                      var t = e.text_status,
                        n = t.emoji,
                        r = t.ephemeralDurationSeconds,
                        a = t.lastUpdateTime,
                        i = t.text;
                      yield o(
                        "WAWebUpdateTextStatusForContact",
                      ).updateTextStatusForContact(e.id, i, n, r, a);
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = e.error.status;
          if (r) {
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "handleDisappearingMode: failed ",
                  " : ",
                  "",
                ])),
              r.errorCode,
              r.errorText,
            );
            return;
          }
          yield (v || (v = n("Promise"))).all(
            e.list.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    e.disappearing_mode &&
                      (yield o(
                        "WAWebUpdateDisappearingModeForContact",
                      ).updateDisappearingModeForContact({
                        contactId: e.id,
                        newDuration: e.disappearing_mode.duration,
                        newSettingTimestamp: e.disappearing_mode.t,
                        newEphemeralityDisabled:
                          e.disappearing_mode.ephemeralityDisabled === !0,
                      }),
                      t.disappearingModeChange++);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.error.lid;
          t &&
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "handleLidSync: error ",
                  ": ",
                  "",
                ])),
              t.errorCode,
              t.errorText,
            );
          var n = [],
            r = [],
            a = [],
            i = 0,
            l = [],
            s = 0;
          (e.list.forEach(function (e) {
            var t = e.id,
              u = e.lid,
              c = e.pn;
            if (u != null) {
              if (t.isLid()) {
                (i++, a.length < 3 && a.push(t.toLogString()));
                return;
              }
              n.push({
                lid: o("WAWebWidFactory").createUserWidOrThrow(u, "lid"),
                pn: t,
              });
            } else if (c != null) {
              if (!t.isLid()) {
                (s++, l.length < 3 && l.push(t.toLogString()));
                return;
              }
              r.push({ lid: t, pn: c });
            }
          }),
            i > 0 &&
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: skip ",
                    " lidResults (lid as id) => ",
                    "",
                  ])),
                i,
                a,
              ),
            s > 0 &&
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: skip ",
                    " pnResults (pn as id) => ",
                    "",
                  ])),
                s,
                l,
              ),
            n.length > 0 &&
              r.length > 0 &&
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: mixed types - lid: ",
                    ", pn: ",
                    "",
                  ])),
                n.length,
                r.length,
              ));
          var u = [].concat(n, r);
          u.length > 0 &&
            (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: u,
              flushImmediately: !0,
              learningSource: "usync",
            }));
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.list.filter(function (e) {
            var t = e.business;
            return !!t;
          });
          ((t.businessChange = n.length),
            yield o("WAWebBizVerifiedNameAction").handleVerifiedNameSync(
              n.map(function (e) {
                var t = e.business.verifiedName,
                  n = e.id;
                return { id: n, verifiedName: t };
              }),
            ));
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      var t = e.map(function (e) {
        var t = e.isLid()
          ? o("WAJids").toLidUserJid(e.user)
          : o("WAJids").toPhoneUserJid(e.user);
        return { id: t, isContactSyncCompleted: 1 };
      });
      return (
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "mark ",
                " contacts completed for contact sync",
              ])),
            t.length,
          )
          .tags("contact-sync"),
        o("WAWebABProps").getABPropConfigValue(
          "web_anr_batch_and_queue_bulk_contacts_db_writes_enabled",
        )
          ? o("WAWebRunInBatches").runInBatches(
              t,
              function (e) {
                return r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
                  e,
                  "ContactSyncApi.markContactsSyncCompletedBatched",
                );
              },
              { batchSize: 100 },
            )
          : r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
              t,
              "ContactSyncApi.markContactsSyncCompleted",
            )
      );
    }
    function A(e, t, n) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.error.devices;
          r &&
            o("WALogger").WARN(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "handleSyncDevice: error ",
                  ": ",
                  "",
                ])),
              r.errorCode,
              r.errorText,
            );
          var a = e.list
            .filter(function (e) {
              return (
                e.devices &&
                e.devices.deviceList != null &&
                e.devices.keyIndex != null &&
                !("errorCode" in e.devices)
              );
            })
            .map(function (e) {
              return { wid: e.id, devices: e.devices };
            });
          return (
            (n.deviceChange = a.length),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "handleSyncDevice: skipping ",
                  " out of ",
                  " records",
                ])),
              e.list.length - a.length,
              e.list.length,
            ),
            (a = o("WAWebContactSyncUtils").backfillMissingDeviceSyncEntries(
              t,
              a,
            )),
            yield o("WAWebGetIdentityKeysJob").getAndStoreIdentityKeys(
              a.map(function (e) {
                return e.wid;
              }),
            ),
            o("WAWebAdvHandlerApi").handleADVDeviceSyncResult(a)
          );
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebApiDeviceList").getDeviceIds(e),
            r = t.map(function (e) {
              return e == null
                ? []
                : e.devices.map(function (t) {
                    return o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                      e.id,
                      t.id,
                      t.isHosted,
                    );
                  });
            }),
            a = yield (v || (v = n("Promise"))).all(
              r.map(function (e) {
                return e.length === 0 ? "" : o("WAWebPhashUtils").phashV2(e);
              }),
            ),
            i = e.map(function (e, t) {
              return { id: e, hash: a[t] };
            });
          return i;
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      if (Number.isNaN(e) || e <= o("WATimeUtils").HOUR_SECONDS) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "invalid contact sync refresh period: ",
                "",
              ])),
            e,
          )
          .tags("contact-sync");
        return;
      }
      (o("WALogger")
        .LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "set contact sync refresh period: ",
              "",
            ])),
          e,
        )
        .tags("contact-sync"),
        r("WANullthrows")(r("WAWebLocalStorage")).setItem(
          o("WAWebUserPrefsKeys").KEYS.CONTACT_SYNC_REFRESH,
          String(e),
        ));
    }
    ((l.syncContactListInChunks = S),
      (l.syncContactList = L),
      (l.handleLidSync = $),
      (l.markContactsSyncCompleted = w));
  },
  98,
);
