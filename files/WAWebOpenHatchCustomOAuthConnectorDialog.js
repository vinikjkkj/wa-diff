__d(
  "WAWebOpenHatchCustomOAuthConnectorDialog",
  [
    "WAWebHatchCustomConnectorFlows",
    "WAWebHatchCustomConnectorLogging",
    "WAWebHatchCustomConnectorReplaceDialog.react",
    "WAWebHatchCustomOAuthConnectorDialog.react",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchOwnedDialog.react",
    "WAWebHatchPendingTab",
    "WAWebHatchSecureCredentialsVault",
    "WAWebNoop",
    "WAWebOpenHatchConnectFailedToast",
    "WAWebRequestHatchConnectors",
    "WDSDialogBridge",
    "promiseDone",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = null,
      c = 20,
      d = new Set();
    function m(e, t) {
      var n =
        t != null
          ? t
          : o("WAWebHatchCustomConnectorFlows").startHatchCustomConnectorFlow();
      if (n != null) {
        if (!o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled()) {
          o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(n);
          return;
        }
        (p(e, n, { clientId: "", clientSecret: null }, "idle"),
          h(e, { fromCard: !1, step: "dialog_shown" }));
      }
    }
    function p(e, t, n, a) {
      return o("WAWebHatchOwnedDialog.react").openHatchOwnedDialog(
        function (i) {
          var l;
          return s.jsx(r("WAWebHatchCustomOAuthConnectorDialog.react"), {
            initialClientId: n.clientId,
            initialClientSecret: (l = n.clientSecret) != null ? l : "",
            initialStatus: a,
            onAdd: function (r, o) {
              return _(e, t, i, { clientId: r, clientSecret: o });
            },
            onClose: o("WDSDialogBridge").closeWDSDialog,
            request: e,
          });
        },
        function () {
          d.has(t) ||
            (h(e, { step: "dialog_cancel" }),
            o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(t));
        },
      );
    }
    async function _(e, t, n, a) {
      var i = o("WAWebHatchPendingTab").openHatchPendingTab(),
        l;
      try {
        l = await g(e, t, a, !1);
      } catch (r) {
        if ((i.close(), n.isShowing())) throw r;
        f(e, t);
        return;
      }
      if (l.kind === "registered") {
        y(e, t, n, i, l.authorizeUrl);
        return;
      }
      if ((i.close(), !n.isShowing())) {
        (h(e, { step: "name_taken" }),
          o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(t));
        return;
      }
      n.handOver();
      var s = await o(
        "WAWebHatchCustomConnectorReplaceDialog.react",
      ).confirmHatchCustomConnectorReplace(e.displayName, "oauth");
      if (!s) {
        (h(e, { step: "name_taken" }), p(e, t, a, "idle"));
        return;
      }
      var u = o("WAWebHatchPendingTab").openHatchPendingTab(),
        c = p(e, t, a, "adding"),
        d = await g(e, t, a, !0).catch(r("WAWebNoop"));
      (d == null ? void 0 : d.kind) === "registered"
        ? y(e, t, c, u, d.authorizeUrl)
        : (u.close(), c.isShowing() ? p(e, t, a, "failed") : f(e, t));
    }
    function f(e, t) {
      (o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(t),
        o("WAWebOpenHatchConnectFailedToast").openHatchConnectFailedToast(
          e.displayName,
        ));
    }
    async function g(e, t, n, r) {
      var a = n.clientId,
        i = n.clientSecret;
      (r || h(e, { step: "submit" }), d.add(t));
      try {
        var l = await o(
          "WAWebHatchSecureCredentialsVault",
        ).registerHatchCustomOAuthConnector(e, a, i, r);
        return (
          l.kind === "name_taken" && r && h(e, { step: "name_taken" }),
          l
        );
      } catch (t) {
        throw (h(e, { error: t, step: "failed" }), t);
      } finally {
        d.delete(t);
      }
    }
    function h(e, t) {
      o("WAWebHatchCustomConnectorLogging").logHatchCustomConnectorStep(
        "oauth",
        e.name,
        t,
      );
    }
    function y(e, t, n, r, a) {
      (n.close(),
        o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(t),
        r.navigate(a),
        h(e, { step: "sign_in_opened" }),
        C(e, t));
    }
    function C(e, t) {
      u == null || u();
      var n = 0,
        a = 0,
        i = !1,
        l = !1,
        s = function () {
          ((l = !0),
            window.removeEventListener("focus", _),
            u === s && (u = null));
        },
        d = function (n) {
          (s(), h(e, { reason: n, step: "sign_in_failed" }));
        },
        m = function () {
          return (
            !l &&
            o(
              "WAWebHatchCustomConnectorFlows",
            ).isLatestHatchCustomConnectorFlow(t)
          );
        },
        p = function () {
          n >= c && a === 0 && d(i ? "not_in_catalog" : "not_confirmed");
        },
        _ = function () {
          if (
            !o(
              "WAWebHatchCustomConnectorFlows",
            ).isLatestHatchCustomConnectorFlow(t)
          ) {
            s();
            return;
          }
          if (r("WAWebHatchLinkedStatusManager").isUnlinked()) {
            d("unlinked");
            return;
          }
          n >= c ||
            ((n += 1),
            (a += 1),
            r("promiseDone")(
              o("WAWebRequestHatchConnectors").requestHatchConnectors(),
              function (t) {
                if (((a -= 1), !m())) {
                  s();
                  return;
                }
                if (
                  ((i = !0),
                  t.some(function (t) {
                    return t.id === e.name && t.state === "connected";
                  }))
                ) {
                  (s(), h(e, { step: "connected" }));
                  return;
                }
                p();
              },
              function () {
                if (((a -= 1), !m())) {
                  s();
                  return;
                }
                p();
              },
            ));
        };
      (window.addEventListener("focus", _), (u = s));
    }
    l.openHatchCustomOAuthConnectorDialog = m;
  },
  98,
);
