__d(
  "WAWebHatchSpacePublish",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebHatchJsonReaders",
    "WAWebHatchShareStatusDecoder",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 6e4,
      u = 500,
      c = 6e3,
      d = 2e3,
      m = 75e3,
      p = [
        "contains_personal_information",
        "contains_chat_history",
        "contains_user_shared_media",
        "contains_secrets_or_credentials",
      ];
    async function _(t, n, r) {
      var a = await o("WAWebHatchVmConnection")
        .connectHatchVmApi()
        .catch(o("WAWebNullFunc").returnNull);
      if (r.aborted) return null;
      var i =
          a == null
            ? R("no_session")
            : await f(
                a,
                o("WAWebHatchVmTransport").JarvisPaths.SPACE_SHARE(t),
                n,
                r,
              ),
        l = i == null ? null : v(i);
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
    }
    function f(e, t, n, r) {
      var o = new h(),
        a = { isSettled: !1 };
      return new Promise(function (i) {
        function l(e) {
          ((a.isSettled = !0), r.removeEventListener("abort", u), i(e));
        }
        function u() {
          l(null);
        }
        function c(e) {
          var t = o.settle(e);
          t != null && l(t);
        }
        (r.addEventListener("abort", u),
          e.request("POST", t, { body: b(n), timeoutMs: s }).then(function (e) {
            return c({ call: e, kind: "posted" });
          }),
          g(
            function () {
              return e.request("GET", t);
            },
            a,
            c,
            self.performance.now(),
          ));
      });
    }
    async function g(e, t, n, r) {
      var a = self.performance.now() - r;
      if (a >= m) {
        n({ kind: "poll_exhausted" });
        return;
      }
      if ((await o("WAPromiseDelays").delayMs(a < c ? u : d), !t.isSettled)) {
        var i = await e();
        (n({ call: i, kind: "polled" }), await g(e, t, n, r));
      }
    }
    var h = (function () {
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
          var e = y(t);
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
            ? R((e = this.$2) != null ? e : "not_confirmed")
            : { kind: "published", url: t };
        }),
        e
      );
    })();
    function y(e) {
      if (e.kind !== "Ok") return R(S(e));
      var t = o("WAWebHatchShareStatusDecoder").decodeHatchShareStatus(e.value);
      if (t == null) return R("malformed");
      var n = C(e.value);
      return n != null
        ? { kind: "needs_confirmation", token: n }
        : t.publishedUrl == null
          ? R("not_confirmed")
          : { kind: "published", url: t.publishedUrl };
    }
    function C(e) {
      var t = o("WAWebHatchJsonReaders").readObject(
          e,
          "disclosure_confirmation",
        ),
        n = o("WAWebHatchJsonReaders").readObject(t, "disclosure");
      return p.some(function (e) {
        return o("WAWebHatchJsonReaders").readBool(n, e) === !0;
      })
        ? o("WAWebHatchJsonReaders").readNonEmptyString(t, "token")
        : null;
    }
    function b(e) {
      var t =
        e == null
          ? { require_disclosure_confirmation: !0 }
          : { disclosure_confirmation: e, require_disclosure_confirmation: !0 };
      return new TextEncoder().encode(JSON.stringify(t));
    }
    function v(e) {
      if (e.kind !== "published") return e;
      var t = o("WAWebHatchShareStatusDecoder").toHatchShareableUrl(e.url);
      return t == null ? R("invalid_url") : { kind: "published", url: t };
    }
    function S(e) {
      var t;
      return e.kind === "Rejected"
        ? "rejected." + ((t = e.statusCode) != null ? t : "none")
        : e.kind.toLowerCase();
    }
    function R(e) {
      return { kind: "failed", reason: e };
    }
    l.publishHatchSpace = _;
  },
  98,
);
