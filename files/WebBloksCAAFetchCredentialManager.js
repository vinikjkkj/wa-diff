__d(
  "WebBloksCAAFetchCredentialManager",
  ["CAAWebBloksMinificationKeys", "loadGoogleIdentityServices", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
        "15057814354-80cg059cn49j6kmhhkjam4b00on1gb2n.apps.googleusercontent.com",
      s = "success",
      u = "failure",
      c = "no_account_selected",
      d = "dialog_dismissed",
      m = "google_token",
      p = { credential: "", email: "", name: "", picture: "", type: "" };
    function _(e, t, n, r) {
      (r === void 0 && (r = p),
        e.executeCatch(t, [
          n,
          r.type,
          r.email,
          r.name,
          r.credential,
          r.picture,
        ]));
    }
    function f(t, n, a) {
      var i =
        n == null
          ? void 0
          : n.get(
              o("CAAWebBloksMinificationKeys")
                .CREDENTIAL_MANAGER_CREDENTIALS_TO_DISPLAY,
            );
      if (i == null || i.length !== 1 || i[0] !== m) {
        _(t, a, u);
        return;
      }
      var l = !1;
      r("promiseDone")(
        o("loadGoogleIdentityServices").loadGoogleIdentityServices(),
        function (n) {
          (n.initialize({
            callback: function (n) {
              var e, r, i;
              if (!l) {
                l = !0;
                var c = o("loadGoogleIdentityServices").decodeGoogleJwt(
                  n.credential,
                );
                if (c == null) {
                  _(t, a, u);
                  return;
                }
                _(t, a, s, {
                  credential: n.credential,
                  email: (e = c.email) != null ? e : "",
                  name: (r = c.name) != null ? r : "",
                  picture: (i = c.picture) != null ? i : "",
                  type: m,
                });
              }
            },
            client_id: e,
            itp_support: !0,
            context: "signup",
          }),
            n.prompt(function (e) {
              if (!l)
                if (e.isDismissedMoment()) {
                  if (e.getDismissedReason() === "credential_returned") return;
                  ((l = !0), _(t, a, d));
                } else e.isSkippedMoment() && ((l = !0), _(t, a, c));
            }));
        },
        function () {
          l || ((l = !0), _(t, a, u));
        },
      );
    }
    l.default = f;
  },
  98,
);
