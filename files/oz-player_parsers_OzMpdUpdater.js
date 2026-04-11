__d(
  "oz-player/parsers/OzMpdUpdater",
  [
    "oz-player/parsers/OzMpdParser",
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/OzURI",
    "oz-player/shims/ozClearTimeout",
    "oz-player/shims/ozSetTimeoutAcrossTransitions",
    "oz-player/utils/OzErrorEmitter",
    "oz-player/utils/OzErrorUtils",
    "oz-player/utils/OzMpdUtils",
    "oz-player/utils/OzReadableStreamUtils",
    "oz-player/utils/OzStreamInterruptChecker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, a, i, l, s, u, c, d) {
        var m;
        ((m = e.call(this) || this),
          (m.$OzMpdUpdater$p_8 = new (r("oz-player/utils/OzErrorEmitter"))()),
          (m.$OzMpdUpdater$p_10 = new (r(
            "oz-player/shims/OzSubscriptionsHandler",
          ))()),
          (m.$OzMpdUpdater$p_11 = !1),
          (m.$OzMpdUpdater$p_16 = 0),
          (m.$OzMpdUpdater$p_18 = 0),
          (m.$OzMpdUpdater$p_19 = null),
          (m.$OzMpdUpdater$p_21 = !0),
          (m.$OzMpdUpdater$p_22 = 0),
          (m.$OzMpdUpdater$p_26 = function () {
            var e,
              t,
              n = m.$OzMpdUpdater$p_2.getLocation();
            if (((m.$OzMpdUpdater$p_21 = !1), !(n == null || n === ""))) {
              var a = new (r("oz-player/shims/OzURI"))(n),
                i = String(
                  (e =
                    (t = a.getQueryData().ms) != null
                      ? t
                      : a.getQueryData().msdev) != null
                    ? e
                    : a.getQueryData().mstest,
                );
              if (!m.$OzMpdUpdater$p_12.isPlaying()) {
                m.setupUpdateLoop();
                return;
              }
              var l = m.$OzMpdUpdater$p_5
                .getOperationLogger("update_manifest")
                .start();
              m.$OzMpdUpdater$p_28(n)
                .then(function (e) {
                  var t, a, s, u, c, d, p, _;
                  if (
                    ((m.$OzMpdUpdater$p_18 = 0),
                    m.$OzMpdUpdater$p_29(),
                    (m.$OzMpdUpdater$p_7 = 0),
                    !m.$OzMpdUpdater$p_21)
                  ) {
                    var f = babelHelpers.extends({}, m.$OzMpdUpdater$p_13, {
                        mpdUrl: n,
                      }),
                      g = new (r("oz-player/parsers/OzMpdParser"))({
                        config: m.$OzMpdUpdater$p_6,
                        ozParserContext: f,
                        networkManager: m.$OzMpdUpdater$p_1,
                        perfLoggerProvider: m.$OzMpdUpdater$p_5,
                        drmManager: m.$OzMpdUpdater$p_14,
                        initialRepresentationIDs: [],
                        blockedRepresentationsManager: null,
                        enableAlternativeAudioTracks: !1,
                        useManagedMediaSource: m.$OzMpdUpdater$p_23,
                      });
                    g.onError(function (e) {
                      (m.$OzMpdUpdater$p_8.emitError(e), l.setError(e).log());
                    });
                    var h = g.parse(e),
                      y = m.$OzMpdUpdater$p_2.isStaticMpd();
                    (m.$OzMpdUpdater$p_2.updateWith(h),
                      m.$OzMpdUpdater$p_2.markRefreshed(),
                      h.isStaticMpd() &&
                        !y &&
                        m.emit("streamTransitionToStatic"));
                    var C = o("oz-player/utils/OzMpdUtils").getMpdLastTimeRange(
                        m.$OzMpdUpdater$p_2,
                        m.$OzMpdUpdater$p_6,
                      ),
                      b = C && C.endTime != 0 ? C.endTime : null,
                      v = String(
                        (t =
                          (a = m.$OzMpdUpdater$p_2) == null
                            ? void 0
                            : a.getCustomField("currentServerTimeMs")) != null
                          ? t
                          : "",
                      ),
                      S = String(
                        (s =
                          (u = m.$OzMpdUpdater$p_2) == null
                            ? void 0
                            : u.getCustomField("lastVideoFrameTs")) != null
                          ? s
                          : "",
                      ),
                      R = {
                        currentServerTimeMs: v,
                        ingestLastVideoFrameTs: S,
                        nowMs: String(Date.now()),
                      },
                      L =
                        new Set(
                          ((c =
                            (d = m.$OzMpdUpdater$p_2) == null
                              ? void 0
                              : d.getVideoRepresentations()) != null
                            ? c
                            : []
                          ).map(function (e) {
                            return e.getCodecs();
                          }),
                        ).size > 1,
                      E =
                        new Set(
                          ((p =
                            (_ = m.$OzMpdUpdater$p_2) == null
                              ? void 0
                              : _.getAudioRepresentations()) != null
                            ? p
                            : []
                          ).map(function (e) {
                            return e.getCodecs();
                          }),
                        ).size > 1;
                    (l
                      .setLiveheadPosition(b)
                      .setLiveheadSeqNumMpd(
                        o(
                          "oz-player/utils/OzMpdUtils",
                        ).getMpdLastSequenceNumber(m.$OzMpdUpdater$p_2),
                      )
                      .setManifestType(
                        m.$OzMpdUpdater$p_2.isStaticMpd()
                          ? "static"
                          : "dynamic",
                      )
                      .setIsMixedCodecManifest(L || E)
                      .setIsTemplatedManifest(
                        !!m.$OzMpdUpdater$p_2.getCustomField("isLiveTemplated"),
                      )
                      .setPlaybackFbmsParam(i)
                      .setUserInfo(R)
                      .log(),
                      m.$OzMpdUpdater$p_9.notifyMpdUpdated(),
                      m.setupUpdateLoop());
                  }
                })
                .catch(function (e) {
                  (m.$OzMpdUpdater$p_29(), l.setError(e).log());
                  var t = null;
                  if (o("oz-player/utils/OzErrorUtils").isOzError(e)) t = e;
                  else {
                    var r,
                      a = null,
                      i = "Caught an unknown error when fetching the manifest.";
                    if (e != null)
                      if (
                        m.$OzMpdUpdater$p_6.getBool(
                          "normalize_mpd_fetch_errors",
                        )
                      ) {
                        var s = o(
                            "oz-player/utils/OzErrorUtils",
                          ).getNormalizedErrorAndCode(e),
                          u = s[0],
                          c = s[1];
                        t = u;
                      } else
                        ((r = e),
                          (a = r.code != null ? String(r.code) : null),
                          (i =
                            r.name +
                            "; " +
                            r.message +
                            "; " +
                            r.description +
                            ";"));
                    if (t == null) {
                      var d = { originalError: r, url: n };
                      (a !== null && (d.code = a),
                        (t = o("oz-player/utils/OzErrorUtils").createOzError({
                          type: "OZ_NETWORK",
                          description: i,
                          extra: d,
                        })));
                    }
                  }
                  m.$OzMpdUpdater$p_27(t, n);
                });
            }
          }));
        var p = n.getMinimumUpdatePeriod();
        return (
          (m.$OzMpdUpdater$p_7 = 0),
          (m.$OzMpdUpdater$p_1 = a),
          (m.$OzMpdUpdater$p_2 = n),
          (m.$OzMpdUpdater$p_12 = i),
          (m.$OzMpdUpdater$p_3 = p),
          (m.$OzMpdUpdater$p_5 = l.cloneContext().setType("manifest")),
          (m.$OzMpdUpdater$p_6 = t),
          (m.$OzMpdUpdater$p_13 = s),
          (m.$OzMpdUpdater$p_14 = u),
          (m.$OzMpdUpdater$p_15 = c),
          (m.$OzMpdUpdater$p_23 = d),
          m.$OzMpdUpdater$p_2.addListener("locationUpdated", function () {
            (m.$OzMpdUpdater$p_24(), m.setupUpdateLoop());
          }),
          (m.$OzMpdUpdater$p_9 = new (r(
            "oz-player/utils/OzStreamInterruptChecker",
          ))(m.$OzMpdUpdater$p_2, m.$OzMpdUpdater$p_6)),
          m.$OzMpdUpdater$p_10.addSubscriptions(
            m.$OzMpdUpdater$p_9.addListener("streamResumedAt", function (e) {
              m.emit("streamResumedAt", e);
            }),
            m.$OzMpdUpdater$p_9.addListener("streamInterruptAt", function (e) {
              m.emit("streamInterruptAt", e);
            }),
          ),
          m
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.$OzMpdUpdater$p_24 = function () {
          (r("oz-player/shims/ozClearTimeout")(this.$OzMpdUpdater$p_4),
            (this.$OzMpdUpdater$p_4 = null),
            this.$OzMpdUpdater$p_25(),
            (this.$OzMpdUpdater$p_21 = !0));
        }),
        (n.setupUpdateLoop = function () {
          var e,
            t = !this.$OzMpdUpdater$p_11;
          t &&
            ((t = !this.$OzMpdUpdater$p_2.isStaticMpd()),
            (this.$OzMpdUpdater$p_3 =
              this.$OzMpdUpdater$p_2.getMinimumUpdatePeriod()));
          var n =
            this.$OzMpdUpdater$p_17 == null &&
            this.$OzMpdUpdater$p_6.getNumber(
              "manifest_initial_update_delay_ms",
            ) > 0
              ? this.$OzMpdUpdater$p_6.getNumber(
                  "manifest_initial_update_delay_ms",
                )
              : this.$OzMpdUpdater$p_6.getNumber(
                  "manifest_update_frequency_ms",
                ) || ((e = this.$OzMpdUpdater$p_3) != null ? e : 0) * 1e3;
          t &&
            n &&
            this.$OzMpdUpdater$p_2.getLocation() &&
            (this.$OzMpdUpdater$p_4 = r(
              "oz-player/shims/ozSetTimeoutAcrossTransitions",
            )(this.$OzMpdUpdater$p_26, n));
        }),
        (n.onError = function (t) {
          return this.$OzMpdUpdater$p_8.onError(t);
        }),
        (n.$OzMpdUpdater$p_27 = function (t, n) {
          var e = this,
            r = !0,
            o = this.$OzMpdUpdater$p_18 - 1,
            a = t.getExtra().code;
          this.$OzMpdUpdater$p_19 !== a
            ? ((this.$OzMpdUpdater$p_19 = a), (this.$OzMpdUpdater$p_16 = 1))
            : this.$OzMpdUpdater$p_16++;
          var i = function () {
              r = !1;
            },
            l = {
              endStream: function () {
                (i(), (e.$OzMpdUpdater$p_11 = !0), e.emit("streamGone"));
              },
              consecutiveFailuresForErrorCode: this.$OzMpdUpdater$p_16,
              error: t,
              isInitialRequest: !1,
              retry: function (r) {
                (e.emit("manifestFetchErrorRetry", t),
                  i(),
                  e.setupUpdateLoop());
              },
              retryAttemptCount: o,
            };
          (this.emit("manifestFetchError", l),
            r && this.$OzMpdUpdater$p_8.emitError(t));
        }),
        (n.$OzMpdUpdater$p_30 = function (t, n) {
          var e = new (r("oz-player/shims/OzURI"))(t);
          return (e.addQueryData("_nc_expid", n), e.toString());
        }),
        (n.$OzMpdUpdater$p_31 = function (t) {
          if (!this.$OzMpdUpdater$p_15) return t;
          var e = new (r("oz-player/shims/OzURI"))(t);
          return (
            e.addQueryData("_nc_tsid", "mpd-" + this.$OzMpdUpdater$p_22++),
            e.toString()
          );
        }),
        (n.$OzMpdUpdater$p_28 = function (t) {
          (this.$OzMpdUpdater$p_25(), this.$OzMpdUpdater$p_18++);
          var e = this.$OzMpdUpdater$p_6.getString("cdn_experiment_id"),
            n = e.length === 0 ? t : this.$OzMpdUpdater$p_30(t, e);
          n = this.$OzMpdUpdater$p_31(n);
          var r = this.$OzMpdUpdater$p_1.requestRawUrl({
            debugName: "OzMpdUpdater/requestMpd/mpd",
            url: n,
            options: {
              networkTimeoutMs: this.$OzMpdUpdater$p_6.getNumber(
                "mpd_updater_network_request_timeout_ms",
              ),
            },
            loggerProvider: this.$OzMpdUpdater$p_5,
          });
          ((this.$OzMpdUpdater$p_17 = Date.now()),
            (this.$OzMpdUpdater$p_20 = r));
          var a = r.getStream().getReader();
          return o("oz-player/utils/OzReadableStreamUtils").pumpString(a);
        }),
        (n.$OzMpdUpdater$p_25 = function () {
          (this.$OzMpdUpdater$p_20 &&
            (this.$OzMpdUpdater$p_20.cancel(), (this.$OzMpdUpdater$p_18 = 0)),
            this.$OzMpdUpdater$p_29());
        }),
        (n.$OzMpdUpdater$p_29 = function () {
          this.$OzMpdUpdater$p_20 = null;
        }),
        (n.destroy = function () {
          (this.$OzMpdUpdater$p_4 &&
            r("oz-player/shims/ozClearTimeout")(this.$OzMpdUpdater$p_4),
            this.$OzMpdUpdater$p_10.release());
        }),
        t
      );
    })(r("oz-player/shims/OzEventEmitter"));
    l.default = e;
  },
  98,
);
