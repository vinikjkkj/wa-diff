__d(
  "WAWebImg.react",
  [
    "WAAbortError",
    "WAFilteredCatch",
    "WAWebConstantsDeprecated",
    "WAWebCopyPasteSelectable.react",
    "WAWebImgRetry",
    "WAWebImgRetryQueue",
    "WAWebMiscErrors",
    "WAWebNoop",
    "WAWebURLUtils",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = new (r("WAWebImgRetryQueue"))();
    function f(t) {
      var n = o("react-compiler-runtime").c(2),
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.alt,
        s = i.className,
        c = i.crossOrigin,
        f = i.disableContextMenu,
        y = i.draggable,
        C = i.hasPrivacyChecks,
        b = i.noXHR,
        v = i.onBlur,
        S = i.onClick,
        R = i.onError,
        L = i.onFocus,
        E = i.onLoad,
        k = i.onMouseMove,
        I = i.plainText,
        T = i.renderError,
        D = i.renderLoading,
        x = i.selectable,
        $ = i.style,
        P = c === void 0 ? !0 : c,
        N = f === void 0 ? !1 : f,
        M = C === void 0 ? !0 : C,
        w = b === void 0 ? !1 : b,
        A = m(null),
        F = r("useMergeRefs")(a, A),
        O = m(null),
        B = p(i.src),
        W = B[0],
        q = B[1],
        U = p(!0),
        V = U[0],
        H = U[1],
        G = p(null),
        z = G[0],
        j = G[1],
        K = p(!0),
        Q = K[0],
        X = K[1],
        Y = r("useWAWebUnmountSignal")();
      i.src !== W && (q(i.src), H(!0));
      var J = function (t) {
          N && t.preventDefault();
        },
        Z = function (t) {
          if ((H(!1), !W || !h(W))) {
            j(t.error);
            return;
          }
          var e = O.current,
            n;
          if (e)
            if (g(e, i)) {
              if (!e.noXHR) return;
              n = e;
            } else {
              var a = e.release();
              (a && _.remove(e), (n = new (r("WAWebImgRetry"))(W, P, w, M)));
            }
          else n = new (r("WAWebImgRetry"))(W, P, w, M);
          O.current = n;
          var l = _.enqueue(n);
          l.then(function () {
            n === n && (Y.aborted || H(!0));
          })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                [
                  o("WAWebMiscErrors").ServerStatusError,
                  o("WAWebMiscErrors").GaveUpRetry,
                ],
                function (e) {
                  n === n && (Y.aborted || (H(!1), j(e), R && R(e)));
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebMiscErrors").Unmount,
                r("WAWebNoop"),
              ),
            )
            .catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
        },
        ee = function (t) {
          if (t.currentTarget.tagName === "IMG") {
            var e = A.current;
            (e != null && e.complete && (e.style.visibility = "visible"),
              E && E(t),
              X(!1));
          }
        },
        te;
      if (
        (n[0] !== W ? ((te = [W]), (n[0] = W), (n[1] = te)) : (te = n[1]),
        d(function () {
          if (W) {
            var e = A.current;
            return (
              e && !e.complete && (e.style.visibility = "hidden"),
              function () {
                var e = O.current;
                if (e) {
                  var t = e.release();
                  t && _.remove(e);
                }
              }
            );
          }
        }, te),
        z && T)
      )
        return T(z);
      var ne = !!(V && W);
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebCopyPasteSelectable.react").SelectableImg, {
            onFocus: L,
            onBlur: v,
            ref: F,
            plainText: I || "",
            selectable: !!x,
            crossOrigin: P ? "anonymous" : void 0,
            onError: ne ? Z : r("WAWebNoop"),
            onLoad: ne ? ee : r("WAWebNoop"),
            src:
              ne && W != null
                ? W
                : r("WAWebConstantsDeprecated").ONE_BY_ONE_TRANS_GIF,
            alt: l,
            className: s,
            draggable: y,
            onClick: S,
            onMouseMove: k,
            style: $,
            onContextMenu: J,
            "data-testid": void 0,
          }),
          Q && (D == null ? void 0 : D()),
        ],
      });
    }
    function g(e, t) {
      return (
        e.src === t.src &&
        e.crossOrigin === t.crossOrigin &&
        e.noXHR === t.noXHR &&
        e.hasPrivacyChecks === t.hasPrivacyChecks
      );
    }
    function h(e) {
      return e[0] === "/" || r("WAWebURLUtils").isHttp(e);
    }
    l.default = f;
  },
  98,
);
