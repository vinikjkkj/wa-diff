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
      _ = s.createUserWidOrThrow("1807055946647698@bot"),
      f = s.createUserWidOrThrow("165332417282214@lid"),
      g = s.createUserWidOrThrow("867051314767696555@bot"),
      h = s.createUserWidOrThrow("103242709127222@lid"),
      y = [m, p];
    function C(e) {
      return e.equals(u) || e.equals(c);
    }
    function b(e) {
      return C(e) || v(e) || S(e) || L(e) || e.equals(d) || e.equals(g);
    }
    function v(e) {
      return e.equals(m);
    }
    function S(e) {
      return e.equals(p);
    }
    function R(e) {
      return e.equals(_);
    }
    function L(e) {
      return y.some(function (t) {
        return e.equals(t);
      });
    }
    function E(e) {
      var t = e.botResponseTargetId;
      return t == null
        ? null
        : new (r("WAWebMsgKey"))({ fromMe: !0, remote: e.id.remote, id: t });
    }
    function k(e) {
      return e instanceof r("WAWebWid")
        ? e == null
          ? void 0
          : e.equals(c)
        : !1;
    }
    function I(e) {
      return e instanceof r("WAWebWid")
        ? e == null
          ? void 0
          : e.equals(d)
        : !1;
    }
    function T(e) {
      return o("WAWebDebugHiddenBotChats").isShowHiddenBotChatsEnabled()
        ? !1
        : e instanceof r("WAWebWid")
          ? e.equals(d) || e.equals(g) || e.equals(h)
          : !1;
    }
    function D(t) {
      var n = !1;
      for (var r of t) {
        var a = k(r.id),
          i = I(r.id);
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
      (l.MAIBA_AI_HUB_FBID_WID = _),
      (l.MAIBA_AI_HUB_LID_WID = f),
      (l.META_BOT_SIDECHAT_FBID_WID = g),
      (l.META_BOT_LID_WID = h),
      (l.isMetaAiBot = C),
      (l.isAnyMetaAiBot = b),
      (l.isManusBot = v),
      (l.isHatchBot = S),
      (l.isMaibaAiHubFbid = R),
      (l.isBotChannelFBID = L),
      (l.getBotResponseTargetMsgKey = E),
      (l.isWidOpenGroupMetaBotFbidWid = k),
      (l.isWidTeeGroupMetaBotFbidWid = I),
      (l.isHiddenBotWid = T),
      (l.participantListIncludOpenOrTeeGroupBotWid = D));
  },
  98,
);
