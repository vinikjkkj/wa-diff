__d(
  "WAWebBizBroadcastProSubscriberDownloadStore",
  [
    "WALogger",
    "WAWebBizBroadcastProSubscriberCSVDownload",
    "WAWebBizBroadcastProSubscriberDownloadMutation",
    "WAWebBizBroadcastProSubscriberDownloadRegistry",
    "WAWebBizBroadcastProSubscriberDownloadStatusQuery",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 5e3,
      _ = "download:",
      f = 3,
      g = 1800 * 1e3,
      h = new Map(),
      y = new Map(),
      C = new Map(),
      b = new Map(),
      v = null,
      S = !1,
      R = 0;
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            !o(
              "WAWebBizBroadcastProSubscriberDownloadRegistry",
            ).hasPreparingDownload()
          ) {
            (D(),
              o(
                "WAWebBizBroadcastProSubscriberDownloadRegistry",
              ).removeSettledDownloads(),
              R++);
            var a = "" + _ + R;
            o(
              "WAWebBizBroadcastProSubscriberDownloadRegistry",
            ).putSubscriberDownload({
              cdnUrl: null,
              completionPercentage: 0,
              exportId: null,
              filename: null,
              key: a,
              poolName: n,
              status: "preparing",
            });
            try {
              var i = yield o(
                "WAWebBizBroadcastProSubscriberDownloadMutation",
              ).startSubscriberDownload(e, t);
              o(
                "WAWebBizBroadcastProSubscriberDownloadRegistry",
              ).patchSubscriberDownload(a, {
                completionPercentage: i.completionPercentage,
                exportId: i.exportId,
                filename: i.filename,
              });
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to start BB Pro subscriber download",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bb-pro-subscriber-download-start-failed"),
                o(
                  "WAWebBizBroadcastProSubscriberDownloadRegistry",
                ).patchSubscriberDownload(a, { status: "failed" }));
            }
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = b.get(e);
      if (t != null) return t;
      var n = I(e).finally(function () {
        b.get(e) === n && b.delete(e);
      });
      return (b.set(e, n), n);
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WAWebBizBroadcastProSubscriberDownloadRegistry",
            ).getSubscriberDownload(e),
            n = t == null ? void 0 : t.cdnUrl;
          if (t == null || n == null) return !1;
          try {
            return (
              yield o(
                "WAWebBizBroadcastProSubscriberCSVDownload",
              ).saveSubscriberCSV(n, t.filename),
              !0
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to save BB Pro subscriber CSV",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bb-pro-subscriber-download-save-failed"),
              !1
            );
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      S ||
        ((S = !0),
        o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).SubscriberDownloadEmitter.on(
          o("WAWebBizBroadcastProSubscriberDownloadRegistry")
            .SUBSCRIBER_DOWNLOADS_CHANGED,
          x,
        ));
    }
    function x() {
      ($(), P());
    }
    function $() {
      var e = new Set(
        o("WAWebBizBroadcastProSubscriberDownloadRegistry")
          .getSubscriberDownloads()
          .map(function (e) {
            return e.key;
          }),
      );
      for (var t of [h, C, y, b])
        for (var n of t.keys()) e.has(n) || t.delete(n);
    }
    function P() {
      var e = o("WAWebBizBroadcastProSubscriberDownloadRegistry")
        .getSubscriberDownloads()
        .some(N);
      if (e && v == null) {
        v = window.setInterval(M, p);
        return;
      }
      !e && v != null && (window.clearInterval(v), (v = null));
    }
    function N(e) {
      return e.status === "preparing" && e.exportId != null;
    }
    function M() {
      for (var e of o(
        "WAWebBizBroadcastProSubscriberDownloadRegistry",
      ).getSubscriberDownloads())
        N(e) && w(e);
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.exportId;
          if (t != null) {
            var n = F(e.key);
            if (n != null) {
              var r = n.pastDeadline;
              try {
                var a = yield o(
                  "WAWebBizBroadcastProSubscriberDownloadStatusQuery",
                ).fetchSubscriberDownloadStatus(t);
                if (!O(e.key)) return;
                (B(e.key, a), r && O(e.key) && W(e.key));
              } catch (t) {
                if (!O(e.key)) return;
                q(e.key, t);
              } finally {
                C.delete(e.key);
              }
            }
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      var t,
        n = (t = y.get(e)) != null ? t : Date.now() + g;
      y.set(e, n);
      var r = Date.now() > n,
        o = C.get(e);
      return o != null
        ? (r && Date.now() - o > p && W(e), null)
        : (C.set(e, Date.now()), { pastDeadline: r });
    }
    function O(e) {
      var t;
      return (
        ((t = o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).getSubscriberDownload(e)) == null
          ? void 0
          : t.status) === "preparing"
      );
    }
    function B(e, t) {
      if (t.exportStatus === "FAILED") {
        U(e, t.errorMsg);
        return;
      }
      h.set(e, 0);
      var n = z(e, t);
      (n.status != null && n.status !== "preparing" && G(e),
        o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).patchSubscriberDownload(e, n));
    }
    function W(t) {
      (o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Giving up on BB Pro subscriber download after the poll deadline",
            ])),
        )
        .sendLogs("bb-pro-subscriber-download-poll-timeout"),
        H(t));
    }
    function q(e, t) {
      var n = V(e);
      n < f ||
        (o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Giving up on BB Pro subscriber download after repeated poll failures",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("bb-pro-subscriber-download-poll-failed"),
        H(e));
    }
    function U(e, t) {
      var n = V(e);
      n < f ||
        (o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "BB Pro subscriber export failed: ",
                "",
              ])),
            t != null ? t : "no reason reported",
          )
          .sendLogs("bb-pro-subscriber-download-export-failed"),
        H(e));
    }
    function V(e) {
      var t,
        n = ((t = h.get(e)) != null ? t : 0) + 1;
      return (h.set(e, n), n);
    }
    function H(e) {
      (G(e),
        o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).patchSubscriberDownload(e, { status: "failed" }));
    }
    function G(e) {
      (h.delete(e), y.delete(e), C.delete(e), b.delete(e));
    }
    function z(e, t) {
      e: {
        if (t.exportStatus === "FINISHED") {
          var n = t.cdnUrl;
          return n == null || n === ""
            ? (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "BB Pro subscriber export finished without a CDN url",
                    ])),
                )
                .sendLogs("bb-pro-subscriber-download-missing-cdn-url"),
              { status: "failed" })
            : {
                cdnUrl: n,
                completionPercentage: o(
                  "WAWebBizBroadcastProSubscriberDownloadRegistry",
                ).COMPLETE_PERCENTAGE,
                filename: t.filename,
                status: "ready",
              };
        }
        return {
          completionPercentage: o(
            "WAWebBizBroadcastProSubscriberDownloadRegistry",
          ).clampProgress(e, t.completionPercentage),
        };
      }
    }
    ((l.beginSubscriberDownload = L), (l.saveSubscriberDownload = k));
  },
  98,
);
