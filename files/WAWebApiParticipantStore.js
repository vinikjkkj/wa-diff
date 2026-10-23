__d(
  "WAWebApiParticipantStore",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebBotUtils",
    "WAWebCurrentUser",
    "WAWebGroupConstants",
    "WAWebModelStorageUtils",
    "WAWebSchemaParticipant",
    "WAWebUserPrefsMeUser",
    "WAWebWamGroupMetricCache",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.toString(),
            n = yield o("WAWebSchemaParticipant").getParticipantTable().get(t);
          return f(e, n);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [],
            r = [];
          if (!t) return { skDistribList: n, skList: r, rotateKey: !1 };
          var a = t == null ? void 0 : t.participants,
            i = t.rotateKey,
            l = t.senderKey,
            s = 0,
            m = [],
            p = new Set();
          if (
            (l.forEach(function (e, t) {
              var a;
              if (!t.includes("hosted")) {
                var i = o("WAWebWidFactory").createWid(t);
                try {
                  if (o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(i)) return;
                } catch (e) {
                  o("WALogger").ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Participant filter error",
                      ])),
                  );
                }
                p = p.add(t);
                var c = o("WAWebWidFactory").asUserWidOrThrow(i),
                  d = (a = l.get(c.toString())) != null ? a : !1;
                e && d
                  ? r.push(i)
                  : (n.push(i),
                    i.isCompanion() &&
                      e &&
                      !d &&
                      (m.length < 3 && m.push(t), s++));
              }
            }),
            s > 0 &&
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupSenderKeyList: ",
                    " added, primary missing key => ",
                    "",
                  ])),
                s,
                m,
              ),
            o("WAWebCurrentUser").isEmployee())
          ) {
            var _ = a.filter(function (e) {
              return !p.has(e);
            });
            _.length > 0 &&
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupSenderKeyList: missing keys for ",
                    ": ",
                    "",
                  ])),
                _.length,
                _.join(),
              );
          }
          return (
            yield b(e, l.size),
            o("WAWebWamGroupMetricCache").cacheGroupMetrics(t),
            i
              ? { skDistribList: [].concat(n, r), skList: [], rotateKey: i }
              : { skDistribList: n, skList: r, rotateKey: i }
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(t, r) {
      var a = t.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["participant"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0],
                  i = yield n.get(a);
                if (!i) {
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "markHasSenderKey: group participant info missing for group ",
                        "",
                      ])),
                    a,
                  );
                  return;
                }
                yield n.createOrReplace(C(i, r, !0));
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    function y(e, t) {
      var r = e.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["participant"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0],
                  a = yield n.get(r);
                if (!a) {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "markForgetSenderKey: participant info missing ",
                        "",
                      ])),
                    r,
                  );
                  return;
                }
                yield n.createOrReplace(C(a, t, !1));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function C(e, t, n) {
      var r = new Map(e.senderKey),
        a = !1;
      return (
        t.forEach(function (e) {
          if (!o("WAWebUserPrefsMeUser").isMeDevice(e)) {
            var t = String(e);
            r.has(t) ? r.set(t, n) : e.isLid() || (a = !0);
          }
        }),
        {
          groupId: e.groupId,
          senderKey: r,
          participants: e.participants,
          pastParticipants: e.pastParticipants,
          admins: e.admins,
          superAdmins: e.superAdmins,
          rotateKey: a,
          deviceSyncComplete: e.deviceSyncComplete,
        }
      );
    }
    function b(e, t) {
      return o("WAWebBackendApi").frontendSendAndReceive(
        "updateCachedDeviceCount",
        { groupWid: e, deviceCount: t },
      );
    }
    function v(e, t, n) {
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
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.map(function (e) {
              return e.id.toString();
            }),
            r = yield o("WAWebSchemaParticipant")
              .getParticipantTable()
              .bulkGet(n),
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
                s = v(i.participants, l, t);
              return babelHelpers.extends({}, e, { pastParticipants: s });
            });
          return a;
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["participant"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e[0],
                  n = yield o("WAWebSchemaParticipant")
                    .getParticipantTable()
                    .all(),
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
                      var l = babelHelpers.extends({}, e, {
                        pastParticipants: i,
                      });
                      r.push(l);
                    }
                  }),
                  r.length > 0,
                  t.bulkCreateOrReplace(r)
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    var E = new Map();
    function k(e, t) {
      E.set(e, t);
    }
    function I(e) {
      e != null ? E.delete(e) : E.clear();
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = E.get(e);
          if (t == null) {
            var n = yield o("WAWebSchemaParticipant")
                .getParticipantTable()
                .get(e),
              r =
                !!n &&
                n.admins &&
                n.admins.some(function (e) {
                  return o("WAWebUserPrefsMeUser").isSerializedWidMe(e);
                });
            return (E.set(e, r), r);
          }
          return t;
        })),
        D.apply(this, arguments)
      );
    }
    ((l.GroupUnSyncedError = m),
      (l.getGroupSenderKeyList = p),
      (l.getGroupSenderKeyListFromParticipantRecord = f),
      (l.markHasSenderKey = h),
      (l.markForgetSenderKey = y),
      (l.injectPastParticipantsFromDB = S),
      (l.pruneExpiredPastParticipants = L),
      (l.setAdminshipCache = k),
      (l.clearAdminshipCache = I),
      (l.isCurrentUserGroupAdmin = T));
  },
  98,
);
