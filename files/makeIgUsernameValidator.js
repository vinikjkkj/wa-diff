__d(
  "makeIgUsernameValidator",
  [
    "fbt",
    "CometRelay",
    "Promise",
    "UsernameValidationActionSource",
    "err",
    "getGraphQLEnumSafe",
    "makeIgUsernameValidatorQuery.graphql",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = 1e3,
      d = e !== void 0 ? e : (e = n("makeIgUsernameValidatorQuery.graphql")),
      m = s._(/*BTDS*/ "This username isn't available."),
      p = s._(/*BTDS*/ "We couldn\u2019t check this username right now."),
      _ = s._(
        /*BTDS*/ "Too many attempts. Please wait a moment and try again.",
      ),
      f = new Set(["OK_GENERIC", "OK_OWNED_BY_IDENTITY", "OK_UNUSED"]);
    function g() {
      var e = r("err")("Aborted");
      return ((e.name = "AbortError"), e);
    }
    function h(e, t) {
      return {
        inputKind: "scalar",
        trigger: { delayMs: c, kind: "debounce" },
        validate: function (i, l) {
          if (i.kind !== "scalar")
            return (u || (u = n("Promise"))).resolve({
              code: "wrong_input_kind",
              kind: "unavailable",
              message: p.toString(),
              retryable: !1,
            });
          var a = t != null && t !== "" && t !== "0" ? [t] : [];
          if (a.length === 0)
            return (u || (u = n("Promise"))).resolve({
              code: "no_identity",
              kind: "unavailable",
              message: p.toString(),
              retryable: !1,
            });
          var s = i.value,
            c = l == null ? void 0 : l.signal;
          return new (u || (u = n("Promise")))(function (t, n) {
            var i;
            if ((c == null ? void 0 : c.aborted) === !0) {
              n(g());
              return;
            }
            var l = !1,
              u = o("CometRelay")
                .fetchQuery(
                  e,
                  d,
                  {
                    action_source:
                      (i = r("getGraphQLEnumSafe")(
                        r("UsernameValidationActionSource"),
                        "edit",
                      )) != null
                        ? i
                        : "EDIT",
                    identity_ids: a,
                    username: s,
                  },
                  { fetchPolicy: "network-only" },
                )
                .subscribe({
                  error: function (t) {
                    l || ((l = !0), n(t));
                  },
                  next: function (n) {
                    var e, r, o;
                    if (!l) {
                      l = !0;
                      var a =
                          n == null || (e = n.fx_identity_management) == null
                            ? void 0
                            : e.validate_username_v4,
                        i =
                          (r = a == null ? void 0 : a.status_code) != null
                            ? r
                            : "UNKNOWN";
                      if (f.has(i)) {
                        t({ kind: "valid" });
                        return;
                      }
                      if (
                        i ===
                        "ERROR_USERNAME_VALIDATION_CHECK_RATELIMIT_REACHED"
                      ) {
                        t({
                          code: String(i),
                          kind: "unavailable",
                          message: _.toString(),
                          retryable: !0,
                        });
                        return;
                      }
                      if (i === "UNKNOWN") {
                        t({
                          code: String(i),
                          kind: "unavailable",
                          message: p.toString(),
                          retryable: !0,
                        });
                        return;
                      }
                      t({
                        code: String(i),
                        kind: "invalid",
                        message:
                          (o = a == null ? void 0 : a.error_message) != null
                            ? o
                            : m.toString(),
                      });
                    }
                  },
                });
            c != null &&
              c.addEventListener(
                "abort",
                function () {
                  l || ((l = !0), u.unsubscribe(), n(g()));
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
