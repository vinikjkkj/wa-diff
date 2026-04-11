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
      _ = null,
      f = null;
    function g(e) {
      if (f) return f;
      throw r("err")("WamStorage::" + e + " called before startWamStorage");
    }
    function h(t) {
      f == null
        ? (f = t)
        : o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[wam] startWamStorage: called again",
                ])),
            )
            .sendLogs("startWamStorage");
    }
    function y() {
      (o("WAWamEntrypoint").deinitializeWAM(),
        o("WAWamChannelManager").closeChannelManager(),
        (f = null),
        (_ = null));
    }
    function C(e, t, a, i) {
      var l = g("initializeWAMSink"),
        d = o("WAWamChannelManager").getChannelManager();
      if (d.getChannelInitialized(t))
        return (p || (p = n("Promise"))).resolve();
      d.setChannelInitialized(t);
      var m = l.getStreamId(e),
        f = {
          putBuffer: function (r, i, _, f) {
            if (d.isSinkBusy(t))
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WamStorage: Sink flush did not happen within timeout, buffer is not saved",
                    ])),
                ),
                (p || (p = n("Promise"))).resolve()
              );
            d.setSinkBusy(t, !0);
            var e = o("WAWamUtils").asBufferEntry(r, t, m, i, _),
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
                  _ &&
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
                d.setSinkBusy(t, !1);
              });
          },
        };
      return (
        _ == null && (_ = l.finishBuffer(m)),
        _.then(function () {
          if (l.getStartingSequenceNumbers)
            return (
              l.getStartingSequenceRow,
              l.getStartingSequenceNumbers(t, m)
            );
          if ((l.getStartingSequenceRow, i != null && i.multipleSequences))
            throw r("err")(
              "getStartingSequenceRow must not used when enabling support for multiple sequences",
            );
          return l.getStartingSequenceRow(m).then(function (e) {
            var t = o("WAWamUtils").getSequenceNumber(e),
              n = new Map();
            return (n.set("regular", t), n);
          });
        }).then(function (e) {
          (o("WAWamEntrypoint").initializeWAM(m, e, t, f, i),
            t === "private" &&
              l.updatePrivateStatsIds &&
              l
                .updatePrivateStatsIds()
                .then(o("WAWamEntrypoint").updatePrivateStatsIds));
        })
      );
    }
    function b(e) {
      return g("getFinishedStreamBuffers")
        .getBuffers()
        .then(function (t) {
          return o("WAWamUtils").getFinishedBuffers(e, t);
        });
    }
    var v = 64,
      S = function (t, n) {
        var e =
            (n == null ? void 0 : n.maxRedeemCount) != null &&
            n.maxRedeemCount !== 0
              ? n.maxRedeemCount
              : v,
          r =
            (n == null ? void 0 : n.maxExpirySeconds) != null &&
            n.maxExpirySeconds !== 0
              ? n.maxExpirySeconds
              : o("WATimeUtils").DAY_SECONDS,
          a = { maxRedeemCount: e, maxExpirySeconds: r };
        return o("WATimeUtils").happenedWithin(t.creationTs, a.maxExpirySeconds)
          ? t.redeemCount >= a.maxRedeemCount
            ? (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "The private stats token was redeemed maximum number of time. The client shall re-issue a new one",
                  ])),
              ),
              !1)
            : !0
          : (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "The private stats token expired. The client shall re-issue a new one",
                ])),
            ),
            !1);
      };
    function R() {
      var e = g("getPrivateStatsToken");
      if (!e.redeemPrivateStatsToken)
        throw r("err")("redeemPrivateStatsToken not implemented for WAM DB");
      return e.redeemPrivateStatsToken(S);
    }
    function L(e) {
      var t = g("savePrivateStatsToken");
      if (!t.savePrivateStatsToken)
        throw r("err")("savePrivateStatsToken not implemented for WAM DB");
      return t.savePrivateStatsToken(e);
    }
    function E() {
      var e = g("privateStatsKillSwitchGetBlockedToken");
      if (!e.privateStatsKillSwitchGetBlockedToken)
        throw r("err")(
          "privateStatsKillSwitchGetBlockedToken not implemented for WAM DB",
        );
      return e.privateStatsKillSwitchGetBlockedToken();
    }
    function k(e) {
      var t = g("privateStatsKillSwitchSet");
      if (!t.privateStatsKillSwitchSet)
        throw r("err")("privateStatsKillSwitchSet not implemented for WAM DB");
      return t.privateStatsKillSwitchSet(e);
    }
    function I(e) {
      return g("removeBufferByKey").removeBufferByKey(e);
    }
    function T() {
      return g("nukeMetrics").nukeMetrics();
    }
    ((l.startWamStorage = h),
      (l.closeWamStorage = y),
      (l.initializeWAMSink = C),
      (l.getFinishedStreamBuffers = b),
      (l.redeemPrivateStatsToken = R),
      (l.savePrivateStatsToken = L),
      (l.privateStatsKillSwitchGetBlockedToken = E),
      (l.privateStatsKillSwitchSet = k),
      (l.removeBufferByKey = I),
      (l.nukeMetrics = T));
  },
  98,
);
