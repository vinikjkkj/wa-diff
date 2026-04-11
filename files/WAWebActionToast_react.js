__d(
  "WAWebActionToast.react",
  [
    "WAAbortError",
    "WAPromiseDelays",
    "WAWebNonEmptyString",
    "WAWebNoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "err",
    "react",
    "uniqueID",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useRef,
      _ = u.useState,
      f = 5e3,
      g = { LEFT: "LEFT", RIGHT: "RIGHT" },
      h = function (t, n) {
        if (!t) throw r("err")("ActionType must have text!");
        ((this.text = t),
          n &&
            ((this.action = n.actionText), (this.handler = n.actionHandler)));
      };
    function y(e) {
      var t;
      return o("WAWebNonEmptyString").asNonEmptyString(
        r("uniqueID")(
          (t = o("WAWebNonEmptyString").asMaybeNonEmptyString(e)) != null
            ? t
            : "action_toast",
        ),
      );
    }
    function C(e) {
      var t = e.settleDuration,
        n = t === void 0 ? f : t,
        a = e.toastPosition,
        i = a === void 0 ? g.LEFT : a,
        l = e.initialAction,
        u = e.pendingAction,
        h = e.id,
        C = h === void 0 ? y() : h,
        b = e.onDismiss,
        v = _(l),
        S = v[0],
        R = v[1],
        L = _(l),
        E = L[0],
        k = L[1],
        I = _(!0),
        T = I[0],
        D = I[1],
        x = r("useWAWebPrevious")(S),
        $ = p(null),
        P = p(null),
        N = p(null),
        M = p(!1);
      d(
        function () {
          l !== x && (R(l), k(l), D(!0), (M.current = !1));
        },
        [l, x],
      );
      var w = m(function () {
          return new AbortController();
        }, []),
        A = w.signal,
        F = c(
          function () {
            (b != null && b(),
              w.abort(),
              o("WAWebToastManager").ToastManager.close(C));
          },
          [b, C, w],
        ),
        O = c(
          function () {
            M.current ||
              (E &&
                E.handler &&
                ((M.current = !0), E.handler().catch(r("WAWebNoop")), F()));
          },
          [E, F],
        ),
        B = function (t) {
          $.current && $.current.controller.abort();
          var e = new AbortController(),
            a = e.signal,
            i = t
              .then(function (e) {
                if (a.aborted) throw new (o("WAAbortError").AbortError)();
                (k(e), D(!1));
              })
              .catch(function (e) {
                if (e.name !== o("WAAbortError").ABORT_ERROR) (k(e), D(!1));
                else throw e;
              })
              .then(function () {
                return o("WAPromiseDelays").delayMs(n, A);
              })
              .then(function () {
                if (a.aborted) throw new (o("WAAbortError").AbortError)();
                (b != null && b(),
                  o("WAWebToastManager").ToastManager.close(C));
              })
              .catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
          $.current = { promise: i, controller: e };
        };
      d(
        function () {
          B(u);
        },
        [u],
      );
      var W = m(
          function () {
            if (E != null) {
              var e = E.action,
                t = E.handler;
              if (e != null && t != null)
                return s.jsx(o("WAWebToast.react").ToastActionBtn, {
                  buttonText: e,
                  onClick: O,
                  ref: P,
                });
            }
            return null;
          },
          [E, O],
        ),
        q = m(
          function () {
            return T
              ? null
              : s.jsx(o("WAWebToast.react").ToastDismissBtn, {
                  onClick: F,
                  ref: N,
                });
          },
          [F, T],
        ),
        U = m(
          function () {
            return W ? P : q ? N : null;
          },
          [W, q],
        );
      return E
        ? s.jsx(o("WAWebToast.react").ToastBody, {
            toastPosition: i,
            actionText: E.text,
            actionButtons: W != null ? W : void 0,
            dismissButton: q != null ? q : void 0,
            focusButtonRef: U,
          })
        : null;
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.ToastPosition = g),
      (l.ActionType = h),
      (l.genId = y),
      (l.ActionToast = C));
  },
  98,
);
