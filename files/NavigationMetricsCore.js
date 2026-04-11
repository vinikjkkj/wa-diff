__d(
  "NavigationMetricsCore",
  ["mixInEventEmitter", "pageID"],
  function (t, n, r, o, a, i, l) {
    var e = {
        NAVIGATION_DONE: "NAVIGATION_DONE",
        EVENT_OCCURRED: "EVENT_OCCURRED",
      },
      s = {
        tti: "tti",
        e2e: "e2e",
        all_pagelets_loaded: "all_pagelets_loaded",
        all_pagelets_displayed: "all_pagelets_displayed",
      },
      u = 0,
      c = {},
      d = (function () {
        function t() {
          ((this.eventTimings = {
            tti: null,
            e2e: null,
            all_pagelets_loaded: null,
            all_pagelets_displayed: null,
          }),
            (this.lid = r("pageID") + ":" + u++),
            (this.extras = {}));
        }
        var n = t.prototype;
        return (
          (n.getLID = function () {
            return this.lid;
          }),
          (n.setRequestStart = function (t) {
            return ((this.start = t), this);
          }),
          (n.setTTI = function (t) {
            return ((this.eventTimings.tti = t), this.$1(s.tti, t), this);
          }),
          (n.setE2E = function (t) {
            return ((this.eventTimings.e2e = t), this.$1(s.e2e, t), this);
          }),
          (n.setExtra = function (t, n) {
            return ((this.extras[t] = n), this);
          }),
          (n.setDisplayDone = function (t) {
            return (
              (this.eventTimings.all_pagelets_displayed = t),
              this.setExtra("all_pagelets_displayed", t),
              this.$1(s.all_pagelets_displayed, t),
              this
            );
          }),
          (n.setAllPageletsLoaded = function (t) {
            return (
              (this.eventTimings.all_pagelets_loaded = t),
              this.setExtra("all_pagelets_loaded", t),
              this.$1(s.all_pagelets_loaded, t),
              this
            );
          }),
          (n.setServerLID = function (t) {
            return ((this.serverLID = t), this);
          }),
          (n.$1 = function (n, r) {
            var t = {};
            c != null &&
              this.serverLID != null &&
              c[this.serverLID] != null &&
              (t = c[this.serverLID]);
            var o = babelHelpers.extends({}, t, { event: n, timestamp: r });
            return (m.emitAndHold(e.EVENT_OCCURRED, this.serverLID, o), this);
          }),
          (n.doneNavigation = function () {
            var t = babelHelpers.extends(
              { start: this.start, extras: this.extras },
              this.eventTimings,
            );
            if (this.serverLID && c[this.serverLID]) {
              var n = this.serverLID;
              (Object.assign(t, c[n]), delete c[n]);
            }
            m.emitAndHold(e.NAVIGATION_DONE, this.lid, t);
          }),
          t
        );
      })(),
      m = {
        Events: e,
        postPagelet: function (t, n, r) {},
        siteInit: function (t) {
          t(d);
        },
        setPage: function (t) {
          t.serverLID &&
            (c[t.serverLID] = {
              page: t.page,
              pageType: t.page_type,
              pageURI: t.page_uri,
              serverLID: t.serverLID,
            });
        },
        getFullPageLoadLid: function () {
          throw new Error("getFullPageLoadLid is not implemented on this site");
        },
      };
    r("mixInEventEmitter")(m, e);
    var p = m;
    l.default = p;
  },
  98,
);
