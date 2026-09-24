__d(
  "WAWebCTWASuggestionCollection",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebCTWASuggestionModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.hasLoadedFromStorage = !1),
            (e.$CTWASuggestionCollectionImpl$p_1 = !1),
            (e.$CTWASuggestionCollectionImpl$p_2 = null),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.markLoadedFromStorage = function () {
            (this.cancelStorageWait(),
              (this.hasLoadedFromStorage = !0),
              this.trigger("loaded_from_storage"));
          }),
          (r.stopWaitingForStorageAfter = function (n) {
            var t = this;
            this.isDoneWaitingForStorage() ||
              this.$CTWASuggestionCollectionImpl$p_2 != null ||
              (this.$CTWASuggestionCollectionImpl$p_2 = self.setTimeout(
                function () {
                  ((t.$CTWASuggestionCollectionImpl$p_2 = null),
                    (t.$CTWASuggestionCollectionImpl$p_1 = !0),
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "CTWASuggestionCollection: stored suggestions did not load within ",
                          " ms",
                        ])),
                      n,
                    ),
                    t.trigger("stopped_waiting_for_storage"));
                },
                n,
              ));
          }),
          (r.isDoneWaitingForStorage = function () {
            return (
              this.hasLoadedFromStorage ||
              this.$CTWASuggestionCollectionImpl$p_1
            );
          }),
          (r.cancelStorageWait = function () {
            this.$CTWASuggestionCollectionImpl$p_2 != null &&
              (self.clearTimeout(this.$CTWASuggestionCollectionImpl$p_2),
              (this.$CTWASuggestionCollectionImpl$p_2 = null));
          }),
          (r.delete = function () {
            (t.prototype.delete.call(this),
              this.cancelStorageWait(),
              (this.hasLoadedFromStorage = !1),
              (this.$CTWASuggestionCollectionImpl$p_1 = !1));
          }),
          (r.findFirstNotExpired = function () {
            return this.findFirst(function (e) {
              return o("WATimeUtils").isInFuture(e.suggestion.expiresAt);
            });
          }),
          (r.removeInteracted = function (t) {
            this.remove(t);
          }),
          (r.updateTrackingNuxData = function (t, n) {
            var e = this.get(t);
            e != null &&
              e.set(
                "suggestion",
                babelHelpers.extends({}, e.suggestion, { nuxData: n }),
              );
          }),
          (r.updateTrackingCoolOffData = function (t, n) {
            var e = this.get(t);
            e != null &&
              e.set(
                "suggestion",
                babelHelpers.extends({}, e.suggestion, { coolOffData: n }),
              );
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebCTWASuggestionModel").CTWASuggestionModel;
    var u = new s();
    l.CTWASuggestionCollection = u;
  },
  98,
);
