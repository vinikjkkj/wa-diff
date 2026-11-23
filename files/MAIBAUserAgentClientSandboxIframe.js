__d(
  "MAIBAUserAgentClientSandboxIframe",
  [
    "AdsAccountStore",
    "AdsManagerAutoLoggingAppConfig",
    "ConstUriUtils",
    "FBLogger",
    "MAIBAUserAgentClientSandbox",
    "MAIBAUserAgentGraphPathAllowlist",
    "MAIBAUserAgentGraphPathAllowlistData",
    "Promise",
    "XFBSbxMAIBAAgentFrameControllerRouteBuilder",
    "err",
    "hyperionTimedTrigger",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 3e4,
      d = 2e4,
      m = 500,
      p = 256,
      _ = 8e3,
      f = 2048,
      g = 1e3,
      h = 0,
      y = (function () {
        function e() {
          var e = this;
          ((this.$2 = !1),
            (this.$4 = !1),
            (this.$5 = 0),
            (this.$6 = 0),
            (this.$1 = new MessageChannel()),
            (this.$1.port1.onmessage = function (t) {
              e.$12(t);
            }),
            this.$1.port1.start(),
            (this.$7 = function () {
              e.$13();
            }),
            (this.$3 = new (o("hyperionTimedTrigger").TimedTrigger)(function (
              t,
            ) {
              e.$2 || e.$14("frame never completed the handshake");
            }, c)),
            (this.$10 = crypto.randomUUID()));
          var t = (this.$8 = document.createElement("iframe"));
          (t.style.setProperty("border", "0px solid #ccc"),
            t.style.setProperty("width", "100%"),
            t.style.setProperty("min-height", "500px"),
            t.style.setProperty("frame-sizing", "content"),
            this.$11("ctor"));
        }
        var t = e.prototype;
        return (
          (t.$11 = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            o("MAIBAUserAgentClientSandbox").sandboxLog.apply(
              void 0,
              ["IF:" + this.$10].concat(t),
            );
          }),
          (t.start = function (t, n, r) {
            if ((this.$11("start"), !this.$4)) {
              var e = r.rowIndexFromBottom === 0,
                o = this.$8,
                a = S(t);
              if (e) {
                (o.sandbox.add("allow-scripts"),
                  o.setAttribute("referrerpolicy", "origin"));
                var i = v();
                if (i == null) {
                  this.$14("could not build the agent frame URL");
                  return;
                }
                ((this.$9 = {
                  config: {
                    adAccountId: String(C),
                    enableScripts: e,
                    nonce: this.$10,
                  },
                  html: a,
                }),
                  o.addEventListener("load", this.$7, { once: !0 }),
                  (o.src = i));
              } else
                (o.toggleAttribute("sandbox", !0),
                  o.setAttribute(
                    "csp",
                    "default-src 'none'; script-src 'none'",
                  ),
                  o.setAttribute(
                    "contentsecuritypolicy",
                    "default-src 'none'; script-src 'none'; object-src 'none'; base-uri 'none';",
                  ),
                  o.setAttribute("referrerpolicy", "no-referrer"),
                  (o.srcdoc = a));
              n.appendChild(o);
            }
          }),
          (t.dispose = function () {
            (this.$11("dispose"),
              !this.$4 &&
                ((this.$4 = !0),
                this.$3.cancel(),
                this.$8.removeEventListener("load", this.$7),
                this.$8.remove(),
                (this.$1.port1.onmessage = null),
                this.$1.port1.close()));
          }),
          (t.$13 = function () {
            if ((this.$11("connect"), !this.$4)) {
              if (this.$8.contentWindow == null) {
                this.$11("No iframe content!");
                return;
              }
              var e = this.$9;
              if (e == null) {
                this.$11("connect with nothing to send");
                return;
              }
              ((this.$9 = null),
                this.$8.contentWindow.postMessage(
                  { config: e.config, html: e.html, type: "connect" },
                  "*",
                  [this.$1.port2],
                ));
            }
          }),
          (t.$12 = function (t) {
            var e;
            if ((this.$11("handleMessage", t), !(this.$4 || !this.$15()))) {
              var n = this.$16(t.data);
              if (n == null) {
                this.$11("Invalid event data", t.data);
                return;
              }
              var o = n.type;
              if (typeof o != "string") {
                this.$11("invalid event type", o);
                return;
              }
              if (!this.$2) {
                o === "ready" &&
                  n.nonce === this.$10 &&
                  ((this.$2 = !0),
                  this.$3.cancel(),
                  this.updateViewportWidth(this.$8.clientWidth));
                return;
              }
              switch (o) {
                case "height":
                  this.$17(n.px);
                  break;
                case "rpc":
                  this.$18(n);
                  break;
                case "frameError":
                  this.$14(
                    "frame error: " +
                      ((e = this.$19(n.message, _)) != null ? e : "unknown"),
                  );
                  break;
                default:
                  r("FBLogger")("maiba").mustfix("Unhandled message %s", o);
                  break;
              }
            }
          }),
          (t.$20 = function (t) {
            var e,
              n = this.$16(t);
            if (n != null) {
              var r = this.$19(n.execId, p);
              r != null &&
                o("MAIBAUserAgentClientSandbox").Sandbox.executeResult({
                  error: (e = this.$19(n.error, _)) != null ? e : void 0,
                  execId: r,
                  ok: n.ok === !0,
                  value: n.value,
                });
            }
          }),
          (t.$17 = function (t) {
            if (!(typeof t != "number" || !Number.isFinite(t) || t <= 0)) {
              var e = Math.min(Math.ceil(t), d);
              this.$8.style.setProperty("height", e + "px");
            }
          }),
          (t.$15 = function () {
            var e = Date.now();
            return (
              e - this.$6 > g && ((this.$6 = e), (this.$5 = 0)),
              this.$5++,
              this.$5 > m
                ? (this.$5 === m + 1 &&
                    this.$14(
                      "frame exceeded the message rate limit; dropping messages",
                    ),
                  !1)
                : !0
            );
          }),
          (t.$18 = function (t) {
            var e = this,
              n = t.id;
            if (typeof n == "number") {
              var o = this.$19(t.method, p);
              if (o == null) {
                this.$21(n, "invalid rpc method");
                return;
              }
              switch (o) {
                case "executeResult":
                  (this.$20(t.params), this.$22(n, null));
                  return;
                case "gapiGet":
                case "gapiPost":
                  r("promiseDone")(
                    this.$23(o, t.params).then(
                      function (t) {
                        e.$22(n, t);
                      },
                      function (t) {
                        e.$21(
                          n,
                          t instanceof Error ? t.message : "graph call failed",
                        );
                      },
                    ),
                  );
                  return;
                default:
                  this.$21(n, 'rpc method "' + o + '" is unavailable');
              }
            }
          }),
          (t.$23 = function (t, a) {
            var e,
              i,
              l,
              s,
              c = this.$16(a),
              d = this.$19(c == null ? void 0 : c.path, f);
            if (d == null)
              return (u || (u = n("Promise"))).reject(
                r("err")("invalid graph path"),
              );
            var m = t === "gapiPost",
              p = m
                ? {
                    body:
                      (e = this.$24(c == null ? void 0 : c.body)) != null
                        ? e
                        : {},
                    method: "POST",
                  }
                : {
                    params:
                      (i = this.$24(c == null ? void 0 : c.params)) != null
                        ? i
                        : {},
                  };
            return o("MAIBAUserAgentGraphPathAllowlist").isGraphRequestAllowed(
              d,
              p,
              r("MAIBAUserAgentGraphPathAllowlistData"),
            )
              ? m
                ? o("MAIBAUserAgentClientSandbox").Sandbox.gapiPost(
                    d,
                    (l = p.body) != null ? l : {},
                  )
                : o("MAIBAUserAgentClientSandbox").Sandbox.gapiGet(
                    d,
                    (s = p.params) != null ? s : {},
                  )
              : (this.$14('graph path "' + d + '" is not on the allowlist'),
                (u || (u = n("Promise"))).reject(
                  r("err")("graph path is not allowed"),
                ));
          }),
          (t.$24 = function (t) {
            var e = this.$16(t);
            if (e == null) return null;
            var n = {};
            for (var r of Object.keys(e)) {
              var o = e[r];
              typeof o == "string" && (n[r] = o);
            }
            return n;
          }),
          (t.$22 = function (t, n) {
            this.$25({ id: t, ok: !0, type: "rpcResult", value: n });
          }),
          (t.$21 = function (t, n) {
            this.$25({ error: n, id: t, ok: !1, type: "rpcResult" });
          }),
          (t.$25 = function (t) {
            if (!this.$4)
              try {
                this.$1.port1.postMessage(t);
              } catch (e) {
                this.$14("failed to post a message to the frame: " + String(e));
              }
          }),
          (t.updateViewportWidth = function (t) {
            !this.$2 ||
              !Number.isFinite(t) ||
              t <= 0 ||
              this.$25({ type: "viewport", width: t });
          }),
          (t.$14 = function (t) {
            r("FBLogger")("maiba").warn("MAIBAAgentFrameHost: " + t);
          }),
          (t.$16 = function (t) {
            return t == null || typeof t != "object" || Array.isArray(t)
              ? null
              : babelHelpers.extends({}, t);
          }),
          (t.$19 = function (t, n) {
            return typeof t != "string" || t.length === 0 || t.length > n
              ? null
              : t;
          }),
          e
        );
      })(),
      C =
        (e =
          (s = o("AdsManagerAutoLoggingAppConfig").ad_account_id) != null
            ? s
            : r("AdsAccountStore").getSelectedAccountID()) != null
          ? e
          : "";
    function b() {
      return "https://www.fbsbx.com";
    }
    function v() {
      var e;
      return (e = r("XFBSbxMAIBAAgentFrameControllerRouteBuilder")
        .buildUri({})
        .qualifyDomain(o("ConstUriUtils").getUri(b()))) == null
        ? void 0
        : e.toString();
    }
    function S(e) {
      var t = e.replaceAll(/<([^ ]*)([^/]*)\/>/gi, "<$1$2></$1>");
      return (
        t.replace(/<\/?(?:html|head|body)\b[^>]*>/gi, "") +
        '<meta name="responsive-embedded-sizing" content="true">'
      );
    }
    function R(e, t, n) {
      t.textContent = "";
      var r = new y();
      return (r.start(e, t, n), r);
    }
    ((l.MAIBAAgentFrameHost = y), (l.addToShadowRoot = R));
  },
  98,
);
