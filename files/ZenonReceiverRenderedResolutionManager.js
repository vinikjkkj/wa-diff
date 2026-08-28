__d(
  "ZenonReceiverRenderedResolutionManager",
  [
    "CompactSerializer",
    "DataMessageSerializers",
    "RequestStreamBodyUtils",
    "ZenonCallsContext",
    "ZenonReceiverRenderedResolutionUtils",
    "ZenonRenderResolutionTypes",
    "ZenonSCTPConstants",
    "ZenonTransportType",
    "immutable",
    "promiseDone",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useMemo,
      d = 200,
      m = function (t) {
        switch (t) {
          case "video":
            return o("ZenonRenderResolutionTypes").StreamType.Default;
          case "screen":
            return o("ZenonRenderResolutionTypes").StreamType.ScreenShare;
          default:
            return o("ZenonRenderResolutionTypes").StreamType.Unknown;
        }
      },
      p = (function () {
        function e(e, t, n) {
          var a = this;
          ((this.$4 = r("immutable").Map()),
            (this.$5 = new Map()),
            (this.$6 = {}),
            (this.updateTrackIdToUserIdMap = function (e) {
              var t, n, o, i;
              if (!(!e || !e.get(a.$1))) {
                var l =
                    (t = (n = e.get(a.$1)) == null ? void 0 : n.participants) !=
                    null
                      ? t
                      : r("immutable").Map(),
                  s =
                    (o = (i = e.get(a.$1)) == null ? void 0 : i.mediaTracks) !=
                    null
                      ? o
                      : new Map();
                l !== a.$4 &&
                  ((a.$4 = l != null ? l : r("immutable").Map()),
                  a.$5.clear(),
                  l.forEach(function (e, t, n) {
                    e.trackIDs.forEach(function (e) {
                      var n = s.get(e);
                      n != null && n.remote && a.$5.set(e, t);
                    });
                  }));
              }
            }),
            (this.updateRenderedResolutions = function (e) {
              var t = {};
              (e.forEach(function (e, n) {
                var r = m(e.contentType);
                if (r !== o("ZenonRenderResolutionTypes").StreamType.Unknown) {
                  var i = a.$5.get(n);
                  if (i != null) {
                    var l = {
                        renderHeight: e.renderHeight,
                        renderWidth: e.renderWidth,
                        streamId: n,
                        streamType: r,
                        userId: i,
                      },
                      s = t[i];
                    if (s) s[String(r)] = l;
                    else {
                      var u;
                      t[i] = ((u = {}), (u[String(r)] = l), u);
                    }
                  }
                }
              }),
                a.updateRenderedResolutionMap(t));
            }),
            (this.$1 = e),
            (this.$2 = t),
            (this.$3 = n),
            this.$2.addListener(
              "callsModelUpdate",
              this.updateTrackIdToUserIdMap,
            ),
            this.updateTrackIdToUserIdMap(this.$2.getCurrentCallsModel()));
        }
        var t = e.prototype;
        return (
          (t.updateRenderedResolutionMap = function (t) {
            var e = this;
            if (
              !o(
                "ZenonReceiverRenderedResolutionUtils",
              ).areEqualRenderResolutionMaps(t, this.$6)
            ) {
              this.$2.updateRenderedResolutionMap(t);
              var n = 2;
              if (
                !(
                  Object.keys(this.$6 || {}).length > 0 &&
                  Object.keys(t || {}).length > 0 &&
                  o(
                    "ZenonReceiverRenderedResolutionUtils",
                  ).getMaxResolutionChangeMultiplier(t, this.$6) < n
                )
              ) {
                this.$6 = t;
                var a = this.serializeSctpRenderResolutionMap({
                  renderResolutionMap: this.$6,
                });
                window.setTimeout(function () {
                  r("promiseDone")(
                    e.$3.sendGenericDataMessage(
                      o("ZenonSCTPConstants").SCTP_RRR,
                      a,
                      { serviceRecipients: [2] },
                      o("ZenonTransportType").ZenonTransportType.SCTP,
                    ),
                  );
                }, this.getJitterMs());
              }
            }
          }),
          (t.serializeSctpRenderResolutionMap = function (t) {
            return o("RequestStreamBodyUtils").uint8ArrayToString(
              o("CompactSerializer").serialize(
                t,
                o("DataMessageSerializers")
                  .serializeRenderResolutionMessageFromClient,
              ),
            );
          }),
          (t.getJitterMs = function () {
            return Math.floor(Math.random() * d);
          }),
          (t.getTrackIdToUserIdMap = function () {
            return this.$5;
          }),
          (t.getRenderedResolutionMap = function () {
            return this.$6;
          }),
          e
        );
      })();
    function _() {
      var e = u(r("ZenonCallsContext")),
        t = e.callSDK,
        n = e.currentCallInstanceSDK;
      return c(
        function () {
          var e = new p(n.getClientCallID_DEPRECATED(), t, n);
          return e.updateRenderedResolutions;
        },
        [t, n],
      );
    }
    ((l.ReceiverRenderedResolutionManager = p),
      (l.useReceiverRenderedResolutionManager = _));
  },
  98,
);
