__d(
  "WAWebOpenHatchCustomConnectorAddDialog",
  [
    "WAWebHatchCustomConnectorAddDialog.react",
    "WAWebHatchCustomConnectorFlows",
    "WAWebHatchCustomConnectorLogging",
    "WAWebHatchCustomConnectorReplaceDialog.react",
    "WAWebHatchCustomConnectorRequest",
    "WAWebHatchFrontendGating",
    "WAWebHatchOwnedDialog.react",
    "WAWebHatchSecureCredentialsVault",
    "WAWebNoop",
    "WAWebOpenHatchConnectFailedToast",
    "WAWebRequestHatchConnectors",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = new Set();
    function c(e, t, n) {
      var r =
        t != null
          ? t
          : o("WAWebHatchCustomConnectorFlows").startHatchCustomConnectorFlow();
      if (r != null) {
        if (!o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled()) {
          o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(r);
          return;
        }
        (d(e, r, "", "idle"),
          f(e, {
            fromCard: (n == null ? void 0 : n.fromCard) === !0,
            step: "dialog_shown",
          }));
      }
    }
    function d(e, t, n, a) {
      return o("WAWebHatchOwnedDialog.react").openHatchOwnedDialog(
        function (i) {
          return s.jsx(r("WAWebHatchCustomConnectorAddDialog.react"), {
            initialKey: n,
            initialStatus: a,
            onAdd: function (r) {
              return m(e, t, i, r);
            },
            onClose: o("WDSDialogBridge").closeWDSDialog,
            request: e,
          });
        },
        function () {
          u.has(t) ||
            (f(e, { step: "dialog_cancel" }),
            o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(t));
        },
      );
    }
    async function m(e, t, n, a) {
      var i;
      try {
        i = await _(e, t, a, !1);
      } catch (r) {
        if (n.isShowing()) throw r;
        p(e, t);
        return;
      }
      if (i.kind === "registered") {
        g(t, n);
        return;
      }
      if (!n.isShowing()) {
        (f(e, { step: "name_taken" }),
          o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(t));
        return;
      }
      n.handOver();
      var l = await o(
        "WAWebHatchCustomConnectorReplaceDialog.react",
      ).confirmHatchCustomConnectorReplace(
        e.name.slice(
          o("WAWebHatchCustomConnectorRequest")
            .HATCH_CUSTOM_CONNECTOR_NAME_PREFIX.length,
        ),
        "api_key",
      );
      if (!l) {
        (f(e, { step: "name_taken" }), d(e, t, a, "idle"));
        return;
      }
      var s = d(e, t, a, "adding"),
        u = await _(e, t, a, !0).catch(r("WAWebNoop"));
      (u == null ? void 0 : u.kind) === "registered"
        ? g(t, s)
        : s.isShowing()
          ? d(e, t, a, "failed")
          : p(e, t);
    }
    function p(e, t) {
      (o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(t),
        o("WAWebOpenHatchConnectFailedToast").openHatchConnectFailedToast(
          e.name.slice(
            o("WAWebHatchCustomConnectorRequest")
              .HATCH_CUSTOM_CONNECTOR_NAME_PREFIX.length,
          ),
        ));
    }
    async function _(e, t, n, r) {
      (r || f(e, { step: "submit" }), u.add(t));
      try {
        var a = await o(
          "WAWebHatchSecureCredentialsVault",
        ).registerHatchCustomConnector(e, n, r);
        return (
          a.kind === "registered"
            ? f(e, { step: "registered" })
            : r && f(e, { step: "name_taken" }),
          a
        );
      } catch (t) {
        throw (f(e, { error: t, step: "failed" }), t);
      } finally {
        u.delete(t);
      }
    }
    function f(e, t) {
      o("WAWebHatchCustomConnectorLogging").logHatchCustomConnectorStep(
        "api_key",
        e.name,
        t,
      );
    }
    function g(e, t) {
      (t.close(),
        o("WAWebHatchCustomConnectorFlows").endHatchCustomConnectorFlow(e),
        o("WAWebRequestHatchConnectors")
          .requestHatchConnectors()
          .catch(r("WAWebNoop")));
    }
    l.openHatchCustomConnectorAddDialog = c;
  },
  98,
);
