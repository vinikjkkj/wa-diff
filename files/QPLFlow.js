__d(
  "QPLFlow",
  ["QPLUserFlow", "Random", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s =
        "FinalizationRegistry" in self
          ? new FinalizationRegistry(function (e) {
              var t = e.notClosedEvent;
              t();
            })
          : null;
    function u(e, t) {
      if (s != null) {
        var n = s,
          o = e.getQPLAttrs().instanceKey;
        n.register(e, {
          notClosedEvent: function () {
            r("QPLUserFlow").endFailure(t, "event-not-closed", {
              instanceKey: o,
            });
          },
        });
      }
    }
    function c(e, t) {
      var n = m(e, t);
      return (n.start(t == null ? void 0 : t.annotations), n);
    }
    function d(e, t) {
      return m(e, t);
    }
    function m(t, n) {
      var o,
        a = (o = n == null ? void 0 : n.instanceKey) != null ? o : e++,
        i = n == null ? void 0 : n.timeoutInMs,
        l = !1,
        c = {
          addAnnotations: function (n) {
            r("QPLUserFlow").addAnnotations(t, n, { instanceKey: a });
          },
          addPoint: function (n, o) {
            (r("QPLUserFlow").addPoint(t, n, { instanceKey: a }),
              o != null &&
                t != null &&
                r("QPLUserFlow").addAnnotations(t, o, { instanceKey: a }));
          },
          endCancel: function (n, o) {
            (r("QPLUserFlow").endCancel(t, {
              annotations: o,
              cancelReason: n,
              instanceKey: a,
            }),
              (l = !1),
              s == null || s.unregister(c));
          },
          endFail: function (n, o) {
            (r("QPLUserFlow").endFailure(t, n, {
              annotations: o,
              instanceKey: a,
            }),
              (l = !1),
              s == null || s.unregister(c));
          },
          endSuccess: function (n) {
            (r("QPLUserFlow").endSuccess(t, { annotations: n, instanceKey: a }),
              (l = !1),
              s == null || s.unregister(c));
          },
          getQPLAttrs: function () {
            return { instanceKey: a };
          },
          isActive: function () {
            return l;
          },
          start: function (n) {
            ((l = !0),
              r("QPLUserFlow").start(t, {
                annotations: n,
                instanceKey: a,
                timeoutInMs: i != null ? i : void 0,
              }),
              u(c, t));
          },
        };
      return c;
    }
    function p() {
      var e = !0;
      return {
        addAnnotations: function (t) {},
        addPoint: function (t, n) {},
        endCancel: function (t) {},
        endFail: function (n, r) {
          e = !1;
        },
        endSuccess: function (n) {
          e = !1;
        },
        getQPLAttrs: function () {
          return { instanceKey: 0 };
        },
        isActive: function () {
          return e;
        },
        start: function (t) {},
      };
    }
    function _(e, t, n) {
      return o("Random").coinflip(t) ? c(e, n) : p();
    }
    var f = (function () {
      function e(e, t) {
        ((this.qplFlow = e), (this.subspanName = t));
      }
      var t = e.prototype;
      return (
        (t.start = function (t) {
          this.qplFlow.addPoint(this.subspanName + "_start", t);
        }),
        (t.end = function (t) {
          this.qplFlow.addPoint(this.subspanName + "_end", t);
        }),
        (t.endFail = function (t) {
          var e,
            n = babelHelpers.extends({}, t, {
              bool: babelHelpers.extends(
                {},
                t == null ? void 0 : t.bool,
                ((e = {}), (e[this.subspanName + "_failed"] = !0), e),
              ),
            });
          this.end(n);
        }),
        (e.start = function (n, r) {
          var t = new e(n, r);
          return (t.start(), t);
        }),
        (e.wrapInSubspan = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n, r) {
              var o = e.start(t, n);
              try {
                var a = yield r();
                return (o.end(), a);
              } catch (e) {
                throw (o.endFail(), e);
              }
            },
          );
          function r(e, n, r) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        e
      );
    })();
    ((l.startQPLFlow = c),
      (l.continueQPLFlow = d),
      (l.makeQplFlow = m),
      (l.startNoopQPLFlow = p),
      (l.startQplFlowWithCoinflip = _),
      (l.QplSubspan = f));
  },
  98,
);
