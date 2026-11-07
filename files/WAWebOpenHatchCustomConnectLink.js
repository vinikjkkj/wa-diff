__d(
  "WAWebOpenHatchCustomConnectLink",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebHatchCustomConnectorFlows",
    "WAWebOpenHatchConnectFailedToast",
    "WAWebTakeHatchCustomConnectLink",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (c = r("JSResourceForInteraction"))(
        "WAWebReadHatchCustomConnectLink",
      ).__setRef("WAWebOpenHatchCustomConnectLink"),
      m = c("WAWebHatchCustomConnectorConsentDialog.react").__setRef(
        "WAWebOpenHatchCustomConnectLink",
      ),
      p = c("WAWebOpenHatchCustomConnectorAddDialog").__setRef(
        "WAWebOpenHatchCustomConnectLink",
      ),
      _ = c("WAWebOpenHatchCustomOAuthConnectorDialog").__setRef(
        "WAWebOpenHatchCustomConnectLink",
      );
    function f(t, n) {
      if (!o("WAWebTakeHatchCustomConnectLink").takesHatchCustomConnectLink(t))
        return !1;
      var a = o(
        "WAWebHatchCustomConnectorFlows",
      ).startHatchCustomConnectorFlow();
      return (
        a == null ||
          r("promiseDone")(
            g(t),
            function (t) {
              if (t.kind === "invalid") {
                var r;
                (o(
                  "WAWebHatchCustomConnectorFlows",
                ).endHatchCustomConnectorFlow(a),
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch: custom connector link did not validate",
                        ])),
                    )
                    .sendLogs("hatch-custom-connector-link-invalid"),
                  y(
                    (r = t.displayName) != null
                      ? r
                      : n == null
                        ? void 0
                        : n.fallbackName,
                  ));
                return;
              }
              b(t, a, (n == null ? void 0 : n.fromCard) === !0).catch(
                function (e) {
                  (C(a, e),
                    o(
                      "WAWebOpenHatchConnectFailedToast",
                    ).openHatchConnectFailedToast(t.displayName));
                },
              );
            },
            function (e) {
              (C(a, e), y(n == null ? void 0 : n.fallbackName));
            },
          ),
        !0
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield d.load(),
            n = t.readHatchCustomConnectLink;
          return n(e);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t,
        n = (t = e == null ? void 0 : e.trim()) != null ? t : "";
      n !== "" &&
        o("WAWebOpenHatchConnectFailedToast").openHatchConnectFailedToast(n);
    }
    function C(e, t) {
      (o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(e),
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch: custom connector dialog failed to open",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("hatch-custom-connector-dialog-open-failed"));
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (e.kind === "oauth") {
            var a = yield (u || (u = n("Promise"))).all([m.load(), _.load()]),
              i = a[0],
              l = a[1].openHatchCustomOAuthConnectorDialog;
            (yield i.confirmHatchCustomConnectorConsent(e.request.name))
              ? l(e.request, t)
              : o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(
                  t,
                );
            return;
          }
          var s = yield (u || (u = n("Promise"))).all([m.load(), p.load()]),
            c = s[0],
            d = s[1].openHatchCustomConnectorAddDialog;
          (yield c.confirmHatchCustomConnectorConsent(e.request.name))
            ? d(e.request, t, { fromCard: r })
            : o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(
                t,
              );
        })),
        v.apply(this, arguments)
      );
    }
    l.openHatchCustomConnectLink = f;
  },
  98,
);
