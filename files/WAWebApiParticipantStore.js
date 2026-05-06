__d(
  "WAWebApiParticipantStore",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebCurrentUser",
    "WAWebGroupConstants",
    "WAWebModelStorageUtils",
    "WAWebSchemaParticipant",
    "WAWebUserPrefsMeUser",
    "WAWebWamGroupMetricCache",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "gkx",
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
            a = [];
          if (!t) return { skDistribList: n, skList: a, rotateKey: !1 };
          var i = t == null ? void 0 : t.participants,
            l = t.rotateKey,
            s = t.senderKey,
            m = 0,
            p = [],
            _ = new Set();
          if (
            (s.forEach(function (e, t) {
              var r;
              if (!t.includes("hosted")) {
                _ = _.add(t);
                var i = o("WAWebWidFactory").createWid(t),
                  l = o("WAWebWidFactory").asUserWidOrThrow(i),
                  u = (r = s.get(l.toString())) != null ? r : !1;
                e && u
                  ? a.push(i)
                  : (n.push(i),
                    i.isCompanion() &&
                      e &&
                      !u &&
                      (p.length < 3 && p.push(t), m++));
              }
            }),
            m > 0 &&
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupSenderKeyList: ",
                    " added, primary missing key => ",
                    "",
                  ])),
                m,
                p,
              ),
            o("WAWebCurrentUser").isEmployee())
          ) {
            var f = i.filter(function (e) {
              return !_.has(e);
            });
            f.length > 0 &&
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupSenderKeyList: missing keys for ",
                    ": ",
                    "",
                  ])),
                f.length,
                f.join(),
              );
          }
          return (
            r("gkx")("26258") ||
              (m > 0 &&
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "getGroupSenderKeyList: missed ",
                        " keys on primary",
                      ])),
                    m,
                  )
                  .sendLogs("missing-sender-key-on-primary")),
            yield b(e, s.size),
            o("WAWebWamGroupMetricCache").cacheGroupMetrics(t),
            l
              ? { skDistribList: [].concat(n, a), skList: [], rotateKey: l }
              : { skDistribList: n, skList: a, rotateKey: l }
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
              r = o("WAWebUserPrefsMeUser")
                .getMePnUserOrThrow_DO_NOT_USE()
                .toString(),
              a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString(),
              i =
                !!n &&
                ((n == null ? void 0 : n.admins.includes(r)) ||
                  (n == null ? void 0 : n.admins.includes(a)));
            return (E.set(e, i), i);
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
