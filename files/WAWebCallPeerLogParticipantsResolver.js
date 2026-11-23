__d(
  "WAWebCallPeerLogParticipantsResolver",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebCallCollection",
    "WAWebMsgGetters",
    "WAWebMsgQueryUtils",
    "WAWebUserUtils",
    "WAWebWidFactory",
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
    async function y() {
      try {
        return await C();
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[bug-remote-logs] failed to resolve call participants",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("bug-remote-logs-resolve-participants-fail"),
          []
        );
      }
    }
    async function C() {
      var e = r("WAWebCallCollection").activeCall;
      if (e != null) return v(S(e), f);
      var t = await b();
      return t == null
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[bug-remote-logs] no call with a usable timestamp to resolve participants from",
              ])),
          ),
          [])
        : k(t.timeSecs)
          ? (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[bug-remote-logs] skipping, source=",
                  ", too old",
                ])),
              t.source,
            ),
            [])
          : v(t.participants, t.source);
    }
    async function b() {
      var e = r("WAWebCallCollection").lastActiveCall,
        t = e != null ? S(e) : [],
        n = await o("WAWebMsgQueryUtils").getVoipCallLogMsgs(1, null),
        a = n[0],
        i = a != null ? o("WAWebMsgGetters").getT(a) : 0;
      if (e != null) {
        var l = E(e, a, i);
        if (l > 0 && l >= i) return { participants: t, source: g, timeSecs: l };
      }
      return a == null || i <= 0
        ? null
        : { participants: R(a), source: h, timeSecs: i };
    }
    function v(e, t) {
      var n = e.filter(function (e) {
        return !o("WAWebUserUtils").isMeAccount(e);
      });
      if (n.length === 0)
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[bug-remote-logs] participants source=",
                ", participantsCount=0",
              ])),
            t,
          ),
          []
        );
      var r = n.length + 1;
      if (r > p)
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[bug-remote-logs] skipping, source=",
                ", callSize=",
                "",
              ])),
            t,
            r,
          ),
          []
        );
      var a = n.map(L).filter(function (e) {
          return e.isLid();
        }),
        i = n.length - a.length;
      return (
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[bug-remote-logs] participants source=",
              ", callSize=",
              ", participantsCount=",
              ", droppedNonLidCount=",
              "",
            ])),
          t,
          r,
          a.length,
          i,
        ),
        a.map(function (e) {
          return e.toString();
        })
      );
    }
    function S(e) {
      var t;
      return e.isGroup
        ? (t = e.groupCallParticipants) != null
          ? t
          : []
        : e.peerJid != null
          ? [e.peerJid]
          : [];
    }
    function R(e) {
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
    function L(e) {
      var t;
      return e.isLid() || !e.isUser()
        ? e
        : (t = o("WAWebApiContact").getCurrentLid(
              o("WAWebWidFactory").asUserWidOrThrow(e),
            )) != null
          ? t
          : e;
    }
    function E(e, t, n) {
      return n > 0 && t != null && o("WAWebMsgGetters").getId(t).id === e.id
        ? n
        : e.offerTime > 0
          ? e.offerTime
          : e.msg != null
            ? o("WAWebMsgGetters").getT(e.msg)
            : 0;
    }
    function k(e) {
      return o("WATimeUtils").unixTime() - e > _;
    }
    ((l.MAX_CALL_SIZE = p), (l.resolveCallPeerLogParticipantIds = y));
  },
  98,
);
