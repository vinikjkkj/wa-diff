__d(
  "MultipleTabsLogger",
  [
    "BrowserLockManager",
    "LockManager",
    "Promise",
    "QPLUserFlow",
    "asyncToGeneratorRuntime",
    "hasMultipleTabs",
    "ifRequireable",
    "memoizeOneWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1,
      u = !1;
    function c() {
      return s;
    }
    function d() {
      return o("hasMultipleTabs").hasMultipleTabs(u);
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield d();
          return e != null ? e.toString() : "undefined";
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      r("ifRequireable")("InteractionTracingMetrics", function (t) {
        m().then(function (n) {
          return t.addMetadata(e, "multipleTabs", n);
        });
      });
    }
    function f(e, t) {
      m().then(function (n) {
        t !== null
          ? r("QPLUserFlow").addAnnotations(
              e,
              { string: { multipleTabs: n } },
              { instanceKey: t },
            )
          : r("QPLUserFlow").addAnnotations(e, { string: { multipleTabs: n } });
      });
    }
    var g = r("memoizeOneWithArgs")(function (a) {
      r("BrowserLockManager") &&
        ((u = !0),
        r("BrowserLockManager").request(
          o("hasMultipleTabs").MULTIPLE_TAB_LOCK_NAME,
          { mode: o("LockManager").LockMode.Exclusive },
          function (t) {
            if (t)
              return (
                (s = !0),
                new (e || (e = n("Promise")))(function (e) {
                  if (a) return e(a());
                })
              );
          },
        ));
    });
    ((l.hasUniqueLock = c),
      (l.hasMultipleTabs = d),
      (l.getMultipleTabsAnnotation = m),
      (l.addAnnotationWithInteractionUuid = _),
      (l.addAnnotationToQPLEvent = f),
      (l.init = g));
  },
  98,
);
