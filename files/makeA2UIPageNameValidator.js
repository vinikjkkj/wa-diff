__d(
  "makeA2UIPageNameValidator",
  [
    "fbt",
    "PageCreationNameChecker",
    "Promise",
    "RelayHooks",
    "err",
    "makeA2UIPageNameValidatorQuery.graphql",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = 300,
      d = 3e3,
      m = e !== void 0 ? e : (e = n("makeA2UIPageNameValidatorQuery.graphql")),
      p = s._(/*BTDS*/ "");
    function _() {
      var e = r("err")("Aborted");
      return ((e.name = "AbortError"), e);
    }
    function f(e, t, r) {
      return new (u || (u = n("Promise")))(function (n, a) {
        if ((r == null ? void 0 : r.aborted) === !0) {
          a(_());
          return;
        }
        var i = !1,
          l = function () {
            return i ? !1 : ((i = !0), window.clearTimeout(s), !0);
          },
          s = window.setTimeout(function () {
            l() &&
              (u.unsubscribe(),
              n({
                code: "timeout",
                kind: "unavailable",
                message: p.toString(),
                retryable: !0,
              }));
          }, d),
          u = o("RelayHooks")
            .fetchQuery(
              e,
              m,
              { input_name: t },
              { fetchPolicy: "network-only" },
            )
            .subscribe({
              error: function (t) {
                l() && a(t);
              },
              next: function (t) {
                var e;
                if (l()) {
                  var r =
                    (e = t.page_name_check) == null || (e = e.error) == null
                      ? void 0
                      : e.trim();
                  if (r == null || r === "") {
                    n({ kind: "valid" });
                    return;
                  }
                  n({ code: "page_name_refused", kind: "invalid", message: r });
                }
              },
            });
        r == null ||
          r.addEventListener(
            "abort",
            function () {
              l() && (u.unsubscribe(), a(_()));
            },
            { once: !0 },
          );
      });
    }
    function g(e) {
      return {
        inputKind: "scalar",
        trigger: { delayMs: c, kind: "debounce" },
        validate: function (o, a) {
          if (o.kind !== "scalar")
            return (u || (u = n("Promise"))).resolve({
              code: "wrong_input_kind",
              kind: "unavailable",
              message: p.toString(),
              retryable: !1,
            });
          var t;
          try {
            var i = new (r("PageCreationNameChecker"))(o.value);
            (i.checkPageName(), (t = i.getErrorMessage().toString()));
          } catch (e) {
            return (u || (u = n("Promise"))).resolve({
              code: "checker_threw",
              kind: "unavailable",
              message: p.toString(),
              retryable: !1,
            });
          }
          return t !== ""
            ? (u || (u = n("Promise"))).resolve({
                code: "invalid_page_name",
                kind: "invalid",
                message: t,
              })
            : e == null
              ? (u || (u = n("Promise"))).resolve({ kind: "valid" })
              : f(e, o.value, a == null ? void 0 : a.signal);
        },
      };
    }
    l.default = g;
  },
  226,
);
