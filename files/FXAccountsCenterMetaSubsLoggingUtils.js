__d(
  "FXAccountsCenterMetaSubsLoggingUtils",
  [
    "HiddenSubtreePassiveContext",
    "SubsWaterfallEventFalcoEvent",
    "react",
    "react-compiler-runtime",
    "usePartialViewImpression",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect,
      d = s.useEffectEvent,
      m = s.useRef,
      p = function (t) {
        r("SubsWaterfallEventFalcoEvent").log(function () {
          return t;
        });
      },
      _ = function (t) {
        r("SubsWaterfallEventFalcoEvent").logImmediately(function () {
          return t;
        });
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n = m(!1),
        a,
        i;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function () {
            n.current && (n.current = !1);
          }),
          (i = []),
          (t[0] = a),
          (t[1] = i))
        : ((a = t[0]), (i = t[1])),
        c(a, i));
      var l;
      t[2] !== e
        ? ((l = function () {
            if (e != null && !n.current) {
              var t = e;
              (r("SubsWaterfallEventFalcoEvent").log(function () {
                return t;
              }),
                (n.current = !0));
            }
          }),
          (t[2] = e),
          (t[3] = l))
        : (l = t[3]);
      var s = l,
        u;
      return (
        t[4] !== s
          ? ((u = { onImpressionStart: s }), (t[4] = s), (t[5] = u))
          : (u = t[5]),
        r("usePartialViewImpression")(u)
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(7),
        n = m(!1),
        a = u(r("HiddenSubtreePassiveContext")),
        i;
      t[0] !== e
        ? ((i = function () {
            if (!(e == null || n.current)) {
              n.current = !0;
              var t = e;
              r("SubsWaterfallEventFalcoEvent").log(function () {
                return t;
              });
            }
          }),
          (t[0] = e),
          (t[1] = i))
        : (i = t[1]);
      var l = d(i),
        s;
      t[2] !== a || t[3] !== l
        ? ((s = function () {
            if (!a.getCurrentState().hidden) {
              l();
              return;
            }
            var e = a.subscribeToChanges(function (e) {
              e.hidden || l();
            });
            return function () {
              return e.remove();
            };
          }),
          (t[2] = a),
          (t[3] = l),
          (t[4] = s))
        : (s = t[4]);
      var p;
      (t[5] !== a ? ((p = [a]), (t[5] = a), (t[6] = p)) : (p = t[6]), c(s, p));
    }
    function h(e, t) {
      var n = o("react-compiler-runtime").c(7),
        a = m(!1),
        i = m(null),
        l,
        s;
      (n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            a.current && (a.current = !1);
          }),
          (s = []),
          (n[0] = l),
          (n[1] = s))
        : ((l = n[0]), (s = n[1])),
        c(l, s));
      var u;
      n[2] !== t || n[3] !== e
        ? ((u = function () {
            e != null &&
              (!a.current || i.current !== t) &&
              (p(babelHelpers.extends({}, e, { event: "IMPRESSION" })),
              p(e),
              (a.current = !0),
              (i.current = t));
          }),
          (n[2] = t),
          (n[3] = e),
          (n[4] = u))
        : (u = n[4]);
      var d = u,
        _;
      return (
        n[5] !== d
          ? ((_ = { onImpressionStart: d }), (n[5] = d), (n[6] = _))
          : (_ = n[6]),
        r("usePartialViewImpression")(_)
      );
    }
    ((l.logMetaSubsEvent = p),
      (l.logMetaSubsEventImmediately = _),
      (l.useFXAccountsCenterMetaSubsLogImpression = f),
      (l.useFXAccountsCenterMetaSubsLogArrivalImpression = g),
      (l.useFXAccountsCenterMetaSubsLogPriceImpressionPair = h));
  },
  98,
);
