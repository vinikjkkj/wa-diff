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
      var t = e.reason;
      return (
        d(
          function () {
            ((h = Date.now()),
              y({ action: 2, event: "impression", reason: t }));
          },
          [t],
        ),
        u.jsx(r("FDSIcon.react"), {
          color: "warning",
          icon: r("FBNucleusCautionTriangleFilled20Icon.react"),
          size: 20,
        })
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.reason,
        n = m(null);
      return (
        d(
          function () {
            ((n.current = Date.now()),
              y({ action: 3, event: "impression", reason: t }));
          },
          [t],
        ),
        u.jsx(r("CometExceptionDialog.react"), {
          closeButtonText: s._(/*BTDS*/ ""),
          errorDescription: s._(/*BTDS*/ ""),
          errorSummary: s._(/*BTDS*/ ""),
          onClose: function () {
            (y({
              action: 3,
              duration: C(n.current),
              event: "click",
              reason: t,
            }),
              (f = !1),
              (n.current = null),
              window.location.reload());
          },
          withCloseButton: !1,
        })
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    var S = function (t) {
        f ||
          (g == null &&
            ((g = o("cometPushToast").cometPushToast(
              {
                action: {
                  label: s._(/*BTDS*/ ""),
                  onPress: function () {
                    (y({
                      action: 2,
                      duration: C(h),
                      event: "click",
                      reason: t,
                    }),
                      (g = null),
                      (h = null),
                      window.location.reload());
                  },
                },
                icon: u.jsx(b, { reason: t }),
                message: s._(/*BTDS*/ ""),
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
