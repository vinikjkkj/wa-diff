__d(
  "WAWebPtvForwardToStatusAction",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebDownloadVideoThumbnail",
    "WAWebLazyLoadedRetriable",
    "WAWebLogStatusPost",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebMediaOpaqueData",
    "WAWebMsgType",
    "WAWebNewsletterShareToStatusToast",
    "WAWebNewsletterStatusCardPalette",
    "WAWebPrepRawMedia",
    "WAWebPromiseQueue",
    "WAWebPtvStatusCard",
    "WAWebPtvStatusEligibility",
    "WAWebSendMsgResultAction",
    "WAWebWamEnumStatusPostOrigin",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 1e3,
      p = 6e4,
      _ = new (o("WAWebPromiseQueue").PromiseQueue)(),
      f = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebNewsletterStatusCardVideoEncoder",
        )
          .__setRef("WAWebPtvForwardToStatusAction")
          .load();
      }, "PtvStatusCardVideoEncoder");
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.caption,
            r = t.msg,
            a = t.retryCount,
            i = t.statusChat;
          if (!o("WAWebPtvStatusEligibility").canPostOwnPtvAsStatus(r)) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ptv-status] the video note can no longer go to status",
                  ])),
              )
              .sendLogs("ptv-status-not-eligible"),
              o(
                "WAWebNewsletterShareToStatusToast",
              ).showShareToStatusFailedToast());
            return;
          }
          var l = yield _.enqueue(function () {
            return y(r);
          });
          if (l == null) {
            o(
              "WAWebNewsletterShareToStatusToast",
            ).showShareToStatusFailedToast();
            return;
          }
          var s = yield b(l, n, i),
            u = s == null ? void 0 : s.messageSendResult;
          (u !== o("WAWebSendMsgResultAction").SendMsgResult.OK &&
            u !== o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED &&
            o(
              "WAWebNewsletterShareToStatusToast",
            ).showShareToStatusFailedToast(),
            o("WAWebLogStatusPost").logStatusPost({
              statusPostResult: o("WAWebLogStatusPost").getStatusPostResult(u),
              msg: s == null ? void 0 : s.msg,
              statusPostOrigin: o("WAWebWamEnumStatusPostOrigin")
                .STATUS_POST_ORIGIN.FORWARD_FROM_MESSAGES,
              mediaType: o("WAWebLogStatusPost").getStatusMediaType(
                o("WAWebMsgType").MSG_TYPE.VIDEO,
              ),
              hasCaption: !!n,
              hasFilters: !1,
              retryCount: a,
              statusContainsMusic: !1,
            }));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebNewsletterShareToStatusToast",
          ).showPreparingStatusToast();
          try {
            var n = yield S(e),
              a = o("WAWebPrepRawMedia").prepRawMedia(
                yield r("WAWebMediaOpaqueData").createFromData(n, n.type),
                {},
              ),
              i = yield a.waitForPrep();
            if (i.type !== o("WAWebMsgType").MSG_TYPE.VIDEO)
              throw r("err")(
                "forwardOwnPtvToStatus: the card was not prepared as a video",
              );
            return a;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[ptv-status] could not make the video note into a status card video",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("ptv-status-card-video-failed"),
              null
            );
          } finally {
            t();
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            return yield e.sendToChat({
              chat: n,
              options: { caption: t, type: o("WAWebMsgType").MSG_TYPE.VIDEO },
            });
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[ptv-status] could not post the video note card as a status",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("ptv-status-post-failed"),
              null
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAPromiseTimeout").promiseTimeout(
              (d || (d = n("Promise"))).all([E(e), T(e), f()]),
              p,
              "forwardOwnPtvToStatus: the video note did not load in time",
            ),
            r = t[0],
            a = t[1],
            i = t[2];
          return i({
            maxDurationMs: L(e),
            scene: o("WAWebPtvStatusCard").getPtvStatusCardScene(
              a,
              o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn),
            ),
            video: r,
          });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t,
        n,
        r = o("WAWebABProps").getABPropConfigValue(
          "status_video_max_duration_second",
        ),
        a = Math.floor(
          parseFloat(
            (t = (n = e.mediaData) == null ? void 0 : n.duration) != null
              ? t
              : "",
          ),
        ),
        i = a >= 1 && a <= r ? a + 1 : r;
      return i * m;
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          ((t = e.mediaData) == null ? void 0 : t.mediaBlob) == null &&
            (yield e.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .SEND_TO_CHAT,
              isUserInitiated: !0,
            }));
          var n = I(e);
          if (n == null)
            throw r("err")(
              "forwardOwnPtvToStatus: the video note has no media",
            );
          return n;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      var t,
        n,
        a = (t = e.mediaData) == null ? void 0 : t.mediaBlob;
      if (a instanceof r("WAWebMediaOpaqueData")) return a.forceToBlob();
      if (a instanceof Blob) return a;
      var i = (n = e.mediaData) == null ? void 0 : n.filehash;
      return i != null
        ? o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(i)
        : null;
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield x(e),
              n =
                t != null
                  ? o("WAWebPtvStatusCard").getNoteColor(yield P(t))
                  : null;
            return n != null
              ? n
              : o("WAWebNewsletterStatusCardPalette").FALLBACK_CARD_COLOR;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[ptv-status] drawing the card on the default background, as the video note's colours could not be read",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              o("WAWebNewsletterStatusCardPalette").FALLBACK_CARD_COLOR
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i = e.safe();
          i.type === o("WAWebMsgType").MSG_TYPE.PTV &&
            (yield o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
              msg: i,
            }));
          var l =
            (t = (n = e.mediaData) == null ? void 0 : n.fullPreviewData) != null
              ? t
              : (a = e.mediaData) == null
                ? void 0
                : a.preview;
          return typeof l == "string"
            ? (yield r("WAWebMediaOpaqueData").createFromBase64Preview(
                l,
              )).forceToBlob()
            : l == null
              ? void 0
              : l.forceToBlob();
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = URL.createObjectURL(e);
          try {
            var n = yield o("WAWebMediaLoad").loadImage(t);
            return {
              source: n,
              width: n.naturalWidth,
              height: n.naturalHeight,
            };
          } finally {
            URL.revokeObjectURL(t);
          }
        })),
        N.apply(this, arguments)
      );
    }
    l.forwardOwnPtvToStatus = g;
  },
  98,
);
