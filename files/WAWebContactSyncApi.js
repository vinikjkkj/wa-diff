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
      L,
      E = 500,
      k = 20;
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.contactIds,
            n = e.mode,
            a = e.shouldDelayBetweenChunks;
          if (r("justknobx")._("6839") && !o("WAComms").isCommsInitialized()) {
            o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact-sync] comms not initialized, skipping chunked contact sync",
                  ])),
              )
              .tags("contact-sync");
            return;
          }
          var i = E,
            l = Math.ceil(t.length / i);
          o("WALogger")
            .LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
            (a && (yield o("WAPromiseDelays").delayMs(k * 1e3)),
              yield D(
                { contactIds: u, shouldSyncDevice: !0, mode: n },
                o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.PERIODIC_SYNC,
              ));
          }
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
          var a = e.businessProfileVersion,
            i = e.contactIds,
            l = e.mode,
            s = e.shouldSyncDevice;
          if (i.length === 0) return !0;
          if (r("justknobx")._("6839") && !o("WAComms").isCommsInitialized())
            return (
              o("WALogger")
                .LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
            var u = yield G(i),
              c = new (o("WAWebUsync").USyncQuery)()
                .withContext("background")
                .withMode(l)
                .withBusinessProtocol(a)
                .withStatusProtocol();
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
              m = u
                .filter(function (e) {
                  return !e.id.isLid();
                })
                .map(function (e) {
                  return o("WAWebWidFactory").asUserWidOrThrow(e.id);
                }),
              f = new Map(
                r("compactMap")(m, function (e) {
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
              h = yield V(u),
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
                  var R;
                  throw (
                    (v = (R = S.errorBackoff) != null ? R : 10 * Math.random()),
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
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
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
              j(D);
            }
            yield A(C);
            var x = o("WAWebContactSyncLogger").createUpdateCounter();
            return (
              yield (L || (L = n("Promise"))).all([
                s ? q(C, g, x) : (L || (L = n("Promise"))).resolve(),
                M(C, x),
                o("WAWebHandleUsernameSync").handleUsernameSync(C),
                $(C, x),
                P(C),
                O(C, x),
              ]),
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(d, C, x),
              yield W(i),
              a == null || C.error.business == null
            );
          } finally {
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.ContactSync,
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(t, n) {
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
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled())
            return (L || (L = n("Promise"))).resolve();
          var t = e.error.text_status;
          if (t) {
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "handleSyncTextStatus: failed ",
                  " : ",
                  "",
                ])),
              t.errorCode,
              t.errorText,
            );
            return;
          }
          yield (L || (L = n("Promise"))).all(
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
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = e.error.status;
          if (r) {
            o("WALogger").WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "handleDisappearingMode: failed ",
                  " : ",
                  "",
                ])),
              r.errorCode,
              r.errorText,
            );
            return;
          }
          yield (L || (L = n("Promise"))).all(
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.error.lid;
          t &&
            o("WALogger").WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: skip ",
                    " missing id",
                  ])),
                a,
              ),
            l > 0 &&
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: skip ",
                    " lidResults (lid as id) => ",
                    "",
                  ])),
                l,
                i,
              ),
            u > 0 &&
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
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
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        B.apply(this, arguments)
      );
    }
    function W(e) {
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
    function q(e, t, n) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.error.devices;
          r &&
            o("WALogger").WARN(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
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
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
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
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            a = yield (L || (L = n("Promise"))).all(
              r.map(function (e) {
                return e.length === 0 ? "" : o("WAWebPhashUtils").phashV2(e);
              }),
            ),
            i = e.map(function (e, t) {
              return { id: e, hash: a[t] };
            });
          return i;
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
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
    ((l.syncContactListInChunks = I),
      (l.syncContactList = D),
      (l.handleLidSync = A),
      (l.markContactsSyncCompleted = W));
  },
  98,
);
