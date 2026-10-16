__d(
  "WAWebHatchSpacePublish",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebHatchJsonReaders",
    "WAWebHatchShareStatusDecoder",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 6e4,
      c = 500,
      d = 6e3,
      m = 2e3,
      p = 75e3,
      _ = [
        "contains_personal_information",
        "contains_chat_history",
        "contains_user_shared_media",
        "contains_secrets_or_credentials",
      ];
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
          if (r.aborted) return null;
          var i =
              a == null
                ? k("no_session")
                : yield h(
                    a,
                    o("WAWebHatchVmTransport").JarvisPaths.SPACE_SHARE(t),
                    n,
                    r,
                  ),
            l = i == null ? null : L(i);
          return (
            (l == null ? void 0 : l.kind) === "failed" &&
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-space-publish: failed reason=",
                      "",
                    ])),
                  l.reason,
                )
                .sendLogs("hatch-space-publish-failed"),
            l
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, r, o) {
      var a = new b(),
        i = { isSettled: !1 };
      return new (s || (s = n("Promise")))(function (n) {
        function l(e) {
          ((i.isSettled = !0), o.removeEventListener("abort", s), n(e));
        }
        function s() {
          l(null);
        }
        function c(e) {
          var t = a.settle(e);
          t != null && l(t);
        }
        (o.addEventListener("abort", s),
          e.request("POST", t, { body: R(r), timeoutMs: u }).then(function (e) {
            return c({ call: e, kind: "posted" });
          }),
          y(
            function () {
              return e.request("GET", t);
            },
            i,
            c,
            self.performance.now(),
          ));
      });
    }
    function y(e, t, n, r) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = self.performance.now() - r;
            if (a >= p) {
              n({ kind: "poll_exhausted" });
              return;
            }
            if (
              (yield o("WAPromiseDelays").delayMs(a < d ? c : m), !t.isSettled)
            ) {
              var i = yield e();
              (n({ call: i, kind: "polled" }), yield y(e, t, n, r));
            }
          },
        )),
        C.apply(this, arguments)
      );
    }
    var b = (function () {
      function e() {
        ((this.$1 = null), (this.$2 = null), (this.$3 = !1));
      }
      var t = e.prototype;
      return (
        (t.settle = function (t) {
          var e = this;
          return (function (t) {
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.kind === "posted" &&
              "call" in t
            ) {
              var n = t.call;
              return e.$4(n);
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.kind === "polled" &&
              "call" in t
            ) {
              var r = t.call;
              return e.$5(r);
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.kind === "poll_exhausted"
            )
              return e.$6();
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                t,
            );
          })(t);
        }),
        (t.$4 = function (t) {
          var e = v(t);
          return e.kind !== "failed"
            ? e
            : ((this.$2 = e.reason),
              this.$1 == null || this.$3 ? this.$7() : null);
        }),
        (t.$5 = function (t) {
          var e,
            n =
              t.kind === "Ok"
                ? o("WAWebHatchShareStatusDecoder").decodeHatchShareStatus(
                    t.value,
                  )
                : null,
            r = n == null ? void 0 : n.publishedUrl;
          return n == null || r == null
            ? null
            : (this.$1 == null && (this.$1 = r),
              ((e = n.shareType) != null ? e : "") === ""
                ? null
                : { kind: "published", url: r });
        }),
        (t.$6 = function () {
          return ((this.$3 = !0), this.$2 == null ? null : this.$7());
        }),
        (t.$7 = function () {
          var e,
            t = this.$1;
          return t == null
            ? k((e = this.$2) != null ? e : "not_confirmed")
            : { kind: "published", url: t };
        }),
        e
      );
    })();
    function v(e) {
      if (e.kind !== "Ok") return k(E(e));
      var t = o("WAWebHatchShareStatusDecoder").decodeHatchShareStatus(e.value);
      if (t == null) return k("malformed");
      var n = S(e.value);
      return n != null
        ? { kind: "needs_confirmation", token: n }
        : t.publishedUrl == null
          ? k("not_confirmed")
          : { kind: "published", url: t.publishedUrl };
    }
    function S(e) {
      var t = o("WAWebHatchJsonReaders").readObject(
          e,
          "disclosure_confirmation",
        ),
        n = o("WAWebHatchJsonReaders").readObject(t, "disclosure");
      return _.some(function (e) {
        return o("WAWebHatchJsonReaders").readBool(n, e) === !0;
      })
        ? o("WAWebHatchJsonReaders").readNonEmptyString(t, "token")
        : null;
    }
    function R(e) {
      var t =
        e == null
          ? { require_disclosure_confirmation: !0 }
          : { disclosure_confirmation: e, require_disclosure_confirmation: !0 };
      return new TextEncoder().encode(JSON.stringify(t));
    }
    function L(e) {
      if (e.kind !== "published") return e;
      var t = o("WAWebHatchShareStatusDecoder").toHatchShareableUrl(e.url);
      return t == null ? k("invalid_url") : { kind: "published", url: t };
    }
    function E(e) {
      var t;
      return e.kind === "Rejected"
        ? "rejected." + ((t = e.statusCode) != null ? t : "none")
        : e.kind.toLowerCase();
    }
    function k(e) {
      return { kind: "failed", reason: e };
    }
    l.publishHatchSpace = f;
  },
  98,
);
