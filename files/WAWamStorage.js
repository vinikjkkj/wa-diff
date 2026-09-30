__d(
  "WAWamStorage",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWamChannelManager",
    "WAWamEntrypoint",
    "WAWamUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = null,
      g = null;
    function h(e) {
      if (g) return g;
      throw r("err")("WamStorage::" + e + " called before startWamStorage");
    }
    function y(t) {
      g == null
        ? (g = t)
        : o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[wam] startWamStorage: called again",
                ])),
            )
            .sendLogs("startWamStorage");
    }
    function C() {
      (o("WAWamEntrypoint").deinitializeWAM(),
        o("WAWamChannelManager").closeChannelManager(),
        (g = null),
        (f = null));
    }
    function b(e, t, a, i) {
      var l = h("initializeWAMSink"),
        m = o("WAWamChannelManager").getChannelManager();
      if (m.getChannelInitialized(t))
        return (_ || (_ = n("Promise"))).resolve();
      m.setChannelInitialized(t);
      var p = l.getStreamId(e),
        g = {
          putBuffer: function (r, i, d, f) {
            if (m.isSinkBusy(t))
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WamStorage: Sink flush did not happen within timeout, buffer is not saved",
                    ])),
                ),
                (_ || (_ = n("Promise"))).resolve()
              );
            m.setSinkBusy(t, !0);
            var e = o("WAWamUtils").asBufferEntry(r, t, p, i, d),
              g = e.bufferKey,
              h = e.bufferRow,
              y = e.meta;
            return l
              .saveBuffer(y, h, f)
              .then(function () {
                var e = [r.streamId, r.sequenceNumber];
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "WamStorage: Successfully put buffer ",
                      " to sink",
                    ])),
                  e,
                ),
                  d &&
                    (a(),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "WamStorage: Buffer ",
                          " is scheduled for send",
                        ])),
                      g,
                    )));
              })
              .finally(function () {
                m.setSinkBusy(t, !1);
              });
          },
        };
      return (
        f == null && (f = l.finishBuffer(p)),
        f
          .then(function () {
            if (l.getStartingSequenceNumbers)
              return (
                l.getStartingSequenceRow,
                l.getStartingSequenceNumbers(t, p)
              );
            if ((l.getStartingSequenceRow, i != null && i.multipleSequences))
              throw r("err")(
                "getStartingSequenceRow must not used when enabling support for multiple sequences",
              );
            return l.getStartingSequenceRow(p).then(function (e) {
              var t = o("WAWamUtils").getSequenceNumber(e),
                n = new Map();
              return (n.set("regular", t), n);
            });
          })
          .then(function (e) {
            (o("WAWamEntrypoint").initializeWAM(p, e, t, g, i),
              t === "private" &&
                l.updatePrivateStatsIds &&
                l
                  .updatePrivateStatsIds()
                  .then(o("WAWamEntrypoint").updatePrivateStatsIds)
                  .catch(function (e) {
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "WamStorage: Failed to update private stats IDs: ",
                          "",
                        ])),
                      e,
                    );
                  }));
          })
      );
    }
    function v(e) {
      return h("getFinishedStreamBuffers")
        .getBuffers()
        .then(function (t) {
          return o("WAWamUtils").getFinishedBuffers(e, t);
        });
    }
    var S = 64,
      R = function (t, n) {
        var e =
            (n == null ? void 0 : n.maxRedeemCount) != null &&
            n.maxRedeemCount !== 0
              ? n.maxRedeemCount
              : S,
          r =
            (n == null ? void 0 : n.maxExpirySeconds) != null &&
            n.maxExpirySeconds !== 0
              ? n.maxExpirySeconds
              : o("WATimeUtils").DAY_SECONDS,
          a = { maxRedeemCount: e, maxExpirySeconds: r };
        return o("WATimeUtils").happenedWithin(t.creationTs, a.maxExpirySeconds)
          ? t.redeemCount >= a.maxRedeemCount
            ? (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "The private stats token was redeemed maximum number of time. The client shall re-issue a new one",
                  ])),
              ),
              !1)
            : !0
          : (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "The private stats token expired. The client shall re-issue a new one",
                ])),
            ),
            !1);
      };
    function L() {
      var e = h("getPrivateStatsToken");
      if (!e.redeemPrivateStatsToken)
        throw r("err")("redeemPrivateStatsToken not implemented for WAM DB");
      return e.redeemPrivateStatsToken(R);
    }
    function E(e) {
      var t = h("savePrivateStatsToken");
      if (!t.savePrivateStatsToken)
        throw r("err")("savePrivateStatsToken not implemented for WAM DB");
      return t.savePrivateStatsToken(e);
    }
    function k() {
      var e = h("privateStatsKillSwitchGetBlockedToken");
      if (!e.privateStatsKillSwitchGetBlockedToken)
        throw r("err")(
          "privateStatsKillSwitchGetBlockedToken not implemented for WAM DB",
        );
      return e.privateStatsKillSwitchGetBlockedToken();
    }
    function I(e) {
      var t = h("privateStatsKillSwitchSet");
      if (!t.privateStatsKillSwitchSet)
        throw r("err")("privateStatsKillSwitchSet not implemented for WAM DB");
      return t.privateStatsKillSwitchSet(e);
    }
    function T(e) {
      return h("removeBufferByKey").removeBufferByKey(e);
    }
    function D() {
      return h("nukeMetrics").nukeMetrics();
    }
    ((l.startWamStorage = y),
      (l.closeWamStorage = C),
      (l.initializeWAMSink = b),
      (l.getFinishedStreamBuffers = v),
      (l.redeemPrivateStatsToken = L),
      (l.savePrivateStatsToken = E),
      (l.privateStatsKillSwitchGetBlockedToken = k),
      (l.privateStatsKillSwitchSet = I),
      (l.removeBufferByKey = T),
      (l.nukeMetrics = D));
  },
  98,
);
