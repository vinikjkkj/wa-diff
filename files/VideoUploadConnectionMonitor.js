__d(
  "VideoUploadConnectionMonitor",
  [
    "FBLogger",
    "Network",
    "VideoUploadFeatureDetector",
    "cr:909282",
    "debounce",
    "mixin",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("mixin")(n("cr:909282")),
      s = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this) || this),
            (t.$VideoUploadConnectionMonitor$p_1 = !1),
            (t.$VideoUploadConnectionMonitor$p_2 = []),
            (t.$VideoUploadConnectionMonitor$p_3 = !1),
            (t.$VideoUploadConnectionMonitor$p_4 = !0),
            (t.$VideoUploadConnectionMonitor$p_5 = r("debounce")(function () {
              t.$VideoUploadConnectionMonitor$p_6(!1);
            }, 2e3)),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.notifyStart = function () {
            var e = this;
            this.$VideoUploadConnectionMonitor$p_3 ||
              (this.$VideoUploadConnectionMonitor$p_2.length === 0 &&
                (this.$VideoUploadConnectionMonitor$p_2.push(
                  r("Network").addListener("online", function () {
                    e.$VideoUploadConnectionMonitor$p_6(!0);
                  }),
                ),
                this.$VideoUploadConnectionMonitor$p_2.push(
                  r("Network").addListener("offline", function () {
                    e.$VideoUploadConnectionMonitor$p_1
                      ? e.$VideoUploadConnectionMonitor$p_5()
                      : (e.$VideoUploadConnectionMonitor$p_5.reset(),
                        r("setTimeout")(
                          e.$VideoUploadConnectionMonitor$p_5,
                          2e3,
                        ));
                  }),
                )),
              (this.$VideoUploadConnectionMonitor$p_3 = !0));
          }),
          (n.notifyProgress = function (t) {
            this.$VideoUploadConnectionMonitor$p_3 &&
              t &&
              o("VideoUploadFeatureDetector").supportsFullProgress() &&
              ((this.$VideoUploadConnectionMonitor$p_1 = !0),
              t.total != null && t.loaded === t.total
                ? this.$VideoUploadConnectionMonitor$p_5.reset()
                : this.$VideoUploadConnectionMonitor$p_5());
          }),
          (n.notifySuccess = function () {
            this.$VideoUploadConnectionMonitor$p_3 &&
              (this.reset(), this.$VideoUploadConnectionMonitor$p_6(!0));
          }),
          (n.notifyTransportError = function () {
            this.$VideoUploadConnectionMonitor$p_3 &&
              ((this.$VideoUploadConnectionMonitor$p_3 = !1),
              this.$VideoUploadConnectionMonitor$p_6(!1));
          }),
          (n.notifyError = function () {
            this.$VideoUploadConnectionMonitor$p_3 &&
              (this.reset(), this.$VideoUploadConnectionMonitor$p_6(!0));
          }),
          (n.isOnline = function () {
            return this.$VideoUploadConnectionMonitor$p_4;
          }),
          (n.reset = function () {
            for (; this.$VideoUploadConnectionMonitor$p_2.length; ) {
              var e;
              (e = this.$VideoUploadConnectionMonitor$p_2.pop()) == null ||
                e.remove();
            }
            (this.$VideoUploadConnectionMonitor$p_5.reset(),
              (this.$VideoUploadConnectionMonitor$p_3 = !1));
          }),
          (n.$VideoUploadConnectionMonitor$p_6 = function (t) {
            (this.$VideoUploadConnectionMonitor$p_5.reset(),
              this.$VideoUploadConnectionMonitor$p_4 !== t &&
                ((this.$VideoUploadConnectionMonitor$p_4 = t),
                this.$VideoUploadConnectionMonitor$p_4
                  ? this.inform("online")
                  : this.inform("offline")));
          }),
          t
        );
      })(e);
    l.default = s;
  },
  98,
);
