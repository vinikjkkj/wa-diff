__d(
  "WDSDialogPresentation",
  ["Promise", "WDSPresentationObservers", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useLayoutEffect,
      p = u.createContext(null);
    function _(t, r) {
      var a = { confirmation: 0, content: 0 },
        i = !1,
        l = null,
        s = !1,
        u = null,
        c = !1,
        d = function () {
          i = !1;
          var e = g(a);
          !c &&
            l == null &&
            e != null &&
            (l = o("WDSPresentationObservers").notifyWDSDialogPresented(
              t,
              e,
              r(),
            ));
        },
        m = {
          declare: function (r) {
            c ||
              ((a[r] += 1),
              !i &&
                l == null &&
                ((i = !0), (e || (e = n("Promise"))).resolve().then(d)));
          },
          withdraw: function (t) {
            a[t] = Math.max(0, a[t] - 1);
          },
          runAsUserDismissal: function (t) {
            s = !0;
            try {
              t();
            } finally {
              s = !1;
            }
          },
        };
      return {
        handle: m,
        noteCloseRequest: function () {
          u == null &&
            !c &&
            (u = {
              context: o(
                "WDSPresentationObservers",
              ).captureWDSPresentationContext(),
              dismissal: s ? "user_dismissed" : "closed",
            });
        },
        end: function () {
          if (!c && ((c = !0), l != null)) {
            var e, t;
            o("WDSPresentationObservers").notifyWDSDialogDismissed(
              l,
              u != null
                ? u.context
                : o("WDSPresentationObservers").captureWDSPresentationContext(),
              (e = (t = u) == null ? void 0 : t.dismissal) != null
                ? e
                : "closed",
            );
          }
        },
      };
    }
    function f(e, t) {
      var n,
        r = d(p);
      return (
        m(
          function () {
            if (!(!t || r == null))
              return (
                r.declare(e),
                function () {
                  return r.withdraw(e);
                }
              );
          },
          [r, t, e],
        ),
        (n = r == null ? void 0 : r.runAsUserDismissal) != null ? n : y
      );
    }
    function g(e) {
      return e.confirmation > 0
        ? "confirmation"
        : e.content > 0
          ? "content"
          : null;
    }
    function h() {
      var e, t;
      return (e = (t = d(p)) == null ? void 0 : t.runAsUserDismissal) != null
        ? e
        : y;
    }
    function y(e) {
      e();
    }
    ((l.WDSDialogPresentationContext = p),
      (l.createWDSDialogPresentation = _),
      (l.useWDSDialogPresentationDeclaration = f),
      (l.useWDSDialogUserDismissal = h));
  },
  98,
);
