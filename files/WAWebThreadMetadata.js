__d(
  "WAWebThreadMetadata",
  ["WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      ((e = t),
        o("WAWebBackendApi").frontendFireAndForget("updateChatPreviewT", {
          threadMeta: t.chatTimestamp,
        }));
    }
    function u() {
      return e;
    }
    function c(t) {
      var n, r;
      return (n =
        (r = e) == null || (r = r.watermarks) == null ? void 0 : r.get(t)) !=
        null
        ? n
        : null;
    }
    function d() {
      var t,
        n = (t = e) == null ? void 0 : t.chatTimestamp;
      (n != null &&
        o("WAWebBackendApi").frontendFireAndForget("resetChatPreviewT", {
          chatIds: Object.keys(n),
        }),
        (e = null));
    }
    ((l.setOfflineThreadMeta = s),
      (l.getOfflineThreadMetaPreview = u),
      (l.getPeerWatermark = c),
      (l.resetThreadMeta = d));
  },
  98,
);
