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
      d = s.createUserWidOrThrow("13135550202@c.us"),
      m = s.createUserWidOrThrow("718584497008509@bot"),
      p = s.createUserWidOrThrow("1273596044787272@bot"),
      _ = s.createUserWidOrThrow("1807055946647696@bot"),
      f = s.createUserWidOrThrow("1807055946647697@bot"),
      g = s.createUserWidOrThrow("1807055946647698@bot"),
      h = s.createUserWidOrThrow("165332417282214@lid"),
      y = s.createUserWidOrThrow("2942131436135992@bot"),
      C = s.createUserWidOrThrow("867051314767696555@bot"),
      b = s.createUserWidOrThrow("103242709127222@lid"),
      v = [_, f];
    function S(e) {
      return e.equals(u) || e.equals(c);
    }
    function R(e) {
      return e.equals(d) || e.equals(m);
    }
    function L(e) {
      return e.equals(y) || e.equals(C);
    }
    function E(e) {
      return S(e) || k(e) || I(e) || D(e) || e.equals(p) || L(e);
    }
    function k(e) {
      return e.equals(_);
    }
    function I(e) {
      return e.equals(f);
    }
    function T(e) {
      return e.equals(g);
    }
    function D(e) {
      return v.some(function (t) {
        return e.equals(t);
      });
    }
    function x(e) {
      var t = e.botResponseTargetId;
      return t == null
        ? null
        : new (r("WAWebMsgKey"))({ fromMe: !0, remote: e.id.remote, id: t });
    }
    function $(e) {
      return e instanceof r("WAWebWid")
        ? e == null
          ? void 0
          : e.equals(c)
        : !1;
    }
    function P(e) {
      return e instanceof r("WAWebWid")
        ? e == null
          ? void 0
          : e.equals(p)
        : !1;
    }
    function N(e) {
      return o("WAWebDebugHiddenBotChats").isShowHiddenBotChatsEnabled()
        ? !1
        : e instanceof r("WAWebWid")
          ? e.equals(p) || L(e) || e.equals(b)
          : !1;
    }
    function M(t) {
      var n = !1;
      for (var r of t) {
        var a = $(r.id),
          i = P(r.id);
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
      (l.META_BOT_SMB_PN_WID = d),
      (l.META_BOT_SMB_FBID_WID = m),
      (l.META_BOT_TEE_FBID_WID = p),
      (l.MANUS_BOT_FBID_WID = _),
      (l.HATCH_BOT_FBID_WID = f),
      (l.MAIBA_AI_HUB_FBID_WID = g),
      (l.MAIBA_AI_HUB_LID_WID = h),
      (l.META_BOT_SIDECHAT_FBID_WID = y),
      (l.META_BOT_SIDECHAT_LEGACY_FBID_WID = C),
      (l.META_BOT_LID_WID = b),
      (l.isMetaAiBot = S),
      (l.isBusinessAssistantBot = R),
      (l.isSideChatBotWid = L),
      (l.isAnyMetaAiBot = E),
      (l.isManusBot = k),
      (l.isHatchBot = I),
      (l.isMaibaAiHubFbid = T),
      (l.isBotChannelFBID = D),
      (l.getBotResponseTargetMsgKey = x),
      (l.isWidOpenGroupMetaBotFbidWid = $),
      (l.isWidTeeGroupMetaBotFbidWid = P),
      (l.isHiddenBotWid = N),
      (l.participantListIncludeOpenOrTeeGroupBotWid = M));
  },
  98,
);
