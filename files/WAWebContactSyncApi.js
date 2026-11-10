__d(
  "WAWebContactSyncApi",
  [
    "Promise",
    "WAComms",
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
    "WAWebContactSyncPrivacyHints",
    "WAWebContactSyncUtils",
    "WAWebDBCreateLidPnMappings",
    "WAWebGetIdentityKeysJob",
    "WAWebHandleUsernameSync",
    "WAWebLidAwareContactsDB",
    "WAWebLocalStorage",
    "WAWebPhashUtils",
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
    "cr:17537",
    "err",
    "getErrorSafe",
    "justknobx",
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
      R,
      L = 500,
      E = 20;
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.contactIds,
            n = e.mode,
            a = e.shouldDelayBetweenChunks;
          if (r("justknobx")._("6839") && !o("WAComms").isCommsInitialized()) {
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact-sync] comms not initialized, skipping chunked contact sync",
                  ])),
              )
              .tags("contact-sync");
            return;
          }
          var i = L,
            l = Math.ceil(t.length / i);
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
              l,
              i,
            )
            .tags("contact-sync");
          for (var s = 0; s < t.length; s += i) {
            var u = t.slice(s, s + i);
            (a && (yield o("WAPromiseDelays").delayMs(E * 1e3)),
              yield T(
                { contactIds: u, shouldSyncDevice: !0, mode: n },
                o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.PERIODIC_SYNC,
              ));
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = e.businessProfileVersion,
            i = e.contactIds,
            l = e.mode,
            s = e.shouldSyncDevice;
          if (i.length === 0) return !0;
          if (r("justknobx")._("6839") && !o("WAComms").isCommsInitialized())
            return (
              o("WALogger")
                .LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[contact-sync] comms not initialized, skipping contact sync",
                    ])),
                )
                .tags("contact-sync"),
              !1
            );
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.ContactSync,
          );
          try {
            var u = yield V(i),
              c = new (o("WAWebUsync").USyncQuery)()
                .withContext("background")
                .withMode(l)
                .withBusinessProtocol(a);
            (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
              c.withTextStatusProtocol(),
              s && c.withDeviceProtocol(),
              c.withDisappearingModeProtocol(),
              c.withLidProtocol(),
              c.withUsernameProtocol());
            var d = o(
                "WAWebContactSyncLogger",
              ).contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                  "background",
                  l,
                ),
                requestOrigin:
                  t != null
                    ? t
                    : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
                requestedCount: u.length,
                protocols: c.protocols,
              }),
              _ = u
                .filter(function (e) {
                  return !e.id.isLid();
                })
                .map(function (e) {
                  return o("WAWebWidFactory").asUserWidOrThrow(e.id);
                }),
              f = new Map(
                r("compactMap")(_, function (e) {
                  var t = o("WAWebApiContact").getCurrentLid(e);
                  return t == null ? null : [e.toString(), t];
                }),
              ),
              g = u
                .filter(function (e) {
                  return !e.id.isLid();
                })
                .map(function (e) {
                  return e.id;
                }),
              h = yield q(u),
              y = o("WAWebContactSyncPrivacyHints").usyncPrivacyHintsEnabled()
                ? yield o("WAWebContactSyncPrivacyHints").getUsyncPrivacyHints(
                    u.map(function (e) {
                      return e.id;
                    }),
                  )
                : new Map();
            u.forEach(function (e) {
              var t = new (o("WAWebUsyncUser").USyncUser)()
                .withId(e.id)
                .withDeviceHash(String(e.hash));
              if (!e.id.isLid()) {
                var n = f.get(e.id.toString());
                n != null && t.withLid(n);
              }
              var r = o("WAWebUsernameTypes").serializeMaybeUsername(
                h.get(o("WAWebWidFactory").asUserWidOrThrow(e.id)),
              );
              r != null && t.withUsername(r);
              var a = y.get(e.id);
              (a != null && t.withTcToken(a.tcToken).withCommonGid(a.commonGid),
                c.withUser(t));
            });
            for (var C = null, b = 3, v = 10 * Math.random(); b-- > 0; )
              try {
                C = yield c.execute();
                var S = C.error.all;
                if (S) {
                  var L;
                  throw (
                    (v = (L = S.errorBackoff) != null ? L : 10 * Math.random()),
                    r("err")(
                      "syncContactList: error " +
                        S.errorCode +
                        ": " +
                        S.errorText,
                    )
                  );
                } else b = 0;
              } catch (e) {
                var E = r("getErrorSafe")(e);
                (b === 0 &&
                  (o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "failed to execute usync query",
                        ])),
                    )
                    .verbose()
                    .sendLogs("failed to execute usync query: " + E.message),
                  o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                    d,
                    E.errorCode,
                    C != null ? C : void 0,
                    o("WAWebContactSyncErrorCodes").BACKGROUND_SYNC,
                  )),
                  yield o("WAPromiseDelays").delayMs(v * 1e3));
              }
            if (C == null || C.error.all) return !1;
            var k = C.refresh,
              I = [];
            for (var T of Object.keys(k)) I.push(k[T]);
            if (I.length > 0) {
              var D = Math.min.apply(Math, I);
              G(D);
            }
            yield M(C);
            var $ = o("WAWebContactSyncLogger").createUpdateCounter();
            return (
              yield (R || (R = n("Promise"))).all([
                s ? B(C, g, $) : (R || (R = n("Promise"))).resolve(),
                P(C, $),
                o("WAWebHandleUsernameSync").handleUsernameSync(C),
                x(C),
                A(C, $),
              ]),
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(d, C, $),
              yield O(i),
              a == null || C.error.business == null
            );
          } finally {
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.ContactSync,
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled())
            return (R || (R = n("Promise"))).resolve();
          var t = e.error.text_status;
          if (t) {
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "handleSyncTextStatus: failed ",
                  " : ",
                  "",
                ])),
              t.errorCode,
              t.errorText,
            );
            return;
          }
          yield (R || (R = n("Promise"))).all(
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
          var r = e.error.disappearing_mode;
          if (r) {
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "handleDisappearingMode: failed ",
                  " : ",
                  "",
                ])),
              r.errorCode,
              r.errorText,
            );
            return;
          }
          yield (R || (R = n("Promise"))).all(
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
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
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
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: skip ",
                    " missing id",
                  ])),
                a,
              ),
            l > 0 &&
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: skip ",
                    " lidResults (lid as id) => ",
                    "",
                  ])),
                l,
                i,
              ),
            u > 0 &&
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
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
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
          var r = e.list.filter(function (e) {
            var t = e.business;
            return !!t;
          });
          ((t.businessChange = r.length),
            yield o("WAWebBizVerifiedNameAction").handleVerifiedNameSync(
              r.map(function (e) {
                var t = e.business.verifiedName,
                  n = e.id;
                return { id: n, verifiedName: t };
              }),
            ),
            n("cr:17537") == null ||
              n("cr:17537").observeAeaBusinessAccountTypes(
                r.map(function (e) {
                  var t = e.business.aeaAccountType,
                    n = e.id;
                  return { wid: n, aeaAccountType: t };
                }),
              ));
        })),
        F.apply(this, arguments)
      );
    }
    function O(t) {
      var n = t.map(function (e) {
        var t = o("WAWebWidToJid").widToUserJid(e);
        return { id: t, isContactSyncCompleted: 1 };
      });
      return (
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "mark ",
                " contacts completed for contact sync",
              ])),
            n.length,
          )
          .tags("contact-sync"),
        r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
          n,
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
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
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
            a = yield (R || (R = n("Promise"))).all(
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
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
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
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.syncContactListInChunks = k),
      (l.syncContactList = T),
      (l.handleLidSync = M),
      (l.markContactsSyncCompleted = O));
  },
  98,
);
