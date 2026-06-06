__d(
  "WAWebContactSyncApi",
  [
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebAdvHandlerApi",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebAppTracker",
    "WAWebBizVerifiedNameAction",
    "WAWebContactSyncApiConst",
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
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "compactMap",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    async function S(t) {
      var n = t.contactIds,
        r = t.mode,
        a = t.shouldDelayBetweenChunks,
        i = o("WAWebContactSyncApiConst").CONTACT_SYNC_CHUNK_SIZE,
        l = Math.ceil(n.length / i);
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[contact-sync] start ",
              " contacts, ",
              " chunks, size=",
              "",
            ])),
          n.length,
          l,
          i,
        )
        .tags("contact-sync");
      for (var s = 0; s < n.length; s += i) {
        var u = n.slice(s, s + i);
        (a &&
          (await o("WAPromiseDelays").delayMs(
            o("WAWebContactSyncApiConst").SYNC_CONTACT_CHUNK_INTERVAL_SECONDS *
              1e3,
          )),
          await R(
            { contactIds: u, shouldSyncDevice: !0, mode: r },
            o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.PERIODIC_SYNC,
          ));
      }
    }
    async function R(e, t) {
      var n = e.contactIds,
        a = e.mode,
        i = e.shouldSyncDevice;
      if (n.length !== 0) {
        o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.ContactSync,
        );
        try {
          var l = await $(n),
            u = new (o("WAWebUsync").USyncQuery)()
              .withContext("background")
              .withMode(a)
              .withBusinessProtocol()
              .withStatusProtocol();
          (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
            u.withTextStatusProtocol(),
            i && u.withDeviceProtocol(),
            u.withDisappearingModeProtocol(),
            u.withLidProtocol(),
            u.withUsernameProtocol());
          var c = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "background",
                a,
              ),
              requestOrigin:
                t != null
                  ? t
                  : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
              requestedCount: l.length,
              protocols: u.protocols,
            }),
            d = l
              .filter(function (e) {
                return !e.id.isLid();
              })
              .map(function (e) {
                return o("WAWebWidFactory").asUserWidOrThrow(e.id);
              }),
            m = new Map(
              r("compactMap")(d, function (e) {
                var t = o("WAWebApiContact").getCurrentLid(e);
                return t == null ? null : [e.toString(), t];
              }),
            ),
            p = l
              .filter(function (e) {
                return !e.id.isLid();
              })
              .map(function (e) {
                return e.id;
              });
          l.forEach(function (e) {
            var t = new (o("WAWebUsyncUser").USyncUser)()
              .withId(e.id)
              .withDeviceHash(String(e.hash));
            if (!e.id.isLid()) {
              var n = m.get(e.id.toString());
              n != null && t.withLid(n);
            }
            u.withUser(t);
          });
          for (var _ = null, f = 3, g = 10 * Math.random(); f-- > 0; )
            try {
              _ = await u.execute();
              var h = _.error.all;
              if (h) {
                var y;
                throw (
                  (g = (y = h.errorBackoff) != null ? y : 10 * Math.random()),
                  r("err")(
                    "syncContactList: error " +
                      h.errorCode +
                      ": " +
                      h.errorText,
                  )
                );
              } else f = 0;
            } catch (e) {
              var C = r("getErrorSafe")(e);
              (f === 0 &&
                (o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "failed to execute usync query",
                      ])),
                  )
                  .verbose()
                  .sendLogs("failed to execute usync query: " + C.message),
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                  c,
                  C.errorCode,
                  _ != null ? _ : void 0,
                  o("WAWebContactSyncErrorCodes").BACKGROUND_SYNC,
                )),
                await o("WAPromiseDelays").delayMs(g * 1e3));
            }
          if (_ == null || _.error.all) return;
          var b = _.refresh,
            v = [];
          for (var S of Object.keys(b)) v.push(b[S]);
          if (v.length > 0) {
            var R = Math.min.apply(Math, v);
            P(R);
          }
          await I(_);
          var N = o("WAWebContactSyncLogger").createUpdateCounter();
          (await Promise.all([
            i ? x(_, p, N) : Promise.resolve(),
            k(_, N),
            o("WAWebHandleUsernameSync").handleUsernameSync(_),
            L(_, N),
            E(_),
            T(_, N),
          ]),
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(c, _, N),
            await D(n));
        } finally {
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.ContactSync,
          );
        }
      }
    }
    function L(e, t) {
      var n = e.error.status;
      if (n) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "handleSyncStatus: failed ",
              " : ",
              "",
            ])),
          n.errorCode,
          n.errorText,
        );
        return;
      }
      e.list.map(function (e) {
        var n = o("WAWebTextStatusCollection").TextStatusCollection.get(e.id);
        n && e.status && (n.set({ status: e.status }), t.statusChange++);
      });
    }
    async function E(e) {
      if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled())
        return Promise.resolve();
      var t = e.error.text_status;
      if (t) {
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "handleSyncTextStatus: failed ",
              " : ",
              "",
            ])),
          t.errorCode,
          t.errorText,
        );
        return;
      }
      await Promise.all(
        e.list.map(async function (e) {
          if (e.text_status) {
            var t = e.text_status,
              n = t.emoji,
              r = t.ephemeralDurationSeconds,
              a = t.lastUpdateTime,
              i = t.text;
            await o(
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
        }),
      );
    }
    async function k(e, t) {
      var n = e.error.status;
      if (n) {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "handleDisappearingMode: failed ",
              " : ",
              "",
            ])),
          n.errorCode,
          n.errorText,
        );
        return;
      }
      await Promise.all(
        e.list.map(async function (e) {
          e.disappearing_mode &&
            (await o(
              "WAWebUpdateDisappearingModeForContact",
            ).updateDisappearingModeForContact({
              contactId: e.id,
              newDuration: e.disappearing_mode.duration,
              newSettingTimestamp: e.disappearing_mode.t,
              newEphemeralityDisabled:
                e.disappearing_mode.ephemeralityDisabled === !0,
            }),
            t.disappearingModeChange++);
        }),
      );
    }
    async function I(e) {
      var t = e.error.lid;
      t &&
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
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
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "handleLidSync: skip ",
                " missing id",
              ])),
            a,
          ),
        l > 0 &&
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "handleLidSync: skip ",
                " lidResults (lid as id) => ",
                "",
              ])),
            l,
            i,
          ),
        u > 0 &&
          o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
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
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "handleLidSync: mixed types - lid: ",
                ", pn: ",
                "",
              ])),
            n.length,
            r.length,
          ));
      var c = [].concat(n, r);
      c.length > 0 &&
        (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
          mappings: c,
          flushImmediately: !0,
          learningSource: "usync",
        }));
    }
    async function T(e, t) {
      var n = e.list.filter(function (e) {
        var t = e.business;
        return !!t;
      });
      ((t.businessChange = n.length),
        await o("WAWebBizVerifiedNameAction").handleVerifiedNameSync(
          n.map(function (e) {
            var t = e.business.verifiedName,
              n = e.id;
            return { id: n, verifiedName: t };
          }),
        ));
    }
    function D(e) {
      var t = e.map(function (e) {
        var t = e.isLid()
          ? o("WAJids").toLidUserJid(e.user)
          : o("WAJids").toPhoneUserJid(e.user);
        return { id: t, isContactSyncCompleted: 1 };
      });
      return (
        o("WALogger")
          .LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
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
    async function x(e, t, n) {
      var r = e.error.devices;
      r &&
        o("WALogger").WARN(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
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
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "handleSyncDevice: skipping ",
              " out of ",
              " records",
            ])),
          e.list.length - a.length,
          e.list.length,
        ),
        (a = o("WAWebContactSyncUtils").backfillMissingDeviceSyncEntries(t, a)),
        await o("WAWebGetIdentityKeysJob").getAndStoreIdentityKeys(
          a.map(function (e) {
            return e.wid;
          }),
        ),
        o("WAWebAdvHandlerApi").handleADVDeviceSyncResult(a)
      );
    }
    async function $(e) {
      var t = await o("WAWebApiDeviceList").getDeviceIds(e),
        n = t.map(function (e) {
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
        r = await Promise.all(
          n.map(function (e) {
            return e.length === 0 ? "" : o("WAWebPhashUtils").phashV2(e);
          }),
        ),
        a = e.map(function (e, t) {
          return { id: e, hash: r[t] };
        });
      return a;
    }
    function P(e) {
      if (Number.isNaN(e) || e <= o("WATimeUtils").HOUR_SECONDS) {
        o("WALogger")
          .WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
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
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
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
      (l.syncContactList = R),
      (l.handleLidSync = I),
      (l.markContactsSyncCompleted = D));
  },
  98,
);
