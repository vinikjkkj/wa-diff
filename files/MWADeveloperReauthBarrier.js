__d(
  "MWADeveloperReauthBarrier",
  [
    "SecureMessageListener",
    "WorkAccountsDomains",
    "WorkAccountsReauthOpenerMessages.flow",
    "XAtWorkSAMLReauthPopupControllerRouteBuilder",
    "XWorkAccountsSecureActionDelegateControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = new Map(),
      m =
        (e =
          (s = r("XAtWorkSAMLReauthPopupControllerRouteBuilder")
            .buildUri({
              subdomain_type: location.hostname.startsWith("business.")
                ? "business"
                : "",
            })
            .getQualifiedUri()) == null ||
          (s = s.setDomain(r("WorkAccountsDomains").WORK_ACCOUNTS)) == null
            ? void 0
            : s.toString()) != null
          ? e
          : "",
      p =
        (u =
          (c = r("XWorkAccountsSecureActionDelegateControllerRouteBuilder")
            .buildUri({ next: m, source: "business_manager" })
            .getQualifiedUri()) == null ||
          (c = c.setDomain(r("WorkAccountsDomains").WORK_ACCOUNTS)) == null
            ? void 0
            : c.toString()) != null
          ? u
          : "";
    function _(e, t) {
      var n = !1,
        a = !1,
        i = t.subscribe(["confirm", "hide"], function (l) {
          if (l === "hide" && !n) {
            (f(e), i.unsubscribe(), d.delete(e));
            return;
          }
          if (l === "confirm") {
            var s = function (n) {
              if (
                !(
                  (typeof n.data == "string" &&
                    o(
                      "WorkAccountsReauthOpenerMessages.flow",
                    ).WorkAccountsReauthOpenerMessages.cast(n.data) !==
                      o("WorkAccountsReauthOpenerMessages.flow")
                        .WorkAccountsReauthOpenerMessages.REAUTH_PASSED) ||
                  !n.origin.endsWith("work.meta.com")
                )
              ) {
                a = !0;
                var t = d.get(e);
                t == null || t.asyncRequest.send();
              }
            };
            n = !0;
            var u = window.open(
              "",
              "_blank",
              "width=640, height=480, popup=true",
            );
            u.location = p;
            var c = new (r("SecureMessageListener"))(window).setEventHandler(s);
            c.beginListening();
            var m = window.setInterval(function () {
              u.closed &&
                (window.clearInterval(m),
                a || f(e),
                i.unsubscribe(),
                d.delete(e),
                c.stopListening());
            }, 500);
            t.hide();
          }
        });
      t.show();
    }
    function f(e) {
      var t = d.get(e);
      if (
        !(
          (t == null ? void 0 : t.asyncRequest) == null ||
          t.asyncResponse == null
        )
      ) {
        var n = t.asyncRequest.getServerDialogCancelHandler();
        (n && n(t.asyncResponse),
          t.asyncRequest.finallyHandler(t.asyncResponse));
      }
    }
    function g(e, t, n) {
      d.set(e, { asyncRequest: t, asyncResponse: n });
    }
    ((l.register = _), (l.registerRequest = g));
  },
  98,
);
