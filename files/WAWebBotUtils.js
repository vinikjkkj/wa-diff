__d(
  "WAWebBotUtils",
  [
    "WALogger",
    "WAWebDebugHiddenBotChats",
    "WAWebMsgKey",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = o("WAWebWidFactory")).createUserWidOrThrow("13135550002@c.us"),
      c = s.createUserWidOrThrow("867051314767696@bot"),
      d = s.createUserWidOrThrow("1273596044787272@bot"),
      m = s.createUserWidOrThrow("1807055946647696@bot"),
      p = s.createUserWidOrThrow("1807055946647697@bot"),
      _ = s.createUserWidOrThrow("867051314767696555@bot"),
      f = [m, p];
    function g(e) {
      return e.equals(u) || e.equals(c);
    }
    function h(e) {
      return g(e) || y(e) || C(e) || b(e) || e.equals(d) || e.equals(_);
    }
    function y(e) {
      return e.equals(m);
    }
    function C(e) {
      return e.equals(p);
    }
    function b(e) {
      return f.some(function (t) {
        return e.equals(t);
      });
    }
    function v(e) {
      var t = e.botResponseTargetId;
      return t == null
        ? null
        : new (r("WAWebMsgKey"))({ fromMe: !0, remote: e.id.remote, id: t });
    }
    function S(e) {
      return e instanceof r("WAWebWid")
        ? e == null
          ? void 0
          : e.equals(c)
        : !1;
    }
    function R(e) {
      return e instanceof r("WAWebWid")
        ? e == null
          ? void 0
          : e.equals(d)
        : !1;
    }
    function L(e) {
      return o("WAWebDebugHiddenBotChats").isShowHiddenBotChatsEnabled()
        ? !1
        : e instanceof r("WAWebWid")
          ? e.equals(d) || e.equals(_)
          : !1;
    }
    function E(t) {
      var n = !1;
      for (var r of t) {
        var a = S(r.id),
          i = R(r.id);
        if (a)
          return (
            n &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "unexpected tee and open bot in same group",
                    ])),
                )
                .sendLogs("unexpected tee and open bot in same group"),
            { includeOpenMetabot: !0, includeTeeMetabot: !1 }
          );
        i && (n = !0);
      }
      return { includeOpenMetabot: !1, includeTeeMetabot: n };
    }
    ((l.META_BOT_PN_WID = u),
      (l.META_BOT_FBID_WID = c),
      (l.META_BOT_TEE_FBID_WID = d),
      (l.MANUS_BOT_FBID_WID = m),
      (l.HATCH_BOT_FBID_WID = p),
      (l.META_BOT_SIDECHAT_FBID_WID = _),
      (l.isMetaAiBot = g),
      (l.isAnyMetaAiBot = h),
      (l.isManusBot = y),
      (l.isHatchBot = C),
      (l.isBotChannelFBID = b),
      (l.getBotResponseTargetMsgKey = v),
      (l.isWidOpenGroupMetaBotFbidWid = S),
      (l.isWidTeeGroupMetaBotFbidWid = R),
      (l.isHiddenBotWid = L),
      (l.participantListIncludOpenOrTeeGroupBotWid = E));
  },
  98,
);
