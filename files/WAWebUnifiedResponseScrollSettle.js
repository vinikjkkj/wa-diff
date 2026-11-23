__d(
  "WAWebUnifiedResponseScrollSettle",
  [
    "WALogger",
    "WAWebBoolFunc",
    "WAWebDocumentFlushed",
    "WAWebNoop",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 12,
      c = 5e3,
      d = 2e3,
      m = 24;
    async function p(e, t, n, r) {
      var o = e.scrollHeight,
        a = await f(t(), c, n);
      return !a || r() ? !1 : h(e, o, u, Date.now() + d, n, r);
    }
    function _(t) {
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
    function f(e, t, n) {
      if (n.aborted) return (e.catch(r("WAWebNoop")), Promise.resolve(!1));
      var a,
        i = r("WAWebNoop"),
        l = !1,
        s = new Promise(function (e) {
          var r = function () {
            ((l = !0), e(!1));
          };
          ((a = self.setTimeout(r, t)),
            (i = r),
            n.addEventListener("abort", i));
        });
      return Promise.race([
        e.then(o("WAWebBoolFunc").returnTrue, function (e) {
          return l || n.aborted ? !1 : g(e);
        }),
        s,
      ]).then(function (e) {
        return (
          a != null && self.clearTimeout(a),
          n.removeEventListener("abort", i),
          e && !n.aborted
        );
      });
    }
    function g(e) {
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
    async function h(e, t, n, r, a, i) {
      return n === 0 ||
        (await o("WAWebDocumentFlushed").documentFlushed({ signal: a }),
        i() || Date.now() > r)
        ? !1
        : e.scrollHeight >= t + m
          ? !0
          : h(e, t, n - 1, r, a, i);
    }
    ((l.shouldReapplyScrollAfterUnifiedResponseLoad = p),
      (l.reportScrollSettleFailure = _));
  },
  98,
);
