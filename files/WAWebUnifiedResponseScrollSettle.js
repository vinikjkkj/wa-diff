__d(
  "WAWebUnifiedResponseScrollSettle",
  [
    "Promise",
    "WALogger",
    "WAWebDocumentFlushed",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 12,
      d = 5e3,
      m = 2e3,
      p = 24;
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = e.scrollHeight,
              a = yield h(t(), d, n);
            return !a || r() ? !1 : b(e, o, c, Date.now() + m, n, r);
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Unified response scroll settle failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("ur-scroll-settle-failed");
    }
    function h(e, t, o) {
      if (o.aborted)
        return (e.catch(r("WAWebNoop")), (u || (u = n("Promise"))).resolve(!1));
      var a,
        i = r("WAWebNoop"),
        l = !1,
        s = new (u || (u = n("Promise")))(function (e) {
          var n = function () {
            ((l = !0), e(!1));
          };
          ((a = self.setTimeout(n, t)),
            (i = n),
            o.addEventListener("abort", i));
        });
      return u
        .race([
          e.then(y, function (e) {
            return l || o.aborted ? !1 : C(e);
          }),
          s,
        ])
        .then(function (e) {
          return (
            a != null && self.clearTimeout(a),
            o.removeEventListener("abort", i),
            e && !o.aborted
          );
        });
    }
    function y() {
      return !0;
    }
    function C(e) {
      return (
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Unified response parser bundle failed to load",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("ur-scroll-settle-parser-load"),
        !1
      );
    }
    function b(e, t, n, r, o, a) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            return n === 0 ||
              (yield o("WAWebDocumentFlushed").documentFlushed({ signal: a }),
              i() || Date.now() > r)
              ? !1
              : e.scrollHeight >= t + p
                ? !0
                : b(e, t, n - 1, r, a, i);
          },
        )),
        v.apply(this, arguments)
      );
    }
    ((l.shouldReapplyScrollAfterUnifiedResponseLoad = _),
      (l.reportScrollSettleFailure = g));
  },
  98,
);
