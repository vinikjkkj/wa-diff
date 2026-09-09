__d(
  "WAWebUnifiedResponseScrollSettle",
  [
    "Promise",
    "WALogger",
    "WAWebBoolFunc",
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
            return !a || r() ? !1 : C(e, o, c, Date.now() + m, n, r);
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
    function h(e, t, a) {
      if (a.aborted)
        return (e.catch(r("WAWebNoop")), (u || (u = n("Promise"))).resolve(!1));
      var i,
        l = r("WAWebNoop"),
        s = !1,
        c = new (u || (u = n("Promise")))(function (e) {
          var n = function () {
            ((s = !0), e(!1));
          };
          ((i = self.setTimeout(n, t)),
            (l = n),
            a.addEventListener("abort", l));
        });
      return u
        .race([
          e.then(o("WAWebBoolFunc").returnTrue, function (e) {
            return s || a.aborted ? !1 : y(e);
          }),
          c,
        ])
        .then(function (e) {
          return (
            i != null && self.clearTimeout(i),
            a.removeEventListener("abort", l),
            e && !a.aborted
          );
        });
    }
    function y(e) {
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
    function C(e, t, n, r, o, a) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            return n === 0 ||
              (yield o("WAWebDocumentFlushed").documentFlushed({ signal: a }),
              i() || Date.now() > r)
              ? !1
              : e.scrollHeight >= t + p
                ? !0
                : C(e, t, n - 1, r, a, i);
          },
        )),
        b.apply(this, arguments)
      );
    }
    ((l.shouldReapplyScrollAfterUnifiedResponseLoad = _),
      (l.reportScrollSettleFailure = g));
  },
  98,
);
