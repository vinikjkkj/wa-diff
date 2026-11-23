__d(
  "WAWebUsernameKeyVerificationFlow",
  [
    "WAWebModalManager",
    "WAWebUim",
    "WAWebUimContext",
    "WAWebUimUie.react",
    "WAWebUsernameKeyVerificationModalLoadable",
    "WAWebUsernameUtils",
    "react",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useEffectEvent,
      p = u.useRef;
    async function _(e) {
      var t = e.onInvalidKeyError,
        n = e.onKeyRejected,
        r = e.onPromptEscape,
        a = e.searchLogContext,
        i = e.stackOverExistingModal,
        l = e.username,
        u = o("WAWebUsernameUtils").getLIDByUsername(l);
      if (u) return u;
      var c = i === !0;
      return new Promise(function (e) {
        var i = !1,
          u = function (n, r) {
            return (
              r === void 0 && (r = c),
              i
                ? !1
                : ((i = !0),
                  r &&
                    (c
                      ? o(
                          "WAWebModalManager",
                        ).ModalManager.closeSupportOrModal()
                      : o("WAWebModalManager").ModalManager.close()),
                  e(n),
                  !0)
            );
          },
          d = s.jsx(
            o("WAWebUsernameKeyVerificationModalLoadable")
              .UsernameKeyVerificationModalLoadable,
            {
              username: l,
              onKeyVerificationSuccess: function (t) {
                u(t);
              },
              onKeyVerificationCancel: function () {
                u(null);
              },
              onInvalidKeyError: t,
              onKeyRejected: n,
              searchLogContext: a,
              dontCloseViaModalManager: c ? !0 : void 0,
            },
          ),
          m =
            c || r != null
              ? s.jsx(f, {
                  onCancel: function (t) {
                    return u(null, t);
                  },
                  onEscape: r,
                  children: d,
                })
              : d;
        c
          ? o("WAWebModalManager").ModalManager.openSupportModal(m)
          : o("WAWebModalManager").ModalManager.open(m);
      });
    }
    function f(e) {
      var t = e.children,
        n = e.onCancel,
        a = e.onEscape,
        i = c(r("WAWebUimContext")),
        l = p(null),
        u = p(0),
        _ = p(!1),
        f = m(function () {
          return n(!1);
        });
      d(function () {
        u.current += 1;
        var e = u.current;
        return (
          Promise.resolve().then(function () {
            if (u.current === e) {
              var t;
              (t = l.current) == null || t.activate();
            }
          }),
          function () {
            Promise.resolve().then(function () {
              u.current === e && f();
            });
          }
        );
      }, []);
      var g = r("useWAWebStableCallback")(function (e, t) {
          if (!_.current) {
            _.current = !0;
            var r = n(e !== o("WAWebUim").DismissReason.LIFECYCLE);
            r &&
              (t == null ? void 0 : t.type) === "keydown" &&
              "key" in t &&
              t.key === "Escape" &&
              (a == null || a());
          }
        }),
        h = r("useWAWebStableCallback")(function () {
          i == null || i.requestFocus();
        });
      return s.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "UsernameKeyVerificationPrompt",
        escapable: !0,
        ref: l,
        requestDismiss: g,
        requestFocus: h,
        children: t,
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.usernameKeyVerificationFlow = _));
  },
  98,
);
