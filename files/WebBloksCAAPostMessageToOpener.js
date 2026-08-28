__d(
  "WebBloksCAAPostMessageToOpener",
  ["SecurePostMessage", "WebBloksFBLErrorBeacon"],
  function (t, n, r, o, a, i, l) {
    var e = 250;
    function s(e) {
      try {
        return new URL(e).hostname;
      } catch (e) {
        return "invalid_origin";
      }
    }
    function u(e) {
      var t;
      try {
        t = new URL(e);
      } catch (e) {
        return null;
      }
      return t.protocol !== "https:" ||
        t.username !== "" ||
        t.password !== "" ||
        t.pathname !== "/" ||
        t.search !== "" ||
        t.hash !== ""
        ? null
        : t.origin;
    }
    function c(e, t, n) {
      t === "__proto__" ||
        t === "constructor" ||
        t === "prototype" ||
        (e[t] = n);
    }
    function d(e) {
      var t = {};
      if (!e) return t;
      var n = e.replace(/^[#?]/, ""),
        r = n.split("&");
      for (var o of r) {
        var a = o.indexOf("=");
        if (a === -1) {
          if (o)
            try {
              c(t, decodeURIComponent(o), "");
            } catch (e) {
              c(t, o, "");
            }
        } else {
          var i = o.substring(0, a),
            l = o.substring(a + 1);
          if (i)
            try {
              c(t, decodeURIComponent(i), decodeURIComponent(l));
            } catch (e) {
              c(t, i, l);
            }
        }
      }
      return t;
    }
    function m(e) {
      var t = e.indexOf("#"),
        n = e.indexOf("?"),
        r = t !== -1 ? d(e.substring(t + 1)) : {},
        o = n !== -1 && (t === -1 || n < t),
        a = o ? d(t !== -1 ? e.substring(n + 1, t) : e.substring(n + 1)) : {};
      return { hash: r, query: a, hasQuery: o };
    }
    function p() {
      var e = {},
        t = {};
      try {
        ((e = d(window.location.hash)), (t = d(window.location.search)));
      } catch (e) {
        return (
          o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
            error: "XD_PARAM_PARSE",
            extra: {
              message:
                "Failed to parse location params: " +
                (e instanceof Error ? e.message : "unknown"),
            },
          }),
          { cb: null, frame: null }
        );
      }
      if (e.cb)
        return (
          e.frame == null &&
            o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
              error: "XD_PARAM_FRAME_MISSING",
              extra: {
                message:
                  "cb found in direct xd_arbiter fragment but frame missing",
              },
            }),
          { cb: e.cb, frame: e.frame }
        );
      var n = !1,
        r = t.cancel_url;
      if (r != null && r !== "")
        try {
          var a = m(r),
            i = a.hash,
            l = a.query;
          if (i.cb != null && i.cb !== "") {
            var s,
              u = (s = i.frame) != null ? s : l.frame;
            return (
              u == null &&
                o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
                  error: "XD_PARAM_FRAME_MISSING",
                  extra: {
                    message:
                      "cb found in cancel_url fragment but frame missing from fragment and query params",
                  },
                }),
              { cb: i.cb, frame: u }
            );
          }
        } catch (e) {
          ((n = !0),
            o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
              error: "XD_PARAM_PARSE",
              extra: {
                message:
                  "Failed to parse cb from cancel_url: " +
                  (e instanceof Error ? e.message : "unknown"),
              },
            }));
        }
      var c = t.next;
      if (c != null && c !== "")
        try {
          var p = c.indexOf("?");
          if (p === -1)
            return (
              o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
                error: "XD_PARAM_PARSE",
                extra: {
                  message:
                    "Missing query params in path 3: next url. Failed to parse for cb and frame",
                },
              }),
              { cb: null, frame: null }
            );
          var _ = c.indexOf("#", p),
            f = _ === -1 ? c.substring(p) : c.substring(p, _),
            g = d(f).redirect_uri;
          if (g != null && g !== "") {
            var h = m(g),
              y = h.hash,
              C = h.hasQuery,
              b = h.query;
            if (y.cb != null && y.cb !== "") {
              var v = C ? b.frame : null;
              return (
                v == null &&
                  o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
                    error: "XD_PARAM_FRAME_MISSING",
                    extra: {
                      message:
                        "cb found in next/redirect_uri fragment but frame missing from query params",
                    },
                  }),
                { cb: y.cb, frame: v }
              );
            }
          }
        } catch (e) {
          ((n = !0),
            o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
              error: "XD_PARAM_PARSE",
              extra: {
                message:
                  "Failed to parse cb from next/redirect_uri: " +
                  (e instanceof Error ? e.message : "unknown"),
              },
            }));
        }
      return (
        n ||
          o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
            error: "XD_PARAM_PARSE",
            extra: {
              message:
                "Null cb and frame, no valid params found in direct xd_arbiter url, cancel_url or next/redirect_uri",
            },
          }),
        { cb: null, frame: null }
      );
    }
    var _ = new WeakSet();
    function f(t, n) {
      try {
        (window.close(),
          window.setTimeout(function () {
            var e = window;
            e.closed === !1 &&
              o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
                error: "CLOSE_REFUSED",
                extra: { asid: n, origin: s(t) },
              });
          }, e));
      } catch (e) {}
    }
    function g(e, t, n, a, i, l, c, d, m) {
      if (_.has(window)) {
        (o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
          error: "DUPLICATE_PREVENTED",
          extra: { asid: l, origin: s(c) },
        }),
          m != null && e.executeCatch(m, ["duplicate_prevented", t]));
        return;
      }
      var g = !0,
        h = window,
        y = h.opener;
      if (y == null || y === window || typeof y.postMessage != "function") {
        (o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
          error: "DIALOG_CLOSE",
          extra: {
            message: "No valid opener window found",
            asid: l,
            origin: s(c),
          },
        }),
          m != null && e.executeCatch(m, ["no_opener", t]),
          f(c, l));
        return;
      }
      var C = y,
        b = u(c);
      if (b == null) {
        (o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
          error: "DIALOG_CLOSE",
          extra: {
            message: "Server-supplied origin is not a deliverable https origin",
            asid: l,
            origin: s(c),
          },
        }),
          m != null && e.executeCatch(m, ["invalid_origin", t]),
          f(c, l));
        return;
      }
      var v = b,
        S = p(),
        R = S.cb,
        L = S.frame;
      if (R == null || R === "") {
        (o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
          error: "DIALOG_CLOSE",
          extra: {
            message: "No callback ID (cb) found in URL",
            asid: l,
            origin: s(v),
          },
        }),
          m != null && e.executeCatch(m, ["no_callback_id", t]),
          f(v, l));
        return;
      }
      var E = {
          cb: R,
          frame: L != null && L !== "" ? L : R,
          access_token: n,
          expires_in: i,
          signed_request: a,
        },
        k = JSON.stringify(E);
      function I() {
        try {
          r("SecurePostMessage").sendMessageToSpecificOrigin(C, k, v);
        } catch (n) {
          if (g) {
            ((g = !1), _.add(window), window.setTimeout(I, 200));
            return;
          }
          _.delete(window);
          var a = o("WebBloksFBLErrorBeacon").webBloksFBLSanitizeLogMessage(n);
          (o("WebBloksFBLErrorBeacon").webBloksFBLErrorBeacon({
            error: "POST_MESSAGE",
            extra: {
              message: a + ", WebBloksCAAPostMessageToOpener.js",
              asid: l,
              origin: s(v),
            },
          }),
            m != null && e.executeCatch(m, [a, t]),
            f(v, l));
          return;
        }
        (_.add(window), d != null && e.executeCatch(d, [n, t]), f(v, l));
      }
      I();
    }
    l.default = g;
  },
  98,
);
