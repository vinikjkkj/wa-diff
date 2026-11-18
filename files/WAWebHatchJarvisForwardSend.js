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
    "asyncToGeneratorRuntime",
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
    function _(e, t, n, r, o) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if (
              o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(
                e.unifiedResponse,
              )
            ) {
              var i = yield g(e, t, n, r, a);
              if (i != null) return i;
              var l = v(yield C(e, t, r));
              ((n.unifiedResponseMutationMediaList = yield E(t, l)),
                !(l == null || I(l.inspected, n)) &&
                  (o(
                    "WAWebForwardRichResponseHandler",
                  ).updateRichResponseFields(e, n),
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
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r, o) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = e.forwardedAiBotMessageInfo;
            if (
              !o("WAWebBotUtils").isHatchBot(t.id) ||
              (i != null &&
                o("WAWebForwardedBotMessageUtils").getForwardedBotDisplayMode(
                  i.validationStatus,
                ) === "masked")
            )
              return null;
            var l = yield L(e, r),
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
              o(
                "WAWebHatchJarvisForwardImageToMuse",
              ).forwardHatchJarvisImagesToMuse({
                botPersonaId:
                  typeof n.botPersonaId == "string" ? n.botPersonaId : void 0,
                chat: t,
                caption: typeof n.body == "string" ? n.body : "",
                media: d,
                msg: e,
                multicast: a,
              })
            );
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return (
        e instanceof
        o("WAWebHatchJarvisForwardReupload").HatchJarvisForwardError
      );
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield L(e, n),
            o = r.inspection,
            a = r.snapshot;
          if (!o.ok) return null;
          var i = t.id.isRegularUser() || t.id.isGroup();
          return i ? a : null;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      var t,
        n = e == null || (t = e.proofs) == null ? void 0 : t.find(S);
      return R(n) ? e : null;
    }
    function S(e) {
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
    function R(e) {
      return (
        e != null &&
        e.version === s &&
        e.signature != null &&
        e.certificateChain.length > 0
      );
    }
    function L(t, a) {
      var i,
        l = t.id.toString(),
        s =
          (i = a.inspections.get(l)) != null
            ? i
            : d
                .load()
                .then(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        yield e.genHatchJarvisForwardMediaIds(t);
                        var n = e.inspectHatchJarvisForward(t);
                        return {
                          inspection: n,
                          snapshot: o(
                            "WAWebHatchJarvisForwardProof",
                          ).takeHatchJarvisSnapshot(a.snapshots, t, n),
                        };
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                )
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
      return (a.inspections.set(l, s), s);
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            var a = yield o(
              "WAWebHatchJarvisForwardReupload",
            ).prepareHatchJarvisForwardSend({ chat: e, media: r });
            return a.length > 0 ? a : void 0;
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return (
        e.ok && e.media.length > 0 && t.unifiedResponseMutationMediaList == null
      );
    }
    ((l.createHatchJarvisForwardSendSession = p),
      (l.applyHatchJarvisForwardFields = _),
      (l.isHatchJarvisForwardFailure = y));
  },
  98,
);
