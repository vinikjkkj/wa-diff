__d(
  "AdsICPlacement",
  [
    "AGPWaistMessagesSitevarConfig.experimental",
    "AHGLogUtils",
    "AYMTClientSideLogging",
    "AdsICAGPExperimentFilters",
    "AdsICFilterIfFailsQE",
    "immutable",
    "isTruthy",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ads_manager_meta_pro_pnp_entry_point",
      s = (function () {
        function t(e, t, n) {
          (n === void 0 && (n = []),
            (this.$1 = e),
            (this.$2 = t),
            (this.__visibleMessages = r("immutable").OrderedSet()),
            (this.__visibleMessagesInMessageGroups = r("immutable")
              .Map()
              .withMutations(function (e) {
                n.forEach(function (t) {
                  return e.set(t, r("immutable").OrderedSet());
                });
              })),
            (this.$5 = new Map()),
            (this.$3 = new (r("AdsICFilterIfFailsQE"))()),
            (this.$4 = new (r("AdsICAGPExperimentFilters"))()));
        }
        var n = t.prototype;
        return (
          (n.getName = function () {
            return this.$1;
          }),
          (n.__deleteVisibleMessage = function (t, n) {
            ((this.__visibleMessages = this.__visibleMessages.delete(t)),
              n != null &&
                (this.__visibleMessagesInMessageGroups =
                  this.__visibleMessagesInMessageGroups.set(
                    n,
                    r("nullthrows")(
                      this.__visibleMessagesInMessageGroups.get(n),
                    ).delete(t),
                  )));
          }),
          (n.__addVisibleMessage = function (t) {
            var e = t.getID();
            this.__visibleMessages = this.__visibleMessages.add(e);
            var n = t.getMessageGroup();
            n != null &&
              (this.__visibleMessagesInMessageGroups =
                this.__visibleMessagesInMessageGroups.set(
                  n,
                  r("nullthrows")(
                    this.__visibleMessagesInMessageGroups.get(n),
                  ).add(e),
                ));
          }),
          (n.__hideUnknownMessages = function (t) {
            var e = this,
              n = this.__visibleMessages.subtract(t.getMessageIDs());
            n.forEach(function (n) {
              var r,
                o = t.getMessage(n);
              (o && (r = o.getMessageGroup()), e.__deleteVisibleMessage(n, r));
            });
          }),
          (n.updateVisibleMessages = function (n, o, a) {
            (a === void 0 && (a = !0), this.__hideUnknownMessages(n));
            var t = this.__applyAllRules(n, o);
            return (
              (t = t.sortByScore()),
              (t = this.runGovernanceFiltering(t)),
              r("justknobx")._("4608") &&
                t.getAll().size > 1 &&
                t.hasMessage(e) &&
                ((t = t.removeMessage(e)),
                this.$5.set(e, "MetaProPnpEntryPointNuxNotUnique")),
              this.__customLogicForShowingMessage(t, o, a),
              this.__visibleMessages
            );
          }),
          (n.runGovernanceFiltering = function (t) {
            return (r("justknobx")._("4950"), t);
          }),
          (n.getInvisibleReason = function (t) {
            return this.$5.get(t);
          }),
          (n.__customLogicForShowingMessage = function (t, n, r) {
            var e = this;
            t.getAll().forEach(function (t) {
              e.__checkQEAndShowMessage(t, n, r);
            });
          }),
          (n.__applyAllRules = function (t, n) {
            var e = this,
              r,
              o = t;
            return (
              this.$2.forEach(function (a) {
                ((r = o.filter(function (e) {
                  return a.filter(e, n, t);
                })),
                  o.getAll().forEach(function (t) {
                    r.hasMessage(t.getID()) || e.__updateInvalidMessage(a, t);
                  }),
                  (o = r),
                  r.getAll().isEmpty());
              }),
              o
            );
          }),
          (n.__updateInvalidMessage = function (t, n) {
            var e = t.getInvisibleReason();
            (r("isTruthy")(e) && this.$5.set(n.getID(), e),
              t.shouldHideMessageIfFailsRule() && this.$6(n));
          }),
          (n.__checkQEAndShowMessage = function (t, n, r) {
            if (
              this.getName() === "CAMPAIGN_MODAL" ||
              this.getName() === "GLOBAL_BANNER" ||
              this.getName() === "CAMPAIGN_MEGAPHONE"
            ) {
              this.__showMessage(t, !1);
              return;
            }
            if (!this.$3.filter(t, n)) {
              this.__updateInvalidMessage(this.$3, t);
              return;
            }
            if (r) {
              if (!this.$4.filter(t, n)) {
                (this.__updateInvalidMessage(this.$4, t),
                  this.__showMessage(t, !0));
                return;
              }
              (this.$5.delete(t.getID()), this.__showMessage(t, !1));
            }
          }),
          (n.__addNewVisibleMessageIfEligible = function (t, n) {
            return n ||
              this.__visibleMessages.has(t.getID()) ||
              (r("justknobx")._("4950") && !this.__visibleMessages.isEmpty())
              ? !1
              : (this.__addVisibleMessage(t), !0);
          }),
          (n.__showMessage = function (t, n) {
            var e = this.__addNewVisibleMessageIfEligible(t, n),
              a = r("AGPWaistMessagesSitevarConfig.experimental").messages,
              i =
                a.find(function (e) {
                  return e.messageID == t.getID();
                }) != null;
            return (
              !i &&
                e &&
                t.aymtData &&
                o("AYMTClientSideLogging").logImpressionNew(t.aymtData),
              e
            );
          }),
          (n.$6 = function (t) {
            this.__visibleMessages.has(t.getID()) &&
              (o("AHGLogUtils").logCloseMessage(
                t.getFormat(),
                t.getID(),
                this.getName(),
                t.getMessageGroup(),
              ),
              this.__deleteVisibleMessage(t.getID()));
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
