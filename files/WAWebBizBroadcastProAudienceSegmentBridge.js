__d(
  "WAWebBizBroadcastProAudienceSegmentBridge",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAAbortError",
    "WAPromiseTimeout",
    "WAWebABPropsCache",
    "WAWebBackendWorkerClient",
    "WAWebDbEncryptionKey",
    "WAWebModelStorage",
    "WAWebUA",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 115,
      u = 3e3,
      c = 6e4,
      d = r("JSResourceForInteraction")(
        "WAWebBizBroadcastProAudienceSegmentWorker",
      ).__setRef("WAWebBizBroadcastProAudienceSegmentBridge");
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (k()) {
            var n = yield b();
            t = n.resolveProAudienceSegment(e);
          } else {
            var r = yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
              u,
              "[bb-pro] audience worker startup timed out",
            );
            t = r.sendAndReceive(
              "businessBroadcastProAudience",
              "resolveSegment",
              e,
            );
          }
          return o("WAPromiseTimeout").promiseTimeout(
            t,
            c,
            "[bb-pro] audience segment request timed out",
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = { candidateLids: e },
            n;
          if (k()) {
            var r = yield b();
            n = r.queryProAudienceActivityMetadata(t.candidateLids);
          } else {
            var a = yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
              u,
              "[bb-pro] audience worker startup timed out",
            );
            n = a.sendAndReceive(
              "businessBroadcastProAudience",
              "queryActivityMetadata",
              t,
            );
          }
          return o("WAPromiseTimeout").promiseTimeout(
            n,
            c,
            "[bb-pro] audience activity request timed out",
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (k()) {
            var n = yield b();
            t = n.queryProChatListCatalog(e);
          } else {
            var r = yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
              u,
              "[bb-pro] audience worker startup timed out",
            );
            t = r.sendAndReceive(
              "businessBroadcastProAudience",
              "queryChatListCatalog",
              e,
            );
          }
          return o("WAPromiseTimeout").promiseTimeout(
            t,
            c,
            "[bb-pro] chat list catalog request timed out",
          );
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
          var t;
          if (k()) {
            var n = yield b();
            t = n.queryProChatListAudience(e);
          } else {
            var r = yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
              u,
              "[bb-pro] audience worker startup timed out",
            );
            t = r.sendAndReceive(
              "businessBroadcastProAudience",
              "queryChatListAudience",
              e,
            );
          }
          return o("WAPromiseTimeout").promiseTimeout(
            t,
            c,
            "[bb-pro] chat list audience request timed out",
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = E();
          if (t == null) throw new (o("WAAbortError").AbortError)();
          var r = !0;
          try {
            var a = yield o("WAPromiseTimeout").promiseTimeout(
                (e || (e = n("Promise"))).all([
                  S(t, function () {
                    return r;
                  }),
                  d.load(),
                ]),
                u,
                "[bb-pro] audience worker startup timed out",
              ),
              i = a[1];
            return (L(t), i);
          } finally {
            r = !1;
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          if (
            (yield (e || (e = n("Promise"))).all([
              o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey(),
              o("WAWebABPropsCache").waitForABPropConfigsReady(),
            ]),
            !r())
          )
            throw new (o("WAAbortError").AbortError)();
          (L(t), yield o("WAWebModelStorage").initialize());
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      if (e !== E()) throw new (o("WAAbortError").AbortError)();
    }
    function E() {
      var e, t;
      return (e =
        (t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1)) != null
          ? t
          : o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()) == null
        ? void 0
        : e.toString();
    }
    function k() {
      return (
        o("WAWebUA").UA.isFirefox &&
        parseInt(o("WAWebUA").UA.browserVersion.split(".")[0], 10) <= s
      );
    }
    ((l.queryProAudienceSegment = m),
      (l.queryProAudienceActivityMetadata = _),
      (l.queryProChatListCatalog = g),
      (l.queryProChatListAudience = y));
  },
  98,
);
