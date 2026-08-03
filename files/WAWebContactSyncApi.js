__d(
  "WAWebContactSyncApi",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAdvHandlerApi",
    "WAWebApiContact",
    "WAWebApiContactUsernameFields",
    "WAWebApiDeviceList",
    "WAWebAppTracker",
    "WAWebBizVerifiedNameAction",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebContactSyncUtils",
    "WAWebDBCreateLidPnMappings",
    "WAWebGetIdentityKeysJob",
    "WAWebHandleUsernameSync",
    "WAWebLidAwareContactsDB",
    "WAWebLocalStorage",
    "WAWebPhashUtils",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGatingUtils",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUpdateTextStatusForContact",
    "WAWebUserPrefsKeys",
    "WAWebUsernameTypes",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
    "getErrorSafe",
    "nullthrows",
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
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R = 500,
      L = 20;
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.contactIds,
            n = e.mode,
            r = e.shouldDelayBetweenChunks,
            a = R,
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
            (r && (yield o("WAPromiseDelays").delayMs(L * 1e3)),
              yield I(
                { contactIds: s, shouldSyncDevice: !0, mode: n },
                o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.PERIODIC_SYNC,
              ));
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = e.contactIds,
            i = e.mode,
            l = e.shouldSyncDevice;
          if (a.length !== 0) {
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.ContactSync,
            );
            try {
              var s = yield V(a),
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
                  }),
                f = yield q(s);
              s.forEach(function (e) {
                var t = new (o("WAWebUsyncUser").USyncUser)()
                  .withId(e.id)
                  .withDeviceHash(String(e.hash));
                if (!e.id.isLid()) {
                  var n = p.get(e.id.toString());
                  n != null && t.withLid(n);
                }
                var r = o("WAWebUsernameTypes").serializeMaybeUsername(
                  f.get(o("WAWebWidFactory").asUserWidOrThrow(e.id)),
                );
                (r != null && t.withUsername(r), u.withUser(t));
              });
              for (var g = null, h = 3, y = 10 * Math.random(); h-- > 0; )
                try {
                  g = yield u.execute();
                  var C = g.error.all;
                  if (C) {
                    var b;
                    throw (
                      (y =
                        (b = C.errorBackoff) != null ? b : 10 * Math.random()),
                      r("err")(
                        "syncContactList: error " +
                          C.errorCode +
                          ": " +
                          C.errorText,
                      )
                    );
                  } else h = 0;
                } catch (e) {
                  var v = r("getErrorSafe")(e);
                  (h === 0 &&
                    (o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "failed to execute usync query",
                          ])),
                      )
                      .verbose()
                      .sendLogs("failed to execute usync query: " + v.message),
                    o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                      c,
                      v.errorCode,
                      g != null ? g : void 0,
                      o("WAWebContactSyncErrorCodes").BACKGROUND_SYNC,
                    )),
                    yield o("WAPromiseDelays").delayMs(y * 1e3));
                }
              if (g == null || g.error.all) return;
              var R = g.refresh,
                L = [];
              for (var E of Object.keys(R)) L.push(R[E]);
              if (L.length > 0) {
                var k = Math.min.apply(Math, L);
                G(k);
              }
              yield M(g);
              var I = o("WAWebContactSyncLogger").createUpdateCounter();
              (yield (S || (S = n("Promise"))).all([
                l ? B(g, _, I) : (S || (S = n("Promise"))).resolve(),
                P(g, I),
                o("WAWebHandleUsernameSync").handleUsernameSync(g),
                D(g, I),
                x(g),
                A(g, I),
              ]),
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(
                  c,
                  g,
                  I,
                ),
                yield O(a));
            } finally {
              o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.ContactSync,
              );
            }
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(t, n) {
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
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled())
            return (S || (S = n("Promise"))).resolve();
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
          yield (S || (S = n("Promise"))).all(
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
                      ).updateTextStatusForContact({
                        contactId: e.id,
                        textString: i,
                        emoji: n,
                        ephemeralDuration: r,
                        newUpdateTime: a,
                        source: "contact-sync",
                      });
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
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          yield (S || (S = n("Promise"))).all(
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
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            a = 0,
            i = [],
            l = 0,
            s = [],
            u = 0;
          (e.list.forEach(function (e) {
            var t = e.id,
              c = e.lid,
              d = e.pn;
            if (t == null) {
              a++;
              return;
            }
            if (c != null) {
              if (t.isLid()) {
                (l++, i.length < 3 && i.push(t.toLogString()));
                return;
              }
              n.push({
                lid: o("WAWebWidFactory").createUserWidOrThrow(c, "lid"),
                pn: t,
              });
            } else if (d != null) {
              if (!t.isLid()) {
                (u++, s.length < 3 && s.push(t.toLogString()));
                return;
              }
              r.push({ lid: t, pn: d });
            }
          }),
            a > 0 &&
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: skip ",
                    " missing id",
                  ])),
                a,
              ),
            l > 0 &&
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: skip ",
                    " lidResults (lid as id) => ",
                    "",
                  ])),
                l,
                i,
              ),
            u > 0 &&
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: skip ",
                    " pnResults (pn as id) => ",
                    "",
                  ])),
                u,
                s,
              ),
            n.length > 0 &&
              r.length > 0 &&
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: mixed types - lid: ",
                    ", pn: ",
                    "",
                  ])),
                n.length,
                r.length,
              ));
          var c = [].concat(n, r);
          c.length > 0 &&
            (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: c,
              flushImmediately: !0,
              learningSource: "usync",
            }));
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        F.apply(this, arguments)
      );
    }
    function O(e) {
      var t = e.map(function (e) {
        var t = o("WAWebWidToJid").widToUserJid(e);
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
        r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
          t,
          "ContactSyncApi.markContactsSyncCompleted",
        )
      );
    }
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.error.devices;
          r &&
            o("WALogger").WARN(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "username_antiscraping_send_cached_un",
            ) !== !0
          )
            return new Map();
          var t = new Map(),
            n = e.map(function (e) {
              return o("WAWebWidFactory").asUserWidOrThrow(e.id);
            }),
            r = yield o(
              "WAWebApiContactUsernameFields",
            ).bulkGetContactToUsernameInfoMap([].concat(n));
          return (
            n.forEach(function (e) {
              var n,
                o = (n = r.get(e.toJid())) == null ? void 0 : n.username;
              o != null && t.set(e, o);
            }),
            t
          );
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            a = yield (S || (S = n("Promise"))).all(
              r.map(function (e) {
                return e.length === 0 ? "" : o("WAWebPhashUtils").phashV2(e);
              }),
            ),
            i = e.map(function (e, t) {
              return { id: e, hash: a[t] };
            });
          return i;
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
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
        r("nullthrows")(r("WAWebLocalStorage")).setItem(
          o("WAWebUserPrefsKeys").KEYS.CONTACT_SYNC_REFRESH,
          String(e),
        ));
    }
    ((l.syncContactListInChunks = E),
      (l.syncContactList = I),
      (l.handleLidSync = M),
      (l.markContactsSyncCompleted = O));
  },
  98,
);
