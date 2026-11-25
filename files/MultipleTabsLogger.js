__d(
  "MultipleTabsLogger",
  [
    "BrowserLockManager",
    "LockManager",
    "QPLUserFlow",
    "hasMultipleTabs",
    "ifRequireable",
    "memoizeOneWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1,
      s = !1;
    function u() {
      return e;
    }
    function c() {
      return o("hasMultipleTabs").hasMultipleTabs(s);
    }
    async function d() {
      var e = await c();
      return e != null ? e.toString() : "undefined";
    }
    function m(e) {
      r("ifRequireable")("InteractionTracingMetrics", function (t) {
        d().then(function (n) {
          return t.addMetadata(e, "multipleTabs", n);
        });
      });
    }
    function p(e, t) {
      d().then(function (n) {
        t !== null
          ? r("QPLUserFlow").addAnnotations(
              e,
              { string: { multipleTabs: n } },
              { instanceKey: t },
            )
          : r("QPLUserFlow").addAnnotations(e, { string: { multipleTabs: n } });
      });
    }
    var _ = r("memoizeOneWithArgs")(function (n) {
      r("BrowserLockManager") &&
        ((s = !0),
        r("BrowserLockManager").request(
          o("hasMultipleTabs").MULTIPLE_TAB_LOCK_NAME,
          { mode: o("LockManager").LockMode.Exclusive },
          function (t) {
            if (t)
              return (
                (e = !0),
                new Promise(function (e) {
                  if (n) return e(n());
                })
              );
          },
        ));
    });
    ((l.hasUniqueLock = u),
      (l.hasMultipleTabs = c),
      (l.getMultipleTabsAnnotation = d),
      (l.addAnnotationWithInteractionUuid = m),
      (l.addAnnotationToQPLEvent = p),
      (l.init = _));
  },
  98,
);
