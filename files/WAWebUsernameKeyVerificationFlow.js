__d(
  "WAWebUsernameKeyVerificationFlow",
  [
    "Promise",
    "WAWebModalManager",
    "WAWebUim",
    "WAWebUimContext",
    "WAWebUimUie.react",
    "WAWebUsernameKeyVerificationModalLoadable",
    "WAWebUsernameUtils",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useEffect,
      p = c.useEffectEvent,
      _ = c.useRef;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.onInvalidKeyError,
            a = t.onKeyRejected,
            i = t.onPromptEscape,
            l = t.searchLogContext,
            s = t.stackOverExistingModal,
            c = t.username,
            d = o("WAWebUsernameUtils").getLIDByUsername(c);
          if (d) return d;
          var m = s === !0;
          return new (e || (e = n("Promise")))(function (e) {
            var t = !1,
              n = function (r, a) {
                return (
                  a === void 0 && (a = m),
                  t
                    ? !1
                    : ((t = !0),
                      a &&
                        (m
                          ? o(
                              "WAWebModalManager",
                            ).ModalManager.closeSupportOrModal()
                          : o("WAWebModalManager").ModalManager.close()),
                      e(r),
                      !0)
                );
              },
              s = u.jsx(
                o("WAWebUsernameKeyVerificationModalLoadable")
                  .UsernameKeyVerificationModalLoadable,
                {
                  username: c,
                  onKeyVerificationSuccess: function (t) {
                    n(t);
                  },
                  onKeyVerificationCancel: function () {
                    n(null);
                  },
                  onInvalidKeyError: r,
                  onKeyRejected: a,
                  searchLogContext: l,
                  dontCloseViaModalManager: m ? !0 : void 0,
                },
              ),
              d =
                m || i != null
                  ? u.jsx(h, {
                      onCancel: function (t) {
                        return n(null, t);
                      },
                      onEscape: i,
                      children: s,
                    })
                  : s;
            m
              ? o("WAWebModalManager").ModalManager.openSupportModal(d)
              : o("WAWebModalManager").ModalManager.open(d);
          });
        })),
        g.apply(this, arguments)
      );
    }
    function h(t) {
      var a = o("react-compiler-runtime").c(14),
        i = t.children,
        l = t.onCancel,
        s = t.onEscape,
        c = d(r("WAWebUimContext")),
        f = _(null),
        g = _(0),
        h = _(!1),
        y;
      a[0] !== l
        ? ((y = function () {
            return l(!1);
          }),
          (a[0] = l),
          (a[1] = y))
        : (y = a[1]);
      var C = p(y),
        b;
      a[2] !== C
        ? ((b = function () {
            g.current = g.current + 1;
            var t = g.current;
            return (
              (e || (e = n("Promise"))).resolve().then(function () {
                if (g.current === t) {
                  var e;
                  (e = f.current) == null || e.activate();
                }
              }),
              function () {
                (e || (e = n("Promise"))).resolve().then(function () {
                  g.current === t && C();
                });
              }
            );
          }),
          (a[2] = C),
          (a[3] = b))
        : (b = a[3]);
      var v;
      (a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = []), (a[4] = v))
        : (v = a[4]),
        m(b, v));
      var S;
      a[5] !== l || a[6] !== s
        ? ((S = function (t, n) {
            if (!h.current) {
              h.current = !0;
              var e = l(t !== o("WAWebUim").DismissReason.LIFECYCLE);
              e &&
                (n == null ? void 0 : n.type) === "keydown" &&
                "key" in n &&
                n.key === "Escape" &&
                (s == null || s());
            }
          }),
          (a[5] = l),
          (a[6] = s),
          (a[7] = S))
        : (S = a[7]);
      var R = r("useWAWebStableCallback")(S),
        L;
      a[8] !== c
        ? ((L = function () {
            c == null || c.requestFocus();
          }),
          (a[8] = c),
          (a[9] = L))
        : (L = a[9]);
      var E = r("useWAWebStableCallback")(L),
        k;
      return (
        a[10] !== i || a[11] !== R || a[12] !== E
          ? ((k = u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "UsernameKeyVerificationPrompt",
              escapable: !0,
              ref: f,
              requestDismiss: R,
              requestFocus: E,
              children: i,
            })),
            (a[10] = i),
            (a[11] = R),
            (a[12] = E),
            (a[13] = k))
          : (k = a[13]),
        k
      );
    }
    l.usernameKeyVerificationFlow = f;
  },
  98,
);
