__d(
  "WAWebTEENodeTokenThriftFetcher",
  [
    "WABase64",
    "WALogger",
    "WAWebTeeRequestConfig",
    "WAWebTheiaACSClient",
    "WAWebXControllerFetchUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "/tee/debug-node-token/";
    function c(e) {
      for (
        var t = atob(e), n = new Uint8Array(t.length), r = 0;
        r < t.length;
        r++
      )
        n[r] = t.charCodeAt(r);
      return n;
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          (t === void 0 && (t = "debug"), n === void 0 && (n = !1));
          var a = o("WAWebTeeRequestConfig").getTeeRequestConfig(t);
          try {
            var i,
              l = { env: t };
            n && (yield p(l, a.acsProjectName));
            var d = yield o("WAWebXControllerFetchUtils").fetchFromXController(
                u,
                { additionalParams: l, method: "POST" },
              ),
              m = yield o("WAWebXControllerFetchUtils").extractJsonFromResponse(
                d,
              ),
              _ = m == null ? void 0 : m.payload;
            if (_ == null)
              throw r("err")("thrift node-token: empty/unparseable response");
            if (!_.success) {
              var f;
              throw r("err")(
                "thrift node-token failed (tier=" +
                  _.tier +
                  "): " +
                  ((f = _.error_message) != null ? f : "unknown"),
              );
            }
            var g = _.node_token_b64,
              h = _.chip_id_b64;
            if (g == null || h == null)
              throw r("err")(
                "thrift node-token: success response missing token fields",
              );
            var y = c(g),
              C = c(h);
            return (
              o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[TEE][THRIFT] fetched node token (",
                      " bytes)",
                    ])),
                  y.length,
                )
                .sendLogs("tee-thrift-success")
                .tags("tee"),
              {
                chipId: C,
                nodeToken: y,
                ports: (i = _.ports) != null ? i : {},
                tier: _.tier,
              }
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[TEE][THRIFT] fetchNodeTokenViaThrift failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("tee-thrift-error")
                .tags("tee"),
              e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebTheiaACSClient").redeemWithTheiaAPTClient(t);
          ((e.acs_token =
            o("WABase64").encodeB64UrlSafe(n.credential, !0) +
            "+" +
            o("WABase64").encodeB64UrlSafe(n.tag, !0)),
            (e.acs_configid = n.serverConfigId),
            (e.acs_project_name = t),
            (e.acs_hash_algorithm = "sha256"));
        })),
        _.apply(this, arguments)
      );
    }
    l.fetchNodeTokenViaThrift = d;
  },
  98,
);
