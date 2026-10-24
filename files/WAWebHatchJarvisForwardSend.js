__d(
  "WAWebHatchJarvisForwardSend",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotUtils",
    "WAWebForwardRichResponseHandler",
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
      u = r("JSResourceForInteraction")(
        "WAWebHatchJarvisForwardSendPolicy",
      ).__setRef("WAWebHatchJarvisForwardSend"),
      c = new WeakMap();
    function d() {
      return {
        inspections: new Map(),
        snapshots: o(
          "WAWebHatchJarvisForwardProof",
        ).createHatchJarvisForwardSession(),
      };
    }
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (
              o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(
                e.unifiedResponse,
              )
            ) {
              var a = yield f(e, t, r);
              ((n.unifiedResponseMutationMediaList = yield y(t, a)),
                !(a == null || b(a.inspected, n)) &&
                  (o(
                    "WAWebForwardRichResponseHandler",
                  ).updateRichResponseFields(e, n),
                  (n.unifiedResponseRawData = a.rawBytes),
                  (n.botSignatureVerificationMetadata =
                    a.proofs != null ? { proofs: a.proofs } : void 0),
                  (n.forwardedAiBotMessageInfo = {
                    botId: o("WAWebWidFactory").asBotWidOrThrow(
                      o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                    ),
                    validationStatus: "pending",
                  })));
            }
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return (
        e instanceof
        o("WAWebHatchJarvisForwardReupload").HatchJarvisForwardError
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield h(e, n),
            o = r.inspection,
            a = r.snapshot;
          if (!o.ok) return null;
          var i = t.id.isRegularUser() || t.id.isGroup();
          return i ? a : null;
        })),
        g.apply(this, arguments)
      );
    }
    function h(t, a) {
      var i,
        l = t.id.toString(),
        c =
          (i = a.inspections.get(l)) != null
            ? i
            : u
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
      return (a.inspections.set(l, c), c);
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t == null ? void 0 : t.inspected;
          if (!(t == null || !(n != null && n.ok) || n.media.length === 0)) {
            var r = c.get(t);
            return (
              r == null &&
                ((r = o(
                  "WAWebHatchJarvisForwardReupload",
                ).createHatchJarvisForwardMedia(n.media)),
                c.set(t, r)),
              o(
                "WAWebHatchJarvisForwardReupload",
              ).prepareHatchJarvisForwardSend({ chat: e, media: r })
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return (
        e.ok && e.media.length > 0 && t.unifiedResponseMutationMediaList == null
      );
    }
    ((l.createHatchJarvisForwardSendSession = d),
      (l.applyHatchJarvisForwardFields = m),
      (l.isHatchJarvisForwardFailure = _));
  },
  98,
);
