__d(
  "WAWebBizAIBloksAppLoader",
  [
    "CometRelay",
    "WALogger",
    "WAWebBizAIBloksAppLoaderActionQuery.graphql",
    "WAWebBizAIBloksAppLoaderQuery.graphql",
    "WebBloksUtils",
    "WebBloksVersioningID",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = e !== void 0 ? e : (e = n("WAWebBizAIBloksAppLoaderQuery.graphql")),
      g =
        s !== void 0
          ? s
          : (s = n("WAWebBizAIBloksAppLoaderActionQuery.graphql")),
      h = (function () {
        function e(e, t) {
          ((this.$1 = e), (this.$2 = t == null ? void 0 : t.onFetchSettled));
        }
        var t = e.prototype;
        return (
          (t.fetchAppByUrl = function (t) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "BizAI Bloks fetchAppByUrl unsupported: url=",
                      "",
                    ])),
                  t,
                )
                .sendLogs("biz-ai-bloks-fetch-by-url"),
              Promise.reject(
                r("err")("Fetching a Biz AI Bloks app by URL failed: " + t),
              )
            );
          }),
          (t.fetchApp = function (t, n) {
            return this.$3(t, this.$4(t, n));
          }),
          (t.fetchAction = function (t, n) {
            return this.$3(t, this.$5(t, n));
          }),
          (t.$5 = async function (t, n) {
            var e, a;
            try {
              a = await o("CometRelay")
                .fetchQuery(
                  this.$1,
                  g,
                  {
                    params: {
                      app_id: t,
                      bloks_versioning_id: o("WebBloksVersioningID")
                        .versioningID,
                      params: n != null ? JSON.stringify(n) : null,
                    },
                  },
                  { fetchPolicy: "network-only" },
                )
                .toPromise();
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "BizAI Bloks action fetch failed: appID=",
                        "",
                      ])),
                    t,
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("biz-ai-bloks-fetch-failed"),
                e
              );
            }
            var i =
              (e = a) == null ||
              (e = e.fb_bloks_action) == null ||
              (e = e.root_action) == null ||
              (e = e.action) == null ||
              (e = e.action_bundle) == null
                ? void 0
                : e.bloks_bundle_action;
            if (i == null)
              throw (
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "BizAI Bloks action fetch failed: appID=",
                        "",
                      ])),
                    t,
                  )
                  .sendLogs("biz-ai-bloks-fetch-failed"),
                r("err")("Failed to fetch Bloks action for app " + t)
              );
            return o("WebBloksUtils").normaliseBloksPayload(this.$6(t, i));
          }),
          (t.$4 = async function (t, n) {
            var e = await this.$7(t, n, "BLOKS_PAYLOAD");
            return o("WebBloksUtils").normaliseBloksPayload(e);
          }),
          (t.fetchComponentQuery = function (t, n) {
            return this.$3(t, this.$7(t, n, "COMPONENT_QUERY"));
          }),
          (t.$3 = async function (t, n) {
            var e, o;
            try {
              o = await n;
            } catch (e) {
              var a;
              throw (
                (a = this.$2) == null || a.call(this, t, r("getErrorSafe")(e)),
                e
              );
            }
            return ((e = this.$2) == null || e.call(this, t, null, o), o);
          }),
          (t.$7 = async function (t, n, a) {
            var e, i;
            try {
              i = await o("CometRelay")
                .fetchQuery(this.$1, f, {
                  input: {
                    appid: t,
                    bloks_versioning_id: o("WebBloksVersioningID").versioningID,
                    params: n != null ? JSON.stringify(n) : null,
                  },
                  queryType: a,
                })
                .toPromise();
            } catch (e) {
              var l = e instanceof Error ? e.message : String(e);
              throw (
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "BizAI Bloks fetch failed: queryType=",
                        " appID=",
                        " error=",
                        "",
                      ])),
                    String(a),
                    t,
                    l,
                  )
                  .sendLogs("biz-ai-bloks-fetch-failed"),
                e
              );
            }
            var s =
              (e = i) == null || (e = e.fetch_bloks_payload_for_comet) == null
                ? void 0
                : e.payload;
            if (s == null)
              throw (
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "BizAI Bloks fetch failed: queryType=",
                        " appID=",
                        "",
                      ])),
                    String(a),
                    t,
                  )
                  .sendLogs("biz-ai-bloks-fetch-failed"),
                r("err")("Failed to fetch " + a + " for app " + t)
              );
            return this.$6(t, s);
          }),
          (t.$6 = function (t, n) {
            try {
              return JSON.parse(n);
            } catch (n) {
              var e = r("getErrorSafe")(n).name;
              throw (
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "BizAI Bloks parse failed: appID=",
                        " errorName=",
                        "",
                      ])),
                    t,
                    e,
                  )
                  .sendLogs("biz-ai-bloks-parse-failed"),
                r("err")("Failed to parse Bloks payload for app " + t)
              );
            }
          }),
          e
        );
      })();
    l.default = h;
  },
  98,
);
