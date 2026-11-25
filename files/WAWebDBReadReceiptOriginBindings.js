__d(
  "WAWebDBReadReceiptOriginBindings",
  ["WAWebDBMsgUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.pendingReadReceiptOrigin;
      return t != null && c(t, e) ? t : null;
    }
    function s(t, n) {
      var r = t != null ? e(t) : null;
      return r != null && c(r, n) ? r : null;
    }
    function u(e, t) {
      var n, r;
      return (
        t != null &&
        e.type === t.type &&
        e.pendingReadReceipt === t.pendingReadReceipt &&
        ((n = e.latestEditMsgKey) != null ? n : null) ===
          ((r = t.latestEditMsgKey) != null ? r : null)
      );
    }
    function c(e, t) {
      return (
        e.pendingType === t.pendingReadReceipt && e.latestEditMsgKey === d(t)
      );
    }
    function d(e) {
      var t;
      return e.pendingReadReceipt ===
        o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit &&
        (t = e.latestEditMsgKey) != null
        ? t
        : null;
    }
    ((l.getCurrentPendingReadReceiptOrigin = e),
      (l.getCarriedPendingReadReceiptOrigin = s),
      (l.isPendingReadReceiptTargetUnchanged = u),
      (l.getBoundLatestEditMsgKey = d));
  },
  98,
);
