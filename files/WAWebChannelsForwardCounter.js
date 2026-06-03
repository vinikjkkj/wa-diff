__d(
  "WAWebChannelsForwardCounter",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebACSTokenConfig",
    "WAWebHttpErrors",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebNewsletterGatingUtils",
    "WAWebOHAIClient",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new URL("https://acs.whatsapp.com/graphql"),
      c = (656096963291760).toString(),
      d = (0x97e965c4439a).toString(),
      m = "24519724557710636";
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (!(n <= 0)) {
            yield r("WAWebNetworkStatus").waitIfOffline();
            try {
              var i = f(t, a),
                l = new Headers();
              l.append("X-FB-Friendly-Name", m);
              var c = yield o("WAWebOHAIClient").fetchOHAI({
                url: u,
                project: o("WAWebACSTokenConfig").ACS_PROJECTS
                  .WA_ChannelsForwardCounter,
                payload: i,
                headers: l,
              });
            } catch (r) {
              if (r instanceof o("WAWebHttpErrors").HttpNetworkError)
                try {
                  var d =
                      o("WATimeUtils").MINUTE_SECONDS *
                      Math.pow(
                        2,
                        Math.max(
                          0,
                          o("WAWebNewsletterGatingUtils")
                            .NEWSLETTER_FORWARD_COUNTER_MAX_RETRIES - n,
                        ),
                      ),
                    p = o("WATimeUtils").futureUnixTime(d),
                    _ = o(
                      "WAWebPersistedJobDefinitions",
                    ).jobSerializers.incrementNewsletterForwardCounter(
                      t,
                      n - 1,
                      a,
                      p,
                    );
                  o("WAWebPersistedJobManagerWorkerCompatible")
                    .getJobManager()
                    .fireAndForget(_);
                } catch (t) {
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[ForwardCounter][Increment] Failed to start persisted job",
                        ])),
                    )
                    .tags("newsletter-forward-counter", "job-start-error")
                    .sendLogs("forward-counter-job-start-error");
                }
              else
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ChannelsForwardCounter] increment failed: ",
                        "",
                      ])),
                    r,
                  )
                  .sendLogs("channels-forward-counter-error")
                  .tags("channels", "forward-counter");
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n = new FormData(),
        r = o("WAWebMobilePlatforms").isSMB() ? c : d,
        a = JSON.stringify({ newsletter_id: e, server_id: t });
      return (
        n.append("app_id", r),
        n.append("doc_id", m),
        n.append("variables", a),
        n
      );
    }
    l.incrementForwardCounter = p;
  },
  98,
);
