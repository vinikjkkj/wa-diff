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
        c = null,
        d = null,
        m = !1,
        p = function () {
          i = !1;
          var e = h(a);
          !m &&
            l == null &&
            e != null &&
            (l = o("WDSPresentationObservers").notifyWDSDialogPresented(
              t,
              e,
              r(),
              e === "confirmation" ? c : null,
            ));
        },
        _ = {
          declare: function (r, o) {
            m ||
              ((a[r] += 1),
              o != null && (c = o),
              !i &&
                l == null &&
                ((i = !0), (e || (e = n("Promise"))).resolve().then(p)));
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
          runAsButtonPress: function (t, n) {
            u = t;
            try {
              n();
            } finally {
              u = null;
            }
          },
        };
      return {
        handle: _,
        noteCloseRequest: function () {
          d == null &&
            !m &&
            (d = {
              buttonRole: u,
              context: o(
                "WDSPresentationObservers",
              ).captureWDSPresentationContext(),
              dismissal: s ? "user_dismissed" : "closed",
            });
        },
        end: function () {
          m ||
            ((m = !0),
            l != null &&
              (d != null
                ? o("WDSPresentationObservers").notifyWDSDialogDismissed(
                    l,
                    d.context,
                    d.dismissal,
                    "request",
                    d.buttonRole,
                  )
                : o("WDSPresentationObservers").notifyWDSDialogDismissed(
                    l,
                    o(
                      "WDSPresentationObservers",
                    ).captureWDSPresentationContext(),
                    "closed",
                    "removal",
                  )));
        },
      };
    }
    function f(e, t, n) {
      var r,
        o = d(p);
      return (
        m(
          function () {
            if (!(!t || o == null))
              return (
                o.declare(e, n),
                function () {
                  return o.withdraw(e);
                }
              );
          },
          [n, o, t, e],
        ),
        (r = o == null ? void 0 : o.runAsUserDismissal) != null ? r : C
      );
    }
    function g() {
      var e,
        t = d(p);
      return (e = t == null ? void 0 : t.runAsButtonPress) != null ? e : b;
    }
    function h(e) {
      return e.confirmation > 0
        ? "confirmation"
        : e.content > 0
          ? "content"
          : null;
    }
    function y() {
      var e, t;
      return (e = (t = d(p)) == null ? void 0 : t.runAsUserDismissal) != null
        ? e
        : C;
    }
    function C(e) {
      e();
    }
    function b(e, t) {
      t();
    }
    ((l.WDSDialogPresentationContext = p),
      (l.createWDSDialogPresentation = _),
      (l.useWDSDialogPresentationDeclaration = f),
      (l.useWDSDialogButtonPress = g),
      (l.useWDSDialogUserDismissal = y));
  },
  98,
);
