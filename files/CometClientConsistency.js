__d(
  "CometClientConsistency",
  [
    "fbt",
    "BaseToasterStateManager",
    "ClientConsistency",
    "ClientConsistencyEventEmitter",
    "CometErrorOverlay",
    "CometExceptionDialog.react",
    "CometTimeSpentNavigation",
    "FBNucleusCautionTriangleFilled20Icon.react",
    "FDSIcon.react",
    "cometPushToast",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = r("requireDeferred")("ClientConsistencyFalcoEvent").__setRef(
        "CometClientConsistency",
      ),
      _ = r("BaseToasterStateManager").getInstance(),
      f = !1,
      g = null,
      h = null,
      y = function (t) {
        p.onReady(function (e) {
          e.log(function () {
            var e;
            return babelHelpers.extends(
              {
                revs: Array.from(
                  r("ClientConsistency").getAdditionalRevisions(),
                ).map(function (e) {
                  return e.toString();
                }),
                trace_policy:
                  (e = r("CometTimeSpentNavigation").getPathInfo()) == null
                    ? void 0
                    : e.name,
              },
              t,
            );
          });
        });
      },
      C = function (t) {
        return (t != null ? Date.now() - t : -1).toString();
      };
    function b(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.reason,
        a,
        i;
      (t[0] !== n
        ? ((a = function () {
            ((h = Date.now()),
              y({ action: 2, event: "impression", reason: n }));
          }),
          (i = [n]),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2])),
        d(a, i));
      var l;
      return (
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = u.jsx(r("FDSIcon.react"), {
              color: "warning",
              icon: r("FBNucleusCautionTriangleFilled20Icon.react"),
              size: 20,
            })),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.reason,
        a = m(null),
        i,
        l;
      (t[0] !== n
        ? ((i = function () {
            ((a.current = Date.now()),
              y({ action: 3, event: "impression", reason: n }));
          }),
          (l = [n]),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l))
        : ((i = t[1]), (l = t[2])),
        d(i, l));
      var c, p, _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Refresh")),
          (p = s._(
            /*BTDS*/ "This page is out of date. Please refresh your browser.",
          )),
          (_ = s._(/*BTDS*/ "Refresh your browser")),
          (t[3] = c),
          (t[4] = p),
          (t[5] = _))
        : ((c = t[3]), (p = t[4]), (_ = t[5]));
      var g;
      return (
        t[6] !== n
          ? ((g = u.jsx(r("CometExceptionDialog.react"), {
              closeButtonText: c,
              errorDescription: p,
              errorSummary: _,
              onClose: function () {
                (y({
                  action: 3,
                  duration: C(a.current),
                  event: "click",
                  reason: n,
                }),
                  (f = !1),
                  (a.current = null),
                  window.location.reload(!0));
              },
              withCloseButton: !1,
            })),
            (t[6] = n),
            (t[7] = g))
          : (g = t[7]),
        g
      );
    }
    var S = function (t) {
        f ||
          (g == null &&
            ((g = o("cometPushToast").cometPushToast(
              {
                action: {
                  label: s._(/*BTDS*/ "Refresh"),
                  onPress: function () {
                    (y({
                      action: 2,
                      duration: C(h),
                      event: "click",
                      reason: t,
                    }),
                      (g = null),
                      (h = null),
                      window.location.reload(!0));
                  },
                },
                icon: u.jsx(b, { reason: t }),
                message: s._(
                  /*BTDS*/ "This page is out of date. Please refresh your browser.",
                ),
                withoutCloseButton: !0,
              },
              1 / 0,
            )),
            _.stopTimer(g)));
      },
      R = function (t) {
        f ||
          (g != null && _.delete(g),
          (f = !0),
          o("CometErrorOverlay").injectComponent(function (e) {
            return u.jsx(v, { reason: t });
          }));
      },
      L = !1,
      E = {
        init: function () {
          L ||
            (r("justknobx")._("2743") &&
              (r("ClientConsistency").init(),
              r("ClientConsistencyEventEmitter").addListener("softRefresh", S),
              r("ClientConsistencyEventEmitter").addListener("hardRefresh", R),
              (L = !0)));
        },
        logRefreshOnNav: function (t) {
          y({ action: 1, event: "impression", reason: t });
        },
      },
      k = E;
    l.default = k;
  },
  226,
);
