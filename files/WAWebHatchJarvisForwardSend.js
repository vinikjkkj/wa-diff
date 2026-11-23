__d(
  "WAWebHatchJarvisForwardSend",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotUtils",
    "WAWebForwardRichResponseHandler",
    "WAWebForwardedBotMessageUtils",
    "WAWebHatchJarvisForwardImageToMuse",
    "WAWebHatchJarvisForwardProof",
    "WAWebHatchJarvisForwardReupload",
    "WAWebHatchJarvisPayload",
    "WAWebProtobufsAICommon.pb",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1,
      u = {
        inspection: { ok: !1, reason: { kind: "unavailable" } },
        snapshot: null,
      },
      c = new Set(["image/jpeg", "image/png"]),
      d = r("JSResourceForInteraction")(
        "WAWebHatchJarvisForwardSendPolicy",
      ).__setRef("WAWebHatchJarvisForwardSend"),
      m = new WeakMap();
    function p() {
      return {
        inspections: new Map(),
        snapshots: o(
          "WAWebHatchJarvisForwardProof",
        ).createHatchJarvisForwardSession(),
      };
    }
    async function _(e, t, n, r, a) {
      if (
        o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(e.unifiedResponse)
      ) {
        var i = await f(e, t, n, r, a);
        if (i != null) return i;
        var l = y(await h(e, t, r));
        ((n.unifiedResponseMutationMediaList = await S(t, l)),
          !(l == null || R(l.inspected, n)) &&
            (o("WAWebForwardRichResponseHandler").updateRichResponseFields(
              e,
              n,
            ),
            (n.unifiedResponseRawData = l.rawBytes),
            (n.botSignatureVerificationMetadata =
              l.proofs != null ? { proofs: l.proofs } : void 0),
            (n.forwardedAiBotMessageInfo = {
              botId: o("WAWebWidFactory").asBotWidOrThrow(
                o("WAWebBotUtils").HATCH_BOT_FBID_WID,
              ),
              validationStatus: "pending",
            })));
      }
    }
    async function f(e, t, n, r, a) {
      var i = e.forwardedAiBotMessageInfo;
      if (
        !o("WAWebBotUtils").isHatchBot(t.id) ||
        (i != null &&
          o("WAWebForwardedBotMessageUtils").getForwardedBotDisplayMode(
            i.validationStatus,
          ) === "masked")
      )
        return null;
      var l = await v(e, r),
        s = l.inspection,
        u = l.snapshot;
      if (
        !s.ok ||
        u == null ||
        s.media.length === 0 ||
        s.media.some(function (e) {
          var t = e.ref;
          return !c.has(t.mimeType);
        })
      )
        return null;
      var d = m.get(u);
      return (
        d == null &&
          ((d = o(
            "WAWebHatchJarvisForwardReupload",
          ).createHatchJarvisForwardMedia(s.media, s.thumbnails)),
          m.set(u, d)),
        o("WAWebHatchJarvisForwardImageToMuse").forwardHatchJarvisImagesToMuse({
          botPersonaId:
            typeof n.botPersonaId == "string" ? n.botPersonaId : void 0,
          chat: t,
          caption: typeof n.body == "string" ? n.body : "",
          media: d,
          msg: e,
          multicast: a,
        })
      );
    }
    function g(e) {
      return (
        e instanceof
        o("WAWebHatchJarvisForwardReupload").HatchJarvisForwardError
      );
    }
    async function h(e, t, n) {
      var r = await v(e, n),
        o = r.inspection,
        a = r.snapshot;
      if (!o.ok) return null;
      var i = t.id.isRegularUser() || t.id.isGroup();
      return i ? a : null;
    }
    function y(e) {
      var t,
        n = e == null || (t = e.proofs) == null ? void 0 : t.find(C);
      return b(n) ? e : null;
    }
    function C(e) {
      return (
        e.useCase ===
          o("WAWebProtobufsAICommon.pb")
            .BotSignatureVerificationUseCaseProof$BotSignatureUseCase
            .WA_BOT_MSG ||
        e.useCase ===
          o("WAWebProtobufsAICommon.pb")
            .BotSignatureVerificationUseCaseProof$BotSignatureUseCase
            .WA_TEE_BOT_MSG
      );
    }
    function b(e) {
      return (
        e != null &&
        e.version === s &&
        e.signature != null &&
        e.certificateChain.length > 0
      );
    }
    function v(t, n) {
      var a,
        i = t.id.toString(),
        l =
          (a = n.inspections.get(i)) != null
            ? a
            : d
                .load()
                .then(async function (e) {
                  await e.genHatchJarvisForwardMediaIds(t);
                  var r = e.inspectHatchJarvisForward(t);
                  return {
                    inspection: r,
                    snapshot: o(
                      "WAWebHatchJarvisForwardProof",
                    ).takeHatchJarvisSnapshot(n.snapshots, t, r),
                  };
                })
                .catch(function (t) {
                  return (
                    o("WALogger")
                      .WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[hatch-jarvis-forward] send policy unavailable, sent as text",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t))
                      .sendLogs("hatch-jarvis-forward-policy-unavailable"),
                    u
                  );
                });
      return (n.inspections.set(i, l), l);
    }
    async function S(e, t) {
      var n = t == null ? void 0 : t.inspected;
      if (
        !(
          t == null ||
          !(n != null && n.ok) ||
          n.media.length + n.thumbnails.length === 0
        )
      ) {
        var r = m.get(t);
        r == null &&
          ((r = o(
            "WAWebHatchJarvisForwardReupload",
          ).createHatchJarvisForwardMedia(n.media, n.thumbnails)),
          m.set(t, r));
        var a = await o(
          "WAWebHatchJarvisForwardReupload",
        ).prepareHatchJarvisForwardSend({ chat: e, media: r });
        return a.length > 0 ? a : void 0;
      }
    }
    function R(e, t) {
      return (
        e.ok && e.media.length > 0 && t.unifiedResponseMutationMediaList == null
      );
    }
    ((l.createHatchJarvisForwardSendSession = p),
      (l.applyHatchJarvisForwardFields = _),
      (l.isHatchJarvisForwardFailure = g));
  },
  98,
);
