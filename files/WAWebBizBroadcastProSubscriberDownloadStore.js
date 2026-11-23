__d(
  "WAWebBizBroadcastProSubscriberDownloadStore",
  [
    "WALogger",
    "WAPromiseBackoffs",
    "WAWebBizBroadcastProSubscriberCSVDownload",
    "WAWebBizBroadcastProSubscriberDownloadMutation",
    "WAWebBizBroadcastProSubscriberDownloadRegistry",
    "WAWebBizBroadcastProSubscriberDownloadStatusQuery",
    "WAWebBizBroadcastProSubscriberDownloadToast",
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
    async function x(t, n, a) {
      if (
        !o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).hasPreparingDownload()
      ) {
        (N(),
          o(
            "WAWebBizBroadcastProSubscriberDownloadRegistry",
          ).removeSettledDownloads(),
          D++);
        var i = "" + _ + D;
        (o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).putSubscriberDownload({
          cdnUrl: null,
          completionPercentage: 0,
          exportId: null,
          filename: null,
          key: i,
          poolName: a,
          status: "preparing",
        }),
          o(
            "WAWebBizBroadcastProSubscriberDownloadToast",
          ).showSubscriberDownloadToast(i));
        try {
          var l = await o(
            "WAWebBizBroadcastProSubscriberDownloadMutation",
          ).startSubscriberDownload(t, n);
          o(
            "WAWebBizBroadcastProSubscriberDownloadRegistry",
          ).patchSubscriberDownload(i, {
            completionPercentage: l.completionPercentage,
            exportId: l.exportId,
            filename: l.filename,
          });
        } catch (t) {
          (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to start BB Pro subscriber download",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("bb-pro-subscriber-download-start-failed"),
            o(
              "WAWebBizBroadcastProSubscriberDownloadRegistry",
            ).patchSubscriberDownload(i, { status: "failed" }));
        }
      }
    }
    function $(e) {
      var t = k.get(e);
      if (t != null) return t;
      var n = P(e).finally(function () {
        k.get(e) === n && k.delete(e);
      });
      return (k.set(e, n), n);
    }
    async function P(e) {
      var t = o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).getSubscriberDownload(e),
        n = t == null ? void 0 : t.cdnUrl;
      if (t == null || n == null) return !1;
      try {
        return (
          await o(
            "WAWebBizBroadcastProSubscriberCSVDownload",
          ).saveSubscriberCSV(n, t.filename),
          !0
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to save BB Pro subscriber CSV",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("bb-pro-subscriber-download-save-failed"),
          !1
        );
      }
    }
    function N() {
      T ||
        ((T = !0),
        o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).SubscriberDownloadEmitter.on(
          o("WAWebBizBroadcastProSubscriberDownloadRegistry")
            .SUBSCRIBER_DOWNLOADS_CHANGED,
          M,
        ));
    }
    function M() {
      (w(), A());
    }
    function w() {
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
    function A() {
      var e = o("WAWebBizBroadcastProSubscriberDownloadRegistry")
        .getSubscriberDownloads()
        .some(F);
      if (e && I == null) {
        I = window.setInterval(O, p);
        return;
      }
      !e && I != null && (window.clearInterval(I), (I = null));
    }
    function F(e) {
      return e.status === "preparing" && e.exportId != null;
    }
    function O() {
      for (var e of o(
        "WAWebBizBroadcastProSubscriberDownloadRegistry",
      ).getSubscriberDownloads())
        F(e) && !B(e.key) && W(e);
    }
    function B(e) {
      var t = R.get(e);
      return t != null && Date.now() < t;
    }
    async function W(e) {
      var t = e.exportId;
      if (t != null) {
        var n = q(e.key);
        if (n != null)
          try {
            var r = await o(
              "WAWebBizBroadcastProSubscriberDownloadStatusQuery",
            ).fetchSubscriberDownloadStatus(t);
            if (!H(e.key)) return;
            (G(e.key, r), H(e.key) && V(e.key) && z(e.key));
          } catch (t) {
            if (!H(e.key) || !U(e.key, n)) return;
            j(e.key, t);
          } finally {
            U(e.key, n) && E.delete(e.key);
          }
      }
    }
    function q(e) {
      L.has(e) || L.set(e, Date.now() + y);
      var t = E.get(e);
      if (t != null)
        return (
          V(e) && Date.now() - t.startedAt > p && (E.delete(e), Q(e) && z(e)),
          null
        );
      var n = { startedAt: Date.now() };
      return (E.set(e, n), n);
    }
    function U(e, t) {
      return E.get(e) === t;
    }
    function V(e) {
      var t = L.get(e);
      return t != null && Date.now() > t;
    }
    function H(e) {
      var t;
      return (
        ((t = o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).getSubscriberDownload(e)) == null
          ? void 0
          : t.status) === "preparing"
      );
    }
    function G(e, t) {
      if (
        (R.delete(e), b.delete(e), S.delete(e), t.exportStatus === "FAILED")
      ) {
        X(e, t.errorMsg);
        return;
      }
      v.delete(e);
      var n = ee(e, t);
      (n.status != null && n.status !== "preparing" && Z(e),
        o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).patchSubscriberDownload(e, n));
    }
    function z(e) {
      (o("WALogger")
        .ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Giving up on BB Pro subscriber download after the poll deadline",
            ])),
        )
        .sendLogs("bb-pro-subscriber-download-poll-timeout"),
        J(e));
    }
    function j(e, t) {
      K(e) &&
        (o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Giving up on BB Pro subscriber download still unreachable past the poll deadline",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("bb-pro-subscriber-download-poll-failed"),
        J(e));
    }
    function K(e) {
      if (V(e) && Q(e)) return !0;
      var t = Y(b, e);
      return (R.set(e, Date.now() + o("WAPromiseBackoffs").getDelay(t, h)), !1);
    }
    function Q(e) {
      var t = S.get(e);
      return t == null ? (S.set(e, Date.now() + C), !1) : Date.now() >= t;
    }
    function X(e, t) {
      var n = Y(v, e);
      n < f ||
        (o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "BB Pro subscriber export failed: ",
                "",
              ])),
            t != null ? t : "no reason reported",
          )
          .sendLogs("bb-pro-subscriber-download-export-failed"),
        J(e));
    }
    function Y(e, t) {
      var n,
        r = ((n = e.get(t)) != null ? n : 0) + 1;
      return (e.set(t, r), r);
    }
    function J(e) {
      (Z(e),
        o(
          "WAWebBizBroadcastProSubscriberDownloadRegistry",
        ).patchSubscriberDownload(e, { status: "failed" }));
    }
    function Z(e) {
      (b.delete(e),
        v.delete(e),
        S.delete(e),
        R.delete(e),
        L.delete(e),
        E.delete(e),
        k.delete(e));
    }
    function ee(e, t) {
      e: {
        if (t.exportStatus === "FINISHED") {
          var n = t.cdnUrl;
          return n == null || n === ""
            ? (o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.MAX_POLL_DURATION_MS = y),
      (l.beginSubscriberDownload = x),
      (l.saveSubscriberDownload = $));
  },
  98,
);
