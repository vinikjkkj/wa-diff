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
    async function p(e) {
      var t = e.toString(),
        n = await o("WAWebSchemaParticipant").getParticipantTable().get(t);
      return _(e, n);
    }
    async function _(t, n) {
      var a = [],
        i = [];
      if (!n) return { skDistribList: a, skList: i, rotateKey: !1 };
      var l = n == null ? void 0 : n.participants,
        c = n.rotateKey,
        d = n.senderKey,
        m = 0,
        p = [],
        _ = new Set();
      if (
        (d.forEach(function (e, t) {
          var n;
          if (!t.includes("hosted")) {
            _ = _.add(t);
            var r = o("WAWebWidFactory").createWid(t),
              l = o("WAWebWidFactory").asUserWidOrThrow(r),
              s = (n = d.get(l.toString())) != null ? n : !1;
            e && s
              ? i.push(r)
              : (a.push(r),
                r.isCompanion() && e && !s && (p.length < 3 && p.push(t), m++));
          }
        }),
        m > 0 &&
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getGroupSenderKeyList: ",
                " added, primary missing key => ",
                "",
              ])),
            m,
            p,
          ),
        o("WAWebCurrentUser").isEmployee())
      ) {
        var f = l.filter(function (e) {
          return !_.has(e);
        });
        f.length > 0 &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
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
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupSenderKeyList: missed ",
                    " keys on primary",
                  ])),
                m,
              )
              .sendLogs("missing-sender-key-on-primary")),
        await y(t, d.size),
        o("WAWebWamGroupMetricCache").cacheGroupMetrics(n),
        c
          ? { skDistribList: [].concat(a, i), skList: [], rotateKey: c }
          : { skDistribList: a, skList: i, rotateKey: c }
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
          await r.createOrReplace(h(a, t, !0));
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
          await r.createOrReplace(h(a, t, !1));
        });
    }
    function h(e, t, n) {
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
    function y(e, t) {
      return o("WAWebBackendApi").frontendSendAndReceive(
        "updateCachedDeviceCount",
        { groupWid: e, deviceCount: t },
      );
    }
    function C(e, t, n) {
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
    async function b(e, t) {
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
            s = C(i.participants, l, t);
          return babelHelpers.extends({}, e, { pastParticipants: s });
        });
      return a;
    }
    function v() {
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
    var S = new Map();
    function R(e, t) {
      S.set(e, t);
    }
    function L(e) {
      e != null ? S.delete(e) : S.clear();
    }
    async function E(e) {
      var t = S.get(e);
      if (t == null) {
        var n = await o("WAWebSchemaParticipant").getParticipantTable().get(e),
          r =
            !!n &&
            n.admins &&
            n.admins.some(function (e) {
              return o("WAWebUserPrefsMeUser").isSerializedWidMe(e);
            });
        return (S.set(e, r), r);
      }
      return t;
    }
    ((l.GroupUnSyncedError = m),
      (l.getGroupSenderKeyList = p),
      (l.getGroupSenderKeyListFromParticipantRecord = _),
      (l.markHasSenderKey = f),
      (l.markForgetSenderKey = g),
      (l.injectPastParticipantsFromDB = b),
      (l.pruneExpiredPastParticipants = v),
      (l.setAdminshipCache = R),
      (l.clearAdminshipCache = L),
      (l.isCurrentUserGroupAdmin = E));
  },
  98,
);
