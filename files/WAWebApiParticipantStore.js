__d(
  "WAWebApiParticipantStore",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebBotUtils",
    "WAWebCurrentUser",
    "WAWebGroupConstants",
    "WAWebModelStorageUtils",
    "WAWebSchemaParticipant",
    "WAWebUserUtils",
    "WAWebWamGroupMetricCache",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "GroupUnSyncedError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    async function p(e) {
      var t = e.toString(),
        n = await o("WAWebSchemaParticipant").getParticipantTable().get(t);
      return _(e, n);
    }
    async function _(t, n) {
      var r = [],
        a = [];
      if (!n) return { skDistribList: r, skList: a, rotateKey: !1 };
      var i = n == null ? void 0 : n.participants,
        l = n.rotateKey,
        c = n.senderKey,
        d = 0,
        m = [],
        p = new Set();
      if (
        (c.forEach(function (t, n) {
          var i;
          if (!n.includes("hosted")) {
            var l = o("WAWebWidFactory").createWid(n);
            try {
              if (o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(l)) return;
            } catch (t) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Participant filter error",
                  ])),
              );
            }
            p = p.add(n);
            var s = o("WAWebWidFactory").asUserWidOrThrow(l),
              u = (i = c.get(s.toString())) != null ? i : !1;
            t && u
              ? a.push(l)
              : (r.push(l),
                l.isCompanion() && t && !u && (m.length < 3 && m.push(n), d++));
          }
        }),
        d > 0 &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "getGroupSenderKeyList: ",
                " added, primary missing key => ",
                "",
              ])),
            d,
            m,
          ),
        o("WAWebCurrentUser").isEmployee())
      ) {
        var _ = i.filter(function (e) {
          return !p.has(e);
        });
        _.length > 0 &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "getGroupSenderKeyList: missing keys for ",
                ": ",
                "",
              ])),
            _.length,
            _.join(),
          );
      }
      return (
        await C(t, c.size),
        o("WAWebWamGroupMetricCache").cacheGroupMetrics(n),
        l
          ? { skDistribList: [].concat(r, a), skList: [], rotateKey: l }
          : { skDistribList: r, skList: a, rotateKey: l }
      );
    }
    function f(e, t) {
      var n = e.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], async function (e) {
          var r = e[0],
            a = await r.get(n);
          if (!a) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "markHasSenderKey: group participant info missing for group ",
                  "",
                ])),
              n,
            );
            return;
          }
          await r.createOrReplace(y(a, t, !0));
        });
    }
    function g(e, t) {
      var n = e.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], async function (e) {
          var r = e[0],
            a = await r.get(n);
          if (!a) {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "markForgetSenderKey: participant info missing ",
                  "",
                ])),
              n,
            );
            return;
          }
          await r.createOrReplace(y(a, t, !1));
        });
    }
    function h(e) {
      var t = e.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], async function (e) {
          var n = e[0],
            r = await n.get(t);
          if (r) {
            var o = new Map();
            (r.senderKey.forEach(function (e, t) {
              return o.set(t, !1);
            }),
              await n.createOrReplace(
                babelHelpers.extends({}, r, { senderKey: o, rotateKey: !1 }),
              ));
          }
        });
    }
    function y(e, t, n) {
      var r = new Map(e.senderKey),
        a = o("WAWebABProps").getABPropConfigValue(
          "web_sender_key_rotation_fix_enabled",
        ),
        i = a && e.rotateKey;
      return (
        t.forEach(function (e) {
          if (!o("WAWebUserUtils").isMeDevice(e)) {
            var t = String(e);
            r.has(t) ? r.set(t, n) : (!e.isLid() || (a && n)) && (i = !0);
          }
        }),
        {
          groupId: e.groupId,
          senderKey: r,
          participants: e.participants,
          pastParticipants: e.pastParticipants,
          admins: e.admins,
          superAdmins: e.superAdmins,
          rotateKey: i,
          deviceSyncComplete: e.deviceSyncComplete,
        }
      );
    }
    function C(e, t) {
      return o("WAWebBackendApi").frontendSendAndReceive(
        "updateCachedDeviceCount",
        { groupWid: e, deviceCount: t },
      );
    }
    function b(e, t, n) {
      if (n !== "add") return t;
      var a = new Set(
        t.map(function (e) {
          return e.id.toString();
        }),
      );
      e.forEach(function (e) {
        a.has(e) && a.delete(e);
        var t = o("WAWebApiContact").getAlternateUserWid(
            o("WAWebWidFactory").createUserWidOrThrow(e),
          ),
          n = t == null ? void 0 : t.toString();
        !r("isStringNullOrEmpty")(n) && a.has(n) && a.delete(n);
      });
      var i = t.filter(function (e) {
        return a.has(e.id.toString());
      });
      return i;
    }
    async function v(e, t) {
      var n = e.map(function (e) {
          return e.id.toString();
        }),
        r = await o("WAWebSchemaParticipant").getParticipantTable().bulkGet(n),
        a = e.map(function (e, n) {
          var a,
            i = r[n];
          if (!i) return e;
          var l =
              ((a = i.pastParticipants) == null
                ? void 0
                : a.map(function (e) {
                    var t = e.jid,
                      n = e.leaveReason,
                      r = e.leaveTs;
                    return {
                      id: o("WAWebWidFactory").createWid(t),
                      leaveTs: r,
                      leaveReason: n,
                    };
                  })) || [],
            s = b(i.participants, l, t);
          return babelHelpers.extends({}, e, { pastParticipants: s });
        });
      return a;
    }
    function S() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], async function (e) {
          var t = e[0],
            n = await o("WAWebSchemaParticipant").getParticipantTable().all(),
            r = [],
            a =
              o("WATimeUtils").DAY_SECONDS *
              o("WAWebGroupConstants").PAST_PARTICIPANT_EXPIRATION_DAYS;
          return (
            n.forEach(function (e) {
              var t,
                n = (t = e.pastParticipants) != null ? t : [],
                i = n.filter(function (e) {
                  var t = o("WATimeUtils").castToUnixTime(e.leaveTs),
                    n = o("WATimeUtils").happenedWithin(t, a);
                  return n;
                });
              if (i.length !== n.length) {
                var l = babelHelpers.extends({}, e, { pastParticipants: i });
                r.push(l);
              }
            }),
            r.length > 0,
            t.bulkCreateOrReplace(r)
          );
        });
    }
    var R = new Map();
    function L(e, t) {
      R.set(e, t);
    }
    function E(e) {
      e != null ? R.delete(e) : R.clear();
    }
    async function k(e) {
      var t = R.get(e);
      if (t == null) {
        var n = await o("WAWebSchemaParticipant").getParticipantTable().get(e),
          r =
            !!n &&
            n.admins &&
            n.admins.some(function (e) {
              return o("WAWebUserUtils").isSerializedWidMe(e);
            });
        return (R.set(e, r), r);
      }
      return t;
    }
    ((l.GroupUnSyncedError = m),
      (l.getGroupSenderKeyList = p),
      (l.getGroupSenderKeyListFromParticipantRecord = _),
      (l.markHasSenderKey = f),
      (l.markForgetSenderKey = g),
      (l.consumeGroupRotateKey = h),
      (l.injectPastParticipantsFromDB = v),
      (l.pruneExpiredPastParticipants = S),
      (l.setAdminshipCache = L),
      (l.clearAdminshipCache = E),
      (l.isCurrentUserGroupAdmin = k));
  },
  98,
);
