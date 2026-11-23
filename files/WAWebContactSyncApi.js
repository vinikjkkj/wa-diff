__d(
  "WAWebContactSyncApi",
  [
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
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUpdateTextStatusForContact",
    "WAWebUserPrefsKeys",
    "WAWebUsernameTypes",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
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
      R = 500,
      L = 20;
    async function E(t) {
      var n = t.contactIds,
        a = t.mode,
        i = t.shouldDelayBetweenChunks;
      if (r("justknobx")._("6839") && !o("WAComms").isCommsInitialized()) {
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[contact-sync] comms not initialized, skipping chunked contact sync",
              ])),
          )
          .tags("contact-sync");
        return;
      }
      var l = R,
        u = Math.ceil(n.length / l);
      o("WALogger")
        .LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[contact-sync] start ",
              " contacts, ",
              " chunks, size=",
              "",
            ])),
          n.length,
          u,
          l,
        )
        .tags("contact-sync");
      for (var c = 0; c < n.length; c += l) {
        var d = n.slice(c, c + l);
        (i && (await o("WAPromiseDelays").delayMs(L * 1e3)),
          await k(
            { contactIds: d, shouldSyncDevice: !0, mode: a },
            o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.PERIODIC_SYNC,
          ));
      }
    }
    async function k(e, t) {
      var n = e.businessProfileVersion,
        a = e.contactIds,
        i = e.mode,
        l = e.shouldSyncDevice;
      if (a.length === 0) return !0;
      if (r("justknobx")._("6839") && !o("WAComms").isCommsInitialized())
        return (
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
        var s = await M(a),
          d = new (o("WAWebUsync").USyncQuery)()
            .withContext("background")
            .withMode(i)
            .withBusinessProtocol(n);
        (d.withTextStatusProtocol(),
          l && d.withDeviceProtocol(),
          d.withDisappearingModeProtocol(),
          d.withLidProtocol(),
          d.withUsernameProtocol());
        var m = o(
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
            protocols: d.protocols,
          }),
          p = s
            .filter(function (e) {
              return !e.id.isLid();
            })
            .map(function (e) {
              return o("WAWebWidFactory").asUserWidOrThrow(e.id);
            }),
          _ = new Map(
            r("compactMap")(p, function (e) {
              var t = o("WAWebApiContact").getCurrentLid(e);
              return t == null ? null : [e.toString(), t];
            }),
          ),
          f = s
            .filter(function (e) {
              return !e.id.isLid();
            })
            .map(function (e) {
              return e.id;
            }),
          g = await N(s),
          h = o("WAWebContactSyncPrivacyHints").usyncPrivacyHintsEnabled()
            ? await o("WAWebContactSyncPrivacyHints").getUsyncPrivacyHints(
                s.map(function (e) {
                  return e.id;
                }),
              )
            : new Map();
        s.forEach(function (e) {
          var t = new (o("WAWebUsyncUser").USyncUser)()
            .withId(e.id)
            .withDeviceHash(String(e.hash));
          if (!e.id.isLid()) {
            var n = _.get(e.id.toString());
            n != null && t.withLid(n);
          }
          var r = o("WAWebUsernameTypes").serializeMaybeUsername(
            g.get(o("WAWebWidFactory").asUserWidOrThrow(e.id)),
          );
          r != null && t.withUsername(r);
          var a = h.get(e.id);
          (a != null && t.withTcToken(a.tcToken).withCommonGid(a.commonGid),
            d.withUser(t));
        });
        for (var y = null, C = 3, b = 10 * Math.random(); C-- > 0; )
          try {
            y = await d.execute();
            var v = y.error.all;
            if (v) {
              var S;
              throw (
                (b = (S = v.errorBackoff) != null ? S : 10 * Math.random()),
                r("err")(
                  "syncContactList: error " + v.errorCode + ": " + v.errorText,
                )
              );
            } else C = 0;
          } catch (e) {
            var R = r("getErrorSafe")(e);
            (C === 0 &&
              (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "failed to execute usync query",
                    ])),
                )
                .verbose()
                .sendLogs("failed to execute usync query: " + R.message),
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                m,
                R.errorCode,
                y != null ? y : void 0,
                o("WAWebContactSyncErrorCodes").BACKGROUND_SYNC,
              )),
              await o("WAPromiseDelays").delayMs(b * 1e3));
          }
        if (y == null || y.error.all) return !1;
        var L = y.refresh,
          E = [];
        for (var k of Object.keys(L)) E.push(L[k]);
        if (E.length > 0) {
          var A = Math.min.apply(Math, E);
          w(A);
        }
        await D(y);
        var F = o("WAWebContactSyncLogger").createUpdateCounter();
        return (
          await Promise.all([
            l ? P(y, f, F) : Promise.resolve(),
            T(y, F),
            o("WAWebHandleUsernameSync").handleUsernameSync(y),
            I(y),
            x(y, F),
          ]),
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(m, y, F),
          await $(a),
          n == null || y.error.business == null
        );
      } finally {
        o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.ContactSync,
        );
      }
    }
    async function I(e) {
      var t = e.error.text_status;
      if (t) {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
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
    async function T(e, t) {
      var n = e.error.disappearing_mode;
      if (n) {
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
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
    async function D(e) {
      var t = e.error.lid;
      t &&
        o("WALogger").WARN(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
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
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "handleLidSync: skip ",
                " missing id",
              ])),
            a,
          ),
        l > 0 &&
          o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "handleLidSync: skip ",
                " lidResults (lid as id) => ",
                "",
              ])),
            l,
            i,
          ),
        u > 0 &&
          o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
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
          write: "now",
          learningSource: "usync",
        }));
    }
    async function x(e, t) {
      var r = e.list.filter(function (e) {
        var t = e.business;
        return !!t;
      });
      ((t.businessChange = r.length),
        await o("WAWebBizVerifiedNameAction").handleVerifiedNameSync(
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
    }
    function $(e) {
      var t = e.map(function (e) {
        var t = o("WAWebWidToJid").widToUserJid(e);
        return { id: t, isContactSyncCompleted: 1 };
      });
      return (
        o("WALogger")
          .LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
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
    async function P(e, t, n) {
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
        (a = o("WAWebContactSyncUtils").backfillMissingDeviceSyncEntries(t, a)),
        await o("WAWebGetIdentityKeysJob").getAndStoreIdentityKeys(
          a.map(function (e) {
            return e.wid;
          }),
        ),
        o("WAWebAdvHandlerApi").handleADVDeviceSyncResult(a)
      );
    }
    async function N(e) {
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
        r = await o(
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
    }
    async function M(e) {
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
    function w(e) {
      if (Number.isNaN(e) || e <= o("WATimeUtils").HOUR_SECONDS) {
        o("WALogger")
          .WARN(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
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
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
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
      (l.syncContactList = k),
      (l.handleLidSync = D),
      (l.markContactsSyncCompleted = $));
  },
  98,
);
