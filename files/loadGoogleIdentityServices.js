__d(
  "loadGoogleIdentityServices",
  ["Promise", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "https://accounts.google.com/gsi/client",
      u = "loadGoogleIdentityServices",
      c =
        'script[src*="accounts.google.com/gsi/client"][data-owner="' + u + '"]',
      d = null;
    function m(e) {
      try {
        var t = e.split(".")[1],
          n = t.replace(/-/g, "+").replace(/_/g, "/"),
          r = n + "=".repeat((4 - (n.length % 4)) % 4),
          o = decodeURIComponent(
            atob(r)
              .split("")
              .map(function (e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
              })
              .join(""),
          );
        return JSON.parse(o);
      } catch (e) {
        return null;
      }
    }
    function p(t) {
      if (d != null) return d;
      var o = new (e || (e = n("Promise")))(function (e, n) {
        var o,
          a = null,
          i = function () {
            var e;
            ((e = a) == null || e.remove(), (a = null));
          },
          l =
            (o = window.google) == null || (o = o.accounts) == null
              ? void 0
              : o.id;
        if (l != null) {
          e(l);
          return;
        }
        var d = function () {
            var t, o;
            (t = a) == null || t.setAttribute("data-loaded", "true");
            var l =
              (o = window.google) == null || (o = o.accounts) == null
                ? void 0
                : o.id;
            l != null
              ? e(l)
              : (i(),
                n(
                  r("err")(
                    "GSI client loaded but google.accounts.id is unavailable",
                  ),
                ));
          },
          m = function () {
            var e;
            ((e = a) == null || e.setAttribute("data-loaded", "true"),
              i(),
              n(r("err")("GSI client script failed to load")));
          },
          p = document.querySelector(c);
        if (p != null) {
          ((a = p),
            p.getAttribute("data-loaded") === "true"
              ? d()
              : (p.addEventListener("load", d),
                p.addEventListener("error", m)));
          return;
        }
        var _ = document.body;
        if (_ == null) {
          n(r("err")("Cannot load GSI client: document.body is unavailable"));
          return;
        }
        var f = new URL(s),
          g = t == null ? void 0 : t.locale;
        g != null && f.searchParams.set("hl", g.slice(0, 7));
        var h = document.createElement("script");
        ((h.src = f.toString()),
          (h.async = !0),
          (h.dataset.loaded = "false"),
          (h.dataset.owner = u),
          h.addEventListener("load", d),
          h.addEventListener("error", m),
          (a = h),
          _.appendChild(h));
      });
      return (
        o.catch(function () {
          d === o && (d = null);
        }),
        (d = o),
        o
      );
    }
    ((l.decodeGoogleJwt = m), (l.loadGoogleIdentityServices = p));
  },
  98,
);
