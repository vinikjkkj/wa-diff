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
    "gkx",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (e) {
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.toString(),
            n = yield o("WAWebSchemaParticipant").getParticipantTable().get(t);
          return g(e, n);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [],
            a = [];
          if (!t) return { skDistribList: n, skList: a, rotateKey: !1 };
          var i = t == null ? void 0 : t.participants,
            l = t.rotateKey,
            s = t.senderKey,
            p = 0,
            _ = [],
            f = new Set();
          if (
            (s.forEach(function (e, t) {
              var r;
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
                f = f.add(t);
                var l = o("WAWebWidFactory").asUserWidOrThrow(i),
                  c = (r = s.get(l.toString())) != null ? r : !1;
                e && c
                  ? a.push(i)
                  : (n.push(i),
                    i.isCompanion() &&
                      e &&
                      !c &&
                      (_.length < 3 && _.push(t), p++));
              }
            }),
            p > 0 &&
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupSenderKeyList: ",
                    " added, primary missing key => ",
                    "",
                  ])),
                p,
                _,
              ),
            o("WAWebCurrentUser").isEmployee())
          ) {
            var g = i.filter(function (e) {
              return !f.has(e);
            });
            g.length > 0 &&
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupSenderKeyList: missing keys for ",
                    ": ",
                    "",
                  ])),
                g.length,
                g.join(),
              );
          }
          return (
            r("gkx")("26258") ||
              (p > 0 &&
                o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "getGroupSenderKeyList: missed ",
                        " keys on primary",
                      ])),
                    p,
                  )
                  .sendLogs("missing-sender-key-on-primary")),
            yield v(e, s.size),
            o("WAWebWamGroupMetricCache").cacheGroupMetrics(t),
            l
              ? { skDistribList: [].concat(n, a), skList: [], rotateKey: l }
              : { skDistribList: n, skList: a, rotateKey: l }
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(t, r) {
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
                yield n.createOrReplace(b(i, r, !0));
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    function C(e, t) {
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
                yield n.createOrReplace(b(a, t, !1));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function b(e, t, n) {
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
    function v(e, t) {
      return o("WAWebBackendApi").frontendSendAndReceive(
        "updateCachedDeviceCount",
        { groupWid: e, deviceCount: t },
      );
    }
    function S(e, t, n) {
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
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                s = S(i.participants, l, t);
              return babelHelpers.extends({}, e, { pastParticipants: s });
            });
          return a;
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
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
    var k = new Map();
    function I(e, t) {
      k.set(e, t);
    }
    function T(e) {
      e != null ? k.delete(e) : k.clear();
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = k.get(e);
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
            return (k.set(e, r), r);
          }
          return t;
        })),
        x.apply(this, arguments)
      );
    }
    ((l.GroupUnSyncedError = p),
      (l.getGroupSenderKeyList = _),
      (l.getGroupSenderKeyListFromParticipantRecord = g),
      (l.markHasSenderKey = y),
      (l.markForgetSenderKey = C),
      (l.injectPastParticipantsFromDB = R),
      (l.pruneExpiredPastParticipants = E),
      (l.setAdminshipCache = I),
      (l.clearAdminshipCache = T),
      (l.isCurrentUserGroupAdmin = D));
  },
  98,
);
