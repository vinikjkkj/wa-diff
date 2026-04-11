__d(
  "WAWebNewsletterTabPulseState",
  [
    "WAWebNavBarTypes",
    "WAWebNotificationHelpers",
    "WAWebSideNavButtonsActivityModel",
    "WAWebTypedEventEmitter",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 8e3,
      s = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.$NewsletterTabPulseStateImpl$p_1 = !1),
            (e.$NewsletterTabPulseStateImpl$p_2 = !1),
            (e.$NewsletterTabPulseStateImpl$p_3 = null),
            document.addEventListener("visibilitychange", function () {
              !document.hidden &&
                e.$NewsletterTabPulseStateImpl$p_2 &&
                ((e.$NewsletterTabPulseStateImpl$p_2 = !1),
                e.$NewsletterTabPulseStateImpl$p_4());
            }),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getIsPulsing = function () {
            return this.$NewsletterTabPulseStateImpl$p_1;
          }),
          (r.triggerPulse = function () {
            var e = o("WAWebSideNavButtonsActivityModel").getLastActiveButton();
            e === o("WAWebNavBarTypes").NavBarItems.Newsletters ||
              e === o("WAWebNavBarTypes").NavBarItems.Updates ||
              o("WAWebNotificationHelpers").appIsActive() ||
              (this.$NewsletterTabPulseStateImpl$p_2 = !0);
          }),
          (r.$NewsletterTabPulseStateImpl$p_4 = function () {
            var t = this;
            (this.$NewsletterTabPulseStateImpl$p_3 != null &&
              window.clearTimeout(this.$NewsletterTabPulseStateImpl$p_3),
              (this.$NewsletterTabPulseStateImpl$p_1 = !0),
              this.trigger("pulseChange"),
              (this.$NewsletterTabPulseStateImpl$p_3 = window.setTimeout(
                function () {
                  ((t.$NewsletterTabPulseStateImpl$p_1 = !1),
                    (t.$NewsletterTabPulseStateImpl$p_3 = null),
                    t.trigger("pulseChange"));
                },
                e,
              )));
          }),
          (r.cancelPulse = function () {
            ((this.$NewsletterTabPulseStateImpl$p_2 = !1),
              this.$NewsletterTabPulseStateImpl$p_3 != null &&
                (window.clearTimeout(this.$NewsletterTabPulseStateImpl$p_3),
                (this.$NewsletterTabPulseStateImpl$p_3 = null)),
              this.$NewsletterTabPulseStateImpl$p_1 &&
                ((this.$NewsletterTabPulseStateImpl$p_1 = !1),
                this.trigger("pulseChange")));
          }),
          n
        );
      })(r("WAWebTypedEventEmitter")),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
