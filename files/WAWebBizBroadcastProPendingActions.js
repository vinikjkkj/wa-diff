__d(
  "WAWebBizBroadcastProPendingActions",
  [
    "$InternalEnum",
    "WAWebEventEmitter",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        UnsubscribeRecipients: "unsubscribe_recipients",
        DownloadSubscribedRecipients: "download_subscribed_recipients",
        RemoveFromDataSharing: "remove_from_data_sharing",
      }),
      s = "bb_pro_pending_customer_base_actions_change",
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.handleChange = function () {
            this.trigger(s);
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      c = new u();
    function d() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.BB_PRO_PENDING_CUSTOMER_BASE_ACTIONS,
      );
      return e instanceof Array
        ? e.filter(function (e) {
            return typeof e == "string";
          })
        : [];
    }
    function m() {
      var t = new Set();
      return (
        d().forEach(function (n) {
          var r = e.cast(n);
          r != null && t.add(r);
        }),
        t
      );
    }
    function p(e) {
      if (e.length !== 0) {
        var t = new Set(d());
        (e.forEach(function (e) {
          var n = e.action,
            r = e.pending;
          r ? t.add(n) : t.delete(n);
        }),
          r("WAWebUserPrefsStore").set(
            o("WAWebUserPrefsKeys").KEYS.BB_PRO_PENDING_CUSTOMER_BASE_ACTIONS,
            Array.from(t),
          ),
          c.handleChange());
      }
    }
    ((l.BizBroadcastProCustomerBaseAction = e),
      (l.CHANGE_EVENT = s),
      (l.PendingCustomerBaseActionsEvent = c),
      (l.getPendingCustomerBaseActions = m),
      (l.updatePendingCustomerBaseActions = p));
  },
  98,
);
