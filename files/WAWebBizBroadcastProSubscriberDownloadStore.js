__d(
  "WAWebBizBroadcastProSubscriberDownloadStore",
  [
    "WALogger",
    "WAPromiseBackoffs",
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
      g = 6e4,
      h = { algo: { first: p * 2, type: "exponential" }, max: g },
      y = 1800 * 1e3,
      C = 120 * 1e3,
      b = new Map(),
      v = new Map(),
      S = new Map(),
      R = new Map(),
      L = new Map(),
      E = new Map(),
      k = new Map(),
      I = null,
      T = !1,
      D = 0;
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            !o(
              "WAWebBizBroadcastProSubscriberDownloadRegistry",
            ).hasPreparingDownload()
          ) {
            (w(),
              o(
                "WAWebBizBroadcastProSubscriberDownloadRegistry",
              ).removeSettledDownloads(),
              D++);
            var a = "" + _ + D;
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      var t = k.get(e);
      if (t != null) return t;
      var n = N(e).finally(function () {
        k.get(e) === n && k.delete(e);
      });
      return (k.set(e, n), n);
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        M.apply(this, arguments)
      );
    }
    function w() {
      T ||
        ((T = !0),
        o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).SubscriberDownloadEmitter.on(
          o("WAWebBizBroadcastProSubscriberDownloadRegistry")
            .SUBSCRIBER_DOWNLOADS_CHANGED,
          A,
        ));
    }
    function A() {
      (F(), O());
    }
    function F() {
      var e = new Set(
        o("WAWebBizBroadcastProSubscriberDownloadRegistry")
          .getSubscriberDownloads()
          .map(function (e) {
            return e.key;
          }),
      );
      for (var t of [R, v, b, E, L, S, k])
        for (var n of t.keys()) e.has(n) || t.delete(n);
    }
    function O() {
      var e = o("WAWebBizBroadcastProSubscriberDownloadRegistry")
        .getSubscriberDownloads()
        .some(B);
      if (e && I == null) {
        I = window.setInterval(W, p);
        return;
      }
      !e && I != null && (window.clearInterval(I), (I = null));
    }
    function B(e) {
      return e.status === "preparing" && e.exportId != null;
    }
    function W() {
      for (var e of o(
        "WAWebBizBroadcastProSubscriberDownloadRegistry",
      ).getSubscriberDownloads())
        B(e) && !q(e.key) && U(e);
    }
    function q(e) {
      var t = R.get(e);
      return t != null && Date.now() < t;
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.exportId;
          if (t != null) {
            var n = H(e.key);
            if (n != null)
              try {
                var r = yield o(
                  "WAWebBizBroadcastProSubscriberDownloadStatusQuery",
                ).fetchSubscriberDownloadStatus(t);
                if (!j(e.key)) return;
                (K(e.key, r), j(e.key) && z(e.key) && Q(e.key));
              } catch (t) {
                if (!j(e.key) || !G(e.key, n)) return;
                X(e.key, t);
              } finally {
                G(e.key, n) && E.delete(e.key);
              }
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      L.has(e) || L.set(e, Date.now() + y);
      var t = E.get(e);
      if (t != null)
        return (
          z(e) && Date.now() - t.startedAt > p && (E.delete(e), J(e) && Q(e)),
          null
        );
      var n = { startedAt: Date.now() };
      return (E.set(e, n), n);
    }
    function G(e, t) {
      return E.get(e) === t;
    }
    function z(e) {
      var t = L.get(e);
      return t != null && Date.now() > t;
    }
    function j(e) {
      var t;
      return (
        ((t = o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).getSubscriberDownload(e)) == null
          ? void 0
          : t.status) === "preparing"
      );
    }
    function K(e, t) {
      if (
        (R.delete(e), b.delete(e), S.delete(e), t.exportStatus === "FAILED")
      ) {
        Z(e, t.errorMsg);
        return;
      }
      v.delete(e);
      var n = re(e, t);
      (n.status != null && n.status !== "preparing" && ne(e),
        o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).patchSubscriberDownload(e, n));
    }
    function Q(t) {
      (o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Giving up on BB Pro subscriber download after the poll deadline",
            ])),
        )
        .sendLogs("bb-pro-subscriber-download-poll-timeout"),
        te(t));
    }
    function X(e, t) {
      Y(e) &&
        (o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Giving up on BB Pro subscriber download still unreachable past the poll deadline",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("bb-pro-subscriber-download-poll-failed"),
        te(e));
    }
    function Y(e) {
      if (z(e) && J(e)) return !0;
      var t = ee(b, e);
      return (R.set(e, Date.now() + o("WAPromiseBackoffs").getDelay(t, h)), !1);
    }
    function J(e) {
      var t = S.get(e);
      return t == null ? (S.set(e, Date.now() + C), !1) : Date.now() >= t;
    }
    function Z(e, t) {
      var n = ee(v, e);
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
        te(e));
    }
    function ee(e, t) {
      var n,
        r = ((n = e.get(t)) != null ? n : 0) + 1;
      return (e.set(t, r), r);
    }
    function te(e) {
      (ne(e),
        o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).patchSubscriberDownload(e, { status: "failed" }));
    }
    function ne(e) {
      (b.delete(e),
        v.delete(e),
        S.delete(e),
        R.delete(e),
        L.delete(e),
        E.delete(e),
        k.delete(e));
    }
    function re(e, t) {
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
    ((l.beginSubscriberDownload = x), (l.saveSubscriberDownload = P));
  },
  98,
);
