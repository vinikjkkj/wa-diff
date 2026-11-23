__d(
  "makeA2UIBusinessNameValidator",
  [
    "fbt",
    "BizKitBusinessCreationErrorStrings",
    "Promise",
    "RelayHooks",
    "err",
    "makeA2UIBusinessNameValidatorQuery.graphql",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = 500,
      d = { description: "", title: "" },
      m = 3e3,
      p =
        e !== void 0
          ? e
          : (e = n("makeA2UIBusinessNameValidatorQuery.graphql")),
      _ = s._(/*BTDS*/ ""),
      f = s._(/*BTDS*/ "");
    function g() {
      var e = r("err")("Aborted");
      return ((e.name = "AbortError"), e);
    }
    function h(e) {
      return {
        inputKind: "scalar",
        trigger: { delayMs: c, kind: "debounce" },
        validate: function (r, a) {
          if (r.kind !== "scalar")
            return (u || (u = n("Promise"))).resolve({
              code: "wrong_input_kind",
              kind: "unavailable",
              message: _.toString(),
              retryable: !1,
            });
          var t = a == null ? void 0 : a.signal;
          return new (u || (u = n("Promise")))(function (n, a) {
            if ((t == null ? void 0 : t.aborted) === !0) {
              a(g());
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
                    message: _.toString(),
                    retryable: !0,
                  }));
              }, m),
              u = o("RelayHooks")
                .fetchQuery(
                  e,
                  p,
                  { business_name: r.value },
                  { fetchPolicy: "network-only" },
                )
                .subscribe({
                  error: function (t) {
                    l() && a(t);
                  },
                  next: function (t) {
                    var e, r;
                    if (l()) {
                      var a = t.business_settings_validate_business_name;
                      if (a.is_valid) {
                        n({ kind: "valid" });
                        return;
                      }
                      var i = o(
                          "BizKitBusinessCreationErrorStrings",
                        ).getErrorMessageByErrorCode(a.error_code, d),
                        s =
                          (e = a.error_description) == null ? void 0 : e.trim();
                      n({
                        code: String(
                          (r = a.error_code) != null
                            ? r
                            : "invalid_business_name",
                        ),
                        kind: "invalid",
                        message: s != null && s !== "" ? s : f.toString(),
                        richMessage: i !== d ? i.description : void 0,
                      });
                    }
                  },
                });
            t == null ||
              t.addEventListener(
                "abort",
                function () {
                  l() && (u.unsubscribe(), a(g()));
                },
                { once: !0 },
              );
          });
        },
      };
    }
    l.default = h;
  },
  226,
);
