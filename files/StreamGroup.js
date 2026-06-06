__d(
  "StreamGroup",
  [
    "DGWConstants",
    "DGWLoggingContext",
    "DGWUtils",
    "StreamGroupWebSocketTransport",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        maxRetries: 0,
        baseRetryInterval: 1e3,
        backoffFactor: Math.sqrt(2),
      },
      s = (function () {
        function t(e, t, n, r, a, i, l, s, u, c) {
          var d, m, p, _, f, g, h, y, C;
          ((this.$2 = u), (this.$1 = u.getNewStreamGroupId()));
          var b = (d = l.overrideUrl) != null ? d : a;
          ((this.$6 = null),
            (this.$3 = {
              appId: e,
              appVersion: t,
              authType: (m = l.authType) != null ? m : n,
              deviceId: l.deviceId,
              dgwVersion: r,
              headers: l.streamGroupAppHeaders,
              tier:
                (p = l.serviceTier) != null
                  ? p
                  : o("DGWConstants").DEFAULT_SERVICE_TIER,
              connectEndpoint: b,
              fbId: i,
              loggingId: l.loggingId,
              serviceId: l.serviceId,
              streamGroupCallbacks: s,
              keepAliveMs: l.keepAliveMs,
              regionHint: l.regionHint,
              enableFirstStreamOnWsHandshake: !1,
              authToken: l.authToken,
              connectTimeoutMs: l.connectTimeoutMs,
            }),
            (this.$4 = l),
            (this.$5 = c),
            (this.streamGroupLoggingContext = this.$5(
              null,
              !1,
              (_ = l.verboseLoggingEnabled) != null ? _ : !1,
            )),
            (this.$7 = o("DGWUtils").DGWUtils.constructConnectUrl({
              appId: this.$3.appId,
              appVersion: this.$3.appVersion,
              authType: this.$3.authType,
              deviceId: (f = this.$3.deviceId) != null ? f : void 0,
              dgwVersion: this.$3.dgwVersion,
              fbId: this.$3.fbId,
              headers: babelHelpers.extends({}, this.$3.headers),
              loggingId: (g = this.$3.loggingId) != null ? g : void 0,
              tier: this.$3.tier,
              serviceId: this.$3.serviceId,
              endpoint: this.$3.connectEndpoint,
              regionHint: (h = this.$3.regionHint) != null ? h : void 0,
              trafficTracing: (y = this.$4.trafficTracing) != null ? y : void 0,
              authToken: (C = this.$4.authToken) != null ? C : void 0,
            })));
        }
        var n = t.prototype;
        return (
          (n.initTransport = async function () {
            var e = this,
              t = {
                maxRetries: 0,
                baseRetryInterval: 1e3,
                backoffFactor: Math.sqrt(2),
              };
            this.$6 =
              this.$6 ||
              o(
                "StreamGroupWebSocketTransport",
              ).StreamGroupWebSocketTransport.getTransport_DEPRECATED(
                this.$7,
                this.$3,
                this.streamGroupLoggingContext,
                function () {
                  e.$2.removeStreamGroupAndTransport(e.$1);
                },
                t,
                this.$5,
              );
            var n;
            try {
              ((n = await this.$6), (this.$6 = null));
            } catch (e) {
              throw ((this.$6 = null), e);
            }
            return (
              this.$2.containsStreamGroup(this.$1) ||
                this.$2.setStreamGroupAndTransport(this.$1, n),
              n
            );
          }),
          (n.establishStream = async function (n, r, a, i, l) {
            var t = this;
            if (this.$2.containsStreamGroup(this.$1) === !1)
              if (
                (this.streamGroupLoggingContext.logEvent(
                  o("DGWLoggingContext").DGWLoggingComponent
                    .STREAM_GROUP_COMPONENT,
                  "createTransportWhenEstablishStream",
                ),
                this.$3.enableFirstStreamOnWsHandshake)
              ) {
                var u = await o(
                  "StreamGroupWebSocketTransport",
                ).StreamGroupWebSocketTransport.getTransportWithInitialStream(
                  n,
                  r,
                  this.$3,
                  this.streamGroupLoggingContext,
                  function () {
                    t.$2.removeStreamGroupAndTransport(t.$1);
                  },
                  e,
                  this.$5,
                );
                return (
                  this.$2.setStreamGroupAndTransport(this.$1, u.transport),
                  u.streamPromise
                );
              } else {
                this.$6 =
                  this.$6 ||
                  o(
                    "StreamGroupWebSocketTransport",
                  ).StreamGroupWebSocketTransport.getTransport_DEPRECATED(
                    this.$7,
                    this.$3,
                    this.streamGroupLoggingContext,
                    function () {
                      t.$2.removeStreamGroupAndTransport(t.$1);
                    },
                    e,
                    this.$5,
                  );
                var s;
                try {
                  ((s = await this.$6), (this.$6 = null));
                } catch (e) {
                  throw ((this.$6 = null), e);
                }
                this.$2.containsStreamGroup(this.$1) ||
                  this.$2.setStreamGroupAndTransport(this.$1, s);
              }
            return this.establishStreamWithTransport(n, r, a, i, l);
          }),
          (n.establishStreamWithTransport = async function (t, n, r, a, i) {
            var e,
              l = t.loggingId;
            this.streamGroupLoggingContext.logEvent(
              o("DGWLoggingContext").DGWLoggingComponent.STREAM_GROUP_COMPONENT,
              "Establishing Grouped Stream",
              "initialData:" + String(r != null),
              !0,
              l,
            );
            var s = this.$5(
                l,
                t.disableFalcoLogging,
                (e = t.verboseLoggingEnabled) != null ? e : !1,
              ),
              u = await this.$2
                .getStreamGroupTransport(this.$1)
                .establishGroupedStream(n, t, s, r, a, i);
            return u;
          }),
          (n.canCreateGroupedStream = function () {
            var e = !0;
            if (this.$2.containsStreamGroup(this.$1) !== !1) {
              var t = this.$2.getStreamGroupTransport(this.$1);
              e = t.canCreateGroupedStream();
            }
            return (
              o("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
                o("DGWLoggingContext").DGWLoggingComponent
                  .STREAM_GROUP_COMPONENT,
                e ? "can_create" : "cannot_create",
              ),
              e
            );
          }),
          (n.close = function () {
            if (this.$2.containsStreamGroup(this.$1)) {
              var e = this.$2.getStreamGroupTransport(this.$1);
              e.close();
            }
          }),
          t
        );
      })();
    l.StreamGroup = s;
  },
  98,
);
