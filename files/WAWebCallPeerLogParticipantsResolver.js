__d(
  "WAWebCallPeerLogParticipantsResolver",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebCallCollection",
    "WAWebMsgGetters",
    "WAWebMsgQueryUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 8,
      _ = 1440 * 60,
      f = "ongoing_call",
      g = "last_active_call",
      h = "last_call_log";
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return yield b();
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[bug-remote-logs] failed to resolve call participants",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bug-remote-logs-resolve-participants-fail"),
              []
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("WAWebCallCollection").activeCall;
          if (e != null) return L(E(e), f);
          var t = yield S();
          return t == null
            ? (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[bug-remote-logs] no call with a usable timestamp to resolve participants from",
                  ])),
              ),
              [])
            : D(t.timeSecs)
              ? (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[bug-remote-logs] skipping, source=",
                      ", too old",
                    ])),
                  t.source,
                ),
                [])
              : L(t.participants, t.source);
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("WAWebCallCollection").lastActiveCall,
            t = e != null ? E(e) : [],
            n = yield o("WAWebMsgQueryUtils").getVoipCallLogMsgs(1, null),
            a = n[0],
            i = a != null ? o("WAWebMsgGetters").getT(a) : 0;
          if (e != null) {
            var l = T(e, a, i);
            if (l > 0 && l >= i)
              return { participants: t, source: g, timeSecs: l };
          }
          return a == null || i <= 0
            ? null
            : { participants: k(a), source: h, timeSecs: i };
        })),
        R.apply(this, arguments)
      );
    }
    function L(t, n) {
      var r = t.filter(function (e) {
        return !o("WAWebUserPrefsMeUser").isMeAccount(e);
      });
      if (r.length === 0)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bug-remote-logs] participants source=",
                ", participantsCount=0",
              ])),
            n,
          ),
          []
        );
      var a = r.length + 1;
      if (a > p)
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[bug-remote-logs] skipping, source=",
                ", callSize=",
                "",
              ])),
            n,
            a,
          ),
          []
        );
      var i = r.map(I).filter(function (e) {
          return e.isLid();
        }),
        l = r.length - i.length;
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[bug-remote-logs] participants source=",
              ", callSize=",
              ", participantsCount=",
              ", droppedNonLidCount=",
              "",
            ])),
          n,
          a,
          i.length,
          l,
        ),
        i.map(function (e) {
          return e.toString();
        })
      );
    }
    function E(e) {
      var t;
      return e.isGroup
        ? (t = e.groupCallParticipants) != null
          ? t
          : []
        : e.peerJid != null
          ? [e.peerJid]
          : [];
    }
    function k(e) {
      var t;
      return o("WAWebMsgGetters").getIsGroupCall(e)
        ? ((t = o("WAWebMsgGetters").getCallParticipants(e)) != null
            ? t
            : []
          ).map(function (e) {
            return e.participant;
          })
        : [o("WAWebMsgGetters").getRemote(e)];
    }
    function I(e) {
      var t;
      return e.isLid() || !e.isUser()
        ? e
        : (t = o("WAWebApiContact").getCurrentLid(
              o("WAWebWidFactory").asUserWidOrThrow(e),
            )) != null
          ? t
          : e;
    }
    function T(e, t, n) {
      return n > 0 && t != null && o("WAWebMsgGetters").getId(t).id === e.id
        ? n
        : e.offerTime > 0
          ? e.offerTime
          : e.msg != null
            ? o("WAWebMsgGetters").getT(e.msg)
            : 0;
    }
    function D(e) {
      return o("WATimeUtils").unixTime() - e > _;
    }
    ((l.MAX_CALL_SIZE = p), (l.resolveCallPeerLogParticipantIds = y));
  },
  98,
);
