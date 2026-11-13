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
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        inspection: { ok: !1, reason: { kind: "unavailable" } },
        snapshot: null,
      },
      u = new Set(["image/jpeg", "image/png"]),
      c = r("JSResourceForInteraction")(
        "WAWebHatchJarvisForwardSendPolicy",
      ).__setRef("WAWebHatchJarvisForwardSend"),
      d = new WeakMap();
    function m() {
      return {
        inspections: new Map(),
        snapshots: o(
          "WAWebHatchJarvisForwardProof",
        ).createHatchJarvisForwardSession(),
      };
    }
    function p(e, t, n, r, o) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if (
              o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(
                e.unifiedResponse,
              )
            ) {
              var i = yield f(e, t, n, r, a);
              if (i != null) return i;
              var l = yield y(e, t, r);
              ((n.unifiedResponseMutationMediaList = yield v(t, l)),
                !(l == null || R(l.inspected, n)) &&
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
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r, o) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
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
            var l = yield b(e, r),
              s = l.inspection,
              c = l.snapshot;
            if (
              !s.ok ||
              c == null ||
              s.media.length === 0 ||
              s.media.some(function (e) {
                var t = e.ref;
                return !u.has(t.mimeType);
              })
            )
              return null;
            var m = d.get(c);
            return (
              m == null &&
                ((m = o(
                  "WAWebHatchJarvisForwardReupload",
                ).createHatchJarvisForwardMedia(s.media)),
                d.set(c, m)),
              o(
                "WAWebHatchJarvisForwardImageToMuse",
              ).forwardHatchJarvisImagesToMuse({
                botPersonaId:
                  typeof n.botPersonaId == "string" ? n.botPersonaId : void 0,
                chat: t,
                caption: typeof n.body == "string" ? n.body : "",
                media: m,
                msg: e,
                multicast: a,
              })
            );
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return (
        e instanceof
        o("WAWebHatchJarvisForwardReupload").HatchJarvisForwardError
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield b(e, n),
            o = r.inspection,
            a = r.snapshot;
          if (!o.ok) return null;
          var i = t.id.isRegularUser() || t.id.isGroup();
          return i ? a : null;
        })),
        C.apply(this, arguments)
      );
    }
    function b(t, a) {
      var i,
        l = t.id.toString(),
        u =
          (i = a.inspections.get(l)) != null
            ? i
            : c
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
                    s
                  );
                });
      return (a.inspections.set(l, u), u);
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t == null ? void 0 : t.inspected;
          if (!(t == null || !(n != null && n.ok) || n.media.length === 0)) {
            var r = d.get(t);
            return (
              r == null &&
                ((r = o(
                  "WAWebHatchJarvisForwardReupload",
                ).createHatchJarvisForwardMedia(n.media)),
                d.set(t, r)),
              o(
                "WAWebHatchJarvisForwardReupload",
              ).prepareHatchJarvisForwardSend({ chat: e, media: r })
            );
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return (
        e.ok && e.media.length > 0 && t.unifiedResponseMutationMediaList == null
      );
    }
    ((l.createHatchJarvisForwardSendSession = m),
      (l.applyHatchJarvisForwardFields = p),
      (l.isHatchJarvisForwardFailure = h));
  },
  98,
);
