__d(
  "WAWebOfflineResumeRcodChunkFinder",
  [
    "WACryptoPkcs7",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendJobs.flow",
    "WAWebCryptoLibrary",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes",
    "WAWebProtobufsE2E.pb",
    "WAWebSessionScope",
    "WAWebUserUtils",
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1e3,
      c = 10,
      d = 100,
      m = 3600,
      p = 500,
      _ = (function () {
        function t() {
          ((this.$1 = !1),
            (this.$2 = null),
            (this.$3 = 0),
            (this.$4 = function () {
              return !1;
            }),
            (this.$5 = []),
            (this.$6 = 0),
            (this.$7 = 0),
            (this.$8 = !1),
            (this.$9 = !1),
            (this.$10 = 0));
        }
        var n = t.prototype;
        return (
          (n.start = function (t) {
            ((this.$3 += 1),
              (this.$4 = t),
              (this.$1 = !0),
              (this.$2 = null),
              (this.$5 = []),
              (this.$7 = 0),
              (this.$9 = !1));
          }),
          (n.stop = function () {
            ((this.$1 = !1), (this.$5 = []));
          }),
          (n.isSearching = function () {
            return this.$1;
          }),
          (n.getChosenChunk = function () {
            return this.$2;
          }),
          (n.check = function (t, n) {
            this.$11(n) &&
              h(t) &&
              ((this.$6 += 1), this.$12(t, this.$6).catch(g));
          }),
          (n.onMessageProcessed = function (t) {
            (this.$5.length === 0 && !this.$8) ||
              ((this.$7 += 1),
              (this.$10 = t),
              (this.$7 >= d || t < p + d) && this.$13());
          }),
          (n.$13 = function () {
            this.$8
              ? (this.$9 = !0)
              : this.$5.length > 0 &&
                this.$11(this.$10) &&
                ((this.$7 = 0), this.$14().catch(g));
          }),
          (n.$11 = function (t) {
            return this.$15() && t >= p;
          }),
          (n.$15 = function () {
            return this.$1 && this.$2 == null && this.$4();
          }),
          (n.$14 = async function () {
            var e = this;
            this.$8 = !0;
            var t = this.$5;
            this.$5 = [];
            try {
              await Promise.all(
                t.map(function (t) {
                  var n = t.arrival,
                    r = t.candidate;
                  return e.$12(r, n);
                }),
              );
            } finally {
              this.$8 = !1;
            }
            this.$9 && ((this.$9 = !1), this.$13());
          }),
          (n.$12 = async function (t, n) {
            var e = this.$3,
              r = await f(t);
            e !== this.$3 ||
              !this.$15() ||
              (r.success
                ? this.$16(t, r.value)
                : r.error === "errCounterTooFarAhead" &&
                  this.$17({ arrival: n, candidate: t }));
          }),
          (n.$16 = function (n, r) {
            var t = n.msgInfo;
            C(r, t.ts) &&
              ((this.$2 = { externalId: t.externalId, timestamp: t.ts }),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][rcod] chose the RCOD chunk ",
                    "",
                  ])),
                t.externalId,
              ));
          }),
          (n.$17 = function (t) {
            (this.$5.push(t),
              this.$5.sort(function (e, t) {
                return e.arrival - t.arrival;
              }),
              this.$5.length > c && this.$5.shift());
          }),
          t
        );
      })();
    function f(e) {
      var t = e.encs,
        n = t[0],
        r = e.msgInfo;
      return o("WAWebCryptoLibrary").decryptSignalMsgWithoutSaving(
        r.author,
        n.ciphertext,
        n.sessionType === "pq" ? o("WAWebSessionScope").SessionScope.PQ : null,
        u,
      );
    }
    function g(e) {
      o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[offline-resume][rcod] the RCOD chunk check failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("offline-resume-rcod-chunk-check", { sampling: 0.01 });
    }
    function h(e) {
      var t = e.encs,
        n = e.msgInfo;
      return (
        n.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT &&
        n.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
        y(n.author) &&
        t.length === 1 &&
        t[0].e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msg
      );
    }
    function y(e) {
      var t;
      return (
        ((t = e.device) != null ? t : 0) === 0 &&
        o("WAWebUserUtils")
          .getMeDeviceWids()
          .some(function (t) {
            return t.user === e.user && t.server === e.server;
          })
      );
    }
    function C(e, t) {
      var n, r;
      try {
        r = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(e)),
        );
      } catch (e) {
        return !1;
      }
      return (
        ((n = r.protocolMessage) == null ||
        (n = n.historySyncNotification) == null
          ? void 0
          : n.syncType) ===
          o("WAWebProtobufsE2E.pb").Message$HistorySyncType
            .RECENT_CONVERSATIONS_ON_DEMAND &&
        o("WATimeUtils").unixTime() - t <= m
      );
    }
    ((l.MIN_OFFLINE_MESSAGES_LEFT = p), (l.RcodChunkFinder = _));
  },
  98,
);
