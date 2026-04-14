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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.alt,
        l = a.className,
        s = a.crossOrigin,
        c = s === void 0 ? !0 : s,
        f = a.disableContextMenu,
        y = f === void 0 ? !1 : f,
        C = a.draggable,
        b = a.hasPrivacyChecks,
        v = b === void 0 ? !0 : b,
        S = a.noXHR,
        R = S === void 0 ? !1 : S,
        L = a.onBlur,
        E = a.onClick,
        k = a.onError,
        I = a.onFocus,
        T = a.onLoad,
        D = a.onMouseMove,
        x = a.plainText,
        $ = a.renderError,
        P = a.renderLoading,
        N = a.selectable,
        M = a.style,
        w = m(null),
        A = r("useMergeRefs")(n, w),
        F = m(null),
        O = p(a.src),
        B = O[0],
        W = O[1],
        q = p(!0),
        U = q[0],
        V = q[1],
        H = p(null),
        G = H[0],
        z = H[1],
        j = p(!0),
        K = j[0],
        Q = j[1],
        X = r("useWAWebUnmountSignal")();
      a.src !== B && (W(a.src), V(!0));
      var Y = function (t) {
          y && t.preventDefault();
        },
        J = function (t) {
          if ((V(!1), !B || !h(B))) {
            z(t.error);
            return;
          }
          var e = F.current,
            n;
          if (e)
            if (g(e, a)) {
              if (!e.noXHR) return;
              n = e;
            } else {
              var i = e.release();
              (i && _.remove(e), (n = new (r("WAWebImgRetry"))(B, c, R, v)));
            }
          else n = new (r("WAWebImgRetry"))(B, c, R, v);
          F.current = n;
          var l = _.enqueue(n);
          l.then(function () {
            n === n && (X.aborted || V(!0));
          })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                [
                  o("WAWebMiscErrors").ServerStatusError,
                  o("WAWebMiscErrors").GaveUpRetry,
                ],
                function (e) {
                  n === n && (X.aborted || (V(!1), z(e), k && k(e)));
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
        Z = function (t) {
          if (t.currentTarget.tagName === "IMG") {
            var e = w.current;
            (e != null && e.complete && (e.style.visibility = "visible"),
              T && T(t),
              Q(!1));
          }
        };
      if (
        (d(
          function () {
            if (B) {
              var e = w.current;
              return (
                e && !e.complete && (e.style.visibility = "hidden"),
                function () {
                  var e = F.current;
                  if (e) {
                    var t = e.release();
                    t && _.remove(e);
                  }
                }
              );
            }
          },
          [B],
        ),
        G && $)
      )
        return $(G);
      var ee = !!(U && B);
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebCopyPasteSelectable.react").SelectableImg, {
            onFocus: I,
            onBlur: L,
            ref: A,
            plainText: x || "",
            selectable: !!N,
            crossOrigin: c ? "anonymous" : void 0,
            onError: ee ? J : r("WAWebNoop"),
            onLoad: ee ? Z : r("WAWebNoop"),
            src:
              ee && B != null
                ? B
                : r("WAWebConstantsDeprecated").ONE_BY_ONE_TRANS_GIF,
            alt: i,
            className: l,
            draggable: C,
            onClick: E,
            onMouseMove: D,
            style: M,
            onContextMenu: Y,
            "data-testid": void 0,
          }),
          K && (P == null ? void 0 : P()),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
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
