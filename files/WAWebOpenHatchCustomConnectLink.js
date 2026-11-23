__d(
  "WAWebOpenHatchCustomConnectLink",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebHatchCustomConnectorFlows",
    "WAWebOpenHatchConnectFailedToast",
    "WAWebTakeHatchCustomConnectLink",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u = r("JSResourceForInteraction"))(
        "WAWebReadHatchCustomConnectLink",
      ).__setRef("WAWebOpenHatchCustomConnectLink"),
      d = u("WAWebHatchCustomConnectorConsentDialog.react").__setRef(
        "WAWebOpenHatchCustomConnectLink",
      ),
      m = u("WAWebOpenHatchCustomConnectorAddDialog").__setRef(
        "WAWebOpenHatchCustomConnectLink",
      ),
      p = u("WAWebOpenHatchCustomOAuthConnectorDialog").__setRef(
        "WAWebOpenHatchCustomConnectLink",
      );
    function _(t, n) {
      if (!o("WAWebTakeHatchCustomConnectLink").takesHatchCustomConnectLink(t))
        return !1;
      var a = o(
        "WAWebHatchCustomConnectorFlows",
      ).startHatchCustomConnectorFlow();
      return (
        a == null ||
          r("promiseDone")(
            f(t),
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
                  g(
                    (r = t.displayName) != null
                      ? r
                      : n == null
                        ? void 0
                        : n.fallbackName,
                  ));
                return;
              }
              y(t, a, (n == null ? void 0 : n.fromCard) === !0).catch(
                function (e) {
                  (h(a, e),
                    o(
                      "WAWebOpenHatchConnectFailedToast",
                    ).openHatchConnectFailedToast(t.displayName));
                },
              );
            },
            function (e) {
              (h(a, e), g(n == null ? void 0 : n.fallbackName));
            },
          ),
        !0
      );
    }
    async function f(e) {
      var t = await c.load(),
        n = t.readHatchCustomConnectLink;
      return n(e);
    }
    function g(e) {
      var t,
        n = (t = e == null ? void 0 : e.trim()) != null ? t : "";
      n !== "" &&
        o("WAWebOpenHatchConnectFailedToast").openHatchConnectFailedToast(n);
    }
    function h(e, t) {
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
    async function y(e, t, n) {
      if (e.kind === "oauth") {
        var r = await Promise.all([d.load(), p.load()]),
          a = r[0],
          i = r[1].openHatchCustomOAuthConnectorDialog;
        (await a.confirmHatchCustomConnectorConsent(e.request.name))
          ? i(e.request, t)
          : o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(t);
        return;
      }
      var l = await Promise.all([d.load(), m.load()]),
        s = l[0],
        u = l[1].openHatchCustomConnectorAddDialog;
      (await s.confirmHatchCustomConnectorConsent(e.request.name))
        ? u(e.request, t, { fromCard: n })
        : o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(t);
    }
    l.openHatchCustomConnectLink = _;
  },
  98,
);
