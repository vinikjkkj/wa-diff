__d(
  "WebBloksMiStartSilentAuth",
  ["Promise", "err", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "coverage_ineligible",
      u = "coverage_request_failed",
      c = "could_not_parse_coverage_response",
      d = "client_timeout",
      m = "auth_request_failed",
      p = "invalid_auth_url",
      _ = "invalid_redirect_regex",
      f = "no_redirect_match",
      g = "not_on_mobile_data",
      h = 15e3;
    function y() {
      var e = navigator;
      if (e == null || typeof e != "object") return !0;
      var t = e.connection;
      return t == null || typeof t != "object" ? !0 : t.type !== "wifi";
    }
    function C(e) {
      return r("getErrorSafe")(e).message;
    }
    function b(e) {
      var t;
      return (t = e == null ? void 0 : e.on_connection_log) != null ? t : null;
    }
    function v(e) {
      var t;
      return (t = e == null ? void 0 : e.on_coverage_success_log) != null
        ? t
        : null;
    }
    function S(e) {
      var t;
      return (t = e == null ? void 0 : e.on_coverage_failure_log) != null
        ? t
        : null;
    }
    function R(e) {
      return JSON.stringify({
        connections: e.map(function (e) {
          return { url: e, response_code: "", content: "", headers: "{}" };
        }),
      });
    }
    function L(e, t, n, r, o) {
      var a = r > 0 ? "auth" : "coverage",
        i = [
          "phase=" + a,
          "iframe_loads=" + String(e),
          "unreadable_loads=" + String(t),
          "blank_loads=" + String(n),
          "connections=" + String(r),
        ];
      return (
        o != null && o !== "" && i.push("last_unreadable=" + o),
        i.join(" ")
      );
    }
    function E(e, t, n, r, o, a, i, l) {
      var s = null;
      if (o != null)
        try {
          s = new RegExp(o);
        } catch (t) {
          e.executeCatch(i, [_]);
          return;
        }
      if (!y()) {
        e.executeCatch(i, [g]);
        return;
      }
      var u = k(e, a, i, b(r)),
        c = function () {
          D(u, n, s);
        };
      if (t == null) {
        c();
        return;
      }
      T(e, u, t, l, c, v(r), S(r));
    }
    function k(e, t, n, r) {
      var o = !1,
        a = null,
        i = null,
        l = null,
        s = [],
        u = 0,
        c = 0,
        m = 0,
        p = null,
        _ = function () {
          l != null && (window.clearTimeout(l), (l = null));
          var e = a;
          if (e != null) {
            i != null && (e.removeEventListener("load", i), (i = null));
            var t = e.parentNode;
            (t != null && t.removeChild(e), (a = null));
          }
        },
        f = function () {
          r == null || s.length === 0 || e.executeCatch(r, [R(s)]);
        },
        g = function (r) {
          o || ((o = !0), f(), _(), e.executeCatch(t, [r]));
        },
        y = function (r) {
          o || ((o = !0), f(), _(), e.executeCatch(n, [r]));
        };
      return (
        (l = window.setTimeout(function () {
          y(d + " due to: " + L(u, c, m, s.length, p));
        }, h)),
        {
          settleSuccess: g,
          settleFailure: y,
          isSettled: function () {
            return o;
          },
          trackIframe: function (t, n) {
            ((a = t), (i = n));
          },
          recordConnection: function (t) {
            s.push(t);
          },
          recordAuthLoad: function (t, n) {
            (u++,
              t === "unreadable"
                ? (c++, n != null && n !== "" && (p = n))
                : t === "blank" && m++);
          },
        }
      );
    }
    function I(t) {
      return (e || (e = n("Promise")))
        .resolve()
        .then(function () {
          return window.fetch(t, {
            method: "GET",
            mode: "cors",
            credentials: "omit",
          });
        })
        .then(function (e) {
          return e.text().then(function (t) {
            if (!e.ok) throw r("err")("status %s: %s", e.status, t);
            return t;
          });
        });
    }
    function T(e, t, n, r, o, a, i) {
      var l = function () {
          a != null && e.executeCatch(a, []);
        },
        d = function (r) {
          (i != null && e.executeCatch(i, [r]), t.settleFailure(r));
        };
      I(n)
        .then(function (n) {
          if (!t.isSettled()) {
            if (r == null) {
              (l(), o());
              return;
            }
            var a;
            try {
              a = e.execute(r, [n]);
            } catch (e) {
              d(c);
              return;
            }
            a === !0 ? (l(), o()) : d(a === !1 ? s : c);
          }
        })
        .catch(function (e) {
          t.isSettled() || d(u + " due to: " + C(e));
        });
    }
    function D(e, t, n) {
      if (!e.isSettled()) {
        if (!x(t)) {
          e.settleFailure(p);
          return;
        }
        try {
          var o = document.createElement("iframe");
          ((o.width = "1"),
            (o.height = "1"),
            o.setAttribute("aria-hidden", "true"),
            (o.style.position = "absolute"),
            (o.style.width = "1px"),
            (o.style.height = "1px"),
            (o.style.border = "0"),
            (o.style.left = "-9999px"),
            o.setAttribute("referrerpolicy", "no-referrer"));
          var a = function () {
            $(e, o, n);
          };
          (o.addEventListener("load", a),
            e.trackIframe(o, a),
            (o.src = t),
            e.recordConnection(t));
          var i = document.body;
          if (i == null)
            throw r("err")("document.body unavailable for silent auth iframe");
          i.appendChild(o);
        } catch (t) {
          e.settleFailure(m + " due to: " + C(t));
        }
      }
    }
    function x(e) {
      var t;
      try {
        t = new URL(e);
      } catch (e) {
        return !1;
      }
      return t.protocol === "https:" || t.protocol === "http:";
    }
    function $(e, t, n) {
      if (!e.isSettled()) {
        var r = null;
        try {
          var o = t.contentWindow;
          o != null && (r = o.location.href);
        } catch (t) {
          e.recordAuthLoad("unreadable", C(t));
          return;
        }
        if (r == null || r === "" || r === "about:blank") {
          e.recordAuthLoad("blank");
          return;
        }
        if ((e.recordAuthLoad("readable"), e.recordConnection(r), n == null)) {
          e.settleSuccess(r);
          return;
        }
        n.test(r) ? e.settleSuccess(r) : e.settleFailure(f);
      }
    }
    l.default = E;
  },
  98,
);
