__d(
  "WAWebBizBroadcastProAudienceSegmentBridge",
  [
    "JSResourceForInteraction",
    "WAAbortError",
    "WAPromiseTimeout",
    "WAWebABPropsCache",
    "WAWebBackendWorkerClient",
    "WAWebDbEncryptionKey",
    "WAWebModelStorage",
    "WAWebUA",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 115,
      s = 3e3,
      u = 6e4,
      c = r("JSResourceForInteraction")(
        "WAWebBizBroadcastProAudienceSegmentWorker",
      ).__setRef("WAWebBizBroadcastProAudienceSegmentBridge");
    async function d(e) {
      var t;
      if (C()) {
        var n = await f();
        t = n.resolveProAudienceSegment(e);
      } else {
        var r = await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
          s,
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
        u,
        "[bb-pro] audience segment request timed out",
      );
    }
    async function m(e) {
      var t = { candidateLids: e },
        n;
      if (C()) {
        var r = await f();
        n = r.queryProAudienceActivityMetadata(t.candidateLids);
      } else {
        var a = await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
          s,
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
        u,
        "[bb-pro] audience activity request timed out",
      );
    }
    async function p(e) {
      var t;
      if (C()) {
        var n = await f();
        t = n.queryProChatListCatalog(e);
      } else {
        var r = await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
          s,
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
        u,
        "[bb-pro] chat list catalog request timed out",
      );
    }
    async function _(e) {
      var t;
      if (C()) {
        var n = await f();
        t = n.queryProChatListAudience(e);
      } else {
        var r = await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
          s,
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
        u,
        "[bb-pro] chat list audience request timed out",
      );
    }
    async function f() {
      var e = y();
      if (e == null) throw new (o("WAAbortError").AbortError)();
      var t = !0;
      try {
        var n = await o("WAPromiseTimeout").promiseTimeout(
            Promise.all([
              g(e, function () {
                return t;
              }),
              c.load(),
            ]),
            s,
            "[bb-pro] audience worker startup timed out",
          ),
          r = n[1];
        return (h(e), r);
      } finally {
        t = !1;
      }
    }
    async function g(e, t) {
      if (
        (await Promise.all([
          o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey(),
          o("WAWebABPropsCache").waitForABPropConfigsReady(),
        ]),
        !t())
      )
        throw new (o("WAAbortError").AbortError)();
      (h(e), await o("WAWebModelStorage").initialize());
    }
    function h(e) {
      if (e !== y()) throw new (o("WAAbortError").AbortError)();
    }
    function y() {
      var e, t;
      return (e =
        (t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1)) != null
          ? t
          : o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()) == null
        ? void 0
        : e.toString();
    }
    function C() {
      return (
        o("WAWebUA").UA.isFirefox &&
        parseInt(o("WAWebUA").UA.browserVersion.split(".")[0], 10) <= e
      );
    }
    ((l.queryProAudienceSegment = d),
      (l.queryProAudienceActivityMetadata = m),
      (l.queryProChatListCatalog = p),
      (l.queryProChatListAudience = _));
  },
  98,
);
